!function(){var t={757:function(t,e,n){t.exports=n(666)},666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(t,e,n){var r=s;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return M()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=T(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===s)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=h(t,e,n);if("normal"===u.type){if(r=n.done?d:l,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var s="suspendedStart",l="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(k([])));L&&L!==n&&r.call(L,i)&&(w=L);var x=g.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function n(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function T(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=h(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:M}}function M(){return{value:e,done:!0}}return m.prototype=g,u(x,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(P.prototype),u(P.prototype,a,(function(){return this})),t.AsyncIterator=P,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new P(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),f=r.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t){var e=document.getElementById("windowPath");e&&(t[0].previousPath?e.innerHTML="<h2>currentPath: ".concat(t[0].currentPath,"</h2><h2>previousPath: ").concat(t[0].previousPath,"</h2>"):e.innerHTML="<h2>currentPath: ".concat(location.pathname,"</h2>"))}function e(t,e,n){if(n){var r=document.createElement("div");r.classList.add("onLeaveMessage");var o=document.createElement("p"),i=document.createElement("hr");o.innerHTML="".concat(t),r.append(o,i),document.body.append(r),setTimeout((function(){document.body.removeChild(r)}),e)}else{var a=document.createElement("div");a.classList.add("routeMessage");var c=document.createElement("p"),u=document.createElement("hr");c.innerHTML="".concat(t),a.append(c,u),document.body.append(a),setTimeout((function(){document.body.removeChild(a)}),e)}}var r=function(n,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return function(){for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];t(a),e(n,r,o);var u=document.getElementById("root");return new Promise((function(t){u&&(a[0].state&&(u.innerHTML="<h2>Loading state...</h2>"),setTimeout((function(){u&&(u.innerHTML="",u.innerHTML+="<h2>state: ".concat(a[0].state,"</h2>"),t("ok"))}),r))}))}};function o(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}var i,a,c,u,f,h,s=n(757),l=n.n(s),p=(i=[],a=location.pathname,c="",u=function(t,e){return t instanceof RegExp&&t.test(e)||"function"==typeof t&&t(e)||"string"==typeof t&&t===e},f=function(){var t,e=(t=l().mark((function t(e){var n,r,o,i,f;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.match,r=e.onEnter,o=e.onLeave,i=e.onBeforeEnter,f={currentPath:a,previousPath:c,state:history.state},a===c&&null!==f.state){t.next=11;break}if(!u(n,a)){t.next=8;break}return t.next=6,null==i?void 0:i(f);case 6:return t.next=8,null==r?void 0:r(f);case 8:if(!u(n,c)){t.next=11;break}return t.next=11,null==o?void 0:o(f);case 11:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function c(t){o(a,r,i,c,u,"next",t)}function u(t){o(a,r,i,c,u,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}(),h=function(){for(var t,e=i.map((function(t){return t})),n=0;n<i.length;n++)void 0,(t=e.shift())&&f(t).catch((function(t){return console.error(t)}))},window.addEventListener("popstate",(function(){c=a,a=location.pathname,h()})),document.body.addEventListener("click",(function(t){if(t.target.matches("a")){t.preventDefault();var e=t.target.getAttribute("href"),n=Math.random();e&&"string"==typeof e&&function(t,e){history.pushState(e,t,t),c=a,a=location.pathname,h()}(e,n)}})),{on:function(t,e,n,r){var o=function(){for(var t=function(){return Math.floor(Math.random()*i.length*1e3)},e=function(t){return i.find((function(e){return e.id===t}))},n=t();e(n);)n=t();return n}(),a={id:o,match:t,onEnter:e,onLeave:n,onBeforeEnter:r};return i.push(a),f(a),function(){i=i.filter((function(t){return t.id!==o}))}}});p.on("/",r("you switched to Home ('/')",1500),r("you have left Home",1500,!0),r("you going to Home",1500)),p.on((function(t){return"/contacts"===t}),r("you switched to /contacts",1500),r("you have left /contacts",1500,!0),r("you going to /contacts",1500)),p.on("/about",r("you switched to /about",1500),r("you have left /about",1500,!0),r("you going to /about",1500)),p.on(/\/about\/us/,r("you switched to /about/us",1500),r("you have left /about/us",1500,!0),r("you going to /about/us",1500))}()}();