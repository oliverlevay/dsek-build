const getEmailDomains = () => {
  return OWNED_DOMAINS;
};
const fuseEmail = (email) => {
  let { localPart, domain } = email;
  localPart = localPart.trim().replaceAll("@", "");
  domain = domain.trim().replaceAll("@", "");
  return `${localPart}@${domain}`;
};
const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(dsek.se|nolla.nu|yrka.nu|teknikfokus.se|juble.se|geekend.se|user.dsek.se)$/;
const isValidEmail = (email) => {
  return emailRegex.test(email);
};
const OWNED_DOMAINS = [
  "@dsek.se",
  "@nolla.nu",
  "@yrka.nu",
  "@teknikfokus.se",
  "@juble.se",
  "@geekend.se",
  "@user.dsek.se"
];

export { fuseEmail as f, getEmailDomains as g, isValidEmail as i };
//# sourceMappingURL=emailutils-BD_fgkxR.js.map
