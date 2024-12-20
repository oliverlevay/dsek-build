let _onSetLanguageTag;
const sourceLanguageTag = "sv";
const availableLanguageTags = (
  /** @type {const} */
  ["en", "sv"]
);
let languageTag = () => sourceLanguageTag;
const setLanguageTag = (tag) => {
  if (typeof tag === "function") {
    languageTag = enforceLanguageTag(tag);
  } else {
    languageTag = enforceLanguageTag(() => tag);
  }
  if (_onSetLanguageTag !== void 0) {
    _onSetLanguageTag(languageTag());
  }
};
function enforceLanguageTag(unsafeLanguageTag) {
  return () => {
    const tag = unsafeLanguageTag();
    if (!isAvailableLanguageTag(tag)) {
      throw new Error(`languageTag() didn't return a valid language tag. Check your setLanguageTag call`);
    }
    return tag;
  };
}
const onSetLanguageTag = (fn) => {
  _onSetLanguageTag = fn;
};
function isAvailableLanguageTag(thing) {
  return availableLanguageTags.includes(thing);
}
const runtime = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  availableLanguageTags,
  isAvailableLanguageTag,
  get languageTag() {
    return languageTag;
  },
  onSetLanguageTag,
  setLanguageTag,
  sourceLanguageTag
}, Symbol.toStringTag, { value: "Module" }));

export { isAvailableLanguageTag as i, languageTag as l, runtime as r, sourceLanguageTag as s };
//# sourceMappingURL=runtime-BxW51cRH.js.map
