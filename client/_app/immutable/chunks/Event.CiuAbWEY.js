import{s as be,e as D,a as w,b as V,d as f,f as A,i as c,n as fe,t as q,j as N,o as F,k as I,q as v,S as y,c as Y,p as Z,u as x,g as ee,h as te,L as re,E as Ee}from"./scheduler.DK5noefF.js";import{S as $e,i as Se,c as le,a as se,m as ne,t as H,g as De,b as J,e as we,d as ae}from"./index.OECaLbXR.js";import{r as W}from"./datetime.BjlMtXqc.js";import{l as z}from"./runtime.DTG1FAeQ.js";import{M as ke}from"./MarkdownBody.Dj9odoYq.js";import{g as ue}from"./client.B-kH8QcR.js";import{e3 as Te}from"./messages.DZzIl59o.js";function Ce(s){var C,L;let t,i,l,a=W(s[0])+"",n,o,m,S,d=((C=s[0])==null?void 0:C.toLocaleTimeString([z()],{hour:"2-digit",minute:"2-digit"}))+"",u,g,k,U,_=W(s[1])+"",h,M,R,K,b=((L=s[1])==null?void 0:L.toLocaleTimeString([z()],{hour:"2-digit",minute:"2-digit"}))+"",$;return{c(){t=D("div"),i=D("div"),l=D("span"),n=q(a),o=N(),m=D("br"),S=N(),u=q(d),g=q(`
      →
      `),k=D("div"),U=D("span"),h=q(_),M=N(),R=D("br"),K=N(),$=q(b),this.h()},l(B){t=w(B,"DIV",{class:!0});var p=V(t);i=w(p,"DIV",{});var O=V(i);l=w(O,"SPAN",{class:!0});var T=V(l);n=F(T,a),T.forEach(f),o=I(O),m=w(O,"BR",{}),S=I(O),u=F(O,d),O.forEach(f),g=F(p,`
      →
      `),k=w(p,"DIV",{});var G=V(k);U=w(G,"SPAN",{class:!0});var P=V(U);h=F(P,_),P.forEach(f),M=I(G),R=w(G,"BR",{}),K=I(G),$=F(G,b),G.forEach(f),p.forEach(f),this.h()},h(){A(l,"class","font-semibold"),A(U,"class","font-semibold"),A(t,"class","flex flex-row items-center gap-4")},m(B,p){c(B,t,p),v(t,i),v(i,l),v(l,n),v(i,o),v(i,m),v(i,S),v(i,u),v(t,g),v(t,k),v(k,U),v(U,h),v(k,M),v(k,R),v(k,K),v(k,$)},p(B,p){var O,T;p&1&&a!==(a=W(B[0])+"")&&y(n,a),p&1&&d!==(d=((O=B[0])==null?void 0:O.toLocaleTimeString([z()],{hour:"2-digit",minute:"2-digit"}))+"")&&y(u,d),p&2&&_!==(_=W(B[1])+"")&&y(h,_),p&2&&b!==(b=((T=B[1])==null?void 0:T.toLocaleTimeString([z()],{hour:"2-digit",minute:"2-digit"}))+"")&&y($,b)},d(B){B&&f(t)}}}function Le(s){var k,U;let t,i=W(s[0])+"",l,a,n,o,m=((k=s[0])==null?void 0:k.toLocaleTimeString([z()],{hour:"2-digit",minute:"2-digit"}))+"",S,d,u=((U=s[1])==null?void 0:U.toLocaleTimeString([z()],{hour:"2-digit",minute:"2-digit"}))+"",g;return{c(){t=D("span"),l=q(i),a=N(),n=D("br"),o=N(),S=q(m),d=q(` →
    `),g=q(u),this.h()},l(_){t=w(_,"SPAN",{class:!0});var h=V(t);l=F(h,i),h.forEach(f),a=I(_),n=w(_,"BR",{}),o=I(_),S=F(_,m),d=F(_,` →
    `),g=F(_,u),this.h()},h(){A(t,"class","font-semibold")},m(_,h){c(_,t,h),v(t,l),c(_,a,h),c(_,n,h),c(_,o,h),c(_,S,h),c(_,d,h),c(_,g,h)},p(_,h){var M,R;h&1&&i!==(i=W(_[0])+"")&&y(l,i),h&1&&m!==(m=((M=_[0])==null?void 0:M.toLocaleTimeString([z()],{hour:"2-digit",minute:"2-digit"}))+"")&&y(S,m),h&2&&u!==(u=((R=_[1])==null?void 0:R.toLocaleTimeString([z()],{hour:"2-digit",minute:"2-digit"}))+"")&&y(g,u)},d(_){_&&(f(t),f(a),f(n),f(o),f(S),f(d),f(g))}}}function Ne(s){var d;let t,i=W(s[0])+"",l,a,n,o,m=((d=s[0])==null?void 0:d.toLocaleTimeString([z()],{hour:"2-digit",minute:"2-digit"}))+"",S;return{c(){t=D("span"),l=q(i),a=N(),n=D("br"),o=N(),S=q(m),this.h()},l(u){t=w(u,"SPAN",{class:!0});var g=V(t);l=F(g,i),g.forEach(f),a=I(u),n=w(u,"BR",{}),o=I(u),S=F(u,m),this.h()},h(){A(t,"class","font-semibold")},m(u,g){c(u,t,g),v(t,l),c(u,a,g),c(u,n,g),c(u,o,g),c(u,S,g)},p(u,g){var k;g&1&&i!==(i=W(u[0])+"")&&y(l,i),g&1&&m!==(m=((k=u[0])==null?void 0:k.toLocaleTimeString([z()],{hour:"2-digit",minute:"2-digit"}))+"")&&y(S,m)},d(u){u&&(f(t),f(a),f(n),f(o),f(S))}}}function Ie(s){let t,i;function l(o,m){return m&3&&(i=null),o[1]==null?Ne:(i==null&&(i=Math.abs(o[0].valueOf()-o[1].valueOf())<24*60*60*1e3),i?Le:Ce)}let a=l(s,-1),n=a(s);return{c(){t=D("div"),n.c(),this.h()},l(o){t=w(o,"DIV",{class:!0});var m=V(t);n.l(m),m.forEach(f),this.h()},h(){A(t,"class","text-primary")},m(o,m){c(o,t,m),n.m(t,null)},p(o,[m]){a===(a=l(o,m))&&n?n.p(o,m):(n.d(1),n=a(o),n&&(n.c(),n.m(t,null)))},i:fe,o:fe,d(o){o&&f(t),n.d()}}}function Ae(s,t,i){let{start:l}=t,{end:a=void 0}=t;return s.$$set=n=>{"start"in n&&i(0,l=n.start),"end"in n&&i(1,a=n.end)},[l,a]}class Pe extends $e{constructor(t){super(),Se(this,t,Ae,Ie,be,{start:0,end:1})}}const Re=s=>({}),_e=s=>({}),Ue=s=>({}),me=s=>({}),Be=s=>({}),ce=s=>({}),Ve=s=>({}),de=s=>({});function ge(s){let t,i,l,a;return{c(){t=D("figure"),i=D("img"),this.h()},l(n){t=w(n,"FIGURE",{});var o=V(t);i=w(o,"IMG",{class:!0,src:!0,alt:!0}),o.forEach(f),this.h()},h(){A(i,"class","mx-auto"),re(i.src,l=ue(s[0].imageUrl))||A(i,"src",l),A(i,"alt",a=s[0].title)},m(n,o){c(n,t,o),v(t,i)},p(n,o){o&1&&!re(i.src,l=ue(n[0].imageUrl))&&A(i,"src",l),o&1&&a!==(a=n[0].title)&&A(i,"alt",a)},d(n){n&&f(t)}}}function pe(s){let t,i="Raderat";return{c(){t=D("span"),t.textContent=i,this.h()},l(l){t=w(l,"SPAN",{class:!0,"data-svelte-h":!0}),Ee(t)!=="svelte-1y2l1m2"&&(t.textContent=i),this.h()},h(){A(t,"class","badge badge-error badge-sm relative -top-1 !text-xs font-semibold")},m(l,a){c(l,t,a)},d(l){l&&f(t)}}}function he(s){let t,i=Te()+"",l;return{c(){t=D("span"),l=q(i),this.h()},l(a){t=w(a,"SPAN",{class:!0});var n=V(t);l=F(n,i),n.forEach(f),this.h()},h(){A(t,"class","badge badge-error badge-lg relative -top-1 ml-2 font-semibold")},m(a,n){c(a,t,n),v(t,l)},d(a){a&&f(t)}}}function ve(s){let t,i;return t=new ke({props:{body:s[0].shortDescription,class:"mb-4 text-xl font-semibold !leading-snug"}}),{c(){le(t.$$.fragment)},l(l){se(t.$$.fragment,l)},m(l,a){ne(t,l,a),i=!0},p(l,a){const n={};a&1&&(n.body=l[0].shortDescription),t.$set(n)},i(l){i||(H(t.$$.fragment,l),i=!0)},o(l){J(t.$$.fragment,l),i=!1},d(l){ae(t,l)}}}function Me(s){let t,i,l,a=s[0].title+"",n,o,m,S,d,u,g,k,U,_,h,M,R,K,b,$=s[0].imageUrl&&ge(s),C=s[0].removedAt&&pe(),L=s[0].isCancelled&&he();u=new Pe({props:{start:s[0].startDatetime,end:s[0].endDatetime}});const B=s[2].actions,p=Y(B,s,s[1],de),O=s[2].buttons,T=Y(O,s,s[1],ce),G=s[2].tags,P=Y(G,s,s[1],me);let E=s[0].shortDescription&&ve(s);R=new ke({props:{body:s[0].description}});const ie=s[2].after,j=Y(ie,s,s[1],_e);return{c(){$&&$.c(),t=N(),i=D("div"),l=D("h1"),n=q(a),o=N(),C&&C.c(),m=N(),L&&L.c(),S=N(),d=D("section"),le(u.$$.fragment),g=N(),p&&p.c(),k=N(),T&&T.c(),U=N(),_=D("section"),P&&P.c(),h=N(),E&&E.c(),M=N(),le(R.$$.fragment),K=N(),j&&j.c(),this.h()},l(e){$&&$.l(e),t=I(e),i=w(e,"DIV",{class:!0});var r=V(i);l=w(r,"H1",{class:!0});var Q=V(l);n=F(Q,a),o=I(Q),C&&C.l(Q),Q.forEach(f),m=I(r),L&&L.l(r),r.forEach(f),S=I(e),d=w(e,"SECTION",{class:!0});var X=V(d);se(u.$$.fragment,X),g=I(X),p&&p.l(X),X.forEach(f),k=I(e),T&&T.l(e),U=I(e),_=w(e,"SECTION",{class:!0});var oe=V(_);P&&P.l(oe),oe.forEach(f),h=I(e),E&&E.l(e),M=I(e),se(R.$$.fragment,e),K=I(e),j&&j.l(e),this.h()},h(){A(l,"class","text-2xl font-bold"),Z(l,"line-through",s[0].isCancelled),A(i,"class","flex items-baseline"),A(d,"class","flex flex-row justify-between"),Z(d,"line-through",s[0].isCancelled),A(_,"class","my-2 flex flex-row items-center justify-between")},m(e,r){$&&$.m(e,r),c(e,t,r),c(e,i,r),v(i,l),v(l,n),v(l,o),C&&C.m(l,null),v(i,m),L&&L.m(i,null),c(e,S,r),c(e,d,r),ne(u,d,null),v(d,g),p&&p.m(d,null),c(e,k,r),T&&T.m(e,r),c(e,U,r),c(e,_,r),P&&P.m(_,null),c(e,h,r),E&&E.m(e,r),c(e,M,r),ne(R,e,r),c(e,K,r),j&&j.m(e,r),b=!0},p(e,[r]){e[0].imageUrl?$?$.p(e,r):($=ge(e),$.c(),$.m(t.parentNode,t)):$&&($.d(1),$=null),(!b||r&1)&&a!==(a=e[0].title+"")&&y(n,a),e[0].removedAt?C||(C=pe(),C.c(),C.m(l,null)):C&&(C.d(1),C=null),(!b||r&1)&&Z(l,"line-through",e[0].isCancelled),e[0].isCancelled?L||(L=he(),L.c(),L.m(i,null)):L&&(L.d(1),L=null);const Q={};r&1&&(Q.start=e[0].startDatetime),r&1&&(Q.end=e[0].endDatetime),u.$set(Q),p&&p.p&&(!b||r&2)&&x(p,B,e,e[1],b?te(B,e[1],r,Ve):ee(e[1]),de),(!b||r&1)&&Z(d,"line-through",e[0].isCancelled),T&&T.p&&(!b||r&2)&&x(T,O,e,e[1],b?te(O,e[1],r,Be):ee(e[1]),ce),P&&P.p&&(!b||r&2)&&x(P,G,e,e[1],b?te(G,e[1],r,Ue):ee(e[1]),me),e[0].shortDescription?E?(E.p(e,r),r&1&&H(E,1)):(E=ve(e),E.c(),H(E,1),E.m(M.parentNode,M)):E&&(De(),J(E,1,1,()=>{E=null}),we());const X={};r&1&&(X.body=e[0].description),R.$set(X),j&&j.p&&(!b||r&2)&&x(j,ie,e,e[1],b?te(ie,e[1],r,Re):ee(e[1]),_e)},i(e){b||(H(u.$$.fragment,e),H(p,e),H(T,e),H(P,e),H(E),H(R.$$.fragment,e),H(j,e),b=!0)},o(e){J(u.$$.fragment,e),J(p,e),J(T,e),J(P,e),J(E),J(R.$$.fragment,e),J(j,e),b=!1},d(e){e&&(f(t),f(i),f(S),f(d),f(k),f(U),f(_),f(h),f(M),f(K)),$&&$.d(e),C&&C.d(),L&&L.d(),ae(u),p&&p.d(e),T&&T.d(e),P&&P.d(e),E&&E.d(e),ae(R,e),j&&j.d(e)}}}function Oe(s,t,i){let{$$slots:l={},$$scope:a}=t,{event:n}=t;return s.$$set=o=>{"event"in o&&i(0,n=o.event),"$$scope"in o&&i(1,a=o.$$scope)},[n,a,l]}class Je extends $e{constructor(t){super(),Se(this,t,Oe,Me,be,{event:0})}}export{Je as E};