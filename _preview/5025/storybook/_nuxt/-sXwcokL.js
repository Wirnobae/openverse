import{I as b}from"./fl49u9nx.js";import{d as p,F as s,K as n,Q as r,L as t,M as d,ag as y,C as v,a0 as k,I as x,R as w,P as V,N as f,D as g}from"./lnpB3OcH.js";import{_}from"./DlAUqK2U.js";const S={class:"mb-14 flex w-full flex-row"},F={class:"flex h-20 w-full flex-row gap-6"},T={class:"w-70 flex-shrink-0"},I={class:"flex h-full flex-col justify-around"},$=p({__name:"VAudioTrackSkeleton",setup(c){const a=(i=250,e=70)=>Math.floor(Math.random()*(i-e)+e);return(i,e)=>(s(),n("article",S,[e[2]||(e[2]=r("div",{class:"shimmering mr-4 h-20 w-20 flex-shrink-0 rounded bg-secondary"},null,-1)),r("div",F,[r("div",T,[r("div",I,[(s(),n(t,null,d(2,u=>r("div",{key:u,class:"row-line shimmering h-3 rounded bg-secondary",style:y({width:`${a()}px`})},null,4)),64)),e[0]||(e[0]=r("div",{class:"inline-flex gap-2 space-x-1"},[r("div",{class:"shimmering h-3 w-14 rounded bg-secondary"}),r("div",{class:"shimmering h-3 w-3 rounded-full bg-secondary"}),r("div",{class:"row-line shimmering h-3 w-30 rounded bg-secondary"})],-1))])]),e[1]||(e[1]=r("div",{class:"shimmering w-full rounded bg-secondary"},null,-1))])]))}}),B=_($,[["__scopeId","data-v-62afea92"]]),C={},M={class:"bg-gradient shimmering motion-reduce:!animate-none"};function z(c,a){return s(),n("div",M)}const h=_(C,[["render",z],["__scopeId","data-v-0f1ae904"]]),E={key:1,class:"masonry"},N=p({__name:"VGridSkeleton",props:{isForTab:{default:"image"},numElems:{}},setup(c){const a=c;function i(o=300,m=100){return Math.floor(Math.random()*(o-m)+m)}const e=v(()=>a.numElems?a.numElems:a.isForTab==="all"?20:a.isForTab==="image"?30:8),u=k(b,x(!1));return(o,m)=>(s(),n("section",null,[o.isForTab==="all"?(s(),n("div",{key:0,class:w(["grid grid-cols-2 gap-4",V(u)?"lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5":"sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"])},[(s(!0),n(t,null,d(e.value,l=>(s(),g(h,{key:l,class:"square"}))),128))],2)):f("",!0),o.isForTab==="image"?(s(),n("div",E,[(s(!0),n(t,null,d(e.value,l=>(s(),g(h,{key:l,class:"mb-4",style:y({height:`${i()}px`})},null,8,["style"]))),128))])):f("",!0),o.isForTab==="audio"?(s(!0),n(t,{key:2},d(e.value,l=>(s(),g(B,{key:l}))),128)):f("",!0)]))}}),G=_(N,[["__scopeId","data-v-a2113139"]]);export{G as V,h as a};
