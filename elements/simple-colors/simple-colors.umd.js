!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js"],t):t((e=e||self).SimpleColors={},e.polymerElement_js,e.renderStatus_js)}(this,function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}window.SimpleColorsStyles={},window.SimpleColorsStyles.instance=null,window.SimpleColorsStyles.colors={grey:["#ffffff","#eeeeee","#dddddd","#cccccc","#bbbbbb","#999999","#666666","#444444","#333333","#222222","#111111","#000000"],red:["#ffdddd","#ffaeae","#ff8f8f","#ff7474","#fd5151","#ff2222","#ee0000","#ac0000","#850000","#670000","#520000","#3f0000"],pink:["#ffe6f1","#ffa5cf","#ff87c0","#ff73b5","#fd60aa","#ff3996","#da004e","#b80042","#980036","#78002b","#5a0020","#440019"],purple:["#fce6ff","#f4affd","#f394ff","#f07cff","#ed61ff","#e200ff","#a500ba","#8a009b","#6c0079","#490052","#33003a","#200025"],"deep-purple":["#f3e4ff","#ddacff","#c97eff","#bb63f9","#b44aff","#a931ff","#7e00d8","#5d009f","#4c0081","#3a0063","#2a0049","#1d0033"],indigo:["#e5ddff","#c3b2ff","#af97ff","#9e82ff","#9373ff","#835fff","#3a00ff","#2801b0","#20008c","#160063","#100049","#0a0030"],blue:["#e2ecff","#acc9ff","#95baff","#74a5ff","#5892fd","#4083ff","#0059ff","#0041bb","#003494","#002569","#001947","#001333"],"light-blue":["#ddefff","#a1d1ff","#92c9ff","#65b3ff","#58adff","#41a1ff","#007ffc","#0066ca","#0055a8","#003f7d","#002850","#001b36"],cyan:["#ddf8ff","#9beaff","#77e2ff","#33d4ff","#1ccfff","#00c9ff","#009dc7","#007999","#005970","#003f50","#002c38","#001a20"],teal:["#d9fff0","#98ffd7","#79ffcb","#56ffbd","#29ffac","#00ff9c","#009d75","#007658","#004e3a","#003829","#002a20","#001b14"],green:["#e1ffeb","#acffc9","#79ffa7","#49ff88","#24ff70","#00f961","#008c37","#00762e","#005a23","#003d18","#002a11","#001d0c"],"light-green":["#ebffdb","#c7ff9b","#b1ff75","#a1fd5a","#8efd38","#6fff00","#429d00","#357f00","#296100","#1b3f00","#143000","#0d2000"],lime:["#f1ffd2","#dfff9b","#d4ff77","#caff58","#bdff2d","#aeff00","#649900","#4d7600","#3b5a00","#293f00","#223400","#182400"],yellow:["#ffffd5","#ffffac","#ffff90","#ffff7c","#ffff3a","#f6f600","#929100","#787700","#585700","#454400","#303000","#242400"],amber:["#fff2d4","#ffdf92","#ffd677","#ffcf5e","#ffc235","#ffc500","#b28900","#876800","#614b00","#413200","#302500","#221a00"],orange:["#ffebd7","#ffca92","#ffbd75","#ffb05c","#ff9e36","#ff9625","#e56a00","#ae5100","#833d00","#612d00","#3d1c00","#2c1400"],"deep-orange":["#ffe7e0","#ffb299","#ffa588","#ff8a64","#ff7649","#ff6c3c","#f53100","#b92500","#8a1c00","#561100","#3a0c00","#240700"],brown:["#f0e2de","#e5b8aa","#c59485","#b68373","#ac7868","#a47060","#85574a","#724539","#5b3328","#3b1e15","#2c140e","#200e09"],"blue-grey":["#e7eff1","#b1c5ce","#9badb6","#8d9fa7","#7a8f98","#718892","#56707c","#40535b","#2f3e45","#1e282c","#182023","#0f1518"]};var d=function(e){function o(){return r(this,o),c(this,l(o).apply(this,arguments))}return i(o,t.PolymerElement),f(o,[{key:"connectedCallback",value:function(){u(l(o.prototype),"connectedCallback",this).call(this),n.afterNextRender(this,function(){var e=document.createElement("style");this.appendHead?document.head.appendChild(e):this.parentNode.appendChild(e),this.__sheet=e.sheet,this.fullStyle=e,this.addCssVariables(this.__sheet),this.addAccentVariables(this.__sheet)})}},{key:"getColorInfo",value:function(e){var t=e.replace(/(simple-colors-)?(-text)?(-border)?/g,"").split("-theme-"),n=t.length>0?t[0]:"default",a=t.length>0?t[1].split("-"):t[0].split("-");return{theme:n,color:a.length>1?a.slice(1,a.length-1).join("-"):"grey",shade:a.length>1?a[a.length-1]:"1"}}},{key:"getContrastingShades",value:function(e,t,n,a){var r="grey"===t||"grey"===a?"greyColor":"colorColor",o=e?"aaLarge":"aa",f=parseInt(n)+1,i=this.contrasts[r][o][f];return Array(i.max-i.min+1).fill().map(function(e,t){return i.min+t})}},{key:"getContrastingColors",value:function(e,t,n){var a=this,r={};return Object.keys(this.colors).forEach(function(o){r[o]=a.getContrastingShades(n,e,t,o)}),r.color}},{key:"isContrastCompliant",value:function(e,t,n,a,r){var o="grey"===t||"grey"===a?"greyColor":"colorColor",f=e?"aaLarge":"aa",i=parseInt(n)+1,l=this.contrasts[o][f][i];return r>=l.min&&ontrastShade>=l.max}},{key:"indexToShade",value:function(e){return parseInt(e)+1}},{key:"shadeToIndex",value:function(e){return parseInt(e)-1}},{key:"invertShade",value:function(e){return this.colors.grey.length+1-parseInt(e)}},{key:"invertIndex",value:function(e){return this.colors.grey.length-1-parseInt(e)}},{key:"maxContrastIndex",value:function(e){return parseInt(e)<this.colors.grey.length/2?this.colors.grey.length-1:0}},{key:"maxContrastShade",value:function(e){return parseInt(e)<this.colors.grey.length/2+1?this.colors.grey.length:1}},{key:"makeVariable",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"grey",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return["--simple-colors",arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default","theme",e,t].join("-")}},{key:"getHex",value:function(e,t,n){return n?e[this.invertIndex(this.colors,t)]:e[t]}},{key:"addThemeVariables",value:function(e,t){var n=[];for(var a in this.colors)n.push(this.addColorShades(e,a,this.colors[a],t));return n.join("")}},{key:"addColorShades",value:function(e,t,n,a){for(var r=[],o=0;o<n.length;o++){var f=this.makeVariable(t,o+1,e),i=a?n[this.invertIndex(o)]:n[o];r.push(f+":"+i+"; ")}return r.join("")}},{key:"addCssVariables",value:function(e){if("undefined"!==a(e)){var t=this.colors.grey;return e.insertRule(this.makeRule("html",this.addColorShades("default","accent",t,!1)+this.addThemeVariables("default",!1)),e.cssRules.length),e.insertRule(this.makeRule("html",this.addColorShades("fixed","accent",t,!1)+this.addThemeVariables("fixed",!1)),e.cssRules.length),e.insertRule(this.makeRule("[dark]",this.addColorShades("default","accent",t,!0)+this.addThemeVariables("default",!0)),e.cssRules.length),e}}},{key:"addAccentVariables",value:function(e){if("undefined"!==a(e)){for(var t in this.colors)e.insertRule(this.makeRule('[accent-color="'+t+'"]',[this.addColorShades("default","accent",this.colors[t],!1),this.addColorShades("fixed","accent",this.colors[t],!1)].join("")),e.cssRules.length),e.insertRule(this.makeRule('[dark][accent-color="'+t+'"]',[this.addColorShades("default","accent",this.colors[t],!0)].join("")),e.cssRules.length);return e}}},{key:"makeStyleElement",value:function(){var e=document.createElement("style");return e.appendChild(document.createTextNode(this.getAccentVariablesText())),e}},{key:"getAccentVariablesText",value:function(){var e="";for(var t in this.colors)e+=this.makeRule(':host([accent-color="'+t+'"])',[this.addColorShades("default","accent",this.colors[t],!1),this.addColorShades("fixed","accent",this.colors[t],!1)].join("")),e+=this.makeRule(':host([dark][accent-color="'+t+'"])',[this.addColorShades("default","accent",this.colors[t],!0)].join(""));return e}},{key:"makeRule",value:function(e,t){return e+" {\n"+t+"\n}\n"}}],[{key:"properties",get:function(){return{colors:{type:Object,value:window.SimpleColorsStyles.colors},contrasts:{type:Object,value:{greyColor:{aaLarge:[{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:10,max:12},{min:1,max:3},{min:1,max:5},{min:1,max:6},{min:1,max:6},{min:1,max:6},{min:1,max:6}],aa:[{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:8,max:12},{min:11,max:12},{min:1,max:2},{min:1,max:7},{min:1,max:7},{min:1,max:6},{min:1,max:6},{min:1,max:6}]},colorColor:{aaLarge:[{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:9,max:12},{min:10,max:12},{min:11,max:12},{min:1,max:2},{min:1,max:3},{min:1,max:4},{min:1,max:5},{min:1,max:6},{min:1,max:6}],aa:[{min:8,max:12},{min:8,max:12},{min:9,max:12},{min:9,max:12},{min:11,max:12},{min:12,max:12},{min:1,max:1},{min:1,max:2},{min:1,max:4},{min:1,max:4},{min:1,max:5},{min:1,max:5}]}}}}}},{key:"tag",get:function(){return"simple-colors-styles"}}]),o}();function m(){var e,t,n=(e=["\n      <style></style>\n      <slot></slot>\n    "],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return m=function(){return n},n}window.customElements.define(d.tag,d),window.SimpleColorsStyles.requestAvailability=function(){return null==window.SimpleColorsStyles.instance&&(window.SimpleColorsStyles.instance=document.createElement("simple-colors-styles"),window.SimpleColorsStyles.instance.appendHead=!0),document.body.appendChild(window.SimpleColorsStyles.instance),window.SimpleColorsStyles.instance};var h=function(e){function n(){var e;return r(this,n),(e=c(this,l(n).call(this))).__utils=window.SimpleColorsStyles.requestAvailability(),e}return i(n,t.PolymerElement),f(n,null,[{key:"template",get:function(){return t.html(m())}},{key:"properties",get:function(){return{accentColor:{name:"accentColor",type:"String",value:"grey",reflectToAttribute:!0,notify:!0},dark:{name:"dark",type:"Boolean",value:!1,reflectToAttribute:!0,notify:!0},colors:{name:"colors",type:"Object",value:window.SimpleColorsStyles.colors,notify:!0}}}},{key:"tag",get:function(){return"simple-colors"}}]),f(n,[{key:"ready",value:function(){u(l(n.prototype),"ready",this).call(this),this.shadowRoot.insertBefore((new d).makeStyleElement(),this.shadowRoot.children[0])}},{key:"maxContrastShade",value:function(e){return this.__utils.maxContrastShade(e)}},{key:"invertShade",value:function(e){return this.__utils.invertShade(e)}},{key:"getColorInfo",value:function(e){return this.__utils.getColorInfo(e)}},{key:"makeVariable",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this.__utils.makeVariable("grey",1,"default")}},{key:"getContrastingColors",value:function(e,t,n){return this.__utils.getContrastingColors(e,t,n)}},{key:"getContrastingShades",value:function(e,t,n,a){return this.__utils.getContrastingShades(e,t,n,a)}},{key:"isContrastCompliant",value:function(e,t,n,a,r){return this.__utils.isContrastCompliant(e,t,n,a,r)}}]),n}();customElements.define(h.tag,h),e.SimpleColors=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=simple-colors.umd.js.map
