import{s as U,j as h,e as y,C as j,k as b,N as z,a as N,d as p,f as u,i as g,q as P,m as H,t as I,b as q,o as M}from"../chunks/scheduler.DK5noefF.js";import{S as V,i as B,c as k,a as v,m as S,t as D,b as E,d as w}from"../chunks/index.OECaLbXR.js";import{S as F}from"../chunks/SetPageTitle.Cf9LBAU4.js";import{a as G}from"../chunks/apiNames.G3FqMHey.js";import{i as L}from"../chunks/authorization.BfNSR1Nc.js";import{S as J,D as K}from"../chunks/SongElement.m9wBhzD4.js";import{b_ as Q}from"../chunks/messages.DZzIl59o.js";function O(l){let s,i,r=Q()+"",m,f;return{c(){s=y("div"),i=y("a"),m=I(r),this.h()},l(t){s=N(t,"DIV",{class:!0});var o=q(s);i=N(o,"A",{class:!0,href:!0});var _=q(i);m=M(_,r),_.forEach(p),o.forEach(p),this.h()},h(){u(i,"class","btn"),u(i,"href",f=l[1](`/songbook/${l[0].song.slug}/edit`,void 0)),u(s,"class","my-4 flex justify-between")},m(t,o){g(t,s,o),P(s,i),P(i,m)},p(t,o){o&1&&f!==(f=t[1](`/songbook/${t[0].song.slug}/edit`,void 0))&&u(i,"href",f)},d(t){t&&p(s)}}}function R(l){let s,i,r,m,f,t,o,_,d,A=L(G.SONG.UPDATE,l[0].user),c,$;s=new F({props:{title:l[0].song.title}}),t=new J({props:{song:l[0].song,class:"my-0 p-0 shadow-none ring-transparent"}}),_=new K({});let a=A&&O(l);return{c(){k(s.$$.fragment),i=h(),r=y("meta"),f=h(),k(t.$$.fragment),o=h(),k(_.$$.fragment),d=h(),a&&a.c(),c=j(),this.h()},l(e){v(s.$$.fragment,e),i=b(e);const n=z("svelte-lsamal",document.head);r=N(n,"META",{name:!0,content:!0}),n.forEach(p),f=b(e),v(t.$$.fragment,e),o=b(e),v(_.$$.fragment,e),d=b(e),a&&a.l(e),c=j(),this.h()},h(){u(r,"name","description"),u(r,"content",m=l[0].song.lyrics)},m(e,n){S(s,e,n),g(e,i,n),P(document.head,r),g(e,f,n),S(t,e,n),g(e,o,n),S(_,e,n),g(e,d,n),a&&a.m(e,n),g(e,c,n),$=!0},p(e,[n]){const T={};n&1&&(T.title=e[0].song.title),s.$set(T),(!$||n&1&&m!==(m=e[0].song.lyrics))&&u(r,"content",m);const C={};n&1&&(C.song=e[0].song),t.$set(C),n&1&&(A=L(G.SONG.UPDATE,e[0].user)),A?a?a.p(e,n):(a=O(e),a.c(),a.m(c.parentNode,c)):a&&(a.d(1),a=null)},i(e){$||(D(s.$$.fragment,e),D(t.$$.fragment,e),D(_.$$.fragment,e),$=!0)},o(e){E(s.$$.fragment,e),E(t.$$.fragment,e),E(_.$$.fragment,e),$=!1},d(e){e&&(p(i),p(f),p(o),p(d),p(c)),w(s,e),p(r),w(t,e),w(_,e),a&&a.d(e)}}}function W(l,s,i){let{data:r}=s;const m=H("$paraglide-adapter-sveltekit:context");function f(t,o){return typeof t!="string"||!m?t:m.translateHref(t,o)}return l.$$set=t=>{"data"in t&&i(0,r=t.data)},[r,f]}class ne extends V{constructor(s){super(),B(this,s,W,R,U,{data:0})}}export{ne as component};