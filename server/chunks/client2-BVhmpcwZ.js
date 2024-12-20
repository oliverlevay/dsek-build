import { b as base } from './paths-CYDIOyak.js';

async function signIn(providerId, options, authorizationParams) {
  const { callbackUrl = window.location.href, redirect = true } = {};
  const isEmail = providerId === "email";
  const isSupportingReturn = isEmail;
  const basePath = base ?? "";
  const signInUrl = `${basePath}/auth/${"signin"}/${providerId}`;
  const _signInUrl = `${signInUrl}?${new URLSearchParams(authorizationParams)}`;
  const res = await fetch(_signInUrl, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Auth-Return-Redirect": "1"
    },
    // @ts-ignore
    body: new URLSearchParams({
      ...options,
      callbackUrl
    })
  });
  const data = await res.clone().json();
  if (redirect || !isSupportingReturn) {
    window.location.href = data.url ?? callbackUrl;
    if (data.url.includes("#"))
      window.location.reload();
    return;
  }
  return res;
}
async function signOut(options) {
  const { callbackUrl = window.location.href } = {};
  const basePath = base ?? "";
  const res = await fetch(`${basePath}/auth/signout`, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Auth-Return-Redirect": "1"
    },
    body: new URLSearchParams({
      callbackUrl
    })
  });
  const data = await res.json();
  const url = data.url ?? callbackUrl;
  window.location.href = url;
  if (url.includes("#"))
    window.location.reload();
}

export { signOut as a, signIn as s };
//# sourceMappingURL=client2-BVhmpcwZ.js.map
