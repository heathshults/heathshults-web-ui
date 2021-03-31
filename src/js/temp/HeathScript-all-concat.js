/* eslint-disable no-undef, no-unused-vars */
// const interact = require('interactjs');
"use strict";
/**
 * @author HeathShults.com - Heath Shults v1.0 (http://heathshults.com)
 * @version 1.0.0
 * @copyright 2020-2020 Heath-Shults
 * @license MIT (https://github.com/heathshults/heathshults.com/LICENSE)
 */
// ====== RANKING BARS

window.onload = function () {
  var theBars = document.querySelectorAll('.hs-ranking-bar');
  theBars.forEach(function (aBar) {
    aBar.style = "width: ".concat(aBar.getAttribute('aria-valuenow'), "%");
  });
}(); // ======* MODAL FUNCTION *====== //


function showModal(modal) {
  document.querySelector(modal).show();
}

function closeModal(modal) {
  document.querySelector(modal).close();
} // ======* SCROLLSPY INIT & MENU FUNCTIONS *====== //
// SCROLLSPY


var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#mainNav'
}); // NAVBAR EFFECTS

window.onscroll = function scrollFunction() {
  var navbarElement = document.querySelector('#mainNav');

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbarElement.classList.add('hs-navbar-semitransparent');
  } else {
    navbarElement.classList.remove('hs-navbar-semitransparent');
  }
}; // SHOW MORE SETTINGS


var ShowMoreSettings = {
  fbInitButtonText: 'Show More',
  fbOpenButtonText: 'Show Less',
  fbButtonWidth: '80px',
  fbBoxHeight: '100%',
  fbHeight: '35px',
  fbBoxPaddingBottom: '0',
  fbStartColor: 'rgba(255,255,255,1)',
  fbEndColor: 'rgba(255,255,255,1)'
};
"use strict";

require("./even-height/even-height");

require("./show-more-fadebar/show-more");

require("./theme-switcher/theme-switcher");

require("./time-stamper/time-stamper");

require("./validate-url/validate-url");

require("./hs-slide-button/slide-button");

require("./hs-timeline/hs-timeline-ts");
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var EvenHeight = function EvenHeight(_ref) {
  var ehSelector = _ref.ehSelector,
      ehChildSelector = _ref.ehChildSelector,
      evenRows = _ref.evenRows,
      evenRowChildren = _ref.evenRowChildren;
  (0, _classCallCheck2.default)(this, EvenHeight);
  setTimeout(function () {
    evenRows = Array.prototype.slice.call(document.querySelectorAll(ehSelector));
    console.log('evenRows: ');
    console.log(evenRows);
    evenRows.forEach(function (row) {
      var height = row.offsetHeight;
      evenRowChildren = Array.prototype.slice.call(row.querySelectorAll(ehChildSelector));
      console.log('height: ' + height);
      console.log('childnodes: ');
      console.log(evenRowChildren);
      evenRowChildren.forEach(function (node) {
        var child = node;
        child.setAttribute('style', "height: ".concat(height, "px"));
      });
    });
  }, 2000);
}; // const _EvenHeight = EvenHeight;
// export { _EvenHeight as EvenHeight };


exports.default = EvenHeight;
new EvenHeight({
  ehSelector: '.even-height',
  ehChildSelector: 'col-md-3'
});
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EvenHeight = void 0;

var _evenHeight = _interopRequireDefault(require("./even-height"));

var __EvenHeight = _evenHeight.default;
exports.EvenHeight = __EvenHeight;
"use strict";

// Contact Form Scripts
var $ = require('jquery');

require('./jqbootstrapvalidator');

$(function () {
  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function submitError($form, event, errors) {// additional error messages or events
    },
    submitSuccess: function submitSuccess($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM

      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message

      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }

      $.ajax({
        url: "././mail/contact_me.php",
        type: "POST",
        data: {
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function success() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
          $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success').append('</div>'); //clear all fields

          $('#contactForm').trigger("reset");
        },
        error: function error() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
          $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
          $('#success > .alert-danger').append('</div>'); //clear all fields

          $('#contactForm').trigger("reset");
        }
      });
    },
    filter: function filter() {
      return $(this).is(":visible");
    }
  });
  $("a[data-toggle=\"tab\"]").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});
/*When clicking on Full hide fail/success boxes */

$('#name').focus(function () {
  $('#success').html('');
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Draggable = /*#__PURE__*/function () {
  function Draggable() {
    (0, _classCallCheck2.default)(this, Draggable);
    this.container = document.querySelector('.box__dragabble');
    this.box = document.querySelectorAll('.box');

    this._addEventListener();
  }

  (0, _createClass2.default)(Draggable, [{
    key: "_addEventListener",
    value: function _addEventListener() {
      var _this = this;

      this.box.forEach(function (element) {
        element.addEventListener('dragenter', _this.dragenter);
        element.addEventListener('dragleave', _this.dragleave);
        element.addEventListener('dragover', _this.dragover);
        element.addEventListener('drop', _this.drop);
      });
      this.container.addEventListener('dragstart', this.dragstart);
      this.container.addEventListener('dragend', this.dragend);
    }
  }, {
    key: "dragstart",
    value: function dragstart(e) {
      var _this2 = this;

      this.classList.add('drag_start');
      setTimeout(function () {
        _this2.classList.add('invisible');
      }, 0);
    }
  }, {
    key: "dragend",
    value: function dragend(e) {
      console.log('dragend');
      this.classList.remove('invisible');
      this.classList.remove('drag_start');
    }
  }, {
    key: "dragenter",
    value: function dragenter(e) {
      e.preventDefault();
      console.log('dragenter');
      this.classList.add('drag_enter');
    }
  }, {
    key: "dragleave",
    value: function dragleave(e) {
      console.log('dragleave');
      this.classList.remove('drag_enter');
    }
  }, {
    key: "dragover",
    value: function dragover(e) {
      e.preventDefault();
      console.log('dragover');
    }
  }, {
    key: "drop",
    value: function drop() {
      var container = document.querySelector('.box__dragabble');
      this.classList.remove('drag_enter');
      this.append(container);
    }
  }], [{
    key: "init",
    value: function init() {
      return new this();
    }
  }]);
  return Draggable;
}();

document.addEventListener('load', Draggable.init());
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var SlideButton = /*#__PURE__*/function () {
  function SlideButton() {
    (0, _classCallCheck2.default)(this, SlideButton);
  }

  (0, _createClass2.default)(SlideButton, null, [{
    key: "dragondrop",
    value: function dragondrop() {
      var l = console.log;
      var validateIssue = false;
      var slideButton = document.querySelector('#slideButton');
      l(slidedeButton);
      var dropzone = document.querySelector('#dropzone');
      l(dropzone);
      var arrows = document.querySelector('.hs-animated-arrow-container');
      var animatedCheckMark = "<svg class=\"svg-checkmark\" x=\"0px\" y=\"0px\" viewBox=\"0 0 135 110\" width=\"35px\" height=\"43px\"><path class=\"check\" d=\"M126.8,14L55.7,85.1L29.2,63.4\"/></svg>";
      var eventtarget;
      var checky;
      var x;
      var y;
      slideButton.setAttribute('ondragstart', dragonstart(event));
      slideButton.addEvensetAttributetListener('ondrag', drag(event));
      slideButton.setAttribute('ondragend', dragonend(event));
      dropzone.addEventListener('dragenter', dragonenter(event));
      dropzone.addEventListener('dragleave', dragonleave(event));
      dropzone.addEventListener('dragover', dragonover(event));
      dropzone.addEventListener('drop', drop(event));

      function dragonstart(ev) {
        eventtarget = ev.target;
        x = ev.offsetX;
        y = ev.offsetY;
        eventtarget.dataTransfer.setData('text', eventtarget.id);
        return;
      }

      function drag(ev) {
        eventtarget = ev.target;
        eventtarget.style.cursor = 'url(/assets/img/star.svg)';
        return;
      }

      function dragend(ev) {
        eventtarget = ev.target;
        return;
      }

      function dragonenter(ev) {
        ev.preventDefault();
        arrows.style.opacity = '0';
        return;
      }

      function dragonleave(ev) {
        arrows.style.opacity = '1';
        return;
      }

      function dragonover(ev) {
        ev.preventDefault();
        eventtarget = ev.target;
        eventtarget.classList.add('drop-ready');
        return;
      }

      function drop(ev) {
        ev.stopPropagation();
        eventtarget = ev.target;
        var data = ev.dataTransfer.getData('text');
        eventtarget.appendChild(document.getElementById(data));
        eventtarget.classList.remove('drop-ready');
        eventtarget.classList.add('dropped');
        checky = document.createElement('span');
        checky.classList.add('hs-animated-checkbox-container');
        checky.innerHTML = animatedCheckMark;
        eventtarget.appendChild(checky);
        eventtarget.classList.add('border-white');
        return false;
      }

      function resetSlideButton() {
        dropzone.classList.remove('dropped');
        dropzone.classList.remove('drop-ready');
        checky.remove();
        document.querySelector('.grid-left__inner').appendChild(slideButton);
        dropzone.classList.remove('border-white');
        arrows.style.opacity = '1';
      }

      return;
    }
  }]);
  return SlideButton;
}();

exports.default = SlideButton;
document.addEventListener('load', SlideButton.dragondrop());
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

// Vertical Timeline - by CodyHouse.co
var VerticalTimeline = /*#__PURE__*/function () {
  function VerticalTimeline(element) {
    (0, _classCallCheck2.default)(this, VerticalTimeline);
    this.element = element;
    this.blocks = this.element.getElementsByClassName('hs-timeline__block');
    this.images = this.element.getElementsByClassName('hs-timeline__img');
    this.contents = this.element.getElementsByClassName('hs-timeline__content');
    this.offset = 0.8; // this.hideBlocks();

    this.History(VerticalTimeline).hideBlocks();
  }

  (0, _createClass2.default)(VerticalTimeline, [{
    key: "History",
    value: function History(_VerticalTimeline) {
      this.prototype.hideBlocks = function () {
        // if (!document.documentElement.hasAttribute('classList')) {
        if (!'classList' in document.documentElement) {
          return; // no animation on older browsers
        } //hide timeline blocks which are outside the viewport


        var self = this;

        for (var i = 0; i < this.blocks.length; i++) {
          (function (i) {
            if (self.blocks[i].getBoundingClientRect().top > window.innerHeight * self.offset) {
              self.images[i].classList.add('hs-timeline__img--hidden');
              self.contents[i].classList.add('hs-timeline__content--hidden');
            }
          })(i);
        }
      };

      _VerticalTimeline.prototype.showBlocks = function () {
        // if (!document.documentElement.hasAttribute('classList')) {
        if (!'classList' in document.documentElement) {
          return;
        }

        var self = this;

        for (var i = 0; i < this.blocks.length; i++) {
          (function (i) {
            if (self.contents[i].classList.contains('hs-timeline__content--hidden') && self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset) {
              // add bounce-in animation
              self.images[i].classList.add('hs-timeline__img--bounce-in');
              self.contents[i].classList.add('hs-timeline__content--bounce-in');
              self.images[i].classList.remove('hs-timeline__img--hidden');
              self.contents[i].classList.remove('hs-timeline__content--hidden');
            }
          })(i);
        }
      }; // eslint-disable-next-line prefer-const


      var verticalTimelines = document.getElementsByClassName('js-hs-timeline');
      var verticalTimelinesArray = [];
      var scrolling = false;

      if (verticalTimelines.length > 0) {
        for (var i = 0; i < verticalTimelines.length; i++) {
          (function (i) {
            verticalTimelinesArray.push(new _VerticalTimeline(verticalTimelines[i]));
          })(i);
        } //show timeline blocks on scrolling


        window.addEventListener('scroll', function (event) {
          console.log(event.target);

          if (!scrolling) {
            scrolling = true;
            !window.requestAnimationFrame ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
          }
        });
      }

      function checkTimelineScroll() {
        verticalTimelinesArray.forEach(function (timeline) {
          timeline.showBlocks();
        });
        scrolling = false;
      }
    }
  }]);
  return VerticalTimeline;
}();

exports.default = VerticalTimeline;
"use strict";

/* eslint-disable no-unsafe-negation */
(function () {
  // Vertical Timeline - by CodyHouse.co
  function VerticalTimeline(element) {
    this.element = element;
    this.blocks = this.element.getElementsByClassName("hs-timeline__block");
    this.images = this.element.getElementsByClassName("hs-timeline__img");
    this.contents = this.element.getElementsByClassName("hs-timeline__content");
    this.offset = 0.8;
    this.hideBlocks();
  }

  VerticalTimeline.prototype.hideBlocks = function () {
    if (!"classList" in document.documentElement) {
      return; // no animation on older browsers
    } //hide timeline blocks which are outside the viewport


    var self = this;

    for (var i = 0; i < this.blocks.length; i++) {
      (function (i) {
        if (self.blocks[i].getBoundingClientRect().top > window.innerHeight * self.offset) {
          self.images[i].classList.add("hs-timeline__img--hidden");
          self.contents[i].classList.add("hs-timeline__content--hidden");
        }
      })(i);
    }
  };

  VerticalTimeline.prototype.showBlocks = function () {
    if (!"classList" in document.documentElement) {
      return;
    }

    var self = this;

    for (var i = 0; i < this.blocks.length; i++) {
      (function (i) {
        if (self.contents[i].classList.contains("hs-timeline__content--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset) {
          // add bounce-in animation
          self.images[i].classList.add("hs-timeline__img--bounce-in");
          self.contents[i].classList.add("hs-timeline__content--bounce-in");
          self.images[i].classList.remove("hs-timeline__img--hidden");
          self.contents[i].classList.remove("hs-timeline__content--hidden");
        }
      })(i);
    }
  };

  var verticalTimelines = document.getElementsByClassName("js-hs-timeline");
  var verticalTimelinesArray = [];
  var scrolling = false;

  if (verticalTimelines.length > 0) {
    for (var i = 0; i < verticalTimelines.length; i++) {
      (function (i) {
        verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
      })(i);
    } //show timeline blocks on scrolling


    window.addEventListener("scroll", function (event) {
      if (!scrolling) {
        scrolling = true;
        !window.requestAnimationFrame ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
      }
    });
  }

  function checkTimelineScroll() {
    verticalTimelinesArray.forEach(function (timeline) {
      timeline.showBlocks();
    });
    scrolling = false;
  }
})(); // if (!document.documentElement.hasAttribute('classList')) {
"use strict";

require("./hs-timeline");
"use strict";

var ShowMore = require('./show-more');

exports.ShowMore = ShowMore;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/* eslint-disable no-unused-vars */
var log = console.log;

var ShowMore = // return new Promise((resolve, reject) => {
//   try {
function ShowMore() {
  var _this = this;

  (0, _classCallCheck2.default)(this, ShowMore);
  var VERSION = '0.0.1';
  var NAME = 'ShowMore_FadeBar';
  log("Now using ".concat(NAME, " version ").concat(VERSION)); // prepare the style tage for some css luvin

  this.styleEl = document.createElement('style');
  this.headEl = document.head || document.getElementsByTagName('head')[0];
  this.options = settings();
  this.cssText = FadeBarCSS(this.options); // log(this.options);

  this.styleEl.setAttribute('id', 'fbCSS');
  this.styleEl.textContent = this.cssText; // this.headEl.append(this.styleEl);

  try {
    var theFaders = Array.prototype.slice.call(document.querySelectorAll('.j-showmore'));
    theFaders.forEach(function (node) {
      var theContainer = node;
      var theFadeBar = document.createElement('div');
      var theShowMoreButton = document.createElement('button'); // const zindex = 'auto';

      theFadeBar.classList.add('j-fader');
      theShowMoreButton.classList.add('j-fader_button');
      theShowMoreButton.innerText = _this.options.fbInitButtonText;
      theFadeBar.appendChild(theShowMoreButton);
      theContainer.before(theFadeBar);
      _this.openHeight = theContainer.offsetHeight;
      log(_this.openHeight);
      theShowMoreButton.addEventListener('click', function (ev) {
        ev.preventDefault();
        var evButon = ev.target;
        evButon.classList.toggle('is-visible');
        var thisFadeBar = evButon.parentElement;
        thisFadeBar.classList.toggle('is-visible');
        thisFadeBar.nextElementSibling.classList.toggle('is-visible');
        evButon.classList.contains('is-visible') ? evButon.innerText = _this.options.fbOpenButtonText : evButon.innerText = _this.options.fbInitButtonText;
      }, false);
      theShowMoreButton.addEventListener('mouseout', function (ev) {
        var evButton = ev.target;
        evButton.blur();
      });
    });
  } catch (err) {
    console.error(err);
  }

  function appendCSS(styles) {
    // return;  comment out below for no js css
    this.styleEl = document.createElement('style');
    this.headEl = document.head || document.getElementsByTagName('head')[0]; // const cssStyles = css

    this.styleEl.textContent = styles;
    this.headEl.appendChild(this.styleEl);
    this.styleEl.type = 'text/css';

    if (this.styleEl.styleSheet) {
      // This is required for IE8 and below.
      this.styleEl.styleSheet.this.cssText = styles;
    } else {
      this.styleEl.appendChild(document.createTextNode(styles));
    }

    return;
  }

  function defaults() {
    return {
      fbWidth: '100%',
      fbHeight: '50px',
      fbBoxHeight: '300px',
      fbBoxPaddingBottom: '60px',
      fbStartColor: 'rgba(0,0,0,0)',
      fbEndColor: 'rgba(0,0,0,0)',
      fbBottomBorder: '0px solid #f2f2f2',
      fbInitButtonText: 'Show More',
      fbOpenButtonText: 'Show Less',
      fbButtonPosition: 'center',
      fbButtonBackground: '#fff',
      fbButtonBackgroundHover: '#fff;',
      fbButtonBackgroundFocus: '#fff;',
      fbButtonTextColor: '#333',
      fbButtonTextColorHover: '#333',
      fbButtonLineHeight: '1',
      fbButtonTextColorFocus: '#333',
      fbButtonBorderColor: '#fff',
      fbButtonBorderColorFocus: '#dedede',
      fbButtonBorderRadius: '4px',
      fbButtonWidth: '100px',
      fbButtonHeight: '20px',
      fbClassList: 'u-text-center',
      fbBtnClassList: 'btn btn-primary mx-auto'
    };
  }

  function settings() {
    var ShowMoreSettings;
    var fbCon;

    if (typeof ShowMoreSettings === 'undefined') {
      fbCon = defaults();
    } else {
      fbCon = ShowMoreSettings;
    }

    var styles = {
      classBase: 'button-show-more',
      classActive: 'is-fully-opened',
      classFocused: 'is-focused',
      fadebarClassList: 'animate text-center',
      fadebarbButtonClassList: 'btn mx-auto'
    };
    var fbActionBtn = {
      // showMore: 'Show More',
      // showLess: 'Show Less',
      positionX: 'center',
      positionY: 'bottom'
    };

    try {
      var mergedOptions = Object.assign(defaults(), styles, fbActionBtn, fbCon);
      log('mergedOptions');
      log(mergedOptions); // cssBuilder(this.options);

      return mergedOptions;
    } catch (e) {
      log('object assign error: ' + e);
    }
  } // document.addEventListener('DOMContentLoaded', FadeBarCSS = () => {


  function FadeBarCSS(options) {
    var cssValues = options;
    var fbCSS = "\n          .j-showmore {\n            position: absolute;\n            left: -9999px;\n            min-height: ".concat(cssValues.fbBoxHeight, ";\n            max-height: 400px;\n            overflow: hidden;\n            padding-bottom: ").concat(cssValues.fbBoxPaddingBottom, ";\n            -webkit-transition: max-height .25s ease-in-out;\n               -moz-transition: max-height .25s ease-in-out;\n                 -o-transition: max-height .25s ease-in-out;\n                    transition: max-height .25s ease-in-out;\n\n            /* -webkit-transition-timing-function: ease-in-out;\n              -moz-transition-timing-function: ease-in-out;\n                -o-transition-timing-function: ease-in-out;\n                    transition-timing-function: ease-in-out; */\n          }\n          .j-showmore.is-visible {\n            left: 0px;\n            max-height: 400px;\n            -webkit-transition: max-height .25s ease-in-out;\n               -moz-transition: max-height .25s ease-in-out;\n                 -o-transition: max-height .25s ease-in-out;\n                    transition: max-height .25s ease-in-out;\n\n        /* -webkit-transition-timing-function: ease-in-out;\n              -moz-transition-timing-function: ease-in-out;\n                -o-transition-timing-function: ease-in-out;\n                    transition-timing-function: ease-in-out; */\n          }\n          .j-fader {\n            position: absolute;\n            z-index: 100;\n            width: ").concat(cssValues.fbWidth, ";\n            height: ").concat(cssValues.fbHeight, ";\n            text-align: center;\n            vertical-align: bottom;\n            cursor: pointer;\n            border-bottom: ").concat(cssValues.fbBottomBorder, ";\n            background: -moz-linear-gradient(top, ").concat(cssValues.fbStartColor, ", ").concat(cssValues.fbEndColor, " 60%);\n            background: -webkit-linear-gradient(top, ").concat(cssValues.fbStartColor, ", ").concat(cssValues.fbEndColor, " 60%);\n            background: linear-gradient(to bottom, ").concat(cssValues.fbStartColor, ", ").concat(cssValues.fbEndColor, " 60%);\n            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='").concat(cssValues.fbStartColor, "', endColorstr='").concat(cssValues.fbEndColor, "',GradientType=0 );\n            /* box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.45); */\n          }\n          .hs-code .j-fader {\n            border-bottom: 5px solid #f2f2f2;\n            background: -moz-linear-gradient(top, rgba(255, 255, 255, 0.6), #ffffff 60%);\n            background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.6), #ffffff 60%);\n            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), #ffffff 60%);\n            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );\n          }\n          .j-fader > .j-fader_button {\n            position: absolute;\n            bottom: -6px;\n            left: 50%;\n            display: inline-block;\n            width:  ").concat(cssValues.fbButtonWidth, ";\n            height: ").concat(cssValues.fbButtonHeight, ";\n            padding: 4px 6px;\n            margin: 0 auto;\n            font-size: 0.8rem;\n            line-height: ").concat(cssValues.fbButtonLineHeight, ";\n            color: ").concat(cssValues.fbButtonTextColor, ";\n            white-space: nowrap;\n            cursor: pointer;\n            background-color: ").concat(cssValues.fbButtonBackground, ";\n            border: 1px solid ").concat(cssValues.fbButtonBorderColor, ";\n            border-bottom: 0 solid ").concat(cssValues.fbButtonBorderColor, ";\n            border-radius: ").concat(cssValues.fbButtonBorderRadius, ";\n            box-shadow: 0 -2px 4px 0 $hs-black--a45;\n            transform: translateX(-50%);\n          }\n          .j-fader > .j-fader_button::before {\n            display: block;\n            position: absolute;\n            left: 50%;\n            top: 5%;\n            z-index: 100;\n            transform: translate(-50%);\n            width: 100%;\n            content: '").concat(cssValues.fbInitButtonText, "';\n            font-size: 0.75rem;\n          }\n          .j-fader > .j-fader_button.is-visible::before {\n            content: '").concat(cssValues.fbOpenButtonText, "';\n          }\n          .j-fader > .j-fader_button:hover {\n            background-color: ").concat(cssValues.fbButtonBackgroundHover, ";\n            color: ").concat(cssValues.fbButtonTextColorHover, ";\n          }\n          .j-fader > .j-fader_button:focus {\n            outline-color: ").concat(cssValues.fbButtonBorderColorFocus, ";\n            background-color: ").concat(cssValues.fbButtonBorderColorFocus, ";\n            color: ").concat(cssValues.fbButtonTextColorFocus, ";\n            border: 1px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n            border-bottom: 5px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n            box-shadow: unset;\n          }\n          .j-fader > .j-fader_button.is-visible {\n            background-color: ").concat(cssValues.fbButtonBorderColorFocus, ";\n            color: ").concat(cssValues.fbButtonTextColorFocus, ";\n            border: 1px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n            border-bottom: 5px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n          }\n          .j-fader > .j-fader.is-visible {\n            border-bottom: 5px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n          }\n          @keyframes slideOpen {\n            from { height: 300px; }\n            to { height: 100%; }\n          }\n          @keyframes slideClosed {\n            from { height: 100%; }\n            to { height: 300px; }\n          }\n        ");
    return appendCSS(fbCSS); // return fbCSS;
  } // resolve(true);
  //   }
  //   catch(evt) {
  //     log(`ERROR: ${evt}`);
  //     reject(false);
  //   }
  // });

}; // export default ShowMore;


exports.default = ShowMore;
new ShowMore();
"use strict";

require("./theme-switcher");

require("@babel/register")({
  presets: ["@babel/preset-env"],
  "plugins": [["import", {
    "libraryName": "@material-ui/core"
  }], "@babel/plugin-syntax-dynamic-import"]
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeSwitcher = void 0;

/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ThemeSwitcher() {
  // ** ====== MODE WIDHET ====== ** //
  // (() => {
  var $dm_btn = document.querySelector('#mode_widget');
  var lsGetMode = localStorage.getItem('dark_mode'); // set button text

  if (lsGetMode === 'fasle') {
    setModeText(true); //$dm_btn.html('<span class="which-mode">Dark Mode<span id="mode_icon" class="fa fa-moon-o mode-icon"></span></span>')
  } else {
    setModeText(false); // $dm_btn.html('<span class="which-mode">Light Mode<span id="mode_icon" class="fa fa-sun-o mode-icon"></span></span>')
  }

  function setModeText(mode) {
    var darkHTML = '<span class="which-mode"> Dark Mode<i id="mode_icon" class="fa fa-moon mode-icon"></i></span>';
    var lightHTML = '<span class="which-mode"> Light Mode<i id="mode_icon" class="fa fa-sun mode-icon"></i></span>';
    var modeHTML;
    mode === 'true' ? modeHTML = darkHTML : modeHTML = lightHTML;
    $dm_btn.innerHTML = modeHTML;
  }

  function setMode(mode) {
    localStorage.setItem('dark_mode', "".concat(mode));
    document.querySelector('#darkmode').disabled = mode;

    if (mode === 'true') {
      document.querySelector('#darkmode').disabled = false;
      $dm_btn.innerHTML = '<span class="which-mode"> Dark Mode<i id="mode_icon" class="fa fa-moon mode-icon"></i></span>'; // document.querySelector('link[href="css/theme-dark-mode.css"]').disabled = false;
      // document.querySelector('link[href="css/theme-dark-mode.css"]').disabled = false;
    } else {
      $dm_btn.innerHTML = '<span class="which-mode"> Light Mode<i id="mode_icon" class="fa fa-sun mode-icon"></i></span>';
    }

    return setModeText(mode);
  } // Theme switcher


  $dm_btn.addEventListener('click', function (event) {
    event.preventDefault();

    if (localStorage.getItem('dark_mode') === 'true') {
      setMode('false'), console.log('set to false');
    } else {
      setMode('true'), console.log('set to true');
    }

    return;
  }); // });
  // eslint-disable-next-line no-undef
}

var _ThemeSwitcher = ThemeSwitcher;
exports.ThemeSwitcher = _ThemeSwitcher;
ThemeSwitcher();
"use strict";

module.exports = require('./time-stamper.js');
"use strict";

module.exports = require('./time-stamper.js');
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/**
* @fileOverview
* @author Heath Shults
* @version 1.0.0
*/

/**
* @description
* Just JavaScript - Timestamp
*
* @class  TimeStamper
* @param {(date|Object)} dt = new Date - object to hold the date and time
* @param {string} [format] - specify the format: datetime, date, time and justyear
* @param {string} [DD] - Returns the day formatted like '19'.
* @param {string} [MM] - Returns the month farmatted like '01.
* @param {string} [YYYY] - Returns the year farmatted like '2020.
* @param {string} [datetime] - Returns all constiables concatenated like 01-29-2020 13:05:22.
* @param {string} [datetimereverse] - Returns all constiables concatenated like 2020-01-29 13:05:22.
* @param {string} [date] - Returns all constiables associated with the date like 01-29-2020.
* @param {string} [time] - Returns time constiables like 13:05:22.
* @param {string} [mm] - Returns minutes formatted like 01-29-2020 13:05:22.
* @param {string} [ss] - Returns the seconds formatted like 01-29-2020 13:05:22.
*/

/**
 * @usage
 * 
 * <script>
 *  let htmlelement = document.getElementById('dd')
 *  htmlelement.innerHTML = JSON.stringify(TimeStamper('datetime'));  
 * </script>
 * 
 * @note:  tons of room for improvement...
 */
// function TimeStamper() {
// timerequest();
var TimeStamper = function TimeStamper(format) {
  (0, _classCallCheck2.default)(this, TimeStamper);
  this.dt = new Date();
  this.format = format;
  this.final; // ensure date comes as 01, 09 etc

  var DD = ('0' + this.dt.getDate()).slice(-2),
      // getMonth returns month from 0
  MM = ('0' + (this.dt.getMonth() + 1)).slice(-2),
      YYYY = this.dt.getFullYear(),
      hh = ('0' + this.dt.getHours()).slice(-2),
      mm = ('0' + this.dt.getMinutes()).slice(-2),
      ss = ('0' + this.dt.getSeconds()).slice(-2),
      datetime = MM + '-' + DD + '-' + YYYY + ' ' + hh + ':' + mm + ':' + ss,
      datetimereverse = YYYY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + ':' + ss,
      justdate = MM + '-' + DD + '-' + YYYY,
      justtime = hh + ':' + mm + ':' + ss,
      justyear = YYYY;

  if (format === 'datetime') {
    this.final = datetime;
  } else if (format === 'datetimereverse') {
    this.final = datetimereverse;
  } else if (format === 'justdate') {
    this.final = justdate;
  } else if (format === 'justtime') {
    this.final = justtime;
  } else if (format === 'justyear') {
    this.final = justyear;
  } else if (format === '' || (0, _typeof2.default)('undefined')) {
    this.final = datetime;
  } else {
    this.final = TimeStamper.datetime;
  }

  return this.final;
}; // const _TimeStamper=TimeStamper;
// export {_TimeStamper as TimeStamper};


var d = new TimeStamper('datetime'); // eslint-disable-next-line no-console

console.log(d.final);
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/**
* @fileOverview
* @author Heath Shults
* @version 1.0.0
*/

/**
* @description
* Just JavaScript - Timestamp
*
* @class  TimeStamper
* @param {(date|Object)} dt = new Date - object to hold the date and time
* @param {string} [format] - specify the format: datetime, date, time and justyear
* @param {string} [DD] - Returns the day formatted like '19'.
* @param {string} [MM] - Returns the month farmatted like '01.
* @param {string} [YYYY] - Returns the year farmatted like '2020.
* @param {string} [datetime] - Returns all constiables concatenated like 01-29-2020 13:05:22.
* @param {string} [datetimereverse] - Returns all constiables concatenated like 2020-01-29 13:05:22.
* @param {string} [date] - Returns all constiables associated with the date like 01-29-2020.
* @param {string} [time] - Returns time constiables like 13:05:22.
* @param {string} [mm] - Returns minutes formatted like 01-29-2020 13:05:22.
* @param {string} [ss] - Returns the seconds formatted like 01-29-2020 13:05:22.
*/

/**
 * @usage
 * 
 * <script>
 *  let htmlelement = document.getElementById('dd')
 *  htmlelement.innerHTML = JSON.stringify(TimeStamper('datetime'));  
 * </script>
 * 
 * @note:  tons of room for improvement...
 */
// function TimeStamper() {
// timerequest();
var TimeStamper = function TimeStamper(format) {
  (0, _classCallCheck2.default)(this, TimeStamper);
  this.dt = new Date();
  this.format = format;
  this.final; // ensure date comes as 01, 09 etc

  var DD = ('0' + this.dt.getDate()).slice(-2),
      // getMonth returns month from 0
  MM = ('0' + (this.dt.getMonth() + 1)).slice(-2),
      YYYY = this.dt.getFullYear(),
      hh = ('0' + this.dt.getHours()).slice(-2),
      mm = ('0' + this.dt.getMinutes()).slice(-2),
      ss = ('0' + this.dt.getSeconds()).slice(-2),
      datetime = MM + '-' + DD + '-' + YYYY + ' ' + hh + ':' + mm + ':' + ss,
      datetimereverse = YYYY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + ':' + ss,
      justdate = MM + '-' + DD + '-' + YYYY,
      justtime = hh + ':' + mm + ':' + ss,
      justyear = YYYY;

  if (format === 'datetime') {
    this.final = datetime;
  } else if (format === 'datetimereverse') {
    this.final = datetimereverse;
  } else if (format === 'justdate') {
    this.final = justdate;
  } else if (format === 'justtime') {
    this.final = justtime;
  } else if (format === 'justyear') {
    this.final = justyear;
  } else if (format === '' || (0, _typeof2.default)('undefined')) {
    this.final = datetime;
  } else {
    this.final = TimeStamper.datetime;
  }

  return this.final;
}; // const _TimeStamper=TimeStamper;
// export {_TimeStamper as TimeStamper};


var d = new TimeStamper('datetime'); // eslint-disable-next-line no-console

console.log(d.final);
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/**
* @fileOverview
* @author Heath Shults
* @version 1.0.0
*/

/**
* @description
* Just JavaScript - Timestamp
*
* @class  TimeStamper
* @param {(date|Object)} dt = new Date - object to hold the date and time
* @param {string} [format] - specify the format: datetime, date, time and justyear
* @param {string} [DD] - Returns the day formatted like '19'.
* @param {string} [MM] - Returns the month farmatted like '01.
* @param {string} [YYYY] - Returns the year farmatted like '2020.
* @param {string} [datetime] - Returns all constiables concatenated like 01-29-2020 13:05:22.
* @param {string} [datetimereverse] - Returns all constiables concatenated like 2020-01-29 13:05:22.
* @param {string} [date] - Returns all constiables associated with the date like 01-29-2020.
* @param {string} [time] - Returns time constiables like 13:05:22.
* @param {string} [mm] - Returns minutes formatted like 01-29-2020 13:05:22.
* @param {string} [ss] - Returns the seconds formatted like 01-29-2020 13:05:22.
*/

/**
 * @usage
 * 
 * <script>
 *  let htmlelement = document.getElementById('dd')
 *  htmlelement.innerHTML = JSON.stringify(TimeStamper('datetime'));  
 * </script>
 * 
 * @note:  tons of room for improvement...
 */
// function TimeStamper() {
// timerequest();
var TimeStamper = function TimeStamper(format) {
  (0, _classCallCheck2.default)(this, TimeStamper);
  this.dt = new Date();
  this.format = format;
  this.final; // ensure date comes as 01, 09 etc

  var DD = ('0' + this.dt.getDate()).slice(-2),
      // getMonth returns month from 0
  MM = ('0' + (this.dt.getMonth() + 1)).slice(-2),
      YYYY = this.dt.getFullYear(),
      hh = ('0' + this.dt.getHours()).slice(-2),
      mm = ('0' + this.dt.getMinutes()).slice(-2),
      ss = ('0' + this.dt.getSeconds()).slice(-2),
      datetime = MM + '-' + DD + '-' + YYYY + ' ' + hh + ':' + mm + ':' + ss,
      datetimereverse = YYYY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + ':' + ss,
      justdate = MM + '-' + DD + '-' + YYYY,
      justtime = hh + ':' + mm + ':' + ss,
      justyear = YYYY;

  if (format === 'datetime') {
    this.final = datetime;
  } else if (format === 'datetimereverse') {
    this.final = datetimereverse;
  } else if (format === 'justdate') {
    this.final = justdate;
  } else if (format === 'justtime') {
    this.final = justtime;
  } else if (format === 'justyear') {
    this.final = justyear;
  } else if (format === '' || (0, _typeof2.default)('undefined')) {
    this.final = datetime;
  } else {
    this.final = TimeStamper.datetime;
  }

  return this.final;
}; // const _TimeStamper=TimeStamper;
// export {_TimeStamper as TimeStamper};


var d = new TimeStamper('datetime'); // eslint-disable-next-line no-console

console.log(d.final);
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/**
* @fileOverview
* @author Heath Shults
* @version 1.0.0
*/

/**
* @description
* Just JavaScript - Timestamp
*
* @class  TimeStamper
* @param {(date|Object)} dt = new Date - object to hold the date and time
* @param {string} [format] - specify the format: datetime, date, time and justyear
* @param {string} [DD] - Returns the day formatted like '19'.
* @param {string} [MM] - Returns the month farmatted like '01.
* @param {string} [YYYY] - Returns the year farmatted like '2020.
* @param {string} [datetime] - Returns all constiables concatenated like 01-29-2020 13:05:22.
* @param {string} [datetimereverse] - Returns all constiables concatenated like 2020-01-29 13:05:22.
* @param {string} [date] - Returns all constiables associated with the date like 01-29-2020.
* @param {string} [time] - Returns time constiables like 13:05:22.
* @param {string} [mm] - Returns minutes formatted like 01-29-2020 13:05:22.
* @param {string} [ss] - Returns the seconds formatted like 01-29-2020 13:05:22.
*/

/**
 * @usage
 * 
 * <script>
 *  let htmlelement = document.getElementById('dd')
 *  htmlelement.innerHTML = JSON.stringify(TimeStamper('datetime'));  
 * </script>
 * 
 * @note:  tons of room for improvement...
 */
// function TimeStamper() {
// timerequest();
var TimeStamper = function TimeStamper(format) {
  (0, _classCallCheck2.default)(this, TimeStamper);
  this.dt = new Date();
  this.format = format;
  this.final; // ensure date comes as 01, 09 etc

  var DD = ('0' + this.dt.getDate()).slice(-2),
      // getMonth returns month from 0
  MM = ('0' + (this.dt.getMonth() + 1)).slice(-2),
      YYYY = this.dt.getFullYear(),
      hh = ('0' + this.dt.getHours()).slice(-2),
      mm = ('0' + this.dt.getMinutes()).slice(-2),
      ss = ('0' + this.dt.getSeconds()).slice(-2),
      datetime = MM + '-' + DD + '-' + YYYY + ' ' + hh + ':' + mm + ':' + ss,
      datetimereverse = YYYY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + ':' + ss,
      justdate = MM + '-' + DD + '-' + YYYY,
      justtime = hh + ':' + mm + ':' + ss,
      justyear = YYYY;

  if (format === 'datetime') {
    this.final = datetime;
  } else if (format === 'datetimereverse') {
    this.final = datetimereverse;
  } else if (format === 'justdate') {
    this.final = justdate;
  } else if (format === 'justtime') {
    this.final = justtime;
  } else if (format === 'justyear') {
    this.final = justyear;
  } else if (format === '' || (0, _typeof2.default)('undefined')) {
    this.final = datetime;
  } else {
    this.final = TimeStamper.datetime;
  }

  return this.final;
}; // const _TimeStamper=TimeStamper;
// export {_TimeStamper as TimeStamper};


var d = new TimeStamper('datetime'); // eslint-disable-next-line no-console

console.log(d.final);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "validurl", {
  enumerable: true,
  get: function get() {
    return _validateUrl.ValidURL;
  }
});

var _validateUrl = require("./validate-url");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidURL = ValidURL;

/* eslint-disable no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * @function valieURL - Checks if a string is a url.
 *
 * @param {unknown} url - A string.
 * @const pattern - A RegExp that tests the string for url pattern.
 * @return {true/false}
 *
 * @example
 *
 * validURL('http://hello.com');
 *
 */
function ValidURL(url) {
  var pattern = new RegExp( // protocol
  '^(https?:\\/\\/)?' + // domain name
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // OR ip (v4) address
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // port and path
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // query string
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // fragment locator 
  '(\\#[-a-z\\d_]*)?$', 'i');
  return !!pattern.test(url.toString());
}
