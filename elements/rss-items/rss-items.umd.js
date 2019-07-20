!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@polymer/polymer/lib/utils/resolve-url.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js"),require("@polymer/iron-ajax/iron-ajax.js"),require("@polymer/polymer/lib/elements/dom-repeat.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@polymer/polymer/lib/utils/resolve-url.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js","@polymer/iron-ajax/iron-ajax.js","@polymer/polymer/lib/elements/dom-repeat.js"],t):t((e=e||self).RssItems={},e.polymerElement_js,e.renderStatus_js,e.HAXWiring_js,e.resolveUrl_js)}(this,function(e,t,n,r,i){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function u(){var e,t,n=(e=['\n<style>:host([hidden]) {\n  display: none;\n}\n:host {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  @apply --rss-items;\n}\n\n:host * {\n  box-sizing: border-box;\n}\n\nh3,\np {\n  margin: 0;\n}\n\na {\n  color: var(--primary-color, inherit);\n  text-decoration: none;\n}\n\narticle {\n  margin-bottom: 2em;\n\n  @apply --rss-items-article;\n}\n\n.thumbnail-container {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 180px;\n\n  @apply --rss-items-thumbnail-container;\n}\n\n.thumbnail {\n  width: 100%;\n  height: 100%;\n  transition: transform .5s ease-out;\n\n  @apply --rss-items-thumbnail;\n}\n\n.thumbnail-container:hover .thumbnail,\n.thumbnail-container:focus .thumbnail {\n  transform: scale3d(1.3, 1.3, 1);\n\n  @apply --rss-items-thumbnail-hover;\n}\n\n.title {\n  min-height: 3em;\n  margin: 1em 0 .5em;\n\n  @apply --rss-items-title;\n}\n\n.excerpt {\n  min-height: 6em;\n  margin: .5em 0 2em;\n\n  @apply --rss-items-excerpt;\n}\n\n@media (max-width: 599px) {\n  .title,\n  .excerpt {\n    min-height: 0;\n  }\n}\n\n@media (min-width: 600px) {\n  article {\n    flex: 1 1 40%;\n    margin-right: 2em;\n\n    @apply --rss-items-article-mq-m-up;\n  }\n\n  article:nth-of-type(2n),\n  article:last-of-type {\n    margin-right: 0;\n  }\n}\n\n@media (min-width: 900px) {\n  article {\n    flex: 1 1 30%;\n\n    @apply --rss-items-article-mq-l-up;\n  }\n\n  article:nth-of-type(2n) {\n    margin-right: 2em;\n  }\n\n  article:nth-of-type(3n) {\n    margin-right: 0;\n  }\n}</style>\n<iron-ajax id="rssajax" url="[[url]]" handle-as="xml" last-response="{{xml}}"></iron-ajax>\n<dom-repeat items="[[items]]">\n  <template>\n  <article>\n    <a class="thumbnail-container" href="[[item.link]]" title="[[item.title]]">\n      <iron-image class="thumbnail" src="[[item.imageSrc]]" alt="[[item.title]]" sizing="cover"></iron-image>\n    </a>\n    <a href="[[item.link]]" title="[[item.title]]">\n      <span class="title">[[_truncateText(item.title, maxTitleLength)]]</span>\n    </a>\n    <div class="excerpt">[[_truncateText(item.excerpt, maxExcerptLength)]]</div>\n    <template is="dom-if" if="[[showReadMore]]">\n      <a tabindex="-1" href="[[item.link]]" class="read-more" title="[[item.title]]">[[readMoreAnchorText]]\n        <paper-icon-button icon="icons:arrow-forward" class="read-more-icon" alt="[[readMoreImageAlt]]"></paper-icon-button>\n      </a>\n    </template>\n  </article>\n  </template>\n</dom-repeat>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return u=function(){return n},n}var p=function(e){function o(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),t=this,e=!(n=s(o).call(this))||"object"!=typeof n&&"function"!=typeof n?c(t):n,import("@polymer/iron-image/iron-image.js"),import("@polymer/paper-icon-button/paper-icon-button.js"),import("@polymer/iron-icons/iron-icons.js");var r=i.pathFromUrl(decodeURIComponent("undefined"!=typeof document?document.currentScript&&document.currentScript.src||document.baseURI:new("undefined"!=typeof URL?URL:require("url").URL)("file:"+__filename).href)),a="".concat(r,"lib/x2js.js");return window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("x2js",a),window.addEventListener("es-bridge-".concat("x2js","-loaded"),e._x2jsLoaded.bind(c(e))),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(o,t.PolymerElement),a(o,[{key:"initRequest",value:function(){this.shadowRoot.querySelector("#rssajax").generateRequest()}},{key:"_maxChanged",value:function(e){e&&this._x2js&&this.__ready&&this.xmlToItems(this.xml)}},{key:"xmlToItems",value:function(e){if(e&&this._x2js&&this.__ready){var t=(new X2JS).xml2json(e),n=t.rss?t.rss.channel.item:t.channel.item;n=void 0===this.max?n:n.splice(0,this.max),this.items=this._parseItems(n)}}},{key:"_urlChanged",value:function(e){e&&this._x2js&&this.__ready&&this.initRequest()}},{key:"_parseItems",value:function(e){return e.map(function(e){return e.excerpt=this._getItemExcerpt(e),e.imageSrc=this._getItemImageScr(e),e}.bind(this))}},{key:"_getItemExcerpt",value:function(e){var t=document.createElement("div");return t.innerHTML=e.description,t.textContent.trim()}},{key:"_getItemImageScr",value:function(e){if(e.thumbnail&&e.thumbnail._url)return e.thumbnail._url;var t=document.createElement("div");return t.innerHTML=e.description,(t.querySelector("img")||{}).src||""}},{key:"_truncateText",value:function(e,t){if(e)return t&&e.length>t?e.substr(0,t)+"...":e}}],[{key:"template",get:function(){return t.html(u())}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Rss feed",description:"visualize RSS items",icon:"communication:rss-feed",color:"orange",groups:["RSS"],handles:[{type:"rss",source:"source"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{property:"url",title:"Feed URL",description:"URL to the XML feed",inputMethod:"textfield"},{property:"max",title:"Max items",description:"Max number of feed items to display",inputMethod:"number"}],advanced:[]}}}},{key:"properties",get:function(){var e={auto:{type:Boolean,value:!1},items:{type:Array,notify:!0},max:{type:Number,value:10,observer:"_maxChanged"},maxExcerptLength:{type:Number,value:100},maxTitleLength:{type:Number,value:50},readMoreAnchorText:{type:Boolean,value:"Read more"},readMoreImageAlt:{type:Boolean,value:"Icono de flecha"},showReadMore:{type:Boolean,value:!1},url:{type:String,observer:"_urlChanged"},xml:{type:Object,observer:"xmlToItems"}};return m(s(o),"properties",this)&&(e=Object.assign(e,m(s(o),"properties",this))),e}},{key:"tag",get:function(){return"rss-items"}}]),a(o,[{key:"_x2jsLoaded",value:function(e){this._x2js=!0,this.__ready&&(this.auto?this.shadowRoot.querySelector("#rssajax").auto=this.auto:this.initRequest())}},{key:"connectedCallback",value:function(){m(s(o.prototype),"connectedCallback",this).call(this),this.__ready=!0,n.afterNextRender(this,function(){this.HAXWiring=new r.HAXWiring,this.HAXWiring.setup(o.haxProperties,o.tag,this),this._x2js&&(this.auto?this.shadowRoot.querySelector("#rssajax").auto=this.auto:this.initRequest())})}},{key:"disconnectedCallback",value:function(){window.removeEventListener("es-bridge-".concat(name,"-loaded"),this._x2jsLoaded.bind(this)),m(s(o.prototype),"disconnectedCallback",this).call(this)}}]),o}();window.customElements.define(p.tag,p),e.RssItems=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=rss-items.umd.js.map
