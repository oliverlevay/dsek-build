import{s as $,j as _,k as g,i as d,d as T}from"../chunks/scheduler.DK5noefF.js";import{S as h,i as O,c as m,a as f,m as p,t as l,b as c,d as u}from"../chunks/index.OECaLbXR.js";import{S}from"../chunks/SetPageTitle.Cf9LBAU4.js";import{A as w}from"../chunks/ArticleEditor.8bem2mp5.js";import{bF as A}from"../chunks/messages.DZzIl59o.js";function b(s){let a,o,e,r;return a=new S({props:{title:A()}}),e=new w({props:{allTags:s[0].allTags,authorOptions:s[0].authorOptions,data:s[0].form}}),{c(){m(a.$$.fragment),o=_(),m(e.$$.fragment)},l(t){f(a.$$.fragment,t),o=g(t),f(e.$$.fragment,t)},m(t,n){p(a,t,n),d(t,o,n),p(e,t,n),r=!0},p(t,[n]){const i={};n&1&&(i.allTags=t[0].allTags),n&1&&(i.authorOptions=t[0].authorOptions),n&1&&(i.data=t[0].form),e.$set(i)},i(t){r||(l(a.$$.fragment,t),l(e.$$.fragment,t),r=!0)},o(t){c(a.$$.fragment,t),c(e.$$.fragment,t),r=!1},d(t){t&&T(o),u(a,t),u(e,t)}}}function P(s,a,o){let{data:e}=a;return s.$$set=r=>{"data"in r&&o(0,e=r.data)},[e]}class E extends h{constructor(a){super(),O(this,a,P,b,$,{data:0})}}export{E as component};