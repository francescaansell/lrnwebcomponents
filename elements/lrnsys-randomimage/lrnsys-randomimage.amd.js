define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/render-status.js","./node_modules/@lrnwebcomponents/random-image/random-image.js","./node_modules/@polymer/paper-button/paper-button.js"],function(_exports,_polymerElement,_renderStatus,_randomImage,_paperButton){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrnsysRandomimage=void 0;function _templateObject_31a62b20ab1411e983069f7675e85b71(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <div id=\"list\">\n        <random-image images-list$=\"{{images}}\"></random-image>\n      </div>\n      <paper-button raised on-click=\"reload\">Reload</paper-button>\n    "]);_templateObject_31a62b20ab1411e983069f7675e85b71=function _templateObject_31a62b20ab1411e983069f7675e85b71(){return data};return data}/**
 * `lrnsys-randomimage`
 * @demo demo/index.html
 */var LrnsysRandomimage=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(LrnsysRandomimage,_PolymerElement);function LrnsysRandomimage(){babelHelpers.classCallCheck(this,LrnsysRandomimage);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LrnsysRandomimage).apply(this,arguments))}babelHelpers.createClass(LrnsysRandomimage,[{key:"reload",/**
   * trigger a reload of the random-image element
   */value:function reload(e){this.$.list.innerHTML=this.$.list.innerHTML}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_31a62b20ab1411e983069f7675e85b71())}},{key:"tag",get:function get(){return"lrnsys-randomimage"}},{key:"properties",get:function get(){return{/**
       * An array of images to pick from at random.
       */images:{type:Object,notify:!0,value:function value(){return[]}}}}}]);return LrnsysRandomimage}(_polymerElement.PolymerElement);_exports.LrnsysRandomimage=LrnsysRandomimage;window.customElements.define(LrnsysRandomimage.tag,LrnsysRandomimage)});