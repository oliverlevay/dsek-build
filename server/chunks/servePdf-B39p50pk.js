import { e as error } from './index-BHX467Gw.js';

function getGitHubUrl(pathName) {
  return new URL(pathName, "https://github.com/Dsek-LTH/");
}
async function servePdf(pathName) {
  if (/^[\w/.-]+$/.test(pathName)) {
    const url = getGitHubUrl(pathName);
    const fetchResponse = await fetch(url);
    if (!fetchResponse.ok) {
      throw error(
        fetchResponse.status,
        // This is very likely if !fetchResponse.ok
        fetchResponse.statusText
      );
    }
    const contentType = fetchResponse.headers.get("content-type");
    if (!contentType?.startsWith("application/octet-stream")) {
      throw error(404, "Not Found");
    }
    const buffer = await fetchResponse.arrayBuffer();
    const fileName = pathName.split("/").pop();
    const headers = {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${fileName}"`
    };
    return new Response(buffer, {
      headers,
      status: 200
    });
  } else {
    throw error(400, "Bad Request");
  }
}
function getPdfApiUrl(pathName) {
  return `/api/pdf/${pathName}`;
}

export { getPdfApiUrl as g, servePdf as s };
//# sourceMappingURL=servePdf-B39p50pk.js.map
