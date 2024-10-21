import{G as et,T as Lt}from"./B18F2_lz.js";const q=Math.min,D=Math.max,G=Math.round,Y=Math.floor,L=t=>({x:t,y:t}),St={left:"right",right:"left",bottom:"top",top:"bottom"},Mt={start:"end",end:"start"};function mt(t,e,n){return D(t,q(e,n))}function H(t,e){return typeof t=="function"?t(e):t}function S(t){return t.split("-")[0]}function Q(t){return t.split("-")[1]}function it(t){return t==="x"?"y":"x"}function wt(t){return t==="y"?"height":"width"}function X(t){return["top","bottom"].includes(S(t))?"y":"x"}function yt(t){return it(X(t))}function kt(t,e,n){n===void 0&&(n=!1);const o=Q(t),i=yt(t),s=wt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=K(r)),[r,K(r)]}function Dt(t){const e=K(t);return[ot(t),e,ot(e)]}function ot(t){return t.replace(/start|end/g,e=>Mt[e])}function Ft(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function Pt(t,e,n,o){const i=Q(t);let s=Ft(S(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(ot)))),s}function K(t){return t.replace(/left|right|bottom|top/g,e=>St[e])}function Nt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Bt(t){return typeof t!="number"?Nt(t):{top:t,right:t,bottom:t,left:t}}function J(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function ht(t,e,n){let{reference:o,floating:i}=t;const s=X(e),r=yt(e),c=wt(r),l=S(e),f=s==="y",u=o.x+o.width/2-i.width/2,a=o.y+o.height/2-i.height/2,m=o[c]/2-i[c]/2;let d;switch(l){case"top":d={x:u,y:o.y-i.height};break;case"bottom":d={x:u,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:a};break;case"left":d={x:o.x-i.width,y:a};break;default:d={x:o.x,y:o.y}}switch(Q(e)){case"start":d[r]-=m*(n&&f?-1:1);break;case"end":d[r]+=m*(n&&f?-1:1);break}return d}const Ht=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let f=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:a}=ht(f,o,l),m=o,d={},h=0;for(let p=0;p<c.length;p++){const{name:x,fn:g}=c[p],{x:w,y,data:b,reset:v}=await g({x:u,y:a,initialPlacement:o,placement:m,strategy:i,middlewareData:d,rects:f,platform:r,elements:{reference:t,floating:e}});u=w??u,a=y??a,d={...d,[x]:{...d[x],...b}},v&&h<=50&&(h++,typeof v=="object"&&(v.placement&&(m=v.placement),v.rects&&(f=v.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:u,y:a}=ht(f,m,l)),p=-1)}return{x:u,y:a,placement:m,strategy:i,middlewareData:d}};async function st(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:u="viewport",elementContext:a="floating",altBoundary:m=!1,padding:d=0}=H(e,t),h=Bt(d),x=c[m?a==="floating"?"reference":"floating":a],g=J(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(x)))==null||n?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:f,rootBoundary:u,strategy:l})),w=a==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(y))?await(s.getScale==null?void 0:s.getScale(y))||{x:1,y:1}:{x:1,y:1},v=J(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:y,strategy:l}):w);return{top:(g.top-v.top+h.top)/b.y,bottom:(v.bottom-g.bottom+h.bottom)/b.y,left:(g.left-v.left+h.left)/b.x,right:(v.right-g.right+h.right)/b.x}}const Vt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:l,elements:f}=e,{mainAxis:u=!0,crossAxis:a=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:p=!0,...x}=H(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const g=S(i),w=S(c)===c,y=await(l.isRTL==null?void 0:l.isRTL(f.floating)),b=m||(w||!p?[K(c)]:Dt(c));!m&&h!=="none"&&b.push(...Pt(c,p,h,y));const v=[c,...b],O=await st(e,x),U=[];let $=((o=s.flip)==null?void 0:o.overflows)||[];if(u&&U.push(O[g]),a){const k=kt(i,r,y);U.push(O[k[0]],O[k[1]])}if($=[...$,{placement:i,overflows:U}],!U.every(k=>k<=0)){var ft,at;const k=(((ft=s.flip)==null?void 0:ft.index)||0)+1,dt=v[k];if(dt)return{data:{index:k,overflows:$},reset:{placement:dt}};let z=(at=$.filter(P=>P.overflows[0]<=0).sort((P,N)=>P.overflows[1]-N.overflows[1])[0])==null?void 0:at.placement;if(!z)switch(d){case"bestFit":{var ut;const P=(ut=$.map(N=>[N.placement,N.overflows.filter(_=>_>0).reduce((_,Et)=>_+Et,0)]).sort((N,_)=>N[1]-_[1])[0])==null?void 0:ut[0];P&&(z=P);break}case"initialPlacement":z=c;break}if(i!==z)return{reset:{placement:z}}}return{}}}};async function Wt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=S(n),c=Q(n),l=X(n)==="y",f=["left","top"].includes(r)?-1:1,u=s&&l?-1:1,a=H(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:h}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...a};return c&&typeof h=="number"&&(d=c==="end"?h*-1:h),l?{x:d*u,y:m*f}:{x:m*f,y:d*u}}const $t=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:c}=e,l=await Wt(e,t);return r===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:r}}}}},zt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:x=>{let{x:g,y:w}=x;return{x:g,y:w}}},...l}=H(t,e),f={x:n,y:o},u=await st(e,l),a=X(S(i)),m=it(a);let d=f[m],h=f[a];if(s){const x=m==="y"?"top":"left",g=m==="y"?"bottom":"right",w=d+u[x],y=d-u[g];d=mt(w,d,y)}if(r){const x=a==="y"?"top":"left",g=a==="y"?"bottom":"right",w=h+u[x],y=h-u[g];h=mt(w,h,y)}const p=c.fn({...e,[m]:d,[a]:h});return{...p,data:{x:p.x-n,y:p.y-o}}}}},_t=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:s,middlewareData:r}=e,{offset:c=0,mainAxis:l=!0,crossAxis:f=!0}=H(t,e),u={x:n,y:o},a=X(i),m=it(a);let d=u[m],h=u[a];const p=H(c,e),x=typeof p=="number"?{mainAxis:p,crossAxis:0}:{mainAxis:0,crossAxis:0,...p};if(l){const y=m==="y"?"height":"width",b=s.reference[m]-s.floating[y]+x.mainAxis,v=s.reference[m]+s.reference[y]-x.mainAxis;d<b?d=b:d>v&&(d=v)}if(f){var g,w;const y=m==="y"?"width":"height",b=["top","left"].includes(S(i)),v=s.reference[a]-s.floating[y]+(b&&((g=r.offset)==null?void 0:g[a])||0)+(b?0:x.crossAxis),O=s.reference[a]+s.reference[y]+(b?0:((w=r.offset)==null?void 0:w[a])||0)-(b?x.crossAxis:0);h<v?h=v:h>O&&(h=O)}return{[m]:d,[a]:h}}}};function W(t){return vt(t)?(t.nodeName||"").toLowerCase():"#document"}function A(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function E(t){var e;return(e=(vt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function vt(t){return t instanceof Node||t instanceof A(t).Node}function R(t){return t instanceof Element||t instanceof A(t).Element}function T(t){return t instanceof HTMLElement||t instanceof A(t).HTMLElement}function gt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof A(t).ShadowRoot}function j(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function It(t){return["table","td","th"].includes(W(t))}function Z(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function rt(t){const e=ct(),n=R(t)?C(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Xt(t){let e=M(t);for(;T(e)&&!V(e);){if(rt(e))return e;if(Z(e))return null;e=M(e)}return null}function ct(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function V(t){return["html","body","#document"].includes(W(t))}function C(t){return A(t).getComputedStyle(t)}function tt(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function M(t){if(W(t)==="html")return t;const e=t.assignedSlot||t.parentNode||gt(t)&&t.host||E(t);return gt(e)?e.host:e}function bt(t){const e=M(t);return V(e)?t.ownerDocument?t.ownerDocument.body:t.body:T(e)&&j(e)?e:bt(e)}function I(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=bt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=A(i);return s?e.concat(r,r.visualViewport||[],j(i)?i:[],r.frameElement&&n?I(r.frameElement):[]):e.concat(i,I(i,[],n))}function At(t){const e=C(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=T(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=G(n)!==s||G(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function lt(t){return R(t)?t:t.contextElement}function B(t){const e=lt(t);if(!T(e))return L(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=At(e);let r=(s?G(n.width):n.width)/o,c=(s?G(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const jt=L(0);function Rt(t){const e=A(t);return!ct()||!e.visualViewport?jt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ut(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==A(t)?!1:e}function F(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=lt(t);let r=L(1);e&&(o?R(o)&&(r=B(o)):r=B(t));const c=Ut(s,n,o)?Rt(s):L(0);let l=(i.left+c.x)/r.x,f=(i.top+c.y)/r.y,u=i.width/r.x,a=i.height/r.y;if(s){const m=A(s),d=o&&R(o)?A(o):o;let h=m,p=h.frameElement;for(;p&&o&&d!==h;){const x=B(p),g=p.getBoundingClientRect(),w=C(p),y=g.left+(p.clientLeft+parseFloat(w.paddingLeft))*x.x,b=g.top+(p.clientTop+parseFloat(w.paddingTop))*x.y;l*=x.x,f*=x.y,u*=x.x,a*=x.y,l+=y,f+=b,h=A(p),p=h.frameElement}}return J({width:u,height:a,x:l,y:f})}function Yt(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=E(o),c=e?Z(e.floating):!1;if(o===r||c&&s)return n;let l={scrollLeft:0,scrollTop:0},f=L(1);const u=L(0),a=T(o);if((a||!a&&!s)&&((W(o)!=="body"||j(r))&&(l=tt(o)),T(o))){const m=F(o);f=B(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-l.scrollLeft*f.x+u.x,y:n.y*f.y-l.scrollTop*f.y+u.y}}function qt(t){return Array.from(t.getClientRects())}function Ct(t){return F(E(t)).left+tt(t).scrollLeft}function Gt(t){const e=E(t),n=tt(t),o=t.ownerDocument.body,i=D(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=D(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Ct(t);const c=-n.scrollTop;return C(o).direction==="rtl"&&(r+=D(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function Kt(t,e){const n=A(t),o=E(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const f=ct();(!f||f&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function Jt(t,e){const n=F(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=T(t)?B(t):L(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,f=o*s.y;return{width:r,height:c,x:l,y:f}}function pt(t,e,n){let o;if(e==="viewport")o=Kt(t,n);else if(e==="document")o=Gt(E(t));else if(R(e))o=Jt(e,n);else{const i=Rt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return J(o)}function Ot(t,e){const n=M(t);return n===e||!R(n)||V(n)?!1:C(n).position==="fixed"||Ot(n,e)}function Qt(t,e){const n=e.get(t);if(n)return n;let o=I(t,[],!1).filter(c=>R(c)&&W(c)!=="body"),i=null;const s=C(t).position==="fixed";let r=s?M(t):t;for(;R(r)&&!V(r);){const c=C(r),l=rt(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||j(r)&&!l&&Ot(t,r))?o=o.filter(u=>u!==r):i=c,r=M(r)}return e.set(t,o),o}function Zt(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?Z(e)?[]:Qt(e,this._c):[].concat(n),o],c=r[0],l=r.reduce((f,u)=>{const a=pt(e,u,i);return f.top=D(a.top,f.top),f.right=q(a.right,f.right),f.bottom=q(a.bottom,f.bottom),f.left=D(a.left,f.left),f},pt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function te(t){const{width:e,height:n}=At(t);return{width:e,height:n}}function ee(t,e,n){const o=T(e),i=E(e),s=n==="fixed",r=F(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=L(0);if(o||!o&&!s)if((W(e)!=="body"||j(i))&&(c=tt(e)),o){const a=F(e,!0,s,e);l.x=a.x+e.clientLeft,l.y=a.y+e.clientTop}else i&&(l.x=Ct(i));const f=r.left+c.scrollLeft-l.x,u=r.top+c.scrollTop-l.y;return{x:f,y:u,width:r.width,height:r.height}}function nt(t){return C(t).position==="static"}function xt(t,e){return!T(t)||C(t).position==="fixed"?null:e?e(t):t.offsetParent}function Tt(t,e){const n=A(t);if(Z(t))return n;if(!T(t)){let i=M(t);for(;i&&!V(i);){if(R(i)&&!nt(i))return i;i=M(i)}return n}let o=xt(t,e);for(;o&&It(o)&&nt(o);)o=xt(o,e);return o&&V(o)&&nt(o)&&!rt(o)?n:o||Xt(t)||n}const ne=async function(t){const e=this.getOffsetParent||Tt,n=this.getDimensions,o=await n(t.floating);return{reference:ee(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function oe(t){return C(t).direction==="rtl"}const ie={convertOffsetParentRelativeRectToViewportRelativeRect:Yt,getDocumentElement:E,getClippingRect:Zt,getOffsetParent:Tt,getElementRects:ne,getClientRects:qt,getDimensions:te,getScale:B,isElement:R,isRTL:oe};function se(t,e){let n=null,o;const i=E(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:f,top:u,width:a,height:m}=t.getBoundingClientRect();if(c||e(),!a||!m)return;const d=Y(u),h=Y(i.clientWidth-(f+a)),p=Y(i.clientHeight-(u+m)),x=Y(f),w={rootMargin:-d+"px "+-h+"px "+-p+"px "+-x+"px",threshold:D(0,q(1,l))||1};let y=!0;function b(v){const O=v[0].intersectionRatio;if(O!==l){if(!y)return r();O?r(!1,O):o=setTimeout(()=>{r(!1,1e-7)},1e3)}y=!1}try{n=new IntersectionObserver(b,{...w,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,w)}n.observe(t)}return r(!0),s}function re(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,f=lt(t),u=i||s?[...f?I(f):[],...I(e)]:[];u.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),s&&g.addEventListener("resize",n)});const a=f&&c?se(f,n):null;let m=-1,d=null;r&&(d=new ResizeObserver(g=>{let[w]=g;w&&w.target===f&&d&&(d.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var y;(y=d)==null||y.observe(e)})),n()}),f&&!l&&d.observe(f),d.observe(e));let h,p=l?F(t):null;l&&x();function x(){const g=F(t);p&&(g.x!==p.x||g.y!==p.y||g.width!==p.width||g.height!==p.height)&&n(),p=g,h=requestAnimationFrame(x)}return n(),()=>{var g;u.forEach(w=>{i&&w.removeEventListener("scroll",n),s&&w.removeEventListener("resize",n)}),a==null||a(),(g=d)==null||g.disconnect(),d=null,l&&cancelAnimationFrame(h)}}const ce=st,le=$t,fe=zt,ae=Vt,ue=_t,de=(t,e,n)=>{const o=new Map,i={platform:ie,...n},s={...i.platform,_c:o};return Ht(t,e,{...i,platform:s})},me=20;function ge({floatingElRef:t,floatingPropsRefs:e}){const n=et(null),o=et(null),i=et(null),s=(c,l)=>re(c,l,()=>{de(c,l,{placement:e.placement.value,middleware:[le(8),ae(),fe({limiter:ue()}),r]}).then(({x:f,y:u})=>{o.value={left:`${f}px`,top:`${u}px`}})});Lt([t,e.triggerElement,e.visible],([c,l,f],u,a)=>{var m;if(!l||!c){(m=i.value)==null||m.call(i);return}f&&(i.value=s(l,c),a(()=>{var d;(d=i.value)==null||d.call(i)}))});const r={name:"detectMaxHeight",async fn(c){if(!e.clippable.value)return{};const l=await ce(c,{padding:me}),f=Math.max(l.top,l.bottom);if(f>0)n.value=c.rects.floating.height-f;else if(n.value){const u=t.value;u.scrollHeight>u.clientHeight?n.value>u.clientHeight&&(n.value+=Math.max(l.top,l.bottom)):n.value=null}return{}}};return{style:o,maxHeightRef:n}}export{ge as u};
