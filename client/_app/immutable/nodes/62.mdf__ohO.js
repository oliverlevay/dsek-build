import{s as ae,l as se,m as re,e as h,j as w,t as S,a as b,b as v,k as D,d as c,o as P,f,i as y,q as n,G as le,S as ne,n as K}from"../chunks/scheduler.DK5noefF.js";import{S as ie,i as oe,c as ce,a as fe,m as ue,t as de,b as pe,d as me}from"../chunks/index.OECaLbXR.js";import{p as _e}from"../chunks/stores.BdoTh84D.js";import{a as g}from"../chunks/apiNames.G3FqMHey.js";import{i as T}from"../chunks/authorization.BfNSR1Nc.js";import{E as he}from"../chunks/EventPage.CHe4AA2A.js";import{bh as be,bi as ve,bj as Ee,bk as Ae,bl as ge,bm as Te}from"../chunks/messages.DZzIl59o.js";import{t as Se}from"../chunks/toast.BUMyavxw.js";function x(l){let e,s,a=ge()+"",t;return{c(){e=h("a"),s=h("span"),t=S(a),this.h()},l(r){e=b(r,"A",{class:!0,href:!0});var u=v(e);s=b(u,"SPAN",{class:!0}),v(s).forEach(c),t=P(u,a),u.forEach(c),this.h()},h(){f(s,"class","i-mdi-create"),f(e,"class","btn"),f(e,"href",l[2]("/events/create",void 0))},m(r,u){y(r,e,u),n(e,s),n(e,t)},p:K,d(r){r&&c(e)}}}function ee(l){let e,s,a=Te()+"",t;return{c(){e=h("a"),s=h("span"),t=S(a),this.h()},l(r){e=b(r,"A",{class:!0,href:!0});var u=v(e);s=b(u,"SPAN",{class:!0}),v(s).forEach(c),t=P(u,a),u.forEach(c),this.h()},h(){f(s,"class","i-mdi-tag"),f(e,"class","btn"),f(e,"href",l[2]("/news/tags",void 0))},m(r,u){y(r,e,u),n(e,s),n(e,t)},p:K,d(r){r&&c(e)}}}function te(l){let e,s,a;return{c(){e=h("a"),s=h("span"),a=S("Alla events"),this.h()},l(t){e=b(t,"A",{class:!0,href:!0});var r=v(e);s=b(r,"SPAN",{class:!0}),v(s).forEach(c),a=P(r,"Alla events"),r.forEach(c),this.h()},h(){f(s,"class","i-mdi-administrator"),f(e,"class","btn"),f(e,"href",l[2]("/events/all-events",void 0))},m(t,r){y(t,e,r),n(e,s),n(e,a)},p:K,d(t){t&&c(e)}}}function Pe(l){let e,s=T(g.EVENT.CREATE,l[0].user),a,t,r,u=be()+"",k,N,i,E,C,O=ve()+"",I,M,A,G,Q=Ee()+"",j,q,$,U,z,H=T(g.TAGS.CREATE,l[0].user)||T(g.TAGS.UPDATE,l[0].user),R,Y=T(g.TAGS.UPDATE,l[0].user),B,W,p=s&&x(l),m=H&&ee(l),_=Y&&te(l);return{c(){e=h("div"),p&&p.c(),a=w(),t=h("a"),r=h("span"),k=S(u),N=w(),i=h("details"),E=h("summary"),C=h("span"),I=S(O),M=w(),A=h("div"),G=h("p"),j=S(Q),q=w(),$=h("p"),U=S(l[1]),z=w(),m&&m.c(),R=w(),_&&_.c(),this.h()},l(d){e=b(d,"DIV",{class:!0});var o=v(e);p&&p.l(o),a=D(o),t=b(o,"A",{class:!0,href:!0});var F=v(t);r=b(F,"SPAN",{class:!0}),v(r).forEach(c),k=P(F,u),F.forEach(c),N=D(o),i=b(o,"DETAILS",{class:!0});var L=v(i);E=b(L,"SUMMARY",{class:!0});var J=v(E);C=b(J,"SPAN",{class:!0}),v(C).forEach(c),I=P(J,O),J.forEach(c),M=D(L),A=b(L,"DIV",{class:!0});var V=v(A);G=b(V,"P",{});var X=v(G);j=P(X,Q),X.forEach(c),q=D(V),$=b(V,"P",{class:!0});var Z=v($);U=P(Z,l[1]),Z.forEach(c),V.forEach(c),L.forEach(c),z=D(o),m&&m.l(o),R=D(o),_&&_.l(o),o.forEach(c),this.h()},h(){f(r,"class","i-mdi-calendar"),f(t,"class","btn"),f(t,"href",l[2]("/events/calendar",void 0)),f(C,"class","i-mdi-calendar-sync"),f(E,"class","btn flex-nowrap"),f($,"class","my-2 rounded border p-2 font-mono text-sm"),f(A,"class","dropdown-content z-[1] rounded-box bg-base-300 p-4 shadow"),f(i,"class","dropdown"),f(e,"class","scrollbar-hide -mx-4 flex items-center gap-2 overflow-x-auto px-4")},m(d,o){y(d,e,o),p&&p.m(e,null),n(e,a),n(e,t),n(t,r),n(t,k),n(e,N),n(e,i),n(i,E),n(E,C),n(E,I),n(i,M),n(i,A),n(A,G),n(G,j),n(A,q),n(A,$),n($,U),n(e,z),m&&m.m(e,null),n(e,R),_&&_.m(e,null),B||(W=le(i,"toggle",l[4]),B=!0)},p(d,o){o&1&&(s=T(g.EVENT.CREATE,d[0].user)),s?p?p.p(d,o):(p=x(d),p.c(),p.m(e,a)):p&&(p.d(1),p=null),o&2&&ne(U,d[1]),o&1&&(H=T(g.TAGS.CREATE,d[0].user)||T(g.TAGS.UPDATE,d[0].user)),H?m?m.p(d,o):(m=ee(d),m.c(),m.m(e,R)):m&&(m.d(1),m=null),o&1&&(Y=T(g.TAGS.UPDATE,d[0].user)),Y?_?_.p(d,o):(_=te(d),_.c(),_.m(e,null)):_&&(_.d(1),_=null)},d(d){d&&c(e),p&&p.d(),m&&m.d(),_&&_.d(),B=!1,W()}}}function $e(l){let e,s;return e=new he({props:{data:l[0],$$slots:{default:[Pe]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(a){fe(e.$$.fragment,a)},m(a,t){ue(e,a,t),s=!0},p(a,[t]){const r={};t&1&&(r.data=a[0]),t&131&&(r.$$scope={dirty:t,ctx:a}),e.$set(r)},i(a){s||(de(e.$$.fragment,a),s=!0)},o(a){pe(e.$$.fragment,a),s=!1},d(a){me(e,a)}}}function we(l,e,s){let a,t;se(l,_e,i=>s(3,t=i));let{data:r}=e;const u=re("$paraglide-adapter-sveltekit:context");function k(i,E){return typeof i!="string"||!u?i:u.translateHref(i,E)}const N=i=>{i.target instanceof HTMLDetailsElement&&i.target.open&&(navigator.clipboard.writeText(a),Se(Ae(),"success"))};return l.$$set=i=>{"data"in i&&s(0,r=i.data)},l.$$.update=()=>{l.$$.dirty&8&&s(1,a=`${t.url.origin}${t.url.pathname}/subscribe`)},[r,a,k,t,N]}class Ve extends ie{constructor(e){super(),oe(this,e,we,$e,ae,{data:0})}}export{Ve as component};