define(["exports","meta","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/resolve-url.js","./node_modules/@lrnwebcomponents/es-global-bridge/es-global-bridge.js","./node_modules/@polymer/iron-ajax/iron-ajax.js"],function(_exports,meta,_polymerElement,_resolveUrl,_esGlobalBridge,_ironAjax){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LunrSearch=void 0;meta=babelHelpers.interopRequireWildcard(meta);function _templateObject_b11c8c70ab1211e981b7f345147ea958(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<iron-ajax\n  auto\n  url=\"[[dataSource]]\"\n  method=\"[[method]]\"\n  handle-as=\"json\"\n  on-response=\"_dataResponse\"\n></iron-ajax>"]);_templateObject_b11c8c70ab1211e981b7f345147ea958=function _templateObject_b11c8c70ab1211e981b7f345147ea958(){return data};return data}/**
 * `lunr-search`
 * `LunrJS search element`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */var LunrSearch=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(LunrSearch,_PolymerElement);babelHelpers.createClass(LunrSearch,null,[{key:"template",// render function
get:function get(){return(0,_polymerElement.html)(_templateObject_b11c8c70ab1211e981b7f345147ea958())}// properties available to the custom element for data binding
},{key:"properties",get:function get(){var props={dataSource:{name:"dataSource",type:String},data:{name:"data",type:Array,notify:!0},method:{name:"method",type:String,value:"GET"},search:{type:String,notify:!0},results:{type:Array,computed:"searched(data, search, index, minScore, limit)",notify:!0},noStopWords:{type:Boolean,value:!1,notify:!0},fields:{type:Array,value:[]},indexNoStopWords:{type:Object},index:{type:Object,computed:"_createIndex(data, fields, noStopWords, __lunrLoaded)"},__lunrLoaded:{type:Boolean},limit:{type:Number,value:500},minScore:{type:Number,value:0},log:{type:Boolean,value:!1}};if(babelHelpers.get(babelHelpers.getPrototypeOf(LunrSearch),"properties",this)){props=Object.assign(props,babelHelpers.get(babelHelpers.getPrototypeOf(LunrSearch),"properties",this))}return props}}]);function LunrSearch(){var _this;babelHelpers.classCallCheck(this,LunrSearch);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LunrSearch).call(this));var basePath=(0,_resolveUrl.pathFromUrl)(meta.url),location="".concat(basePath,"../../lunr/lunr.js");window.addEventListener("es-bridge-lunr-loaded",_this._lunrLoaded.bind(babelHelpers.assertThisInitialized(_this)));window.ESGlobalBridge.requestAvailability();window.ESGlobalBridge.instance.load("lunr",location);if(window.ESGlobalBridge.imports&&window.ESGlobalBridge.imports.lunr){_this.__lunrLoaded=!0}return _this}babelHelpers.createClass(LunrSearch,[{key:"disconnectedCallback",value:function disconnectedCallback(){window.removeEventListener("es-bridge-lunr-loaded",this._lunrLoaded.bind(this));babelHelpers.get(babelHelpers.getPrototypeOf(LunrSearch.prototype),"disconnectedCallback",this).call(this)}},{key:"_lunrLoaded",value:function _lunrLoaded(e){// callback when loaded
this.__lunrLoaded=!0}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */},{key:"_dataResponse",value:function _dataResponse(e){this.set("data",e.detail.response);this.notifyPath("data.*")}/**
    Filters your input data
    
    @param {Array} data Array of Objects with common properties.
    @param {String} search The search term that filters results.
    @param {Object} index The lunr Index..
    @param {Number} minScore The minimum score of your results.
    @param {Number} limit The maximum number of results you'd like your results.
    
    @return {Array} The filtered data.
   */},{key:"searched",value:function searched(data,search,index,minScore,limit){if(data&&index&&search){var results=[];if(""!==""+search){for(var searched=index.search(search),i=0;i<searched.length;i++){if(i===limit||searched[i].score<minScore){break}// match on the id within the array of options
var tmpItem=data.find(function(j){return j.id==searched[i].ref});results.push(tmpItem)}}if(0===results.length&&!this.noStopWords&&""!==""+search){if(!this.indexNoStopWords){this.indexNoStopWords=this._createIndex(data,this.fields,!0,index)}searched=this.indexNoStopWords.search(search);for(var results=[],i=0;i<searched.length;i++){if(i===limit||searched[i].score<minScore){break}var _tmpItem=data.find(function(j){return j.id==searched[i].ref});results.push(_tmpItem)}}return results}}},{key:"_createIndex",value:function _createIndex(data,fields,noStopWords,ready){if(ready){var root=this;if(Array.isArray(data)&&0<data.length){if(Array.isArray(fields)&&0<fields.length){return lunr(function(){for(var i=0;i<fields.length;i++){if(fields[i].charAt(0)===fields[i].charAt(0).toUpperCase()){this.field(fields[i],{boost:10})}else{this.field(fields[i])}}for(var i=0,toIndex;i<data.length;i++){toIndex={id:i};for(var f=0;f<fields.length;f++){if(data[i].hasOwnProperty(fields[f])&&null!==data[i][fields[f]]&&"function"==typeof data[i][fields[f]].toString&&(2<data[i][fields[f]].toString().split(" ").length||30>data[i][fields[f]].toString().length)){//indicate that they might be words in it
toIndex[fields[f]]=data[i][fields[f]].toString()}else{toIndex[fields[f]]=""}}this.add(toIndex)}if(noStopWords){this.pipeline.remove(lunr.stopWordFilter)}})}else{// find fields
// TODO only word best fields.
var fields=[],ddup={};return lunr(function(){for(var indexOfData=0;indexOfData<data.length;indexOfData++){for(var prop in data[indexOfData]){if("_"!==prop.charAt(0)&&!ddup.hasOwnProperty(prop)&&(2<prop.toString().split(" ").length||30>prop.toString().length)){fields.push(prop);if(prop.charAt(0)===prop.charAt(0).toUpperCase()){this.field(prop,{boost:10})}else{this.field(prop)}ddup[prop]=1}}}if(0<fields.length){root.fields=fields}for(var i=0,toIndex;i<data.length;i++){toIndex={id:i};for(var f=0;f<fields.length;f++){if(data[i].hasOwnProperty(fields[f])&&null!==data[i][fields[f]]&&"function"==typeof data[i][fields[f]].toString&&(2<data[i][fields[f]].toString().split(" ").length||30>data[i][fields[f]].toString().length)){//indicate that they might be words in it
toIndex[fields[f]]=data[i][fields[f]].toString()}else{toIndex[fields[f]]=""}}this.add(toIndex)}if(noStopWords){this.pipeline.remove(lunr.stopWordFilter)}})}}}}}],[{key:"tag",get:function get(){return"lunr-search"}}]);return LunrSearch}(_polymerElement.PolymerElement);_exports.LunrSearch=LunrSearch;window.customElements.define(LunrSearch.tag,LunrSearch)});