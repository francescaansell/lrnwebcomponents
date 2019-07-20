define(["exports","require","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/render-status.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js"],function(_exports,_require,_polymerElement,_renderStatus,_simpleColors,_HAXWiring,_a11yBehaviors){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SimpleConceptNetwork=void 0;_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_7217e6b0ab1611e9b4654bbe48c74d74(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n        :host([visualization=\"network\"]) simple-concept-network-node {\n          position: relative;\n        }\n        :host([visualization=\"network\"])\n          simple-concept-network-node:nth-child(1) {\n          top: 150px;\n          left: 176px;\n        }\n        :host([visualization=\"network\"])\n          simple-concept-network-node:nth-child(2) {\n          top: 0px;\n          left: 60px;\n        }\n        :host([visualization=\"network\"])\n          simple-concept-network-node:nth-child(3) {\n          top: 75px;\n          left: 60px;\n        }\n        :host([visualization=\"network\"])\n          simple-concept-network-node:nth-child(4) {\n          top: 230px;\n          left: -56px;\n        }\n        :host([visualization=\"network\"])\n          simple-concept-network-node:nth-child(5) {\n          top: 300px;\n          left: -282px;\n        }\n        :host([visualization=\"network\"])\n          simple-concept-network-node:nth-child(6) {\n          top: 230px;\n          left: -515px;\n        }\n        :host([visualization=\"network\"])\n          simple-concept-network-node:nth-child(7) {\n          top: 75px;\n          left: -630px;\n        }\n        :host([visualization=\"network\"]) {\n          display: block;\n          min-height: 450px;\n        }\n      </style>\n      <template is=\"dom-repeat\" items=\"[[nodes]]\" as=\"node\">\n        <simple-concept-network-node\n          accent-color$=\"[[node.color]]\"\n          colored-text$=\"[[coloredText]]\"\n          dark$=\"[[dark]]\"\n          visualization$=\"[[visualization]]\"\n          src$=\"[[node.src]]\"\n          icon$=\"[[node.icon]]\"\n          image$=\"[[node.image]]\"\n          label$=\"[[node.label]]\"\n          disabled$=\"[[node.disabled]]\"\n        ></simple-concept-network-node>\n      </template>\n    "]);_templateObject_7217e6b0ab1611e9b4654bbe48c74d74=function _templateObject_7217e6b0ab1611e9b4654bbe48c74d74(){return data};return data}/**
`simple-concept-network`
A small but effective little data visualizer for topics surrounding
a central concept, much like the ELMS:LN snowflake icon.
* @demo demo/index.html
@microcopy - the mental model for this element
 - ELMS:LN - The ELMS: Learning Network "snowflake" is a network diagram
*/var SimpleConceptNetwork=/*#__PURE__*/function(_A11yBehaviors){babelHelpers.inherits(SimpleConceptNetwork,_A11yBehaviors);function SimpleConceptNetwork(){var _this;babelHelpers.classCallCheck(this,SimpleConceptNetwork);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SimpleConceptNetwork).call(this));new Promise(function(res,rej){return _require.default(["./node_modules/@lrnwebcomponents/simple-concept-network/lib/simple-concept-network-node.js"],res,rej)});(0,_renderStatus.afterNextRender)(babelHelpers.assertThisInitialized(_this),function(){this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(SimpleConceptNetwork.haxProperties,SimpleConceptNetwork.tag,this)});return _this}babelHelpers.createClass(SimpleConceptNetwork,[{key:"_valueChanged",/**
   * Notice an answer has changed and update the DOM.
   */value:function _valueChanged(e){for(var i in e.base){for(var j in e.base[i]){this.notifyPath("nodes."+i+"."+j)}}}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_7217e6b0ab1611e9b4654bbe48c74d74())}},{key:"tag",get:function get(){return"simple-concept-network"}},{key:"observers",get:function get(){return["_valueChanged(nodes.*)"]}},{key:"properties",get:function get(){var props={/**
       * Type of visualization
       */visualization:{type:String,reflectToAttribute:!0,value:"3d"},/**
       * disabled status
       */disabled:{type:Boolean},/**
       * Apply color to text / icon instead of background.
       */coloredText:{type:Boolean,reflectToAttribute:!0,value:!1},/**
       * List of nodes to template stamp out
       */nodes:{type:Array,value:[],notify:!0}};if(babelHelpers.get(babelHelpers.getPrototypeOf(SimpleConceptNetwork),"properties",this)){props=Object.assign(props,babelHelpers.get(babelHelpers.getPrototypeOf(SimpleConceptNetwork),"properties",this))}return props}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Concept Network",description:"A simple way of visualizing data in a small network style configuration.",icon:"lrn:network",color:"blue",groups:["Image","Visualization"],handles:[{type:"image",source:"nodes.source",title:"nodes.label",link:"nodes.src",description:"nodes.description"}],meta:{author:"LRNWebComponents"}},settings:{quick:[],configure:[{property:"visualization",title:"Visualization",description:"How to visualize the concept",inputMethod:"select",options:{"3d":"3d plain",network:"network",flat:"flat"}},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"},{property:"coloredText",title:"Colored Text / Icon",description:"Apply color to text / icon instead of background.",inputMethod:"boolean",icon:"editor:format-color-text"},{property:"nodes",title:"Node list",description:"List of the items to present in the visual",inputMethod:"array",itemLabel:"label",properties:[{property:"color",title:"Node color",description:"Select the accent color for this node",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"icon",title:"Icon",description:"icon to display in the middle",inputMethod:"iconpicker",options:[]},{property:"label",title:"Label",description:"Label",inputMethod:"textfield"},{property:"image",title:"Image",description:"Image for the background",inputMethod:"textfield",validationType:"url"},{property:"description",title:"Description",description:"A longer description that can be used as part of a modal presentation",inputMethod:"textfield"},{property:"src",title:"Link",description:"Label",inputMethod:"textfield",validationType:"url"}]}],advanced:[]}}}}]);return SimpleConceptNetwork}((0,_a11yBehaviors.A11yBehaviors)(_simpleColors.SimpleColors));_exports.SimpleConceptNetwork=SimpleConceptNetwork;window.customElements.define(SimpleConceptNetwork.tag,SimpleConceptNetwork)});