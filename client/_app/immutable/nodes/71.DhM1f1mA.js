import{s as W,j as P,e as w,k as S,a as b,b as T,E as X,d as v,f as h,i as L,q as c,P as H,G as Z,Q as x,w as ee,l as j,m as te,t as y,o as F,S as z,n as J}from"../chunks/scheduler.DK5noefF.js";import{S as ae,i as ne,c as N,a as O,m as U,t as V,b as q,d as M}from"../chunks/index.OECaLbXR.js";import{p as re}from"../chunks/stores.BdoTh84D.js";import{L as se,F as K}from"../chunks/LangTabs.D_AYhfI9.js";import{S as oe}from"../chunks/SetPageTitle.Cf9LBAU4.js";import{s as le}from"../chunks/superForms.37TMp2uc.js";function Q(s){let t,n,e,o,a=s[1].params.slug+"",u,$;return{c(){t=w("div"),n=w("div"),e=w("span"),o=y("You're creating a new page under "),u=y(a),$=y("."),this.h()},l(i){t=b(i,"DIV",{class:!0});var _=T(t);n=b(_,"DIV",{class:!0});var k=T(n);e=b(k,"SPAN",{});var f=T(e);o=F(f,"You're creating a new page under "),u=F(f,a),$=F(f,"."),f.forEach(v),k.forEach(v),_.forEach(v),this.h()},h(){h(n,"class","alert alert-info"),h(t,"class","toast")},m(i,_){L(i,t,_),c(t,n),c(n,e),c(e,o),c(e,u),c(e,$)},p(i,_){_&2&&a!==(a=i[1].params.slug+"")&&z(u,a)},d(i){i&&v(t)}}}function ie(s){let t,n;return t=new K({props:{superform:s[4],field:"markdown",slot:"sv",rows:10}}),{c(){N(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,o){U(t,e,o),n=!0},p:J,i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function ue(s){let t,n;return t=new K({props:{superform:s[4],field:"markdownEn",slot:"en",rows:10}}),{c(){N(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,o){U(t,e,o),n=!0},p:J,i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function R(s){let t,n=s[3].markdown+"",e;return{c(){t=w("p"),e=y(n),this.h()},l(o){t=b(o,"P",{class:!0});var a=T(t);e=F(a,n),a.forEach(v),this.h()},h(){h(t,"class","text-error")},m(o,a){L(o,t,a),c(t,e)},p(o,a){a&8&&n!==(n=o[3].markdown+"")&&z(e,n)},d(o){o&&v(t)}}}function me(s){let t,n,e,o,a,u,$,i,_,k,f,A,C,l,D="Submit",I,E,Y,B;t=new oe({props:{title:s[1].params.slug}});let p=s[0].isCreating&&Q(s);u=new se({props:{$$slots:{en:[ue],sv:[ie]},$$scope:{ctx:s}}});let d=s[3].markdown&&R(s);return{c(){N(t.$$.fragment),n=P(),e=w("div"),p&&p.c(),o=P(),a=w("form"),N(u.$$.fragment),$=P(),i=w("input"),k=P(),f=w("input"),A=P(),d&&d.c(),C=P(),l=w("button"),l.textContent=D,this.h()},l(r){O(t.$$.fragment,r),n=S(r),e=b(r,"DIV",{class:!0});var m=T(e);p&&p.l(m),o=S(m),a=b(m,"FORM",{method:!0,action:!0});var g=T(a);O(u.$$.fragment,g),$=S(g),i=b(g,"INPUT",{type:!0,name:!0}),k=S(g),f=b(g,"INPUT",{type:!0,name:!0}),A=S(g),d&&d.l(g),C=S(g),l=b(g,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),X(l)!=="svelte-1d02o54"&&(l.textContent=D),g.forEach(v),m.forEach(v),this.h()},h(){h(i,"type","hidden"),h(i,"name","name"),i.value=_=s[1].params.slug,h(f,"type","hidden"),h(f,"name","markdown"),h(l,"class","btn"),h(l,"type","submit"),h(a,"method","POST"),h(a,"action",I=s[8](s[0].isCreating?"?/create":"?/update",void 0)),h(e,"class","p-2 text-neutral-content")},m(r,m){U(t,r,m),L(r,n,m),L(r,e,m),p&&p.m(e,null),c(e,o),c(e,a),U(u,a,null),c(a,$),c(a,i),c(a,k),c(a,f),H(f,s[2].markdown),c(a,A),d&&d.m(a,null),c(a,C),c(a,l),E=!0,Y||(B=[Z(f,"input",s[9]),x(s[7].call(null,a))],Y=!0)},p(r,[m]){const g={};m&2&&(g.title=r[1].params.slug),t.$set(g),r[0].isCreating?p?p.p(r,m):(p=Q(r),p.c(),p.m(e,o)):p&&(p.d(1),p=null);const G={};m&4096&&(G.$$scope={dirty:m,ctx:r}),u.$set(G),(!E||m&2&&_!==(_=r[1].params.slug))&&(i.value=_),m&4&&H(f,r[2].markdown),r[3].markdown?d?d.p(r,m):(d=R(r),d.c(),d.m(a,C)):d&&(d.d(1),d=null),(!E||m&1&&I!==(I=r[8](r[0].isCreating?"?/create":"?/update",void 0)))&&h(a,"action",I)},i(r){E||(V(t.$$.fragment,r),V(u.$$.fragment,r),E=!0)},o(r){q(t.$$.fragment,r),q(u.$$.fragment,r),E=!1},d(r){r&&(v(n),v(e)),M(t,r),p&&p.d(),M(u),d&&d.d(),Y=!1,ee(B)}}}function fe(s,t,n){let e,o,a;j(s,re,l=>n(1,e=l));let{data:u}=t;const $=le(u.form),{form:i,errors:_,enhance:k}=$;j(s,i,l=>n(2,o=l)),j(s,_,l=>n(3,a=l));const f=te("$paraglide-adapter-sveltekit:context");function A(l,D){return typeof l!="string"||!f?l:f.translateHref(l,D)}function C(){o.markdown=this.value,i.set(o)}return s.$$set=l=>{"data"in l&&n(0,u=l.data)},[u,e,o,a,$,i,_,k,A,C]}class $e extends ae{constructor(t){super(),ne(this,t,fe,me,W,{data:0})}}export{$e as component};