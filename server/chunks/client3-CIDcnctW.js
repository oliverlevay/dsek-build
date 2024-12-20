const PUBLIC_MINIO_ENDPOINT = "minio.api.sandbox.dsek.se";
const PUBLIC_MINIO_PORT = "443";
const PUBLIC_MINIO_USE_SSL = "true";
const PUBLIC_BUCKETS_DOCUMENTS = "documents";
const PUBLIC_BUCKETS_FILES = "files";
const PUBLIC_BUCKETS_MEMBERS = "members";

const MINIO_BASE_URL = (() => {
  return `https://${PUBLIC_MINIO_ENDPOINT}/`;
})();
const getFileUrl = (imageUrl) => {
  if (!imageUrl) return imageUrl;
  if (imageUrl.startsWith("minio/")) {
    return `${MINIO_BASE_URL}${imageUrl.substring(6)}`;
  }
  return imageUrl;
};

export { MINIO_BASE_URL as M, PUBLIC_BUCKETS_FILES as P, PUBLIC_MINIO_ENDPOINT as a, PUBLIC_MINIO_PORT as b, PUBLIC_MINIO_USE_SSL as c, PUBLIC_BUCKETS_DOCUMENTS as d, PUBLIC_BUCKETS_MEMBERS as e, getFileUrl as g };
//# sourceMappingURL=client3-CIDcnctW.js.map
