define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/render-status.js","./lib/lrndesign-animationctrl-button.js"],function(_exports,_polymerElement,_renderStatus,_lrndesignAnimationctrlButton){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignAnimationctrl=void 0;function _templateObject_11967740ab1411e9ad7e45118ceb6e31(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          background: var(--animationctrl-bg-color);\n          --animationctrl-bg-color: #f5f5f5;\n        }\n        .buttons {\n          padding: 16px;\n          text-align: center;\n          display: flex;\n          justify-content: center;\n          align-items: stretch;\n          @apply --animationctrl-buttons;\n        }\n        :host .buttons ::slotted(*) {\n          display: flex;\n        }\n      </style>\n      <div class=\"buttons\"><slot></slot></div>\n    "]);_templateObject_11967740ab1411e9ad7e45118ceb6e31=function _templateObject_11967740ab1411e9ad7e45118ceb6e31(){return data};return data}/**
`lrndesign-animationctrl`
A LRN element

* @demo demo/index.html
*/var LrndesignAnimationctrl=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(LrndesignAnimationctrl,_PolymerElement);function LrndesignAnimationctrl(){babelHelpers.classCallCheck(this,LrndesignAnimationctrl);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LrndesignAnimationctrl).apply(this,arguments))}babelHelpers.createClass(LrndesignAnimationctrl,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(LrndesignAnimationctrl.prototype),"connectedCallback",this).call(this);(0,_renderStatus.afterNextRender)(this,function(){this.addEventListener("lrndesign-animationctrl-button-click",this._buttonClicked.bind(this))})}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.removeEventListener("lrndesign-animationctrl-button-click",this._buttonClicked.bind(this));babelHelpers.get(babelHelpers.getPrototypeOf(LrndesignAnimationctrl.prototype),"disconnectedCallback",this).call(this)}},{key:"_buttonClicked",value:function _buttonClicked(e){}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_11967740ab1411e9ad7e45118ceb6e31())}},{key:"tag",get:function get(){return"lrndesign-animationctrl"}}]);return LrndesignAnimationctrl}(_polymerElement.PolymerElement);_exports.LrndesignAnimationctrl=LrndesignAnimationctrl;window.customElements.define(LrndesignAnimationctrl.tag,LrndesignAnimationctrl)});