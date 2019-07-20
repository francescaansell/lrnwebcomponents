define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/render-status.js","./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js","./node_modules/@polymer/polymer/lib/legacy/class.js","./node_modules/@polymer/paper-progress/paper-progress.js","./node_modules/@polymer/iron-icon/iron-icon.js","./node_modules/@polymer/paper-icon-button/paper-icon-button.js","./node_modules/@polymer/paper-ripple/paper-ripple.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js","./lib/paper-audio-icons.js"],function(_exports,_polymerElement,_renderStatus,_ironA11yKeysBehavior,_class,_paperProgress,_ironIcon,_paperIconButton,_paperRipple,_simpleColors,_HAXWiring,_schemaBehaviors,_ironIconsetSvg,_paperAudioIcons){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.PaperAudioPlayer=void 0;function _templateObject_50fae180ab1611e9b93bdbc4cf381f6e(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          box-sizing: border-box;\n          font-family: var(\n            --paper-audio-player-font-family,\n            \"Roboto\",\n            \"Noto\",\n            sans-serif\n          );\n          --paper-audio-player-color: var(\n            --simple-colors-default-theme-accent-9\n          );\n          --paper-audio-player-text-color: var(\n            --simple-colors-default-theme-grey-1\n          );\n          --paper-audio-player-shadow: var(\n            --simple-colors-default-theme-grey-2\n          );\n          --paper-audio-player-background: var(\n            --simple-colors-default-theme-grey-1\n          );\n          background-color: var(--paper-audio-player-background);\n        }\n        #wrapper {\n          position: relative;\n          cursor: pointer;\n          height: 50px;\n          box-shadow: 0 1px 2px var(--paper-audio-player-shadow);\n        }\n        #left,\n        #center {\n          border-right: 1px solid var(--paper-audio-player-shadow);\n        }\n        #left,\n        #right {\n          height: 50px;\n          width: 50px;\n          position: relative;\n        }\n\n        #left {\n          opacity: 0.8;\n          background-color: var(--paper-audio-player-color);\n          transition: opacity 0.25s;\n        }\n        #left:focus,\n        #left:hover {\n          opacity: 1;\n        }\n\n        #right {\n          background-color: var(--paper-audio-player-background);\n        }\n\n        paper-icon-button,\n        iron-icon {\n          color: var(--paper-audio-player-text-color);\n        }\n\n        #duration,\n        #title,\n        #progress2 {\n          text-align: center;\n          line-height: 50px;\n        }\n\n        #duration {\n          font-size: 11px;\n          color: var(--paper-audio-player-color);\n        }\n\n        paper-icon-button,\n        iron-icon {\n          margin: auto;\n        }\n\n        #replay {\n          opacity: 0;\n          color: var(--paper-audio-player-color);\n        }\n\n        #title,\n        #progress2 {\n          pointer-events: none;\n          font-size: 15px;\n        }\n\n        #title {\n          z-index: 2;\n          color: var(--paper-audio-player-color);\n        }\n\n        #progress2 {\n          width: 0px;\n          z-index: 5;\n          color: var(--paper-audio-player-text-color);\n          overflow: hidden;\n        }\n\n        #center {\n          position: relative;\n          overflow: hidden;\n          background-color: var(--paper-audio-player-background);\n        }\n\n        #progress {\n          width: 100%;\n          transform-origin: left;\n          transform: scaleX(0);\n          background-color: var(--paper-audio-player-color);\n        }\n\n        paper-ripple {\n          color: var(--paper-audio-player-color);\n        }\n\n        /* On hover */\n\n        :host(:not(.cantplay)) #right:hover #replay {\n          opacity: 1;\n        }\n\n        #right:hover #duration {\n          opacity: 0;\n        }\n\n        #left:hover #play,\n        #left:hover #pause {\n          transform: scale3d(1.1, 1.1, 1.1);\n          -ms-transform: scale3d(1.1, 1.1, 1.1);\n          -webkit-transform: scale3d(1.1, 1.1, 1.1);\n        }\n\n        /* On Error */\n\n        :host(.cantplay) #title {\n          font-size: 12px;\n        }\n\n        :host(.cantplay) #wrapper {\n          cursor: default;\n        }\n\n        :host(.cantplay) #play {\n          opacity: 0;\n        }\n\n        /* Flexbox Helpers */\n\n        .layout-horizontal {\n          display: flex;\n          display: -webkit-flex;\n          display: -ms-flexbox;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n        }\n\n        .flex {\n          -ms-flex: 1;\n          -webkit-flex: 1;\n          flex: 1;\n        }\n\n        .fit {\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n        }\n\n        .self-start {\n          -ms-align-self: flex-start;\n          -webkit-align-self: flex-start;\n          align-self: flex-start;\n        }\n\n        .self-end {\n          -ms-align-self: flex-end;\n          -webkit-align-self: flex-end;\n          align-self: flex-end;\n        }\n      </style>\n      <div id=\"wrapper\" class=\"layout-horizontal\">\n        <div id=\"left\" class=\"self-start\" on-click=\"playPause\">\n          <!-- Icon -->\n          <paper-icon-button\n            id=\"play\"\n            icon=\"paper-audio-icons:play-arrow\"\n            class=\"fit\"\n            hidden$=\"[[ _hidePlayIcon(isPlaying, canBePlayed) ]]\"\n            role=\"button\"\n            aria-label=\"Play Audio\"\n            tabindex=\"-1\"\n          ></paper-icon-button>\n          <paper-icon-button\n            id=\"pause\"\n            icon=\"paper-audio-icons:pause\"\n            class=\"fit\"\n            hidden$=\"[[ !isPlaying ]]\"\n            role=\"button\"\n            aria-label=\"Pause Audio\"\n            tabindex=\"-1\"\n          ></paper-icon-button>\n          <iron-icon\n            id=\"error\"\n            icon=\"paper-audio-icons:error-outline\"\n            class=\"fit\"\n            hidden$=\"[[ !error ]]\"\n          ></iron-icon>\n        </div>\n        <div id=\"center\" class=\"flex\" on-down=\"_onDown\">\n          <!-- Title -->\n          <div id=\"title\" class=\"fit\" role=\"alert\">[[title]]</div>\n          <!-- Audio HTML5 element -->\n          <audio\n            id=\"audio\"\n            src$=\"[[src]]\"\n            preload$=\"[[ _setPreload(autoPlay, preload) ]]\"\n          ></audio>\n          <!-- Progress bar -->\n          <div id=\"progress\" class=\"fit\"></div>\n          <paper-ripple></paper-ripple>\n          <!-- Secondary white title -->\n          <div id=\"progress2\" class=\"fit\">\n            <div id=\"title2\" aria-hidden=\"true\">[[title]]</div>\n          </div>\n        </div>\n        <div id=\"right\" class=\"self-end\" on-click=\"restart\">\n          <!-- Duration -->\n          <div id=\"duration\" class=\"fit\" hidden$=\"[[ended]]\">\n            <span class=\"fit\" role=\"timer\" aria-label=\"Audio Track Length\"\n              >[[ _convertSecToMin(timeLeft) ]]</span\n            >\n          </div>\n          <!-- Icon -->\n          <paper-icon-button\n            id=\"replay\"\n            class=\"fit\"\n            icon=\"paper-audio-icons:replay\"\n            tabindex=\"-1\"\n            role=\"button\"\n            aria-label=\"Replay Audio\"\n          ></paper-icon-button>\n        </div>\n      </div>\n    "],["\n      <style>\n        :host {\n          display: block;\n          box-sizing: border-box;\n          font-family: var(\n            --paper-audio-player-font-family,\n            \"Roboto\",\n            \"Noto\",\n            sans-serif\n          );\n          --paper-audio-player-color: var(\n            --simple-colors-default-theme-accent-9\n          );\n          --paper-audio-player-text-color: var(\n            --simple-colors-default-theme-grey-1\n          );\n          --paper-audio-player-shadow: var(\n            --simple-colors-default-theme-grey-2\n          );\n          --paper-audio-player-background: var(\n            --simple-colors-default-theme-grey-1\n          );\n          background-color: var(--paper-audio-player-background);\n        }\n        #wrapper {\n          position: relative;\n          cursor: pointer;\n          height: 50px;\n          box-shadow: 0 1px 2px var(--paper-audio-player-shadow);\n        }\n        #left,\n        #center {\n          border-right: 1px solid var(--paper-audio-player-shadow);\n        }\n        #left,\n        #right {\n          height: 50px;\n          width: 50px;\n          position: relative;\n        }\n\n        #left {\n          opacity: 0.8;\n          background-color: var(--paper-audio-player-color);\n          transition: opacity 0.25s;\n        }\n        #left:focus,\n        #left:hover {\n          opacity: 1;\n        }\n\n        #right {\n          background-color: var(--paper-audio-player-background);\n        }\n\n        paper-icon-button,\n        iron-icon {\n          color: var(--paper-audio-player-text-color);\n        }\n\n        #duration,\n        #title,\n        #progress2 {\n          text-align: center;\n          line-height: 50px;\n        }\n\n        #duration {\n          font-size: 11px;\n          color: var(--paper-audio-player-color);\n        }\n\n        paper-icon-button,\n        iron-icon {\n          margin: auto;\n        }\n\n        #replay {\n          opacity: 0;\n          color: var(--paper-audio-player-color);\n        }\n\n        #title,\n        #progress2 {\n          pointer-events: none;\n          font-size: 15px;\n        }\n\n        #title {\n          z-index: 2;\n          color: var(--paper-audio-player-color);\n        }\n\n        #progress2 {\n          width: 0px;\n          z-index: 5;\n          color: var(--paper-audio-player-text-color);\n          overflow: hidden;\n        }\n\n        #center {\n          position: relative;\n          overflow: hidden;\n          background-color: var(--paper-audio-player-background);\n        }\n\n        #progress {\n          width: 100%;\n          transform-origin: left;\n          transform: scaleX(0);\n          background-color: var(--paper-audio-player-color);\n        }\n\n        paper-ripple {\n          color: var(--paper-audio-player-color);\n        }\n\n        /* On hover */\n\n        :host(:not(.cantplay)) #right:hover #replay {\n          opacity: 1;\n        }\n\n        #right:hover #duration {\n          opacity: 0;\n        }\n\n        #left:hover #play,\n        #left:hover #pause {\n          transform: scale3d(1.1, 1.1, 1.1);\n          -ms-transform: scale3d(1.1, 1.1, 1.1);\n          -webkit-transform: scale3d(1.1, 1.1, 1.1);\n        }\n\n        /* On Error */\n\n        :host(.cantplay) #title {\n          font-size: 12px;\n        }\n\n        :host(.cantplay) #wrapper {\n          cursor: default;\n        }\n\n        :host(.cantplay) #play {\n          opacity: 0;\n        }\n\n        /* Flexbox Helpers */\n\n        .layout-horizontal {\n          display: flex;\n          display: -webkit-flex;\n          display: -ms-flexbox;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n        }\n\n        .flex {\n          -ms-flex: 1;\n          -webkit-flex: 1;\n          flex: 1;\n        }\n\n        .fit {\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n        }\n\n        .self-start {\n          -ms-align-self: flex-start;\n          -webkit-align-self: flex-start;\n          align-self: flex-start;\n        }\n\n        .self-end {\n          -ms-align-self: flex-end;\n          -webkit-align-self: flex-end;\n          align-self: flex-end;\n        }\n      </style>\n      <div id=\"wrapper\" class=\"layout-horizontal\">\n        <div id=\"left\" class=\"self-start\" on-click=\"playPause\">\n          <!-- Icon -->\n          <paper-icon-button\n            id=\"play\"\n            icon=\"paper-audio-icons:play-arrow\"\n            class=\"fit\"\n            hidden$=\"[[ _hidePlayIcon(isPlaying, canBePlayed) ]]\"\n            role=\"button\"\n            aria-label=\"Play Audio\"\n            tabindex=\"-1\"\n          ></paper-icon-button>\n          <paper-icon-button\n            id=\"pause\"\n            icon=\"paper-audio-icons:pause\"\n            class=\"fit\"\n            hidden$=\"[[ !isPlaying ]]\"\n            role=\"button\"\n            aria-label=\"Pause Audio\"\n            tabindex=\"-1\"\n          ></paper-icon-button>\n          <iron-icon\n            id=\"error\"\n            icon=\"paper-audio-icons:error-outline\"\n            class=\"fit\"\n            hidden$=\"[[ !error ]]\"\n          ></iron-icon>\n        </div>\n        <div id=\"center\" class=\"flex\" on-down=\"_onDown\">\n          <!-- Title -->\n          <div id=\"title\" class=\"fit\" role=\"alert\">[[title]]</div>\n          <!-- Audio HTML5 element -->\n          <audio\n            id=\"audio\"\n            src$=\"[[src]]\"\n            preload$=\"[[ _setPreload(autoPlay, preload) ]]\"\n          ></audio>\n          <!-- Progress bar -->\n          <div id=\"progress\" class=\"fit\"></div>\n          <paper-ripple></paper-ripple>\n          <!-- Secondary white title -->\n          <div id=\"progress2\" class=\"fit\">\n            <div id=\"title2\" aria-hidden=\"true\">[[title]]</div>\n          </div>\n        </div>\n        <div id=\"right\" class=\"self-end\" on-click=\"restart\">\n          <!-- Duration -->\n          <div id=\"duration\" class=\"fit\" hidden\\$=\"[[ended]]\">\n            <span class=\"fit\" role=\"timer\" aria-label=\"Audio Track Length\"\n              >[[ _convertSecToMin(timeLeft) ]]</span\n            >\n          </div>\n          <!-- Icon -->\n          <paper-icon-button\n            id=\"replay\"\n            class=\"fit\"\n            icon=\"paper-audio-icons:replay\"\n            tabindex=\"-1\"\n            role=\"button\"\n            aria-label=\"Replay Audio\"\n          ></paper-icon-button>\n        </div>\n      </div>\n    "]);_templateObject_50fae180ab1611e9b93bdbc4cf381f6e=function _templateObject_50fae180ab1611e9b93bdbc4cf381f6e(){return data};return data}/**
A custom audio player with material paper style and clean design.

Example:

    <paper-audio-player src="audio.mp3"></paper-audio-player>

### Styling the player:

This player has an accent color, and you have two option to modify it:

- **Option 1**: Using the *color property* on element. This one is handy if you need to modify the color dynamically.


    <paper-audio-player color="#F05C38" src="audio.mp3"></paper-audio-player>


- **Option 2**: Using the *custom CSS property*:



    paper-audio-player {
       --paper-audio-player-color: #e91e63;
    }

The following mixins are available for styling:

Custom property                             | Description                                 | Default
--------------------------------------------|---------------------------------------------|----------
--paper-audio-player-color                  | Color of the element                        | blueviolet

@element paper-audio-player
* @demo demo/index.html
*/var PaperAudioPlayer=/*#__PURE__*/function(_mixinBehaviors){babelHelpers.inherits(PaperAudioPlayer,_mixinBehaviors);function PaperAudioPlayer(){var _this;babelHelpers.classCallCheck(this,PaperAudioPlayer);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PaperAudioPlayer).call(this));(0,_renderStatus.afterNextRender)(babelHelpers.assertThisInitialized(_this),function(){this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(PaperAudioPlayer.haxProperties,PaperAudioPlayer.tag,this)});return _this}babelHelpers.createClass(PaperAudioPlayer,[{key:"connectedCallback",/**
   * attached life cycle
   */value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(PaperAudioPlayer.prototype),"connectedCallback",this).call(this);(0,_renderStatus.afterNextRender)(this,function(){this.$.audio.addEventListener("loadedmetadata",this._onCanPlay.bind(this));this.$.audio.addEventListener("playing",this._onPlaying.bind(this));this.$.audio.addEventListener("pause",this._onPause.bind(this));this.$.audio.addEventListener("ended",this._onEnd.bind(this));this.$.audio.addEventListener("error",this._onError.bind(this))});this.setAttribute("tabindex","0");this.setAttribute("role","application");this.setAttribute("aria-label","Audio Player");this.setAttribute("aria-describedby","title")}/**
   * detached life cycle
   */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(PaperAudioPlayer.prototype),"disconnectedCallback",this).call(this);this.$.audio.removeEventListener("loadedmetadata",this._onCanPlay.bind(this));this.$.audio.removeEventListener("playing",this._onPlaying.bind(this));this.$.audio.removeEventListener("pause",this._onPause.bind(this));this.$.audio.removeEventListener("ended",this._onEnd.bind(this));this.$.audio.removeEventListener("error",this._onError.bind(this))}/**
   * ready life cycle
   */},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(PaperAudioPlayer.prototype),"ready",this).call(this);var player=this;// create Player defaults
player.canBePlayed=!1;player.isPlaying=!1;player.ended=!1;player.error=!1;player.$.audio.currentTime=player.timeOffset;// apply the audio start time property
}// Play/Pause controls
},{key:"playPause",value:function playPause(e){if(!!e)e.preventDefault();var player=this;if(player.canBePlayed){if(player.isPlaying){player._pause()}else{player._play()}}else if("none"===player.preload){// If player can't be played, because audio wasn't pre-loaded
// due to the preload="none" property set,
// load the audio file at this point and start playing it immediately
player.$.audio.load();player._play()}}},{key:"_play",value:function _play(){var player=this;player.$.audio.play()}},{key:"_pause",value:function _pause(){var player=this;player.$.audio.pause()}//
// Restart audio
},{key:"restart",value:function restart(e){if(!!e)e.preventDefault();var player=this;player.$.audio.currentTime=0;if(!player.isPlaying)player._play()}// when audio file can be played in user's browser
},{key:"_onCanPlay",value:function _onCanPlay(){var player=this;player.canBePlayed=!0;player.timeLeft=player.$.audio.duration;// If player has a Time Offset specified
// style the progress bar and title accordingly
if(0<player.timeOffset){var percentagePlayed=player.timeOffset/player.$.audio.duration;player._updateVisualProgress(percentagePlayed)}// If player has auto-play attribute set,
// it ignores preload="none" property and starts playing on load.
// This behavior corresponds to the native audio element behavior.
if(player.autoPlay)player._play()}// when Player starts playing
},{key:"_onPlaying",value:function _onPlaying(){var player=this;player.ended=!1;player.isPlaying=!0;player.$.replay.style="";// remove Replay inline styling
player._startProgressTimer()}// Skip or reverse by pre-defined intervals
},{key:"_skipReverseByInterval",value:function _skipReverseByInterval(e){if(!!e)e.preventDefault();var player=this,newTime=0;switch(e.detail.key){case"up":if(player.largeSkip<player.timeLeft)newTime=player.currentTime+player.largeSkip;break;case"down":if(0<player.currentTime-player.largeSkip)newTime=player.currentTime-player.largeSkip;break;case"right":if(player.smallSkip<player.timeLeft)newTime=player.currentTime+player.smallSkip;break;default:if(0<player.currentTime-player.smallSkip)newTime=player.currentTime-player.smallSkip;}player._updatePlayPosition(newTime);if(!player.isPlaying)player._play()}// starts Timer
},{key:"_startProgressTimer",value:function _startProgressTimer(){var player=this;player.timer={};if(player.timer.sliderUpdateInterval){clearInterval(player.timer.sliderUpdateInterval)}player.timer.sliderUpdateInterval=setInterval(function(){if(player.isPlaying){player.currentTime=player.$.audio.currentTime;player.timeLeft=player.$.audio.duration-player.currentTime;var percentagePlayed=player.currentTime/player.$.audio.duration;player._updateVisualProgress(percentagePlayed)}else{clearInterval(player.timer.sliderUpdateInterval)}},60)}// when Player is paused
},{key:"_onPause",value:function _onPause(){var player=this;player.isPlaying=!1}// when Player ended playing an audio file
},{key:"_onEnd",value:function _onEnd(){var player=this;player.ended=!0;player.isPlaying=!1;player.$.replay.style.opacity=1;// display Replay icon
}// on file load error
},{key:"_onError",value:function _onError(){var player=this;player.classList.add("cantplay");player.title="Sorry, can't play track: "+player.title;player.error=!0;player.setAttribute("aria-invalid","true")}// to convert seconds to 'm:ss' format
},{key:"_convertSecToMin",value:function _convertSecToMin(seconds){if(0===seconds)return"";var minutes=Math.floor(seconds/60),secondsToCalc=Math.floor(seconds%60)+"";return minutes+":"+(2>secondsToCalc.length?"0"+secondsToCalc:secondsToCalc)}//
// When user clicks somewhere on the progress bar
},{key:"_onDown",value:function _onDown(e){e.preventDefault();var player=this;if(player.canBePlayed){player._updateProgressBar(e);if(!player.isPlaying){player._play()}// When preload="none" is being used,
// player should first try to load the audio,
// and when it's successfully loaded, recalculate the progress bar
}else if("none"===player.preload){player.$.audio.load();player.$.audio.addEventListener("loadedmetadata",function(){player._updateProgressBar(e);if(!player.isPlaying){player._play()}},!1)}}//
// Helper function
// that recalculates the progress bar position
// based on the event.click position
},{key:"_updateProgressBar",value:function _updateProgressBar(e){var player=this,x=e.detail.x-player.$.center.getBoundingClientRect().left,r=x/player.$.center.getBoundingClientRect().width*player.$.audio.duration;this._updatePlayPosition(r)}//
// Helper function
// updates the current time based on a time variable
},{key:"_updatePlayPosition",value:function _updatePlayPosition(newTime){var player=this;player.currentTime=player.$.audio.currentTime=newTime;var percentagePlayed=player.currentTime/player.$.audio.duration;player._updateVisualProgress(percentagePlayed)}//
// Helper function
// updates the progress bar based on a percentage played
},{key:"_updateVisualProgress",value:function _updateVisualProgress(percentagePlayed){var player=this;player.$.progress.style.transform="scaleX("+percentagePlayed+")";player.$.progress2.style.width=100*percentagePlayed+"%";player.$.title2.style.width=100*(1/percentagePlayed)+"%"}//
// If src is changed when track is playing,
// pause the track and start playing a new src
},{key:"_srcChanged",value:function _srcChanged(newValue,oldValue){var player=this;if(player.isPlaying){player._pause();player._play()}}//
// If color property is changed,
// update all the nodes with the new accent color
},{key:"_changeColor",value:function _changeColor(newValue){var player=this;player.$.left.style.backgroundColor=newValue;player.$.title.style.color=newValue;player.$.duration.style.color=newValue;player.$.progress.style.backgroundColor=newValue;player.$.replay.style.color=newValue}},{key:"_hidePlayIcon",value:function _hidePlayIcon(isPlaying,canBePlayed){return isPlaying?!0:!(canBePlayed||"none"===this.preload)}},{key:"_setPreload",value:function _setPreload(autoplay,preload){return autoplay?"auto":preload}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_50fae180ab1611e9b93bdbc4cf381f6e())}},{key:"tag",get:function get(){return"paper-audio-player"}// Define public properties
},{key:"properties",get:function get(){var props={src:{type:String,observer:"_srcChanged"},title:{type:String,value:"Click to play this audio file"},autoPlay:{type:Boolean,value:!1},preload:{type:String,value:"auto"},currentTime:{type:Number,value:0,notify:!0},timeLeft:{type:Number,value:0},smallSkip:{type:Number,value:15},largeSkip:{type:Number,value:60},error:{type:Boolean},timeOffset:{type:Number,value:0}};if(babelHelpers.get(babelHelpers.getPrototypeOf(PaperAudioPlayer),"properties",this)){props=Object.assign(props,babelHelpers.get(babelHelpers.getPrototypeOf(PaperAudioPlayer),"properties",this))}return props}},{key:"keyBindings",get:function get(){return{space:"playPause",enter:"playPause",left:"_skipReverseByInterval",right:"_skipReverseByInterval",down:"_skipReverseByInterval",up:"_skipReverseByInterval"}}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Mini Audio player",description:"A very small audio player good for MP3s.",icon:"image:music-note",color:"green",groups:["Audio","Media"],handles:[{type:"audio",source:"src",title:"title",color:"color"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"src",title:"Source",description:"The URL for this audio file.",inputMethod:"textfield",icon:"link",required:!0,validationType:"url"},{property:"title",title:"Title",description:"Title of this sound track.",inputMethod:"textfield",icon:"av:video-label",required:!1,validationType:"text"},{property:"accentColor",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"}],configure:[{property:"src",title:"Source",description:"The URL for this audio file.",inputMethod:"haxupload",icon:"link",required:!0,validationType:"url"},{property:"title",title:"Title",description:"Title of this sound track.",inputMethod:"textfield",icon:"av:video-label",required:!1,validationType:"text"},{property:"accentColor",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"}],advanced:[]}}}}]);return PaperAudioPlayer}((0,_class.mixinBehaviors)([_ironA11yKeysBehavior.IronA11yKeysBehavior],(0,_schemaBehaviors.SchemaBehaviors)(_simpleColors.SimpleColors)));_exports.PaperAudioPlayer=PaperAudioPlayer;window.customElements.define(PaperAudioPlayer.tag,PaperAudioPlayer)});