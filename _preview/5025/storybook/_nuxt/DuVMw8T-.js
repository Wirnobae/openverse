import{w as k}from"./BvLt3-_D.js";import{s as w}from"./BOX21o1p.js";import{_ as B}from"./CtE17snF.js";import{d as $,C as a,W as D,w as C,D as h,R as S,ai as V,F as W,E as I,S as A}from"./lnpB3OcH.js";import{_ as F}from"./DlAUqK2U.js";const L=$({__name:"VButton",props:{as:{default:"button"},variant:{},pressed:{type:Boolean,default:void 0},size:{},disabled:{type:Boolean,default:!1},focusableWhenDisabled:{type:Boolean,default:!1},type:{default:"button"},connections:{default:()=>[]},hasIconStart:{type:Boolean,default:!1},hasIconEnd:{type:Boolean,default:!1},iconOnly:{type:Boolean,default:!1}},emits:["click","mousedown","keydown","focus","blur"],setup(r){const e=r,l=a(()=>e.as==="VLink"?B:e.as),o=D(),d=a(()=>["VLink","a"].includes(e.as)?void 0:e.type),u=a(()=>e.connections.map(t=>`connection-${t}`).join(" ")),p=a(()=>e.pressed||o["aria-pressed"]||o["aria-expanded"]),f=a(()=>p.value&&["bordered-white","bordered-tx","transparent-dark"].includes(e.variant)?`${e.variant}-pressed`:e.variant),i=a(()=>e.variant==="plain--avoid"),c=a(()=>e.variant.startsWith("filled-")),m=a(()=>e.variant.startsWith("bordered-")||e.variant.startsWith("transparent-")||e.variant==="plain"),b=a(()=>e.as!=="VLink"),v=a(()=>e.disabled&&e.focusableWhenDisabled||void 0),y=a(()=>e.disabled&&!e.focusableWhenDisabled&&b.value||void 0);return C(()=>e.as,t=>{["a","NuxtLink"].includes(t)&&o.href!==`#${w}`&&k(`Please use \`VLink\` with an \`href\` prop instead of ${t} for the button component`)},{immediate:!0}),(t,s)=>(W(),h(V(l.value),{type:d.value,class:S(["group/button button flex appearance-none items-center justify-center rounded-sm no-underline",[f.value,u.value,t.size,{"icon-only":t.iconOnly,"icon-start":t.hasIconStart,"icon-end":t.hasIconEnd,border:!i.value,"focus-visible:outline-tx":i.value,"focus-slim-filled":c.value,"focus-slim-tx":m.value}]]),"aria-pressed":t.pressed,"aria-disabled":v.value,disabled:y.value,onClick:s[0]||(s[0]=n=>t.$emit("click",n)),onMousedown:s[1]||(s[1]=n=>t.$emit("mousedown",n)),onKeydown:s[2]||(s[2]=n=>t.$emit("keydown",n)),onFocus:s[3]||(s[3]=n=>t.$emit("focus",n)),onBlur:s[4]||(s[4]=n=>t.$emit("blur",n))},{default:I(()=>[A(t.$slots,"default",{},void 0,!0)]),_:3},40,["type","class","aria-pressed","aria-disabled","disabled"]))}}),O=F(L,[["__scopeId","data-v-36aade34"]]);export{O as V};
