import{S as U,i as V,s as A,k as v,q as C,a as x,l as k,m as E,r as H,h as g,c as I,n as h,b as S,G as u,M as N,H as q,N as J,J as T,R as w,O as P}from"../chunks/index.b38356a1.js";function B(o,e,s){const r=o.slice();return r[11]=e[s],r[13]=s,r}function D(o){let e,s,r,_,c,p,f,a,d;function b(){return o[3](o[11])}function m(){return o[4](o[11])}return{c(){e=v("div"),s=v("img"),_=x(),c=v("img"),f=x(),this.h()},l(n){e=k(n,"DIV",{class:!0});var t=E(e);s=k(t,"IMG",{class:!0,src:!0,alt:!0}),_=I(t),c=k(t,"IMG",{class:!0,src:!0,alt:!0}),f=I(t),t.forEach(g),this.h()},h(){h(s,"class","front svelte-hu7yx8"),T(s.src,r=o[11].img)||h(s,"src",r),h(s,"alt",""),h(c,"class","back svelte-hu7yx8"),T(c.src,p="/nomai.webp")||h(c,"src",p),h(c,"alt",""),h(e,"class","card svelte-hu7yx8"),w(e,"flipped",o[11].flipped)},m(n,t){S(n,e,t),u(e,s),u(e,_),u(e,c),u(e,f),a||(d=[N(e,"click",b),N(e,"keypress",m)],a=!0)},p(n,t){o=n,t&1&&!T(s.src,r=o[11].img)&&h(s,"src",r),t&1&&w(e,"flipped",o[11].flipped)},d(n){n&&g(e),a=!1,P(d)}}}function R(o){let e,s,r,_,c,p,f,a,d,b,m=o[0],n=[];for(let t=0;t<m.length;t+=1)n[t]=D(B(o,m,t));return{c(){e=v("body"),s=v("button"),r=C("home"),_=x(),c=v("main"),p=v("div");for(let t=0;t<n.length;t+=1)n[t].c();f=x(),a=v("button"),this.h()},l(t){e=k(t,"BODY",{class:!0});var l=E(e);s=k(l,"BUTTON",{onclick:!0});var i=E(s);r=H(i,"home"),i.forEach(g),_=I(l),c=k(l,"MAIN",{class:!0});var y=E(c);p=k(y,"DIV",{class:!0});var O=E(p);for(let M=0;M<n.length;M+=1)n[M].l(O);O.forEach(g),f=I(y),a=k(y,"BUTTON",{class:!0}),E(a).forEach(g),y.forEach(g),l.forEach(g),this.h()},h(){h(s,"onclick","location.href='/';"),h(p,"class","row svelte-hu7yx8"),h(a,"class","restard svelte-hu7yx8"),h(c,"class","svelte-hu7yx8"),h(e,"class","svelte-hu7yx8")},m(t,l){S(t,e,l),u(e,s),u(s,r),u(e,_),u(e,c),u(c,p);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(p,null);u(c,f),u(c,a),d||(b=N(a,"click",o[5]),d=!0)},p(t,[l]){if(l&3){m=t[0];let i;for(i=0;i<m.length;i+=1){const y=B(t,m,i);n[i]?n[i].p(y,l):(n[i]=D(y),n[i].c(),n[i].m(p,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=m.length}},i:q,o:q,d(t){t&&g(e),J(n,t),d=!1,b()}}}function G(o){let e=o.length,s;for(;e!=0;)s=Math.floor(Math.random()*e),e--,[o[e],o[s]]=[o[s],o[e]];return o}function Y(o,e,s){let r=["/necosad.png","/coockie.png","/lal.png","/todo.png","/orb.gif","/sultan.png"],_=r.length,c=0,p=0;for(let l=0;l<_;l++)r.push(r[l]);G(r);let f=[];for(let l=0;l<r.length;l++)f.push({id:l,img:r[l],flipped:!1,completed:!1});let a=0;function d(l){!l.flipped&&a<2&&(l.flipped=!0,a++,a==1&&(c=l),a==2&&(p=l),c.img==p.img&&(l.completed=!0,c.completed=!0),a==2&&setTimeout(()=>{f.forEach(i=>{i.flipped=i.completed,i.completed&&(i.flipped=!0)}),a=0,s(0,f)},2e3),s(0,f))}function b(){G(r),f.forEach(l=>{l.completed=!1,l.flipped=!1,s(0,f)}),a=0}return[f,d,b,l=>{d(l)},l=>{d(l)},()=>{b()}]}class z extends U{constructor(e){super(),V(this,e,Y,R,A,{})}}export{z as component};
