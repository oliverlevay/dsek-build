const isFileImage = (file) => file.type.split("/")[0] === "image";
const getNameOfFile = (fileName) => {
  const dotIndex = fileName.lastIndexOf(".");
  if (dotIndex < 0) return fileName;
  return fileName.slice(0, dotIndex);
};
const getExtensionOfFile = (fileName) => {
  const dotIndex = fileName.lastIndexOf(".");
  if (dotIndex < 0) return "";
  return fileName.slice(dotIndex + 1);
};
const prepareNameForFilesystem = (name, fileName, extension = void 0) => (
  // replaces spaces with "_" and removes all special characters
  `${name.replace(/\s/g, "_").replace(/[^a-zA-Z0-9_]/g, "")}.${extension ?? getExtensionOfFile(fileName)}`
);

export { getNameOfFile as g, isFileImage as i, prepareNameForFilesystem as p };
//# sourceMappingURL=utils2-CdAbGRJv.js.map
