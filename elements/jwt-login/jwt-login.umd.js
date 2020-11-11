!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((e=e||self).JwtLogin={},e.litElement_js)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=r(e);if(t){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return l(this,n)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function c(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(d,t.LitElement);var l,a,f,h=u(d);function d(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(e=h.call(this)).auto=!1,e.method="GET",e.body={},e.key="jwt",e.jwt=null,e}return l=d,f=[{key:"tag",get:function(){return"jwt-login"}},{key:"properties",get:function(){return{auto:{type:Boolean},refreshUrl:{type:String,attribute:"refresh-url"},redirectUrl:{type:String,attribute:"redirect-url"},logoutUrl:{type:String,attribute:"logout-url"},url:{type:String},method:{type:String},body:{type:Object},key:{type:String},jwt:{type:String}}}}],(a=[{key:"lastErrorChanged",value:function(e){e&&(console.error(e),this.dispatchEvent(new CustomEvent("jwt-login-refresh-error",{composed:!0,bubbles:!0,cancelable:!1,detail:{value:e}})))}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){["auto","method","url"].includes(n)&&t.url&&(clearTimeout(t.__debounce),t.__debounce=setTimeout(function(){t.generateRequest(t.url,t.body)},0)),"jwt"==n&&(t._jwtChanged(t[n],e),t.dispatchEvent(new CustomEvent("jwt-changed",{detail:{value:t[n]}})))})}},{key:"_jwtChanged",value:function(e,t){null!=e&&""!=e&&"null"!=e||"undefined"===n(t)?e&&(localStorage.setItem(this.key,e),this.dispatchEvent(new CustomEvent("jwt-token",{bubbles:!0,cancelable:!0,composed:!0,detail:e})),this.dispatchEvent(new CustomEvent("jwt-logged-in",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}))):(localStorage.removeItem(this.key),this.dispatchEvent(new CustomEvent("jwt-logged-in",{bubbles:!0,cancelable:!0,composed:!0,detail:!1})))}},{key:"connectedCallback",value:function(){s(r(d.prototype),"connectedCallback",this).call(this),window.addEventListener("jwt-login-refresh-token",this.requestRefreshToken.bind(this)),window.addEventListener("jwt-login-toggle",this.toggleLogin.bind(this)),window.addEventListener("jwt-login-login",this.loginRequest.bind(this)),window.addEventListener("jwt-login-logout",this.logoutRequest.bind(this))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("jwt-login-refresh-token",this.requestRefreshToken.bind(this)),window.removeEventListener("jwt-login-login",this.loginRequest.bind(this)),window.removeEventListener("jwt-login-toggle",this.toggleLogin.bind(this)),window.removeEventListener("jwt-login-logout",this.logoutRequest.bind(this)),s(r(d.prototype),"disconnectedCallback",this).call(this)}},{key:"firstUpdated",value:function(e){this.jwt=localStorage.getItem(this.key)}},{key:"requestRefreshToken",value:function(e){this.__context="refresh",e.detail.element&&(this.__element=e.detail.element),this.generateRequest(this.refreshUrl)}},{key:"generateRequest",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={method:this.method,headers:{"Content-Type":"application/json"}};"GET"!=this.method&&(o.body=JSON.stringify(n)),fetch(e,o).then(function(e){if(e.ok)return e.json();t.lastErrorChanged(e)}).then(function(e){try{t.loginResponse(e)}catch(e){console.warn(e)}})}},{key:"toggleLogin",value:function(e){null==this.jwt?this.loginRequest(e):this.logoutRequest(e)}},{key:"loginRequest",value:function(e){this.__context="login",this.body=e.detail,this.generateRequest(this.url,this.body)}},{key:"logoutRequest",value:function(e){this.__context="logout",this.__redirect=e.detail.redirect,this.body={},this.jwt=null,this.generateRequest(this.logoutUrl)}},{key:"loginResponse",value:function(e){var t=this;switch(this.__context){case"login":this.jwt=e;break;case"refresh":var n;if(this.jwt=e,this.__element)(n=this.__element.obj)[this.__element.callback].apply(n,[this.jwt].concat(c(this.__element.params))),this.__element=!1;break;case"logout":this.__redirect&&this.redirectUrl&&setTimeout(function(){window.location.href=t.redirectUrl},100)}}}])&&o(l.prototype,a),f&&o(l,f),d}();window.customElements.define(f.tag,f),e.JwtLogin=f,Object.defineProperty(e,"__esModule",{value:!0})});
