import{s as ce,D as pe,j as A,e as h,t as R,k as y,a as g,b as v,o as V,d as f,f as c,F as fe,i as q,q as n,P as ue,G as _e,Q as be,S as se,w as he,l as W,m as ge}from"../chunks/scheduler.DK5noefF.js";import{S as ve,i as $e,c as Y,a as Z,m as ee,t as te,b as ae,d as re}from"../chunks/index.OECaLbXR.js";import{g as Ee}from"../chunks/spread.CgU5AtxT.js";import{M as we}from"../chunks/MarkdownBody.Dj9odoYq.js";import{M as Ae}from"../chunks/MemberAvatar.DsenHHaP.js";import{g as j}from"../chunks/member.Deknk2Gk.js";import{s as ye}from"../chunks/superForms.37TMp2uc.js";import{bC as De,bD as ke}from"../chunks/messages.DZzIl59o.js";import{S as Be}from"../chunks/SetPageTitle.Cf9LBAU4.js";function de(a){let r,l=a[1].bio+"",i;return{c(){r=h("p"),i=R(l),this.h()},l(s){r=g(s,"P",{class:!0});var u=v(r);i=V(u,l),u.forEach(f),this.h()},h(){c(r,"class","text-error")},m(s,u){q(s,r,u),n(r,i)},p(s,u){u&2&&l!==(l=s[1].bio+"")&&se(i,l)},d(s){s&&f(r)}}}function Se(a){let r,l,i,s,u,d,p,$=j(a[0])+"",D,M,k=a[0].studentId+"",B,P,_,t,E,oe=De()+"",G,Q,x,b,U,S,F,ne=ke()+"",X,z,w,H,J,ie;r=new Be({props:{title:"Bio - "+j(a[0])}}),s=new Ae({props:{member:a[0],class:"w-32 rounded-lg"}});let m=a[1].bio&&de(a),K=[{id:"bio"},{name:"bio"},{class:"textarea min-h-[20rem] rounded-none p-0"},{placeholder:"Bio"},a[2].bio],L={};for(let e=0;e<K.length;e+=1)L=pe(L,K[e]);return w=new we({props:{body:a[3].bio??""}}),{c(){Y(r.$$.fragment),l=A(),i=h("header"),Y(s.$$.fragment),u=A(),d=h("div"),p=h("h1"),D=R($),M=A(),B=R(k),P=A(),_=h("div"),t=h("form"),E=h("button"),G=R(oe),Q=A(),m&&m.c(),x=A(),b=h("textarea"),U=A(),S=h("div"),F=h("h2"),X=R(ne),z=A(),Y(w.$$.fragment),this.h()},l(e){Z(r.$$.fragment,e),l=y(e),i=g(e,"HEADER",{class:!0});var o=v(i);Z(s.$$.fragment,o),u=y(o),d=g(o,"DIV",{class:!0});var T=v(d);p=g(T,"H1",{class:!0});var O=v(p);D=V(O,$),O.forEach(f),M=y(T),B=V(T,k),T.forEach(f),o.forEach(f),P=y(e),_=g(e,"DIV",{class:!0});var I=v(_);t=g(I,"FORM",{id:!0,method:!0,action:!0,class:!0});var C=v(t);E=g(C,"BUTTON",{type:!0,class:!0});var le=v(E);G=V(le,oe),le.forEach(f),Q=y(C),m&&m.l(C),x=y(C),b=g(C,"TEXTAREA",{id:!0,name:!0,class:!0,placeholder:!0}),v(b).forEach(f),C.forEach(f),U=y(I),S=g(I,"DIV",{});var N=v(S);F=g(N,"H2",{class:!0});var me=v(F);X=V(me,ne),me.forEach(f),z=y(N),Z(w.$$.fragment,N),N.forEach(f),I.forEach(f),this.h()},h(){c(p,"class","text-3xl font-bold"),c(d,"class","flex flex-col"),c(i,"class","flex gap-4"),c(E,"type","submit"),c(E,"class","btn btn-secondary"),fe(b,L),c(t,"id","edit-member"),c(t,"method","POST"),c(t,"action",a[8]("?/update",void 0)),c(t,"class","form-control gap-2"),c(F,"class","py-3 text-xl italic"),c(_,"class","mt-4 grid gap-2 md:grid-cols-2")},m(e,o){ee(r,e,o),q(e,l,o),q(e,i,o),ee(s,i,null),n(i,u),n(i,d),n(d,p),n(p,D),n(d,M),n(d,B),q(e,P,o),q(e,_,o),n(_,t),n(t,E),n(E,G),n(t,Q),m&&m.m(t,null),n(t,x),n(t,b),b.autofocus&&b.focus(),ue(b,a[3].bio),n(_,U),n(_,S),n(S,F),n(F,X),n(S,z),ee(w,S,null),H=!0,J||(ie=[_e(b,"input",a[10]),be(a[7].call(null,t))],J=!0)},p(e,[o]){const T={};o&1&&(T.title="Bio - "+j(e[0])),r.$set(T);const O={};o&1&&(O.member=e[0]),s.$set(O),(!H||o&1)&&$!==($=j(e[0])+"")&&se(D,$),(!H||o&1)&&k!==(k=e[0].studentId+"")&&se(B,k),e[1].bio?m?m.p(e,o):(m=de(e),m.c(),m.m(t,x)):m&&(m.d(1),m=null),fe(b,L=Ee(K,[{id:"bio"},{name:"bio"},{class:"textarea min-h-[20rem] rounded-none p-0"},{placeholder:"Bio"},o&4&&e[2].bio])),o&8&&ue(b,e[3].bio);const I={};o&8&&(I.body=e[3].bio??""),w.$set(I)},i(e){H||(te(r.$$.fragment,e),te(s.$$.fragment,e),te(w.$$.fragment,e),H=!0)},o(e){ae(r.$$.fragment,e),ae(s.$$.fragment,e),ae(w.$$.fragment,e),H=!1},d(e){e&&(f(l),f(i),f(P),f(_)),re(r,e),re(s),m&&m.d(),re(w),J=!1,he(ie)}}}function Te(a,r,l){let i,s,u,d,{data:p}=r;const{form:$,errors:D,constraints:M,enhance:k}=ye(p.form);W(a,$,t=>l(3,d=t)),W(a,D,t=>l(1,s=t)),W(a,M,t=>l(2,u=t));const B=ge("$paraglide-adapter-sveltekit:context");function P(t,E){return typeof t!="string"||!B?t:B.translateHref(t,E)}function _(){d.bio=this.value,$.set(d)}return a.$$set=t=>{"data"in t&&l(9,p=t.data)},a.$$.update=()=>{a.$$.dirty&512&&l(0,i=p.member)},[i,s,u,d,$,D,M,k,P,p,_]}class qe extends ve{constructor(r){super(),$e(this,r,Te,Se,ce,{data:9})}}export{qe as component};