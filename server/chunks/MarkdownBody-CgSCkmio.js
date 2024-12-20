import { c as create_ssr_component, a as add_attribute } from './ssr-BoMjCg5r.js';
import { marked } from 'marked';
import { twMerge } from 'tailwind-merge';

const MarkdownBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { body } = $$props;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0) $$bindings.body(body);
  return `<section${add_attribute("class", twMerge("prose-a prose prose-a:link prose-a:link-primary prose-a:no-underline", clazz), 0)}>${slots.default ? slots.default({}) : ``}  <!-- HTML_TAG_START -->${marked(body)}<!-- HTML_TAG_END --></section>`;
});

export { MarkdownBody as M };
//# sourceMappingURL=MarkdownBody-CgSCkmio.js.map
