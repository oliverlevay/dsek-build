import { f as fileHandler } from './fileHandler-BJyM8X80.js';
import { z as members_errors_couldntUploadFile } from './messages-D8OfyZiq.js';
import sharp from 'sharp';
import { p as prepareNameForFilesystem, g as getNameOfFile, i as isFileImage } from './utils2-CdAbGRJv.js';
import { M as MINIO_BASE_URL } from './client3-CIDcnctW.js';

const compressImage = async (image, options) => await sharp(await image.arrayBuffer()).rotate().resize({
  fit: "cover",
  withoutEnlargement: true,
  ...options?.resize
}).webp(options?.webp).toBuffer();
const uploadFile = async (user, file, prefix, bucket, name, compressionOptions) => {
  let formattedName = prepareNameForFilesystem(
    name ?? getNameOfFile(file.name),
    file.name
  );
  const filePath = `${prefix}/${formattedName}`;
  let dataToUpload = file;
  if (isFileImage(file) && compressionOptions !== false) {
    try {
      dataToUpload = await compressImage(file, compressionOptions);
      formattedName = prepareNameForFilesystem(
        name ?? getNameOfFile(file.name),
        file.name,
        "webp"
      );
    } catch (e) {
      const errMsg = e instanceof Error ? e.message : String(e);
      throw new Error(`Could not compress image: ${errMsg}`);
    }
  }
  try {
    const putUrl = await fileHandler.getPresignedPutUrl(
      user,
      bucket,
      filePath,
      true
    );
    const res = await fetch(putUrl, {
      method: "PUT",
      body: dataToUpload
    });
    if (!res.ok)
      throw new Error(
        `${members_errors_couldntUploadFile()}: ${await res.text()}`
      );
    return `${MINIO_BASE_URL}${bucket}/${filePath}`;
  } catch (e) {
    console.error(e);
    const errMsg = e instanceof Error ? e.message : String(e);
    throw new Error(`${members_errors_couldntUploadFile()}: ${errMsg}`);
  }
};

export { uploadFile as u };
//# sourceMappingURL=uploadFiles-C03MzR76.js.map
