define([
  "./node_modules/@polymer/iron-icon/iron-icon.js",
  "./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js",
  "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
], function(_ironIcon, _ironIconsetSvg, _htmlTag) {
  "use strict";
  function _templateObject_15fb8fc0e11911e897901769419a5efc() {
    var data = babelHelpers.taggedTemplateLiteral([
      '<iron-iconset-svg size="24" name="drawing">\n  <!-- move -->\n  <svg>\n    <defs>\n      <g id="move">\n        <polygon points="21,12 17,8 17,11 13,11 13,7 16,7 12,3 8,7 11,7 11,11 7,11 7,8 3,12 7,16 7,13 11,13 11,17 8,17 12,21 16,17 \n          13,17 13,13 17,13 17,16 \t"></polygon>\n      </g>\n    </defs>\n  </svg>\n  \n  \n  <!-- select -->\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <defs>\n      <g id="select">\n        <path d="M6.3 2.8l.3 19.8.9.4 5.1-5.4 7.4.1.4-.9-14.1-14z"></path>\n      </g>\n    </defs>\n  </svg>\n\n\n  <!-- draw ellipsis -->\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <defs>\n      <g id="draw-ellip">\n        <ellipse cx="11.23" cy="8" rx="10.1" ry="7.1" style="opacity: 0.3;isolation: isolate"/>\n        <path d="M12,3.94C5.77,3.94.73,7.52.73,11.94s5,8,11.25,8,11.25-3.59,11.25-8S18.19,3.94,12,3.94ZM12,18c-5,0-9.13-2.72-9.13-6.06S6.94,5.87,12,5.87s9.12,2.72,9.12,6.07S17,18,12,18Z" transform="translate(-0.73 -3.94)" style="isolation: isolate"/>\n      </g>\n    </defs>\n  </svg>\n\n\n  <!-- draw rectangle -->\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <defs>\n      <g id="draw-rect">\n      <path d="M3.1,6h18V18.1H3.1Z" transform="translate(-2.08 -5)" style="opacity: 0.3;isolation: isolate"/>\n      <path d="M2.08,5V19.17h20V5Zm18,12.08H4.1v-10h16Z" transform="translate(-2.08 -5)" style="isolation: isolate"/>\n      </g>\n    </defs>\n  </svg>\n  \n  \n  <!-- draw polygon -->\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <defs>\n      <g id="draw-poly">\n        <path d="M2.7,7.31,20.3,4.5,16.2,21.14l-11.6-5Z" transform="translate(-1.5 -3.25)" style="opacity: 0.3;isolation: isolate"/>\n        <path d="M1.5,6.5,3.67,16.73,16.9,22.54,21.58,3.25Zm14,13.25-10-4.23L3.83,8.08,19,5.71Z" transform="translate(-1.5 -3.25)" style="isolation: isolate"/>\n      </g>\n    </defs>\n  </svg>\n  \n</iron-iconset-svg>'
    ]);
    _templateObject_15fb8fc0e11911e897901769419a5efc = function() {
      return data;
    };
    return data;
  }
  var template = (0, _htmlTag.html)(
    _templateObject_15fb8fc0e11911e897901769419a5efc()
  );
  document.head.appendChild(template.content);
});
