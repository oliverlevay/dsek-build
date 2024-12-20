import { e as error } from './index-BHX467Gw.js';
import { e as errors_missingPermissions } from './messages-D8OfyZiq.js';

const isAuthorized = (apiName, user) => {
  if (user?.policies.includes(apiName)) return true;
  return false;
};
const authorize = (apiName, user) => {
  const apiNames = Array.isArray(apiName) ? apiName : [apiName];
  for (const name of apiNames) {
    if (!isAuthorized(name, user)) {
      throw error(403, `${errors_missingPermissions()} ${name}`);
    }
  }
};
const getDerivedRoles = (groupList, signedIn = false, classYear = void 0) => {
  const splitGroups = /* @__PURE__ */ new Set();
  groupList?.forEach(
    (group) => group.split(".").forEach((_, i, arr) => splitGroups.add(arr.slice(0, i + 1).join(".")))
  );
  splitGroups.add("*");
  if (groupList?.length || signedIn) splitGroups.add("_");
  if (classYear && classYear === (/* @__PURE__ */ new Date()).getFullYear())
    splitGroups.add("nolla");
  return [...splitGroups];
};

export { authorize as a, getDerivedRoles as g, isAuthorized as i };
//# sourceMappingURL=authorization-DvGst16H.js.map
