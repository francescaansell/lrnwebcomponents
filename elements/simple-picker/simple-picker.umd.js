!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("lit"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("lit/directives/cache.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","lit/directives/cache.js"],i):i((e="undefined"!=typeof globalThis?globalThis:e||self).SimplePicker={},e.lit,null,null,e.cache_js)}(this,(function(e,i,t,n,o){"use strict";function l(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?l(Object(t),!0).forEach((function(i){c(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function s(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function a(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,i,t){return i&&a(e.prototype,i),t&&a(e,t),e}function c(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function d(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&u(e,i)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,i){return(u=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,i){return!i||"object"!=typeof i&&"function"!=typeof i?v(e):i}function m(e){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=h(e);if(i){var o=h(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return b(this,t)}}function f(e,i,t){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,i,t){var n=function(e,i){for(;!Object.prototype.hasOwnProperty.call(e,i)&&null!==(e=h(e)););return e}(e,i);if(n){var o=Object.getOwnPropertyDescriptor(n,i);return o.get?o.get.call(t):o.value}})(e,i,t||e)}function k(e,i){return i||(i=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(i)}}))}var y,g,w,x,_,O,j,E,C,z,L=function(e){d(n,e);var t=m(n);function n(){var e;return s(this,n),(e=t.call(this)).active=null,e.data=null,e.hidden=!1,e.hideOptionLabels=!1,e.icon=null,e.id=null,e.label=null,e.selected=!1,e.titleAsHtml=!1,e.value=null,setTimeout((function(){e.addEventListener("focus",e._handleFocus.bind(v(e))),e.addEventListener("mouseover",e._handleHover.bind(v(e)))}),0),e}return p(n,[{key:"render",value:function(){return i.html(y||(y=k(['\n      <simple-icon-lite\n        ?hidden="','"\n        .icon="','"\n        aria-hidden="true"\n      ></simple-icon-lite>\n      <div id="label">\n        <slot ?hidden="','"></slot>\n        ',"\n      </div>\n    "])),!this.icon,this.icon,!this.titleAsHtml,this.titleAsHtml?"":this.label)}},{key:"updated",value:function(e){var i=this;f(h(n.prototype),"updated",this).call(this,e),e.forEach((function(e,t){"label"===t&&(i.innerHTML=i.label)}))}},{key:"_handleFocus",value:function(){this.dispatchEvent(new CustomEvent("option-focus",{detail:this}))}},{key:"_handleHover",value:function(){this.dispatchEvent(new CustomEvent("option-focus",{detail:this}))}},{key:"_getColor",value:function(){return i.css(g||(g=k(["red"])))}}],[{key:"styles",get:function(){return i.css(w||(w=k(["\n      :host {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        color: var(--simple-picker-color);\n      }\n      :host([hidden]) {\n        display: none;\n      }\n      div {\n        margin: unset;\n        padding: unset;\n      }\n      #label {\n        padding: var(\n          --simple-picker-option-label-padding,\n          var(--simple-picker-option-padding, 2px 10px)\n        );\n        line-height: 100%;\n        width: max-content;\n      }\n\n      :host([hide-option-labels]) #label {\n        position: absolute;\n        left: -999999px;\n        width: 0;\n        height: 0;\n        overflow: hidden;\n      }\n\n      simple-icon-lite {\n        --simple-icon-width: var(--simple-picker-option-size, 24px);\n        --simple-icon-height: var(--simple-picker-option-size, 24px);\n        width: var(--simple-picker-option-size, 24px);\n        min-height: var(--simple-picker-option-size, 24px);\n        min-width: var(--simple-picker-option-size, 24px);\n        line-height: var(--simple-picker-option-size, 24px);\n      }\n    "])))}},{key:"properties",get:function(){return{active:{type:Boolean,reflect:!0},data:{type:Object},hidden:{type:Boolean,reflect:!0},hideOptionLabels:{type:Boolean,reflect:!0,attribute:"hide-option-labels"},icon:{type:String},id:{type:String,reflect:!0},label:{type:String,reflect:!0},selected:{type:Boolean,reflect:!0},styles:{type:Object},titleAsHtml:{type:Boolean,reflect:!0,attribute:"title-as-html"},value:{type:String,reflect:!0}}}},{key:"tag",get:function(){return"simple-picker-option"}}]),n}(i.LitElement);window.customElements.define(L.tag,L);var S=function(e){d(n,e);var t=m(n);function n(){var e;s(this,n),(e=t.call(this)).tag=n.tag,e.allowNull=!1,e.alignRight=!1,e.ariaLabelledby=null,e.blockLabel=!1,e.disabled=!1,e.expanded=!1,e.hideOptionLabels=!1,e.hideSample=!1,e.label=null,e.__options=[[]],e.options=[[{icon:null,style:null,alt:null,value:null}]],e.titleAsHtml=!1,e.value=null,e.__activeDesc="option-0-0",e.__hasLabel=!0,e.__selectedOption={},e.addEventListener("blur",(function(e){this.expanded=!1}));var i=n.properties;for(var o in i)i.hasOwnProperty(o)&&(e.hasAttribute(o)?e[o]=e.getAttribute(o):(o.reflect&&e.setAttribute(o,i[o].value),e[o]=i[o].value));return e}return p(n,[{key:"render",value:function(){return i.html(x||(x=k(['\n\n<label id="listLabel" \n  for="listbox" \n  .hidden="','"\n  part="label">\n  ','\n</label>\n<div id="listbox"\n  .aria-activedescendant="','" \n  .aria-labelledby="','" \n  .disabled="','"\n  part="input"\n  role="option-input" \n  tabindex="0"\n  @click="','"\n  @mousedown="','"\n  @keydown="','">\n  <div id="sample" part="sample">\n    <simple-picker-option \n      ?hide-option-labels="','"\n      ?title-as-html="','"\n      .icon="','"\n      .label="','" \n      part="sample-option"\n      .style=','\n      aria-hidden="true">\n    </simple-picker-option>\n    <simple-icon-lite id="icon" aria-hidden="true" icon="arrow-drop-down"></simple-icon-lite>\n  </div>\n  <div id="collapse" part="listbox">\n    <div class="rows" part="listbox-rows">\n        ',"\n    </div>\n  </div>\n</div>"])),!this.label||""===this.label.trim(),this.label&&""!==this.label.trim()?this.label.trim():"",this.__activeDesc,this.ariaLabelledby,this.disabled||!this.__options,this._handleListboxClick,this._handleListboxMousedown,this._handleListboxKeydown,this.hideOptionLabels,this.titleAsHtml,!!this.__selectedOption&&this.__selectedOption.icon,!!this.__selectedOption&&this.__selectedOption.alt,!!this.__selectedOption&&this.__selectedOption.style,o.cache(this.expanded&&this.__options?this._renderOptions(this.__options):i.nothing))}},{key:"hideNull",get:function(){return!this.allowNull||this.hideNullOption}},{key:"_renderOptions",value:function(e){var t=this;return i.html(_||(_=k(["",""])),e.map((function(e,n){return i.html(O||(O=k(['\n        <div class="row" ?hidden="','">\n          ',"\n        </div>\n      "])),!t._isRowHidden(e),Array.isArray(e)?t._renderRow(e,n):i.nothing)})))}},{key:"_isRowHidden",value:function(e){var i=this;return!Array.isArray(e)||e.filter((function(e){return!!e.value||!i.hideNull})).length<1}},{key:"_renderRow",value:function(e,t){var n=this;return i.html(j||(j=k(["",""])),e.map((function(e,o){return i.html(E||(E=k(['\n        <simple-picker-option\n          @option-focus="','"\n          @set-selected-option="','"\n          ?active="','"\n          ?hide-option-labels="','"\n          ?hidden="','"\n          ?selected="','"\n          ?title-as-html="','"\n          .data="','"\n          .icon="','"\n          .id="option-',"-",'"\n          .label="','"\n          .style=','\n          aria-selected="','"\n          role="option"\n          tabindex="-1"\n          value="','"\n        >\n        </simple-picker-option>\n      '])),n._handleOptionFocus,n._handleSetSelectedOption,"".concat(n.__activeDesc)==="option-".concat(t,"-").concat(o),n.hideOptionLabels,n.hideNull&&!e.value,n.value===e.value,n.titleAsHtml,n.data,e.icon,t,o,e.alt,e.style,n.value===e.value?"true":"false",e.value)})))}},{key:"updated",value:function(e){var i=this;e.forEach((function(e,t){"value"===t&&i._valueChanged(),"options"===t&&i._optionsChanged()})),this.dispatchEvent(new CustomEvent("changed",{detail:this}))}},{key:"_getOption",value:function(e,i){if(void 0!==e&&null!=i){var t=i.split("-");return e[t[1]][t[2]]}return null}},{key:"_goToOption",value:function(e,t){var n=i.html(C||(C=k([" option-","-"," "])),e,t),o=this.shadowRoot.querySelector("#"+n),l=this.shadowRoot.querySelector("#"+this.__activeDesc);null!==o&&(o.tabindex=0,o.focus(),l.tabindex=-1)}},{key:"_handleListboxClick",value:function(e){this.disabled||(this.dispatchEvent(new CustomEvent("click",{detail:this})),this._toggleListbox())}},{key:"_handleListboxMousedown",value:function(e){this.disabled||this.dispatchEvent(new CustomEvent("mousedown",{detail:this}))}},{key:"_handleListboxKeydown",value:function(e){if(!this.disabled){this.dispatchEvent(new CustomEvent("keydown",{detail:this}));var i=this.__activeDesc.split("-"),t=parseInt(i[1]),n=parseInt(i[2]);if(32===e.keyCode)e.preventDefault(),this._toggleListbox();else if(this.expanded&&[9,35,36,38,40].includes(e.keyCode))if(e.preventDefault(),35===e.keyCode){var o=(this.options||[]).length-1,l=this.options[o].length-1;this._goToOption(o,l)}else 36===e.keyCode?this._goToOption(0,0):38===e.keyCode?n>0?this._goToOption(t,n-1):t>0&&this._goToOption(t-1,this.options[t-1].length-1):40===e.keyCode&&(n<this.options[t].length-1?this._goToOption(t,n+1):t<(this.options||[]).length-1&&this._goToOption(t+1,[0]))}}},{key:"_handleOptionFocus",value:function(e){this._setActiveOption(e.detail.id)}},{key:"_setActiveOption",value:function(e){this.__activeDesc=e,this.dispatchEvent(new CustomEvent("option-focus",{detail:this}))}},{key:"_valueChanged",value:function(){this._setSelectedOption(),this.dispatchEvent(new CustomEvent("value-changed",{detail:this}))}},{key:"_optionsChanged",value:function(){this._setSelectedOption()}},{key:"_setSelectedOption",value:function(){var e=!this.allowNull&&(this.options||[]).length>0&&this.options[0].length>0?this.options[0][0].value:null;if(this.options){this.__options="string"==typeof this.options?JSON.parse(this.options):this.options,this.__activeDesc=this.allowNull?"option-0-0":null;for(var i=0;i<this.__options.length;i++)for(var t=0;t<this.__options[i].length;t++)null!==this.value&&null===this.__activeDesc&&(this.__activeDesc="option-".concat(i,"-").concat(t)),"".concat(this.__options[i][t].value)==="".concat(this.value)&&(this.__activeDesc="option-".concat(i,"-").concat(t),e=this.__options[i][t])}null===e&&(this.value=null),this.__selectedOption=e,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:this}))}},{key:"_toggleListbox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.expanded;if(!this.disabled){var i=this.shadowRoot.querySelector("#"+this.__activeDesc);this.expanded=e,e?(null!==i&&i.focus(),this.dispatchEvent(new CustomEvent("expand",{detail:this}))):(null!==i&&(this.value=i.getAttribute("value")),this.dispatchEvent(new CustomEvent("collapse",{detail:this})))}}},{key:"setOptions",value:function(e){this.set("options",[[]]),this.set("options",e)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("blur",(function(e){this.expanded=!1})),f(h(n.prototype),"disconnectedCallback",this).call(this)}}],[{key:"styles",get:function(){return[i.css(z||(z=k(["\n:host {\n  display: var(--simple-picker-display,inline-flex);\n  align-items: center;\n  color: var(--simple-picker-color, currentColor);\n  font-family: var(--simple-picker-font-family, inherit);\n  font-size: var(--simple-picker-font-size, inherit);\n  --simple-picker-height: calc(var(--simple-picker-option-size, 24px) + var(--simple-picker-sample-padding, 2px) * 2 + var(--simple-picker-border-width, 1px) * 2);\n  min-height: var(--simple-picker-height);\n  max-height: var(--simple-picker-height);\n}\n\n:host([block-label]) {\n  display: block;\n  margin: 0 0 15px;\n  max-height: unset;\n}\n\n:host([disabled]){\n  --simple-picker-color: var(--simple-picker-color-disabled, #888);\n  --simple-picker-background-color: var(--simple-picker-background-color-disabled, #e8e8e8);\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n*[disabled] {\n  cursor: not-allowed;\n  pointer-events: none!important;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\ndiv {\n  margin: unset;\n  padding: unset;\n}\n\nlabel:not([hidden]) {\n  display: flex;\n  align-items: center;\n  padding-right: 5px;\n  font-family: var(--simple-picker-font-family, inherit);\n  color: var(--simple-picker-label-color, var(--simple-picker-color, currentColor));\n}\n\n:host([block-label]) label:not([hidden]) {\n  display: block;\n  padding-right: 0px;\n  color: var(--simple-picker-float-label-color, var(--simple-picker-color-disabled, #888));\n  transition: all 0.5s;\n  max-height: unset;\n}\n\n:host([block-label]:focus-within) label,\n:host([block-label]:hover) label {\n  color: var(--simple-picker-float-label-active-color, var(--simple-picker-color, currentColor));\n  transition: all 0.5s;\n}\n\n#sample, \n.rows {\n  margin: 0;\n  padding: 0;\n}\n\n#listbox {\n  cursor: pointer;\n  position: relative;\n  flex: 1 0 auto;\n  min-height: var(--simple-picker-height);\n  max-height: var(--simple-picker-height);\n}\n\n#sample {\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: space-between;\n  align-items: center;\n  min-height: calc(var(--simple-picker-height - 2 * var(--simple-picker-sample-padding, 2px)) - 2 * var(--simple-picker-border-width, 1px));\n  max-height: calc(var(--simple-picker-height - 2 * var(--simple-picker-sample-padding, 2px)) - 2 * var(--simple-picker-border-width, 1px));\n  padding: var(--simple-picker-sample-padding, 2px);\n  border-radius: var(--simple-picker-border-radius, 2px);\n  color: var(--simple-picker-sample-color, currentColor);\n  background-color: var(--simple-picker-background-color, #f0f0f0);\n  border-width: var(--simple-picker-border-width, 1px);\n  border-style: var(--simple-picker-border-style, solid);\n  border-color: var(--simple-picker-border-color, var(--simple-picker-color-disabled, #888));  \n}\n\n:host([hide-sample]) #sample {\n  width: var(--simple-picker-option-size);\n  overflow: visible;\n}\n\n:host(:not([disabled]):focus-within) #sample {\n  border-width: var(--simple-picker-focus-border-width, var(--simple-picker-border-width, 1px));\n  border-style: var(--simple-picker-focus-border-style, var(--simple-picker-border-style, solid));\n  border-color: var(--simple-picker-focus-border-color, var(--simple-picker-border-color, var(--simple-picker-color-disabled, #888)));\n  transition: all 0.5s;\n}\n\n:host(:not([disabled]):focus-within) #listbox {\n  border-width: var(--simple-picker-listbox-border-width, var(--simple-picker-border-width, 1px));\n  border-style: var(--simple-picker-listbox-border-width, var(--simple-picker-border-style, solid));\n  border-color: var(--simple-picker-listbox-border-width, var(--simple-picker-border-color, var(--simple-picker-color-disabled, #888)));\n}\n\n:host(:not([disabled])) #listbox:focus-within,\n:host(:not([disabled]):focus-within) #listbox {\n  outline: var(--simple-picker-listbox-outline,unset);\n}\n\n#icon {\n  width: var(--simple-picker-icon-size, 16px);\n  height: var(--simple-picker-icon-size, 16px);\n  --simple-icon-width: var(--simple-picker-icon-size, 16px);\n  --simple-icon-height: var(--simple-picker-icon-size, 16px);\n  transform: var(--simple-picker-icon-transform, rotate(0deg));\n  transition: transform 0.25s;\n}\n\n:host([hide-option-labels]) #icon {\n  margin-left: calc(-0.125 * var(--simple-picker-icon-size, 16px));\n}\n\n:host([expanded]) #icon {\n  transform: var(--simple-picker-expanded-icon-transform, rotate(0deg));\n  transition: transform 0.25s;\n}\n\n#collapse {\n  display: none;\n  width: 100%;\n  position: absolute;  \n  top: var(--simple-picker-options-top);\n  z-index: 2;\n  transition: z-index 0s;\n}\n\n:host([expanded]:not([disabled])) #collapse {\n  display: block;\n  position: unset;\n  background-color: var(--simple-picker-options-background-color, #fff);\n} \n\n.rows {\n  display: block;\n  position: absolute;\n  z-index: 1000;  \n  top: calc(var(--simple-picker-option-size, 24px) + 2 * var(--simple-picker-options-border-width));\n  border-width: var(--simple-picker-options-border-width, var(--simple-picker-border-width, 1px));\n  border-style: var(--simple-picker-options-border-style, var(--simple-picker-border-style, solid));\n  border-color: var(--simple-picker-options-border-color, var(--simple-picker-border-color, var(--simple-picker-color-disabled, #888)));\n  background-color: var(--simple-picker-options-background-color, #fff);\n  max-height: var(--simple-picker-options-max-height, 250px);\n  overflow-y: auto; \n  border: var(--simple-picker-options-border);\n  transition: z-index 0s;\n} \n\n.rows:focus-within {\n  border: var(--simple-picker-options-focus-border, var(--simple-picker-options-border));\n}\n\n:host([align-right]) #collapse .rows {\n  left: unset;\n  right: calc(var(--simple-picker-options-border-width, var(--simple-picker-border-width, 1px)) *2);\n}\n\n:host([justify]) #collapse .rows {\n  left: 0px;\n  right: 0px;\n}\n\n.row {\n  display: flex; \n  align-items: stretch;\n  justify-content: space-between;\n}\n\nsimple-picker-option {\n  z-index: 1;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  max-height: unset;\n  min-height: var(--simple-picker-option-size, 24px);\n  min-width: var(--simple-picker-option-size, 24px);\n  line-height: var(--simple-picker-option-size, 24px);\n  color: var(--simple-picker-color, currentColor);\n  background-color: var(--simple-picker-options-background-color, #fff);\n  transition: max-height 2s;\n  transition: z-index 0s;\n}\n\nsimple-picker-option[selected] {\n  z-index: 50;\n  color: var(--simple-picker-color, currentColor);\n  background-color: var(--simple-picker-option-selected-background-color, var(--simple-picker-options-background-color, #fff));\n}\n\nsimple-picker-option[active] {\n  z-index: 100;\n  cursor: pointer;\n  color: var(--simple-picker-color, currentColor);\n  background-color: var(--simple-picker-option-active-background-color, #aaddff);\n}\n\n#sample simple-picker-option {\n  color: var(--simple-picker-color, currentColor);\n  background-color: var(--simple-picker-sample-background-color, transparent);\n  --simple-picker-option-padding: var(--simple-picker-sample-padding, 2px) 0;\n  border: none;\n}\n\n:host([hide-sample]) #sample simple-picker-option {\n  position: absolute;\n  left: -9999px;\n  overflow: hidden;\n  width: 0;\n  height: 0;\n}\n\n:host(:focus-within) #sample simple-picker-option,\n:host(:hover) #sample simple-picker-option {\n  --simple-picker-color: var(--simple-picker-color-active, var(--simple-picker-color, currentColor));\n}\n\n:host(:not([expanded])) #collapse simple-picker-option {\n  max-height: 0;\n  transition: max-height 1.5s;\n}\n\n@media screen and (max-width: 600px) {\n  :host {\n    position: static;\n  }\n\n  #collapse {\n    top: 0;\n    margin-top: 0;\n    position: relative;\n  } \n\n  .rows {\n    position: absolute;\n  }  \n}\n      "])))]}},{key:"properties",get:function(){return r(r({},f(h(n),"properties",this)),{},{allowNull:{type:Boolean,reflect:!0,attribute:"allow-null"},alignRight:{type:Boolean,reflect:!0,attribute:"align-right"},ariaLabelledby:{type:String,attribute:"aria-labelledby"},blockLabel:{type:Boolean,reflect:!0,attribute:"block-label"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},expanded:{type:Boolean,reflect:!0,attribute:"expanded"},hideOptionLabels:{type:Boolean,reflect:!0,attribute:"hide-option-labels"},hideNullOption:{type:Boolean,reflect:!0,attribute:"hide-null-option"},hideSample:{type:Boolean,reflect:!0,attribute:"hide-sample"},justify:{type:Boolean,reflect:!0,attribute:"justify"},label:{type:String},options:{type:Array},titleAsHtml:{type:Boolean,attribute:"title-as-html"},value:{type:String,reflect:!0},__activeDesc:{type:String},__options:{type:Array},__selectedOption:{type:Object}})}},{key:"tag",get:function(){return"simple-picker"}}]),n}(i.LitElement);window.customElements.define(S.tag,S),e.SimplePicker=S,Object.defineProperty(e,"__esModule",{value:!0})}));
