import{a as C}from"./C67TMzvP.js";import{s as _}from"./BS9R2VWD.js";import{u as x}from"./bBgZBGC4.js";import{_ as h}from"./5ehHOY6F.js";import{d as B,z as e,A as M,C as V,N as $,D as r,I as A,O as u,P as D,L as I}from"./lKNUlTH_.js";import{_ as N}from"./DlAUqK2U.js";const P=B({__name:"VAudioControl",props:{status:{},size:{},layout:{default:"full"},isTabbable:{type:Boolean,default:!0}},emits:["toggle"],setup(c,{emit:d}){const p={playing:"pause",paused:"play",played:"replay",loading:void 0},m={row:["end"],global:["top","end"],box:[],full:[]},s={small:{button:"small",icon:6},medium:{button:"large",icon:8},large:{button:"larger",icon:10}},o=c,b=d,v=e(()=>o.status==="playing"),n=e(()=>o.status==="loading"),f=e(()=>`playPause.${_[o.status]}`),l=e(()=>p[o.status]),g=e(()=>o.layout==="row"&&o.size==="small"?[]:[...m[o.layout]]),y=e(()=>s[o.size].button),t=e(()=>s[o.size].icon),w=a=>{o.isTabbable||a.preventDefault()},z=()=>{b("toggle",v.value||n.value?"paused":"playing")},{doneHydrating:k}=x();return(a,i)=>(r(),M(h,{tabindex:a.isTabbable?0:-1,class:"audio-control",size:y.value,variant:a.layout==="box"?"transparent-dark":"filled-dark","icon-props":l.value===void 0?void 0:{name:l.value,size:t.value},label:a.$t(f.value),connections:g.value,disabled:!$(k),onClick:C(z,["stop","prevent"]),onMousedown:w},{default:V(()=>[n.value?(r(),A("svg",{key:0,class:D(["loading p-2",`w-${t.value} h-${t.value}`]),xmlns:"http://www.w3.org/2000/svg",overflow:"visible",viewBox:"0 0 12 12"},i[0]||(i[0]=[u("circle",{cx:"6",cy:"6",r:"6","vector-effect":"non-scaling-stroke"},null,-1),u("path",{d:"m 6 0 a 6 6 0 0 1 6 6",stroke:"white","vector-effect":"non-scaling-stroke"},null,-1)]),2)):I("",!0)]),_:1},8,["tabindex","size","variant","icon-props","label","connections","disabled"]))}}),j=N(P,[["__scopeId","data-v-59d602d5"]]);export{j as V};
