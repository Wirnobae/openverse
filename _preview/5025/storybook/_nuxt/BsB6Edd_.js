import{u as n}from"./DToSwJe0.js";import{d as o,b as a,p as d}from"./BInFDkJi.js";const i=Object.freeze({"2xl":1536,xl:1280,lg:1024,md:768,sm:640}),r=Object.freeze({...i,xs:0});Object.fromEntries(Object.entries(i).map(([s,e])=>[s,`${e}px`]).reverse());const m=Object.fromEntries(Object.entries(i).concat([["xs",340]]).map(([s,e])=>[s,{name:`${s} (${e}px)`,styles:{width:`${e}px`,height:"768px"}}])),l="https://translate.wordpress.org/projects/meta/openverse/",u=90,h=s=>!s||s.code==="en"?!1:(s.translated??100)<=u,p=s=>`${l}${s.code||"en"}/default/`,c=["2xl","xl","lg"];function S(s){return typeof s=="string"&&["light","dark","system"].includes(s)}const t=Object.keys(r),f=o("ui",{state:()=>({instructionsSnackbarState:"not_shown",innerFilterVisible:!1,isFilterDismissed:!1,isDesktopLayout:!1,breakpoint:"sm",dismissedBanners:[],shouldBlurSensitive:!0,revealedSensitiveResults:[],headerHeight:80,colorMode:"system",isDarkModeSeen:!1}),getters:{cookieState(s){return{instructionsSnackbarState:s.instructionsSnackbarState,isFilterDismissed:s.isFilterDismissed,breakpoint:s.breakpoint,dismissedBanners:Array.from(this.dismissedBanners),colorMode:s.colorMode,isDarkModeSeen:s.isDarkModeSeen}},areInstructionsVisible(s){return s.instructionsSnackbarState==="visible"},isFilterVisible(s){return s.isDesktopLayout&&!s.isFilterDismissed&&!s.innerFilterVisible&&(s.innerFilterVisible=!0),s.innerFilterVisible},shouldShowAnalyticsBanner(){return!this.dismissedBanners.includes("analytics")}},actions:{shouldShowTranslationBanner(s){const e=s.code;return!this.dismissedBanners.includes(`translation-${e}`)&&h(s)},showInstructionsSnackbar(){this.instructionsSnackbarState==="not_shown"&&(this.instructionsSnackbarState="visible")},hideInstructionsSnackbar(){this.instructionsSnackbarState==="visible"&&(this.instructionsSnackbarState="not_shown")},dismissInstructionsSnackbar(){this.instructionsSnackbarState="dismissed"},initFromCookies(s){let e=this.breakpoint;s.breakpoint&&Object.keys(r).includes(s.breakpoint)&&(e=s.breakpoint),this.updateBreakpoint(e,!1),typeof s.isFilterDismissed=="boolean"&&(this.isFilterDismissed=s.isFilterDismissed),this.innerFilterVisible=this.isDesktopLayout?!this.isFilterDismissed:!1,Array.isArray(s.dismissedBanners)&&(this.dismissedBanners=s.dismissedBanners),S(s.colorMode)&&this.setColorMode(s.colorMode,!1),typeof s.isDarkModeSeen=="boolean"&&this.setIsDarkModeSeen(s.isDarkModeSeen,!1),this.writeToCookie()},writeToCookie(){const s=n("ui",d);s.value={...a.ui,...this.cookieState}},updateBreakpoint(s,e=!0){this.breakpoint!==s&&(this.breakpoint=s,e&&this.writeToCookie(),this.isDesktopLayout=c.includes(s))},setFiltersState(s){this.innerFilterVisible=s,this.isDesktopLayout&&(this.isFilterDismissed=!s,this.writeToCookie())},toggleFilters(){this.setFiltersState(!this.isFilterVisible)},dismissBanner(s){this.dismissedBanners.includes(s)||(this.dismissedBanners.push(s),this.writeToCookie())},isBannerDismissed(s){return this.dismissedBanners.includes(s)},isBreakpoint(s){return t.indexOf(s)>=t.indexOf(this.breakpoint)},setShouldBlurSensitive(s){this.shouldBlurSensitive=s,this.revealedSensitiveResults=[]},setColorMode(s,e=!0){this.colorMode=s,e&&this.writeToCookie()},setIsDarkModeSeen(s,e=!0){this.isDarkModeSeen=s,e&&this.writeToCookie()},setHeaderHeight(s){this.headerHeight=Math.max(s,80)}}});export{r as A,i as S,m as V,p as c,f as u};
