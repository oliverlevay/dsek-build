import{s as u,C as n,i as p,n as c,d as i,e as _,t as g,a as h,b as v,o as w,f,K as b,q as y,S}from"./scheduler.DK5noefF.js";import{S as k,i as C}from"./index.OECaLbXR.js";import{t as d}from"./bundle-mjs.BkWO730n.js";function m(r){let a,e=r[0].name+"",t,s;return{c(){a=_("span"),t=g(e),this.h()},l(o){a=h(o,"SPAN",{class:!0,style:!0});var l=v(a);t=w(l,e),l.forEach(i),this.h()},h(){f(a,"class",s=d("badge badge-md relative cursor-pointer overflow-hidden whitespace-nowrap border-[--tag-color] text-xs before:absolute before:inset-0 before:bg-[--tag-color] before:opacity-10 before:content-['']",r[1])),b(a,"--tag-color",r[0].color||"var(--bc)")},m(o,l){p(o,a,l),y(a,t)},p(o,l){l&1&&e!==(e=o[0].name+"")&&S(t,e),l&2&&s!==(s=d("badge badge-md relative cursor-pointer overflow-hidden whitespace-nowrap border-[--tag-color] text-xs before:absolute before:inset-0 before:bg-[--tag-color] before:opacity-10 before:content-['']",o[1]))&&f(a,"class",s),l&1&&b(a,"--tag-color",o[0].color||"var(--bc)")},d(o){o&&i(a)}}}function q(r){let a,e=r[0]&&m(r);return{c(){e&&e.c(),a=n()},l(t){e&&e.l(t),a=n()},m(t,s){e&&e.m(t,s),p(t,a,s)},p(t,[s]){t[0]?e?e.p(t,s):(e=m(t),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},i:c,o:c,d(t){t&&i(a),e&&e.d(t)}}}function z(r,a,e){let{tag:t=void 0}=a,{class:s=""}=a;return r.$$set=o=>{"tag"in o&&e(0,t=o.tag),"class"in o&&e(1,s=o.class)},[t,s]}class A extends k{constructor(a){super(),C(this,a,z,q,u,{tag:0,class:1})}}export{A as T};