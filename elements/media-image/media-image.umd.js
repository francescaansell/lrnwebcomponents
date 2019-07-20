!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@polymer/polymer/lib/elements/dom-if.js"),require("@polymer/polymer/lib/utils/flattened-nodes-observer.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@polymer/polymer/lib/elements/dom-if.js","@polymer/polymer/lib/utils/flattened-nodes-observer.js"],t):t((e=e||self).MediaImage={},e.polymerElement_js,e.renderStatus_js,e.HAXWiring_js,e.schemaBehaviors_js)}(this,function(e,t,n,i,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?d(e):t}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(){var e=f(['\n      <style>\n        :host {\n          display: block;\n        }\n\n        .caption {\n          padding-bottom: 25px;\n          border-bottom: dashed 2px lightgray;\n          margin-bottom: 25px;\n          line-height: 1.5;\n          font-size: 18px;\n        }\n\n        ::slotted(*) {\n          margin-top: 0;\n        }\n        ::slotted(*:last-child) {\n          margin-bottom: 0;\n        }\n      </style>\n      <div class="caption" hidden$="[[!__hasContent]]">\n        <slot id="slot"></slot>\n      </div>\n    ']);return h=function(){return e},e}function g(){var e=f(['\n      <style>\n        :host {\n          display: block;\n        }\n\n        .citation {\n          font-size: 12.8px;\n          font-style: italic;\n          color: #4c4c4c;\n          margin: 15px 0 15px;\n        }\n      </style>\n      <div class="citation"><slot></slot></div>\n    ']);return g=function(){return e},e}function y(){var e=f(['\n      <style>\n        :host {\n          display: block;\n          width: auto;\n          margin: auto;\n          --box-background-color: #f7f6ef;\n        }\n\n        :host([card]) {\n          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.14);\n          padding: 20px;\n        }\n\n        :host([box]) {\n          background-color: var(--box-background-color);\n          padding: 20px;\n        }\n\n        :host([round]) iron-image {\n          border-radius: 50%;\n        }\n\n        @media screen and (min-width: 450px) {\n          :host([size="small"]) {\n            max-width: 50%;\n          }\n        }\n\n        @media screen and (min-width: 650px) {\n          :host([size="small"]) {\n            max-width: 35%;\n          }\n        }\n\n        @media screen and (min-width: 900px) {\n          :host([size="small"]) {\n            max-width: 25%;\n          }\n        }\n\n        iron-image {\n          width: 100%;\n          --iron-image-width: 100%;\n        }\n\n        :host([offset="left"]) {\n          float: left;\n          margin: var(--media-image-offset-width, 1.5vw);\n          margin-left: calc(-2 * var(--media-image-offset-width, 1.5vw));\n          margin-top: 0;\n          margin-bottom: calc(0.1 * var(--media-image-offset-width, 1.5vw));\n        }\n\n        :host([offset="right"]) {\n          float: right;\n          margin: var(--media-image-offset-width, 1.5vw);\n          margin-right: calc(-2 * var(--media-image-offset-width, 1.5vw));\n          margin-top: 0;\n          margin-bottom: calc(0.1 * var(--media-image-offset-width, 1.5vw));\n        }\n\n        :host([offset="wide"]) {\n          margin: 0 calc(-1 * var(--media-image-offset-wide-width, 3.5vw));\n          max-width: 100vw;\n        }\n\n        :host([offset="narrow"]) {\n          max-width: var(--media-image-offset-narrow-max-width, 500px);\n          margin: auto;\n        }\n      </style>\n      <iron-image\n        resource$="[[schemaResourceID]]-image"\n        src$="[[source]]"\n        alt$="[[alt]]"\n      ></iron-image>\n\n      <media-image-citation>\n        <slot name="citation">\n          [[citation]]\n        </slot>\n      </media-image-citation>\n\n      <media-image-caption>\n        <slot name="caption">\n          [[caption]]\n        </slot>\n      </media-image-caption>\n    '],['\n      <style>\n        :host {\n          display: block;\n          width: auto;\n          margin: auto;\n          --box-background-color: #f7f6ef;\n        }\n\n        :host([card]) {\n          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.14);\n          padding: 20px;\n        }\n\n        :host([box]) {\n          background-color: var(--box-background-color);\n          padding: 20px;\n        }\n\n        :host([round]) iron-image {\n          border-radius: 50%;\n        }\n\n        @media screen and (min-width: 450px) {\n          :host([size="small"]) {\n            max-width: 50%;\n          }\n        }\n\n        @media screen and (min-width: 650px) {\n          :host([size="small"]) {\n            max-width: 35%;\n          }\n        }\n\n        @media screen and (min-width: 900px) {\n          :host([size="small"]) {\n            max-width: 25%;\n          }\n        }\n\n        iron-image {\n          width: 100%;\n          --iron-image-width: 100%;\n        }\n\n        :host([offset="left"]) {\n          float: left;\n          margin: var(--media-image-offset-width, 1.5vw);\n          margin-left: calc(-2 * var(--media-image-offset-width, 1.5vw));\n          margin-top: 0;\n          margin-bottom: calc(0.1 * var(--media-image-offset-width, 1.5vw));\n        }\n\n        :host([offset="right"]) {\n          float: right;\n          margin: var(--media-image-offset-width, 1.5vw);\n          margin-right: calc(-2 * var(--media-image-offset-width, 1.5vw));\n          margin-top: 0;\n          margin-bottom: calc(0.1 * var(--media-image-offset-width, 1.5vw));\n        }\n\n        :host([offset="wide"]) {\n          margin: 0 calc(-1 * var(--media-image-offset-wide-width, 3.5vw));\n          max-width: 100vw;\n        }\n\n        :host([offset="narrow"]) {\n          max-width: var(--media-image-offset-narrow-max-width, 500px);\n          margin: auto;\n        }\n      </style>\n      <iron-image\n        resource\\$="[[schemaResourceID]]-image"\n        src\\$="[[source]]"\n        alt\\$="[[alt]]"\n      ></iron-image>\n\n      <media-image-citation>\n        <slot name="citation">\n          [[citation]]\n        </slot>\n      </media-image-citation>\n\n      <media-image-caption>\n        <slot name="caption">\n          [[caption]]\n        </slot>\n      </media-image-caption>\n    ']);return y=function(){return e},e}var b=function(e){function a(){var e;return r(this,a),e=p(this,c(a).call(this)),import("@polymer/iron-image/iron-image.js"),import("@polymer/iron-icons/iron-icons.js"),n.afterNextRender(d(e),function(){this.HAXWiring=new i.HAXWiring,this.HAXWiring.setup(a.haxProperties,a.tag,this)}),e}return l(a,o.SchemaBehaviors(t.PolymerElement)),s(a,null,[{key:"template",get:function(){return t.html(y())}},{key:"tag",get:function(){return"media-image"}},{key:"properties",get:function(){var e={source:{type:String,value:""},citation:{type:String,value:""},caption:{type:String,value:""},alt:{type:String,value:""},size:{type:String,value:"wide",reflectToAttribute:!0},round:{type:Boolean,value:!1,reflectToAttribute:!0},card:{type:Boolean,value:!1,reflectToAttribute:!0},box:{type:Boolean,value:!1,reflectToAttribute:!0},offset:{type:String,value:"none",reflectToAttribute:!0}};return u(c(a),"properties",this)&&(e=Object.assign(e,u(c(a),"properties",this))),e}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Styled image",descrption:"An image gizmo with the ability to provide simple, consistent styling and accessibility options.",icon:"editor:insert-photo",color:"indigo",groups:["Image","Media"],handles:[{type:"image",source:"source",title:"alt",alt:"alt",citation:"citation",caption:"caption"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"source",title:"Source",description:"The URL for the image.",inputMethod:"textfield",icon:"link",required:!0},{property:"alt",title:"Alternative text",description:"Text to describe the image to non-sighted users.",inputMethod:"textfield",icon:"accessibility",required:!1}],configure:[{property:"source",title:"Source",description:"The URL for the image.",inputMethod:"haxupload",icon:"link",required:!0},{property:"alt",title:"Alternative text",description:"Text to describe the image to non-sighted users.",inputMethod:"alt",icon:"accessibility",required:!0},{property:"round",title:"Round image",description:"Crops the image appearance to be circle in shape.",inputMethod:"boolean",icon:"account",required:!1},{property:"card",title:"Card",description:"Apply a drop shadow to give the appearance of being a raised card.",inputMethod:"boolean",icon:"check-box-outline-blank",required:!1},{property:"box",title:"Box",description:"Apply a visual box around the image.",inputMethod:"boolean",icon:"image:crop-square",required:!1},{property:"offset",title:"Offset",description:"Apply a left or right offset to the image.",inputMethod:"select",icon:"image:crop-square",options:{none:"none",left:"left",right:"right",wide:"wide",narrow:"narrow"}},{property:"citation",title:"Citation",description:"Citation for the image.",inputMethod:"textfield",icon:"text-format",required:!1},{property:"caption",title:"Caption",description:"Caption for the image.",inputMethod:"textfield",icon:"text-format",required:!1}]}}}}]),a}();window.customElements.define(b.tag,b);var w=function(e){function n(){return r(this,n),p(this,c(n).apply(this,arguments))}return l(n,t.PolymerElement),s(n,null,[{key:"template",get:function(){return t.html(g())}},{key:"tag",get:function(){return"media-image-citation"}}]),n}();window.customElements.define(w.tag,w);var v=function(e){function n(){return r(this,n),p(this,c(n).apply(this,arguments))}return l(n,t.PolymerElement),s(n,null,[{key:"template",get:function(){return t.html(h())}},{key:"tag",get:function(){return"media-image-caption"}}]),n}();window.customElements.define(v.tag,v),e.MediaImage=b,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=media-image.umd.js.map
