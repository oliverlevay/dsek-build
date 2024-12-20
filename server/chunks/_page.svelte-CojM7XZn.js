import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, b as escape, e as each, a as add_attribute } from './ssr-BoMjCg5r.js';
import { jN as nolla_wordlist, c7 as nolla_wordlist_header } from './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const words = nolla_wordlist();
  const wordList = words.split("\n").map((word) => {
    const [definition, description] = word.split(" - ");
    return {
      definition,
      description: description?.replace(/([sS]e) ([a-zA-ZÅÄÖåäö]+)/, (_, before, word2) => `${before} <a class="link" href="#${word2.toLowerCase()}">${word2}</a>`)
    };
  });
  getContext("$paraglide-adapter-sveltekit:context");
  return `<header><h1 class="nolla-page-title">${escape(nolla_wordlist_header())}</h1></header> <article><ul>${each(wordList, (word) => {
    return `<li${add_attribute("id", word.definition?.toLowerCase(), 0)} class="rounded-xl p-2 transition-all target:bg-primary"> <b>${escape(word.definition)}</b> - <!-- HTML_TAG_START -->${word.description}<!-- HTML_TAG_END --> </li>`;
  })}</ul></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CojM7XZn.js.map
