import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:"",setFormValue(t,a){this.email=t,this.message=a}},s=document.querySelector(".feedback-form"),l="feedback-form-state";s.addEventListener("input",o);s.addEventListener("submit",i);function m(){const t=JSON.parse(localStorage.getItem(l));t!==null&&(e.setFormValue(t.email,t.message),s.email.value=e.email,s.message.value=e.message)}function o(t){const a=t.target;switch(a.nodeName){case"INPUT":e.email=a.value.trim(),localStorage.setItem(l,JSON.stringify(e));break;case"TEXTAREA":e.message=a.value.trim(),localStorage.setItem(l,JSON.stringify(e));break}}function i(t){if(t.preventDefault(),e.email===""||e.message==="")return alert("Fill please all fields");console.table(e),localStorage.removeItem(l),s.reset()}m();
//# sourceMappingURL=commonHelpers2.js.map
