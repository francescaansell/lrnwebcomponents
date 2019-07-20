define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./lib/agency-theme-band.js","./lib/agency-theme-spotlight.js"],function(_exports,_polymerElement,_agencyThemeBand,_agencyThemeSpotlight){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.AgencyTheme=void 0;function _templateObject_393841e0ab1211e9bf4a6bbadbae8507(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"]);_templateObject_393841e0ab1211e9bf4a6bbadbae8507=function _templateObject_393841e0ab1211e9bf4a6bbadbae8507(){return data};return data}/**
 * `agency-theme`
 * ``
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */var AgencyTheme=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(AgencyTheme,_PolymerElement);function AgencyTheme(){babelHelpers.classCallCheck(this,AgencyTheme);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(AgencyTheme).apply(this,arguments))}babelHelpers.createClass(AgencyTheme,[{key:"connectedCallback",/**
   * life cycle, element is afixed to the DOM
   */value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(AgencyTheme.prototype),"connectedCallback",this).call(this)}/**
   * life cycle, element is removed from the DOM
   */ //disconnectedCallback() {}
}],[{key:"template",// render function
get:function get(){return(0,_polymerElement.html)(_templateObject_393841e0ab1211e9bf4a6bbadbae8507())}// properties available to the custom element for data binding
},{key:"properties",get:function get(){var props={};if(babelHelpers.get(babelHelpers.getPrototypeOf(AgencyTheme),"properties",this)){props=Object.assign(props,babelHelpers.get(babelHelpers.getPrototypeOf(AgencyTheme),"properties",this))}return props}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */},{key:"tag",get:function get(){return"agency-theme"}}]);return AgencyTheme}(_polymerElement.PolymerElement);_exports.AgencyTheme=AgencyTheme;window.customElements.define(AgencyTheme.tag,AgencyTheme)});