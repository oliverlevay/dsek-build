import{s as z,D as me,e as _,j as N,a as g,b as A,k as P,E as J,d,F as X,f as m,p as Y,i as F,q as $,Q as se,n as U,l as q,m as ne,t as ie,o as le,S as oe,R as ce,x as de}from"../chunks/scheduler.DK5noefF.js";import{S as W,i as j,c as S,a as D,m as M,t as w,b as E,d as C,g as fe,e as ue}from"../chunks/index.OECaLbXR.js";import{e as Z}from"../chunks/each.Dbd03sI1.js";import{e as pe}from"../chunks/forms.DDTWXYJD.js";import{L as he}from"../chunks/LoadingButton.CMLw8r2v.js";import{T as _e}from"../chunks/TagChip.BKSCnMT_.js";import{S as ge}from"../chunks/SetPageTitle.Cf9LBAU4.js";import{A as $e}from"../chunks/AuthorSignature.DMwuj1EW.js";import{C as be}from"../chunks/CommentSection.BdNojWkP.js";import{f7 as ke,f8 as ve,f9 as Ae,fa as we,fb as Ie}from"../chunks/messages.DZzIl59o.js";import{A as Le}from"../chunks/Article.BBb4dy5M.js";import{g as Ee}from"../chunks/spread.CgU5AtxT.js";import{p as Fe}from"../chunks/stores.BdoTh84D.js";import{s as Te}from"../chunks/superForms.37TMp2uc.js";import{a as Se}from"../chunks/apiNames.G3FqMHey.js";import{i as De}from"../chunks/authorization.BfNSR1Nc.js";import{M as Me}from"../chunks/MembersList.D_3QXvAN.js";import{g as H}from"../chunks/member.Deknk2Gk.js";function x(l){let e,r=l[4].articleId+"",s;return{c(){e=_("div"),s=ie(r),this.h()},l(t){e=g(t,"DIV",{class:!0});var n=A(e);s=le(n,r),n.forEach(d),this.h()},h(){m(e,"class","text-error")},m(t,n){F(t,e,n),$(e,s)},p(t,n){n&16&&r!==(r=t[4].articleId+"")&&oe(s,r)},d(t){t&&d(e)}}}function Ce(l){let e,r,s,t,n,a,i,o,c,f,u,I="",L,k,O="",p,T,B,K,R=[{type:"hidden"},{value:l[0]},{name:"articleId"},l[3]],y={};for(let h=0;h<R.length;h+=1)y=me(y,R[h]);let v=l[4].articleId&&x(l);return{c(){e=_("form"),r=_("input"),s=N(),v&&v.c(),t=N(),n=_("div"),a=_("button"),i=_("label"),o=_("input"),f=N(),u=_("span"),u.innerHTML=I,L=N(),k=_("span"),k.innerHTML=O,this.h()},l(h){e=g(h,"FORM",{method:!0,action:!0});var b=A(e);r=g(b,"INPUT",{type:!0,name:!0}),s=P(b),v&&v.l(b),t=P(b),n=g(b,"DIV",{class:!0,"data-tip":!0});var Q=A(n);a=g(Q,"BUTTON",{type:!0});var G=A(a);i=g(G,"LABEL",{class:!0});var V=A(i);o=g(V,"INPUT",{type:!0}),f=P(V),u=g(V,"SPAN",{class:!0,"data-svelte-h":!0}),J(u)!=="svelte-12wgvli"&&(u.innerHTML=I),L=P(V),k=g(V,"SPAN",{class:!0,"data-svelte-h":!0}),J(k)!=="svelte-d5ia9n"&&(k.innerHTML=O),V.forEach(d),G.forEach(d),Q.forEach(d),b.forEach(d),this.h()},h(){X(r,y),m(o,"type","checkbox"),o.disabled=c=!l[2],o.checked=l[1],m(u,"class","swap-on i-mdi-thumb-up h-10 w-10"),m(k,"class","swap-off i-mdi-thumb-up-outline h-10 w-10"),m(i,"class","swap"),a.disabled=p=!l[2],m(a,"type","submit"),m(n,"class","m-4 hover:opacity-50 hover:transition-opacity"),m(n,"data-tip",ke()),Y(n,"tooltip",!l[2]),m(e,"method","POST"),m(e,"action",T=l[8](`?/${l[1]?"dislike":"like"}`,void 0))},m(h,b){F(h,e,b),$(e,r),r.autofocus&&r.focus(),$(e,s),v&&v.m(e,null),$(e,t),$(e,n),$(n,a),$(a,i),$(i,o),$(i,f),$(i,u),$(i,L),$(i,k),B||(K=se(l[7].call(null,e)),B=!0)},p(h,[b]){X(r,y=Ee(R,[{type:"hidden"},b&1&&{value:h[0]},{name:"articleId"},b&8&&h[3]])),h[4].articleId?v?v.p(h,b):(v=x(h),v.c(),v.m(e,t)):v&&(v.d(1),v=null),b&4&&c!==(c=!h[2])&&(o.disabled=c),b&2&&(o.checked=h[1]),b&4&&p!==(p=!h[2])&&(a.disabled=p),b&4&&Y(n,"tooltip",!h[2]),b&2&&T!==(T=h[8](`?/${h[1]?"dislike":"like"}`,void 0))&&m(e,"action",T)},i:U,o:U,d(h){h&&d(e),v&&v.d(),B=!1,K()}}}function Ne(l,e,r){let s,t,n,a,i;q(l,Fe,p=>r(11,n=p));let{likers:o}=e,{articleId:c}=e,{likeForm:f}=e;const{errors:u,constraints:I,enhance:L}=Te(f,{id:c,invalidateAll:!0});q(l,u,p=>r(4,i=p)),q(l,I,p=>r(3,a=p));const k=ne("$paraglide-adapter-sveltekit:context");function O(p,T){return typeof p!="string"||!k?p:k.translateHref(p,T)}return l.$$set=p=>{"likers"in p&&r(9,o=p.likers),"articleId"in p&&r(0,c=p.articleId),"likeForm"in p&&r(10,f=p.likeForm)},l.$$.update=()=>{l.$$.dirty&2048&&r(2,s=De(Se.NEWS.LIKE,n.data.user)),l.$$.dirty&2560&&r(1,t=o.some(p=>{var T;return p.studentId===((T=n.data.user)==null?void 0:T.studentId)}))},[c,t,s,a,i,u,I,L,O,o,f,n]}class Pe extends W{constructor(e){super(),j(this,e,Ne,Ce,z,{likers:9,articleId:0,likeForm:10})}}function Ve(l){let e;return{c(){e=ie(l[1])},l(r){e=le(r,l[1])},m(r,s){F(r,e,s)},p(r,s){s&2&&oe(e,r[1])},d(r){r&&d(e)}}}function He(l){let e,r;return e=new Me({props:{members:l[0],class:"link text-sm opacity-40 hover:opacity-60",$$slots:{default:[Ve]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,t){M(e,s,t),r=!0},p(s,[t]){const n={};t&1&&(n.members=s[0]),t&10&&(n.$$scope={dirty:t,ctx:s}),e.$set(n)},i(s){r||(w(e.$$.fragment,s),r=!0)},o(s){E(e.$$.fragment,s),r=!1},d(s){C(e,s)}}}function Oe(l,e,r){let s,{likers:t}=e;const n=a=>{switch(a.length){case 0:return"";case 1:return H(a[0]);case 2:return Ae({name1:H(a[0]),name2:H(a[1])});default:return ve({name1:H(a[0]),name2:H(a[1]),others:a.length-2})}};return l.$$set=a=>{"likers"in a&&r(0,t=a.likers)},l.$$.update=()=>{l.$$.dirty&1&&r(1,s=n(t))},[t,s]}class ye extends W{constructor(e){super(),j(this,e,Oe,He,z,{likers:0})}}function ee(l,e,r){const s=l.slice();return s[8]=e[r],s}function Be(l){var s;let e,r;return e=new $e({props:{slot:"author",member:l[3].member,position:(s=l[3].mandate)==null?void 0:s.position,customAuthor:l[3].customAuthor,type:l[1].author.type}}),{c(){S(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){M(e,t,n),r=!0},p(t,n){var i;const a={};n&8&&(a.member=t[3].member),n&8&&(a.position=(i=t[3].mandate)==null?void 0:i.position),n&8&&(a.customAuthor=t[3].customAuthor),n&2&&(a.type=t[1].author.type),e.$set(a)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function te(l){let e,r,s;return{c(){e=_("a"),r=_("span"),this.h()},l(t){e=g(t,"A",{href:!0,class:!0,title:!0});var n=A(e);r=g(n,"SPAN",{class:!0}),A(r).forEach(d),n.forEach(d),this.h()},h(){m(r,"class","i-mdi-edit text-xl"),m(e,"href",s=l[4](`/news/${l[1].slug}/edit`,void 0)),m(e,"class","btn btn-square btn-ghost btn-md"),m(e,"title",we())},m(t,n){F(t,e,n),$(e,r)},p(t,n){n&2&&s!==(s=t[4](`/news/${t[1].slug}/edit`,void 0))&&m(e,"href",s)},d(t){t&&d(e)}}}function re(l){let e,r,s,t,n,a;return r=new he({props:{isLoading:l[2],type:"submit",class:"btn btn-square btn-ghost btn-md",title:Ie(),$$slots:{default:[Re]},$$scope:{ctx:l}}}),{c(){e=_("form"),S(r.$$.fragment),this.h()},l(i){e=g(i,"FORM",{method:!0,action:!0});var o=A(e);D(r.$$.fragment,o),o.forEach(d),this.h()},h(){m(e,"method","POST"),m(e,"action",l[4]("?/removeArticle",void 0))},m(i,o){F(i,e,o),M(r,e,null),t=!0,n||(a=se(s=pe.call(null,e,l[5])),n=!0)},p(i,o){const c={};o&4&&(c.isLoading=i[2]),o&2048&&(c.$$scope={dirty:o,ctx:i}),r.$set(c),s&&de(s.update)&&o&4&&s.update.call(null,i[5])},i(i){t||(w(r.$$.fragment,i),t=!0)},o(i){E(r.$$.fragment,i),t=!1},d(i){i&&d(e),C(r),n=!1,a()}}}function Re(l){let e;return{c(){e=_("span"),this.h()},l(r){e=g(r,"SPAN",{class:!0}),A(e).forEach(d),this.h()},h(){m(e,"class","i-mdi-delete text-xl")},m(r,s){F(r,e,s)},p:U,d(r){r&&d(e)}}}function qe(l){let e,r,s,t=l[0].canEdit&&te(l),n=l[0].canDelete&&re(l);return{c(){e=_("div"),t&&t.c(),r=N(),n&&n.c(),this.h()},l(a){e=g(a,"DIV",{slot:!0,class:!0});var i=A(e);t&&t.l(i),r=P(i),n&&n.l(i),i.forEach(d),this.h()},h(){m(e,"slot","actions"),m(e,"class","flex flex-row")},m(a,i){F(a,e,i),t&&t.m(e,null),$(e,r),n&&n.m(e,null),s=!0},p(a,i){a[0].canEdit?t?t.p(a,i):(t=te(a),t.c(),t.m(e,r)):t&&(t.d(1),t=null),a[0].canDelete?n?(n.p(a,i),i&1&&w(n,1)):(n=re(a),n.c(),w(n,1),n.m(e,null)):n&&(fe(),E(n,1,1,()=>{n=null}),ue())},i(a){s||(w(n),s=!0)},o(a){E(n),s=!1},d(a){a&&d(e),t&&t.d(),n&&n.d()}}}function ae(l){let e,r;return e=new _e({props:{tag:l[8]}}),{c(){S(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,t){M(e,s,t),r=!0},p(s,t){const n={};t&2&&(n.tag=s[8]),e.$set(n)},i(s){r||(w(e.$$.fragment,s),r=!0)},o(s){E(e.$$.fragment,s),r=!1},d(s){C(e,s)}}}function Ue(l){let e,r,s=Z(l[1].tags),t=[];for(let a=0;a<s.length;a+=1)t[a]=ae(ee(l,s,a));const n=a=>E(t[a],1,1,()=>{t[a]=null});return{c(){e=_("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=g(a,"DIV",{slot:!0,class:!0});var i=A(e);for(let o=0;o<t.length;o+=1)t[o].l(i);i.forEach(d),this.h()},h(){m(e,"slot","tags"),m(e,"class","flex flex-row flex-wrap gap-2")},m(a,i){F(a,e,i);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null);r=!0},p(a,i){if(i&2){s=Z(a[1].tags);let o;for(o=0;o<s.length;o+=1){const c=ee(a,s,o);t[o]?(t[o].p(c,i),w(t[o],1)):(t[o]=ae(c),t[o].c(),w(t[o],1),t[o].m(e,null))}for(fe(),o=s.length;o<t.length;o+=1)n(o);ue()}},i(a){if(!r){for(let i=0;i<s.length;i+=1)w(t[i]);r=!0}},o(a){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)E(t[i]);r=!1},d(a){a&&d(e),ce(t,a)}}}function ze(l){let e,r,s,t,n,a,i,o,c;return s=new ye({props:{likers:l[1].likers}}),n=new Pe({props:{likers:l[1].likers,likeForm:l[0].likeForm,articleId:l[1].id}}),o=new be({props:{type:"NEWS",comments:l[1].comments,taggedMembers:l[0].allTaggedMembers,commentForm:l[0].commentForm,removeCommentForm:l[0].removeCommentForm}}),{c(){e=_("div"),r=_("div"),S(s.$$.fragment),t=N(),S(n.$$.fragment),a=N(),i=_("div"),S(o.$$.fragment),this.h()},l(f){e=g(f,"DIV",{slot:!0,class:!0});var u=A(e);r=g(u,"DIV",{class:!0});var I=A(r);D(s.$$.fragment,I),t=P(I),D(n.$$.fragment,I),I.forEach(d),a=P(u),i=g(u,"DIV",{class:!0});var L=A(i);D(o.$$.fragment,L),L.forEach(d),u.forEach(d),this.h()},h(){m(r,"class","flex flex-col items-start gap-2"),m(i,"class","mt-4 flex flex-col gap-2"),m(e,"slot","after-body"),m(e,"class","mt-4")},m(f,u){F(f,e,u),$(e,r),M(s,r,null),$(r,t),M(n,r,null),$(e,a),$(e,i),M(o,i,null),c=!0},p(f,u){const I={};u&2&&(I.likers=f[1].likers),s.$set(I);const L={};u&2&&(L.likers=f[1].likers),u&1&&(L.likeForm=f[0].likeForm),u&2&&(L.articleId=f[1].id),n.$set(L);const k={};u&2&&(k.comments=f[1].comments),u&1&&(k.taggedMembers=f[0].allTaggedMembers),u&1&&(k.commentForm=f[0].commentForm),u&1&&(k.removeCommentForm=f[0].removeCommentForm),o.$set(k)},i(f){c||(w(s.$$.fragment,f),w(n.$$.fragment,f),w(o.$$.fragment,f),c=!0)},o(f){E(s.$$.fragment,f),E(n.$$.fragment,f),E(o.$$.fragment,f),c=!1},d(f){f&&d(e),C(s),C(n),C(o)}}}function We(l){let e,r,s,t,n;return e=new ge({props:{title:l[1].header}}),t=new Le({props:{article:l[1],$$slots:{"after-body":[ze],tags:[Ue],actions:[qe],author:[Be]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment),r=N(),s=_("article"),S(t.$$.fragment)},l(a){D(e.$$.fragment,a),r=P(a),s=g(a,"ARTICLE",{});var i=A(s);D(t.$$.fragment,i),i.forEach(d)},m(a,i){M(e,a,i),F(a,r,i),F(a,s,i),M(t,s,null),n=!0},p(a,[i]){const o={};i&2&&(o.title=a[1].header),e.$set(o);const c={};i&2&&(c.article=a[1]),i&2063&&(c.$$scope={dirty:i,ctx:a}),t.$set(c)},i(a){n||(w(e.$$.fragment,a),w(t.$$.fragment,a),n=!0)},o(a){E(e.$$.fragment,a),E(t.$$.fragment,a),n=!1},d(a){a&&(d(r),d(s)),C(e,a),C(t)}}}function je(l,e,r){let s,t,{data:n}=e,a=!1;const i=ne("$paraglide-adapter-sveltekit:context");function o(f,u){return typeof f!="string"||!i?f:i.translateHref(f,u)}const c=()=>(r(2,a=!0),({update:f})=>{f(),r(2,a=!1)});return l.$$set=f=>{"data"in f&&r(0,n=f.data)},l.$$.update=()=>{l.$$.dirty&1&&r(1,s=n.article),l.$$.dirty&2&&r(3,t=s.author)},[n,s,a,t,o,c]}class ut extends W{constructor(e){super(),j(this,e,je,We,z,{data:0})}}export{ut as component};
