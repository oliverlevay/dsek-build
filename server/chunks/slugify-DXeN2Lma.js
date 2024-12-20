const slugify = (str, maxLength = 50) => str.trim().normalize("NFKD").replace(new RegExp("\\p{Diacritic}", "gu"), "").replace(/['"]+/g, "").replace(/[^a-z0-9]+/gi, "-").replace(/-+/g, "-").substring(0, maxLength).replace(/^-+|-+$/g, "").toLowerCase();
const slugWithCount = (slug, count) => count > 0 ? `${slug}-${count + 1}` : slug;

export { slugWithCount as a, slugify as s };
//# sourceMappingURL=slugify-DXeN2Lma.js.map
