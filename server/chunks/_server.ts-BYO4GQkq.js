import { Meilisearch } from 'meilisearch';
import { d as private_env } from './shared-server-BfUoNEXY.js';

const meilisearch = new Meilisearch({
  host: private_env.MEILISEARCH_HOST,
  apiKey: private_env.MEILISEARCH_MASTER_KEY,
  requestConfig: {
    headers: {
      Authorization: `Bearer ${private_env.MEILISEARCH_MASTER_KEY}`
    }
  }
});
function getFederatedWeight(index) {
  switch (index) {
    case "members":
      return 5;
    case "events":
      return 1;
    case "articles":
      return 1;
    case "positions":
      return 5;
    case "songs":
      return 1;
    default:
      return 1;
  }
}
function getSearchableAttributes(index, language) {
  switch (index) {
    case "members": {
      const res = [
        "firstName",
        "lastName",
        "nickname",
        "studentId",
        "fullName"
      ];
      return res;
    }
    case "events": {
      let res = [
        "title",
        "description"
      ];
      if (language === "en") {
        res = ["titleEn", "descriptionEn"];
      }
      return res;
    }
    case "articles": {
      let res = ["header", "body"];
      if (language === "en") {
        res = ["headerEn", "bodyEn"];
      }
      return res;
    }
    case "positions": {
      let res = [
        "name",
        "description",
        "committeeName",
        "dsekId"
      ];
      if (language === "en") {
        res = ["nameEn", "descriptionEn", "committeeNameEn", "dsekId"];
      }
      return res;
    }
    case "songs": {
      const res = [
        "title",
        "lyrics",
        "melody",
        "category"
      ];
      return res;
    }
  }
}
const GET = async ({ url, locals }) => {
  const query = url.searchParams.get("query");
  if (!query) {
    return new Response("Missing query", { status: 400 });
  }
  const indexes = JSON.parse(url.searchParams.get("indexes") ?? "[]");
  if (!Array.isArray(indexes)) {
    return new Response("Invalid indexes, please provide an array of strings", {
      status: 400
    });
  }
  if (indexes.length === 0) {
    return new Response("Missing type", { status: 400 });
  }
  for (const t of indexes) {
    if (typeof t !== "string") {
      return new Response(
        "Invalid indexes, please provide an array of strings",
        {
          status: 400
        }
      );
    }
  }
  let limit = Number.parseInt(url.searchParams.get("limit") ?? "20");
  if (limit === -1) {
    limit = 20;
  }
  const language = locals.language;
  const response = await meilisearch.multiSearch({
    queries: indexes.map((index) => ({
      indexUid: index,
      q: query,
      attributesToSearchOn: getSearchableAttributes(index, language),
      federationOptions: { weight: getFederatedWeight(index) },
      showRankingScoreDetails: true
    })),
    federation: {}
  });
  const array = [];
  let i = 0;
  while (array.length < limit && i < response.hits.length) {
    const hit = response.hits[i];
    if (hit != null) {
      array.push(hit);
    }
    i++;
  }
  return new Response(JSON.stringify(array), {
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export { GET };
//# sourceMappingURL=_server.ts-BYO4GQkq.js.map
