import { d as private_env } from './shared-server-BfUoNEXY.js';
import { a as PUBLIC_MINIO_ENDPOINT, b as PUBLIC_MINIO_PORT, c as PUBLIC_MINIO_USE_SSL, M as MINIO_BASE_URL } from './client3-CIDcnctW.js';
import { Client, CopyConditions } from 'minio';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { e as error } from './index-BHX467Gw.js';
import path from 'path';

const minio = new Client({
  endPoint: PUBLIC_MINIO_ENDPOINT,
  port: Number.parseInt(PUBLIC_MINIO_PORT, 10),
  useSSL: PUBLIC_MINIO_USE_SSL === "true",
  accessKey: private_env.MINIO_ROOT_USER || "",
  secretKey: private_env.MINIO_ROOT_PASSWORD || ""
});
const fileExists = async (bucket, fileName) => {
  try {
    await minio.statObject(bucket, fileName);
    return true;
  } catch {
    return false;
  }
};
const isDir = (fileName) => {
  return fileName.charAt(fileName.length - 1) === "/";
};
const getFilesInFolder = (bucket, prefix, recursive) => {
  return new Promise((resolve, reject) => {
    const stream = minio.listObjectsV2(bucket, prefix, recursive);
    const files = [];
    stream.on("data", (obj) => {
      if (obj.name) {
        files.push({
          id: obj.name,
          name: path.basename(obj.name),
          modDate: obj.lastModified,
          size: obj.size,
          thumbnailUrl: `${MINIO_BASE_URL}${bucket}/${obj.name}`
        });
      }
      if (obj.prefix) {
        files.push({
          id: obj.prefix,
          name: path.basename(obj.prefix),
          isDir: true
        });
      }
    });
    stream.on("error", reject);
    stream.on("end", () => {
      resolve(files);
    });
  });
};
const getFilesInBucket = async (user, bucket, prefix, recursive = false) => {
  if (!bucket) {
    return Promise.resolve([]);
  }
  authorize(apiNames.FILES.BUCKET(bucket).READ, user);
  const basePath = "";
  const files = (await getFilesInFolder(
    bucket,
    prefix !== "/" ? basePath + prefix : basePath,
    recursive
  )).filter((file) => file.name !== "_folder-preserver");
  return files;
};
const ONE_HOUR_IN_SECONDS = 60 * 60;
const getPresignedPutUrl = async (user, bucket, fileName, allowOverwrite = false) => {
  authorize(apiNames.FILES.BUCKET(bucket).CREATE, user);
  if (fileName === "") throw error(400, "File name cannot be empty");
  if (!allowOverwrite && await fileExists(bucket, fileName)) {
    throw error(409, `File ${fileName} already exists`);
  }
  const url = await minio.presignedPutObject(
    bucket,
    fileName,
    ONE_HOUR_IN_SECONDS
  );
  return url;
};
const removeFilesWithoutAccessCheck = async (user, bucket, fileNames) => {
  const deleted = [];
  await Promise.all(
    fileNames.map(async (fileName) => {
      if (isDir(fileName)) {
        const filesInFolder = await getFilesInBucket(user, bucket, fileName);
        if (filesInFolder) {
          await removeFilesWithoutAccessCheck(
            user,
            bucket,
            filesInFolder.map((file) => file.id)
          );
        }
        deleted.push({
          id: fileName,
          name: path.basename(fileName)
        });
      } else {
        await minio.removeObject(bucket, fileName);
        deleted.push({
          id: fileName,
          name: path.basename(fileName)
        });
      }
    })
  );
  return deleted;
};
const removeObjects = async (user, bucket, fileNames) => {
  authorize(apiNames.FILES.BUCKET(bucket).DELETE, user);
  await removeFilesWithoutAccessCheck(user, bucket, fileNames);
};
const moveObject = async (user, bucket, fileNames, newFolder) => {
  authorize(apiNames.FILES.BUCKET(bucket).UPDATE, user);
  const moved = [];
  await Promise.all(
    fileNames.map(async (fileName) => {
      const basename = path.basename(fileName);
      if (isDir(fileName)) {
        const filesInFolder = await getFilesInBucket(user, bucket, fileName);
        if (filesInFolder) {
          const recursivedMoved = await moveObject(
            user,
            bucket,
            filesInFolder.map((file) => file.id),
            `${newFolder + basename}/`
          );
          const FileChange = {
            file: {
              id: `${newFolder + basename}/`,
              name: basename,
              isDir: true
            },
            oldFile: { id: fileName, name: basename, isDir: true }
          };
          moved.push(FileChange);
          moved.push(...recursivedMoved);
        }
      } else {
        const newFileName = path.join(newFolder, basename);
        const objectStats = await minio.statObject(bucket, fileName);
        if (await fileExists(bucket, newFileName)) {
          return;
        }
        const oldFile = {
          id: fileName,
          name: path.basename(fileName),
          modDate: objectStats.lastModified,
          size: objectStats.size,
          thumbnailUrl: `${MINIO_BASE_URL}${bucket}/${fileName}`
        };
        const newFile = {
          id: newFileName,
          name: path.basename(newFileName),
          size: objectStats.size,
          thumbnailUrl: `${MINIO_BASE_URL}${bucket}/${newFileName}`
        };
        await minio.copyObject(
          bucket,
          newFileName,
          `/${bucket}/${fileName}`,
          new CopyConditions()
        );
        await minio.removeObject(bucket, fileName);
        const FileChange = {
          file: newFile,
          oldFile
        };
        moved.push(FileChange);
      }
    })
  );
  return moved;
};
const renameObject = async (user, bucket, fileName, newFileName) => {
  authorize(apiNames.FILES.BUCKET(bucket).UPDATE, user);
  if (await fileExists(bucket, newFileName)) {
    throw error(409, `File ${newFileName} already exists`);
  }
  const dirname = path.dirname(fileName);
  if (isDir(fileName)) {
    const filesInFolder = await getFilesInBucket(user, bucket, fileName);
    if (filesInFolder) {
      await moveObject(
        user,
        bucket,
        filesInFolder.map((file) => file.id),
        `${newFileName}/`
      );
    }
    return void 0;
  }
  const newFileId = path.join(`${dirname}/`, newFileName);
  const objectStats = await minio.statObject(bucket, fileName);
  if (await fileExists(bucket, newFileId)) {
    return void 0;
  }
  const oldFile = {
    id: fileName,
    name: path.basename(fileName),
    modDate: objectStats.lastModified,
    size: objectStats.size,
    thumbnailUrl: `${MINIO_BASE_URL}${bucket}/${fileName}`
  };
  const newFile = {
    id: newFileId,
    name: path.basename(newFileId),
    size: objectStats.size,
    thumbnailUrl: `${MINIO_BASE_URL}${bucket}/${newFileId}`
  };
  await minio.copyObject(
    bucket,
    newFileName,
    `/${bucket}/${fileName}`,
    new CopyConditions()
  );
  await minio.removeObject(bucket, fileName);
  const FileChange = {
    file: newFile,
    oldFile
  };
  return FileChange;
};
const fileHandler = {
  getInBucket: getFilesInBucket,
  getPresignedPutUrl,
  remove: removeObjects,
  move: moveObject,
  rename: renameObject
};

export { fileHandler as f };
//# sourceMappingURL=fileHandler-BJyM8X80.js.map
