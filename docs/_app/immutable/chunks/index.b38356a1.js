function x(){}const X=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function J(){return Object.create(null)}function v(t){t.forEach(Y)}function S(t){return typeof t=="function"}function Gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function It(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function mt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push(pt(e,n))}function Kt(t,e,n,i){if(t){const s=Z(t,e,n,i);return t[0](s)}}function Z(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let u=0;u<r;u+=1)o[u]=e.dirty[u]|s[u];return o}return e.dirty|s}return e.dirty}function Ut(t,e,n,i,s,o){if(s){const r=Z(e,n,i,o);t.p(r,s)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Xt(t){return t??""}function Yt(t,e,n){return t.set(n),e}function Zt(t){return t&&S(t.destroy)?t.destroy:x}function te(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const tt=typeof window<"u";let et=tt?()=>window.performance.now():()=>Date.now(),z=tt?t=>requestAnimationFrame(t):x;const w=new Set;function nt(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&z(nt)}function it(t){let e;return w.size===0&&z(nt),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}const yt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in yt;let P=!1;function gt(){P=!0}function xt(){P=!1}function bt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:bt(1,s,d=>e[n[d]].claim_order,l))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,s=Math.max(a,s)}const o=[],r=[];let u=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);u>=c;u--)r.push(e[u]);u--}for(;u>=0;u--)r.push(e[u]);o.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<o.length&&r[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(r[c],f)}}function wt(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=F("style");return vt(st(t),e),e.sheet}function vt(t,e){return wt(t.head||t,e),e.sheet}function Tt(t,e){if(P){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){t.insertBefore(e,n||null)}function At(t,e,n){P&&!n?Tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function kt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function ne(){return W(" ")}function ie(){return W("")}function se(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function re(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mt(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,s=!1){rt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(e(u)){const c=n(u);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(e(u)){const c=n(u);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function St(t,e,n,i){return ot(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const u=s.attributes[r];n[u.name]||o.push(u.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function oe(t,e,n){return St(t,e,n,F)}function Ct(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function le(t){return Ct(t," ")}function K(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function ce(t,e){const n=K(t,"HTML_TAG_START",0),i=K(t,"HTML_TAG_END",n);if(n===i)return new Q(void 0,e);rt(t);const s=t.splice(n,i-n+1);A(s[0]),A(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Q(o,e)}function ue(t,e){e=""+e,t.data!==e&&(t.data=e)}function ae(t,e){t.value=e??""}function fe(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function de(t,e,n){t.classList[n?"add":"remove"](e)}function Lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function _e(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Dt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=kt(n.nodeName):this.e=F(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(A)}}class Q extends Dt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}}function he(t,e){return new t(e)}const D=new Map;let H=0;function Ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:Et(e),rules:{}};return D.set(t,n),n}function lt(t,e,n,i,s,o,r,u=0){const c=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=c){const p=e+(n-e)*o(m);l+=m*100+`%{${r(p,1-p)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Ht(f)}_${u}`,d=st(t),{stylesheet:_,rules:h}=D.get(d)||jt(d,t);h[a]||(h[a]=!0,_.insertRule(`@keyframes ${a} ${f}`,_.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${s}ms 1 both`,H+=1,a}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),H-=s,H||Pt())}function Pt(){z(()=>{H||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&A(e)}),D.clear())})}let k;function N(t){k=t}function G(){if(!k)throw new Error("Function called outside component initialization");return k}function me(t){G().$$.on_mount.push(t)}function pe(t){G().$$.after_update.push(t)}function ye(t){G().$$.on_destroy.push(t)}const $=[],U=[];let E=[];const V=[],ct=Promise.resolve();let B=!1;function ut(){B||(B=!0,ct.then(at))}function ge(){return ut(),ct}function M(t){E.push(t)}const O=new Set;let b=0;function at(){if(b!==0)return;const t=k;do{try{for(;b<$.length;){const e=$[b];b++,N(e),qt(e.$$)}}catch(e){throw $.length=0,b=0,e}for(N(null),$.length=0,b=0;U.length;)U.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];O.has(n)||(O.add(n),n())}E.length=0}while($.length);for(;V.length;)V.pop()();B=!1,O.clear(),N(t)}function qt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}function Ot(t){const e=[],n=[];E.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),E=e}let T;function ft(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function j(t,e,n){t.dispatchEvent(Lt(`${e?"intro":"outro"}${n}`))}const L=new Set;let g;function xe(){g={r:0,c:[],p:g}}function be(){g.r||v(g.c),g=g.p}function Rt(t,e){t&&t.i&&(L.delete(t),t.i(e))}function $e(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),g.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const dt={duration:0};function we(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,r,u,c=0;function l(){r&&R(t,r)}function f(){const{delay:d=0,duration:_=300,easing:h=X,tick:y=x,css:m}=s||dt;m&&(r=lt(t,0,1,_,d,h,m,c++)),y(0,1);const p=et()+d,_t=p+_;u&&u.abort(),o=!0,M(()=>j(t,!0,"start")),u=it(q=>{if(o){if(q>=_t)return y(1,0),j(t,!0,"end"),l(),o=!1;if(q>=p){const I=h((q-p)/_);y(I,1-I)}}return o})}let a=!1;return{start(){a||(a=!0,R(t),S(s)?(s=s(i),ft().then(f)):f())},invalidate(){a=!1},end(){o&&(l(),o=!1)}}}function Ee(t,e,n){const i={direction:"out"};let s=e(t,n,i),o=!0,r;const u=g;u.r+=1;function c(){const{delay:l=0,duration:f=300,easing:a=X,tick:d=x,css:_}=s||dt;_&&(r=lt(t,1,0,f,l,a,_));const h=et()+l,y=h+f;M(()=>j(t,!1,"start")),it(m=>{if(o){if(m>=y)return d(0,1),j(t,!1,"end"),--u.r||v(u.c),!1;if(m>=h){const p=a((m-h)/f);d(1-p,p)}}return o})}return S(s)?ft().then(()=>{s=s(i),c()}):c(),{end(l){l&&s.tick&&s.tick(1,0),o&&(r&&R(t,r),o=!1)}}}const Bt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Bt];function ve(t){t&&t.c()}function Te(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||M(()=>{const r=t.$$.on_mount.map(Y).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),o.forEach(M)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(Ot(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&($.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ne(t,e,n,i,s,o,r,u=[-1]){const c=k;N(t);const l=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,d,..._)=>{const h=_.length?_[0]:d;return l.ctx&&s(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Wt(t,a)),d}):[],l.update(),f=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){gt();const a=Mt(e.target);l.fragment&&l.fragment.l(a),a.forEach(A)}else l.fragment&&l.fragment.c();e.intro&&Rt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),xt(),at()}N(c)}class Ae{$destroy(){Ft(this,1),this.$destroy=x}$on(e,n){if(!S(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{zt as A,Ft as B,Kt as C,Ut as D,Vt as E,Qt as F,Tt as G,x as H,Jt as I,It as J,_e as K,Zt as L,se as M,ee as N,v as O,Xt as P,ye as Q,de as R,Ae as S,te as T,M as U,we as V,Ee as W,Yt as X,Q as Y,ce as Z,ae as _,ne as a,At as b,le as c,$e as d,ie as e,be as f,Rt as g,A as h,Ne as i,pe as j,F as k,oe as l,Mt as m,re as n,me as o,fe as p,W as q,Ct as r,Gt as s,ge as t,ue as u,xe as v,U as w,he as x,ve as y,Te as z};
