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