function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,c=u||s||Function("return this")(),l=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,o,a,i,f,u,s=0,c=!1,l=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,a=o;return r=o=void 0,s=t,i=e.apply(a,n)}function h(e){return s=e,f=setTimeout(j,t),c?b(e):i}function S(e){var n=e-u;return void 0===u||n>=t||n<0||l&&e-s>=a}function j(){var e=g();if(S(e))return T(e);f=setTimeout(j,function(e){var n=t-(e-u);return l?d(n,a-(e-s)):n}(e))}function T(e){return f=void 0,v&&r?b(e):(r=o=void 0,i)}function w(){var e=g(),n=S(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return h(u);if(l)return f=setTimeout(j,t),b(u)}return void 0===f&&(f=setTimeout(j,t)),i}return t=y(t)||0,p(n)&&(c=!!n.leading,a=(l="maxWait"in n)?m(y(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),s=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?i:T(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const b=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},h={form:document.querySelector("form.feedback-form"),email:document.querySelector('input[type="email"]'),message:document.querySelector('textarea[name="message"]')},S={email:"",message:""};!function(){const e=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state");e&&(""!==e.email&&(S.email=e.email,h.email.value=e.email),""!==e.message&&(S.message=e.message,h.message.value=e.message))}(),h.form.addEventListener("submit",(function(e){e.preventDefault(),b("feedback-form-state",S),e.currentTarget.reset(),console.log("Email: ",S.email),console.log("Message: ",S.message),(e=>{try{if(localStorage.getItem(e))localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state")})),h.email.addEventListener("input",e(t)((function(e){S.email=e.target.value,b("feedback-form-state",S)}),500)),h.message.addEventListener("input",e(t)((function(e){S.message=e.target.value,b("feedback-form-state",S)}),500));
//# sourceMappingURL=03-feedback.4e68ac31.js.map