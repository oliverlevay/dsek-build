import { r as redirect } from './redirect-A1ZqWr7F.js';
import { af as members_errors_meNotFound } from './messages-D8OfyZiq.js';
import { e as error } from './index-BHX467Gw.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';

const load = async ({ locals }) => {
  const { user } = locals;
  if (!user?.studentId) {
    throw error(401, members_errors_meNotFound());
  }
  throw redirect(302, `/members/${user.studentId}`);
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 77;
const server_id = "src/routes/(app)/members/me/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=77-oNl76UsX.js.map
