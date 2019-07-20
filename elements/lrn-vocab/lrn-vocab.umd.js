!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@polymer/polymer/lib/utils/flattened-nodes-observer.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/simple-modal/simple-modal.js"),require("@lrnwebcomponents/hax-iconset/hax-iconset.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@polymer/polymer/lib/utils/flattened-nodes-observer.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/simple-modal/simple-modal.js","@lrnwebcomponents/hax-iconset/hax-iconset.js"],t):t((e=e||self).LrnVocab={},e.polymerElement_js,e.renderStatus_js,e.flattenedNodesObserver_js,e.HAXWiring_js,e.schemaBehaviors_js)}(this,function(e,t,n,r,o,i){"use strict";function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function u(){var e,t,n=(e=['\n      <style>\n        :host {\n          display: inline-flex;\n          --lrn-vocab-border: 1px dashed #ccc;\n        }\n        paper-button {\n          text-transform: none;\n          padding: 0;\n          min-width: unset;\n          margin: 0;\n          position: relative;\n          top: 0px;\n          border-radius: 0;\n          border-bottom: var(--lrn-vocab-border);\n          background: #f5f5f5;\n          @apply --lrn-vocab-button;\n        }\n        paper-button:hover {\n          background: #bbdefb;\n          border-bottom: 1px dashed #2196f3;\n          @apply --lrn-vocab-button-hover;\n        }\n      </style>\n      <paper-button id="button" noink on-click="openDialog"\n        >[[term]]</paper-button\n      >\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return u=function(){return n},n}var d=function(e){function d(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),e=c(this,s(d).call(this)),import("@polymer/paper-button/paper-button.js"),e}var b,f,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(d,i.SchemaBehaviors(t.PolymerElement)),b=d,m=[{key:"template",get:function(){return t.html(u())}},{key:"tag",get:function(){return"lrn-vocab"}},{key:"properties",get:function(){var e={term:{type:String,reflectToAttribute:!0}};return p(s(d),"properties",this)&&(e=Object.assign(e,p(s(d),"properties",this))),e}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Vocab",description:"Vocabulary term",icon:"hax:vocab",color:"red",groups:["Vocab"],handles:[{type:"inline",text:"term"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"term",title:"Term",inputMethod:"textfield",icon:"editor:title",required:!0}],configure:[{property:"term",title:"Term",inputMethod:"textfield",icon:"editor:title",required:!0},{slot:"",title:"Contents",description:"The definitition to display when the term is clicked.",inputMethod:"code-editor",required:!0}],advanced:[]}}}}],(f=[{key:"openDialog",value:function(e){var t=r.FlattenedNodesObserver.getFlattenedNodes(this).filter(function(e){return e.nodeType===Node.ELEMENT_NODE}),n=document.createElement("div");for(var o in t)n.appendChild(t[o].cloneNode(!0));var i=new CustomEvent("simple-modal-show",{bubbles:!0,cancelable:!0,detail:{title:this.term,elements:{content:n},invokedBy:this.shadowRoot.querySelector("#button")}});window.dispatchEvent(i)}},{key:"connectedCallback",value:function(){p(s(d.prototype),"connectedCallback",this).call(this),n.afterNextRender(this,function(){window.SimpleModal.requestAvailability(),this.HAXWiring=new o.HAXWiring,this.HAXWiring.setup(d.haxProperties,d.tag,this)})}}])&&l(b.prototype,f),m&&l(b,m),d}();window.customElements.define(d.tag,d),e.LrnVocab=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrn-vocab.umd.js.map
