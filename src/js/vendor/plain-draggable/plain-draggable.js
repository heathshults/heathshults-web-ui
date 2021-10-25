(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  module.exports = _classCallCheck;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  },{}],2:[function(require,module,exports){
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  
  module.exports = _createClass;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  },{}],3:[function(require,module,exports){
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  
  module.exports = _interopRequireDefault;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  },{}],4:[function(require,module,exports){
  function _typeof(obj) {
    "@babel/helpers - typeof";
  
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
  
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
  
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
  
    return _typeof(obj);
  }
  
  module.exports = _typeof;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  },{}],5:[function(require,module,exports){
  /*! AnimEvent v1.0.16 (c) anseki https://github.com/anseki/anim-event */
  var AnimEvent=function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var r=500,o=[],i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(n){return setTimeout(n,1e3/60)},u=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||function(n){return clearTimeout(n)},a=Date.now(),l=void 0;function c(){var n=void 0,e=void 0;l&&(u.call(window,l),l=null),o.forEach(function(e){var t;(t=e.event)&&(e.event=null,e.listener(t),n=!0)}),n?(a=Date.now(),e=!0):Date.now()-a<r&&(e=!0),e&&(l=i.call(window,c))}function f(n){var e=-1;return o.some(function(t,r){return t.listener===n&&(e=r,!0)}),e}var d={add:function(n){var e=void 0;return-1===f(n)?(o.push(e={listener:n}),function(n){e.event=n,l||c()}):null},remove:function(n){var e;(e=f(n))>-1&&(o.splice(e,1),!o.length&&l&&(u.call(window,l),l=null))}};e.default=d}]).default;
  },{}],6:[function(require,module,exports){
  /*! CSSPrefix v2.0.16 (c) anseki https://github.com/anseki/cssprefix */
  var CSSPrefix=function(e){var r={};function n(t){if(r[t])return r[t].exports;var u=r[t]={i:t,l:!1,exports:{}};return e[t].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){"use strict";function t(e){return e.substr(0,1).toUpperCase()+e.substr(1)}n.r(r);var u,o,i,a,c=["webkit","moz","ms","o"],l=c.reduce(function(e,r){return e.push(r),e.push(t(r)),e},[]),f=c.map(function(e){return"-"+e+"-"}),s=(a=void 0,function(){return a=a||document.createElement("div").style}),p=(o=new RegExp("^(?:"+c.join("|")+")(.)","i"),i=/[A-Z]/,function(e){return"float"===(e=(e+"").replace(/\s/g,"").replace(/-([\da-z])/gi,function(e,r){return r.toUpperCase()}).replace(o,function(e,r){return i.test(r)?r.toLowerCase():e})).toLowerCase()?"cssFloat":e}),v=(u=new RegExp("^(?:"+f.join("|")+")","i"),function(e){return(null!=e?e+"":"").replace(/\s/g,"").replace(u,"")}),d=function(e,r){var n=s();return e=e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),n.setProperty(e,r),null!=n[e]&&n.getPropertyValue(e)===r},g={},m={};function y(e){if((e=p(e))&&null==g[e]){var r=s();if(null!=r[e])g[e]=e;else{var n=t(e);l.some(function(t){var u=t+n;return null!=r[u]&&(g[e]=u,!0)})||(g[e]=!1)}}return g[e]||void 0}var b={getName:y,getValue:function(e,r){var n=void 0;return(e=y(e))?(m[e]=m[e]||{},(Array.isArray(r)?r:[r]).some(function(r){return r=v(r),null!=m[e][r]?!1!==m[e][r]&&(n=m[e][r],!0):d(e,r)?(n=m[e][r]=r,!0):!!f.some(function(t){var u=t+r;return!!d(e,u)&&(n=m[e][r]=u,!0)})||(m[e][r]=!1,!1)}),"string"==typeof n?n:void 0):n}};r.default=b}]).default;
  },{}],7:[function(require,module,exports){
  /*! mClassList v1.1.9 (c) anseki https://github.com/anseki/m-class-list */
  var mClassList=function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";function r(t){return(t+"").trim()}function i(t,n){n.setAttribute("class",t.join(" "))}function o(t){return!o.ignoreNative&&t.classList||(n=(t.getAttribute("class")||"").trim().split(/\s+/).filter(function(t){return!!t}),e={length:n.length,item:function(t){return n[t]},contains:function(t){return-1!==n.indexOf(r(t))},add:function(){return function(t,n,e){e.filter(function(n){return!(!(n=r(n))||-1!==t.indexOf(n)||(t.push(n),0))}).length&&i(t,n)}(n,t,Array.prototype.slice.call(arguments)),o.methodChain?e:void 0},remove:function(){return function(t,n,e){e.filter(function(n){var e=void 0;return!(!(n=r(n))||-1===(e=t.indexOf(n))||(t.splice(e,1),0))}).length&&i(t,n)}(n,t,Array.prototype.slice.call(arguments)),o.methodChain?e:void 0},toggle:function(e,o){return function(t,n,e,o){var u=t.indexOf(e=r(e));return-1!==u?!!o||(t.splice(u,1),i(t,n),!1):!1!==o&&(t.push(e),i(t,n),!0)}(n,t,e,o)},replace:function(u,c){return function(t,n,e,o){var u=void 0;(e=r(e))&&(o=r(o))&&e!==o&&-1!==(u=t.indexOf(e))&&(t.splice(u,1),-1===t.indexOf(o)&&t.push(o),i(t,n))}(n,t,u,c),o.methodChain?e:void 0}});var n,e}e.r(n),o.methodChain=!0,n.default=o}]).default;
  },{}],8:[function(require,module,exports){
  /*! PointerEvent v1.0.0 (c) anseki https://github.com/anseki/pointer-event */
  var PointerEvent=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=500,o=[],i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},a=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||function(e){return clearTimeout(e)},u=Date.now(),l=void 0;function c(){var e=void 0,t=void 0;l&&(a.call(window,l),l=null),o.forEach(function(t){var n;(n=t.event)&&(t.event=null,t.listener(n),e=!0)}),e?(u=Date.now(),t=!0):Date.now()-u<r&&(t=!0),t&&(l=i.call(window,c))}function s(e){var t=-1;return o.some(function(n,r){return n.listener===e&&(t=r,!0)}),t}var d={add:function(e){var t=void 0;return-1===s(e)?(o.push(t={listener:e}),function(e){t.event=e,l||c()}):null},remove:function(e){var t;(t=s(e))>-1&&(o.splice(t,1),!o.length&&l&&(a.call(window,l),l=null))}},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var h=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){h=!0}}))}catch(e){}function v(e,t,n,r){e.addEventListener(t,n,h?r:r.capture)}function p(e,t){if(null!=e&&null!=t)for(var n=0;n<e.length;n++)if(e[n].identifier===t)return e[n];return null}function m(e){return e&&"number"==typeof e.clientX&&"number"==typeof e.clientY}function w(e){e.preventDefault()}var y=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.startHandlers={},this.lastHandlerId=0,this.curPointerClass=null,this.curTouchId=null,this.lastPointerXY={clientX:0,clientY:0},this.lastTouchTime=0,this.options={preventDefault:!0,stopPropagation:!0},t&&["preventDefault","stopPropagation"].forEach(function(e){"boolean"==typeof t[e]&&(n.options[e]=t[e])})}return f(e,[{key:"regStartHandler",value:function(e){var t=this;return t.startHandlers[++t.lastHandlerId]=function(n){var r="mousedown"===n.type?"mouse":"touch",o=Date.now(),i=void 0,a=void 0;if("touch"===r)t.lastTouchTime=o,i=n.changedTouches[0],a=n.changedTouches[0].identifier;else{if(o-t.lastTouchTime<400)return;i=n}if(!m(i))throw new Error("No clientX/clientY");t.curPointerClass&&t.cancel(),e.call(t,i)&&(t.curPointerClass=r,t.curTouchId="touch"===r?a:null,t.lastPointerXY.clientX=i.clientX,t.lastPointerXY.clientY=i.clientY,t.options.preventDefault&&n.preventDefault(),t.options.stopPropagation&&n.stopPropagation())},t.lastHandlerId}},{key:"unregStartHandler",value:function(e){delete this.startHandlers[e]}},{key:"addStartHandler",value:function(e,t){if(!this.startHandlers[t])throw new Error("Invalid handlerId: "+t);return v(e,"mousedown",this.startHandlers[t],{capture:!1,passive:!1}),v(e,"touchstart",this.startHandlers[t],{capture:!1,passive:!1}),v(e,"dragstart",w,{capture:!1,passive:!1}),t}},{key:"removeStartHandler",value:function(e,t){if(!this.startHandlers[t])throw new Error("Invalid handlerId: "+t);return e.removeEventListener("mousedown",this.startHandlers[t],!1),e.removeEventListener("touchstart",this.startHandlers[t],!1),e.removeEventListener("dragstart",w,!1),t}},{key:"addMoveHandler",value:function(e,t){var n=this,r=d.add(function(e){var t="mousemove"===e.type?"mouse":"touch";if("touch"===t&&(n.lastTouchTime=Date.now()),t===n.curPointerClass){var r="touch"===t?p(e.changedTouches,n.curTouchId):e;m(r)&&(r.clientX===n.lastPointerXY.clientX&&r.clientY===n.lastPointerXY.clientY||n.move(r),n.options.preventDefault&&e.preventDefault(),n.options.stopPropagation&&e.stopPropagation())}});v(e,"mousemove",r,{capture:!1,passive:!1}),v(e,"touchmove",r,{capture:!1,passive:!1}),n.curMoveHandler=t}},{key:"move",value:function(e){m(e)&&(this.lastPointerXY.clientX=e.clientX,this.lastPointerXY.clientY=e.clientY),this.curMoveHandler&&this.curMoveHandler(this.lastPointerXY)}},{key:"addEndHandler",value:function(e,t){var n=this;function r(e){var t="mouseup"===e.type?"mouse":"touch";if("touch"===t&&(n.lastTouchTime=Date.now()),t===n.curPointerClass){var r="touch"===t?p(e.changedTouches,n.curTouchId)||(p(e.touches,n.curTouchId)?null:{}):e;r&&(n.end(r),n.options.preventDefault&&e.preventDefault(),n.options.stopPropagation&&e.stopPropagation())}}v(e,"mouseup",r,{capture:!1,passive:!1}),v(e,"touchend",r,{capture:!1,passive:!1}),n.curEndHandler=t}},{key:"end",value:function(e){m(e)&&(this.lastPointerXY.clientX=e.clientX,this.lastPointerXY.clientY=e.clientY),this.curEndHandler&&this.curEndHandler(this.lastPointerXY),this.curPointerClass=this.curTouchId=null}},{key:"addCancelHandler",value:function(e,t){var n=this;v(e,"touchcancel",function(e){n.lastTouchTime=Date.now(),null!=n.curPointerClass&&(p(e.changedTouches,n.curTouchId)||!p(e.touches,n.curTouchId))&&n.cancel()},{capture:!1,passive:!1}),n.curCancelHandler=t}},{key:"cancel",value:function(){this.curCancelHandler&&this.curCancelHandler(),this.curPointerClass=this.curTouchId=null}}],[{key:"addEventListenerWithOptions",get:function(){return v}}]),e}();t.default=y}]).default;
  },{}],9:[function(require,module,exports){
  "use strict";
  
  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
  
  var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
  
  var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
  
  var _pointerEvent = _interopRequireDefault(require("pointer-event"));
  
  var _cssprefix = _interopRequireDefault(require("cssprefix"));
  
  var _animEvent = _interopRequireDefault(require("anim-event"));
  
  var _mClassList = _interopRequireDefault(require("m-class-list"));
  /* eslint-disable no-cond-assign */
  
  /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
  
  /* eslint-disable no-prototype-builtins */
  
  /*
   * PlainDraggable
   * https://anseki.github.io/plain-draggable/
   *
   * Copyright (c) 2018 anseki
   * Licensed under the MIT license.
   */
  
  
  _mClassList.default.ignoreNative = true;
  
  var ZINDEX = 9000,
      // [SNAP]
  SNAP_GRAVITY = 20,
      SNAP_CORNER = 'tl',
      SNAP_SIDE = 'both',
      SNAP_EDGE = 'both',
      SNAP_BASE = 'containment',
      SNAP_ALL_CORNERS = ['tl', 'tr', 'bl', 'br'],
      SNAP_ALL_SIDES = ['start', 'end'],
      SNAP_ALL_EDGES = ['inside', 'outside'],
      // [/SNAP]
  // [AUTO-SCROLL]
  AUTOSCROLL_SPEED = [40, 200, 1000],
      AUTOSCROLL_SENSITIVITY = [100, 40, 0],
      // [/AUTO-SCROLL]
  IS_EDGE = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style && !window.navigator.msPointerEnabled,
      IS_TRIDENT = !IS_EDGE && !!document.uniqueID,
      // Future Edge might support `document.uniqueID`.
  IS_GECKO = ('MozAppearance' in document.documentElement.style),
      IS_BLINK = !IS_EDGE && !IS_GECKO && // Edge has `window.chrome`, and future Gecko might have that.
  !!window.chrome && !!window.CSS,
      IS_WEBKIT = !IS_EDGE && !IS_TRIDENT && !IS_GECKO && !IS_BLINK && // Some engines support `webkit-*` properties.
  !window.chrome && 'WebkitAppearance' in document.documentElement.style,
      isObject = function () {
    var toString = {}.toString,
        fnToString = {}.hasOwnProperty.toString,
        objFnString = fnToString.call(Object);
    return function (obj) {
      var proto, constr;
      return obj && toString.call(obj) === '[object Object]' && (!(proto = Object.getPrototypeOf(obj)) || (constr = proto.hasOwnProperty('constructor') && proto.constructor) && typeof constr === 'function' && fnToString.call(constr) === objFnString);
    };
  }(),
      isFinite = Number.isFinite || function (value) {
    return typeof value === 'number' && window.isFinite(value);
  },
  
  /** @type {Object.<_id: number, props>} */
  insProps = {},
      pointerOffset = {},
      pointerEvent = new _pointerEvent.default();
  
  var insId = 0,
      activeProps,
      hasMoved,
      body,
      // CSS property/value
  cssValueDraggableCursor,
      cssValueDraggingCursor,
      cssOrgValueBodyCursor,
      cssPropTransitionProperty,
      cssPropTransform,
      cssPropUserSelect,
      cssOrgValueBodyUserSelect,
      // Try to set `cursor` property.
  cssWantedValueDraggableCursor = IS_WEBKIT ? ['all-scroll', 'move'] : ['grab', 'all-scroll', 'move'],
      cssWantedValueDraggingCursor = IS_WEBKIT ? 'move' : ['grabbing', 'move'],
      // class
  draggableClass = 'plain-draggable',
      draggingClass = 'plain-draggable-dragging',
      movingClass = 'plain-draggable-moving'; // [AUTO-SCROLL]
  // Scroll Animation Controller
  
  var scrollFrame = {},
      MSPF = 1000 / 60,
      // ms/frame (FPS: 60)
  requestAnim = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    return setTimeout(callback, MSPF);
  },
      cancelAnim = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || function (requestID) {
    return clearTimeout(requestID);
  };
  
  {
    var frameUpdate = function frameUpdate() {
      var now = Date.now();
      ['x', 'y'].forEach(function (xy) {
        var moveArgs = curXyMoveArgs[xy];
  
        if (moveArgs) {
          var timeLen = now - moveArgs.lastFrameTime,
              absValue = curScrollXY(curElement, xy),
              curValue = moveArgs.lastValue != null && Math.abs(moveArgs.lastValue - absValue) < 10 // It was not moved manually
          ? moveArgs.lastValue : absValue;
  
          if (moveArgs.dir === -1 ? curValue > moveArgs.min : curValue < moveArgs.max) {
            var newValue = curValue + moveArgs.speed * timeLen * moveArgs.dir;
  
            if (newValue < moveArgs.min) {
              newValue = moveArgs.min;
            } else if (newValue > moveArgs.max) {
              newValue = moveArgs.max;
            }
  
            curScrollXY(curElement, xy, newValue);
            moveArgs.lastValue = newValue;
          }
  
          moveArgs.lastFrameTime = now;
        }
      });
    };
  
    var frame = function frame() {
      cancelAnim.call(window, requestID);
      frameUpdate();
      requestID = requestAnim.call(window, frame);
    };
    /**
     * @param {Element} element - A target element.
     * @param {{x: ?MoveArgs, y: ?MoveArgs}} xyMoveArgs - MoveArgs for x and y
     * @param {function} scrollXY - (element: Element, xy: string, value: number) => number
     * @returns {void}
     */
  
    /**
     * @typedef {Object} MoveArgs
     * @property {number} dir - [-1 | 1] minus or plus to position value.
     * @property {number} speed - px/ms
     * @property {number} min - Minimum position value.
     * @property {number} max - Maximum position value.
     * @property {number} [lastFrameTime] - Time of last frame.
     * @property {number} [lastValue] - Strict value of last frame.
     */
  
  
    var curXyMoveArgs = {},
        curElement,
        curScrollXY,
        requestID;
  
    scrollFrame.move = function (element, xyMoveArgs, scrollXY) {
      cancelAnim.call(window, requestID);
      frameUpdate(); // Update current data now because it might be not continuation.
      // Re-use lastValue
  
      if (curElement === element) {
        if (xyMoveArgs.x && curXyMoveArgs.x) {
          xyMoveArgs.x.lastValue = curXyMoveArgs.x.lastValue;
        }
  
        if (xyMoveArgs.y && curXyMoveArgs.y) {
          xyMoveArgs.y.lastValue = curXyMoveArgs.y.lastValue;
        }
      }
  
      curElement = element;
      curXyMoveArgs = xyMoveArgs;
      curScrollXY = scrollXY;
      var now = Date.now();
      ['x', 'y'].forEach(function (xy) {
        var moveArgs = curXyMoveArgs[xy];
  
        if (moveArgs) {
          moveArgs.lastFrameTime = now;
        }
      });
      requestID = requestAnim.call(window, frame);
    };
  
    scrollFrame.stop = function () {
      cancelAnim.call(window, requestID);
      frameUpdate();
      curXyMoveArgs = {};
      curElement = null; // Remove reference
    };
  }
  
  function scrollXYWindow(element, xy, value) {
    if (value != null) {
      if (xy === 'x') {
        element.scrollTo(value, element.pageYOffset);
      } else {
        element.scrollTo(element.pageXOffset, value);
      }
    }
  
    return xy === 'x' ? element.pageXOffset : element.pageYOffset;
  }
  
  function scrollXYElement(element, xy, value) {
    var prop = xy === 'x' ? 'scrollLeft' : 'scrollTop';
  
    if (value != null) {
      element[prop] = value;
    }
  
    return element[prop];
  }
  /**
   * @typedef {Object} Scrollable
   * @property {number} clientWidth - width of scrollable area.
   * @property {number} clientHeight - height of scrollable area.
   * @property {number} scrollWidth - width of inner content.
   * @property {number} scrollHeight - height of inner content.
   * @property {number} clientX - X of scrollable area, document coordinate.
   * @property {number} clientY - T of scrollable area, document coordinate.
   */
  
  /**
   * @param {Element} element - A target element.
   * @param {boolean} [isWindow] - `true` if element is window.
   * @param {boolean} [dontScroll] - `true` makes it skip scroll that gets scrollWidth/Height.
   * @returns {Scrollable} Information for scroll.
   */
  
  
  function getScrollable(element, isWindow, dontScroll) {
    var scrollable = {};
    var cmpStyleHtml, cmpStyleBody, cmpStyleElement; // clientWidth/Height
  
    (function (target) {
      scrollable.clientWidth = target.clientWidth;
      scrollable.clientHeight = target.clientHeight;
    })(isWindow ? document.documentElement : element); // scrollWidth/Height
  
    /*
      Gecko bug, bottom-padding of element is reduced.
      Blink for Android bug, borders of <html> is rendered but those are not added to scrollW/H.
      Then, move it to max scroll position (sufficiently larger values) forcibly, and get scroll position.
    */
  
  
    var maxScrollLeft = 0,
        maxScrollTop = 0;
  
    if (!dontScroll) {
      var curScrollLeft, curScrollTop;
  
      if (isWindow) {
        curScrollLeft = scrollXYWindow(element, 'x');
        curScrollTop = scrollXYWindow(element, 'y');
        cmpStyleHtml = getComputedStyle(document.documentElement, '');
        cmpStyleBody = getComputedStyle(document.body, '');
        maxScrollLeft = scrollXYWindow(element, 'x', document.documentElement.scrollWidth + scrollable.clientWidth + // Blink for Android bug, scroll* returns size of smaller body
        ['marginLeft', 'marginRight', 'borderLeftWidth', 'borderRightWidth', 'paddingLeft', 'paddingRight'].reduce(function (len, prop) {
          return len + (parseFloat(cmpStyleHtml[prop]) || 0) + (parseFloat(cmpStyleBody[prop]) || 0);
        }, 0));
        maxScrollTop = scrollXYWindow(element, 'y', document.documentElement.scrollHeight + scrollable.clientHeight + ['marginTop', 'marginBottom', 'borderTopWidth', 'borderBottomWidth', 'paddingTop', 'paddingBottom'].reduce(function (len, prop) {
          return len + (parseFloat(cmpStyleHtml[prop]) || 0) + (parseFloat(cmpStyleBody[prop]) || 0);
        }, 0));
        scrollXYWindow(element, 'x', curScrollLeft);
        scrollXYWindow(element, 'y', curScrollTop);
      } else {
        curScrollLeft = scrollXYElement(element, 'x');
        curScrollTop = scrollXYElement(element, 'y');
        cmpStyleElement = getComputedStyle(element, '');
        maxScrollLeft = scrollXYElement(element, 'x', element.scrollWidth + scrollable.clientWidth + // Blink for Android bug, scroll* returns size of smaller body
        ['marginLeft', 'marginRight', 'borderLeftWidth', 'borderRightWidth', 'paddingLeft', 'paddingRight'].reduce(function (len, prop) {
          return len + (parseFloat(cmpStyleElement[prop]) || 0);
        }, 0));
        maxScrollTop = scrollXYElement(element, 'y', element.scrollHeight + scrollable.clientHeight + ['marginTop', 'marginBottom', 'borderTopWidth', 'borderBottomWidth', 'paddingTop', 'paddingBottom'].reduce(function (len, prop) {
          return len + (parseFloat(cmpStyleElement[prop]) || 0);
        }, 0));
        scrollXYElement(element, 'x', curScrollLeft);
        scrollXYElement(element, 'y', curScrollTop);
      }
    }
  
    scrollable.scrollWidth = scrollable.clientWidth + maxScrollLeft;
    scrollable.scrollHeight = scrollable.clientHeight + maxScrollTop; // clientX/Y
  
    var rect;
  
    if (isWindow) {
      scrollable.clientX = scrollable.clientY = 0;
    } else {
      // padding-box
      rect = element.getBoundingClientRect();
  
      if (!cmpStyleElement) {
        cmpStyleElement = getComputedStyle(element, '');
      }
  
      scrollable.clientX = rect.left + (parseFloat(cmpStyleElement.borderLeftWidth) || 0);
      scrollable.clientY = rect.top + (parseFloat(cmpStyleElement.borderTopWidth) || 0);
    }
  
    return scrollable;
  } // [/AUTO-SCROLL]
  // [DEBUG]
  
  
  window.insProps = insProps;
  window.IS_WEBKIT = IS_WEBKIT;
  window.IS_GECKO = IS_GECKO; // [SVG/]
  // [SNAP]
  
  window.SNAP_GRAVITY = SNAP_GRAVITY;
  window.SNAP_CORNER = SNAP_CORNER;
  window.SNAP_SIDE = SNAP_SIDE;
  window.SNAP_EDGE = SNAP_EDGE;
  window.SNAP_BASE = SNAP_BASE;
  window.SNAP_ALL_CORNERS = SNAP_ALL_CORNERS;
  window.SNAP_ALL_SIDES = SNAP_ALL_SIDES;
  window.SNAP_ALL_EDGES = SNAP_ALL_EDGES; // [/SNAP]
  // [AUTO-SCROLL]
  
  window.AUTOSCROLL_SPEED = AUTOSCROLL_SPEED;
  window.AUTOSCROLL_SENSITIVITY = AUTOSCROLL_SENSITIVITY; // [/AUTO-SCROLL]
  // [/DEBUG]
  
  function copyTree(obj) {
    return !obj ? obj : isObject(obj) ? Object.keys(obj).reduce(function (copyObj, key) {
      copyObj[key] = copyTree(obj[key]);
      return copyObj;
    }, {}) : Array.isArray(obj) ? obj.map(copyTree) : obj;
  }
  
  function hasChanged(a, b) {
    var typeA, keysA;
    return (0, _typeof2.default)(a) !== (0, _typeof2.default)(b) || (typeA = isObject(a) ? 'obj' : Array.isArray(a) ? 'array' : '') !== (isObject(b) ? 'obj' : Array.isArray(b) ? 'array' : '') || (typeA === 'obj' ? hasChanged(keysA = Object.keys(a).sort(), Object.keys(b).sort()) || keysA.some(function (prop) {
      return hasChanged(a[prop], b[prop]);
    }) : typeA === 'array' ? a.length !== b.length || a.some(function (aVal, i) {
      return hasChanged(aVal, b[i]);
    }) : a !== b);
  }
  /**
   * @param {Element} element - A target element.
   * @returns {boolean} `true` if connected element.
   */
  
  
  function isElement(element) {
    return !!(element && element.nodeType === Node.ELEMENT_NODE && // element instanceof HTMLElement &&
    typeof element.getBoundingClientRect === 'function' && !(element.compareDocumentPosition(document) & Node.DOCUMENT_POSITION_DISCONNECTED));
  }
  
  window.isElement = isElement; // [DEBUG/]
  
  /**
   * An object that simulates `DOMRect` to indicate a bounding-box.
   * @typedef {Object} BBox
   * @property {(number|null)} left - document coordinate
   * @property {(number|null)} top - document coordinate
   * @property {(number|null)} right - document coordinate
   * @property {(number|null)} bottom - document coordinate
   * @property {(number|null)} x - Substitutes for left
   * @property {(number|null)} y - Substitutes for top
   * @property {(number|null)} width
   * @property {(number|null)} height
   */
  
  /**
   * @param {Object} bBox - A target object.
   * @returns {(BBox|null)} A normalized `BBox`, or null if `bBox` is invalid.
   */
  
  function validBBox(bBox) {
    if (!isObject(bBox)) {
      return null;
    }
  
    var value;
  
    if (isFinite(value = bBox.left) || isFinite(value = bBox.x)) {
      bBox.left = bBox.x = value;
    } else {
      return null;
    }
  
    if (isFinite(value = bBox.top) || isFinite(value = bBox.y)) {
      bBox.top = bBox.y = value;
    } else {
      return null;
    }
  
    if (isFinite(bBox.width) && bBox.width >= 0) {
      bBox.right = bBox.left + bBox.width;
    } else if (isFinite(bBox.right) && bBox.right >= bBox.left) {
      bBox.width = bBox.right - bBox.left;
    } else {
      return null;
    }
  
    if (isFinite(bBox.height) && bBox.height >= 0) {
      bBox.bottom = bBox.top + bBox.height;
    } else if (isFinite(bBox.bottom) && bBox.bottom >= bBox.top) {
      bBox.height = bBox.bottom - bBox.top;
    } else {
      return null;
    }
  
    return bBox;
  }
  
  window.validBBox = validBBox; // [DEBUG/]
  
  /**
   * A value that is Pixels or Ratio
   * @typedef {{value: number, isRatio: boolean}} PPValue
   */
  
  function validPPValue(value) {
    // Get PPValue from string (all `/s` were already removed)
    function string2PPValue(inString) {
      var matches = /^(.+?)(%)?$/.exec(inString);
      var value, isRatio;
      return matches && isFinite(value = parseFloat(matches[1])) ? {
        value: (isRatio = !!(matches[2] && value)) ? value / 100 : value,
        isRatio: isRatio
      } : null; // 0% -> 0
    }
  
    return isFinite(value) ? {
      value: value,
      isRatio: false
    } : typeof value === 'string' ? string2PPValue(value.replace(/\s/g, '')) : null;
  }
  
  window.validPPValue = validPPValue; // [DEBUG/]
  
  function ppValue2OptionValue(ppValue) {
    return ppValue.isRatio ? "".concat(ppValue.value * 100, "%") : ppValue.value;
  }
  
  window.ppValue2OptionValue = ppValue2OptionValue; // [DEBUG/]
  
  function resolvePPValue(ppValue, baseOrigin, baseSize) {
    return typeof ppValue === 'number' ? ppValue : baseOrigin + ppValue.value * (ppValue.isRatio ? baseSize : 1);
  }
  /**
   * An object that simulates BBox but properties are PPValue.
   * @typedef {Object} PPBBox
   */
  
  /**
   * @param {Object} bBox - A target object.
   * @returns {(PPBBox|null)} A normalized `PPBBox`, or null if `bBox` is invalid.
   */
  
  
  function validPPBBox(bBox) {
    if (!isObject(bBox)) {
      return null;
    }
  
    var ppValue;
  
    if ((ppValue = validPPValue(bBox.left)) || (ppValue = validPPValue(bBox.x))) {
      bBox.left = bBox.x = ppValue;
    } else {
      return null;
    }
  
    if ((ppValue = validPPValue(bBox.top)) || (ppValue = validPPValue(bBox.y))) {
      bBox.top = bBox.y = ppValue;
    } else {
      return null;
    }
  
    if ((ppValue = validPPValue(bBox.width)) && ppValue.value >= 0) {
      bBox.width = ppValue;
      delete bBox.right;
    } else if (ppValue = validPPValue(bBox.right)) {
      bBox.right = ppValue;
      delete bBox.width;
    } else {
      return null;
    }
  
    if ((ppValue = validPPValue(bBox.height)) && ppValue.value >= 0) {
      bBox.height = ppValue;
      delete bBox.bottom;
    } else if (ppValue = validPPValue(bBox.bottom)) {
      bBox.bottom = ppValue;
      delete bBox.height;
    } else {
      return null;
    }
  
    return bBox;
  }
  
  window.validPPBBox = validPPBBox; // [DEBUG/]
  
  function ppBBox2OptionObject(ppBBox) {
    return Object.keys(ppBBox).reduce(function (obj, prop) {
      obj[prop] = ppValue2OptionValue(ppBBox[prop]);
      return obj;
    }, {});
  }
  
  window.ppBBox2OptionObject = ppBBox2OptionObject; // [DEBUG/]
  // PPBBox -> BBox
  
  function resolvePPBBox(ppBBox, baseBBox) {
    var prop2Axis = {
      left: 'x',
      right: 'x',
      x: 'x',
      width: 'x',
      top: 'y',
      bottom: 'y',
      y: 'y',
      height: 'y'
    },
        baseOriginXY = {
      x: baseBBox.left,
      y: baseBBox.top
    },
        baseSizeXY = {
      x: baseBBox.width,
      y: baseBBox.height
    };
    return validBBox(Object.keys(ppBBox).reduce(function (bBox, prop) {
      bBox[prop] = resolvePPValue(ppBBox[prop], prop === 'width' || prop === 'height' ? 0 : baseOriginXY[prop2Axis[prop]], baseSizeXY[prop2Axis[prop]]);
      return bBox;
    }, {}));
  }
  
  window.resolvePPBBox = resolvePPBBox; // [DEBUG/]
  
  /**
   * @param {Element} element - A target element.
   * @param {?boolean} getPaddingBox - Get padding-box instead of border-box as bounding-box.
   * @returns {BBox} A bounding-box of `element`.
   */
  
  function getBBox(element, getPaddingBox) {
    var rect = element.getBoundingClientRect(),
        bBox = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    };
    bBox.left += window.pageXOffset;
    bBox.top += window.pageYOffset;
  
    if (getPaddingBox) {
      var style = window.getComputedStyle(element, ''),
          borderTop = parseFloat(style.borderTopWidth) || 0,
          borderRight = parseFloat(style.borderRightWidth) || 0,
          borderBottom = parseFloat(style.borderBottomWidth) || 0,
          borderLeft = parseFloat(style.borderLeftWidth) || 0;
      bBox.left += borderLeft;
      bBox.top += borderTop;
      bBox.width -= borderLeft + borderRight;
      bBox.height -= borderTop + borderBottom;
    }
  
    return validBBox(bBox);
  }
  
  window.getBBox = getBBox; // [DEBUG/]
  
  /**
   * Optimize an element for animation.
   * @param {Element} element - A target element.
   * @param {?boolean} gpuTrigger - Initialize for SVGElement if `true`.
   * @returns {Element} A target element.
   */
  
  function initAnim(element, gpuTrigger) {
    var style = element.style;
    style.webkitTapHighlightColor = 'transparent'; // Only when it has no shadow
  
    var cssPropBoxShadow = _cssprefix.default.getName('boxShadow'),
        boxShadow = window.getComputedStyle(element, '')[cssPropBoxShadow];
  
    if (!boxShadow || boxShadow === 'none') {
      style[cssPropBoxShadow] = '0 0 1px transparent';
    }
  
    if (gpuTrigger && cssPropTransform) {
      style[cssPropTransform] = 'translateZ(0)';
    }
  
    return element;
  }
  
  function setDraggableCursor(element, orgCursor) {
    if (cssValueDraggableCursor == null) {
      if (cssWantedValueDraggableCursor !== false) {
        cssValueDraggableCursor = _cssprefix.default.getValue('cursor', cssWantedValueDraggableCursor);
      } // The wanted value was denied, or changing is not wanted.
  
  
      if (cssValueDraggableCursor == null) {
        cssValueDraggableCursor = false;
      }
    } // Update it to change a state even if cssValueDraggableCursor is false.
  
  
    element.style.cursor = cssValueDraggableCursor === false ? orgCursor : cssValueDraggableCursor;
  }
  
  function setDraggingCursor(element) {
    if (cssValueDraggingCursor == null) {
      if (cssWantedValueDraggingCursor !== false) {
        cssValueDraggingCursor = _cssprefix.default.getValue('cursor', cssWantedValueDraggingCursor);
      } // The wanted value was denied, or changing is not wanted.
  
  
      if (cssValueDraggingCursor == null) {
        cssValueDraggingCursor = false;
      }
    }
  
    if (cssValueDraggingCursor !== false) {
      element.style.cursor = cssValueDraggingCursor;
    }
  } // [SVG]
  
  /**
   * Get SVG coordinates from viewport coordinates.
   * @param {props} props - `props` of instance.
   * @param {number} clientX - viewport X.
   * @param {number} clientY - viewport Y.
   * @returns {SVGPoint} SVG coordinates.
   */
  
  
  function viewPoint2SvgPoint(props, clientX, clientY) {
    var svgPoint = props.svgPoint;
    svgPoint.x = clientX;
    svgPoint.y = clientY;
    return svgPoint.matrixTransform(props.svgCtmElement.getScreenCTM().inverse());
  } // [/SVG]
  
  /**
   * Move by `translate`.
   * @param {props} props - `props` of instance.
   * @param {{left: number, top: number}} position - New position.
   * @returns {boolean} `true` if it was moved.
   */
  
  
  function moveTranslate(props, position) {
    var elementBBox = props.elementBBox;
  
    if (position.left !== elementBBox.left || position.top !== elementBBox.top) {
      var offset = props.htmlOffset;
      props.elementStyle[cssPropTransform] = "translate(".concat(position.left + offset.left, "px, ").concat(position.top + offset.top, "px)");
      return true;
    }
  
    return false;
  } // [LEFTTOP]
  
  /**
   * Move by `left` and `top`.
   * @param {props} props - `props` of instance.
   * @param {{left: number, top: number}} position - New position.
   * @returns {boolean} `true` if it was moved.
   */
  
  
  function moveLeftTop(props, position) {
    var elementBBox = props.elementBBox,
        elementStyle = props.elementStyle,
        offset = props.htmlOffset;
    var moved = false;
  
    if (position.left !== elementBBox.left) {
      elementStyle.left = position.left + offset.left + 'px';
      moved = true;
    }
  
    if (position.top !== elementBBox.top) {
      elementStyle.top = position.top + offset.top + 'px';
      moved = true;
    }
  
    return moved;
  } // [/LEFTTOP]
  // [SVG]
  
  /**
   * Move SVGElement.
   * @param {props} props - `props` of instance.
   * @param {{left: number, top: number}} position - New position.
   * @returns {boolean} `true` if it was moved.
   */
  
  
  function moveSvg(props, position) {
    var elementBBox = props.elementBBox;
  
    if (position.left !== elementBBox.left || position.top !== elementBBox.top) {
      var offset = props.svgOffset,
          originBBox = props.svgOriginBBox,
          point = viewPoint2SvgPoint(props, position.left - window.pageXOffset, position.top - window.pageYOffset);
      props.svgTransform.setTranslate(point.x + offset.x - originBBox.x, point.y + offset.y - originBBox.y);
      return true;
    }
  
    return false;
  } // [/SVG]
  
  /**
   * Set `props.element` position.
   * @param {props} props - `props` of instance.
   * @param {{left: number, top: number}} position - New position.
   * @param {function} [cbCheck] - Callback that is called with valid position, cancel moving if it returns `false`.
   * @returns {boolean} `true` if it was moved.
   */
  
  
  function move(props, position, cbCheck) {
    var elementBBox = props.elementBBox;
  
    function fix() {
      if (props.minLeft >= props.maxLeft) {
        // Disabled
        position.left = elementBBox.left;
      } else if (position.left < props.minLeft) {
        position.left = props.minLeft;
      } else if (position.left > props.maxLeft) {
        position.left = props.maxLeft;
      }
  
      if (props.minTop >= props.maxTop) {
        // Disabled
        position.top = elementBBox.top;
      } else if (position.top < props.minTop) {
        position.top = props.minTop;
      } else if (position.top > props.maxTop) {
        position.top = props.maxTop;
      }
    }
  
    fix();
  
    if (cbCheck) {
      if (cbCheck(position) === false) {
        return false;
      }
  
      fix(); // Again
    }
  
    var moved = props.moveElm(props, position);
  
    if (moved) {
      // Update elementBBox
      props.elementBBox = validBBox({
        left: position.left,
        top: position.top,
        width: elementBBox.width,
        height: elementBBox.height
      });
    }
  
    return moved;
  }
  /**
   * Initialize HTMLElement for `translate`, and get `offset` that is used by `moveTranslate`.
   * @param {props} props - `props` of instance.
   * @returns {BBox} Current BBox without animation, i.e. left/top properties.
   */
  
  
  function initTranslate(props) {
    var element = props.element,
        elementStyle = props.elementStyle,
        curPosition = getBBox(element),
        // Get BBox before change style.
    RESTORE_PROPS = ['display', 'marginTop', 'marginBottom', 'width', 'height'];
    RESTORE_PROPS.unshift(cssPropTransform); // Reset `transition-property` every time because it might be changed frequently.
  
    var orgTransitionProperty = elementStyle[cssPropTransitionProperty];
    elementStyle[cssPropTransitionProperty] = 'none'; // Disable animation
  
    var fixPosition = getBBox(element);
  
    if (!props.orgStyle) {
      props.orgStyle = RESTORE_PROPS.reduce(function (orgStyle, prop) {
        orgStyle[prop] = elementStyle[prop] || '';
        return orgStyle;
      }, {});
      props.lastStyle = {};
    } else {
      RESTORE_PROPS.forEach(function (prop) {
        // Skip this if it seems user changed it. (it can't check perfectly.)
        if (props.lastStyle[prop] == null || elementStyle[prop] === props.lastStyle[prop]) {
          elementStyle[prop] = props.orgStyle[prop];
        }
      });
    }
  
    var orgSize = getBBox(element),
        cmpStyle = window.getComputedStyle(element, ''); // https://www.w3.org/TR/css-transforms-1/#transformable-element
  
    if (cmpStyle.display === 'inline') {
      elementStyle.display = 'inline-block';
      ['Top', 'Bottom'].forEach(function (dirProp) {
        var padding = parseFloat(cmpStyle["padding".concat(dirProp)]); // paddingTop/Bottom make padding but don't make space -> negative margin in inline-block
        // marginTop/Bottom don't work in inline element -> `0` in inline-block
  
        elementStyle["margin".concat(dirProp)] = padding ? "-".concat(padding, "px") : '0';
      });
    }
  
    elementStyle[cssPropTransform] = 'translate(0, 0)'; // Get document offset.
  
    var newBBox = getBBox(element);
    var offset = props.htmlOffset = {
      left: newBBox.left ? -newBBox.left : 0,
      top: newBBox.top ? -newBBox.top : 0
    }; // avoid `-0`
    // Restore position
  
    elementStyle[cssPropTransform] = "translate(".concat(curPosition.left + offset.left, "px, ").concat(curPosition.top + offset.top, "px)"); // Restore size
  
    ['width', 'height'].forEach(function (prop) {
      if (newBBox[prop] !== orgSize[prop]) {
        // Ignore `box-sizing`
        elementStyle[prop] = orgSize[prop] + 'px';
        newBBox = getBBox(element);
  
        if (newBBox[prop] !== orgSize[prop]) {
          // Retry
          elementStyle[prop] = orgSize[prop] - (newBBox[prop] - orgSize[prop]) + 'px';
        }
      }
  
      props.lastStyle[prop] = elementStyle[prop];
    }); // Restore `transition-property`
  
    element.offsetWidth;
    /* force reflow */
    // eslint-disable-line no-unused-expressions
  
    elementStyle[cssPropTransitionProperty] = orgTransitionProperty;
  
    if (fixPosition.left !== curPosition.left || fixPosition.top !== curPosition.top) {
      // It seems that it is moving.
      elementStyle[cssPropTransform] = "translate(".concat(fixPosition.left + offset.left, "px, ").concat(fixPosition.top + offset.top, "px)");
    }
  
    return fixPosition;
  } // [LEFTTOP]
  
  /**
   * Initialize HTMLElement for `left` and `top`, and get `offset` that is used by `moveLeftTop`.
   * @param {props} props - `props` of instance.
   * @returns {BBox} Current BBox without animation, i.e. left/top properties.
   */
  
  
  function initLeftTop(props) {
    var element = props.element,
        elementStyle = props.elementStyle,
        curPosition = getBBox(element),
        // Get BBox before change style.
    RESTORE_PROPS = ['position', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'width', 'height']; // Reset `transition-property` every time because it might be changed frequently.
  
    var orgTransitionProperty = elementStyle[cssPropTransitionProperty];
    elementStyle[cssPropTransitionProperty] = 'none'; // Disable animation
  
    var fixPosition = getBBox(element);
  
    if (!props.orgStyle) {
      props.orgStyle = RESTORE_PROPS.reduce(function (orgStyle, prop) {
        orgStyle[prop] = elementStyle[prop] || '';
        return orgStyle;
      }, {});
      props.lastStyle = {};
    } else {
      RESTORE_PROPS.forEach(function (prop) {
        // Skip this if it seems user changed it. (it can't check perfectly.)
        if (props.lastStyle[prop] == null || elementStyle[prop] === props.lastStyle[prop]) {
          elementStyle[prop] = props.orgStyle[prop];
        }
      });
    }
  
    var orgSize = getBBox(element);
    elementStyle.position = 'absolute';
    elementStyle.left = elementStyle.top = elementStyle.margin = '0'; // Get document offset.
  
    var newBBox = getBBox(element);
    var offset = props.htmlOffset = {
      left: newBBox.left ? -newBBox.left : 0,
      top: newBBox.top ? -newBBox.top : 0
    }; // avoid `-0`
    // Restore position
  
    elementStyle.left = curPosition.left + offset.left + 'px';
    elementStyle.top = curPosition.top + offset.top + 'px'; // Restore size
  
    ['width', 'height'].forEach(function (prop) {
      if (newBBox[prop] !== orgSize[prop]) {
        // Ignore `box-sizing`
        elementStyle[prop] = orgSize[prop] + 'px';
        newBBox = getBBox(element);
  
        if (newBBox[prop] !== orgSize[prop]) {
          // Retry
          elementStyle[prop] = orgSize[prop] - (newBBox[prop] - orgSize[prop]) + 'px';
        }
      }
  
      props.lastStyle[prop] = elementStyle[prop];
    }); // Restore `transition-property`
  
    element.offsetWidth;
    /* force reflow */
    // eslint-disable-line no-unused-expressions
  
    elementStyle[cssPropTransitionProperty] = orgTransitionProperty;
  
    if (fixPosition.left !== curPosition.left || fixPosition.top !== curPosition.top) {
      // It seems that it is moving.
      elementStyle.left = fixPosition.left + offset.left + 'px';
      elementStyle.top = fixPosition.top + offset.top + 'px';
    }
  
    return fixPosition;
  } // [/LEFTTOP]
  // [SVG]
  
  /**
   * Initialize SVGElement, and get `offset` that is used by `moveSvg`.
   * @param {props} props - `props` of instance.
   * @returns {BBox} Current BBox without animation, i.e. left/top properties.
   */
  
  
  function initSvg(props) {
    var element = props.element,
        svgTransform = props.svgTransform,
        curRect = element.getBoundingClientRect(),
        // Get Rect before change position.
    fixPosition = getBBox(element);
    svgTransform.setTranslate(0, 0);
    var originBBox = props.svgOriginBBox = element.getBBox(),
        // Try to get SVG coordinates of current position.
    newRect = element.getBoundingClientRect(),
        originPoint = viewPoint2SvgPoint(props, newRect.left, newRect.top),
        // Gecko bug, getScreenCTM returns incorrect CTM, and originPoint might not be current position.
    offset = props.svgOffset = {
      x: originBBox.x - originPoint.x,
      y: originBBox.y - originPoint.y
    },
        // Restore position
    curPoint = viewPoint2SvgPoint(props, curRect.left, curRect.top);
    svgTransform.setTranslate(curPoint.x + offset.x - originBBox.x, curPoint.y + offset.y - originBBox.y);
    return fixPosition;
  } // [/SVG]
  
  /**
   * Set `elementBBox`, `containmentBBox`, `min/max``Left/Top` and `snapTargets`.
   * @param {props} props - `props` of instance.
   * @param {string} [eventType] - A type of event that kicked this method.
   * @returns {void}
   */
  
  
  function initBBox(props, eventType) {
    // eslint-disable-line no-unused-vars
    var docBBox = getBBox(document.documentElement),
        elementBBox = props.elementBBox = props.initElm(props),
        // reset offset etc.
    containmentBBox = props.containmentBBox = props.containmentIsBBox ? resolvePPBBox(props.options.containment, docBBox) || docBBox : getBBox(props.options.containment, true);
    props.minLeft = containmentBBox.left;
    props.maxLeft = containmentBBox.right - elementBBox.width;
    props.minTop = containmentBBox.top;
    props.maxTop = containmentBBox.bottom - elementBBox.height; // Adjust position
  
    move(props, {
      left: elementBBox.left,
      top: elementBBox.top
    }); // [SNAP]
    // Snap-targets
  
    /**
     * @typedef {Object} SnapTarget
     * @property {number} [x] - A coordinate it moves to. It has x or y or both.
     * @property {number} [y]
     * @property {number} [gravityXStart] - Gravity zone. It has *Start or *End or both, and *X* or *Y* or both.
     * @property {number} [gravityXEnd]
     * @property {number} [gravityYStart]
     * @property {number} [gravityYEnd]
     */
  
    if (props.parsedSnapTargets) {
      var elementSizeXY = {
        x: elementBBox.width,
        y: elementBBox.height
      },
          minXY = {
        x: props.minLeft,
        y: props.minTop
      },
          maxXY = {
        x: props.maxLeft,
        y: props.maxTop
      },
          prop2Axis = {
        left: 'x',
        right: 'x',
        x: 'x',
        width: 'x',
        xStart: 'x',
        xEnd: 'x',
        xStep: 'x',
        top: 'y',
        bottom: 'y',
        y: 'y',
        height: 'y',
        yStart: 'y',
        yEnd: 'y',
        yStep: 'y'
      },
          snapTargets = props.parsedSnapTargets.reduce(function (snapTargets, parsedSnapTarget) {
        var baseRect = parsedSnapTarget.base === 'containment' ? containmentBBox : docBBox,
            baseOriginXY = {
          x: baseRect.left,
          y: baseRect.top
        },
            baseSizeXY = {
          x: baseRect.width,
          y: baseRect.height
        };
        /**
         * Basically, shallow copy from parsedSnapTarget, and it can have resolved values.
         * @typedef {{x: (number|PPValue), y, xStart, xEnd, xStep, yStart, yEnd, yStep}} TargetXY
         * @property {string[]} [corners] - Applied value.
         * @property {string[]} [sides]
         * @property {boolean} center
         * @property {number} [xGravity] - Override parsedSnapTarget.gravity.
         * @property {number} [yGravity]
         */
        // Add single Point or Line (i.e. targetXY has no *Step)
  
        function addSnapTarget(targetXY) {
          if (targetXY.center == null) {
            targetXY.center = parsedSnapTarget.center;
          }
  
          if (targetXY.xGravity == null) {
            targetXY.xGravity = parsedSnapTarget.gravity;
          }
  
          if (targetXY.yGravity == null) {
            targetXY.yGravity = parsedSnapTarget.gravity;
          }
  
          if (targetXY.x != null && targetXY.y != null) {
            // Point
            targetXY.x = resolvePPValue(targetXY.x, baseOriginXY.x, baseSizeXY.x);
            targetXY.y = resolvePPValue(targetXY.y, baseOriginXY.y, baseSizeXY.y);
  
            if (targetXY.center) {
              targetXY.x -= elementSizeXY.x / 2;
              targetXY.y -= elementSizeXY.y / 2;
              targetXY.corners = ['tl'];
            }
  
            (targetXY.corners || parsedSnapTarget.corners).forEach(function (corner) {
              var x = targetXY.x - (corner === 'tr' || corner === 'br' ? elementSizeXY.x : 0),
                  y = targetXY.y - (corner === 'bl' || corner === 'br' ? elementSizeXY.y : 0);
  
              if (x >= minXY.x && x <= maxXY.x && y >= minXY.y && y <= maxXY.y) {
                var snapTarget = {
                  x: x,
                  y: y
                },
                    gravityXStart = x - targetXY.xGravity,
                    gravityXEnd = x + targetXY.xGravity,
                    gravityYStart = y - targetXY.yGravity,
                    gravityYEnd = y + targetXY.yGravity;
  
                if (gravityXStart > minXY.x) {
                  snapTarget.gravityXStart = gravityXStart;
                }
  
                if (gravityXEnd < maxXY.x) {
                  snapTarget.gravityXEnd = gravityXEnd;
                }
  
                if (gravityYStart > minXY.y) {
                  snapTarget.gravityYStart = gravityYStart;
                }
  
                if (gravityYEnd < maxXY.y) {
                  snapTarget.gravityYEnd = gravityYEnd;
                }
  
                snapTargets.push(snapTarget);
              }
            });
          } else {
            // Line
            var specAxis = targetXY.x != null ? 'x' : 'y',
                rangeAxis = specAxis === 'x' ? 'y' : 'x',
                startProp = "".concat(rangeAxis, "Start"),
                endProp = "".concat(rangeAxis, "End"),
                gravityProp = "".concat(specAxis, "Gravity"),
                specAxisL = specAxis.toUpperCase(),
                rangeAxisL = rangeAxis.toUpperCase(),
                gravitySpecStartProp = "gravity".concat(specAxisL, "Start"),
                gravitySpecEndProp = "gravity".concat(specAxisL, "End"),
                gravityRangeStartProp = "gravity".concat(rangeAxisL, "Start"),
                gravityRangeEndProp = "gravity".concat(rangeAxisL, "End");
            targetXY[specAxis] = resolvePPValue(targetXY[specAxis], baseOriginXY[specAxis], baseSizeXY[specAxis]);
            targetXY[startProp] = resolvePPValue(targetXY[startProp], baseOriginXY[rangeAxis], baseSizeXY[rangeAxis]);
            targetXY[endProp] = resolvePPValue(targetXY[endProp], baseOriginXY[rangeAxis], baseSizeXY[rangeAxis]) - elementSizeXY[rangeAxis]; // Reduce the end of the line.
  
            if (targetXY[startProp] > targetXY[endProp] || // Smaller than element size.
            targetXY[startProp] > maxXY[rangeAxis] || targetXY[endProp] < minXY[rangeAxis]) {
              return;
            }
  
            if (targetXY.center) {
              targetXY[specAxis] -= elementSizeXY[specAxis] / 2;
              targetXY.sides = ['start'];
            }
  
            (targetXY.sides || parsedSnapTarget.sides).forEach(function (side) {
              var xy = targetXY[specAxis] - (side === 'end' ? elementSizeXY[specAxis] : 0);
  
              if (xy >= minXY[specAxis] && xy <= maxXY[specAxis]) {
                var snapTarget = {},
                    gravitySpecStart = xy - targetXY[gravityProp],
                    gravitySpecEnd = xy + targetXY[gravityProp];
                snapTarget[specAxis] = xy;
  
                if (gravitySpecStart > minXY[specAxis]) {
                  snapTarget[gravitySpecStartProp] = gravitySpecStart;
                }
  
                if (gravitySpecEnd < maxXY[specAxis]) {
                  snapTarget[gravitySpecEndProp] = gravitySpecEnd;
                }
  
                if (targetXY[startProp] > minXY[rangeAxis]) {
                  snapTarget[gravityRangeStartProp] = targetXY[startProp];
                }
  
                if (targetXY[endProp] < maxXY[rangeAxis]) {
                  snapTarget[gravityRangeEndProp] = targetXY[endProp];
                }
  
                snapTargets.push(snapTarget);
              }
            });
          }
        }
  
        var bBox;
  
        if ((bBox = parsedSnapTarget.element ? getBBox(parsedSnapTarget.element) : null) || // Element
        parsedSnapTarget.ppBBox) {
          if (parsedSnapTarget.ppBBox) {
            bBox = resolvePPBBox(parsedSnapTarget.ppBBox, baseRect);
          } // BBox
  
  
          if (bBox) {
            // Drop invalid BBox.
            // Expand into 4 lines.
            parsedSnapTarget.edges.forEach(function (edge) {
              var lengthenX = parsedSnapTarget.gravity,
                  lengthenY = parsedSnapTarget.gravity;
  
              if (edge === 'outside') {
                // Snap it when a part of the element is part of the range.
                lengthenX += elementBBox.width;
                lengthenY += elementBBox.height;
              }
  
              var xStart = bBox.left - lengthenX,
                  xEnd = bBox.right + lengthenX,
                  yStart = bBox.top - lengthenY,
                  yEnd = bBox.bottom + lengthenY;
              var side = edge === 'inside' ? 'start' : 'end';
              addSnapTarget({
                xStart: xStart,
                xEnd: xEnd,
                y: bBox.top,
                sides: [side],
                center: false
              }); // Top
  
              addSnapTarget({
                x: bBox.left,
                yStart: yStart,
                yEnd: yEnd,
                sides: [side],
                center: false
              }); // Left
  
              side = edge === 'inside' ? 'end' : 'start';
              addSnapTarget({
                xStart: xStart,
                xEnd: xEnd,
                y: bBox.bottom,
                sides: [side],
                center: false
              }); // Bottom
  
              addSnapTarget({
                x: bBox.right,
                yStart: yStart,
                yEnd: yEnd,
                sides: [side],
                center: false
              }); // Right
            });
          }
        } else {
          var expanded = [['x', 'y', 'xStart', 'xEnd', 'xStep', 'yStart', 'yEnd', 'yStep'].reduce(function (targetXY, prop) {
            if (parsedSnapTarget[prop]) {
              targetXY[prop] = resolvePPValue(parsedSnapTarget[prop], prop === 'xStep' || prop === 'yStep' ? 0 : baseOriginXY[prop2Axis[prop]], baseSizeXY[prop2Axis[prop]]);
            }
  
            return targetXY;
          }, {})];
          ['x', 'y'].forEach(function (axis) {
            var startProp = "".concat(axis, "Start"),
                endProp = "".concat(axis, "End"),
                stepProp = "".concat(axis, "Step"),
                gravityProp = "".concat(axis, "Gravity");
            expanded = expanded.reduce(function (expanded, targetXY) {
              var start = targetXY[startProp],
                  end = targetXY[endProp],
                  step = targetXY[stepProp];
  
              if (start != null && end != null && start >= end) {
                return expanded;
              } // start >= end
  
  
              if (step != null) {
                if (step < 2) {
                  return expanded;
                } // step >= 2px -> Expand by step
  
  
                var gravity = step / 2; // max
  
                gravity = parsedSnapTarget.gravity > gravity ? gravity : null;
  
                for (var curValue = start; curValue <= end; curValue += step) {
                  var expandedXY = Object.keys(targetXY).reduce(function (expandedXY, prop) {
                    if (prop !== startProp && prop !== endProp && prop !== stepProp) {
                      expandedXY[prop] = targetXY[prop];
                    }
  
                    return expandedXY;
                  }, {});
                  expandedXY[axis] = curValue;
                  expandedXY[gravityProp] = gravity;
                  expanded.push(expandedXY);
                }
              } else {
                expanded.push(targetXY);
              }
  
              return expanded;
            }, []);
          });
          expanded.forEach(function (targetXY) {
            addSnapTarget(targetXY);
          });
        }
  
        return snapTargets;
      }, []);
      props.snapTargets = snapTargets.length ? snapTargets : null;
    } // [/SNAP]
    // [AUTO-SCROLL]
  
  
    var autoScroll = {},
        autoScrollOptions = props.options.autoScroll;
  
    if (autoScrollOptions) {
      autoScroll.isWindow = autoScrollOptions.target === window;
      autoScroll.target = autoScrollOptions.target;
      var dontScroll = eventType === 'scroll',
          // Avoid duplicated calling
      scrollable = getScrollable(autoScrollOptions.target, autoScroll.isWindow, dontScroll),
          scrollableBBox = validBBox({
        left: scrollable.clientX,
        top: scrollable.clientY,
        width: scrollable.clientWidth,
        height: scrollable.clientHeight
      });
      autoScroll.scrollableBBox = scrollableBBox; // [DEBUG/]
  
      if (!dontScroll) {
        autoScroll.scrollWidth = scrollable.scrollWidth;
        autoScroll.scrollHeight = scrollable.scrollHeight;
      } else if (props.autoScroll) {
        autoScroll.scrollWidth = props.autoScroll.scrollWidth;
        autoScroll.scrollHeight = props.autoScroll.scrollHeight;
      }
  
      [['X', 'Width', 'left', 'right'], ['Y', 'Height', 'top', 'bottom']].forEach(function (axis) {
        var xy = axis[0],
            wh = axis[1],
            back = axis[2],
            forward = axis[3],
            maxAbs = (autoScroll["scroll".concat(wh)] || 0) - scrollable["client".concat(wh)],
            min = autoScrollOptions["min".concat(xy)] || 0;
        var max = isFinite(autoScrollOptions["max".concat(xy)]) ? autoScrollOptions["max".concat(xy)] : maxAbs;
  
        if (min < max && min < maxAbs) {
          if (max > maxAbs) {
            max = maxAbs;
          }
  
          var lines = [],
              elementSize = elementBBox[wh.toLowerCase()];
  
          for (var i = autoScrollOptions.sensitivity.length - 1; i >= 0; i--) {
            // near -> far
            var sensitivity = autoScrollOptions.sensitivity[i],
                speed = autoScrollOptions.speed[i]; // back
  
            lines.push({
              dir: -1,
              speed: speed,
              position: scrollableBBox[back] + sensitivity
            }); // forward
  
            lines.push({
              dir: 1,
              speed: speed,
              position: scrollableBBox[forward] - sensitivity - elementSize
            });
          }
  
          autoScroll[xy.toLowerCase()] = {
            min: min,
            max: max,
            lines: lines
          };
        }
      });
    }
  
    props.autoScroll = autoScroll.x || autoScroll.y ? autoScroll : null; // [/AUTO-SCROLL]
  
    window.initBBoxDone = true; // [DEBUG/]
  }
  /**
   * @param {props} props - `props` of instance.
   * @returns {void}
   */
  
  
  function dragEnd(props) {
    scrollFrame.stop(); // [AUTO-SCROLL/]
  
    setDraggableCursor(props.options.handle, props.orgCursor);
    body.style.cursor = cssOrgValueBodyCursor;
  
    if (props.options.zIndex !== false) {
      props.elementStyle.zIndex = props.orgZIndex;
    }
  
    if (cssPropUserSelect) {
      body.style[cssPropUserSelect] = cssOrgValueBodyUserSelect;
    }
  
    var classList = (0, _mClassList.default)(props.element);
  
    if (movingClass) {
      classList.remove(movingClass);
    }
  
    if (draggingClass) {
      classList.remove(draggingClass);
    }
  
    activeProps = null;
    pointerEvent.cancel(); // Reset pointer (activeProps must be null because this calls endHandler)
  
    if (props.onDragEnd) {
      props.onDragEnd({
        left: props.elementBBox.left,
        top: props.elementBBox.top
      });
    }
  }
  /**
   * @param {props} props - `props` of instance.
   * @param {{clientX, clientY}} pointerXY - This might be MouseEvent, Touch of TouchEvent or Object.
   * @returns {boolean} `true` if it started.
   */
  
  
  function dragStart(props, pointerXY) {
    if (props.disabled) {
      return false;
    }
  
    if (props.onDragStart && props.onDragStart(pointerXY) === false) {
      return false;
    }
  
    if (activeProps) {
      dragEnd(activeProps);
    } // activeItem is normally null by pointerEvent.end.
  
  
    setDraggingCursor(props.options.handle);
    body.style.cursor = cssValueDraggingCursor || // If it is `false` or `''`
    window.getComputedStyle(props.options.handle, '').cursor;
  
    if (props.options.zIndex !== false) {
      props.elementStyle.zIndex = props.options.zIndex;
    }
  
    if (cssPropUserSelect) {
      body.style[cssPropUserSelect] = 'none';
    }
  
    if (draggingClass) {
      (0, _mClassList.default)(props.element).add(draggingClass);
    }
  
    activeProps = props;
    hasMoved = false;
    pointerOffset.left = props.elementBBox.left - (pointerXY.clientX + window.pageXOffset);
    pointerOffset.top = props.elementBBox.top - (pointerXY.clientY + window.pageYOffset);
    return true;
  }
  /**
   * @param {props} props - `props` of instance.
   * @param {Object} newOptions - New options.
   * @returns {void}
   */
  
  
  function _setOptions(props, newOptions) {
    var options = props.options;
    var needsInitBBox; // containment
  
    if (newOptions.containment) {
      var bBox;
  
      if (isElement(newOptions.containment)) {
        // Specific element
        if (newOptions.containment !== options.containment) {
          options.containment = newOptions.containment;
          props.containmentIsBBox = false;
          needsInitBBox = true;
        }
      } else if ((bBox = validPPBBox(copyTree(newOptions.containment))) && // bBox
      hasChanged(bBox, options.containment)) {
        options.containment = bBox;
        props.containmentIsBBox = true;
        needsInitBBox = true;
      }
    } // [SNAP]
  
    /**
     * @typedef {Object} SnapOptions
     * @property {SnapTargetOptions[]} targets
     * @property {number} [gravity]
     * @property {string} [corner]
     * @property {string} [side]
     * @property {boolean} [center]
     * @property {string} [edge]
     * @property {string} [base]
     */
  
    /**
     * @typedef {Object} SnapTargetOptions
     * @property {(number|string)} [x] - pixels | '<n>%' | {start, end} | {step, start, end}
     * @property {(number|string)} [y]
     * @property {(Element|Object)} [boundingBox] - Object has properties that are string or number from PPBBox.
     * @property {number} [gravity]
     * @property {string} [corner]
     * @property {string} [side]
     * @property {boolean} [center]
     * @property {string} [edge]
     * @property {string} [base]
     */
  
    /**
     * @typedef {Object} ParsedSnapTarget
     * @property {PPValue} [x] - (input: pixels | '<n>%')
     * @property {PPValue} [y]
     * @property {PPValue} [xStart] - (input: {start, end} | {step, start, end})
     * @property {PPValue} [xEnd]
     * @property {PPValue} [xStep] - (input: {step, start, end})
     * @property {PPValue} [yStart]
     * @property {PPValue} [yEnd]
     * @property {PPValue} [yStep]
     * @property {Element} [element]
     * @property {PPBBox} [ppBBox]
     * @property {number} gravity
     * @property {string[]} corners
     * @property {string[]} sides
     * @property {boolean} center
     * @property {string[]} edges
     * @property {string} base
     */
    // Normalize `gravity`, `corner`, `side`, `center`, `edge`, `base`
  
  
    function commonSnapOptions(options, newOptions) {
      function cleanString(inString) {
        return typeof inString === 'string' ? inString.replace(/[, ]+/g, ' ').trim().toLowerCase() : null;
      } // gravity
  
  
      if (isFinite(newOptions.gravity) && newOptions.gravity > 0) {
        options.gravity = newOptions.gravity;
      } // corner
  
  
      var corner = cleanString(newOptions.corner);
  
      if (corner) {
        if (corner !== 'all') {
          var added = {},
              corners = corner.split(/\s/).reduce(function (corners, corner) {
            corner = corner.trim().replace(/^(.).*?-(.).*$/, '$1$2');
  
            if ((corner = corner === 'tl' || corner === 'lt' ? 'tl' : corner === 'tr' || corner === 'rt' ? 'tr' : corner === 'bl' || corner === 'lb' ? 'bl' : corner === 'br' || corner === 'rb' ? 'br' : null) && !added[corner]) {
              corners.push(corner);
              added[corner] = true;
            }
  
            return corners;
          }, []),
              cornersLen = corners.length;
          corner = !cornersLen ? null : cornersLen === 4 ? 'all' : corners.join(' ');
        }
  
        if (corner) {
          options.corner = corner;
        }
      } // side
  
  
      var side = cleanString(newOptions.side);
  
      if (side) {
        if (side === 'start' || side === 'end' || side === 'both') {
          options.side = side;
        } else if (side === 'start end' || side === 'end start') {
          options.side = 'both';
        }
      } // center
  
  
      if (typeof newOptions.center === 'boolean') {
        options.center = newOptions.center;
      } // edge
  
  
      var edge = cleanString(newOptions.edge);
  
      if (edge) {
        if (edge === 'inside' || edge === 'outside' || edge === 'both') {
          options.edge = edge;
        } else if (edge === 'inside outside' || edge === 'outside inside') {
          options.edge = 'both';
        }
      } // base
  
  
      var base = typeof newOptions.base === 'string' ? newOptions.base.trim().toLowerCase() : null;
  
      if (base && (base === 'containment' || base === 'document')) {
        options.base = base;
      }
  
      return options;
    }
  
    window.commonSnapOptions = commonSnapOptions; // [DEBUG/]
    // snap
  
    if (newOptions.snap != null) {
      var newSnapOptions = isObject(newOptions.snap) && newOptions.snap.targets != null ? newOptions.snap : {
        targets: newOptions.snap
      },
          snapTargetsOptions = [],
          snapOptions = commonSnapOptions({
        targets: snapTargetsOptions
      }, newSnapOptions); // Set default options into top level.
  
      if (!snapOptions.gravity) {
        snapOptions.gravity = SNAP_GRAVITY;
      }
  
      if (!snapOptions.corner) {
        snapOptions.corner = SNAP_CORNER;
      }
  
      if (!snapOptions.side) {
        snapOptions.side = SNAP_SIDE;
      }
  
      if (typeof snapOptions.center !== 'boolean') {
        snapOptions.center = false;
      }
  
      if (!snapOptions.edge) {
        snapOptions.edge = SNAP_EDGE;
      }
  
      if (!snapOptions.base) {
        snapOptions.base = SNAP_BASE;
      }
  
      var parsedSnapTargets = (Array.isArray(newSnapOptions.targets) ? newSnapOptions.targets : [newSnapOptions.targets]).reduce(function (parsedSnapTargets, target) {
        if (target == null) {
          return parsedSnapTargets;
        }
  
        var isElementPre = isElement(target),
            // Pre-check direct value
        ppBBoxPre = validPPBBox(copyTree(target)),
            // Pre-check direct value
        newSnapTargetOptions = isElementPre || ppBBoxPre ? {
          boundingBox: target
        } : // Direct Element | PPBBox
        isObject(target) && target.start == null && target.end == null && target.step == null ? target : // SnapTargetOptions
        {
          x: target,
          y: target
        },
            // Others, it might be {step, start, end}
        expandedParsedSnapTargets = [],
            snapTargetOptions = {},
            newOptionsBBox = newSnapTargetOptions.boundingBox;
        var ppBBox;
  
        if (isElementPre || isElement(newOptionsBBox)) {
          // Element
          expandedParsedSnapTargets.push({
            element: newOptionsBBox
          });
          snapTargetOptions.boundingBox = newOptionsBBox;
        } else if (ppBBox = ppBBoxPre || validPPBBox(copyTree(newOptionsBBox))) {
          // Object -> PPBBox
          expandedParsedSnapTargets.push({
            ppBBox: ppBBox
          });
          snapTargetOptions.boundingBox = ppBBox2OptionObject(ppBBox);
        } else {
          var invalid; // `true` if valid PPValue was given but the contained value is invalid.
  
          var parsedXY = ['x', 'y'].reduce(function (parsedXY, axis) {
            var newOptionsXY = newSnapTargetOptions[axis];
            var ppValue;
  
            if (ppValue = validPPValue(newOptionsXY)) {
              // pixels | '<n>%'
              parsedXY[axis] = ppValue;
              snapTargetOptions[axis] = ppValue2OptionValue(ppValue);
            } else {
              // {start, end} | {step, start, end}
              var start, end, step;
  
              if (isObject(newOptionsXY)) {
                start = validPPValue(newOptionsXY.start);
                end = validPPValue(newOptionsXY.end);
                step = validPPValue(newOptionsXY.step);
  
                if (start && end && start.isRatio === end.isRatio && start.value >= end.value) {
                  // start >= end
                  invalid = true;
                }
              }
  
              start = parsedXY["".concat(axis, "Start")] = start || {
                value: 0,
                isRatio: false
              };
              end = parsedXY["".concat(axis, "End")] = end || {
                value: 1,
                isRatio: true
              };
              snapTargetOptions[axis] = {
                start: ppValue2OptionValue(start),
                end: ppValue2OptionValue(end)
              };
  
              if (step) {
                if (step.isRatio ? step.value > 0 : step.value >= 2) {
                  // step > 0% || step >= 2px
                  parsedXY["".concat(axis, "Step")] = step;
                  snapTargetOptions[axis].step = ppValue2OptionValue(step);
                } else {
                  invalid = true;
                }
              }
            }
  
            return parsedXY;
          }, {});
  
          if (invalid) {
            return parsedSnapTargets;
          }
  
          if (parsedXY.xStart && !parsedXY.xStep && parsedXY.yStart && !parsedXY.yStep) {
            // Expand into 4 lines. This is not BBox, and `edge` is ignored.
            expandedParsedSnapTargets.push({
              xStart: parsedXY.xStart,
              xEnd: parsedXY.xEnd,
              y: parsedXY.yStart
            }, // Top
            {
              xStart: parsedXY.xStart,
              xEnd: parsedXY.xEnd,
              y: parsedXY.yEnd
            }, // Bottom
            {
              x: parsedXY.xStart,
              yStart: parsedXY.yStart,
              yEnd: parsedXY.yEnd
            }, // Left
            {
              x: parsedXY.xEnd,
              yStart: parsedXY.yStart,
              yEnd: parsedXY.yEnd
            } // Right
            );
          } else {
            expandedParsedSnapTargets.push(parsedXY);
          }
        }
  
        if (expandedParsedSnapTargets.length) {
          snapTargetsOptions.push(commonSnapOptions(snapTargetOptions, newSnapTargetOptions)); // Copy common SnapOptions
  
          var corner = snapTargetOptions.corner || snapOptions.corner,
              side = snapTargetOptions.side || snapOptions.side,
              edge = snapTargetOptions.edge || snapOptions.edge,
              commonOptions = {
            gravity: snapTargetOptions.gravity || snapOptions.gravity,
            base: snapTargetOptions.base || snapOptions.base,
            center: typeof snapTargetOptions.center === 'boolean' ? snapTargetOptions.center : snapOptions.center,
            corners: corner === 'all' ? SNAP_ALL_CORNERS : corner.split(' '),
            // Split
            sides: side === 'both' ? SNAP_ALL_SIDES : [side],
            // Split
            edges: edge === 'both' ? SNAP_ALL_EDGES : [edge] // Split
  
          };
          expandedParsedSnapTargets.forEach(function (parsedSnapTarget) {
            // Set common SnapOptions
            ['gravity', 'corners', 'sides', 'center', 'edges', 'base'].forEach(function (option) {
              parsedSnapTarget[option] = commonOptions[option];
            });
            parsedSnapTargets.push(parsedSnapTarget);
          });
        }
  
        return parsedSnapTargets;
      }, []);
  
      if (parsedSnapTargets.length) {
        options.snap = snapOptions; // Update always
  
        if (hasChanged(parsedSnapTargets, props.parsedSnapTargets)) {
          props.parsedSnapTargets = parsedSnapTargets;
          needsInitBBox = true;
        }
      }
    } else if (newOptions.hasOwnProperty('snap') && props.parsedSnapTargets) {
      options.snap = props.parsedSnapTargets = props.snapTargets = void 0;
    } // [/SNAP]
    // [AUTO-SCROLL]
  
    /**
     * @typedef {Object} AutoScrollOptions
     * @property {(Element|Window)} target
     * @property {Array} speed
     * @property {Array} sensitivity
     * @property {number} [minX]
     * @property {number} [maxX]
     * @property {number} [minY]
     * @property {number} [maxY]
     */
    // autoScroll
  
  
    if (newOptions.autoScroll) {
      var newAutoScrollOptions = isObject(newOptions.autoScroll) ? newOptions.autoScroll : {
        target: newOptions.autoScroll === true ? window : newOptions.autoScroll
      },
          autoScrollOptions = {}; // target
  
      autoScrollOptions.target = isElement(newAutoScrollOptions.target) ? newAutoScrollOptions.target : window; // speed
  
      autoScrollOptions.speed = [];
      (Array.isArray(newAutoScrollOptions.speed) ? newAutoScrollOptions.speed : [newAutoScrollOptions.speed]).every(function (speed, i) {
        if (i <= 2 && isFinite(speed)) {
          autoScrollOptions.speed[i] = speed;
          return true;
        }
  
        return false;
      });
  
      if (!autoScrollOptions.speed.length) {
        autoScrollOptions.speed = AUTOSCROLL_SPEED;
      } // sensitivity
  
  
      var newSensitivity = Array.isArray(newAutoScrollOptions.sensitivity) ? newAutoScrollOptions.sensitivity : [newAutoScrollOptions.sensitivity];
      autoScrollOptions.sensitivity = autoScrollOptions.speed.map(function (v, i) {
        return isFinite(newSensitivity[i]) ? newSensitivity[i] : AUTOSCROLL_SENSITIVITY[i];
      }); // min*, max*
  
      ['X', 'Y'].forEach(function (option) {
        var optionMin = "min".concat(option),
            optionMax = "max".concat(option);
  
        if (isFinite(newAutoScrollOptions[optionMin]) && newAutoScrollOptions[optionMin] >= 0) {
          autoScrollOptions[optionMin] = newAutoScrollOptions[optionMin];
        }
  
        if (isFinite(newAutoScrollOptions[optionMax]) && newAutoScrollOptions[optionMax] >= 0 && (!autoScrollOptions[optionMin] || newAutoScrollOptions[optionMax] >= autoScrollOptions[optionMin])) {
          autoScrollOptions[optionMax] = newAutoScrollOptions[optionMax];
        }
      });
  
      if (hasChanged(autoScrollOptions, options.autoScroll)) {
        options.autoScroll = autoScrollOptions;
        needsInitBBox = true;
      }
    } else if (newOptions.hasOwnProperty('autoScroll')) {
      if (options.autoScroll) {
        needsInitBBox = true;
      }
  
      options.autoScroll = void 0;
    } // [/AUTO-SCROLL]
  
  
    if (needsInitBBox) {
      initBBox(props);
    } // handle
  
  
    if (isElement(newOptions.handle) && newOptions.handle !== options.handle) {
      if (options.handle) {
        // Restore
        options.handle.style.cursor = props.orgCursor;
  
        if (cssPropUserSelect) {
          options.handle.style[cssPropUserSelect] = props.orgUserSelect;
        }
  
        pointerEvent.removeStartHandler(options.handle, props.pointerEventHandlerId);
      }
  
      var handle = options.handle = newOptions.handle;
      props.orgCursor = handle.style.cursor;
      setDraggableCursor(handle, props.orgCursor);
  
      if (cssPropUserSelect) {
        props.orgUserSelect = handle.style[cssPropUserSelect];
        handle.style[cssPropUserSelect] = 'none';
      }
  
      pointerEvent.addStartHandler(handle, props.pointerEventHandlerId);
    } // zIndex
  
  
    if (isFinite(newOptions.zIndex) || newOptions.zIndex === false) {
      options.zIndex = newOptions.zIndex;
  
      if (props === activeProps) {
        props.elementStyle.zIndex = options.zIndex === false ? props.orgZIndex : options.zIndex;
      }
    } // left/top
  
  
    var position = {
      left: props.elementBBox.left,
      top: props.elementBBox.top
    };
    var needsMove;
  
    if (isFinite(newOptions.left) && newOptions.left !== position.left) {
      position.left = newOptions.left;
      needsMove = true;
    }
  
    if (isFinite(newOptions.top) && newOptions.top !== position.top) {
      position.top = newOptions.top;
      needsMove = true;
    }
  
    if (needsMove) {
      move(props, position);
    } // Event listeners
  
  
    ['onDrag', 'onMove', 'onDragStart', 'onMoveStart', 'onDragEnd'].forEach(function (option) {
      if (typeof newOptions[option] === 'function') {
        options[option] = newOptions[option];
        props[option] = options[option].bind(props.ins);
      } else if (newOptions.hasOwnProperty(option) && newOptions[option] == null) {
        options[option] = props[option] = void 0;
      }
    });
  }
  
  var PlainDraggable = /*#__PURE__*/function () {
    /**
     * Create a `PlainDraggable` instance.
     * @param {Element} element - Target element.
     * @param {Object} [options] - Options.
     */
    function PlainDraggable(element, options) {
      (0, _classCallCheck2.default)(this, PlainDraggable);
      var props = {
        ins: this,
        options: {
          // Initial options (not default)
          zIndex: ZINDEX // Initial state.
  
        },
        disabled: false
      };
      Object.defineProperty(this, '_id', {
        value: ++insId
      });
      props._id = this._id;
      insProps[this._id] = props;
      props.initArguments = Array.prototype.slice.call(arguments); // [DEBUG/]
  
      if (!isElement(element) || element === body) {
        throw new Error('This element is not accepted.');
      }
  
      if (!options) {
        options = {};
      } else if (!isObject(options)) {
        throw new Error('Invalid options.');
      }
  
      var gpuTrigger = true; // [SVG]
  
      var ownerSvg; // SVGElement which is not root view
  
      if (element instanceof SVGElement && (ownerSvg = element.ownerSVGElement)) {
        // It means `instanceof SVGLocatable` (many browsers don't have SVGLocatable)
        if (!element.getBBox) {
          throw new Error('This element is not accepted. (SVGLocatable)');
        } // Trident and Edge bug, SVGSVGElement doesn't have SVGAnimatedTransformList?
  
  
        if (!element.transform) {
          throw new Error('This element is not accepted. (SVGAnimatedTransformList)');
        } // Trident bug, returned value must be used (That is not given value).
  
  
        props.svgTransform = element.transform.baseVal.appendItem(ownerSvg.createSVGTransform());
        props.svgPoint = ownerSvg.createSVGPoint(); // Gecko bug, view.getScreenCTM returns CTM with root view.
  
        var svgView = element.nearestViewportElement;
        props.svgCtmElement = !IS_GECKO ? svgView : svgView.appendChild(document.createElementNS(ownerSvg.namespaceURI, 'rect'));
        gpuTrigger = false;
        props.initElm = initSvg;
        props.moveElm = moveSvg;
      } else {
        // [/SVG]
  
        /* eslint-disable indent */
  
        /* [SVG/] */
        var cssPropWillChange = _cssprefix.default.getName('willChange');
  
        if (cssPropWillChange) {
          gpuTrigger = false;
        }
  
        if (!options.leftTop && cssPropTransform) {
          // translate
          if (cssPropWillChange) {
            element.style[cssPropWillChange] = 'transform';
          }
  
          props.initElm = initTranslate;
          props.moveElm = moveTranslate;
        } else {
          // left and top
          // [LEFTTOP]
          if (cssPropWillChange) {
            element.style[cssPropWillChange] = 'left, top';
          }
  
          props.initElm = initLeftTop;
          props.moveElm = moveLeftTop; // [/LEFTTOP]
  
          /* [LEFTTOP/]
          throw new Error('`transform` is not supported.');
          [LEFTTOP/] */
        }
        /* eslint-enable indent */
  
        /* [SVG/] */
  
      } // [SVG/]
  
  
      props.element = initAnim(element, gpuTrigger);
      props.elementStyle = element.style;
      props.orgZIndex = props.elementStyle.zIndex;
  
      if (draggableClass) {
        (0, _mClassList.default)(element).add(draggableClass);
      }
  
      props.pointerEventHandlerId = pointerEvent.regStartHandler(function (pointerXY) {
        return dragStart(props, pointerXY);
      }); // Default options
  
      if (!options.containment) {
        var parent;
        options.containment = (parent = element.parentNode) && isElement(parent) ? parent : body;
      }
  
      if (!options.handle) {
        options.handle = element;
      }
  
      _setOptions(props, options);
    }
  
    (0, _createClass2.default)(PlainDraggable, [{
      key: "remove",
      value: function remove() {
        var props = insProps[this._id];
        this.disabled = true; // To restore element and reset pointer
  
        pointerEvent.unregStartHandler(pointerEvent.removeStartHandler(props.options.handle, props.pointerEventHandlerId));
        delete insProps[this._id];
      }
      /**
       * @param {Object} options - New options.
       * @returns {PlainDraggable} Current instance itself.
       */
  
    }, {
      key: "setOptions",
      value: function setOptions(options) {
        if (isObject(options)) {
          _setOptions(insProps[this._id], options);
        }
  
        return this;
      }
    }, {
      key: "position",
      value: function position() {
        initBBox(insProps[this._id]);
        return this;
      }
    }, {
      key: "disabled",
      get: function get() {
        return insProps[this._id].disabled;
      },
      set: function set(value) {
        var props = insProps[this._id];
  
        if ((value = !!value) !== props.disabled) {
          props.disabled = value;
  
          if (props.disabled) {
            if (props === activeProps) {
              dragEnd(props);
            }
  
            props.options.handle.style.cursor = props.orgCursor;
  
            if (cssPropUserSelect) {
              props.options.handle.style[cssPropUserSelect] = props.orgUserSelect;
            }
  
            if (draggableClass) {
              (0, _mClassList.default)(props.element).remove(draggableClass);
            }
          } else {
            setDraggableCursor(props.options.handle, props.orgCursor);
  
            if (cssPropUserSelect) {
              props.options.handle.style[cssPropUserSelect] = 'none';
            }
  
            if (draggableClass) {
              (0, _mClassList.default)(props.element).add(draggableClass);
            }
          }
        }
      }
    }, {
      key: "element",
      get: function get() {
        return insProps[this._id].element;
      }
    }, {
      key: "rect",
      get: function get() {
        return copyTree(insProps[this._id].elementBBox);
      }
    }, {
      key: "left",
      get: function get() {
        return insProps[this._id].elementBBox.left;
      },
      set: function set(value) {
        _setOptions(insProps[this._id], {
          left: value
        });
      }
    }, {
      key: "top",
      get: function get() {
        return insProps[this._id].elementBBox.top;
      },
      set: function set(value) {
        _setOptions(insProps[this._id], {
          top: value
        });
      }
    }, {
      key: "containment",
      get: function get() {
        var props = insProps[this._id];
        return props.containmentIsBBox ? ppBBox2OptionObject(props.options.containment) : props.options.containment;
      },
      set: function set(value) {
        _setOptions(insProps[this._id], {
          containment: value
        });
      } // [SNAP]
  
    }, {
      key: "snap",
      get: function get() {
        return copyTree(insProps[this._id].options.snap);
      },
      set: function set(value) {
        _setOptions(insProps[this._id], {
          snap: value
        });
      } // [/SNAP]
      // [AUTO-SCROLL]
  
    }, {
      key: "autoScroll",
      get: function get() {
        return copyTree(insProps[this._id].options.autoScroll);
      },
      set: function set(value) {
        _setOptions(insProps[this._id], {
          autoScroll: value
        });
      } // [/AUTO-SCROLL]
  
    }, {
      key: "handle",
      get: function get() {
        return insProps[this._id].options.handle;
      },
      set: function set(value) {
        _setOptions(insProps[this._id], {
          handle: value
        });
      }
    }, {
      key: "zIndex",
      get: function get() {
        return insProps[this._id].options.zIndex;
      },
      set: function set(value) {
        _setOptions(insProps[this._id], {
          zIndex: value
        });
      }
    }, {
      key: "onDrag",
      get: function get() {
        return insProps[this._id].options.onDrag;
      },
      set: function set(value) {
        _setOptions(insProps[this._id], {
          onDrag: value
        });
      }
    }, {
      key: "onMove",
      get: function get() {
        return insProps[this._id].options.onMove;
      },
      set: function set(value) {
        _setOptions(insProps[this._id], {
          onMove: value
        });
      }
    }, {
      key: "onDragStart",
      get: function get() {
        return insProps[this._id].options.onDragStart;
      },
      set: function set(value) {
        _setOptions(insProps[this._id], {
          onDragStart: value
        });
      }
    }, {
      key: "onMoveStart",
      get: function get() {
        return insProps[this._id].options.onMoveStart;
      },
      set: function set(value) {
        _setOptions(insProps[this._id], {
          onMoveStart: value
        });
      }
    }, {
      key: "onDragEnd",
      get: function get() {
        return insProps[this._id].options.onDragEnd;
      },
      set: function set(value) {
        _setOptions(insProps[this._id], {
          onDragEnd: value
        });
      }
    }], [{
      key: "draggableCursor",
      get: function get() {
        return cssWantedValueDraggableCursor;
      },
      set: function set(value) {
        if (cssWantedValueDraggableCursor !== value) {
          cssWantedValueDraggableCursor = value;
          cssValueDraggableCursor = null; // Reset
  
          Object.keys(insProps).forEach(function (id) {
            var props = insProps[id];
  
            if (props.disabled || props === activeProps && cssValueDraggingCursor !== false) {
              return;
            }
  
            setDraggableCursor(props.options.handle, props.orgCursor);
  
            if (props === activeProps) {
              // Since cssValueDraggingCursor is `false`, copy cursor again.
              body.style.cursor = cssOrgValueBodyCursor;
              body.style.cursor = window.getComputedStyle(props.options.handle, '').cursor;
            }
          });
        }
      }
    }, {
      key: "draggingCursor",
      get: function get() {
        return cssWantedValueDraggingCursor;
      },
      set: function set(value) {
        if (cssWantedValueDraggingCursor !== value) {
          cssWantedValueDraggingCursor = value;
          cssValueDraggingCursor = null; // Reset
  
          if (activeProps) {
            setDraggingCursor(activeProps.options.handle);
  
            if (cssValueDraggingCursor === false) {
              setDraggableCursor(activeProps.options.handle, activeProps.orgCursor); // draggableCursor
  
              body.style.cursor = cssOrgValueBodyCursor;
            }
  
            body.style.cursor = cssValueDraggingCursor || // If it is `false` or `''`
            window.getComputedStyle(activeProps.options.handle, '').cursor;
          }
        }
      }
    }, {
      key: "draggableClass",
      get: function get() {
        return draggableClass;
      },
      set: function set(value) {
        value = value ? value + '' : void 0;
  
        if (value !== draggableClass) {
          Object.keys(insProps).forEach(function (id) {
            var props = insProps[id];
  
            if (!props.disabled) {
              var classList = (0, _mClassList.default)(props.element);
  
              if (draggableClass) {
                classList.remove(draggableClass);
              }
  
              if (value) {
                classList.add(value);
              }
            }
          });
          draggableClass = value;
        }
      }
    }, {
      key: "draggingClass",
      get: function get() {
        return draggingClass;
      },
      set: function set(value) {
        value = value ? value + '' : void 0;
  
        if (value !== draggingClass) {
          if (activeProps) {
            var classList = (0, _mClassList.default)(activeProps.element);
  
            if (draggingClass) {
              classList.remove(draggingClass);
            }
  
            if (value) {
              classList.add(value);
            }
          }
  
          draggingClass = value;
        }
      }
    }, {
      key: "movingClass",
      get: function get() {
        return movingClass;
      },
      set: function set(value) {
        value = value ? value + '' : void 0;
  
        if (value !== movingClass) {
          if (activeProps && hasMoved) {
            var classList = (0, _mClassList.default)(activeProps.element);
  
            if (movingClass) {
              classList.remove(movingClass);
            }
  
            if (value) {
              classList.add(value);
            }
          }
  
          movingClass = value;
        }
      }
    }]);
    return PlainDraggable;
  }();
  
  pointerEvent.addMoveHandler(document, function (pointerXY) {
    if (!activeProps) {
      return;
    }
  
    var position = {
      left: pointerXY.clientX + window.pageXOffset + pointerOffset.left,
      top: pointerXY.clientY + window.pageYOffset + pointerOffset.top
    };
  
    if (move(activeProps, position, // [SNAP]
    activeProps.snapTargets ? function (position) {
      // Snap
      var iLen = activeProps.snapTargets.length;
      var snappedX = false,
          snappedY = false,
          i;
  
      for (i = 0; i < iLen && (!snappedX || !snappedY); i++) {
        var snapTarget = activeProps.snapTargets[i];
  
        if ((snapTarget.gravityXStart == null || position.left >= snapTarget.gravityXStart) && (snapTarget.gravityXEnd == null || position.left <= snapTarget.gravityXEnd) && (snapTarget.gravityYStart == null || position.top >= snapTarget.gravityYStart) && (snapTarget.gravityYEnd == null || position.top <= snapTarget.gravityYEnd)) {
          if (!snappedX && snapTarget.x != null) {
            position.left = snapTarget.x;
            snappedX = true;
            i = -1; // Restart loop
          }
  
          if (!snappedY && snapTarget.y != null) {
            position.top = snapTarget.y;
            snappedY = true;
            i = -1; // Restart loop
          }
        }
      }
  
      position.snapped = snappedX || snappedY;
      return activeProps.onDrag ? activeProps.onDrag(position) : true;
    } : // [/SNAP]
    activeProps.onDrag)) {
      // [AUTO-SCROLL]
      var xyMoveArgs = {},
          autoScroll = activeProps.autoScroll;
  
      if (autoScroll) {
        var clientXY = {
          x: activeProps.elementBBox.left - window.pageXOffset,
          y: activeProps.elementBBox.top - window.pageYOffset
        };
        ['x', 'y'].forEach(function (axis) {
          if (autoScroll[axis]) {
            var min = autoScroll[axis].min,
                max = autoScroll[axis].max;
            autoScroll[axis].lines.some(function (line) {
              if (line.dir === -1 ? clientXY[axis] <= line.position : clientXY[axis] >= line.position) {
                xyMoveArgs[axis] = {
                  dir: line.dir,
                  speed: line.speed / 1000,
                  min: min,
                  max: max
                };
                return true;
              }
  
              return false;
            });
          }
        });
      }
  
      if (xyMoveArgs.x || xyMoveArgs.y) {
        scrollFrame.move(autoScroll.target, xyMoveArgs, autoScroll.isWindow ? scrollXYWindow : scrollXYElement);
        position.autoScroll = true;
      } else {
        scrollFrame.stop();
      } // [/AUTO-SCROLL]
  
  
      if (!hasMoved) {
        hasMoved = true;
  
        if (movingClass) {
          (0, _mClassList.default)(activeProps.element).add(movingClass);
        }
  
        if (activeProps.onMoveStart) {
          activeProps.onMoveStart(position);
        }
      }
  
      if (activeProps.onMove) {
        activeProps.onMove(position);
      }
    }
  });
  {
    var endHandler = function endHandler() {
      if (activeProps) {
        dragEnd(activeProps);
      }
    };
  
    pointerEvent.addEndHandler(document, endHandler);
    pointerEvent.addCancelHandler(document, endHandler);
  }
  {
    var initDoc = function initDoc() {
      cssPropTransitionProperty = _cssprefix.default.getName('transitionProperty');
      cssPropTransform = _cssprefix.default.getName('transform');
      cssOrgValueBodyCursor = body.style.cursor;
  
      if (cssPropUserSelect = _cssprefix.default.getName('userSelect')) {
        cssOrgValueBodyUserSelect = body.style[cssPropUserSelect];
      } // Init active item when layout is changed, and init others later.
  
  
      var LAZY_INIT_DELAY = 200;
      var initDoneItems = {},
          lazyInitTimer;
  
      function checkInitBBox(props, eventType) {
        if (props.initElm) {
          // Easy checking for instance without errors.
          initBBox(props, eventType);
        } // eslint-disable-line brace-style
        else {
            console.log('instance may have an error:');
            console.log(props);
          } // [DEBUG/]
  
      }
  
      function initAll(eventType) {
        clearTimeout(lazyInitTimer);
        Object.keys(insProps).forEach(function (id) {
          if (!initDoneItems[id]) {
            checkInitBBox(insProps[id], eventType);
          }
        });
        initDoneItems = {};
      }
  
      var layoutChanging = false; // Gecko bug, multiple calling by `resize`.
  
      var layoutChange = _animEvent.default.add(function (event) {
        if (layoutChanging) {
          console.log('`resize/scroll` event listener is already running.'); // [DEBUG/]
  
          return;
        }
  
        layoutChanging = true;
  
        if (activeProps) {
          checkInitBBox(activeProps, event.type);
          pointerEvent.move();
          initDoneItems[activeProps._id] = true;
        }
  
        clearTimeout(lazyInitTimer);
        lazyInitTimer = setTimeout(function () {
          initAll(event.type);
        }, LAZY_INIT_DELAY);
        layoutChanging = false;
      });
  
      window.addEventListener('resize', layoutChange, true);
      window.addEventListener('scroll', layoutChange, true);
    };
  
    if (body = document.body) {
      initDoc();
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        body = document.body;
        initDoc();
      }, true);
    }
  }
  /* [SNAP/]
  PlainDraggable.limit = true;
  [SNAP/] */
  
  var _default = PlainDraggable;
  exports.default = _default;
  
  },{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3,"@babel/runtime/helpers/typeof":4,"anim-event":5,"cssprefix":6,"m-class-list":7,"pointer-event":8}]},{},[9])
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2FuaW0tZXZlbnQvYW5pbS1ldmVudC5taW4uanMiLCJub2RlX21vZHVsZXMvY3NzcHJlZml4L2Nzc3ByZWZpeC5taW4uanMiLCJub2RlX21vZHVsZXMvbS1jbGFzcy1saXN0L20tY2xhc3MtbGlzdC5taW4uanMiLCJub2RlX21vZHVsZXMvcG9pbnRlci1ldmVudC9wb2ludGVyLWV2ZW50Lm1pbi5qcyIsInNyYy9qcy92ZW5kb3IvcGxhaW4tZHJhZ2dhYmxlL3BsYWluLWRyYWdnYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1VBLElB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LEVBQTFCLGVBQTBCLENBQTFCO0FBRUEsTUFBQSxjQUFjLEdBQWQsS0FBQTtBQWZGLEtBQXFCLENBQXJCOztBQWlCQSxJQUFBLE1BQU0sQ0FBTixnQkFBQSxDQUFBLFFBQUEsRUFBQSxZQUFBLEVBQUEsSUFBQTtBQUNBLElBQUEsTUFBTSxDQUFOLGdCQUFBLENBQUEsUUFBQSxFQUFBLFlBQUEsRUFBQSxJQUFBO0FBakRKLEdBQUE7O0FBb0RFLE1BQUssSUFBSSxHQUFHLFFBQVEsQ0FBcEIsSUFBQSxFQUE0QjtBQUMxQixJQUFBLE9BQU87QUFEVCxHQUFBLE1BRU87QUFDTCxJQUFBLFFBQVEsQ0FBUixnQkFBQSxDQUFBLGtCQUFBLEVBQThDLFlBQU07QUFDbEQsTUFBQSxJQUFJLEdBQUcsUUFBUSxDQUFmLElBQUE7QUFDQSxNQUFBLE9BQU87QUFGVCxLQUFBLEVBQUEsSUFBQTtBQUlEO0FBQ0Y7QUFFRDtBQUNBO0FBQ0E7O2VBRWUsYyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiLyohIEFuaW1FdmVudCB2MS4wLjE2IChjKSBhbnNla2kgaHR0cHM6Ly9naXRodWIuY29tL2Fuc2VraS9hbmltLWV2ZW50ICovXG52YXIgQW5pbUV2ZW50PWZ1bmN0aW9uKG4pe3ZhciBlPXt9O2Z1bmN0aW9uIHQocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBuW3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLHQpLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIHQubT1uLHQuYz1lLHQuZD1mdW5jdGlvbihuLGUscil7dC5vKG4sZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLGUse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5yPWZ1bmN0aW9uKG4pe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LHQudD1mdW5jdGlvbihuLGUpe2lmKDEmZSYmKG49dChuKSksOCZlKXJldHVybiBuO2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIG4mJm4mJm4uX19lc01vZHVsZSlyZXR1cm4gbjt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHQucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTpufSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2Ygbilmb3IodmFyIG8gaW4gbil0LmQocixvLGZ1bmN0aW9uKGUpe3JldHVybiBuW2VdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSx0Lm49ZnVuY3Rpb24obil7dmFyIGU9biYmbi5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIG4uZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gbn07cmV0dXJuIHQuZChlLFwiYVwiLGUpLGV9LHQubz1mdW5jdGlvbihuLGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixlKX0sdC5wPVwiXCIsdCh0LnM9MCl9KFtmdW5jdGlvbihuLGUsdCl7XCJ1c2Ugc3RyaWN0XCI7dC5yKGUpO3ZhciByPTUwMCxvPVtdLGk9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihuKXtyZXR1cm4gc2V0VGltZW91dChuLDFlMy82MCl9LHU9d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKG4pe3JldHVybiBjbGVhclRpbWVvdXQobil9LGE9RGF0ZS5ub3coKSxsPXZvaWQgMDtmdW5jdGlvbiBjKCl7dmFyIG49dm9pZCAwLGU9dm9pZCAwO2wmJih1LmNhbGwod2luZG93LGwpLGw9bnVsbCksby5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0Oyh0PWUuZXZlbnQpJiYoZS5ldmVudD1udWxsLGUubGlzdGVuZXIodCksbj0hMCl9KSxuPyhhPURhdGUubm93KCksZT0hMCk6RGF0ZS5ub3coKS1hPHImJihlPSEwKSxlJiYobD1pLmNhbGwod2luZG93LGMpKX1mdW5jdGlvbiBmKG4pe3ZhciBlPS0xO3JldHVybiBvLnNvbWUoZnVuY3Rpb24odCxyKXtyZXR1cm4gdC5saXN0ZW5lcj09PW4mJihlPXIsITApfSksZX12YXIgZD17YWRkOmZ1bmN0aW9uKG4pe3ZhciBlPXZvaWQgMDtyZXR1cm4tMT09PWYobik/KG8ucHVzaChlPXtsaXN0ZW5lcjpufSksZnVuY3Rpb24obil7ZS5ldmVudD1uLGx8fGMoKX0pOm51bGx9LHJlbW92ZTpmdW5jdGlvbihuKXt2YXIgZTsoZT1mKG4pKT4tMSYmKG8uc3BsaWNlKGUsMSksIW8ubGVuZ3RoJiZsJiYodS5jYWxsKHdpbmRvdyxsKSxsPW51bGwpKX19O2UuZGVmYXVsdD1kfV0pLmRlZmF1bHQ7IiwiLyohIENTU1ByZWZpeCB2Mi4wLjE2IChjKSBhbnNla2kgaHR0cHM6Ly9naXRodWIuY29tL2Fuc2VraS9jc3NwcmVmaXggKi9cbnZhciBDU1NQcmVmaXg9ZnVuY3Rpb24oZSl7dmFyIHI9e307ZnVuY3Rpb24gbih0KXtpZihyW3RdKXJldHVybiByW3RdLmV4cG9ydHM7dmFyIHU9clt0XT17aTp0LGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbdF0uY2FsbCh1LmV4cG9ydHMsdSx1LmV4cG9ydHMsbiksdS5sPSEwLHUuZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXIsbi5kPWZ1bmN0aW9uKGUscix0KXtuLm8oZSxyKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUscix7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OnR9KX0sbi5yPWZ1bmN0aW9uKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHI9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZChyLFwiYVwiLHIpLHJ9LG4ubz1mdW5jdGlvbihlLHIpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKX0sbi5wPVwiXCIsbihuLnM9MCl9KFtmdW5jdGlvbihlLHIsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdChlKXtyZXR1cm4gZS5zdWJzdHIoMCwxKS50b1VwcGVyQ2FzZSgpK2Uuc3Vic3RyKDEpfW4ucihyKTt2YXIgdSxvLGksYSxjPVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXSxsPWMucmVkdWNlKGZ1bmN0aW9uKGUscil7cmV0dXJuIGUucHVzaChyKSxlLnB1c2godChyKSksZX0sW10pLGY9Yy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuXCItXCIrZStcIi1cIn0pLHM9KGE9dm9pZCAwLGZ1bmN0aW9uKCl7cmV0dXJuIGE9YXx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZX0pLHA9KG89bmV3IFJlZ0V4cChcIl4oPzpcIitjLmpvaW4oXCJ8XCIpK1wiKSguKVwiLFwiaVwiKSxpPS9bQS1aXS8sZnVuY3Rpb24oZSl7cmV0dXJuXCJmbG9hdFwiPT09KGU9KGUrXCJcIikucmVwbGFjZSgvXFxzL2csXCJcIikucmVwbGFjZSgvLShbXFxkYS16XSkvZ2ksZnVuY3Rpb24oZSxyKXtyZXR1cm4gci50b1VwcGVyQ2FzZSgpfSkucmVwbGFjZShvLGZ1bmN0aW9uKGUscil7cmV0dXJuIGkudGVzdChyKT9yLnRvTG93ZXJDYXNlKCk6ZX0pKS50b0xvd2VyQ2FzZSgpP1wiY3NzRmxvYXRcIjplfSksdj0odT1uZXcgUmVnRXhwKFwiXig/OlwiK2Yuam9pbihcInxcIikrXCIpXCIsXCJpXCIpLGZ1bmN0aW9uKGUpe3JldHVybihudWxsIT1lP2UrXCJcIjpcIlwiKS5yZXBsYWNlKC9cXHMvZyxcIlwiKS5yZXBsYWNlKHUsXCJcIil9KSxkPWZ1bmN0aW9uKGUscil7dmFyIG49cygpO3JldHVybiBlPWUucmVwbGFjZSgvW0EtWl0vZyxmdW5jdGlvbihlKXtyZXR1cm5cIi1cIitlLnRvTG93ZXJDYXNlKCl9KSxuLnNldFByb3BlcnR5KGUsciksbnVsbCE9bltlXSYmbi5nZXRQcm9wZXJ0eVZhbHVlKGUpPT09cn0sZz17fSxtPXt9O2Z1bmN0aW9uIHkoZSl7aWYoKGU9cChlKSkmJm51bGw9PWdbZV0pe3ZhciByPXMoKTtpZihudWxsIT1yW2VdKWdbZV09ZTtlbHNle3ZhciBuPXQoZSk7bC5zb21lKGZ1bmN0aW9uKHQpe3ZhciB1PXQrbjtyZXR1cm4gbnVsbCE9clt1XSYmKGdbZV09dSwhMCl9KXx8KGdbZV09ITEpfX1yZXR1cm4gZ1tlXXx8dm9pZCAwfXZhciBiPXtnZXROYW1lOnksZ2V0VmFsdWU6ZnVuY3Rpb24oZSxyKXt2YXIgbj12b2lkIDA7cmV0dXJuKGU9eShlKSk/KG1bZV09bVtlXXx8e30sKEFycmF5LmlzQXJyYXkocik/cjpbcl0pLnNvbWUoZnVuY3Rpb24ocil7cmV0dXJuIHI9dihyKSxudWxsIT1tW2VdW3JdPyExIT09bVtlXVtyXSYmKG49bVtlXVtyXSwhMCk6ZChlLHIpPyhuPW1bZV1bcl09ciwhMCk6ISFmLnNvbWUoZnVuY3Rpb24odCl7dmFyIHU9dCtyO3JldHVybiEhZChlLHUpJiYobj1tW2VdW3JdPXUsITApfSl8fChtW2VdW3JdPSExLCExKX0pLFwic3RyaW5nXCI9PXR5cGVvZiBuP246dm9pZCAwKTpufX07ci5kZWZhdWx0PWJ9XSkuZGVmYXVsdDsiLCIvKiEgbUNsYXNzTGlzdCB2MS4xLjkgKGMpIGFuc2VraSBodHRwczovL2dpdGh1Yi5jb20vYW5zZWtpL20tY2xhc3MtbGlzdCAqL1xudmFyIG1DbGFzc0xpc3Q9ZnVuY3Rpb24odCl7dmFyIG49e307ZnVuY3Rpb24gZShyKXtpZihuW3JdKXJldHVybiBuW3JdLmV4cG9ydHM7dmFyIGk9bltyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsZSksaS5sPSEwLGkuZXhwb3J0c31yZXR1cm4gZS5tPXQsZS5jPW4sZS5kPWZ1bmN0aW9uKHQsbixyKXtlLm8odCxuKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OnJ9KX0sZS5yPWZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxlLm49ZnVuY3Rpb24odCl7dmFyIG49dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIGUuZChuLFwiYVwiLG4pLG59LGUubz1mdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKX0sZS5wPVwiXCIsZShlLnM9MCl9KFtmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4odCtcIlwiKS50cmltKCl9ZnVuY3Rpb24gaSh0LG4pe24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIix0LmpvaW4oXCIgXCIpKX1mdW5jdGlvbiBvKHQpe3JldHVybiFvLmlnbm9yZU5hdGl2ZSYmdC5jbGFzc0xpc3R8fChuPSh0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKS50cmltKCkuc3BsaXQoL1xccysvKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuISF0fSksZT17bGVuZ3RoOm4ubGVuZ3RoLGl0ZW06ZnVuY3Rpb24odCl7cmV0dXJuIG5bdF19LGNvbnRhaW5zOmZ1bmN0aW9uKHQpe3JldHVybi0xIT09bi5pbmRleE9mKHIodCkpfSxhZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCxuLGUpe2UuZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiEoIShuPXIobikpfHwtMSE9PXQuaW5kZXhPZihuKXx8KHQucHVzaChuKSwwKSl9KS5sZW5ndGgmJmkodCxuKX0obix0LEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpLG8ubWV0aG9kQ2hhaW4/ZTp2b2lkIDB9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0LG4sZSl7ZS5maWx0ZXIoZnVuY3Rpb24obil7dmFyIGU9dm9pZCAwO3JldHVybiEoIShuPXIobikpfHwtMT09PShlPXQuaW5kZXhPZihuKSl8fCh0LnNwbGljZShlLDEpLDApKX0pLmxlbmd0aCYmaSh0LG4pfShuLHQsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSksby5tZXRob2RDaGFpbj9lOnZvaWQgMH0sdG9nZ2xlOmZ1bmN0aW9uKGUsbyl7cmV0dXJuIGZ1bmN0aW9uKHQsbixlLG8pe3ZhciB1PXQuaW5kZXhPZihlPXIoZSkpO3JldHVybi0xIT09dT8hIW98fCh0LnNwbGljZSh1LDEpLGkodCxuKSwhMSk6ITEhPT1vJiYodC5wdXNoKGUpLGkodCxuKSwhMCl9KG4sdCxlLG8pfSxyZXBsYWNlOmZ1bmN0aW9uKHUsYyl7cmV0dXJuIGZ1bmN0aW9uKHQsbixlLG8pe3ZhciB1PXZvaWQgMDsoZT1yKGUpKSYmKG89cihvKSkmJmUhPT1vJiYtMSE9PSh1PXQuaW5kZXhPZihlKSkmJih0LnNwbGljZSh1LDEpLC0xPT09dC5pbmRleE9mKG8pJiZ0LnB1c2gobyksaSh0LG4pKX0obix0LHUsYyksby5tZXRob2RDaGFpbj9lOnZvaWQgMH19KTt2YXIgbixlfWUucihuKSxvLm1ldGhvZENoYWluPSEwLG4uZGVmYXVsdD1vfV0pLmRlZmF1bHQ7IiwiLyohIFBvaW50ZXJFdmVudCB2MS4wLjAgKGMpIGFuc2VraSBodHRwczovL2dpdGh1Yi5jb20vYW5zZWtpL3BvaW50ZXItZXZlbnQgKi9cbnZhciBQb2ludGVyRXZlbnQ9ZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIG89dFtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxyKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKW4uZChyLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLnIodCk7dmFyIHI9NTAwLG89W10saT13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGUpe3JldHVybiBzZXRUaW1lb3V0KGUsMWUzLzYwKX0sYT13aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNDYW5jZWxBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSl7cmV0dXJuIGNsZWFyVGltZW91dChlKX0sdT1EYXRlLm5vdygpLGw9dm9pZCAwO2Z1bmN0aW9uIGMoKXt2YXIgZT12b2lkIDAsdD12b2lkIDA7bCYmKGEuY2FsbCh3aW5kb3csbCksbD1udWxsKSxvLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIG47KG49dC5ldmVudCkmJih0LmV2ZW50PW51bGwsdC5saXN0ZW5lcihuKSxlPSEwKX0pLGU/KHU9RGF0ZS5ub3coKSx0PSEwKTpEYXRlLm5vdygpLXU8ciYmKHQ9ITApLHQmJihsPWkuY2FsbCh3aW5kb3csYykpfWZ1bmN0aW9uIHMoZSl7dmFyIHQ9LTE7cmV0dXJuIG8uc29tZShmdW5jdGlvbihuLHIpe3JldHVybiBuLmxpc3RlbmVyPT09ZSYmKHQ9ciwhMCl9KSx0fXZhciBkPXthZGQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dm9pZCAwO3JldHVybi0xPT09cyhlKT8oby5wdXNoKHQ9e2xpc3RlbmVyOmV9KSxmdW5jdGlvbihlKXt0LmV2ZW50PWUsbHx8YygpfSk6bnVsbH0scmVtb3ZlOmZ1bmN0aW9uKGUpe3ZhciB0Oyh0PXMoZSkpPi0xJiYoby5zcGxpY2UodCwxKSwhby5sZW5ndGgmJmwmJihhLmNhbGwod2luZG93LGwpLGw9bnVsbCkpfX0sZj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LG4scil7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksciYmZSh0LHIpLHR9fSgpO3ZhciBoPSExO3RyeXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIixudWxsLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcInBhc3NpdmVcIix7Z2V0OmZ1bmN0aW9uKCl7aD0hMH19KSl9Y2F0Y2goZSl7fWZ1bmN0aW9uIHYoZSx0LG4scil7ZS5hZGRFdmVudExpc3RlbmVyKHQsbixoP3I6ci5jYXB0dXJlKX1mdW5jdGlvbiBwKGUsdCl7aWYobnVsbCE9ZSYmbnVsbCE9dClmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKylpZihlW25dLmlkZW50aWZpZXI9PT10KXJldHVybiBlW25dO3JldHVybiBudWxsfWZ1bmN0aW9uIG0oZSl7cmV0dXJuIGUmJlwibnVtYmVyXCI9PXR5cGVvZiBlLmNsaWVudFgmJlwibnVtYmVyXCI9PXR5cGVvZiBlLmNsaWVudFl9ZnVuY3Rpb24gdyhlKXtlLnByZXZlbnREZWZhdWx0KCl9dmFyIHk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBuPXRoaXM7IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKSx0aGlzLnN0YXJ0SGFuZGxlcnM9e30sdGhpcy5sYXN0SGFuZGxlcklkPTAsdGhpcy5jdXJQb2ludGVyQ2xhc3M9bnVsbCx0aGlzLmN1clRvdWNoSWQ9bnVsbCx0aGlzLmxhc3RQb2ludGVyWFk9e2NsaWVudFg6MCxjbGllbnRZOjB9LHRoaXMubGFzdFRvdWNoVGltZT0wLHRoaXMub3B0aW9ucz17cHJldmVudERlZmF1bHQ6ITAsc3RvcFByb3BhZ2F0aW9uOiEwfSx0JiZbXCJwcmV2ZW50RGVmYXVsdFwiLFwic3RvcFByb3BhZ2F0aW9uXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7XCJib29sZWFuXCI9PXR5cGVvZiB0W2VdJiYobi5vcHRpb25zW2VdPXRbZV0pfSl9cmV0dXJuIGYoZSxbe2tleTpcInJlZ1N0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7cmV0dXJuIHQuc3RhcnRIYW5kbGVyc1srK3QubGFzdEhhbmRsZXJJZF09ZnVuY3Rpb24obil7dmFyIHI9XCJtb3VzZWRvd25cIj09PW4udHlwZT9cIm1vdXNlXCI6XCJ0b3VjaFwiLG89RGF0ZS5ub3coKSxpPXZvaWQgMCxhPXZvaWQgMDtpZihcInRvdWNoXCI9PT1yKXQubGFzdFRvdWNoVGltZT1vLGk9bi5jaGFuZ2VkVG91Y2hlc1swXSxhPW4uY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllcjtlbHNle2lmKG8tdC5sYXN0VG91Y2hUaW1lPDQwMClyZXR1cm47aT1ufWlmKCFtKGkpKXRocm93IG5ldyBFcnJvcihcIk5vIGNsaWVudFgvY2xpZW50WVwiKTt0LmN1clBvaW50ZXJDbGFzcyYmdC5jYW5jZWwoKSxlLmNhbGwodCxpKSYmKHQuY3VyUG9pbnRlckNsYXNzPXIsdC5jdXJUb3VjaElkPVwidG91Y2hcIj09PXI/YTpudWxsLHQubGFzdFBvaW50ZXJYWS5jbGllbnRYPWkuY2xpZW50WCx0Lmxhc3RQb2ludGVyWFkuY2xpZW50WT1pLmNsaWVudFksdC5vcHRpb25zLnByZXZlbnREZWZhdWx0JiZuLnByZXZlbnREZWZhdWx0KCksdC5vcHRpb25zLnN0b3BQcm9wYWdhdGlvbiYmbi5zdG9wUHJvcGFnYXRpb24oKSl9LHQubGFzdEhhbmRsZXJJZH19LHtrZXk6XCJ1bnJlZ1N0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2RlbGV0ZSB0aGlzLnN0YXJ0SGFuZGxlcnNbZV19fSx7a2V5OlwiYWRkU3RhcnRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZighdGhpcy5zdGFydEhhbmRsZXJzW3RdKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaGFuZGxlcklkOiBcIit0KTtyZXR1cm4gdihlLFwibW91c2Vkb3duXCIsdGhpcy5zdGFydEhhbmRsZXJzW3RdLHtjYXB0dXJlOiExLHBhc3NpdmU6ITF9KSx2KGUsXCJ0b3VjaHN0YXJ0XCIsdGhpcy5zdGFydEhhbmRsZXJzW3RdLHtjYXB0dXJlOiExLHBhc3NpdmU6ITF9KSx2KGUsXCJkcmFnc3RhcnRcIix3LHtjYXB0dXJlOiExLHBhc3NpdmU6ITF9KSx0fX0se2tleTpcInJlbW92ZVN0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoIXRoaXMuc3RhcnRIYW5kbGVyc1t0XSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGhhbmRsZXJJZDogXCIrdCk7cmV0dXJuIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMuc3RhcnRIYW5kbGVyc1t0XSwhMSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMuc3RhcnRIYW5kbGVyc1t0XSwhMSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsdywhMSksdH19LHtrZXk6XCJhZGRNb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcyxyPWQuYWRkKGZ1bmN0aW9uKGUpe3ZhciB0PVwibW91c2Vtb3ZlXCI9PT1lLnR5cGU/XCJtb3VzZVwiOlwidG91Y2hcIjtpZihcInRvdWNoXCI9PT10JiYobi5sYXN0VG91Y2hUaW1lPURhdGUubm93KCkpLHQ9PT1uLmN1clBvaW50ZXJDbGFzcyl7dmFyIHI9XCJ0b3VjaFwiPT09dD9wKGUuY2hhbmdlZFRvdWNoZXMsbi5jdXJUb3VjaElkKTplO20ocikmJihyLmNsaWVudFg9PT1uLmxhc3RQb2ludGVyWFkuY2xpZW50WCYmci5jbGllbnRZPT09bi5sYXN0UG9pbnRlclhZLmNsaWVudFl8fG4ubW92ZShyKSxuLm9wdGlvbnMucHJldmVudERlZmF1bHQmJmUucHJldmVudERlZmF1bHQoKSxuLm9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uJiZlLnN0b3BQcm9wYWdhdGlvbigpKX19KTt2KGUsXCJtb3VzZW1vdmVcIixyLHtjYXB0dXJlOiExLHBhc3NpdmU6ITF9KSx2KGUsXCJ0b3VjaG1vdmVcIixyLHtjYXB0dXJlOiExLHBhc3NpdmU6ITF9KSxuLmN1ck1vdmVIYW5kbGVyPXR9fSx7a2V5OlwibW92ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe20oZSkmJih0aGlzLmxhc3RQb2ludGVyWFkuY2xpZW50WD1lLmNsaWVudFgsdGhpcy5sYXN0UG9pbnRlclhZLmNsaWVudFk9ZS5jbGllbnRZKSx0aGlzLmN1ck1vdmVIYW5kbGVyJiZ0aGlzLmN1ck1vdmVIYW5kbGVyKHRoaXMubGFzdFBvaW50ZXJYWSl9fSx7a2V5OlwiYWRkRW5kSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztmdW5jdGlvbiByKGUpe3ZhciB0PVwibW91c2V1cFwiPT09ZS50eXBlP1wibW91c2VcIjpcInRvdWNoXCI7aWYoXCJ0b3VjaFwiPT09dCYmKG4ubGFzdFRvdWNoVGltZT1EYXRlLm5vdygpKSx0PT09bi5jdXJQb2ludGVyQ2xhc3Mpe3ZhciByPVwidG91Y2hcIj09PXQ/cChlLmNoYW5nZWRUb3VjaGVzLG4uY3VyVG91Y2hJZCl8fChwKGUudG91Y2hlcyxuLmN1clRvdWNoSWQpP251bGw6e30pOmU7ciYmKG4uZW5kKHIpLG4ub3B0aW9ucy5wcmV2ZW50RGVmYXVsdCYmZS5wcmV2ZW50RGVmYXVsdCgpLG4ub3B0aW9ucy5zdG9wUHJvcGFnYXRpb24mJmUuc3RvcFByb3BhZ2F0aW9uKCkpfX12KGUsXCJtb3VzZXVwXCIscix7Y2FwdHVyZTohMSxwYXNzaXZlOiExfSksdihlLFwidG91Y2hlbmRcIixyLHtjYXB0dXJlOiExLHBhc3NpdmU6ITF9KSxuLmN1ckVuZEhhbmRsZXI9dH19LHtrZXk6XCJlbmRcIix2YWx1ZTpmdW5jdGlvbihlKXttKGUpJiYodGhpcy5sYXN0UG9pbnRlclhZLmNsaWVudFg9ZS5jbGllbnRYLHRoaXMubGFzdFBvaW50ZXJYWS5jbGllbnRZPWUuY2xpZW50WSksdGhpcy5jdXJFbmRIYW5kbGVyJiZ0aGlzLmN1ckVuZEhhbmRsZXIodGhpcy5sYXN0UG9pbnRlclhZKSx0aGlzLmN1clBvaW50ZXJDbGFzcz10aGlzLmN1clRvdWNoSWQ9bnVsbH19LHtrZXk6XCJhZGRDYW5jZWxIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO3YoZSxcInRvdWNoY2FuY2VsXCIsZnVuY3Rpb24oZSl7bi5sYXN0VG91Y2hUaW1lPURhdGUubm93KCksbnVsbCE9bi5jdXJQb2ludGVyQ2xhc3MmJihwKGUuY2hhbmdlZFRvdWNoZXMsbi5jdXJUb3VjaElkKXx8IXAoZS50b3VjaGVzLG4uY3VyVG91Y2hJZCkpJiZuLmNhbmNlbCgpfSx7Y2FwdHVyZTohMSxwYXNzaXZlOiExfSksbi5jdXJDYW5jZWxIYW5kbGVyPXR9fSx7a2V5OlwiY2FuY2VsXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmN1ckNhbmNlbEhhbmRsZXImJnRoaXMuY3VyQ2FuY2VsSGFuZGxlcigpLHRoaXMuY3VyUG9pbnRlckNsYXNzPXRoaXMuY3VyVG91Y2hJZD1udWxsfX1dLFt7a2V5OlwiYWRkRXZlbnRMaXN0ZW5lcldpdGhPcHRpb25zXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHZ9fV0pLGV9KCk7dC5kZWZhdWx0PXl9XSkuZGVmYXVsdDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXG4vKlxuICogUGxhaW5EcmFnZ2FibGVcbiAqIGh0dHBzOi8vYW5zZWtpLmdpdGh1Yi5pby9wbGFpbi1kcmFnZ2FibGUvXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IGFuc2VraVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbmltcG9ydCBQb2ludGVyRXZlbnQgZnJvbSAncG9pbnRlci1ldmVudCc7XG5pbXBvcnQgQ1NTUHJlZml4IGZyb20gJ2Nzc3ByZWZpeCc7XG5pbXBvcnQgQW5pbUV2ZW50IGZyb20gJ2FuaW0tZXZlbnQnO1xuaW1wb3J0IG1DbGFzc0xpc3QgZnJvbSAnbS1jbGFzcy1saXN0Jztcbm1DbGFzc0xpc3QuaWdub3JlTmF0aXZlID0gdHJ1ZTtcblxuY29uc3RcbiAgWklOREVYID0gOTAwMCxcbiAgLy8gW1NOQVBdXG4gIFNOQVBfR1JBVklUWSA9IDIwLFxuICBTTkFQX0NPUk5FUiA9ICd0bCcsXG4gIFNOQVBfU0lERSA9ICdib3RoJyxcbiAgU05BUF9FREdFID0gJ2JvdGgnLFxuICBTTkFQX0JBU0UgPSAnY29udGFpbm1lbnQnLFxuICBTTkFQX0FMTF9DT1JORVJTID0gWyd0bCcsICd0cicsICdibCcsICdiciddLFxuICBTTkFQX0FMTF9TSURFUyA9IFsnc3RhcnQnLCAnZW5kJ10sXG4gIFNOQVBfQUxMX0VER0VTID0gWydpbnNpZGUnLCAnb3V0c2lkZSddLFxuICAvLyBbL1NOQVBdXG5cbiAgLy8gW0FVVE8tU0NST0xMXVxuICBBVVRPU0NST0xMX1NQRUVEID0gWzQwLCAyMDAsIDEwMDBdLFxuICBBVVRPU0NST0xMX1NFTlNJVElWSVRZID0gWzEwMCwgNDAsIDBdLFxuICAvLyBbL0FVVE8tU0NST0xMXVxuXG4gIElTX0VER0UgPSAnLW1zLXNjcm9sbC1saW1pdCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmXG4gICAgJy1tcy1pbWUtYWxpZ24nIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiAhd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuICBJU19UUklERU5UID0gIUlTX0VER0UgJiYgISFkb2N1bWVudC51bmlxdWVJRCwgLy8gRnV0dXJlIEVkZ2UgbWlnaHQgc3VwcG9ydCBgZG9jdW1lbnQudW5pcXVlSURgLlxuICBJU19HRUNLTyA9ICdNb3pBcHBlYXJhbmNlJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXG4gIElTX0JMSU5LID0gIUlTX0VER0UgJiYgIUlTX0dFQ0tPICYmIC8vIEVkZ2UgaGFzIGB3aW5kb3cuY2hyb21lYCwgYW5kIGZ1dHVyZSBHZWNrbyBtaWdodCBoYXZlIHRoYXQuXG4gICAgISF3aW5kb3cuY2hyb21lICYmICEhd2luZG93LkNTUyxcbiAgSVNfV0VCS0lUID0gIUlTX0VER0UgJiYgIUlTX1RSSURFTlQgJiZcbiAgICAhSVNfR0VDS08gJiYgIUlTX0JMSU5LICYmIC8vIFNvbWUgZW5naW5lcyBzdXBwb3J0IGB3ZWJraXQtKmAgcHJvcGVydGllcy5cbiAgICAhd2luZG93LmNocm9tZSAmJiAnV2Via2l0QXBwZWFyYW5jZScgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxuXG4gIGlzT2JqZWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCB0b1N0cmluZyA9IHt9LnRvU3RyaW5nLFxuICAgICAgZm5Ub1N0cmluZyA9IHt9Lmhhc093blByb3BlcnR5LnRvU3RyaW5nLFxuICAgICAgb2JqRm5TdHJpbmcgPSBmblRvU3RyaW5nLmNhbGwoT2JqZWN0KTtcbiAgICByZXR1cm4gb2JqID0+IHtcbiAgICAgIGxldCBwcm90bywgY29uc3RyO1xuICAgICAgcmV0dXJuIG9iaiAmJiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmXG4gICAgICAgICghKHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIHx8XG4gICAgICAgICAgKGNvbnN0ciA9IHByb3RvLmhhc093blByb3BlcnR5KCdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yKSAmJlxuICAgICAgICAgIHR5cGVvZiBjb25zdHIgPT09ICdmdW5jdGlvbicgJiYgZm5Ub1N0cmluZy5jYWxsKGNvbnN0cikgPT09IG9iakZuU3RyaW5nKTtcbiAgICB9O1xuICB9KSgpLFxuICBpc0Zpbml0ZSA9IE51bWJlci5pc0Zpbml0ZSB8fCAodmFsdWUgPT4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB3aW5kb3cuaXNGaW5pdGUodmFsdWUpKSxcblxuICAvKiogQHR5cGUge09iamVjdC48X2lkOiBudW1iZXIsIHByb3BzPn0gKi9cbiAgaW5zUHJvcHMgPSB7fSxcbiAgcG9pbnRlck9mZnNldCA9IHt9LFxuICBwb2ludGVyRXZlbnQgPSBuZXcgUG9pbnRlckV2ZW50KCk7XG5cbmxldCBpbnNJZCA9IDAsXG4gIGFjdGl2ZVByb3BzLCBoYXNNb3ZlZCwgYm9keSxcbiAgLy8gQ1NTIHByb3BlcnR5L3ZhbHVlXG4gIGNzc1ZhbHVlRHJhZ2dhYmxlQ3Vyc29yLCBjc3NWYWx1ZURyYWdnaW5nQ3Vyc29yLCBjc3NPcmdWYWx1ZUJvZHlDdXJzb3IsXG4gIGNzc1Byb3BUcmFuc2l0aW9uUHJvcGVydHksIGNzc1Byb3BUcmFuc2Zvcm0sIGNzc1Byb3BVc2VyU2VsZWN0LCBjc3NPcmdWYWx1ZUJvZHlVc2VyU2VsZWN0LFxuICAvLyBUcnkgdG8gc2V0IGBjdXJzb3JgIHByb3BlcnR5LlxuICBjc3NXYW50ZWRWYWx1ZURyYWdnYWJsZUN1cnNvciA9IElTX1dFQktJVCA/IFsnYWxsLXNjcm9sbCcsICdtb3ZlJ10gOiBbJ2dyYWInLCAnYWxsLXNjcm9sbCcsICdtb3ZlJ10sXG4gIGNzc1dhbnRlZFZhbHVlRHJhZ2dpbmdDdXJzb3IgPSBJU19XRUJLSVQgPyAnbW92ZScgOiBbJ2dyYWJiaW5nJywgJ21vdmUnXSxcbiAgLy8gY2xhc3NcbiAgZHJhZ2dhYmxlQ2xhc3MgPSAncGxhaW4tZHJhZ2dhYmxlJyxcbiAgZHJhZ2dpbmdDbGFzcyA9ICdwbGFpbi1kcmFnZ2FibGUtZHJhZ2dpbmcnLFxuICBtb3ZpbmdDbGFzcyA9ICdwbGFpbi1kcmFnZ2FibGUtbW92aW5nJztcblxuLy8gW0FVVE8tU0NST0xMXVxuLy8gU2Nyb2xsIEFuaW1hdGlvbiBDb250cm9sbGVyXG5jb25zdCBzY3JvbGxGcmFtZSA9IHt9LFxuICBNU1BGID0gMTAwMCAvIDYwLCAvLyBtcy9mcmFtZSAoRlBTOiA2MClcbiAgcmVxdWVzdEFuaW0gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAoY2FsbGJhY2sgPT4gc2V0VGltZW91dChjYWxsYmFjaywgTVNQRikpLFxuICBjYW5jZWxBbmltID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAocmVxdWVzdElEID0+IGNsZWFyVGltZW91dChyZXF1ZXN0SUQpKTtcbntcbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IE1vdmVBcmdzXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkaXIgLSBbLTEgfCAxXSBtaW51cyBvciBwbHVzIHRvIHBvc2l0aW9uIHZhbHVlLlxuICAgKiBAcHJvcGVydHkge251bWJlcn0gc3BlZWQgLSBweC9tc1xuICAgKiBAcHJvcGVydHkge251bWJlcn0gbWluIC0gTWluaW11bSBwb3NpdGlvbiB2YWx1ZS5cbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG1heCAtIE1heGltdW0gcG9zaXRpb24gdmFsdWUuXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbGFzdEZyYW1lVGltZV0gLSBUaW1lIG9mIGxhc3QgZnJhbWUuXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbGFzdFZhbHVlXSAtIFN0cmljdCB2YWx1ZSBvZiBsYXN0IGZyYW1lLlxuICAgKi9cblxuICBsZXQgY3VyWHlNb3ZlQXJncyA9IHt9LFxuICAgIGN1ckVsZW1lbnQsIGN1clNjcm9sbFhZLCByZXF1ZXN0SUQ7XG5cbiAgZnVuY3Rpb24gZnJhbWVVcGRhdGUoKSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBbJ3gnLCAneSddLmZvckVhY2goeHkgPT4ge1xuICAgICAgY29uc3QgbW92ZUFyZ3MgPSBjdXJYeU1vdmVBcmdzW3h5XTtcbiAgICAgIGlmIChtb3ZlQXJncykge1xuICAgICAgICBjb25zdCB0aW1lTGVuID0gbm93IC0gbW92ZUFyZ3MubGFzdEZyYW1lVGltZSxcbiAgICAgICAgICBhYnNWYWx1ZSA9IGN1clNjcm9sbFhZKGN1ckVsZW1lbnQsIHh5KSxcbiAgICAgICAgICBjdXJWYWx1ZSA9IG1vdmVBcmdzLmxhc3RWYWx1ZSAhPSBudWxsICYmXG4gICAgICAgICAgICAgIE1hdGguYWJzKG1vdmVBcmdzLmxhc3RWYWx1ZSAtIGFic1ZhbHVlKSA8IDEwIC8vIEl0IHdhcyBub3QgbW92ZWQgbWFudWFsbHlcbiAgICAgICAgICAgID8gbW92ZUFyZ3MubGFzdFZhbHVlIDogYWJzVmFsdWU7XG4gICAgICAgIGlmIChtb3ZlQXJncy5kaXIgPT09IC0xID8gKGN1clZhbHVlID4gbW92ZUFyZ3MubWluKSA6IChjdXJWYWx1ZSA8IG1vdmVBcmdzLm1heCkpIHtcbiAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBjdXJWYWx1ZSArIG1vdmVBcmdzLnNwZWVkICogdGltZUxlbiAqIG1vdmVBcmdzLmRpcjtcbiAgICAgICAgICBpZiAobmV3VmFsdWUgPCBtb3ZlQXJncy5taW4pIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gbW92ZUFyZ3MubWluO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmV3VmFsdWUgPiBtb3ZlQXJncy5tYXgpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gbW92ZUFyZ3MubWF4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJTY3JvbGxYWShjdXJFbGVtZW50LCB4eSwgbmV3VmFsdWUpO1xuICAgICAgICAgIG1vdmVBcmdzLmxhc3RWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIG1vdmVBcmdzLmxhc3RGcmFtZVRpbWUgPSBub3c7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmcmFtZSgpIHtcbiAgICBjYW5jZWxBbmltLmNhbGwod2luZG93LCByZXF1ZXN0SUQpO1xuICAgIGZyYW1lVXBkYXRlKCk7XG4gICAgcmVxdWVzdElEID0gcmVxdWVzdEFuaW0uY2FsbCh3aW5kb3csIGZyYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBBIHRhcmdldCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3t4OiA/TW92ZUFyZ3MsIHk6ID9Nb3ZlQXJnc319IHh5TW92ZUFyZ3MgLSBNb3ZlQXJncyBmb3IgeCBhbmQgeVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBzY3JvbGxYWSAtIChlbGVtZW50OiBFbGVtZW50LCB4eTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiBudW1iZXJcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBzY3JvbGxGcmFtZS5tb3ZlID0gKGVsZW1lbnQsIHh5TW92ZUFyZ3MsIHNjcm9sbFhZKSA9PiB7XG4gICAgY2FuY2VsQW5pbS5jYWxsKHdpbmRvdywgcmVxdWVzdElEKTtcbiAgICBmcmFtZVVwZGF0ZSgpOyAvLyBVcGRhdGUgY3VycmVudCBkYXRhIG5vdyBiZWNhdXNlIGl0IG1pZ2h0IGJlIG5vdCBjb250aW51YXRpb24uXG5cbiAgICAvLyBSZS11c2UgbGFzdFZhbHVlXG4gICAgaWYgKGN1ckVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIGlmICh4eU1vdmVBcmdzLnggJiYgY3VyWHlNb3ZlQXJncy54KSB7IHh5TW92ZUFyZ3MueC5sYXN0VmFsdWUgPSBjdXJYeU1vdmVBcmdzLngubGFzdFZhbHVlIH1cbiAgICAgIGlmICh4eU1vdmVBcmdzLnkgJiYgY3VyWHlNb3ZlQXJncy55KSB7IHh5TW92ZUFyZ3MueS5sYXN0VmFsdWUgPSBjdXJYeU1vdmVBcmdzLnkubGFzdFZhbHVlIH1cbiAgICB9XG5cbiAgICBjdXJFbGVtZW50ID0gZWxlbWVudDtcbiAgICBjdXJYeU1vdmVBcmdzID0geHlNb3ZlQXJncztcbiAgICBjdXJTY3JvbGxYWSA9IHNjcm9sbFhZO1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBbJ3gnLCAneSddLmZvckVhY2goeHkgPT4ge1xuICAgICAgY29uc3QgbW92ZUFyZ3MgPSBjdXJYeU1vdmVBcmdzW3h5XTtcbiAgICAgIGlmIChtb3ZlQXJncykgeyBtb3ZlQXJncy5sYXN0RnJhbWVUaW1lID0gbm93IH1cbiAgICB9KTtcblxuICAgIHJlcXVlc3RJRCA9IHJlcXVlc3RBbmltLmNhbGwod2luZG93LCBmcmFtZSk7XG4gIH07XG5cbiAgc2Nyb2xsRnJhbWUuc3RvcCA9ICgpID0+IHtcbiAgICBjYW5jZWxBbmltLmNhbGwod2luZG93LCByZXF1ZXN0SUQpO1xuICAgIGZyYW1lVXBkYXRlKCk7XG4gICAgY3VyWHlNb3ZlQXJncyA9IHt9O1xuICAgIGN1ckVsZW1lbnQgPSBudWxsOyAvLyBSZW1vdmUgcmVmZXJlbmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNjcm9sbFhZV2luZG93KGVsZW1lbnQsIHh5LCB2YWx1ZSkge1xuICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgIGlmICh4eSA9PT0gJ3gnKSB7XG4gICAgICBlbGVtZW50LnNjcm9sbFRvKHZhbHVlLCBlbGVtZW50LnBhZ2VZT2Zmc2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zY3JvbGxUbyhlbGVtZW50LnBhZ2VYT2Zmc2V0LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB4eSA9PT0gJ3gnID8gZWxlbWVudC5wYWdlWE9mZnNldCA6IGVsZW1lbnQucGFnZVlPZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbFhZRWxlbWVudChlbGVtZW50LCB4eSwgdmFsdWUpIHtcbiAgY29uc3QgcHJvcCA9IHh5ID09PSAneCcgPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJztcbiAgaWYgKHZhbHVlICE9IG51bGwpIHsgZWxlbWVudFtwcm9wXSA9IHZhbHVlIH1cbiAgcmV0dXJuIGVsZW1lbnRbcHJvcF07XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU2Nyb2xsYWJsZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNsaWVudFdpZHRoIC0gd2lkdGggb2Ygc2Nyb2xsYWJsZSBhcmVhLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNsaWVudEhlaWdodCAtIGhlaWdodCBvZiBzY3JvbGxhYmxlIGFyZWEuXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2Nyb2xsV2lkdGggLSB3aWR0aCBvZiBpbm5lciBjb250ZW50LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNjcm9sbEhlaWdodCAtIGhlaWdodCBvZiBpbm5lciBjb250ZW50LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNsaWVudFggLSBYIG9mIHNjcm9sbGFibGUgYXJlYSwgZG9jdW1lbnQgY29vcmRpbmF0ZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjbGllbnRZIC0gVCBvZiBzY3JvbGxhYmxlIGFyZWEsIGRvY3VtZW50IGNvb3JkaW5hdGUuXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBBIHRhcmdldCBlbGVtZW50LlxuICogQHBhcmFtIHtib29sZWFufSBbaXNXaW5kb3ddIC0gYHRydWVgIGlmIGVsZW1lbnQgaXMgd2luZG93LlxuICogQHBhcmFtIHtib29sZWFufSBbZG9udFNjcm9sbF0gLSBgdHJ1ZWAgbWFrZXMgaXQgc2tpcCBzY3JvbGwgdGhhdCBnZXRzIHNjcm9sbFdpZHRoL0hlaWdodC5cbiAqIEByZXR1cm5zIHtTY3JvbGxhYmxlfSBJbmZvcm1hdGlvbiBmb3Igc2Nyb2xsLlxuICovXG5mdW5jdGlvbiBnZXRTY3JvbGxhYmxlKGVsZW1lbnQsIGlzV2luZG93LCBkb250U2Nyb2xsKSB7XG4gIGNvbnN0IHNjcm9sbGFibGUgPSB7fTtcbiAgbGV0IGNtcFN0eWxlSHRtbCwgY21wU3R5bGVCb2R5LCBjbXBTdHlsZUVsZW1lbnQ7XG5cbiAgLy8gY2xpZW50V2lkdGgvSGVpZ2h0XG4gIChmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBzY3JvbGxhYmxlLmNsaWVudFdpZHRoID0gdGFyZ2V0LmNsaWVudFdpZHRoO1xuICAgIHNjcm9sbGFibGUuY2xpZW50SGVpZ2h0ID0gdGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgfSkoaXNXaW5kb3cgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBlbGVtZW50KTtcblxuICAvLyBzY3JvbGxXaWR0aC9IZWlnaHRcbiAgLypcbiAgICBHZWNrbyBidWcsIGJvdHRvbS1wYWRkaW5nIG9mIGVsZW1lbnQgaXMgcmVkdWNlZC5cbiAgICBCbGluayBmb3IgQW5kcm9pZCBidWcsIGJvcmRlcnMgb2YgPGh0bWw+IGlzIHJlbmRlcmVkIGJ1dCB0aG9zZSBhcmUgbm90IGFkZGVkIHRvIHNjcm9sbFcvSC5cbiAgICBUaGVuLCBtb3ZlIGl0IHRvIG1heCBzY3JvbGwgcG9zaXRpb24gKHN1ZmZpY2llbnRseSBsYXJnZXIgdmFsdWVzKSBmb3JjaWJseSwgYW5kIGdldCBzY3JvbGwgcG9zaXRpb24uXG4gICovXG4gIGxldCBtYXhTY3JvbGxMZWZ0ID0gMCxcbiAgICBtYXhTY3JvbGxUb3AgPSAwO1xuICBpZiAoIWRvbnRTY3JvbGwpIHtcbiAgICBsZXQgY3VyU2Nyb2xsTGVmdCwgY3VyU2Nyb2xsVG9wO1xuICAgIGlmIChpc1dpbmRvdykge1xuICAgICAgY3VyU2Nyb2xsTGVmdCA9IHNjcm9sbFhZV2luZG93KGVsZW1lbnQsICd4Jyk7XG4gICAgICBjdXJTY3JvbGxUb3AgPSBzY3JvbGxYWVdpbmRvdyhlbGVtZW50LCAneScpO1xuICAgICAgY21wU3R5bGVIdG1sID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICcnKTtcbiAgICAgIGNtcFN0eWxlQm9keSA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSwgJycpO1xuICAgICAgbWF4U2Nyb2xsTGVmdCA9IHNjcm9sbFhZV2luZG93KGVsZW1lbnQsICd4JyxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoICtcbiAgICAgICAgc2Nyb2xsYWJsZS5jbGllbnRXaWR0aCArIC8vIEJsaW5rIGZvciBBbmRyb2lkIGJ1Zywgc2Nyb2xsKiByZXR1cm5zIHNpemUgb2Ygc21hbGxlciBib2R5XG4gICAgICAgIFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCcsICdib3JkZXJMZWZ0V2lkdGgnLCAnYm9yZGVyUmlnaHRXaWR0aCcsXG4gICAgICAgICAgJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCddXG4gICAgICAgICAgLnJlZHVjZSgobGVuLCBwcm9wKSA9PiBsZW4gKyAocGFyc2VGbG9hdChjbXBTdHlsZUh0bWxbcHJvcF0pIHx8IDApICtcbiAgICAgICAgICAgIChwYXJzZUZsb2F0KGNtcFN0eWxlQm9keVtwcm9wXSkgfHwgMCksIDApKTtcbiAgICAgIG1heFNjcm9sbFRvcCA9IHNjcm9sbFhZV2luZG93KGVsZW1lbnQsICd5JyxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCArXG4gICAgICAgIHNjcm9sbGFibGUuY2xpZW50SGVpZ2h0ICtcbiAgICAgICAgWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJywgJ2JvcmRlclRvcFdpZHRoJywgJ2JvcmRlckJvdHRvbVdpZHRoJyxcbiAgICAgICAgICAncGFkZGluZ1RvcCcsICdwYWRkaW5nQm90dG9tJ11cbiAgICAgICAgICAucmVkdWNlKChsZW4sIHByb3ApID0+IGxlbiArIChwYXJzZUZsb2F0KGNtcFN0eWxlSHRtbFtwcm9wXSkgfHwgMCkgK1xuICAgICAgICAgICAgKHBhcnNlRmxvYXQoY21wU3R5bGVCb2R5W3Byb3BdKSB8fCAwKSwgMCkpO1xuXG4gICAgICBzY3JvbGxYWVdpbmRvdyhlbGVtZW50LCAneCcsIGN1clNjcm9sbExlZnQpO1xuICAgICAgc2Nyb2xsWFlXaW5kb3coZWxlbWVudCwgJ3knLCBjdXJTY3JvbGxUb3ApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJTY3JvbGxMZWZ0ID0gc2Nyb2xsWFlFbGVtZW50KGVsZW1lbnQsICd4Jyk7XG4gICAgICBjdXJTY3JvbGxUb3AgPSBzY3JvbGxYWUVsZW1lbnQoZWxlbWVudCwgJ3knKTtcbiAgICAgIGNtcFN0eWxlRWxlbWVudCA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgJycpO1xuICAgICAgbWF4U2Nyb2xsTGVmdCA9IHNjcm9sbFhZRWxlbWVudChlbGVtZW50LCAneCcsXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsV2lkdGggK1xuICAgICAgICBzY3JvbGxhYmxlLmNsaWVudFdpZHRoICsgLy8gQmxpbmsgZm9yIEFuZHJvaWQgYnVnLCBzY3JvbGwqIHJldHVybnMgc2l6ZSBvZiBzbWFsbGVyIGJvZHlcbiAgICAgICAgWydtYXJnaW5MZWZ0JywgJ21hcmdpblJpZ2h0JywgJ2JvcmRlckxlZnRXaWR0aCcsICdib3JkZXJSaWdodFdpZHRoJyxcbiAgICAgICAgICAncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0J11cbiAgICAgICAgICAucmVkdWNlKChsZW4sIHByb3ApID0+IGxlbiArIChwYXJzZUZsb2F0KGNtcFN0eWxlRWxlbWVudFtwcm9wXSkgfHwgMCksIDApKTtcbiAgICAgIG1heFNjcm9sbFRvcCA9IHNjcm9sbFhZRWxlbWVudChlbGVtZW50LCAneScsXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICtcbiAgICAgICAgc2Nyb2xsYWJsZS5jbGllbnRIZWlnaHQgK1xuICAgICAgICBbJ21hcmdpblRvcCcsICdtYXJnaW5Cb3R0b20nLCAnYm9yZGVyVG9wV2lkdGgnLCAnYm9yZGVyQm90dG9tV2lkdGgnLFxuICAgICAgICAgICdwYWRkaW5nVG9wJywgJ3BhZGRpbmdCb3R0b20nXVxuICAgICAgICAgIC5yZWR1Y2UoKGxlbiwgcHJvcCkgPT4gbGVuICsgKHBhcnNlRmxvYXQoY21wU3R5bGVFbGVtZW50W3Byb3BdKSB8fCAwKSwgMCkpO1xuXG4gICAgICBzY3JvbGxYWUVsZW1lbnQoZWxlbWVudCwgJ3gnLCBjdXJTY3JvbGxMZWZ0KTtcbiAgICAgIHNjcm9sbFhZRWxlbWVudChlbGVtZW50LCAneScsIGN1clNjcm9sbFRvcCk7XG4gICAgfVxuICB9XG4gIHNjcm9sbGFibGUuc2Nyb2xsV2lkdGggPSBzY3JvbGxhYmxlLmNsaWVudFdpZHRoICsgbWF4U2Nyb2xsTGVmdDtcbiAgc2Nyb2xsYWJsZS5zY3JvbGxIZWlnaHQgPSBzY3JvbGxhYmxlLmNsaWVudEhlaWdodCArIG1heFNjcm9sbFRvcDtcblxuICAvLyBjbGllbnRYL1lcbiAgbGV0IHJlY3Q7XG4gIGlmIChpc1dpbmRvdykge1xuICAgIHNjcm9sbGFibGUuY2xpZW50WCA9IHNjcm9sbGFibGUuY2xpZW50WSA9IDA7XG4gIH0gZWxzZSB7IC8vIHBhZGRpbmctYm94XG4gICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKCFjbXBTdHlsZUVsZW1lbnQpIHsgY21wU3R5bGVFbGVtZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCAnJykgfVxuICAgIHNjcm9sbGFibGUuY2xpZW50WCA9IHJlY3QubGVmdCArIChwYXJzZUZsb2F0KGNtcFN0eWxlRWxlbWVudC5ib3JkZXJMZWZ0V2lkdGgpIHx8IDApO1xuICAgIHNjcm9sbGFibGUuY2xpZW50WSA9IHJlY3QudG9wICsgKHBhcnNlRmxvYXQoY21wU3R5bGVFbGVtZW50LmJvcmRlclRvcFdpZHRoKSB8fCAwKTtcbiAgfVxuXG4gIHJldHVybiBzY3JvbGxhYmxlO1xufVxuLy8gWy9BVVRPLVNDUk9MTF1cblxuLy8gW0RFQlVHXVxud2luZG93Lmluc1Byb3BzID0gaW5zUHJvcHM7XG53aW5kb3cuSVNfV0VCS0lUID0gSVNfV0VCS0lUO1xud2luZG93LklTX0dFQ0tPID0gSVNfR0VDS087IC8vIFtTVkcvXVxuLy8gW1NOQVBdXG53aW5kb3cuU05BUF9HUkFWSVRZID0gU05BUF9HUkFWSVRZO1xud2luZG93LlNOQVBfQ09STkVSID0gU05BUF9DT1JORVI7XG53aW5kb3cuU05BUF9TSURFID0gU05BUF9TSURFO1xud2luZG93LlNOQVBfRURHRSA9IFNOQVBfRURHRTtcbndpbmRvdy5TTkFQX0JBU0UgPSBTTkFQX0JBU0U7XG53aW5kb3cuU05BUF9BTExfQ09STkVSUyA9IFNOQVBfQUxMX0NPUk5FUlM7XG53aW5kb3cuU05BUF9BTExfU0lERVMgPSBTTkFQX0FMTF9TSURFUztcbndpbmRvdy5TTkFQX0FMTF9FREdFUyA9IFNOQVBfQUxMX0VER0VTO1xuLy8gWy9TTkFQXVxuLy8gW0FVVE8tU0NST0xMXVxud2luZG93LkFVVE9TQ1JPTExfU1BFRUQgPSBBVVRPU0NST0xMX1NQRUVEO1xud2luZG93LkFVVE9TQ1JPTExfU0VOU0lUSVZJVFkgPSBBVVRPU0NST0xMX1NFTlNJVElWSVRZO1xuLy8gWy9BVVRPLVNDUk9MTF1cbi8vIFsvREVCVUddXG5cbmZ1bmN0aW9uIGNvcHlUcmVlKG9iaikge1xuICByZXR1cm4gIW9iaiA/IG9iaiA6XG4gICAgaXNPYmplY3Qob2JqKSA/IE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChjb3B5T2JqLCBrZXkpID0+IHtcbiAgICAgIGNvcHlPYmpba2V5XSA9IGNvcHlUcmVlKG9ialtrZXldKTtcbiAgICAgIHJldHVybiBjb3B5T2JqO1xuICAgIH0sIHt9KSA6XG4gICAgQXJyYXkuaXNBcnJheShvYmopID8gb2JqLm1hcChjb3B5VHJlZSkgOiBvYmo7XG59XG5cbmZ1bmN0aW9uIGhhc0NoYW5nZWQoYSwgYikge1xuICBsZXQgdHlwZUEsIGtleXNBO1xuICByZXR1cm4gdHlwZW9mIGEgIT09IHR5cGVvZiBiIHx8XG4gICAgKHR5cGVBID0gaXNPYmplY3QoYSkgPyAnb2JqJyA6IEFycmF5LmlzQXJyYXkoYSkgPyAnYXJyYXknIDogJycpICE9PVxuICAgICAgKGlzT2JqZWN0KGIpID8gJ29iaicgOiBBcnJheS5pc0FycmF5KGIpID8gJ2FycmF5JyA6ICcnKSB8fFxuICAgIChcbiAgICAgIHR5cGVBID09PSAnb2JqJ1xuICAgICAgICA/IGhhc0NoYW5nZWQoKGtleXNBID0gT2JqZWN0LmtleXMoYSkuc29ydCgpKSwgT2JqZWN0LmtleXMoYikuc29ydCgpKSB8fFxuICAgICAgICAgIGtleXNBLnNvbWUocHJvcCA9PiBoYXNDaGFuZ2VkKGFbcHJvcF0sIGJbcHJvcF0pKSA6XG4gICAgICAgIHR5cGVBID09PSAnYXJyYXknXG4gICAgICAgICAgPyBhLmxlbmd0aCAhPT0gYi5sZW5ndGggfHwgYS5zb21lKChhVmFsLCBpKSA9PiBoYXNDaGFuZ2VkKGFWYWwsIGJbaV0pKSA6XG4gICAgICAgICAgYSAhPT0gYlxuICAgICk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gQSB0YXJnZXQgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgY29ubmVjdGVkIGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIGlzRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiAhIShlbGVtZW50ICYmXG4gICAgZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcbiAgICAvLyBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiZcbiAgICB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicgJiZcbiAgICAhKGVsZW1lbnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZG9jdW1lbnQpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9ESVNDT05ORUNURUQpKTtcbn1cbndpbmRvdy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7IC8vIFtERUJVRy9dXG5cbi8qKlxuICogQW4gb2JqZWN0IHRoYXQgc2ltdWxhdGVzIGBET01SZWN0YCB0byBpbmRpY2F0ZSBhIGJvdW5kaW5nLWJveC5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJCb3hcbiAqIEBwcm9wZXJ0eSB7KG51bWJlcnxudWxsKX0gbGVmdCAtIGRvY3VtZW50IGNvb3JkaW5hdGVcbiAqIEBwcm9wZXJ0eSB7KG51bWJlcnxudWxsKX0gdG9wIC0gZG9jdW1lbnQgY29vcmRpbmF0ZVxuICogQHByb3BlcnR5IHsobnVtYmVyfG51bGwpfSByaWdodCAtIGRvY3VtZW50IGNvb3JkaW5hdGVcbiAqIEBwcm9wZXJ0eSB7KG51bWJlcnxudWxsKX0gYm90dG9tIC0gZG9jdW1lbnQgY29vcmRpbmF0ZVxuICogQHByb3BlcnR5IHsobnVtYmVyfG51bGwpfSB4IC0gU3Vic3RpdHV0ZXMgZm9yIGxlZnRcbiAqIEBwcm9wZXJ0eSB7KG51bWJlcnxudWxsKX0geSAtIFN1YnN0aXR1dGVzIGZvciB0b3BcbiAqIEBwcm9wZXJ0eSB7KG51bWJlcnxudWxsKX0gd2lkdGhcbiAqIEBwcm9wZXJ0eSB7KG51bWJlcnxudWxsKX0gaGVpZ2h0XG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYkJveCAtIEEgdGFyZ2V0IG9iamVjdC5cbiAqIEByZXR1cm5zIHsoQkJveHxudWxsKX0gQSBub3JtYWxpemVkIGBCQm94YCwgb3IgbnVsbCBpZiBgYkJveGAgaXMgaW52YWxpZC5cbiAqL1xuZnVuY3Rpb24gdmFsaWRCQm94KGJCb3gpIHtcbiAgaWYgKCFpc09iamVjdChiQm94KSkgeyByZXR1cm4gbnVsbCB9XG4gIGxldCB2YWx1ZTtcbiAgaWYgKGlzRmluaXRlKCh2YWx1ZSA9IGJCb3gubGVmdCkpIHx8IGlzRmluaXRlKCh2YWx1ZSA9IGJCb3gueCkpKSB7XG4gICAgYkJveC5sZWZ0ID0gYkJveC54ID0gdmFsdWU7XG4gIH0gZWxzZSB7IHJldHVybiBudWxsIH1cbiAgaWYgKGlzRmluaXRlKCh2YWx1ZSA9IGJCb3gudG9wKSkgfHwgaXNGaW5pdGUoKHZhbHVlID0gYkJveC55KSkpIHtcbiAgICBiQm94LnRvcCA9IGJCb3gueSA9IHZhbHVlO1xuICB9IGVsc2UgeyByZXR1cm4gbnVsbCB9XG5cbiAgaWYgKGlzRmluaXRlKGJCb3gud2lkdGgpICYmIGJCb3gud2lkdGggPj0gMCkge1xuICAgIGJCb3gucmlnaHQgPSBiQm94LmxlZnQgKyBiQm94LndpZHRoO1xuICB9IGVsc2UgaWYgKGlzRmluaXRlKGJCb3gucmlnaHQpICYmIGJCb3gucmlnaHQgPj0gYkJveC5sZWZ0KSB7XG4gICAgYkJveC53aWR0aCA9IGJCb3gucmlnaHQgLSBiQm94LmxlZnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGlzRmluaXRlKGJCb3guaGVpZ2h0KSAmJiBiQm94LmhlaWdodCA+PSAwKSB7XG4gICAgYkJveC5ib3R0b20gPSBiQm94LnRvcCArIGJCb3guaGVpZ2h0O1xuICB9IGVsc2UgaWYgKGlzRmluaXRlKGJCb3guYm90dG9tKSAmJiBiQm94LmJvdHRvbSA+PSBiQm94LnRvcCkge1xuICAgIGJCb3guaGVpZ2h0ID0gYkJveC5ib3R0b20gLSBiQm94LnRvcDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gYkJveDtcbn1cbndpbmRvdy52YWxpZEJCb3ggPSB2YWxpZEJCb3g7IC8vIFtERUJVRy9dXG5cbi8qKlxuICogQSB2YWx1ZSB0aGF0IGlzIFBpeGVscyBvciBSYXRpb1xuICogQHR5cGVkZWYge3t2YWx1ZTogbnVtYmVyLCBpc1JhdGlvOiBib29sZWFufX0gUFBWYWx1ZVxuICovXG5cbmZ1bmN0aW9uIHZhbGlkUFBWYWx1ZSh2YWx1ZSkge1xuXG4gIC8vIEdldCBQUFZhbHVlIGZyb20gc3RyaW5nIChhbGwgYC9zYCB3ZXJlIGFscmVhZHkgcmVtb3ZlZClcbiAgZnVuY3Rpb24gc3RyaW5nMlBQVmFsdWUoaW5TdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gL14oLis/KSglKT8kLy5leGVjKGluU3RyaW5nKTtcbiAgICBsZXQgdmFsdWUsIGlzUmF0aW87XG4gICAgcmV0dXJuIG1hdGNoZXMgJiYgaXNGaW5pdGUoKHZhbHVlID0gcGFyc2VGbG9hdChtYXRjaGVzWzFdKSkpXG4gICAgICA/IHt2YWx1ZTogKGlzUmF0aW8gPSAhIShtYXRjaGVzWzJdICYmIHZhbHVlKSkgPyB2YWx1ZSAvIDEwMCA6IHZhbHVlLCBpc1JhdGlvfSA6IG51bGw7IC8vIDAlIC0+IDBcbiAgfVxuXG4gIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgPyB7dmFsdWUsIGlzUmF0aW86IGZhbHNlfSA6XG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHN0cmluZzJQUFZhbHVlKHZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJykpIDogbnVsbDtcbn1cbndpbmRvdy52YWxpZFBQVmFsdWUgPSB2YWxpZFBQVmFsdWU7IC8vIFtERUJVRy9dXG5cbmZ1bmN0aW9uIHBwVmFsdWUyT3B0aW9uVmFsdWUocHBWYWx1ZSkge1xuICByZXR1cm4gcHBWYWx1ZS5pc1JhdGlvID8gYCR7cHBWYWx1ZS52YWx1ZSAqIDEwMH0lYCA6IHBwVmFsdWUudmFsdWU7XG59XG53aW5kb3cucHBWYWx1ZTJPcHRpb25WYWx1ZSA9IHBwVmFsdWUyT3B0aW9uVmFsdWU7IC8vIFtERUJVRy9dXG5cbmZ1bmN0aW9uIHJlc29sdmVQUFZhbHVlKHBwVmFsdWUsIGJhc2VPcmlnaW4sIGJhc2VTaXplKSB7XG4gIHJldHVybiB0eXBlb2YgcHBWYWx1ZSA9PT0gJ251bWJlcicgPyBwcFZhbHVlIDpcbiAgICBiYXNlT3JpZ2luICsgcHBWYWx1ZS52YWx1ZSAqIChwcFZhbHVlLmlzUmF0aW8gPyBiYXNlU2l6ZSA6IDEpO1xufVxuXG4vKipcbiAqIEFuIG9iamVjdCB0aGF0IHNpbXVsYXRlcyBCQm94IGJ1dCBwcm9wZXJ0aWVzIGFyZSBQUFZhbHVlLlxuICogQHR5cGVkZWYge09iamVjdH0gUFBCQm94XG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYkJveCAtIEEgdGFyZ2V0IG9iamVjdC5cbiAqIEByZXR1cm5zIHsoUFBCQm94fG51bGwpfSBBIG5vcm1hbGl6ZWQgYFBQQkJveGAsIG9yIG51bGwgaWYgYGJCb3hgIGlzIGludmFsaWQuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkUFBCQm94KGJCb3gpIHtcbiAgaWYgKCFpc09iamVjdChiQm94KSkgeyByZXR1cm4gbnVsbCB9XG4gIGxldCBwcFZhbHVlO1xuICBpZiAoKHBwVmFsdWUgPSB2YWxpZFBQVmFsdWUoYkJveC5sZWZ0KSkgfHwgKHBwVmFsdWUgPSB2YWxpZFBQVmFsdWUoYkJveC54KSkpIHtcbiAgICBiQm94LmxlZnQgPSBiQm94LnggPSBwcFZhbHVlO1xuICB9IGVsc2UgeyByZXR1cm4gbnVsbCB9XG4gIGlmICgocHBWYWx1ZSA9IHZhbGlkUFBWYWx1ZShiQm94LnRvcCkpIHx8IChwcFZhbHVlID0gdmFsaWRQUFZhbHVlKGJCb3gueSkpKSB7XG4gICAgYkJveC50b3AgPSBiQm94LnkgPSBwcFZhbHVlO1xuICB9IGVsc2UgeyByZXR1cm4gbnVsbCB9XG5cbiAgaWYgKChwcFZhbHVlID0gdmFsaWRQUFZhbHVlKGJCb3gud2lkdGgpKSAmJiBwcFZhbHVlLnZhbHVlID49IDApIHtcbiAgICBiQm94LndpZHRoID0gcHBWYWx1ZTtcbiAgICBkZWxldGUgYkJveC5yaWdodDtcbiAgfSBlbHNlIGlmICgocHBWYWx1ZSA9IHZhbGlkUFBWYWx1ZShiQm94LnJpZ2h0KSkpIHtcbiAgICBiQm94LnJpZ2h0ID0gcHBWYWx1ZTtcbiAgICBkZWxldGUgYkJveC53aWR0aDtcbiAgfSBlbHNlIHsgcmV0dXJuIG51bGwgfVxuICBpZiAoKHBwVmFsdWUgPSB2YWxpZFBQVmFsdWUoYkJveC5oZWlnaHQpKSAmJiBwcFZhbHVlLnZhbHVlID49IDApIHtcbiAgICBiQm94LmhlaWdodCA9IHBwVmFsdWU7XG4gICAgZGVsZXRlIGJCb3guYm90dG9tO1xuICB9IGVsc2UgaWYgKChwcFZhbHVlID0gdmFsaWRQUFZhbHVlKGJCb3guYm90dG9tKSkpIHtcbiAgICBiQm94LmJvdHRvbSA9IHBwVmFsdWU7XG4gICAgZGVsZXRlIGJCb3guaGVpZ2h0O1xuICB9IGVsc2UgeyByZXR1cm4gbnVsbCB9XG4gIHJldHVybiBiQm94O1xufVxud2luZG93LnZhbGlkUFBCQm94ID0gdmFsaWRQUEJCb3g7IC8vIFtERUJVRy9dXG5cbmZ1bmN0aW9uIHBwQkJveDJPcHRpb25PYmplY3QocHBCQm94KSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhwcEJCb3gpLnJlZHVjZSgob2JqLCBwcm9wKSA9PiB7XG4gICAgb2JqW3Byb3BdID0gcHBWYWx1ZTJPcHRpb25WYWx1ZShwcEJCb3hbcHJvcF0pO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn1cbndpbmRvdy5wcEJCb3gyT3B0aW9uT2JqZWN0ID0gcHBCQm94Mk9wdGlvbk9iamVjdDsgLy8gW0RFQlVHL11cblxuLy8gUFBCQm94IC0+IEJCb3hcbmZ1bmN0aW9uIHJlc29sdmVQUEJCb3gocHBCQm94LCBiYXNlQkJveCkge1xuICBjb25zdCBwcm9wMkF4aXMgPSB7bGVmdDogJ3gnLCByaWdodDogJ3gnLCB4OiAneCcsIHdpZHRoOiAneCcsXG4gICAgICB0b3A6ICd5JywgYm90dG9tOiAneScsIHk6ICd5JywgaGVpZ2h0OiAneSd9LFxuICAgIGJhc2VPcmlnaW5YWSA9IHt4OiBiYXNlQkJveC5sZWZ0LCB5OiBiYXNlQkJveC50b3B9LFxuICAgIGJhc2VTaXplWFkgPSB7eDogYmFzZUJCb3gud2lkdGgsIHk6IGJhc2VCQm94LmhlaWdodH07XG4gIHJldHVybiB2YWxpZEJCb3goT2JqZWN0LmtleXMocHBCQm94KS5yZWR1Y2UoKGJCb3gsIHByb3ApID0+IHtcbiAgICBiQm94W3Byb3BdID0gcmVzb2x2ZVBQVmFsdWUocHBCQm94W3Byb3BdLFxuICAgICAgcHJvcCA9PT0gJ3dpZHRoJyB8fCBwcm9wID09PSAnaGVpZ2h0JyA/IDAgOiBiYXNlT3JpZ2luWFlbcHJvcDJBeGlzW3Byb3BdXSxcbiAgICAgIGJhc2VTaXplWFlbcHJvcDJBeGlzW3Byb3BdXSk7XG4gICAgcmV0dXJuIGJCb3g7XG4gIH0sIHt9KSk7XG59XG53aW5kb3cucmVzb2x2ZVBQQkJveCA9IHJlc29sdmVQUEJCb3g7IC8vIFtERUJVRy9dXG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gQSB0YXJnZXQgZWxlbWVudC5cbiAqIEBwYXJhbSB7P2Jvb2xlYW59IGdldFBhZGRpbmdCb3ggLSBHZXQgcGFkZGluZy1ib3ggaW5zdGVhZCBvZiBib3JkZXItYm94IGFzIGJvdW5kaW5nLWJveC5cbiAqIEByZXR1cm5zIHtCQm94fSBBIGJvdW5kaW5nLWJveCBvZiBgZWxlbWVudGAuXG4gKi9cbmZ1bmN0aW9uIGdldEJCb3goZWxlbWVudCwgZ2V0UGFkZGluZ0JveCkge1xuICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICBiQm94ID0ge2xlZnQ6IHJlY3QubGVmdCwgdG9wOiByZWN0LnRvcCwgd2lkdGg6IHJlY3Qud2lkdGgsIGhlaWdodDogcmVjdC5oZWlnaHR9O1xuICBiQm94LmxlZnQgKz0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICBiQm94LnRvcCArPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIGlmIChnZXRQYWRkaW5nQm94KSB7XG4gICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCAnJyksXG4gICAgICBib3JkZXJUb3AgPSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclRvcFdpZHRoKSB8fCAwLFxuICAgICAgYm9yZGVyUmlnaHQgPSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpIHx8IDAsXG4gICAgICBib3JkZXJCb3R0b20gPSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKSB8fCAwLFxuICAgICAgYm9yZGVyTGVmdCA9IHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSB8fCAwO1xuICAgIGJCb3gubGVmdCArPSBib3JkZXJMZWZ0O1xuICAgIGJCb3gudG9wICs9IGJvcmRlclRvcDtcbiAgICBiQm94LndpZHRoIC09IGJvcmRlckxlZnQgKyBib3JkZXJSaWdodDtcbiAgICBiQm94LmhlaWdodCAtPSBib3JkZXJUb3AgKyBib3JkZXJCb3R0b207XG4gIH1cbiAgcmV0dXJuIHZhbGlkQkJveChiQm94KTtcbn1cbndpbmRvdy5nZXRCQm94ID0gZ2V0QkJveDsgLy8gW0RFQlVHL11cblxuLyoqXG4gKiBPcHRpbWl6ZSBhbiBlbGVtZW50IGZvciBhbmltYXRpb24uXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBBIHRhcmdldCBlbGVtZW50LlxuICogQHBhcmFtIHs/Ym9vbGVhbn0gZ3B1VHJpZ2dlciAtIEluaXRpYWxpemUgZm9yIFNWR0VsZW1lbnQgaWYgYHRydWVgLlxuICogQHJldHVybnMge0VsZW1lbnR9IEEgdGFyZ2V0IGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIGluaXRBbmltKGVsZW1lbnQsIGdwdVRyaWdnZXIpIHtcbiAgY29uc3Qgc3R5bGUgPSBlbGVtZW50LnN0eWxlO1xuICBzdHlsZS53ZWJraXRUYXBIaWdobGlnaHRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cbiAgLy8gT25seSB3aGVuIGl0IGhhcyBubyBzaGFkb3dcbiAgY29uc3QgY3NzUHJvcEJveFNoYWRvdyA9IENTU1ByZWZpeC5nZXROYW1lKCdib3hTaGFkb3cnKSxcbiAgICBib3hTaGFkb3cgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCAnJylbY3NzUHJvcEJveFNoYWRvd107XG4gIGlmICghYm94U2hhZG93IHx8IGJveFNoYWRvdyA9PT0gJ25vbmUnKSB7XG4gICAgc3R5bGVbY3NzUHJvcEJveFNoYWRvd10gPSAnMCAwIDFweCB0cmFuc3BhcmVudCc7XG4gIH1cblxuICBpZiAoZ3B1VHJpZ2dlciAmJiBjc3NQcm9wVHJhbnNmb3JtKSB7IHN0eWxlW2Nzc1Byb3BUcmFuc2Zvcm1dID0gJ3RyYW5zbGF0ZVooMCknIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHNldERyYWdnYWJsZUN1cnNvcihlbGVtZW50LCBvcmdDdXJzb3IpIHtcbiAgaWYgKGNzc1ZhbHVlRHJhZ2dhYmxlQ3Vyc29yID09IG51bGwpIHtcbiAgICBpZiAoY3NzV2FudGVkVmFsdWVEcmFnZ2FibGVDdXJzb3IgIT09IGZhbHNlKSB7XG4gICAgICBjc3NWYWx1ZURyYWdnYWJsZUN1cnNvciA9IENTU1ByZWZpeC5nZXRWYWx1ZSgnY3Vyc29yJywgY3NzV2FudGVkVmFsdWVEcmFnZ2FibGVDdXJzb3IpO1xuICAgIH1cbiAgICAvLyBUaGUgd2FudGVkIHZhbHVlIHdhcyBkZW5pZWQsIG9yIGNoYW5naW5nIGlzIG5vdCB3YW50ZWQuXG4gICAgaWYgKGNzc1ZhbHVlRHJhZ2dhYmxlQ3Vyc29yID09IG51bGwpIHsgY3NzVmFsdWVEcmFnZ2FibGVDdXJzb3IgPSBmYWxzZSB9XG4gIH1cbiAgLy8gVXBkYXRlIGl0IHRvIGNoYW5nZSBhIHN0YXRlIGV2ZW4gaWYgY3NzVmFsdWVEcmFnZ2FibGVDdXJzb3IgaXMgZmFsc2UuXG4gIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gY3NzVmFsdWVEcmFnZ2FibGVDdXJzb3IgPT09IGZhbHNlID8gb3JnQ3Vyc29yIDogY3NzVmFsdWVEcmFnZ2FibGVDdXJzb3I7XG59XG5cbmZ1bmN0aW9uIHNldERyYWdnaW5nQ3Vyc29yKGVsZW1lbnQpIHtcbiAgaWYgKGNzc1ZhbHVlRHJhZ2dpbmdDdXJzb3IgPT0gbnVsbCkge1xuICAgIGlmIChjc3NXYW50ZWRWYWx1ZURyYWdnaW5nQ3Vyc29yICE9PSBmYWxzZSkge1xuICAgICAgY3NzVmFsdWVEcmFnZ2luZ0N1cnNvciA9IENTU1ByZWZpeC5nZXRWYWx1ZSgnY3Vyc29yJywgY3NzV2FudGVkVmFsdWVEcmFnZ2luZ0N1cnNvcik7XG4gICAgfVxuICAgIC8vIFRoZSB3YW50ZWQgdmFsdWUgd2FzIGRlbmllZCwgb3IgY2hhbmdpbmcgaXMgbm90IHdhbnRlZC5cbiAgICBpZiAoY3NzVmFsdWVEcmFnZ2luZ0N1cnNvciA9PSBudWxsKSB7IGNzc1ZhbHVlRHJhZ2dpbmdDdXJzb3IgPSBmYWxzZSB9XG4gIH1cbiAgaWYgKGNzc1ZhbHVlRHJhZ2dpbmdDdXJzb3IgIT09IGZhbHNlKSB7IGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gY3NzVmFsdWVEcmFnZ2luZ0N1cnNvciB9XG59XG5cbi8vIFtTVkddXG4vKipcbiAqIEdldCBTVkcgY29vcmRpbmF0ZXMgZnJvbSB2aWV3cG9ydCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7cHJvcHN9IHByb3BzIC0gYHByb3BzYCBvZiBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjbGllbnRYIC0gdmlld3BvcnQgWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjbGllbnRZIC0gdmlld3BvcnQgWS5cbiAqIEByZXR1cm5zIHtTVkdQb2ludH0gU1ZHIGNvb3JkaW5hdGVzLlxuICovXG5mdW5jdGlvbiB2aWV3UG9pbnQyU3ZnUG9pbnQocHJvcHMsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgY29uc3Qgc3ZnUG9pbnQgPSBwcm9wcy5zdmdQb2ludDtcbiAgc3ZnUG9pbnQueCA9IGNsaWVudFg7XG4gIHN2Z1BvaW50LnkgPSBjbGllbnRZO1xuICByZXR1cm4gc3ZnUG9pbnQubWF0cml4VHJhbnNmb3JtKHByb3BzLnN2Z0N0bUVsZW1lbnQuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpKTtcbn1cbi8vIFsvU1ZHXVxuXG4vKipcbiAqIE1vdmUgYnkgYHRyYW5zbGF0ZWAuXG4gKiBAcGFyYW0ge3Byb3BzfSBwcm9wcyAtIGBwcm9wc2Agb2YgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge3tsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfX0gcG9zaXRpb24gLSBOZXcgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIGl0IHdhcyBtb3ZlZC5cbiAqL1xuZnVuY3Rpb24gbW92ZVRyYW5zbGF0ZShwcm9wcywgcG9zaXRpb24pIHtcbiAgY29uc3QgZWxlbWVudEJCb3ggPSBwcm9wcy5lbGVtZW50QkJveDtcbiAgaWYgKHBvc2l0aW9uLmxlZnQgIT09IGVsZW1lbnRCQm94LmxlZnQgfHwgcG9zaXRpb24udG9wICE9PSBlbGVtZW50QkJveC50b3ApIHtcbiAgICBjb25zdCBvZmZzZXQgPSBwcm9wcy5odG1sT2Zmc2V0O1xuICAgIHByb3BzLmVsZW1lbnRTdHlsZVtjc3NQcm9wVHJhbnNmb3JtXSA9XG4gICAgICBgdHJhbnNsYXRlKCR7cG9zaXRpb24ubGVmdCArIG9mZnNldC5sZWZ0fXB4LCAke3Bvc2l0aW9uLnRvcCArIG9mZnNldC50b3B9cHgpYDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIFtMRUZUVE9QXVxuLyoqXG4gKiBNb3ZlIGJ5IGBsZWZ0YCBhbmQgYHRvcGAuXG4gKiBAcGFyYW0ge3Byb3BzfSBwcm9wcyAtIGBwcm9wc2Agb2YgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge3tsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfX0gcG9zaXRpb24gLSBOZXcgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIGl0IHdhcyBtb3ZlZC5cbiAqL1xuZnVuY3Rpb24gbW92ZUxlZnRUb3AocHJvcHMsIHBvc2l0aW9uKSB7XG4gIGNvbnN0IGVsZW1lbnRCQm94ID0gcHJvcHMuZWxlbWVudEJCb3gsXG4gICAgZWxlbWVudFN0eWxlID0gcHJvcHMuZWxlbWVudFN0eWxlLFxuICAgIG9mZnNldCA9IHByb3BzLmh0bWxPZmZzZXQ7XG4gIGxldCBtb3ZlZCA9IGZhbHNlO1xuICBpZiAocG9zaXRpb24ubGVmdCAhPT0gZWxlbWVudEJCb3gubGVmdCkge1xuICAgIGVsZW1lbnRTdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdCArIG9mZnNldC5sZWZ0ICsgJ3B4JztcbiAgICBtb3ZlZCA9IHRydWU7XG4gIH1cbiAgaWYgKHBvc2l0aW9uLnRvcCAhPT0gZWxlbWVudEJCb3gudG9wKSB7XG4gICAgZWxlbWVudFN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcCArIG9mZnNldC50b3AgKyAncHgnO1xuICAgIG1vdmVkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gbW92ZWQ7XG59XG4vLyBbL0xFRlRUT1BdXG5cbi8vIFtTVkddXG4vKipcbiAqIE1vdmUgU1ZHRWxlbWVudC5cbiAqIEBwYXJhbSB7cHJvcHN9IHByb3BzIC0gYHByb3BzYCBvZiBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7e2xlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9fSBwb3NpdGlvbiAtIE5ldyBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgaXQgd2FzIG1vdmVkLlxuICovXG5mdW5jdGlvbiBtb3ZlU3ZnKHByb3BzLCBwb3NpdGlvbikge1xuICBjb25zdCBlbGVtZW50QkJveCA9IHByb3BzLmVsZW1lbnRCQm94O1xuICBpZiAocG9zaXRpb24ubGVmdCAhPT0gZWxlbWVudEJCb3gubGVmdCB8fCBwb3NpdGlvbi50b3AgIT09IGVsZW1lbnRCQm94LnRvcCkge1xuICAgIGNvbnN0IG9mZnNldCA9IHByb3BzLnN2Z09mZnNldCxcbiAgICAgIG9yaWdpbkJCb3ggPSBwcm9wcy5zdmdPcmlnaW5CQm94LFxuICAgICAgcG9pbnQgPSB2aWV3UG9pbnQyU3ZnUG9pbnQocHJvcHMsXG4gICAgICAgIHBvc2l0aW9uLmxlZnQgLSB3aW5kb3cucGFnZVhPZmZzZXQsIHBvc2l0aW9uLnRvcCAtIHdpbmRvdy5wYWdlWU9mZnNldCk7XG4gICAgcHJvcHMuc3ZnVHJhbnNmb3JtLnNldFRyYW5zbGF0ZShwb2ludC54ICsgb2Zmc2V0LnggLSBvcmlnaW5CQm94LngsIHBvaW50LnkgKyBvZmZzZXQueSAtIG9yaWdpbkJCb3gueSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuLy8gWy9TVkddXG5cbi8qKlxuICogU2V0IGBwcm9wcy5lbGVtZW50YCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7cHJvcHN9IHByb3BzIC0gYHByb3BzYCBvZiBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7e2xlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9fSBwb3NpdGlvbiAtIE5ldyBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYkNoZWNrXSAtIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdpdGggdmFsaWQgcG9zaXRpb24sIGNhbmNlbCBtb3ZpbmcgaWYgaXQgcmV0dXJucyBgZmFsc2VgLlxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiBpdCB3YXMgbW92ZWQuXG4gKi9cbmZ1bmN0aW9uIG1vdmUocHJvcHMsIHBvc2l0aW9uLCBjYkNoZWNrKSB7XG4gIGNvbnN0IGVsZW1lbnRCQm94ID0gcHJvcHMuZWxlbWVudEJCb3g7XG5cbiAgZnVuY3Rpb24gZml4KCkge1xuICAgIGlmIChwcm9wcy5taW5MZWZ0ID49IHByb3BzLm1heExlZnQpIHsgLy8gRGlzYWJsZWRcbiAgICAgIHBvc2l0aW9uLmxlZnQgPSBlbGVtZW50QkJveC5sZWZ0O1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24ubGVmdCA8IHByb3BzLm1pbkxlZnQpIHtcbiAgICAgIHBvc2l0aW9uLmxlZnQgPSBwcm9wcy5taW5MZWZ0O1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24ubGVmdCA+IHByb3BzLm1heExlZnQpIHtcbiAgICAgIHBvc2l0aW9uLmxlZnQgPSBwcm9wcy5tYXhMZWZ0O1xuICAgIH1cbiAgICBpZiAocHJvcHMubWluVG9wID49IHByb3BzLm1heFRvcCkgeyAvLyBEaXNhYmxlZFxuICAgICAgcG9zaXRpb24udG9wID0gZWxlbWVudEJCb3gudG9wO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24udG9wIDwgcHJvcHMubWluVG9wKSB7XG4gICAgICBwb3NpdGlvbi50b3AgPSBwcm9wcy5taW5Ub3A7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbi50b3AgPiBwcm9wcy5tYXhUb3ApIHtcbiAgICAgIHBvc2l0aW9uLnRvcCA9IHByb3BzLm1heFRvcDtcbiAgICB9XG4gIH1cblxuICBmaXgoKTtcbiAgaWYgKGNiQ2hlY2spIHtcbiAgICBpZiAoY2JDaGVjayhwb3NpdGlvbikgPT09IGZhbHNlKSB7IHJldHVybiBmYWxzZSB9XG4gICAgZml4KCk7IC8vIEFnYWluXG4gIH1cblxuICBjb25zdCBtb3ZlZCA9IHByb3BzLm1vdmVFbG0ocHJvcHMsIHBvc2l0aW9uKTtcbiAgaWYgKG1vdmVkKSB7IC8vIFVwZGF0ZSBlbGVtZW50QkJveFxuICAgIHByb3BzLmVsZW1lbnRCQm94ID0gdmFsaWRCQm94KHtsZWZ0OiBwb3NpdGlvbi5sZWZ0LCB0b3A6IHBvc2l0aW9uLnRvcCxcbiAgICAgIHdpZHRoOiBlbGVtZW50QkJveC53aWR0aCwgaGVpZ2h0OiBlbGVtZW50QkJveC5oZWlnaHR9KTtcbiAgfVxuICByZXR1cm4gbW92ZWQ7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBIVE1MRWxlbWVudCBmb3IgYHRyYW5zbGF0ZWAsIGFuZCBnZXQgYG9mZnNldGAgdGhhdCBpcyB1c2VkIGJ5IGBtb3ZlVHJhbnNsYXRlYC5cbiAqIEBwYXJhbSB7cHJvcHN9IHByb3BzIC0gYHByb3BzYCBvZiBpbnN0YW5jZS5cbiAqIEByZXR1cm5zIHtCQm94fSBDdXJyZW50IEJCb3ggd2l0aG91dCBhbmltYXRpb24sIGkuZS4gbGVmdC90b3AgcHJvcGVydGllcy5cbiAqL1xuZnVuY3Rpb24gaW5pdFRyYW5zbGF0ZShwcm9wcykge1xuICBjb25zdCBlbGVtZW50ID0gcHJvcHMuZWxlbWVudCxcbiAgICBlbGVtZW50U3R5bGUgPSBwcm9wcy5lbGVtZW50U3R5bGUsXG4gICAgY3VyUG9zaXRpb24gPSBnZXRCQm94KGVsZW1lbnQpLCAvLyBHZXQgQkJveCBiZWZvcmUgY2hhbmdlIHN0eWxlLlxuICAgIFJFU1RPUkVfUFJPUFMgPSBbJ2Rpc3BsYXknLCAnbWFyZ2luVG9wJywgJ21hcmdpbkJvdHRvbScsICd3aWR0aCcsICdoZWlnaHQnXTtcbiAgUkVTVE9SRV9QUk9QUy51bnNoaWZ0KGNzc1Byb3BUcmFuc2Zvcm0pO1xuXG4gIC8vIFJlc2V0IGB0cmFuc2l0aW9uLXByb3BlcnR5YCBldmVyeSB0aW1lIGJlY2F1c2UgaXQgbWlnaHQgYmUgY2hhbmdlZCBmcmVxdWVudGx5LlxuICBjb25zdCBvcmdUcmFuc2l0aW9uUHJvcGVydHkgPSBlbGVtZW50U3R5bGVbY3NzUHJvcFRyYW5zaXRpb25Qcm9wZXJ0eV07XG4gIGVsZW1lbnRTdHlsZVtjc3NQcm9wVHJhbnNpdGlvblByb3BlcnR5XSA9ICdub25lJzsgLy8gRGlzYWJsZSBhbmltYXRpb25cbiAgY29uc3QgZml4UG9zaXRpb24gPSBnZXRCQm94KGVsZW1lbnQpO1xuXG4gIGlmICghcHJvcHMub3JnU3R5bGUpIHtcbiAgICBwcm9wcy5vcmdTdHlsZSA9IFJFU1RPUkVfUFJPUFMucmVkdWNlKChvcmdTdHlsZSwgcHJvcCkgPT4ge1xuICAgICAgb3JnU3R5bGVbcHJvcF0gPSBlbGVtZW50U3R5bGVbcHJvcF0gfHwgJyc7XG4gICAgICByZXR1cm4gb3JnU3R5bGU7XG4gICAgfSwge30pO1xuICAgIHByb3BzLmxhc3RTdHlsZSA9IHt9O1xuICB9IGVsc2Uge1xuICAgIFJFU1RPUkVfUFJPUFMuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgIC8vIFNraXAgdGhpcyBpZiBpdCBzZWVtcyB1c2VyIGNoYW5nZWQgaXQuIChpdCBjYW4ndCBjaGVjayBwZXJmZWN0bHkuKVxuICAgICAgaWYgKHByb3BzLmxhc3RTdHlsZVtwcm9wXSA9PSBudWxsIHx8IGVsZW1lbnRTdHlsZVtwcm9wXSA9PT0gcHJvcHMubGFzdFN0eWxlW3Byb3BdKSB7XG4gICAgICAgIGVsZW1lbnRTdHlsZVtwcm9wXSA9IHByb3BzLm9yZ1N0eWxlW3Byb3BdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgb3JnU2l6ZSA9IGdldEJCb3goZWxlbWVudCksXG4gICAgY21wU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCAnJyk7XG4gIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3MtdHJhbnNmb3Jtcy0xLyN0cmFuc2Zvcm1hYmxlLWVsZW1lbnRcbiAgaWYgKGNtcFN0eWxlLmRpc3BsYXkgPT09ICdpbmxpbmUnKSB7XG4gICAgZWxlbWVudFN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICBbJ1RvcCcsICdCb3R0b20nXS5mb3JFYWNoKGRpclByb3AgPT4ge1xuICAgICAgY29uc3QgcGFkZGluZyA9IHBhcnNlRmxvYXQoY21wU3R5bGVbYHBhZGRpbmcke2RpclByb3B9YF0pO1xuICAgICAgLy8gcGFkZGluZ1RvcC9Cb3R0b20gbWFrZSBwYWRkaW5nIGJ1dCBkb24ndCBtYWtlIHNwYWNlIC0+IG5lZ2F0aXZlIG1hcmdpbiBpbiBpbmxpbmUtYmxvY2tcbiAgICAgIC8vIG1hcmdpblRvcC9Cb3R0b20gZG9uJ3Qgd29yayBpbiBpbmxpbmUgZWxlbWVudCAtPiBgMGAgaW4gaW5saW5lLWJsb2NrXG4gICAgICBlbGVtZW50U3R5bGVbYG1hcmdpbiR7ZGlyUHJvcH1gXSA9IHBhZGRpbmcgPyBgLSR7cGFkZGluZ31weGAgOiAnMCc7XG4gICAgfSk7XG4gIH1cbiAgZWxlbWVudFN0eWxlW2Nzc1Byb3BUcmFuc2Zvcm1dID0gJ3RyYW5zbGF0ZSgwLCAwKSc7XG4gIC8vIEdldCBkb2N1bWVudCBvZmZzZXQuXG4gIGxldCBuZXdCQm94ID0gZ2V0QkJveChlbGVtZW50KTtcbiAgY29uc3Qgb2Zmc2V0ID0gcHJvcHMuaHRtbE9mZnNldCA9XG4gICAge2xlZnQ6IG5ld0JCb3gubGVmdCA/IC1uZXdCQm94LmxlZnQgOiAwLCB0b3A6IG5ld0JCb3gudG9wID8gLW5ld0JCb3gudG9wIDogMH07IC8vIGF2b2lkIGAtMGBcblxuICAvLyBSZXN0b3JlIHBvc2l0aW9uXG4gIGVsZW1lbnRTdHlsZVtjc3NQcm9wVHJhbnNmb3JtXSA9XG4gICAgYHRyYW5zbGF0ZSgke2N1clBvc2l0aW9uLmxlZnQgKyBvZmZzZXQubGVmdH1weCwgJHtjdXJQb3NpdGlvbi50b3AgKyBvZmZzZXQudG9wfXB4KWA7XG4gIC8vIFJlc3RvcmUgc2l6ZVxuICBbJ3dpZHRoJywgJ2hlaWdodCddLmZvckVhY2gocHJvcCA9PiB7XG4gICAgaWYgKG5ld0JCb3hbcHJvcF0gIT09IG9yZ1NpemVbcHJvcF0pIHtcbiAgICAgIC8vIElnbm9yZSBgYm94LXNpemluZ2BcbiAgICAgIGVsZW1lbnRTdHlsZVtwcm9wXSA9IG9yZ1NpemVbcHJvcF0gKyAncHgnO1xuICAgICAgbmV3QkJveCA9IGdldEJCb3goZWxlbWVudCk7XG4gICAgICBpZiAobmV3QkJveFtwcm9wXSAhPT0gb3JnU2l6ZVtwcm9wXSkgeyAvLyBSZXRyeVxuICAgICAgICBlbGVtZW50U3R5bGVbcHJvcF0gPSBvcmdTaXplW3Byb3BdIC0gKG5ld0JCb3hbcHJvcF0gLSBvcmdTaXplW3Byb3BdKSArICdweCc7XG4gICAgICB9XG4gICAgfVxuICAgIHByb3BzLmxhc3RTdHlsZVtwcm9wXSA9IGVsZW1lbnRTdHlsZVtwcm9wXTtcbiAgfSk7XG5cbiAgLy8gUmVzdG9yZSBgdHJhbnNpdGlvbi1wcm9wZXJ0eWBcbiAgZWxlbWVudC5vZmZzZXRXaWR0aDsgLyogZm9yY2UgcmVmbG93ICovIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gIGVsZW1lbnRTdHlsZVtjc3NQcm9wVHJhbnNpdGlvblByb3BlcnR5XSA9IG9yZ1RyYW5zaXRpb25Qcm9wZXJ0eTtcbiAgaWYgKGZpeFBvc2l0aW9uLmxlZnQgIT09IGN1clBvc2l0aW9uLmxlZnQgfHwgZml4UG9zaXRpb24udG9wICE9PSBjdXJQb3NpdGlvbi50b3ApIHtcbiAgICAvLyBJdCBzZWVtcyB0aGF0IGl0IGlzIG1vdmluZy5cbiAgICBlbGVtZW50U3R5bGVbY3NzUHJvcFRyYW5zZm9ybV0gPVxuICAgICAgYHRyYW5zbGF0ZSgke2ZpeFBvc2l0aW9uLmxlZnQgKyBvZmZzZXQubGVmdH1weCwgJHtmaXhQb3NpdGlvbi50b3AgKyBvZmZzZXQudG9wfXB4KWA7XG4gIH1cblxuICByZXR1cm4gZml4UG9zaXRpb247XG59XG5cbi8vIFtMRUZUVE9QXVxuLyoqXG4gKiBJbml0aWFsaXplIEhUTUxFbGVtZW50IGZvciBgbGVmdGAgYW5kIGB0b3BgLCBhbmQgZ2V0IGBvZmZzZXRgIHRoYXQgaXMgdXNlZCBieSBgbW92ZUxlZnRUb3BgLlxuICogQHBhcmFtIHtwcm9wc30gcHJvcHMgLSBgcHJvcHNgIG9mIGluc3RhbmNlLlxuICogQHJldHVybnMge0JCb3h9IEN1cnJlbnQgQkJveCB3aXRob3V0IGFuaW1hdGlvbiwgaS5lLiBsZWZ0L3RvcCBwcm9wZXJ0aWVzLlxuICovXG5mdW5jdGlvbiBpbml0TGVmdFRvcChwcm9wcykge1xuICBjb25zdCBlbGVtZW50ID0gcHJvcHMuZWxlbWVudCxcbiAgICBlbGVtZW50U3R5bGUgPSBwcm9wcy5lbGVtZW50U3R5bGUsXG4gICAgY3VyUG9zaXRpb24gPSBnZXRCQm94KGVsZW1lbnQpLCAvLyBHZXQgQkJveCBiZWZvcmUgY2hhbmdlIHN0eWxlLlxuICAgIFJFU1RPUkVfUFJPUFMgPSBbJ3Bvc2l0aW9uJywgJ21hcmdpblRvcCcsICdtYXJnaW5SaWdodCcsICdtYXJnaW5Cb3R0b20nLCAnbWFyZ2luTGVmdCcsICd3aWR0aCcsICdoZWlnaHQnXTtcblxuICAvLyBSZXNldCBgdHJhbnNpdGlvbi1wcm9wZXJ0eWAgZXZlcnkgdGltZSBiZWNhdXNlIGl0IG1pZ2h0IGJlIGNoYW5nZWQgZnJlcXVlbnRseS5cbiAgY29uc3Qgb3JnVHJhbnNpdGlvblByb3BlcnR5ID0gZWxlbWVudFN0eWxlW2Nzc1Byb3BUcmFuc2l0aW9uUHJvcGVydHldO1xuICBlbGVtZW50U3R5bGVbY3NzUHJvcFRyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnbm9uZSc7IC8vIERpc2FibGUgYW5pbWF0aW9uXG4gIGNvbnN0IGZpeFBvc2l0aW9uID0gZ2V0QkJveChlbGVtZW50KTtcblxuICBpZiAoIXByb3BzLm9yZ1N0eWxlKSB7XG4gICAgcHJvcHMub3JnU3R5bGUgPSBSRVNUT1JFX1BST1BTLnJlZHVjZSgob3JnU3R5bGUsIHByb3ApID0+IHtcbiAgICAgIG9yZ1N0eWxlW3Byb3BdID0gZWxlbWVudFN0eWxlW3Byb3BdIHx8ICcnO1xuICAgICAgcmV0dXJuIG9yZ1N0eWxlO1xuICAgIH0sIHt9KTtcbiAgICBwcm9wcy5sYXN0U3R5bGUgPSB7fTtcbiAgfSBlbHNlIHtcbiAgICBSRVNUT1JFX1BST1BTLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAvLyBTa2lwIHRoaXMgaWYgaXQgc2VlbXMgdXNlciBjaGFuZ2VkIGl0LiAoaXQgY2FuJ3QgY2hlY2sgcGVyZmVjdGx5LilcbiAgICAgIGlmIChwcm9wcy5sYXN0U3R5bGVbcHJvcF0gPT0gbnVsbCB8fCBlbGVtZW50U3R5bGVbcHJvcF0gPT09IHByb3BzLmxhc3RTdHlsZVtwcm9wXSkge1xuICAgICAgICBlbGVtZW50U3R5bGVbcHJvcF0gPSBwcm9wcy5vcmdTdHlsZVtwcm9wXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IG9yZ1NpemUgPSBnZXRCQm94KGVsZW1lbnQpO1xuICBlbGVtZW50U3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBlbGVtZW50U3R5bGUubGVmdCA9IGVsZW1lbnRTdHlsZS50b3AgPSBlbGVtZW50U3R5bGUubWFyZ2luID0gJzAnO1xuICAvLyBHZXQgZG9jdW1lbnQgb2Zmc2V0LlxuICBsZXQgbmV3QkJveCA9IGdldEJCb3goZWxlbWVudCk7XG4gIGNvbnN0IG9mZnNldCA9IHByb3BzLmh0bWxPZmZzZXQgPVxuICAgIHtsZWZ0OiBuZXdCQm94LmxlZnQgPyAtbmV3QkJveC5sZWZ0IDogMCwgdG9wOiBuZXdCQm94LnRvcCA/IC1uZXdCQm94LnRvcCA6IDB9OyAvLyBhdm9pZCBgLTBgXG5cbiAgLy8gUmVzdG9yZSBwb3NpdGlvblxuICBlbGVtZW50U3R5bGUubGVmdCA9IGN1clBvc2l0aW9uLmxlZnQgKyBvZmZzZXQubGVmdCArICdweCc7XG4gIGVsZW1lbnRTdHlsZS50b3AgPSBjdXJQb3NpdGlvbi50b3AgKyBvZmZzZXQudG9wICsgJ3B4JztcbiAgLy8gUmVzdG9yZSBzaXplXG4gIFsnd2lkdGgnLCAnaGVpZ2h0J10uZm9yRWFjaChwcm9wID0+IHtcbiAgICBpZiAobmV3QkJveFtwcm9wXSAhPT0gb3JnU2l6ZVtwcm9wXSkge1xuICAgICAgLy8gSWdub3JlIGBib3gtc2l6aW5nYFxuICAgICAgZWxlbWVudFN0eWxlW3Byb3BdID0gb3JnU2l6ZVtwcm9wXSArICdweCc7XG4gICAgICBuZXdCQm94ID0gZ2V0QkJveChlbGVtZW50KTtcbiAgICAgIGlmIChuZXdCQm94W3Byb3BdICE9PSBvcmdTaXplW3Byb3BdKSB7IC8vIFJldHJ5XG4gICAgICAgIGVsZW1lbnRTdHlsZVtwcm9wXSA9IG9yZ1NpemVbcHJvcF0gLSAobmV3QkJveFtwcm9wXSAtIG9yZ1NpemVbcHJvcF0pICsgJ3B4JztcbiAgICAgIH1cbiAgICB9XG4gICAgcHJvcHMubGFzdFN0eWxlW3Byb3BdID0gZWxlbWVudFN0eWxlW3Byb3BdO1xuICB9KTtcblxuICAvLyBSZXN0b3JlIGB0cmFuc2l0aW9uLXByb3BlcnR5YFxuICBlbGVtZW50Lm9mZnNldFdpZHRoOyAvKiBmb3JjZSByZWZsb3cgKi8gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgZWxlbWVudFN0eWxlW2Nzc1Byb3BUcmFuc2l0aW9uUHJvcGVydHldID0gb3JnVHJhbnNpdGlvblByb3BlcnR5O1xuICBpZiAoZml4UG9zaXRpb24ubGVmdCAhPT0gY3VyUG9zaXRpb24ubGVmdCB8fCBmaXhQb3NpdGlvbi50b3AgIT09IGN1clBvc2l0aW9uLnRvcCkge1xuICAgIC8vIEl0IHNlZW1zIHRoYXQgaXQgaXMgbW92aW5nLlxuICAgIGVsZW1lbnRTdHlsZS5sZWZ0ID0gZml4UG9zaXRpb24ubGVmdCArIG9mZnNldC5sZWZ0ICsgJ3B4JztcbiAgICBlbGVtZW50U3R5bGUudG9wID0gZml4UG9zaXRpb24udG9wICsgb2Zmc2V0LnRvcCArICdweCc7XG4gIH1cblxuICByZXR1cm4gZml4UG9zaXRpb247XG59XG4vLyBbL0xFRlRUT1BdXG5cbi8vIFtTVkddXG4vKipcbiAqIEluaXRpYWxpemUgU1ZHRWxlbWVudCwgYW5kIGdldCBgb2Zmc2V0YCB0aGF0IGlzIHVzZWQgYnkgYG1vdmVTdmdgLlxuICogQHBhcmFtIHtwcm9wc30gcHJvcHMgLSBgcHJvcHNgIG9mIGluc3RhbmNlLlxuICogQHJldHVybnMge0JCb3h9IEN1cnJlbnQgQkJveCB3aXRob3V0IGFuaW1hdGlvbiwgaS5lLiBsZWZ0L3RvcCBwcm9wZXJ0aWVzLlxuICovXG5mdW5jdGlvbiBpbml0U3ZnKHByb3BzKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBwcm9wcy5lbGVtZW50LFxuICAgIHN2Z1RyYW5zZm9ybSA9IHByb3BzLnN2Z1RyYW5zZm9ybSxcbiAgICBjdXJSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgLy8gR2V0IFJlY3QgYmVmb3JlIGNoYW5nZSBwb3NpdGlvbi5cbiAgICBmaXhQb3NpdGlvbiA9IGdldEJCb3goZWxlbWVudCk7XG5cbiAgc3ZnVHJhbnNmb3JtLnNldFRyYW5zbGF0ZSgwLCAwKTtcbiAgY29uc3Qgb3JpZ2luQkJveCA9IHByb3BzLnN2Z09yaWdpbkJCb3ggPSBlbGVtZW50LmdldEJCb3goKSxcbiAgICAvLyBUcnkgdG8gZ2V0IFNWRyBjb29yZGluYXRlcyBvZiBjdXJyZW50IHBvc2l0aW9uLlxuICAgIG5ld1JlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIG9yaWdpblBvaW50ID0gdmlld1BvaW50MlN2Z1BvaW50KHByb3BzLCBuZXdSZWN0LmxlZnQsIG5ld1JlY3QudG9wKSxcbiAgICAvLyBHZWNrbyBidWcsIGdldFNjcmVlbkNUTSByZXR1cm5zIGluY29ycmVjdCBDVE0sIGFuZCBvcmlnaW5Qb2ludCBtaWdodCBub3QgYmUgY3VycmVudCBwb3NpdGlvbi5cbiAgICBvZmZzZXQgPSBwcm9wcy5zdmdPZmZzZXQgPSB7eDogb3JpZ2luQkJveC54IC0gb3JpZ2luUG9pbnQueCwgeTogb3JpZ2luQkJveC55IC0gb3JpZ2luUG9pbnQueX0sXG5cbiAgICAvLyBSZXN0b3JlIHBvc2l0aW9uXG4gICAgY3VyUG9pbnQgPSB2aWV3UG9pbnQyU3ZnUG9pbnQocHJvcHMsIGN1clJlY3QubGVmdCwgY3VyUmVjdC50b3ApO1xuICBzdmdUcmFuc2Zvcm0uc2V0VHJhbnNsYXRlKGN1clBvaW50LnggKyBvZmZzZXQueCAtIG9yaWdpbkJCb3gueCwgY3VyUG9pbnQueSArIG9mZnNldC55IC0gb3JpZ2luQkJveC55KTtcblxuICByZXR1cm4gZml4UG9zaXRpb247XG59XG4vLyBbL1NWR11cblxuLyoqXG4gKiBTZXQgYGVsZW1lbnRCQm94YCwgYGNvbnRhaW5tZW50QkJveGAsIGBtaW4vbWF4YGBMZWZ0L1RvcGAgYW5kIGBzbmFwVGFyZ2V0c2AuXG4gKiBAcGFyYW0ge3Byb3BzfSBwcm9wcyAtIGBwcm9wc2Agb2YgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2V2ZW50VHlwZV0gLSBBIHR5cGUgb2YgZXZlbnQgdGhhdCBraWNrZWQgdGhpcyBtZXRob2QuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW5pdEJCb3gocHJvcHMsIGV2ZW50VHlwZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbnN0IGRvY0JCb3ggPSBnZXRCQm94KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCksXG4gICAgZWxlbWVudEJCb3ggPSBwcm9wcy5lbGVtZW50QkJveCA9IHByb3BzLmluaXRFbG0ocHJvcHMpLCAvLyByZXNldCBvZmZzZXQgZXRjLlxuICAgIGNvbnRhaW5tZW50QkJveCA9IHByb3BzLmNvbnRhaW5tZW50QkJveCA9XG4gICAgICBwcm9wcy5jb250YWlubWVudElzQkJveCA/IChyZXNvbHZlUFBCQm94KHByb3BzLm9wdGlvbnMuY29udGFpbm1lbnQsIGRvY0JCb3gpIHx8IGRvY0JCb3gpIDpcbiAgICAgIGdldEJCb3gocHJvcHMub3B0aW9ucy5jb250YWlubWVudCwgdHJ1ZSk7XG4gIHByb3BzLm1pbkxlZnQgPSBjb250YWlubWVudEJCb3gubGVmdDtcbiAgcHJvcHMubWF4TGVmdCA9IGNvbnRhaW5tZW50QkJveC5yaWdodCAtIGVsZW1lbnRCQm94LndpZHRoO1xuICBwcm9wcy5taW5Ub3AgPSBjb250YWlubWVudEJCb3gudG9wO1xuICBwcm9wcy5tYXhUb3AgPSBjb250YWlubWVudEJCb3guYm90dG9tIC0gZWxlbWVudEJCb3guaGVpZ2h0O1xuICAvLyBBZGp1c3QgcG9zaXRpb25cbiAgbW92ZShwcm9wcywge2xlZnQ6IGVsZW1lbnRCQm94LmxlZnQsIHRvcDogZWxlbWVudEJCb3gudG9wfSk7XG5cbiAgLy8gW1NOQVBdXG5cbiAgLy8gU25hcC10YXJnZXRzXG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IFNuYXBUYXJnZXRcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFt4XSAtIEEgY29vcmRpbmF0ZSBpdCBtb3ZlcyB0by4gSXQgaGFzIHggb3IgeSBvciBib3RoLlxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW3ldXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZ3Jhdml0eVhTdGFydF0gLSBHcmF2aXR5IHpvbmUuIEl0IGhhcyAqU3RhcnQgb3IgKkVuZCBvciBib3RoLCBhbmQgKlgqIG9yICpZKiBvciBib3RoLlxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW2dyYXZpdHlYRW5kXVxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW2dyYXZpdHlZU3RhcnRdXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZ3Jhdml0eVlFbmRdXG4gICAqL1xuXG4gIGlmIChwcm9wcy5wYXJzZWRTbmFwVGFyZ2V0cykge1xuICAgIGNvbnN0IGVsZW1lbnRTaXplWFkgPSB7eDogZWxlbWVudEJCb3gud2lkdGgsIHk6IGVsZW1lbnRCQm94LmhlaWdodH0sXG4gICAgICBtaW5YWSA9IHt4OiBwcm9wcy5taW5MZWZ0LCB5OiBwcm9wcy5taW5Ub3B9LFxuICAgICAgbWF4WFkgPSB7eDogcHJvcHMubWF4TGVmdCwgeTogcHJvcHMubWF4VG9wfSxcbiAgICAgIHByb3AyQXhpcyA9IHtsZWZ0OiAneCcsIHJpZ2h0OiAneCcsIHg6ICd4Jywgd2lkdGg6ICd4JywgeFN0YXJ0OiAneCcsIHhFbmQ6ICd4JywgeFN0ZXA6ICd4JyxcbiAgICAgICAgdG9wOiAneScsIGJvdHRvbTogJ3knLCB5OiAneScsIGhlaWdodDogJ3knLCB5U3RhcnQ6ICd5JywgeUVuZDogJ3knLCB5U3RlcDogJ3knfSxcblxuICAgICAgc25hcFRhcmdldHMgPSBwcm9wcy5wYXJzZWRTbmFwVGFyZ2V0cy5yZWR1Y2UoKHNuYXBUYXJnZXRzLCBwYXJzZWRTbmFwVGFyZ2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IGJhc2VSZWN0ID0gcGFyc2VkU25hcFRhcmdldC5iYXNlID09PSAnY29udGFpbm1lbnQnID8gY29udGFpbm1lbnRCQm94IDogZG9jQkJveCxcbiAgICAgICAgICBiYXNlT3JpZ2luWFkgPSB7eDogYmFzZVJlY3QubGVmdCwgeTogYmFzZVJlY3QudG9wfSxcbiAgICAgICAgICBiYXNlU2l6ZVhZID0ge3g6IGJhc2VSZWN0LndpZHRoLCB5OiBiYXNlUmVjdC5oZWlnaHR9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCYXNpY2FsbHksIHNoYWxsb3cgY29weSBmcm9tIHBhcnNlZFNuYXBUYXJnZXQsIGFuZCBpdCBjYW4gaGF2ZSByZXNvbHZlZCB2YWx1ZXMuXG4gICAgICAgICAqIEB0eXBlZGVmIHt7eDogKG51bWJlcnxQUFZhbHVlKSwgeSwgeFN0YXJ0LCB4RW5kLCB4U3RlcCwgeVN0YXJ0LCB5RW5kLCB5U3RlcH19IFRhcmdldFhZXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IFtjb3JuZXJzXSAtIEFwcGxpZWQgdmFsdWUuXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IFtzaWRlc11cbiAgICAgICAgICogQHByb3BlcnR5IHtib29sZWFufSBjZW50ZXJcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFt4R3Jhdml0eV0gLSBPdmVycmlkZSBwYXJzZWRTbmFwVGFyZ2V0LmdyYXZpdHkuXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbeUdyYXZpdHldXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8vIEFkZCBzaW5nbGUgUG9pbnQgb3IgTGluZSAoaS5lLiB0YXJnZXRYWSBoYXMgbm8gKlN0ZXApXG4gICAgICAgIGZ1bmN0aW9uIGFkZFNuYXBUYXJnZXQodGFyZ2V0WFkpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0WFkuY2VudGVyID09IG51bGwpIHsgdGFyZ2V0WFkuY2VudGVyID0gcGFyc2VkU25hcFRhcmdldC5jZW50ZXIgfVxuICAgICAgICAgIGlmICh0YXJnZXRYWS54R3Jhdml0eSA9PSBudWxsKSB7IHRhcmdldFhZLnhHcmF2aXR5ID0gcGFyc2VkU25hcFRhcmdldC5ncmF2aXR5IH1cbiAgICAgICAgICBpZiAodGFyZ2V0WFkueUdyYXZpdHkgPT0gbnVsbCkgeyB0YXJnZXRYWS55R3Jhdml0eSA9IHBhcnNlZFNuYXBUYXJnZXQuZ3Jhdml0eSB9XG5cbiAgICAgICAgICBpZiAodGFyZ2V0WFkueCAhPSBudWxsICYmIHRhcmdldFhZLnkgIT0gbnVsbCkgeyAvLyBQb2ludFxuICAgICAgICAgICAgdGFyZ2V0WFkueCA9IHJlc29sdmVQUFZhbHVlKHRhcmdldFhZLngsIGJhc2VPcmlnaW5YWS54LCBiYXNlU2l6ZVhZLngpO1xuICAgICAgICAgICAgdGFyZ2V0WFkueSA9IHJlc29sdmVQUFZhbHVlKHRhcmdldFhZLnksIGJhc2VPcmlnaW5YWS55LCBiYXNlU2l6ZVhZLnkpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0WFkuY2VudGVyKSB7XG4gICAgICAgICAgICAgIHRhcmdldFhZLnggLT0gZWxlbWVudFNpemVYWS54IC8gMjtcbiAgICAgICAgICAgICAgdGFyZ2V0WFkueSAtPSBlbGVtZW50U2l6ZVhZLnkgLyAyO1xuICAgICAgICAgICAgICB0YXJnZXRYWS5jb3JuZXJzID0gWyd0bCddO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAodGFyZ2V0WFkuY29ybmVycyB8fCBwYXJzZWRTbmFwVGFyZ2V0LmNvcm5lcnMpLmZvckVhY2goY29ybmVyID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeCA9IHRhcmdldFhZLnggLSAoY29ybmVyID09PSAndHInIHx8IGNvcm5lciA9PT0gJ2JyJyA/IGVsZW1lbnRTaXplWFkueCA6IDApLFxuICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRYWS55IC0gKGNvcm5lciA9PT0gJ2JsJyB8fCBjb3JuZXIgPT09ICdicicgPyBlbGVtZW50U2l6ZVhZLnkgOiAwKTtcbiAgICAgICAgICAgICAgaWYgKHggPj0gbWluWFkueCAmJiB4IDw9IG1heFhZLnggJiYgeSA+PSBtaW5YWS55ICYmIHkgPD0gbWF4WFkueSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNuYXBUYXJnZXQgPSB7eCwgeX0sXG4gICAgICAgICAgICAgICAgICBncmF2aXR5WFN0YXJ0ID0geCAtIHRhcmdldFhZLnhHcmF2aXR5LFxuICAgICAgICAgICAgICAgICAgZ3Jhdml0eVhFbmQgPSB4ICsgdGFyZ2V0WFkueEdyYXZpdHksXG4gICAgICAgICAgICAgICAgICBncmF2aXR5WVN0YXJ0ID0geSAtIHRhcmdldFhZLnlHcmF2aXR5LFxuICAgICAgICAgICAgICAgICAgZ3Jhdml0eVlFbmQgPSB5ICsgdGFyZ2V0WFkueUdyYXZpdHk7XG4gICAgICAgICAgICAgICAgaWYgKGdyYXZpdHlYU3RhcnQgPiBtaW5YWS54KSB7IHNuYXBUYXJnZXQuZ3Jhdml0eVhTdGFydCA9IGdyYXZpdHlYU3RhcnQgfVxuICAgICAgICAgICAgICAgIGlmIChncmF2aXR5WEVuZCA8IG1heFhZLngpIHsgc25hcFRhcmdldC5ncmF2aXR5WEVuZCA9IGdyYXZpdHlYRW5kIH1cbiAgICAgICAgICAgICAgICBpZiAoZ3Jhdml0eVlTdGFydCA+IG1pblhZLnkpIHsgc25hcFRhcmdldC5ncmF2aXR5WVN0YXJ0ID0gZ3Jhdml0eVlTdGFydCB9XG4gICAgICAgICAgICAgICAgaWYgKGdyYXZpdHlZRW5kIDwgbWF4WFkueSkgeyBzbmFwVGFyZ2V0LmdyYXZpdHlZRW5kID0gZ3Jhdml0eVlFbmQgfVxuICAgICAgICAgICAgICAgIHNuYXBUYXJnZXRzLnB1c2goc25hcFRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfSBlbHNlIHsgLy8gTGluZVxuICAgICAgICAgICAgY29uc3Qgc3BlY0F4aXMgPSB0YXJnZXRYWS54ICE9IG51bGwgPyAneCcgOiAneScsXG4gICAgICAgICAgICAgIHJhbmdlQXhpcyA9IHNwZWNBeGlzID09PSAneCcgPyAneScgOiAneCcsXG4gICAgICAgICAgICAgIHN0YXJ0UHJvcCA9IGAke3JhbmdlQXhpc31TdGFydGAsXG4gICAgICAgICAgICAgIGVuZFByb3AgPSBgJHtyYW5nZUF4aXN9RW5kYCxcbiAgICAgICAgICAgICAgZ3Jhdml0eVByb3AgPSBgJHtzcGVjQXhpc31HcmF2aXR5YCxcbiAgICAgICAgICAgICAgc3BlY0F4aXNMID0gc3BlY0F4aXMudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgcmFuZ2VBeGlzTCA9IHJhbmdlQXhpcy50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgICBncmF2aXR5U3BlY1N0YXJ0UHJvcCA9IGBncmF2aXR5JHtzcGVjQXhpc0x9U3RhcnRgLFxuICAgICAgICAgICAgICBncmF2aXR5U3BlY0VuZFByb3AgPSBgZ3Jhdml0eSR7c3BlY0F4aXNMfUVuZGAsXG4gICAgICAgICAgICAgIGdyYXZpdHlSYW5nZVN0YXJ0UHJvcCA9IGBncmF2aXR5JHtyYW5nZUF4aXNMfVN0YXJ0YCxcbiAgICAgICAgICAgICAgZ3Jhdml0eVJhbmdlRW5kUHJvcCA9IGBncmF2aXR5JHtyYW5nZUF4aXNMfUVuZGA7XG4gICAgICAgICAgICB0YXJnZXRYWVtzcGVjQXhpc10gPVxuICAgICAgICAgICAgICByZXNvbHZlUFBWYWx1ZSh0YXJnZXRYWVtzcGVjQXhpc10sIGJhc2VPcmlnaW5YWVtzcGVjQXhpc10sIGJhc2VTaXplWFlbc3BlY0F4aXNdKTtcbiAgICAgICAgICAgIHRhcmdldFhZW3N0YXJ0UHJvcF0gPVxuICAgICAgICAgICAgICByZXNvbHZlUFBWYWx1ZSh0YXJnZXRYWVtzdGFydFByb3BdLCBiYXNlT3JpZ2luWFlbcmFuZ2VBeGlzXSwgYmFzZVNpemVYWVtyYW5nZUF4aXNdKTtcbiAgICAgICAgICAgIHRhcmdldFhZW2VuZFByb3BdID1cbiAgICAgICAgICAgICAgcmVzb2x2ZVBQVmFsdWUodGFyZ2V0WFlbZW5kUHJvcF0sIGJhc2VPcmlnaW5YWVtyYW5nZUF4aXNdLCBiYXNlU2l6ZVhZW3JhbmdlQXhpc10pIC1cbiAgICAgICAgICAgICAgZWxlbWVudFNpemVYWVtyYW5nZUF4aXNdOyAvLyBSZWR1Y2UgdGhlIGVuZCBvZiB0aGUgbGluZS5cbiAgICAgICAgICAgIGlmICh0YXJnZXRYWVtzdGFydFByb3BdID4gdGFyZ2V0WFlbZW5kUHJvcF0gfHwgLy8gU21hbGxlciB0aGFuIGVsZW1lbnQgc2l6ZS5cbiAgICAgICAgICAgICAgICB0YXJnZXRYWVtzdGFydFByb3BdID4gbWF4WFlbcmFuZ2VBeGlzXSB8fCB0YXJnZXRYWVtlbmRQcm9wXSA8IG1pblhZW3JhbmdlQXhpc10pIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0WFkuY2VudGVyKSB7XG4gICAgICAgICAgICAgIHRhcmdldFhZW3NwZWNBeGlzXSAtPSBlbGVtZW50U2l6ZVhZW3NwZWNBeGlzXSAvIDI7XG4gICAgICAgICAgICAgIHRhcmdldFhZLnNpZGVzID0gWydzdGFydCddO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAodGFyZ2V0WFkuc2lkZXMgfHwgcGFyc2VkU25hcFRhcmdldC5zaWRlcykuZm9yRWFjaChzaWRlID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeHkgPSB0YXJnZXRYWVtzcGVjQXhpc10gLSAoc2lkZSA9PT0gJ2VuZCcgPyBlbGVtZW50U2l6ZVhZW3NwZWNBeGlzXSA6IDApO1xuICAgICAgICAgICAgICBpZiAoeHkgPj0gbWluWFlbc3BlY0F4aXNdICYmIHh5IDw9IG1heFhZW3NwZWNBeGlzXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNuYXBUYXJnZXQgPSB7fSxcbiAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVjU3RhcnQgPSB4eSAtIHRhcmdldFhZW2dyYXZpdHlQcm9wXSxcbiAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVjRW5kID0geHkgKyB0YXJnZXRYWVtncmF2aXR5UHJvcF07XG4gICAgICAgICAgICAgICAgc25hcFRhcmdldFtzcGVjQXhpc10gPSB4eTtcbiAgICAgICAgICAgICAgICBpZiAoZ3Jhdml0eVNwZWNTdGFydCA+IG1pblhZW3NwZWNBeGlzXSkge1xuICAgICAgICAgICAgICAgICAgc25hcFRhcmdldFtncmF2aXR5U3BlY1N0YXJ0UHJvcF0gPSBncmF2aXR5U3BlY1N0YXJ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ3Jhdml0eVNwZWNFbmQgPCBtYXhYWVtzcGVjQXhpc10pIHtcbiAgICAgICAgICAgICAgICAgIHNuYXBUYXJnZXRbZ3Jhdml0eVNwZWNFbmRQcm9wXSA9IGdyYXZpdHlTcGVjRW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0WFlbc3RhcnRQcm9wXSA+IG1pblhZW3JhbmdlQXhpc10pIHtcbiAgICAgICAgICAgICAgICAgIHNuYXBUYXJnZXRbZ3Jhdml0eVJhbmdlU3RhcnRQcm9wXSA9IHRhcmdldFhZW3N0YXJ0UHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRYWVtlbmRQcm9wXSA8IG1heFhZW3JhbmdlQXhpc10pIHtcbiAgICAgICAgICAgICAgICAgIHNuYXBUYXJnZXRbZ3Jhdml0eVJhbmdlRW5kUHJvcF0gPSB0YXJnZXRYWVtlbmRQcm9wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc25hcFRhcmdldHMucHVzaChzbmFwVGFyZ2V0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJCb3g7XG4gICAgICAgIGlmICgoYkJveCA9IHBhcnNlZFNuYXBUYXJnZXQuZWxlbWVudCA/IGdldEJCb3gocGFyc2VkU25hcFRhcmdldC5lbGVtZW50KSA6IG51bGwpIHx8IC8vIEVsZW1lbnRcbiAgICAgICAgICAgIHBhcnNlZFNuYXBUYXJnZXQucHBCQm94KSB7XG4gICAgICAgICAgaWYgKHBhcnNlZFNuYXBUYXJnZXQucHBCQm94KSB7IGJCb3ggPSByZXNvbHZlUFBCQm94KHBhcnNlZFNuYXBUYXJnZXQucHBCQm94LCBiYXNlUmVjdCkgfSAvLyBCQm94XG4gICAgICAgICAgaWYgKGJCb3gpIHsgLy8gRHJvcCBpbnZhbGlkIEJCb3guXG4gICAgICAgICAgICAvLyBFeHBhbmQgaW50byA0IGxpbmVzLlxuICAgICAgICAgICAgcGFyc2VkU25hcFRhcmdldC5lZGdlcy5mb3JFYWNoKGVkZ2UgPT4ge1xuICAgICAgICAgICAgICBsZXQgbGVuZ3RoZW5YID0gcGFyc2VkU25hcFRhcmdldC5ncmF2aXR5LFxuICAgICAgICAgICAgICAgIGxlbmd0aGVuWSA9IHBhcnNlZFNuYXBUYXJnZXQuZ3Jhdml0eTtcbiAgICAgICAgICAgICAgaWYgKGVkZ2UgPT09ICdvdXRzaWRlJykgeyAvLyBTbmFwIGl0IHdoZW4gYSBwYXJ0IG9mIHRoZSBlbGVtZW50IGlzIHBhcnQgb2YgdGhlIHJhbmdlLlxuICAgICAgICAgICAgICAgIGxlbmd0aGVuWCArPSBlbGVtZW50QkJveC53aWR0aDtcbiAgICAgICAgICAgICAgICBsZW5ndGhlblkgKz0gZWxlbWVudEJCb3guaGVpZ2h0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IHhTdGFydCA9IGJCb3gubGVmdCAtIGxlbmd0aGVuWCxcbiAgICAgICAgICAgICAgICB4RW5kID0gYkJveC5yaWdodCArIGxlbmd0aGVuWCxcbiAgICAgICAgICAgICAgICB5U3RhcnQgPSBiQm94LnRvcCAtIGxlbmd0aGVuWSxcbiAgICAgICAgICAgICAgICB5RW5kID0gYkJveC5ib3R0b20gKyBsZW5ndGhlblk7XG4gICAgICAgICAgICAgIGxldCBzaWRlID0gZWRnZSA9PT0gJ2luc2lkZScgPyAnc3RhcnQnIDogJ2VuZCc7XG4gICAgICAgICAgICAgIGFkZFNuYXBUYXJnZXQoe3hTdGFydCwgeEVuZCwgeTogYkJveC50b3AsIHNpZGVzOiBbc2lkZV0sIGNlbnRlcjogZmFsc2V9KTsgLy8gVG9wXG4gICAgICAgICAgICAgIGFkZFNuYXBUYXJnZXQoe3g6IGJCb3gubGVmdCwgeVN0YXJ0LCB5RW5kLCBzaWRlczogW3NpZGVdLCBjZW50ZXI6IGZhbHNlfSk7IC8vIExlZnRcbiAgICAgICAgICAgICAgc2lkZSA9IGVkZ2UgPT09ICdpbnNpZGUnID8gJ2VuZCcgOiAnc3RhcnQnO1xuICAgICAgICAgICAgICBhZGRTbmFwVGFyZ2V0KHt4U3RhcnQsIHhFbmQsIHk6IGJCb3guYm90dG9tLCBzaWRlczogW3NpZGVdLCBjZW50ZXI6IGZhbHNlfSk7IC8vIEJvdHRvbVxuICAgICAgICAgICAgICBhZGRTbmFwVGFyZ2V0KHt4OiBiQm94LnJpZ2h0LCB5U3RhcnQsIHlFbmQsIHNpZGVzOiBbc2lkZV0sIGNlbnRlcjogZmFsc2V9KTsgLy8gUmlnaHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBleHBhbmRlZCA9IFtcbiAgICAgICAgICAgIFsneCcsICd5JywgJ3hTdGFydCcsICd4RW5kJywgJ3hTdGVwJywgJ3lTdGFydCcsICd5RW5kJywgJ3lTdGVwJ10ucmVkdWNlKCh0YXJnZXRYWSwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgICBpZiAocGFyc2VkU25hcFRhcmdldFtwcm9wXSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFhZW3Byb3BdID0gcmVzb2x2ZVBQVmFsdWUocGFyc2VkU25hcFRhcmdldFtwcm9wXSxcbiAgICAgICAgICAgICAgICAgIHByb3AgPT09ICd4U3RlcCcgfHwgcHJvcCA9PT0gJ3lTdGVwJyA/IDAgOiBiYXNlT3JpZ2luWFlbcHJvcDJBeGlzW3Byb3BdXSxcbiAgICAgICAgICAgICAgICAgIGJhc2VTaXplWFlbcHJvcDJBeGlzW3Byb3BdXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFhZO1xuICAgICAgICAgICAgfSwge30pXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIFsneCcsICd5J10uZm9yRWFjaChheGlzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UHJvcCA9IGAke2F4aXN9U3RhcnRgLFxuICAgICAgICAgICAgICBlbmRQcm9wID0gYCR7YXhpc31FbmRgLFxuICAgICAgICAgICAgICBzdGVwUHJvcCA9IGAke2F4aXN9U3RlcGAsXG4gICAgICAgICAgICAgIGdyYXZpdHlQcm9wID0gYCR7YXhpc31HcmF2aXR5YDtcbiAgICAgICAgICAgIGV4cGFuZGVkID0gZXhwYW5kZWQucmVkdWNlKChleHBhbmRlZCwgdGFyZ2V0WFkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB0YXJnZXRYWVtzdGFydFByb3BdLFxuICAgICAgICAgICAgICAgIGVuZCA9IHRhcmdldFhZW2VuZFByb3BdLFxuICAgICAgICAgICAgICAgIHN0ZXAgPSB0YXJnZXRYWVtzdGVwUHJvcF07XG4gICAgICAgICAgICAgIGlmIChzdGFydCAhPSBudWxsICYmIGVuZCAhPSBudWxsICYmIHN0YXJ0ID49IGVuZCkgeyByZXR1cm4gZXhwYW5kZWQgfSAvLyBzdGFydCA+PSBlbmRcblxuICAgICAgICAgICAgICBpZiAoc3RlcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgPCAyKSB7IHJldHVybiBleHBhbmRlZCB9XG4gICAgICAgICAgICAgICAgLy8gc3RlcCA+PSAycHggLT4gRXhwYW5kIGJ5IHN0ZXBcbiAgICAgICAgICAgICAgICBsZXQgZ3Jhdml0eSA9IHN0ZXAgLyAyOyAvLyBtYXhcbiAgICAgICAgICAgICAgICBncmF2aXR5ID0gcGFyc2VkU25hcFRhcmdldC5ncmF2aXR5ID4gZ3Jhdml0eSA/IGdyYXZpdHkgOiBudWxsO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGN1clZhbHVlID0gc3RhcnQ7IGN1clZhbHVlIDw9IGVuZDsgY3VyVmFsdWUgKz0gc3RlcCkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZXhwYW5kZWRYWSA9IE9iamVjdC5rZXlzKHRhcmdldFhZKS5yZWR1Y2UoKGV4cGFuZGVkWFksIHByb3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgIT09IHN0YXJ0UHJvcCAmJiBwcm9wICE9PSBlbmRQcm9wICYmIHByb3AgIT09IHN0ZXBQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRYWVtwcm9wXSA9IHRhcmdldFhZW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBleHBhbmRlZFhZO1xuICAgICAgICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgICAgICAgICAgZXhwYW5kZWRYWVtheGlzXSA9IGN1clZhbHVlO1xuICAgICAgICAgICAgICAgICAgZXhwYW5kZWRYWVtncmF2aXR5UHJvcF0gPSBncmF2aXR5O1xuICAgICAgICAgICAgICAgICAgZXhwYW5kZWQucHVzaChleHBhbmRlZFhZKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHBhbmRlZC5wdXNoKHRhcmdldFhZKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZXhwYW5kZWQ7XG4gICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZXhwYW5kZWQuZm9yRWFjaCh0YXJnZXRYWSA9PiB7IGFkZFNuYXBUYXJnZXQodGFyZ2V0WFkpIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNuYXBUYXJnZXRzO1xuICAgICAgfSwgW10pO1xuXG4gICAgcHJvcHMuc25hcFRhcmdldHMgPSBzbmFwVGFyZ2V0cy5sZW5ndGggPyBzbmFwVGFyZ2V0cyA6IG51bGw7XG4gIH1cbiAgLy8gWy9TTkFQXVxuXG4gIC8vIFtBVVRPLVNDUk9MTF1cbiAgY29uc3QgYXV0b1Njcm9sbCA9IHt9LFxuICAgIGF1dG9TY3JvbGxPcHRpb25zID0gcHJvcHMub3B0aW9ucy5hdXRvU2Nyb2xsO1xuICBpZiAoYXV0b1Njcm9sbE9wdGlvbnMpIHtcbiAgICBhdXRvU2Nyb2xsLmlzV2luZG93ID0gYXV0b1Njcm9sbE9wdGlvbnMudGFyZ2V0ID09PSB3aW5kb3c7XG4gICAgYXV0b1Njcm9sbC50YXJnZXQgPSBhdXRvU2Nyb2xsT3B0aW9ucy50YXJnZXQ7XG5cbiAgICBjb25zdCBkb250U2Nyb2xsID0gZXZlbnRUeXBlID09PSAnc2Nyb2xsJywgLy8gQXZvaWQgZHVwbGljYXRlZCBjYWxsaW5nXG4gICAgICBzY3JvbGxhYmxlID0gZ2V0U2Nyb2xsYWJsZShhdXRvU2Nyb2xsT3B0aW9ucy50YXJnZXQsIGF1dG9TY3JvbGwuaXNXaW5kb3csIGRvbnRTY3JvbGwpLFxuICAgICAgc2Nyb2xsYWJsZUJCb3ggPSB2YWxpZEJCb3goe2xlZnQ6IHNjcm9sbGFibGUuY2xpZW50WCwgdG9wOiBzY3JvbGxhYmxlLmNsaWVudFksXG4gICAgICAgIHdpZHRoOiBzY3JvbGxhYmxlLmNsaWVudFdpZHRoLCBoZWlnaHQ6IHNjcm9sbGFibGUuY2xpZW50SGVpZ2h0fSk7XG4gICAgYXV0b1Njcm9sbC5zY3JvbGxhYmxlQkJveCA9IHNjcm9sbGFibGVCQm94OyAvLyBbREVCVUcvXVxuXG4gICAgaWYgKCFkb250U2Nyb2xsKSB7XG4gICAgICBhdXRvU2Nyb2xsLnNjcm9sbFdpZHRoID0gc2Nyb2xsYWJsZS5zY3JvbGxXaWR0aDtcbiAgICAgIGF1dG9TY3JvbGwuc2Nyb2xsSGVpZ2h0ID0gc2Nyb2xsYWJsZS5zY3JvbGxIZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5hdXRvU2Nyb2xsKSB7XG4gICAgICBhdXRvU2Nyb2xsLnNjcm9sbFdpZHRoID0gcHJvcHMuYXV0b1Njcm9sbC5zY3JvbGxXaWR0aDtcbiAgICAgIGF1dG9TY3JvbGwuc2Nyb2xsSGVpZ2h0ID0gcHJvcHMuYXV0b1Njcm9sbC5zY3JvbGxIZWlnaHQ7XG4gICAgfVxuXG4gICAgW1snWCcsICdXaWR0aCcsICdsZWZ0JywgJ3JpZ2h0J10sIFsnWScsICdIZWlnaHQnLCAndG9wJywgJ2JvdHRvbSddXS5mb3JFYWNoKGF4aXMgPT4ge1xuICAgICAgY29uc3QgeHkgPSBheGlzWzBdLFxuICAgICAgICB3aCA9IGF4aXNbMV0sXG4gICAgICAgIGJhY2sgPSBheGlzWzJdLFxuICAgICAgICBmb3J3YXJkID0gYXhpc1szXSxcbiAgICAgICAgbWF4QWJzID0gKGF1dG9TY3JvbGxbYHNjcm9sbCR7d2h9YF0gfHwgMCkgLSBzY3JvbGxhYmxlW2BjbGllbnQke3dofWBdLFxuICAgICAgICBtaW4gPSBhdXRvU2Nyb2xsT3B0aW9uc1tgbWluJHt4eX1gXSB8fCAwO1xuICAgICAgbGV0IG1heCA9IGlzRmluaXRlKGF1dG9TY3JvbGxPcHRpb25zW2BtYXgke3h5fWBdKSA/IGF1dG9TY3JvbGxPcHRpb25zW2BtYXgke3h5fWBdIDogbWF4QWJzO1xuICAgICAgaWYgKG1pbiA8IG1heCAmJiBtaW4gPCBtYXhBYnMpIHtcbiAgICAgICAgaWYgKG1heCA+IG1heEFicykgeyBtYXggPSBtYXhBYnMgfVxuXG4gICAgICAgIGNvbnN0IGxpbmVzID0gW10sXG4gICAgICAgICAgZWxlbWVudFNpemUgPSBlbGVtZW50QkJveFt3aC50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGF1dG9TY3JvbGxPcHRpb25zLnNlbnNpdGl2aXR5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7IC8vIG5lYXIgLT4gZmFyXG4gICAgICAgICAgY29uc3Qgc2Vuc2l0aXZpdHkgPSBhdXRvU2Nyb2xsT3B0aW9ucy5zZW5zaXRpdml0eVtpXSxcbiAgICAgICAgICAgIHNwZWVkID0gYXV0b1Njcm9sbE9wdGlvbnMuc3BlZWRbaV07XG4gICAgICAgICAgLy8gYmFja1xuICAgICAgICAgIGxpbmVzLnB1c2goe2RpcjogLTEsIHNwZWVkLFxuICAgICAgICAgICAgcG9zaXRpb246IHNjcm9sbGFibGVCQm94W2JhY2tdICsgc2Vuc2l0aXZpdHl9KTtcbiAgICAgICAgICAvLyBmb3J3YXJkXG4gICAgICAgICAgbGluZXMucHVzaCh7ZGlyOiAxLCBzcGVlZCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzY3JvbGxhYmxlQkJveFtmb3J3YXJkXSAtIHNlbnNpdGl2aXR5IC0gZWxlbWVudFNpemV9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF1dG9TY3JvbGxbeHkudG9Mb3dlckNhc2UoKV0gPSB7bWluLCBtYXgsIGxpbmVzfTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG4gIHByb3BzLmF1dG9TY3JvbGwgPSBhdXRvU2Nyb2xsLnggfHwgYXV0b1Njcm9sbC55ID8gYXV0b1Njcm9sbCA6IG51bGw7XG4gIC8vIFsvQVVUTy1TQ1JPTExdXG4gIHdpbmRvdy5pbml0QkJveERvbmUgPSB0cnVlOyAvLyBbREVCVUcvXVxufVxuXG4vKipcbiAqIEBwYXJhbSB7cHJvcHN9IHByb3BzIC0gYHByb3BzYCBvZiBpbnN0YW5jZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBkcmFnRW5kKHByb3BzKSB7XG4gIHNjcm9sbEZyYW1lLnN0b3AoKTsgLy8gW0FVVE8tU0NST0xML11cbiAgc2V0RHJhZ2dhYmxlQ3Vyc29yKHByb3BzLm9wdGlvbnMuaGFuZGxlLCBwcm9wcy5vcmdDdXJzb3IpO1xuICBib2R5LnN0eWxlLmN1cnNvciA9IGNzc09yZ1ZhbHVlQm9keUN1cnNvcjtcblxuICBpZiAocHJvcHMub3B0aW9ucy56SW5kZXggIT09IGZhbHNlKSB7IHByb3BzLmVsZW1lbnRTdHlsZS56SW5kZXggPSBwcm9wcy5vcmdaSW5kZXggfVxuICBpZiAoY3NzUHJvcFVzZXJTZWxlY3QpIHsgYm9keS5zdHlsZVtjc3NQcm9wVXNlclNlbGVjdF0gPSBjc3NPcmdWYWx1ZUJvZHlVc2VyU2VsZWN0IH1cbiAgY29uc3QgY2xhc3NMaXN0ID0gbUNsYXNzTGlzdChwcm9wcy5lbGVtZW50KTtcbiAgaWYgKG1vdmluZ0NsYXNzKSB7IGNsYXNzTGlzdC5yZW1vdmUobW92aW5nQ2xhc3MpIH1cbiAgaWYgKGRyYWdnaW5nQ2xhc3MpIHsgY2xhc3NMaXN0LnJlbW92ZShkcmFnZ2luZ0NsYXNzKSB9XG5cbiAgYWN0aXZlUHJvcHMgPSBudWxsO1xuICBwb2ludGVyRXZlbnQuY2FuY2VsKCk7IC8vIFJlc2V0IHBvaW50ZXIgKGFjdGl2ZVByb3BzIG11c3QgYmUgbnVsbCBiZWNhdXNlIHRoaXMgY2FsbHMgZW5kSGFuZGxlcilcbiAgaWYgKHByb3BzLm9uRHJhZ0VuZCkge1xuICAgIHByb3BzLm9uRHJhZ0VuZCh7bGVmdDogcHJvcHMuZWxlbWVudEJCb3gubGVmdCwgdG9wOiBwcm9wcy5lbGVtZW50QkJveC50b3B9KTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7cHJvcHN9IHByb3BzIC0gYHByb3BzYCBvZiBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7e2NsaWVudFgsIGNsaWVudFl9fSBwb2ludGVyWFkgLSBUaGlzIG1pZ2h0IGJlIE1vdXNlRXZlbnQsIFRvdWNoIG9mIFRvdWNoRXZlbnQgb3IgT2JqZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiBpdCBzdGFydGVkLlxuICovXG5mdW5jdGlvbiBkcmFnU3RhcnQocHJvcHMsIHBvaW50ZXJYWSkge1xuICBpZiAocHJvcHMuZGlzYWJsZWQpIHsgcmV0dXJuIGZhbHNlIH1cbiAgaWYgKHByb3BzLm9uRHJhZ1N0YXJ0ICYmIHByb3BzLm9uRHJhZ1N0YXJ0KHBvaW50ZXJYWSkgPT09IGZhbHNlKSB7IHJldHVybiBmYWxzZSB9XG4gIGlmIChhY3RpdmVQcm9wcykgeyBkcmFnRW5kKGFjdGl2ZVByb3BzKSB9IC8vIGFjdGl2ZUl0ZW0gaXMgbm9ybWFsbHkgbnVsbCBieSBwb2ludGVyRXZlbnQuZW5kLlxuXG4gIHNldERyYWdnaW5nQ3Vyc29yKHByb3BzLm9wdGlvbnMuaGFuZGxlKTtcbiAgYm9keS5zdHlsZS5jdXJzb3IgPSBjc3NWYWx1ZURyYWdnaW5nQ3Vyc29yIHx8IC8vIElmIGl0IGlzIGBmYWxzZWAgb3IgYCcnYFxuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHByb3BzLm9wdGlvbnMuaGFuZGxlLCAnJykuY3Vyc29yO1xuXG4gIGlmIChwcm9wcy5vcHRpb25zLnpJbmRleCAhPT0gZmFsc2UpIHsgcHJvcHMuZWxlbWVudFN0eWxlLnpJbmRleCA9IHByb3BzLm9wdGlvbnMuekluZGV4IH1cbiAgaWYgKGNzc1Byb3BVc2VyU2VsZWN0KSB7IGJvZHkuc3R5bGVbY3NzUHJvcFVzZXJTZWxlY3RdID0gJ25vbmUnIH1cbiAgaWYgKGRyYWdnaW5nQ2xhc3MpIHsgbUNsYXNzTGlzdChwcm9wcy5lbGVtZW50KS5hZGQoZHJhZ2dpbmdDbGFzcykgfVxuXG4gIGFjdGl2ZVByb3BzID0gcHJvcHM7XG4gIGhhc01vdmVkID0gZmFsc2U7XG4gIHBvaW50ZXJPZmZzZXQubGVmdCA9IHByb3BzLmVsZW1lbnRCQm94LmxlZnQgLSAocG9pbnRlclhZLmNsaWVudFggKyB3aW5kb3cucGFnZVhPZmZzZXQpO1xuICBwb2ludGVyT2Zmc2V0LnRvcCA9IHByb3BzLmVsZW1lbnRCQm94LnRvcCAtIChwb2ludGVyWFkuY2xpZW50WSArIHdpbmRvdy5wYWdlWU9mZnNldCk7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7cHJvcHN9IHByb3BzIC0gYHByb3BzYCBvZiBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBuZXdPcHRpb25zIC0gTmV3IG9wdGlvbnMuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc2V0T3B0aW9ucyhwcm9wcywgbmV3T3B0aW9ucykge1xuICBjb25zdCBvcHRpb25zID0gcHJvcHMub3B0aW9ucztcbiAgbGV0IG5lZWRzSW5pdEJCb3g7XG5cbiAgLy8gY29udGFpbm1lbnRcbiAgaWYgKG5ld09wdGlvbnMuY29udGFpbm1lbnQpIHtcbiAgICBsZXQgYkJveDtcbiAgICBpZiAoaXNFbGVtZW50KG5ld09wdGlvbnMuY29udGFpbm1lbnQpKSB7IC8vIFNwZWNpZmljIGVsZW1lbnRcbiAgICAgIGlmIChuZXdPcHRpb25zLmNvbnRhaW5tZW50ICE9PSBvcHRpb25zLmNvbnRhaW5tZW50KSB7XG4gICAgICAgIG9wdGlvbnMuY29udGFpbm1lbnQgPSBuZXdPcHRpb25zLmNvbnRhaW5tZW50O1xuICAgICAgICBwcm9wcy5jb250YWlubWVudElzQkJveCA9IGZhbHNlO1xuICAgICAgICBuZWVkc0luaXRCQm94ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKChiQm94ID0gdmFsaWRQUEJCb3goY29weVRyZWUobmV3T3B0aW9ucy5jb250YWlubWVudCkpKSAmJiAvLyBiQm94XG4gICAgICAgIGhhc0NoYW5nZWQoYkJveCwgb3B0aW9ucy5jb250YWlubWVudCkpIHtcbiAgICAgIG9wdGlvbnMuY29udGFpbm1lbnQgPSBiQm94O1xuICAgICAgcHJvcHMuY29udGFpbm1lbnRJc0JCb3ggPSB0cnVlO1xuICAgICAgbmVlZHNJbml0QkJveCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gW1NOQVBdXG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IFNuYXBPcHRpb25zXG4gICAqIEBwcm9wZXJ0eSB7U25hcFRhcmdldE9wdGlvbnNbXX0gdGFyZ2V0c1xuICAgKiBAcHJvcGVydHkge251bWJlcn0gW2dyYXZpdHldXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbY29ybmVyXVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW3NpZGVdXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2NlbnRlcl1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFtlZGdlXVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW2Jhc2VdXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBTbmFwVGFyZ2V0T3B0aW9uc1xuICAgKiBAcHJvcGVydHkgeyhudW1iZXJ8c3RyaW5nKX0gW3hdIC0gcGl4ZWxzIHwgJzxuPiUnIHwge3N0YXJ0LCBlbmR9IHwge3N0ZXAsIHN0YXJ0LCBlbmR9XG4gICAqIEBwcm9wZXJ0eSB7KG51bWJlcnxzdHJpbmcpfSBbeV1cbiAgICogQHByb3BlcnR5IHsoRWxlbWVudHxPYmplY3QpfSBbYm91bmRpbmdCb3hdIC0gT2JqZWN0IGhhcyBwcm9wZXJ0aWVzIHRoYXQgYXJlIHN0cmluZyBvciBudW1iZXIgZnJvbSBQUEJCb3guXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZ3Jhdml0eV1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFtjb3JuZXJdXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbc2lkZV1cbiAgICogQHByb3BlcnR5IHtib29sZWFufSBbY2VudGVyXVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW2VkZ2VdXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbYmFzZV1cbiAgICovXG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IFBhcnNlZFNuYXBUYXJnZXRcbiAgICogQHByb3BlcnR5IHtQUFZhbHVlfSBbeF0gLSAoaW5wdXQ6IHBpeGVscyB8ICc8bj4lJylcbiAgICogQHByb3BlcnR5IHtQUFZhbHVlfSBbeV1cbiAgICogQHByb3BlcnR5IHtQUFZhbHVlfSBbeFN0YXJ0XSAtIChpbnB1dDoge3N0YXJ0LCBlbmR9IHwge3N0ZXAsIHN0YXJ0LCBlbmR9KVxuICAgKiBAcHJvcGVydHkge1BQVmFsdWV9IFt4RW5kXVxuICAgKiBAcHJvcGVydHkge1BQVmFsdWV9IFt4U3RlcF0gLSAoaW5wdXQ6IHtzdGVwLCBzdGFydCwgZW5kfSlcbiAgICogQHByb3BlcnR5IHtQUFZhbHVlfSBbeVN0YXJ0XVxuICAgKiBAcHJvcGVydHkge1BQVmFsdWV9IFt5RW5kXVxuICAgKiBAcHJvcGVydHkge1BQVmFsdWV9IFt5U3RlcF1cbiAgICogQHByb3BlcnR5IHtFbGVtZW50fSBbZWxlbWVudF1cbiAgICogQHByb3BlcnR5IHtQUEJCb3h9IFtwcEJCb3hdXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBncmF2aXR5XG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGNvcm5lcnNcbiAgICogQHByb3BlcnR5IHtzdHJpbmdbXX0gc2lkZXNcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBjZW50ZXJcbiAgICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZWRnZXNcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGJhc2VcbiAgICovXG5cbiAgLy8gTm9ybWFsaXplIGBncmF2aXR5YCwgYGNvcm5lcmAsIGBzaWRlYCwgYGNlbnRlcmAsIGBlZGdlYCwgYGJhc2VgXG4gIGZ1bmN0aW9uIGNvbW1vblNuYXBPcHRpb25zKG9wdGlvbnMsIG5ld09wdGlvbnMpIHtcbiAgICBmdW5jdGlvbiBjbGVhblN0cmluZyhpblN0cmluZykge1xuICAgICAgcmV0dXJuIHR5cGVvZiBpblN0cmluZyA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBpblN0cmluZy5yZXBsYWNlKC9bLCBdKy9nLCAnICcpLnRyaW0oKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbiAgICB9XG5cbiAgICAvLyBncmF2aXR5XG4gICAgaWYgKGlzRmluaXRlKG5ld09wdGlvbnMuZ3Jhdml0eSkgJiYgbmV3T3B0aW9ucy5ncmF2aXR5ID4gMCkgeyBvcHRpb25zLmdyYXZpdHkgPSBuZXdPcHRpb25zLmdyYXZpdHkgfVxuICAgIC8vIGNvcm5lclxuICAgIGxldCBjb3JuZXIgPSBjbGVhblN0cmluZyhuZXdPcHRpb25zLmNvcm5lcik7XG4gICAgaWYgKGNvcm5lcikge1xuICAgICAgaWYgKGNvcm5lciAhPT0gJ2FsbCcpIHtcbiAgICAgICAgY29uc3QgYWRkZWQgPSB7fSxcbiAgICAgICAgICBjb3JuZXJzID0gY29ybmVyLnNwbGl0KC9cXHMvKS5yZWR1Y2UoKGNvcm5lcnMsIGNvcm5lcikgPT4ge1xuICAgICAgICAgICAgY29ybmVyID0gY29ybmVyLnRyaW0oKS5yZXBsYWNlKC9eKC4pLio/LSguKS4qJC8sICckMSQyJyk7XG4gICAgICAgICAgICBpZiAoKGNvcm5lciA9XG4gICAgICAgICAgICAgICAgY29ybmVyID09PSAndGwnIHx8IGNvcm5lciA9PT0gJ2x0JyA/ICd0bCcgOlxuICAgICAgICAgICAgICAgIGNvcm5lciA9PT0gJ3RyJyB8fCBjb3JuZXIgPT09ICdydCcgPyAndHInIDpcbiAgICAgICAgICAgICAgICBjb3JuZXIgPT09ICdibCcgfHwgY29ybmVyID09PSAnbGInID8gJ2JsJyA6XG4gICAgICAgICAgICAgICAgY29ybmVyID09PSAnYnInIHx8IGNvcm5lciA9PT0gJ3JiJyA/ICdicicgOlxuICAgICAgICAgICAgICAgIG51bGwpICYmICFhZGRlZFtjb3JuZXJdKSB7XG4gICAgICAgICAgICAgIGNvcm5lcnMucHVzaChjb3JuZXIpO1xuICAgICAgICAgICAgICBhZGRlZFtjb3JuZXJdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb3JuZXJzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICBjb3JuZXJzTGVuID0gY29ybmVycy5sZW5ndGg7XG4gICAgICAgIGNvcm5lciA9ICFjb3JuZXJzTGVuID8gbnVsbCA6IGNvcm5lcnNMZW4gPT09IDQgPyAnYWxsJyA6IGNvcm5lcnMuam9pbignICcpO1xuICAgICAgfVxuICAgICAgaWYgKGNvcm5lcikgeyBvcHRpb25zLmNvcm5lciA9IGNvcm5lciB9XG4gICAgfVxuICAgIC8vIHNpZGVcbiAgICBjb25zdCBzaWRlID0gY2xlYW5TdHJpbmcobmV3T3B0aW9ucy5zaWRlKTtcbiAgICBpZiAoc2lkZSkge1xuICAgICAgaWYgKHNpZGUgPT09ICdzdGFydCcgfHwgc2lkZSA9PT0gJ2VuZCcgfHwgc2lkZSA9PT0gJ2JvdGgnKSB7XG4gICAgICAgIG9wdGlvbnMuc2lkZSA9IHNpZGU7XG4gICAgICB9IGVsc2UgaWYgKHNpZGUgPT09ICdzdGFydCBlbmQnIHx8IHNpZGUgPT09ICdlbmQgc3RhcnQnKSB7XG4gICAgICAgIG9wdGlvbnMuc2lkZSA9ICdib3RoJztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2VudGVyXG4gICAgaWYgKHR5cGVvZiBuZXdPcHRpb25zLmNlbnRlciA9PT0gJ2Jvb2xlYW4nKSB7IG9wdGlvbnMuY2VudGVyID0gbmV3T3B0aW9ucy5jZW50ZXIgfVxuICAgIC8vIGVkZ2VcbiAgICBjb25zdCBlZGdlID0gY2xlYW5TdHJpbmcobmV3T3B0aW9ucy5lZGdlKTtcbiAgICBpZiAoZWRnZSkge1xuICAgICAgaWYgKGVkZ2UgPT09ICdpbnNpZGUnIHx8IGVkZ2UgPT09ICdvdXRzaWRlJyB8fCBlZGdlID09PSAnYm90aCcpIHtcbiAgICAgICAgb3B0aW9ucy5lZGdlID0gZWRnZTtcbiAgICAgIH0gZWxzZSBpZiAoZWRnZSA9PT0gJ2luc2lkZSBvdXRzaWRlJyB8fCBlZGdlID09PSAnb3V0c2lkZSBpbnNpZGUnKSB7XG4gICAgICAgIG9wdGlvbnMuZWRnZSA9ICdib3RoJztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gYmFzZVxuICAgIGNvbnN0IGJhc2UgPSB0eXBlb2YgbmV3T3B0aW9ucy5iYXNlID09PSAnc3RyaW5nJyA/IG5ld09wdGlvbnMuYmFzZS50cmltKCkudG9Mb3dlckNhc2UoKSA6IG51bGw7XG4gICAgaWYgKGJhc2UgJiYgKGJhc2UgPT09ICdjb250YWlubWVudCcgfHwgYmFzZSA9PT0gJ2RvY3VtZW50JykpIHsgb3B0aW9ucy5iYXNlID0gYmFzZSB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cbiAgd2luZG93LmNvbW1vblNuYXBPcHRpb25zID0gY29tbW9uU25hcE9wdGlvbnM7IC8vIFtERUJVRy9dXG5cbiAgLy8gc25hcFxuICBpZiAobmV3T3B0aW9ucy5zbmFwICE9IG51bGwpIHtcbiAgICBjb25zdCBuZXdTbmFwT3B0aW9ucyA9XG4gICAgICAgIGlzT2JqZWN0KG5ld09wdGlvbnMuc25hcCkgJiYgKG5ld09wdGlvbnMuc25hcC50YXJnZXRzICE9IG51bGwpID8gbmV3T3B0aW9ucy5zbmFwIDpcbiAgICAgICAge3RhcmdldHM6IG5ld09wdGlvbnMuc25hcH0sXG4gICAgICBzbmFwVGFyZ2V0c09wdGlvbnMgPSBbXSxcbiAgICAgIHNuYXBPcHRpb25zID0gY29tbW9uU25hcE9wdGlvbnMoe3RhcmdldHM6IHNuYXBUYXJnZXRzT3B0aW9uc30sIG5ld1NuYXBPcHRpb25zKTtcblxuICAgIC8vIFNldCBkZWZhdWx0IG9wdGlvbnMgaW50byB0b3AgbGV2ZWwuXG4gICAgaWYgKCFzbmFwT3B0aW9ucy5ncmF2aXR5KSB7IHNuYXBPcHRpb25zLmdyYXZpdHkgPSBTTkFQX0dSQVZJVFkgfVxuICAgIGlmICghc25hcE9wdGlvbnMuY29ybmVyKSB7IHNuYXBPcHRpb25zLmNvcm5lciA9IFNOQVBfQ09STkVSIH1cbiAgICBpZiAoIXNuYXBPcHRpb25zLnNpZGUpIHsgc25hcE9wdGlvbnMuc2lkZSA9IFNOQVBfU0lERSB9XG4gICAgaWYgKHR5cGVvZiBzbmFwT3B0aW9ucy5jZW50ZXIgIT09ICdib29sZWFuJykgeyBzbmFwT3B0aW9ucy5jZW50ZXIgPSBmYWxzZSB9XG4gICAgaWYgKCFzbmFwT3B0aW9ucy5lZGdlKSB7IHNuYXBPcHRpb25zLmVkZ2UgPSBTTkFQX0VER0UgfVxuICAgIGlmICghc25hcE9wdGlvbnMuYmFzZSkgeyBzbmFwT3B0aW9ucy5iYXNlID0gU05BUF9CQVNFIH1cblxuICAgIGNvbnN0IHBhcnNlZFNuYXBUYXJnZXRzID0gKFxuICAgICAgQXJyYXkuaXNBcnJheShuZXdTbmFwT3B0aW9ucy50YXJnZXRzKSA/IG5ld1NuYXBPcHRpb25zLnRhcmdldHMgOiBbbmV3U25hcE9wdGlvbnMudGFyZ2V0c11cbiAgICApLnJlZHVjZSgocGFyc2VkU25hcFRhcmdldHMsIHRhcmdldCkgPT4ge1xuICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7IHJldHVybiBwYXJzZWRTbmFwVGFyZ2V0cyB9XG5cbiAgICAgIGNvbnN0IGlzRWxlbWVudFByZSA9IGlzRWxlbWVudCh0YXJnZXQpLCAvLyBQcmUtY2hlY2sgZGlyZWN0IHZhbHVlXG4gICAgICAgIHBwQkJveFByZSA9IHZhbGlkUFBCQm94KGNvcHlUcmVlKHRhcmdldCkpLCAvLyBQcmUtY2hlY2sgZGlyZWN0IHZhbHVlXG4gICAgICAgIG5ld1NuYXBUYXJnZXRPcHRpb25zID1cbiAgICAgICAgICBpc0VsZW1lbnRQcmUgfHwgcHBCQm94UHJlID8ge2JvdW5kaW5nQm94OiB0YXJnZXR9IDogLy8gRGlyZWN0IEVsZW1lbnQgfCBQUEJCb3hcbiAgICAgICAgICBpc09iamVjdCh0YXJnZXQpICYmXG4gICAgICAgICAgICB0YXJnZXQuc3RhcnQgPT0gbnVsbCAmJiB0YXJnZXQuZW5kID09IG51bGwgJiYgdGFyZ2V0LnN0ZXAgPT0gbnVsbCA/IHRhcmdldCA6IC8vIFNuYXBUYXJnZXRPcHRpb25zXG4gICAgICAgICAge3g6IHRhcmdldCwgeTogdGFyZ2V0fSwgLy8gT3RoZXJzLCBpdCBtaWdodCBiZSB7c3RlcCwgc3RhcnQsIGVuZH1cbiAgICAgICAgZXhwYW5kZWRQYXJzZWRTbmFwVGFyZ2V0cyA9IFtdLFxuICAgICAgICBzbmFwVGFyZ2V0T3B0aW9ucyA9IHt9LFxuICAgICAgICBuZXdPcHRpb25zQkJveCA9IG5ld1NuYXBUYXJnZXRPcHRpb25zLmJvdW5kaW5nQm94O1xuICAgICAgbGV0IHBwQkJveDtcblxuICAgICAgaWYgKGlzRWxlbWVudFByZSB8fCBpc0VsZW1lbnQobmV3T3B0aW9uc0JCb3gpKSB7IC8vIEVsZW1lbnRcbiAgICAgICAgZXhwYW5kZWRQYXJzZWRTbmFwVGFyZ2V0cy5wdXNoKHtlbGVtZW50OiBuZXdPcHRpb25zQkJveH0pO1xuICAgICAgICBzbmFwVGFyZ2V0T3B0aW9ucy5ib3VuZGluZ0JveCA9IG5ld09wdGlvbnNCQm94O1xuICAgICAgfSBlbHNlIGlmICgocHBCQm94ID0gcHBCQm94UHJlIHx8IHZhbGlkUFBCQm94KGNvcHlUcmVlKG5ld09wdGlvbnNCQm94KSkpKSB7IC8vIE9iamVjdCAtPiBQUEJCb3hcbiAgICAgICAgZXhwYW5kZWRQYXJzZWRTbmFwVGFyZ2V0cy5wdXNoKHtwcEJCb3h9KTtcbiAgICAgICAgc25hcFRhcmdldE9wdGlvbnMuYm91bmRpbmdCb3ggPSBwcEJCb3gyT3B0aW9uT2JqZWN0KHBwQkJveCk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpbnZhbGlkOyAvLyBgdHJ1ZWAgaWYgdmFsaWQgUFBWYWx1ZSB3YXMgZ2l2ZW4gYnV0IHRoZSBjb250YWluZWQgdmFsdWUgaXMgaW52YWxpZC5cbiAgICAgICAgY29uc3QgcGFyc2VkWFkgPSBbJ3gnLCAneSddLnJlZHVjZSgocGFyc2VkWFksIGF4aXMpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdPcHRpb25zWFkgPSBuZXdTbmFwVGFyZ2V0T3B0aW9uc1theGlzXTtcbiAgICAgICAgICBsZXQgcHBWYWx1ZTtcblxuICAgICAgICAgIGlmICgocHBWYWx1ZSA9IHZhbGlkUFBWYWx1ZShuZXdPcHRpb25zWFkpKSkgeyAvLyBwaXhlbHMgfCAnPG4+JSdcbiAgICAgICAgICAgIHBhcnNlZFhZW2F4aXNdID0gcHBWYWx1ZTtcbiAgICAgICAgICAgIHNuYXBUYXJnZXRPcHRpb25zW2F4aXNdID0gcHBWYWx1ZTJPcHRpb25WYWx1ZShwcFZhbHVlKTtcblxuICAgICAgICAgIH0gZWxzZSB7IC8vIHtzdGFydCwgZW5kfSB8IHtzdGVwLCBzdGFydCwgZW5kfVxuICAgICAgICAgICAgbGV0IHN0YXJ0LCBlbmQsIHN0ZXA7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QobmV3T3B0aW9uc1hZKSkge1xuICAgICAgICAgICAgICBzdGFydCA9IHZhbGlkUFBWYWx1ZShuZXdPcHRpb25zWFkuc3RhcnQpO1xuICAgICAgICAgICAgICBlbmQgPSB2YWxpZFBQVmFsdWUobmV3T3B0aW9uc1hZLmVuZCk7XG4gICAgICAgICAgICAgIHN0ZXAgPSB2YWxpZFBQVmFsdWUobmV3T3B0aW9uc1hZLnN0ZXApO1xuICAgICAgICAgICAgICBpZiAoc3RhcnQgJiYgZW5kICYmIHN0YXJ0LmlzUmF0aW8gPT09IGVuZC5pc1JhdGlvICYmIHN0YXJ0LnZhbHVlID49IGVuZC52YWx1ZSkgeyAvLyBzdGFydCA+PSBlbmRcbiAgICAgICAgICAgICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnQgPSBwYXJzZWRYWVtgJHtheGlzfVN0YXJ0YF0gPSBzdGFydCB8fCB7dmFsdWU6IDAsIGlzUmF0aW86IGZhbHNlfTtcbiAgICAgICAgICAgIGVuZCA9IHBhcnNlZFhZW2Ake2F4aXN9RW5kYF0gPSBlbmQgfHwge3ZhbHVlOiAxLCBpc1JhdGlvOiB0cnVlfTtcbiAgICAgICAgICAgIHNuYXBUYXJnZXRPcHRpb25zW2F4aXNdID0ge3N0YXJ0OiBwcFZhbHVlMk9wdGlvblZhbHVlKHN0YXJ0KSwgZW5kOiBwcFZhbHVlMk9wdGlvblZhbHVlKGVuZCl9O1xuICAgICAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICAgICAgaWYgKHN0ZXAuaXNSYXRpbyA/IHN0ZXAudmFsdWUgPiAwIDogc3RlcC52YWx1ZSA+PSAyKSB7IC8vIHN0ZXAgPiAwJSB8fCBzdGVwID49IDJweFxuICAgICAgICAgICAgICAgIHBhcnNlZFhZW2Ake2F4aXN9U3RlcGBdID0gc3RlcDtcbiAgICAgICAgICAgICAgICBzbmFwVGFyZ2V0T3B0aW9uc1theGlzXS5zdGVwID0gcHBWYWx1ZTJPcHRpb25WYWx1ZShzdGVwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcGFyc2VkWFk7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgaWYgKGludmFsaWQpIHsgcmV0dXJuIHBhcnNlZFNuYXBUYXJnZXRzIH1cblxuICAgICAgICBpZiAocGFyc2VkWFkueFN0YXJ0ICYmICFwYXJzZWRYWS54U3RlcCAmJiBwYXJzZWRYWS55U3RhcnQgJiYgIXBhcnNlZFhZLnlTdGVwKSB7XG4gICAgICAgICAgLy8gRXhwYW5kIGludG8gNCBsaW5lcy4gVGhpcyBpcyBub3QgQkJveCwgYW5kIGBlZGdlYCBpcyBpZ25vcmVkLlxuICAgICAgICAgIGV4cGFuZGVkUGFyc2VkU25hcFRhcmdldHMucHVzaChcbiAgICAgICAgICAgIHt4U3RhcnQ6IHBhcnNlZFhZLnhTdGFydCwgeEVuZDogcGFyc2VkWFkueEVuZCwgeTogcGFyc2VkWFkueVN0YXJ0fSwgLy8gVG9wXG4gICAgICAgICAgICB7eFN0YXJ0OiBwYXJzZWRYWS54U3RhcnQsIHhFbmQ6IHBhcnNlZFhZLnhFbmQsIHk6IHBhcnNlZFhZLnlFbmR9LCAvLyBCb3R0b21cbiAgICAgICAgICAgIHt4OiBwYXJzZWRYWS54U3RhcnQsIHlTdGFydDogcGFyc2VkWFkueVN0YXJ0LCB5RW5kOiBwYXJzZWRYWS55RW5kfSwgLy8gTGVmdFxuICAgICAgICAgICAge3g6IHBhcnNlZFhZLnhFbmQsIHlTdGFydDogcGFyc2VkWFkueVN0YXJ0LCB5RW5kOiBwYXJzZWRYWS55RW5kfSAvLyBSaWdodFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXhwYW5kZWRQYXJzZWRTbmFwVGFyZ2V0cy5wdXNoKHBhcnNlZFhZKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZXhwYW5kZWRQYXJzZWRTbmFwVGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgICAgc25hcFRhcmdldHNPcHRpb25zLnB1c2goY29tbW9uU25hcE9wdGlvbnMoc25hcFRhcmdldE9wdGlvbnMsIG5ld1NuYXBUYXJnZXRPcHRpb25zKSk7XG4gICAgICAgIC8vIENvcHkgY29tbW9uIFNuYXBPcHRpb25zXG4gICAgICAgIGNvbnN0IGNvcm5lciA9IHNuYXBUYXJnZXRPcHRpb25zLmNvcm5lciB8fCBzbmFwT3B0aW9ucy5jb3JuZXIsXG4gICAgICAgICAgc2lkZSA9IHNuYXBUYXJnZXRPcHRpb25zLnNpZGUgfHwgc25hcE9wdGlvbnMuc2lkZSxcbiAgICAgICAgICBlZGdlID0gc25hcFRhcmdldE9wdGlvbnMuZWRnZSB8fCBzbmFwT3B0aW9ucy5lZGdlLFxuICAgICAgICAgIGNvbW1vbk9wdGlvbnMgPSB7XG4gICAgICAgICAgICBncmF2aXR5OiBzbmFwVGFyZ2V0T3B0aW9ucy5ncmF2aXR5IHx8IHNuYXBPcHRpb25zLmdyYXZpdHksXG4gICAgICAgICAgICBiYXNlOiBzbmFwVGFyZ2V0T3B0aW9ucy5iYXNlIHx8IHNuYXBPcHRpb25zLmJhc2UsXG4gICAgICAgICAgICBjZW50ZXI6IHR5cGVvZiBzbmFwVGFyZ2V0T3B0aW9ucy5jZW50ZXIgPT09ICdib29sZWFuJ1xuICAgICAgICAgICAgICA/IHNuYXBUYXJnZXRPcHRpb25zLmNlbnRlciA6IHNuYXBPcHRpb25zLmNlbnRlcixcbiAgICAgICAgICAgIGNvcm5lcnM6IGNvcm5lciA9PT0gJ2FsbCcgPyBTTkFQX0FMTF9DT1JORVJTIDogY29ybmVyLnNwbGl0KCcgJyksIC8vIFNwbGl0XG4gICAgICAgICAgICBzaWRlczogc2lkZSA9PT0gJ2JvdGgnID8gU05BUF9BTExfU0lERVMgOiBbc2lkZV0sIC8vIFNwbGl0XG4gICAgICAgICAgICBlZGdlczogZWRnZSA9PT0gJ2JvdGgnID8gU05BUF9BTExfRURHRVMgOiBbZWRnZV0gLy8gU3BsaXRcbiAgICAgICAgICB9O1xuICAgICAgICBleHBhbmRlZFBhcnNlZFNuYXBUYXJnZXRzLmZvckVhY2gocGFyc2VkU25hcFRhcmdldCA9PiB7XG4gICAgICAgICAgLy8gU2V0IGNvbW1vbiBTbmFwT3B0aW9uc1xuICAgICAgICAgIFsnZ3Jhdml0eScsICdjb3JuZXJzJywgJ3NpZGVzJywgJ2NlbnRlcicsICdlZGdlcycsICdiYXNlJ10uZm9yRWFjaChcbiAgICAgICAgICAgIG9wdGlvbiA9PiB7IHBhcnNlZFNuYXBUYXJnZXRbb3B0aW9uXSA9IGNvbW1vbk9wdGlvbnNbb3B0aW9uXSB9KTtcbiAgICAgICAgICBwYXJzZWRTbmFwVGFyZ2V0cy5wdXNoKHBhcnNlZFNuYXBUYXJnZXQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJzZWRTbmFwVGFyZ2V0cztcbiAgICB9LCBbXSk7XG5cbiAgICBpZiAocGFyc2VkU25hcFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBvcHRpb25zLnNuYXAgPSBzbmFwT3B0aW9uczsgLy8gVXBkYXRlIGFsd2F5c1xuICAgICAgaWYgKGhhc0NoYW5nZWQocGFyc2VkU25hcFRhcmdldHMsIHByb3BzLnBhcnNlZFNuYXBUYXJnZXRzKSkge1xuICAgICAgICBwcm9wcy5wYXJzZWRTbmFwVGFyZ2V0cyA9IHBhcnNlZFNuYXBUYXJnZXRzO1xuICAgICAgICBuZWVkc0luaXRCQm94ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAobmV3T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnc25hcCcpICYmIHByb3BzLnBhcnNlZFNuYXBUYXJnZXRzKSB7XG4gICAgb3B0aW9ucy5zbmFwID0gcHJvcHMucGFyc2VkU25hcFRhcmdldHMgPSBwcm9wcy5zbmFwVGFyZ2V0cyA9IHZvaWQgMDtcbiAgfVxuXG4gIC8vIFsvU05BUF1cblxuICAvLyBbQVVUTy1TQ1JPTExdXG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IEF1dG9TY3JvbGxPcHRpb25zXG4gICAqIEBwcm9wZXJ0eSB7KEVsZW1lbnR8V2luZG93KX0gdGFyZ2V0XG4gICAqIEBwcm9wZXJ0eSB7QXJyYXl9IHNwZWVkXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXl9IHNlbnNpdGl2aXR5XG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWluWF1cbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFttYXhYXVxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW21pblldXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWF4WV1cbiAgICovXG5cbiAgLy8gYXV0b1Njcm9sbFxuICBpZiAobmV3T3B0aW9ucy5hdXRvU2Nyb2xsKSB7XG4gICAgY29uc3QgbmV3QXV0b1Njcm9sbE9wdGlvbnMgPVxuICAgICAgICBpc09iamVjdChuZXdPcHRpb25zLmF1dG9TY3JvbGwpID8gbmV3T3B0aW9ucy5hdXRvU2Nyb2xsIDpcbiAgICAgICAge3RhcmdldDogbmV3T3B0aW9ucy5hdXRvU2Nyb2xsID09PSB0cnVlID8gd2luZG93IDogbmV3T3B0aW9ucy5hdXRvU2Nyb2xsfSxcbiAgICAgIGF1dG9TY3JvbGxPcHRpb25zID0ge307XG5cbiAgICAvLyB0YXJnZXRcbiAgICBhdXRvU2Nyb2xsT3B0aW9ucy50YXJnZXQgPVxuICAgICAgaXNFbGVtZW50KG5ld0F1dG9TY3JvbGxPcHRpb25zLnRhcmdldCkgPyBuZXdBdXRvU2Nyb2xsT3B0aW9ucy50YXJnZXQgOiB3aW5kb3c7XG4gICAgLy8gc3BlZWRcbiAgICBhdXRvU2Nyb2xsT3B0aW9ucy5zcGVlZCA9IFtdO1xuICAgIChBcnJheS5pc0FycmF5KG5ld0F1dG9TY3JvbGxPcHRpb25zLnNwZWVkKVxuICAgICAgPyBuZXdBdXRvU2Nyb2xsT3B0aW9ucy5zcGVlZCA6IFtuZXdBdXRvU2Nyb2xsT3B0aW9ucy5zcGVlZF0pLmV2ZXJ5KChzcGVlZCwgaSkgPT4ge1xuICAgICAgaWYgKGkgPD0gMiAmJiBpc0Zpbml0ZShzcGVlZCkpIHtcbiAgICAgICAgYXV0b1Njcm9sbE9wdGlvbnMuc3BlZWRbaV0gPSBzcGVlZDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgaWYgKCFhdXRvU2Nyb2xsT3B0aW9ucy5zcGVlZC5sZW5ndGgpIHtcbiAgICAgIGF1dG9TY3JvbGxPcHRpb25zLnNwZWVkID0gQVVUT1NDUk9MTF9TUEVFRDtcbiAgICB9XG4gICAgLy8gc2Vuc2l0aXZpdHlcbiAgICBjb25zdCBuZXdTZW5zaXRpdml0eSA9IEFycmF5LmlzQXJyYXkobmV3QXV0b1Njcm9sbE9wdGlvbnMuc2Vuc2l0aXZpdHkpXG4gICAgICA/IG5ld0F1dG9TY3JvbGxPcHRpb25zLnNlbnNpdGl2aXR5IDogW25ld0F1dG9TY3JvbGxPcHRpb25zLnNlbnNpdGl2aXR5XTtcbiAgICBhdXRvU2Nyb2xsT3B0aW9ucy5zZW5zaXRpdml0eSA9IGF1dG9TY3JvbGxPcHRpb25zLnNwZWVkLm1hcChcbiAgICAgICh2LCBpKSA9PiAoaXNGaW5pdGUobmV3U2Vuc2l0aXZpdHlbaV0pID8gbmV3U2Vuc2l0aXZpdHlbaV0gOiBBVVRPU0NST0xMX1NFTlNJVElWSVRZW2ldKSk7XG4gICAgLy8gbWluKiwgbWF4KlxuICAgIFsnWCcsICdZJ10uZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uTWluID0gYG1pbiR7b3B0aW9ufWAsXG4gICAgICAgIG9wdGlvbk1heCA9IGBtYXgke29wdGlvbn1gO1xuICAgICAgaWYgKGlzRmluaXRlKG5ld0F1dG9TY3JvbGxPcHRpb25zW29wdGlvbk1pbl0pICYmIG5ld0F1dG9TY3JvbGxPcHRpb25zW29wdGlvbk1pbl0gPj0gMCkge1xuICAgICAgICBhdXRvU2Nyb2xsT3B0aW9uc1tvcHRpb25NaW5dID0gbmV3QXV0b1Njcm9sbE9wdGlvbnNbb3B0aW9uTWluXTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Zpbml0ZShuZXdBdXRvU2Nyb2xsT3B0aW9uc1tvcHRpb25NYXhdKSAmJiBuZXdBdXRvU2Nyb2xsT3B0aW9uc1tvcHRpb25NYXhdID49IDAgJiZcbiAgICAgICAgICAoIWF1dG9TY3JvbGxPcHRpb25zW29wdGlvbk1pbl0gfHxcbiAgICAgICAgICAgIG5ld0F1dG9TY3JvbGxPcHRpb25zW29wdGlvbk1heF0gPj0gYXV0b1Njcm9sbE9wdGlvbnNbb3B0aW9uTWluXSkpIHtcbiAgICAgICAgYXV0b1Njcm9sbE9wdGlvbnNbb3B0aW9uTWF4XSA9IG5ld0F1dG9TY3JvbGxPcHRpb25zW29wdGlvbk1heF07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzQ2hhbmdlZChhdXRvU2Nyb2xsT3B0aW9ucywgb3B0aW9ucy5hdXRvU2Nyb2xsKSkge1xuICAgICAgb3B0aW9ucy5hdXRvU2Nyb2xsID0gYXV0b1Njcm9sbE9wdGlvbnM7XG4gICAgICBuZWVkc0luaXRCQm94ID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobmV3T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnYXV0b1Njcm9sbCcpKSB7XG4gICAgaWYgKG9wdGlvbnMuYXV0b1Njcm9sbCkgeyBuZWVkc0luaXRCQm94ID0gdHJ1ZSB9XG4gICAgb3B0aW9ucy5hdXRvU2Nyb2xsID0gdm9pZCAwO1xuICB9XG5cbiAgLy8gWy9BVVRPLVNDUk9MTF1cblxuICBpZiAobmVlZHNJbml0QkJveCkgeyBpbml0QkJveChwcm9wcykgfVxuXG4gIC8vIGhhbmRsZVxuICBpZiAoaXNFbGVtZW50KG5ld09wdGlvbnMuaGFuZGxlKSAmJiBuZXdPcHRpb25zLmhhbmRsZSAhPT0gb3B0aW9ucy5oYW5kbGUpIHtcbiAgICBpZiAob3B0aW9ucy5oYW5kbGUpIHsgLy8gUmVzdG9yZVxuICAgICAgb3B0aW9ucy5oYW5kbGUuc3R5bGUuY3Vyc29yID0gcHJvcHMub3JnQ3Vyc29yO1xuICAgICAgaWYgKGNzc1Byb3BVc2VyU2VsZWN0KSB7IG9wdGlvbnMuaGFuZGxlLnN0eWxlW2Nzc1Byb3BVc2VyU2VsZWN0XSA9IHByb3BzLm9yZ1VzZXJTZWxlY3QgfVxuICAgICAgcG9pbnRlckV2ZW50LnJlbW92ZVN0YXJ0SGFuZGxlcihvcHRpb25zLmhhbmRsZSwgcHJvcHMucG9pbnRlckV2ZW50SGFuZGxlcklkKTtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlID0gb3B0aW9ucy5oYW5kbGUgPSBuZXdPcHRpb25zLmhhbmRsZTtcbiAgICBwcm9wcy5vcmdDdXJzb3IgPSBoYW5kbGUuc3R5bGUuY3Vyc29yO1xuICAgIHNldERyYWdnYWJsZUN1cnNvcihoYW5kbGUsIHByb3BzLm9yZ0N1cnNvcik7XG4gICAgaWYgKGNzc1Byb3BVc2VyU2VsZWN0KSB7XG4gICAgICBwcm9wcy5vcmdVc2VyU2VsZWN0ID0gaGFuZGxlLnN0eWxlW2Nzc1Byb3BVc2VyU2VsZWN0XTtcbiAgICAgIGhhbmRsZS5zdHlsZVtjc3NQcm9wVXNlclNlbGVjdF0gPSAnbm9uZSc7XG4gICAgfVxuICAgIHBvaW50ZXJFdmVudC5hZGRTdGFydEhhbmRsZXIoaGFuZGxlLCBwcm9wcy5wb2ludGVyRXZlbnRIYW5kbGVySWQpO1xuICB9XG5cbiAgLy8gekluZGV4XG4gIGlmIChpc0Zpbml0ZShuZXdPcHRpb25zLnpJbmRleCkgfHwgbmV3T3B0aW9ucy56SW5kZXggPT09IGZhbHNlKSB7XG4gICAgb3B0aW9ucy56SW5kZXggPSBuZXdPcHRpb25zLnpJbmRleDtcbiAgICBpZiAocHJvcHMgPT09IGFjdGl2ZVByb3BzKSB7XG4gICAgICBwcm9wcy5lbGVtZW50U3R5bGUuekluZGV4ID0gb3B0aW9ucy56SW5kZXggPT09IGZhbHNlID8gcHJvcHMub3JnWkluZGV4IDogb3B0aW9ucy56SW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLy8gbGVmdC90b3BcbiAgY29uc3QgcG9zaXRpb24gPSB7bGVmdDogcHJvcHMuZWxlbWVudEJCb3gubGVmdCwgdG9wOiBwcm9wcy5lbGVtZW50QkJveC50b3B9O1xuICBsZXQgbmVlZHNNb3ZlO1xuICBpZiAoaXNGaW5pdGUobmV3T3B0aW9ucy5sZWZ0KSAmJiBuZXdPcHRpb25zLmxlZnQgIT09IHBvc2l0aW9uLmxlZnQpIHtcbiAgICBwb3NpdGlvbi5sZWZ0ID0gbmV3T3B0aW9ucy5sZWZ0O1xuICAgIG5lZWRzTW92ZSA9IHRydWU7XG4gIH1cbiAgaWYgKGlzRmluaXRlKG5ld09wdGlvbnMudG9wKSAmJiBuZXdPcHRpb25zLnRvcCAhPT0gcG9zaXRpb24udG9wKSB7XG4gICAgcG9zaXRpb24udG9wID0gbmV3T3B0aW9ucy50b3A7XG4gICAgbmVlZHNNb3ZlID0gdHJ1ZTtcbiAgfVxuICBpZiAobmVlZHNNb3ZlKSB7IG1vdmUocHJvcHMsIHBvc2l0aW9uKSB9XG5cbiAgLy8gRXZlbnQgbGlzdGVuZXJzXG4gIFsnb25EcmFnJywgJ29uTW92ZScsICdvbkRyYWdTdGFydCcsICdvbk1vdmVTdGFydCcsICdvbkRyYWdFbmQnXS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgaWYgKHR5cGVvZiBuZXdPcHRpb25zW29wdGlvbl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdGlvbnNbb3B0aW9uXSA9IG5ld09wdGlvbnNbb3B0aW9uXTtcbiAgICAgIHByb3BzW29wdGlvbl0gPSBvcHRpb25zW29wdGlvbl0uYmluZChwcm9wcy5pbnMpO1xuICAgIH0gZWxzZSBpZiAobmV3T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShvcHRpb24pICYmIG5ld09wdGlvbnNbb3B0aW9uXSA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zW29wdGlvbl0gPSBwcm9wc1tvcHRpb25dID0gdm9pZCAwO1xuICAgIH1cbiAgfSk7XG59XG5cbmNsYXNzIFBsYWluRHJhZ2dhYmxlIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIGBQbGFpbkRyYWdnYWJsZWAgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRhcmdldCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIGluczogdGhpcyxcbiAgICAgIG9wdGlvbnM6IHsgLy8gSW5pdGlhbCBvcHRpb25zIChub3QgZGVmYXVsdClcbiAgICAgICAgekluZGV4OiBaSU5ERVggLy8gSW5pdGlhbCBzdGF0ZS5cbiAgICAgIH0sXG4gICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfaWQnLCB7dmFsdWU6ICsraW5zSWR9KTtcbiAgICBwcm9wcy5faWQgPSB0aGlzLl9pZDtcbiAgICBpbnNQcm9wc1t0aGlzLl9pZF0gPSBwcm9wcztcbiAgICBwcm9wcy5pbml0QXJndW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTsgLy8gW0RFQlVHL11cblxuICAgIGlmICghaXNFbGVtZW50KGVsZW1lbnQpIHx8IGVsZW1lbnQgPT09IGJvZHkpIHsgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGVsZW1lbnQgaXMgbm90IGFjY2VwdGVkLicpIH1cbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9IGVsc2UgaWYgKCFpc09iamVjdChvcHRpb25zKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG9wdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgbGV0IGdwdVRyaWdnZXIgPSB0cnVlO1xuICAgIC8vIFtTVkddXG4gICAgbGV0IG93bmVyU3ZnO1xuICAgIC8vIFNWR0VsZW1lbnQgd2hpY2ggaXMgbm90IHJvb3Qgdmlld1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCAmJiAob3duZXJTdmcgPSBlbGVtZW50Lm93bmVyU1ZHRWxlbWVudCkpIHtcbiAgICAgIC8vIEl0IG1lYW5zIGBpbnN0YW5jZW9mIFNWR0xvY2F0YWJsZWAgKG1hbnkgYnJvd3NlcnMgZG9uJ3QgaGF2ZSBTVkdMb2NhdGFibGUpXG4gICAgICBpZiAoIWVsZW1lbnQuZ2V0QkJveCkgeyB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgZWxlbWVudCBpcyBub3QgYWNjZXB0ZWQuIChTVkdMb2NhdGFibGUpJykgfVxuICAgICAgLy8gVHJpZGVudCBhbmQgRWRnZSBidWcsIFNWR1NWR0VsZW1lbnQgZG9lc24ndCBoYXZlIFNWR0FuaW1hdGVkVHJhbnNmb3JtTGlzdD9cbiAgICAgIGlmICghZWxlbWVudC50cmFuc2Zvcm0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGVsZW1lbnQgaXMgbm90IGFjY2VwdGVkLiAoU1ZHQW5pbWF0ZWRUcmFuc2Zvcm1MaXN0KScpO1xuICAgICAgfVxuICAgICAgLy8gVHJpZGVudCBidWcsIHJldHVybmVkIHZhbHVlIG11c3QgYmUgdXNlZCAoVGhhdCBpcyBub3QgZ2l2ZW4gdmFsdWUpLlxuICAgICAgcHJvcHMuc3ZnVHJhbnNmb3JtID0gZWxlbWVudC50cmFuc2Zvcm0uYmFzZVZhbC5hcHBlbmRJdGVtKG93bmVyU3ZnLmNyZWF0ZVNWR1RyYW5zZm9ybSgpKTtcbiAgICAgIHByb3BzLnN2Z1BvaW50ID0gb3duZXJTdmcuY3JlYXRlU1ZHUG9pbnQoKTtcbiAgICAgIC8vIEdlY2tvIGJ1Zywgdmlldy5nZXRTY3JlZW5DVE0gcmV0dXJucyBDVE0gd2l0aCByb290IHZpZXcuXG4gICAgICBjb25zdCBzdmdWaWV3ID0gZWxlbWVudC5uZWFyZXN0Vmlld3BvcnRFbGVtZW50O1xuICAgICAgcHJvcHMuc3ZnQ3RtRWxlbWVudCA9ICFJU19HRUNLTyA/IHN2Z1ZpZXcgOlxuICAgICAgICBzdmdWaWV3LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhvd25lclN2Zy5uYW1lc3BhY2VVUkksICdyZWN0JykpO1xuICAgICAgZ3B1VHJpZ2dlciA9IGZhbHNlO1xuICAgICAgcHJvcHMuaW5pdEVsbSA9IGluaXRTdmc7XG4gICAgICBwcm9wcy5tb3ZlRWxtID0gbW92ZVN2ZztcblxuICAgIH0gZWxzZSB7XG4gICAgLy8gWy9TVkddXG4gICAgLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovIC8qIFtTVkcvXSAqL1xuICAgIGNvbnN0IGNzc1Byb3BXaWxsQ2hhbmdlID0gQ1NTUHJlZml4LmdldE5hbWUoJ3dpbGxDaGFuZ2UnKTtcbiAgICBpZiAoY3NzUHJvcFdpbGxDaGFuZ2UpIHsgZ3B1VHJpZ2dlciA9IGZhbHNlIH1cblxuICAgIGlmICghb3B0aW9ucy5sZWZ0VG9wICYmIGNzc1Byb3BUcmFuc2Zvcm0pIHsgLy8gdHJhbnNsYXRlXG4gICAgICBpZiAoY3NzUHJvcFdpbGxDaGFuZ2UpIHsgZWxlbWVudC5zdHlsZVtjc3NQcm9wV2lsbENoYW5nZV0gPSAndHJhbnNmb3JtJyB9XG4gICAgICBwcm9wcy5pbml0RWxtID0gaW5pdFRyYW5zbGF0ZTtcbiAgICAgIHByb3BzLm1vdmVFbG0gPSBtb3ZlVHJhbnNsYXRlO1xuXG4gICAgfSBlbHNlIHsgLy8gbGVmdCBhbmQgdG9wXG4gICAgICAvLyBbTEVGVFRPUF1cbiAgICAgIGlmIChjc3NQcm9wV2lsbENoYW5nZSkgeyBlbGVtZW50LnN0eWxlW2Nzc1Byb3BXaWxsQ2hhbmdlXSA9ICdsZWZ0LCB0b3AnIH1cbiAgICAgIHByb3BzLmluaXRFbG0gPSBpbml0TGVmdFRvcDtcbiAgICAgIHByb3BzLm1vdmVFbG0gPSBtb3ZlTGVmdFRvcDtcbiAgICAgIC8vIFsvTEVGVFRPUF1cbiAgICAgIC8qIFtMRUZUVE9QL11cbiAgICAgIHRocm93IG5ldyBFcnJvcignYHRyYW5zZm9ybWAgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIFtMRUZUVE9QL10gKi9cbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSBpbmRlbnQgKi8gLyogW1NWRy9dICovXG4gICAgfSAvLyBbU1ZHL11cblxuICAgIHByb3BzLmVsZW1lbnQgPSBpbml0QW5pbShlbGVtZW50LCBncHVUcmlnZ2VyKTtcbiAgICBwcm9wcy5lbGVtZW50U3R5bGUgPSBlbGVtZW50LnN0eWxlO1xuICAgIHByb3BzLm9yZ1pJbmRleCA9IHByb3BzLmVsZW1lbnRTdHlsZS56SW5kZXg7XG4gICAgaWYgKGRyYWdnYWJsZUNsYXNzKSB7IG1DbGFzc0xpc3QoZWxlbWVudCkuYWRkKGRyYWdnYWJsZUNsYXNzKSB9XG4gICAgcHJvcHMucG9pbnRlckV2ZW50SGFuZGxlcklkID1cbiAgICAgIHBvaW50ZXJFdmVudC5yZWdTdGFydEhhbmRsZXIocG9pbnRlclhZID0+IGRyYWdTdGFydChwcm9wcywgcG9pbnRlclhZKSk7XG5cbiAgICAvLyBEZWZhdWx0IG9wdGlvbnNcbiAgICBpZiAoIW9wdGlvbnMuY29udGFpbm1lbnQpIHtcbiAgICAgIGxldCBwYXJlbnQ7XG4gICAgICBvcHRpb25zLmNvbnRhaW5tZW50ID0gKHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSkgJiYgaXNFbGVtZW50KHBhcmVudCkgPyBwYXJlbnQgOiBib2R5O1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuaGFuZGxlKSB7IG9wdGlvbnMuaGFuZGxlID0gZWxlbWVudCB9XG5cbiAgICBzZXRPcHRpb25zKHByb3BzLCBvcHRpb25zKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBjb25zdCBwcm9wcyA9IGluc1Byb3BzW3RoaXMuX2lkXTtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTsgLy8gVG8gcmVzdG9yZSBlbGVtZW50IGFuZCByZXNldCBwb2ludGVyXG4gICAgcG9pbnRlckV2ZW50LnVucmVnU3RhcnRIYW5kbGVyKFxuICAgICAgcG9pbnRlckV2ZW50LnJlbW92ZVN0YXJ0SGFuZGxlcihwcm9wcy5vcHRpb25zLmhhbmRsZSwgcHJvcHMucG9pbnRlckV2ZW50SGFuZGxlcklkKSk7XG4gICAgZGVsZXRlIGluc1Byb3BzW3RoaXMuX2lkXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE5ldyBvcHRpb25zLlxuICAgKiBAcmV0dXJucyB7UGxhaW5EcmFnZ2FibGV9IEN1cnJlbnQgaW5zdGFuY2UgaXRzZWxmLlxuICAgKi9cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICBzZXRPcHRpb25zKGluc1Byb3BzW3RoaXMuX2lkXSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcG9zaXRpb24oKSB7XG4gICAgaW5pdEJCb3goaW5zUHJvcHNbdGhpcy5faWRdKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gaW5zUHJvcHNbdGhpcy5faWRdLmRpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuICAgIGNvbnN0IHByb3BzID0gaW5zUHJvcHNbdGhpcy5faWRdO1xuICAgIGlmICgodmFsdWUgPSAhIXZhbHVlKSAhPT0gcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHByb3BzLmRpc2FibGVkID0gdmFsdWU7XG4gICAgICBpZiAocHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgaWYgKHByb3BzID09PSBhY3RpdmVQcm9wcykgeyBkcmFnRW5kKHByb3BzKSB9XG4gICAgICAgIHByb3BzLm9wdGlvbnMuaGFuZGxlLnN0eWxlLmN1cnNvciA9IHByb3BzLm9yZ0N1cnNvcjtcbiAgICAgICAgaWYgKGNzc1Byb3BVc2VyU2VsZWN0KSB7IHByb3BzLm9wdGlvbnMuaGFuZGxlLnN0eWxlW2Nzc1Byb3BVc2VyU2VsZWN0XSA9IHByb3BzLm9yZ1VzZXJTZWxlY3QgfVxuICAgICAgICBpZiAoZHJhZ2dhYmxlQ2xhc3MpIHsgbUNsYXNzTGlzdChwcm9wcy5lbGVtZW50KS5yZW1vdmUoZHJhZ2dhYmxlQ2xhc3MpIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERyYWdnYWJsZUN1cnNvcihwcm9wcy5vcHRpb25zLmhhbmRsZSwgcHJvcHMub3JnQ3Vyc29yKTtcbiAgICAgICAgaWYgKGNzc1Byb3BVc2VyU2VsZWN0KSB7IHByb3BzLm9wdGlvbnMuaGFuZGxlLnN0eWxlW2Nzc1Byb3BVc2VyU2VsZWN0XSA9ICdub25lJyB9XG4gICAgICAgIGlmIChkcmFnZ2FibGVDbGFzcykgeyBtQ2xhc3NMaXN0KHByb3BzLmVsZW1lbnQpLmFkZChkcmFnZ2FibGVDbGFzcykgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbGVtZW50KCkge1xuICAgIHJldHVybiBpbnNQcm9wc1t0aGlzLl9pZF0uZWxlbWVudDtcbiAgfVxuXG4gIGdldCByZWN0KCkge1xuICAgIHJldHVybiBjb3B5VHJlZShpbnNQcm9wc1t0aGlzLl9pZF0uZWxlbWVudEJCb3gpO1xuICB9XG5cbiAgZ2V0IGxlZnQoKSB7IHJldHVybiBpbnNQcm9wc1t0aGlzLl9pZF0uZWxlbWVudEJCb3gubGVmdCB9XG4gIHNldCBsZWZ0KHZhbHVlKSB7IHNldE9wdGlvbnMoaW5zUHJvcHNbdGhpcy5faWRdLCB7bGVmdDogdmFsdWV9KSB9XG5cbiAgZ2V0IHRvcCgpIHsgcmV0dXJuIGluc1Byb3BzW3RoaXMuX2lkXS5lbGVtZW50QkJveC50b3AgfVxuICBzZXQgdG9wKHZhbHVlKSB7IHNldE9wdGlvbnMoaW5zUHJvcHNbdGhpcy5faWRdLCB7dG9wOiB2YWx1ZX0pIH1cblxuICBnZXQgY29udGFpbm1lbnQoKSB7XG4gICAgY29uc3QgcHJvcHMgPSBpbnNQcm9wc1t0aGlzLl9pZF07XG4gICAgcmV0dXJuIHByb3BzLmNvbnRhaW5tZW50SXNCQm94XG4gICAgICA/IHBwQkJveDJPcHRpb25PYmplY3QocHJvcHMub3B0aW9ucy5jb250YWlubWVudCkgOiBwcm9wcy5vcHRpb25zLmNvbnRhaW5tZW50O1xuICB9XG4gIHNldCBjb250YWlubWVudCh2YWx1ZSkgeyBzZXRPcHRpb25zKGluc1Byb3BzW3RoaXMuX2lkXSwge2NvbnRhaW5tZW50OiB2YWx1ZX0pIH1cblxuICAvLyBbU05BUF1cbiAgZ2V0IHNuYXAoKSB7IHJldHVybiBjb3B5VHJlZShpbnNQcm9wc1t0aGlzLl9pZF0ub3B0aW9ucy5zbmFwKSB9XG4gIHNldCBzbmFwKHZhbHVlKSB7IHNldE9wdGlvbnMoaW5zUHJvcHNbdGhpcy5faWRdLCB7c25hcDogdmFsdWV9KSB9XG4gIC8vIFsvU05BUF1cblxuICAvLyBbQVVUTy1TQ1JPTExdXG4gIGdldCBhdXRvU2Nyb2xsKCkgeyByZXR1cm4gY29weVRyZWUoaW5zUHJvcHNbdGhpcy5faWRdLm9wdGlvbnMuYXV0b1Njcm9sbCkgfVxuICBzZXQgYXV0b1Njcm9sbCh2YWx1ZSkgeyBzZXRPcHRpb25zKGluc1Byb3BzW3RoaXMuX2lkXSwge2F1dG9TY3JvbGw6IHZhbHVlfSkgfVxuICAvLyBbL0FVVE8tU0NST0xMXVxuXG4gIGdldCBoYW5kbGUoKSB7IHJldHVybiBpbnNQcm9wc1t0aGlzLl9pZF0ub3B0aW9ucy5oYW5kbGUgfVxuICBzZXQgaGFuZGxlKHZhbHVlKSB7IHNldE9wdGlvbnMoaW5zUHJvcHNbdGhpcy5faWRdLCB7aGFuZGxlOiB2YWx1ZX0pIH1cblxuICBnZXQgekluZGV4KCkgeyByZXR1cm4gaW5zUHJvcHNbdGhpcy5faWRdLm9wdGlvbnMuekluZGV4IH1cbiAgc2V0IHpJbmRleCh2YWx1ZSkgeyBzZXRPcHRpb25zKGluc1Byb3BzW3RoaXMuX2lkXSwge3pJbmRleDogdmFsdWV9KSB9XG5cbiAgZ2V0IG9uRHJhZygpIHsgcmV0dXJuIGluc1Byb3BzW3RoaXMuX2lkXS5vcHRpb25zLm9uRHJhZyB9XG4gIHNldCBvbkRyYWcodmFsdWUpIHsgc2V0T3B0aW9ucyhpbnNQcm9wc1t0aGlzLl9pZF0sIHtvbkRyYWc6IHZhbHVlfSkgfVxuXG4gIGdldCBvbk1vdmUoKSB7IHJldHVybiBpbnNQcm9wc1t0aGlzLl9pZF0ub3B0aW9ucy5vbk1vdmUgfVxuICBzZXQgb25Nb3ZlKHZhbHVlKSB7IHNldE9wdGlvbnMoaW5zUHJvcHNbdGhpcy5faWRdLCB7b25Nb3ZlOiB2YWx1ZX0pIH1cblxuICBnZXQgb25EcmFnU3RhcnQoKSB7IHJldHVybiBpbnNQcm9wc1t0aGlzLl9pZF0ub3B0aW9ucy5vbkRyYWdTdGFydCB9XG4gIHNldCBvbkRyYWdTdGFydCh2YWx1ZSkgeyBzZXRPcHRpb25zKGluc1Byb3BzW3RoaXMuX2lkXSwge29uRHJhZ1N0YXJ0OiB2YWx1ZX0pIH1cblxuICBnZXQgb25Nb3ZlU3RhcnQoKSB7IHJldHVybiBpbnNQcm9wc1t0aGlzLl9pZF0ub3B0aW9ucy5vbk1vdmVTdGFydCB9XG4gIHNldCBvbk1vdmVTdGFydCh2YWx1ZSkgeyBzZXRPcHRpb25zKGluc1Byb3BzW3RoaXMuX2lkXSwge29uTW92ZVN0YXJ0OiB2YWx1ZX0pIH1cblxuICBnZXQgb25EcmFnRW5kKCkgeyByZXR1cm4gaW5zUHJvcHNbdGhpcy5faWRdLm9wdGlvbnMub25EcmFnRW5kIH1cbiAgc2V0IG9uRHJhZ0VuZCh2YWx1ZSkgeyBzZXRPcHRpb25zKGluc1Byb3BzW3RoaXMuX2lkXSwge29uRHJhZ0VuZDogdmFsdWV9KSB9XG5cbiAgc3RhdGljIGdldCBkcmFnZ2FibGVDdXJzb3IoKSB7XG4gICAgcmV0dXJuIGNzc1dhbnRlZFZhbHVlRHJhZ2dhYmxlQ3Vyc29yO1xuICB9XG4gIHN0YXRpYyBzZXQgZHJhZ2dhYmxlQ3Vyc29yKHZhbHVlKSB7XG4gICAgaWYgKGNzc1dhbnRlZFZhbHVlRHJhZ2dhYmxlQ3Vyc29yICE9PSB2YWx1ZSkge1xuICAgICAgY3NzV2FudGVkVmFsdWVEcmFnZ2FibGVDdXJzb3IgPSB2YWx1ZTtcbiAgICAgIGNzc1ZhbHVlRHJhZ2dhYmxlQ3Vyc29yID0gbnVsbDsgLy8gUmVzZXRcbiAgICAgIE9iamVjdC5rZXlzKGluc1Byb3BzKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBpbnNQcm9wc1tpZF07XG4gICAgICAgIGlmIChwcm9wcy5kaXNhYmxlZCB8fCBwcm9wcyA9PT0gYWN0aXZlUHJvcHMgJiYgY3NzVmFsdWVEcmFnZ2luZ0N1cnNvciAhPT0gZmFsc2UpIHsgcmV0dXJuIH1cbiAgICAgICAgc2V0RHJhZ2dhYmxlQ3Vyc29yKHByb3BzLm9wdGlvbnMuaGFuZGxlLCBwcm9wcy5vcmdDdXJzb3IpO1xuICAgICAgICBpZiAocHJvcHMgPT09IGFjdGl2ZVByb3BzKSB7IC8vIFNpbmNlIGNzc1ZhbHVlRHJhZ2dpbmdDdXJzb3IgaXMgYGZhbHNlYCwgY29weSBjdXJzb3IgYWdhaW4uXG4gICAgICAgICAgYm9keS5zdHlsZS5jdXJzb3IgPSBjc3NPcmdWYWx1ZUJvZHlDdXJzb3I7XG4gICAgICAgICAgYm9keS5zdHlsZS5jdXJzb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwcm9wcy5vcHRpb25zLmhhbmRsZSwgJycpLmN1cnNvcjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBkcmFnZ2luZ0N1cnNvcigpIHtcbiAgICByZXR1cm4gY3NzV2FudGVkVmFsdWVEcmFnZ2luZ0N1cnNvcjtcbiAgfVxuICBzdGF0aWMgc2V0IGRyYWdnaW5nQ3Vyc29yKHZhbHVlKSB7XG4gICAgaWYgKGNzc1dhbnRlZFZhbHVlRHJhZ2dpbmdDdXJzb3IgIT09IHZhbHVlKSB7XG4gICAgICBjc3NXYW50ZWRWYWx1ZURyYWdnaW5nQ3Vyc29yID0gdmFsdWU7XG4gICAgICBjc3NWYWx1ZURyYWdnaW5nQ3Vyc29yID0gbnVsbDsgLy8gUmVzZXRcbiAgICAgIGlmIChhY3RpdmVQcm9wcykge1xuICAgICAgICBzZXREcmFnZ2luZ0N1cnNvcihhY3RpdmVQcm9wcy5vcHRpb25zLmhhbmRsZSk7XG4gICAgICAgIGlmIChjc3NWYWx1ZURyYWdnaW5nQ3Vyc29yID09PSBmYWxzZSkge1xuICAgICAgICAgIHNldERyYWdnYWJsZUN1cnNvcihhY3RpdmVQcm9wcy5vcHRpb25zLmhhbmRsZSwgYWN0aXZlUHJvcHMub3JnQ3Vyc29yKTsgLy8gZHJhZ2dhYmxlQ3Vyc29yXG4gICAgICAgICAgYm9keS5zdHlsZS5jdXJzb3IgPSBjc3NPcmdWYWx1ZUJvZHlDdXJzb3I7XG4gICAgICAgIH1cbiAgICAgICAgYm9keS5zdHlsZS5jdXJzb3IgPSBjc3NWYWx1ZURyYWdnaW5nQ3Vyc29yIHx8IC8vIElmIGl0IGlzIGBmYWxzZWAgb3IgYCcnYFxuICAgICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFjdGl2ZVByb3BzLm9wdGlvbnMuaGFuZGxlLCAnJykuY3Vyc29yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgZHJhZ2dhYmxlQ2xhc3MoKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZUNsYXNzO1xuICB9XG4gIHN0YXRpYyBzZXQgZHJhZ2dhYmxlQ2xhc3ModmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlID8gKHZhbHVlICsgJycpIDogdm9pZCAwO1xuICAgIGlmICh2YWx1ZSAhPT0gZHJhZ2dhYmxlQ2xhc3MpIHtcbiAgICAgIE9iamVjdC5rZXlzKGluc1Byb3BzKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBpbnNQcm9wc1tpZF07XG4gICAgICAgIGlmICghcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSBtQ2xhc3NMaXN0KHByb3BzLmVsZW1lbnQpO1xuICAgICAgICAgIGlmIChkcmFnZ2FibGVDbGFzcykgeyBjbGFzc0xpc3QucmVtb3ZlKGRyYWdnYWJsZUNsYXNzKSB9XG4gICAgICAgICAgaWYgKHZhbHVlKSB7IGNsYXNzTGlzdC5hZGQodmFsdWUpIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkcmFnZ2FibGVDbGFzcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgZHJhZ2dpbmdDbGFzcygpIHtcbiAgICByZXR1cm4gZHJhZ2dpbmdDbGFzcztcbiAgfVxuICBzdGF0aWMgc2V0IGRyYWdnaW5nQ2xhc3ModmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlID8gKHZhbHVlICsgJycpIDogdm9pZCAwO1xuICAgIGlmICh2YWx1ZSAhPT0gZHJhZ2dpbmdDbGFzcykge1xuICAgICAgaWYgKGFjdGl2ZVByb3BzKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IG1DbGFzc0xpc3QoYWN0aXZlUHJvcHMuZWxlbWVudCk7XG4gICAgICAgIGlmIChkcmFnZ2luZ0NsYXNzKSB7IGNsYXNzTGlzdC5yZW1vdmUoZHJhZ2dpbmdDbGFzcykgfVxuICAgICAgICBpZiAodmFsdWUpIHsgY2xhc3NMaXN0LmFkZCh2YWx1ZSkgfVxuICAgICAgfVxuICAgICAgZHJhZ2dpbmdDbGFzcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgbW92aW5nQ2xhc3MoKSB7XG4gICAgcmV0dXJuIG1vdmluZ0NsYXNzO1xuICB9XG4gIHN0YXRpYyBzZXQgbW92aW5nQ2xhc3ModmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlID8gKHZhbHVlICsgJycpIDogdm9pZCAwO1xuICAgIGlmICh2YWx1ZSAhPT0gbW92aW5nQ2xhc3MpIHtcbiAgICAgIGlmIChhY3RpdmVQcm9wcyAmJiBoYXNNb3ZlZCkge1xuICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSBtQ2xhc3NMaXN0KGFjdGl2ZVByb3BzLmVsZW1lbnQpO1xuICAgICAgICBpZiAobW92aW5nQ2xhc3MpIHsgY2xhc3NMaXN0LnJlbW92ZShtb3ZpbmdDbGFzcykgfVxuICAgICAgICBpZiAodmFsdWUpIHsgY2xhc3NMaXN0LmFkZCh2YWx1ZSkgfVxuICAgICAgfVxuICAgICAgbW92aW5nQ2xhc3MgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxucG9pbnRlckV2ZW50LmFkZE1vdmVIYW5kbGVyKGRvY3VtZW50LCBwb2ludGVyWFkgPT4ge1xuICBpZiAoIWFjdGl2ZVByb3BzKSB7IHJldHVybiB9XG4gIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgIGxlZnQ6IHBvaW50ZXJYWS5jbGllbnRYICsgd2luZG93LnBhZ2VYT2Zmc2V0ICsgcG9pbnRlck9mZnNldC5sZWZ0LFxuICAgIHRvcDogcG9pbnRlclhZLmNsaWVudFkgKyB3aW5kb3cucGFnZVlPZmZzZXQgKyBwb2ludGVyT2Zmc2V0LnRvcFxuICB9O1xuICBpZiAobW92ZShhY3RpdmVQcm9wcywgcG9zaXRpb24sXG4gICAgLy8gW1NOQVBdXG4gICAgYWN0aXZlUHJvcHMuc25hcFRhcmdldHMgPyBwb3NpdGlvbiA9PiB7IC8vIFNuYXBcbiAgICAgIGNvbnN0IGlMZW4gPSBhY3RpdmVQcm9wcy5zbmFwVGFyZ2V0cy5sZW5ndGg7XG4gICAgICBsZXQgc25hcHBlZFggPSBmYWxzZSxcbiAgICAgICAgc25hcHBlZFkgPSBmYWxzZSxcbiAgICAgICAgaTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpTGVuICYmICghc25hcHBlZFggfHwgIXNuYXBwZWRZKTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNuYXBUYXJnZXQgPSBhY3RpdmVQcm9wcy5zbmFwVGFyZ2V0c1tpXTtcbiAgICAgICAgaWYgKChzbmFwVGFyZ2V0LmdyYXZpdHlYU3RhcnQgPT0gbnVsbCB8fCBwb3NpdGlvbi5sZWZ0ID49IHNuYXBUYXJnZXQuZ3Jhdml0eVhTdGFydCkgJiZcbiAgICAgICAgICAgIChzbmFwVGFyZ2V0LmdyYXZpdHlYRW5kID09IG51bGwgfHwgcG9zaXRpb24ubGVmdCA8PSBzbmFwVGFyZ2V0LmdyYXZpdHlYRW5kKSAmJlxuICAgICAgICAgICAgKHNuYXBUYXJnZXQuZ3Jhdml0eVlTdGFydCA9PSBudWxsIHx8IHBvc2l0aW9uLnRvcCA+PSBzbmFwVGFyZ2V0LmdyYXZpdHlZU3RhcnQpICYmXG4gICAgICAgICAgICAoc25hcFRhcmdldC5ncmF2aXR5WUVuZCA9PSBudWxsIHx8IHBvc2l0aW9uLnRvcCA8PSBzbmFwVGFyZ2V0LmdyYXZpdHlZRW5kKSkge1xuICAgICAgICAgIGlmICghc25hcHBlZFggJiYgc25hcFRhcmdldC54ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgPSBzbmFwVGFyZ2V0Lng7XG4gICAgICAgICAgICBzbmFwcGVkWCA9IHRydWU7XG4gICAgICAgICAgICBpID0gLTE7IC8vIFJlc3RhcnQgbG9vcFxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXNuYXBwZWRZICYmIHNuYXBUYXJnZXQueSAhPSBudWxsKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi50b3AgPSBzbmFwVGFyZ2V0Lnk7XG4gICAgICAgICAgICBzbmFwcGVkWSA9IHRydWU7XG4gICAgICAgICAgICBpID0gLTE7IC8vIFJlc3RhcnQgbG9vcFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcG9zaXRpb24uc25hcHBlZCA9IHNuYXBwZWRYIHx8IHNuYXBwZWRZO1xuICAgICAgcmV0dXJuIGFjdGl2ZVByb3BzLm9uRHJhZyA/IGFjdGl2ZVByb3BzLm9uRHJhZyhwb3NpdGlvbikgOiB0cnVlO1xuICAgIH0gOlxuICAgIC8vIFsvU05BUF1cbiAgICBhY3RpdmVQcm9wcy5vbkRyYWcpKSB7XG5cbiAgICAvLyBbQVVUTy1TQ1JPTExdXG4gICAgY29uc3QgeHlNb3ZlQXJncyA9IHt9LFxuICAgICAgYXV0b1Njcm9sbCA9IGFjdGl2ZVByb3BzLmF1dG9TY3JvbGw7XG4gICAgaWYgKGF1dG9TY3JvbGwpIHtcbiAgICAgIGNvbnN0IGNsaWVudFhZID0ge1xuICAgICAgICB4OiBhY3RpdmVQcm9wcy5lbGVtZW50QkJveC5sZWZ0IC0gd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICB5OiBhY3RpdmVQcm9wcy5lbGVtZW50QkJveC50b3AgLSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgIH07XG5cbiAgICAgIFsneCcsICd5J10uZm9yRWFjaChheGlzID0+IHtcbiAgICAgICAgaWYgKGF1dG9TY3JvbGxbYXhpc10pIHtcbiAgICAgICAgICBjb25zdCBtaW4gPSBhdXRvU2Nyb2xsW2F4aXNdLm1pbixcbiAgICAgICAgICAgIG1heCA9IGF1dG9TY3JvbGxbYXhpc10ubWF4O1xuICAgICAgICAgIGF1dG9TY3JvbGxbYXhpc10ubGluZXMuc29tZShsaW5lID0+IHtcbiAgICAgICAgICAgIGlmIChsaW5lLmRpciA9PT0gLTEgPyAoY2xpZW50WFlbYXhpc10gPD0gbGluZS5wb3NpdGlvbikgOlxuICAgICAgICAgICAgICAoY2xpZW50WFlbYXhpc10gPj0gbGluZS5wb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgeHlNb3ZlQXJnc1theGlzXSA9IHtkaXI6IGxpbmUuZGlyLCBzcGVlZDogbGluZS5zcGVlZCAvIDEwMDAsIG1pbiwgbWF4fTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoeHlNb3ZlQXJncy54IHx8IHh5TW92ZUFyZ3MueSkge1xuICAgICAgc2Nyb2xsRnJhbWUubW92ZShhdXRvU2Nyb2xsLnRhcmdldCwgeHlNb3ZlQXJncyxcbiAgICAgICAgYXV0b1Njcm9sbC5pc1dpbmRvdyA/IHNjcm9sbFhZV2luZG93IDogc2Nyb2xsWFlFbGVtZW50KTtcbiAgICAgIHBvc2l0aW9uLmF1dG9TY3JvbGwgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxGcmFtZS5zdG9wKCk7XG4gICAgfVxuICAgIC8vIFsvQVVUTy1TQ1JPTExdXG5cbiAgICBpZiAoIWhhc01vdmVkKSB7XG4gICAgICBoYXNNb3ZlZCA9IHRydWU7XG4gICAgICBpZiAobW92aW5nQ2xhc3MpIHsgbUNsYXNzTGlzdChhY3RpdmVQcm9wcy5lbGVtZW50KS5hZGQobW92aW5nQ2xhc3MpIH1cbiAgICAgIGlmIChhY3RpdmVQcm9wcy5vbk1vdmVTdGFydCkgeyBhY3RpdmVQcm9wcy5vbk1vdmVTdGFydChwb3NpdGlvbikgfVxuICAgIH1cbiAgICBpZiAoYWN0aXZlUHJvcHMub25Nb3ZlKSB7IGFjdGl2ZVByb3BzLm9uTW92ZShwb3NpdGlvbikgfVxuICB9XG59KTtcblxue1xuICBmdW5jdGlvbiBlbmRIYW5kbGVyKCkge1xuICAgIGlmIChhY3RpdmVQcm9wcykgeyBkcmFnRW5kKGFjdGl2ZVByb3BzKSB9XG4gIH1cblxuICBwb2ludGVyRXZlbnQuYWRkRW5kSGFuZGxlcihkb2N1bWVudCwgZW5kSGFuZGxlcik7XG4gIHBvaW50ZXJFdmVudC5hZGRDYW5jZWxIYW5kbGVyKGRvY3VtZW50LCBlbmRIYW5kbGVyKTtcbn1cblxue1xuICBmdW5jdGlvbiBpbml0RG9jKCkge1xuICAgIGNzc1Byb3BUcmFuc2l0aW9uUHJvcGVydHkgPSBDU1NQcmVmaXguZ2V0TmFtZSgndHJhbnNpdGlvblByb3BlcnR5Jyk7XG4gICAgY3NzUHJvcFRyYW5zZm9ybSA9IENTU1ByZWZpeC5nZXROYW1lKCd0cmFuc2Zvcm0nKTtcbiAgICBjc3NPcmdWYWx1ZUJvZHlDdXJzb3IgPSBib2R5LnN0eWxlLmN1cnNvcjtcbiAgICBpZiAoKGNzc1Byb3BVc2VyU2VsZWN0ID0gQ1NTUHJlZml4LmdldE5hbWUoJ3VzZXJTZWxlY3QnKSkpIHtcbiAgICAgIGNzc09yZ1ZhbHVlQm9keVVzZXJTZWxlY3QgPSBib2R5LnN0eWxlW2Nzc1Byb3BVc2VyU2VsZWN0XTtcbiAgICB9XG5cbiAgICAvLyBJbml0IGFjdGl2ZSBpdGVtIHdoZW4gbGF5b3V0IGlzIGNoYW5nZWQsIGFuZCBpbml0IG90aGVycyBsYXRlci5cblxuICAgIGNvbnN0IExBWllfSU5JVF9ERUxBWSA9IDIwMDtcbiAgICBsZXQgaW5pdERvbmVJdGVtcyA9IHt9LFxuICAgICAgbGF6eUluaXRUaW1lcjtcblxuICAgIGZ1bmN0aW9uIGNoZWNrSW5pdEJCb3gocHJvcHMsIGV2ZW50VHlwZSkge1xuICAgICAgaWYgKHByb3BzLmluaXRFbG0pIHsgLy8gRWFzeSBjaGVja2luZyBmb3IgaW5zdGFuY2Ugd2l0aG91dCBlcnJvcnMuXG4gICAgICAgIGluaXRCQm94KHByb3BzLCBldmVudFR5cGUpO1xuICAgICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJyYWNlLXN0eWxlXG4gICAgICBlbHNlIHsgY29uc29sZS5sb2coJ2luc3RhbmNlIG1heSBoYXZlIGFuIGVycm9yOicpOyBjb25zb2xlLmxvZyhwcm9wcykgfSAvLyBbREVCVUcvXVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRBbGwoZXZlbnRUeXBlKSB7XG4gICAgICBjbGVhclRpbWVvdXQobGF6eUluaXRUaW1lcik7XG4gICAgICBPYmplY3Qua2V5cyhpbnNQcm9wcykuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgIGlmICghaW5pdERvbmVJdGVtc1tpZF0pIHsgY2hlY2tJbml0QkJveChpbnNQcm9wc1tpZF0sIGV2ZW50VHlwZSkgfVxuICAgICAgfSk7XG4gICAgICBpbml0RG9uZUl0ZW1zID0ge307XG4gICAgfVxuXG4gICAgbGV0IGxheW91dENoYW5naW5nID0gZmFsc2U7IC8vIEdlY2tvIGJ1ZywgbXVsdGlwbGUgY2FsbGluZyBieSBgcmVzaXplYC5cbiAgICBjb25zdCBsYXlvdXRDaGFuZ2UgPSBBbmltRXZlbnQuYWRkKGV2ZW50ID0+IHtcbiAgICAgIGlmIChsYXlvdXRDaGFuZ2luZykge1xuICAgICAgICBjb25zb2xlLmxvZygnYHJlc2l6ZS9zY3JvbGxgIGV2ZW50IGxpc3RlbmVyIGlzIGFscmVhZHkgcnVubmluZy4nKTsgLy8gW0RFQlVHL11cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGF5b3V0Q2hhbmdpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAoYWN0aXZlUHJvcHMpIHtcbiAgICAgICAgY2hlY2tJbml0QkJveChhY3RpdmVQcm9wcywgZXZlbnQudHlwZSk7XG4gICAgICAgIHBvaW50ZXJFdmVudC5tb3ZlKCk7XG4gICAgICAgIGluaXREb25lSXRlbXNbYWN0aXZlUHJvcHMuX2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgICBjbGVhclRpbWVvdXQobGF6eUluaXRUaW1lcik7XG4gICAgICBsYXp5SW5pdFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7IGluaXRBbGwoZXZlbnQudHlwZSkgfSwgTEFaWV9JTklUX0RFTEFZKTtcblxuICAgICAgbGF5b3V0Q2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGF5b3V0Q2hhbmdlLCB0cnVlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGF5b3V0Q2hhbmdlLCB0cnVlKTtcbiAgfVxuXG4gIGlmICgoYm9keSA9IGRvY3VtZW50LmJvZHkpKSB7XG4gICAgaW5pdERvYygpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgIGluaXREb2MoKTtcbiAgICB9LCB0cnVlKTtcbiAgfVxufVxuXG4vKiBbU05BUC9dXG5QbGFpbkRyYWdnYWJsZS5saW1pdCA9IHRydWU7XG5bU05BUC9dICovXG5cbmV4cG9ydCBkZWZhdWx0IFBsYWluRHJhZ2dhYmxlO1xuIl19
  