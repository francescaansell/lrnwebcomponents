define(["exports","require","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/render-status.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_require,_polymerElement,_renderStatus,_schemaBehaviors,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.PromoTile=void 0;_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_b3a52130ab1411e9bfa62b808420fc05(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n\n        a {\n          text-decoration: var(--promo-tile-a-text-decoration, none);\n          @apply --promo-tile-a;\n        }\n\n        #container {\n          width: var(--promo-tile-container-width, 100%);\n          height: var(--promo-tile-container-height, auto);\n          @apply --promo-tile-container;\n        }\n\n        .back_card {\n          background-color: var(\n            --promo-tile-back-card-background-color,\n            #e2801e\n          );\n          height: var(--promo-tile-back-card-height, 460px);\n          opacity: var(--promo-tile-back-card-opacity, 0);\n          display: var(--promo-tile-back-card-display, flex);\n          flex-direction: var(--promo-tile-back-card-flex-direction, column);\n          @apply --promo-tile-back-card;\n        }\n\n        :host([hover]) #container .back_card {\n          opacity: var(--promo-tile-container-back-card-hover-opacity, 0.9);\n          transition: var(\n            --promo-tile-container-back-card-hover-transition,\n            all 0.3s ease-in-out\n          );\n          @apply --promo-tile-container-back-card-hover;\n        }\n\n        :host([hover]) #container .front_card .front_title {\n          opacity: var(\n            --promo-tile-container-front-card-front-title-hover-opacity,\n            0\n          );\n          transition: var(\n            --promo-tile-container-front-card-front-title-hover-transition,\n            all 0.3s ease-in-out\n          );\n          @apply --promo-tile-container-front-card-hover;\n        }\n\n        .image {\n          display: var(--promo-tile-image-display, flex);\n          justify-content: var(--promo-tile-image-justify-content, center);\n          background-position: var(\n            --promo-tile-image-background-position,\n            top center\n          );\n          background-repeat: var(\n            --promo-tile-image-background-repeat,\n            no-repeat\n          );\n          background-size: var(--promo-tile-image-background-size, cover);\n          width: var(--promo-tile-image-width, 100%);\n          height: var(--promo-tile-image-height, 100%);\n          @apply --promo-tile-image;\n        }\n\n        .front_title {\n          opacity: var(--promo-tile-front-title-opacity, 1);\n          position: var(--promo-tile-front-title-position, absolute);\n          display: var(--promo-tile-front-title-display, flex);\n          align-self: var(--promo-tile-front-title-align-self, flex-end);\n          padding: var(--promo-tile-front-title-padding, 0 0 25px 0);\n          @apply --promo-tile-front-title;\n        }\n\n        .front_title h1 {\n          color: var(--promo-tile-front-title-h1-color, #ffffff);\n          font-size: var(--promo-tile-front-title-h1-font-size, 36px);\n          font-weight: var(--promo-tile-front-title-h1-font-weight, 400);\n          text-shadow: var(\n            --promo-tile-front-title-h1-text-shadow,\n            1px 1px 3px\n              var(--promo-tile-front-title-h1-text-shadow-color, #363533)\n          );\n          @apply --promo-title-front-title-h1;\n        }\n\n        .back_title {\n          opacity: var(--promo-tile-back-title-opacity, 1);\n          display: var(--promo-tile-back-title-display, flex);\n          justify-content: var(--promo-tile-back-title-justify-content, center);\n          padding: var(--promo-tile-back-title-padding, 20px 0 0 0);\n          @apply --promo-tile-back-title;\n        }\n\n        .back_title h1 {\n          color: var(--promo-tile-back-title-h1-color, #ffffff);\n          font-size: var(--promo-tile-back-title-h1-font-size, 36px);\n          font-weight: var(--promo-tile-back-title-h1-font-weight, 400);\n          @apply --promo-tile-back-title-h1;\n        }\n\n        .back_content {\n          color: var(--promo-tile-back-content-font-color, #ffffff);\n          font-size: var(--promo-tile-back-content-font-size, 18px);\n          font-weight: var(--promo-tile-back-content-font-weight, 300);\n          line-height: var(--promo-tile-back-content-line-height, 1.4);\n          padding: var(--promo-title-back-content-padding, 0 20px 0 20px);\n          text-align: justify;\n          @apply --promo-tile-back-content;\n        }\n\n        paper-button#learn {\n          display: var(--promo-tile-paper-button-learn-display, flex);\n          margin: var(\n            --promo-tile-paper-button-learn-margin,\n            140px auto 0 auto\n          );\n          font-size: var(--promo-tile-paper-button-learn-font-size, 18px);\n          color: var(--promo-tile-paper-button-learn-font-color, #ffffff);\n          border: var(--promo-tile-paper-button-learn-border, solid);\n          border-width: var(--promo-tile-paper-button-learn-border-width, 1px);\n          border-color: var(\n            --promo-tile-paper-button-learn-border-color,\n            #ffffff\n          );\n          border-radius: var(--promo-tile-paper-button-learn-border-radius, 0);\n          width: var(--promo-tile-paper-button-learn-width, 50%);\n          @apply --promo-tile-paper-button-learn;\n        }\n\n        paper-button#learn:hover,\n        paper-button#learn:focus {\n          background-color: var(\n            --promo-tile-paper-button-learn-background-color-active,\n            #363533\n          );\n          @apply --promo-tile-paper-button-learn-active;\n        }\n      </style>\n      <div id=\"container\">\n        <div class=\"front_card\">\n          <div\n            id=\"front_image\"\n            class=\"image\"\n            alt=\"[[alt]]\"\n            style$=\"background-image:url([[image]])\"\n          >\n            <div class=\"front_title\">\n              <h1>[[title]]</h1>\n            </div>\n            <div class=\"back_card\" id=\"cardBack\" on-click=\"activateBtn\">\n              <div class=\"back_title\">\n                <h1>[[title]]</h1>\n              </div>\n              <div class=\"back_content\">\n                <slot></slot>\n              </div>\n              <div class=\"learn_more\">\n                <a\n                  tabindex=\"-1\"\n                  href=\"[[url]]\"\n                  id=\"link\"\n                  target$=\"[[_urlTarget(url)]]\"\n                >\n                  <paper-button id=\"learn\" no-ink\n                    >[[label]]\n                    <iron-icon icon=\"chevron-right\"></iron-icon>\n                  </paper-button>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    "]);_templateObject_b3a52130ab1411e9bfa62b808420fc05=function _templateObject_b3a52130ab1411e9bfa62b808420fc05(){return data};return data}/**
 * `promo-tile`
 * @demo demo/index.html
 */var PromoTile=/*#__PURE__*/function(_SchemaBehaviors){babelHelpers.inherits(PromoTile,_SchemaBehaviors);function PromoTile(){var _this;babelHelpers.classCallCheck(this,PromoTile);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PromoTile).call(this));new Promise(function(res,rej){return _require.default(["./node_modules/@polymer/paper-button/paper-button.js"],res,rej)});new Promise(function(res,rej){return _require.default(["./node_modules/@polymer/iron-icon/iron-icon.js"],res,rej)});new Promise(function(res,rej){return _require.default(["./node_modules/@polymer/iron-icons/iron-icons.js"],res,rej)});(0,_renderStatus.afterNextRender)(babelHelpers.assertThisInitialized(_this),function(){this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(PromoTile.haxProperties,PromoTile.tag,this)});return _this}babelHelpers.createClass(PromoTile,[{key:"connectedCallback",/**
   * Attached to the DOM, now fire.
   */value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(PromoTile.prototype),"connectedCallback",this).call(this);(0,_renderStatus.afterNextRender)(this,function(){this.addEventListener("mouseover",this.__hoverIn.bind(this));this.addEventListener("mouseout",this.__hoverOut.bind(this));this.addEventListener("focusin",this.__hoverIn.bind(this));this.addEventListener("focusout",this.__hoverOut.bind(this))})}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.removeEventListener("mouseover",this.__hoverIn.bind(this));this.removeEventListener("mouseout",this.__hoverOut.bind(this));this.removeEventListener("focusin",this.__hoverIn.bind(this));this.removeEventListener("focusout",this.__hoverOut.bind(this));babelHelpers.get(babelHelpers.getPrototypeOf(PromoTile.prototype),"disconnectedCallback",this).call(this)}},{key:"_outsideLink",/**
   * Internal function to check if a url is external
   */value:function _outsideLink(url){if(0!=url.indexOf("http"))return!1;var loc=location.href,path=location.pathname,root=loc.substring(0,loc.indexOf(path));return 0!=url.indexOf(root)}/**
   * If url is external, open link in new window, otherwise open link in same window.
   */},{key:"_urlTarget",value:function _urlTarget(url){if(url){var external=this._outsideLink(url);if(external){return"_blank"}}return!1}},{key:"activateBtn",value:function activateBtn(){if(this.hover){var link=this.shadowRoot.querySelector("#link");if(700<window.innerWidth){link.click()}}}},{key:"__hoverIn",value:function __hoverIn(){this.hover=!0}},{key:"__hoverOut",value:function __hoverOut(){this.hover=!1}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_b3a52130ab1411e9bfa62b808420fc05())}},{key:"tag",get:function get(){return"promo-tile"}},{key:"properties",get:function get(){var props={/**
       * Image source
       */image:{type:String,value:"",reflectToAttribute:!0},/**
       * Alt text for image
       */alt:{type:String,value:"",reflectToAttribute:!0},/**
       * Label for button
       */label:{type:String,value:"",reflectToAttribute:!0},/**
       * Title of tile
       */title:{type:String,value:"",reflectToAttribute:!0},/**
       * Url for tile
       */url:{type:String,value:"",reflectToAttribute:!0},/**
       * Hover state
       */hover:{type:Boolean,value:!1,reflectToAttribute:!0}};if(babelHelpers.get(babelHelpers.getPrototypeOf(PromoTile),"properties",this)){props=Object.assign(props,babelHelpers.get(babelHelpers.getPrototypeOf(PromoTile),"properties",this))}return props}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Promo-Tile",description:"A tile element for promoting content.",icon:"icons:dashboard",color:"orange",groups:["Content","Media"],handles:[{type:"content",source:"image",title:"citation",url:"source"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the tile",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"The image of the tile",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"url",title:"Link",description:"The link of the tile",inputMethod:"textfield",icon:"editor:insert-link"}],configure:[{property:"title",title:"Title",description:"The title of the tile",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"The image of the tile",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"alt",title:"Alt",description:"The alt text for the image",inputMethod:"textfield",icon:"editor:mode-edit"},{property:"url",title:"Link",description:"The link of the tile",inputMethod:"textfield",icon:"editor:insert-link"},{property:"label",title:"Label",description:"The label for the button",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}}}}]);return PromoTile}((0,_schemaBehaviors.SchemaBehaviors)(_polymerElement.PolymerElement));_exports.PromoTile=PromoTile;window.customElements.define(PromoTile.tag,PromoTile)});