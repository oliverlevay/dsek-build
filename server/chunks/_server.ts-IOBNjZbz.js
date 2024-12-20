import { j as json } from './index-BHX467Gw.js';
import dayjs from 'dayjs';

const cacheDuration = 600;
let commitCount;
let latestCommit;
let lastFetch;
async function GET() {
  const now = dayjs();
  if (!lastFetch || lastFetch.add(cacheDuration, "s").isBefore(now)) {
    lastFetch = now;
    const commit = await fetch(
      "https://api.github.com/repos/dsek-lth/web/commits?per_page=1"
    );
    const regex = /\d*(?=>; rel="last")/;
    const regexRes = regex.exec(commit.headers.get("link") ?? "");
    commitCount = regexRes ? regexRes[0] : "0";
    const commitData = (await commit.json())[0];
    if (!commitData) {
      commitCount = "not found";
      latestCommit = {
        author: "Not Found",
        message: "Not found",
        avatarUrl: "https://avatars.githubusercontent.com/u/15785880?v=4",
        url: "",
        date: now.toISOString()
      };
    } else {
      latestCommit = {
        author: commitData.author.login,
        message: commitData.commit.message,
        avatarUrl: commitData.author.avatar_url,
        url: commitData.html_url,
        date: commitData.commit.committer.date
      };
    }
  }
  return json({ commitCount, latestCommit });
}

export { GET };
//# sourceMappingURL=_server.ts-IOBNjZbz.js.map
