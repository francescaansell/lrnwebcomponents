define(["exports","require","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/render-status.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],function(_exports,_require,_polymerElement,_renderStatus,_HAXWiring,_schemaBehaviors){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrnTable=void 0;_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_ab590940ab1611e98d518d21f6623151(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n        .hidden-title {\n          display: none;\n        }\n      </style>\n      <div typeof=\"oer:SupportingMaterial\">\n        <div class=\"hidden-title\" property=\"oer:name\">[[title]]</div>\n        <div property=\"oer:description\">\n          <slot></slot>\n          <csv-render\n            data-source=\"[[csvFile]]\"\n            caption=\"[[title]]\"\n            summary=\"[[description]]\"\n          ></csv-render>\n        </div>\n      </div>\n    "]);_templateObject_ab590940ab1611e98d518d21f6623151=function _templateObject_ab590940ab1611e98d518d21f6623151(){return data};return data}/**
 * `lrn-table`
 * `Accessibly render a HTML table from a csv file`
 *
 * @microcopy - language worth noting:
 *  - CSV - Comma separated values
 *
 * @customElement
 * @polymer
 * @polymerLegacy
 * @demo demo/index.html
 */var LrnTable=/*#__PURE__*/function(_SchemaBehaviors){babelHelpers.inherits(LrnTable,_SchemaBehaviors);function LrnTable(){var _this;babelHelpers.classCallCheck(this,LrnTable);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LrnTable).call(this));new Promise(function(res,rej){return _require.default(["./node_modules/@lrnwebcomponents/csv-render/csv-render.js"],res,rej)});return _this}babelHelpers.createClass(LrnTable,[{key:"connectedCallback",/**
   * attached.
   */value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(LrnTable.prototype),"connectedCallback",this).call(this);(0,_renderStatus.afterNextRender)(this,function(){this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(LrnTable.haxProperties,LrnTable.tag,this)})}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_ab590940ab1611e98d518d21f6623151())}},{key:"tag",get:function get(){return"lrn-table"}},{key:"properties",get:function get(){return{/**
       * Title of this table. This is both for accessibility and presentation.
       */title:{type:String},/**
       * The file to load material from.
       */csvFile:{type:String},/**
       * An extended description of the material in the table for improved accessibility.
       */description:{type:String}}}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"CSV table",description:"This can generate a table from a CSV file no matter where it is located.",icon:"editor:border-all",color:"green",groups:["Presentation","Table","Data"],handles:[{type:"csv",source:"csvFile"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"csvFile",title:"Source",description:"The URL for this csv file.",inputMethod:"textfield",icon:"link",required:!0},{property:"title",title:"Title",description:"Title for the table to be generated.",inputMethod:"textfield",icon:"editor:title"},{property:"description",title:"Description",description:"More detailed description for improved accessibility of the table data.",inputMethod:"textfield",icon:"editor:short-text"}],configure:[{property:"csvFile",title:"Source",description:"The URL for this csv file.",inputMethod:"haxupload",required:!0},{property:"title",title:"Title",description:"Title for the table to be generated.",inputMethod:"textfield"},{property:"description",title:"Description",description:"More detailed description for improved accessibility of the table data.",inputMethod:"textfield"}],advanced:[]}}}}]);return LrnTable}((0,_schemaBehaviors.SchemaBehaviors)(_polymerElement.PolymerElement));_exports.LrnTable=LrnTable;window.customElements.define(LrnTable.tag,LrnTable)});