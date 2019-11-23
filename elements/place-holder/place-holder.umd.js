!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-colors/simple-colors.js","lit-element/lit-element.js"],t):t((e=e||self).PlaceHolder={},e.simpleColors_js,e.litElement_js)}(this,function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(){var e=l(["\n        :host {\n          display: block;\n          border: none;\n          transition: 0.2s all linear;\n        }\n        :host([drag-over]) {\n          border: var(--place-holder-drag-over-border, 4px dashed #2196f3);\n        }\n        .wrapper {\n          text-align: center;\n          padding: 16px;\n          color: var(--simple-colors-default-theme-grey-11, #222222);\n          background-color: var(--simple-colors-default-theme-grey-2, #eeeeee);\n        }\n        iron-icon {\n          margin: 0 auto;\n          width: 50%;\n          height: 50%;\n          display: block;\n        }\n        .text {\n          line-height: 24px;\n          font-size: 24px;\n        }\n        .directions {\n          line-height: 16px;\n          font-size: 16px;\n          font-style: italic;\n        }\n      "]);return d=function(){return e},e}function u(){var e=l(['\n      <div class="wrapper">\n        <iron-icon icon="','"></iron-icon>\n        <div class="text">','</div>\n        <div class="directions">',"</div>\n      </div>\n    "]);return u=function(){return e},e}var f=function(e){function r(){var e,t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t=this,(e=!(n=i(r).call(this))||"object"!=typeof n&&"function"!=typeof n?c(t):n).text="",e.type="text",e.dragOver=!1,e.directions="Double click or drag and drop file to replace",e.addEventListener("dragover",function(e){this.dragOver=!0,e.preventDefault(),e.stopPropagation(),this.classList.add("dragover")}),e.addEventListener("dragleave",function(e){this.dragOver=!1,e.preventDefault(),e.stopPropagation(),this.classList.remove("dragover")}),e.addEventListener("drop",function(e){this.dragOver=!1,e.preventDefault(),e.stopPropagation(),this.classList.remove("dragover");try{"file"===e.dataTransfer.items[0].kind&&(e.placeHolderElement=this,this.dispatchEvent(new CustomEvent("place-holder-file-drop",{bubbles:!0,cancelable:!0,composed:!0,detail:e})))}catch(e){}}),e.addEventListener("dblclick",e.fireReplaceEvent.bind(c(e))),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(r,t.SimpleColors),o(r,[{key:"render",value:function(){return n.html(u(),this.iconFromType,this.calcText,this.directions)}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){["type","dragOver"].includes(n)&&(t.iconFromType=t._getIconFromType(t.type,t.dragOver)),["text","type","dragOver"].includes(n)&&(t.calcText=t._getCalcText(t.text,t.type,t.dragOver))})}},{key:"fireReplaceEvent",value:function(e){this.dispatchEvent(new CustomEvent("place-holder-replace",{bubbles:!0,cancelable:!0,composed:!0,detail:this.type}))}},{key:"_getCalcText",value:function(e,t,n){return n?"Drop file to upload":""===e?"Placeholder for "+t:e}},{key:"_getIconFromType",value:function(e,t){if(t)return import("@polymer/iron-icons/iron-icons.js"),"icons:file-upload";switch(e){case"document":return import("@polymer/iron-icons/editor-icons.js"),"editor:insert-drive-file";case"audio":return import("@polymer/iron-icons/av-icons.js"),"av:music-video";case"video":return import("@polymer/iron-icons/notification-icons.js"),"notification:ondemand-video";case"image":return import("@polymer/iron-icons/image-icons.js"),"image:crop-original";case"math":return import("@polymer/iron-icons/editor-icons.js"),"editor:functions";case"text":default:return import("@polymer/iron-icons/editor-icons.js"),"editor:format-align-left"}}}],[{key:"styles",get:function(){return[].concat(p(s(i(r),"styles",this)),[n.css(d())])}},{key:"tag",get:function(){return"place-holder"}},{key:"properties",get:function(){return{iconFromType:{type:String},text:{type:String},directions:{type:String},calcText:{type:String},type:{type:String},dragOver:{type:Boolean,reflect:!0,attribute:"drag-over"}}}}]),o(r,[{key:"disconnectedCallback",value:function(){this.removeEventListener("dragover",function(e){this.dragOver=!0,e.preventDefault(),e.stopPropagation(),this.classList.add("dragover")}),this.removeEventListener("dragleave",function(e){this.dragOver=!1,e.preventDefault(),e.stopPropagation(),this.classList.remove("dragover")}),this.removeEventListener("drop",function(e){this.dragOver=!1,e.preventDefault(),e.stopPropagation(),this.classList.remove("dragover");try{"file"===e.dataTransfer.items[0].kind&&(e.placeHolderElement=this,this.dispatchEvent(new CustomEvent("place-holder-file-drop",{bubbles:!0,cancelable:!0,composed:!0,detail:e})))}catch(e){}}),this.removeEventListener("dblclick",this.fireReplaceEvent.bind(this)),s(i(r.prototype),"disconnectedCallback",this).call(this)}}],[{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Placeholder",description:"A place holder that can be converted into the media type that's been selected",icon:"image:transform",color:"grey",groups:["Placeholder"],handles:[],meta:{author:"LRNWebComponents"}},settings:{quick:[],configure:[{property:"type",title:"Type",description:"Type of gizmo that this accepts for replacement.",inputMethod:"select",options:{text:"Text / content",document:"Document / file",audio:"Audio",video:"Video",image:"Image",math:"Math"}},{property:"text",title:"Text",description:"Identify the place holder desired in greater detail",inputMethod:"textfield",required:!1}],advanced:[]},saveOptions:{unsetAttributes:["icon-from-type","calc-text"],wipeSlot:!0}}}}]),r}();window.customElements.define(f.tag,f),e.PlaceHolder=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=place-holder.umd.js.map
