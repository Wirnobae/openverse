import{a as z}from"./D0ww02ZN.js";import{I as S,b as U}from"./CRWjC3CT.js";import{u as L}from"./PgLs4BFy.js";import{f as F}from"./Xs_VBmP5.js";import{u as P}from"./BNurbrIm.js";import{u as j}from"./D-c0xjtQ.js";import{u as A}from"./BsB6Edd_.js";import{_ as O}from"./CtE17snF.js";import{V as K}from"./ZjNmaQpL.js";import{d as k,F as o,K as c,D as $,E as M,Q as _,Y as C,V as m,G as y,L as g,I as v,w as I,U as G,H as q,S as V,O as H,R as N,ag as E,P as Q,C as D,M as R}from"./lnpB3OcH.js";import{u as W}from"./DKepsN1e.js";import{w as Y,v as J}from"./TZ8H9kUZ.js";import{u as X}from"./DyOEVqiO.js";import{h as Z}from"./DQnMOLSw.js";import{_ as ee}from"./Do2yKSxf.js";import{_ as se}from"./DlAUqK2U.js";const te=(e,t)=>e?e.split("/").length>1?e.split("/")[1]:e:t.t("mediaDetails.information.unknown"),re=(e,t)=>{if(!e.alt_files)return e.filetype??t.t("mediaDetails.information.unknown");const s=e.alt_files.map(n=>n.filetype).filter(n=>n!==e.filetype),r=Array.from(new Set(s));return e.filetype&&r.unshift(e.filetype),[...r].join(", ")},Re=(e,t,s)=>{const r=[];e.source&&e.providerName!==e.sourceName&&r.push({name:"provider",label:"mediaDetails.providerLabel",value:e.providerName||e.provider});const n=L().getSourceUrl(e.source??e.provider,e.frontendMediaType),u=e.sourceName??e.providerName??e.provider;r.push({name:"source",label:"mediaDetails.sourceLabel",source:e.source??e.provider,url:n,value:u}),e.category&&r.push({label:"mediaDetails.information.category",value:t.t(`filters.${e.frontendMediaType}Categories.${e.category}`)});const d=e.frontendMediaType===S?te(s==null?void 0:s.type,t):re(e,t);return r.push({label:"mediaDetails.information.type",value:d.toUpperCase()}),e.frontendMediaType===S&&r.push({label:"imageDetails.information.dimensions",value:`${t.t("imageDetails.information.sizeInPixels",{width:s==null?void 0:s.width,height:s==null?void 0:s.height})}`}),e.frontendMediaType===U&&(e.audio_set&&r.unshift({label:"audioDetails.table.album",value:e.audio_set.title,url:e.audio_set.foreign_landing_url}),e.genres&&e.genres.length>0&&r.push({label:"audioDetails.table.genre",value:e.genres.map(b=>z(b)).join(", ")}),e.sample_rate&&r.push({label:"audioDetails.table.sampleRate",value:e.sample_rate.toString()})),r},le={class:"label-bold flex justify-start overflow-hidden break-words p-1"},x=k({__name:"VMetadataValue",props:{datum:{}},emits:["click"],setup(e){return(t,s)=>(o(),c("dd",le,[t.datum.url?(o(),$(O,{key:0,href:t.datum.url,class:"focus-visible:ring-border-focus flex text-link focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-1","send-external-link-click-event":!1,onClick:s[0]||(s[0]=r=>t.$emit("click",t.datum.source))},{default:M(()=>[_("span",null,[C(m(t.datum.value),1),y(K,{name:"external-link",size:4,class:"ms-1 inline-flex","rtl-flip":""})])]),_:1},8,["href"])):(o(),c(g,{key:1},[C(m(t.datum.value),1)],64))]))}}),ae=["id","aria-hidden"],oe=k({__name:"VTooltip",props:{placement:{default:"bottom"},strategy:{default:"absolute"},describedBy:{},zIndex:{default:"popover"}},setup(e){const t=e,s=v(!1),r=v(null),n=()=>{p.value&&!Z(p.value)&&(s.value=!1)},u=()=>{s.value=!0},d={mouseover:u,mouseout:n,focus:u,blur:n},b=i=>{p.value=i;for(const[h,T]of Object.entries(d))i.addEventListener(h,T)},p=v(null);I(r,i=>{i&&b(i.firstElementChild)}),G(()=>{if(p.value)for(const[i,h]of Object.entries(d))p.value.removeEventListener(i,h)});const a=v(null),f=q(t),{style:l}=X({floatingElRef:a,floatingPropsRefs:{placement:f.placement,strategy:f.strategy,clippable:v(!1),visible:s,triggerElement:p}}),w=()=>{s.value&&(s.value=!1)};return(i,h)=>(o(),c("div",null,[_("div",{ref_key:"triggerContainerRef",ref:r,class:"flex w-min items-stretch whitespace-nowrap",onKeydown:Y(w,["esc"])},[V(i.$slots,"trigger",{open:u},()=>[y(ee,{label:i.describedBy,"aria-describedby":i.describedBy,variant:"bordered-white",size:"disabled",class:"h-4 w-4 hover:!border-tx","icon-props":{name:"info",size:4},onClick:u},null,8,["label","aria-describedby"])])],544),H(_("div",{id:i.describedBy,ref_key:"tooltipRef",ref:a,role:"tooltip",class:N(`z-${i.zIndex} w-max-content absolute left-0 top-0`),style:E({...Q(l)}),"aria-hidden":!s.value},[V(i.$slots,"default")],14,ae),[[J,s.value]])]))}}),ne={class:"caption-regular rounded-sm bg-tertiary px-2 py-1 text-over-dark"},B=k({__name:"VSourceProviderTooltip",props:{datum:{},describedBy:{}},setup(e){const t=e,{t:s}=W({useScope:"global"}),r=D(()=>t.datum.name?s(t.datum.name==="source"?"mediaDetails.sourceDescription":"mediaDetails.providerDescription"):"");return(n,u)=>(o(),c("dt",null,[C(m(n.$t(n.datum.label))+" ",1),y(oe,{placement:"top","described-by":n.describedBy,class:"ms-1"},{default:M(()=>[_("p",ne,m(r.value),1)]),_:1},8,["described-by"])]))}}),ie={key:1,class:"label-regular mb-1 flex flex-row ps-1"},ue={key:1,class:"grid grid-cols-[auto,1fr] gap-x-4 gap-y-2"},ce=["id"],pe=k({__name:"VMetadata",props:{metadata:{}},setup(e){const t=e,s=j(),r=A(),n=D(()=>r.isBreakpoint("sm")),u=a=>a.name&&(a.name==="source"||a.name==="provider")?a.name:"",d=D(()=>({"--column-count":t.metadata.length})),{$sendCustomEvent:b}=P(),p=a=>{const f=F(s==null?void 0:s.params.id);!a||!f||b("VISIT_SOURCE_LINK",{id:f,source:a})};return(a,f)=>n.value?(o(),c("dl",{key:0,class:"metadata grid gap-8",style:E(d.value)},[(o(!0),c(g,null,R(a.metadata,l=>(o(),c("div",{key:l.label},[u(l)?(o(),$(B,{key:0,"described-by":u(l),class:"label-regular -ms-1 mb-1 flex flex-row items-center ps-1",datum:l},null,8,["described-by","datum"])):(o(),c("dt",ie,m(a.$t(l.label)),1)),y(x,{datum:l,class:N({"-ms-1":!!u(l)}),onClick:w=>p(l.source)},null,8,["datum","class","onClick"])]))),128))],4)):(o(),c("dl",ue,[(o(!0),c(g,null,R(a.metadata,l=>(o(),c(g,{key:l.label},[u(l)?(o(),$(B,{key:0,"described-by":u(l),class:"label-regular -ms-1 flex flex-row items-center p-1 sm:ms-0 sm:py-0 sm:pe-0",datum:l},null,8,["described-by","datum"])):(o(),c("dt",{id:l.label,key:l.label,class:"label-regular flex flex-row pt-1"},m(a.$t(l.label)),9,ce)),y(x,{datum:l,onClick:w=>p(l.source)},null,8,["datum","onClick"])],64))),128))]))}}),xe=se(pe,[["__scopeId","data-v-069fe853"]]);export{xe as V,Re as g};
