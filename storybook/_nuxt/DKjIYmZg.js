import{u as c}from"./CFYL8r3V.js";import"./CFMQYC2y.js";import{u as f}from"./C3eD4HWe.js";import{z as u,N as n}from"./B18F2_lz.js";function R(s){const i=f(),{$sendCustomEvent:o}=c(),t=u(()=>{const e=n(s);return e&&e.isSensitive?i.revealedSensitiveResults.includes(e.id)?"sensitive-shown":i.shouldBlurSensitive?"sensitive-hidden":"sensitive-shown":"non-sensitive"});function v(){const e=n(s);e&&!i.revealedSensitiveResults.includes(e.id)&&(i.revealedSensitiveResults.push(e.id),o("UNBLUR_SENSITIVE_RESULT",{id:e.id,sensitivities:e.sensitivity.join(",")}))}function r(){const e=n(s);if(!e)return;const d=i.revealedSensitiveResults.indexOf(e.id);d>-1&&i.revealedSensitiveResults.splice(d,1),o("REBLUR_SENSITIVE_RESULT",{id:e.id,sensitivities:e.sensitivity.join(",")})}const l=u(()=>{const e=n(s);return e&&i.shouldBlurSensitive&&e.isSensitive&&t.value==="sensitive-hidden"}),S=u(()=>{const e=n(s);return e&&i.shouldBlurSensitive&&e.isSensitive&&t.value==="sensitive-shown"});return{visibility:t,reveal:v,hide:r,isHidden:l,canBeHidden:S}}export{R as u};
