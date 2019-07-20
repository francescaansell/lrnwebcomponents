define(["exports","require","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/render-status.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_require,_polymerElement,_renderStatus,_simpleColors,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignPanelcard=void 0;_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_170737d0ab1611e9ab0bfde934bfbf8c(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: inline-block;\n          position: relative;\n          box-sizing: border-box;\n          --lrndesign-panelcard-text-color: var(\n            --simple-colors-default-theme-grey-12\n          );\n          --lrndesign-panelcard-color: var(\n            --simple-colors-default-theme-accent-1\n          );\n        }\n        :host([dark]:not([accent-color=\"grey\"])) {\n          --lrndesign-panelcard-color: var(\n            --simple-colors-default-theme-accent-3\n          );\n        }\n        :host([colored-text]) {\n          --lrndesign-panelcard-text-color: var(\n            --simple-colors-default-theme-accent-9\n          );\n          --lrndesign-panelcard-color: var(\n            --simple-colors-default-theme-grey-1\n          );\n        }\n        .card-panel {\n          transition: box-shadow 0.25s;\n          padding: 24px;\n          margin: 0;\n          border-radius: 2px;\n          color: var(--lrndesign-panelcard-text-color);\n          background-color: var(--lrndesign-panelcard-color);\n        }\n\n        h3 {\n          padding: 0;\n          margin: 0 0 8px 0;\n        }\n      </style>\n      <aside>\n        <paper-card elevation=\"[[elevation]]\">\n          <div class=\"card-panel\">\n            <h3>[[title]]</h3>\n            <span><slot></slot></span>\n          </div>\n        </paper-card>\n      </aside>\n    "]);_templateObject_170737d0ab1611e9ab0bfde934bfbf8c=function _templateObject_170737d0ab1611e9ab0bfde934bfbf8c(){return data};return data}/**
`lrndesign-panelcard`
A LRN element

* @demo demo/index.html
*/var LrndesignPanelcard=/*#__PURE__*/function(_SimpleColors){babelHelpers.inherits(LrndesignPanelcard,_SimpleColors);function LrndesignPanelcard(){var _this;babelHelpers.classCallCheck(this,LrndesignPanelcard);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LrndesignPanelcard).call(this));new Promise(function(res,rej){return _require.default(["./node_modules/@polymer/paper-card/paper-card.js"],res,rej)});(0,_renderStatus.afterNextRender)(babelHelpers.assertThisInitialized(_this),function(){this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(LrndesignPanelcard.haxProperties,LrndesignPanelcard.tag,this)});return _this}babelHelpers.createClass(LrndesignPanelcard,null,[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_170737d0ab1611e9ab0bfde934bfbf8c())}},{key:"tag",get:function get(){return"lrndesign-panelcard"}},{key:"properties",get:function get(){var props={/**
       * Title of the panel
       */title:{type:String,value:"Block heading",reflectToAttribute:!0},/**
       * Height of the paper.
       */elevation:{type:Number,value:2,reflectToAttribute:!0},/**
       * Applies the color to the text instead of the background
       */coloredText:{type:Boolean,value:!1,reflectToAttribute:!0}};if(babelHelpers.get(babelHelpers.getPrototypeOf(LrndesignPanelcard),"properties",this)){props=Object.assign(props,babelHelpers.get(babelHelpers.getPrototypeOf(LrndesignPanelcard),"properties",this))}return props}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Note card",description:"A small note to offset text used for asides.",icon:"icons:check-box-outline-blank",color:"grey",groups:["Content","Visual Treatment"],handles:[{type:"text",text:"title"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"The heading for this sticky note",inputMethod:"textfield",icon:"editor:title"},{property:"accentColor",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"},{property:"elevation",title:"Elevation",description:"Visually how high this is off the page",inputMethod:"textfield",icon:"icons:content-copy"}],configure:[{property:"title",title:"Title",description:"The heading for this sticky note",inputMethod:"textfield",icon:"editor:title"},{slot:"",title:"Text",description:"The text for our sticky note",inputMethod:"textarea",icon:"editor:title",required:!1,validationType:"text"},{property:"accentColor",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"},{property:"coloredText",title:"Colored Text",description:"Apply color to text instead of background.",inputMethod:"boolean",icon:"editor:format-color-text"},{property:"elevation",title:"Elevation",description:"Visually how high this is off the page",inputMethod:"select",options:{0:"0",1:"1",2:"2",3:"3",4:"4",5:"5"}}],advanced:[]}}}}]);return LrndesignPanelcard}(_simpleColors.SimpleColors);_exports.LrndesignPanelcard=LrndesignPanelcard;window.customElements.define(LrndesignPanelcard.tag,LrndesignPanelcard)});