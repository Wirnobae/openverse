import{_ as pe}from"./CSy7Uc4e.js";import{_ as me}from"./CxW0GE0L.js";import{f as ve}from"./Xs_VBmP5.js";import{f as he}from"./C4yIuh8P.js";import{u as be}from"./xwskLidM.js";import{u as ge,a as Se}from"./CIg47mny.js";import{v as p,w as I,a as b}from"./C67TMzvP.js";import{o as xe}from"./CzMkt2mC.js";import{e as K,g as we,a as _e}from"./DQnMOLSw.js";import{u as ye}from"./CPKoWrgC.js";import{u as Ce}from"./DsW0RRgO.js";import{u as ke}from"./bBgZBGC4.js";import{u as Re}from"./D218PAw5.js";import{u as Ie,a as Te}from"./nLTbcOiO.js";import{C as Be,R as $e}from"./-TaKdCZx.js";import{s as Ee}from"./BOX21o1p.js";import{_ as Fe}from"./B-7vEmi-.js";import{_ as Ne}from"./Bu79ORLM.js";import{_ as Oe}from"./CVr3Li91.js";import{_ as Ve}from"./DLmQARLo.js";import{V as P}from"./CxCG1Ups.js";import{d as Ae,G as s,z as g,T as L,I as Me,O as T,Q as De,N as t,M as m,E as c,U as Ke,R as Pe,P as Le,A as Ge,C as G,L as He,D as H,p as qe}from"./lKNUlTH_.js";const ze=["placeholder","value","aria-label","aria-expanded","aria-activedescendant"],ht=Ae({__name:"VHeaderMobile",emits:["open","close"],setup(Qe,{emit:q}){const d=s(null),S=s(null),x=s(null),B=s(null),z=g(()=>{var e;return((e=B.value)==null?void 0:e.$el)??void 0}),Q=s(null),U=Ie(),j=Te(),u=s(!1),r=s(!1),w=s(!1),J=g(()=>j.appliedFilterCount),$=g(()=>U.fetchState.isFetching),_=s({start:0,end:0}),{$sendCustomEvent:W}=be(),{updateSearchState:X,searchTerm:f,searchStatus:E}=Ce(W),o=s(f.value),F=()=>{const e=d.value;K(e),e.selectionStart=_.value.start,e.selectionEnd=_.value.end},Y=()=>{o.value&&o.value!==f.value&&(f.value=o.value),y(),N()},N=()=>{window.scrollTo({top:0,left:0,behavior:"auto"}),X()},O=()=>{r.value=!0,u.value=!0,n.value||oe()},v=()=>{r.value=!1,u.value=!1},V=()=>{const e=d.value,a=e.value.length>0?e.value.length-1:0;_.value={start:e.selectionStart??a,end:e.selectionEnd??a}},Z=()=>{o.value=d.value.value,V(),r.value&&!u.value&&O()},ee=()=>{o.value="",F()},{handleKeydown:A,handleSelect:te,handleClear:ae,recent:{isVisible:n,show:oe,hide:y,entries:ne,selectedIdx:C}}=Re({focusInput:F,term:o,isMobile:!0,isInputFocused:r});L(n,e=>{e||(v(),o.value!==f.value&&(f.value=o.value,N()))});const se=()=>r.value=!0,le=()=>{!n.value&&r.value&&v()};xe(S,e=>{var l,h;((h=(l=x.value)==null?void 0:l.$el)==null?void 0:h.contains(e.target))||(r.value=!1)});const re=()=>{u.value||(V(),O())},k=e=>{y(),qe().then(()=>{const a=e==="forward"?document.getElementById(Ee):we(document.body)[1];K(a??_e(document.body))})},ie=q,{close:M,onTriggerClick:ce,triggerA11yProps:ue}=ye({id:Be,visibleRef:w,nodeRef:S,lockBodyScroll:!0,emit:ie}),R=ge(),de=g(()=>ve(R==null?void 0:R.query.q));L(de,e=>{o.value=e??""});const{doneHydrating:fe}=ke();Se().beforeEach((e,a,l)=>{e.path!==a.path&&(M(),v()),l()});const D=(e,a)=>{var l;n.value?(e.preventDefault(),he((l=x.value)==null?void 0:l.$el,1)):a==="content-settings"&&k("forward")};return(e,a)=>{const l=pe,h=me;return H(),Me("header",{ref_key:"headerRef",ref:S,class:"main-header z-30 flex w-full items-center px-6 py-4"},[T("form",{action:"/search",class:Le(["search-bar group flex h-12 w-full flex-row items-center overflow-hidden rounded-sm",u.value||r.value?"bg-default ring ring-pink-8":"bg-surface"]),onSubmit:b(Y,["prevent"])},[De(e.$slots,"start",{},()=>[m(c(Fe,{"is-fetching":$.value,class:"focus-visible:me-1.5px focus-visible:ms-1.5px focus-visible:!h-[45px] focus-visible:max-w-[45px]"},null,8,["is-fetching"]),[[p,!t(n)]]),m(c(P,{icon:"chevron-back",label:e.$t("header.backButton"),"rtl-flip":!0,variant:"filled-gray",onClick:t(y),onKeydown:a[0]||(a[0]=I(b(i=>k("backward"),["shift"]),["tab"]))},null,8,["label","onClick"]),[[p,t(n)]])]),T("input",{id:"search-bar",ref_key:"searchInputRef",ref:d,name:"q",placeholder:e.$t("hero.search.placeholder"),type:"search",class:"search-field ms-1 h-full w-full flex-grow appearance-none rounded-none border-tx bg-tx text-2xl text-secondary placeholder-gray-8 hover:text-default hover:placeholder-gray-12 focus-visible:outline-none",value:o.value,"aria-label":e.$t("search.searchBarLabel",{openverse:"Openverse"}),autocomplete:"off",role:"combobox","aria-autocomplete":"list","aria-expanded":t(n)?"true":"false","aria-controls":"recent-searches-list","aria-haspopup":"listbox","aria-activedescendant":t(C)===void 0?void 0:`option-${t(C)}`,onInput:Z,onKeydown:a[1]||(a[1]=(...i)=>t(A)&&t(A)(...i)),onFocus:se,onFocusout:le,onClick:re},null,40,ze),m(c(P,{ref_key:"clearButtonRef",ref:Q,icon:"close-small",label:e.$t("browsePage.searchForm.clear"),onClick:ee,onKeydown:a[2]||(a[2]=I(b(i=>D(i,"clear-input"),["exact"]),["tab"]))},null,8,["label"]),[[p,t(n)&&o.value]]),m(T("span",{class:"info mx-4 hidden whitespace-nowrap text-xs group-hover:text-default group-focus:text-default md:flex"},Ke(t(E)),513),[[p,!u.value&&t(E)]]),m(c(Oe,Pe({ref_key:"contentSettingsButtonRef",ref:B,"is-pressed":w.value,"applied-filter-count":J.value},t(ue),{disabled:!t(fe),onClick:t(ce),onKeydown:a[3]||(a[3]=I(b(i=>D(i,"content-settings"),["exact"]),["tab"]))}),null,16,["is-pressed","applied-filter-count","disabled","onClick"]),[[p,!t(n)]]),c(Ne,{variant:"two-thirds",visible:w.value,"is-fetching":$.value,close:t(M),"trigger-element":z.value,labelledby:"content-settings-button"},null,8,["visible","is-fetching","close","trigger-element"])],34),t(n)?(H(),Ge(h,{key:0,id:t($e),visible:!0,hide:v,"trigger-element":d.value,"trap-focus":!1,"auto-focus-on-show":!1,"auto-focus-on-hide":!1,"content-classes":"px-3","aria-label":e.$t("recentSearches.heading"),variant:"mobile-input"},{default:G(()=>[c(l,null,{default:G(()=>[c(Ve,{ref_key:"recentSearchesRef",ref:x,class:"w-[100dvw] px-3","selected-idx":t(C),entries:t(ne),bordered:!1,onSelect:t(te),onClear:t(ae),onLastTab:a[4]||(a[4]=i=>k("forward"))},null,8,["selected-idx","entries","onSelect","onClear"])]),_:1})]),_:1},8,["id","trigger-element","aria-label"])):He("",!0)],512)}}});export{ht as _};
