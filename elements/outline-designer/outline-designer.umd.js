!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/paper-icon-button/paper-icon-button.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icons/social-icons.js"),require("@polymer/iron-icons/device-icons.js"),require("@polymer/iron-pages/iron-pages.js"),require("@polymer/iron-image/iron-image.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/paper-card/paper-card.js"),require("@polymer/iron-ajax/iron-ajax.js"),require("@polymer/iron-list/iron-list.js"),require("@polymer/iron-swipeable-container/iron-swipeable-container.js"),require("@polymer/paper-tooltip/paper-tooltip.js"),require("@polymer/paper-progress/paper-progress.js"),require("@polymer/app-layout/app-toolbar/app-toolbar.js"),require("@polymer/app-layout/app-header/app-header.js"),require("@lrnwebcomponents/item-overlay-ops/item-overlay-ops.js"),require("@lrnwebcomponents/lrnsys-outline/lrnsys-outline.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/simple-modal/simple-modal.js"),require("@lrnwebcomponents/editable-list/editable-list.js"),require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/mixins/gesture-event-listeners.js"),require("@polymer/polymer/lib/utils/async.js"),require("@polymer/polymer/lib/utils/gestures.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/paper-icon-button/paper-icon-button.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icons/social-icons.js","@polymer/iron-icons/device-icons.js","@polymer/iron-pages/iron-pages.js","@polymer/iron-image/iron-image.js","@polymer/paper-button/paper-button.js","@polymer/paper-card/paper-card.js","@polymer/iron-ajax/iron-ajax.js","@polymer/iron-list/iron-list.js","@polymer/iron-swipeable-container/iron-swipeable-container.js","@polymer/paper-tooltip/paper-tooltip.js","@polymer/paper-progress/paper-progress.js","@polymer/app-layout/app-toolbar/app-toolbar.js","@polymer/app-layout/app-header/app-header.js","@lrnwebcomponents/item-overlay-ops/item-overlay-ops.js","@lrnwebcomponents/lrnsys-outline/lrnsys-outline.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/simple-modal/simple-modal.js","@lrnwebcomponents/editable-list/editable-list.js","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/mixins/gesture-event-listeners.js","@polymer/polymer/lib/utils/async.js","@polymer/polymer/lib/utils/gestures.js"],t):t(e.OutlineDesigner={},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,e.polymerElement_js,e.gestureEventListeners_js,e.async,e.Gestures)}(this,function(e,t,i,n,o,r,a,l,s,d,c,p,m,f,u,h,g,b,v,y,w,_,k,x,M){"use strict";function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t,i){return t&&E(e.prototype,t),i&&E(e,i),e}function T(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?$(e):t}function I(e,t,i){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(i):o.value}})(e,t,i||e)}function D(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function z(){var e=D(['\n      <style>\n        :host {\n          display: flex;\n        }\n        #items ::slotted(*) {\n          user-drag: none;\n          user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          -webkit-user-drag: none;\n          -webkit-user-select: none;\n          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n        }\n        #items ::slotted(.item--transform) {\n          left: 0;\n          margin: 0 !important;\n          position: fixed !important;\n          top: 0;\n          transition: transform 0.2s cubic-bezier(0.333, 0, 0, 1);\n          will-change: transform;\n          z-index: 1;\n        }\n        #items ::slotted(.item--pressed) {\n          transition: none !important;\n        }\n        #items ::slotted(.item--dragged) {\n          -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n          filter: brightness(1.1);\n          z-index: 2;\n        }\n      </style>\n      <div id="items"><slot id="slot"></slot></div>\n    ']);return z=function(){return e},e}var P=function(e){function t(){var e;return L(this,t),(e=q(this,C(t).call(this)))._observer=null,e._target=null,e._targetRect=null,e._rects=null,e._onTrack=e._onTrack.bind($($(e))),e._onDragStart=e._onDragStart.bind($($(e))),e._onTransitionEnd=e._onTransitionEnd.bind($($(e))),e._onContextMenu=e._onContextMenu.bind($($(e))),e._onTouchMove=e._onTouchMove.bind($($(e))),e}return T(t,k.GestureEventListeners(_.PolymerElement)),O(t,null,[{key:"template",get:function(){return _.html(z())}},{key:"is",get:function(){return"sortable-list"}},{key:"properties",get:function(){return{sortable:String,items:{type:Array,notify:!0,readOnly:!0},dragging:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0,value:!1},disabled:{type:Boolean,reflectToAttribute:!0,value:!1}}}}]),O(t,[{key:"connectedCallback",value:function(){var e=this;I(C(t.prototype),"connectedCallback",this).call(this),x.microTask.run(function(){e._observeItems(),e._updateItems(),e._toggleListeners({enable:!0})})}},{key:"disconnectedCallback",value:function(){I(C(t.prototype),"disconnectedCallback",this).call(this),this._unobserveItems(),this._toggleListeners({enable:!1})}},{key:"_toggleListeners",value:function(e){var t=e.enable,i=t?"addEventListener":"removeEventListener";this.$.items[i]("dragstart",this._onDragStart),this.$.items[i]("transitionend",this._onTransitionEnd),this.$.items[i]("contextmenu",this._onContextMenu),this.$.items[i]("touchmove",this._onTouchMove),t?M.addListener(this,"track",this._onTrack):M.removeListener(this,"track",this._onTrack)}},{key:"_onTrack",value:function(e){switch(e.detail.state){case"start":this._trackStart(e);break;case"track":this._track(e);break;case"end":this._trackEnd(e)}}},{key:"_trackStart",value:function(e){var t=this;if(!this.disabled&&(this._target=this._itemFromEvent(e),this._target)){e.stopPropagation(),this._rects=this._getItemsRects(),this._targetRect=this._rects[this.items.indexOf(this._target)],this._target.classList.add("item--dragged","item--pressed"),"vibrate"in navigator&&navigator.vibrate(30);var i=this.getBoundingClientRect();this.style.height=i.height+"px",this.style.width=i.width+"px",this.items.forEach(function(e,i){var n=t._rects[i];e.classList.add("item--transform"),e.style.transition="none",e.__originalWidth=e.style.width,e.__originalHeight=e.style.height,e.style.width=n.width+"px",e.style.height=n.height+"px",t._translate3d(n.left,n.top,1,e),setTimeout(function(t){e.style.transition=null},20)}),this._setDragging(!0)}}},{key:"_track",value:function(e){var t=this;if(this.dragging){var i=this._targetRect.left+e.detail.dx,n=this._targetRect.top+e.detail.dy;this._translate3d(i,n,1,this._target);var o=this._itemFromCoords(e.detail);if(o&&o!==this._target){var r=this.items.indexOf(o),a=this.items.indexOf(this._target);this._moveItemArray(this.items,a,r);for(var l=function(e){if(t.items[e]!==t._target){var i=t._rects[e];requestAnimationFrame(function(n){t._translate3d(i.left,i.top,1,t.items[e])})}},s=0;s<this.items.length;s++)l(s)}}}},{key:"_trackEnd",value:function(e){if(this.dragging){var t=this._rects[this.items.indexOf(this._target)];this._target.classList.remove("item--pressed"),this._setDragging(!1),this._translate3d(t.left,t.top,1,this._target)}}},{key:"_onTransitionEnd",value:function(){if(!this.dragging&&this._target){var e=document.createDocumentFragment();this.items.forEach(function(t){t.style.transform="",t.style.width=t.__originalWidth,t.style.height=t.__originalHeight,t.classList.remove("item--transform"),e.appendChild(t)}),this.children[0]?this.insertBefore(e,this.children[0]):this.appendChild(e),this.style.height="",this._target.classList.remove("item--dragged"),this._rects=null,this._targetRect=null,this._updateItems(),this.dispatchEvent(new CustomEvent("sort-finish",{composed:!0,detail:{target:this._target}})),this._target=null}}},{key:"_onDragStart",value:function(e){e.preventDefault()}},{key:"_onContextMenu",value:function(e){this.dragging&&(e.preventDefault(),this._trackEnd())}},{key:"_onTouchMove",value:function(e){e.preventDefault()}},{key:"_updateItems",value:function(){var e=this;if(!this.dragging){var t=this.$.slot.assignedNodes().filter(function(t){if(t.nodeType===Node.ELEMENT_NODE&&(!e.sortable||t.matches(e.sortable)))return!0});this._setItems(t)}}},{key:"_itemFromCoords",value:function(e){var t=this,i=e.x,n=e.y;if(this._rects){var o=null;return this._rects.forEach(function(e,r){i>=e.left&&i<=e.left+e.width&&n>=e.top&&n<=e.top+e.height&&(o=t.items[r])}),o}}},{key:"_itemFromEvent",value:function(e){for(var t=e.composedPath(),i=0;i<t.length;i++)if(this.items.indexOf(t[i])>-1)return t[i]}},{key:"_getItemsRects",value:function(){return this.items.map(function(e){return e.getBoundingClientRect()})}},{key:"_observeItems",value:function(){var e=this;this._observer||(this._observer=new MutationObserver(function(t){e._updateItems()}),this._observer.observe(this,{childList:!0}))}},{key:"_unobserveItems",value:function(){this._observer&&(this._observer.disconnect(),this._observer=null)}},{key:"_moveItemArray",value:function(e,t,i){if(i>=e.length)for(var n=i-e.length;1+n--;)e.push(void 0);return e.splice(i,0,e.splice(t,1)[0]),e}},{key:"_translate3d",value:function(e,t,i,n){n.style.transform="translate3d(".concat(e,"px, ").concat(t,"px, ").concat(i,"px)")}}]),t}();window.customElements.define("sortable-list",P);var A=window.document.documentElement,R=window.document,V=R.querySelector("body"),B=function e(t,i,n,o){return Object.assign(Object.create(e.prototype),{x:t,y:i,w:n,h:o})};B.prototype={constructor:B,relativeTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0};return B(this.x-e.x,this.y-e.y,this.w,this.h)}},B.ofDocument=function(){return B(0,0,A.scrollWidth,A.scrollHeight)},B.ofWindow=function(){return B(window.pageXOffset,window.pageYOffset,A.clientWidth,A.clientHeight)};var H=function(e){var t=e.getBoundingClientRect();return{x:t.left+window.pageXOffset,y:t.top+window.pageYOffset,width:t.width,height:t.height}};B.ofElement=function(e){var t=H(e),i=t.x,n=t.y,o=t.width,r=t.height;return B(i,n,o,r)},B.ofViewport=function(e){var t=H(e),i=t.x,n=t.y;return B(i+e.clientLeft,n+e.clientTop,e.clientWidth,e.clientHeight)},B.ofContent=function(e){var t=H(e),i=t.x,n=t.y;return B(i+e.clientLeft-e.scrollLeft,n+e.clientTop-e.scrollTop,e.scrollWidth,e.scrollHeight)};var W=function(e){return"rgba(0,0,0,".concat(e/100,")")},F={viewport:null,styles:{"header,footer,section,article":W(8),"h1,a":W(10),"h2,h3,h4":W(8)},back:W(2),view:W(5),drag:W(10),interval:null},N=function(e,t,i,n){return i.split(/\s+/).forEach(function(i){return e[t](i,n)})},X=function(e,t,i){return N(e,"addEventListener",t,i)},Y=function(e,t,i){return N(e,"removeEventListener",t,i)},U=function(e,t){var i,n,o,r,a,l,s,d=Object.assign({},F,t),c=e.getContext("2d"),p=(i=e.clientWidth,n=e.clientHeight,function(e,t){return Math.min(i/e,n/t)}),m=d.viewport,f=!1,u=function(e,t){t&&(c.beginPath(),c.rect(e.x,e.y,e.w,e.h),c.fillStyle=t,c.fill())},h=function(e){Object.keys(e).forEach(function(t){var i=e[t];(function(e){return Array.from((m||R).querySelectorAll(e))})(t).forEach(function(e){u(B.ofElement(e).relativeTo(o),i)})})},g=function(){var t,i;o=m?B.ofContent(m):B.ofDocument(),r=m?B.ofViewport(m):B.ofWindow(),a=p(o.w,o.h),t=o.w*a,i=o.h*a,e.width=t,e.height=i,e.style.width="".concat(t,"px"),e.style.height="".concat(i,"px"),c.setTransform(1,0,0,1,0,0),c.clearRect(0,0,e.width,e.height),c.scale(a,a),u(o.relativeTo(o),d.back),h(d.styles),u(r.relativeTo(o),f?d.drag:d.view)},b=function(t){t.preventDefault();var i=B.ofViewport(e),n=(t.pageX-i.x)/a-r.w*l,o=(t.pageY-i.y)/a-r.h*s;m?(m.scrollLeft=n,m.scrollTop=o):window.scrollTo(n,o),g()},v=function t(i){f=!1,e.style.cursor="pointer",V.style.cursor="auto",Y(window,"mousemove",b),Y(window,"mouseup",t),b(i)},y=function(t){f=!0;var i=B.ofViewport(e),n=r.relativeTo(o);l=((t.pageX-i.x)/a-n.x)/n.w,s=((t.pageY-i.y)/a-n.y)/n.h,(l<0||l>1||s<0||s>1)&&(l=.5,s=.5),e.style.cursor="crosshair",V.style.cursor="crosshair",X(window,"mousemove",b),X(window,"mouseup",v),b(t)};return e.style.cursor="pointer",X(e,"mousedown",y),X(m||window,"load resize scroll",g),d.interval>0&&setInterval(function(){return g()},d.interval),g(),{redraw:g}};function G(){var e=D(['\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\napp-toolbar {\n  background-color: var(--simple-colors-default-theme-light-blue-1, #4285f4);\n  color: var(--simple-colors-default-theme-grey-12, #222222);\n  margin: 20px 0;\n}\n\n#viewmode, #detailsmode {\n  transition: .3s all ease;\n  -webkit-transition: .3s all ease;\n  -moz-transition: .3s all ease;\n  -ms-transition: .3s all ease;\n  -o-transition: .3s all ease;\n}\n.rotate-90 {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n}\n\n.breadcrumb-arrow:first-child {\n    display: none;\n}\n.breadcrumb-arrow {\n  color: var(--breadcrumb-color1,rgb(67, 110, 144));\n  margin: -2px 6px 0 6px;\n}\n.breadcrumb {\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  background-color: transparent;\n  line-height: 34px;\n  font-size: 18px;\n  color: var(--breadcrumb-color1,rgb(67, 110, 144));\n  opacity: 0.8;\n}\n\npaper-progress {\n  display: block;\n  width: 100%;\n  --paper-progress-active-color: rgba(255, 255, 255, 0.5);\n  --paper-progress-container-color: transparent;\n}\n.card-wrapper {\n  padding: 16px;\n}\n\n#sort .card-wrapper {\n  background: #dddddd;\n  display: inline-block;\n  float: left;\n  margin: 16px;\n  vertical-align: top;\n}\n\npaper-card {\n  width: 250px;\n  height: 300px;\n  display: block;\n  visibility: visible;\n  opacity: 1;\n}\n\n#addbutton {\n  opacity: .6;\n  background-color: #dddddd;\n}\n.add-button {\n  width: 200px;\n  height: 200px;\n  margin: auto;\n  display: flex;\n}\n\npaper-card.expanded {\n  min-height: 300px;\n}\n\niron-list {\n  flex: 1 1 auto;\n}\n\n.low-detail,\n.mid-detail,\n.high-detail {\n  visibility: visible;\n  opacity: 1;\n  transition: .6s all ease;\n  -webkit-transition: .6s all ease;\n  -moz-transition: .6s all ease;\n  -ms-transition: .6s all ease;\n  -o-transition: .6s all ease;\n}\n\n:host([details-mode="low"]) .mid-detail,\n:host([details-mode="low"]) .high-detail {\n  visibility: hidden;\n  opacity: 0;\n}\n\n:host([details-mode="mid"]) .high-detail {\n  visibility: hidden;\n  opacity: 0;\n}\n:host([details-mode="mid"]) .mid-detail {\n  visibility: visible;\n  opacity: 1;\n}\n\npaper-card.card-low-detail {\n  width: 150px;\n  height: 150px;\n}\npaper-card.card-mid-detail {\n  width: 250px;\n  height: 250px;\n}\npaper-card.card-high-detail {\n  width: 250px;\n  height: 300px;\n}\n\n#minimaparea {\n  position: fixed;\n  top: 125px;\n  right: 0;\n  width: 100px;\n  height: 100%;\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: .3s all linear;\n  background-color: transparent;\n  -webkit-transition: .3s all linear;\n  -moz-transition: .3s all linear;\n  -ms-transition: .3s all linear;\n  -o-transition: .3s all linear;\n}\n#minimaparea.show-minimap {\n  background-color: white;\n  opacity: .5;\n  visibility: visible;\n}\n#minimaparea.show-minimap:hover {\n  opacity: .9;\n}\n\n.tf-tree{transition: .3s all ease;font-size:16px;overflow:auto}.tf-tree *{transition: .3s all ease;box-sizing:border-box;margin:0;padding:0}.tf-tree ul{display:inline-flex}.tf-tree li{align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;padding:0 1em;position:relative}.tf-tree li ul{margin:2em 0}.tf-tree li li:before{border-top:.0625em solid #000;content:"";display:block;height:.0625em;left:-.03125em;position:absolute;top:-1.03125em;width:100%}.tf-tree li li:first-child:before{left:calc(50% - .03125em);max-width:calc(50% + .0625em)}.tf-tree li li:last-child:before{left:auto;max-width:calc(50% + .0625em);right:calc(50% - .03125em)}.tf-tree li li:only-child:before{display:none}.tf-tree li li:only-child>.tf-nc:before,.tf-tree li li:only-child>.tf-node-content:before{height:1.0625em;top:-1.0625em}.tf-tree .tf-nc,.tf-tree .tf-node-content{border:.0625em solid #000;display:inline-block;padding:.5em 1em;position:relative}.tf-tree .tf-nc:before,.tf-tree .tf-node-content:before{top:-1.03125em}.tf-tree .tf-nc:after,.tf-tree .tf-nc:before,.tf-tree .tf-node-content:after,.tf-tree .tf-node-content:before{border-left:.0625em solid #000;content:"";display:block;height:1em;left:calc(50% - .03125em);position:absolute;width:.0625em}.tf-tree .tf-nc:after,.tf-tree .tf-node-content:after{top:calc(100% + .03125em)}.tf-tree .tf-nc:only-child:after,.tf-tree .tf-node-content:only-child:after,.tf-tree>ul>li>.tf-nc:before,.tf-tree>ul>li>.tf-node-content:before{display:none}.tf-tree.tf-gap-sm li{padding:0 .6em}.tf-tree.tf-gap-sm li>.tf-nc:before,.tf-tree.tf-gap-sm li>.tf-node-content:before{height:.6em;top:-.6em}.tf-tree.tf-gap-sm li>.tf-nc:after,.tf-tree.tf-gap-sm li>.tf-node-content:after{height:.6em}.tf-tree.tf-gap-sm li ul{margin:1.2em 0}.tf-tree.tf-gap-sm li li:before{top:-.63125em}.tf-tree.tf-gap-sm li li:only-child>.tf-nc:before,.tf-tree.tf-gap-sm li li:only-child>.tf-node-content:before{height:.6625em;top:-.6625em}.tf-tree.tf-gap-lg li{padding:0 1.5em}.tf-tree.tf-gap-lg li>.tf-nc:before,.tf-tree.tf-gap-lg li>.tf-node-content:before{height:1.5em;top:-1.5em}.tf-tree.tf-gap-lg li>.tf-nc:after,.tf-tree.tf-gap-lg li>.tf-node-content:after{height:1.5em}.tf-tree.tf-gap-lg li ul{margin:3em 0}.tf-tree.tf-gap-lg li li:before{top:-1.53125em}.tf-tree.tf-gap-lg li li:only-child>.tf-nc:before,.tf-tree.tf-gap-lg li li:only-child>.tf-node-content:before{height:1.5625em;top:-1.5625em}.tf-tree li.tf-dotted-children .tf-nc:after,.tf-tree li.tf-dotted-children .tf-nc:before,.tf-tree li.tf-dotted-children .tf-node-content:after,.tf-tree li.tf-dotted-children .tf-node-content:before{border-left-style:dotted}.tf-tree li.tf-dotted-children li:before{border-top-style:dotted}.tf-tree li.tf-dotted-children>.tf-nc:before,.tf-tree li.tf-dotted-children>.tf-node-content:before{border-left-style:solid}.tf-tree li.tf-dashed-children .tf-nc:after,.tf-tree li.tf-dashed-children .tf-nc:before,.tf-tree li.tf-dashed-children .tf-node-content:after,.tf-tree li.tf-dashed-children .tf-node-content:before{border-left-style:dashed}.tf-tree li.tf-dashed-children li:before{border-top-style:dashed}.tf-tree li.tf-dashed-children>.tf-nc:before,.tf-tree li.tf-dashed-children>.tf-node-content:before{border-left-style:solid}\n.tf-label {\n  transition: .3s all ease;\n  cursor: pointer;\n}\n\n.node-high-detail li iron-image {\n  height: 50px;\n  position: static;\n}\n.node-high-detail li .tf-label {\n  z-index: 1;\n  position: relative;\n  font-size: 1.75em;\n  padding: 8px;\n  background-color: rgba(250,250,250,.8);\n}\n\n  .node-low-detail .tf-nc {\n    height: 32px;\n    width: 32px;\n    background-color: dodgerblue;\n    border-color: dodgerblue;\n    padding: 0;\n    border-radius: 50%;\n    overflow: hidden;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    -ms-border-radius: 50%;\n    -o-border-radius: 50%;\n  }\n\n  \n  .node-low-detail .tf-nc:before,\n  .node-low-detail .tf-nc:after {\n    border-left-color: dodgerblue;\n    border-left-width: 2px;\n  }\n  .node-low-detail li li:before {\n    border-top-color: dodgerblue;\n    border-top-width: 2px;\n  }</style>\n<style is="custom-style" include="simple-colors"></style>\n<iron-ajax\n  auto\n  url="[[outlineSchemaUrl]]"\n  handle-as="json"\n  on-response="handleResponse"\n  last-response="{{manifest}}"\n  loading="{{__loading}}">\n</iron-ajax>\n<app-header reveals>\n  <app-toolbar>\n    View: [[viewModeLabel]]\n    <paper-icon-button on-tap="_toggleViewMode" id="viewmode" icon="[[viewModeIcon]]"></paper-icon-button>\n    <paper-tooltip for="viewmode">[[viewModeLabel]]</paper-tooltip>\n    Detail: [[detailsModeLabel]]\n    <paper-icon-button on-tap="_toggleDetailsMode" id="detailsmode" icon="[[detailsModeIcon]]"></paper-icon-button>\n    <paper-tooltip for="detailsmode">[[detailsModeLabel]]</paper-tooltip>\n    <div main-title class="flex layout breadcrumb_layout">\n      <iron-icon class="breadcrumb-arrow" icon="icons:chevron-right"></iron-icon>\n      <a class="breadcrumb" id="main">[[manifest.title]]</a>\n\n          <iron-icon class="breadcrumb-arrow" icon="icons:chevron-right"></iron-icon>\n      <a class="breadcrumb" id="second">Lesson 2</a>\n\n          <iron-icon class="breadcrumb-arrow" icon="icons:chevron-right"></iron-icon>\n      <a class="breadcrumb" id="third">Math Basics</a>\n    </div>\n    <div>\n      <paper-icon-button on-tap="_toggleMiniMap" id="minimap" icon="device:gps-fixed" title="Toggle outline mini map"></paper-icon-button>\n      <paper-tooltip for="helpbutton">Toggle mini-map</paper-tooltip>\n      <paper-icon-button id="helpbutton" icon="icons:help" title="help"></paper-icon-button>\n      <paper-tooltip for="helpbutton">Help</paper-tooltip>\n    </div>\n    <paper-progress value="10" indeterminate bottom-item hidden$="[[!__loading]]"></paper-progress>\n  </app-toolbar>\n</app-header>\n<iron-pages selected="[[selectedView]]">\n  <section id="listpage">\n    <iron-list id="ironlist" items="[[manifest.items]]" as="item" grid>\n    <template>\n      <div class="card-wrapper">\n      <item-overlay-ops fixed-height="140" data-item-id$="[[item.id]]" add="" edit="" remove="" duplicate="" move="" edit-mode="">\n        <paper-card class$="card-[[detailsMode]]-detail" heading="[[item.title]]" image="[[item.metadata.image]]" elevation="2" animated-shadow="false">\n          <div class="card-content mid-detail">[[item.description]]</div>\n          <div class="card-actions high-detail">\n            <editable-list edit-mode="[[editMode]]" items="[[manifest.items]]">\n              <editable-list-item>[[item.title]]</editable-list-item>\n            </editable-list>\n            <ul>\n              <li>Page 1</li>\n              <iron-swipeable-container><li>Page 2</li></iron-swipeable-container>\n              <iron-swipeable-container><li>Page 3</li></iron-swipeable-container>\n            </ul>\n          </div>\n        </paper-card>\n      </item-overlay-ops>\n      </div>\n    </template>\n    </iron-list>\n  </section>\n  <section id="outlinepage">\n    <lrnsys-outline id="outline" items="{{manifest.items}}" title="[[manifest.title]]"></lrnsys-outline>\n  </section>\n  <section id="treepage">\n    <div class$="node-[[detailsMode]]-detail tf-tree">\n      <ul>\n        <template is="dom-repeat" items="{{manifest.items}}" as="item" mutable-data>\n        <li>\n          <span class="tf-nc">\n            <div class="tf-label" id$="item-tip-[[item.id]]">[[item.title]]</div>\n            <paper-tooltip for$="item-tip-[[item.id]]">[[item.title]]</paper-tooltip>\n            <iron-image src="[[item.metadata.image]]" preload sizing="cover" class="high-detail"></iron-image>\n          </span>\n        </li>\n        </template>\n      </ul>\n    </div>\n  </section>\n  <section id="sortpage">\n    <sortable-list id="sort" sortable=".card-wrapper" on-sort-finish="_onSortFinish" dragging="{{dragging}}">\n      <template is="dom-repeat" items="{{manifest.items}}" as="item" mutable-data>\n        <div class="card-wrapper">\n          <paper-card class$="card-[[detailsMode]]-detail" data-item-id$="[[item.id]]" heading="[[item.title]]" image="[[item.metadata.image]]" elevation="2"\n            animated-shadow="false">\n            <div class="card-content mid-detail">[[item.description]]</div>\n            <div class="card-actions high-detail"></div>\n          </paper-card>\n        </div>\n      </template>\n    </sortable-list>\n  </section>\n</iron-pages>\n<canvas id="minimaparea"></canvas>\n<slot></slot>']);return G=function(){return e},e}var J=function(e){function t(){return L(this,t),q(this,C(t).apply(this,arguments))}return T(t,_.PolymerElement),O(t,[{key:"connectedCallback",value:function(){I(C(t.prototype),"connectedCallback",this).call(this),this.$.ironlist.addEventListener("item-overlay-op-changed",this._overlayOpChanged.bind(this)),this.$.ironlist.addEventListener("item-overlay-option-selected",this._overlayOpSelected.bind(this)),U(this.$.minimaparea,{viewport:null,styles:{"ul,ol,li":"rgba(0, 0, 0, 0.08)","h1,h2,h3,h4,h5,h6,a":"rgba(0, 0, 0, 0.10)","lrnsys-outline-item":"rgba(0, 0, 0, 0.08)","p,section":"rgba(0, 0, 0, 0.02)"},back:"rgba(0, 0, 0, 0.02)",view:"rgba(0, 0, 0, 0.05)",drag:"rgba(0, 0, 0, 0.10)",interval:null})}},{key:"disconnectedCallback",value:function(){I(C(t.prototype),"disconnectedCallback",this).call(this),this.$.ironlist.removeEventListener("item-overlay-op-changed",this._overlayOpChanged.bind(this)),this.$.ironlist.removeEventListener("item-overlay-option-selected",this._overlayOpSelected.bind(this))}},{key:"_toggleMiniMap",value:function(e){this.miniMap=!this.miniMap}},{key:"_miniMapChanged",value:function(e,t){"undefined"!==j(e)&&(e?(this.$.minimap.icon="device:gps-fixed",this.$.minimaparea.classList.add("show-minimap")):(this.$.minimap.icon="device:gps-off",this.$.minimaparea.classList.remove("show-minimap")))}},{key:"_toggleViewMode",value:function(e){switch(this.viewMode){case"cards":this.viewMode="outline";break;case"outline":this.outlineData=this.$.outline.getData(),this.viewMode="tree";break;case"tree":this.viewMode="drag";break;case"drag":this.viewMode="cards"}}},{key:"_toggleDetailsMode",value:function(e){switch(this.detailsMode){case"low":this.detailsMode="mid";break;case"mid":this.detailsMode="high";break;case"high":this.detailsMode="low"}}},{key:"_detailsModeChanged",value:function(e,t){var i=this;if("undefined"!==j(e)){switch(e){case"low":this.detailsModeIcon="icons:apps",this.detailsModeLabel="Low";break;case"mid":this.detailsModeIcon="icons:view-module",this.detailsModeLabel="Medium";break;case"high":this.detailsModeIcon="icons:view-carousel",this.detailsModeLabel="High"}0===this.selectedView&&x.microTask.run(function(){setTimeout(function(){i.$.ironlist.fire("iron-resize"),window.dispatchEvent(new Event("resize"))},50)})}}},{key:"_onSortFinish",value:function(e){console.log(e.detail)}},{key:"_overlayOpChanged",value:function(e){switch(console.log(e.detail),e.detail.operation){case"add":console.log("add item"),console.log(e.detail.element.getAttribute("data-item-id"));break;case"edit":console.log("edit item"),console.log(e.detail.element.getAttribute("data-item-id"))}}},{key:"_overlayOpSelected",value:function(e){switch(console.log(e.detail),e.detail.operation){case"move":"option1"===e.detail.option?console.log("move left"):"option2"===e.detail.option&&console.log("move right"),console.log(e.detail.element.getAttribute("data-item-id"));break;case"duplicate":"option1"===e.detail.option&&(console.log("duplicate"),console.log(e.detail.element.getAttribute("data-item-id")));break;case"remove":"option1"===e.detail.option&&(console.log("remove"),console.log(e.detail.element.getAttribute("data-item-id")))}}},{key:"_viewModeChanged",value:function(e,t){var i=this;if("undefined"!==j(e))switch(e){case"cards":this.$.viewmode.classList.add("rotate-90"),this.selectedView=0,this.viewModeIcon="icons:view-module",this.viewModeLabel="Card view",x.microTask.run(function(){setTimeout(function(){i.$.ironlist.fire("iron-resize"),window.dispatchEvent(new Event("resize"))},100)});break;case"outline":this.$.viewmode.classList.remove("rotate-90"),this.selectedView=1,this.viewModeIcon="icons:view-list",this.viewModeLabel="Outline view";break;case"tree":this.$.viewmode.classList.add("rotate-90"),this.selectedView=2,this.viewModeIcon="social:share",this.viewModeLabel="Tree view";break;case"drag":this.$.viewmode.classList.remove("rotate-90"),this.selectedView=3,this.viewModeIcon="icons:touch-app",this.viewModeLabel="Draggable cards"}}},{key:"_editModeChanged",value:function(e,t){"undefined"!==j(e)&&console.log(e)}}],[{key:"template",get:function(){return _.html(G())}},{key:"properties",get:function(){return{viewMode:{name:"viewMode",type:"String",value:"cards",observer:"_viewModeChanged"},viewModeIcon:{name:"viewModeIcon",type:"String"},viewModeLabel:{name:"viewModeLabel",type:"String"},detailsMode:{name:"detailsMode",type:"String",value:"mid",reflectToAttribute:!0,observer:"_detailsModeChanged"},detailsModeIcon:{name:"detailsModeIcon",type:"String"},detailsModeLabel:{name:"detailsModeLabel",type:"String"},selectedView:{name:"selectedView",type:"Number"},editMode:{name:"editMode",type:"Boolean",value:!1,reflectToAttribute:!0,observer:"_editModeChanged"},miniMap:{name:"miniMap",type:"Boolean",value:!0,reflectToAttribute:!0,observer:"_miniMapChanged"},outlineSchemaUrl:{name:"outlineSchemaUrl",type:"String"},manifest:{name:"manifest",type:"Object",notify:!0},outlineData:{name:"outlineData",type:"Object",notify:!0}}}},{key:"tag",get:function(){return"outline-designer"}}]),t}();window.customElements.define("outline-designer",J),e.OutlineDesigner=J,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=outline-designer.umd.js.map
