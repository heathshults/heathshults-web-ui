"use strict";

var _this = void 0;

/* eslint-disable no-console, no-unused-vars, @typescript-eslint/no-unused-vars, no-undef, no-unused-vars */
// import moment from 'moment';
// console.log(moment('LLL'));
// let dateTimeNow = moment('LLL')

/**
 * @author HeathShults.com - Heath Shults v1.0 (http://heathshults.com)
 * @version 1.0.0
 * @copyright 2020-2020 Heath-Shults
 * @license MIT (https://github.com/heathshults/heathshults.com/LICENSE)
 */
(function () {
  /** 
   * This function sets the greeting message. It uses localStorage  
   * to remember if this is a first time visit or a repeat visit.
   * @function anonymous
   * @event    window.onload           Load the greeting before it is visible.
   * @const    siteStorage             Using local storage to track visits.
   * @const    visited                 Has the visitor been here before.
   * @var      sessionStart            DateTime of visit.
   * @var      sessionEnd              DateTime now or exit.
   * @const    greetingSpan            Where we will place the customized greeting.
   * @var      greetingHTML            The text to be set in greetingSpan.
   * @function setGGreetingText        Sets the text in greetingSpan.
   * 
   */
  window.onload = function setGreetingText(ts) {
    var siteStorage = window.localStorage;
    var siteSession = window.sessionStorage;
    var visited = siteStorage.getItem('visited');
    var greetingSpan = document.querySelector('#greetingLine');
    var sessionStart = new Date().getTime();
    var sessionEnd = new Date().getTime();
    var elapsed;
    var greetingHTML;

    function elapsedTime() {
      return elapsed = sessionEnd - siteSession.getItem('sessionStart');
    }

    siteSession.setItem('sessionStart', sessionStart);

    if (!visited || visited === '' || typeof visited === 'undefined') {
      siteStorage.setItem('visited', 1);
    } else if (visited === '1') {
      if (Math.floor(elapsedTime() > 30)) {
        greetingSpan.innerHTML = "<p class=\"hs-intro-heading\">Welcome Back!</p>";
      } else {
        greetingSpan.innerHTML = "\n        <p class=\"hs-intro-lead-in\">\n        Hello, I'm Heath.\n        </p>\n        <p class=\"hs-intro-subheading\">\n        Must be your first time here?\n        <!-- It's Nice To Meet You -->\n        </p>\n        <p class=\"hs-intro-heading\">Welcome!</p>";
      }
    }

    return;
  }; // ====== RANKING BARS


  var theBars = document.querySelectorAll('.hs-ranking-bar');
  theBars.forEach(function (aBar) {
    // eslint-disable-next-line no-undef
    var barWidth = document.querySelector(aBar).getAttribute('aria-valuenow');
    document.querySelector(aBar).setAttribute('style', "width: ".concat(barWidth, "%")); // var barWidth=$(aBar).attr('aria-valuenow');
    // $(aBar).attr('style',`width: ${barWidth}%`);
  });
})(); // End of use strict

/* eslint-disable no-undef, no-unused-vars */


(function () {
  // *======* CONTACT FORM *======* //
  window.onload = function () {
    var qs = document.querySelector;
    var qsa = document.querySelectorAll;
    var contactForm = qs('#contactForm');
    var contactFormFields = contactForm.qsa('.form-control');
    var contactFormFieldsValues = []; // console.log(contactForm),console.log(contactFormFields);
    // for(let i=0; i<contactFormFields.length;i++) {

    Array.prototype.slice.call(contactFormFields).forEach(function (field, index) {
      var name = field.name;
      var value = field.value;
      contactFormFieldsValues[index] = {
        name: value
      };
      field.addEventListener(('onfocus', 'click'), function (event) {
        if (event.target.value && event.target.parentElement.classList.contains('antiblur')) {
          return;
        } else {
          event.target.parentElement.classList.add('antiblur'); // autofill makes me include this inline hack
          // event.target.style = 'background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;'
          // event.target.setAttribute(':focus', )
        }

        if (!event.target.value && !event.target.parentElement.classList.contains('antiblur')) {
          event.target.parentElement.classList.add('antiblur');
        }
      });
      field.addEventListener('change', function (event) {
        alert("change!");
      }); // end blur event
    }); //end foreach
    // auto fill battle

    var AUTOFILLED = 'is-autofilled';

    var onAutoFillStart = function onAutoFillStart(el) {
      return el.classList.add(AUTOFILLED);
    };

    var onAutoFillCancel = function onAutoFillCancel(el) {
      return el.classList.remove(AUTOFILLED);
    };

    var onAnimationStart = function onAnimationStart(_ref) {
      var target = _ref.target,
          animationName = _ref.animationName;

      switch (animationName) {
        case 'onAutoFillStart':
          el.target.style = 'background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;';
          return onAutoFillStart(target);

        case 'onAutoFillCancel':
          return onAutoFillCancel(target);
      }
    };

    qs('#contactForm input,#contactForm textarea').addEventListener('change', function (event) {
      console.log('Got a CHANGE');
      event.forEach(function (formField) {// console.log(`new value qs{formField.name}: qs{formField.value}`);
      }); // console.log(`new value qs{event.target.name}: qs{event.target.value}`);
    });
  };

  var $form = qs('#contactForm');
  qs('#contactForm input,#contactForm textarea').jqBootstrapValidation({
    preventSubmit: true,
    submitError: function submitError($form, event, errors) {// additional error messages or events
    },
    submitSuccess: function submitSuccess($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM

      var name = qs('input#name').val();
      var email = qs('input#email').val();
      var phone = qs('input#phone').val();
      var message = qs('textarea#message').val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message

      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }

      $.ajax({
        url: '/mail/contact_me.php',
        type: 'POST',
        data: {
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function success() {
          // Success message
          qs('#success').innerHTML = '<div class="alert alert-success">';
          qs("#success > .alert-success").innerHTML += '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><p><strong>Your message has been sent. </strong></p></div>'; //clear all fields

          qs('#contactForm').trigger('reset');
        },
        error: function error() {
          // Fail message
          qs('#success').innerHTML = '<div class="alert alert-danger">';
          qs('#success > .alert-danger').innerHTML = "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button><p><strong>Sorry ".concat(firstName, ", it seems that my mail server is not responding. Please try again later!</p></div>"); //clear all fields

          qs('#contactForm').reset();
        }
      });
    },
    filter: function filter() {
      return this.is(':visible');
    }
  });
  qs('a[data-toggle="tab"]').addEventListener('click', function (e) {
    e.preventDefault();

    _this.tab('show');
  });
  var clearMsgBox = '#name';
  /*When clicking on Full hide fail/success boxes */

  qs(clearMsgBox).addEventListener('focus', function () {
    qs('#success').innerHTML = '';
  });
})(); // End of use strict
// ** ====== MODE WIDHET ====== ** //
//#region 
// /*
// (function themeSwitcher() {
//   var dm_btn=$('#mode_widget');
//   var lsGetMode=localStorage.getItem('dark_mode');
//   // set button text
//   if (lsGetMode==='fasle') {
//     setModeText(true);
//     //dm_btn.html('<span class="which-mode">Dark Mode<span id="mode_icon" class="fa fa-moon-o mode-icon"></span></span>')
//   } else {
//     setModeText(false);
//     // dm_btn.html('<span class="which-mode">Light Mode<span id="mode_icon" class="fa fa-sun-o mode-icon"></span></span>')
//   }
// function setModeText(mode) {
//   if (mode==='true') {
//     dm_btn.html('<span class="which-mode"> Dark Mode<i id="mode_icon" class="fa fa-moon mode-icon"></i></span>');
//   } else {
//     dm_btn.html('<span class="which-mode"> Light Mode<i id="mode_icon" class="fa fa-sun mode-icon"></i></span>');
//   }
// }
// function setMode(mode) {
//   localStorage.setItem('dark_mode',`${mode}`);
//   document.querySelector('#darkmode').disabled=mode;
//   if (mode==='true') {
//     document.querySelector('#darkmode').disabled=false;
//     dm_btn.html('<span class="which-mode"> Dark Mode<i id="mode_icon" class="fa fa-moon mode-icon"></i></span>');
//     // document.querySelector('link[href="css/theme-dark-mode.css"]').disabled = false;
//   } else {
//     dm_btn.html('<span class="which-mode"> Light Mode<i id="mode_icon" class="fa fa-sun mode-icon"></i></span>');
//   }
//   return setModeText(mode);
// }
//   // Theme switcher
//   dm_btn.click((event) => {
//     event.preventDefault();
//     if (localStorage.getItem('dark_mode')==='true') {
//       setMode('false'),console.log('set to false');
//     } else {
//       setMode('true'),console.log('set to true');
//     }
//     return;
//   });
// });
// themeSwitcher();
// */
//#endregion
// *======* CONTACT FORM *======* //


window.onload = function () {
  var contactForm = document.querySelector('#contactForm');
  var contactFormFields = contactForm.querySelectorAll('.form-control');
  console.log(contactForm), console.log(contactFormFields);
  contactFormFields.forEach(function (field) {
    field.addEventListener(('onfocus', 'click'), function (event) {
      if (event.target.value && event.target.parentElement.classList.contains('antiblur')) {
        return;
      } else {
        event.target.parentElement.classList.add('antiblur'); // autofill makes me include this inline hack
        // event.target.style = 'background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;'
        // event.target.setAttribute(':focus', )
      }

      if (!event.target.value && !event.target.parentElement.classList.contains('antiblur')) {
        event.target.parentElement.classList.add('antiblur');
      }
    }); // end blur event
  }); //end foreach
  // auto fill battle

  var AUTOFILLED = 'is-autofilled';

  var onAutoFillStart = function onAutoFillStart(el) {
    return el.classList.add(AUTOFILLED);
  };

  var onAutoFillCancel = function onAutoFillCancel(el) {
    return el.classList.remove(AUTOFILLED);
  };

  var onAnimationStart = function onAnimationStart(_ref2) {
    var target = _ref2.target,
        animationName = _ref2.animationName;

    switch (animationName) {
      case 'onAutoFillStart':
        el.target.style = 'background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;';
        return onAutoFillStart(target);

      case 'onAutoFillCancel':
        return onAutoFillCancel(target);
    }
  };
};
"use strict";

/**
 * Autofill event polyfill ##version:1.0.0##
 * (c) 2014 Google, Inc.
 * License: MIT
 */
(function (window) {
  var $ = window.jQuery || window.angular.element;
  var rootElement = window.document.documentElement,
      $rootElement = $(rootElement);
  addGlobalEventListener('change', markValue);
  addValueChangeByJsListener(markValue);
  $.prototype.checkAndTriggerAutoFillEvent = jqCheckAndTriggerAutoFillEvent; // Need to use blur and not change event
  // as Chrome does not fire change events in all cases an input is changed
  // (e.g. when starting to type and then finish the input by auto filling a username)

  addGlobalEventListener('blur', function (target) {
    // setTimeout needed for Chrome as it fills other
    // form fields a little later...
    window.setTimeout(function () {
      findParentForm(target).find('input').checkAndTriggerAutoFillEvent();
    }, 20);
  });
  window.document.addEventListener('DOMContentLoaded', function () {
    // The timeout is needed for Chrome as it auto fills
    // login forms some time after DOMContentLoaded!
    window.setTimeout(function () {
      $rootElement.find('input').checkAndTriggerAutoFillEvent();
    }, 200);
  }, false);
  return; // ----------

  function jqCheckAndTriggerAutoFillEvent() {
    var i, el;

    for (i = 0; i < this.length; i++) {
      el = this[i];

      if (!valueMarked(el)) {
        markValue(el);
        triggerChangeEvent(el);
      }
    }
  }

  function valueMarked(el) {
    var val = el.value,
        $$currentValue = el.$$currentValue;

    if (!val && !$$currentValue) {
      return true;
    }

    return val === $$currentValue;
  }

  function markValue(el) {
    el.$$currentValue = el.value;
  }

  function addValueChangeByJsListener(listener) {
    var jq = window.jQuery || window.angular.element,
        jqProto = jq.prototype;
    var _val = jqProto.val;

    jqProto.val = function (newValue) {
      var res = _val.apply(this, arguments);

      if (arguments.length > 0) {
        forEach(this, function (el) {
          listener(el, newValue);
        });
      }

      return res;
    };
  }

  function addGlobalEventListener(eventName, listener) {
    // Use a capturing event listener so that
    // we also get the event when it's stopped!
    // Also, the blur event does not bubble.
    rootElement.addEventListener(eventName, onEvent, true);

    function onEvent(event) {
      var target = event.target;
      listener(target);
    }
  }

  function findParentForm(el) {
    while (el) {
      if (el.nodeName === 'FORM') {
        return $(el);
      }

      el = el.parentNode;
    }

    return $();
  }

  function forEach(arr, listener) {
    if (arr.forEach) {
      return arr.forEach(listener);
    }

    var i;

    for (i = 0; i < arr.length; i++) {
      listener(arr[i]);
    }
  }

  function triggerChangeEvent(element) {
    var doc = window.document;
    var event = doc.createEvent("HTMLEvents");
    event.initEvent("change", true, true);
    element.dispatchEvent(event);
  }
})(window);
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

exports.__esModule = true;
/* eslint-disable prefer-const */

var chalk = require("chalk");

var l = console.log;

var HS3DRotate =
/** @class */
function () {
  function HS3DRotate(dataMethod1, dataURL1, dataHeaders1) {
    var _this = this;

    this.orientationFlag = false;
    this.rotateEventsFlag = false;
    this.init3dRotator = new this.Get3dRotatorData();
    this.rotatorContainer = document.querySelector('.hs-3drotate__container');
    this.rotatorContainer.classList.add('hs-vanish');
    this.hs3dRotate = document.querySelector('.hs-3drotate');
    this.cells = this.hs3dRotate.querySelectorAll('.hs-3drotate__cell');
    this.prevButton = document.querySelector('.hs-3drotate__prev-button');
    this.nextButton = document.querySelector('.hs-3drotate__next-button');
    this.cellsRange = document.querySelector('.hs-3drotate__cells-range');
    this.orientationRadios = document.querySelectorAll('input[name="orientation"]');
    this.checkedRadio = document.querySelector('input[name="orientation"]:checked');
    this.selectedIndex = 0;
    this.dataURL = this.rotatorContainer.getAttribute('data-dataurl');

    if (!dataMethod1) {
      this.dataMethod = this.rotatorContainer.getAttribute('data-datamethod');
    } else {
      this.dataMethod = dataMethod1;
    }

    if (!dataHeaders1) {
      this.dataHeaders = this.rotatorContainer.getAttribute('data-dataheaders');
    } else {
      this.dataHeaders = dataHeaders1;
    }

    if (!dataURL1) {
      dataURL1 = this.dataURL;
    } else {
      this.dataURL = dataURL1;
    }

    this.cells = this.hs3dRotate.querySelectorAll('.hs-3drotate__cell');
    this.cellWidth = this.hs3dRotate.offsetWidth;
    this.cellHeight = this.hs3dRotate.offsetHeight;
    this.isHorizontal = true;
    this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
    this.orientationFlag = false;
    this.rotateEventsFlag = false; // l( cellWidth, cellHeight );

    l(chalk.yellow("\n    rotatorContainer: " + this.rotatorContainer + "\n    dataMethod: " + this.dataMethod + "\n    headers: " + this.dataHeaders + "\n    url: " + this.dataURL + "\n    cells: " + this.cells + "\n    prevButton: " + this.prevButton + "\n    nextButton: " + this.nextButton + "\n    cellsRange: " + this.cellsRange + "\n    orientationRadios: " + this.orientationRadios + "\n    cellCount: " + this.cellCount + "\n    selectedIndex: " + this.selectedIndex + "\n    cellWidth: " + this.cellWidth + "\n    cellHeight: " + this.cellHeight + "\n    isHorizontal: " + this.isHorizontal + "\n    rotateFn: " + this.rotateFn + "\n    "));
    this.prevButton.addEventListener('click', function () {
      _this.selectedIndex--;

      _this.rotate3dRotator();
    });
    this.nextButton.addEventListener('click', function () {
      _this.selectedIndex++;

      _this.rotate3dRotator();
    });
    this.cellsRange.addEventListener('change', this.update3DRotator);
    this.cellsRange.addEventListener('input', this.update3DRotator);
    this.hs3dRotatorEvents();
    this.Get3dRotatorData();
  }

  HS3DRotate.prototype.Get3dRotatorData = function () {
    var _this = this;

    if (window.fetch) {
      l('inside fetch vars');

      if (typeof this.dataMethod === 'undefined' || this.dataMethod === '') {
        this.dataMethod = 'GET';
      }

      if (typeof this.dataHeaders === 'undefined' || this.dataHeaders === '') {
        this.dataHeaders = {
          'credentials': 'same-origin'
        };
      } else if (this.dataHeaders) {
        this.dataHeaders = "{" + this.dataHeaders + "}";
      }

      if (typeof this.dataURL === 'undefined' || this.dataURL === '') {
        return;
      }

      this.options = {
        method: this.dataMethod,
        headers: new Headers({
          'Content-Type': 'text/json'
        })
      };

      if (this.dataHeaders) {
        this.options.append("" + this.dataHeaders);
      }

      var request = new Request(this.dataURL, this.options);
      l("request: " + request); // get hs-3d-rotate data - request data

      fetch(request).then(function (response) {
        return response.json();
      }).then(function (data) {
        // resolved.emit(data);
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
          var item = data_1[_i];
          var cellContentContainer = document.createElement('div');
          cellContentContainer.classList.add('hs-3drotate__cell');
          var img = document.createElement('img');
          img.classList.add('hs-3drotate__img');
          img.src = item.path;
          l("IMG: " + img.src);
          img.alt = item.alt;

          _this.hs3dRotate.appendChild(cellContentContainer);

          cellContentContainer.appendChild(img);
        } // return data;

      })["catch"](console.error);
    }

    return;
  };

  HS3DRotate.prototype.rotate3dRotator = function () {
    var angle = this.theta * this.selectedIndex * -1;
    this.hs3dRotate.style.transform = "translateZ(" + -this.radius + "px) " + this.rotateFn + "(" + angle + "deg)";
  };

  HS3DRotate.prototype.update3DRotator = function () {
    this.cellWidth = this.hs3dRotate.offsetWidth;
    this.cellHeight = this.hs3dRotate.offsetHeight;
    l(this.cellHeight);
    this.cellCount = this.cellsRange.value;
    this.theta = 360 / this.cellCount;
    this.cellSize = this.isHorizontal ? this.cellWidth : this.cellHeight;
    this.radius = Math.round(this.cellSize / 2 / Math.tan(Math.PI / this.cellCount));

    for (var i = 0; i < this.cells.length; i++) {
      var cell = this.cells[i];

      if (i < this.cellCount) {
        // visible cell
        cell.style.opacity = 1;
        var cellAngle = this.theta * i;
        cell.style.transform = this.rotateFn + "(" + cellAngle + "deg) translateZ(" + this.radius + "px)";
      } else {
        // hidden cell
        cell.style.opacity = 0;
        cell.style.transform = 'none';
      }
    }

    return this.rotate3dRotator();
  };

  HS3DRotate.prototype.HS3dRotateEvents = function () {
    var _this = this;

    function makeOrientationEvent() {
      for (var i = 0; i < this.orientationRadios.length; i++) {
        var radio = this.orientationRadios[i];
        radio.addEventListener('change', this.onOrientationChange);
      }

      this.orientationFlag = true;
    }

    if (!this.orientationFlag) {
      makeOrientationEvent();
    }

    function onOrientationChange() {
      this.isHorizontal = this.checkedRadio.value == 'horizontal';
      this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
      return this.update3DRotator();
    } // set initials 


    onOrientationChange();

    window.onresize = function () {
      setTimeout(function () {
        _this.update3DRotator;
      }, 500);
      document.addEventListener('shown.bs.modal', function () {
        _this.rotatorContainer.classList.remove('hs-vanish');

        _this.update3DRotator();
      });
    };

    if (this.orientationFlag && !this.rotateEventsFlag) {
      this.rotateEventsFlag = true;
      this.HS3dRotateEvents();
    }
  };

  return HS3DRotate;
}();

exports["default"] = HS3DRotate;
"use strict";

exports.__esModule = true;

require("./hs-3d-rotate");
"use strict";

exports.__esModule = true; // Vertical Timeline - by CodyHouse.co

function VerticalTimeline(element) {
  this.element = element;
  this.blocks = this.element.getElementsByClassName("hs-timeline__block");
  this.images = this.element.getElementsByClassName("hs-timeline__img");
  this.contents = this.element.getElementsByClassName("hs-timeline__content");
  this.offset = 0.8;
  this.hideBlocks();
}

VerticalTimeline.prototype.hideBlocks = function () {
  if (!document.documentElement.hasAttribute('classList')) {
    // if ( !"classList" in document.documentElement ) {
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
  if (!document.documentElement.hasAttribute('classList')) {
    // if ( ! "classList" in document.documentElement ) {
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
}; // eslint-disable-next-line prefer-const


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

exports["default"] = VerticalTimeline;
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

  var verticalTimelines = document.getElementsByClassName("js-hs-timeline"),
      verticalTimelinesArray = [],
      scrolling = false;

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

/* eslint-disable @typescript-eslint/no-var-requires */
require("@babel/register")({
  presets: ["@babel/preset-env"],
  "plugins": [["import", {
    "libraryName": "@material-ui/core"
  }], "@babel/plugin-syntax-dynamic-import"]
});
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var path = _interopRequireWildcard(require("path"));

var fs = _interopRequireWildcard(require("fs"));

var lineReader = _interopRequireWildcard(require("readline"));
/* eslint-disable @typescript-eslint/no-var-requires */
// import { stylelint } from 'stylelint';
// import { exec } from 'child_process';
// const glob       = require('glob');
// import path from 'path';
// import fs from 'fs';
// import lineReader from 'readline';
// import glob from 'glob';


var log = console.log;
var scssVarFileHS = path.resolve(__dirname, "../../../scss/variables/_colors.scss");
var cssVarFileHS = path.resolve(__dirname, "../../../scss/variables/_css-vars-heathshults.scss");
var scssVarFileBS = path.resolve(__dirname, "../../../scss/variables/_bootstrap-cssvars-in.scss");
var cssVarFileBS = path.resolve(__dirname, "../../../scss/variables/_css-vars-bootstrap.scss");
/**
 * 
 * 
 * @export
 * @class Scss2cssVars
 */

var Scss2cssVars = /*#__PURE__*/function () {
  // src = scssVarFile;
  // dest = cssVarFile;
  function Scss2cssVars(src, dest) {
    (0, _classCallCheck2.default)(this, Scss2cssVars);
    (0, _defineProperty2.default)(this, "line", void 0);
    (0, _defineProperty2.default)(this, "sourceCssStream", void 0);
    (0, _defineProperty2.default)(this, "src", void 0);
    (0, _defineProperty2.default)(this, "dest", void 0);
    this.src = src;
    this.dest = dest;
  }
  /**
   * @description Converts SCSS variables into CSS variables.
   * 
   * @returns {Promise<unknown>} 
   * 
   * @memberOf Scss2cssVars
   */


  (0, _createClass2.default)(Scss2cssVars, [{
    key: "convert",
    value: function convert() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        try {
          _this.sourceCssStream = lineReader.createInterface({
            input: fs.createReadStream(_this.src)
          });
          var rebuiltFile = ':root{';
          var skippingLine = false;

          _this.sourceCssStream.on('line', function (line) {
            var ln = line; // Skip Mixin and Comment blocks

            if (skippingLine) {
              if (ln.charAt(0) === '}' || ln.startsWith('*/')) {
                skippingLine = false;
              }

              return;
            }

            if (ln.includes('@') || ln.startsWith('/*') && !ln.includes('*/')) {
              skippingLine = true;
              return;
            }

            if (ln.startsWith('//') || ln.startsWith('/*') && ln.includes('*/')) {
              return;
            }

            var rebuiltLine = '';
            var currentLineWords = ln.split(' ');
            var skippingWord = false;
            currentLineWords.forEach(function (value, index) {
              if (skippingWord) {
                return;
              } // Skip in-line comments


              if (value.startsWith('//') || value.startsWith('/*')) {
                skippingWord = true;
                return rebuiltLine;
              }

              if (value.includes('!default')) {
                return rebuiltLine += ';';
              }

              if (value.includes('$')) {
                var oldVariable = value.substring(value.indexOf('$')).replace(/;|,| |\)/g, '');

                if (index === 1) {
                  value = value.replace(oldVariable, 'var(--' + oldVariable.replace('$', '') + ')');
                } else {
                  value = value.replace(oldVariable, '--' + oldVariable.replace('$', ''));
                }
              }

              if (value.includes('http')) {
                value = 'url(' + value.replace(';', ');');
              }

              if (index > 0) {
                return rebuiltLine += ' ' + value;
              }

              return rebuiltLine += value;
            });
            rebuiltLine = rebuiltLine.replace('    ', '\t') + '\n';
            rebuiltFile += '    ' + rebuiltLine;
          });

          _this.sourceCssStream.on('close', function (line) {
            var ln = line;
            log(ln);
            rebuiltFile += '}';

            if (this.dest) {
              var outputFile = fs.createWriteStream(this.dest);
              outputFile.once('open', function (fd) {
                log(fd);
                outputFile.write(rebuiltFile);
                outputFile.end();
              });
              outputFile.on('close', function () {
                resolve(this.dest);
              });
            } else {
              var _outputFile = fs.createWriteStream(this.src);

              _outputFile.once('open', function (fd) {
                log(fd);

                _outputFile.write(rebuiltFile);

                _outputFile.end();
              });

              _outputFile.on('close', function () {
                resolve(this.src);
              });
            }
          });

          var _require = require('child_process'),
              exec = _require.exec;

          exec("stylelint --fix ".concat(cssVarFileHS), function (e) {
            if (e) {
              console.log(e);
            }
          });
          exec("stylelint --fix ".concat(cssVarFileBS), function (e) {
            if (e) {
              console.log(e);
            }
          });
          return resolve(true);
        } catch (err) {
          throw new Error(err);
          return reject(false);
        }
      });
    }
  }]);
  return Scss2cssVars;
}();

exports.default = Scss2cssVars;
var scssVars = new Scss2cssVars(scssVarFileHS, cssVarFileHS);
scssVars.convert().then(function (result) {
  return console.log(result);
}).then(function () {
  return new Scss2cssVars(scssVarFileBS, cssVarFileBS).convert().then(function (result) {
    return console.log(result);
  });
}).catch(function (error) {
  return console.log(error);
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable no-unused-vars */

/* eslint-disable no-console */
var ShowMore = function ShowMore() {
  var openHeight;
  document.addEventListener('DOMContentLoaded', function FadeBar() {
    var VERSION = '0.0.1';
    var NAME = 'ShowMore_FadeBar';
    console.log("Now using ".concat(NAME, " version ").concat(VERSION)); // prepare the style tage for some css luvin

    var styleEl = document.createElement('style');
    var headEl = document.head || document.getElementsByTagName('head')[0];
    var options = settings();
    var cssText = FadeBarCSS(options); // console.log(options);

    styleEl.setAttribute('id', 'fbCSS');
    styleEl.textContent = cssText; // headEl.append(styleEl);

    try {
      var theFaders = Array.prototype.slice.call(document.querySelectorAll('.j-showmore'));
      theFaders.forEach(function (node, index) {
        var theContainer = node;
        var theFadeBar = document.createElement('div');
        var theShowMoreButton = document.createElement('button');
        var zindex = 'auto';
        theFadeBar.classList.add('j-fader');
        theFadeBar.style = "position: absolute; z-index: auto;";
        theShowMoreButton.classList.add('j-fader_button');
        theShowMoreButton.innerText = options.fbInitButtonText;
        theFadeBar.appendChild(theShowMoreButton);
        theContainer.before(theFadeBar);
        openHeight = theContainer.offsetHeight;
        console.log(openHeight);
        theShowMoreButton.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.target.classList.toggle('is-visible');
          var thisFadeBar = ev.target.parentElement;
          thisFadeBar.classList.toggle('is-visible');
          thisFadeBar.nextElementSibling.classList.toggle('is-visible');
          ev.target.classList.contains('is-visible') ? ev.target.innerText = options.fbOpenButtonText : ev.target.innerText = options.fbInitButtonText;
        }, false);
        theShowMoreButton.addEventListener('mouseout', function (ev) {
          ev.target.blur();
        });
      });
    } catch (err) {
      console.error(err);
    }
  }); // module.exports = FadeBar;

  function appendCSS(styles) {
    return; // return () => {
    //   const styleEl = document.createElement('style');
    //   const headEl = document.head || document.getElementsByTagName('head')[0];
    //   // const cssStyles = css
    //   styleEl.textContent = styles;
    //   headEl.appendChild(styleEl);
    //   styleEl.type = 'text/css';
    //   if (styleEl.styleSheet) {
    //     // This is required for IE8 and below.
    //     styleEl.styleSheet.cssText = styles;
    //   } else {
    //     styleEl.appendChild(document.createTextNode(styles));
    //   }
    // };
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
    // let ShowMoreSettings = typeof null;
    var fbCon = [];

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
      var options = Object.assign(defaults(), styles, fbActionBtn, fbCon);
      console.log('options');
      console.log(options); // cssBuilder(options);

      return options;
    } catch (e) {
      console.log('object assign error: ' + e);
    }
  } // document.addEventListener('DOMContentLoaded', FadeBarCSS = () => {


  function FadeBarCSS(options) {
    var cssValues = options;
    var fbCSS = "\n      .j-showmore {\n        position: absolute;\n        left: -9999px;\n        min-height: ".concat(cssValues.fbBoxHeight, ";\n        max-height: 400px;\n        overflow: hidden;\n        padding-bottom: ").concat(cssValues.fbBoxPaddingBottom, ";\n        -webkit-transition: max-height .25s ease-in-out;\n           -moz-transition: max-height .25s ease-in-out;\n             -o-transition: max-height .25s ease-in-out;\n                transition: max-height .25s ease-in-out;\n\n        /* -webkit-transition-timing-function: ease-in-out;\n          -moz-transition-timing-function: ease-in-out;\n            -o-transition-timing-function: ease-in-out;\n                transition-timing-function: ease-in-out; */\n      }\n      .j-showmore.is-visible {\n        left: 0px;\n        max-height: 400px;\n        -webkit-transition: max-height .25s ease-in-out;\n           -moz-transition: max-height .25s ease-in-out;\n             -o-transition: max-height .25s ease-in-out;\n                transition: max-height .25s ease-in-out;\n\n    /* -webkit-transition-timing-function: ease-in-out;\n          -moz-transition-timing-function: ease-in-out;\n            -o-transition-timing-function: ease-in-out;\n                transition-timing-function: ease-in-out; */\n      }\n      .j-fader {\n        position: absolute;\n        z-index: 100;\n        width: ").concat(cssValues.fbWidth, ";\n        height: ").concat(cssValues.fbHeight, ";\n        text-align: center;\n        vertical-align: bottom;\n        cursor: pointer;\n        border-bottom: ").concat(cssValues.fbBottomBorder, ";\n        background: -moz-linear-gradient(top, ").concat(cssValues.fbStartColor, ", ").concat(cssValues.fbEndColor, " 60%);\n        background: -webkit-linear-gradient(top, ").concat(cssValues.fbStartColor, ", ").concat(cssValues.fbEndColor, " 60%);\n        background: linear-gradient(to bottom, ").concat(cssValues.fbStartColor, ", ").concat(cssValues.fbEndColor, " 60%);\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='").concat(cssValues.fbStartColor, "', endColorstr='").concat(cssValues.fbEndColor, "',GradientType=0 );\n        /* box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.45); */\n      }\n      .hs-code .j-fader {\n        border-bottom: 5px solid #f2f2f2;\n        background: -moz-linear-gradient(top, rgba(255, 255, 255, 0.6), #ffffff 60%);\n        background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.6), #ffffff 60%);\n        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), #ffffff 60%);\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );\n      }\n      .j-fader > .j-fader_button {\n        position: absolute;\n        bottom: -6px;\n        left: 50%;\n        display: inline-block;\n        width:  ").concat(cssValues.fbButtonWidth, ";\n        height: ").concat(cssValues.fbButtonHeight, ";\n        padding: 4px 6px;\n        margin: 0 auto;\n        font-size: 0.8rem;\n        line-height: ").concat(cssValues.fbButtonLineHeight, ";\n        color: ").concat(cssValues.fbButtonTextColor, ";\n        white-space: nowrap;\n        cursor: pointer;\n        background-color: ").concat(cssValues.fbButtonBackground, ";\n        border: 1px solid ").concat(cssValues.fbButtonBorderColor, ";\n        border-bottom: 0 solid ").concat(cssValues.fbButtonBorderColor, ";\n        border-radius: ").concat(cssValues.fbButtonBorderRadius, ";\n        box-shadow: 0 -2px 4px 0 $hs-black--a45;\n        transform: translateX(-50%);\n      }\n      .j-fader > .j-fader_button::before {\n        display: block;\n        position: absolute;\n        left: 50%;\n        top: 5%;\n        z-index: 100;\n        transform: translate(-50%);\n        width: 100%;\n        content: '").concat(cssValues.fbInitButtonText, "';\n        font-size: 0.75rem;\n      }\n      .j-fader > .j-fader_button.is-visible::before {\n        content: '").concat(cssValues.fbOpenButtonText, "';\n      }\n      .j-fader > .j-fader_button:hover {\n        background-color: ").concat(cssValues.fbButtonBackgroundHover, ";\n        color: ").concat(cssValues.fbButtonTextColorHover, ";\n      }\n      .j-fader > .j-fader_button:focus {\n        outline-color: ").concat(cssValues.fbButtonBorderColorFocus, ";\n        background-color: ").concat(cssValues.fbButtonBorderColorFocus, ";\n        color: ").concat(cssValues.fbButtonTextColorFocus, ";\n        border: 1px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n        border-bottom: 5px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n        box-shadow: unset;\n      }\n      .j-fader > .j-fader_button.is-visible {\n        background-color: ").concat(cssValues.fbButtonBorderColorFocus, ";\n        color: ").concat(cssValues.fbButtonTextColorFocus, ";\n        border: 1px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n        border-bottom: 5px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n      }\n      .j-fader > .j-fader.is-visible {\n        border-bottom: 5px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n      }\n      @keyframes slideOpen {\n        from { height: 300px; }\n        to { height: 100%; }\n      }\n      @keyframes slideClosed {\n        from { height: 100%; }\n        to { height: 300px; }\n      }\n    "); // appendCSS(fbCSS)

    return fbCSS;
  }
};

var _default = ShowMore;
exports.default = _default;
ShowMore();
"use strict";

try {
  var classList = document.querySelector('.j-fader__button');

  if (classList) {
    classList.addEventListener('click', function (ev) {
      ev.target.closest('.j-showmore').classList.toggle('is-visible');
      ev.target.closest('.j-fader').classList.toggle('is-visible');
      ev.target.classList.toggle('is-visible');
    }, false);
  }
} catch (error) {
  console.error(error);
}
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
function ThemeSwitcher() {
  // ** ====== MODE WIDHET ====== ** //
  // (() => {
  var $dm_btn = $('#mode_widget');
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
    $dm_btn.html(modeHTML);
  }

  function setMode(mode) {
    localStorage.setItem('dark_mode', "".concat(mode));
    document.querySelector('#darkmode').disabled = mode;

    if (mode === 'true') {
      document.querySelector('#darkmode').disabled = false;
      $dm_btn.html('<span class="which-mode"> Dark Mode<i id="mode_icon" class="fa fa-moon mode-icon"></i></span>'); // document.querySelector('link[href="css/theme-dark-mode.css"]').disabled = false;
    } else {
      $dm_btn.html('<span class="which-mode"> Light Mode<i id="mode_icon" class="fa fa-sun mode-icon"></i></span>');
    }

    return setModeText(mode);
  } // Theme switcher


  $dm_btn.on('click', function (event) {
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeStamper = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
* @fileOverview
* @author Heath Shults - Heath Shults
* @version 1.0.0
* @description
*
* @class  TimeStamper
* @param dt {date|Object} = new Date - object to hold the date and time
* @param format string - specify the format: datetime, date, time and justyear
* @const DD string - Returns the day formatted like '19'.
* @const MM string  - Returns the month farmatted like '01.
* @const YYYY string - Returns the year farmatted like '2020.
* @const datetime string - Returns all constiables concatenated like 01-29-2020 13:05:22.
* @const datetimereverse string - Returns all constiables concatenated like 2020-01-29 13:05:22.
* @const date string - Returns all constiables associated with the date like 01-29-2020.
* @const time string - Returns time constiables like 13:05:22.
* @const mm string - Returns minutes formatted like 01-29-2020 13:05:22.
* @const ss string - Returns the seconds formatted like 01-29-2020 13:05:22.
*
* @usage Create a new TimeStamper and pass the desired format.
*  const dt = new TimeStamper('datetime');
*  console.log(dt);
*
*/
var TimeStamper = function TimeStamper(format) {
  (0, _classCallCheck2.default)(this, TimeStamper);
  this.dt = new Date();
  this.format = format;
  this.result; // ensure date comes as 01, 09 etc

  var DD = "0".concat(this.dt.getDate()).slice(-2),
      // getMonth returns month from 0
  MM = "0".concat(this.dt.getMonth() + 1).slice(-2),
      YYYY = this.dt.getFullYear(),
      hh = "0".concat(this.dt.getHours()).slice(-2),
      mm = "0".concat(this.dt.getMinutes()).slice(-2),
      ss = "0".concat(this.dt.getSeconds()).slice(-2),
      datetime = "".concat(MM, "-").concat(DD, "-").concat(YYYY, " ").concat(hh, ":").concat(mm, ":").concat(ss),
      datetimereverse = "".concat(YYYY, "-").concat(MM, "-").concat(DD, " ").concat(hh, ":").concat(mm, ":").concat(ss),
      justdate = "".concat(MM, "-").concat(DD, "-").concat(YYYY),
      justtime = "".concat(hh, ":").concat(mm, ":").concat(ss),
      justyear = YYYY;

  if (format === 'datetime') {
    this.result = datetime;
  } else if (format === 'datetimereverse') {
    this.result = datetimereverse;
  } else if (format === 'justdate') {
    this.result = justdate;
  } else if (format === 'justtime') {
    this.result = justtime;
  } else if (format === 'justyear') {
    this.result = justyear;
  } else if (format === '' || (0, _typeof2.default)('undefined')) {
    this.result = datetime;
  } else {
    this.result = TimeStamper.datetime;
  }

  return this.result;
}; // const _TimeStamper=TimeStamper;
// export {_TimeStamper as TimeStamper};


exports.TimeStamper = TimeStamper;
var dtStamper = new TimeStamper('datetime'); // eslint-disable-next-line no-console

console.log(dtStamper.result);
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
