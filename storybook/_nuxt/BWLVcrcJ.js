import{u as C}from"./CFYL8r3V.js";import{a as y}from"./CnOclXYv.js";import{c as x}from"./D0ww02ZN.js";import{_ as S}from"./_dzyiV2Y.js";import{V as m}from"./BY12SjvE.js";import{V}from"./BdoT2ima.js";import{d as w,z as $,Y as R,D as l,I as r,O as i,U as t,J as B,K as E,N,E as s,C as n,X as o}from"./B18F2_lz.js";const O={id:"safety-wall",class:"relative flex h-full w-full flex-grow items-center justify-center border-t border-default bg-default py-8 text-center"},T={class:"mx-auto max-w-2xl px-8 text-sm leading-relaxed"},I={class:"heading-5 mb-2"},j={class:"mb-2"},z={class:"mt-6 flex flex-col items-stretch justify-center gap-4 md:flex-row md:gap-6"},U=w({__name:"VSafetyWall",props:{sensitivity:{},id:{}},emits:["reveal"],setup(p,{emit:u}){const c=p,f=u,v=y(),h=$(()=>v.backToSearchPath),{$sendCustomEvent:_}=C(),g=()=>{_("GO_BACK_FROM_SENSITIVE_RESULT",{id:c.id,sensitivities:c.sensitivity.join(",")})},b=()=>{f("reveal")};return(e,a)=>{const k=R("i18n-t");return l(),r("div",O,[i("section",T,[i("h1",I,t(e.$t("sensitiveContent.singleResult.title")),1),i("p",j,t(e.$t("sensitiveContent.singleResult.explanation")),1),(l(!0),r(B,null,E(e.sensitivity,d=>(l(),r("p",{key:d},t(e.$t(`sensitiveContent.reasons.${N(x)(d)}`,{openverse:"Openverse"})),1))),128)),s(k,{scope:"global",tag:"p",class:"mt-2",keypath:"sensitiveContent.singleResult.learnMore"},{openverse:n(()=>a[0]||(a[0]=[o("Openverse")])),link:n(()=>[s(S,{class:"text-link hover:underline",href:"/sensitive-content"},{default:n(()=>[o(t(e.$t("sensitiveContent.singleResult.link")),1)]),_:1}),a[1]||(a[1]=o(" "+t(" ")))]),_:1}),i("div",z,[s(m,{as:"VLink",size:"large",variant:"filled-dark",class:"label-bold",href:h.value||"/",onMousedown:g},{default:n(()=>[o(t(e.$t("singleResult.back")),1)]),_:1},8,["href"]),s(m,{size:"large",variant:"bordered-gray",class:"label-bold","has-icon-end":"",onClick:b},{default:n(()=>[o(t(e.$t("sensitiveContent.singleResult.show"))+" ",1),s(V,{name:"eye-open"})]),_:1})])])])}}});export{U as _};
