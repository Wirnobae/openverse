import{u as $}from"./PgLs4BFy.js";import{C as c,I as m,w as P,d as S,F as p,D as d,E as f,P as C,N as w,Q as F,G as L}from"./lnpB3OcH.js";import{u as N}from"./DKepsN1e.js";import{u as T}from"./D-c0xjtQ.js";import{u as V,a as k}from"./BJ-KpVIG.js";import{i as O}from"./CRWjC3CT.js";import{V as _}from"./Chx8gnn2.js";import{_ as B}from"./k58JPKRZ.js";import{_ as I}from"./CPRZBBxu.js";const U=({collectionParams:a,mediaType:e,i18n:o})=>({pageTitle:c(()=>{const t=a.value;if(t){if(t.collection==="creator")return`${t.creator} | Openverse`;if(t.collection==="source"){const r=$().getProviderName(t.source,e);return`${o.t(`collection.pageTitle.source.${e}`,{source:r})} | Openverse`}if(t.collection==="tag")return`${o.t(`collection.pageTitle.tag.${e}`,{tag:t.tag})} | Openverse`}return"Openly Licensed Images, Audio and More | Openverse"})}),J=({mediaType:a})=>{const e=V(),o=k(),s=c(()=>o.collectionParams),t=c(()=>e.fetchState.isFetching),r=m(e.resultItems[a]),i=m(),u=N({useScope:"global"}),h=c(()=>{if(!s.value)return"";const{collection:n,...M}=s.value;return u.t(`collection.ariaLabel.${n}.image`,{...M})}),l=async({shouldPersistMedia:n}={shouldPersistMedia:!1})=>(r.value=await e.fetchMedia({shouldPersistMedia:n}),i.value=r.value.length>0?r.value[0].creator_url:void 0,r.value),g=T(),v=c(()=>g.query);P(v,async()=>{await l()});const y=async()=>{await l({shouldPersistMedia:!0})},{pageTitle:b}=U({collectionParams:s,mediaType:a,i18n:u});return{collectionParams:s,pageTitle:b,collectionLabel:h,creatorUrl:i,isFetching:t,media:r,fetchMedia:l,loadMore:y}},Q={class:"mb-6 mt-4 lg:mb-10"},K=S({__name:"VCollectionResults",props:{collectionParams:{},collectionLabel:{},results:{},isFetching:{type:Boolean},searchTerm:{},creatorUrl:{}},emits:["load-more"],setup(a){return(e,o)=>(p(),d(B,{results:e.results,"is-fetching":e.isFetching,"search-term":e.searchTerm,"collection-label":e.collectionLabel,kind:"collection"},{header:f(()=>[C(O)(e.results.type)?(p(),d(_,{key:0,class:"mb-2 md:mb-3","media-type":e.results.type,"collection-params":e.collectionParams,"creator-url":e.creatorUrl},null,8,["media-type","collection-params","creator-url"])):w("",!0)]),footer:f(()=>[F("footer",Q,[L(I,{"search-type":e.results.type,kind:"collection","search-term":e.searchTerm,"is-fetching":e.isFetching,class:"mb-4",onLoadMore:o[0]||(o[0]=s=>e.$emit("load-more"))},null,8,["search-type","search-term","is-fetching"])])]),_:1},8,["results","is-fetching","search-term","collection-label"]))}});export{K as _,J as u};
