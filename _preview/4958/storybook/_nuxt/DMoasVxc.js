import{v as g}from"./C67TMzvP.js";import{u as y}from"./DYkE03l5.js";import{a as O}from"./CPKoWrgC.js";import{G as h,z as b,d as w,V as v,F as B,M as F,I as C,Q as E,P as R,af as k,N as t,Z as x,D as z}from"./lKNUlTH_.js";import{V as S}from"./fl49u9nx.js";function D({popoverRef:n,popoverPropsRefs:e,emit:u,attrs:d}){const{onKeyDown:f,onBlur:m}=O({visibleRef:e.visible,hideRef:e.hide,dialogElements:{dialogRef:n,triggerElementRef:e.triggerElement,initialFocusElementRef:h(null)},dialogOptions:{autoFocusOnShowRef:e.autoFocusOnShow,autoFocusOnHideRef:e.autoFocusOnHide,hideOnClickOutsideRef:e.hideOnClickOutside,hideOnEscRef:e.hideOnEsc,trapFocusRef:e.trapFocus},emit:u,attrs:d}),{style:i,maxHeightRef:a}=y({floatingElRef:n,floatingPropsRefs:e}),l=b(()=>{const s=a.value;return s&&e.clippable?{"--popover-height":`${s}px`}:{}});return{onKeyDown:f,onBlur:m,style:i,heightProperties:l}}const H=["id","aria-hidden"],G=w({__name:"VPopoverContent",props:{id:{},visible:{type:Boolean},hide:{},hideOnEsc:{type:Boolean,default:!0},hideOnClickOutside:{type:Boolean,default:!0},autoFocusOnShow:{type:Boolean,default:!0},autoFocusOnHide:{type:Boolean,default:!0},triggerElement:{},placement:{default:"bottom-end"},strategy:{default:"absolute"},zIndex:{},clippable:{type:Boolean,default:!1},trapFocus:{type:Boolean,default:!0}},emits:["keydown","blur"],setup(n,{emit:e}){const u=n,d=e,f=v();x(S,!0);const m=B(u),i=h(null),{onKeyDown:a,onBlur:l,heightProperties:s,style:p}=D({popoverRef:i,popoverPropsRefs:m,emit:d,attrs:f});return(o,r)=>F((z(),C("div",{id:o.id,ref_key:"popoverRef",ref:i,role:"dialog","aria-modal":"true",class:R(["popover-content w-max-content absolute left-0 top-0 overflow-y-auto overflow-x-hidden rounded-sm border border-default bg-overlay shadow",`z-${o.zIndex}`]),style:k({...t(s),...t(p)}),tabindex:-1,"aria-hidden":!o.visible,onBlur:r[0]||(r[0]=(...c)=>t(l)&&t(l)(...c)),onKeydown:r[1]||(r[1]=(...c)=>t(a)&&t(a)(...c))},[E(o.$slots,"default")],46,H)),[[g,o.visible]])}});export{G as _};
