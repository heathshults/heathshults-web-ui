var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;for(var r=Array(e),p=0,t=0;t<i;t++)for(var n=arguments[t],s=0,f=n.length;s<f;s++,p++)r[p]=n[s];return r};System.register(["./p-f8af1ee2.system.js"],(function(e){"use strict";var t,i,r;return{setters:[function(e){t=e.r;i=e.h;r=e.g}],execute:function(){var p=".hs-flipper{float:left;-webkit-perspective:1000px;perspective:1000px}.hs-flipper_front,.hs-flipper_back{position:absolute;width:inherit;height:inherit;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden}.hs-flipper_front{z-index:900;-webkit-transform:rotate3d(0, 0, 0, 0deg);transform:rotate3d(0, 0, 0, 0deg)}.hs-flipper--flipped .hs-flipper_front{z-index:900;-webkit-transform:rotate3d(0, 1, 0, 180deg);transform:rotate3d(0, 1, 0, 180deg);-ms-transform:rotateY(180deg)}.hs-flipper_back{z-index:800;-webkit-transform:rotate3d(0, 1, 0, -180deg);transform:rotate3d(0, 1, 0, -180deg)}.hs-flipper--flipped .hs-flipper_back{z-index:1000;-webkit-transform:rotate3d(0, 0, 0, 0deg);transform:rotate3d(0, 0, 0, 0deg)}";var n=e("hs_flipper",function(){function e(e){t(this,e);this.events={flipperEvents:[],flipperBackEvents:[]}}e.prototype.componentWillLoad=function(){this.init()};e.prototype.componentDidLoad=function(){var e=this;var t=this.flipperDuration||400;var i=this.flipperTimingFunction||"ease-in";["front","back"].forEach((function(r){var p=e.element.querySelector(".hs-flipperpy__"+r);p["style"].transition="all "+t/1e3+"s "+i}))};e.prototype.componentWillUpdate=function(){if(this.isflipperped!==undefined){this.flipperState=this.isflipperped}};e.prototype.init=function(){var e=this;if(this.isflipperped!==undefined){this.flipperState=this.isflipperped}else if(this.flipperEvents!==undefined){["flipperEvents","flipperBackEvents"].forEach((function(t){e.events[t]=e[t]?e[t].split(","):[]}));var t=__spreadArrays(this.events.flipperEvents,this.events.flipperBackEvents);t.filter((function(e,i){return t.indexOf(e)===i})).forEach((function(t){return e.element.addEventListener(t,(function(t){return e.processflipper(t)}))}));this.flipperState=false}};e.prototype.processflipper=function(e){var t=e.type;if(this.flipperState&&this.events.flipperBackEvents.indexOf(t)!==-1){this.flipperState=!this.flipperState}else if(!this.flipperState&&this.events.flipperEvents.indexOf(t)!==-1){this.flipperState=!this.flipperState}};e.prototype.render=function(){return i("div",{class:"hs-flipperpy "+(this.flipperState?"hs-flipperpy--flipperped":"")},i("div",{class:"hs-flipperpy__front"},i("slot",{name:"front"})),i("div",{class:"hs-flipperpy__back"},i("slot",{name:"back"})))};Object.defineProperty(e.prototype,"element",{get:function(){return r(this)},enumerable:false,configurable:true});return e}());n.style=p}}}));