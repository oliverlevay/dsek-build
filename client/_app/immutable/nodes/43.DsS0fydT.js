import{s as se,j as H,e as k,t as M,W as re,k as N,a as A,b as y,o as T,d,X as le,f,i as F,q as n,m as ne,E as oe,S as O}from"../chunks/scheduler.DK5noefF.js";import{S as ie,i as fe,c as x,a as B,m as K,e as ee,t as q,b as G,d as W,g as te}from"../chunks/index.OECaLbXR.js";import{e as J,u as ue,o as ce}from"../chunks/each.Dbd03sI1.js";import{P as de}from"../chunks/PageHeader.C1QSjqnO.js";import{M as ae}from"../chunks/MemberAvatar.DsenHHaP.js";import{g as Q}from"../chunks/member.Deknk2Gk.js";import{o as me,ax as he,ay as _e}from"../chunks/messages.DZzIl59o.js";function Y(u,a,s){const e=u.slice();return e[4]=a[s],e}function pe(u){let a,s,e,l,b,o,D="V.A. Kant",g,$,m,i=u[4].position.name+"",h,_,j,I,S,w,t=u[4].position.email+"",r,E,C;return e=new ae({props:{member:u[4],class:"size-24 rounded-full"}}),{c(){a=k("div"),s=k("figure"),x(e.$$.fragment),l=H(),b=k("div"),o=k("h2"),o.textContent=D,g=H(),$=k("div"),m=k("a"),h=M(i),j=H(),I=k("a"),S=k("span"),w=H(),r=M(t),this.h()},l(v){a=A(v,"DIV",{class:!0});var c=y(a);s=A(c,"FIGURE",{class:!0});var p=y(s);B(e.$$.fragment,p),p.forEach(d),l=N(c),b=A(c,"DIV",{class:!0});var P=y(b);o=A(P,"H2",{class:!0,"data-svelte-h":!0}),oe(o)!=="svelte-1h3xzku"&&(o.textContent=D),g=N(P),$=A(P,"DIV",{class:!0});var V=y($);m=A(V,"A",{class:!0,href:!0});var L=y(m);h=T(L,i),L.forEach(d),j=N(V),I=A(V,"A",{class:!0,href:!0});var z=y(I);S=A(z,"SPAN",{class:!0}),y(S).forEach(d),w=N(z),r=T(z,t),z.forEach(d),V.forEach(d),P.forEach(d),c.forEach(d),this.h()},h(){f(s,"class","mt-4 transition-transform group-hover/photo:scale-90"),f(o,"class","card-title mx-auto text-primary"),f(m,"class","hover:underline"),f(m,"href",_=u[1](`/positions/${u[4].position.id}`,void 0)),f(S,"class","i-mdi-email"),f(I,"class","flex items-center justify-center gap-1 text-sm text-base-content/70 hover:underline"),f(I,"href",E=u[1](`mailto:${u[4].position.email}`,void 0)),f($,"class","flex flex-col gap-1 px-2 text-base-content/90"),f(b,"class","card-body px-0 text-center"),f(a,"class","group/photo")},m(v,c){F(v,a,c),n(a,s),K(e,s,null),n(a,l),n(a,b),n(b,o),n(b,g),n(b,$),n($,m),n(m,h),n($,j),n($,I),n(I,S),n(I,w),n(I,r),C=!0},p(v,c){const p={};c&1&&(p.member=v[4]),e.$set(p),(!C||c&1)&&i!==(i=v[4].position.name+"")&&O(h,i),(!C||c&1&&_!==(_=v[1](`/positions/${v[4].position.id}`,void 0)))&&f(m,"href",_),(!C||c&1)&&t!==(t=v[4].position.email+"")&&O(r,t),(!C||c&1&&E!==(E=v[1](`mailto:${v[4].position.email}`,void 0)))&&f(I,"href",E)},i(v){C||(q(e.$$.fragment,v),C=!0)},o(v){G(e.$$.fragment,v),C=!1},d(v){v&&d(a),W(e)}}}function ve(u){let a,s,e,l,b,o,D=Q(u[4])+"",g,$,m,i,h,_=u[4].position.name+"",j,I,S,w,t,r,E=u[4].position.email+"",C,v,c;return l=new ae({props:{member:u[4],class:"size-24 rounded-full"}}),{c(){a=k("div"),s=k("a"),e=k("figure"),x(l.$$.fragment),b=H(),o=k("h2"),g=M(D),m=H(),i=k("div"),h=k("a"),j=M(_),S=H(),w=k("a"),t=k("span"),r=H(),C=M(E),this.h()},l(p){a=A(p,"DIV",{class:!0});var P=y(a);s=A(P,"A",{href:!0,class:!0});var V=y(s);e=A(V,"FIGURE",{class:!0});var L=y(e);B(l.$$.fragment,L),L.forEach(d),b=N(V),o=A(V,"H2",{class:!0});var z=y(o);g=T(z,D),z.forEach(d),V.forEach(d),m=N(P),i=A(P,"DIV",{class:!0});var R=y(i);h=A(R,"A",{class:!0,href:!0});var X=y(h);j=T(X,_),X.forEach(d),S=N(R),w=A(R,"A",{class:!0,href:!0});var U=y(w);t=A(U,"SPAN",{class:!0}),y(t).forEach(d),r=N(U),C=T(U,E),U.forEach(d),R.forEach(d),P.forEach(d),this.h()},h(){f(e,"class","transition-transform group-hover/photo:scale-90"),f(o,"class","card-title mt-8 block text-pretty text-primary group-hover/link:underline"),f(s,"href",$=u[1](`/members/${u[4].studentId}`,void 0)),f(s,"class","group/link"),f(h,"class","hover:underline"),f(h,"href",I=u[1](`/positions/${u[4].position.id}`,void 0)),f(t,"class","i-mdi-email"),f(w,"class","flex items-center justify-center gap-1 text-sm text-base-content/90 hover:underline"),f(w,"href",v=u[1](`mailto:${u[4].position.email}`,void 0)),f(i,"class","flex flex-col gap-1 px-2 text-base-content/90"),f(a,"class","group/photo card-body p-4 text-center")},m(p,P){F(p,a,P),n(a,s),n(s,e),K(l,e,null),n(s,b),n(s,o),n(o,g),n(a,m),n(a,i),n(i,h),n(h,j),n(i,S),n(i,w),n(w,t),n(w,r),n(w,C),c=!0},p(p,P){const V={};P&1&&(V.member=p[4]),l.$set(V),(!c||P&1)&&D!==(D=Q(p[4])+"")&&O(g,D),(!c||P&1&&$!==($=p[1](`/members/${p[4].studentId}`,void 0)))&&f(s,"href",$),(!c||P&1)&&_!==(_=p[4].position.name+"")&&O(j,_),(!c||P&1&&I!==(I=p[1](`/positions/${p[4].position.id}`,void 0)))&&f(h,"href",I),(!c||P&1)&&E!==(E=p[4].position.email+"")&&O(C,E),(!c||P&1&&v!==(v=p[1](`mailto:${p[4].position.email}`,void 0)))&&f(w,"href",v)},i(p){c||(q(l.$$.fragment,p),c=!0)},o(p){G(l.$$.fragment,p),c=!1},d(p){p&&d(a),W(l)}}}function Z(u,a){let s,e,l,b,o;const D=[ve,pe],g=[];function $(m,i){return m[4].studentId?0:1}return e=$(a),l=g[e]=D[e](a),{key:u,first:null,c(){s=k("div"),l.c(),b=H(),this.h()},l(m){s=A(m,"DIV",{class:!0});var i=y(s);l.l(i),b=N(i),i.forEach(d),this.h()},h(){f(s,"class","card bg-base-200 shadow-xl"),this.first=s},m(m,i){F(m,s,i),g[e].m(s,null),n(s,b),o=!0},p(m,i){a=m;let h=e;e=$(a),e===h?g[e].p(a,i):(te(),G(g[h],1,1,()=>{g[h]=null}),ee(),l=g[e],l?l.p(a,i):(l=g[e]=D[e](a),l.c()),q(l,1),l.m(s,b))},i(m){o||(q(l),o=!0)},o(m){G(l),o=!1},d(m){m&&d(s),g[e].d()}}}function ge(u){let a,s,e,l,b=_e()+"",o,D,g,$,m=he()+"",i,h,_=[],j=new Map,I;a=new de({props:{title:me()}});let S=J(u[0].boardPositions);const w=t=>t[4].position.id;for(let t=0;t<S.length;t+=1){let r=Y(u,S,t),E=w(r);j.set(E,_[t]=Z(E,r))}return{c(){x(a.$$.fragment),s=H(),e=k("section"),l=k("p"),o=M(b),D=H(),g=k("p"),$=new re(!1),i=H(),h=k("section");for(let t=0;t<_.length;t+=1)_[t].c();this.h()},l(t){B(a.$$.fragment,t),s=N(t),e=A(t,"SECTION",{class:!0});var r=y(e);l=A(r,"P",{});var E=y(l);o=T(E,b),E.forEach(d),D=N(r),g=A(r,"P",{});var C=y(g);$=le(C,!1),C.forEach(d),r.forEach(d),i=N(t),h=A(t,"SECTION",{class:!0});var v=y(h);for(let c=0;c<_.length;c+=1)_[c].l(v);v.forEach(d),this.h()},h(){$.a=null,f(e,"class","mb-5 space-y-5"),f(h,"class","grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3")},m(t,r){K(a,t,r),F(t,s,r),F(t,e,r),n(e,l),n(l,o),n(e,D),n(e,g),$.m(m,g),F(t,i,r),F(t,h,r);for(let E=0;E<_.length;E+=1)_[E]&&_[E].m(h,null);I=!0},p(t,[r]){r&3&&(S=J(t[0].boardPositions),te(),_=ue(_,r,w,1,t,S,j,h,ce,Z,null,Y),ee())},i(t){if(!I){q(a.$$.fragment,t);for(let r=0;r<S.length;r+=1)q(_[r]);I=!0}},o(t){G(a.$$.fragment,t);for(let r=0;r<_.length;r+=1)G(_[r]);I=!1},d(t){t&&(d(s),d(e),d(i),d(h)),W(a,t);for(let r=0;r<_.length;r+=1)_[r].d()}}}function be(u,a,s){let{data:e}=a;const l=ne("$paraglide-adapter-sveltekit:context");function b(o,D){return typeof o!="string"||!l?o:l.translateHref(o,D)}return u.$$set=o=>{"data"in o&&s(0,e=o.data)},[e,b]}class De extends ie{constructor(a){super(),fe(this,a,be,ge,se,{data:0})}}export{De as component};