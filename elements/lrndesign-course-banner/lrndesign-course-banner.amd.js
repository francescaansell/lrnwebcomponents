define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js","./node_modules/@polymer/iron-image/iron-image.js","./node_modules/@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"],function(_exports,_polymerLegacy,_materializecssStyles,_ironImage,_lrndesignAvatar){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignCourseBanner=void 0;function _templateObject_6d6f0890fe4211e88e00abefd55ad674(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"materializecss-styles-colors\">\n      :host {\n        display: block;\n      }\n      /**\n       * Dialog\n       */\n      .course-image {\n      }\n      .course-heading {\n        position: relative;\n        background-color: rgba(30, 30, 30, 0.8);\n        text-align: left;\n        margin: -5em 0 0 0;\n        padding: 16px;\n        color: #ffffff;\n        height: 64px;\n      }\n      .course-avatar {\n        float: left;\n        display: inline-flex;\n        padding: 0 16px 0 0;\n      }\n      .course-name {\n        font-size: 16px;\n        line-height: 16px;\n        min-width: 96px;\n      }\n      .course-title {\n        font-size: 16px;\n        line-height: 16px;\n        display: none;\n      }\n      .name-wrapper {\n        display: flow-root;\n        overflow: hidden;\n        text-overflow: clip;\n      }\n      @media screen and (min-width: 420px) {\n        .course-name {\n          font-size: 24px;\n        }\n        .course-title {\n          display: block;\n        }\n      }\n    </style>\n    <iron-image\n      class=\"course-image\"\n      style=\"width:100%; height:200px; background-color: lightgray;\"\n      sizing=\"cover\"\n      preload=\"\"\n      fade=\"\"\n      src$=\"[[image]]\"\n    ></iron-image>\n    <div class=\"course-heading\">\n      <lrndesign-avatar\n        class=\"course-avatar\"\n        label=\"[[name]]\"\n        jdenticon=\"\"\n        color=\"[[color]]\"\n      >\n      </lrndesign-avatar>\n      <div class=\"name-wrapper\">\n        <div class=\"course-name\">[[name]]</div>\n        <div class=\"course-title\">[[title]]</div>\n      </div>\n    </div>\n  "],["\n    <style include=\"materializecss-styles-colors\">\n      :host {\n        display: block;\n      }\n      /**\n       * Dialog\n       */\n      .course-image {\n      }\n      .course-heading {\n        position: relative;\n        background-color: rgba(30, 30, 30, 0.8);\n        text-align: left;\n        margin: -5em 0 0 0;\n        padding: 16px;\n        color: #ffffff;\n        height: 64px;\n      }\n      .course-avatar {\n        float: left;\n        display: inline-flex;\n        padding: 0 16px 0 0;\n      }\n      .course-name {\n        font-size: 16px;\n        line-height: 16px;\n        min-width: 96px;\n      }\n      .course-title {\n        font-size: 16px;\n        line-height: 16px;\n        display: none;\n      }\n      .name-wrapper {\n        display: flow-root;\n        overflow: hidden;\n        text-overflow: clip;\n      }\n      @media screen and (min-width: 420px) {\n        .course-name {\n          font-size: 24px;\n        }\n        .course-title {\n          display: block;\n        }\n      }\n    </style>\n    <iron-image\n      class=\"course-image\"\n      style=\"width:100%; height:200px; background-color: lightgray;\"\n      sizing=\"cover\"\n      preload=\"\"\n      fade=\"\"\n      src\\$=\"[[image]]\"\n    ></iron-image>\n    <div class=\"course-heading\">\n      <lrndesign-avatar\n        class=\"course-avatar\"\n        label=\"[[name]]\"\n        jdenticon=\"\"\n        color=\"[[color]]\"\n      >\n      </lrndesign-avatar>\n      <div class=\"name-wrapper\">\n        <div class=\"course-name\">[[name]]</div>\n        <div class=\"course-title\">[[title]]</div>\n      </div>\n    </div>\n  "]);_templateObject_6d6f0890fe4211e88e00abefd55ad674=function _templateObject_6d6f0890fe4211e88e00abefd55ad674(){return data};return data}var LrndesignCourseBanner=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_6d6f0890fe4211e88e00abefd55ad674()),is:"lrndesign-course-banner",properties:{color:{type:String},image:{type:String},name:{type:String},title:{type:String}}});_exports.LrndesignCourseBanner=LrndesignCourseBanner});