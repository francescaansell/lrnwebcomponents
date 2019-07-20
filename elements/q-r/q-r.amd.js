define(["exports","require","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/render-status.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_require,_polymerElement,_renderStatus,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.QR=void 0;_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_b45fbea0ab1411e9aabf0fb6e8f0bd20(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n        #link {\n          visibility: hidden;\n          opacity: 0;\n        }\n      </style>\n      <qr-code\n        id=\"qr\"\n        data$=\"[[data]]\"\n        modulesize$=\"[[modulesize]]\"\n        margin$=\"[[margin]]\"\n        format$=\"[[format]]\"\n      ></qr-code>\n      <a href$=\"[[data]]\" id=\"link\">[[title]]</a>\n    "]);_templateObject_b45fbea0ab1411e9aabf0fb6e8f0bd20=function _templateObject_b45fbea0ab1411e9aabf0fb6e8f0bd20(){return data};return data}/**
 * `q-r`
 * `Polymer wrapper for a qr code.`
 *
 * @demo demo/index.html
 */var QR=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(QR,_PolymerElement);function QR(){var _this;babelHelpers.classCallCheck(this,QR);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(QR).call(this));new Promise(function(res,rej){return _require.default(["./node_modules/@lrnwebcomponents/q-r/lib/qr-code.js"],res,rej)});(0,_renderStatus.afterNextRender)(babelHelpers.assertThisInitialized(_this),function(){this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(QR.haxProperties,QR.tag,this)});return _this}babelHelpers.createClass(QR,null,[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_b45fbea0ab1411e9aabf0fb6e8f0bd20())}},{key:"tag",get:function get(){return"q-r"}},{key:"properties",get:function get(){return{/**
       * Data to code via QR code
       */data:{type:String},/**
       * Alternate title for the data
       */title:{type:String},/**
       * module size of the square
       */modulesize:{type:Number,value:4},/**
       * Margin on the square
       */margin:{type:Number,value:2},/**
       * format to output
       */format:{type:String,value:"png"}}}/**
   * Attached to the DOM, now fire.
   */},{key:"haxProperties",get:function get(){// Establish hax property binding
return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"QR Code",description:"A code to scan from a smartphone.",icon:"hardware:developer-board",color:"grey",groups:["QR"],handles:[{type:"video",source:"data",title:"title"},{type:"image",source:"data",title:"title"},{type:"link",source:"data",title:"title"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"data",title:"QR data",description:"Source of the data for the QR code.",inputMethod:"textfield",icon:"hardware:developer-board"},{property:"title",title:"Alternate title",description:"An alternate title to go to the source of the QR code.",inputMethod:"textfield",icon:"editor:title"},{property:"modulesize",title:"Size",description:"Size of the QR code",inputMethod:"textfield",icon:"image:photo-size-select-small"},{property:"margin",title:"Margin",description:"Wrapper to the code.",inputMethod:"textfield",icon:"icons:settings-overscan"},{property:"format",title:"Output format",description:"Format to put it out.",inputMethod:"select",options:{png:"PNG",html:"HTML",svg:"SVG"},icon:"editor:bubble-chart"}],configure:[{property:"data",title:"QR data",description:"Source of the data for the QR code.",inputMethod:"haxupload",icon:"hardware:developer-board"},{property:"title",title:"Alternate title",description:"An alternate title to go to the source of the QR code.",inputMethod:"alt",icon:"editor:title"},{property:"modulesize",title:"Size",description:"Size of the QR code",inputMethod:"number",icon:"image:photo-size-select-small"},{property:"margin",title:"Margin",description:"Wrapper to the code.",inputMethod:"number",icon:"icons:settings-overscan"},{property:"format",title:"Output format",description:"Format to put it out.",inputMethod:"select",options:{png:"PNG",html:"HTML",svg:"SVG"},icon:"editor:bubble-chart"}],advanced:[]}}}}]);return QR}(_polymerElement.PolymerElement);_exports.QR=QR;window.customElements.define(QR.tag,QR)});