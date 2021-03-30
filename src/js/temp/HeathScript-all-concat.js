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

exports.__esModule = true;

var EvenHeight =
/** @class */
function () {
  function EvenHeight(_a) {
    var ehSelector = _a.ehSelector,
        ehChildSelector = _a.ehChildSelector,
        evenRows = _a.evenRows,
        evenRowChildren = _a.evenRowChildren;
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
          child.setAttribute('style', "height: " + height + "px");
        });
      });
    }, 2000);
  }

  return EvenHeight;
}();

exports["default"] = EvenHeight; // const _EvenHeight = EvenHeight;
// export { _EvenHeight as EvenHeight };

new EvenHeight({
  ehSelector: '.even-height',
  ehChildSelector: 'col-md-3'
});
"use strict";

exports.__esModule = true;
exports.EvenHeight = void 0;

var even_height_1 = require("./even-height");

var __EvenHeight = even_height_1["default"];
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

var ShowMore = require('./show-more');

exports.ShowMore = ShowMore;
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

exports.__esModule = true;
exports.validurl = void 0;

var validate_url_1 = require("./validate-url");

exports.validurl = validate_url_1.ValidURL;
"use strict";
/* eslint-disable no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

exports.__esModule = true;
exports.ValidURL = void 0;
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

exports.ValidURL = ValidURL;
