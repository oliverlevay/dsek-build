import{s as q,j as S,C as u,k as P,i as p,d as m,l as w,c as z,e as A,t as C,a as H,b as j,o as y,f as g,q as h,S as E,u as M,g as N,h as T}from"./scheduler.DK5noefF.js";import{S as v,i as B,c as D,a as F,m as G,t as _,g as I,b as c,e as J,d as K}from"./index.OECaLbXR.js";import{p as L}from"./stores.BdoTh84D.js";import{S as O}from"./SetPageTitle.Cf9LBAU4.js";import{t as b}from"./bundle-mjs.BkWO730n.js";const Q=i=>({}),d=i=>({});function k(i){let a,o,n,f,t;const s=i[4]["after-title"],l=z(s,i,i[3],d);return{c(){a=A("h1"),o=C(i[0]),n=S(),l&&l.c(),this.h()},l(e){a=H(e,"H1",{class:!0});var r=j(a);o=y(r,i[0]),n=P(r),l&&l.l(r),r.forEach(m),this.h()},h(){g(a,"class",f=b("page-title mb-4 text-2xl font-bold",i[1]))},m(e,r){p(e,a,r),h(a,o),h(a,n),l&&l.m(a,null),t=!0},p(e,r){(!t||r&1)&&E(o,e[0]),l&&l.p&&(!t||r&8)&&M(l,s,e,e[3],t?T(s,e[3],r,Q):N(e[3]),d),(!t||r&2&&f!==(f=b("page-title mb-4 text-2xl font-bold",e[1])))&&g(a,"class",f)},i(e){t||(_(l,e),t=!0)},o(e){c(l,e),t=!1},d(e){e&&m(a),l&&l.d(e)}}}function R(i){let a,o,n,f;a=new O({props:{title:i[0]}});let t=!i[2].data.isApp&&k(i);return{c(){D(a.$$.fragment),o=S(),t&&t.c(),n=u()},l(s){F(a.$$.fragment,s),o=P(s),t&&t.l(s),n=u()},m(s,l){G(a,s,l),p(s,o,l),t&&t.m(s,l),p(s,n,l),f=!0},p(s,[l]){const e={};l&1&&(e.title=s[0]),a.$set(e),s[2].data.isApp?t&&(I(),c(t,1,1,()=>{t=null}),J()):t?(t.p(s,l),l&4&&_(t,1)):(t=k(s),t.c(),_(t,1),t.m(n.parentNode,n))},i(s){f||(_(a.$$.fragment,s),_(t),f=!0)},o(s){c(a.$$.fragment,s),c(t),f=!1},d(s){s&&(m(o),m(n)),K(a,s),t&&t.d(s)}}}function U(i,a,o){let n;w(i,L,e=>o(2,n=e));let{$$slots:f={},$$scope:t}=a,{title:s}=a,{class:l=""}=a;return i.$$set=e=>{"title"in e&&o(0,s=e.title),"class"in e&&o(1,l=e.class),"$$scope"in e&&o(3,t=e.$$scope)},[s,l,n,t,f]}class $ extends v{constructor(a){super(),B(this,a,U,R,q,{title:0,class:1})}}export{$ as P};