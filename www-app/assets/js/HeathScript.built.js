(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require('./js/HeathScript');

require('./js/modules/show-more-fadebar');

require('./js/jqBootstrapValidation');

require('./js/contact_me');

require('./js/swiper');

},{"./js/HeathScript":2,"./js/contact_me":3,"./js/jqBootstrapValidation":4,"./js/modules/show-more-fadebar":5,"./js/swiper":7}],2:[function(require,module,exports){
"use strict";
/*!
 * HeathShults.com - Heath Shults v1.0 (http://heathshults.com)
 * Copyright 2020-2020 Heath-Shults
 * Licensed under MIT (https://github.com/heathshults/heathshults.com/LICENSE)
 */

(function ($) {
  'use strict'; // Start of use strict
  // ====== RANKING BARS

  var theBars = document.querySelectorAll('.hs-ranking-bar');
  theBars.forEach(function (aBar) {
    // eslint-disable-next-line no-undef
    var barWidth = $(aBar).attr('aria-valuenow');
    $(aBar).attr('style', "width: ".concat(barWidth, "%"));
  }); // ====== NAV JS ====== //
  // jQuery for page scrolling feature - requires jQuery Easing plugin
  // $('a.js-page-scroll').bind('click', function (event) {
  //   var $anchor = $(this);
  //   $('html, body').stop().animate({
  //     scrollTop: ($($anchor.attr('href')).offset().top - 0) //I left the - 0 there to remind me about using it if need be
  //   }, 1250, 'easeInOutExpo');
  //   event.preventDefault();
  // });

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top - 72
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  }); // Closes responsive menu when a scroll trigger link is clicked

  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  }); // Highlight the top nav as scrolling occurs

  $('body').scrollspy({
    target: '#mainNav',
    offset: 74
  }); // Collapse Navbar

  var navbarCollapse = function navbarCollapse() {
    if ($("#mainNav").offset().top > 90) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }; // Collapse now if page is not at top


  navbarCollapse(); // Collapse the navbar when page is scrolled

  $(window).scroll(navbarCollapse); // ** ====== MODE WIDHET ====== ** //

  var dm_btn = document.querySelector('#mode_widget');
  var lsGetMode = localStorage.getItem('dark_mode'); // set button text

  $(document).ready(function () {
    if (lsGetMode === 'fasle') {
      setModeText(true); //dm_btn.html('<span class="which-mode">Dark Mode<span id="mode_icon" class="fa fa-moon-o mode-icon"></span></span>')
    } else {
      setModeText(false); // dm_btn.html('<span class="which-mode">Light Mode<span id="mode_icon" class="fa fa-sun-o mode-icon"></span></span>')
    }
  });

  function setModeText(mode) {
    if (mode === 'true') {
      dm_btn.innerHTML = '<span class="which-mode"> Dark Mode<span id="mode_icon" class="fa fa-moon-o mode-icon"></span></span>';
    } else {
      dm_btn.innerHTML = '<span class="which-mode"> Light Mode<span id="mode_icon" class="fa fa-sun-o mode-icon"></span></span>';
    }
  }

  function setMode(mode) {
    localStorage.setItem('dark_mode', "".concat(mode));
    document.querySelector('#darkmode').disabled = mode;

    if (mode === 'true') {
      document.querySelector('#darkmode').disabled = false;
      dm_btn.innerHTML = '<span class="which-mode"> Dark Mode<span id="mode_icon" class="fa fa-moon-o mode-icon"></span></span>'; // document.querySelector('link[href="css/theme-dark-mode.css"]').disabled = false;
    } else {
      dm_btn.innerHTML = '<span class="which-mode"> Light Mode<span id="mode_icon" class="fa fa-sun-o mode-icon"></span></span>';
    }

    return setModeText(mode);
  } // Theme switcher


  dm_btn.bind('click', function (event) {
    event.preventDefault();

    if (localStorage.getItem('dark_mode') === 'true') {
      setMode('false'), console.log('set to false');
    } else {
      setMode('true'), console.log('set to true');
    }

    return;
  }); // ====== SHOWMORE ==== //
  // eslint-disable-next-line no-unused-vars

  var ShowMoreSettings = {
    boxHeight: '100vh',
    fbStartColor: 'rgba(0,0,0,.75)',
    fbEndColor: 'rgba(0,0,0,.75)',
    fbBottomBorder: '1px solid #2e2e2e',
    fbInitButtonText: 'Show More',
    fbOpenButtonText: 'Show Less',
    fbButtonPosition: 'center',
    fbButtonBackground: '#151515',
    fbButtonBackgroundHover: '#333333;',
    fbButtonTextColor: '#ffffff',
    fbButtonTextColorHover: '#ffffff',
    fbButtonTextColorFocus: '#FFF',
    fbButtonBorderColor: '#000000',
    fbButtonBorderColorFocus: '#333333'
  };
})(jQuery); // End of use strict

},{}],3:[function(require,module,exports){
"use strict"; // Contact Form Scripts

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

},{}],4:[function(require,module,exports){
"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/* jqBootstrapValidation
 * A plugin for automating validation on Twitter Bootstrap formatted forms.
 *
 * v1.3.6
 *
 * License: MIT <http://opensource.org/licenses/mit-license.php> - see LICENSE file
 *
 * http://ReactiveRaven.github.com/jqBootstrapValidation/
 */


(function ($) {
  var createdElements = [];
  var defaults = {
    options: {
      prependExistingHelpBlock: false,
      sniffHtml: true,
      // sniff for 'required', 'maxlength', etc
      preventSubmit: true,
      // stop the form submit event from firing if validation fails
      submitError: false,
      // function called if there is an error when trying to submit
      submitSuccess: false,
      // function called just before a successful submit event is sent to the server
      semanticallyStrict: false,
      // set to true to tidy up generated HTML output
      autoAdd: {
        helpBlocks: true
      },
      filter: function filter() {
        // return $(this).is(":visible"); // only validate elements you can see
        return true; // validate everything
      }
    },
    methods: {
      init: function init(options) {
        var settings = $.extend(true, {}, defaults);
        settings.options = $.extend(true, settings.options, options);
        var $siblingElements = this;
        var uniqueForms = $.unique($siblingElements.map(function () {
          return $(this).parents("form")[0];
        }).toArray());
        $(uniqueForms).bind("submit", function (e) {
          var $form = $(this);
          var warningsFound = 0;
          var $inputs = $form.find("input,textarea,select").not("[type=submit],[type=image]").filter(settings.options.filter);
          $inputs.trigger("submit.validation").trigger("validationLostFocus.validation");
          $inputs.each(function (i, el) {
            var $this = $(el),
                $controlGroup = $this.parents(".form-group").first();

            if ($controlGroup.hasClass("warning")) {
              $controlGroup.removeClass("warning").addClass("error");
              warningsFound++;
            }
          });
          $inputs.trigger("validationLostFocus.validation");

          if (warningsFound) {
            if (settings.options.preventSubmit) {
              e.preventDefault();
            }

            $form.addClass("error");

            if ($.isFunction(settings.options.submitError)) {
              settings.options.submitError($form, e, $inputs.jqBootstrapValidation("collectErrors", true));
            }
          } else {
            $form.removeClass("error");

            if ($.isFunction(settings.options.submitSuccess)) {
              settings.options.submitSuccess($form, e);
            }
          }
        });
        return this.each(function () {
          // Get references to everything we're interested in
          var $this = $(this),
              $controlGroup = $this.parents(".form-group").first(),
              $helpBlock = $controlGroup.find(".help-block").first(),
              $form = $this.parents("form").first(),
              validatorNames = []; // create message container if not exists

          if (!$helpBlock.length && settings.options.autoAdd && settings.options.autoAdd.helpBlocks) {
            $helpBlock = $('<div class="help-block" />');
            $controlGroup.find('.controls').append($helpBlock);
            createdElements.push($helpBlock[0]);
          } // =============================================================
          //                                     SNIFF HTML FOR VALIDATORS
          // =============================================================
          // *snort sniff snuffle*


          if (settings.options.sniffHtml) {
            var message = ""; // ---------------------------------------------------------
            //                                                   PATTERN
            // ---------------------------------------------------------

            if ($this.attr("pattern") !== undefined) {
              message = "Not in the expected format<!-- data-validation-pattern-message to override -->";

              if ($this.data("validationPatternMessage")) {
                message = $this.data("validationPatternMessage");
              }

              $this.data("validationPatternMessage", message);
              $this.data("validationPatternRegex", $this.attr("pattern"));
            } // ---------------------------------------------------------
            //                                                       MAX
            // ---------------------------------------------------------


            if ($this.attr("max") !== undefined || $this.attr("aria-valuemax") !== undefined) {
              var max = $this.attr("max") !== undefined ? $this.attr("max") : $this.attr("aria-valuemax");
              message = "Too high: Maximum of '" + max + "'<!-- data-validation-max-message to override -->";

              if ($this.data("validationMaxMessage")) {
                message = $this.data("validationMaxMessage");
              }

              $this.data("validationMaxMessage", message);
              $this.data("validationMaxMax", max);
            } // ---------------------------------------------------------
            //                                                       MIN
            // ---------------------------------------------------------


            if ($this.attr("min") !== undefined || $this.attr("aria-valuemin") !== undefined) {
              var min = $this.attr("min") !== undefined ? $this.attr("min") : $this.attr("aria-valuemin");
              message = "Too low: Minimum of '" + min + "'<!-- data-validation-min-message to override -->";

              if ($this.data("validationMinMessage")) {
                message = $this.data("validationMinMessage");
              }

              $this.data("validationMinMessage", message);
              $this.data("validationMinMin", min);
            } // ---------------------------------------------------------
            //                                                 MAXLENGTH
            // ---------------------------------------------------------


            if ($this.attr("maxlength") !== undefined) {
              message = "Too long: Maximum of '" + $this.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->";

              if ($this.data("validationMaxlengthMessage")) {
                message = $this.data("validationMaxlengthMessage");
              }

              $this.data("validationMaxlengthMessage", message);
              $this.data("validationMaxlengthMaxlength", $this.attr("maxlength"));
            } // ---------------------------------------------------------
            //                                                 MINLENGTH
            // ---------------------------------------------------------


            if ($this.attr("minlength") !== undefined) {
              message = "Too short: Minimum of '" + $this.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->";

              if ($this.data("validationMinlengthMessage")) {
                message = $this.data("validationMinlengthMessage");
              }

              $this.data("validationMinlengthMessage", message);
              $this.data("validationMinlengthMinlength", $this.attr("minlength"));
            } // ---------------------------------------------------------
            //                                                  REQUIRED
            // ---------------------------------------------------------


            if ($this.attr("required") !== undefined || $this.attr("aria-required") !== undefined) {
              message = settings.builtInValidators.required.message;

              if ($this.data("validationRequiredMessage")) {
                message = $this.data("validationRequiredMessage");
              }

              $this.data("validationRequiredMessage", message);
            } // ---------------------------------------------------------
            //                                                    NUMBER
            // ---------------------------------------------------------


            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "number") {
              message = settings.builtInValidators.number.message;

              if ($this.data("validationNumberMessage")) {
                message = $this.data("validationNumberMessage");
              }

              $this.data("validationNumberMessage", message);
            } // ---------------------------------------------------------
            //                                                     EMAIL
            // ---------------------------------------------------------


            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "email") {
              message = "Not a valid email address<!-- data-validator-validemail-message to override -->";

              if ($this.data("validationValidemailMessage")) {
                message = $this.data("validationValidemailMessage");
              } else if ($this.data("validationEmailMessage")) {
                message = $this.data("validationEmailMessage");
              }

              $this.data("validationValidemailMessage", message);
            } // ---------------------------------------------------------
            //                                                MINCHECKED
            // ---------------------------------------------------------


            if ($this.attr("minchecked") !== undefined) {
              message = "Not enough options checked; Minimum of '" + $this.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->";

              if ($this.data("validationMincheckedMessage")) {
                message = $this.data("validationMincheckedMessage");
              }

              $this.data("validationMincheckedMessage", message);
              $this.data("validationMincheckedMinchecked", $this.attr("minchecked"));
            } // ---------------------------------------------------------
            //                                                MAXCHECKED
            // ---------------------------------------------------------


            if ($this.attr("maxchecked") !== undefined) {
              message = "Too many options checked; Maximum of '" + $this.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->";

              if ($this.data("validationMaxcheckedMessage")) {
                message = $this.data("validationMaxcheckedMessage");
              }

              $this.data("validationMaxcheckedMessage", message);
              $this.data("validationMaxcheckedMaxchecked", $this.attr("maxchecked"));
            }
          } // =============================================================
          //                                       COLLECT VALIDATOR NAMES
          // =============================================================
          // Get named validators


          if ($this.data("validation") !== undefined) {
            validatorNames = $this.data("validation").split(",");
          } // Get extra ones defined on the element's data attributes


          $.each($this.data(), function (i, el) {
            var parts = i.replace(/([A-Z])/g, ",$1").split(",");

            if (parts[0] === "validation" && parts[1]) {
              validatorNames.push(parts[1]);
            }
          }); // =============================================================
          //                                     NORMALISE VALIDATOR NAMES
          // =============================================================

          var validatorNamesToInspect = validatorNames;
          var newValidatorNamesToInspect = [];

          do // repeatedly expand 'shortcut' validators into their real validators
          {
            // Uppercase only the first letter of each name
            $.each(validatorNames, function (i, el) {
              validatorNames[i] = formatValidatorName(el);
            }); // Remove duplicate validator names

            validatorNames = $.unique(validatorNames); // Pull out the new validator names from each shortcut

            newValidatorNamesToInspect = [];
            $.each(validatorNamesToInspect, function (i, el) {
              if ($this.data("validation" + el + "Shortcut") !== undefined) {
                // Are these custom validators?
                // Pull them out!
                $.each($this.data("validation" + el + "Shortcut").split(","), function (i2, el2) {
                  newValidatorNamesToInspect.push(el2);
                });
              } else if (settings.builtInValidators[el.toLowerCase()]) {
                // Is this a recognised built-in?
                // Pull it out!
                var validator = settings.builtInValidators[el.toLowerCase()];

                if (validator.type.toLowerCase() === "shortcut") {
                  $.each(validator.shortcut.split(","), function (i, el) {
                    el = formatValidatorName(el);
                    newValidatorNamesToInspect.push(el);
                    validatorNames.push(el);
                  });
                }
              }
            });
            validatorNamesToInspect = newValidatorNamesToInspect;
          } while (validatorNamesToInspect.length > 0); // =============================================================
          //                                       SET UP VALIDATOR ARRAYS
          // =============================================================


          var validators = {};
          $.each(validatorNames, function (i, el) {
            // Set up the 'override' message
            var message = $this.data("validation" + el + "Message");
            var hasOverrideMessage = message !== undefined;
            var foundValidator = false;
            message = message ? message : "'" + el + "' validation failed <!-- Add attribute 'data-validation-" + el.toLowerCase() + "-message' to input to change this message -->";
            $.each(settings.validatorTypes, function (validatorType, validatorTemplate) {
              if (validators[validatorType] === undefined) {
                validators[validatorType] = [];
              }

              if (!foundValidator && $this.data("validation" + el + formatValidatorName(validatorTemplate.name)) !== undefined) {
                validators[validatorType].push($.extend(true, {
                  name: formatValidatorName(validatorTemplate.name),
                  message: message
                }, validatorTemplate.init($this, el)));
                foundValidator = true;
              }
            });

            if (!foundValidator && settings.builtInValidators[el.toLowerCase()]) {
              var validator = $.extend(true, {}, settings.builtInValidators[el.toLowerCase()]);

              if (hasOverrideMessage) {
                validator.message = message;
              }

              var validatorType = validator.type.toLowerCase();

              if (validatorType === "shortcut") {
                foundValidator = true;
              } else {
                $.each(settings.validatorTypes, function (validatorTemplateType, validatorTemplate) {
                  if (validators[validatorTemplateType] === undefined) {
                    validators[validatorTemplateType] = [];
                  }

                  if (!foundValidator && validatorType === validatorTemplateType.toLowerCase()) {
                    $this.data("validation" + el + formatValidatorName(validatorTemplate.name), validator[validatorTemplate.name.toLowerCase()]);
                    validators[validatorType].push($.extend(validator, validatorTemplate.init($this, el)));
                    foundValidator = true;
                  }
                });
              }
            }

            if (!foundValidator) {
              $.error("Cannot find validation info for '" + el + "'");
            }
          }); // =============================================================
          //                                         STORE FALLBACK VALUES
          // =============================================================

          $helpBlock.data("original-contents", $helpBlock.data("original-contents") ? $helpBlock.data("original-contents") : $helpBlock.html());
          $helpBlock.data("original-role", $helpBlock.data("original-role") ? $helpBlock.data("original-role") : $helpBlock.attr("role"));
          $controlGroup.data("original-classes", $controlGroup.data("original-clases") ? $controlGroup.data("original-classes") : $controlGroup.attr("class"));
          $this.data("original-aria-invalid", $this.data("original-aria-invalid") ? $this.data("original-aria-invalid") : $this.attr("aria-invalid")); // =============================================================
          //                                                    VALIDATION
          // =============================================================

          $this.bind("validation.validation", function (event, params) {
            var value = getValue($this); // Get a list of the errors to apply

            var errorsFound = [];
            $.each(validators, function (validatorType, validatorTypeArray) {
              if (value || value.length || params && params.includeEmpty || !!settings.validatorTypes[validatorType].blockSubmit && params && !!params.submitting) {
                $.each(validatorTypeArray, function (i, validator) {
                  if (settings.validatorTypes[validatorType].validate($this, value, validator)) {
                    errorsFound.push(validator.message);
                  }
                });
              }
            });
            return errorsFound;
          });
          $this.bind("getValidators.validation", function () {
            return validators;
          }); // =============================================================
          //                                             WATCH FOR CHANGES
          // =============================================================

          $this.bind("submit.validation", function () {
            return $this.triggerHandler("change.validation", {
              submitting: true
            });
          });
          $this.bind(["keyup", "focus", "blur", "click", "keydown", "keypress", "change"].join(".validation ") + ".validation", function (e, params) {
            var value = getValue($this);
            var errorsFound = [];
            $controlGroup.find("input,textarea,select").each(function (i, el) {
              var oldCount = errorsFound.length;
              $.each($(el).triggerHandler("validation.validation", params), function (j, message) {
                errorsFound.push(message);
              });

              if (errorsFound.length > oldCount) {
                $(el).attr("aria-invalid", "true");
              } else {
                var original = $this.data("original-aria-invalid");
                $(el).attr("aria-invalid", original !== undefined ? original : false);
              }
            });
            $form.find("input,select,textarea").not($this).not("[name=\"" + $this.attr("name") + "\"]").trigger("validationLostFocus.validation");
            errorsFound = $.unique(errorsFound.sort()); // Were there any errors?

            if (errorsFound.length) {
              // Better flag it up as a warning.
              $controlGroup.removeClass("success error").addClass("warning"); // How many errors did we find?

              if (settings.options.semanticallyStrict && errorsFound.length === 1) {
                // Only one? Being strict? Just output it.
                $helpBlock.html(errorsFound[0] + (settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : ""));
              } else {
                // Multiple? Being sloppy? Glue them together into an UL.
                $helpBlock.html("<ul role=\"alert\"><li>" + errorsFound.join("</li><li>") + "</li></ul>" + (settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : ""));
              }
            } else {
              $controlGroup.removeClass("warning error success");

              if (value.length > 0) {
                $controlGroup.addClass("success");
              }

              $helpBlock.html($helpBlock.data("original-contents"));
            }

            if (e.type === "blur") {
              $controlGroup.removeClass("success");
            }
          });
          $this.bind("validationLostFocus.validation", function () {
            $controlGroup.removeClass("success");
          });
        });
      },
      destroy: function destroy() {
        return this.each(function () {
          var $this = $(this),
              $controlGroup = $this.parents(".form-group").first(),
              $helpBlock = $controlGroup.find(".help-block").first(); // remove our events

          $this.unbind('.validation'); // events are namespaced.
          // reset help text

          $helpBlock.html($helpBlock.data("original-contents")); // reset classes

          $controlGroup.attr("class", $controlGroup.data("original-classes")); // reset aria

          $this.attr("aria-invalid", $this.data("original-aria-invalid")); // reset role

          $helpBlock.attr("role", $this.data("original-role")); // remove all elements we created

          if (createdElements.indexOf($helpBlock[0]) > -1) {
            $helpBlock.remove();
          }
        });
      },
      collectErrors: function collectErrors(includeEmpty) {
        var errorMessages = {};
        this.each(function (i, el) {
          var $el = $(el);
          var name = $el.attr("name");
          var errors = $el.triggerHandler("validation.validation", {
            includeEmpty: true
          });
          errorMessages[name] = $.extend(true, errors, errorMessages[name]);
        });
        $.each(errorMessages, function (i, el) {
          if (el.length === 0) {
            delete errorMessages[i];
          }
        });
        return errorMessages;
      },
      hasErrors: function hasErrors() {
        var errorMessages = [];
        this.each(function (i, el) {
          errorMessages = errorMessages.concat($(el).triggerHandler("getValidators.validation") ? $(el).triggerHandler("validation.validation", {
            submitting: true
          }) : []);
        });
        return errorMessages.length > 0;
      },
      override: function override(newDefaults) {
        defaults = $.extend(true, defaults, newDefaults);
      }
    },
    validatorTypes: {
      callback: {
        name: "callback",
        init: function init($this, name) {
          return {
            validatorName: name,
            callback: $this.data("validation" + name + "Callback"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function validate($this, value, validator) {
          if (validator.lastValue === value && validator.lastFinished) {
            return !validator.lastValid;
          }

          if (validator.lastFinished === true) {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;
            var rrjqbvValidator = validator;
            var rrjqbvThis = $this;
            executeFunctionByName(validator.callback, window, $this, value, function (data) {
              if (rrjqbvValidator.lastValue === data.value) {
                rrjqbvValidator.lastValid = data.valid;

                if (data.message) {
                  rrjqbvValidator.message = data.message;
                }

                rrjqbvValidator.lastFinished = true;
                rrjqbvThis.data("validation" + rrjqbvValidator.validatorName + "Message", rrjqbvValidator.message); // Timeout is set to avoid problems with the events being considered 'already fired'

                setTimeout(function () {
                  rrjqbvThis.trigger("change.validation");
                }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
              }
            });
          }

          return false;
        }
      },
      ajax: {
        name: "ajax",
        init: function init($this, name) {
          return {
            validatorName: name,
            url: $this.data("validation" + name + "Ajax"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function validate($this, value, validator) {
          if ("" + validator.lastValue === "" + value && validator.lastFinished === true) {
            return validator.lastValid === false;
          }

          if (validator.lastFinished === true) {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;
            $.ajax({
              url: validator.url,
              data: "value=" + value + "&field=" + $this.attr("name"),
              dataType: "json",
              success: function success(data) {
                if ("" + validator.lastValue === "" + data.value) {
                  validator.lastValid = !!data.valid;

                  if (data.message) {
                    validator.message = data.message;
                  }

                  validator.lastFinished = true;
                  $this.data("validation" + validator.validatorName + "Message", validator.message); // Timeout is set to avoid problems with the events being considered 'already fired'

                  setTimeout(function () {
                    $this.trigger("change.validation");
                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                }
              },
              failure: function failure() {
                validator.lastValid = true;
                validator.message = "ajax call failed";
                validator.lastFinished = true;
                $this.data("validation" + validator.validatorName + "Message", validator.message); // Timeout is set to avoid problems with the events being considered 'already fired'

                setTimeout(function () {
                  $this.trigger("change.validation");
                }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
              }
            });
          }

          return false;
        }
      },
      regex: {
        name: "regex",
        init: function init($this, name) {
          return {
            regex: regexFromString($this.data("validation" + name + "Regex"))
          };
        },
        validate: function validate($this, value, validator) {
          return !validator.regex.test(value) && !validator.negative || validator.regex.test(value) && validator.negative;
        }
      },
      required: {
        name: "required",
        init: function init($this, name) {
          return {};
        },
        validate: function validate($this, value, validator) {
          return !!(value.length === 0 && !validator.negative) || !!(value.length > 0 && validator.negative);
        },
        blockSubmit: true
      },
      match: {
        name: "match",
        init: function init($this, name) {
          var element = $this.parents("form").first().find("[name=\"" + $this.data("validation" + name + "Match") + "\"]").first();
          element.bind("validation.validation", function () {
            $this.trigger("change.validation", {
              submitting: true
            });
          });
          return {
            "element": element
          };
        },
        validate: function validate($this, value, validator) {
          return value !== validator.element.val() && !validator.negative || value === validator.element.val() && validator.negative;
        },
        blockSubmit: true
      },
      max: {
        name: "max",
        init: function init($this, name) {
          return {
            max: $this.data("validation" + name + "Max")
          };
        },
        validate: function validate($this, value, validator) {
          return parseFloat(value, 10) > parseFloat(validator.max, 10) && !validator.negative || parseFloat(value, 10) <= parseFloat(validator.max, 10) && validator.negative;
        }
      },
      min: {
        name: "min",
        init: function init($this, name) {
          return {
            min: $this.data("validation" + name + "Min")
          };
        },
        validate: function validate($this, value, validator) {
          return parseFloat(value) < parseFloat(validator.min) && !validator.negative || parseFloat(value) >= parseFloat(validator.min) && validator.negative;
        }
      },
      maxlength: {
        name: "maxlength",
        init: function init($this, name) {
          return {
            maxlength: $this.data("validation" + name + "Maxlength")
          };
        },
        validate: function validate($this, value, validator) {
          return value.length > validator.maxlength && !validator.negative || value.length <= validator.maxlength && validator.negative;
        }
      },
      minlength: {
        name: "minlength",
        init: function init($this, name) {
          return {
            minlength: $this.data("validation" + name + "Minlength")
          };
        },
        validate: function validate($this, value, validator) {
          return value.length < validator.minlength && !validator.negative || value.length >= validator.minlength && validator.negative;
        }
      },
      maxchecked: {
        name: "maxchecked",
        init: function init($this, name) {
          var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
          elements.bind("click.validation", function () {
            $this.trigger("change.validation", {
              includeEmpty: true
            });
          });
          return {
            maxchecked: $this.data("validation" + name + "Maxchecked"),
            elements: elements
          };
        },
        validate: function validate($this, value, validator) {
          return validator.elements.filter(":checked").length > validator.maxchecked && !validator.negative || validator.elements.filter(":checked").length <= validator.maxchecked && validator.negative;
        },
        blockSubmit: true
      },
      minchecked: {
        name: "minchecked",
        init: function init($this, name) {
          var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
          elements.bind("click.validation", function () {
            $this.trigger("change.validation", {
              includeEmpty: true
            });
          });
          return {
            minchecked: $this.data("validation" + name + "Minchecked"),
            elements: elements
          };
        },
        validate: function validate($this, value, validator) {
          return validator.elements.filter(":checked").length < validator.minchecked && !validator.negative || validator.elements.filter(":checked").length >= validator.minchecked && validator.negative;
        },
        blockSubmit: true
      }
    },
    builtInValidators: {
      email: {
        name: "Email",
        type: "shortcut",
        shortcut: "validemail"
      },
      validemail: {
        name: "Validemail",
        type: "regex",
        regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,4}",
        message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
      },
      passwordagain: {
        name: "Passwordagain",
        type: "match",
        match: "password",
        message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
      },
      positive: {
        name: "Positive",
        type: "shortcut",
        shortcut: "number,positivenumber"
      },
      negative: {
        name: "Negative",
        type: "shortcut",
        shortcut: "number,negativenumber"
      },
      number: {
        name: "Number",
        type: "regex",
        regex: "([+-]?\\\d+(\\\.\\\d*)?([eE][+-]?[0-9]+)?)?",
        message: "Must be a number<!-- data-validator-number-message to override -->"
      },
      integer: {
        name: "Integer",
        type: "regex",
        regex: "[+-]?\\\d+",
        message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
      },
      positivenumber: {
        name: "Positivenumber",
        type: "min",
        min: 0,
        message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
      },
      negativenumber: {
        name: "Negativenumber",
        type: "max",
        max: 0,
        message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
      },
      required: {
        name: "Required",
        type: "required",
        message: "This is required<!-- data-validator-required-message to override -->"
      },
      checkone: {
        name: "Checkone",
        type: "minchecked",
        minchecked: 1,
        message: "Check at least one option<!-- data-validation-checkone-message to override -->"
      }
    }
  };

  var formatValidatorName = function formatValidatorName(name) {
    return name.toLowerCase().replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
      return p1 + p2.toUpperCase();
    });
  };

  var getValue = function getValue($this) {
    // Extract the value we're talking about
    var value = $this.val();
    var type = $this.attr("type");

    if (type === "checkbox") {
      value = $this.is(":checked") ? value : "";
    }

    if (type === "radio") {
      value = $('input[name="' + $this.attr("name") + '"]:checked').length > 0 ? value : "";
    }

    return value;
  };

  function regexFromString(inputstring) {
    return new RegExp("^" + inputstring + "$");
  }
  /**
   * Thanks to Jason Bunting via StackOverflow.com
   *
   * http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string#answer-359910
   * Short link: http://tinyurl.com/executeFunctionByName
  **/


  function executeFunctionByName(functionName, context
  /*, args*/
  ) {
    var args = Array.prototype.slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();

    for (var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }

    return context[func].apply(this, args);
  }

  $.fn.jqBootstrapValidation = function (method) {
    if (defaults.methods[method]) {
      return defaults.methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (_typeof(method) === 'object' || !method) {
      return defaults.methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.jqBootstrapValidation');
      return null;
    }
  };

  $.jqBootstrapValidation = function (options) {
    $(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments);
  };
})(jQuery);

},{}],5:[function(require,module,exports){
"use strict";

module.exports = require('./show-more.js');

},{"./show-more.js":6}],6:[function(require,module,exports){
"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/* eslint-disable no-unused-vars */

/* eslint-disable no-console */


var height;

var FadeBar = function FadeBar() {};

document.addEventListener('DOMContentLoaded', FadeBar = function FadeBar() {
  var VERSION = '0.0.1';
  var NAME = 'ShowMore_FadeBar';
  console.log("Now using ".concat(NAME, " version ").concat(VERSION)); // prepare the style tage for some css luvin

  var styleEl = document.createElement('style');
  var headEl = document.head || document.getElementsByTagName('head')[0];
  var options = settings();
  var cssText = FadeBarCSS(options); // console.log(options);

  styleEl.setAttribute('id', 'fbCSS');
  styleEl.textContent = cssText;
  headEl.append(styleEl);

  try {
    var theFaders = Array.prototype.slice.call(document.querySelectorAll('.j-showmore'));
    theFaders.forEach(function (node) {
      height = node.offsetHeight;
      console.log(height);
      var theContainer = node;
      var theFadeBar = document.createElement('div');
      var theShowMoreButton = document.createElement('button');
      theFadeBar.classList.add('j-fader');
      theShowMoreButton.classList.add('j-fader__button');
      theShowMoreButton.innerText = options.fbInitButtonText;
      theFadeBar.appendChild(theShowMoreButton);
      theContainer.appendChild(theFadeBar);
      theShowMoreButton.addEventListener('click', function (ev) {
        ev.preventDefault();
        ev.target.classList.toggle('is-visible');
        ev.target.parentNode.classList.toggle('is-visible');
        ev.target.closest('.j-showmore').classList.toggle('is-visible');

        if (ev.target.classList.contains('is-visible')) {
          ev.target.parentElement.style.height = height;
        }

        if (ev.target.innerText === options.fbInitButtonText) {
          ev.target.innerText = options.fbOpenButtonText;
        } else {
          ev.target.innerText = options.fbInitButtonText;
        }
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

function cs() {
  var allScriptTags = document.querySelector('script#showMoreCS');
}

function defaults() {
  return {
    boxHeight: '300px',
    fbStartColor: 'rgba(0,0,0,.75)',
    fbEndColor: 'rgba(0,0,0,.75)',
    fbBottomBorder: '5px solid #2e2e2e',
    fbInitButtonText: 'Show More',
    fbOpenButtonText: 'Show Less',
    fbButtonPosition: 'center',
    fbButtonBackground: '#000',
    fbButtonBackgroundHover: '#580505;',
    fbButtonBackgroundFocus: '#580505;',
    fbButtonTextColor: '#fff',
    fbButtonTextColorHover: '#fff',
    fbButtonTextColorFocus: '#FFF',
    fbButtonBorderColor: '#2e2e2e',
    fbButtonBorderColorFocus: '#580505',
    fbClassList: 'u-text-center',
    fbBtnClassList: 'btn btn-primary mx-auto'
  };
}

function settings(opts) {
  var ShowMoreSettings = _typeof(null);

  var fbCon = [];

  if (!ShowMoreSettings) {
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
    showMore: 'Show More',
    showLess: 'Show Less',
    positionX: 'center',
    positionY: 'bottom',
    fbButtonPosition: 'center',
    fbButtonBackground: '#f2f2f2'
  };
  var options = Object.assign(defaults(), styles, fbActionBtn, fbCon); // cssBuilder(options);

  return options;
}

var FadeBarCSS = function FadeBarCSS() {}; // document.addEventListener('DOMContentLoaded', FadeBarCSS = () => {


FadeBarCSS = function FadeBarCSS(options) {
  var cssValues = options;
  var fbCSS = ''; // appendCSS(fbCSS)

  return fbCSS;
}; // FadeBar()

},{}],7:[function(require,module,exports){
"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * Swiper 6.1.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 31, 2020
 */


!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  function e(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }

  function t() {
    return (t = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];

        for (var s in i) {
          Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
        }
      }

      return e;
    }).apply(this, arguments);
  }

  function i(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function s(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (a) {
      void 0 === e[a] ? e[a] = t[a] : i(t[a]) && i(e[a]) && Object.keys(t[a]).length > 0 && s(e[a], t[a]);
    });
  }

  var a = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function r() {
    var e = "undefined" != typeof document ? document : {};
    return s(e, a), e;
  }

  var n = {
    document: a,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function l() {
    var e = "undefined" != typeof window ? window : {};
    return s(e, n), e;
  }

  function o(e) {
    return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  function d(e, t) {
    return (d = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  function h() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }

  function p(e, t, i) {
    return (p = h() ? Reflect.construct : function (e, t, i) {
      var s = [null];
      s.push.apply(s, t);
      var a = new (Function.bind.apply(e, s))();
      return i && d(a, i.prototype), a;
    }).apply(null, arguments);
  }

  function u(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (u = function u(e) {
      if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
      var i;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, s);
      }

      function s() {
        return p(e, arguments, o(this).constructor);
      }

      return s.prototype = Object.create(e.prototype, {
        constructor: {
          value: s,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), d(s, e);
    })(e);
  }

  var c = function (e) {
    var t, i;

    function s(t) {
      var i, s, a;
      return i = e.call.apply(e, [this].concat(t)) || this, s = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(i), a = s.__proto__, Object.defineProperty(s, "__proto__", {
        get: function get() {
          return a;
        },
        set: function set(e) {
          a.__proto__ = e;
        }
      }), i;
    }

    return i = e, (t = s).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, s;
  }(u(Array));

  function v(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
    }), t;
  }

  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function m(e, t) {
    var i = l(),
        s = r(),
        a = [];
    if (!t && e instanceof c) return e;
    if (!e) return new c(a);

    if ("string" == typeof e) {
      var n = e.trim();

      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
        var d = s.createElement(o);
        d.innerHTML = n;

        for (var h = 0; h < d.childNodes.length; h += 1) {
          a.push(d.childNodes[h]);
        }
      } else a = function (e, t) {
        if ("string" != typeof e) return [e];

        for (var i = [], s = t.querySelectorAll(e), a = 0; a < s.length; a += 1) {
          i.push(s[a]);
        }

        return i;
      }(e.trim(), t || s);
    } else if (e.nodeType || e === i || e === s) a.push(e);else if (Array.isArray(e)) {
      if (e instanceof c) return e;
      a = e;
    }

    return new c(function (e) {
      for (var t = [], i = 0; i < e.length; i += 1) {
        -1 === t.indexOf(e[i]) && t.push(e[i]);
      }

      return t;
    }(a));
  }

  m.fn = c.prototype;
  var g,
      w,
      b,
      y = {
    addClass: function addClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = v(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).add.apply(t, s);
      }), this;
    },
    removeClass: function removeClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = v(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).remove.apply(t, s);
      }), this;
    },
    hasClass: function hasClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = v(t.map(function (e) {
        return e.split(" ");
      }));
      return f(this, function (e) {
        return s.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function toggleClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = v(t.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        s.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var i = 0; i < this.length; i += 1) {
        if (2 === arguments.length) this[i].setAttribute(e, t);else for (var s in e) {
          this[i][s] = e[s], this[i].setAttribute(s, e[s]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transition = "string" != typeof e ? e + "ms" : e;
      }

      return this;
    },
    on: function on() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];

      function l(e) {
        var t = e.target;

        if (t) {
          var i = e.target.dom7EventData || [];
          if (i.indexOf(e) < 0 && i.unshift(e), m(t).is(a)) r.apply(t, i);else for (var s = m(t).parents(), n = 0; n < s.length; n += 1) {
            m(s[n]).is(a) && r.apply(s[n], i);
          }
        }
      }

      function o(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }

      "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);

      for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
        var u = this[p];
        if (a) for (d = 0; d < h.length; d += 1) {
          var c = h[d];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []), u.dom7LiveListeners[c].push({
            listener: r,
            proxyListener: l
          }), u.addEventListener(c, l, n);
        } else for (d = 0; d < h.length; d += 1) {
          var v = h[d];
          u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
            listener: r,
            proxyListener: o
          }), u.addEventListener(v, o, n);
        }
      }

      return this;
    },
    off: function off() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];
      "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);

      for (var l = s.split(" "), o = 0; o < l.length; o += 1) {
        for (var d = l[o], h = 0; h < this.length; h += 1) {
          var p = this[h],
              u = void 0;
          if (!a && p.dom7Listeners ? u = p.dom7Listeners[d] : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]), u && u.length) for (var c = u.length - 1; c >= 0; c -= 1) {
            var v = u[c];
            r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var e = l(), t = arguments.length, i = new Array(t), s = 0; s < t; s++) {
        i[s] = arguments[s];
      }

      for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) {
        for (var o = a[n], d = 0; d < this.length; d += 1) {
          var h = this[d];

          if (e.CustomEvent) {
            var p = new e.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0
            });
            h.dom7EventData = i.filter(function (e, t) {
              return t > 0;
            }), h.dispatchEvent(p), h.dom7EventData = [], delete h.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = this;
      return e && t.on("transitionend", function i(s) {
        s.target === this && (e.call(this, s), t.off("transitionend", i));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function styles() {
      var e = l();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (this.length > 0) {
        var e = l(),
            t = r(),
            i = this[0],
            s = i.getBoundingClientRect(),
            a = t.body,
            n = i.clientTop || a.clientTop || 0,
            o = i.clientLeft || a.clientLeft || 0,
            d = i === e ? e.scrollY : i.scrollTop,
            h = i === e ? e.scrollX : i.scrollLeft;
        return {
          top: s.top + d - n,
          left: s.left + h - o
        };
      }

      return null;
    },
    css: function css(e, t) {
      var i,
          s = l();

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1) {
            for (var a in e) {
              this[i].style[a] = e[a];
            }
          }

          return this;
        }

        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) {
          this[i].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      return e ? (this.forEach(function (t, i) {
        e.apply(t, [t, i]);
      }), this) : this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t,
          i,
          s = l(),
          a = r(),
          n = this[0];
      if (!n || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (n.matches) return n.matches(e);
        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
        if (n.msMatchesSelector) return n.msMatchesSelector(e);

        for (t = m(e), i = 0; i < t.length; i += 1) {
          if (t[i] === n) return !0;
        }

        return !1;
      }

      if (e === a) return n === a;
      if (e === s) return n === s;

      if (e.nodeType || e instanceof c) {
        for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) {
          if (t[i] === n) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return m([]);

      if (e < 0) {
        var i = t + e;
        return m(i < 0 ? [] : [this[i]]);
      }

      return m([this[e]]);
    },
    append: function append() {
      for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
        e = i < 0 || arguments.length <= i ? void 0 : arguments[i];

        for (var s = 0; s < this.length; s += 1) {
          if ("string" == typeof e) {
            var a = t.createElement("div");

            for (a.innerHTML = e; a.firstChild;) {
              this[s].appendChild(a.firstChild);
            }
          } else if (e instanceof c) for (var n = 0; n < e.length; n += 1) {
            this[s].appendChild(e[n]);
          } else this[s].appendChild(e);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t,
          i,
          s = r();

      for (t = 0; t < this.length; t += 1) {
        if ("string" == typeof e) {
          var a = s.createElement("div");

          for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) {
            this[t].insertBefore(a.childNodes[i], this[t].childNodes[0]);
          }
        } else if (e instanceof c) for (i = 0; i < e.length; i += 1) {
          this[t].insertBefore(e[i], this[t].childNodes[0]);
        } else this[t].insertBefore(e, this[t].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
    },
    nextAll: function nextAll(e) {
      var t = [],
          i = this[0];
      if (!i) return m([]);

      for (; i.nextElementSibling;) {
        var s = i.nextElementSibling;
        e ? m(s).is(e) && t.push(s) : t.push(s), i = s;
      }

      return m(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
      }

      return m([]);
    },
    prevAll: function prevAll(e) {
      var t = [],
          i = this[0];
      if (!i) return m([]);

      for (; i.previousElementSibling;) {
        var s = i.previousElementSibling;
        e ? m(s).is(e) && t.push(s) : t.push(s), i = s;
      }

      return m(t);
    },
    parent: function parent(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
      }

      return m(t);
    },
    parents: function parents(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].parentNode; s;) {
          e ? m(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
        }
      }

      return m(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) {
          t.push(s[a]);
        }
      }

      return m(t);
    },
    children: function children(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].children, a = 0; a < s.length; a += 1) {
          e && !m(s[a]).is(e) || t.push(s[a]);
        }
      }

      return m(t);
    },
    filter: function filter(e) {
      return m(f(this, e));
    },
    remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }

      return this;
    }
  };

  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }

  function x() {
    return Date.now();
  }

  function T(e, t) {
    void 0 === t && (t = "x");
    var i,
        s,
        a,
        r = l(),
        n = r.getComputedStyle(e, null);
    return r.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0;
  }

  function C(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
  }

  function S() {
    for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
      var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (null != i) for (var s = Object.keys(Object(i)), a = 0, r = s.length; a < r; a += 1) {
        var n = s[a],
            l = Object.getOwnPropertyDescriptor(i, n);
        void 0 !== l && l.enumerable && (C(e[n]) && C(i[n]) ? S(e[n], i[n]) : !C(e[n]) && C(i[n]) ? (e[n] = {}, S(e[n], i[n])) : e[n] = i[n]);
      }
    }

    return e;
  }

  function M(e, t) {
    Object.keys(t).forEach(function (i) {
      C(t[i]) && Object.keys(t[i]).forEach(function (s) {
        "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e));
      }), e[i] = t[i];
    });
  }

  function z() {
    return g || (g = function () {
      var e = l(),
          t = r();
      return {
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
        passiveListener: function () {
          var t = !1;

          try {
            var i = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });
            e.addEventListener("testPassiveListener", null, i);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), g;
  }

  function P(e) {
    return void 0 === e && (e = {}), w || (w = function (e) {
      var t = (void 0 === e ? {} : e).userAgent,
          i = z(),
          s = l(),
          a = s.navigator.platform,
          r = t || s.navigator.userAgent,
          n = {
        ios: !1,
        android: !1
      },
          o = s.screen.width,
          d = s.screen.height,
          h = r.match(/(Android);?[\s\/]+([\d.]+)?/),
          p = r.match(/(iPad).*OS\s([\d_]+)/),
          u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
          c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          v = "Win32" === a,
          f = "MacIntel" === a;
      return !p && f && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768"].indexOf(o + "x" + d) >= 0 && ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), f = !1), h && !v && (n.os = "android", n.android = !0), (p || c || u) && (n.os = "ios", n.ios = !0), n;
    }(e)), w;
  }

  function k() {
    return b || (b = function () {
      var e,
          t = l();
      return {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      };
    }()), b;
  }

  Object.keys(y).forEach(function (e) {
    m.fn[e] = y[e];
  });
  var $ = {
    name: "resize",
    create: function create() {
      var e = this;
      S(e, {
        resize: {
          resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          },
          orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function init(e) {
        var t = l();
        t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler);
      },
      destroy: function destroy(e) {
        var t = l();
        t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
      }
    }
  },
      L = {
    attach: function attach(e, t) {
      void 0 === t && (t = {});
      var i = l(),
          s = this,
          a = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
        if (1 !== e.length) {
          var t = function t() {
            s.emit("observerUpdate", e[0]);
          };

          i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0);
        } else s.emit("observerUpdate", e[0]);
      });
      a.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), s.observer.observers.push(a);
    },
    init: function init() {
      if (this.support.observer && this.params.observer) {
        if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) {
          this.observer.attach(e[t]);
        }
        this.observer.attach(this.$el[0], {
          childList: this.params.observeSlideChildren
        }), this.observer.attach(this.$wrapperEl[0], {
          attributes: !1
        });
      }
    },
    destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    }
  },
      I = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create: function create() {
      M(this, {
        observer: t(t({}, L), {}, {
          observers: []
        })
      });
    },
    on: {
      init: function init(e) {
        e.observer.init();
      },
      destroy: function destroy(e) {
        e.observer.destroy();
      }
    }
  };

  function O(e) {
    var t = r(),
        i = l(),
        s = this.touchEventsData,
        a = this.params,
        n = this.touches;

    if (!this.animating || !a.preventInteractionOnTransition) {
      var o = e;
      o.originalEvent && (o = o.originalEvent);
      var d = m(o.target);
      if (("wrapper" !== a.touchEventsTarget || d.closest(this.wrapperEl).length) && (s.isTouchEvent = "touchstart" === o.type, (s.isTouchEvent || !("which" in o) || 3 !== o.which) && !(!s.isTouchEvent && "button" in o && o.button > 0 || s.isTouched && s.isMoved))) if (a.noSwiping && d.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0;else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
        n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
        var h = n.currentX,
            p = n.currentY,
            u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
            c = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;

        if (!u || !(h <= c || h >= i.screen.width - c)) {
          if (S(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), n.startX = h, n.startY = p, s.touchStartTime = x(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
            var v = !0;
            d.is(s.formElements) && (v = !1), t.activeElement && m(t.activeElement).is(s.formElements) && t.activeElement !== d[0] && t.activeElement.blur();
            var f = v && this.allowTouchMove && a.touchStartPreventDefault;
            (a.touchStartForcePreventDefault || f) && o.preventDefault();
          }

          this.emit("touchStart", o);
        }
      }
    }
  }

  function A(e) {
    var t = r(),
        i = this.touchEventsData,
        s = this.params,
        a = this.touches,
        n = this.rtlTranslate,
        l = e;

    if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
      if (!i.isTouchEvent || "touchmove" === l.type) {
        var o = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
            d = "touchmove" === l.type ? o.pageX : l.pageX,
            h = "touchmove" === l.type ? o.pageY : l.pageY;
        if (l.preventedByNestedSwiper) return a.startX = d, void (a.startY = h);
        if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (S(a, {
          startX: d,
          startY: h,
          currentX: d,
          currentY: h
        }), i.touchStartTime = x()));
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (this.isVertical()) {
          if (h < a.startY && this.translate <= this.maxTranslate() || h > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
        } else if (d < a.startX && this.translate <= this.maxTranslate() || d > a.startX && this.translate >= this.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && m(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);

        if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
          a.currentX = d, a.currentY = h;
          var p = a.currentX - a.startX,
              u = a.currentY - a.startY;

          if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(u, 2)) < this.params.threshold)) {
            var c;
            if (void 0 === i.isScrolling) this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + u * u >= 25 && (c = 180 * Math.atan2(Math.abs(u), Math.abs(p)) / Math.PI, i.isScrolling = this.isHorizontal() ? c > s.touchAngle : 90 - c > s.touchAngle);
            if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
              this.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
              var v = this.isHorizontal() ? p : u;
              a.diff = v, v *= s.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
              var f = !0,
                  g = s.resistanceRatio;

              if (s.touchReleaseOnEdges && (g = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, g))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, g))), f && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
              }

              s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                position: a[this.isHorizontal() ? "startX" : "startY"],
                time: i.touchStartTime
              }), i.velocities.push({
                position: a[this.isHorizontal() ? "currentX" : "currentY"],
                time: x()
              })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
  }

  function D(e) {
    var t = this,
        i = t.touchEventsData,
        s = t.params,
        a = t.touches,
        r = t.rtlTranslate,
        n = t.$wrapperEl,
        l = t.slidesGrid,
        o = t.snapGrid,
        d = e;
    if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
    s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var h,
        p = x(),
        u = p - i.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = x(), E(function () {
      t.destroyed || (t.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
      if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
      if (h > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));

      if (s.freeModeMomentum) {
        if (i.velocities.length > 1) {
          var c = i.velocities.pop(),
              v = i.velocities.pop(),
              f = c.position - v.position,
              m = c.time - v.time;
          t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x() - c.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;

        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
        var g = 1e3 * s.freeModeMomentumRatio,
            w = t.velocity * g,
            b = t.translate + w;
        r && (b = -b);
        var y,
            T,
            C = !1,
            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
        if (b < t.maxTranslate()) s.freeModeMomentumBounce ? (b + t.maxTranslate() < -S && (b = t.maxTranslate() - S), y = t.maxTranslate(), C = !0, i.allowMomentumBounce = !0) : b = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);else if (b > t.minTranslate()) s.freeModeMomentumBounce ? (b - t.minTranslate() > S && (b = t.minTranslate() + S), y = t.minTranslate(), C = !0, i.allowMomentumBounce = !0) : b = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);else if (s.freeModeSticky) {
          for (var M, z = 0; z < o.length; z += 1) {
            if (o[z] > -b) {
              M = z;
              break;
            }
          }

          b = -(b = Math.abs(o[M] - b) < Math.abs(o[M - 1] - b) || "next" === t.swipeDirection ? o[M] : o[M - 1]);
        }

        if (T && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) {
          if (g = r ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity), s.freeModeSticky) {
            var P = Math.abs((r ? -b : b) - t.translate),
                k = t.slidesSizesGrid[t.activeIndex];
            g = P < k ? s.speed : P < 2 * k ? 1.5 * s.speed : 2.5 * s.speed;
          }
        } else if (s.freeModeSticky) return void t.slideToClosest();

        s.freeModeMomentumBounce && C ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
          t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout(function () {
            t.setTranslate(y), n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            });
          }, 0));
        })) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses();
      } else if (s.freeModeSticky) return void t.slideToClosest();

      (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    } else {
      for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
        var O = I < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== l[I + O] ? h >= l[I] && h < l[I + O] && ($ = I, L = l[I + O] - l[I]) : h >= l[I] && ($ = I, L = l[l.length - 1] - l[l.length - 2]);
      }

      var A = (h - l[$]) / L,
          D = $ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;

      if (u > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (A >= s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)), "prev" === t.swipeDirection && (A > 1 - s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($) : ("next" === t.swipeDirection && t.slideTo($ + D), "prev" === t.swipeDirection && t.slideTo($));
      }
    }
  }

  function G() {
    var e = this.params,
        t = this.el;

    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
          s = this.allowSlidePrev,
          a = this.snapGrid;
      this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
    }
  }

  function N(e) {
    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }

  function B() {
    var e = this.wrapperEl,
        t = this.rtlTranslate;
    this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
    var i = this.maxTranslate() - this.minTranslate();
    (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
  }

  var H = !1;

  function X() {}

  var Y = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: .02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !1,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    watchSlidesVisibility: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  },
      V = {
    modular: {
      useParams: function useParams(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i];
          s.params && S(e, s.params);
        });
      },
      useModules: function useModules(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i],
              a = e[i] || {};
          s.on && t.on && Object.keys(s.on).forEach(function (e) {
            t.on(e, s.on[e]);
          }), s.create && s.create.bind(t)(a);
        });
      }
    },
    eventsEmitter: {
      on: function on(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
          s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
        }), s;
      },
      once: function once(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;

        function a() {
          s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;

          for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) {
            r[n] = arguments[n];
          }

          t.apply(s, r);
        }

        return a.__emitterProxy = t, s.on(e, a, i);
      },
      onAny: function onAny(e, t) {
        if ("function" != typeof e) return this;
        var i = t ? "unshift" : "push";
        return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this;
      },
      offAny: function offAny(e) {
        if (!this.eventsAnyListeners) return this;
        var t = this.eventsAnyListeners.indexOf(e);
        return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
      },
      off: function off(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function (e) {
          void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(function (s, a) {
            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1);
          });
        }), i) : i;
      },
      emit: function emit() {
        var e,
            t,
            i,
            s = this;
        if (!s.eventsListeners) return s;

        for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) {
          r[n] = arguments[n];
        }

        "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), i = s) : (e = r[0].events, t = r[0].data, i = r[0].context || s), t.unshift(i);
        var l = Array.isArray(e) ? e : e.split(" ");
        return l.forEach(function (e) {
          if (s.eventsListeners && s.eventsListeners[e]) {
            var a = [];
            s.eventsListeners[e].forEach(function (e) {
              a.push(e);
            }), a.forEach(function (e) {
              e.apply(i, t);
            });
          }
        }), s;
      }
    },
    update: {
      updateSize: function updateSize() {
        var e,
            t,
            i = this.$el;
        e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.width ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), S(this, {
          width: e,
          height: t,
          size: this.isHorizontal() ? e : t
        }));
      },
      updateSlides: function updateSlides() {
        var e = l(),
            t = this.params,
            i = this.$wrapperEl,
            s = this.size,
            a = this.rtlTranslate,
            r = this.wrongRTL,
            n = this.virtual && t.virtual.enabled,
            o = n ? this.virtual.slides.length : this.slides.length,
            d = i.children("." + this.params.slideClass),
            h = n ? this.virtual.slides.length : d.length,
            p = [],
            u = [],
            c = [];

        function v(e, i) {
          return !t.cssMode || i !== d.length - 1;
        }

        var f = t.slidesOffsetBefore;
        "function" == typeof f && (f = t.slidesOffsetBefore.call(this));
        var m = t.slidesOffsetAfter;
        "function" == typeof m && (m = t.slidesOffsetAfter.call(this));
        var g = this.snapGrid.length,
            w = this.snapGrid.length,
            b = t.spaceBetween,
            y = -f,
            E = 0,
            x = 0;

        if (void 0 !== s) {
          var T, C;
          "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), this.virtualSize = -b, a ? d.css({
            marginLeft: "",
            marginTop: ""
          }) : d.css({
            marginRight: "",
            marginBottom: ""
          }), t.slidesPerColumn > 1 && (T = Math.floor(h / t.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));

          for (var M, z = t.slidesPerColumn, P = T / z, k = Math.floor(h / t.slidesPerColumn), $ = 0; $ < h; $ += 1) {
            C = 0;
            var L = d.eq($);

            if (t.slidesPerColumn > 1) {
              var I = void 0,
                  O = void 0,
                  A = void 0;

              if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                var D = Math.floor($ / (t.slidesPerGroup * t.slidesPerColumn)),
                    G = $ - t.slidesPerColumn * t.slidesPerGroup * D,
                    N = 0 === D ? t.slidesPerGroup : Math.min(Math.ceil((h - D * z * t.slidesPerGroup) / z), t.slidesPerGroup);
                I = (O = G - (A = Math.floor(G / N)) * N + D * t.slidesPerGroup) + A * T / z, L.css({
                  "-webkit-box-ordinal-group": I,
                  "-moz-box-ordinal-group": I,
                  "-ms-flex-order": I,
                  "-webkit-order": I,
                  order: I
                });
              } else "column" === t.slidesPerColumnFill ? (A = $ - (O = Math.floor($ / z)) * z, (O > k || O === k && A === z - 1) && (A += 1) >= z && (A = 0, O += 1)) : O = $ - (A = Math.floor($ / P)) * P;

              L.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== A && t.spaceBetween && t.spaceBetween + "px");
            }

            if ("none" !== L.css("display")) {
              if ("auto" === t.slidesPerView) {
                var B = e.getComputedStyle(L[0], null),
                    H = L[0].style.transform,
                    X = L[0].style.webkitTransform;
                if (H && (L[0].style.transform = "none"), X && (L[0].style.webkitTransform = "none"), t.roundLengths) C = this.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);else if (this.isHorizontal()) {
                  var Y = parseFloat(B.getPropertyValue("width") || 0),
                      V = parseFloat(B.getPropertyValue("padding-left") || 0),
                      F = parseFloat(B.getPropertyValue("padding-right") || 0),
                      W = parseFloat(B.getPropertyValue("margin-left") || 0),
                      R = parseFloat(B.getPropertyValue("margin-right") || 0),
                      q = B.getPropertyValue("box-sizing");
                  C = q && "border-box" === q ? Y + W + R : Y + V + F + W + R;
                } else {
                  var j = parseFloat(B.getPropertyValue("height") || 0),
                      _ = parseFloat(B.getPropertyValue("padding-top") || 0),
                      U = parseFloat(B.getPropertyValue("padding-bottom") || 0),
                      K = parseFloat(B.getPropertyValue("margin-top") || 0),
                      Z = parseFloat(B.getPropertyValue("margin-bottom") || 0),
                      J = B.getPropertyValue("box-sizing");

                  C = J && "border-box" === J ? j + K + Z : j + _ + U + K + Z;
                }
                H && (L[0].style.transform = H), X && (L[0].style.webkitTransform = X), t.roundLengths && (C = Math.floor(C));
              } else C = (s - (t.slidesPerView - 1) * b) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), d[$] && (this.isHorizontal() ? d[$].style.width = C + "px" : d[$].style.height = C + "px");

              d[$] && (d[$].swiperSlideSize = C), c.push(C), t.centeredSlides ? (y = y + C / 2 + E / 2 + b, 0 === E && 0 !== $ && (y = y - s / 2 - b), 0 === $ && (y = y - s / 2 - b), Math.abs(y) < .001 && (y = 0), t.roundLengths && (y = Math.floor(y)), x % t.slidesPerGroup == 0 && p.push(y), u.push(y)) : (t.roundLengths && (y = Math.floor(y)), (x - Math.min(this.params.slidesPerGroupSkip, x)) % this.params.slidesPerGroup == 0 && p.push(y), u.push(y), y = y + C + b), this.virtualSize += C + b, E = C, x += 1;
            }
          }

          if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }), t.setWrapperSize && (this.isHorizontal() ? i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }) : i.css({
            height: this.virtualSize + t.spaceBetween + "px"
          })), t.slidesPerColumn > 1 && (this.virtualSize = (C + t.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }) : i.css({
            height: this.virtualSize + t.spaceBetween + "px"
          }), t.centeredSlides)) {
            M = [];

            for (var Q = 0; Q < p.length; Q += 1) {
              var ee = p[Q];
              t.roundLengths && (ee = Math.floor(ee)), p[Q] < this.virtualSize + p[0] && M.push(ee);
            }

            p = M;
          }

          if (!t.centeredSlides) {
            M = [];

            for (var te = 0; te < p.length; te += 1) {
              var ie = p[te];
              t.roundLengths && (ie = Math.floor(ie)), p[te] <= this.virtualSize - s && M.push(ie);
            }

            p = M, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s);
          }

          if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
            marginLeft: b + "px"
          }) : d.filter(v).css({
            marginRight: b + "px"
          }) : d.filter(v).css({
            marginBottom: b + "px"
          })), t.centeredSlides && t.centeredSlidesBounds) {
            var se = 0;
            c.forEach(function (e) {
              se += e + (t.spaceBetween ? t.spaceBetween : 0);
            });
            var ae = (se -= t.spaceBetween) - s;
            p = p.map(function (e) {
              return e < 0 ? -f : e > ae ? ae + m : e;
            });
          }

          if (t.centerInsufficientSlides) {
            var re = 0;

            if (c.forEach(function (e) {
              re += e + (t.spaceBetween ? t.spaceBetween : 0);
            }), (re -= t.spaceBetween) < s) {
              var ne = (s - re) / 2;
              p.forEach(function (e, t) {
                p[t] = e - ne;
              }), u.forEach(function (e, t) {
                u[t] = e + ne;
              });
            }
          }

          S(this, {
            slides: d,
            snapGrid: p,
            slidesGrid: u,
            slidesSizesGrid: c
          }), h !== o && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== w && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset();
        }
      },
      updateAutoHeight: function updateAutoHeight(e) {
        var t,
            i = [],
            s = 0;

        if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) {
          if (this.params.centeredSlides) this.visibleSlides.each(function (e) {
            i.push(e);
          });else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
            var a = this.activeIndex + t;
            if (a > this.slides.length) break;
            i.push(this.slides.eq(a)[0]);
          }
        } else i.push(this.slides.eq(this.activeIndex)[0]);

        for (t = 0; t < i.length; t += 1) {
          if (void 0 !== i[t]) {
            var r = i[t].offsetHeight;
            s = r > s ? r : s;
          }
        }

        s && this.$wrapperEl.css("height", s + "px");
      },
      updateSlidesOffset: function updateSlidesOffset() {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        }
      },
      updateSlidesProgress: function updateSlidesProgress(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this.params,
            i = this.slides,
            s = this.rtlTranslate;

        if (0 !== i.length) {
          void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
          var a = -e;
          s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];

          for (var r = 0; r < i.length; r += 1) {
            var n = i[r],
                l = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);

            if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
              var o = -(a - n.swiperSlideOffset),
                  d = o + this.slidesSizesGrid[r];
              (o >= 0 && o < this.size - 1 || d > 1 && d <= this.size || o <= 0 && d >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass));
            }

            n.progress = s ? -l : l;
          }

          this.visibleSlides = m(this.visibleSlides);
        }
      },
      updateProgress: function updateProgress(e) {
        if (void 0 === e) {
          var t = this.rtlTranslate ? -1 : 1;
          e = this && this.translate && this.translate * t || 0;
        }

        var i = this.params,
            s = this.maxTranslate() - this.minTranslate(),
            a = this.progress,
            r = this.isBeginning,
            n = this.isEnd,
            l = r,
            o = n;
        0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), S(this, {
          progress: a,
          isBeginning: r,
          isEnd: n
        }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), n && !o && this.emit("reachEnd toEdge"), (l && !r || o && !n) && this.emit("fromEdge"), this.emit("progress", a);
      },
      updateSlidesClasses: function updateSlidesClasses() {
        var e,
            t = this.slides,
            i = this.params,
            s = this.$wrapperEl,
            a = this.activeIndex,
            r = this.realIndex,
            n = this.virtual && i.virtual.enabled;
        t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
        var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
        i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
        var o = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
        i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses();
      },
      updateActiveIndex: function updateActiveIndex(e) {
        var t,
            i = this.rtlTranslate ? this.translate : -this.translate,
            s = this.slidesGrid,
            a = this.snapGrid,
            r = this.params,
            n = this.activeIndex,
            l = this.realIndex,
            o = this.snapIndex,
            d = e;

        if (void 0 === d) {
          for (var h = 0; h < s.length; h += 1) {
            void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
          }

          r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }

        if (a.indexOf(i) >= 0) t = a.indexOf(i);else {
          var p = Math.min(r.slidesPerGroupSkip, d);
          t = p + Math.floor((d - p) / r.slidesPerGroup);
        }

        if (t >= a.length && (t = a.length - 1), d !== n) {
          var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
          S(this, {
            snapIndex: t,
            realIndex: u,
            previousIndex: n,
            activeIndex: d
          }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
        } else t !== o && (this.snapIndex = t, this.emit("snapIndexChange"));
      },
      updateClickedSlide: function updateClickedSlide(e) {
        var t = this.params,
            i = m(e.target).closest("." + t.slideClass)[0],
            s = !1;
        if (i) for (var a = 0; a < this.slides.length; a += 1) {
          this.slides[a] === i && (s = !0);
        }
        if (!i || !s) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
        this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(m(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = m(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
      }
    },
    translate: {
      getTranslate: function getTranslate(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this.params,
            i = this.rtlTranslate,
            s = this.translate,
            a = this.$wrapperEl;
        if (t.virtualTranslate) return i ? -s : s;
        if (t.cssMode) return s;
        var r = T(a[0], e);
        return i && (r = -r), r || 0;
      },
      setTranslate: function setTranslate(e, t) {
        var i = this.rtlTranslate,
            s = this.params,
            a = this.$wrapperEl,
            r = this.wrapperEl,
            n = this.progress,
            l = 0,
            o = 0;
        this.isHorizontal() ? l = i ? -e : e : o = e, s.roundLengths && (l = Math.floor(l), o = Math.floor(o)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -o : s.virtualTranslate || a.transform("translate3d(" + l + "px, " + o + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : o;
        var d = this.maxTranslate() - this.minTranslate();
        (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
      },
      minTranslate: function minTranslate() {
        return -this.snapGrid[0];
      },
      maxTranslate: function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function translateTo(e, t, i, s, a) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
        var r = this,
            n = r.params,
            l = r.wrapperEl;
        if (r.animating && n.preventInteractionOnTransition) return !1;
        var o,
            d = r.minTranslate(),
            h = r.maxTranslate();

        if (o = s && e > d ? d : s && e < h ? h : e, r.updateProgress(o), n.cssMode) {
          var p,
              u = r.isHorizontal();
          if (0 === t) l[u ? "scrollLeft" : "scrollTop"] = -o;else if (l.scrollTo) l.scrollTo(((p = {})[u ? "left" : "top"] = -o, p.behavior = "smooth", p));else l[u ? "scrollLeft" : "scrollTop"] = -o;
          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
      }
    },
    transition: {
      setTransition: function setTransition(e, t) {
        this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart(e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
            s = this.params,
            a = this.previousIndex;

        if (!s.cssMode) {
          s.autoHeight && this.updateAutoHeight();
          var r = t;

          if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
            if ("reset" === r) return void this.emit("slideResetTransitionStart");
            this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
          }
        }
      },
      transitionEnd: function transitionEnd(e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
            s = this.previousIndex,
            a = this.params;

        if (this.animating = !1, !a.cssMode) {
          this.setTransition(0);
          var r = t;

          if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
            if ("reset" === r) return void this.emit("slideResetTransitionEnd");
            this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
          }
        }
      }
    },
    slide: {
      slideTo: function slideTo(e, t, i, s) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
        var a = this,
            r = e;
        r < 0 && (r = 0);
        var n = a.params,
            l = a.snapGrid,
            o = a.slidesGrid,
            d = a.previousIndex,
            h = a.activeIndex,
            p = a.rtlTranslate,
            u = a.wrapperEl;
        if (a.animating && n.preventInteractionOnTransition) return !1;
        var c = Math.min(a.params.slidesPerGroupSkip, r),
            v = c + Math.floor((r - c) / a.params.slidesPerGroup);
        v >= l.length && (v = l.length - 1), (h || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
        var f,
            m = -l[v];
        if (a.updateProgress(m), n.normalizeSlideIndex) for (var g = 0; g < o.length; g += 1) {
          -Math.floor(100 * m) >= Math.floor(100 * o[g]) && (r = g);
        }

        if (a.initialized && r !== h) {
          if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
          if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (h || 0) !== r) return !1;
        }

        if (f = r > h ? "next" : r < h ? "prev" : "reset", p && -m === a.translate || !p && m === a.translate) return a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1;

        if (n.cssMode) {
          var w,
              b = a.isHorizontal(),
              y = -m;
          if (p && (y = u.scrollWidth - u.offsetWidth - y), 0 === t) u[b ? "scrollLeft" : "scrollTop"] = y;else if (u.scrollTo) u.scrollTo(((w = {})[b ? "left" : "top"] = y, w.behavior = "smooth", w));else u[b ? "scrollLeft" : "scrollTop"] = y;
          return !0;
        }

        return 0 === t ? (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.transitionEnd(i, f)) : (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
          a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, f));
        }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0;
      },
      slideToLoop: function slideToLoop(e, t, i, s) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
        var a = e;
        return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
      },
      slideNext: function slideNext(e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var s = this.params,
            a = this.animating,
            r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;

        if (s.loop) {
          if (a && s.loopPreventsSlide) return !1;
          this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
        }

        return this.slideTo(this.activeIndex + r, e, t, i);
      },
      slidePrev: function slidePrev(e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var s = this.params,
            a = this.animating,
            r = this.snapGrid,
            n = this.slidesGrid,
            l = this.rtlTranslate;

        if (s.loop) {
          if (a && s.loopPreventsSlide) return !1;
          this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
        }

        function o(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        var d,
            h = o(l ? this.translate : -this.translate),
            p = r.map(function (e) {
          return o(e);
        }),
            u = (r[p.indexOf(h)], r[p.indexOf(h) - 1]);
        return void 0 === u && s.cssMode && r.forEach(function (e) {
          !u && h >= e && (u = e);
        }), void 0 !== u && (d = n.indexOf(u)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
      },
      slideReset: function slideReset(e, t, i) {
        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
      },
      slideToClosest: function slideToClosest(e, t, i, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
        var a = this.activeIndex,
            r = Math.min(this.params.slidesPerGroupSkip, a),
            n = r + Math.floor((a - r) / this.params.slidesPerGroup),
            l = this.rtlTranslate ? this.translate : -this.translate;

        if (l >= this.snapGrid[n]) {
          var o = this.snapGrid[n];
          l - o > (this.snapGrid[n + 1] - o) * s && (a += this.params.slidesPerGroup);
        } else {
          var d = this.snapGrid[n - 1];
          l - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup);
        }

        return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i);
      },
      slideToClickedSlide: function slideToClickedSlide() {
        var e,
            t = this,
            i = t.params,
            s = t.$wrapperEl,
            a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
            r = t.clickedIndex;

        if (i.loop) {
          if (t.animating) return;
          e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(r);
          })) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(r);
          })) : t.slideTo(r);
        } else t.slideTo(r);
      }
    },
    loop: {
      loopCreate: function loopCreate() {
        var e = this,
            t = r(),
            i = e.params,
            s = e.$wrapperEl;
        s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
        var a = s.children("." + i.slideClass);

        if (i.loopFillGroupWithBlank) {
          var n = i.slidesPerGroup - a.length % i.slidesPerGroup;

          if (n !== i.slidesPerGroup) {
            for (var l = 0; l < n; l += 1) {
              var o = m(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
              s.append(o);
            }

            a = s.children("." + i.slideClass);
          }
        }

        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
        var d = [],
            h = [];
        a.each(function (t, i) {
          var s = m(t);
          i < e.loopedSlides && h.push(t), i < a.length && i >= a.length - e.loopedSlides && d.push(t), s.attr("data-swiper-slide-index", i);
        });

        for (var p = 0; p < h.length; p += 1) {
          s.append(m(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
        }

        for (var u = d.length - 1; u >= 0; u -= 1) {
          s.prepend(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
        }
      },
      loopFix: function loopFix() {
        this.emit("beforeLoopFix");
        var e,
            t = this.activeIndex,
            i = this.slides,
            s = this.loopedSlides,
            a = this.allowSlidePrev,
            r = this.allowSlideNext,
            n = this.snapGrid,
            l = this.rtlTranslate;
        this.allowSlidePrev = !0, this.allowSlideNext = !0;
        var o = -n[t] - this.getTranslate();
        if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);else if (t >= i.length - s) {
          e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);
        }
        this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix");
      },
      loopDestroy: function loopDestroy() {
        var e = this.$wrapperEl,
            t = this.params,
            i = this.slides;
        e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
      }
    },
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
          var t = this.el;
          t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
        }
      },
      unsetGrabCursor: function unsetGrabCursor() {
        this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
      }
    },
    manipulation: {
      appendSlide: function appendSlide(e) {
        var t = this.$wrapperEl,
            i = this.params;
        if (i.loop && this.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
          e[s] && t.append(e[s]);
        } else t.append(e);
        i.loop && this.loopCreate(), i.observer && this.support.observer || this.update();
      },
      prependSlide: function prependSlide(e) {
        var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
        t.loop && this.loopDestroy();
        var a = s + 1;

        if ("object" == _typeof(e) && "length" in e) {
          for (var r = 0; r < e.length; r += 1) {
            e[r] && i.prepend(e[r]);
          }

          a = s + e.length;
        } else i.prepend(e);

        t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), this.slideTo(a, 0, !1);
      },
      addSlide: function addSlide(e, t) {
        var i = this.$wrapperEl,
            s = this.params,
            a = this.activeIndex;
        s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
        var r = this.slides.length;
        if (e <= 0) this.prependSlide(t);else if (e >= r) this.appendSlide(t);else {
          for (var n = a > e ? a + 1 : a, l = [], o = r - 1; o >= e; o -= 1) {
            var d = this.slides.eq(o);
            d.remove(), l.unshift(d);
          }

          if ("object" == _typeof(t) && "length" in t) {
            for (var h = 0; h < t.length; h += 1) {
              t[h] && i.append(t[h]);
            }

            n = a > e ? a + t.length : a;
          } else i.append(t);

          for (var p = 0; p < l.length; p += 1) {
            i.append(l[p]);
          }

          s.loop && this.loopCreate(), s.observer && this.support.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
        }
      },
      removeSlide: function removeSlide(e) {
        var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
        t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
        var a,
            r = s;

        if ("object" == _typeof(e) && "length" in e) {
          for (var n = 0; n < e.length; n += 1) {
            a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
          }

          r = Math.max(r, 0);
        } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);

        t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
      },
      removeAllSlides: function removeAllSlides() {
        for (var e = [], t = 0; t < this.slides.length; t += 1) {
          e.push(t);
        }

        this.removeSlide(e);
      }
    },
    events: {
      attachEvents: function attachEvents() {
        var e = r(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            n = this.device,
            l = this.support;
        this.onTouchStart = O.bind(this), this.onTouchMove = A.bind(this), this.onTouchEnd = D.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = N.bind(this);
        var o = !!t.nested;
        if (!l.touch && l.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, o), e.addEventListener(i.end, this.onTouchEnd, !1);else {
          if (l.touch) {
            var d = !("touchstart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.addEventListener(i.start, this.onTouchStart, d), s.addEventListener(i.move, this.onTouchMove, l.passiveListener ? {
              passive: !1,
              capture: o
            } : o), s.addEventListener(i.end, this.onTouchEnd, d), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d), H || (e.addEventListener("touchstart", X), H = !0);
          }

          (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, o), e.addEventListener("mouseup", this.onTouchEnd, !1));
        }
        (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0);
      },
      detachEvents: function detachEvents() {
        var e = r(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            n = this.device,
            l = this.support,
            o = !!t.nested;
        if (!l.touch && l.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, o), e.removeEventListener(i.end, this.onTouchEnd, !1);else {
          if (l.touch) {
            var d = !("onTouchStart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.removeEventListener(i.start, this.onTouchStart, d), s.removeEventListener(i.move, this.onTouchMove, o), s.removeEventListener(i.end, this.onTouchEnd, d), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d);
          }

          (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, o), e.removeEventListener("mouseup", this.onTouchEnd, !1));
        }
        (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G);
      }
    },
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides,
            s = void 0 === i ? 0 : i,
            a = this.params,
            r = this.$el,
            n = a.breakpoints;

        if (n && (!n || 0 !== Object.keys(n).length)) {
          var l = this.getBreakpoint(n);

          if (l && this.currentBreakpoint !== l) {
            var o = l in n ? n[l] : void 0;
            o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
              var t = o[e];
              void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
            });
            var d = o || this.originalParams,
                h = a.slidesPerColumn > 1,
                p = d.slidesPerColumn > 1;
            h && !p ? (r.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), this.emitContainerClasses()) : !h && p && (r.addClass(a.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && r.addClass(a.containerModifierClass + "multirow-column"), this.emitContainerClasses());
            var u = d.direction && d.direction !== a.direction,
                c = a.loop && (d.slidesPerView !== a.slidesPerView || u);
            u && t && this.changeDirection(), S(this.params, d), S(this, {
              allowTouchMove: this.params.allowTouchMove,
              allowSlideNext: this.params.allowSlideNext,
              allowSlidePrev: this.params.allowSlidePrev
            }), this.currentBreakpoint = l, c && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", d);
          }
        }
      },
      getBreakpoint: function getBreakpoint(e) {
        var t = l();

        if (e) {
          var i = !1,
              s = Object.keys(e).map(function (e) {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              var i = parseFloat(e.substr(1));
              return {
                value: t.innerHeight * i,
                point: e
              };
            }

            return {
              value: e,
              point: e
            };
          });
          s.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });

          for (var a = 0; a < s.length; a += 1) {
            var r = s[a],
                n = r.point;
            r.value <= t.innerWidth && (i = n);
          }

          return i || "max";
        }
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this.params,
            t = this.isLocked,
            i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
        e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update());
      }
    },
    classes: {
      addClasses: function addClasses() {
        var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = this.device,
            r = [];
        r.push("initialized"), r.push(t.direction), t.freeMode && r.push("free-mode"), t.autoHeight && r.push("autoheight"), i && r.push("rtl"), t.slidesPerColumn > 1 && (r.push("multirow"), "column" === t.slidesPerColumnFill && r.push("multirow-column")), a.android && r.push("android"), a.ios && r.push("ios"), t.cssMode && r.push("css-mode"), r.forEach(function (i) {
          e.push(t.containerModifierClass + i);
        }), s.addClass(e.join(" ")), this.emitContainerClasses();
      },
      removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      }
    },
    images: {
      loadImage: function loadImage(e, t, i, s, a, r) {
        var n,
            o = l();

        function d() {
          r && r();
        }

        m(e).parent("picture")[0] || e.complete && a ? d() : t ? ((n = new o.Image()).onload = d, n.onerror = d, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : d();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
          var s = e.imagesToLoad[i];
          e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      F = {},
      W = function () {
    function t() {
      for (var e, i, s = arguments.length, a = new Array(s), r = 0; r < s; r++) {
        a[r] = arguments[r];
      }

      1 === a.length && a[0].constructor && a[0].constructor === Object ? i = a[0] : (e = a[0], i = a[1]), i || (i = {}), i = S({}, i), e && !i.el && (i.el = e);
      var n = this;
      n.support = z(), n.device = P({
        userAgent: i.userAgent
      }), n.browser = k(), n.eventsListeners = {}, n.eventsAnyListeners = [], Object.keys(V).forEach(function (e) {
        Object.keys(V[e]).forEach(function (i) {
          t.prototype[i] || (t.prototype[i] = V[e][i]);
        });
      }), void 0 === n.modules && (n.modules = {}), Object.keys(n.modules).forEach(function (e) {
        var t = n.modules[e];

        if (t.params) {
          var s = Object.keys(t.params)[0],
              a = t.params[s];
          if ("object" != _typeof(a) || null === a) return;
          if (!(s in i) || !("enabled" in a)) return;
          !0 === i[s] && (i[s] = {
            enabled: !0
          }), "object" != _typeof(i[s]) || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = {
            enabled: !1
          });
        }
      });
      var l = S({}, Y);
      n.useParams(l), n.params = S({}, l, F, i), n.originalParams = S({}, n.params), n.passedParams = S({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach(function (e) {
        n.on(e, n.params.on[e]);
      }), n.$ = m;
      var o = m(n.params.el);

      if (e = o[0]) {
        if (o.length > 1) {
          var d = [];
          return o.each(function (e) {
            var s = S({}, i, {
              el: e
            });
            d.push(new t(s));
          }), d;
        }

        var h, p, u;
        return e.swiper = n, e && e.shadowRoot && e.shadowRoot.querySelector ? (h = m(e.shadowRoot.querySelector("." + n.params.wrapperClass))).children = function (e) {
          return o.children(e);
        } : h = o.children("." + n.params.wrapperClass), S(n, {
          $el: o,
          el: e,
          $wrapperEl: h,
          wrapperEl: h[0],
          classNames: [],
          slides: m(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function isHorizontal() {
            return "horizontal" === n.params.direction;
          },
          isVertical: function isVertical() {
            return "vertical" === n.params.direction;
          },
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction"),
          rtlTranslate: "horizontal" === n.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction")),
          wrongRTL: "-webkit-box" === h.css("display"),
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: n.params.allowSlideNext,
          allowSlidePrev: n.params.allowSlidePrev,
          touchEvents: (p = ["touchstart", "touchmove", "touchend", "touchcancel"], u = ["mousedown", "mousemove", "mouseup"], n.support.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]), n.touchEventsTouch = {
            start: p[0],
            move: p[1],
            end: p[2],
            cancel: p[3]
          }, n.touchEventsDesktop = {
            start: u[0],
            move: u[1],
            end: u[2]
          }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements: "input, select, option, textarea, button, video, label",
            lastClickTime: x(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: n.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), n.useModules(), n.emit("_swiper"), n.params.init && n.init(), n;
      }
    }

    var i,
        s,
        a,
        r = t.prototype;
    return r.emitContainerClasses = function () {
      var e = this;

      if (e.params._emitClasses && e.el) {
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, r.emitSlidesClasses = function () {
      var e = this;
      e.params._emitClasses && e.el && e.slides.each(function (t) {
        var i = t.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass);
        });
        e.emit("_slideClass", t, i.join(" "));
      });
    }, r.slidesPerViewDynamic = function () {
      var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          s = this.size,
          a = this.activeIndex,
          r = 1;

      if (e.centeredSlides) {
        for (var n, l = t[a].swiperSlideSize, o = a + 1; o < t.length; o += 1) {
          t[o] && !n && (r += 1, (l += t[o].swiperSlideSize) > s && (n = !0));
        }

        for (var d = a - 1; d >= 0; d -= 1) {
          t[d] && !n && (r += 1, (l += t[d].swiperSlideSize) > s && (n = !0));
        }
      } else for (var h = a + 1; h < t.length; h += 1) {
        i[h] - i[a] < s && (r += 1);
      }

      return r;
    }, r.update = function () {
      var e = this;

      if (e && !e.destroyed) {
        var t = e.snapGrid,
            i = e.params;
        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }

      function s() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
    }, r.changeDirection = function (e, t) {
      void 0 === t && (t = !0);
      var i = this.params.direction;
      return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.emitContainerClasses(), this.params.direction = e, this.slides.each(function (t) {
        "vertical" === e ? t.style.width = "" : t.style.height = "";
      }), this.emit("changeDirection"), t && this.update()), this;
    }, r.init = function () {
      this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"));
    }, r.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      var i,
          s = this,
          a = s.params,
          r = s.$el,
          n = s.$wrapperEl,
          l = s.slides;
      return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
        s.off(e);
      }), !1 !== e && (s.$el[0].swiper = null, i = s, Object.keys(i).forEach(function (e) {
        try {
          i[e] = null;
        } catch (e) {}

        try {
          delete i[e];
        } catch (e) {}
      })), s.destroyed = !0), null;
    }, t.extendDefaults = function (e) {
      S(F, e);
    }, t.installModule = function (e) {
      t.prototype.modules || (t.prototype.modules = {});
      var i = e.name || Object.keys(t.prototype.modules).length + "_" + x();
      t.prototype.modules[i] = e;
    }, t.use = function (e) {
      return Array.isArray(e) ? (e.forEach(function (e) {
        return t.installModule(e);
      }), t) : (t.installModule(e), t);
    }, i = t, a = [{
      key: "extendedDefaults",
      get: function get() {
        return F;
      }
    }, {
      key: "defaults",
      get: function get() {
        return Y;
      }
    }], (s = null) && e(i.prototype, s), a && e(i, a), t;
  }();

  W.use([$, I]);
  var R = {
    update: function update(e) {
      var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          h = d.from,
          p = d.to,
          u = d.slides,
          c = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
      t.updateActiveIndex();
      var m,
          g,
          w,
          b = t.activeIndex || 0;
      m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(s / 2) + a + o, w = Math.floor(s / 2) + a + l) : (g = s + (a - 1) + o, w = a + l);
      var y = Math.max((b || 0) - w, 0),
          E = Math.min((b || 0) + g, u.length - 1),
          x = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

      function T() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }

      if (S(t.virtual, {
        from: y,
        to: E,
        offset: x,
        slidesGrid: t.slidesGrid
      }), h === y && p === E && !e) return t.slidesGrid !== c && x !== f && t.slides.css(m, x + "px"), void t.updateProgress();
      if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
        offset: x,
        from: y,
        to: E,
        slides: function () {
          for (var e = [], t = y; t <= E; t += 1) {
            e.push(u[t]);
          }

          return e;
        }()
      }), void (t.params.virtual.renderExternalUpdate && T());
      var C = [],
          M = [];
      if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var z = h; z <= p; z += 1) {
        (z < y || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
      }

      for (var P = 0; P < u.length; P += 1) {
        P >= y && P <= E && (void 0 === p || e ? M.push(P) : (P > p && M.push(P), P < h && C.push(P)));
      }

      M.forEach(function (e) {
        t.$wrapperEl.append(v(u[e], e));
      }), C.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(v(u[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T();
    },
    renderSlide: function renderSlide(e, t) {
      var i = this.params.virtual;
      if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
      var s = i.renderSlide ? m(i.renderSlide.call(this, e, t)) : m('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
      return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s;
    },
    appendSlide: function appendSlide(e) {
      if ("object" == _typeof(e) && "length" in e) for (var t = 0; t < e.length; t += 1) {
        e[t] && this.virtual.slides.push(e[t]);
      } else this.virtual.slides.push(e);
      this.virtual.update(!0);
    },
    prependSlide: function prependSlide(e) {
      var t = this.activeIndex,
          i = t + 1,
          s = 1;

      if (Array.isArray(e)) {
        for (var a = 0; a < e.length; a += 1) {
          e[a] && this.virtual.slides.unshift(e[a]);
        }

        i = t + e.length, s = e.length;
      } else this.virtual.slides.unshift(e);

      if (this.params.virtual.cache) {
        var r = this.virtual.cache,
            n = {};
        Object.keys(r).forEach(function (e) {
          var t = r[e],
              i = t.attr("data-swiper-slide-index");
          i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t;
        }), this.virtual.cache = n;
      }

      this.virtual.update(!0), this.slideTo(i, 0);
    },
    removeSlide: function removeSlide(e) {
      if (null != e) {
        var t = this.activeIndex;
        if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) {
          this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
        } else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
        this.virtual.update(!0), this.slideTo(t, 0);
      }
    },
    removeAllSlides: function removeAllSlides() {
      this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
    }
  },
      q = {
    name: "virtual",
    params: {
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    },
    create: function create() {
      M(this, {
        virtual: t(t({}, R), {}, {
          slides: this.params.virtual.slides,
          cache: {}
        })
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if (e.params.virtual.enabled) {
          e.classNames.push(e.params.containerModifierClass + "virtual");
          var t = {
            watchSlidesProgress: !0
          };
          S(e.params, t), S(e.originalParams, t), e.params.initialSlide || e.virtual.update();
        }
      },
      setTranslate: function setTranslate(e) {
        e.params.virtual.enabled && e.virtual.update();
      }
    }
  },
      j = {
    handle: function handle(e) {
      var t = l(),
          i = r(),
          s = this.rtlTranslate,
          a = e;
      a.originalEvent && (a = a.originalEvent);
      var n = a.keyCode || a.charCode,
          o = this.params.keyboard.pageUpDown,
          d = o && 33 === n,
          h = o && 34 === n,
          p = 37 === n,
          u = 39 === n,
          c = 38 === n,
          v = 40 === n;
      if (!this.allowSlideNext && (this.isHorizontal() && u || this.isVertical() && v || h)) return !1;
      if (!this.allowSlidePrev && (this.isHorizontal() && p || this.isVertical() && c || d)) return !1;

      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
        if (this.params.keyboard.onlyInViewport && (d || h || p || u || c || v)) {
          var f = !1;
          if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
          var m = t.innerWidth,
              g = t.innerHeight,
              w = this.$el.offset();
          s && (w.left -= this.$el[0].scrollLeft);

          for (var b = [[w.left, w.top], [w.left + this.width, w.top], [w.left, w.top + this.height], [w.left + this.width, w.top + this.height]], y = 0; y < b.length; y += 1) {
            var E = b[y];
            E[0] >= 0 && E[0] <= m && E[1] >= 0 && E[1] <= g && (f = !0);
          }

          if (!f) return;
        }

        this.isHorizontal() ? ((d || h || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((h || u) && !s || (d || p) && s) && this.slideNext(), ((d || p) && !s || (h || u) && s) && this.slidePrev()) : ((d || h || c || v) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (h || v) && this.slideNext(), (d || c) && this.slidePrev()), this.emit("keyPress", n);
      }
    },
    enable: function enable() {
      var e = r();
      this.keyboard.enabled || (m(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
    },
    disable: function disable() {
      var e = r();
      this.keyboard.enabled && (m(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
    }
  },
      _ = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    },
    create: function create() {
      M(this, {
        keyboard: t({
          enabled: !1
        }, j)
      });
    },
    on: {
      init: function init(e) {
        e.params.keyboard.enabled && e.keyboard.enable();
      },
      destroy: function destroy(e) {
        e.keyboard.enabled && e.keyboard.disable();
      }
    }
  };
  var U = {
    lastScrollTime: x(),
    lastEventBeforeSnap: void 0,
    recentWheelEvents: [],
    event: function event() {
      return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
        var e = r(),
            t = ("onwheel" in e);

        if (!t) {
          var i = e.createElement("div");
          i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
        }

        return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
      }() ? "wheel" : "mousewheel";
    },
    normalize: function normalize(e) {
      var t = 0,
          i = 0,
          s = 0,
          a = 0;
      return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
        spinX: t,
        spinY: i,
        pixelX: s,
        pixelY: a
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      this.mouseEntered = !0;
    },
    handleMouseLeave: function handleMouseLeave() {
      this.mouseEntered = !1;
    },
    handle: function handle(e) {
      var t = e,
          i = this,
          s = i.params.mousewheel;
      i.params.cssMode && t.preventDefault();
      var a = i.$el;
      if ("container" !== i.params.mousewheel.eventsTarget && (a = m(i.params.mousewheel.eventsTarget)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
      t.originalEvent && (t = t.originalEvent);
      var r = 0,
          n = i.rtlTranslate ? -1 : 1,
          l = U.normalize(t);

      if (s.forceToAxis) {
        if (i.isHorizontal()) {
          if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
          r = -l.pixelX * n;
        } else {
          if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
          r = -l.pixelY;
        }
      } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;

      if (0 === r) return !0;

      if (s.invert && (r = -r), i.params.freeMode) {
        var o = {
          time: x(),
          delta: Math.abs(r),
          direction: Math.sign(r)
        },
            d = i.mousewheel.lastEventBeforeSnap,
            h = d && o.time < d.time + 500 && o.delta <= d.delta && o.direction === d.direction;

        if (!h) {
          i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
          var p = i.getTranslate() + r * s.sensitivity,
              u = i.isBeginning,
              c = i.isEnd;

          if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!u && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
            clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
            var v = i.mousewheel.recentWheelEvents;
            v.length >= 15 && v.shift();
            var f = v.length ? v[v.length - 1] : void 0,
                g = v[0];
            if (v.push(o), f && (o.delta > f.delta || o.direction !== f.direction)) v.splice(0);else if (v.length >= 15 && o.time - g.time < 500 && g.delta - o.delta >= 1 && o.delta <= 6) {
              var w = r > 0 ? .8 : .2;
              i.mousewheel.lastEventBeforeSnap = o, v.splice(0), i.mousewheel.timeout = E(function () {
                i.slideToClosest(i.params.speed, !0, void 0, w);
              }, 0);
            }
            i.mousewheel.timeout || (i.mousewheel.timeout = E(function () {
              i.mousewheel.lastEventBeforeSnap = o, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5);
            }, 500));
          }

          if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0;
        }
      } else {
        var b = {
          time: x(),
          delta: Math.abs(r),
          direction: Math.sign(r),
          raw: e
        },
            y = i.mousewheel.recentWheelEvents;
        y.length >= 2 && y.shift();
        var T = y.length ? y[y.length - 1] : void 0;
        if (y.push(b), T ? (b.direction !== T.direction || b.delta > T.delta || b.time > T.time + 150) && i.mousewheel.animateSlider(b) : i.mousewheel.animateSlider(b), i.mousewheel.releaseScroll(b)) return !0;
      }

      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
    },
    animateSlider: function animateSlider(e) {
      var t = l();
      return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x() - this.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = new t.Date().getTime(), !1));
    },
    releaseScroll: function releaseScroll(e) {
      var t = this.params.mousewheel;

      if (e.direction < 0) {
        if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
      } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;

      return !1;
    },
    enable: function enable() {
      var e = U.event();
      if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
      if (!e) return !1;
      if (this.mousewheel.enabled) return !1;
      var t = this.$el;
      return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
    },
    disable: function disable() {
      var e = U.event();
      if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
      if (!e) return !1;
      if (!this.mousewheel.enabled) return !1;
      var t = this.$el;
      return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
    }
  },
      K = {
    update: function update() {
      var e = this.params.navigation;

      if (!this.params.loop) {
        var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
        s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
      }
    },
    onPrevClick: function onPrevClick(e) {
      e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
    },
    init: function init() {
      var e,
          t,
          i = this.params.navigation;
      (i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), S(this.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }));
    },
    destroy: function destroy() {
      var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
      t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
    }
  },
      Z = {
    update: function update() {
      var e = this.rtl,
          t = this.params.pagination;

      if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var i,
            s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            a = this.pagination.$el,
            r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;

        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
          var n,
              l,
              o,
              d = this.pagination.bullets;
          if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), n = i - this.pagination.dynamicBulletIndex, o = ((l = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) d.each(function (e) {
            var s = m(e),
                a = s.index();
            a === i && s.addClass(t.bulletActiveClass), t.dynamicBullets && (a >= n && a <= l && s.addClass(t.bulletActiveClass + "-main"), a === n && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), a === l && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
          });else {
            var h = d.eq(i),
                p = h.index();

            if (h.addClass(t.bulletActiveClass), t.dynamicBullets) {
              for (var u = d.eq(n), c = d.eq(l), v = n; v <= l; v += 1) {
                d.eq(v).addClass(t.bulletActiveClass + "-main");
              }

              if (this.params.loop) {
                if (p >= d.length - t.dynamicMainBullets) {
                  for (var f = t.dynamicMainBullets; f >= 0; f -= 1) {
                    d.eq(d.length - f).addClass(t.bulletActiveClass + "-main");
                  }

                  d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
              } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
            }
          }

          if (t.dynamicBullets) {
            var g = Math.min(d.length, t.dynamicMainBullets + 4),
                w = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - o * this.pagination.bulletSize,
                b = e ? "right" : "left";
            d.css(this.isHorizontal() ? b : "top", w + "px");
          }
        }

        if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
          var y;
          y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
          var E = (i + 1) / r,
              x = 1,
              T = 1;
          "horizontal" === y ? x = E : T = E, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(this.params.speed);
        }

        "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", a[0])) : this.emit("paginationUpdate", a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
      }
    },
    render: function render() {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";

        if ("bullets" === e.type) {
          for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) {
            e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
          }

          i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
        }

        "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
      }
    },
    init: function init() {
      var e = this,
          t = e.params.pagination;

      if (t.el) {
        var i = m(t.el);
        0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
          t.preventDefault();
          var i = m(this).index() * e.params.slidesPerGroup;
          e.params.loop && (i += e.loopedSlides), e.slideTo(i);
        }), S(e.pagination, {
          $el: i,
          el: i[0]
        }));
      }
    },
    destroy: function destroy() {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.pagination.$el;
        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
      }
    }
  },
      J = {
    setTranslate: function setTranslate() {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            l = this.params.scrollbar,
            o = s,
            d = (a - s) * i;
        t ? (d = -d) > 0 ? (o = s - d, d = 0) : -d + s > a && (o = a + d) : d < 0 ? (o = s + d, d = 0) : d + s > a && (o = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = o + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = o + "px"), l.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
          n[0].style.opacity = 0, n.transition(400);
        }, 1e3));
      }
    },
    setTransition: function setTransition(e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    },
    updateSize: function updateSize() {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
        t[0].style.width = "", t[0].style.height = "";
        var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);
        s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), S(e, {
          trackSize: a,
          divider: r,
          moveDivider: n,
          dragSize: s
        }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
      }
    },
    getPointerPosition: function getPointerPosition(e) {
      return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
    },
    setDragPosition: function setDragPosition(e) {
      var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          l = i.dragStartPos;
      t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== l ? l : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
      var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
      this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
      this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e);
    },
    onDragMove: function onDragMove(e) {
      var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
      this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
    },
    onDragEnd: function onDragEnd(e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;
      this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = E(function () {
        a.css("opacity", 0), a.transition(400);
      }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
    },
    enableDraggable: function enableDraggable() {
      if (this.params.scrollbar.el) {
        var e = r(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            n = this.support,
            l = t.$el[0],
            o = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            d = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        n.touch ? (l.addEventListener(i.start, this.scrollbar.onDragStart, o), l.addEventListener(i.move, this.scrollbar.onDragMove, o), l.addEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.addEventListener(s.start, this.scrollbar.onDragStart, o), e.addEventListener(s.move, this.scrollbar.onDragMove, o), e.addEventListener(s.end, this.scrollbar.onDragEnd, d));
      }
    },
    disableDraggable: function disableDraggable() {
      if (this.params.scrollbar.el) {
        var e = r(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            n = this.support,
            l = t.$el[0],
            o = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            d = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        n.touch ? (l.removeEventListener(i.start, this.scrollbar.onDragStart, o), l.removeEventListener(i.move, this.scrollbar.onDragMove, o), l.removeEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.removeEventListener(s.start, this.scrollbar.onDragStart, o), e.removeEventListener(s.move, this.scrollbar.onDragMove, o), e.removeEventListener(s.end, this.scrollbar.onDragEnd, d));
      }
    },
    init: function init() {
      if (this.params.scrollbar.el) {
        var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            s = m(i.el);
        this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
        var a = s.find("." + this.params.scrollbar.dragClass);
        0 === a.length && (a = m('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), S(e, {
          $el: s,
          el: s[0],
          $dragEl: a,
          dragEl: a[0]
        }), i.draggable && e.enableDraggable();
      }
    },
    destroy: function destroy() {
      this.scrollbar.disableDraggable();
    }
  },
      Q = {
    setTransform: function setTransform(e, t) {
      var i = this.rtl,
          s = m(e),
          a = i ? -1 : 1,
          r = s.attr("data-swiper-parallax") || "0",
          n = s.attr("data-swiper-parallax-x"),
          l = s.attr("data-swiper-parallax-y"),
          o = s.attr("data-swiper-parallax-scale"),
          d = s.attr("data-swiper-parallax-opacity");

      if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * a + "%" : n * t * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
        var h = d - (d - 1) * (1 - Math.abs(t));
        s[0].style.opacity = h;
      }

      if (null == o) s.transform("translate3d(" + n + ", " + l + ", 0px)");else {
        var p = o - (o - 1) * (1 - Math.abs(t));
        s.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + p + ")");
      }
    },
    setTranslate: function setTranslate() {
      var e = this,
          t = e.$el,
          i = e.slides,
          s = e.progress,
          a = e.snapGrid;
      t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        e.parallax.setTransform(t, s);
      }), i.each(function (t, i) {
        var r = t.progress;
        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          e.parallax.setTransform(t, r);
        });
      });
    },
    setTransition: function setTransition(e) {
      void 0 === e && (e = this.params.speed);
      this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        var i = m(t),
            s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
        0 === e && (s = 0), i.transition(s);
      });
    }
  },
      ee = {
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
    },
    onGestureStart: function onGestureStart(e) {
      var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;

      if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !t.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureTouched = !0, a.scaleStart = ee.getDistanceBetweenTouches(e);
      }

      a.$slideEl && a.$slideEl.length || (a.$slideEl = m(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
    },
    onGestureChange: function onGestureChange(e) {
      var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;

      if (!t.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureMoved = !0, a.scaleMove = ee.getDistanceBetweenTouches(e);
      }

      a.$imageEl && 0 !== a.$imageEl.length ? (t.gestures ? s.scale = e.scale * s.currentScale : s.scale = a.scaleMove / a.scaleStart * s.currentScale, s.scale > a.maxRatio && (s.scale = a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e);
    },
    onGestureEnd: function onGestureEnd(e) {
      var t = this.device,
          i = this.support,
          s = this.params.zoom,
          a = this.zoom,
          r = a.gesture;

      if (!i.gestures) {
        if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
        a.fakeGestureTouched = !1, a.fakeGestureMoved = !1;
      }

      r.$imageEl && 0 !== r.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio), r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (r.$slideEl = void 0));
    },
    onTouchStart: function onTouchStart(e) {
      var t = this.device,
          i = this.zoom,
          s = i.gesture,
          a = i.image;
      s.$imageEl && 0 !== s.$imageEl.length && (a.isTouched || (t.android && e.cancelable && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove: function onTouchMove(e) {
      var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;

      if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T(i.$imageWrapEl[0], "x") || 0, s.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
        var r = s.width * t.scale,
            n = s.height * t.scale;

        if (!(r < i.slideWidth && n < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
          }

          e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;

      if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
        i.isTouched = !1, i.isMoved = !1;
        var a = 300,
            r = 300,
            n = s.x * a,
            l = i.currentX + n,
            o = s.y * r,
            d = i.currentY + o;
        0 !== s.x && (a = Math.abs((l - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
        var h = Math.max(a, r);
        i.currentX = l, i.currentY = d;
        var p = i.width * e.scale,
            u = i.height * e.scale;
        i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      var e = this.zoom,
          t = e.gesture;
      t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
    },
    toggle: function toggle(e) {
      var t = this.zoom;
      t.scale && 1 !== t.scale ? t.out() : t.in(e);
    },
    in: function _in(e) {
      var t,
          i,
          s,
          a,
          r,
          n,
          l,
          o,
          d,
          h,
          p,
          u,
          c,
          v,
          f,
          m,
          g = this.zoom,
          w = this.params.zoom,
          b = g.gesture,
          y = g.image;
      (b.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? b.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : b.$slideEl = this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), b.$imageWrapEl = b.$imageEl.parent("." + w.containerClass)), b.$imageEl && 0 !== b.$imageEl.length) && (b.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, g.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = b.$slideEl[0].offsetWidth, m = b.$slideEl[0].offsetHeight, s = b.$slideEl.offset().left + f / 2 - t, a = b.$slideEl.offset().top + m / 2 - i, l = b.$imageEl[0].offsetWidth, o = b.$imageEl[0].offsetHeight, d = l * g.scale, h = o * g.scale, c = -(p = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > c && (r = c), (n = a * g.scale) < u && (n = u), n > v && (n = v)) : (r = 0, n = 0), b.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"));
    },
    out: function out() {
      var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
      i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
    },
    toggleGestures: function toggleGestures(e) {
      var t = this.zoom,
          i = t.slideSelector,
          s = t.passiveListener;
      this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, s), this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, s), this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, s);
    },
    enableGestures: function enableGestures() {
      this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
    },
    disableGestures: function disableGestures() {
      this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
    },
    enable: function enable() {
      var e = this.support,
          t = this.zoom;

      if (!t.enabled) {
        t.enabled = !0;
        var i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            s = !e.passiveListener || {
          passive: !1,
          capture: !0
        },
            a = "." + this.params.slideClass;
        this.zoom.passiveListener = i, this.zoom.slideSelector = a, e.gestures ? (this.$wrapperEl.on(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.on(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, a, t.onGestureStart, i), this.$wrapperEl.on(this.touchEvents.move, a, t.onGestureChange, s), this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, a, t.onGestureEnd, i)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, s);
      }
    },
    disable: function disable() {
      var e = this.zoom;

      if (e.enabled) {
        var t = this.support;
        this.zoom.enabled = !1;
        var i = !("touchstart" !== this.touchEvents.start || !t.passiveListener || !this.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            s = !t.passiveListener || {
          passive: !1,
          capture: !0
        },
            a = "." + this.params.slideClass;
        t.gestures ? (this.$wrapperEl.off(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.off(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, a, e.onGestureStart, i), this.$wrapperEl.off(this.touchEvents.move, a, e.onGestureChange, s), this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, a, e.onGestureEnd, i)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s);
      }
    }
  },
      te = {
    loadInSlide: function loadInSlide(e, t) {
      void 0 === t && (t = !0);
      var i = this,
          s = i.params.lazy;

      if (void 0 !== e && 0 !== i.slides.length) {
        var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
            r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
        !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || r.push(a[0]), 0 !== r.length && r.each(function (e) {
          var r = m(e);
          r.addClass(s.loadingClass);
          var n = r.attr("data-background"),
              l = r.attr("data-src"),
              o = r.attr("data-srcset"),
              d = r.attr("data-sizes"),
              h = r.parent("picture");
          i.loadImage(r[0], l || n, o, d, !1, function () {
            if (null != i && i && (!i || i.params) && !i.destroyed) {
              if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
                var t = m(e);
                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
              }), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                var e = a.attr("data-swiper-slide-index");

                if (a.hasClass(i.params.slideDuplicateClass)) {
                  var p = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                  i.lazy.loadInSlide(p.index(), !1);
                } else {
                  var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                  i.lazy.loadInSlide(u.index(), !1);
                }
              }

              i.emit("lazyImageReady", a[0], r[0]), i.params.autoHeight && i.updateAutoHeight();
            }
          }), i.emit("lazyImageLoad", a[0], r[0]);
        });
      }
    },
    load: function load() {
      var e = this,
          t = e.$wrapperEl,
          i = e.params,
          s = e.slides,
          a = e.activeIndex,
          r = e.virtual && i.virtual.enabled,
          n = i.lazy,
          l = i.slidesPerView;

      function o(e) {
        if (r) {
          if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
        } else if (s[e]) return !0;

        return !1;
      }

      function d(e) {
        return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
      }

      if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t) {
        var i = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
        e.lazy.loadInSlide(i);
      });else if (l > 1) for (var h = a; h < a + l; h += 1) {
        o(h) && e.lazy.loadInSlide(h);
      } else e.lazy.loadInSlide(a);
      if (n.loadPrevNext) if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
        for (var p = n.loadPrevNextAmount, u = l, c = Math.min(a + u + Math.max(p, u), s.length), v = Math.max(a - Math.max(u, p), 0), f = a + l; f < c; f += 1) {
          o(f) && e.lazy.loadInSlide(f);
        }

        for (var g = v; g < a; g += 1) {
          o(g) && e.lazy.loadInSlide(g);
        }
      } else {
        var w = t.children("." + i.slideNextClass);
        w.length > 0 && e.lazy.loadInSlide(d(w));
        var b = t.children("." + i.slidePrevClass);
        b.length > 0 && e.lazy.loadInSlide(d(b));
      }
    }
  },
      ie = {
    LinearSpline: function LinearSpline(e, t) {
      var i,
          s,
          a,
          r,
          n,
          l = function l(e, t) {
        for (s = -1, i = e.length; i - s > 1;) {
          e[a = i + s >> 1] <= t ? s = a : i = a;
        }

        return i;
      };

      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    },
    getInterpolateFunction: function getInterpolateFunction(e) {
      this.controller.spline || (this.controller.spline = this.params.loop ? new ie.LinearSpline(this.slidesGrid, e.slidesGrid) : new ie.LinearSpline(this.snapGrid, e.snapGrid));
    },
    setTranslate: function setTranslate(e, t) {
      var i,
          s,
          a = this,
          r = a.controller.control,
          n = a.constructor;

      function l(e) {
        var t = a.rtlTranslate ? -a.translate : a.translate;
        "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
        r[o] !== t && r[o] instanceof n && l(r[o]);
      } else r instanceof n && t !== r && l(r);
    },
    setTransition: function setTransition(e, t) {
      var i,
          s = this,
          a = s.constructor,
          r = s.controller.control;

      function n(t) {
        t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && E(function () {
          t.updateAutoHeight();
        }), t.$wrapperEl.transitionEnd(function () {
          r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }

      if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) {
        r[i] !== t && r[i] instanceof a && n(r[i]);
      } else r instanceof a && t !== r && n(r);
    }
  },
      se = {
    makeElFocusable: function makeElFocusable(e) {
      return e.attr("tabIndex", "0"), e;
    },
    makeElNotFocusable: function makeElNotFocusable(e) {
      return e.attr("tabIndex", "-1"), e;
    },
    addElRole: function addElRole(e, t) {
      return e.attr("role", t), e;
    },
    addElLabel: function addElLabel(e, t) {
      return e.attr("aria-label", t), e;
    },
    disableEl: function disableEl(e) {
      return e.attr("aria-disabled", !0), e;
    },
    enableEl: function enableEl(e) {
      return e.attr("aria-disabled", !1), e;
    },
    onEnterKey: function onEnterKey(e) {
      var t = this.params.a11y;

      if (13 === e.keyCode) {
        var i = m(e.target);
        this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
      }
    },
    notify: function notify(e) {
      var t = this.a11y.liveRegion;
      0 !== t.length && (t.html(""), t.html(e));
    },
    updateNavigation: function updateNavigation() {
      if (!this.params.loop && this.navigation) {
        var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
        i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
      }
    },
    updatePagination: function updatePagination() {
      var e = this,
          t = e.params.a11y;
      e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i) {
        var s = m(i);
        e.a11y.makeElFocusable(s), e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1));
      });
    },
    init: function init() {
      this.$el.append(this.a11y.liveRegion);
      var e,
          t,
          i = this.params.a11y;
      this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    },
    destroy: function destroy() {
      var e, t;
      this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    }
  },
      ae = {
    init: function init() {
      var e = l();

      if (this.params.history) {
        if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
        var t = this.history;
        t.initialized = !0, t.paths = ae.getPathValues(this.params.url), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState));
      }
    },
    destroy: function destroy() {
      var e = l();
      this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
    },
    setHistoryPopState: function setHistoryPopState() {
      this.history.paths = ae.getPathValues(this.params.url), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    },
    getPathValues: function getPathValues(e) {
      var t = l(),
          i = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          s = i.length;
      return {
        key: i[s - 2],
        value: i[s - 1]
      };
    },
    setHistory: function setHistory(e, t) {
      var i = l();

      if (this.history.initialized && this.params.history.enabled) {
        var s;
        s = this.params.url ? new URL(this.params.url) : i.location;
        var a = this.slides.eq(t),
            r = ae.slugify(a.attr("data-history"));
        s.pathname.includes(e) || (r = e + "/" + r);
        var n = i.history.state;
        n && n.value === r || (this.params.history.replaceState ? i.history.replaceState({
          value: r
        }, null, r) : i.history.pushState({
          value: r
        }, null, r));
      }
    },
    slugify: function slugify(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(e, t, i) {
      if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
        var r = this.slides.eq(s);

        if (ae.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
          var n = r.index();
          this.slideTo(n, e, i);
        }
      } else this.slideTo(0, e, i);
    }
  },
      re = {
    onHashCange: function onHashCange() {
      var e = r();
      this.emit("hashChange");
      var t = e.location.hash.replace("#", "");

      if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
        var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
        if (void 0 === i) return;
        this.slideTo(i);
      }
    },
    setHash: function setHash() {
      var e = l(),
          t = r();
      if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""), this.emit("hashSet");else {
        var i = this.slides.eq(this.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");
        t.location.hash = s || "", this.emit("hashSet");
      }
    },
    init: function init() {
      var e = r(),
          t = l();

      if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
        this.hashNavigation.initialized = !0;
        var i = e.location.hash.replace("#", "");
        if (i) for (var s = 0, a = this.slides.length; s < a; s += 1) {
          var n = this.slides.eq(s);

          if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
            var o = n.index();
            this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
          }
        }
        this.params.hashNavigation.watchState && m(t).on("hashchange", this.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var e = l();
      this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashCange);
    }
  },
      ne = {
    run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E(function () {
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run();
      }, i);
    },
    start: function start() {
      return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
    },
    stop: function stop() {
      return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
    },
    pause: function pause(e) {
      this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
    },
    onVisibilityChange: function onVisibilityChange() {
      var e = r();
      "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), this.autoplay.paused = !1);
    },
    onTransitionEnd: function onTransitionEnd(e) {
      this && !this.destroyed && this.$wrapperEl && e.target === this.$wrapperEl[0] && (this.$wrapperEl[0].removeEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].removeEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd), this.autoplay.paused = !1, this.autoplay.running ? this.autoplay.run() : this.autoplay.stop());
    }
  },
      le = {
    setTranslate: function setTranslate() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
        this.params.virtualTranslate || (s -= this.translate);
        var a = 0;
        this.isHorizontal() || (a = s, s = 0);
        var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
        i.css({
          opacity: r
        }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          i = t.slides,
          s = t.$wrapperEl;

      if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
        var a = !1;
        i.transitionEnd(function () {
          if (!a && t && !t.destroyed) {
            a = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
              s.trigger(e[i]);
            }
          }
        });
      }
    }
  },
      oe = {
    setTranslate: function setTranslate() {
      var e,
          t = this.$el,
          i = this.$wrapperEl,
          s = this.slides,
          a = this.width,
          r = this.height,
          n = this.rtlTranslate,
          l = this.size,
          o = this.browser,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          u = 0;
      d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
        height: a + "px"
      })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), t.append(e)));

      for (var c = 0; c < s.length; c += 1) {
        var v = s.eq(c),
            f = c;
        p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
        var g = 90 * f,
            w = Math.floor(g / 360);
        n && (g = -g, w = Math.floor(-g / 360));
        var b = Math.max(Math.min(v[0].progress, 1), -1),
            y = 0,
            E = 0,
            x = 0;
        f % 4 == 0 ? (y = 4 * -w * l, x = 0) : (f - 1) % 4 == 0 ? (y = 0, x = 4 * -w * l) : (f - 2) % 4 == 0 ? (y = l + 4 * w * l, x = l) : (f - 3) % 4 == 0 && (y = -l, x = 3 * l + 4 * l * w), n && (y = -y), h || (E = y, y = 0);
        var T = "rotateX(" + (h ? 0 : -g) + "deg) rotateY(" + (h ? g : 0) + "deg) translate3d(" + y + "px, " + E + "px, " + x + "px)";

        if (b <= 1 && b > -1 && (u = 90 * f + 90 * b, n && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
          var C = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
          0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), C.length && (C[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
        }
      }

      if (i.css({
        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
        "transform-origin": "50% 50% -" + l / 2 + "px"
      }), d.shadow) if (h) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
        var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
            z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
            P = d.shadowScale,
            k = d.shadowScale / z,
            $ = d.shadowOffset;
        e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (r / 2 + $) + "px, " + -r / 2 / k + "px) rotateX(-90deg)");
      }
      var L = o.isSafari || o.isWebView ? -l / 2 : 0;
      i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)");
    },
    setTransition: function setTransition(e) {
      var t = this.$el;
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
    }
  },
      de = {
    setTranslate: function setTranslate() {
      for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
        var s = e.eq(i),
            a = s[0].progress;
        this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
        var r = -180 * a,
            n = 0,
            l = -s[0].swiperSlideOffset,
            o = 0;

        if (this.isHorizontal() ? t && (r = -r) : (o = l, l = 0, n = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
          var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
          0 === d.length && (d = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === h.length && (h = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0));
        }

        s.transform("translate3d(" + l + "px, " + o + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;

      if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
        var r = !1;
        i.eq(s).transitionEnd(function () {
          if (!r && t && !t.destroyed) {
            r = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
              a.trigger(e[i]);
            }
          }
        });
      }
    }
  },
      he = {
    setTranslate: function setTranslate() {
      for (var e = this.width, t = this.height, i = this.slides, s = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), n = this.translate, l = r ? e / 2 - n : t / 2 - n, o = r ? a.rotate : -a.rotate, d = a.depth, h = 0, p = i.length; h < p; h += 1) {
        var u = i.eq(h),
            c = s[h],
            v = (l - u[0].swiperSlideOffset - c / 2) / c * a.modifier,
            f = r ? o * v : 0,
            g = r ? 0 : o * v,
            w = -d * Math.abs(v),
            b = a.stretch;
        "string" == typeof b && -1 !== b.indexOf("%") && (b = parseFloat(a.stretch) / 100 * c);
        var y = r ? 0 : b * v,
            E = r ? b * v : 0,
            x = 1 - (1 - a.scale) * Math.abs(v);
        Math.abs(E) < .001 && (E = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(f) < .001 && (f = 0), Math.abs(g) < .001 && (g = 0), Math.abs(x) < .001 && (x = 0);
        var T = "translate3d(" + E + "px," + y + "px," + w + "px)  rotateX(" + g + "deg) rotateY(" + f + "deg) scale(" + x + ")";

        if (u.transform(T), u[0].style.zIndex = 1 - Math.abs(Math.round(v)), a.slideShadows) {
          var C = r ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
              S = r ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
          0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'), u.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'), u.append(S)), C.length && (C[0].style.opacity = v > 0 ? v : 0), S.length && (S[0].style.opacity = -v > 0 ? -v : 0);
        }
      }
    },
    setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  },
      pe = {
    init: function init() {
      var e = this.params.thumbs;
      if (this.thumbs.initialized) return !1;
      this.thumbs.initialized = !0;
      var t = this.constructor;
      return e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, S(this.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), S(this.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })) : C(e.swiper) && (this.thumbs.swiper = new t(S({}, e.swiper, {
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick), !0;
    },
    onThumbClick: function onThumbClick() {
      var e = this.thumbs.swiper;

      if (e) {
        var t = e.clickedIndex,
            i = e.clickedSlide;

        if (!(i && m(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
          var s;

          if (s = e.params.loop ? parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
            var a = this.activeIndex;
            this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
            var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                n = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
            s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r;
          }

          this.slideTo(s);
        }
      }
    },
    update: function update(e) {
      var t = this.thumbs.swiper;

      if (t) {
        var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
            s = this.params.thumbs.autoScrollOffset,
            a = s && !t.params.loop;

        if (this.realIndex !== t.realIndex || a) {
          var r,
              n,
              l = t.activeIndex;

          if (t.params.loop) {
            t.slides.eq(l).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, l = t.activeIndex);
            var o = t.slides.eq(l).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                d = t.slides.eq(l).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
            r = void 0 === o ? d : void 0 === d ? o : d - l == l - o ? l : d - l < l - o ? d : o, n = this.activeIndex > this.previousIndex ? "next" : "prev";
          } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";

          a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > l ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > l && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0));
        }

        var h = 1,
            p = this.params.thumbs.slideThumbActiveClass;
        if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var u = 0; u < h; u += 1) {
          t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + u) + '"]').addClass(p);
        } else for (var c = 0; c < h; c += 1) {
          t.slides.eq(this.realIndex + c).addClass(p);
        }
      }
    }
  },
      ue = [q, _, {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    },
    create: function create() {
      M(this, {
        mousewheel: {
          enabled: !1,
          lastScrollTime: x(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          enable: U.enable,
          disable: U.disable,
          handle: U.handle,
          handleMouseEnter: U.handleMouseEnter,
          handleMouseLeave: U.handleMouseLeave,
          animateSlider: U.animateSlider,
          releaseScroll: U.releaseScroll
        }
      });
    },
    on: {
      init: function init(e) {
        !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
      },
      destroy: function destroy(e) {
        e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
      }
    }
  }, {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function create() {
      M(this, {
        navigation: t({}, K)
      });
    },
    on: {
      init: function init(e) {
        e.navigation.init(), e.navigation.update();
      },
      toEdge: function toEdge(e) {
        e.navigation.update();
      },
      fromEdge: function fromEdge(e) {
        e.navigation.update();
      },
      destroy: function destroy(e) {
        e.navigation.destroy();
      },
      click: function click(e, t) {
        var i,
            s = e.navigation,
            a = s.$nextEl,
            r = s.$prevEl;
        !e.params.navigation.hideOnClick || m(t.target).is(r) || m(t.target).is(a) || (a ? i = a.hasClass(e.params.navigation.hiddenClass) : r && (i = r.hasClass(e.params.navigation.hiddenClass)), !0 === i ? e.emit("navigationShow") : e.emit("navigationHide"), a && a.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass));
      }
    }
  }, {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function create() {
      M(this, {
        pagination: t({
          dynamicBulletIndex: 0
        }, Z)
      });
    },
    on: {
      init: function init(e) {
        e.pagination.init(), e.pagination.render(), e.pagination.update();
      },
      activeIndexChange: function activeIndexChange(e) {
        (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
      },
      snapIndexChange: function snapIndexChange(e) {
        e.params.loop || e.pagination.update();
      },
      slidesLengthChange: function slidesLengthChange(e) {
        e.params.loop && (e.pagination.render(), e.pagination.update());
      },
      snapGridLengthChange: function snapGridLengthChange(e) {
        e.params.loop || (e.pagination.render(), e.pagination.update());
      },
      destroy: function destroy(e) {
        e.pagination.destroy();
      },
      click: function click(e, t) {
        e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
      }
    }
  }, {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    },
    create: function create() {
      M(this, {
        scrollbar: t({
          isTouched: !1,
          timeout: null,
          dragTimeout: null
        }, J)
      });
    },
    on: {
      init: function init(e) {
        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
      },
      update: function update(e) {
        e.scrollbar.updateSize();
      },
      resize: function resize(e) {
        e.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate(e) {
        e.scrollbar.updateSize();
      },
      setTranslate: function setTranslate(e) {
        e.scrollbar.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        e.scrollbar.setTransition(t);
      },
      destroy: function destroy(e) {
        e.scrollbar.destroy();
      }
    }
  }, {
    name: "parallax",
    params: {
      parallax: {
        enabled: !1
      }
    },
    create: function create() {
      M(this, {
        parallax: t({}, Q)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      init: function init(e) {
        e.params.parallax.enabled && e.parallax.setTranslate();
      },
      setTranslate: function setTranslate(e) {
        e.params.parallax.enabled && e.parallax.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        e.params.parallax.enabled && e.parallax.setTransition(t);
      }
    }
  }, {
    name: "zoom",
    params: {
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    },
    create: function create() {
      var e = this;
      M(e, {
        zoom: t({
          enabled: !1,
          scale: 1,
          currentScale: 1,
          isScaling: !1,
          gesture: {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
          },
          image: {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
          }
        }, ee)
      });
      var i = 1;
      Object.defineProperty(e.zoom, "scale", {
        get: function get() {
          return i;
        },
        set: function set(t) {
          if (i !== t) {
            var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
            e.emit("zoomChange", t, s, a);
          }

          i = t;
        }
      });
    },
    on: {
      init: function init(e) {
        e.params.zoom.enabled && e.zoom.enable();
      },
      destroy: function destroy(e) {
        e.zoom.disable();
      },
      touchStart: function touchStart(e, t) {
        e.zoom.enabled && e.zoom.onTouchStart(t);
      },
      touchEnd: function touchEnd(e, t) {
        e.zoom.enabled && e.zoom.onTouchEnd(t);
      },
      doubleTap: function doubleTap(e, t) {
        e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
      },
      transitionEnd: function transitionEnd(e) {
        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
      },
      slideChange: function slideChange(e) {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
      }
    }
  }, {
    name: "lazy",
    params: {
      lazy: {
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    },
    create: function create() {
      M(this, {
        lazy: t({
          initialImageLoaded: !1
        }, te)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
      },
      init: function init(e) {
        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
      },
      scroll: function scroll(e) {
        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
      },
      resize: function resize(e) {
        e.params.lazy.enabled && e.lazy.load();
      },
      scrollbarDragMove: function scrollbarDragMove(e) {
        e.params.lazy.enabled && e.lazy.load();
      },
      transitionStart: function transitionStart(e) {
        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
      },
      transitionEnd: function transitionEnd(e) {
        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
      },
      slideChange: function slideChange(e) {
        e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
      }
    }
  }, {
    name: "controller",
    params: {
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    },
    create: function create() {
      M(this, {
        controller: t({
          control: this.params.controller.control
        }, ie)
      });
    },
    on: {
      update: function update(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      resize: function resize(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      observerUpdate: function observerUpdate(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      setTranslate: function setTranslate(e, t, i) {
        e.controller.control && e.controller.setTranslate(t, i);
      },
      setTransition: function setTransition(e, t, i) {
        e.controller.control && e.controller.setTransition(t, i);
      }
    }
  }, {
    name: "a11y",
    params: {
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}"
      }
    },
    create: function create() {
      M(this, {
        a11y: t(t({}, se), {}, {
          liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
        })
      });
    },
    on: {
      init: function init(e) {
        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
      },
      toEdge: function toEdge(e) {
        e.params.a11y.enabled && e.a11y.updateNavigation();
      },
      fromEdge: function fromEdge(e) {
        e.params.a11y.enabled && e.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate(e) {
        e.params.a11y.enabled && e.a11y.updatePagination();
      },
      destroy: function destroy(e) {
        e.params.a11y.enabled && e.a11y.destroy();
      }
    }
  }, {
    name: "history",
    params: {
      history: {
        enabled: !1,
        replaceState: !1,
        key: "slides"
      }
    },
    create: function create() {
      M(this, {
        history: t({}, ae)
      });
    },
    on: {
      init: function init(e) {
        e.params.history.enabled && e.history.init();
      },
      destroy: function destroy(e) {
        e.params.history.enabled && e.history.destroy();
      },
      transitionEnd: function transitionEnd(e) {
        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
      },
      slideChange: function slideChange(e) {
        e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
      }
    }
  }, {
    name: "hash-navigation",
    params: {
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    },
    create: function create() {
      M(this, {
        hashNavigation: t({
          initialized: !1
        }, re)
      });
    },
    on: {
      init: function init(e) {
        e.params.hashNavigation.enabled && e.hashNavigation.init();
      },
      destroy: function destroy(e) {
        e.params.hashNavigation.enabled && e.hashNavigation.destroy();
      },
      transitionEnd: function transitionEnd(e) {
        e.hashNavigation.initialized && e.hashNavigation.setHash();
      },
      slideChange: function slideChange(e) {
        e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
      }
    }
  }, {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1
      }
    },
    create: function create() {
      M(this, {
        autoplay: t(t({}, ne), {}, {
          running: !1,
          paused: !1
        })
      });
    },
    on: {
      init: function init(e) {
        e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
      },
      beforeTransitionStart: function beforeTransitionStart(e, t, i) {
        e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
      },
      sliderFirstMove: function sliderFirstMove(e) {
        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
      },
      touchEnd: function touchEnd(e) {
        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
      },
      destroy: function destroy(e) {
        e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
      }
    }
  }, {
    name: "effect-fade",
    params: {
      fadeEffect: {
        crossFade: !1
      }
    },
    create: function create() {
      M(this, {
        fadeEffect: t({}, le)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("fade" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "fade");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "fade" === e.params.effect && e.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "fade" === e.params.effect && e.fadeEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-cube",
    params: {
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    },
    create: function create() {
      M(this, {
        cubeEffect: t({}, oe)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("cube" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "cube" === e.params.effect && e.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "cube" === e.params.effect && e.cubeEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-flip",
    params: {
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0
      }
    },
    create: function create() {
      M(this, {
        flipEffect: t({}, de)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("flip" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "flip" === e.params.effect && e.flipEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "flip" === e.params.effect && e.flipEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0
      }
    },
    create: function create() {
      M(this, {
        coverflowEffect: t({}, he)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      setTranslate: function setTranslate(e) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
      }
    }
  }, {
    name: "thumbs",
    params: {
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs"
      }
    },
    create: function create() {
      M(this, {
        thumbs: t({
          swiper: null,
          initialized: !1
        }, pe)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        var t = e.params.thumbs;
        t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
      },
      slideChange: function slideChange(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      update: function update(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      resize: function resize(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      observerUpdate: function observerUpdate(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      setTransition: function setTransition(e, t) {
        var i = e.thumbs.swiper;
        i && i.setTransition(t);
      },
      beforeDestroy: function beforeDestroy(e) {
        var t = e.thumbs.swiper;
        t && e.thumbs.swiperCreated && t && t.destroy();
      }
    }
  }];
  return W.use(ue), W;
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvanMvSGVhdGhTY3JpcHQuanMiLCJzcmMvanMvY29udGFjdF9tZS5qcyIsInNyYy9qcy9qcUJvb3RzdHJhcFZhbGlkYXRpb24uanMiLCJzcmMvanMvbW9kdWxlcy9zaG93LW1vcmUtZmFkZWJhci9pbmRleC5qcyIsInNyYy9qcy9tb2R1bGVzL3Nob3ctbW9yZS1mYWRlYmFyL3Nob3ctbW9yZS5qcyIsInNyYy9qcy9zd2lwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE9BQU8sQ0FBUCxrQkFBTyxDQUFQOztBQUNBLE9BQU8sQ0FBUCxnQ0FBTyxDQUFQOztBQUNBLE9BQU8sQ0FBUCw0QkFBTyxDQUFQOztBQUNBLE9BQU8sQ0FBUCxpQkFBTyxDQUFQOztBQUNBLE9BQU8sQ0FBUCxhQUFPLENBQVA7Ozs7QUNKQTs7Ozs7O0FBTUEsQ0FBQyxVQUFBLENBQUEsRUFBYTtBQUFBLGVBQUEsQ0FDRTtBQUVkOztBQUNBLE1BQUksT0FBTyxHQUFHLFFBQVEsQ0FBUixnQkFBQSxDQUFkLGlCQUFjLENBQWQ7QUFDQSxFQUFBLE9BQU8sQ0FBUCxPQUFBLENBQWdCLFVBQUEsSUFBQSxFQUFRO0FBQ3RCO0FBQ0EsUUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFELElBQUMsQ0FBRCxDQUFBLElBQUEsQ0FBZixlQUFlLENBQWY7QUFDQSxJQUFBLENBQUMsQ0FBRCxJQUFDLENBQUQsQ0FBQSxJQUFBLENBQUEsT0FBQSxFQUFBLFVBQUEsTUFBQSxDQUFBLFFBQUEsRUFBQSxHQUFBLENBQUE7QUFSVSxHQUtaLEVBTFksQ0FXWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQSxDQUFDLENBQUQsZ0RBQUMsQ0FBRCxDQUFBLEtBQUEsQ0FBMEQsWUFBWTtBQUNwRSxRQUNJLFFBQVEsQ0FBUixRQUFBLENBQUEsT0FB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QWE7QUFDbkIsUUFBQSxDQUFDLENBQUQsTUFBQSxDQUFBLE1BQUEsSUFBbUIsQ0FBQyxDQUFELE1BQUEsQ0FBbkIsTUFBbUIsRUFBbkI7QUFUQSxPQUFBO0FBV0YsTUFBQSxNQUFNLEVBQUUsU0FBQSxNQUFBLENBQUEsQ0FBQSxFQUFhO0FBQ25CLFFBQUEsQ0FBQyxDQUFELE1BQUEsQ0FBQSxNQUFBLElBQW1CLENBQUMsQ0FBRCxNQUFBLENBQW5CLE1BQW1CLEVBQW5CO0FBWkEsT0FBQTtBQWNGLE1BQUEsY0FBYyxFQUFFLFNBQUEsY0FBQSxDQUFBLENBQUEsRUFBYTtBQUMzQixRQUFBLENBQUMsQ0FBRCxNQUFBLENBQUEsTUFBQSxJQUFtQixDQUFDLENBQUQsTUFBQSxDQUFuQixNQUFtQixFQUFuQjtBQWZBLE9BQUE7QUFpQkYsTUFBQSxhQUFhLEVBQUUsU0FBQSxhQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBZ0I7QUFDN0IsWUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFELE1BQUEsQ0FBUixNQUFBO0FBQ0EsUUFBQSxDQUFDLElBQUksQ0FBQyxDQUFELGFBQUEsQ0FBTCxDQUFLLENBQUw7QUFuQkEsT0FBQTtBQXFCRixNQUFBLGFBQWEsRUFBRSxTQUFBLGFBQUEsQ0FBQSxDQUFBLEVBQWE7QUFDMUIsWUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFELE1BQUEsQ0FBUixNQUFBO0FBQ0EsUUFBQSxDQUFDLElBQUksQ0FBQyxDQUFELE1BQUEsQ0FBTCxhQUFBLElBQUEsQ0FBQSxJQUFvQyxDQUFDLENBQXJDLE9BQW9DLEVBQXBDO0FBQ0Q7QUF4QkM7QUFuQkgsR0Exb0JFLENBcmtDUDtBQTZ2REEsU0FBTyxDQUFDLENBQUQsR0FBQSxDQUFBLEVBQUEsR0FBUCxDQUFBO0FBaGhJRixDQUFFLENBQUYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJyZXF1aXJlKCcuL2pzL0hlYXRoU2NyaXB0JylcbnJlcXVpcmUoJy4vanMvbW9kdWxlcy9zaG93LW1vcmUtZmFkZWJhcicpXG5yZXF1aXJlKCcuL2pzL2pxQm9vdHN0cmFwVmFsaWRhdGlvbicpXG5yZXF1aXJlKCcuL2pzL2NvbnRhY3RfbWUnKVxucmVxdWlyZSgnLi9qcy9zd2lwZXInKVxuIiwiLyohXG4gKiBIZWF0aFNodWx0cy5jb20gLSBIZWF0aCBTaHVsdHMgdjEuMCAoaHR0cDovL2hlYXRoc2h1bHRzLmNvbSlcbiAqIENvcHlyaWdodCAyMDIwLTIwMjAgSGVhdGgtU2h1bHRzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9oZWF0aHNodWx0cy9oZWF0aHNodWx0cy5jb20vTElDRU5TRSlcbiAqL1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnOyAvLyBTdGFydCBvZiB1c2Ugc3RyaWN0XG5cbiAgLy8gPT09PT09IFJBTktJTkcgQkFSU1xuICB2YXIgdGhlQmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ocy1yYW5raW5nLWJhcicpXG4gIHRoZUJhcnMuZm9yRWFjaChhQmFyID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFyV2lkdGggPSAkKGFCYXIpLmF0dHIoJ2FyaWEtdmFsdWVub3cnKVxuICAgICQoYUJhcikuYXR0cignc3R5bGUnLCBgd2lkdGg6ICR7YmFyV2lkdGh9JWApO1xuICB9KTtcblxuICAvLyA9PT09PT0gTkFWIEpTID09PT09PSAvL1xuICAvLyBqUXVlcnkgZm9yIHBhZ2Ugc2Nyb2xsaW5nIGZlYXR1cmUgLSByZXF1aXJlcyBqUXVlcnkgRWFzaW5nIHBsdWdpblxuICAvLyAkKCdhLmpzLXBhZ2Utc2Nyb2xsJykuYmluZCgnY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gICB2YXIgJGFuY2hvciA9ICQodGhpcyk7XG4gIC8vICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcbiAgLy8gICAgIHNjcm9sbFRvcDogKCQoJGFuY2hvci5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcCAtIDApIC8vSSBsZWZ0IHRoZSAtIDAgdGhlcmUgdG8gcmVtaW5kIG1lIGFib3V0IHVzaW5nIGl0IGlmIG5lZWQgYmVcbiAgLy8gICB9LCAxMjUwLCAnZWFzZUluT3V0RXhwbycpO1xuICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIH0pO1xuXG4gICQoJ2EuanMtc2Nyb2xsLXRyaWdnZXJbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChcbiAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sIFwiXCIpID09XG4gICAgICAgICAgICB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCBcIlwiKSAmJlxuICAgICAgICBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lXG4gICAgKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGhcbiAgICAgICAgICAgID8gdGFyZ2V0XG4gICAgICAgICAgICA6ICQoXCJbbmFtZT1cIiArIHRoaXMuaGFzaC5zbGljZSgxKSArIFwiXVwiKTtcbiAgICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgLSA3MixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDEwMDAsXG4gICAgICAgICAgICAgICAgXCJlYXNlSW5PdXRFeHBvXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLy8gQ2xvc2VzIHJlc3BvbnNpdmUgbWVudSB3aGVuIGEgc2Nyb2xsIHRyaWdnZXIgbGluayBpcyBjbGlja2VkXG4kKFwiLmpzLXNjcm9sbC10cmlnZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgJChcIi5uYXZiYXItY29sbGFwc2VcIikuY29sbGFwc2UoXCJoaWRlXCIpO1xufSk7XG5cblxuICAvLyBIaWdobGlnaHQgdGhlIHRvcCBuYXYgYXMgc2Nyb2xsaW5nIG9jY3Vyc1xuICAkKCdib2R5Jykuc2Nyb2xsc3B5KHtcbiAgICB0YXJnZXQ6ICcjbWFpbk5hdicsXG4gICAgb2Zmc2V0OiA3NFxuICB9KTtcblxuIC8vIENvbGxhcHNlIE5hdmJhclxuIHZhciBuYXZiYXJDb2xsYXBzZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCQoXCIjbWFpbk5hdlwiKS5vZmZzZXQoKS50b3AgPiA5MCkge1xuICAgICAgJChcIiNtYWluTmF2XCIpLmFkZENsYXNzKFwibmF2YmFyLXNocmlua1wiKTtcbiAgfSBlbHNlIHtcbiAgICAgICQoXCIjbWFpbk5hdlwiKS5yZW1vdmVDbGFzcyhcIm5hdmJhci1zaHJpbmtcIik7XG4gIH1cbn07XG4vLyBDb2xsYXBzZSBub3cgaWYgcGFnZSBpcyBub3QgYXQgdG9wXG5uYXZiYXJDb2xsYXBzZSgpO1xuLy8gQ29sbGFwc2UgdGhlIG5hdmJhciB3aGVuIHBhZ2UgaXMgc2Nyb2xsZWRcbiQod2luZG93KS5zY3JvbGwobmF2YmFyQ29sbGFwc2UpO1xuXG5cbiAgLy8gKiogPT09PT09IE1PREUgV0lESEVUID09PT09PSAqKiAvL1xuICB2YXIgZG1fYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGVfd2lkZ2V0JylcbiAgdmFyIGxzR2V0TW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrX21vZGUnKVxuXG4gIC8vIHNldCBidXR0b24gdGV4dFxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgIGlmIChsc0dldE1vZGUgPT09ICdmYXNsZScpIHtcbiAgICAgIHNldE1vZGVUZXh0KHRydWUpXG4gICAgICAvL2RtX2J0bi5odG1sKCc8c3BhbiBjbGFzcz1cIndoaWNoLW1vZGVcIj5EYXJrIE1vZGU8c3BhbiBpZD1cIm1vZGVfaWNvblwiIGNsYXNzPVwiZmEgZmEtbW9vbi1vIG1vZGUtaWNvblwiPjwvc3Bhbj48L3NwYW4+JylcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TW9kZVRleHQoZmFsc2UpXG4gICAgICAvLyBkbV9idG4uaHRtbCgnPHNwYW4gY2xhc3M9XCJ3aGljaC1tb2RlXCI+TGlnaHQgTW9kZTxzcGFuIGlkPVwibW9kZV9pY29uXCIgY2xhc3M9XCJmYSBmYS1zdW4tbyBtb2RlLWljb25cIj48L3NwYW4+PC9zcGFuPicpXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIHNldE1vZGVUZXh0KG1vZGUpIHtcbiAgICBpZiAobW9kZSA9PT0gJ3RydWUnKSB7XG4gICAgICBkbV9idG4uaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwid2hpY2gtbW9kZVwiPiBEYXJrIE1vZGU8c3BhbiBpZD1cIm1vZGVfaWNvblwiIGNsYXNzPVwiZmEgZmEtbW9vbi1vIG1vZGUtaWNvblwiPjwvc3Bhbj48L3NwYW4+J1xuICAgIH0gZWxzZSB7XG4gICAgICBkbV9idG4uaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwid2hpY2gtbW9kZVwiPiBMaWdodCBNb2RlPHNwYW4gaWQ9XCJtb2RlX2ljb25cIiBjbGFzcz1cImZhIGZhLXN1bi1vIG1vZGUtaWNvblwiPjwvc3Bhbj48L3NwYW4+J1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldE1vZGUobW9kZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrX21vZGUnLCBgJHttb2RlfWApXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rhcmttb2RlJykuZGlzYWJsZWQgPSBtb2RlO1xuXG4gICAgaWYgKG1vZGUgPT09ICd0cnVlJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rhcmttb2RlJykuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGRtX2J0bi5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ3aGljaC1tb2RlXCI+IERhcmsgTW9kZTxzcGFuIGlkPVwibW9kZV9pY29uXCIgY2xhc3M9XCJmYSBmYS1tb29uLW8gbW9kZS1pY29uXCI+PC9zcGFuPjwvc3Bhbj4nXG5cbiAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbaHJlZj1cImNzcy90aGVtZS1kYXJrLW1vZGUuY3NzXCJdJykuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG1fYnRuLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIndoaWNoLW1vZGVcIj4gTGlnaHQgTW9kZTxzcGFuIGlkPVwibW9kZV9pY29uXCIgY2xhc3M9XCJmYSBmYS1zdW4tbyBtb2RlLWljb25cIj48L3NwYW4+PC9zcGFuPidcbiAgICB9XG4gICAgcmV0dXJuIHNldE1vZGVUZXh0KG1vZGUpXG4gIH1cblxuICAvLyBUaGVtZSBzd2l0Y2hlclxuICBkbV9idG4uYmluZCgnY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrX21vZGUnKSA9PT0gJ3RydWUnKSB7XG4gICAgICBzZXRNb2RlKCdmYWxzZScpLCBjb25zb2xlLmxvZygnc2V0IHRvIGZhbHNlJylcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TW9kZSgndHJ1ZScpLCBjb25zb2xlLmxvZygnc2V0IHRvIHRydWUnKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfSlcblxuXG4gICAvLyA9PT09PT0gU0hPV01PUkUgPT09PSAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgbGV0IFNob3dNb3JlU2V0dGluZ3MgPSB7XG4gICAgYm94SGVpZ2h0OiAnMTAwdmgnLFxuICAgIGZiU3RhcnRDb2xvcjogJ3JnYmEoMCwwLDAsLjc1KScsXG4gICAgZmJFbmRDb2xvcjogJ3JnYmEoMCwwLDAsLjc1KScsXG4gICAgZmJCb3R0b21Cb3JkZXI6ICcxcHggc29saWQgIzJlMmUyZScsXG4gICAgZmJJbml0QnV0dG9uVGV4dDogJ1Nob3cgTW9yZScsXG4gICAgZmJPcGVuQnV0dG9uVGV4dDogJ1Nob3cgTGVzcycsXG4gICAgZmJCdXR0b25Qb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgZmJCdXR0b25CYWNrZ3JvdW5kOiAnIzE1MTUxNScsXG4gICAgZmJCdXR0b25CYWNrZ3JvdW5kSG92ZXI6ICcjMzMzMzMzOycsXG4gICAgZmJCdXR0b25UZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICBmYkJ1dHRvblRleHRDb2xvckhvdmVyOiAnI2ZmZmZmZicsXG4gICAgZmJCdXR0b25UZXh0Q29sb3JGb2N1czogJyNGRkYnLFxuICAgIGZiQnV0dG9uQm9yZGVyQ29sb3I6ICcjMDAwMDAwJyxcbiAgICBmYkJ1dHRvbkJvcmRlckNvbG9yRm9jdXM6ICcjMzMzMzMzJyxcbiAgfVxuXG59KShqUXVlcnkpOyAvLyBFbmQgb2YgdXNlIHN0cmljdFxuIiwiLy8gQ29udGFjdCBGb3JtIFNjcmlwdHNcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgJChcIiNjb250YWN0Rm9ybSBpbnB1dCwjY29udGFjdEZvcm0gdGV4dGFyZWFcIikuanFCb290c3RyYXBWYWxpZGF0aW9uKHtcclxuICAgICAgICBwcmV2ZW50U3VibWl0OiB0cnVlLFxyXG4gICAgICAgIHN1Ym1pdEVycm9yOiBmdW5jdGlvbigkZm9ybSwgZXZlbnQsIGVycm9ycykge1xyXG4gICAgICAgICAgICAvLyBhZGRpdGlvbmFsIGVycm9yIG1lc3NhZ2VzIG9yIGV2ZW50c1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VibWl0U3VjY2VzczogZnVuY3Rpb24oJGZvcm0sIGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgZGVmYXVsdCBzdWJtaXQgYmVoYXZpb3VyXHJcbiAgICAgICAgICAgIC8vIGdldCB2YWx1ZXMgZnJvbSBGT1JNXHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gJChcImlucHV0I25hbWVcIikudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbCA9ICQoXCJpbnB1dCNlbWFpbFwiKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIHBob25lID0gJChcImlucHV0I3Bob25lXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICQoXCJ0ZXh0YXJlYSNtZXNzYWdlXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgZmlyc3ROYW1lID0gbmFtZTsgLy8gRm9yIFN1Y2Nlc3MvRmFpbHVyZSBNZXNzYWdlXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciB3aGl0ZSBzcGFjZSBpbiBuYW1lIGZvciBTdWNjZXNzL0ZhaWwgbWVzc2FnZVxyXG4gICAgICAgICAgICBpZiAoZmlyc3ROYW1lLmluZGV4T2YoJyAnKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWUgPSBuYW1lLnNwbGl0KCcgJykuc2xpY2UoMCwgLTEpLmpvaW4oJyAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi4vLi9tYWlsL2NvbnRhY3RfbWUucGhwXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiBwaG9uZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN1Y2Nlc3MgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNzdWNjZXNzJykuaHRtbChcIjxkaXYgY2xhc3M9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjc3VjY2VzcyA+IC5hbGVydC1zdWNjZXNzJykuaHRtbChcIjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nYWxlcnQnIGFyaWEtaGlkZGVuPSd0cnVlJz4mdGltZXM7XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCI8L2J1dHRvbj5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3MgPiAuYWxlcnQtc3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCI8c3Ryb25nPllvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50LiA8L3N0cm9uZz5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3MgPiAuYWxlcnQtc3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJzwvZGl2PicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NsZWFyIGFsbCBmaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAkKCcjY29udGFjdEZvcm0nKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZhaWwgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNzdWNjZXNzJykuaHRtbChcIjxkaXYgY2xhc3M9J2FsZXJ0IGFsZXJ0LWRhbmdlcic+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNzdWNjZXNzID4gLmFsZXJ0LWRhbmdlcicpLmh0bWwoXCI8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+JnRpbWVzO1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwiPC9idXR0b24+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNzdWNjZXNzID4gLmFsZXJ0LWRhbmdlcicpLmFwcGVuZChcIjxzdHJvbmc+U29ycnkgXCIgKyBmaXJzdE5hbWUgKyBcIiwgaXQgc2VlbXMgdGhhdCBteSBtYWlsIHNlcnZlciBpcyBub3QgcmVzcG9uZGluZy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlciFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3MgPiAuYWxlcnQtZGFuZ2VyJykuYXBwZW5kKCc8L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NsZWFyIGFsbCBmaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAkKCcjY29udGFjdEZvcm0nKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmlzKFwiOnZpc2libGVcIik7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCJhW2RhdGEtdG9nZ2xlPVxcXCJ0YWJcXFwiXVwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykudGFiKFwic2hvd1wiKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vKldoZW4gY2xpY2tpbmcgb24gRnVsbCBoaWRlIGZhaWwvc3VjY2VzcyBib3hlcyAqL1xyXG4kKCcjbmFtZScpLmZvY3VzKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI3N1Y2Nlc3MnKS5odG1sKCcnKTtcclxufSk7XHJcbiIsIi8qIGpxQm9vdHN0cmFwVmFsaWRhdGlvblxyXG4gKiBBIHBsdWdpbiBmb3IgYXV0b21hdGluZyB2YWxpZGF0aW9uIG9uIFR3aXR0ZXIgQm9vdHN0cmFwIGZvcm1hdHRlZCBmb3Jtcy5cclxuICpcclxuICogdjEuMy42XHJcbiAqXHJcbiAqIExpY2Vuc2U6IE1JVCA8aHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocD4gLSBzZWUgTElDRU5TRSBmaWxlXHJcbiAqXHJcbiAqIGh0dHA6Ly9SZWFjdGl2ZVJhdmVuLmdpdGh1Yi5jb20vanFCb290c3RyYXBWYWxpZGF0aW9uL1xyXG4gKi9cclxuXHJcbihmdW5jdGlvbiggJCApe1xyXG5cclxuXHR2YXIgY3JlYXRlZEVsZW1lbnRzID0gW107XHJcblxyXG5cdHZhciBkZWZhdWx0cyA9IHtcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0cHJlcGVuZEV4aXN0aW5nSGVscEJsb2NrOiBmYWxzZSxcclxuXHRcdFx0c25pZmZIdG1sOiB0cnVlLCAvLyBzbmlmZiBmb3IgJ3JlcXVpcmVkJywgJ21heGxlbmd0aCcsIGV0Y1xyXG5cdFx0XHRwcmV2ZW50U3VibWl0OiB0cnVlLCAvLyBzdG9wIHRoZSBmb3JtIHN1Ym1pdCBldmVudCBmcm9tIGZpcmluZyBpZiB2YWxpZGF0aW9uIGZhaWxzXHJcblx0XHRcdHN1Ym1pdEVycm9yOiBmYWxzZSwgLy8gZnVuY3Rpb24gY2FsbGVkIGlmIHRoZXJlIGlzIGFuIGVycm9yIHdoZW4gdHJ5aW5nIHRvIHN1Ym1pdFxyXG5cdFx0XHRzdWJtaXRTdWNjZXNzOiBmYWxzZSwgLy8gZnVuY3Rpb24gY2FsbGVkIGp1c3QgYmVmb3JlIGEgc3VjY2Vzc2Z1bCBzdWJtaXQgZXZlbnQgaXMgc2VudCB0byB0aGUgc2VydmVyXHJcbiAgICAgICAgICAgIHNlbWFudGljYWxseVN0cmljdDogZmFsc2UsIC8vIHNldCB0byB0cnVlIHRvIHRpZHkgdXAgZ2VuZXJhdGVkIEhUTUwgb3V0cHV0XHJcblx0XHRcdGF1dG9BZGQ6IHtcclxuXHRcdFx0XHRoZWxwQmxvY2tzOiB0cnVlXHJcblx0XHRcdH0sXHJcbiAgICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuICQodGhpcykuaXMoXCI6dmlzaWJsZVwiKTsgLy8gb25seSB2YWxpZGF0ZSBlbGVtZW50cyB5b3UgY2FuIHNlZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIHZhbGlkYXRlIGV2ZXJ5dGhpbmdcclxuICAgICAgICAgICAgfVxyXG5cdFx0fSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgaW5pdCA6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xyXG5cclxuICAgICAgICB2YXIgc2V0dGluZ3MgPSAkLmV4dGVuZCh0cnVlLCB7fSwgZGVmYXVsdHMpO1xyXG5cclxuICAgICAgICBzZXR0aW5ncy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwgc2V0dGluZ3Mub3B0aW9ucywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHZhciAkc2libGluZ0VsZW1lbnRzID0gdGhpcztcclxuXHJcbiAgICAgICAgdmFyIHVuaXF1ZUZvcm1zID0gJC51bmlxdWUoXHJcbiAgICAgICAgICAkc2libGluZ0VsZW1lbnRzLm1hcCggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5wYXJlbnRzKFwiZm9ybVwiKVswXTtcclxuICAgICAgICAgIH0pLnRvQXJyYXkoKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgICQodW5pcXVlRm9ybXMpLmJpbmQoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZhciAkZm9ybSA9ICQodGhpcyk7XHJcbiAgICAgICAgICB2YXIgd2FybmluZ3NGb3VuZCA9IDA7XHJcbiAgICAgICAgICB2YXIgJGlucHV0cyA9ICRmb3JtLmZpbmQoXCJpbnB1dCx0ZXh0YXJlYSxzZWxlY3RcIikubm90KFwiW3R5cGU9c3VibWl0XSxbdHlwZT1pbWFnZV1cIikuZmlsdGVyKHNldHRpbmdzLm9wdGlvbnMuZmlsdGVyKTtcclxuICAgICAgICAgICRpbnB1dHMudHJpZ2dlcihcInN1Ym1pdC52YWxpZGF0aW9uXCIpLnRyaWdnZXIoXCJ2YWxpZGF0aW9uTG9zdEZvY3VzLnZhbGlkYXRpb25cIik7XHJcblxyXG4gICAgICAgICAgJGlucHV0cy5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKGVsKSxcclxuICAgICAgICAgICAgICAkY29udHJvbEdyb3VwID0gJHRoaXMucGFyZW50cyhcIi5mb3JtLWdyb3VwXCIpLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLmhhc0NsYXNzKFwid2FybmluZ1wiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLnJlbW92ZUNsYXNzKFwid2FybmluZ1wiKS5hZGRDbGFzcyhcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgIHdhcm5pbmdzRm91bmQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJGlucHV0cy50cmlnZ2VyKFwidmFsaWRhdGlvbkxvc3RGb2N1cy52YWxpZGF0aW9uXCIpO1xyXG5cclxuICAgICAgICAgIGlmICh3YXJuaW5nc0ZvdW5kKSB7XHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5vcHRpb25zLnByZXZlbnRTdWJtaXQpIHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGZvcm0uYWRkQ2xhc3MoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5ncy5vcHRpb25zLnN1Ym1pdEVycm9yKSkge1xyXG4gICAgICAgICAgICAgIHNldHRpbmdzLm9wdGlvbnMuc3VibWl0RXJyb3IoJGZvcm0sIGUsICRpbnB1dHMuanFCb290c3RyYXBWYWxpZGF0aW9uKFwiY29sbGVjdEVycm9yc1wiLCB0cnVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRmb3JtLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZ3Mub3B0aW9ucy5zdWJtaXRTdWNjZXNzKSkge1xyXG4gICAgICAgICAgICAgIHNldHRpbmdzLm9wdGlvbnMuc3VibWl0U3VjY2VzcygkZm9ybSwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgIC8vIEdldCByZWZlcmVuY2VzIHRvIGV2ZXJ5dGhpbmcgd2UncmUgaW50ZXJlc3RlZCBpblxyXG4gICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgJGNvbnRyb2xHcm91cCA9ICR0aGlzLnBhcmVudHMoXCIuZm9ybS1ncm91cFwiKS5maXJzdCgpLFxyXG4gICAgICAgICAgICAkaGVscEJsb2NrID0gJGNvbnRyb2xHcm91cC5maW5kKFwiLmhlbHAtYmxvY2tcIikuZmlyc3QoKSxcclxuICAgICAgICAgICAgJGZvcm0gPSAkdGhpcy5wYXJlbnRzKFwiZm9ybVwiKS5maXJzdCgpLFxyXG4gICAgICAgICAgICB2YWxpZGF0b3JOYW1lcyA9IFtdO1xyXG5cclxuICAgICAgICAgIC8vIGNyZWF0ZSBtZXNzYWdlIGNvbnRhaW5lciBpZiBub3QgZXhpc3RzXHJcbiAgICAgICAgICBpZiAoISRoZWxwQmxvY2subGVuZ3RoICYmIHNldHRpbmdzLm9wdGlvbnMuYXV0b0FkZCAmJiBzZXR0aW5ncy5vcHRpb25zLmF1dG9BZGQuaGVscEJsb2Nrcykge1xyXG4gICAgICAgICAgICAgICRoZWxwQmxvY2sgPSAkKCc8ZGl2IGNsYXNzPVwiaGVscC1ibG9ja1wiIC8+Jyk7XHJcbiAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5maW5kKCcuY29udHJvbHMnKS5hcHBlbmQoJGhlbHBCbG9jayk7XHJcblx0XHRcdFx0XHRcdFx0Y3JlYXRlZEVsZW1lbnRzLnB1c2goJGhlbHBCbG9ja1swXSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU05JRkYgSFRNTCBGT1IgVkFMSURBVE9SU1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgIC8vICpzbm9ydCBzbmlmZiBzbnVmZmxlKlxyXG5cclxuICAgICAgICAgIGlmIChzZXR0aW5ncy5vcHRpb25zLnNuaWZmSHRtbCkge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBVFRFUk5cclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwicGF0dGVyblwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiTm90IGluIHRoZSBleHBlY3RlZCBmb3JtYXQ8IS0tIGRhdGEtdmFsaWRhdGlvbi1wYXR0ZXJuLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCI7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uUGF0dGVybk1lc3NhZ2VcIikpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblBhdHRlcm5NZXNzYWdlXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblBhdHRlcm5NZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uUGF0dGVyblJlZ2V4XCIsICR0aGlzLmF0dHIoXCJwYXR0ZXJuXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTUFYXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcIm1heFwiKSAhPT0gdW5kZWZpbmVkIHx8ICR0aGlzLmF0dHIoXCJhcmlhLXZhbHVlbWF4XCIpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICB2YXIgbWF4ID0gKCR0aGlzLmF0dHIoXCJtYXhcIikgIT09IHVuZGVmaW5lZCA/ICR0aGlzLmF0dHIoXCJtYXhcIikgOiAkdGhpcy5hdHRyKFwiYXJpYS12YWx1ZW1heFwiKSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVG9vIGhpZ2g6IE1heGltdW0gb2YgJ1wiICsgbWF4ICsgXCInPCEtLSBkYXRhLXZhbGlkYXRpb24tbWF4LW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCI7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4TWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4TWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhNZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4TWF4XCIsIG1heCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1JTlxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgaWYgKCR0aGlzLmF0dHIoXCJtaW5cIikgIT09IHVuZGVmaW5lZCB8fCAkdGhpcy5hdHRyKFwiYXJpYS12YWx1ZW1pblwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgdmFyIG1pbiA9ICgkdGhpcy5hdHRyKFwibWluXCIpICE9PSB1bmRlZmluZWQgPyAkdGhpcy5hdHRyKFwibWluXCIpIDogJHRoaXMuYXR0cihcImFyaWEtdmFsdWVtaW5cIikpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlRvbyBsb3c6IE1pbmltdW0gb2YgJ1wiICsgbWluICsgXCInPCEtLSBkYXRhLXZhbGlkYXRpb24tbWluLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCI7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWluTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWluTWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5NZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWluTWluXCIsIG1pbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1BWExFTkdUSFxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgaWYgKCR0aGlzLmF0dHIoXCJtYXhsZW5ndGhcIikgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlRvbyBsb25nOiBNYXhpbXVtIG9mICdcIiArICR0aGlzLmF0dHIoXCJtYXhsZW5ndGhcIikgKyBcIicgY2hhcmFjdGVyczwhLS0gZGF0YS12YWxpZGF0aW9uLW1heGxlbmd0aC1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiO1xyXG4gICAgICAgICAgICAgIGlmICgkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGxlbmd0aE1lc3NhZ2VcIikpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGxlbmd0aE1lc3NhZ2VcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4bGVuZ3RoTWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGxlbmd0aE1heGxlbmd0aFwiLCAkdGhpcy5hdHRyKFwibWF4bGVuZ3RoXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTUlOTEVOR1RIXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcIm1pbmxlbmd0aFwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVG9vIHNob3J0OiBNaW5pbXVtIG9mICdcIiArICR0aGlzLmF0dHIoXCJtaW5sZW5ndGhcIikgKyBcIicgY2hhcmFjdGVyczwhLS0gZGF0YS12YWxpZGF0aW9uLW1pbmxlbmd0aC1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiO1xyXG4gICAgICAgICAgICAgIGlmICgkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmxlbmd0aE1lc3NhZ2VcIikpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmxlbmd0aE1lc3NhZ2VcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWlubGVuZ3RoTWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmxlbmd0aE1pbmxlbmd0aFwiLCAkdGhpcy5hdHRyKFwibWlubGVuZ3RoXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFUVVJUkVEXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcInJlcXVpcmVkXCIpICE9PSB1bmRlZmluZWQgfHwgJHRoaXMuYXR0cihcImFyaWEtcmVxdWlyZWRcIikgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBzZXR0aW5ncy5idWlsdEluVmFsaWRhdG9ycy5yZXF1aXJlZC5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgIGlmICgkdGhpcy5kYXRhKFwidmFsaWRhdGlvblJlcXVpcmVkTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uUmVxdWlyZWRNZXNzYWdlXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblJlcXVpcmVkTWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTlVNQkVSXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcInR5cGVcIikgIT09IHVuZGVmaW5lZCAmJiAkdGhpcy5hdHRyKFwidHlwZVwiKS50b0xvd2VyQ2FzZSgpID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IHNldHRpbmdzLmJ1aWx0SW5WYWxpZGF0b3JzLm51bWJlci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgIGlmICgkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk51bWJlck1lc3NhZ2VcIikpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk51bWJlck1lc3NhZ2VcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTnVtYmVyTWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNQUlMXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcInR5cGVcIikgIT09IHVuZGVmaW5lZCAmJiAkdGhpcy5hdHRyKFwidHlwZVwiKS50b0xvd2VyQ2FzZSgpID09PSBcImVtYWlsXCIpIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJOb3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzPCEtLSBkYXRhLXZhbGlkYXRvci12YWxpZGVtYWlsLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCI7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uVmFsaWRlbWFpbE1lc3NhZ2VcIikpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblZhbGlkZW1haWxNZXNzYWdlXCIpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25FbWFpbE1lc3NhZ2VcIikpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbkVtYWlsTWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25WYWxpZGVtYWlsTWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNSU5DSEVDS0VEXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcIm1pbmNoZWNrZWRcIikgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIk5vdCBlbm91Z2ggb3B0aW9ucyBjaGVja2VkOyBNaW5pbXVtIG9mICdcIiArICR0aGlzLmF0dHIoXCJtaW5jaGVja2VkXCIpICsgXCInIHJlcXVpcmVkPCEtLSBkYXRhLXZhbGlkYXRpb24tbWluY2hlY2tlZC1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiO1xyXG4gICAgICAgICAgICAgIGlmICgkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmNoZWNrZWRNZXNzYWdlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5jaGVja2VkTWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5jaGVja2VkTWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmNoZWNrZWRNaW5jaGVja2VkXCIsICR0aGlzLmF0dHIoXCJtaW5jaGVja2VkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNQVhDSEVDS0VEXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcIm1heGNoZWNrZWRcIikgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlRvbyBtYW55IG9wdGlvbnMgY2hlY2tlZDsgTWF4aW11bSBvZiAnXCIgKyAkdGhpcy5hdHRyKFwibWF4Y2hlY2tlZFwiKSArIFwiJyByZXF1aXJlZDwhLS0gZGF0YS12YWxpZGF0aW9uLW1heGNoZWNrZWQtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcclxuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhjaGVja2VkTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4Y2hlY2tlZE1lc3NhZ2VcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4Y2hlY2tlZE1lc3NhZ2VcIiwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhjaGVja2VkTWF4Y2hlY2tlZFwiLCAkdGhpcy5hdHRyKFwibWF4Y2hlY2tlZFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENPTExFQ1QgVkFMSURBVE9SIE5BTUVTXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgLy8gR2V0IG5hbWVkIHZhbGlkYXRvcnNcclxuICAgICAgICAgIGlmICgkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWVzID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIikuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIEdldCBleHRyYSBvbmVzIGRlZmluZWQgb24gdGhlIGVsZW1lbnQncyBkYXRhIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICQuZWFjaCgkdGhpcy5kYXRhKCksIGZ1bmN0aW9uIChpLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgcGFydHMgPSBpLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIsJDFcIikuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICBpZiAocGFydHNbMF0gPT09IFwidmFsaWRhdGlvblwiICYmIHBhcnRzWzFdKSB7XHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9yTmFtZXMucHVzaChwYXJ0c1sxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PUk1BTElTRSBWQUxJREFUT1IgTkFNRVNcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgICB2YXIgdmFsaWRhdG9yTmFtZXNUb0luc3BlY3QgPSB2YWxpZGF0b3JOYW1lcztcclxuICAgICAgICAgIHZhciBuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdCA9IFtdO1xyXG5cclxuICAgICAgICAgIGRvIC8vIHJlcGVhdGVkbHkgZXhwYW5kICdzaG9ydGN1dCcgdmFsaWRhdG9ycyBpbnRvIHRoZWlyIHJlYWwgdmFsaWRhdG9yc1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBVcHBlcmNhc2Ugb25seSB0aGUgZmlyc3QgbGV0dGVyIG9mIGVhY2ggbmFtZVxyXG4gICAgICAgICAgICAkLmVhY2godmFsaWRhdG9yTmFtZXMsIGZ1bmN0aW9uIChpLCBlbCkge1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRvck5hbWVzW2ldID0gZm9ybWF0VmFsaWRhdG9yTmFtZShlbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZSB2YWxpZGF0b3IgbmFtZXNcclxuICAgICAgICAgICAgdmFsaWRhdG9yTmFtZXMgPSAkLnVuaXF1ZSh2YWxpZGF0b3JOYW1lcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBQdWxsIG91dCB0aGUgbmV3IHZhbGlkYXRvciBuYW1lcyBmcm9tIGVhY2ggc2hvcnRjdXRcclxuICAgICAgICAgICAgbmV3VmFsaWRhdG9yTmFtZXNUb0luc3BlY3QgPSBbXTtcclxuICAgICAgICAgICAgJC5lYWNoKHZhbGlkYXRvck5hbWVzVG9JbnNwZWN0LCBmdW5jdGlvbihpLCBlbCkge1xyXG4gICAgICAgICAgICAgIGlmICgkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgZWwgKyBcIlNob3J0Y3V0XCIpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFyZSB0aGVzZSBjdXN0b20gdmFsaWRhdG9ycz9cclxuICAgICAgICAgICAgICAgIC8vIFB1bGwgdGhlbSBvdXQhXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIGVsICsgXCJTaG9ydGN1dFwiKS5zcGxpdChcIixcIiksIGZ1bmN0aW9uKGkyLCBlbDIpIHtcclxuICAgICAgICAgICAgICAgICAgbmV3VmFsaWRhdG9yTmFtZXNUb0luc3BlY3QucHVzaChlbDIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5ncy5idWlsdEluVmFsaWRhdG9yc1tlbC50b0xvd2VyQ2FzZSgpXSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSXMgdGhpcyBhIHJlY29nbmlzZWQgYnVpbHQtaW4/XHJcbiAgICAgICAgICAgICAgICAvLyBQdWxsIGl0IG91dCFcclxuICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0b3IgPSBzZXR0aW5ncy5idWlsdEluVmFsaWRhdG9yc1tlbC50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3IudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInNob3J0Y3V0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgJC5lYWNoKHZhbGlkYXRvci5zaG9ydGN1dC5zcGxpdChcIixcIiksIGZ1bmN0aW9uIChpLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsID0gZm9ybWF0VmFsaWRhdG9yTmFtZShlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsaWRhdG9yTmFtZXNUb0luc3BlY3QucHVzaChlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yTmFtZXMucHVzaChlbCk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YWxpZGF0b3JOYW1lc1RvSW5zcGVjdCA9IG5ld1ZhbGlkYXRvck5hbWVzVG9JbnNwZWN0O1xyXG5cclxuICAgICAgICAgIH0gd2hpbGUgKHZhbGlkYXRvck5hbWVzVG9JbnNwZWN0Lmxlbmd0aCA+IDApXHJcblxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTRVQgVVAgVkFMSURBVE9SIEFSUkFZU1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgIHZhciB2YWxpZGF0b3JzID0ge307XHJcblxyXG4gICAgICAgICAgJC5lYWNoKHZhbGlkYXRvck5hbWVzLCBmdW5jdGlvbiAoaSwgZWwpIHtcclxuICAgICAgICAgICAgLy8gU2V0IHVwIHRoZSAnb3ZlcnJpZGUnIG1lc3NhZ2VcclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgZWwgKyBcIk1lc3NhZ2VcIik7XHJcbiAgICAgICAgICAgIHZhciBoYXNPdmVycmlkZU1lc3NhZ2UgPSAobWVzc2FnZSAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgdmFyIGZvdW5kVmFsaWRhdG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPVxyXG4gICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgPyBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgIDogXCInXCIgKyBlbCArIFwiJyB2YWxpZGF0aW9uIGZhaWxlZCA8IS0tIEFkZCBhdHRyaWJ1dGUgJ2RhdGEtdmFsaWRhdGlvbi1cIiArIGVsLnRvTG93ZXJDYXNlKCkgKyBcIi1tZXNzYWdlJyB0byBpbnB1dCB0byBjaGFuZ2UgdGhpcyBtZXNzYWdlIC0tPlwiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA7XHJcblxyXG4gICAgICAgICAgICAkLmVhY2goXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3MudmFsaWRhdG9yVHlwZXMsXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHZhbGlkYXRvclR5cGUsIHZhbGlkYXRvclRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdG9yc1t2YWxpZGF0b3JUeXBlXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnNbdmFsaWRhdG9yVHlwZV0gPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghZm91bmRWYWxpZGF0b3IgJiYgJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIGVsICsgZm9ybWF0VmFsaWRhdG9yTmFtZSh2YWxpZGF0b3JUZW1wbGF0ZS5uYW1lKSkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzW3ZhbGlkYXRvclR5cGVdLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgJC5leHRlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmb3JtYXRWYWxpZGF0b3JOYW1lKHZhbGlkYXRvclRlbXBsYXRlLm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yVGVtcGxhdGUuaW5pdCgkdGhpcywgZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBmb3VuZFZhbGlkYXRvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFmb3VuZFZhbGlkYXRvciAmJiBzZXR0aW5ncy5idWlsdEluVmFsaWRhdG9yc1tlbC50b0xvd2VyQ2FzZSgpXSkge1xyXG5cclxuICAgICAgICAgICAgICB2YXIgdmFsaWRhdG9yID0gJC5leHRlbmQodHJ1ZSwge30sIHNldHRpbmdzLmJ1aWx0SW5WYWxpZGF0b3JzW2VsLnRvTG93ZXJDYXNlKCldKTtcclxuICAgICAgICAgICAgICBpZiAoaGFzT3ZlcnJpZGVNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHZhciB2YWxpZGF0b3JUeXBlID0gdmFsaWRhdG9yLnR5cGUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvclR5cGUgPT09IFwic2hvcnRjdXRcIikge1xyXG4gICAgICAgICAgICAgICAgZm91bmRWYWxpZGF0b3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2goXHJcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnZhbGlkYXRvclR5cGVzLFxyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodmFsaWRhdG9yVGVtcGxhdGVUeXBlLCB2YWxpZGF0b3JUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3JzW3ZhbGlkYXRvclRlbXBsYXRlVHlwZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yc1t2YWxpZGF0b3JUZW1wbGF0ZVR5cGVdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZm91bmRWYWxpZGF0b3IgJiYgdmFsaWRhdG9yVHlwZSA9PT0gdmFsaWRhdG9yVGVtcGxhdGVUeXBlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBlbCArIGZvcm1hdFZhbGlkYXRvck5hbWUodmFsaWRhdG9yVGVtcGxhdGUubmFtZSksIHZhbGlkYXRvclt2YWxpZGF0b3JUZW1wbGF0ZS5uYW1lLnRvTG93ZXJDYXNlKCldKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnNbdmFsaWRhdG9yVHlwZV0ucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5leHRlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvclRlbXBsYXRlLmluaXQoJHRoaXMsIGVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm91bmRWYWxpZGF0b3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghIGZvdW5kVmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgICAgJC5lcnJvcihcIkNhbm5vdCBmaW5kIHZhbGlkYXRpb24gaW5mbyBmb3IgJ1wiICsgZWwgKyBcIidcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVE9SRSBGQUxMQkFDSyBWQUxVRVNcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgICAkaGVscEJsb2NrLmRhdGEoXHJcbiAgICAgICAgICAgIFwib3JpZ2luYWwtY29udGVudHNcIixcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpXHJcbiAgICAgICAgICAgICAgICA/ICRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpXHJcbiAgICAgICAgICAgICAgICA6ICRoZWxwQmxvY2suaHRtbCgpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgJGhlbHBCbG9jay5kYXRhKFxyXG4gICAgICAgICAgICBcIm9yaWdpbmFsLXJvbGVcIixcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLXJvbGVcIilcclxuICAgICAgICAgICAgICAgID8gJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtcm9sZVwiKVxyXG4gICAgICAgICAgICAgICAgOiAkaGVscEJsb2NrLmF0dHIoXCJyb2xlXCIpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgJGNvbnRyb2xHcm91cC5kYXRhKFxyXG4gICAgICAgICAgICBcIm9yaWdpbmFsLWNsYXNzZXNcIixcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICRjb250cm9sR3JvdXAuZGF0YShcIm9yaWdpbmFsLWNsYXNlc1wiKVxyXG4gICAgICAgICAgICAgICAgPyAkY29udHJvbEdyb3VwLmRhdGEoXCJvcmlnaW5hbC1jbGFzc2VzXCIpXHJcbiAgICAgICAgICAgICAgICA6ICRjb250cm9sR3JvdXAuYXR0cihcImNsYXNzXCIpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgJHRoaXMuZGF0YShcclxuICAgICAgICAgICAgXCJvcmlnaW5hbC1hcmlhLWludmFsaWRcIixcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJvcmlnaW5hbC1hcmlhLWludmFsaWRcIilcclxuICAgICAgICAgICAgICAgID8gJHRoaXMuZGF0YShcIm9yaWdpbmFsLWFyaWEtaW52YWxpZFwiKVxyXG4gICAgICAgICAgICAgICAgOiAkdGhpcy5hdHRyKFwiYXJpYS1pbnZhbGlkXCIpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFMSURBVElPTlxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgICR0aGlzLmJpbmQoXHJcbiAgICAgICAgICAgIFwidmFsaWRhdGlvbi52YWxpZGF0aW9uXCIsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChldmVudCwgcGFyYW1zKSB7XHJcblxyXG4gICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlKCR0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgLy8gR2V0IGEgbGlzdCBvZiB0aGUgZXJyb3JzIHRvIGFwcGx5XHJcbiAgICAgICAgICAgICAgdmFyIGVycm9yc0ZvdW5kID0gW107XHJcblxyXG4gICAgICAgICAgICAgICQuZWFjaCh2YWxpZGF0b3JzLCBmdW5jdGlvbiAodmFsaWRhdG9yVHlwZSwgdmFsaWRhdG9yVHlwZUFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgfHwgdmFsdWUubGVuZ3RoIHx8IChwYXJhbXMgJiYgcGFyYW1zLmluY2x1ZGVFbXB0eSkgfHwgKCEhc2V0dGluZ3MudmFsaWRhdG9yVHlwZXNbdmFsaWRhdG9yVHlwZV0uYmxvY2tTdWJtaXQgJiYgcGFyYW1zICYmICEhcGFyYW1zLnN1Ym1pdHRpbmcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICQuZWFjaCh2YWxpZGF0b3JUeXBlQXJyYXksIGZ1bmN0aW9uIChpLCB2YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MudmFsaWRhdG9yVHlwZXNbdmFsaWRhdG9yVHlwZV0udmFsaWRhdGUoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcnNGb3VuZC5wdXNoKHZhbGlkYXRvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gZXJyb3JzRm91bmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgJHRoaXMuYmluZChcclxuICAgICAgICAgICAgXCJnZXRWYWxpZGF0b3JzLnZhbGlkYXRpb25cIixcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3JzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV0FUQ0ggRk9SIENIQU5HRVNcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICR0aGlzLmJpbmQoXHJcbiAgICAgICAgICAgIFwic3VibWl0LnZhbGlkYXRpb25cIixcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAkdGhpcy50cmlnZ2VySGFuZGxlcihcImNoYW5nZS52YWxpZGF0aW9uXCIsIHtzdWJtaXR0aW5nOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAkdGhpcy5iaW5kKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgXCJrZXl1cFwiLFxyXG4gICAgICAgICAgICAgIFwiZm9jdXNcIixcclxuICAgICAgICAgICAgICBcImJsdXJcIixcclxuICAgICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgICAgXCJrZXlkb3duXCIsXHJcbiAgICAgICAgICAgICAgXCJrZXlwcmVzc1wiLFxyXG4gICAgICAgICAgICAgIFwiY2hhbmdlXCJcclxuICAgICAgICAgICAgXS5qb2luKFwiLnZhbGlkYXRpb24gXCIpICsgXCIudmFsaWRhdGlvblwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSwgcGFyYW1zKSB7XHJcblxyXG4gICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlKCR0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIGVycm9yc0ZvdW5kID0gW107XHJcblxyXG4gICAgICAgICAgICAgICRjb250cm9sR3JvdXAuZmluZChcImlucHV0LHRleHRhcmVhLHNlbGVjdFwiKS5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9sZENvdW50ID0gZXJyb3JzRm91bmQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKCQoZWwpLnRyaWdnZXJIYW5kbGVyKFwidmFsaWRhdGlvbi52YWxpZGF0aW9uXCIsIHBhcmFtcyksIGZ1bmN0aW9uIChqLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgIGVycm9yc0ZvdW5kLnB1c2gobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcnNGb3VuZC5sZW5ndGggPiBvbGRDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAkKGVsKS5hdHRyKFwiYXJpYS1pbnZhbGlkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbCA9ICR0aGlzLmRhdGEoXCJvcmlnaW5hbC1hcmlhLWludmFsaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICQoZWwpLmF0dHIoXCJhcmlhLWludmFsaWRcIiwgKG9yaWdpbmFsICE9PSB1bmRlZmluZWQgPyBvcmlnaW5hbCA6IGZhbHNlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICRmb3JtLmZpbmQoXCJpbnB1dCxzZWxlY3QsdGV4dGFyZWFcIikubm90KCR0aGlzKS5ub3QoXCJbbmFtZT1cXFwiXCIgKyAkdGhpcy5hdHRyKFwibmFtZVwiKSArIFwiXFxcIl1cIikudHJpZ2dlcihcInZhbGlkYXRpb25Mb3N0Rm9jdXMudmFsaWRhdGlvblwiKTtcclxuXHJcbiAgICAgICAgICAgICAgZXJyb3JzRm91bmQgPSAkLnVuaXF1ZShlcnJvcnNGb3VuZC5zb3J0KCkpO1xyXG5cclxuICAgICAgICAgICAgICAvLyBXZXJlIHRoZXJlIGFueSBlcnJvcnM/XHJcbiAgICAgICAgICAgICAgaWYgKGVycm9yc0ZvdW5kLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQmV0dGVyIGZsYWcgaXQgdXAgYXMgYSB3YXJuaW5nLlxyXG4gICAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5yZW1vdmVDbGFzcyhcInN1Y2Nlc3MgZXJyb3JcIikuYWRkQ2xhc3MoXCJ3YXJuaW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhvdyBtYW55IGVycm9ycyBkaWQgd2UgZmluZD9cclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5vcHRpb25zLnNlbWFudGljYWxseVN0cmljdCAmJiBlcnJvcnNGb3VuZC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gT25seSBvbmU/IEJlaW5nIHN0cmljdD8gSnVzdCBvdXRwdXQgaXQuXHJcbiAgICAgICAgICAgICAgICAgICRoZWxwQmxvY2suaHRtbChlcnJvcnNGb3VuZFswXSArIFxyXG4gICAgICAgICAgICAgICAgICAgICggc2V0dGluZ3Mub3B0aW9ucy5wcmVwZW5kRXhpc3RpbmdIZWxwQmxvY2sgPyAkaGVscEJsb2NrLmRhdGEoXCJvcmlnaW5hbC1jb250ZW50c1wiKSA6IFwiXCIgKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAvLyBNdWx0aXBsZT8gQmVpbmcgc2xvcHB5PyBHbHVlIHRoZW0gdG9nZXRoZXIgaW50byBhbiBVTC5cclxuICAgICAgICAgICAgICAgICAgJGhlbHBCbG9jay5odG1sKFwiPHVsIHJvbGU9XFxcImFsZXJ0XFxcIj48bGk+XCIgKyBlcnJvcnNGb3VuZC5qb2luKFwiPC9saT48bGk+XCIpICsgXCI8L2xpPjwvdWw+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICggc2V0dGluZ3Mub3B0aW9ucy5wcmVwZW5kRXhpc3RpbmdIZWxwQmxvY2sgPyAkaGVscEJsb2NrLmRhdGEoXCJvcmlnaW5hbC1jb250ZW50c1wiKSA6IFwiXCIgKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRjb250cm9sR3JvdXAucmVtb3ZlQ2xhc3MoXCJ3YXJuaW5nIGVycm9yIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLmFkZENsYXNzKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRoZWxwQmxvY2suaHRtbCgkaGVscEJsb2NrLmRhdGEoXCJvcmlnaW5hbC1jb250ZW50c1wiKSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAoZS50eXBlID09PSBcImJsdXJcIikge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5yZW1vdmVDbGFzcyhcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgJHRoaXMuYmluZChcInZhbGlkYXRpb25Mb3N0Rm9jdXMudmFsaWRhdGlvblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRjb250cm9sR3JvdXAucmVtb3ZlQ2xhc3MoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlc3Ryb3kgOiBmdW5jdGlvbiggKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goXHJcbiAgICAgICAgICBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhclxyXG4gICAgICAgICAgICAgICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAkY29udHJvbEdyb3VwID0gJHRoaXMucGFyZW50cyhcIi5mb3JtLWdyb3VwXCIpLmZpcnN0KCksXHJcbiAgICAgICAgICAgICAgJGhlbHBCbG9jayA9ICRjb250cm9sR3JvdXAuZmluZChcIi5oZWxwLWJsb2NrXCIpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZW1vdmUgb3VyIGV2ZW50c1xyXG4gICAgICAgICAgICAkdGhpcy51bmJpbmQoJy52YWxpZGF0aW9uJyk7IC8vIGV2ZW50cyBhcmUgbmFtZXNwYWNlZC5cclxuICAgICAgICAgICAgLy8gcmVzZXQgaGVscCB0ZXh0XHJcbiAgICAgICAgICAgICRoZWxwQmxvY2suaHRtbCgkaGVscEJsb2NrLmRhdGEoXCJvcmlnaW5hbC1jb250ZW50c1wiKSk7XHJcbiAgICAgICAgICAgIC8vIHJlc2V0IGNsYXNzZXNcclxuICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5hdHRyKFwiY2xhc3NcIiwgJGNvbnRyb2xHcm91cC5kYXRhKFwib3JpZ2luYWwtY2xhc3Nlc1wiKSk7XHJcbiAgICAgICAgICAgIC8vIHJlc2V0IGFyaWFcclxuICAgICAgICAgICAgJHRoaXMuYXR0cihcImFyaWEtaW52YWxpZFwiLCAkdGhpcy5kYXRhKFwib3JpZ2luYWwtYXJpYS1pbnZhbGlkXCIpKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgcm9sZVxyXG4gICAgICAgICAgICAkaGVscEJsb2NrLmF0dHIoXCJyb2xlXCIsICR0aGlzLmRhdGEoXCJvcmlnaW5hbC1yb2xlXCIpKTtcclxuXHRcdFx0XHRcdFx0Ly8gcmVtb3ZlIGFsbCBlbGVtZW50cyB3ZSBjcmVhdGVkXHJcblx0XHRcdFx0XHRcdGlmIChjcmVhdGVkRWxlbWVudHMuaW5kZXhPZigkaGVscEJsb2NrWzBdKSA+IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0JGhlbHBCbG9jay5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgfSxcclxuICAgICAgY29sbGVjdEVycm9ycyA6IGZ1bmN0aW9uKGluY2x1ZGVFbXB0eSkge1xyXG5cclxuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcclxuICAgICAgICAgIHZhciAkZWwgPSAkKGVsKTtcclxuICAgICAgICAgIHZhciBuYW1lID0gJGVsLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgdmFyIGVycm9ycyA9ICRlbC50cmlnZ2VySGFuZGxlcihcInZhbGlkYXRpb24udmFsaWRhdGlvblwiLCB7aW5jbHVkZUVtcHR5OiB0cnVlfSk7XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2VzW25hbWVdID0gJC5leHRlbmQodHJ1ZSwgZXJyb3JzLCBlcnJvck1lc3NhZ2VzW25hbWVdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJC5lYWNoKGVycm9yTWVzc2FnZXMsIGZ1bmN0aW9uIChpLCBlbCkge1xyXG4gICAgICAgICAgaWYgKGVsLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBkZWxldGUgZXJyb3JNZXNzYWdlc1tpXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZXM7XHJcblxyXG4gICAgICB9LFxyXG4gICAgICBoYXNFcnJvcnM6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2VzID0gZXJyb3JNZXNzYWdlcy5jb25jYXQoXHJcbiAgICAgICAgICAgICQoZWwpLnRyaWdnZXJIYW5kbGVyKFwiZ2V0VmFsaWRhdG9ycy52YWxpZGF0aW9uXCIpID8gJChlbCkudHJpZ2dlckhhbmRsZXIoXCJ2YWxpZGF0aW9uLnZhbGlkYXRpb25cIiwge3N1Ym1pdHRpbmc6IHRydWV9KSA6IFtdXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKGVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG92ZXJyaWRlIDogZnVuY3Rpb24gKG5ld0RlZmF1bHRzKSB7XHJcbiAgICAgICAgZGVmYXVsdHMgPSAkLmV4dGVuZCh0cnVlLCBkZWZhdWx0cywgbmV3RGVmYXVsdHMpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cdFx0dmFsaWRhdG9yVHlwZXM6IHtcclxuICAgICAgY2FsbGJhY2s6IHtcclxuICAgICAgICBuYW1lOiBcImNhbGxiYWNrXCIsXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIkNhbGxiYWNrXCIpLFxyXG4gICAgICAgICAgICBsYXN0VmFsdWU6ICR0aGlzLnZhbCgpLFxyXG4gICAgICAgICAgICBsYXN0VmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGxhc3RGaW5pc2hlZDogdHJ1ZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcclxuICAgICAgICAgIGlmICh2YWxpZGF0b3IubGFzdFZhbHVlID09PSB2YWx1ZSAmJiB2YWxpZGF0b3IubGFzdEZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhdmFsaWRhdG9yLmxhc3RWYWxpZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodmFsaWRhdG9yLmxhc3RGaW5pc2hlZCA9PT0gdHJ1ZSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmxhc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmxhc3RGaW5pc2hlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJyanFidlZhbGlkYXRvciA9IHZhbGlkYXRvcjtcclxuICAgICAgICAgICAgdmFyIHJyanFidlRoaXMgPSAkdGhpcztcclxuICAgICAgICAgICAgZXhlY3V0ZUZ1bmN0aW9uQnlOYW1lKFxyXG4gICAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsYmFjayxcclxuICAgICAgICAgICAgICB3aW5kb3csXHJcbiAgICAgICAgICAgICAgJHRoaXMsXHJcbiAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChycmpxYnZWYWxpZGF0b3IubGFzdFZhbHVlID09PSBkYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJyanFidlZhbGlkYXRvci5sYXN0VmFsaWQgPSBkYXRhLnZhbGlkO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZGF0YS5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnJqcWJ2VmFsaWRhdG9yLm1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcnJqcWJ2VmFsaWRhdG9yLmxhc3RGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIHJyanFidlRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIHJyanFidlZhbGlkYXRvci52YWxpZGF0b3JOYW1lICsgXCJNZXNzYWdlXCIsIHJyanFidlZhbGlkYXRvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgLy8gVGltZW91dCBpcyBzZXQgdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgZXZlbnRzIGJlaW5nIGNvbnNpZGVyZWQgJ2FscmVhZHkgZmlyZWQnXHJcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJyanFidlRoaXMudHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9LCAxKTsgLy8gZG9lc24ndCBuZWVkIGEgbG9uZyB0aW1lb3V0LCBqdXN0IGxvbmcgZW5vdWdoIGZvciB0aGUgZXZlbnQgYnViYmxlIHRvIGJ1cnN0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBhamF4OiB7XHJcbiAgICAgICAgbmFtZTogXCJhamF4XCIsXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJBamF4XCIpLFxyXG4gICAgICAgICAgICBsYXN0VmFsdWU6ICR0aGlzLnZhbCgpLFxyXG4gICAgICAgICAgICBsYXN0VmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGxhc3RGaW5pc2hlZDogdHJ1ZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcclxuICAgICAgICAgIGlmIChcIlwiK3ZhbGlkYXRvci5sYXN0VmFsdWUgPT09IFwiXCIrdmFsdWUgJiYgdmFsaWRhdG9yLmxhc3RGaW5pc2hlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yLmxhc3RWYWxpZCA9PT0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHZhbGlkYXRvci5sYXN0RmluaXNoZWQgPT09IHRydWUpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmxhc3RWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0RmluaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICB1cmw6IHZhbGlkYXRvci51cmwsXHJcbiAgICAgICAgICAgICAgZGF0YTogXCJ2YWx1ZT1cIiArIHZhbHVlICsgXCImZmllbGQ9XCIgKyAkdGhpcy5hdHRyKFwibmFtZVwiKSxcclxuICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcIlwiK3ZhbGlkYXRvci5sYXN0VmFsdWUgPT09IFwiXCIrZGF0YS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbGlkID0gISEoZGF0YS52YWxpZCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3IubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0b3IubGFzdEZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIHZhbGlkYXRvci52YWxpZGF0b3JOYW1lICsgXCJNZXNzYWdlXCIsIHZhbGlkYXRvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgLy8gVGltZW91dCBpcyBzZXQgdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgZXZlbnRzIGJlaW5nIGNvbnNpZGVyZWQgJ2FscmVhZHkgZmlyZWQnXHJcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnRyaWdnZXIoXCJjaGFuZ2UudmFsaWRhdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgfSwgMSk7IC8vIGRvZXNuJ3QgbmVlZCBhIGxvbmcgdGltZW91dCwganVzdCBsb25nIGVub3VnaCBmb3IgdGhlIGV2ZW50IGJ1YmJsZSB0byBidXJzdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZmFpbHVyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLmxhc3RWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IubWVzc2FnZSA9IFwiYWpheCBjYWxsIGZhaWxlZFwiO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLmxhc3RGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgdmFsaWRhdG9yLnZhbGlkYXRvck5hbWUgKyBcIk1lc3NhZ2VcIiwgdmFsaWRhdG9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gVGltZW91dCBpcyBzZXQgdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgZXZlbnRzIGJlaW5nIGNvbnNpZGVyZWQgJ2FscmVhZHkgZmlyZWQnXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgJHRoaXMudHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMSk7IC8vIGRvZXNuJ3QgbmVlZCBhIGxvbmcgdGltZW91dCwganVzdCBsb25nIGVub3VnaCBmb3IgdGhlIGV2ZW50IGJ1YmJsZSB0byBidXJzdFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcblx0XHRcdHJlZ2V4OiB7XHJcblx0XHRcdFx0bmFtZTogXCJyZWdleFwiLFxyXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHtyZWdleDogcmVnZXhGcm9tU3RyaW5nKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJSZWdleFwiKSl9O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xyXG5cdFx0XHRcdFx0cmV0dXJuICghdmFsaWRhdG9yLnJlZ2V4LnRlc3QodmFsdWUpICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxyXG5cdFx0XHRcdFx0XHR8fCAodmFsaWRhdG9yLnJlZ2V4LnRlc3QodmFsdWUpICYmIHZhbGlkYXRvci5uZWdhdGl2ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZXF1aXJlZDoge1xyXG5cdFx0XHRcdG5hbWU6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcclxuXHRcdFx0XHRcdHJldHVybiB7fTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcclxuXHRcdFx0XHRcdHJldHVybiAhISh2YWx1ZS5sZW5ndGggPT09IDAgICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxyXG5cdFx0XHRcdFx0XHR8fCAhISh2YWx1ZS5sZW5ndGggPiAwICYmIHZhbGlkYXRvci5uZWdhdGl2ZSk7XHJcblx0XHRcdFx0fSxcclxuICAgICAgICBibG9ja1N1Ym1pdDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtYXRjaDoge1xyXG5cdFx0XHRcdG5hbWU6IFwibWF0Y2hcIixcclxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcclxuXHRcdFx0XHRcdHZhciBlbGVtZW50ID0gJHRoaXMucGFyZW50cyhcImZvcm1cIikuZmlyc3QoKS5maW5kKFwiW25hbWU9XFxcIlwiICsgJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1hdGNoXCIpICsgXCJcXFwiXVwiKS5maXJzdCgpO1xyXG5cdFx0XHRcdFx0ZWxlbWVudC5iaW5kKFwidmFsaWRhdGlvbi52YWxpZGF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0JHRoaXMudHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIsIHtzdWJtaXR0aW5nOiB0cnVlfSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVybiB7XCJlbGVtZW50XCI6IGVsZW1lbnR9O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xyXG5cdFx0XHRcdFx0cmV0dXJuICh2YWx1ZSAhPT0gdmFsaWRhdG9yLmVsZW1lbnQudmFsKCkgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXHJcblx0XHRcdFx0XHRcdHx8ICh2YWx1ZSA9PT0gdmFsaWRhdG9yLmVsZW1lbnQudmFsKCkgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcclxuXHRcdFx0XHR9LFxyXG4gICAgICAgIGJsb2NrU3VibWl0OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdG1heDoge1xyXG5cdFx0XHRcdG5hbWU6IFwibWF4XCIsXHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge21heDogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1heFwiKX07XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKHBhcnNlRmxvYXQodmFsdWUsIDEwKSA+IHBhcnNlRmxvYXQodmFsaWRhdG9yLm1heCwgMTApICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxyXG5cdFx0XHRcdFx0XHR8fCAocGFyc2VGbG9hdCh2YWx1ZSwgMTApIDw9IHBhcnNlRmxvYXQodmFsaWRhdG9yLm1heCwgMTApICYmIHZhbGlkYXRvci5uZWdhdGl2ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtaW46IHtcclxuXHRcdFx0XHRuYW1lOiBcIm1pblwiLFxyXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHttaW46ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJNaW5cIil9O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChwYXJzZUZsb2F0KHZhbHVlKSA8IHBhcnNlRmxvYXQodmFsaWRhdG9yLm1pbikgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXHJcblx0XHRcdFx0XHRcdHx8IChwYXJzZUZsb2F0KHZhbHVlKSA+PSBwYXJzZUZsb2F0KHZhbGlkYXRvci5taW4pICYmIHZhbGlkYXRvci5uZWdhdGl2ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtYXhsZW5ndGg6IHtcclxuXHRcdFx0XHRuYW1lOiBcIm1heGxlbmd0aFwiLFxyXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHttYXhsZW5ndGg6ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJNYXhsZW5ndGhcIil9O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xyXG5cdFx0XHRcdFx0cmV0dXJuICgodmFsdWUubGVuZ3RoID4gdmFsaWRhdG9yLm1heGxlbmd0aCkgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXHJcblx0XHRcdFx0XHRcdHx8ICgodmFsdWUubGVuZ3RoIDw9IHZhbGlkYXRvci5tYXhsZW5ndGgpICYmIHZhbGlkYXRvci5uZWdhdGl2ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtaW5sZW5ndGg6IHtcclxuXHRcdFx0XHRuYW1lOiBcIm1pbmxlbmd0aFwiLFxyXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHttaW5sZW5ndGg6ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJNaW5sZW5ndGhcIil9O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xyXG5cdFx0XHRcdFx0cmV0dXJuICgodmFsdWUubGVuZ3RoIDwgdmFsaWRhdG9yLm1pbmxlbmd0aCkgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXHJcblx0XHRcdFx0XHRcdHx8ICgodmFsdWUubGVuZ3RoID49IHZhbGlkYXRvci5taW5sZW5ndGgpICYmIHZhbGlkYXRvci5uZWdhdGl2ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtYXhjaGVja2VkOiB7XHJcblx0XHRcdFx0bmFtZTogXCJtYXhjaGVja2VkXCIsXHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XHJcblx0XHRcdFx0XHR2YXIgZWxlbWVudHMgPSAkdGhpcy5wYXJlbnRzKFwiZm9ybVwiKS5maXJzdCgpLmZpbmQoXCJbbmFtZT1cXFwiXCIgKyAkdGhpcy5hdHRyKFwibmFtZVwiKSArIFwiXFxcIl1cIik7XHJcblx0XHRcdFx0XHRlbGVtZW50cy5iaW5kKFwiY2xpY2sudmFsaWRhdGlvblwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdCR0aGlzLnRyaWdnZXIoXCJjaGFuZ2UudmFsaWRhdGlvblwiLCB7aW5jbHVkZUVtcHR5OiB0cnVlfSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVybiB7bWF4Y2hlY2tlZDogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1heGNoZWNrZWRcIiksIGVsZW1lbnRzOiBlbGVtZW50c307XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKHZhbGlkYXRvci5lbGVtZW50cy5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGggPiB2YWxpZGF0b3IubWF4Y2hlY2tlZCAmJiAhIHZhbGlkYXRvci5uZWdhdGl2ZSlcclxuXHRcdFx0XHRcdFx0fHwgKHZhbGlkYXRvci5lbGVtZW50cy5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGggPD0gdmFsaWRhdG9yLm1heGNoZWNrZWQgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcclxuXHRcdFx0XHR9LFxyXG4gICAgICAgIGJsb2NrU3VibWl0OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdG1pbmNoZWNrZWQ6IHtcclxuXHRcdFx0XHRuYW1lOiBcIm1pbmNoZWNrZWRcIixcclxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcclxuXHRcdFx0XHRcdHZhciBlbGVtZW50cyA9ICR0aGlzLnBhcmVudHMoXCJmb3JtXCIpLmZpcnN0KCkuZmluZChcIltuYW1lPVxcXCJcIiArICR0aGlzLmF0dHIoXCJuYW1lXCIpICsgXCJcXFwiXVwiKTtcclxuXHRcdFx0XHRcdGVsZW1lbnRzLmJpbmQoXCJjbGljay52YWxpZGF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0JHRoaXMudHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIsIHtpbmNsdWRlRW1wdHk6IHRydWV9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHttaW5jaGVja2VkOiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgbmFtZSArIFwiTWluY2hlY2tlZFwiKSwgZWxlbWVudHM6IGVsZW1lbnRzfTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcclxuXHRcdFx0XHRcdHJldHVybiAodmFsaWRhdG9yLmVsZW1lbnRzLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA8IHZhbGlkYXRvci5taW5jaGVja2VkICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxyXG5cdFx0XHRcdFx0XHR8fCAodmFsaWRhdG9yLmVsZW1lbnRzLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+PSB2YWxpZGF0b3IubWluY2hlY2tlZCAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xyXG5cdFx0XHRcdH0sXHJcbiAgICAgICAgYmxvY2tTdWJtaXQ6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGJ1aWx0SW5WYWxpZGF0b3JzOiB7XHJcblx0XHRcdGVtYWlsOiB7XHJcblx0XHRcdFx0bmFtZTogXCJFbWFpbFwiLFxyXG5cdFx0XHRcdHR5cGU6IFwic2hvcnRjdXRcIixcclxuXHRcdFx0XHRzaG9ydGN1dDogXCJ2YWxpZGVtYWlsXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0dmFsaWRlbWFpbDoge1xyXG5cdFx0XHRcdG5hbWU6IFwiVmFsaWRlbWFpbFwiLFxyXG5cdFx0XHRcdHR5cGU6IFwicmVnZXhcIixcclxuXHRcdFx0XHRyZWdleDogXCJbQS1aYS16MC05Ll8lKy1dK0BbQS1aYS16MC05Li1dK1xcXFxcXC5bQS1aYS16XXsyLDR9XCIsXHJcblx0XHRcdFx0bWVzc2FnZTogXCJOb3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzPCEtLSBkYXRhLXZhbGlkYXRvci12YWxpZGVtYWlsLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0cGFzc3dvcmRhZ2Fpbjoge1xyXG5cdFx0XHRcdG5hbWU6IFwiUGFzc3dvcmRhZ2FpblwiLFxyXG5cdFx0XHRcdHR5cGU6IFwibWF0Y2hcIixcclxuXHRcdFx0XHRtYXRjaDogXCJwYXNzd29yZFwiLFxyXG5cdFx0XHRcdG1lc3NhZ2U6IFwiRG9lcyBub3QgbWF0Y2ggdGhlIGdpdmVuIHBhc3N3b3JkPCEtLSBkYXRhLXZhbGlkYXRvci1wYXN3b3JkYWdhaW4tbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwb3NpdGl2ZToge1xyXG5cdFx0XHRcdG5hbWU6IFwiUG9zaXRpdmVcIixcclxuXHRcdFx0XHR0eXBlOiBcInNob3J0Y3V0XCIsXHJcblx0XHRcdFx0c2hvcnRjdXQ6IFwibnVtYmVyLHBvc2l0aXZlbnVtYmVyXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0bmVnYXRpdmU6IHtcclxuXHRcdFx0XHRuYW1lOiBcIk5lZ2F0aXZlXCIsXHJcblx0XHRcdFx0dHlwZTogXCJzaG9ydGN1dFwiLFxyXG5cdFx0XHRcdHNob3J0Y3V0OiBcIm51bWJlcixuZWdhdGl2ZW51bWJlclwiXHJcblx0XHRcdH0sXHJcblx0XHRcdG51bWJlcjoge1xyXG5cdFx0XHRcdG5hbWU6IFwiTnVtYmVyXCIsXHJcblx0XHRcdFx0dHlwZTogXCJyZWdleFwiLFxyXG5cdFx0XHRcdHJlZ2V4OiBcIihbKy1dP1xcXFxcXGQrKFxcXFxcXC5cXFxcXFxkKik/KFtlRV1bKy1dP1swLTldKyk/KT9cIixcclxuXHRcdFx0XHRtZXNzYWdlOiBcIk11c3QgYmUgYSBudW1iZXI8IS0tIGRhdGEtdmFsaWRhdG9yLW51bWJlci1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdGludGVnZXI6IHtcclxuXHRcdFx0XHRuYW1lOiBcIkludGVnZXJcIixcclxuXHRcdFx0XHR0eXBlOiBcInJlZ2V4XCIsXHJcblx0XHRcdFx0cmVnZXg6IFwiWystXT9cXFxcXFxkK1wiLFxyXG5cdFx0XHRcdG1lc3NhZ2U6IFwiTm8gZGVjaW1hbCBwbGFjZXMgYWxsb3dlZDwhLS0gZGF0YS12YWxpZGF0b3ItaW50ZWdlci1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHBvc2l0aXZlbnVtYmVyOiB7XHJcblx0XHRcdFx0bmFtZTogXCJQb3NpdGl2ZW51bWJlclwiLFxyXG5cdFx0XHRcdHR5cGU6IFwibWluXCIsXHJcblx0XHRcdFx0bWluOiAwLFxyXG5cdFx0XHRcdG1lc3NhZ2U6IFwiTXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcjwhLS0gZGF0YS12YWxpZGF0b3ItcG9zaXRpdmVudW1iZXItbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRuZWdhdGl2ZW51bWJlcjoge1xyXG5cdFx0XHRcdG5hbWU6IFwiTmVnYXRpdmVudW1iZXJcIixcclxuXHRcdFx0XHR0eXBlOiBcIm1heFwiLFxyXG5cdFx0XHRcdG1heDogMCxcclxuXHRcdFx0XHRtZXNzYWdlOiBcIk11c3QgYmUgYSBuZWdhdGl2ZSBudW1iZXI8IS0tIGRhdGEtdmFsaWRhdG9yLW5lZ2F0aXZlbnVtYmVyLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0cmVxdWlyZWQ6IHtcclxuXHRcdFx0XHRuYW1lOiBcIlJlcXVpcmVkXCIsXHJcblx0XHRcdFx0dHlwZTogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdG1lc3NhZ2U6IFwiVGhpcyBpcyByZXF1aXJlZDwhLS0gZGF0YS12YWxpZGF0b3ItcmVxdWlyZWQtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGVja29uZToge1xyXG5cdFx0XHRcdG5hbWU6IFwiQ2hlY2tvbmVcIixcclxuXHRcdFx0XHR0eXBlOiBcIm1pbmNoZWNrZWRcIixcclxuXHRcdFx0XHRtaW5jaGVja2VkOiAxLFxyXG5cdFx0XHRcdG1lc3NhZ2U6IFwiQ2hlY2sgYXQgbGVhc3Qgb25lIG9wdGlvbjwhLS0gZGF0YS12YWxpZGF0aW9uLWNoZWNrb25lLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHZhciBmb3JtYXRWYWxpZGF0b3JOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuXHRcdHJldHVybiBuYW1lXHJcblx0XHRcdC50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdC5yZXBsYWNlKFxyXG5cdFx0XHRcdC8oXnxcXHMpKFthLXpdKS9nICxcclxuXHRcdFx0XHRmdW5jdGlvbihtLHAxLHAyKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcDErcDIudG9VcHBlckNhc2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdDtcclxuXHR9O1xyXG5cclxuXHR2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoJHRoaXMpIHtcclxuXHRcdC8vIEV4dHJhY3QgdGhlIHZhbHVlIHdlJ3JlIHRhbGtpbmcgYWJvdXRcclxuXHRcdHZhciB2YWx1ZSA9ICR0aGlzLnZhbCgpO1xyXG5cdFx0dmFyIHR5cGUgPSAkdGhpcy5hdHRyKFwidHlwZVwiKTtcclxuXHRcdGlmICh0eXBlID09PSBcImNoZWNrYm94XCIpIHtcclxuXHRcdFx0dmFsdWUgPSAoJHRoaXMuaXMoXCI6Y2hlY2tlZFwiKSA/IHZhbHVlIDogXCJcIik7XHJcblx0XHR9XHJcblx0XHRpZiAodHlwZSA9PT0gXCJyYWRpb1wiKSB7XHJcblx0XHRcdHZhbHVlID0gKCQoJ2lucHV0W25hbWU9XCInICsgJHRoaXMuYXR0cihcIm5hbWVcIikgKyAnXCJdOmNoZWNrZWQnKS5sZW5ndGggPiAwID8gdmFsdWUgOiBcIlwiKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9O1xyXG5cclxuICBmdW5jdGlvbiByZWdleEZyb21TdHJpbmcoaW5wdXRzdHJpbmcpIHtcclxuXHRcdHJldHVybiBuZXcgUmVnRXhwKFwiXlwiICsgaW5wdXRzdHJpbmcgKyBcIiRcIik7XHJcblx0fVxyXG5cclxuICAvKipcclxuICAgKiBUaGFua3MgdG8gSmFzb24gQnVudGluZyB2aWEgU3RhY2tPdmVyZmxvdy5jb21cclxuICAgKlxyXG4gICAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU5Nzg4L2hvdy10by1leGVjdXRlLWEtamF2YXNjcmlwdC1mdW5jdGlvbi13aGVuLWktaGF2ZS1pdHMtbmFtZS1hcy1hLXN0cmluZyNhbnN3ZXItMzU5OTEwXHJcbiAgICogU2hvcnQgbGluazogaHR0cDovL3Rpbnl1cmwuY29tL2V4ZWN1dGVGdW5jdGlvbkJ5TmFtZVxyXG4gICoqL1xyXG4gIGZ1bmN0aW9uIGV4ZWN1dGVGdW5jdGlvbkJ5TmFtZShmdW5jdGlvbk5hbWUsIGNvbnRleHQgLyosIGFyZ3MqLykge1xyXG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLnNwbGljZSgyKTtcclxuICAgIHZhciBuYW1lc3BhY2VzID0gZnVuY3Rpb25OYW1lLnNwbGl0KFwiLlwiKTtcclxuICAgIHZhciBmdW5jID0gbmFtZXNwYWNlcy5wb3AoKTtcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBuYW1lc3BhY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0W25hbWVzcGFjZXNbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbnRleHRbZnVuY10uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgfVxyXG5cclxuXHQkLmZuLmpxQm9vdHN0cmFwVmFsaWRhdGlvbiA9IGZ1bmN0aW9uKCBtZXRob2QgKSB7XHJcblxyXG5cdFx0aWYgKCBkZWZhdWx0cy5tZXRob2RzW21ldGhvZF0gKSB7XHJcblx0XHRcdHJldHVybiBkZWZhdWx0cy5tZXRob2RzW21ldGhvZF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XHJcblx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZCApIHtcclxuXHRcdFx0cmV0dXJuIGRlZmF1bHRzLm1ldGhvZHMuaW5pdC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0JC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZCArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LmpxQm9vdHN0cmFwVmFsaWRhdGlvbicgKTtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG4gICQuanFCb290c3RyYXBWYWxpZGF0aW9uID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICQoXCI6aW5wdXRcIikubm90KFwiW3R5cGU9aW1hZ2VdLFt0eXBlPXN1Ym1pdF1cIikuanFCb290c3RyYXBWYWxpZGF0aW9uLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtcclxuICB9O1xyXG5cclxufSkoIGpRdWVyeSApO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc2hvdy1tb3JlLmpzJyk7XG4iLCJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5sZXQgaGVpZ2h0O1xubGV0IEZhZGVCYXIgPSAoKSA9PiB7fTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBGYWRlQmFyID0gKCkgPT4ge1xuICBjb25zdCBWRVJTSU9OID0gJzAuMC4xJztcbiAgY29uc3QgTkFNRSA9ICdTaG93TW9yZV9GYWRlQmFyJztcbiAgY29uc29sZS5sb2coYE5vdyB1c2luZyAke05BTUV9IHZlcnNpb24gJHtWRVJTSU9OfWApO1xuICAvLyBwcmVwYXJlIHRoZSBzdHlsZSB0YWdlIGZvciBzb21lIGNzcyBsdXZpblxuICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgY29uc3QgaGVhZEVsID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSBzZXR0aW5ncygpO1xuICBjb25zdCBjc3NUZXh0ID0gRmFkZUJhckNTUyhvcHRpb25zKTtcbiAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG5cbiAgc3R5bGVFbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZiQ1NTJyk7XG4gIHN0eWxlRWwudGV4dENvbnRlbnQgPSBjc3NUZXh0O1xuICBoZWFkRWwuYXBwZW5kKHN0eWxlRWwpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgdGhlRmFkZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmotc2hvd21vcmUnKSk7XG5cbiAgICB0aGVGYWRlcnMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgaGVpZ2h0ID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICBjb25zb2xlLmxvZyhoZWlnaHQpXG4gICAgICBjb25zdCB0aGVDb250YWluZXIgPSBub2RlO1xuICAgICAgY29uc3QgdGhlRmFkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgdGhlU2hvd01vcmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuXG4gICAgICB0aGVGYWRlQmFyLmNsYXNzTGlzdC5hZGQoJ2otZmFkZXInKTtcbiAgICAgIHRoZVNob3dNb3JlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2otZmFkZXJfX2J1dHRvbicpO1xuXG4gICAgICB0aGVTaG93TW9yZUJ1dHRvbi5pbm5lclRleHQgPSBvcHRpb25zLmZiSW5pdEJ1dHRvblRleHQ7XG5cbiAgICAgIHRoZUZhZGVCYXIuYXBwZW5kQ2hpbGQodGhlU2hvd01vcmVCdXR0b24pO1xuICAgICAgdGhlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoZUZhZGVCYXIpO1xuXG4gICAgICB0aGVTaG93TW9yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGV2LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdpcy12aXNpYmxlJyk7XG4gICAgICAgIGV2LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXZpc2libGUnKTtcbiAgICAgICAgZXYudGFyZ2V0LmNsb3Nlc3QoJy5qLXNob3dtb3JlJykuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdmlzaWJsZScpO1xuICAgICAgICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaXMtdmlzaWJsZScpKXtcbiAgICAgICAgICBldi50YXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgfVxuICAgICAgICBpZihldi50YXJnZXQuaW5uZXJUZXh0ID09PSBvcHRpb25zLmZiSW5pdEJ1dHRvblRleHQpIHtcbiAgICAgICAgICBldi50YXJnZXQuaW5uZXJUZXh0ID0gb3B0aW9ucy5mYk9wZW5CdXR0b25UZXh0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXYudGFyZ2V0LmlubmVyVGV4dCA9IG9wdGlvbnMuZmJJbml0QnV0dG9uVGV4dFxuICAgICAgICB9XG4gICAgICB9LCBmYWxzZSk7XG5cbiAgICAgIHRoZVNob3dNb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGV2KSA9PiB7XG4gICAgICAgIGV2LnRhcmdldC5ibHVyKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59KTtcbi8vIG1vZHVsZS5leHBvcnRzID0gRmFkZUJhcjtcblxuZnVuY3Rpb24gYXBwZW5kQ1NTKHN0eWxlcykge1xuICByZXR1cm5cbiAgLy8gcmV0dXJuICgpID0+IHtcbiAgLy8gICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgLy8gICBjb25zdCBoZWFkRWwgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIC8vICAgLy8gY29uc3QgY3NzU3R5bGVzID0gY3NzXG5cbiAgLy8gICBzdHlsZUVsLnRleHRDb250ZW50ID0gc3R5bGVzO1xuICAvLyAgIGhlYWRFbC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcblxuICAvLyAgIHN0eWxlRWwudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gIC8vICAgaWYgKHN0eWxlRWwuc3R5bGVTaGVldCkge1xuICAvLyAgICAgLy8gVGhpcyBpcyByZXF1aXJlZCBmb3IgSUU4IGFuZCBiZWxvdy5cbiAgLy8gICAgIHN0eWxlRWwuc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGVzO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBzdHlsZUVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlcykpO1xuICAvLyAgIH1cbiAgLy8gfTtcbn1cblxuZnVuY3Rpb24gY3MoKSB7XG4gIGNvbnN0IGFsbFNjcmlwdFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHQjc2hvd01vcmVDUycpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0cygpIHtcbiAgcmV0dXJuIHtcbiAgICBib3hIZWlnaHQ6ICczMDBweCcsXG4gICAgZmJTdGFydENvbG9yOiAncmdiYSgwLDAsMCwuNzUpJyxcbiAgICBmYkVuZENvbG9yOiAncmdiYSgwLDAsMCwuNzUpJyxcbiAgICBmYkJvdHRvbUJvcmRlcjogJzVweCBzb2xpZCAjMmUyZTJlJyxcbiAgICBmYkluaXRCdXR0b25UZXh0OiAnU2hvdyBNb3JlJyxcbiAgICBmYk9wZW5CdXR0b25UZXh0OiAnU2hvdyBMZXNzJyxcbiAgICBmYkJ1dHRvblBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICBmYkJ1dHRvbkJhY2tncm91bmQ6ICcjMDAwJyxcbiAgICBmYkJ1dHRvbkJhY2tncm91bmRIb3ZlcjogJyM1ODA1MDU7JyxcbiAgICBmYkJ1dHRvbkJhY2tncm91bmRGb2N1czogJyM1ODA1MDU7JyxcbiAgICBmYkJ1dHRvblRleHRDb2xvcjogJyNmZmYnLFxuICAgIGZiQnV0dG9uVGV4dENvbG9ySG92ZXI6ICcjZmZmJyxcbiAgICBmYkJ1dHRvblRleHRDb2xvckZvY3VzOiAnI0ZGRicsXG4gICAgZmJCdXR0b25Cb3JkZXJDb2xvcjogJyMyZTJlMmUnLFxuICAgIGZiQnV0dG9uQm9yZGVyQ29sb3JGb2N1czogJyM1ODA1MDUnLFxuICAgIGZiQ2xhc3NMaXN0OiAndS10ZXh0LWNlbnRlcicsXG4gICAgZmJCdG5DbGFzc0xpc3Q6ICdidG4gYnRuLXByaW1hcnkgbXgtYXV0bycsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNldHRpbmdzKG9wdHMpIHtcbiAgbGV0IFNob3dNb3JlU2V0dGluZ3MgPSB0eXBlb2YgbnVsbDtcbiAgbGV0IGZiQ29uID0gW107XG4gIGlmICghU2hvd01vcmVTZXR0aW5ncykge1xuICAgIGZiQ29uID0gZGVmYXVsdHMoKTtcbiAgfSBlbHNlIHtcbiAgICBmYkNvbiA9IFNob3dNb3JlU2V0dGluZ3M7XG4gIH1cblxuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgY2xhc3NCYXNlOiAnYnV0dG9uLXNob3ctbW9yZScsXG4gICAgY2xhc3NBY3RpdmU6ICdpcy1mdWxseS1vcGVuZWQnLFxuICAgIGNsYXNzRm9jdXNlZDogJ2lzLWZvY3VzZWQnLFxuICAgIGZhZGViYXJDbGFzc0xpc3Q6ICdhbmltYXRlIHRleHQtY2VudGVyJyxcbiAgICBmYWRlYmFyYkJ1dHRvbkNsYXNzTGlzdDogJ2J0biBteC1hdXRvJyxcbiAgfTtcblxuICBjb25zdCBmYkFjdGlvbkJ0biA9IHtcbiAgICBzaG93TW9yZTogJ1Nob3cgTW9yZScsXG4gICAgc2hvd0xlc3M6ICdTaG93IExlc3MnLFxuICAgIHBvc2l0aW9uWDogJ2NlbnRlcicsXG4gICAgcG9zaXRpb25ZOiAnYm90dG9tJyxcblxuICAgIGZiQnV0dG9uUG9zaXRpb246ICdjZW50ZXInLFxuICAgIGZiQnV0dG9uQmFja2dyb3VuZDogJyNmMmYyZjInLFxuICB9O1xuXG4gIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzKCksIHN0eWxlcywgZmJBY3Rpb25CdG4sIGZiQ29uKTtcbiAgLy8gY3NzQnVpbGRlcihvcHRpb25zKTtcbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5sZXQgRmFkZUJhckNTUyA9ICgpID0+IHt9O1xuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEZhZGVCYXJDU1MgPSAoKSA9PiB7XG5GYWRlQmFyQ1NTID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3QgY3NzVmFsdWVzID0gb3B0aW9ucztcblxuICBjb25zdCBmYkNTUyA9ICcnO1xuXG4gIC8vIGFwcGVuZENTUyhmYkNTUylcbiAgcmV0dXJuIGZiQ1NTO1xufTtcbi8vIEZhZGVCYXIoKSIsIi8qKlxuICogU3dpcGVyIDYuMS4xXG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cDovL3N3aXBlcmpzLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMjAgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBSZWxlYXNlZCBvbjogSnVseSAzMSwgMjAyMFxuICovXG5cbiEgZnVuY3Rpb24gKGUsIHQpIHtcbiAgXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBtb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA9IHQoKSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUodCkgOiAoZSA9IGUgfHwgc2VsZikuU3dpcGVyID0gdCgpXG59KHRoaXMsIChmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHMgPSB0W2ldO1xuICAgICAgcy5lbnVtZXJhYmxlID0gcy5lbnVtZXJhYmxlIHx8ICExLCBzLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gcyAmJiAocy53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHMua2V5LCBzKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHQoKSB7XG4gICAgcmV0dXJuICh0ID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAoZSkge1xuICAgICAgZm9yICh2YXIgdCA9IDE7IHQgPCBhcmd1bWVudHMubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgdmFyIGkgPSBhcmd1bWVudHNbdF07XG4gICAgICAgIGZvciAodmFyIHMgaW4gaSkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGksIHMpICYmIChlW3NdID0gaVtzXSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBlXG4gICAgfSkuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG5cbiAgZnVuY3Rpb24gaShlKSB7XG4gICAgcmV0dXJuIG51bGwgIT09IGUgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBcImNvbnN0cnVjdG9yXCIgaW4gZSAmJiBlLmNvbnN0cnVjdG9yID09PSBPYmplY3RcbiAgfVxuXG4gIGZ1bmN0aW9uIHMoZSwgdCkge1xuICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9IHt9KSwgdm9pZCAwID09PSB0ICYmICh0ID0ge30pLCBPYmplY3Qua2V5cyh0KS5mb3JFYWNoKChmdW5jdGlvbiAoYSkge1xuICAgICAgdm9pZCAwID09PSBlW2FdID8gZVthXSA9IHRbYV0gOiBpKHRbYV0pICYmIGkoZVthXSkgJiYgT2JqZWN0LmtleXModFthXSkubGVuZ3RoID4gMCAmJiBzKGVbYV0sIHRbYV0pXG4gICAgfSkpXG4gIH1cbiAgdmFyIGEgPSB7XG4gICAgYm9keToge30sXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkge30sXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkge30sXG4gICAgYWN0aXZlRWxlbWVudDoge1xuICAgICAgYmx1cjogZnVuY3Rpb24gKCkge30sXG4gICAgICBub2RlTmFtZTogXCJcIlxuICAgIH0sXG4gICAgcXVlcnlTZWxlY3RvcjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9LFxuICAgIHF1ZXJ5U2VsZWN0b3JBbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH0sXG4gICAgZ2V0RWxlbWVudEJ5SWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgICBjcmVhdGVFdmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdEV2ZW50OiBmdW5jdGlvbiAoKSB7fVxuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICBzZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVFbGVtZW50TlM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gICAgaW1wb3J0Tm9kZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICBoYXNoOiBcIlwiLFxuICAgICAgaG9zdDogXCJcIixcbiAgICAgIGhvc3RuYW1lOiBcIlwiLFxuICAgICAgaHJlZjogXCJcIixcbiAgICAgIG9yaWdpbjogXCJcIixcbiAgICAgIHBhdGhuYW1lOiBcIlwiLFxuICAgICAgcHJvdG9jb2w6IFwiXCIsXG4gICAgICBzZWFyY2g6IFwiXCJcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gcigpIHtcbiAgICB2YXIgZSA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50ID8gZG9jdW1lbnQgOiB7fTtcbiAgICByZXR1cm4gcyhlLCBhKSwgZVxuICB9XG4gIHZhciBuID0ge1xuICAgIGRvY3VtZW50OiBhLFxuICAgIG5hdmlnYXRvcjoge1xuICAgICAgdXNlckFnZW50OiBcIlwiXG4gICAgfSxcbiAgICBsb2NhdGlvbjoge1xuICAgICAgaGFzaDogXCJcIixcbiAgICAgIGhvc3Q6IFwiXCIsXG4gICAgICBob3N0bmFtZTogXCJcIixcbiAgICAgIGhyZWY6IFwiXCIsXG4gICAgICBvcmlnaW46IFwiXCIsXG4gICAgICBwYXRobmFtZTogXCJcIixcbiAgICAgIHByb3RvY29sOiBcIlwiLFxuICAgICAgc2VhcmNoOiBcIlwiXG4gICAgfSxcbiAgICBoaXN0b3J5OiB7XG4gICAgICByZXBsYWNlU3RhdGU6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgcHVzaFN0YXRlOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgIGdvOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgIGJhY2s6IGZ1bmN0aW9uICgpIHt9XG4gICAgfSxcbiAgICBDdXN0b21FdmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHt9LFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHt9LFxuICAgIGdldENvbXB1dGVkU3R5bGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGdldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBJbWFnZTogZnVuY3Rpb24gKCkge30sXG4gICAgRGF0ZTogZnVuY3Rpb24gKCkge30sXG4gICAgc2NyZWVuOiB7fSxcbiAgICBzZXRUaW1lb3V0OiBmdW5jdGlvbiAoKSB7fSxcbiAgICBjbGVhclRpbWVvdXQ6IGZ1bmN0aW9uICgpIHt9LFxuICAgIG1hdGNoTWVkaWE6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lOiBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIHNldFRpbWVvdXQgPyAoZSgpLCBudWxsKSA6IHNldFRpbWVvdXQoZSwgMClcbiAgICB9LFxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lOiBmdW5jdGlvbiAoZSkge1xuICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2V0VGltZW91dCAmJiBjbGVhclRpbWVvdXQoZSlcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gbCgpIHtcbiAgICB2YXIgZSA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHdpbmRvdyA6IHt9O1xuICAgIHJldHVybiBzKGUsIG4pLCBlXG4gIH1cblxuICBmdW5jdGlvbiBvKGUpIHtcbiAgICByZXR1cm4gKG8gPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihlKVxuICAgIH0pKGUpXG4gIH1cblxuICBmdW5jdGlvbiBkKGUsIHQpIHtcbiAgICByZXR1cm4gKGQgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBlLl9fcHJvdG9fXyA9IHQsIGVcbiAgICB9KShlLCB0KVxuICB9XG5cbiAgZnVuY3Rpb24gaCgpIHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgUmVmbGVjdCB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiAhMTtcbiAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuICExO1xuICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFByb3h5KSByZXR1cm4gITA7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCAoZnVuY3Rpb24gKCkge30pKSksICEwXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICExXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcChlLCB0LCBpKSB7XG4gICAgcmV0dXJuIChwID0gaCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QgOiBmdW5jdGlvbiAoZSwgdCwgaSkge1xuICAgICAgdmFyIHMgPSBbbnVsbF07XG4gICAgICBzLnB1c2guYXBwbHkocywgdCk7XG4gICAgICB2YXIgYSA9IG5ldyhGdW5jdGlvbi5iaW5kLmFwcGx5KGUsIHMpKTtcbiAgICAgIHJldHVybiBpICYmIGQoYSwgaS5wcm90b3R5cGUpLCBhXG4gICAgfSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICB9XG5cbiAgZnVuY3Rpb24gdShlKSB7XG4gICAgdmFyIHQgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIE1hcCA/IG5ldyBNYXAgOiB2b2lkIDA7XG4gICAgcmV0dXJuICh1ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChudWxsID09PSBlIHx8IChpID0gZSwgLTEgPT09IEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoaSkuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikpKSByZXR1cm4gZTtcbiAgICAgIHZhciBpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgICAgaWYgKHZvaWQgMCAhPT0gdCkge1xuICAgICAgICBpZiAodC5oYXMoZSkpIHJldHVybiB0LmdldChlKTtcbiAgICAgICAgdC5zZXQoZSwgcylcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcygpIHtcbiAgICAgICAgcmV0dXJuIHAoZSwgYXJndW1lbnRzLCBvKHRoaXMpLmNvbnN0cnVjdG9yKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShlLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgIHZhbHVlOiBzLFxuICAgICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgIH1cbiAgICAgIH0pLCBkKHMsIGUpXG4gICAgfSkoZSlcbiAgfVxuICB2YXIgYyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHQsIGk7XG5cbiAgICBmdW5jdGlvbiBzKHQpIHtcbiAgICAgIHZhciBpLCBzLCBhO1xuICAgICAgcmV0dXJuIGkgPSBlLmNhbGwuYXBwbHkoZSwgW3RoaXNdLmNvbmNhdCh0KSkgfHwgdGhpcywgcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICAgICAgcmV0dXJuIGVcbiAgICAgIH0oaSksIGEgPSBzLl9fcHJvdG9fXywgT2JqZWN0LmRlZmluZVByb3BlcnR5KHMsIFwiX19wcm90b19fXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGFcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGEuX19wcm90b19fID0gZVxuICAgICAgICB9XG4gICAgICB9KSwgaVxuICAgIH1cbiAgICByZXR1cm4gaSA9IGUsICh0ID0gcykucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShpLnByb3RvdHlwZSksIHQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gdCwgdC5fX3Byb3RvX18gPSBpLCBzXG4gIH0odShBcnJheSkpO1xuXG4gIGZ1bmN0aW9uIHYoZSkge1xuICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9IFtdKTtcbiAgICB2YXIgdCA9IFtdO1xuICAgIHJldHVybiBlLmZvckVhY2goKGZ1bmN0aW9uIChlKSB7XG4gICAgICBBcnJheS5pc0FycmF5KGUpID8gdC5wdXNoLmFwcGx5KHQsIHYoZSkpIDogdC5wdXNoKGUpXG4gICAgfSkpLCB0XG4gIH1cblxuICBmdW5jdGlvbiBmKGUsIHQpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGUsIHQpXG4gIH1cblxuICBmdW5jdGlvbiBtKGUsIHQpIHtcbiAgICB2YXIgaSA9IGwoKSxcbiAgICAgIHMgPSByKCksXG4gICAgICBhID0gW107XG4gICAgaWYgKCF0ICYmIGUgaW5zdGFuY2VvZiBjKSByZXR1cm4gZTtcbiAgICBpZiAoIWUpIHJldHVybiBuZXcgYyhhKTtcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkge1xuICAgICAgdmFyIG4gPSBlLnRyaW0oKTtcbiAgICAgIGlmIChuLmluZGV4T2YoXCI8XCIpID49IDAgJiYgbi5pbmRleE9mKFwiPlwiKSA+PSAwKSB7XG4gICAgICAgIHZhciBvID0gXCJkaXZcIjtcbiAgICAgICAgMCA9PT0gbi5pbmRleE9mKFwiPGxpXCIpICYmIChvID0gXCJ1bFwiKSwgMCA9PT0gbi5pbmRleE9mKFwiPHRyXCIpICYmIChvID0gXCJ0Ym9keVwiKSwgMCAhPT0gbi5pbmRleE9mKFwiPHRkXCIpICYmIDAgIT09IG4uaW5kZXhPZihcIjx0aFwiKSB8fCAobyA9IFwidHJcIiksIDAgPT09IG4uaW5kZXhPZihcIjx0Ym9keVwiKSAmJiAobyA9IFwidGFibGVcIiksIDAgPT09IG4uaW5kZXhPZihcIjxvcHRpb25cIikgJiYgKG8gPSBcInNlbGVjdFwiKTtcbiAgICAgICAgdmFyIGQgPSBzLmNyZWF0ZUVsZW1lbnQobyk7XG4gICAgICAgIGQuaW5uZXJIVE1MID0gbjtcbiAgICAgICAgZm9yICh2YXIgaCA9IDA7IGggPCBkLmNoaWxkTm9kZXMubGVuZ3RoOyBoICs9IDEpIGEucHVzaChkLmNoaWxkTm9kZXNbaF0pXG4gICAgICB9IGVsc2UgYSA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBlKSByZXR1cm4gW2VdO1xuICAgICAgICBmb3IgKHZhciBpID0gW10sIHMgPSB0LnF1ZXJ5U2VsZWN0b3JBbGwoZSksIGEgPSAwOyBhIDwgcy5sZW5ndGg7IGEgKz0gMSkgaS5wdXNoKHNbYV0pO1xuICAgICAgICByZXR1cm4gaVxuICAgICAgfShlLnRyaW0oKSwgdCB8fCBzKVxuICAgIH0gZWxzZSBpZiAoZS5ub2RlVHlwZSB8fCBlID09PSBpIHx8IGUgPT09IHMpIGEucHVzaChlKTtcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIGMpIHJldHVybiBlO1xuICAgICAgYSA9IGVcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBjKGZ1bmN0aW9uIChlKSB7XG4gICAgICBmb3IgKHZhciB0ID0gW10sIGkgPSAwOyBpIDwgZS5sZW5ndGg7IGkgKz0gMSkgLSAxID09PSB0LmluZGV4T2YoZVtpXSkgJiYgdC5wdXNoKGVbaV0pO1xuICAgICAgcmV0dXJuIHRcbiAgICB9KGEpKVxuICB9XG4gIG0uZm4gPSBjLnByb3RvdHlwZTtcbiAgdmFyIGcsIHcsIGIsIHkgPSB7XG4gICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIGUgPSBhcmd1bWVudHMubGVuZ3RoLCB0ID0gbmV3IEFycmF5KGUpLCBpID0gMDsgaSA8IGU7IGkrKykgdFtpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIHZhciBzID0gdih0Lm1hcCgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuc3BsaXQoXCIgXCIpXG4gICAgICB9KSkpO1xuICAgICAgcmV0dXJuIHRoaXMuZm9yRWFjaCgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgICh0ID0gZS5jbGFzc0xpc3QpLmFkZC5hcHBseSh0LCBzKVxuICAgICAgfSkpLCB0aGlzXG4gICAgfSxcbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgZSA9IGFyZ3VtZW50cy5sZW5ndGgsIHQgPSBuZXcgQXJyYXkoZSksIGkgPSAwOyBpIDwgZTsgaSsrKSB0W2ldID0gYXJndW1lbnRzW2ldO1xuICAgICAgdmFyIHMgPSB2KHQubWFwKChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5zcGxpdChcIiBcIilcbiAgICAgIH0pKSk7XG4gICAgICByZXR1cm4gdGhpcy5mb3JFYWNoKChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgKHQgPSBlLmNsYXNzTGlzdCkucmVtb3ZlLmFwcGx5KHQsIHMpXG4gICAgICB9KSksIHRoaXNcbiAgICB9LFxuICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBlID0gYXJndW1lbnRzLmxlbmd0aCwgdCA9IG5ldyBBcnJheShlKSwgaSA9IDA7IGkgPCBlOyBpKyspIHRbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgICB2YXIgcyA9IHYodC5tYXAoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLnNwbGl0KFwiIFwiKVxuICAgICAgfSkpKTtcbiAgICAgIHJldHVybiBmKHRoaXMsIChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gcy5maWx0ZXIoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIGUuY2xhc3NMaXN0LmNvbnRhaW5zKHQpXG4gICAgICAgIH0pKS5sZW5ndGggPiAwXG4gICAgICB9KSkubGVuZ3RoID4gMFxuICAgIH0sXG4gICAgdG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIGUgPSBhcmd1bWVudHMubGVuZ3RoLCB0ID0gbmV3IEFycmF5KGUpLCBpID0gMDsgaSA8IGU7IGkrKykgdFtpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIHZhciBzID0gdih0Lm1hcCgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuc3BsaXQoXCIgXCIpXG4gICAgICB9KSkpO1xuICAgICAgdGhpcy5mb3JFYWNoKChmdW5jdGlvbiAoZSkge1xuICAgICAgICBzLmZvckVhY2goKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgZS5jbGFzc0xpc3QudG9nZ2xlKHQpXG4gICAgICAgIH0pKVxuICAgICAgfSkpXG4gICAgfSxcbiAgICBhdHRyOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgaWYgKDEgPT09IGFyZ3VtZW50cy5sZW5ndGggJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLmdldEF0dHJpYnV0ZShlKSA6IHZvaWQgMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSlcbiAgICAgICAgaWYgKDIgPT09IGFyZ3VtZW50cy5sZW5ndGgpIHRoaXNbaV0uc2V0QXR0cmlidXRlKGUsIHQpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgZm9yICh2YXIgcyBpbiBlKSB0aGlzW2ldW3NdID0gZVtzXSwgdGhpc1tpXS5zZXRBdHRyaWJ1dGUocywgZVtzXSk7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5sZW5ndGg7IHQgKz0gMSkgdGhpc1t0XS5yZW1vdmVBdHRyaWJ1dGUoZSk7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgdHJhbnNmb3JtOiBmdW5jdGlvbiAoZSkge1xuICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLmxlbmd0aDsgdCArPSAxKSB0aGlzW3RdLnN0eWxlLnRyYW5zZm9ybSA9IGU7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgdHJhbnNpdGlvbjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5sZW5ndGg7IHQgKz0gMSkgdGhpc1t0XS5zdHlsZS50cmFuc2l0aW9uID0gXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSA/IGUgKyBcIm1zXCIgOiBlO1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuICAgIG9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBlID0gYXJndW1lbnRzLmxlbmd0aCwgdCA9IG5ldyBBcnJheShlKSwgaSA9IDA7IGkgPCBlOyBpKyspIHRbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgICB2YXIgcyA9IHRbMF0sXG4gICAgICAgIGEgPSB0WzFdLFxuICAgICAgICByID0gdFsyXSxcbiAgICAgICAgbiA9IHRbM107XG5cbiAgICAgIGZ1bmN0aW9uIGwoZSkge1xuICAgICAgICB2YXIgdCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgIHZhciBpID0gZS50YXJnZXQuZG9tN0V2ZW50RGF0YSB8fCBbXTtcbiAgICAgICAgICBpZiAoaS5pbmRleE9mKGUpIDwgMCAmJiBpLnVuc2hpZnQoZSksIG0odCkuaXMoYSkpIHIuYXBwbHkodCwgaSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZm9yICh2YXIgcyA9IG0odCkucGFyZW50cygpLCBuID0gMDsgbiA8IHMubGVuZ3RoOyBuICs9IDEpIG0oc1tuXSkuaXMoYSkgJiYgci5hcHBseShzW25dLCBpKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG8oZSkge1xuICAgICAgICB2YXIgdCA9IGUgJiYgZS50YXJnZXQgJiYgZS50YXJnZXQuZG9tN0V2ZW50RGF0YSB8fCBbXTtcbiAgICAgICAgdC5pbmRleE9mKGUpIDwgMCAmJiB0LnVuc2hpZnQoZSksIHIuYXBwbHkodGhpcywgdClcbiAgICAgIH1cbiAgICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdFsxXSAmJiAocyA9IHRbMF0sIHIgPSB0WzFdLCBuID0gdFsyXSwgYSA9IHZvaWQgMCksIG4gfHwgKG4gPSAhMSk7XG4gICAgICBmb3IgKHZhciBkLCBoID0gcy5zcGxpdChcIiBcIiksIHAgPSAwOyBwIDwgdGhpcy5sZW5ndGg7IHAgKz0gMSkge1xuICAgICAgICB2YXIgdSA9IHRoaXNbcF07XG4gICAgICAgIGlmIChhKVxuICAgICAgICAgIGZvciAoZCA9IDA7IGQgPCBoLmxlbmd0aDsgZCArPSAxKSB7XG4gICAgICAgICAgICB2YXIgYyA9IGhbZF07XG4gICAgICAgICAgICB1LmRvbTdMaXZlTGlzdGVuZXJzIHx8ICh1LmRvbTdMaXZlTGlzdGVuZXJzID0ge30pLCB1LmRvbTdMaXZlTGlzdGVuZXJzW2NdIHx8ICh1LmRvbTdMaXZlTGlzdGVuZXJzW2NdID0gW10pLCB1LmRvbTdMaXZlTGlzdGVuZXJzW2NdLnB1c2goe1xuICAgICAgICAgICAgICBsaXN0ZW5lcjogcixcbiAgICAgICAgICAgICAgcHJveHlMaXN0ZW5lcjogbFxuICAgICAgICAgICAgfSksIHUuYWRkRXZlbnRMaXN0ZW5lcihjLCBsLCBuKVxuICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZm9yIChkID0gMDsgZCA8IGgubGVuZ3RoOyBkICs9IDEpIHtcbiAgICAgICAgICAgICAgdmFyIHYgPSBoW2RdO1xuICAgICAgICAgICAgICB1LmRvbTdMaXN0ZW5lcnMgfHwgKHUuZG9tN0xpc3RlbmVycyA9IHt9KSwgdS5kb203TGlzdGVuZXJzW3ZdIHx8ICh1LmRvbTdMaXN0ZW5lcnNbdl0gPSBbXSksIHUuZG9tN0xpc3RlbmVyc1t2XS5wdXNoKHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcjogcixcbiAgICAgICAgICAgICAgICBwcm94eUxpc3RlbmVyOiBvXG4gICAgICAgICAgICAgIH0pLCB1LmFkZEV2ZW50TGlzdGVuZXIodiwgbywgbilcbiAgICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICBvZmY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIGUgPSBhcmd1bWVudHMubGVuZ3RoLCB0ID0gbmV3IEFycmF5KGUpLCBpID0gMDsgaSA8IGU7IGkrKykgdFtpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIHZhciBzID0gdFswXSxcbiAgICAgICAgYSA9IHRbMV0sXG4gICAgICAgIHIgPSB0WzJdLFxuICAgICAgICBuID0gdFszXTtcbiAgICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdFsxXSAmJiAocyA9IHRbMF0sIHIgPSB0WzFdLCBuID0gdFsyXSwgYSA9IHZvaWQgMCksIG4gfHwgKG4gPSAhMSk7XG4gICAgICBmb3IgKHZhciBsID0gcy5zcGxpdChcIiBcIiksIG8gPSAwOyBvIDwgbC5sZW5ndGg7IG8gKz0gMSlcbiAgICAgICAgZm9yICh2YXIgZCA9IGxbb10sIGggPSAwOyBoIDwgdGhpcy5sZW5ndGg7IGggKz0gMSkge1xuICAgICAgICAgIHZhciBwID0gdGhpc1toXSxcbiAgICAgICAgICAgIHUgPSB2b2lkIDA7XG4gICAgICAgICAgaWYgKCFhICYmIHAuZG9tN0xpc3RlbmVycyA/IHUgPSBwLmRvbTdMaXN0ZW5lcnNbZF0gOiBhICYmIHAuZG9tN0xpdmVMaXN0ZW5lcnMgJiYgKHUgPSBwLmRvbTdMaXZlTGlzdGVuZXJzW2RdKSwgdSAmJiB1Lmxlbmd0aClcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSB1Lmxlbmd0aCAtIDE7IGMgPj0gMDsgYyAtPSAxKSB7XG4gICAgICAgICAgICAgIHZhciB2ID0gdVtjXTtcbiAgICAgICAgICAgICAgciAmJiB2Lmxpc3RlbmVyID09PSByIHx8IHIgJiYgdi5saXN0ZW5lciAmJiB2Lmxpc3RlbmVyLmRvbTdwcm94eSAmJiB2Lmxpc3RlbmVyLmRvbTdwcm94eSA9PT0gciA/IChwLnJlbW92ZUV2ZW50TGlzdGVuZXIoZCwgdi5wcm94eUxpc3RlbmVyLCBuKSwgdS5zcGxpY2UoYywgMSkpIDogciB8fCAocC5yZW1vdmVFdmVudExpc3RlbmVyKGQsIHYucHJveHlMaXN0ZW5lciwgbiksIHUuc3BsaWNlKGMsIDEpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgdHJpZ2dlcjogZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgZSA9IGwoKSwgdCA9IGFyZ3VtZW50cy5sZW5ndGgsIGkgPSBuZXcgQXJyYXkodCksIHMgPSAwOyBzIDwgdDsgcysrKSBpW3NdID0gYXJndW1lbnRzW3NdO1xuICAgICAgZm9yICh2YXIgYSA9IGlbMF0uc3BsaXQoXCIgXCIpLCByID0gaVsxXSwgbiA9IDA7IG4gPCBhLmxlbmd0aDsgbiArPSAxKVxuICAgICAgICBmb3IgKHZhciBvID0gYVtuXSwgZCA9IDA7IGQgPCB0aGlzLmxlbmd0aDsgZCArPSAxKSB7XG4gICAgICAgICAgdmFyIGggPSB0aGlzW2RdO1xuICAgICAgICAgIGlmIChlLkN1c3RvbUV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcCA9IG5ldyBlLkN1c3RvbUV2ZW50KG8sIHtcbiAgICAgICAgICAgICAgZGV0YWlsOiByLFxuICAgICAgICAgICAgICBidWJibGVzOiAhMCxcbiAgICAgICAgICAgICAgY2FuY2VsYWJsZTogITBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaC5kb203RXZlbnREYXRhID0gaS5maWx0ZXIoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ID4gMFxuICAgICAgICAgICAgfSkpLCBoLmRpc3BhdGNoRXZlbnQocCksIGguZG9tN0V2ZW50RGF0YSA9IFtdLCBkZWxldGUgaC5kb203RXZlbnREYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgdHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgIHJldHVybiBlICYmIHQub24oXCJ0cmFuc2l0aW9uZW5kXCIsIChmdW5jdGlvbiBpKHMpIHtcbiAgICAgICAgcy50YXJnZXQgPT09IHRoaXMgJiYgKGUuY2FsbCh0aGlzLCBzKSwgdC5vZmYoXCJ0cmFuc2l0aW9uZW5kXCIsIGkpKVxuICAgICAgfSkpLCB0aGlzXG4gICAgfSxcbiAgICBvdXRlcldpZHRoOiBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIHZhciB0ID0gdGhpcy5zdHlsZXMoKTtcbiAgICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aCArIHBhcnNlRmxvYXQodC5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLXJpZ2h0XCIpKSArIHBhcnNlRmxvYXQodC5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLWxlZnRcIikpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGhcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgICBvdXRlckhlaWdodDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IHRoaXMuc3R5bGVzKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0ICsgcGFyc2VGbG9hdCh0LmdldFByb3BlcnR5VmFsdWUoXCJtYXJnaW4tdG9wXCIpKSArIHBhcnNlRmxvYXQodC5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLWJvdHRvbVwiKSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHRcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgICBzdHlsZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlID0gbCgpO1xuICAgICAgcmV0dXJuIHRoaXNbMF0gPyBlLmdldENvbXB1dGVkU3R5bGUodGhpc1swXSwgbnVsbCkgOiB7fVxuICAgIH0sXG4gICAgb2Zmc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBlID0gbCgpLFxuICAgICAgICAgIHQgPSByKCksXG4gICAgICAgICAgaSA9IHRoaXNbMF0sXG4gICAgICAgICAgcyA9IGkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYSA9IHQuYm9keSxcbiAgICAgICAgICBuID0gaS5jbGllbnRUb3AgfHwgYS5jbGllbnRUb3AgfHwgMCxcbiAgICAgICAgICBvID0gaS5jbGllbnRMZWZ0IHx8IGEuY2xpZW50TGVmdCB8fCAwLFxuICAgICAgICAgIGQgPSBpID09PSBlID8gZS5zY3JvbGxZIDogaS5zY3JvbGxUb3AsXG4gICAgICAgICAgaCA9IGkgPT09IGUgPyBlLnNjcm9sbFggOiBpLnNjcm9sbExlZnQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9wOiBzLnRvcCArIGQgLSBuLFxuICAgICAgICAgIGxlZnQ6IHMubGVmdCArIGggLSBvXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgICBjc3M6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICB2YXIgaSwgcyA9IGwoKTtcbiAgICAgIGlmICgxID09PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBlKSB7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpXG4gICAgICAgICAgICBmb3IgKHZhciBhIGluIGUpIHRoaXNbaV0uc3R5bGVbYV0gPSBlW2FdO1xuICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXNbMF0pIHJldHVybiBzLmdldENvbXB1dGVkU3R5bGUodGhpc1swXSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShlKVxuICAgICAgfVxuICAgICAgaWYgKDIgPT09IGFyZ3VtZW50cy5sZW5ndGggJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkgdGhpc1tpXS5zdHlsZVtlXSA9IHQ7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgZWFjaDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlID8gKHRoaXMuZm9yRWFjaCgoZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAgICAgZS5hcHBseSh0LCBbdCwgaV0pXG4gICAgICB9KSksIHRoaXMpIDogdGhpc1xuICAgIH0sXG4gICAgaHRtbDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICh2b2lkIDAgPT09IGUpIHJldHVybiB0aGlzWzBdID8gdGhpc1swXS5pbm5lckhUTUwgOiBudWxsO1xuICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLmxlbmd0aDsgdCArPSAxKSB0aGlzW3RdLmlubmVySFRNTCA9IGU7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgdGV4dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICh2b2lkIDAgPT09IGUpIHJldHVybiB0aGlzWzBdID8gdGhpc1swXS50ZXh0Q29udGVudC50cmltKCkgOiBudWxsO1xuICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLmxlbmd0aDsgdCArPSAxKSB0aGlzW3RdLnRleHRDb250ZW50ID0gZTtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICBpczogZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0LCBpLCBzID0gbCgpLFxuICAgICAgICBhID0gcigpLFxuICAgICAgICBuID0gdGhpc1swXTtcbiAgICAgIGlmICghbiB8fCB2b2lkIDAgPT09IGUpIHJldHVybiAhMTtcbiAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlKSB7XG4gICAgICAgIGlmIChuLm1hdGNoZXMpIHJldHVybiBuLm1hdGNoZXMoZSk7XG4gICAgICAgIGlmIChuLndlYmtpdE1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIG4ud2Via2l0TWF0Y2hlc1NlbGVjdG9yKGUpO1xuICAgICAgICBpZiAobi5tc01hdGNoZXNTZWxlY3RvcikgcmV0dXJuIG4ubXNNYXRjaGVzU2VsZWN0b3IoZSk7XG4gICAgICAgIGZvciAodCA9IG0oZSksIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkgKz0gMSlcbiAgICAgICAgICBpZiAodFtpXSA9PT0gbikgcmV0dXJuICEwO1xuICAgICAgICByZXR1cm4gITFcbiAgICAgIH1cbiAgICAgIGlmIChlID09PSBhKSByZXR1cm4gbiA9PT0gYTtcbiAgICAgIGlmIChlID09PSBzKSByZXR1cm4gbiA9PT0gcztcbiAgICAgIGlmIChlLm5vZGVUeXBlIHx8IGUgaW5zdGFuY2VvZiBjKSB7XG4gICAgICAgIGZvciAodCA9IGUubm9kZVR5cGUgPyBbZV0gOiBlLCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpICs9IDEpXG4gICAgICAgICAgaWYgKHRbaV0gPT09IG4pIHJldHVybiAhMDtcbiAgICAgICAgcmV0dXJuICExXG4gICAgICB9XG4gICAgICByZXR1cm4gITFcbiAgICB9LFxuICAgIGluZGV4OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZSwgdCA9IHRoaXNbMF07XG4gICAgICBpZiAodCkge1xuICAgICAgICBmb3IgKGUgPSAwOyBudWxsICE9PSAodCA9IHQucHJldmlvdXNTaWJsaW5nKTspIDEgPT09IHQubm9kZVR5cGUgJiYgKGUgKz0gMSk7XG4gICAgICAgIHJldHVybiBlXG4gICAgICB9XG4gICAgfSxcbiAgICBlcTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICh2b2lkIDAgPT09IGUpIHJldHVybiB0aGlzO1xuICAgICAgdmFyIHQgPSB0aGlzLmxlbmd0aDtcbiAgICAgIGlmIChlID4gdCAtIDEpIHJldHVybiBtKFtdKTtcbiAgICAgIGlmIChlIDwgMCkge1xuICAgICAgICB2YXIgaSA9IHQgKyBlO1xuICAgICAgICByZXR1cm4gbShpIDwgMCA/IFtdIDogW3RoaXNbaV1dKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG0oW3RoaXNbZV1dKVxuICAgIH0sXG4gICAgYXBwZW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBlLCB0ID0gcigpLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBlID0gaSA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBpID8gdm9pZCAwIDogYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHRoaXMubGVuZ3RoOyBzICs9IDEpXG4gICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpIHtcbiAgICAgICAgICAgIHZhciBhID0gdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZm9yIChhLmlubmVySFRNTCA9IGU7IGEuZmlyc3RDaGlsZDspIHRoaXNbc10uYXBwZW5kQ2hpbGQoYS5maXJzdENoaWxkKVxuICAgICAgICAgIH0gZWxzZSBpZiAoZSBpbnN0YW5jZW9mIGMpXG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbiArPSAxKSB0aGlzW3NdLmFwcGVuZENoaWxkKGVbbl0pO1xuICAgICAgICBlbHNlIHRoaXNbc10uYXBwZW5kQ2hpbGQoZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICBwcmVwZW5kOiBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQsIGksIHMgPSByKCk7XG4gICAgICBmb3IgKHQgPSAwOyB0IDwgdGhpcy5sZW5ndGg7IHQgKz0gMSlcbiAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpIHtcbiAgICAgICAgICB2YXIgYSA9IHMuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBmb3IgKGEuaW5uZXJIVE1MID0gZSwgaSA9IGEuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkgdGhpc1t0XS5pbnNlcnRCZWZvcmUoYS5jaGlsZE5vZGVzW2ldLCB0aGlzW3RdLmNoaWxkTm9kZXNbMF0pXG4gICAgICAgIH0gZWxzZSBpZiAoZSBpbnN0YW5jZW9mIGMpXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBlLmxlbmd0aDsgaSArPSAxKSB0aGlzW3RdLmluc2VydEJlZm9yZShlW2ldLCB0aGlzW3RdLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgZWxzZSB0aGlzW3RdLmluc2VydEJlZm9yZShlLCB0aGlzW3RdLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGggPiAwID8gZSA/IHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nICYmIG0odGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpLmlzKGUpID8gbShbdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddKSA6IG0oW10pIDogdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcgPyBtKFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pIDogbShbXSkgOiBtKFtdKVxuICAgIH0sXG4gICAgbmV4dEFsbDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gW10sXG4gICAgICAgIGkgPSB0aGlzWzBdO1xuICAgICAgaWYgKCFpKSByZXR1cm4gbShbXSk7XG4gICAgICBmb3IgKDsgaS5uZXh0RWxlbWVudFNpYmxpbmc7KSB7XG4gICAgICAgIHZhciBzID0gaS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGUgPyBtKHMpLmlzKGUpICYmIHQucHVzaChzKSA6IHQucHVzaChzKSwgaSA9IHNcbiAgICAgIH1cbiAgICAgIHJldHVybiBtKHQpXG4gICAgfSxcbiAgICBwcmV2OiBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgdCA9IHRoaXNbMF07XG4gICAgICAgIHJldHVybiBlID8gdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICYmIG0odC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKS5pcyhlKSA/IG0oW3QucHJldmlvdXNFbGVtZW50U2libGluZ10pIDogbShbXSkgOiB0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcgPyBtKFt0LnByZXZpb3VzRWxlbWVudFNpYmxpbmddKSA6IG0oW10pXG4gICAgICB9XG4gICAgICByZXR1cm4gbShbXSlcbiAgICB9LFxuICAgIHByZXZBbGw6IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IFtdLFxuICAgICAgICBpID0gdGhpc1swXTtcbiAgICAgIGlmICghaSkgcmV0dXJuIG0oW10pO1xuICAgICAgZm9yICg7IGkucHJldmlvdXNFbGVtZW50U2libGluZzspIHtcbiAgICAgICAgdmFyIHMgPSBpLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGUgPyBtKHMpLmlzKGUpICYmIHQucHVzaChzKSA6IHQucHVzaChzKSwgaSA9IHNcbiAgICAgIH1cbiAgICAgIHJldHVybiBtKHQpXG4gICAgfSxcbiAgICBwYXJlbnQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBmb3IgKHZhciB0ID0gW10sIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkgbnVsbCAhPT0gdGhpc1tpXS5wYXJlbnROb2RlICYmIChlID8gbSh0aGlzW2ldLnBhcmVudE5vZGUpLmlzKGUpICYmIHQucHVzaCh0aGlzW2ldLnBhcmVudE5vZGUpIDogdC5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSkpO1xuICAgICAgcmV0dXJuIG0odClcbiAgICB9LFxuICAgIHBhcmVudHM6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBmb3IgKHZhciB0ID0gW10sIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSlcbiAgICAgICAgZm9yICh2YXIgcyA9IHRoaXNbaV0ucGFyZW50Tm9kZTsgczspIGUgPyBtKHMpLmlzKGUpICYmIHQucHVzaChzKSA6IHQucHVzaChzKSwgcyA9IHMucGFyZW50Tm9kZTtcbiAgICAgIHJldHVybiBtKHQpXG4gICAgfSxcbiAgICBjbG9zZXN0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gZSA/IG0oW10pIDogKHQuaXMoZSkgfHwgKHQgPSB0LnBhcmVudHMoZSkuZXEoMCkpLCB0KVxuICAgIH0sXG4gICAgZmluZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGZvciAodmFyIHQgPSBbXSwgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKVxuICAgICAgICBmb3IgKHZhciBzID0gdGhpc1tpXS5xdWVyeVNlbGVjdG9yQWxsKGUpLCBhID0gMDsgYSA8IHMubGVuZ3RoOyBhICs9IDEpIHQucHVzaChzW2FdKTtcbiAgICAgIHJldHVybiBtKHQpXG4gICAgfSxcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGZvciAodmFyIHQgPSBbXSwgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKVxuICAgICAgICBmb3IgKHZhciBzID0gdGhpc1tpXS5jaGlsZHJlbiwgYSA9IDA7IGEgPCBzLmxlbmd0aDsgYSArPSAxKSBlICYmICFtKHNbYV0pLmlzKGUpIHx8IHQucHVzaChzW2FdKTtcbiAgICAgIHJldHVybiBtKHQpXG4gICAgfSxcbiAgICBmaWx0ZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gbShmKHRoaXMsIGUpKVxuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMubGVuZ3RoOyBlICs9IDEpIHRoaXNbZV0ucGFyZW50Tm9kZSAmJiB0aGlzW2VdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1tlXSk7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBFKGUsIHQpIHtcbiAgICByZXR1cm4gdm9pZCAwID09PSB0ICYmICh0ID0gMCksIHNldFRpbWVvdXQoZSwgdClcbiAgfVxuXG4gIGZ1bmN0aW9uIHgoKSB7XG4gICAgcmV0dXJuIERhdGUubm93KClcbiAgfVxuXG4gIGZ1bmN0aW9uIFQoZSwgdCkge1xuICAgIHZvaWQgMCA9PT0gdCAmJiAodCA9IFwieFwiKTtcbiAgICB2YXIgaSwgcywgYSwgciA9IGwoKSxcbiAgICAgIG4gPSByLmdldENvbXB1dGVkU3R5bGUoZSwgbnVsbCk7XG4gICAgcmV0dXJuIHIuV2ViS2l0Q1NTTWF0cml4ID8gKChzID0gbi50cmFuc2Zvcm0gfHwgbi53ZWJraXRUcmFuc2Zvcm0pLnNwbGl0KFwiLFwiKS5sZW5ndGggPiA2ICYmIChzID0gcy5zcGxpdChcIiwgXCIpLm1hcCgoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLnJlcGxhY2UoXCIsXCIsIFwiLlwiKVxuICAgIH0pKS5qb2luKFwiLCBcIikpLCBhID0gbmV3IHIuV2ViS2l0Q1NTTWF0cml4KFwibm9uZVwiID09PSBzID8gXCJcIiA6IHMpKSA6IGkgPSAoYSA9IG4uTW96VHJhbnNmb3JtIHx8IG4uT1RyYW5zZm9ybSB8fCBuLk1zVHJhbnNmb3JtIHx8IG4ubXNUcmFuc2Zvcm0gfHwgbi50cmFuc2Zvcm0gfHwgbi5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtXCIpLnJlcGxhY2UoXCJ0cmFuc2xhdGUoXCIsIFwibWF0cml4KDEsIDAsIDAsIDEsXCIpKS50b1N0cmluZygpLnNwbGl0KFwiLFwiKSwgXCJ4XCIgPT09IHQgJiYgKHMgPSByLldlYktpdENTU01hdHJpeCA/IGEubTQxIDogMTYgPT09IGkubGVuZ3RoID8gcGFyc2VGbG9hdChpWzEyXSkgOiBwYXJzZUZsb2F0KGlbNF0pKSwgXCJ5XCIgPT09IHQgJiYgKHMgPSByLldlYktpdENTU01hdHJpeCA/IGEubTQyIDogMTYgPT09IGkubGVuZ3RoID8gcGFyc2VGbG9hdChpWzEzXSkgOiBwYXJzZUZsb2F0KGlbNV0pKSwgcyB8fCAwXG4gIH1cblxuICBmdW5jdGlvbiBDKGUpIHtcbiAgICByZXR1cm4gXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBudWxsICE9PSBlICYmIGUuY29uc3RydWN0b3IgJiYgZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0XG4gIH1cblxuICBmdW5jdGlvbiBTKCkge1xuICAgIGZvciAodmFyIGUgPSBPYmplY3QoYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdm9pZCAwIDogYXJndW1lbnRzWzBdKSwgdCA9IDE7IHQgPCBhcmd1bWVudHMubGVuZ3RoOyB0ICs9IDEpIHtcbiAgICAgIHZhciBpID0gdCA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSB0ID8gdm9pZCAwIDogYXJndW1lbnRzW3RdO1xuICAgICAgaWYgKG51bGwgIT0gaSlcbiAgICAgICAgZm9yICh2YXIgcyA9IE9iamVjdC5rZXlzKE9iamVjdChpKSksIGEgPSAwLCByID0gcy5sZW5ndGg7IGEgPCByOyBhICs9IDEpIHtcbiAgICAgICAgICB2YXIgbiA9IHNbYV0sXG4gICAgICAgICAgICBsID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpLCBuKTtcbiAgICAgICAgICB2b2lkIDAgIT09IGwgJiYgbC5lbnVtZXJhYmxlICYmIChDKGVbbl0pICYmIEMoaVtuXSkgPyBTKGVbbl0sIGlbbl0pIDogIUMoZVtuXSkgJiYgQyhpW25dKSA/IChlW25dID0ge30sIFMoZVtuXSwgaVtuXSkpIDogZVtuXSA9IGlbbl0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVcbiAgfVxuXG4gIGZ1bmN0aW9uIE0oZSwgdCkge1xuICAgIE9iamVjdC5rZXlzKHQpLmZvckVhY2goKGZ1bmN0aW9uIChpKSB7XG4gICAgICBDKHRbaV0pICYmIE9iamVjdC5rZXlzKHRbaV0pLmZvckVhY2goKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdFtpXVtzXSAmJiAodFtpXVtzXSA9IHRbaV1bc10uYmluZChlKSlcbiAgICAgIH0pKSwgZVtpXSA9IHRbaV1cbiAgICB9KSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHooKSB7XG4gICAgcmV0dXJuIGcgfHwgKGcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZSA9IGwoKSxcbiAgICAgICAgdCA9IHIoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvdWNoOiAhIShcIm9udG91Y2hzdGFydFwiIGluIGUgfHwgZS5Eb2N1bWVudFRvdWNoICYmIHQgaW5zdGFuY2VvZiBlLkRvY3VtZW50VG91Y2gpLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAhIWUuUG9pbnRlckV2ZW50ICYmIFwibWF4VG91Y2hQb2ludHNcIiBpbiBlLm5hdmlnYXRvciAmJiBlLm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+PSAwLFxuICAgICAgICBvYnNlcnZlcjogXCJNdXRhdGlvbk9ic2VydmVyXCIgaW4gZSB8fCBcIldlYmtpdE11dGF0aW9uT2JzZXJ2ZXJcIiBpbiBlLFxuICAgICAgICBwYXNzaXZlTGlzdGVuZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdCA9ICExO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgaSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcbiAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdCA9ICEwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwidGVzdFBhc3NpdmVMaXN0ZW5lclwiLCBudWxsLCBpKVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgcmV0dXJuIHRcbiAgICAgICAgfSgpLFxuICAgICAgICBnZXN0dXJlczogXCJvbmdlc3R1cmVzdGFydFwiIGluIGVcbiAgICAgIH1cbiAgICB9KCkpLCBnXG4gIH1cblxuICBmdW5jdGlvbiBQKGUpIHtcbiAgICByZXR1cm4gdm9pZCAwID09PSBlICYmIChlID0ge30pLCB3IHx8ICh3ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gKHZvaWQgMCA9PT0gZSA/IHt9IDogZSkudXNlckFnZW50LFxuICAgICAgICBpID0geigpLFxuICAgICAgICBzID0gbCgpLFxuICAgICAgICBhID0gcy5uYXZpZ2F0b3IucGxhdGZvcm0sXG4gICAgICAgIHIgPSB0IHx8IHMubmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgbiA9IHtcbiAgICAgICAgICBpb3M6ICExLFxuICAgICAgICAgIGFuZHJvaWQ6ICExXG4gICAgICAgIH0sXG4gICAgICAgIG8gPSBzLnNjcmVlbi53aWR0aCxcbiAgICAgICAgZCA9IHMuc2NyZWVuLmhlaWdodCxcbiAgICAgICAgaCA9IHIubWF0Y2goLyhBbmRyb2lkKTs/W1xcc1xcL10rKFtcXGQuXSspPy8pLFxuICAgICAgICBwID0gci5tYXRjaCgvKGlQYWQpLipPU1xccyhbXFxkX10rKS8pLFxuICAgICAgICB1ID0gci5tYXRjaCgvKGlQb2QpKC4qT1NcXHMoW1xcZF9dKykpPy8pLFxuICAgICAgICBjID0gIXAgJiYgci5tYXRjaCgvKGlQaG9uZVxcc09TfGlPUylcXHMoW1xcZF9dKykvKSxcbiAgICAgICAgdiA9IFwiV2luMzJcIiA9PT0gYSxcbiAgICAgICAgZiA9IFwiTWFjSW50ZWxcIiA9PT0gYTtcbiAgICAgIHJldHVybiAhcCAmJiBmICYmIGkudG91Y2ggJiYgW1wiMTAyNHgxMzY2XCIsIFwiMTM2NngxMDI0XCIsIFwiODM0eDExOTRcIiwgXCIxMTk0eDgzNFwiLCBcIjgzNHgxMTEyXCIsIFwiMTExMng4MzRcIiwgXCI3Njh4MTAyNFwiLCBcIjEwMjR4NzY4XCJdLmluZGV4T2YobyArIFwieFwiICsgZCkgPj0gMCAmJiAoKHAgPSByLm1hdGNoKC8oVmVyc2lvbilcXC8oW1xcZC5dKykvKSkgfHwgKHAgPSBbMCwgMSwgXCIxM18wXzBcIl0pLCBmID0gITEpLCBoICYmICF2ICYmIChuLm9zID0gXCJhbmRyb2lkXCIsIG4uYW5kcm9pZCA9ICEwKSwgKHAgfHwgYyB8fCB1KSAmJiAobi5vcyA9IFwiaW9zXCIsIG4uaW9zID0gITApLCBuXG4gICAgfShlKSksIHdcbiAgfVxuXG4gIGZ1bmN0aW9uIGsoKSB7XG4gICAgcmV0dXJuIGIgfHwgKGIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZSwgdCA9IGwoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRWRnZTogISF0Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2UvZyksXG4gICAgICAgIGlzU2FmYXJpOiAoZSA9IHQubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLCBlLmluZGV4T2YoXCJzYWZhcmlcIikgPj0gMCAmJiBlLmluZGV4T2YoXCJjaHJvbWVcIikgPCAwICYmIGUuaW5kZXhPZihcImFuZHJvaWRcIikgPCAwKSxcbiAgICAgICAgaXNXZWJWaWV3OiAvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3QodC5uYXZpZ2F0b3IudXNlckFnZW50KVxuICAgICAgfVxuICAgIH0oKSksIGJcbiAgfVxuICBPYmplY3Qua2V5cyh5KS5mb3JFYWNoKChmdW5jdGlvbiAoZSkge1xuICAgIG0uZm5bZV0gPSB5W2VdXG4gIH0pKTtcbiAgdmFyICQgPSB7XG4gICAgICBuYW1lOiBcInJlc2l6ZVwiLFxuICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgUyhlLCB7XG4gICAgICAgICAgcmVzaXplOiB7XG4gICAgICAgICAgICByZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGUgJiYgIWUuZGVzdHJveWVkICYmIGUuaW5pdGlhbGl6ZWQgJiYgKGUuZW1pdChcImJlZm9yZVJlc2l6ZVwiKSwgZS5lbWl0KFwicmVzaXplXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBlICYmICFlLmRlc3Ryb3llZCAmJiBlLmluaXRpYWxpemVkICYmIGUuZW1pdChcIm9yaWVudGF0aW9uY2hhbmdlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBsKCk7XG4gICAgICAgICAgdC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGUucmVzaXplLnJlc2l6ZUhhbmRsZXIpLCB0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBlLnJlc2l6ZS5vcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpXG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBsKCk7XG4gICAgICAgICAgdC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGUucmVzaXplLnJlc2l6ZUhhbmRsZXIpLCB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBlLnJlc2l6ZS5vcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIEwgPSB7XG4gICAgICBhdHRhY2g6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHZvaWQgMCA9PT0gdCAmJiAodCA9IHt9KTtcbiAgICAgICAgdmFyIGkgPSBsKCksXG4gICAgICAgICAgcyA9IHRoaXMsXG4gICAgICAgICAgYSA9IG5ldyhpLk11dGF0aW9uT2JzZXJ2ZXIgfHwgaS5XZWJraXRNdXRhdGlvbk9ic2VydmVyKSgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICgxICE9PSBlLmxlbmd0aCkge1xuICAgICAgICAgICAgICB2YXIgdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzLmVtaXQoXCJvYnNlcnZlclVwZGF0ZVwiLCBlWzBdKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBpLnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IGkucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHQpIDogaS5zZXRUaW1lb3V0KHQsIDApXG4gICAgICAgICAgICB9IGVsc2Ugcy5lbWl0KFwib2JzZXJ2ZXJVcGRhdGVcIiwgZVswXSlcbiAgICAgICAgICB9KSk7XG4gICAgICAgIGEub2JzZXJ2ZShlLCB7XG4gICAgICAgICAgYXR0cmlidXRlczogdm9pZCAwID09PSB0LmF0dHJpYnV0ZXMgfHwgdC5hdHRyaWJ1dGVzLFxuICAgICAgICAgIGNoaWxkTGlzdDogdm9pZCAwID09PSB0LmNoaWxkTGlzdCB8fCB0LmNoaWxkTGlzdCxcbiAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB2b2lkIDAgPT09IHQuY2hhcmFjdGVyRGF0YSB8fCB0LmNoYXJhY3RlckRhdGFcbiAgICAgICAgfSksIHMub2JzZXJ2ZXIub2JzZXJ2ZXJzLnB1c2goYSlcbiAgICAgIH0sXG4gICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnQub2JzZXJ2ZXIgJiYgdGhpcy5wYXJhbXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbXMub2JzZXJ2ZVBhcmVudHMpXG4gICAgICAgICAgICBmb3IgKHZhciBlID0gdGhpcy4kZWwucGFyZW50cygpLCB0ID0gMDsgdCA8IGUubGVuZ3RoOyB0ICs9IDEpIHRoaXMub2JzZXJ2ZXIuYXR0YWNoKGVbdF0pO1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuYXR0YWNoKHRoaXMuJGVsWzBdLCB7XG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRoaXMucGFyYW1zLm9ic2VydmVTbGlkZUNoaWxkcmVuXG4gICAgICAgICAgfSksIHRoaXMub2JzZXJ2ZXIuYXR0YWNoKHRoaXMuJHdyYXBwZXJFbFswXSwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogITFcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmVycy5mb3JFYWNoKChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUuZGlzY29ubmVjdCgpXG4gICAgICAgIH0pKSwgdGhpcy5vYnNlcnZlci5vYnNlcnZlcnMgPSBbXVxuICAgICAgfVxuICAgIH0sXG4gICAgSSA9IHtcbiAgICAgIG5hbWU6IFwib2JzZXJ2ZXJcIixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBvYnNlcnZlcjogITEsXG4gICAgICAgIG9ic2VydmVQYXJlbnRzOiAhMSxcbiAgICAgICAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46ICExXG4gICAgICB9LFxuICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIE0odGhpcywge1xuICAgICAgICAgIG9ic2VydmVyOiB0KHQoe30sIEwpLCB7fSwge1xuICAgICAgICAgICAgb2JzZXJ2ZXJzOiBbXVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLm9ic2VydmVyLmluaXQoKVxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUub2JzZXJ2ZXIuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gIGZ1bmN0aW9uIE8oZSkge1xuICAgIHZhciB0ID0gcigpLFxuICAgICAgaSA9IGwoKSxcbiAgICAgIHMgPSB0aGlzLnRvdWNoRXZlbnRzRGF0YSxcbiAgICAgIGEgPSB0aGlzLnBhcmFtcyxcbiAgICAgIG4gPSB0aGlzLnRvdWNoZXM7XG4gICAgaWYgKCF0aGlzLmFuaW1hdGluZyB8fCAhYS5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICAgIHZhciBvID0gZTtcbiAgICAgIG8ub3JpZ2luYWxFdmVudCAmJiAobyA9IG8ub3JpZ2luYWxFdmVudCk7XG4gICAgICB2YXIgZCA9IG0oby50YXJnZXQpO1xuICAgICAgaWYgKChcIndyYXBwZXJcIiAhPT0gYS50b3VjaEV2ZW50c1RhcmdldCB8fCBkLmNsb3Nlc3QodGhpcy53cmFwcGVyRWwpLmxlbmd0aCkgJiYgKHMuaXNUb3VjaEV2ZW50ID0gXCJ0b3VjaHN0YXJ0XCIgPT09IG8udHlwZSwgKHMuaXNUb3VjaEV2ZW50IHx8ICEoXCJ3aGljaFwiIGluIG8pIHx8IDMgIT09IG8ud2hpY2gpICYmICEoIXMuaXNUb3VjaEV2ZW50ICYmIFwiYnV0dG9uXCIgaW4gbyAmJiBvLmJ1dHRvbiA+IDAgfHwgcy5pc1RvdWNoZWQgJiYgcy5pc01vdmVkKSkpXG4gICAgICAgIGlmIChhLm5vU3dpcGluZyAmJiBkLmNsb3Nlc3QoYS5ub1N3aXBpbmdTZWxlY3RvciA/IGEubm9Td2lwaW5nU2VsZWN0b3IgOiBcIi5cIiArIGEubm9Td2lwaW5nQ2xhc3MpWzBdKSB0aGlzLmFsbG93Q2xpY2sgPSAhMDtcbiAgICAgICAgZWxzZSBpZiAoIWEuc3dpcGVIYW5kbGVyIHx8IGQuY2xvc2VzdChhLnN3aXBlSGFuZGxlcilbMF0pIHtcbiAgICAgICAgbi5jdXJyZW50WCA9IFwidG91Y2hzdGFydFwiID09PSBvLnR5cGUgPyBvLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBvLnBhZ2VYLCBuLmN1cnJlbnRZID0gXCJ0b3VjaHN0YXJ0XCIgPT09IG8udHlwZSA/IG8udGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IG8ucGFnZVk7XG4gICAgICAgIHZhciBoID0gbi5jdXJyZW50WCxcbiAgICAgICAgICBwID0gbi5jdXJyZW50WSxcbiAgICAgICAgICB1ID0gYS5lZGdlU3dpcGVEZXRlY3Rpb24gfHwgYS5pT1NFZGdlU3dpcGVEZXRlY3Rpb24sXG4gICAgICAgICAgYyA9IGEuZWRnZVN3aXBlVGhyZXNob2xkIHx8IGEuaU9TRWRnZVN3aXBlVGhyZXNob2xkO1xuICAgICAgICBpZiAoIXUgfHwgIShoIDw9IGMgfHwgaCA+PSBpLnNjcmVlbi53aWR0aCAtIGMpKSB7XG4gICAgICAgICAgaWYgKFMocywge1xuICAgICAgICAgICAgICBpc1RvdWNoZWQ6ICEwLFxuICAgICAgICAgICAgICBpc01vdmVkOiAhMSxcbiAgICAgICAgICAgICAgYWxsb3dUb3VjaENhbGxiYWNrczogITAsXG4gICAgICAgICAgICAgIGlzU2Nyb2xsaW5nOiB2b2lkIDAsXG4gICAgICAgICAgICAgIHN0YXJ0TW92aW5nOiB2b2lkIDBcbiAgICAgICAgICAgIH0pLCBuLnN0YXJ0WCA9IGgsIG4uc3RhcnRZID0gcCwgcy50b3VjaFN0YXJ0VGltZSA9IHgoKSwgdGhpcy5hbGxvd0NsaWNrID0gITAsIHRoaXMudXBkYXRlU2l6ZSgpLCB0aGlzLnN3aXBlRGlyZWN0aW9uID0gdm9pZCAwLCBhLnRocmVzaG9sZCA+IDAgJiYgKHMuYWxsb3dUaHJlc2hvbGRNb3ZlID0gITEpLCBcInRvdWNoc3RhcnRcIiAhPT0gby50eXBlKSB7XG4gICAgICAgICAgICB2YXIgdiA9ICEwO1xuICAgICAgICAgICAgZC5pcyhzLmZvcm1FbGVtZW50cykgJiYgKHYgPSAhMSksIHQuYWN0aXZlRWxlbWVudCAmJiBtKHQuYWN0aXZlRWxlbWVudCkuaXMocy5mb3JtRWxlbWVudHMpICYmIHQuYWN0aXZlRWxlbWVudCAhPT0gZFswXSAmJiB0LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgdmFyIGYgPSB2ICYmIHRoaXMuYWxsb3dUb3VjaE1vdmUgJiYgYS50b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ7XG4gICAgICAgICAgICAoYS50b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCB8fCBmKSAmJiBvLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbWl0KFwidG91Y2hTdGFydFwiLCBvKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQShlKSB7XG4gICAgdmFyIHQgPSByKCksXG4gICAgICBpID0gdGhpcy50b3VjaEV2ZW50c0RhdGEsXG4gICAgICBzID0gdGhpcy5wYXJhbXMsXG4gICAgICBhID0gdGhpcy50b3VjaGVzLFxuICAgICAgbiA9IHRoaXMucnRsVHJhbnNsYXRlLFxuICAgICAgbCA9IGU7XG4gICAgaWYgKGwub3JpZ2luYWxFdmVudCAmJiAobCA9IGwub3JpZ2luYWxFdmVudCksIGkuaXNUb3VjaGVkKSB7XG4gICAgICBpZiAoIWkuaXNUb3VjaEV2ZW50IHx8IFwidG91Y2htb3ZlXCIgPT09IGwudHlwZSkge1xuICAgICAgICB2YXIgbyA9IFwidG91Y2htb3ZlXCIgPT09IGwudHlwZSAmJiBsLnRhcmdldFRvdWNoZXMgJiYgKGwudGFyZ2V0VG91Y2hlc1swXSB8fCBsLmNoYW5nZWRUb3VjaGVzWzBdKSxcbiAgICAgICAgICBkID0gXCJ0b3VjaG1vdmVcIiA9PT0gbC50eXBlID8gby5wYWdlWCA6IGwucGFnZVgsXG4gICAgICAgICAgaCA9IFwidG91Y2htb3ZlXCIgPT09IGwudHlwZSA/IG8ucGFnZVkgOiBsLnBhZ2VZO1xuICAgICAgICBpZiAobC5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlcikgcmV0dXJuIGEuc3RhcnRYID0gZCwgdm9pZChhLnN0YXJ0WSA9IGgpO1xuICAgICAgICBpZiAoIXRoaXMuYWxsb3dUb3VjaE1vdmUpIHJldHVybiB0aGlzLmFsbG93Q2xpY2sgPSAhMSwgdm9pZChpLmlzVG91Y2hlZCAmJiAoUyhhLCB7XG4gICAgICAgICAgc3RhcnRYOiBkLFxuICAgICAgICAgIHN0YXJ0WTogaCxcbiAgICAgICAgICBjdXJyZW50WDogZCxcbiAgICAgICAgICBjdXJyZW50WTogaFxuICAgICAgICB9KSwgaS50b3VjaFN0YXJ0VGltZSA9IHgoKSkpO1xuICAgICAgICBpZiAoaS5pc1RvdWNoRXZlbnQgJiYgcy50b3VjaFJlbGVhc2VPbkVkZ2VzICYmICFzLmxvb3ApXG4gICAgICAgICAgaWYgKHRoaXMuaXNWZXJ0aWNhbCgpKSB7XG4gICAgICAgICAgICBpZiAoaCA8IGEuc3RhcnRZICYmIHRoaXMudHJhbnNsYXRlIDw9IHRoaXMubWF4VHJhbnNsYXRlKCkgfHwgaCA+IGEuc3RhcnRZICYmIHRoaXMudHJhbnNsYXRlID49IHRoaXMubWluVHJhbnNsYXRlKCkpIHJldHVybiBpLmlzVG91Y2hlZCA9ICExLCB2b2lkKGkuaXNNb3ZlZCA9ICExKVxuICAgICAgICAgIH0gZWxzZSBpZiAoZCA8IGEuc3RhcnRYICYmIHRoaXMudHJhbnNsYXRlIDw9IHRoaXMubWF4VHJhbnNsYXRlKCkgfHwgZCA+IGEuc3RhcnRYICYmIHRoaXMudHJhbnNsYXRlID49IHRoaXMubWluVHJhbnNsYXRlKCkpIHJldHVybjtcbiAgICAgICAgaWYgKGkuaXNUb3VjaEV2ZW50ICYmIHQuYWN0aXZlRWxlbWVudCAmJiBsLnRhcmdldCA9PT0gdC5hY3RpdmVFbGVtZW50ICYmIG0obC50YXJnZXQpLmlzKGkuZm9ybUVsZW1lbnRzKSkgcmV0dXJuIGkuaXNNb3ZlZCA9ICEwLCB2b2lkKHRoaXMuYWxsb3dDbGljayA9ICExKTtcbiAgICAgICAgaWYgKGkuYWxsb3dUb3VjaENhbGxiYWNrcyAmJiB0aGlzLmVtaXQoXCJ0b3VjaE1vdmVcIiwgbCksICEobC50YXJnZXRUb3VjaGVzICYmIGwudGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSkge1xuICAgICAgICAgIGEuY3VycmVudFggPSBkLCBhLmN1cnJlbnRZID0gaDtcbiAgICAgICAgICB2YXIgcCA9IGEuY3VycmVudFggLSBhLnN0YXJ0WCxcbiAgICAgICAgICAgIHUgPSBhLmN1cnJlbnRZIC0gYS5zdGFydFk7XG4gICAgICAgICAgaWYgKCEodGhpcy5wYXJhbXMudGhyZXNob2xkICYmIE1hdGguc3FydChNYXRoLnBvdyhwLCAyKSArIE1hdGgucG93KHUsIDIpKSA8IHRoaXMucGFyYW1zLnRocmVzaG9sZCkpIHtcbiAgICAgICAgICAgIHZhciBjO1xuICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gaS5pc1Njcm9sbGluZykgdGhpcy5pc0hvcml6b250YWwoKSAmJiBhLmN1cnJlbnRZID09PSBhLnN0YXJ0WSB8fCB0aGlzLmlzVmVydGljYWwoKSAmJiBhLmN1cnJlbnRYID09PSBhLnN0YXJ0WCA/IGkuaXNTY3JvbGxpbmcgPSAhMSA6IHAgKiBwICsgdSAqIHUgPj0gMjUgJiYgKGMgPSAxODAgKiBNYXRoLmF0YW4yKE1hdGguYWJzKHUpLCBNYXRoLmFicyhwKSkgLyBNYXRoLlBJLCBpLmlzU2Nyb2xsaW5nID0gdGhpcy5pc0hvcml6b250YWwoKSA/IGMgPiBzLnRvdWNoQW5nbGUgOiA5MCAtIGMgPiBzLnRvdWNoQW5nbGUpO1xuICAgICAgICAgICAgaWYgKGkuaXNTY3JvbGxpbmcgJiYgdGhpcy5lbWl0KFwidG91Y2hNb3ZlT3Bwb3NpdGVcIiwgbCksIHZvaWQgMCA9PT0gaS5zdGFydE1vdmluZyAmJiAoYS5jdXJyZW50WCA9PT0gYS5zdGFydFggJiYgYS5jdXJyZW50WSA9PT0gYS5zdGFydFkgfHwgKGkuc3RhcnRNb3ZpbmcgPSAhMCkpLCBpLmlzU2Nyb2xsaW5nKSBpLmlzVG91Y2hlZCA9ICExO1xuICAgICAgICAgICAgZWxzZSBpZiAoaS5zdGFydE1vdmluZykge1xuICAgICAgICAgICAgICB0aGlzLmFsbG93Q2xpY2sgPSAhMSwgIXMuY3NzTW9kZSAmJiBsLmNhbmNlbGFibGUgJiYgbC5wcmV2ZW50RGVmYXVsdCgpLCBzLnRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbiAmJiAhcy5uZXN0ZWQgJiYgbC5zdG9wUHJvcGFnYXRpb24oKSwgaS5pc01vdmVkIHx8IChzLmxvb3AgJiYgdGhpcy5sb29wRml4KCksIGkuc3RhcnRUcmFuc2xhdGUgPSB0aGlzLmdldFRyYW5zbGF0ZSgpLCB0aGlzLnNldFRyYW5zaXRpb24oMCksIHRoaXMuYW5pbWF0aW5nICYmIHRoaXMuJHdyYXBwZXJFbC50cmlnZ2VyKFwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIpLCBpLmFsbG93TW9tZW50dW1Cb3VuY2UgPSAhMSwgIXMuZ3JhYkN1cnNvciB8fCAhMCAhPT0gdGhpcy5hbGxvd1NsaWRlTmV4dCAmJiAhMCAhPT0gdGhpcy5hbGxvd1NsaWRlUHJldiB8fCB0aGlzLnNldEdyYWJDdXJzb3IoITApLCB0aGlzLmVtaXQoXCJzbGlkZXJGaXJzdE1vdmVcIiwgbCkpLCB0aGlzLmVtaXQoXCJzbGlkZXJNb3ZlXCIsIGwpLCBpLmlzTW92ZWQgPSAhMDtcbiAgICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmlzSG9yaXpvbnRhbCgpID8gcCA6IHU7XG4gICAgICAgICAgICAgIGEuZGlmZiA9IHYsIHYgKj0gcy50b3VjaFJhdGlvLCBuICYmICh2ID0gLXYpLCB0aGlzLnN3aXBlRGlyZWN0aW9uID0gdiA+IDAgPyBcInByZXZcIiA6IFwibmV4dFwiLCBpLmN1cnJlbnRUcmFuc2xhdGUgPSB2ICsgaS5zdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgICAgICAgdmFyIGYgPSAhMCxcbiAgICAgICAgICAgICAgICBnID0gcy5yZXNpc3RhbmNlUmF0aW87XG4gICAgICAgICAgICAgIGlmIChzLnRvdWNoUmVsZWFzZU9uRWRnZXMgJiYgKGcgPSAwKSwgdiA+IDAgJiYgaS5jdXJyZW50VHJhbnNsYXRlID4gdGhpcy5taW5UcmFuc2xhdGUoKSA/IChmID0gITEsIHMucmVzaXN0YW5jZSAmJiAoaS5jdXJyZW50VHJhbnNsYXRlID0gdGhpcy5taW5UcmFuc2xhdGUoKSAtIDEgKyBNYXRoLnBvdygtdGhpcy5taW5UcmFuc2xhdGUoKSArIGkuc3RhcnRUcmFuc2xhdGUgKyB2LCBnKSkpIDogdiA8IDAgJiYgaS5jdXJyZW50VHJhbnNsYXRlIDwgdGhpcy5tYXhUcmFuc2xhdGUoKSAmJiAoZiA9ICExLCBzLnJlc2lzdGFuY2UgJiYgKGkuY3VycmVudFRyYW5zbGF0ZSA9IHRoaXMubWF4VHJhbnNsYXRlKCkgKyAxIC0gTWF0aC5wb3codGhpcy5tYXhUcmFuc2xhdGUoKSAtIGkuc3RhcnRUcmFuc2xhdGUgLSB2LCBnKSkpLCBmICYmIChsLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyID0gITApLCAhdGhpcy5hbGxvd1NsaWRlTmV4dCAmJiBcIm5leHRcIiA9PT0gdGhpcy5zd2lwZURpcmVjdGlvbiAmJiBpLmN1cnJlbnRUcmFuc2xhdGUgPCBpLnN0YXJ0VHJhbnNsYXRlICYmIChpLmN1cnJlbnRUcmFuc2xhdGUgPSBpLnN0YXJ0VHJhbnNsYXRlKSwgIXRoaXMuYWxsb3dTbGlkZVByZXYgJiYgXCJwcmV2XCIgPT09IHRoaXMuc3dpcGVEaXJlY3Rpb24gJiYgaS5jdXJyZW50VHJhbnNsYXRlID4gaS5zdGFydFRyYW5zbGF0ZSAmJiAoaS5jdXJyZW50VHJhbnNsYXRlID0gaS5zdGFydFRyYW5zbGF0ZSksIHMudGhyZXNob2xkID4gMCkge1xuICAgICAgICAgICAgICAgIGlmICghKE1hdGguYWJzKHYpID4gcy50aHJlc2hvbGQgfHwgaS5hbGxvd1RocmVzaG9sZE1vdmUpKSByZXR1cm4gdm9pZChpLmN1cnJlbnRUcmFuc2xhdGUgPSBpLnN0YXJ0VHJhbnNsYXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoIWkuYWxsb3dUaHJlc2hvbGRNb3ZlKSByZXR1cm4gaS5hbGxvd1RocmVzaG9sZE1vdmUgPSAhMCwgYS5zdGFydFggPSBhLmN1cnJlbnRYLCBhLnN0YXJ0WSA9IGEuY3VycmVudFksIGkuY3VycmVudFRyYW5zbGF0ZSA9IGkuc3RhcnRUcmFuc2xhdGUsIHZvaWQoYS5kaWZmID0gdGhpcy5pc0hvcml6b250YWwoKSA/IGEuY3VycmVudFggLSBhLnN0YXJ0WCA6IGEuY3VycmVudFkgLSBhLnN0YXJ0WSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzLmZvbGxvd0ZpbmdlciAmJiAhcy5jc3NNb2RlICYmICgocy5mcmVlTW9kZSB8fCBzLndhdGNoU2xpZGVzUHJvZ3Jlc3MgfHwgcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpICYmICh0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KCksIHRoaXMudXBkYXRlU2xpZGVzQ2xhc3NlcygpKSwgcy5mcmVlTW9kZSAmJiAoMCA9PT0gaS52ZWxvY2l0aWVzLmxlbmd0aCAmJiBpLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFbdGhpcy5pc0hvcml6b250YWwoKSA/IFwic3RhcnRYXCIgOiBcInN0YXJ0WVwiXSxcbiAgICAgICAgICAgICAgICB0aW1lOiBpLnRvdWNoU3RhcnRUaW1lXG4gICAgICAgICAgICAgIH0pLCBpLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFbdGhpcy5pc0hvcml6b250YWwoKSA/IFwiY3VycmVudFhcIiA6IFwiY3VycmVudFlcIl0sXG4gICAgICAgICAgICAgICAgdGltZTogeCgpXG4gICAgICAgICAgICAgIH0pKSwgdGhpcy51cGRhdGVQcm9ncmVzcyhpLmN1cnJlbnRUcmFuc2xhdGUpLCB0aGlzLnNldFRyYW5zbGF0ZShpLmN1cnJlbnRUcmFuc2xhdGUpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpLnN0YXJ0TW92aW5nICYmIGkuaXNTY3JvbGxpbmcgJiYgdGhpcy5lbWl0KFwidG91Y2hNb3ZlT3Bwb3NpdGVcIiwgbClcbiAgfVxuXG4gIGZ1bmN0aW9uIEQoZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIGkgPSB0LnRvdWNoRXZlbnRzRGF0YSxcbiAgICAgIHMgPSB0LnBhcmFtcyxcbiAgICAgIGEgPSB0LnRvdWNoZXMsXG4gICAgICByID0gdC5ydGxUcmFuc2xhdGUsXG4gICAgICBuID0gdC4kd3JhcHBlckVsLFxuICAgICAgbCA9IHQuc2xpZGVzR3JpZCxcbiAgICAgIG8gPSB0LnNuYXBHcmlkLFxuICAgICAgZCA9IGU7XG4gICAgaWYgKGQub3JpZ2luYWxFdmVudCAmJiAoZCA9IGQub3JpZ2luYWxFdmVudCksIGkuYWxsb3dUb3VjaENhbGxiYWNrcyAmJiB0LmVtaXQoXCJ0b3VjaEVuZFwiLCBkKSwgaS5hbGxvd1RvdWNoQ2FsbGJhY2tzID0gITEsICFpLmlzVG91Y2hlZCkgcmV0dXJuIGkuaXNNb3ZlZCAmJiBzLmdyYWJDdXJzb3IgJiYgdC5zZXRHcmFiQ3Vyc29yKCExKSwgaS5pc01vdmVkID0gITEsIHZvaWQoaS5zdGFydE1vdmluZyA9ICExKTtcbiAgICBzLmdyYWJDdXJzb3IgJiYgaS5pc01vdmVkICYmIGkuaXNUb3VjaGVkICYmICghMCA9PT0gdC5hbGxvd1NsaWRlTmV4dCB8fCAhMCA9PT0gdC5hbGxvd1NsaWRlUHJldikgJiYgdC5zZXRHcmFiQ3Vyc29yKCExKTtcbiAgICB2YXIgaCwgcCA9IHgoKSxcbiAgICAgIHUgPSBwIC0gaS50b3VjaFN0YXJ0VGltZTtcbiAgICBpZiAodC5hbGxvd0NsaWNrICYmICh0LnVwZGF0ZUNsaWNrZWRTbGlkZShkKSwgdC5lbWl0KFwidGFwIGNsaWNrXCIsIGQpLCB1IDwgMzAwICYmIHAgLSBpLmxhc3RDbGlja1RpbWUgPCAzMDAgJiYgdC5lbWl0KFwiZG91YmxlVGFwIGRvdWJsZUNsaWNrXCIsIGQpKSwgaS5sYXN0Q2xpY2tUaW1lID0geCgpLCBFKChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuZGVzdHJveWVkIHx8ICh0LmFsbG93Q2xpY2sgPSAhMClcbiAgICAgIH0pKSwgIWkuaXNUb3VjaGVkIHx8ICFpLmlzTW92ZWQgfHwgIXQuc3dpcGVEaXJlY3Rpb24gfHwgMCA9PT0gYS5kaWZmIHx8IGkuY3VycmVudFRyYW5zbGF0ZSA9PT0gaS5zdGFydFRyYW5zbGF0ZSkgcmV0dXJuIGkuaXNUb3VjaGVkID0gITEsIGkuaXNNb3ZlZCA9ICExLCB2b2lkKGkuc3RhcnRNb3ZpbmcgPSAhMSk7XG4gICAgaWYgKGkuaXNUb3VjaGVkID0gITEsIGkuaXNNb3ZlZCA9ICExLCBpLnN0YXJ0TW92aW5nID0gITEsIGggPSBzLmZvbGxvd0ZpbmdlciA/IHIgPyB0LnRyYW5zbGF0ZSA6IC10LnRyYW5zbGF0ZSA6IC1pLmN1cnJlbnRUcmFuc2xhdGUsICFzLmNzc01vZGUpXG4gICAgICBpZiAocy5mcmVlTW9kZSkge1xuICAgICAgICBpZiAoaCA8IC10Lm1pblRyYW5zbGF0ZSgpKSByZXR1cm4gdm9pZCB0LnNsaWRlVG8odC5hY3RpdmVJbmRleCk7XG4gICAgICAgIGlmIChoID4gLXQubWF4VHJhbnNsYXRlKCkpIHJldHVybiB2b2lkKHQuc2xpZGVzLmxlbmd0aCA8IG8ubGVuZ3RoID8gdC5zbGlkZVRvKG8ubGVuZ3RoIC0gMSkgOiB0LnNsaWRlVG8odC5zbGlkZXMubGVuZ3RoIC0gMSkpO1xuICAgICAgICBpZiAocy5mcmVlTW9kZU1vbWVudHVtKSB7XG4gICAgICAgICAgaWYgKGkudmVsb2NpdGllcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgYyA9IGkudmVsb2NpdGllcy5wb3AoKSxcbiAgICAgICAgICAgICAgdiA9IGkudmVsb2NpdGllcy5wb3AoKSxcbiAgICAgICAgICAgICAgZiA9IGMucG9zaXRpb24gLSB2LnBvc2l0aW9uLFxuICAgICAgICAgICAgICBtID0gYy50aW1lIC0gdi50aW1lO1xuICAgICAgICAgICAgdC52ZWxvY2l0eSA9IGYgLyBtLCB0LnZlbG9jaXR5IC89IDIsIE1hdGguYWJzKHQudmVsb2NpdHkpIDwgcy5mcmVlTW9kZU1pbmltdW1WZWxvY2l0eSAmJiAodC52ZWxvY2l0eSA9IDApLCAobSA+IDE1MCB8fCB4KCkgLSBjLnRpbWUgPiAzMDApICYmICh0LnZlbG9jaXR5ID0gMClcbiAgICAgICAgICB9IGVsc2UgdC52ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgdC52ZWxvY2l0eSAqPSBzLmZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvLCBpLnZlbG9jaXRpZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICB2YXIgZyA9IDFlMyAqIHMuZnJlZU1vZGVNb21lbnR1bVJhdGlvLFxuICAgICAgICAgICAgdyA9IHQudmVsb2NpdHkgKiBnLFxuICAgICAgICAgICAgYiA9IHQudHJhbnNsYXRlICsgdztcbiAgICAgICAgICByICYmIChiID0gLWIpO1xuICAgICAgICAgIHZhciB5LCBULCBDID0gITEsXG4gICAgICAgICAgICBTID0gMjAgKiBNYXRoLmFicyh0LnZlbG9jaXR5KSAqIHMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvO1xuICAgICAgICAgIGlmIChiIDwgdC5tYXhUcmFuc2xhdGUoKSkgcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlID8gKGIgKyB0Lm1heFRyYW5zbGF0ZSgpIDwgLVMgJiYgKGIgPSB0Lm1heFRyYW5zbGF0ZSgpIC0gUyksIHkgPSB0Lm1heFRyYW5zbGF0ZSgpLCBDID0gITAsIGkuYWxsb3dNb21lbnR1bUJvdW5jZSA9ICEwKSA6IGIgPSB0Lm1heFRyYW5zbGF0ZSgpLCBzLmxvb3AgJiYgcy5jZW50ZXJlZFNsaWRlcyAmJiAoVCA9ICEwKTtcbiAgICAgICAgICBlbHNlIGlmIChiID4gdC5taW5UcmFuc2xhdGUoKSkgcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlID8gKGIgLSB0Lm1pblRyYW5zbGF0ZSgpID4gUyAmJiAoYiA9IHQubWluVHJhbnNsYXRlKCkgKyBTKSwgeSA9IHQubWluVHJhbnNsYXRlKCksIEMgPSAhMCwgaS5hbGxvd01vbWVudHVtQm91bmNlID0gITApIDogYiA9IHQubWluVHJhbnNsYXRlKCksIHMubG9vcCAmJiBzLmNlbnRlcmVkU2xpZGVzICYmIChUID0gITApO1xuICAgICAgICAgIGVsc2UgaWYgKHMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICAgIGZvciAodmFyIE0sIHogPSAwOyB6IDwgby5sZW5ndGg7IHogKz0gMSlcbiAgICAgICAgICAgICAgaWYgKG9bel0gPiAtYikge1xuICAgICAgICAgICAgICAgIE0gPSB6O1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH0gYiA9IC0oYiA9IE1hdGguYWJzKG9bTV0gLSBiKSA8IE1hdGguYWJzKG9bTSAtIDFdIC0gYikgfHwgXCJuZXh0XCIgPT09IHQuc3dpcGVEaXJlY3Rpb24gPyBvW01dIDogb1tNIC0gMV0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChUICYmIHQub25jZShcInRyYW5zaXRpb25FbmRcIiwgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdC5sb29wRml4KClcbiAgICAgICAgICAgIH0pKSwgMCAhPT0gdC52ZWxvY2l0eSkge1xuICAgICAgICAgICAgaWYgKGcgPSByID8gTWF0aC5hYnMoKC1iIC0gdC50cmFuc2xhdGUpIC8gdC52ZWxvY2l0eSkgOiBNYXRoLmFicygoYiAtIHQudHJhbnNsYXRlKSAvIHQudmVsb2NpdHkpLCBzLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgICAgICAgIHZhciBQID0gTWF0aC5hYnMoKHIgPyAtYiA6IGIpIC0gdC50cmFuc2xhdGUpLFxuICAgICAgICAgICAgICAgIGsgPSB0LnNsaWRlc1NpemVzR3JpZFt0LmFjdGl2ZUluZGV4XTtcbiAgICAgICAgICAgICAgZyA9IFAgPCBrID8gcy5zcGVlZCA6IFAgPCAyICogayA/IDEuNSAqIHMuc3BlZWQgOiAyLjUgKiBzLnNwZWVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChzLmZyZWVNb2RlU3RpY2t5KSByZXR1cm4gdm9pZCB0LnNsaWRlVG9DbG9zZXN0KCk7XG4gICAgICAgICAgcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlICYmIEMgPyAodC51cGRhdGVQcm9ncmVzcyh5KSwgdC5zZXRUcmFuc2l0aW9uKGcpLCB0LnNldFRyYW5zbGF0ZShiKSwgdC50cmFuc2l0aW9uU3RhcnQoITAsIHQuc3dpcGVEaXJlY3Rpb24pLCB0LmFuaW1hdGluZyA9ICEwLCBuLnRyYW5zaXRpb25FbmQoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQgJiYgIXQuZGVzdHJveWVkICYmIGkuYWxsb3dNb21lbnR1bUJvdW5jZSAmJiAodC5lbWl0KFwibW9tZW50dW1Cb3VuY2VcIiksIHQuc2V0VHJhbnNpdGlvbihzLnNwZWVkKSwgc2V0VGltZW91dCgoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0LnNldFRyYW5zbGF0ZSh5KSwgbi50cmFuc2l0aW9uRW5kKChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdCAmJiAhdC5kZXN0cm95ZWQgJiYgdC50cmFuc2l0aW9uRW5kKClcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSwgMCkpXG4gICAgICAgICAgfSkpKSA6IHQudmVsb2NpdHkgPyAodC51cGRhdGVQcm9ncmVzcyhiKSwgdC5zZXRUcmFuc2l0aW9uKGcpLCB0LnNldFRyYW5zbGF0ZShiKSwgdC50cmFuc2l0aW9uU3RhcnQoITAsIHQuc3dpcGVEaXJlY3Rpb24pLCB0LmFuaW1hdGluZyB8fCAodC5hbmltYXRpbmcgPSAhMCwgbi50cmFuc2l0aW9uRW5kKChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0ICYmICF0LmRlc3Ryb3llZCAmJiB0LnRyYW5zaXRpb25FbmQoKVxuICAgICAgICAgIH0pKSkpIDogdC51cGRhdGVQcm9ncmVzcyhiKSwgdC51cGRhdGVBY3RpdmVJbmRleCgpLCB0LnVwZGF0ZVNsaWRlc0NsYXNzZXMoKVxuICAgICAgICB9IGVsc2UgaWYgKHMuZnJlZU1vZGVTdGlja3kpIHJldHVybiB2b2lkIHQuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICAgICAgKCFzLmZyZWVNb2RlTW9tZW50dW0gfHwgdSA+PSBzLmxvbmdTd2lwZXNNcykgJiYgKHQudXBkYXRlUHJvZ3Jlc3MoKSwgdC51cGRhdGVBY3RpdmVJbmRleCgpLCB0LnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyICQgPSAwLCBMID0gdC5zbGlkZXNTaXplc0dyaWRbMF0sIEkgPSAwOyBJIDwgbC5sZW5ndGg7IEkgKz0gSSA8IHMuc2xpZGVzUGVyR3JvdXBTa2lwID8gMSA6IHMuc2xpZGVzUGVyR3JvdXApIHtcbiAgICAgICAgICB2YXIgTyA9IEkgPCBzLnNsaWRlc1Blckdyb3VwU2tpcCAtIDEgPyAxIDogcy5zbGlkZXNQZXJHcm91cDtcbiAgICAgICAgICB2b2lkIDAgIT09IGxbSSArIE9dID8gaCA+PSBsW0ldICYmIGggPCBsW0kgKyBPXSAmJiAoJCA9IEksIEwgPSBsW0kgKyBPXSAtIGxbSV0pIDogaCA+PSBsW0ldICYmICgkID0gSSwgTCA9IGxbbC5sZW5ndGggLSAxXSAtIGxbbC5sZW5ndGggLSAyXSlcbiAgICAgICAgfVxuICAgICAgICB2YXIgQSA9IChoIC0gbFskXSkgLyBMLFxuICAgICAgICAgIEQgPSAkIDwgcy5zbGlkZXNQZXJHcm91cFNraXAgLSAxID8gMSA6IHMuc2xpZGVzUGVyR3JvdXA7XG4gICAgICAgIGlmICh1ID4gcy5sb25nU3dpcGVzTXMpIHtcbiAgICAgICAgICBpZiAoIXMubG9uZ1N3aXBlcykgcmV0dXJuIHZvaWQgdC5zbGlkZVRvKHQuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgIFwibmV4dFwiID09PSB0LnN3aXBlRGlyZWN0aW9uICYmIChBID49IHMubG9uZ1N3aXBlc1JhdGlvID8gdC5zbGlkZVRvKCQgKyBEKSA6IHQuc2xpZGVUbygkKSksIFwicHJldlwiID09PSB0LnN3aXBlRGlyZWN0aW9uICYmIChBID4gMSAtIHMubG9uZ1N3aXBlc1JhdGlvID8gdC5zbGlkZVRvKCQgKyBEKSA6IHQuc2xpZGVUbygkKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXMuc2hvcnRTd2lwZXMpIHJldHVybiB2b2lkIHQuc2xpZGVUbyh0LmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICB0Lm5hdmlnYXRpb24gJiYgKGQudGFyZ2V0ID09PSB0Lm5hdmlnYXRpb24ubmV4dEVsIHx8IGQudGFyZ2V0ID09PSB0Lm5hdmlnYXRpb24ucHJldkVsKSA/IGQudGFyZ2V0ID09PSB0Lm5hdmlnYXRpb24ubmV4dEVsID8gdC5zbGlkZVRvKCQgKyBEKSA6IHQuc2xpZGVUbygkKSA6IChcIm5leHRcIiA9PT0gdC5zd2lwZURpcmVjdGlvbiAmJiB0LnNsaWRlVG8oJCArIEQpLCBcInByZXZcIiA9PT0gdC5zd2lwZURpcmVjdGlvbiAmJiB0LnNsaWRlVG8oJCkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEcoKSB7XG4gICAgdmFyIGUgPSB0aGlzLnBhcmFtcyxcbiAgICAgIHQgPSB0aGlzLmVsO1xuICAgIGlmICghdCB8fCAwICE9PSB0Lm9mZnNldFdpZHRoKSB7XG4gICAgICBlLmJyZWFrcG9pbnRzICYmIHRoaXMuc2V0QnJlYWtwb2ludCgpO1xuICAgICAgdmFyIGkgPSB0aGlzLmFsbG93U2xpZGVOZXh0LFxuICAgICAgICBzID0gdGhpcy5hbGxvd1NsaWRlUHJldixcbiAgICAgICAgYSA9IHRoaXMuc25hcEdyaWQ7XG4gICAgICB0aGlzLmFsbG93U2xpZGVOZXh0ID0gITAsIHRoaXMuYWxsb3dTbGlkZVByZXYgPSAhMCwgdGhpcy51cGRhdGVTaXplKCksIHRoaXMudXBkYXRlU2xpZGVzKCksIHRoaXMudXBkYXRlU2xpZGVzQ2xhc3NlcygpLCAoXCJhdXRvXCIgPT09IGUuc2xpZGVzUGVyVmlldyB8fCBlLnNsaWRlc1BlclZpZXcgPiAxKSAmJiB0aGlzLmlzRW5kICYmICF0aGlzLmlzQmVnaW5uaW5nICYmICF0aGlzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHRoaXMuc2xpZGVUbyh0aGlzLnNsaWRlcy5sZW5ndGggLSAxLCAwLCAhMSwgITApIDogdGhpcy5zbGlkZVRvKHRoaXMuYWN0aXZlSW5kZXgsIDAsICExLCAhMCksIHRoaXMuYXV0b3BsYXkgJiYgdGhpcy5hdXRvcGxheS5ydW5uaW5nICYmIHRoaXMuYXV0b3BsYXkucGF1c2VkICYmIHRoaXMuYXV0b3BsYXkucnVuKCksIHRoaXMuYWxsb3dTbGlkZVByZXYgPSBzLCB0aGlzLmFsbG93U2xpZGVOZXh0ID0gaSwgdGhpcy5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBhICE9PSB0aGlzLnNuYXBHcmlkICYmIHRoaXMuY2hlY2tPdmVyZmxvdygpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gTihlKSB7XG4gICAgdGhpcy5hbGxvd0NsaWNrIHx8ICh0aGlzLnBhcmFtcy5wcmV2ZW50Q2xpY2tzICYmIGUucHJldmVudERlZmF1bHQoKSwgdGhpcy5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uICYmIHRoaXMuYW5pbWF0aW5nICYmIChlLnN0b3BQcm9wYWdhdGlvbigpLCBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIEIoKSB7XG4gICAgdmFyIGUgPSB0aGlzLndyYXBwZXJFbCxcbiAgICAgIHQgPSB0aGlzLnJ0bFRyYW5zbGF0ZTtcbiAgICB0aGlzLnByZXZpb3VzVHJhbnNsYXRlID0gdGhpcy50cmFuc2xhdGUsIHRoaXMuaXNIb3Jpem9udGFsKCkgPyB0aGlzLnRyYW5zbGF0ZSA9IHQgPyBlLnNjcm9sbFdpZHRoIC0gZS5vZmZzZXRXaWR0aCAtIGUuc2Nyb2xsTGVmdCA6IC1lLnNjcm9sbExlZnQgOiB0aGlzLnRyYW5zbGF0ZSA9IC1lLnNjcm9sbFRvcCwgLTAgPT09IHRoaXMudHJhbnNsYXRlICYmICh0aGlzLnRyYW5zbGF0ZSA9IDApLCB0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KCksIHRoaXMudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIHZhciBpID0gdGhpcy5tYXhUcmFuc2xhdGUoKSAtIHRoaXMubWluVHJhbnNsYXRlKCk7XG4gICAgKDAgPT09IGkgPyAwIDogKHRoaXMudHJhbnNsYXRlIC0gdGhpcy5taW5UcmFuc2xhdGUoKSkgLyBpKSAhPT0gdGhpcy5wcm9ncmVzcyAmJiB0aGlzLnVwZGF0ZVByb2dyZXNzKHQgPyAtdGhpcy50cmFuc2xhdGUgOiB0aGlzLnRyYW5zbGF0ZSksIHRoaXMuZW1pdChcInNldFRyYW5zbGF0ZVwiLCB0aGlzLnRyYW5zbGF0ZSwgITEpXG4gIH1cbiAgdmFyIEggPSAhMTtcblxuICBmdW5jdGlvbiBYKCkge31cbiAgdmFyIFkgPSB7XG4gICAgICBpbml0OiAhMCxcbiAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICB0b3VjaEV2ZW50c1RhcmdldDogXCJjb250YWluZXJcIixcbiAgICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICAgIHNwZWVkOiAzMDAsXG4gICAgICBjc3NNb2RlOiAhMSxcbiAgICAgIHVwZGF0ZU9uV2luZG93UmVzaXplOiAhMCxcbiAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgcHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uOiAhMSxcbiAgICAgIHVzZXJBZ2VudDogbnVsbCxcbiAgICAgIHVybDogbnVsbCxcbiAgICAgIGVkZ2VTd2lwZURldGVjdGlvbjogITEsXG4gICAgICBlZGdlU3dpcGVUaHJlc2hvbGQ6IDIwLFxuICAgICAgZnJlZU1vZGU6ICExLFxuICAgICAgZnJlZU1vZGVNb21lbnR1bTogITAsXG4gICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IDEsXG4gICAgICBmcmVlTW9kZU1vbWVudHVtQm91bmNlOiAhMCxcbiAgICAgIGZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbzogMSxcbiAgICAgIGZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvOiAxLFxuICAgICAgZnJlZU1vZGVTdGlja3k6ICExLFxuICAgICAgZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHk6IC4wMixcbiAgICAgIGF1dG9IZWlnaHQ6ICExLFxuICAgICAgc2V0V3JhcHBlclNpemU6ICExLFxuICAgICAgdmlydHVhbFRyYW5zbGF0ZTogITEsXG4gICAgICBlZmZlY3Q6IFwic2xpZGVcIixcbiAgICAgIGJyZWFrcG9pbnRzOiB2b2lkIDAsXG4gICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc2xpZGVzUGVyQ29sdW1uOiAxLFxuICAgICAgc2xpZGVzUGVyQ29sdW1uRmlsbDogXCJjb2x1bW5cIixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgc2xpZGVzUGVyR3JvdXBTa2lwOiAwLFxuICAgICAgY2VudGVyZWRTbGlkZXM6ICExLFxuICAgICAgY2VudGVyZWRTbGlkZXNCb3VuZHM6ICExLFxuICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxuICAgICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDAsXG4gICAgICBub3JtYWxpemVTbGlkZUluZGV4OiAhMCxcbiAgICAgIGNlbnRlckluc3VmZmljaWVudFNsaWRlczogITEsXG4gICAgICB3YXRjaE92ZXJmbG93OiAhMSxcbiAgICAgIHJvdW5kTGVuZ3RoczogITEsXG4gICAgICB0b3VjaFJhdGlvOiAxLFxuICAgICAgdG91Y2hBbmdsZTogNDUsXG4gICAgICBzaW11bGF0ZVRvdWNoOiAhMCxcbiAgICAgIHNob3J0U3dpcGVzOiAhMCxcbiAgICAgIGxvbmdTd2lwZXM6ICEwLFxuICAgICAgbG9uZ1N3aXBlc1JhdGlvOiAuNSxcbiAgICAgIGxvbmdTd2lwZXNNczogMzAwLFxuICAgICAgZm9sbG93RmluZ2VyOiAhMCxcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiAhMCxcbiAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgIHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbjogITEsXG4gICAgICB0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ6ICEwLFxuICAgICAgdG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQ6ICExLFxuICAgICAgdG91Y2hSZWxlYXNlT25FZGdlczogITEsXG4gICAgICB1bmlxdWVOYXZFbGVtZW50czogITAsXG4gICAgICByZXNpc3RhbmNlOiAhMCxcbiAgICAgIHJlc2lzdGFuY2VSYXRpbzogLjg1LFxuICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogITEsXG4gICAgICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6ICExLFxuICAgICAgZ3JhYkN1cnNvcjogITEsXG4gICAgICBwcmV2ZW50Q2xpY2tzOiAhMCxcbiAgICAgIHByZXZlbnRDbGlja3NQcm9wYWdhdGlvbjogITAsXG4gICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiAhMSxcbiAgICAgIHByZWxvYWRJbWFnZXM6ICEwLFxuICAgICAgdXBkYXRlT25JbWFnZXNSZWFkeTogITAsXG4gICAgICBsb29wOiAhMSxcbiAgICAgIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAwLFxuICAgICAgbG9vcGVkU2xpZGVzOiBudWxsLFxuICAgICAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogITEsXG4gICAgICBsb29wUHJldmVudHNTbGlkZTogITAsXG4gICAgICBhbGxvd1NsaWRlUHJldjogITAsXG4gICAgICBhbGxvd1NsaWRlTmV4dDogITAsXG4gICAgICBzd2lwZUhhbmRsZXI6IG51bGwsXG4gICAgICBub1N3aXBpbmc6ICEwLFxuICAgICAgbm9Td2lwaW5nQ2xhc3M6IFwic3dpcGVyLW5vLXN3aXBpbmdcIixcbiAgICAgIG5vU3dpcGluZ1NlbGVjdG9yOiBudWxsLFxuICAgICAgcGFzc2l2ZUxpc3RlbmVyczogITAsXG4gICAgICBjb250YWluZXJNb2RpZmllckNsYXNzOiBcInN3aXBlci1jb250YWluZXItXCIsXG4gICAgICBzbGlkZUNsYXNzOiBcInN3aXBlci1zbGlkZVwiLFxuICAgICAgc2xpZGVCbGFua0NsYXNzOiBcInN3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmtcIixcbiAgICAgIHNsaWRlQWN0aXZlQ2xhc3M6IFwic3dpcGVyLXNsaWRlLWFjdGl2ZVwiLFxuICAgICAgc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczogXCJzd2lwZXItc2xpZGUtZHVwbGljYXRlLWFjdGl2ZVwiLFxuICAgICAgc2xpZGVWaXNpYmxlQ2xhc3M6IFwic3dpcGVyLXNsaWRlLXZpc2libGVcIixcbiAgICAgIHNsaWRlRHVwbGljYXRlQ2xhc3M6IFwic3dpcGVyLXNsaWRlLWR1cGxpY2F0ZVwiLFxuICAgICAgc2xpZGVOZXh0Q2xhc3M6IFwic3dpcGVyLXNsaWRlLW5leHRcIixcbiAgICAgIHNsaWRlRHVwbGljYXRlTmV4dENsYXNzOiBcInN3aXBlci1zbGlkZS1kdXBsaWNhdGUtbmV4dFwiLFxuICAgICAgc2xpZGVQcmV2Q2xhc3M6IFwic3dpcGVyLXNsaWRlLXByZXZcIixcbiAgICAgIHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOiBcInN3aXBlci1zbGlkZS1kdXBsaWNhdGUtcHJldlwiLFxuICAgICAgd3JhcHBlckNsYXNzOiBcInN3aXBlci13cmFwcGVyXCIsXG4gICAgICBydW5DYWxsYmFja3NPbkluaXQ6ICEwLFxuICAgICAgX2VtaXRDbGFzc2VzOiAhMVxuICAgIH0sXG4gICAgViA9IHtcbiAgICAgIG1vZHVsYXI6IHtcbiAgICAgICAgdXNlUGFyYW1zOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgICB0Lm1vZHVsZXMgJiYgT2JqZWN0LmtleXModC5tb2R1bGVzKS5mb3JFYWNoKChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIHMgPSB0Lm1vZHVsZXNbaV07XG4gICAgICAgICAgICBzLnBhcmFtcyAmJiBTKGUsIHMucGFyYW1zKVxuICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgICAgICB1c2VNb2R1bGVzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9IHt9KTtcbiAgICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgICAgdC5tb2R1bGVzICYmIE9iamVjdC5rZXlzKHQubW9kdWxlcykuZm9yRWFjaCgoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBzID0gdC5tb2R1bGVzW2ldLFxuICAgICAgICAgICAgICBhID0gZVtpXSB8fCB7fTtcbiAgICAgICAgICAgIHMub24gJiYgdC5vbiAmJiBPYmplY3Qua2V5cyhzLm9uKS5mb3JFYWNoKChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICB0Lm9uKGUsIHMub25bZV0pXG4gICAgICAgICAgICB9KSksIHMuY3JlYXRlICYmIHMuY3JlYXRlLmJpbmQodCkoYSlcbiAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGV2ZW50c0VtaXR0ZXI6IHtcbiAgICAgICAgb246IGZ1bmN0aW9uIChlLCB0LCBpKSB7XG4gICAgICAgICAgdmFyIHMgPSB0aGlzO1xuICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQpIHJldHVybiBzO1xuICAgICAgICAgIHZhciBhID0gaSA/IFwidW5zaGlmdFwiIDogXCJwdXNoXCI7XG4gICAgICAgICAgcmV0dXJuIGUuc3BsaXQoXCIgXCIpLmZvckVhY2goKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzLmV2ZW50c0xpc3RlbmVyc1tlXSB8fCAocy5ldmVudHNMaXN0ZW5lcnNbZV0gPSBbXSksIHMuZXZlbnRzTGlzdGVuZXJzW2VdW2FdKHQpXG4gICAgICAgICAgfSkpLCBzXG4gICAgICAgIH0sXG4gICAgICAgIG9uY2U6IGZ1bmN0aW9uIChlLCB0LCBpKSB7XG4gICAgICAgICAgdmFyIHMgPSB0aGlzO1xuICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQpIHJldHVybiBzO1xuXG4gICAgICAgICAgZnVuY3Rpb24gYSgpIHtcbiAgICAgICAgICAgIHMub2ZmKGUsIGEpLCBhLl9fZW1pdHRlclByb3h5ICYmIGRlbGV0ZSBhLl9fZW1pdHRlclByb3h5O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBuZXcgQXJyYXkoaSksIG4gPSAwOyBuIDwgaTsgbisrKSByW25dID0gYXJndW1lbnRzW25dO1xuICAgICAgICAgICAgdC5hcHBseShzLCByKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYS5fX2VtaXR0ZXJQcm94eSA9IHQsIHMub24oZSwgYSwgaSlcbiAgICAgICAgfSxcbiAgICAgICAgb25Bbnk6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZSkgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgdmFyIGkgPSB0ID8gXCJ1bnNoaWZ0XCIgOiBcInB1c2hcIjtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudHNBbnlMaXN0ZW5lcnMuaW5kZXhPZihlKSA8IDAgJiYgdGhpcy5ldmVudHNBbnlMaXN0ZW5lcnNbaV0oZSksIHRoaXNcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmQW55OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmICghdGhpcy5ldmVudHNBbnlMaXN0ZW5lcnMpIHJldHVybiB0aGlzO1xuICAgICAgICAgIHZhciB0ID0gdGhpcy5ldmVudHNBbnlMaXN0ZW5lcnMuaW5kZXhPZihlKTtcbiAgICAgICAgICByZXR1cm4gdCA+PSAwICYmIHRoaXMuZXZlbnRzQW55TGlzdGVuZXJzLnNwbGljZSh0LCAxKSwgdGhpc1xuICAgICAgICB9LFxuICAgICAgICBvZmY6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdmFyIGkgPSB0aGlzO1xuICAgICAgICAgIHJldHVybiBpLmV2ZW50c0xpc3RlbmVycyA/IChlLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdm9pZCAwID09PSB0ID8gaS5ldmVudHNMaXN0ZW5lcnNbZV0gPSBbXSA6IGkuZXZlbnRzTGlzdGVuZXJzW2VdICYmIGkuZXZlbnRzTGlzdGVuZXJzW2VdLmZvckVhY2goKGZ1bmN0aW9uIChzLCBhKSB7XG4gICAgICAgICAgICAgIChzID09PSB0IHx8IHMuX19lbWl0dGVyUHJveHkgJiYgcy5fX2VtaXR0ZXJQcm94eSA9PT0gdCkgJiYgaS5ldmVudHNMaXN0ZW5lcnNbZV0uc3BsaWNlKGEsIDEpXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9KSksIGkpIDogaVxuICAgICAgICB9LFxuICAgICAgICBlbWl0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGUsIHQsIGksIHMgPSB0aGlzO1xuICAgICAgICAgIGlmICghcy5ldmVudHNMaXN0ZW5lcnMpIHJldHVybiBzO1xuICAgICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gbmV3IEFycmF5KGEpLCBuID0gMDsgbiA8IGE7IG4rKykgcltuXSA9IGFyZ3VtZW50c1tuXTtcbiAgICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiByWzBdIHx8IEFycmF5LmlzQXJyYXkoclswXSkgPyAoZSA9IHJbMF0sIHQgPSByLnNsaWNlKDEsIHIubGVuZ3RoKSwgaSA9IHMpIDogKGUgPSByWzBdLmV2ZW50cywgdCA9IHJbMF0uZGF0YSwgaSA9IHJbMF0uY29udGV4dCB8fCBzKSwgdC51bnNoaWZ0KGkpO1xuICAgICAgICAgIHZhciBsID0gQXJyYXkuaXNBcnJheShlKSA/IGUgOiBlLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICByZXR1cm4gbC5mb3JFYWNoKChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHMuZXZlbnRzTGlzdGVuZXJzICYmIHMuZXZlbnRzTGlzdGVuZXJzW2VdKSB7XG4gICAgICAgICAgICAgIHZhciBhID0gW107XG4gICAgICAgICAgICAgIHMuZXZlbnRzTGlzdGVuZXJzW2VdLmZvckVhY2goKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgYS5wdXNoKGUpXG4gICAgICAgICAgICAgIH0pKSwgYS5mb3JFYWNoKChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUuYXBwbHkoaSwgdClcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpLCBzXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgdXBkYXRlU2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBlLCB0LCBpID0gdGhpcy4kZWw7XG4gICAgICAgICAgZSA9IHZvaWQgMCAhPT0gdGhpcy5wYXJhbXMud2lkdGggJiYgbnVsbCAhPT0gdGhpcy5wYXJhbXMud2lkdGggPyB0aGlzLnBhcmFtcy53aWR0aCA6IGlbMF0uY2xpZW50V2lkdGgsIHQgPSB2b2lkIDAgIT09IHRoaXMucGFyYW1zLmhlaWdodCAmJiBudWxsICE9PSB0aGlzLnBhcmFtcy53aWR0aCA/IHRoaXMucGFyYW1zLmhlaWdodCA6IGlbMF0uY2xpZW50SGVpZ2h0LCAwID09PSBlICYmIHRoaXMuaXNIb3Jpem9udGFsKCkgfHwgMCA9PT0gdCAmJiB0aGlzLmlzVmVydGljYWwoKSB8fCAoZSA9IGUgLSBwYXJzZUludChpLmNzcyhcInBhZGRpbmctbGVmdFwiKSB8fCAwLCAxMCkgLSBwYXJzZUludChpLmNzcyhcInBhZGRpbmctcmlnaHRcIikgfHwgMCwgMTApLCB0ID0gdCAtIHBhcnNlSW50KGkuY3NzKFwicGFkZGluZy10b3BcIikgfHwgMCwgMTApIC0gcGFyc2VJbnQoaS5jc3MoXCJwYWRkaW5nLWJvdHRvbVwiKSB8fCAwLCAxMCksIE51bWJlci5pc05hTihlKSAmJiAoZSA9IDApLCBOdW1iZXIuaXNOYU4odCkgJiYgKHQgPSAwKSwgUyh0aGlzLCB7XG4gICAgICAgICAgICB3aWR0aDogZSxcbiAgICAgICAgICAgIGhlaWdodDogdCxcbiAgICAgICAgICAgIHNpemU6IHRoaXMuaXNIb3Jpem9udGFsKCkgPyBlIDogdFxuICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVTbGlkZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZSA9IGwoKSxcbiAgICAgICAgICAgIHQgPSB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIGkgPSB0aGlzLiR3cmFwcGVyRWwsXG4gICAgICAgICAgICBzID0gdGhpcy5zaXplLFxuICAgICAgICAgICAgYSA9IHRoaXMucnRsVHJhbnNsYXRlLFxuICAgICAgICAgICAgciA9IHRoaXMud3JvbmdSVEwsXG4gICAgICAgICAgICBuID0gdGhpcy52aXJ0dWFsICYmIHQudmlydHVhbC5lbmFibGVkLFxuICAgICAgICAgICAgbyA9IG4gPyB0aGlzLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHRoaXMuc2xpZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIGQgPSBpLmNoaWxkcmVuKFwiLlwiICsgdGhpcy5wYXJhbXMuc2xpZGVDbGFzcyksXG4gICAgICAgICAgICBoID0gbiA/IHRoaXMudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogZC5sZW5ndGgsXG4gICAgICAgICAgICBwID0gW10sXG4gICAgICAgICAgICB1ID0gW10sXG4gICAgICAgICAgICBjID0gW107XG5cbiAgICAgICAgICBmdW5jdGlvbiB2KGUsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiAhdC5jc3NNb2RlIHx8IGkgIT09IGQubGVuZ3RoIC0gMVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZiA9IHQuc2xpZGVzT2Zmc2V0QmVmb3JlO1xuICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZiAmJiAoZiA9IHQuc2xpZGVzT2Zmc2V0QmVmb3JlLmNhbGwodGhpcykpO1xuICAgICAgICAgIHZhciBtID0gdC5zbGlkZXNPZmZzZXRBZnRlcjtcbiAgICAgICAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG0gJiYgKG0gPSB0LnNsaWRlc09mZnNldEFmdGVyLmNhbGwodGhpcykpO1xuICAgICAgICAgIHZhciBnID0gdGhpcy5zbmFwR3JpZC5sZW5ndGgsXG4gICAgICAgICAgICB3ID0gdGhpcy5zbmFwR3JpZC5sZW5ndGgsXG4gICAgICAgICAgICBiID0gdC5zcGFjZUJldHdlZW4sXG4gICAgICAgICAgICB5ID0gLWYsXG4gICAgICAgICAgICBFID0gMCxcbiAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgIGlmICh2b2lkIDAgIT09IHMpIHtcbiAgICAgICAgICAgIHZhciBULCBDO1xuICAgICAgICAgICAgXCJzdHJpbmdcIiA9PSB0eXBlb2YgYiAmJiBiLmluZGV4T2YoXCIlXCIpID49IDAgJiYgKGIgPSBwYXJzZUZsb2F0KGIucmVwbGFjZShcIiVcIiwgXCJcIikpIC8gMTAwICogcyksIHRoaXMudmlydHVhbFNpemUgPSAtYiwgYSA/IGQuY3NzKHtcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCJcIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIlwiXG4gICAgICAgICAgICB9KSA6IGQuY3NzKHtcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCJcIlxuICAgICAgICAgICAgfSksIHQuc2xpZGVzUGVyQ29sdW1uID4gMSAmJiAoVCA9IE1hdGguZmxvb3IoaCAvIHQuc2xpZGVzUGVyQ29sdW1uKSA9PT0gaCAvIHRoaXMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiA/IGggOiBNYXRoLmNlaWwoaCAvIHQuc2xpZGVzUGVyQ29sdW1uKSAqIHQuc2xpZGVzUGVyQ29sdW1uLCBcImF1dG9cIiAhPT0gdC5zbGlkZXNQZXJWaWV3ICYmIFwicm93XCIgPT09IHQuc2xpZGVzUGVyQ29sdW1uRmlsbCAmJiAoVCA9IE1hdGgubWF4KFQsIHQuc2xpZGVzUGVyVmlldyAqIHQuc2xpZGVzUGVyQ29sdW1uKSkpO1xuICAgICAgICAgICAgZm9yICh2YXIgTSwgeiA9IHQuc2xpZGVzUGVyQ29sdW1uLCBQID0gVCAvIHosIGsgPSBNYXRoLmZsb29yKGggLyB0LnNsaWRlc1BlckNvbHVtbiksICQgPSAwOyAkIDwgaDsgJCArPSAxKSB7XG4gICAgICAgICAgICAgIEMgPSAwO1xuICAgICAgICAgICAgICB2YXIgTCA9IGQuZXEoJCk7XG4gICAgICAgICAgICAgIGlmICh0LnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgSSA9IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgIE8gPSB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICBBID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmIChcInJvd1wiID09PSB0LnNsaWRlc1BlckNvbHVtbkZpbGwgJiYgdC5zbGlkZXNQZXJHcm91cCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBEID0gTWF0aC5mbG9vcigkIC8gKHQuc2xpZGVzUGVyR3JvdXAgKiB0LnNsaWRlc1BlckNvbHVtbikpLFxuICAgICAgICAgICAgICAgICAgICBHID0gJCAtIHQuc2xpZGVzUGVyQ29sdW1uICogdC5zbGlkZXNQZXJHcm91cCAqIEQsXG4gICAgICAgICAgICAgICAgICAgIE4gPSAwID09PSBEID8gdC5zbGlkZXNQZXJHcm91cCA6IE1hdGgubWluKE1hdGguY2VpbCgoaCAtIEQgKiB6ICogdC5zbGlkZXNQZXJHcm91cCkgLyB6KSwgdC5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgICAgICAgICAgICBJID0gKE8gPSBHIC0gKEEgPSBNYXRoLmZsb29yKEcgLyBOKSkgKiBOICsgRCAqIHQuc2xpZGVzUGVyR3JvdXApICsgQSAqIFQgLyB6LCBMLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIFwiLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cFwiOiBJLFxuICAgICAgICAgICAgICAgICAgICBcIi1tb3otYm94LW9yZGluYWwtZ3JvdXBcIjogSSxcbiAgICAgICAgICAgICAgICAgICAgXCItbXMtZmxleC1vcmRlclwiOiBJLFxuICAgICAgICAgICAgICAgICAgICBcIi13ZWJraXQtb3JkZXJcIjogSSxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IElcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIFwiY29sdW1uXCIgPT09IHQuc2xpZGVzUGVyQ29sdW1uRmlsbCA/IChBID0gJCAtIChPID0gTWF0aC5mbG9vcigkIC8geikpICogeiwgKE8gPiBrIHx8IE8gPT09IGsgJiYgQSA9PT0geiAtIDEpICYmIChBICs9IDEpID49IHogJiYgKEEgPSAwLCBPICs9IDEpKSA6IE8gPSAkIC0gKEEgPSBNYXRoLmZsb29yKCQgLyBQKSkgKiBQO1xuICAgICAgICAgICAgICAgIEwuY3NzKFwibWFyZ2luLVwiICsgKHRoaXMuaXNIb3Jpem9udGFsKCkgPyBcInRvcFwiIDogXCJsZWZ0XCIpLCAwICE9PSBBICYmIHQuc3BhY2VCZXR3ZWVuICYmIHQuc3BhY2VCZXR3ZWVuICsgXCJweFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChcIm5vbmVcIiAhPT0gTC5jc3MoXCJkaXNwbGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiYXV0b1wiID09PSB0LnNsaWRlc1BlclZpZXcpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBCID0gZS5nZXRDb21wdXRlZFN0eWxlKExbMF0sIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICBIID0gTFswXS5zdHlsZS50cmFuc2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgIFggPSBMWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICAgIGlmIChIICYmIChMWzBdLnN0eWxlLnRyYW5zZm9ybSA9IFwibm9uZVwiKSwgWCAmJiAoTFswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBcIm5vbmVcIiksIHQucm91bmRMZW5ndGhzKSBDID0gdGhpcy5pc0hvcml6b250YWwoKSA/IEwub3V0ZXJXaWR0aCghMCkgOiBMLm91dGVySGVpZ2h0KCEwKTtcbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFkgPSBwYXJzZUZsb2F0KEIuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpIHx8IDApLFxuICAgICAgICAgICAgICAgICAgICAgIFYgPSBwYXJzZUZsb2F0KEIuZ2V0UHJvcGVydHlWYWx1ZShcInBhZGRpbmctbGVmdFwiKSB8fCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICBGID0gcGFyc2VGbG9hdChCLmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLXJpZ2h0XCIpIHx8IDApLFxuICAgICAgICAgICAgICAgICAgICAgIFcgPSBwYXJzZUZsb2F0KEIuZ2V0UHJvcGVydHlWYWx1ZShcIm1hcmdpbi1sZWZ0XCIpIHx8IDApLFxuICAgICAgICAgICAgICAgICAgICAgIFIgPSBwYXJzZUZsb2F0KEIuZ2V0UHJvcGVydHlWYWx1ZShcIm1hcmdpbi1yaWdodFwiKSB8fCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICBxID0gQi5nZXRQcm9wZXJ0eVZhbHVlKFwiYm94LXNpemluZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQyA9IHEgJiYgXCJib3JkZXItYm94XCIgPT09IHEgPyBZICsgVyArIFIgOiBZICsgViArIEYgKyBXICsgUlxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGogPSBwYXJzZUZsb2F0KEIuZ2V0UHJvcGVydHlWYWx1ZShcImhlaWdodFwiKSB8fCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICBfID0gcGFyc2VGbG9hdChCLmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLXRvcFwiKSB8fCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICBVID0gcGFyc2VGbG9hdChCLmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLWJvdHRvbVwiKSB8fCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICBLID0gcGFyc2VGbG9hdChCLmdldFByb3BlcnR5VmFsdWUoXCJtYXJnaW4tdG9wXCIpIHx8IDApLFxuICAgICAgICAgICAgICAgICAgICAgIFogPSBwYXJzZUZsb2F0KEIuZ2V0UHJvcGVydHlWYWx1ZShcIm1hcmdpbi1ib3R0b21cIikgfHwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgSiA9IEIuZ2V0UHJvcGVydHlWYWx1ZShcImJveC1zaXppbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIEMgPSBKICYmIFwiYm9yZGVyLWJveFwiID09PSBKID8gaiArIEsgKyBaIDogaiArIF8gKyBVICsgSyArIFpcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIEggJiYgKExbMF0uc3R5bGUudHJhbnNmb3JtID0gSCksIFggJiYgKExbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gWCksIHQucm91bmRMZW5ndGhzICYmIChDID0gTWF0aC5mbG9vcihDKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgQyA9IChzIC0gKHQuc2xpZGVzUGVyVmlldyAtIDEpICogYikgLyB0LnNsaWRlc1BlclZpZXcsIHQucm91bmRMZW5ndGhzICYmIChDID0gTWF0aC5mbG9vcihDKSksIGRbJF0gJiYgKHRoaXMuaXNIb3Jpem9udGFsKCkgPyBkWyRdLnN0eWxlLndpZHRoID0gQyArIFwicHhcIiA6IGRbJF0uc3R5bGUuaGVpZ2h0ID0gQyArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgZFskXSAmJiAoZFskXS5zd2lwZXJTbGlkZVNpemUgPSBDKSwgYy5wdXNoKEMpLCB0LmNlbnRlcmVkU2xpZGVzID8gKHkgPSB5ICsgQyAvIDIgKyBFIC8gMiArIGIsIDAgPT09IEUgJiYgMCAhPT0gJCAmJiAoeSA9IHkgLSBzIC8gMiAtIGIpLCAwID09PSAkICYmICh5ID0geSAtIHMgLyAyIC0gYiksIE1hdGguYWJzKHkpIDwgLjAwMSAmJiAoeSA9IDApLCB0LnJvdW5kTGVuZ3RocyAmJiAoeSA9IE1hdGguZmxvb3IoeSkpLCB4ICUgdC5zbGlkZXNQZXJHcm91cCA9PSAwICYmIHAucHVzaCh5KSwgdS5wdXNoKHkpKSA6ICh0LnJvdW5kTGVuZ3RocyAmJiAoeSA9IE1hdGguZmxvb3IoeSkpLCAoeCAtIE1hdGgubWluKHRoaXMucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgeCkpICUgdGhpcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT0gMCAmJiBwLnB1c2goeSksIHUucHVzaCh5KSwgeSA9IHkgKyBDICsgYiksIHRoaXMudmlydHVhbFNpemUgKz0gQyArIGIsIEUgPSBDLCB4ICs9IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudmlydHVhbFNpemUgPSBNYXRoLm1heCh0aGlzLnZpcnR1YWxTaXplLCBzKSArIG0sIGEgJiYgciAmJiAoXCJzbGlkZVwiID09PSB0LmVmZmVjdCB8fCBcImNvdmVyZmxvd1wiID09PSB0LmVmZmVjdCkgJiYgaS5jc3Moe1xuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnZpcnR1YWxTaXplICsgdC5zcGFjZUJldHdlZW4gKyBcInB4XCJcbiAgICAgICAgICAgICAgfSksIHQuc2V0V3JhcHBlclNpemUgJiYgKHRoaXMuaXNIb3Jpem9udGFsKCkgPyBpLmNzcyh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMudmlydHVhbFNpemUgKyB0LnNwYWNlQmV0d2VlbiArIFwicHhcIlxuICAgICAgICAgICAgICB9KSA6IGkuY3NzKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMudmlydHVhbFNpemUgKyB0LnNwYWNlQmV0d2VlbiArIFwicHhcIlxuICAgICAgICAgICAgICB9KSksIHQuc2xpZGVzUGVyQ29sdW1uID4gMSAmJiAodGhpcy52aXJ0dWFsU2l6ZSA9IChDICsgdC5zcGFjZUJldHdlZW4pICogVCwgdGhpcy52aXJ0dWFsU2l6ZSA9IE1hdGguY2VpbCh0aGlzLnZpcnR1YWxTaXplIC8gdC5zbGlkZXNQZXJDb2x1bW4pIC0gdC5zcGFjZUJldHdlZW4sIHRoaXMuaXNIb3Jpem9udGFsKCkgPyBpLmNzcyh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMudmlydHVhbFNpemUgKyB0LnNwYWNlQmV0d2VlbiArIFwicHhcIlxuICAgICAgICAgICAgICB9KSA6IGkuY3NzKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMudmlydHVhbFNpemUgKyB0LnNwYWNlQmV0d2VlbiArIFwicHhcIlxuICAgICAgICAgICAgICB9KSwgdC5jZW50ZXJlZFNsaWRlcykpIHtcbiAgICAgICAgICAgICAgTSA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKHZhciBRID0gMDsgUSA8IHAubGVuZ3RoOyBRICs9IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWUgPSBwW1FdO1xuICAgICAgICAgICAgICAgIHQucm91bmRMZW5ndGhzICYmIChlZSA9IE1hdGguZmxvb3IoZWUpKSwgcFtRXSA8IHRoaXMudmlydHVhbFNpemUgKyBwWzBdICYmIE0ucHVzaChlZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwID0gTVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0LmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICAgIE0gPSBbXTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGUgPSAwOyB0ZSA8IHAubGVuZ3RoOyB0ZSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGllID0gcFt0ZV07XG4gICAgICAgICAgICAgICAgdC5yb3VuZExlbmd0aHMgJiYgKGllID0gTWF0aC5mbG9vcihpZSkpLCBwW3RlXSA8PSB0aGlzLnZpcnR1YWxTaXplIC0gcyAmJiBNLnB1c2goaWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcCA9IE0sIE1hdGguZmxvb3IodGhpcy52aXJ0dWFsU2l6ZSAtIHMpIC0gTWF0aC5mbG9vcihwW3AubGVuZ3RoIC0gMV0pID4gMSAmJiBwLnB1c2godGhpcy52aXJ0dWFsU2l6ZSAtIHMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoMCA9PT0gcC5sZW5ndGggJiYgKHAgPSBbMF0pLCAwICE9PSB0LnNwYWNlQmV0d2VlbiAmJiAodGhpcy5pc0hvcml6b250YWwoKSA/IGEgPyBkLmZpbHRlcih2KS5jc3Moe1xuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGIgKyBcInB4XCJcbiAgICAgICAgICAgICAgfSkgOiBkLmZpbHRlcih2KS5jc3Moe1xuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBiICsgXCJweFwiXG4gICAgICAgICAgICAgIH0pIDogZC5maWx0ZXIodikuY3NzKHtcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGIgKyBcInB4XCJcbiAgICAgICAgICAgICAgfSkpLCB0LmNlbnRlcmVkU2xpZGVzICYmIHQuY2VudGVyZWRTbGlkZXNCb3VuZHMpIHtcbiAgICAgICAgICAgICAgdmFyIHNlID0gMDtcbiAgICAgICAgICAgICAgYy5mb3JFYWNoKChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHNlICs9IGUgKyAodC5zcGFjZUJldHdlZW4gPyB0LnNwYWNlQmV0d2VlbiA6IDApXG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgdmFyIGFlID0gKHNlIC09IHQuc3BhY2VCZXR3ZWVuKSAtIHM7XG4gICAgICAgICAgICAgIHAgPSBwLm1hcCgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZSA8IDAgPyAtZiA6IGUgPiBhZSA/IGFlICsgbSA6IGVcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodC5jZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXMpIHtcbiAgICAgICAgICAgICAgdmFyIHJlID0gMDtcbiAgICAgICAgICAgICAgaWYgKGMuZm9yRWFjaCgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgIHJlICs9IGUgKyAodC5zcGFjZUJldHdlZW4gPyB0LnNwYWNlQmV0d2VlbiA6IDApXG4gICAgICAgICAgICAgICAgfSkpLCAocmUgLT0gdC5zcGFjZUJldHdlZW4pIDwgcykge1xuICAgICAgICAgICAgICAgIHZhciBuZSA9IChzIC0gcmUpIC8gMjtcbiAgICAgICAgICAgICAgICBwLmZvckVhY2goKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICBwW3RdID0gZSAtIG5lXG4gICAgICAgICAgICAgICAgfSkpLCB1LmZvckVhY2goKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICB1W3RdID0gZSArIG5lXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFModGhpcywge1xuICAgICAgICAgICAgICBzbGlkZXM6IGQsXG4gICAgICAgICAgICAgIHNuYXBHcmlkOiBwLFxuICAgICAgICAgICAgICBzbGlkZXNHcmlkOiB1LFxuICAgICAgICAgICAgICBzbGlkZXNTaXplc0dyaWQ6IGNcbiAgICAgICAgICAgIH0pLCBoICE9PSBvICYmIHRoaXMuZW1pdChcInNsaWRlc0xlbmd0aENoYW5nZVwiKSwgcC5sZW5ndGggIT09IGcgJiYgKHRoaXMucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgdGhpcy5jaGVja092ZXJmbG93KCksIHRoaXMuZW1pdChcInNuYXBHcmlkTGVuZ3RoQ2hhbmdlXCIpKSwgdS5sZW5ndGggIT09IHcgJiYgdGhpcy5lbWl0KFwic2xpZGVzR3JpZExlbmd0aENoYW5nZVwiKSwgKHQud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCB0LndhdGNoU2xpZGVzVmlzaWJpbGl0eSkgJiYgdGhpcy51cGRhdGVTbGlkZXNPZmZzZXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQXV0b0hlaWdodDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCwgaSA9IFtdLFxuICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgICAgaWYgKFwibnVtYmVyXCIgPT0gdHlwZW9mIGUgPyB0aGlzLnNldFRyYW5zaXRpb24oZSkgOiAhMCA9PT0gZSAmJiB0aGlzLnNldFRyYW5zaXRpb24odGhpcy5wYXJhbXMuc3BlZWQpLCBcImF1dG9cIiAhPT0gdGhpcy5wYXJhbXMuc2xpZGVzUGVyVmlldyAmJiB0aGlzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSlcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykgdGhpcy52aXNpYmxlU2xpZGVzLmVhY2goKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGkucHVzaChlKVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBmb3IgKHQgPSAwOyB0IDwgTWF0aC5jZWlsKHRoaXMucGFyYW1zLnNsaWRlc1BlclZpZXcpOyB0ICs9IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMuYWN0aXZlSW5kZXggKyB0O1xuICAgICAgICAgICAgICAgIGlmIChhID4gdGhpcy5zbGlkZXMubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBpLnB1c2godGhpcy5zbGlkZXMuZXEoYSlbMF0pXG4gICAgICAgICAgICAgIH0gZWxzZSBpLnB1c2godGhpcy5zbGlkZXMuZXEodGhpcy5hY3RpdmVJbmRleClbMF0pO1xuICAgICAgICAgIGZvciAodCA9IDA7IHQgPCBpLmxlbmd0aDsgdCArPSAxKVxuICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gaVt0XSkge1xuICAgICAgICAgICAgICB2YXIgciA9IGlbdF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICBzID0gciA+IHMgPyByIDogc1xuICAgICAgICAgICAgfSBzICYmIHRoaXMuJHdyYXBwZXJFbC5jc3MoXCJoZWlnaHRcIiwgcyArIFwicHhcIilcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlU2xpZGVzT2Zmc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMuc2xpZGVzLCB0ID0gMDsgdCA8IGUubGVuZ3RoOyB0ICs9IDEpIGVbdF0uc3dpcGVyU2xpZGVPZmZzZXQgPSB0aGlzLmlzSG9yaXpvbnRhbCgpID8gZVt0XS5vZmZzZXRMZWZ0IDogZVt0XS5vZmZzZXRUb3BcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlU2xpZGVzUHJvZ3Jlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gdGhpcyAmJiB0aGlzLnRyYW5zbGF0ZSB8fCAwKTtcbiAgICAgICAgICB2YXIgdCA9IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgaSA9IHRoaXMuc2xpZGVzLFxuICAgICAgICAgICAgcyA9IHRoaXMucnRsVHJhbnNsYXRlO1xuICAgICAgICAgIGlmICgwICE9PSBpLmxlbmd0aCkge1xuICAgICAgICAgICAgdm9pZCAwID09PSBpWzBdLnN3aXBlclNsaWRlT2Zmc2V0ICYmIHRoaXMudXBkYXRlU2xpZGVzT2Zmc2V0KCk7XG4gICAgICAgICAgICB2YXIgYSA9IC1lO1xuICAgICAgICAgICAgcyAmJiAoYSA9IGUpLCBpLnJlbW92ZUNsYXNzKHQuc2xpZGVWaXNpYmxlQ2xhc3MpLCB0aGlzLnZpc2libGVTbGlkZXNJbmRleGVzID0gW10sIHRoaXMudmlzaWJsZVNsaWRlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBpLmxlbmd0aDsgciArPSAxKSB7XG4gICAgICAgICAgICAgIHZhciBuID0gaVtyXSxcbiAgICAgICAgICAgICAgICBsID0gKGEgKyAodC5jZW50ZXJlZFNsaWRlcyA/IHRoaXMubWluVHJhbnNsYXRlKCkgOiAwKSAtIG4uc3dpcGVyU2xpZGVPZmZzZXQpIC8gKG4uc3dpcGVyU2xpZGVTaXplICsgdC5zcGFjZUJldHdlZW4pO1xuICAgICAgICAgICAgICBpZiAodC53YXRjaFNsaWRlc1Zpc2liaWxpdHkgfHwgdC5jZW50ZXJlZFNsaWRlcyAmJiB0LmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IC0oYSAtIG4uc3dpcGVyU2xpZGVPZmZzZXQpLFxuICAgICAgICAgICAgICAgICAgZCA9IG8gKyB0aGlzLnNsaWRlc1NpemVzR3JpZFtyXTtcbiAgICAgICAgICAgICAgICAobyA+PSAwICYmIG8gPCB0aGlzLnNpemUgLSAxIHx8IGQgPiAxICYmIGQgPD0gdGhpcy5zaXplIHx8IG8gPD0gMCAmJiBkID49IHRoaXMuc2l6ZSkgJiYgKHRoaXMudmlzaWJsZVNsaWRlcy5wdXNoKG4pLCB0aGlzLnZpc2libGVTbGlkZXNJbmRleGVzLnB1c2gociksIGkuZXEocikuYWRkQ2xhc3ModC5zbGlkZVZpc2libGVDbGFzcykpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbi5wcm9ncmVzcyA9IHMgPyAtbCA6IGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmlzaWJsZVNsaWRlcyA9IG0odGhpcy52aXNpYmxlU2xpZGVzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlUHJvZ3Jlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLnJ0bFRyYW5zbGF0ZSA/IC0xIDogMTtcbiAgICAgICAgICAgIGUgPSB0aGlzICYmIHRoaXMudHJhbnNsYXRlICYmIHRoaXMudHJhbnNsYXRlICogdCB8fCAwXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBpID0gdGhpcy5wYXJhbXMsXG4gICAgICAgICAgICBzID0gdGhpcy5tYXhUcmFuc2xhdGUoKSAtIHRoaXMubWluVHJhbnNsYXRlKCksXG4gICAgICAgICAgICBhID0gdGhpcy5wcm9ncmVzcyxcbiAgICAgICAgICAgIHIgPSB0aGlzLmlzQmVnaW5uaW5nLFxuICAgICAgICAgICAgbiA9IHRoaXMuaXNFbmQsXG4gICAgICAgICAgICBsID0gcixcbiAgICAgICAgICAgIG8gPSBuO1xuICAgICAgICAgIDAgPT09IHMgPyAoYSA9IDAsIHIgPSAhMCwgbiA9ICEwKSA6IChyID0gKGEgPSAoZSAtIHRoaXMubWluVHJhbnNsYXRlKCkpIC8gcykgPD0gMCwgbiA9IGEgPj0gMSksIFModGhpcywge1xuICAgICAgICAgICAgcHJvZ3Jlc3M6IGEsXG4gICAgICAgICAgICBpc0JlZ2lubmluZzogcixcbiAgICAgICAgICAgIGlzRW5kOiBuXG4gICAgICAgICAgfSksIChpLndhdGNoU2xpZGVzUHJvZ3Jlc3MgfHwgaS53YXRjaFNsaWRlc1Zpc2liaWxpdHkgfHwgaS5jZW50ZXJlZFNsaWRlcyAmJiBpLmF1dG9IZWlnaHQpICYmIHRoaXMudXBkYXRlU2xpZGVzUHJvZ3Jlc3MoZSksIHIgJiYgIWwgJiYgdGhpcy5lbWl0KFwicmVhY2hCZWdpbm5pbmcgdG9FZGdlXCIpLCBuICYmICFvICYmIHRoaXMuZW1pdChcInJlYWNoRW5kIHRvRWRnZVwiKSwgKGwgJiYgIXIgfHwgbyAmJiAhbikgJiYgdGhpcy5lbWl0KFwiZnJvbUVkZ2VcIiksIHRoaXMuZW1pdChcInByb2dyZXNzXCIsIGEpXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVNsaWRlc0NsYXNzZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZSwgdCA9IHRoaXMuc2xpZGVzLFxuICAgICAgICAgICAgaSA9IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgcyA9IHRoaXMuJHdyYXBwZXJFbCxcbiAgICAgICAgICAgIGEgPSB0aGlzLmFjdGl2ZUluZGV4LFxuICAgICAgICAgICAgciA9IHRoaXMucmVhbEluZGV4LFxuICAgICAgICAgICAgbiA9IHRoaXMudmlydHVhbCAmJiBpLnZpcnR1YWwuZW5hYmxlZDtcbiAgICAgICAgICB0LnJlbW92ZUNsYXNzKGkuc2xpZGVBY3RpdmVDbGFzcyArIFwiIFwiICsgaS5zbGlkZU5leHRDbGFzcyArIFwiIFwiICsgaS5zbGlkZVByZXZDbGFzcyArIFwiIFwiICsgaS5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzICsgXCIgXCIgKyBpLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzICsgXCIgXCIgKyBpLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKSwgKGUgPSBuID8gdGhpcy4kd3JhcHBlckVsLmZpbmQoXCIuXCIgKyBpLnNsaWRlQ2xhc3MgKyAnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIGEgKyAnXCJdJykgOiB0LmVxKGEpKS5hZGRDbGFzcyhpLnNsaWRlQWN0aXZlQ2xhc3MpLCBpLmxvb3AgJiYgKGUuaGFzQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZUNsYXNzKSA/IHMuY2hpbGRyZW4oXCIuXCIgKyBpLnNsaWRlQ2xhc3MgKyBcIjpub3QoLlwiICsgaS5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJylbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgciArICdcIl0nKS5hZGRDbGFzcyhpLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpIDogcy5jaGlsZHJlbihcIi5cIiArIGkuc2xpZGVDbGFzcyArIFwiLlwiICsgaS5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyByICsgJ1wiXScpLmFkZENsYXNzKGkuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcykpO1xuICAgICAgICAgIHZhciBsID0gZS5uZXh0QWxsKFwiLlwiICsgaS5zbGlkZUNsYXNzKS5lcSgwKS5hZGRDbGFzcyhpLnNsaWRlTmV4dENsYXNzKTtcbiAgICAgICAgICBpLmxvb3AgJiYgMCA9PT0gbC5sZW5ndGggJiYgKGwgPSB0LmVxKDApKS5hZGRDbGFzcyhpLnNsaWRlTmV4dENsYXNzKTtcbiAgICAgICAgICB2YXIgbyA9IGUucHJldkFsbChcIi5cIiArIGkuc2xpZGVDbGFzcykuZXEoMCkuYWRkQ2xhc3MoaS5zbGlkZVByZXZDbGFzcyk7XG4gICAgICAgICAgaS5sb29wICYmIDAgPT09IG8ubGVuZ3RoICYmIChvID0gdC5lcSgtMSkpLmFkZENsYXNzKGkuc2xpZGVQcmV2Q2xhc3MpLCBpLmxvb3AgJiYgKGwuaGFzQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZUNsYXNzKSA/IHMuY2hpbGRyZW4oXCIuXCIgKyBpLnNsaWRlQ2xhc3MgKyBcIjpub3QoLlwiICsgaS5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJylbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgbC5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIikgKyAnXCJdJykuYWRkQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcykgOiBzLmNoaWxkcmVuKFwiLlwiICsgaS5zbGlkZUNsYXNzICsgXCIuXCIgKyBpLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyAnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIGwuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpICsgJ1wiXScpLmFkZENsYXNzKGkuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpLCBvLmhhc0NsYXNzKGkuc2xpZGVEdXBsaWNhdGVDbGFzcykgPyBzLmNoaWxkcmVuKFwiLlwiICsgaS5zbGlkZUNsYXNzICsgXCI6bm90KC5cIiArIGkuc2xpZGVEdXBsaWNhdGVDbGFzcyArICcpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIG8uYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpICsgJ1wiXScpLmFkZENsYXNzKGkuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpIDogcy5jaGlsZHJlbihcIi5cIiArIGkuc2xpZGVDbGFzcyArIFwiLlwiICsgaS5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBvLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSArICdcIl0nKS5hZGRDbGFzcyhpLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKSksIHRoaXMuZW1pdFNsaWRlc0NsYXNzZXMoKVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVBY3RpdmVJbmRleDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCwgaSA9IHRoaXMucnRsVHJhbnNsYXRlID8gdGhpcy50cmFuc2xhdGUgOiAtdGhpcy50cmFuc2xhdGUsXG4gICAgICAgICAgICBzID0gdGhpcy5zbGlkZXNHcmlkLFxuICAgICAgICAgICAgYSA9IHRoaXMuc25hcEdyaWQsXG4gICAgICAgICAgICByID0gdGhpcy5wYXJhbXMsXG4gICAgICAgICAgICBuID0gdGhpcy5hY3RpdmVJbmRleCxcbiAgICAgICAgICAgIGwgPSB0aGlzLnJlYWxJbmRleCxcbiAgICAgICAgICAgIG8gPSB0aGlzLnNuYXBJbmRleCxcbiAgICAgICAgICAgIGQgPSBlO1xuICAgICAgICAgIGlmICh2b2lkIDAgPT09IGQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGggPSAwOyBoIDwgcy5sZW5ndGg7IGggKz0gMSkgdm9pZCAwICE9PSBzW2ggKyAxXSA/IGkgPj0gc1toXSAmJiBpIDwgc1toICsgMV0gLSAoc1toICsgMV0gLSBzW2hdKSAvIDIgPyBkID0gaCA6IGkgPj0gc1toXSAmJiBpIDwgc1toICsgMV0gJiYgKGQgPSBoICsgMSkgOiBpID49IHNbaF0gJiYgKGQgPSBoKTtcbiAgICAgICAgICAgIHIubm9ybWFsaXplU2xpZGVJbmRleCAmJiAoZCA8IDAgfHwgdm9pZCAwID09PSBkKSAmJiAoZCA9IDApXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhLmluZGV4T2YoaSkgPj0gMCkgdCA9IGEuaW5kZXhPZihpKTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwID0gTWF0aC5taW4oci5zbGlkZXNQZXJHcm91cFNraXAsIGQpO1xuICAgICAgICAgICAgdCA9IHAgKyBNYXRoLmZsb29yKChkIC0gcCkgLyByLnNsaWRlc1Blckdyb3VwKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodCA+PSBhLmxlbmd0aCAmJiAodCA9IGEubGVuZ3RoIC0gMSksIGQgIT09IG4pIHtcbiAgICAgICAgICAgIHZhciB1ID0gcGFyc2VJbnQodGhpcy5zbGlkZXMuZXEoZCkuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpIHx8IGQsIDEwKTtcbiAgICAgICAgICAgIFModGhpcywge1xuICAgICAgICAgICAgICBzbmFwSW5kZXg6IHQsXG4gICAgICAgICAgICAgIHJlYWxJbmRleDogdSxcbiAgICAgICAgICAgICAgcHJldmlvdXNJbmRleDogbixcbiAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6IGRcbiAgICAgICAgICAgIH0pLCB0aGlzLmVtaXQoXCJhY3RpdmVJbmRleENoYW5nZVwiKSwgdGhpcy5lbWl0KFwic25hcEluZGV4Q2hhbmdlXCIpLCBsICE9PSB1ICYmIHRoaXMuZW1pdChcInJlYWxJbmRleENoYW5nZVwiKSwgKHRoaXMuaW5pdGlhbGl6ZWQgfHwgdGhpcy5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KSAmJiB0aGlzLmVtaXQoXCJzbGlkZUNoYW5nZVwiKVxuICAgICAgICAgIH0gZWxzZSB0ICE9PSBvICYmICh0aGlzLnNuYXBJbmRleCA9IHQsIHRoaXMuZW1pdChcInNuYXBJbmRleENoYW5nZVwiKSlcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ2xpY2tlZFNsaWRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciB0ID0gdGhpcy5wYXJhbXMsXG4gICAgICAgICAgICBpID0gbShlLnRhcmdldCkuY2xvc2VzdChcIi5cIiArIHQuc2xpZGVDbGFzcylbMF0sXG4gICAgICAgICAgICBzID0gITE7XG4gICAgICAgICAgaWYgKGkpXG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuc2xpZGVzLmxlbmd0aDsgYSArPSAxKSB0aGlzLnNsaWRlc1thXSA9PT0gaSAmJiAocyA9ICEwKTtcbiAgICAgICAgICBpZiAoIWkgfHwgIXMpIHJldHVybiB0aGlzLmNsaWNrZWRTbGlkZSA9IHZvaWQgMCwgdm9pZCh0aGlzLmNsaWNrZWRJbmRleCA9IHZvaWQgMCk7XG4gICAgICAgICAgdGhpcy5jbGlja2VkU2xpZGUgPSBpLCB0aGlzLnZpcnR1YWwgJiYgdGhpcy5wYXJhbXMudmlydHVhbC5lbmFibGVkID8gdGhpcy5jbGlja2VkSW5kZXggPSBwYXJzZUludChtKGkpLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSwgMTApIDogdGhpcy5jbGlja2VkSW5kZXggPSBtKGkpLmluZGV4KCksIHQuc2xpZGVUb0NsaWNrZWRTbGlkZSAmJiB2b2lkIDAgIT09IHRoaXMuY2xpY2tlZEluZGV4ICYmIHRoaXMuY2xpY2tlZEluZGV4ICE9PSB0aGlzLmFjdGl2ZUluZGV4ICYmIHRoaXMuc2xpZGVUb0NsaWNrZWRTbGlkZSgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgZ2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9IHRoaXMuaXNIb3Jpem9udGFsKCkgPyBcInhcIiA6IFwieVwiKTtcbiAgICAgICAgICB2YXIgdCA9IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgaSA9IHRoaXMucnRsVHJhbnNsYXRlLFxuICAgICAgICAgICAgcyA9IHRoaXMudHJhbnNsYXRlLFxuICAgICAgICAgICAgYSA9IHRoaXMuJHdyYXBwZXJFbDtcbiAgICAgICAgICBpZiAodC52aXJ0dWFsVHJhbnNsYXRlKSByZXR1cm4gaSA/IC1zIDogcztcbiAgICAgICAgICBpZiAodC5jc3NNb2RlKSByZXR1cm4gcztcbiAgICAgICAgICB2YXIgciA9IFQoYVswXSwgZSk7XG4gICAgICAgICAgcmV0dXJuIGkgJiYgKHIgPSAtciksIHIgfHwgMFxuICAgICAgICB9LFxuICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdmFyIGkgPSB0aGlzLnJ0bFRyYW5zbGF0ZSxcbiAgICAgICAgICAgIHMgPSB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIGEgPSB0aGlzLiR3cmFwcGVyRWwsXG4gICAgICAgICAgICByID0gdGhpcy53cmFwcGVyRWwsXG4gICAgICAgICAgICBuID0gdGhpcy5wcm9ncmVzcyxcbiAgICAgICAgICAgIGwgPSAwLFxuICAgICAgICAgICAgbyA9IDA7XG4gICAgICAgICAgdGhpcy5pc0hvcml6b250YWwoKSA/IGwgPSBpID8gLWUgOiBlIDogbyA9IGUsIHMucm91bmRMZW5ndGhzICYmIChsID0gTWF0aC5mbG9vcihsKSwgbyA9IE1hdGguZmxvb3IobykpLCBzLmNzc01vZGUgPyByW3RoaXMuaXNIb3Jpem9udGFsKCkgPyBcInNjcm9sbExlZnRcIiA6IFwic2Nyb2xsVG9wXCJdID0gdGhpcy5pc0hvcml6b250YWwoKSA/IC1sIDogLW8gOiBzLnZpcnR1YWxUcmFuc2xhdGUgfHwgYS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIiArIGwgKyBcInB4LCBcIiArIG8gKyBcInB4LCAwcHgpXCIpLCB0aGlzLnByZXZpb3VzVHJhbnNsYXRlID0gdGhpcy50cmFuc2xhdGUsIHRoaXMudHJhbnNsYXRlID0gdGhpcy5pc0hvcml6b250YWwoKSA/IGwgOiBvO1xuICAgICAgICAgIHZhciBkID0gdGhpcy5tYXhUcmFuc2xhdGUoKSAtIHRoaXMubWluVHJhbnNsYXRlKCk7XG4gICAgICAgICAgKDAgPT09IGQgPyAwIDogKGUgLSB0aGlzLm1pblRyYW5zbGF0ZSgpKSAvIGQpICE9PSBuICYmIHRoaXMudXBkYXRlUHJvZ3Jlc3MoZSksIHRoaXMuZW1pdChcInNldFRyYW5zbGF0ZVwiLCB0aGlzLnRyYW5zbGF0ZSwgdClcbiAgICAgICAgfSxcbiAgICAgICAgbWluVHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIC10aGlzLnNuYXBHcmlkWzBdXG4gICAgICAgIH0sXG4gICAgICAgIG1heFRyYW5zbGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiAtdGhpcy5zbmFwR3JpZFt0aGlzLnNuYXBHcmlkLmxlbmd0aCAtIDFdXG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zbGF0ZVRvOiBmdW5jdGlvbiAoZSwgdCwgaSwgcywgYSkge1xuICAgICAgICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9IDApLCB2b2lkIDAgPT09IHQgJiYgKHQgPSB0aGlzLnBhcmFtcy5zcGVlZCksIHZvaWQgMCA9PT0gaSAmJiAoaSA9ICEwKSwgdm9pZCAwID09PSBzICYmIChzID0gITApO1xuICAgICAgICAgIHZhciByID0gdGhpcyxcbiAgICAgICAgICAgIG4gPSByLnBhcmFtcyxcbiAgICAgICAgICAgIGwgPSByLndyYXBwZXJFbDtcbiAgICAgICAgICBpZiAoci5hbmltYXRpbmcgJiYgbi5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHJldHVybiAhMTtcbiAgICAgICAgICB2YXIgbywgZCA9IHIubWluVHJhbnNsYXRlKCksXG4gICAgICAgICAgICBoID0gci5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgICBpZiAobyA9IHMgJiYgZSA+IGQgPyBkIDogcyAmJiBlIDwgaCA/IGggOiBlLCByLnVwZGF0ZVByb2dyZXNzKG8pLCBuLmNzc01vZGUpIHtcbiAgICAgICAgICAgIHZhciBwLCB1ID0gci5pc0hvcml6b250YWwoKTtcbiAgICAgICAgICAgIGlmICgwID09PSB0KSBsW3UgPyBcInNjcm9sbExlZnRcIiA6IFwic2Nyb2xsVG9wXCJdID0gLW87XG4gICAgICAgICAgICBlbHNlIGlmIChsLnNjcm9sbFRvKSBsLnNjcm9sbFRvKCgocCA9IHt9KVt1ID8gXCJsZWZ0XCIgOiBcInRvcFwiXSA9IC1vLCBwLmJlaGF2aW9yID0gXCJzbW9vdGhcIiwgcCkpO1xuICAgICAgICAgICAgZWxzZSBsW3UgPyBcInNjcm9sbExlZnRcIiA6IFwic2Nyb2xsVG9wXCJdID0gLW87XG4gICAgICAgICAgICByZXR1cm4gITBcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDAgPT09IHQgPyAoci5zZXRUcmFuc2l0aW9uKDApLCByLnNldFRyYW5zbGF0ZShvKSwgaSAmJiAoci5lbWl0KFwiYmVmb3JlVHJhbnNpdGlvblN0YXJ0XCIsIHQsIGEpLCByLmVtaXQoXCJ0cmFuc2l0aW9uRW5kXCIpKSkgOiAoci5zZXRUcmFuc2l0aW9uKHQpLCByLnNldFRyYW5zbGF0ZShvKSwgaSAmJiAoci5lbWl0KFwiYmVmb3JlVHJhbnNpdGlvblN0YXJ0XCIsIHQsIGEpLCByLmVtaXQoXCJ0cmFuc2l0aW9uU3RhcnRcIikpLCByLmFuaW1hdGluZyB8fCAoci5hbmltYXRpbmcgPSAhMCwgci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgfHwgKHIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHIgJiYgIXIuZGVzdHJveWVkICYmIGUudGFyZ2V0ID09PSB0aGlzICYmIChyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpLCByLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndlYmtpdFRyYW5zaXRpb25FbmRcIiwgci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpLCByLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IG51bGwsIGRlbGV0ZSByLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCwgaSAmJiByLmVtaXQoXCJ0cmFuc2l0aW9uRW5kXCIpKVxuICAgICAgICAgIH0pLCByLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpLCByLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcihcIndlYmtpdFRyYW5zaXRpb25FbmRcIiwgci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpKSksICEwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdGhpcy5wYXJhbXMuY3NzTW9kZSB8fCB0aGlzLiR3cmFwcGVyRWwudHJhbnNpdGlvbihlKSwgdGhpcy5lbWl0KFwic2V0VHJhbnNpdGlvblwiLCBlLCB0KVxuICAgICAgICB9LFxuICAgICAgICB0cmFuc2l0aW9uU3RhcnQ6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gITApO1xuICAgICAgICAgIHZhciBpID0gdGhpcy5hY3RpdmVJbmRleCxcbiAgICAgICAgICAgIHMgPSB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIGEgPSB0aGlzLnByZXZpb3VzSW5kZXg7XG4gICAgICAgICAgaWYgKCFzLmNzc01vZGUpIHtcbiAgICAgICAgICAgIHMuYXV0b0hlaWdodCAmJiB0aGlzLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgICAgICAgIHZhciByID0gdDtcbiAgICAgICAgICAgIGlmIChyIHx8IChyID0gaSA+IGEgPyBcIm5leHRcIiA6IGkgPCBhID8gXCJwcmV2XCIgOiBcInJlc2V0XCIpLCB0aGlzLmVtaXQoXCJ0cmFuc2l0aW9uU3RhcnRcIiksIGUgJiYgaSAhPT0gYSkge1xuICAgICAgICAgICAgICBpZiAoXCJyZXNldFwiID09PSByKSByZXR1cm4gdm9pZCB0aGlzLmVtaXQoXCJzbGlkZVJlc2V0VHJhbnNpdGlvblN0YXJ0XCIpO1xuICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydFwiKSwgXCJuZXh0XCIgPT09IHIgPyB0aGlzLmVtaXQoXCJzbGlkZU5leHRUcmFuc2l0aW9uU3RhcnRcIikgOiB0aGlzLmVtaXQoXCJzbGlkZVByZXZUcmFuc2l0aW9uU3RhcnRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gITApO1xuICAgICAgICAgIHZhciBpID0gdGhpcy5hY3RpdmVJbmRleCxcbiAgICAgICAgICAgIHMgPSB0aGlzLnByZXZpb3VzSW5kZXgsXG4gICAgICAgICAgICBhID0gdGhpcy5wYXJhbXM7XG4gICAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW5nID0gITEsICFhLmNzc01vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgIHZhciByID0gdDtcbiAgICAgICAgICAgIGlmIChyIHx8IChyID0gaSA+IHMgPyBcIm5leHRcIiA6IGkgPCBzID8gXCJwcmV2XCIgOiBcInJlc2V0XCIpLCB0aGlzLmVtaXQoXCJ0cmFuc2l0aW9uRW5kXCIpLCBlICYmIGkgIT09IHMpIHtcbiAgICAgICAgICAgICAgaWYgKFwicmVzZXRcIiA9PT0gcikgcmV0dXJuIHZvaWQgdGhpcy5lbWl0KFwic2xpZGVSZXNldFRyYW5zaXRpb25FbmRcIik7XG4gICAgICAgICAgICAgIHRoaXMuZW1pdChcInNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZFwiKSwgXCJuZXh0XCIgPT09IHIgPyB0aGlzLmVtaXQoXCJzbGlkZU5leHRUcmFuc2l0aW9uRW5kXCIpIDogdGhpcy5lbWl0KFwic2xpZGVQcmV2VHJhbnNpdGlvbkVuZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNsaWRlOiB7XG4gICAgICAgIHNsaWRlVG86IGZ1bmN0aW9uIChlLCB0LCBpLCBzKSB7XG4gICAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gMCksIHZvaWQgMCA9PT0gdCAmJiAodCA9IHRoaXMucGFyYW1zLnNwZWVkKSwgdm9pZCAwID09PSBpICYmIChpID0gITApO1xuICAgICAgICAgIHZhciBhID0gdGhpcyxcbiAgICAgICAgICAgIHIgPSBlO1xuICAgICAgICAgIHIgPCAwICYmIChyID0gMCk7XG4gICAgICAgICAgdmFyIG4gPSBhLnBhcmFtcyxcbiAgICAgICAgICAgIGwgPSBhLnNuYXBHcmlkLFxuICAgICAgICAgICAgbyA9IGEuc2xpZGVzR3JpZCxcbiAgICAgICAgICAgIGQgPSBhLnByZXZpb3VzSW5kZXgsXG4gICAgICAgICAgICBoID0gYS5hY3RpdmVJbmRleCxcbiAgICAgICAgICAgIHAgPSBhLnJ0bFRyYW5zbGF0ZSxcbiAgICAgICAgICAgIHUgPSBhLndyYXBwZXJFbDtcbiAgICAgICAgICBpZiAoYS5hbmltYXRpbmcgJiYgbi5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHJldHVybiAhMTtcbiAgICAgICAgICB2YXIgYyA9IE1hdGgubWluKGEucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgciksXG4gICAgICAgICAgICB2ID0gYyArIE1hdGguZmxvb3IoKHIgLSBjKSAvIGEucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgICB2ID49IGwubGVuZ3RoICYmICh2ID0gbC5sZW5ndGggLSAxKSwgKGggfHwgbi5pbml0aWFsU2xpZGUgfHwgMCkgPT09IChkIHx8IDApICYmIGkgJiYgYS5lbWl0KFwiYmVmb3JlU2xpZGVDaGFuZ2VTdGFydFwiKTtcbiAgICAgICAgICB2YXIgZiwgbSA9IC1sW3ZdO1xuICAgICAgICAgIGlmIChhLnVwZGF0ZVByb2dyZXNzKG0pLCBuLm5vcm1hbGl6ZVNsaWRlSW5kZXgpXG4gICAgICAgICAgICBmb3IgKHZhciBnID0gMDsgZyA8IG8ubGVuZ3RoOyBnICs9IDEpIC0gTWF0aC5mbG9vcigxMDAgKiBtKSA+PSBNYXRoLmZsb29yKDEwMCAqIG9bZ10pICYmIChyID0gZyk7XG4gICAgICAgICAgaWYgKGEuaW5pdGlhbGl6ZWQgJiYgciAhPT0gaCkge1xuICAgICAgICAgICAgaWYgKCFhLmFsbG93U2xpZGVOZXh0ICYmIG0gPCBhLnRyYW5zbGF0ZSAmJiBtIDwgYS5taW5UcmFuc2xhdGUoKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgaWYgKCFhLmFsbG93U2xpZGVQcmV2ICYmIG0gPiBhLnRyYW5zbGF0ZSAmJiBtID4gYS5tYXhUcmFuc2xhdGUoKSAmJiAoaCB8fCAwKSAhPT0gcikgcmV0dXJuICExXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmID0gciA+IGggPyBcIm5leHRcIiA6IHIgPCBoID8gXCJwcmV2XCIgOiBcInJlc2V0XCIsIHAgJiYgLW0gPT09IGEudHJhbnNsYXRlIHx8ICFwICYmIG0gPT09IGEudHJhbnNsYXRlKSByZXR1cm4gYS51cGRhdGVBY3RpdmVJbmRleChyKSwgbi5hdXRvSGVpZ2h0ICYmIGEudXBkYXRlQXV0b0hlaWdodCgpLCBhLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSwgXCJzbGlkZVwiICE9PSBuLmVmZmVjdCAmJiBhLnNldFRyYW5zbGF0ZShtKSwgXCJyZXNldFwiICE9PSBmICYmIChhLnRyYW5zaXRpb25TdGFydChpLCBmKSwgYS50cmFuc2l0aW9uRW5kKGksIGYpKSwgITE7XG4gICAgICAgICAgaWYgKG4uY3NzTW9kZSkge1xuICAgICAgICAgICAgdmFyIHcsIGIgPSBhLmlzSG9yaXpvbnRhbCgpLFxuICAgICAgICAgICAgICB5ID0gLW07XG4gICAgICAgICAgICBpZiAocCAmJiAoeSA9IHUuc2Nyb2xsV2lkdGggLSB1Lm9mZnNldFdpZHRoIC0geSksIDAgPT09IHQpIHVbYiA/IFwic2Nyb2xsTGVmdFwiIDogXCJzY3JvbGxUb3BcIl0gPSB5O1xuICAgICAgICAgICAgZWxzZSBpZiAodS5zY3JvbGxUbykgdS5zY3JvbGxUbygoKHcgPSB7fSlbYiA/IFwibGVmdFwiIDogXCJ0b3BcIl0gPSB5LCB3LmJlaGF2aW9yID0gXCJzbW9vdGhcIiwgdykpO1xuICAgICAgICAgICAgZWxzZSB1W2IgPyBcInNjcm9sbExlZnRcIiA6IFwic2Nyb2xsVG9wXCJdID0geTtcbiAgICAgICAgICAgIHJldHVybiAhMFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gMCA9PT0gdCA/IChhLnNldFRyYW5zaXRpb24oMCksIGEuc2V0VHJhbnNsYXRlKG0pLCBhLnVwZGF0ZUFjdGl2ZUluZGV4KHIpLCBhLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSwgYS5lbWl0KFwiYmVmb3JlVHJhbnNpdGlvblN0YXJ0XCIsIHQsIHMpLCBhLnRyYW5zaXRpb25TdGFydChpLCBmKSwgYS50cmFuc2l0aW9uRW5kKGksIGYpKSA6IChhLnNldFRyYW5zaXRpb24odCksIGEuc2V0VHJhbnNsYXRlKG0pLCBhLnVwZGF0ZUFjdGl2ZUluZGV4KHIpLCBhLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSwgYS5lbWl0KFwiYmVmb3JlVHJhbnNpdGlvblN0YXJ0XCIsIHQsIHMpLCBhLnRyYW5zaXRpb25TdGFydChpLCBmKSwgYS5hbmltYXRpbmcgfHwgKGEuYW5pbWF0aW5nID0gITAsIGEub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgfHwgKGEub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgYSAmJiAhYS5kZXN0cm95ZWQgJiYgZS50YXJnZXQgPT09IHRoaXMgJiYgKGEuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBhLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSwgYS4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsIGEub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpLCBhLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gbnVsbCwgZGVsZXRlIGEub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQsIGEudHJhbnNpdGlvbkVuZChpLCBmKSlcbiAgICAgICAgICB9KSwgYS4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGEub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpLCBhLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcihcIndlYmtpdFRyYW5zaXRpb25FbmRcIiwgYS5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCkpKSwgITBcbiAgICAgICAgfSxcbiAgICAgICAgc2xpZGVUb0xvb3A6IGZ1bmN0aW9uIChlLCB0LCBpLCBzKSB7XG4gICAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gMCksIHZvaWQgMCA9PT0gdCAmJiAodCA9IHRoaXMucGFyYW1zLnNwZWVkKSwgdm9pZCAwID09PSBpICYmIChpID0gITApO1xuICAgICAgICAgIHZhciBhID0gZTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXMubG9vcCAmJiAoYSArPSB0aGlzLmxvb3BlZFNsaWRlcyksIHRoaXMuc2xpZGVUbyhhLCB0LCBpLCBzKVxuICAgICAgICB9LFxuICAgICAgICBzbGlkZU5leHQ6IGZ1bmN0aW9uIChlLCB0LCBpKSB7XG4gICAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gdGhpcy5wYXJhbXMuc3BlZWQpLCB2b2lkIDAgPT09IHQgJiYgKHQgPSAhMCk7XG4gICAgICAgICAgdmFyIHMgPSB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIGEgPSB0aGlzLmFuaW1hdGluZyxcbiAgICAgICAgICAgIHIgPSB0aGlzLmFjdGl2ZUluZGV4IDwgcy5zbGlkZXNQZXJHcm91cFNraXAgPyAxIDogcy5zbGlkZXNQZXJHcm91cDtcbiAgICAgICAgICBpZiAocy5sb29wKSB7XG4gICAgICAgICAgICBpZiAoYSAmJiBzLmxvb3BQcmV2ZW50c1NsaWRlKSByZXR1cm4gITE7XG4gICAgICAgICAgICB0aGlzLmxvb3BGaXgoKSwgdGhpcy5fY2xpZW50TGVmdCA9IHRoaXMuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLnNsaWRlVG8odGhpcy5hY3RpdmVJbmRleCArIHIsIGUsIHQsIGkpXG4gICAgICAgIH0sXG4gICAgICAgIHNsaWRlUHJldjogZnVuY3Rpb24gKGUsIHQsIGkpIHtcbiAgICAgICAgICB2b2lkIDAgPT09IGUgJiYgKGUgPSB0aGlzLnBhcmFtcy5zcGVlZCksIHZvaWQgMCA9PT0gdCAmJiAodCA9ICEwKTtcbiAgICAgICAgICB2YXIgcyA9IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgYSA9IHRoaXMuYW5pbWF0aW5nLFxuICAgICAgICAgICAgciA9IHRoaXMuc25hcEdyaWQsXG4gICAgICAgICAgICBuID0gdGhpcy5zbGlkZXNHcmlkLFxuICAgICAgICAgICAgbCA9IHRoaXMucnRsVHJhbnNsYXRlO1xuICAgICAgICAgIGlmIChzLmxvb3ApIHtcbiAgICAgICAgICAgIGlmIChhICYmIHMubG9vcFByZXZlbnRzU2xpZGUpIHJldHVybiAhMTtcbiAgICAgICAgICAgIHRoaXMubG9vcEZpeCgpLCB0aGlzLl9jbGllbnRMZWZ0ID0gdGhpcy4kd3JhcHBlckVsWzBdLmNsaWVudExlZnRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBvKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlIDwgMCA/IC1NYXRoLmZsb29yKE1hdGguYWJzKGUpKSA6IE1hdGguZmxvb3IoZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGQsIGggPSBvKGwgPyB0aGlzLnRyYW5zbGF0ZSA6IC10aGlzLnRyYW5zbGF0ZSksXG4gICAgICAgICAgICBwID0gci5tYXAoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGUpXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB1ID0gKHJbcC5pbmRleE9mKGgpXSwgcltwLmluZGV4T2YoaCkgLSAxXSk7XG4gICAgICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gdSAmJiBzLmNzc01vZGUgJiYgci5mb3JFYWNoKChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgIXUgJiYgaCA+PSBlICYmICh1ID0gZSlcbiAgICAgICAgICB9KSksIHZvaWQgMCAhPT0gdSAmJiAoZCA9IG4uaW5kZXhPZih1KSkgPCAwICYmIChkID0gdGhpcy5hY3RpdmVJbmRleCAtIDEpLCB0aGlzLnNsaWRlVG8oZCwgZSwgdCwgaSlcbiAgICAgICAgfSxcbiAgICAgICAgc2xpZGVSZXNldDogZnVuY3Rpb24gKGUsIHQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdm9pZCAwID09PSBlICYmIChlID0gdGhpcy5wYXJhbXMuc3BlZWQpLCB2b2lkIDAgPT09IHQgJiYgKHQgPSAhMCksIHRoaXMuc2xpZGVUbyh0aGlzLmFjdGl2ZUluZGV4LCBlLCB0LCBpKVxuICAgICAgICB9LFxuICAgICAgICBzbGlkZVRvQ2xvc2VzdDogZnVuY3Rpb24gKGUsIHQsIGksIHMpIHtcbiAgICAgICAgICB2b2lkIDAgPT09IGUgJiYgKGUgPSB0aGlzLnBhcmFtcy5zcGVlZCksIHZvaWQgMCA9PT0gdCAmJiAodCA9ICEwKSwgdm9pZCAwID09PSBzICYmIChzID0gLjUpO1xuICAgICAgICAgIHZhciBhID0gdGhpcy5hY3RpdmVJbmRleCxcbiAgICAgICAgICAgIHIgPSBNYXRoLm1pbih0aGlzLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGEpLFxuICAgICAgICAgICAgbiA9IHIgKyBNYXRoLmZsb29yKChhIC0gcikgLyB0aGlzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCksXG4gICAgICAgICAgICBsID0gdGhpcy5ydGxUcmFuc2xhdGUgPyB0aGlzLnRyYW5zbGF0ZSA6IC10aGlzLnRyYW5zbGF0ZTtcbiAgICAgICAgICBpZiAobCA+PSB0aGlzLnNuYXBHcmlkW25dKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMuc25hcEdyaWRbbl07XG4gICAgICAgICAgICBsIC0gbyA+ICh0aGlzLnNuYXBHcmlkW24gKyAxXSAtIG8pICogcyAmJiAoYSArPSB0aGlzLnBhcmFtcy5zbGlkZXNQZXJHcm91cClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGQgPSB0aGlzLnNuYXBHcmlkW24gLSAxXTtcbiAgICAgICAgICAgIGwgLSBkIDw9ICh0aGlzLnNuYXBHcmlkW25dIC0gZCkgKiBzICYmIChhIC09IHRoaXMucGFyYW1zLnNsaWRlc1Blckdyb3VwKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYSA9IE1hdGgubWF4KGEsIDApLCBhID0gTWF0aC5taW4oYSwgdGhpcy5zbGlkZXNHcmlkLmxlbmd0aCAtIDEpLCB0aGlzLnNsaWRlVG8oYSwgZSwgdCwgaSlcbiAgICAgICAgfSxcbiAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBlLCB0ID0gdGhpcyxcbiAgICAgICAgICAgIGkgPSB0LnBhcmFtcyxcbiAgICAgICAgICAgIHMgPSB0LiR3cmFwcGVyRWwsXG4gICAgICAgICAgICBhID0gXCJhdXRvXCIgPT09IGkuc2xpZGVzUGVyVmlldyA/IHQuc2xpZGVzUGVyVmlld0R5bmFtaWMoKSA6IGkuc2xpZGVzUGVyVmlldyxcbiAgICAgICAgICAgIHIgPSB0LmNsaWNrZWRJbmRleDtcbiAgICAgICAgICBpZiAoaS5sb29wKSB7XG4gICAgICAgICAgICBpZiAodC5hbmltYXRpbmcpIHJldHVybjtcbiAgICAgICAgICAgIGUgPSBwYXJzZUludChtKHQuY2xpY2tlZFNsaWRlKS5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIiksIDEwKSwgaS5jZW50ZXJlZFNsaWRlcyA/IHIgPCB0Lmxvb3BlZFNsaWRlcyAtIGEgLyAyIHx8IHIgPiB0LnNsaWRlcy5sZW5ndGggLSB0Lmxvb3BlZFNsaWRlcyArIGEgLyAyID8gKHQubG9vcEZpeCgpLCByID0gcy5jaGlsZHJlbihcIi5cIiArIGkuc2xpZGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgZSArICdcIl06bm90KC4nICsgaS5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpXCIpLmVxKDApLmluZGV4KCksIEUoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdC5zbGlkZVRvKHIpXG4gICAgICAgICAgICB9KSkpIDogdC5zbGlkZVRvKHIpIDogciA+IHQuc2xpZGVzLmxlbmd0aCAtIGEgPyAodC5sb29wRml4KCksIHIgPSBzLmNoaWxkcmVuKFwiLlwiICsgaS5zbGlkZUNsYXNzICsgJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBlICsgJ1wiXTpub3QoLicgKyBpLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIilcIikuZXEoMCkuaW5kZXgoKSwgRSgoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0LnNsaWRlVG8ocilcbiAgICAgICAgICAgIH0pKSkgOiB0LnNsaWRlVG8ocilcbiAgICAgICAgICB9IGVsc2UgdC5zbGlkZVRvKHIpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsb29wOiB7XG4gICAgICAgIGxvb3BDcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZSA9IHRoaXMsXG4gICAgICAgICAgICB0ID0gcigpLFxuICAgICAgICAgICAgaSA9IGUucGFyYW1zLFxuICAgICAgICAgICAgcyA9IGUuJHdyYXBwZXJFbDtcbiAgICAgICAgICBzLmNoaWxkcmVuKFwiLlwiICsgaS5zbGlkZUNsYXNzICsgXCIuXCIgKyBpLnNsaWRlRHVwbGljYXRlQ2xhc3MpLnJlbW92ZSgpO1xuICAgICAgICAgIHZhciBhID0gcy5jaGlsZHJlbihcIi5cIiArIGkuc2xpZGVDbGFzcyk7XG4gICAgICAgICAgaWYgKGkubG9vcEZpbGxHcm91cFdpdGhCbGFuaykge1xuICAgICAgICAgICAgdmFyIG4gPSBpLnNsaWRlc1Blckdyb3VwIC0gYS5sZW5ndGggJSBpLnNsaWRlc1Blckdyb3VwO1xuICAgICAgICAgICAgaWYgKG4gIT09IGkuc2xpZGVzUGVyR3JvdXApIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBuOyBsICs9IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IG0odC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5hZGRDbGFzcyhpLnNsaWRlQ2xhc3MgKyBcIiBcIiArIGkuc2xpZGVCbGFua0NsYXNzKTtcbiAgICAgICAgICAgICAgICBzLmFwcGVuZChvKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGEgPSBzLmNoaWxkcmVuKFwiLlwiICsgaS5zbGlkZUNsYXNzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcImF1dG9cIiAhPT0gaS5zbGlkZXNQZXJWaWV3IHx8IGkubG9vcGVkU2xpZGVzIHx8IChpLmxvb3BlZFNsaWRlcyA9IGEubGVuZ3RoKSwgZS5sb29wZWRTbGlkZXMgPSBNYXRoLmNlaWwocGFyc2VGbG9hdChpLmxvb3BlZFNsaWRlcyB8fCBpLnNsaWRlc1BlclZpZXcsIDEwKSksIGUubG9vcGVkU2xpZGVzICs9IGkubG9vcEFkZGl0aW9uYWxTbGlkZXMsIGUubG9vcGVkU2xpZGVzID4gYS5sZW5ndGggJiYgKGUubG9vcGVkU2xpZGVzID0gYS5sZW5ndGgpO1xuICAgICAgICAgIHZhciBkID0gW10sXG4gICAgICAgICAgICBoID0gW107XG4gICAgICAgICAgYS5lYWNoKChmdW5jdGlvbiAodCwgaSkge1xuICAgICAgICAgICAgdmFyIHMgPSBtKHQpO1xuICAgICAgICAgICAgaSA8IGUubG9vcGVkU2xpZGVzICYmIGgucHVzaCh0KSwgaSA8IGEubGVuZ3RoICYmIGkgPj0gYS5sZW5ndGggLSBlLmxvb3BlZFNsaWRlcyAmJiBkLnB1c2godCksIHMuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIsIGkpXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIGZvciAodmFyIHAgPSAwOyBwIDwgaC5sZW5ndGg7IHAgKz0gMSkgcy5hcHBlbmQobShoW3BdLmNsb25lTm9kZSghMCkpLmFkZENsYXNzKGkuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICAgICAgICAgIGZvciAodmFyIHUgPSBkLmxlbmd0aCAtIDE7IHUgPj0gMDsgdSAtPSAxKSBzLnByZXBlbmQobShkW3VdLmNsb25lTm9kZSghMCkpLmFkZENsYXNzKGkuc2xpZGVEdXBsaWNhdGVDbGFzcykpXG4gICAgICAgIH0sXG4gICAgICAgIGxvb3BGaXg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJiZWZvcmVMb29wRml4XCIpO1xuICAgICAgICAgIHZhciBlLCB0ID0gdGhpcy5hY3RpdmVJbmRleCxcbiAgICAgICAgICAgIGkgPSB0aGlzLnNsaWRlcyxcbiAgICAgICAgICAgIHMgPSB0aGlzLmxvb3BlZFNsaWRlcyxcbiAgICAgICAgICAgIGEgPSB0aGlzLmFsbG93U2xpZGVQcmV2LFxuICAgICAgICAgICAgciA9IHRoaXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICAgICAgICBuID0gdGhpcy5zbmFwR3JpZCxcbiAgICAgICAgICAgIGwgPSB0aGlzLnJ0bFRyYW5zbGF0ZTtcbiAgICAgICAgICB0aGlzLmFsbG93U2xpZGVQcmV2ID0gITAsIHRoaXMuYWxsb3dTbGlkZU5leHQgPSAhMDtcbiAgICAgICAgICB2YXIgbyA9IC1uW3RdIC0gdGhpcy5nZXRUcmFuc2xhdGUoKTtcbiAgICAgICAgICBpZiAodCA8IHMpIGUgPSBpLmxlbmd0aCAtIDMgKiBzICsgdCwgZSArPSBzLCB0aGlzLnNsaWRlVG8oZSwgMCwgITEsICEwKSAmJiAwICE9PSBvICYmIHRoaXMuc2V0VHJhbnNsYXRlKChsID8gLXRoaXMudHJhbnNsYXRlIDogdGhpcy50cmFuc2xhdGUpIC0gbyk7XG4gICAgICAgICAgZWxzZSBpZiAodCA+PSBpLmxlbmd0aCAtIHMpIHtcbiAgICAgICAgICAgIGUgPSAtaS5sZW5ndGggKyB0ICsgcywgZSArPSBzLCB0aGlzLnNsaWRlVG8oZSwgMCwgITEsICEwKSAmJiAwICE9PSBvICYmIHRoaXMuc2V0VHJhbnNsYXRlKChsID8gLXRoaXMudHJhbnNsYXRlIDogdGhpcy50cmFuc2xhdGUpIC0gbylcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hbGxvd1NsaWRlUHJldiA9IGEsIHRoaXMuYWxsb3dTbGlkZU5leHQgPSByLCB0aGlzLmVtaXQoXCJsb29wRml4XCIpXG4gICAgICAgIH0sXG4gICAgICAgIGxvb3BEZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGUgPSB0aGlzLiR3cmFwcGVyRWwsXG4gICAgICAgICAgICB0ID0gdGhpcy5wYXJhbXMsXG4gICAgICAgICAgICBpID0gdGhpcy5zbGlkZXM7XG4gICAgICAgICAgZS5jaGlsZHJlbihcIi5cIiArIHQuc2xpZGVDbGFzcyArIFwiLlwiICsgdC5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIsLlwiICsgdC5zbGlkZUNsYXNzICsgXCIuXCIgKyB0LnNsaWRlQmxhbmtDbGFzcykucmVtb3ZlKCksIGkucmVtb3ZlQXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBncmFiQ3Vyc29yOiB7XG4gICAgICAgIHNldEdyYWJDdXJzb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKCEodGhpcy5zdXBwb3J0LnRvdWNoIHx8ICF0aGlzLnBhcmFtcy5zaW11bGF0ZVRvdWNoIHx8IHRoaXMucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgdGhpcy5pc0xvY2tlZCB8fCB0aGlzLnBhcmFtcy5jc3NNb2RlKSkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmVsO1xuICAgICAgICAgICAgdC5zdHlsZS5jdXJzb3IgPSBcIm1vdmVcIiwgdC5zdHlsZS5jdXJzb3IgPSBlID8gXCItd2Via2l0LWdyYWJiaW5nXCIgOiBcIi13ZWJraXQtZ3JhYlwiLCB0LnN0eWxlLmN1cnNvciA9IGUgPyBcIi1tb3otZ3JhYmJpblwiIDogXCItbW96LWdyYWJcIiwgdC5zdHlsZS5jdXJzb3IgPSBlID8gXCJncmFiYmluZ1wiIDogXCJncmFiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVuc2V0R3JhYkN1cnNvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuc3VwcG9ydC50b3VjaCB8fCB0aGlzLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHRoaXMuaXNMb2NrZWQgfHwgdGhpcy5wYXJhbXMuY3NzTW9kZSB8fCAodGhpcy5lbC5zdHlsZS5jdXJzb3IgPSBcIlwiKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWFuaXB1bGF0aW9uOiB7XG4gICAgICAgIGFwcGVuZFNsaWRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciB0ID0gdGhpcy4kd3JhcHBlckVsLFxuICAgICAgICAgICAgaSA9IHRoaXMucGFyYW1zO1xuICAgICAgICAgIGlmIChpLmxvb3AgJiYgdGhpcy5sb29wRGVzdHJveSgpLCBcIm9iamVjdFwiID09IHR5cGVvZiBlICYmIFwibGVuZ3RoXCIgaW4gZSlcbiAgICAgICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgZS5sZW5ndGg7IHMgKz0gMSkgZVtzXSAmJiB0LmFwcGVuZChlW3NdKTtcbiAgICAgICAgICBlbHNlIHQuYXBwZW5kKGUpO1xuICAgICAgICAgIGkubG9vcCAmJiB0aGlzLmxvb3BDcmVhdGUoKSwgaS5vYnNlcnZlciAmJiB0aGlzLnN1cHBvcnQub2JzZXJ2ZXIgfHwgdGhpcy51cGRhdGUoKVxuICAgICAgICB9LFxuICAgICAgICBwcmVwZW5kU2xpZGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIGkgPSB0aGlzLiR3cmFwcGVyRWwsXG4gICAgICAgICAgICBzID0gdGhpcy5hY3RpdmVJbmRleDtcbiAgICAgICAgICB0Lmxvb3AgJiYgdGhpcy5sb29wRGVzdHJveSgpO1xuICAgICAgICAgIHZhciBhID0gcyArIDE7XG4gICAgICAgICAgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgJiYgXCJsZW5ndGhcIiBpbiBlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGUubGVuZ3RoOyByICs9IDEpIGVbcl0gJiYgaS5wcmVwZW5kKGVbcl0pO1xuICAgICAgICAgICAgYSA9IHMgKyBlLmxlbmd0aFxuICAgICAgICAgIH0gZWxzZSBpLnByZXBlbmQoZSk7XG4gICAgICAgICAgdC5sb29wICYmIHRoaXMubG9vcENyZWF0ZSgpLCB0Lm9ic2VydmVyICYmIHRoaXMuc3VwcG9ydC5vYnNlcnZlciB8fCB0aGlzLnVwZGF0ZSgpLCB0aGlzLnNsaWRlVG8oYSwgMCwgITEpXG4gICAgICAgIH0sXG4gICAgICAgIGFkZFNsaWRlOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHZhciBpID0gdGhpcy4kd3JhcHBlckVsLFxuICAgICAgICAgICAgcyA9IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgYSA9IHRoaXMuYWN0aXZlSW5kZXg7XG4gICAgICAgICAgcy5sb29wICYmIChhIC09IHRoaXMubG9vcGVkU2xpZGVzLCB0aGlzLmxvb3BEZXN0cm95KCksIHRoaXMuc2xpZGVzID0gaS5jaGlsZHJlbihcIi5cIiArIHMuc2xpZGVDbGFzcykpO1xuICAgICAgICAgIHZhciByID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAgICAgICAgIGlmIChlIDw9IDApIHRoaXMucHJlcGVuZFNsaWRlKHQpO1xuICAgICAgICAgIGVsc2UgaWYgKGUgPj0gcikgdGhpcy5hcHBlbmRTbGlkZSh0KTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSBhID4gZSA/IGEgKyAxIDogYSwgbCA9IFtdLCBvID0gciAtIDE7IG8gPj0gZTsgbyAtPSAxKSB7XG4gICAgICAgICAgICAgIHZhciBkID0gdGhpcy5zbGlkZXMuZXEobyk7XG4gICAgICAgICAgICAgIGQucmVtb3ZlKCksIGwudW5zaGlmdChkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIHQgJiYgXCJsZW5ndGhcIiBpbiB0KSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGggPSAwOyBoIDwgdC5sZW5ndGg7IGggKz0gMSkgdFtoXSAmJiBpLmFwcGVuZCh0W2hdKTtcbiAgICAgICAgICAgICAgbiA9IGEgPiBlID8gYSArIHQubGVuZ3RoIDogYVxuICAgICAgICAgICAgfSBlbHNlIGkuYXBwZW5kKHQpO1xuICAgICAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBsLmxlbmd0aDsgcCArPSAxKSBpLmFwcGVuZChsW3BdKTtcbiAgICAgICAgICAgIHMubG9vcCAmJiB0aGlzLmxvb3BDcmVhdGUoKSwgcy5vYnNlcnZlciAmJiB0aGlzLnN1cHBvcnQub2JzZXJ2ZXIgfHwgdGhpcy51cGRhdGUoKSwgcy5sb29wID8gdGhpcy5zbGlkZVRvKG4gKyB0aGlzLmxvb3BlZFNsaWRlcywgMCwgITEpIDogdGhpcy5zbGlkZVRvKG4sIDAsICExKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlU2xpZGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIGkgPSB0aGlzLiR3cmFwcGVyRWwsXG4gICAgICAgICAgICBzID0gdGhpcy5hY3RpdmVJbmRleDtcbiAgICAgICAgICB0Lmxvb3AgJiYgKHMgLT0gdGhpcy5sb29wZWRTbGlkZXMsIHRoaXMubG9vcERlc3Ryb3koKSwgdGhpcy5zbGlkZXMgPSBpLmNoaWxkcmVuKFwiLlwiICsgdC5zbGlkZUNsYXNzKSk7XG4gICAgICAgICAgdmFyIGEsIHIgPSBzO1xuICAgICAgICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBlICYmIFwibGVuZ3RoXCIgaW4gZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbiArPSAxKSBhID0gZVtuXSwgdGhpcy5zbGlkZXNbYV0gJiYgdGhpcy5zbGlkZXMuZXEoYSkucmVtb3ZlKCksIGEgPCByICYmIChyIC09IDEpO1xuICAgICAgICAgICAgciA9IE1hdGgubWF4KHIsIDApXG4gICAgICAgICAgfSBlbHNlIGEgPSBlLCB0aGlzLnNsaWRlc1thXSAmJiB0aGlzLnNsaWRlcy5lcShhKS5yZW1vdmUoKSwgYSA8IHIgJiYgKHIgLT0gMSksIHIgPSBNYXRoLm1heChyLCAwKTtcbiAgICAgICAgICB0Lmxvb3AgJiYgdGhpcy5sb29wQ3JlYXRlKCksIHQub2JzZXJ2ZXIgJiYgdGhpcy5zdXBwb3J0Lm9ic2VydmVyIHx8IHRoaXMudXBkYXRlKCksIHQubG9vcCA/IHRoaXMuc2xpZGVUbyhyICsgdGhpcy5sb29wZWRTbGlkZXMsIDAsICExKSA6IHRoaXMuc2xpZGVUbyhyLCAwLCAhMSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlQWxsU2xpZGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yICh2YXIgZSA9IFtdLCB0ID0gMDsgdCA8IHRoaXMuc2xpZGVzLmxlbmd0aDsgdCArPSAxKSBlLnB1c2godCk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVTbGlkZShlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGF0dGFjaEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBlID0gcigpLFxuICAgICAgICAgICAgdCA9IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgaSA9IHRoaXMudG91Y2hFdmVudHMsXG4gICAgICAgICAgICBzID0gdGhpcy5lbCxcbiAgICAgICAgICAgIGEgPSB0aGlzLndyYXBwZXJFbCxcbiAgICAgICAgICAgIG4gPSB0aGlzLmRldmljZSxcbiAgICAgICAgICAgIGwgPSB0aGlzLnN1cHBvcnQ7XG4gICAgICAgICAgdGhpcy5vblRvdWNoU3RhcnQgPSBPLmJpbmQodGhpcyksIHRoaXMub25Ub3VjaE1vdmUgPSBBLmJpbmQodGhpcyksIHRoaXMub25Ub3VjaEVuZCA9IEQuYmluZCh0aGlzKSwgdC5jc3NNb2RlICYmICh0aGlzLm9uU2Nyb2xsID0gQi5iaW5kKHRoaXMpKSwgdGhpcy5vbkNsaWNrID0gTi5iaW5kKHRoaXMpO1xuICAgICAgICAgIHZhciBvID0gISF0Lm5lc3RlZDtcbiAgICAgICAgICBpZiAoIWwudG91Y2ggJiYgbC5wb2ludGVyRXZlbnRzKSBzLmFkZEV2ZW50TGlzdGVuZXIoaS5zdGFydCwgdGhpcy5vblRvdWNoU3RhcnQsICExKSwgZS5hZGRFdmVudExpc3RlbmVyKGkubW92ZSwgdGhpcy5vblRvdWNoTW92ZSwgbyksIGUuYWRkRXZlbnRMaXN0ZW5lcihpLmVuZCwgdGhpcy5vblRvdWNoRW5kLCAhMSk7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAobC50b3VjaCkge1xuICAgICAgICAgICAgICB2YXIgZCA9ICEoXCJ0b3VjaHN0YXJ0XCIgIT09IGkuc3RhcnQgfHwgIWwucGFzc2l2ZUxpc3RlbmVyIHx8ICF0LnBhc3NpdmVMaXN0ZW5lcnMpICYmIHtcbiAgICAgICAgICAgICAgICBwYXNzaXZlOiAhMCxcbiAgICAgICAgICAgICAgICBjYXB0dXJlOiAhMVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBzLmFkZEV2ZW50TGlzdGVuZXIoaS5zdGFydCwgdGhpcy5vblRvdWNoU3RhcnQsIGQpLCBzLmFkZEV2ZW50TGlzdGVuZXIoaS5tb3ZlLCB0aGlzLm9uVG91Y2hNb3ZlLCBsLnBhc3NpdmVMaXN0ZW5lciA/IHtcbiAgICAgICAgICAgICAgICBwYXNzaXZlOiAhMSxcbiAgICAgICAgICAgICAgICBjYXB0dXJlOiBvXG4gICAgICAgICAgICAgIH0gOiBvKSwgcy5hZGRFdmVudExpc3RlbmVyKGkuZW5kLCB0aGlzLm9uVG91Y2hFbmQsIGQpLCBpLmNhbmNlbCAmJiBzLmFkZEV2ZW50TGlzdGVuZXIoaS5jYW5jZWwsIHRoaXMub25Ub3VjaEVuZCwgZCksIEggfHwgKGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgWCksIEggPSAhMClcbiAgICAgICAgICAgIH0odC5zaW11bGF0ZVRvdWNoICYmICFuLmlvcyAmJiAhbi5hbmRyb2lkIHx8IHQuc2ltdWxhdGVUb3VjaCAmJiAhbC50b3VjaCAmJiBuLmlvcykgJiYgKHMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLm9uVG91Y2hTdGFydCwgITEpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vblRvdWNoTW92ZSwgbyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5vblRvdWNoRW5kLCAhMSkpXG4gICAgICAgICAgfSh0LnByZXZlbnRDbGlja3MgfHwgdC5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24pICYmIHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25DbGljaywgITApLCB0LmNzc01vZGUgJiYgYS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpLCB0LnVwZGF0ZU9uV2luZG93UmVzaXplID8gdGhpcy5vbihuLmlvcyB8fCBuLmFuZHJvaWQgPyBcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZVwiIDogXCJyZXNpemUgb2JzZXJ2ZXJVcGRhdGVcIiwgRywgITApIDogdGhpcy5vbihcIm9ic2VydmVyVXBkYXRlXCIsIEcsICEwKVxuICAgICAgICB9LFxuICAgICAgICBkZXRhY2hFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZSA9IHIoKSxcbiAgICAgICAgICAgIHQgPSB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIGkgPSB0aGlzLnRvdWNoRXZlbnRzLFxuICAgICAgICAgICAgcyA9IHRoaXMuZWwsXG4gICAgICAgICAgICBhID0gdGhpcy53cmFwcGVyRWwsXG4gICAgICAgICAgICBuID0gdGhpcy5kZXZpY2UsXG4gICAgICAgICAgICBsID0gdGhpcy5zdXBwb3J0LFxuICAgICAgICAgICAgbyA9ICEhdC5uZXN0ZWQ7XG4gICAgICAgICAgaWYgKCFsLnRvdWNoICYmIGwucG9pbnRlckV2ZW50cykgcy5yZW1vdmVFdmVudExpc3RlbmVyKGkuc3RhcnQsIHRoaXMub25Ub3VjaFN0YXJ0LCAhMSksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihpLm1vdmUsIHRoaXMub25Ub3VjaE1vdmUsIG8pLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5lbmQsIHRoaXMub25Ub3VjaEVuZCwgITEpO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGwudG91Y2gpIHtcbiAgICAgICAgICAgICAgdmFyIGQgPSAhKFwib25Ub3VjaFN0YXJ0XCIgIT09IGkuc3RhcnQgfHwgIWwucGFzc2l2ZUxpc3RlbmVyIHx8ICF0LnBhc3NpdmVMaXN0ZW5lcnMpICYmIHtcbiAgICAgICAgICAgICAgICBwYXNzaXZlOiAhMCxcbiAgICAgICAgICAgICAgICBjYXB0dXJlOiAhMVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBzLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5zdGFydCwgdGhpcy5vblRvdWNoU3RhcnQsIGQpLCBzLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5tb3ZlLCB0aGlzLm9uVG91Y2hNb3ZlLCBvKSwgcy5yZW1vdmVFdmVudExpc3RlbmVyKGkuZW5kLCB0aGlzLm9uVG91Y2hFbmQsIGQpLCBpLmNhbmNlbCAmJiBzLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5jYW5jZWwsIHRoaXMub25Ub3VjaEVuZCwgZClcbiAgICAgICAgICAgIH0odC5zaW11bGF0ZVRvdWNoICYmICFuLmlvcyAmJiAhbi5hbmRyb2lkIHx8IHQuc2ltdWxhdGVUb3VjaCAmJiAhbC50b3VjaCAmJiBuLmlvcykgJiYgKHMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLm9uVG91Y2hTdGFydCwgITEpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vblRvdWNoTW92ZSwgbyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5vblRvdWNoRW5kLCAhMSkpXG4gICAgICAgICAgfSh0LnByZXZlbnRDbGlja3MgfHwgdC5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24pICYmIHMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25DbGljaywgITApLCB0LmNzc01vZGUgJiYgYS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpLCB0aGlzLm9mZihuLmlvcyB8fCBuLmFuZHJvaWQgPyBcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZVwiIDogXCJyZXNpemUgb2JzZXJ2ZXJVcGRhdGVcIiwgRylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIHNldEJyZWFrcG9pbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZSA9IHRoaXMuYWN0aXZlSW5kZXgsXG4gICAgICAgICAgICB0ID0gdGhpcy5pbml0aWFsaXplZCxcbiAgICAgICAgICAgIGkgPSB0aGlzLmxvb3BlZFNsaWRlcyxcbiAgICAgICAgICAgIHMgPSB2b2lkIDAgPT09IGkgPyAwIDogaSxcbiAgICAgICAgICAgIGEgPSB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIHIgPSB0aGlzLiRlbCxcbiAgICAgICAgICAgIG4gPSBhLmJyZWFrcG9pbnRzO1xuICAgICAgICAgIGlmIChuICYmICghbiB8fCAwICE9PSBPYmplY3Qua2V5cyhuKS5sZW5ndGgpKSB7XG4gICAgICAgICAgICB2YXIgbCA9IHRoaXMuZ2V0QnJlYWtwb2ludChuKTtcbiAgICAgICAgICAgIGlmIChsICYmIHRoaXMuY3VycmVudEJyZWFrcG9pbnQgIT09IGwpIHtcbiAgICAgICAgICAgICAgdmFyIG8gPSBsIGluIG4gPyBuW2xdIDogdm9pZCAwO1xuICAgICAgICAgICAgICBvICYmIFtcInNsaWRlc1BlclZpZXdcIiwgXCJzcGFjZUJldHdlZW5cIiwgXCJzbGlkZXNQZXJHcm91cFwiLCBcInNsaWRlc1Blckdyb3VwU2tpcFwiLCBcInNsaWRlc1BlckNvbHVtblwiXS5mb3JFYWNoKChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gb1tlXTtcbiAgICAgICAgICAgICAgICB2b2lkIDAgIT09IHQgJiYgKG9bZV0gPSBcInNsaWRlc1BlclZpZXdcIiAhPT0gZSB8fCBcIkFVVE9cIiAhPT0gdCAmJiBcImF1dG9cIiAhPT0gdCA/IFwic2xpZGVzUGVyVmlld1wiID09PSBlID8gcGFyc2VGbG9hdCh0KSA6IHBhcnNlSW50KHQsIDEwKSA6IFwiYXV0b1wiKVxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgIHZhciBkID0gbyB8fCB0aGlzLm9yaWdpbmFsUGFyYW1zLFxuICAgICAgICAgICAgICAgIGggPSBhLnNsaWRlc1BlckNvbHVtbiA+IDEsXG4gICAgICAgICAgICAgICAgcCA9IGQuc2xpZGVzUGVyQ29sdW1uID4gMTtcbiAgICAgICAgICAgICAgaCAmJiAhcCA/IChyLnJlbW92ZUNsYXNzKGEuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwibXVsdGlyb3cgXCIgKyBhLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIm11bHRpcm93LWNvbHVtblwiKSwgdGhpcy5lbWl0Q29udGFpbmVyQ2xhc3NlcygpKSA6ICFoICYmIHAgJiYgKHIuYWRkQ2xhc3MoYS5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCJtdWx0aXJvd1wiKSwgXCJjb2x1bW5cIiA9PT0gZC5zbGlkZXNQZXJDb2x1bW5GaWxsICYmIHIuYWRkQ2xhc3MoYS5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCJtdWx0aXJvdy1jb2x1bW5cIiksIHRoaXMuZW1pdENvbnRhaW5lckNsYXNzZXMoKSk7XG4gICAgICAgICAgICAgIHZhciB1ID0gZC5kaXJlY3Rpb24gJiYgZC5kaXJlY3Rpb24gIT09IGEuZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgIGMgPSBhLmxvb3AgJiYgKGQuc2xpZGVzUGVyVmlldyAhPT0gYS5zbGlkZXNQZXJWaWV3IHx8IHUpO1xuICAgICAgICAgICAgICB1ICYmIHQgJiYgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oKSwgUyh0aGlzLnBhcmFtcywgZCksIFModGhpcywge1xuICAgICAgICAgICAgICAgIGFsbG93VG91Y2hNb3ZlOiB0aGlzLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICAgICAgICAgICAgICBhbGxvd1NsaWRlTmV4dDogdGhpcy5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICAgICAgICAgICAgYWxsb3dTbGlkZVByZXY6IHRoaXMucGFyYW1zLmFsbG93U2xpZGVQcmV2XG4gICAgICAgICAgICAgIH0pLCB0aGlzLmN1cnJlbnRCcmVha3BvaW50ID0gbCwgYyAmJiB0ICYmICh0aGlzLmxvb3BEZXN0cm95KCksIHRoaXMubG9vcENyZWF0ZSgpLCB0aGlzLnVwZGF0ZVNsaWRlcygpLCB0aGlzLnNsaWRlVG8oZSAtIHMgKyB0aGlzLmxvb3BlZFNsaWRlcywgMCwgITEpKSwgdGhpcy5lbWl0KFwiYnJlYWtwb2ludFwiLCBkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QnJlYWtwb2ludDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IGwoKTtcbiAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgdmFyIGkgPSAhMSxcbiAgICAgICAgICAgICAgcyA9IE9iamVjdC5rZXlzKGUpLm1hcCgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiAwID09PSBlLmluZGV4T2YoXCJAXCIpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgaSA9IHBhcnNlRmxvYXQoZS5zdWJzdHIoMSkpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHQuaW5uZXJIZWlnaHQgKiBpLFxuICAgICAgICAgICAgICAgICAgICBwb2ludDogZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IGUsXG4gICAgICAgICAgICAgICAgICBwb2ludDogZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcy5zb3J0KChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoZS52YWx1ZSwgMTApIC0gcGFyc2VJbnQodC52YWx1ZSwgMTApXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHMubGVuZ3RoOyBhICs9IDEpIHtcbiAgICAgICAgICAgICAgdmFyIHIgPSBzW2FdLFxuICAgICAgICAgICAgICAgIG4gPSByLnBvaW50O1xuICAgICAgICAgICAgICByLnZhbHVlIDw9IHQuaW5uZXJXaWR0aCAmJiAoaSA9IG4pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaSB8fCBcIm1heFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2hlY2tPdmVyZmxvdzoge1xuICAgICAgICBjaGVja092ZXJmbG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGUgPSB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIHQgPSB0aGlzLmlzTG9ja2VkLFxuICAgICAgICAgICAgaSA9IHRoaXMuc2xpZGVzLmxlbmd0aCA+IDAgJiYgZS5zbGlkZXNPZmZzZXRCZWZvcmUgKyBlLnNwYWNlQmV0d2VlbiAqICh0aGlzLnNsaWRlcy5sZW5ndGggLSAxKSArIHRoaXMuc2xpZGVzWzBdLm9mZnNldFdpZHRoICogdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAgICAgICAgIGUuc2xpZGVzT2Zmc2V0QmVmb3JlICYmIGUuc2xpZGVzT2Zmc2V0QWZ0ZXIgJiYgaSA/IHRoaXMuaXNMb2NrZWQgPSBpIDw9IHRoaXMuc2l6ZSA6IHRoaXMuaXNMb2NrZWQgPSAxID09PSB0aGlzLnNuYXBHcmlkLmxlbmd0aCwgdGhpcy5hbGxvd1NsaWRlTmV4dCA9ICF0aGlzLmlzTG9ja2VkLCB0aGlzLmFsbG93U2xpZGVQcmV2ID0gIXRoaXMuaXNMb2NrZWQsIHQgIT09IHRoaXMuaXNMb2NrZWQgJiYgdGhpcy5lbWl0KHRoaXMuaXNMb2NrZWQgPyBcImxvY2tcIiA6IFwidW5sb2NrXCIpLCB0ICYmIHQgIT09IHRoaXMuaXNMb2NrZWQgJiYgKHRoaXMuaXNFbmQgPSAhMSwgdGhpcy5uYXZpZ2F0aW9uICYmIHRoaXMubmF2aWdhdGlvbi51cGRhdGUoKSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgYWRkQ2xhc3NlczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBlID0gdGhpcy5jbGFzc05hbWVzLFxuICAgICAgICAgICAgdCA9IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgaSA9IHRoaXMucnRsLFxuICAgICAgICAgICAgcyA9IHRoaXMuJGVsLFxuICAgICAgICAgICAgYSA9IHRoaXMuZGV2aWNlLFxuICAgICAgICAgICAgciA9IFtdO1xuICAgICAgICAgIHIucHVzaChcImluaXRpYWxpemVkXCIpLCByLnB1c2godC5kaXJlY3Rpb24pLCB0LmZyZWVNb2RlICYmIHIucHVzaChcImZyZWUtbW9kZVwiKSwgdC5hdXRvSGVpZ2h0ICYmIHIucHVzaChcImF1dG9oZWlnaHRcIiksIGkgJiYgci5wdXNoKFwicnRsXCIpLCB0LnNsaWRlc1BlckNvbHVtbiA+IDEgJiYgKHIucHVzaChcIm11bHRpcm93XCIpLCBcImNvbHVtblwiID09PSB0LnNsaWRlc1BlckNvbHVtbkZpbGwgJiYgci5wdXNoKFwibXVsdGlyb3ctY29sdW1uXCIpKSwgYS5hbmRyb2lkICYmIHIucHVzaChcImFuZHJvaWRcIiksIGEuaW9zICYmIHIucHVzaChcImlvc1wiKSwgdC5jc3NNb2RlICYmIHIucHVzaChcImNzcy1tb2RlXCIpLCByLmZvckVhY2goKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICBlLnB1c2godC5jb250YWluZXJNb2RpZmllckNsYXNzICsgaSlcbiAgICAgICAgICB9KSksIHMuYWRkQ2xhc3MoZS5qb2luKFwiIFwiKSksIHRoaXMuZW1pdENvbnRhaW5lckNsYXNzZXMoKVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVDbGFzc2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGUgPSB0aGlzLiRlbCxcbiAgICAgICAgICAgIHQgPSB0aGlzLmNsYXNzTmFtZXM7XG4gICAgICAgICAgZS5yZW1vdmVDbGFzcyh0LmpvaW4oXCIgXCIpKSwgdGhpcy5lbWl0Q29udGFpbmVyQ2xhc3NlcygpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbWFnZXM6IHtcbiAgICAgICAgbG9hZEltYWdlOiBmdW5jdGlvbiAoZSwgdCwgaSwgcywgYSwgcikge1xuICAgICAgICAgIHZhciBuLCBvID0gbCgpO1xuXG4gICAgICAgICAgZnVuY3Rpb24gZCgpIHtcbiAgICAgICAgICAgIHIgJiYgcigpXG4gICAgICAgICAgfVxuICAgICAgICAgIG0oZSkucGFyZW50KFwicGljdHVyZVwiKVswXSB8fCBlLmNvbXBsZXRlICYmIGEgPyBkKCkgOiB0ID8gKChuID0gbmV3IG8uSW1hZ2UpLm9ubG9hZCA9IGQsIG4ub25lcnJvciA9IGQsIHMgJiYgKG4uc2l6ZXMgPSBzKSwgaSAmJiAobi5zcmNzZXQgPSBpKSwgdCAmJiAobi5zcmMgPSB0KSkgOiBkKClcbiAgICAgICAgfSxcbiAgICAgICAgcHJlbG9hZEltYWdlczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBlID0gdGhpcztcblxuICAgICAgICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgICAgICBudWxsICE9IGUgJiYgZSAmJiAhZS5kZXN0cm95ZWQgJiYgKHZvaWQgMCAhPT0gZS5pbWFnZXNMb2FkZWQgJiYgKGUuaW1hZ2VzTG9hZGVkICs9IDEpLCBlLmltYWdlc0xvYWRlZCA9PT0gZS5pbWFnZXNUb0xvYWQubGVuZ3RoICYmIChlLnBhcmFtcy51cGRhdGVPbkltYWdlc1JlYWR5ICYmIGUudXBkYXRlKCksIGUuZW1pdChcImltYWdlc1JlYWR5XCIpKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZS5pbWFnZXNUb0xvYWQgPSBlLiRlbC5maW5kKFwiaW1nXCIpO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS5pbWFnZXNUb0xvYWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBzID0gZS5pbWFnZXNUb0xvYWRbaV07XG4gICAgICAgICAgICBlLmxvYWRJbWFnZShzLCBzLmN1cnJlbnRTcmMgfHwgcy5nZXRBdHRyaWJ1dGUoXCJzcmNcIiksIHMuc3Jjc2V0IHx8IHMuZ2V0QXR0cmlidXRlKFwic3Jjc2V0XCIpLCBzLnNpemVzIHx8IHMuZ2V0QXR0cmlidXRlKFwic2l6ZXNcIiksICEwLCB0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgRiA9IHt9LFxuICAgIFcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICBmb3IgKHZhciBlLCBpLCBzID0gYXJndW1lbnRzLmxlbmd0aCwgYSA9IG5ldyBBcnJheShzKSwgciA9IDA7IHIgPCBzOyByKyspIGFbcl0gPSBhcmd1bWVudHNbcl07XG4gICAgICAgIDEgPT09IGEubGVuZ3RoICYmIGFbMF0uY29uc3RydWN0b3IgJiYgYVswXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ID8gaSA9IGFbMF0gOiAoZSA9IGFbMF0sIGkgPSBhWzFdKSwgaSB8fCAoaSA9IHt9KSwgaSA9IFMoe30sIGkpLCBlICYmICFpLmVsICYmIChpLmVsID0gZSk7XG4gICAgICAgIHZhciBuID0gdGhpcztcbiAgICAgICAgbi5zdXBwb3J0ID0geigpLCBuLmRldmljZSA9IFAoe1xuICAgICAgICAgIHVzZXJBZ2VudDogaS51c2VyQWdlbnRcbiAgICAgICAgfSksIG4uYnJvd3NlciA9IGsoKSwgbi5ldmVudHNMaXN0ZW5lcnMgPSB7fSwgbi5ldmVudHNBbnlMaXN0ZW5lcnMgPSBbXSwgT2JqZWN0LmtleXMoVikuZm9yRWFjaCgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhWW2VdKS5mb3JFYWNoKChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdC5wcm90b3R5cGVbaV0gfHwgKHQucHJvdG90eXBlW2ldID0gVltlXVtpXSlcbiAgICAgICAgICB9KSlcbiAgICAgICAgfSkpLCB2b2lkIDAgPT09IG4ubW9kdWxlcyAmJiAobi5tb2R1bGVzID0ge30pLCBPYmplY3Qua2V5cyhuLm1vZHVsZXMpLmZvckVhY2goKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBuLm1vZHVsZXNbZV07XG4gICAgICAgICAgaWYgKHQucGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgcyA9IE9iamVjdC5rZXlzKHQucGFyYW1zKVswXSxcbiAgICAgICAgICAgICAgYSA9IHQucGFyYW1zW3NdO1xuICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIGEgfHwgbnVsbCA9PT0gYSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCEocyBpbiBpKSB8fCAhKFwiZW5hYmxlZFwiIGluIGEpKSByZXR1cm47XG4gICAgICAgICAgICAhMCA9PT0gaVtzXSAmJiAoaVtzXSA9IHtcbiAgICAgICAgICAgICAgZW5hYmxlZDogITBcbiAgICAgICAgICAgIH0pLCBcIm9iamVjdFwiICE9IHR5cGVvZiBpW3NdIHx8IFwiZW5hYmxlZFwiIGluIGlbc10gfHwgKGlbc10uZW5hYmxlZCA9ICEwKSwgaVtzXSB8fCAoaVtzXSA9IHtcbiAgICAgICAgICAgICAgZW5hYmxlZDogITFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIHZhciBsID0gUyh7fSwgWSk7XG4gICAgICAgIG4udXNlUGFyYW1zKGwpLCBuLnBhcmFtcyA9IFMoe30sIGwsIEYsIGkpLCBuLm9yaWdpbmFsUGFyYW1zID0gUyh7fSwgbi5wYXJhbXMpLCBuLnBhc3NlZFBhcmFtcyA9IFMoe30sIGkpLCBuLnBhcmFtcyAmJiBuLnBhcmFtcy5vbiAmJiBPYmplY3Qua2V5cyhuLnBhcmFtcy5vbikuZm9yRWFjaCgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBuLm9uKGUsIG4ucGFyYW1zLm9uW2VdKVxuICAgICAgICB9KSksIG4uJCA9IG07XG4gICAgICAgIHZhciBvID0gbShuLnBhcmFtcy5lbCk7XG4gICAgICAgIGlmIChlID0gb1swXSkge1xuICAgICAgICAgIGlmIChvLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBkID0gW107XG4gICAgICAgICAgICByZXR1cm4gby5lYWNoKChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICB2YXIgcyA9IFMoe30sIGksIHtcbiAgICAgICAgICAgICAgICBlbDogZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgZC5wdXNoKG5ldyB0KHMpKVxuICAgICAgICAgICAgfSkpLCBkXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBoLCBwLCB1O1xuICAgICAgICAgIHJldHVybiBlLnN3aXBlciA9IG4sIGUgJiYgZS5zaGFkb3dSb290ICYmIGUuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yID8gKGggPSBtKGUuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgbi5wYXJhbXMud3JhcHBlckNsYXNzKSkpLmNoaWxkcmVuID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBvLmNoaWxkcmVuKGUpXG4gICAgICAgICAgfSA6IGggPSBvLmNoaWxkcmVuKFwiLlwiICsgbi5wYXJhbXMud3JhcHBlckNsYXNzKSwgUyhuLCB7XG4gICAgICAgICAgICAkZWw6IG8sXG4gICAgICAgICAgICBlbDogZSxcbiAgICAgICAgICAgICR3cmFwcGVyRWw6IGgsXG4gICAgICAgICAgICB3cmFwcGVyRWw6IGhbMF0sXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbXSxcbiAgICAgICAgICAgIHNsaWRlczogbSgpLFxuICAgICAgICAgICAgc2xpZGVzR3JpZDogW10sXG4gICAgICAgICAgICBzbmFwR3JpZDogW10sXG4gICAgICAgICAgICBzbGlkZXNTaXplc0dyaWQ6IFtdLFxuICAgICAgICAgICAgaXNIb3Jpem9udGFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBcImhvcml6b250YWxcIiA9PT0gbi5wYXJhbXMuZGlyZWN0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNWZXJ0aWNhbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiID09PSBuLnBhcmFtcy5kaXJlY3Rpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBydGw6IFwicnRsXCIgPT09IGUuZGlyLnRvTG93ZXJDYXNlKCkgfHwgXCJydGxcIiA9PT0gby5jc3MoXCJkaXJlY3Rpb25cIiksXG4gICAgICAgICAgICBydGxUcmFuc2xhdGU6IFwiaG9yaXpvbnRhbFwiID09PSBuLnBhcmFtcy5kaXJlY3Rpb24gJiYgKFwicnRsXCIgPT09IGUuZGlyLnRvTG93ZXJDYXNlKCkgfHwgXCJydGxcIiA9PT0gby5jc3MoXCJkaXJlY3Rpb25cIikpLFxuICAgICAgICAgICAgd3JvbmdSVEw6IFwiLXdlYmtpdC1ib3hcIiA9PT0gaC5jc3MoXCJkaXNwbGF5XCIpLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgICAgICByZWFsSW5kZXg6IDAsXG4gICAgICAgICAgICBpc0JlZ2lubmluZzogITAsXG4gICAgICAgICAgICBpc0VuZDogITEsXG4gICAgICAgICAgICB0cmFuc2xhdGU6IDAsXG4gICAgICAgICAgICBwcmV2aW91c1RyYW5zbGF0ZTogMCxcbiAgICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICAgICAgICBhbmltYXRpbmc6ICExLFxuICAgICAgICAgICAgYWxsb3dTbGlkZU5leHQ6IG4ucGFyYW1zLmFsbG93U2xpZGVOZXh0LFxuICAgICAgICAgICAgYWxsb3dTbGlkZVByZXY6IG4ucGFyYW1zLmFsbG93U2xpZGVQcmV2LFxuICAgICAgICAgICAgdG91Y2hFdmVudHM6IChwID0gW1widG91Y2hzdGFydFwiLCBcInRvdWNobW92ZVwiLCBcInRvdWNoZW5kXCIsIFwidG91Y2hjYW5jZWxcIl0sIHUgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZW1vdmVcIiwgXCJtb3VzZXVwXCJdLCBuLnN1cHBvcnQucG9pbnRlckV2ZW50cyAmJiAodSA9IFtcInBvaW50ZXJkb3duXCIsIFwicG9pbnRlcm1vdmVcIiwgXCJwb2ludGVydXBcIl0pLCBuLnRvdWNoRXZlbnRzVG91Y2ggPSB7XG4gICAgICAgICAgICAgIHN0YXJ0OiBwWzBdLFxuICAgICAgICAgICAgICBtb3ZlOiBwWzFdLFxuICAgICAgICAgICAgICBlbmQ6IHBbMl0sXG4gICAgICAgICAgICAgIGNhbmNlbDogcFszXVxuICAgICAgICAgICAgfSwgbi50b3VjaEV2ZW50c0Rlc2t0b3AgPSB7XG4gICAgICAgICAgICAgIHN0YXJ0OiB1WzBdLFxuICAgICAgICAgICAgICBtb3ZlOiB1WzFdLFxuICAgICAgICAgICAgICBlbmQ6IHVbMl1cbiAgICAgICAgICAgIH0sIG4uc3VwcG9ydC50b3VjaCB8fCAhbi5wYXJhbXMuc2ltdWxhdGVUb3VjaCA/IG4udG91Y2hFdmVudHNUb3VjaCA6IG4udG91Y2hFdmVudHNEZXNrdG9wKSxcbiAgICAgICAgICAgIHRvdWNoRXZlbnRzRGF0YToge1xuICAgICAgICAgICAgICBpc1RvdWNoZWQ6IHZvaWQgMCxcbiAgICAgICAgICAgICAgaXNNb3ZlZDogdm9pZCAwLFxuICAgICAgICAgICAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzOiB2b2lkIDAsXG4gICAgICAgICAgICAgIHRvdWNoU3RhcnRUaW1lOiB2b2lkIDAsXG4gICAgICAgICAgICAgIGlzU2Nyb2xsaW5nOiB2b2lkIDAsXG4gICAgICAgICAgICAgIGN1cnJlbnRUcmFuc2xhdGU6IHZvaWQgMCxcbiAgICAgICAgICAgICAgc3RhcnRUcmFuc2xhdGU6IHZvaWQgMCxcbiAgICAgICAgICAgICAgYWxsb3dUaHJlc2hvbGRNb3ZlOiB2b2lkIDAsXG4gICAgICAgICAgICAgIGZvcm1FbGVtZW50czogXCJpbnB1dCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBidXR0b24sIHZpZGVvLCBsYWJlbFwiLFxuICAgICAgICAgICAgICBsYXN0Q2xpY2tUaW1lOiB4KCksXG4gICAgICAgICAgICAgIGNsaWNrVGltZW91dDogdm9pZCAwLFxuICAgICAgICAgICAgICB2ZWxvY2l0aWVzOiBbXSxcbiAgICAgICAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZTogdm9pZCAwLFxuICAgICAgICAgICAgICBpc1RvdWNoRXZlbnQ6IHZvaWQgMCxcbiAgICAgICAgICAgICAgc3RhcnRNb3Zpbmc6IHZvaWQgMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsbG93Q2xpY2s6ICEwLFxuICAgICAgICAgICAgYWxsb3dUb3VjaE1vdmU6IG4ucGFyYW1zLmFsbG93VG91Y2hNb3ZlLFxuICAgICAgICAgICAgdG91Y2hlczoge1xuICAgICAgICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgICAgICAgY3VycmVudFg6IDAsXG4gICAgICAgICAgICAgIGN1cnJlbnRZOiAwLFxuICAgICAgICAgICAgICBkaWZmOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1hZ2VzVG9Mb2FkOiBbXSxcbiAgICAgICAgICAgIGltYWdlc0xvYWRlZDogMFxuICAgICAgICAgIH0pLCBuLnVzZU1vZHVsZXMoKSwgbi5lbWl0KFwiX3N3aXBlclwiKSwgbi5wYXJhbXMuaW5pdCAmJiBuLmluaXQoKSwgblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgaSwgcywgYSwgciA9IHQucHJvdG90eXBlO1xuICAgICAgcmV0dXJuIHIuZW1pdENvbnRhaW5lckNsYXNzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgaWYgKGUucGFyYW1zLl9lbWl0Q2xhc3NlcyAmJiBlLmVsKSB7XG4gICAgICAgICAgdmFyIHQgPSBlLmVsLmNsYXNzTmFtZS5zcGxpdChcIiBcIikuZmlsdGVyKChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIDAgPT09IHQuaW5kZXhPZihcInN3aXBlci1jb250YWluZXJcIikgfHwgMCA9PT0gdC5pbmRleE9mKGUucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIGUuZW1pdChcIl9jb250YWluZXJDbGFzc2VzXCIsIHQuam9pbihcIiBcIikpXG4gICAgICAgIH1cbiAgICAgIH0sIHIuZW1pdFNsaWRlc0NsYXNzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgZS5wYXJhbXMuX2VtaXRDbGFzc2VzICYmIGUuZWwgJiYgZS5zbGlkZXMuZWFjaCgoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB2YXIgaSA9IHQuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5maWx0ZXIoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gMCA9PT0gdC5pbmRleE9mKFwic3dpcGVyLXNsaWRlXCIpIHx8IDAgPT09IHQuaW5kZXhPZihlLnBhcmFtcy5zbGlkZUNsYXNzKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICBlLmVtaXQoXCJfc2xpZGVDbGFzc1wiLCB0LCBpLmpvaW4oXCIgXCIpKVxuICAgICAgICB9KSlcbiAgICAgIH0sIHIuc2xpZGVzUGVyVmlld0R5bmFtaWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcy5wYXJhbXMsXG4gICAgICAgICAgdCA9IHRoaXMuc2xpZGVzLFxuICAgICAgICAgIGkgPSB0aGlzLnNsaWRlc0dyaWQsXG4gICAgICAgICAgcyA9IHRoaXMuc2l6ZSxcbiAgICAgICAgICBhID0gdGhpcy5hY3RpdmVJbmRleCxcbiAgICAgICAgICByID0gMTtcbiAgICAgICAgaWYgKGUuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICBmb3IgKHZhciBuLCBsID0gdFthXS5zd2lwZXJTbGlkZVNpemUsIG8gPSBhICsgMTsgbyA8IHQubGVuZ3RoOyBvICs9IDEpIHRbb10gJiYgIW4gJiYgKHIgKz0gMSwgKGwgKz0gdFtvXS5zd2lwZXJTbGlkZVNpemUpID4gcyAmJiAobiA9ICEwKSk7XG4gICAgICAgICAgZm9yICh2YXIgZCA9IGEgLSAxOyBkID49IDA7IGQgLT0gMSkgdFtkXSAmJiAhbiAmJiAociArPSAxLCAobCArPSB0W2RdLnN3aXBlclNsaWRlU2l6ZSkgPiBzICYmIChuID0gITApKVxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICBmb3IgKHZhciBoID0gYSArIDE7IGggPCB0Lmxlbmd0aDsgaCArPSAxKSBpW2hdIC0gaVthXSA8IHMgJiYgKHIgKz0gMSk7XG4gICAgICAgIHJldHVybiByXG4gICAgICB9LCByLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBpZiAoZSAmJiAhZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICB2YXIgdCA9IGUuc25hcEdyaWQsXG4gICAgICAgICAgICBpID0gZS5wYXJhbXM7XG4gICAgICAgICAgaS5icmVha3BvaW50cyAmJiBlLnNldEJyZWFrcG9pbnQoKSwgZS51cGRhdGVTaXplKCksIGUudXBkYXRlU2xpZGVzKCksIGUudXBkYXRlUHJvZ3Jlc3MoKSwgZS51cGRhdGVTbGlkZXNDbGFzc2VzKCksIGUucGFyYW1zLmZyZWVNb2RlID8gKHMoKSwgZS5wYXJhbXMuYXV0b0hlaWdodCAmJiBlLnVwZGF0ZUF1dG9IZWlnaHQoKSkgOiAoKFwiYXV0b1wiID09PSBlLnBhcmFtcy5zbGlkZXNQZXJWaWV3IHx8IGUucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSAmJiBlLmlzRW5kICYmICFlLnBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IGUuc2xpZGVUbyhlLnNsaWRlcy5sZW5ndGggLSAxLCAwLCAhMSwgITApIDogZS5zbGlkZVRvKGUuYWN0aXZlSW5kZXgsIDAsICExLCAhMCkpIHx8IHMoKSwgaS53YXRjaE92ZXJmbG93ICYmIHQgIT09IGUuc25hcEdyaWQgJiYgZS5jaGVja092ZXJmbG93KCksIGUuZW1pdChcInVwZGF0ZVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcygpIHtcbiAgICAgICAgICB2YXIgdCA9IGUucnRsVHJhbnNsYXRlID8gLTEgKiBlLnRyYW5zbGF0ZSA6IGUudHJhbnNsYXRlLFxuICAgICAgICAgICAgaSA9IE1hdGgubWluKE1hdGgubWF4KHQsIGUubWF4VHJhbnNsYXRlKCkpLCBlLm1pblRyYW5zbGF0ZSgpKTtcbiAgICAgICAgICBlLnNldFRyYW5zbGF0ZShpKSwgZS51cGRhdGVBY3RpdmVJbmRleCgpLCBlLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKVxuICAgICAgICB9XG4gICAgICB9LCByLmNoYW5nZURpcmVjdGlvbiA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHZvaWQgMCA9PT0gdCAmJiAodCA9ICEwKTtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnBhcmFtcy5kaXJlY3Rpb247XG4gICAgICAgIHJldHVybiBlIHx8IChlID0gXCJob3Jpem9udGFsXCIgPT09IGkgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIiksIGUgPT09IGkgfHwgXCJob3Jpem9udGFsXCIgIT09IGUgJiYgXCJ2ZXJ0aWNhbFwiICE9PSBlIHx8ICh0aGlzLiRlbC5yZW1vdmVDbGFzcyhcIlwiICsgdGhpcy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIGkpLmFkZENsYXNzKFwiXCIgKyB0aGlzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgZSksIHRoaXMuZW1pdENvbnRhaW5lckNsYXNzZXMoKSwgdGhpcy5wYXJhbXMuZGlyZWN0aW9uID0gZSwgdGhpcy5zbGlkZXMuZWFjaCgoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBcInZlcnRpY2FsXCIgPT09IGUgPyB0LnN0eWxlLndpZHRoID0gXCJcIiA6IHQuc3R5bGUuaGVpZ2h0ID0gXCJcIlxuICAgICAgICB9KSksIHRoaXMuZW1pdChcImNoYW5nZURpcmVjdGlvblwiKSwgdCAmJiB0aGlzLnVwZGF0ZSgpKSwgdGhpc1xuICAgICAgfSwgci5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkIHx8ICh0aGlzLmVtaXQoXCJiZWZvcmVJbml0XCIpLCB0aGlzLnBhcmFtcy5icmVha3BvaW50cyAmJiB0aGlzLnNldEJyZWFrcG9pbnQoKSwgdGhpcy5hZGRDbGFzc2VzKCksIHRoaXMucGFyYW1zLmxvb3AgJiYgdGhpcy5sb29wQ3JlYXRlKCksIHRoaXMudXBkYXRlU2l6ZSgpLCB0aGlzLnVwZGF0ZVNsaWRlcygpLCB0aGlzLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHRoaXMuY2hlY2tPdmVyZmxvdygpLCB0aGlzLnBhcmFtcy5ncmFiQ3Vyc29yICYmIHRoaXMuc2V0R3JhYkN1cnNvcigpLCB0aGlzLnBhcmFtcy5wcmVsb2FkSW1hZ2VzICYmIHRoaXMucHJlbG9hZEltYWdlcygpLCB0aGlzLnBhcmFtcy5sb29wID8gdGhpcy5zbGlkZVRvKHRoaXMucGFyYW1zLmluaXRpYWxTbGlkZSArIHRoaXMubG9vcGVkU2xpZGVzLCAwLCB0aGlzLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpIDogdGhpcy5zbGlkZVRvKHRoaXMucGFyYW1zLmluaXRpYWxTbGlkZSwgMCwgdGhpcy5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KSwgdGhpcy5hdHRhY2hFdmVudHMoKSwgdGhpcy5pbml0aWFsaXplZCA9ICEwLCB0aGlzLmVtaXQoXCJpbml0XCIpKVxuICAgICAgfSwgci5kZXN0cm95ID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gITApLCB2b2lkIDAgPT09IHQgJiYgKHQgPSAhMCk7XG4gICAgICAgIHZhciBpLCBzID0gdGhpcyxcbiAgICAgICAgICBhID0gcy5wYXJhbXMsXG4gICAgICAgICAgciA9IHMuJGVsLFxuICAgICAgICAgIG4gPSBzLiR3cmFwcGVyRWwsXG4gICAgICAgICAgbCA9IHMuc2xpZGVzO1xuICAgICAgICByZXR1cm4gdm9pZCAwID09PSBzLnBhcmFtcyB8fCBzLmRlc3Ryb3llZCB8fCAocy5lbWl0KFwiYmVmb3JlRGVzdHJveVwiKSwgcy5pbml0aWFsaXplZCA9ICExLCBzLmRldGFjaEV2ZW50cygpLCBhLmxvb3AgJiYgcy5sb29wRGVzdHJveSgpLCB0ICYmIChzLnJlbW92ZUNsYXNzZXMoKSwgci5yZW1vdmVBdHRyKFwic3R5bGVcIiksIG4ucmVtb3ZlQXR0cihcInN0eWxlXCIpLCBsICYmIGwubGVuZ3RoICYmIGwucmVtb3ZlQ2xhc3MoW2Euc2xpZGVWaXNpYmxlQ2xhc3MsIGEuc2xpZGVBY3RpdmVDbGFzcywgYS5zbGlkZU5leHRDbGFzcywgYS5zbGlkZVByZXZDbGFzc10uam9pbihcIiBcIikpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5yZW1vdmVBdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIikpLCBzLmVtaXQoXCJkZXN0cm95XCIpLCBPYmplY3Qua2V5cyhzLmV2ZW50c0xpc3RlbmVycykuZm9yRWFjaCgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBzLm9mZihlKVxuICAgICAgICB9KSksICExICE9PSBlICYmIChzLiRlbFswXS5zd2lwZXIgPSBudWxsLCBpID0gcywgT2JqZWN0LmtleXMoaSkuZm9yRWFjaCgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaVtlXSA9IG51bGxcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkZWxldGUgaVtlXVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH0pKSksIHMuZGVzdHJveWVkID0gITApLCBudWxsXG4gICAgICB9LCB0LmV4dGVuZERlZmF1bHRzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgUyhGLCBlKVxuICAgICAgfSwgdC5pbnN0YWxsTW9kdWxlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdC5wcm90b3R5cGUubW9kdWxlcyB8fCAodC5wcm90b3R5cGUubW9kdWxlcyA9IHt9KTtcbiAgICAgICAgdmFyIGkgPSBlLm5hbWUgfHwgT2JqZWN0LmtleXModC5wcm90b3R5cGUubW9kdWxlcykubGVuZ3RoICsgXCJfXCIgKyB4KCk7XG4gICAgICAgIHQucHJvdG90eXBlLm1vZHVsZXNbaV0gPSBlXG4gICAgICB9LCB0LnVzZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGUpID8gKGUuZm9yRWFjaCgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gdC5pbnN0YWxsTW9kdWxlKGUpXG4gICAgICAgIH0pKSwgdCkgOiAodC5pbnN0YWxsTW9kdWxlKGUpLCB0KVxuICAgICAgfSwgaSA9IHQsIGEgPSBbe1xuICAgICAgICBrZXk6IFwiZXh0ZW5kZWREZWZhdWx0c1wiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gRlxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gWVxuICAgICAgICB9XG4gICAgICB9XSwgKHMgPSBudWxsKSAmJiBlKGkucHJvdG90eXBlLCBzKSwgYSAmJiBlKGksIGEpLCB0XG4gICAgfSgpO1xuICBXLnVzZShbJCwgSV0pO1xuICB2YXIgUiA9IHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLFxuICAgICAgICAgIGkgPSB0LnBhcmFtcyxcbiAgICAgICAgICBzID0gaS5zbGlkZXNQZXJWaWV3LFxuICAgICAgICAgIGEgPSBpLnNsaWRlc1Blckdyb3VwLFxuICAgICAgICAgIHIgPSBpLmNlbnRlcmVkU2xpZGVzLFxuICAgICAgICAgIG4gPSB0LnBhcmFtcy52aXJ0dWFsLFxuICAgICAgICAgIGwgPSBuLmFkZFNsaWRlc0JlZm9yZSxcbiAgICAgICAgICBvID0gbi5hZGRTbGlkZXNBZnRlcixcbiAgICAgICAgICBkID0gdC52aXJ0dWFsLFxuICAgICAgICAgIGggPSBkLmZyb20sXG4gICAgICAgICAgcCA9IGQudG8sXG4gICAgICAgICAgdSA9IGQuc2xpZGVzLFxuICAgICAgICAgIGMgPSBkLnNsaWRlc0dyaWQsXG4gICAgICAgICAgdiA9IGQucmVuZGVyU2xpZGUsXG4gICAgICAgICAgZiA9IGQub2Zmc2V0O1xuICAgICAgICB0LnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgIHZhciBtLCBnLCB3LCBiID0gdC5hY3RpdmVJbmRleCB8fCAwO1xuICAgICAgICBtID0gdC5ydGxUcmFuc2xhdGUgPyBcInJpZ2h0XCIgOiB0LmlzSG9yaXpvbnRhbCgpID8gXCJsZWZ0XCIgOiBcInRvcFwiLCByID8gKGcgPSBNYXRoLmZsb29yKHMgLyAyKSArIGEgKyBvLCB3ID0gTWF0aC5mbG9vcihzIC8gMikgKyBhICsgbCkgOiAoZyA9IHMgKyAoYSAtIDEpICsgbywgdyA9IGEgKyBsKTtcbiAgICAgICAgdmFyIHkgPSBNYXRoLm1heCgoYiB8fCAwKSAtIHcsIDApLFxuICAgICAgICAgIEUgPSBNYXRoLm1pbigoYiB8fCAwKSArIGcsIHUubGVuZ3RoIC0gMSksXG4gICAgICAgICAgeCA9ICh0LnNsaWRlc0dyaWRbeV0gfHwgMCkgLSAodC5zbGlkZXNHcmlkWzBdIHx8IDApO1xuXG4gICAgICAgIGZ1bmN0aW9uIFQoKSB7XG4gICAgICAgICAgdC51cGRhdGVTbGlkZXMoKSwgdC51cGRhdGVQcm9ncmVzcygpLCB0LnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSwgdC5sYXp5ICYmIHQucGFyYW1zLmxhenkuZW5hYmxlZCAmJiB0LmxhenkubG9hZCgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKFModC52aXJ0dWFsLCB7XG4gICAgICAgICAgICBmcm9tOiB5LFxuICAgICAgICAgICAgdG86IEUsXG4gICAgICAgICAgICBvZmZzZXQ6IHgsXG4gICAgICAgICAgICBzbGlkZXNHcmlkOiB0LnNsaWRlc0dyaWRcbiAgICAgICAgICB9KSwgaCA9PT0geSAmJiBwID09PSBFICYmICFlKSByZXR1cm4gdC5zbGlkZXNHcmlkICE9PSBjICYmIHggIT09IGYgJiYgdC5zbGlkZXMuY3NzKG0sIHggKyBcInB4XCIpLCB2b2lkIHQudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgaWYgKHQucGFyYW1zLnZpcnR1YWwucmVuZGVyRXh0ZXJuYWwpIHJldHVybiB0LnBhcmFtcy52aXJ0dWFsLnJlbmRlckV4dGVybmFsLmNhbGwodCwge1xuICAgICAgICAgIG9mZnNldDogeCxcbiAgICAgICAgICBmcm9tOiB5LFxuICAgICAgICAgIHRvOiBFLFxuICAgICAgICAgIHNsaWRlczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgZSA9IFtdLCB0ID0geTsgdCA8PSBFOyB0ICs9IDEpIGUucHVzaCh1W3RdKTtcbiAgICAgICAgICAgIHJldHVybiBlXG4gICAgICAgICAgfSgpXG4gICAgICAgIH0pLCB2b2lkKHQucGFyYW1zLnZpcnR1YWwucmVuZGVyRXh0ZXJuYWxVcGRhdGUgJiYgVCgpKTtcbiAgICAgICAgdmFyIEMgPSBbXSxcbiAgICAgICAgICBNID0gW107XG4gICAgICAgIGlmIChlKSB0LiR3cmFwcGVyRWwuZmluZChcIi5cIiArIHQucGFyYW1zLnNsaWRlQ2xhc3MpLnJlbW92ZSgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgZm9yICh2YXIgeiA9IGg7IHogPD0gcDsgeiArPSAxKSh6IDwgeSB8fCB6ID4gRSkgJiYgdC4kd3JhcHBlckVsLmZpbmQoXCIuXCIgKyB0LnBhcmFtcy5zbGlkZUNsYXNzICsgJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyB6ICsgJ1wiXScpLnJlbW92ZSgpO1xuICAgICAgICBmb3IgKHZhciBQID0gMDsgUCA8IHUubGVuZ3RoOyBQICs9IDEpIFAgPj0geSAmJiBQIDw9IEUgJiYgKHZvaWQgMCA9PT0gcCB8fCBlID8gTS5wdXNoKFApIDogKFAgPiBwICYmIE0ucHVzaChQKSwgUCA8IGggJiYgQy5wdXNoKFApKSk7XG4gICAgICAgIE0uZm9yRWFjaCgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB0LiR3cmFwcGVyRWwuYXBwZW5kKHYodVtlXSwgZSkpXG4gICAgICAgIH0pKSwgQy5zb3J0KChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHJldHVybiB0IC0gZVxuICAgICAgICB9KSkuZm9yRWFjaCgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB0LiR3cmFwcGVyRWwucHJlcGVuZCh2KHVbZV0sIGUpKVxuICAgICAgICB9KSksIHQuJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5zd2lwZXItc2xpZGVcIikuY3NzKG0sIHggKyBcInB4XCIpLCBUKClcbiAgICAgIH0sXG4gICAgICByZW5kZXJTbGlkZTogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnBhcmFtcy52aXJ0dWFsO1xuICAgICAgICBpZiAoaS5jYWNoZSAmJiB0aGlzLnZpcnR1YWwuY2FjaGVbdF0pIHJldHVybiB0aGlzLnZpcnR1YWwuY2FjaGVbdF07XG4gICAgICAgIHZhciBzID0gaS5yZW5kZXJTbGlkZSA/IG0oaS5yZW5kZXJTbGlkZS5jYWxsKHRoaXMsIGUsIHQpKSA6IG0oJzxkaXYgY2xhc3M9XCInICsgdGhpcy5wYXJhbXMuc2xpZGVDbGFzcyArICdcIiBkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyB0ICsgJ1wiPicgKyBlICsgXCI8L2Rpdj5cIik7XG4gICAgICAgIHJldHVybiBzLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSB8fCBzLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiLCB0KSwgaS5jYWNoZSAmJiAodGhpcy52aXJ0dWFsLmNhY2hlW3RdID0gcyksIHNcbiAgICAgIH0sXG4gICAgICBhcHBlbmRTbGlkZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgJiYgXCJsZW5ndGhcIiBpbiBlKVxuICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgZS5sZW5ndGg7IHQgKz0gMSkgZVt0XSAmJiB0aGlzLnZpcnR1YWwuc2xpZGVzLnB1c2goZVt0XSk7XG4gICAgICAgIGVsc2UgdGhpcy52aXJ0dWFsLnNsaWRlcy5wdXNoKGUpO1xuICAgICAgICB0aGlzLnZpcnR1YWwudXBkYXRlKCEwKVxuICAgICAgfSxcbiAgICAgIHByZXBlbmRTbGlkZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmFjdGl2ZUluZGV4LFxuICAgICAgICAgIGkgPSB0ICsgMSxcbiAgICAgICAgICBzID0gMTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcbiAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGUubGVuZ3RoOyBhICs9IDEpIGVbYV0gJiYgdGhpcy52aXJ0dWFsLnNsaWRlcy51bnNoaWZ0KGVbYV0pO1xuICAgICAgICAgIGkgPSB0ICsgZS5sZW5ndGgsIHMgPSBlLmxlbmd0aFxuICAgICAgICB9IGVsc2UgdGhpcy52aXJ0dWFsLnNsaWRlcy51bnNoaWZ0KGUpO1xuICAgICAgICBpZiAodGhpcy5wYXJhbXMudmlydHVhbC5jYWNoZSkge1xuICAgICAgICAgIHZhciByID0gdGhpcy52aXJ0dWFsLmNhY2hlLFxuICAgICAgICAgICAgbiA9IHt9O1xuICAgICAgICAgIE9iamVjdC5rZXlzKHIpLmZvckVhY2goKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHJbZV0sXG4gICAgICAgICAgICAgIGkgPSB0LmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKTtcbiAgICAgICAgICAgIGkgJiYgdC5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIiwgcGFyc2VJbnQoaSwgMTApICsgMSksIG5bcGFyc2VJbnQoZSwgMTApICsgc10gPSB0XG4gICAgICAgICAgfSkpLCB0aGlzLnZpcnR1YWwuY2FjaGUgPSBuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aXJ0dWFsLnVwZGF0ZSghMCksIHRoaXMuc2xpZGVUbyhpLCAwKVxuICAgICAgfSxcbiAgICAgIHJlbW92ZVNsaWRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAobnVsbCAhPSBlKSB7XG4gICAgICAgICAgdmFyIHQgPSB0aGlzLmFjdGl2ZUluZGV4O1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpKVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHRoaXMudmlydHVhbC5zbGlkZXMuc3BsaWNlKGVbaV0sIDEpLCB0aGlzLnBhcmFtcy52aXJ0dWFsLmNhY2hlICYmIGRlbGV0ZSB0aGlzLnZpcnR1YWwuY2FjaGVbZVtpXV0sIGVbaV0gPCB0ICYmICh0IC09IDEpLCB0ID0gTWF0aC5tYXgodCwgMCk7XG4gICAgICAgICAgZWxzZSB0aGlzLnZpcnR1YWwuc2xpZGVzLnNwbGljZShlLCAxKSwgdGhpcy5wYXJhbXMudmlydHVhbC5jYWNoZSAmJiBkZWxldGUgdGhpcy52aXJ0dWFsLmNhY2hlW2VdLCBlIDwgdCAmJiAodCAtPSAxKSwgdCA9IE1hdGgubWF4KHQsIDApO1xuICAgICAgICAgIHRoaXMudmlydHVhbC51cGRhdGUoITApLCB0aGlzLnNsaWRlVG8odCwgMClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlbW92ZUFsbFNsaWRlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnZpcnR1YWwuc2xpZGVzID0gW10sIHRoaXMucGFyYW1zLnZpcnR1YWwuY2FjaGUgJiYgKHRoaXMudmlydHVhbC5jYWNoZSA9IHt9KSwgdGhpcy52aXJ0dWFsLnVwZGF0ZSghMCksIHRoaXMuc2xpZGVUbygwLCAwKVxuICAgICAgfVxuICAgIH0sXG4gICAgcSA9IHtcbiAgICAgIG5hbWU6IFwidmlydHVhbFwiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHZpcnR1YWw6IHtcbiAgICAgICAgICBlbmFibGVkOiAhMSxcbiAgICAgICAgICBzbGlkZXM6IFtdLFxuICAgICAgICAgIGNhY2hlOiAhMCxcbiAgICAgICAgICByZW5kZXJTbGlkZTogbnVsbCxcbiAgICAgICAgICByZW5kZXJFeHRlcm5hbDogbnVsbCxcbiAgICAgICAgICByZW5kZXJFeHRlcm5hbFVwZGF0ZTogITAsXG4gICAgICAgICAgYWRkU2xpZGVzQmVmb3JlOiAwLFxuICAgICAgICAgIGFkZFNsaWRlc0FmdGVyOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTSh0aGlzLCB7XG4gICAgICAgICAgdmlydHVhbDogdCh0KHt9LCBSKSwge30sIHtcbiAgICAgICAgICAgIHNsaWRlczogdGhpcy5wYXJhbXMudmlydHVhbC5zbGlkZXMsXG4gICAgICAgICAgICBjYWNoZToge31cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGUucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgICAgICAgICAgZS5jbGFzc05hbWVzLnB1c2goZS5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwidmlydHVhbFwiKTtcbiAgICAgICAgICAgIHZhciB0ID0ge1xuICAgICAgICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiAhMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFMoZS5wYXJhbXMsIHQpLCBTKGUub3JpZ2luYWxQYXJhbXMsIHQpLCBlLnBhcmFtcy5pbml0aWFsU2xpZGUgfHwgZS52aXJ0dWFsLnVwZGF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wYXJhbXMudmlydHVhbC5lbmFibGVkICYmIGUudmlydHVhbC51cGRhdGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBqID0ge1xuICAgICAgaGFuZGxlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IGwoKSxcbiAgICAgICAgICBpID0gcigpLFxuICAgICAgICAgIHMgPSB0aGlzLnJ0bFRyYW5zbGF0ZSxcbiAgICAgICAgICBhID0gZTtcbiAgICAgICAgYS5vcmlnaW5hbEV2ZW50ICYmIChhID0gYS5vcmlnaW5hbEV2ZW50KTtcbiAgICAgICAgdmFyIG4gPSBhLmtleUNvZGUgfHwgYS5jaGFyQ29kZSxcbiAgICAgICAgICBvID0gdGhpcy5wYXJhbXMua2V5Ym9hcmQucGFnZVVwRG93bixcbiAgICAgICAgICBkID0gbyAmJiAzMyA9PT0gbixcbiAgICAgICAgICBoID0gbyAmJiAzNCA9PT0gbixcbiAgICAgICAgICBwID0gMzcgPT09IG4sXG4gICAgICAgICAgdSA9IDM5ID09PSBuLFxuICAgICAgICAgIGMgPSAzOCA9PT0gbixcbiAgICAgICAgICB2ID0gNDAgPT09IG47XG4gICAgICAgIGlmICghdGhpcy5hbGxvd1NsaWRlTmV4dCAmJiAodGhpcy5pc0hvcml6b250YWwoKSAmJiB1IHx8IHRoaXMuaXNWZXJ0aWNhbCgpICYmIHYgfHwgaCkpIHJldHVybiAhMTtcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93U2xpZGVQcmV2ICYmICh0aGlzLmlzSG9yaXpvbnRhbCgpICYmIHAgfHwgdGhpcy5pc1ZlcnRpY2FsKCkgJiYgYyB8fCBkKSkgcmV0dXJuICExO1xuICAgICAgICBpZiAoIShhLnNoaWZ0S2V5IHx8IGEuYWx0S2V5IHx8IGEuY3RybEtleSB8fCBhLm1ldGFLZXkgfHwgaS5hY3RpdmVFbGVtZW50ICYmIGkuYWN0aXZlRWxlbWVudC5ub2RlTmFtZSAmJiAoXCJpbnB1dFwiID09PSBpLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSB8fCBcInRleHRhcmVhXCIgPT09IGkuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSkpIHtcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbXMua2V5Ym9hcmQub25seUluVmlld3BvcnQgJiYgKGQgfHwgaCB8fCBwIHx8IHUgfHwgYyB8fCB2KSkge1xuICAgICAgICAgICAgdmFyIGYgPSAhMTtcbiAgICAgICAgICAgIGlmICh0aGlzLiRlbC5wYXJlbnRzKFwiLlwiICsgdGhpcy5wYXJhbXMuc2xpZGVDbGFzcykubGVuZ3RoID4gMCAmJiAwID09PSB0aGlzLiRlbC5wYXJlbnRzKFwiLlwiICsgdGhpcy5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgbSA9IHQuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgICAgZyA9IHQuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAgIHcgPSB0aGlzLiRlbC5vZmZzZXQoKTtcbiAgICAgICAgICAgIHMgJiYgKHcubGVmdCAtPSB0aGlzLiRlbFswXS5zY3JvbGxMZWZ0KTtcbiAgICAgICAgICAgIGZvciAodmFyIGIgPSBbXG4gICAgICAgICAgICAgICAgW3cubGVmdCwgdy50b3BdLFxuICAgICAgICAgICAgICAgIFt3LmxlZnQgKyB0aGlzLndpZHRoLCB3LnRvcF0sXG4gICAgICAgICAgICAgICAgW3cubGVmdCwgdy50b3AgKyB0aGlzLmhlaWdodF0sXG4gICAgICAgICAgICAgICAgW3cubGVmdCArIHRoaXMud2lkdGgsIHcudG9wICsgdGhpcy5oZWlnaHRdXG4gICAgICAgICAgICAgIF0sIHkgPSAwOyB5IDwgYi5sZW5ndGg7IHkgKz0gMSkge1xuICAgICAgICAgICAgICB2YXIgRSA9IGJbeV07XG4gICAgICAgICAgICAgIEVbMF0gPj0gMCAmJiBFWzBdIDw9IG0gJiYgRVsxXSA+PSAwICYmIEVbMV0gPD0gZyAmJiAoZiA9ICEwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFmKSByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5pc0hvcml6b250YWwoKSA/ICgoZCB8fCBoIHx8IHAgfHwgdSkgJiYgKGEucHJldmVudERlZmF1bHQgPyBhLnByZXZlbnREZWZhdWx0KCkgOiBhLnJldHVyblZhbHVlID0gITEpLCAoKGggfHwgdSkgJiYgIXMgfHwgKGQgfHwgcCkgJiYgcykgJiYgdGhpcy5zbGlkZU5leHQoKSwgKChkIHx8IHApICYmICFzIHx8IChoIHx8IHUpICYmIHMpICYmIHRoaXMuc2xpZGVQcmV2KCkpIDogKChkIHx8IGggfHwgYyB8fCB2KSAmJiAoYS5wcmV2ZW50RGVmYXVsdCA/IGEucHJldmVudERlZmF1bHQoKSA6IGEucmV0dXJuVmFsdWUgPSAhMSksIChoIHx8IHYpICYmIHRoaXMuc2xpZGVOZXh0KCksIChkIHx8IGMpICYmIHRoaXMuc2xpZGVQcmV2KCkpLCB0aGlzLmVtaXQoXCJrZXlQcmVzc1wiLCBuKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZW5hYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gcigpO1xuICAgICAgICB0aGlzLmtleWJvYXJkLmVuYWJsZWQgfHwgKG0oZSkub24oXCJrZXlkb3duXCIsIHRoaXMua2V5Ym9hcmQuaGFuZGxlKSwgdGhpcy5rZXlib2FyZC5lbmFibGVkID0gITApXG4gICAgICB9LFxuICAgICAgZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHIoKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZC5lbmFibGVkICYmIChtKGUpLm9mZihcImtleWRvd25cIiwgdGhpcy5rZXlib2FyZC5oYW5kbGUpLCB0aGlzLmtleWJvYXJkLmVuYWJsZWQgPSAhMSlcbiAgICAgIH1cbiAgICB9LFxuICAgIF8gPSB7XG4gICAgICBuYW1lOiBcImtleWJvYXJkXCIsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAga2V5Ym9hcmQ6IHtcbiAgICAgICAgICBlbmFibGVkOiAhMSxcbiAgICAgICAgICBvbmx5SW5WaWV3cG9ydDogITAsXG4gICAgICAgICAgcGFnZVVwRG93bjogITBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBNKHRoaXMsIHtcbiAgICAgICAgICBrZXlib2FyZDogdCh7XG4gICAgICAgICAgICBlbmFibGVkOiAhMVxuICAgICAgICAgIH0sIGopXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnBhcmFtcy5rZXlib2FyZC5lbmFibGVkICYmIGUua2V5Ym9hcmQuZW5hYmxlKClcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLmtleWJvYXJkLmVuYWJsZWQgJiYgZS5rZXlib2FyZC5kaXNhYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIHZhciBVID0ge1xuICAgICAgbGFzdFNjcm9sbFRpbWU6IHgoKSxcbiAgICAgIGxhc3RFdmVudEJlZm9yZVNuYXA6IHZvaWQgMCxcbiAgICAgIHJlY2VudFdoZWVsRXZlbnRzOiBbXSxcbiAgICAgIGV2ZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsKCkubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiZmlyZWZveFwiKSA+IC0xID8gXCJET01Nb3VzZVNjcm9sbFwiIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBlID0gcigpLFxuICAgICAgICAgICAgdCA9IFwib253aGVlbFwiIGluIGU7XG4gICAgICAgICAgaWYgKCF0KSB7XG4gICAgICAgICAgICB2YXIgaSA9IGUuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGkuc2V0QXR0cmlidXRlKFwib253aGVlbFwiLCBcInJldHVybjtcIiksIHQgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGkub253aGVlbFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gIXQgJiYgZS5pbXBsZW1lbnRhdGlvbiAmJiBlLmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUgJiYgITAgIT09IGUuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZShcIlwiLCBcIlwiKSAmJiAodCA9IGUuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZShcIkV2ZW50cy53aGVlbFwiLCBcIjMuMFwiKSksIHRcbiAgICAgICAgfSgpID8gXCJ3aGVlbFwiIDogXCJtb3VzZXdoZWVsXCJcbiAgICAgIH0sXG4gICAgICBub3JtYWxpemU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0ID0gMCxcbiAgICAgICAgICBpID0gMCxcbiAgICAgICAgICBzID0gMCxcbiAgICAgICAgICBhID0gMDtcbiAgICAgICAgcmV0dXJuIFwiZGV0YWlsXCIgaW4gZSAmJiAoaSA9IGUuZGV0YWlsKSwgXCJ3aGVlbERlbHRhXCIgaW4gZSAmJiAoaSA9IC1lLndoZWVsRGVsdGEgLyAxMjApLCBcIndoZWVsRGVsdGFZXCIgaW4gZSAmJiAoaSA9IC1lLndoZWVsRGVsdGFZIC8gMTIwKSwgXCJ3aGVlbERlbHRhWFwiIGluIGUgJiYgKHQgPSAtZS53aGVlbERlbHRhWCAvIDEyMCksIFwiYXhpc1wiIGluIGUgJiYgZS5heGlzID09PSBlLkhPUklaT05UQUxfQVhJUyAmJiAodCA9IGksIGkgPSAwKSwgcyA9IDEwICogdCwgYSA9IDEwICogaSwgXCJkZWx0YVlcIiBpbiBlICYmIChhID0gZS5kZWx0YVkpLCBcImRlbHRhWFwiIGluIGUgJiYgKHMgPSBlLmRlbHRhWCksIGUuc2hpZnRLZXkgJiYgIXMgJiYgKHMgPSBhLCBhID0gMCksIChzIHx8IGEpICYmIGUuZGVsdGFNb2RlICYmICgxID09PSBlLmRlbHRhTW9kZSA/IChzICo9IDQwLCBhICo9IDQwKSA6IChzICo9IDgwMCwgYSAqPSA4MDApKSwgcyAmJiAhdCAmJiAodCA9IHMgPCAxID8gLTEgOiAxKSwgYSAmJiAhaSAmJiAoaSA9IGEgPCAxID8gLTEgOiAxKSwge1xuICAgICAgICAgIHNwaW5YOiB0LFxuICAgICAgICAgIHNwaW5ZOiBpLFxuICAgICAgICAgIHBpeGVsWDogcyxcbiAgICAgICAgICBwaXhlbFk6IGFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhhbmRsZU1vdXNlRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tb3VzZUVudGVyZWQgPSAhMFxuICAgICAgfSxcbiAgICAgIGhhbmRsZU1vdXNlTGVhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tb3VzZUVudGVyZWQgPSAhMVxuICAgICAgfSxcbiAgICAgIGhhbmRsZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSBlLFxuICAgICAgICAgIGkgPSB0aGlzLFxuICAgICAgICAgIHMgPSBpLnBhcmFtcy5tb3VzZXdoZWVsO1xuICAgICAgICBpLnBhcmFtcy5jc3NNb2RlICYmIHQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGEgPSBpLiRlbDtcbiAgICAgICAgaWYgKFwiY29udGFpbmVyXCIgIT09IGkucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2V0ICYmIChhID0gbShpLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdldCkpLCAhaS5tb3VzZUVudGVyZWQgJiYgIWFbMF0uY29udGFpbnModC50YXJnZXQpICYmICFzLnJlbGVhc2VPbkVkZ2VzKSByZXR1cm4gITA7XG4gICAgICAgIHQub3JpZ2luYWxFdmVudCAmJiAodCA9IHQub3JpZ2luYWxFdmVudCk7XG4gICAgICAgIHZhciByID0gMCxcbiAgICAgICAgICBuID0gaS5ydGxUcmFuc2xhdGUgPyAtMSA6IDEsXG4gICAgICAgICAgbCA9IFUubm9ybWFsaXplKHQpO1xuICAgICAgICBpZiAocy5mb3JjZVRvQXhpcylcbiAgICAgICAgICBpZiAoaS5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgaWYgKCEoTWF0aC5hYnMobC5waXhlbFgpID4gTWF0aC5hYnMobC5waXhlbFkpKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgciA9IC1sLnBpeGVsWCAqIG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEoTWF0aC5hYnMobC5waXhlbFkpID4gTWF0aC5hYnMobC5waXhlbFgpKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgciA9IC1sLnBpeGVsWVxuICAgICAgICAgIH1cbiAgICAgICAgZWxzZSByID0gTWF0aC5hYnMobC5waXhlbFgpID4gTWF0aC5hYnMobC5waXhlbFkpID8gLWwucGl4ZWxYICogbiA6IC1sLnBpeGVsWTtcbiAgICAgICAgaWYgKDAgPT09IHIpIHJldHVybiAhMDtcbiAgICAgICAgaWYgKHMuaW52ZXJ0ICYmIChyID0gLXIpLCBpLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICAgIHZhciBvID0ge1xuICAgICAgICAgICAgICB0aW1lOiB4KCksXG4gICAgICAgICAgICAgIGRlbHRhOiBNYXRoLmFicyhyKSxcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBNYXRoLnNpZ24ocilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkID0gaS5tb3VzZXdoZWVsLmxhc3RFdmVudEJlZm9yZVNuYXAsXG4gICAgICAgICAgICBoID0gZCAmJiBvLnRpbWUgPCBkLnRpbWUgKyA1MDAgJiYgby5kZWx0YSA8PSBkLmRlbHRhICYmIG8uZGlyZWN0aW9uID09PSBkLmRpcmVjdGlvbjtcbiAgICAgICAgICBpZiAoIWgpIHtcbiAgICAgICAgICAgIGkubW91c2V3aGVlbC5sYXN0RXZlbnRCZWZvcmVTbmFwID0gdm9pZCAwLCBpLnBhcmFtcy5sb29wICYmIGkubG9vcEZpeCgpO1xuICAgICAgICAgICAgdmFyIHAgPSBpLmdldFRyYW5zbGF0ZSgpICsgciAqIHMuc2Vuc2l0aXZpdHksXG4gICAgICAgICAgICAgIHUgPSBpLmlzQmVnaW5uaW5nLFxuICAgICAgICAgICAgICBjID0gaS5pc0VuZDtcbiAgICAgICAgICAgIGlmIChwID49IGkubWluVHJhbnNsYXRlKCkgJiYgKHAgPSBpLm1pblRyYW5zbGF0ZSgpKSwgcCA8PSBpLm1heFRyYW5zbGF0ZSgpICYmIChwID0gaS5tYXhUcmFuc2xhdGUoKSksIGkuc2V0VHJhbnNpdGlvbigwKSwgaS5zZXRUcmFuc2xhdGUocCksIGkudXBkYXRlUHJvZ3Jlc3MoKSwgaS51cGRhdGVBY3RpdmVJbmRleCgpLCBpLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSwgKCF1ICYmIGkuaXNCZWdpbm5pbmcgfHwgIWMgJiYgaS5pc0VuZCkgJiYgaS51cGRhdGVTbGlkZXNDbGFzc2VzKCksIGkucGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dChpLm1vdXNld2hlZWwudGltZW91dCksIGkubW91c2V3aGVlbC50aW1lb3V0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICB2YXIgdiA9IGkubW91c2V3aGVlbC5yZWNlbnRXaGVlbEV2ZW50cztcbiAgICAgICAgICAgICAgdi5sZW5ndGggPj0gMTUgJiYgdi5zaGlmdCgpO1xuICAgICAgICAgICAgICB2YXIgZiA9IHYubGVuZ3RoID8gdlt2Lmxlbmd0aCAtIDFdIDogdm9pZCAwLFxuICAgICAgICAgICAgICAgIGcgPSB2WzBdO1xuICAgICAgICAgICAgICBpZiAodi5wdXNoKG8pLCBmICYmIChvLmRlbHRhID4gZi5kZWx0YSB8fCBvLmRpcmVjdGlvbiAhPT0gZi5kaXJlY3Rpb24pKSB2LnNwbGljZSgwKTtcbiAgICAgICAgICAgICAgZWxzZSBpZiAodi5sZW5ndGggPj0gMTUgJiYgby50aW1lIC0gZy50aW1lIDwgNTAwICYmIGcuZGVsdGEgLSBvLmRlbHRhID49IDEgJiYgby5kZWx0YSA8PSA2KSB7XG4gICAgICAgICAgICAgICAgdmFyIHcgPSByID4gMCA/IC44IDogLjI7XG4gICAgICAgICAgICAgICAgaS5tb3VzZXdoZWVsLmxhc3RFdmVudEJlZm9yZVNuYXAgPSBvLCB2LnNwbGljZSgwKSwgaS5tb3VzZXdoZWVsLnRpbWVvdXQgPSBFKChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBpLnNsaWRlVG9DbG9zZXN0KGkucGFyYW1zLnNwZWVkLCAhMCwgdm9pZCAwLCB3KVxuICAgICAgICAgICAgICAgIH0pLCAwKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGkubW91c2V3aGVlbC50aW1lb3V0IHx8IChpLm1vdXNld2hlZWwudGltZW91dCA9IEUoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpLm1vdXNld2hlZWwubGFzdEV2ZW50QmVmb3JlU25hcCA9IG8sIHYuc3BsaWNlKDApLCBpLnNsaWRlVG9DbG9zZXN0KGkucGFyYW1zLnNwZWVkLCAhMCwgdm9pZCAwLCAuNSlcbiAgICAgICAgICAgICAgfSksIDUwMCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaCB8fCBpLmVtaXQoXCJzY3JvbGxcIiwgdCksIGkucGFyYW1zLmF1dG9wbGF5ICYmIGkucGFyYW1zLmF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb24gJiYgaS5hdXRvcGxheS5zdG9wKCksIHAgPT09IGkubWluVHJhbnNsYXRlKCkgfHwgcCA9PT0gaS5tYXhUcmFuc2xhdGUoKSkgcmV0dXJuICEwXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBiID0ge1xuICAgICAgICAgICAgICB0aW1lOiB4KCksXG4gICAgICAgICAgICAgIGRlbHRhOiBNYXRoLmFicyhyKSxcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBNYXRoLnNpZ24ociksXG4gICAgICAgICAgICAgIHJhdzogZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHkgPSBpLm1vdXNld2hlZWwucmVjZW50V2hlZWxFdmVudHM7XG4gICAgICAgICAgeS5sZW5ndGggPj0gMiAmJiB5LnNoaWZ0KCk7XG4gICAgICAgICAgdmFyIFQgPSB5Lmxlbmd0aCA/IHlbeS5sZW5ndGggLSAxXSA6IHZvaWQgMDtcbiAgICAgICAgICBpZiAoeS5wdXNoKGIpLCBUID8gKGIuZGlyZWN0aW9uICE9PSBULmRpcmVjdGlvbiB8fCBiLmRlbHRhID4gVC5kZWx0YSB8fCBiLnRpbWUgPiBULnRpbWUgKyAxNTApICYmIGkubW91c2V3aGVlbC5hbmltYXRlU2xpZGVyKGIpIDogaS5tb3VzZXdoZWVsLmFuaW1hdGVTbGlkZXIoYiksIGkubW91c2V3aGVlbC5yZWxlYXNlU2Nyb2xsKGIpKSByZXR1cm4gITBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdC5wcmV2ZW50RGVmYXVsdCA/IHQucHJldmVudERlZmF1bHQoKSA6IHQucmV0dXJuVmFsdWUgPSAhMSwgITFcbiAgICAgIH0sXG4gICAgICBhbmltYXRlU2xpZGVyOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IGwoKTtcbiAgICAgICAgcmV0dXJuICEodGhpcy5wYXJhbXMubW91c2V3aGVlbC50aHJlc2hvbGREZWx0YSAmJiBlLmRlbHRhIDwgdGhpcy5wYXJhbXMubW91c2V3aGVlbC50aHJlc2hvbGREZWx0YSkgJiYgKCEodGhpcy5wYXJhbXMubW91c2V3aGVlbC50aHJlc2hvbGRUaW1lICYmIHgoKSAtIHRoaXMubW91c2V3aGVlbC5sYXN0U2Nyb2xsVGltZSA8IHRoaXMucGFyYW1zLm1vdXNld2hlZWwudGhyZXNob2xkVGltZSkgJiYgKGUuZGVsdGEgPj0gNiAmJiB4KCkgLSB0aGlzLm1vdXNld2hlZWwubGFzdFNjcm9sbFRpbWUgPCA2MCB8fCAoZS5kaXJlY3Rpb24gPCAwID8gdGhpcy5pc0VuZCAmJiAhdGhpcy5wYXJhbXMubG9vcCB8fCB0aGlzLmFuaW1hdGluZyB8fCAodGhpcy5zbGlkZU5leHQoKSwgdGhpcy5lbWl0KFwic2Nyb2xsXCIsIGUucmF3KSkgOiB0aGlzLmlzQmVnaW5uaW5nICYmICF0aGlzLnBhcmFtcy5sb29wIHx8IHRoaXMuYW5pbWF0aW5nIHx8ICh0aGlzLnNsaWRlUHJldigpLCB0aGlzLmVtaXQoXCJzY3JvbGxcIiwgZS5yYXcpKSwgdGhpcy5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lID0gKG5ldyB0LkRhdGUpLmdldFRpbWUoKSwgITEpKSlcbiAgICAgIH0sXG4gICAgICByZWxlYXNlU2Nyb2xsOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IHRoaXMucGFyYW1zLm1vdXNld2hlZWw7XG4gICAgICAgIGlmIChlLmRpcmVjdGlvbiA8IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5pc0VuZCAmJiAhdGhpcy5wYXJhbXMubG9vcCAmJiB0LnJlbGVhc2VPbkVkZ2VzKSByZXR1cm4gITBcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQmVnaW5uaW5nICYmICF0aGlzLnBhcmFtcy5sb29wICYmIHQucmVsZWFzZU9uRWRnZXMpIHJldHVybiAhMDtcbiAgICAgICAgcmV0dXJuICExXG4gICAgICB9LFxuICAgICAgZW5hYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gVS5ldmVudCgpO1xuICAgICAgICBpZiAodGhpcy5wYXJhbXMuY3NzTW9kZSkgcmV0dXJuIHRoaXMud3JhcHBlckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSwgdGhpcy5tb3VzZXdoZWVsLmhhbmRsZSksICEwO1xuICAgICAgICBpZiAoIWUpIHJldHVybiAhMTtcbiAgICAgICAgaWYgKHRoaXMubW91c2V3aGVlbC5lbmFibGVkKSByZXR1cm4gITE7XG4gICAgICAgIHZhciB0ID0gdGhpcy4kZWw7XG4gICAgICAgIHJldHVybiBcImNvbnRhaW5lclwiICE9PSB0aGlzLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdldCAmJiAodCA9IG0odGhpcy5wYXJhbXMubW91c2V3aGVlbC5ldmVudHNUYXJnZXQpKSwgdC5vbihcIm1vdXNlZW50ZXJcIiwgdGhpcy5tb3VzZXdoZWVsLmhhbmRsZU1vdXNlRW50ZXIpLCB0Lm9uKFwibW91c2VsZWF2ZVwiLCB0aGlzLm1vdXNld2hlZWwuaGFuZGxlTW91c2VMZWF2ZSksIHQub24oZSwgdGhpcy5tb3VzZXdoZWVsLmhhbmRsZSksIHRoaXMubW91c2V3aGVlbC5lbmFibGVkID0gITAsICEwXG4gICAgICB9LFxuICAgICAgZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IFUuZXZlbnQoKTtcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLmNzc01vZGUpIHJldHVybiB0aGlzLndyYXBwZXJFbC5hZGRFdmVudExpc3RlbmVyKGUsIHRoaXMubW91c2V3aGVlbC5oYW5kbGUpLCAhMDtcbiAgICAgICAgaWYgKCFlKSByZXR1cm4gITE7XG4gICAgICAgIGlmICghdGhpcy5tb3VzZXdoZWVsLmVuYWJsZWQpIHJldHVybiAhMTtcbiAgICAgICAgdmFyIHQgPSB0aGlzLiRlbDtcbiAgICAgICAgcmV0dXJuIFwiY29udGFpbmVyXCIgIT09IHRoaXMucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2V0ICYmICh0ID0gbSh0aGlzLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdldCkpLCB0Lm9mZihlLCB0aGlzLm1vdXNld2hlZWwuaGFuZGxlKSwgdGhpcy5tb3VzZXdoZWVsLmVuYWJsZWQgPSAhMSwgITBcbiAgICAgIH1cbiAgICB9LFxuICAgIEsgPSB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLnBhcmFtcy5uYXZpZ2F0aW9uO1xuICAgICAgICBpZiAoIXRoaXMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICB2YXIgdCA9IHRoaXMubmF2aWdhdGlvbixcbiAgICAgICAgICAgIGkgPSB0LiRuZXh0RWwsXG4gICAgICAgICAgICBzID0gdC4kcHJldkVsO1xuICAgICAgICAgIHMgJiYgcy5sZW5ndGggPiAwICYmICh0aGlzLmlzQmVnaW5uaW5nID8gcy5hZGRDbGFzcyhlLmRpc2FibGVkQ2xhc3MpIDogcy5yZW1vdmVDbGFzcyhlLmRpc2FibGVkQ2xhc3MpLCBzW3RoaXMucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgdGhpcy5pc0xvY2tlZCA/IFwiYWRkQ2xhc3NcIiA6IFwicmVtb3ZlQ2xhc3NcIl0oZS5sb2NrQ2xhc3MpKSwgaSAmJiBpLmxlbmd0aCA+IDAgJiYgKHRoaXMuaXNFbmQgPyBpLmFkZENsYXNzKGUuZGlzYWJsZWRDbGFzcykgOiBpLnJlbW92ZUNsYXNzKGUuZGlzYWJsZWRDbGFzcyksIGlbdGhpcy5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiB0aGlzLmlzTG9ja2VkID8gXCJhZGRDbGFzc1wiIDogXCJyZW1vdmVDbGFzc1wiXShlLmxvY2tDbGFzcykpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblByZXZDbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpLCB0aGlzLmlzQmVnaW5uaW5nICYmICF0aGlzLnBhcmFtcy5sb29wIHx8IHRoaXMuc2xpZGVQcmV2KClcbiAgICAgIH0sXG4gICAgICBvbk5leHRDbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpLCB0aGlzLmlzRW5kICYmICF0aGlzLnBhcmFtcy5sb29wIHx8IHRoaXMuc2xpZGVOZXh0KClcbiAgICAgIH0sXG4gICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlLCB0LCBpID0gdGhpcy5wYXJhbXMubmF2aWdhdGlvbjtcbiAgICAgICAgKGkubmV4dEVsIHx8IGkucHJldkVsKSAmJiAoaS5uZXh0RWwgJiYgKGUgPSBtKGkubmV4dEVsKSwgdGhpcy5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgaS5uZXh0RWwgJiYgZS5sZW5ndGggPiAxICYmIDEgPT09IHRoaXMuJGVsLmZpbmQoaS5uZXh0RWwpLmxlbmd0aCAmJiAoZSA9IHRoaXMuJGVsLmZpbmQoaS5uZXh0RWwpKSksIGkucHJldkVsICYmICh0ID0gbShpLnByZXZFbCksIHRoaXMucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIGkucHJldkVsICYmIHQubGVuZ3RoID4gMSAmJiAxID09PSB0aGlzLiRlbC5maW5kKGkucHJldkVsKS5sZW5ndGggJiYgKHQgPSB0aGlzLiRlbC5maW5kKGkucHJldkVsKSkpLCBlICYmIGUubGVuZ3RoID4gMCAmJiBlLm9uKFwiY2xpY2tcIiwgdGhpcy5uYXZpZ2F0aW9uLm9uTmV4dENsaWNrKSwgdCAmJiB0Lmxlbmd0aCA+IDAgJiYgdC5vbihcImNsaWNrXCIsIHRoaXMubmF2aWdhdGlvbi5vblByZXZDbGljayksIFModGhpcy5uYXZpZ2F0aW9uLCB7XG4gICAgICAgICAgJG5leHRFbDogZSxcbiAgICAgICAgICBuZXh0RWw6IGUgJiYgZVswXSxcbiAgICAgICAgICAkcHJldkVsOiB0LFxuICAgICAgICAgIHByZXZFbDogdCAmJiB0WzBdXG4gICAgICAgIH0pKVxuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLm5hdmlnYXRpb24sXG4gICAgICAgICAgdCA9IGUuJG5leHRFbCxcbiAgICAgICAgICBpID0gZS4kcHJldkVsO1xuICAgICAgICB0ICYmIHQubGVuZ3RoICYmICh0Lm9mZihcImNsaWNrXCIsIHRoaXMubmF2aWdhdGlvbi5vbk5leHRDbGljayksIHQucmVtb3ZlQ2xhc3ModGhpcy5wYXJhbXMubmF2aWdhdGlvbi5kaXNhYmxlZENsYXNzKSksIGkgJiYgaS5sZW5ndGggJiYgKGkub2ZmKFwiY2xpY2tcIiwgdGhpcy5uYXZpZ2F0aW9uLm9uUHJldkNsaWNrKSwgaS5yZW1vdmVDbGFzcyh0aGlzLnBhcmFtcy5uYXZpZ2F0aW9uLmRpc2FibGVkQ2xhc3MpKVxuICAgICAgfVxuICAgIH0sXG4gICAgWiA9IHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMucnRsLFxuICAgICAgICAgIHQgPSB0aGlzLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgICAgICBpZiAodC5lbCAmJiB0aGlzLnBhZ2luYXRpb24uZWwgJiYgdGhpcy5wYWdpbmF0aW9uLiRlbCAmJiAwICE9PSB0aGlzLnBhZ2luYXRpb24uJGVsLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBpLCBzID0gdGhpcy52aXJ0dWFsICYmIHRoaXMucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHRoaXMudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogdGhpcy5zbGlkZXMubGVuZ3RoLFxuICAgICAgICAgICAgYSA9IHRoaXMucGFnaW5hdGlvbi4kZWwsXG4gICAgICAgICAgICByID0gdGhpcy5wYXJhbXMubG9vcCA/IE1hdGguY2VpbCgocyAtIDIgKiB0aGlzLmxvb3BlZFNsaWRlcykgLyB0aGlzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkgOiB0aGlzLnNuYXBHcmlkLmxlbmd0aDtcbiAgICAgICAgICBpZiAodGhpcy5wYXJhbXMubG9vcCA/ICgoaSA9IE1hdGguY2VpbCgodGhpcy5hY3RpdmVJbmRleCAtIHRoaXMubG9vcGVkU2xpZGVzKSAvIHRoaXMucGFyYW1zLnNsaWRlc1Blckdyb3VwKSkgPiBzIC0gMSAtIDIgKiB0aGlzLmxvb3BlZFNsaWRlcyAmJiAoaSAtPSBzIC0gMiAqIHRoaXMubG9vcGVkU2xpZGVzKSwgaSA+IHIgLSAxICYmIChpIC09IHIpLCBpIDwgMCAmJiBcImJ1bGxldHNcIiAhPT0gdGhpcy5wYXJhbXMucGFnaW5hdGlvblR5cGUgJiYgKGkgPSByICsgaSkpIDogaSA9IHZvaWQgMCAhPT0gdGhpcy5zbmFwSW5kZXggPyB0aGlzLnNuYXBJbmRleCA6IHRoaXMuYWN0aXZlSW5kZXggfHwgMCwgXCJidWxsZXRzXCIgPT09IHQudHlwZSAmJiB0aGlzLnBhZ2luYXRpb24uYnVsbGV0cyAmJiB0aGlzLnBhZ2luYXRpb24uYnVsbGV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgbiwgbCwgbywgZCA9IHRoaXMucGFnaW5hdGlvbi5idWxsZXRzO1xuICAgICAgICAgICAgaWYgKHQuZHluYW1pY0J1bGxldHMgJiYgKHRoaXMucGFnaW5hdGlvbi5idWxsZXRTaXplID0gZC5lcSgwKVt0aGlzLmlzSG9yaXpvbnRhbCgpID8gXCJvdXRlcldpZHRoXCIgOiBcIm91dGVySGVpZ2h0XCJdKCEwKSwgYS5jc3ModGhpcy5pc0hvcml6b250YWwoKSA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCIsIHRoaXMucGFnaW5hdGlvbi5idWxsZXRTaXplICogKHQuZHluYW1pY01haW5CdWxsZXRzICsgNCkgKyBcInB4XCIpLCB0LmR5bmFtaWNNYWluQnVsbGV0cyA+IDEgJiYgdm9pZCAwICE9PSB0aGlzLnByZXZpb3VzSW5kZXggJiYgKHRoaXMucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXggKz0gaSAtIHRoaXMucHJldmlvdXNJbmRleCwgdGhpcy5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA+IHQuZHluYW1pY01haW5CdWxsZXRzIC0gMSA/IHRoaXMucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXggPSB0LmR5bmFtaWNNYWluQnVsbGV0cyAtIDEgOiB0aGlzLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4IDwgMCAmJiAodGhpcy5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA9IDApKSwgbiA9IGkgLSB0aGlzLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4LCBvID0gKChsID0gbiArIChNYXRoLm1pbihkLmxlbmd0aCwgdC5keW5hbWljTWFpbkJ1bGxldHMpIC0gMSkpICsgbikgLyAyKSwgZC5yZW1vdmVDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzICsgXCIgXCIgKyB0LmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbmV4dCBcIiArIHQuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1uZXh0LW5leHQgXCIgKyB0LmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldiBcIiArIHQuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1wcmV2LXByZXYgXCIgKyB0LmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbWFpblwiKSwgYS5sZW5ndGggPiAxKSBkLmVhY2goKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHZhciBzID0gbShlKSxcbiAgICAgICAgICAgICAgICBhID0gcy5pbmRleCgpO1xuICAgICAgICAgICAgICBhID09PSBpICYmIHMuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcyksIHQuZHluYW1pY0J1bGxldHMgJiYgKGEgPj0gbiAmJiBhIDw9IGwgJiYgcy5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbWFpblwiKSwgYSA9PT0gbiAmJiBzLnByZXYoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldlwiKS5wcmV2KCkuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcyArIFwiLXByZXYtcHJldlwiKSwgYSA9PT0gbCAmJiBzLm5leHQoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbmV4dFwiKS5uZXh0KCkuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW5leHQtbmV4dFwiKSlcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgaCA9IGQuZXEoaSksXG4gICAgICAgICAgICAgICAgcCA9IGguaW5kZXgoKTtcbiAgICAgICAgICAgICAgaWYgKGguYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcyksIHQuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB1ID0gZC5lcShuKSwgYyA9IGQuZXEobCksIHYgPSBuOyB2IDw9IGw7IHYgKz0gMSkgZC5lcSh2KS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbWFpblwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbXMubG9vcClcbiAgICAgICAgICAgICAgICAgIGlmIChwID49IGQubGVuZ3RoIC0gdC5keW5hbWljTWFpbkJ1bGxldHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IHQuZHluYW1pY01haW5CdWxsZXRzOyBmID49IDA7IGYgLT0gMSkgZC5lcShkLmxlbmd0aCAtIGYpLmFkZENsYXNzKHQuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1tYWluXCIpO1xuICAgICAgICAgICAgICAgICAgICBkLmVxKGQubGVuZ3RoIC0gdC5keW5hbWljTWFpbkJ1bGxldHMgLSAxKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldlwiKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHUucHJldigpLmFkZENsYXNzKHQuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1wcmV2XCIpLnByZXYoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldi1wcmV2XCIpLCBjLm5leHQoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbmV4dFwiKS5uZXh0KCkuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW5leHQtbmV4dFwiKTtcbiAgICAgICAgICAgICAgICBlbHNlIHUucHJldigpLmFkZENsYXNzKHQuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1wcmV2XCIpLnByZXYoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldi1wcmV2XCIpLCBjLm5leHQoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbmV4dFwiKS5uZXh0KCkuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW5leHQtbmV4dFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodC5keW5hbWljQnVsbGV0cykge1xuICAgICAgICAgICAgICB2YXIgZyA9IE1hdGgubWluKGQubGVuZ3RoLCB0LmR5bmFtaWNNYWluQnVsbGV0cyArIDQpLFxuICAgICAgICAgICAgICAgIHcgPSAodGhpcy5wYWdpbmF0aW9uLmJ1bGxldFNpemUgKiBnIC0gdGhpcy5wYWdpbmF0aW9uLmJ1bGxldFNpemUpIC8gMiAtIG8gKiB0aGlzLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSxcbiAgICAgICAgICAgICAgICBiID0gZSA/IFwicmlnaHRcIiA6IFwibGVmdFwiO1xuICAgICAgICAgICAgICBkLmNzcyh0aGlzLmlzSG9yaXpvbnRhbCgpID8gYiA6IFwidG9wXCIsIHcgKyBcInB4XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcImZyYWN0aW9uXCIgPT09IHQudHlwZSAmJiAoYS5maW5kKFwiLlwiICsgdC5jdXJyZW50Q2xhc3MpLnRleHQodC5mb3JtYXRGcmFjdGlvbkN1cnJlbnQoaSArIDEpKSwgYS5maW5kKFwiLlwiICsgdC50b3RhbENsYXNzKS50ZXh0KHQuZm9ybWF0RnJhY3Rpb25Ub3RhbChyKSkpLCBcInByb2dyZXNzYmFyXCIgPT09IHQudHlwZSkge1xuICAgICAgICAgICAgdmFyIHk7XG4gICAgICAgICAgICB5ID0gdC5wcm9ncmVzc2Jhck9wcG9zaXRlID8gdGhpcy5pc0hvcml6b250YWwoKSA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiIDogdGhpcy5pc0hvcml6b250YWwoKSA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICAgICAgdmFyIEUgPSAoaSArIDEpIC8gcixcbiAgICAgICAgICAgICAgeCA9IDEsXG4gICAgICAgICAgICAgIFQgPSAxO1xuICAgICAgICAgICAgXCJob3Jpem9udGFsXCIgPT09IHkgPyB4ID0gRSA6IFQgPSBFLCBhLmZpbmQoXCIuXCIgKyB0LnByb2dyZXNzYmFyRmlsbENsYXNzKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGVYKFwiICsgeCArIFwiKSBzY2FsZVkoXCIgKyBUICsgXCIpXCIpLnRyYW5zaXRpb24odGhpcy5wYXJhbXMuc3BlZWQpXG4gICAgICAgICAgfVxuICAgICAgICAgIFwiY3VzdG9tXCIgPT09IHQudHlwZSAmJiB0LnJlbmRlckN1c3RvbSA/IChhLmh0bWwodC5yZW5kZXJDdXN0b20odGhpcywgaSArIDEsIHIpKSwgdGhpcy5lbWl0KFwicGFnaW5hdGlvblJlbmRlclwiLCBhWzBdKSkgOiB0aGlzLmVtaXQoXCJwYWdpbmF0aW9uVXBkYXRlXCIsIGFbMF0pLCBhW3RoaXMucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgdGhpcy5pc0xvY2tlZCA/IFwiYWRkQ2xhc3NcIiA6IFwicmVtb3ZlQ2xhc3NcIl0odC5sb2NrQ2xhc3MpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgICAgICBpZiAoZS5lbCAmJiB0aGlzLnBhZ2luYXRpb24uZWwgJiYgdGhpcy5wYWdpbmF0aW9uLiRlbCAmJiAwICE9PSB0aGlzLnBhZ2luYXRpb24uJGVsLmxlbmd0aCkge1xuICAgICAgICAgIHZhciB0ID0gdGhpcy52aXJ0dWFsICYmIHRoaXMucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHRoaXMudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogdGhpcy5zbGlkZXMubGVuZ3RoLFxuICAgICAgICAgICAgaSA9IHRoaXMucGFnaW5hdGlvbi4kZWwsXG4gICAgICAgICAgICBzID0gXCJcIjtcbiAgICAgICAgICBpZiAoXCJidWxsZXRzXCIgPT09IGUudHlwZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IHRoaXMucGFyYW1zLmxvb3AgPyBNYXRoLmNlaWwoKHQgLSAyICogdGhpcy5sb29wZWRTbGlkZXMpIC8gdGhpcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIDogdGhpcy5zbmFwR3JpZC5sZW5ndGgsIHIgPSAwOyByIDwgYTsgciArPSAxKSBlLnJlbmRlckJ1bGxldCA/IHMgKz0gZS5yZW5kZXJCdWxsZXQuY2FsbCh0aGlzLCByLCBlLmJ1bGxldENsYXNzKSA6IHMgKz0gXCI8XCIgKyBlLmJ1bGxldEVsZW1lbnQgKyAnIGNsYXNzPVwiJyArIGUuYnVsbGV0Q2xhc3MgKyAnXCI+PC8nICsgZS5idWxsZXRFbGVtZW50ICsgXCI+XCI7XG4gICAgICAgICAgICBpLmh0bWwocyksIHRoaXMucGFnaW5hdGlvbi5idWxsZXRzID0gaS5maW5kKFwiLlwiICsgZS5idWxsZXRDbGFzcylcbiAgICAgICAgICB9XG4gICAgICAgICAgXCJmcmFjdGlvblwiID09PSBlLnR5cGUgJiYgKHMgPSBlLnJlbmRlckZyYWN0aW9uID8gZS5yZW5kZXJGcmFjdGlvbi5jYWxsKHRoaXMsIGUuY3VycmVudENsYXNzLCBlLnRvdGFsQ2xhc3MpIDogJzxzcGFuIGNsYXNzPVwiJyArIGUuY3VycmVudENsYXNzICsgJ1wiPjwvc3Bhbj4gLyA8c3BhbiBjbGFzcz1cIicgKyBlLnRvdGFsQ2xhc3MgKyAnXCI+PC9zcGFuPicsIGkuaHRtbChzKSksIFwicHJvZ3Jlc3NiYXJcIiA9PT0gZS50eXBlICYmIChzID0gZS5yZW5kZXJQcm9ncmVzc2JhciA/IGUucmVuZGVyUHJvZ3Jlc3NiYXIuY2FsbCh0aGlzLCBlLnByb2dyZXNzYmFyRmlsbENsYXNzKSA6ICc8c3BhbiBjbGFzcz1cIicgKyBlLnByb2dyZXNzYmFyRmlsbENsYXNzICsgJ1wiPjwvc3Bhbj4nLCBpLmh0bWwocykpLCBcImN1c3RvbVwiICE9PSBlLnR5cGUgJiYgdGhpcy5lbWl0KFwicGFnaW5hdGlvblJlbmRlclwiLCB0aGlzLnBhZ2luYXRpb24uJGVsWzBdKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMsXG4gICAgICAgICAgdCA9IGUucGFyYW1zLnBhZ2luYXRpb247XG4gICAgICAgIGlmICh0LmVsKSB7XG4gICAgICAgICAgdmFyIGkgPSBtKHQuZWwpO1xuICAgICAgICAgIDAgIT09IGkubGVuZ3RoICYmIChlLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiBcInN0cmluZ1wiID09IHR5cGVvZiB0LmVsICYmIGkubGVuZ3RoID4gMSAmJiAoaSA9IGUuJGVsLmZpbmQodC5lbCkpLCBcImJ1bGxldHNcIiA9PT0gdC50eXBlICYmIHQuY2xpY2thYmxlICYmIGkuYWRkQ2xhc3ModC5jbGlja2FibGVDbGFzcyksIGkuYWRkQ2xhc3ModC5tb2RpZmllckNsYXNzICsgdC50eXBlKSwgXCJidWxsZXRzXCIgPT09IHQudHlwZSAmJiB0LmR5bmFtaWNCdWxsZXRzICYmIChpLmFkZENsYXNzKFwiXCIgKyB0Lm1vZGlmaWVyQ2xhc3MgKyB0LnR5cGUgKyBcIi1keW5hbWljXCIpLCBlLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ID0gMCwgdC5keW5hbWljTWFpbkJ1bGxldHMgPCAxICYmICh0LmR5bmFtaWNNYWluQnVsbGV0cyA9IDEpKSwgXCJwcm9ncmVzc2JhclwiID09PSB0LnR5cGUgJiYgdC5wcm9ncmVzc2Jhck9wcG9zaXRlICYmIGkuYWRkQ2xhc3ModC5wcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3MpLCB0LmNsaWNrYWJsZSAmJiBpLm9uKFwiY2xpY2tcIiwgXCIuXCIgKyB0LmJ1bGxldENsYXNzLCAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBpID0gbSh0aGlzKS5pbmRleCgpICogZS5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgICAgICAgICBlLnBhcmFtcy5sb29wICYmIChpICs9IGUubG9vcGVkU2xpZGVzKSwgZS5zbGlkZVRvKGkpXG4gICAgICAgICAgfSkpLCBTKGUucGFnaW5hdGlvbiwge1xuICAgICAgICAgICAgJGVsOiBpLFxuICAgICAgICAgICAgZWw6IGlbMF1cbiAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgICAgICBpZiAoZS5lbCAmJiB0aGlzLnBhZ2luYXRpb24uZWwgJiYgdGhpcy5wYWdpbmF0aW9uLiRlbCAmJiAwICE9PSB0aGlzLnBhZ2luYXRpb24uJGVsLmxlbmd0aCkge1xuICAgICAgICAgIHZhciB0ID0gdGhpcy5wYWdpbmF0aW9uLiRlbDtcbiAgICAgICAgICB0LnJlbW92ZUNsYXNzKGUuaGlkZGVuQ2xhc3MpLCB0LnJlbW92ZUNsYXNzKGUubW9kaWZpZXJDbGFzcyArIGUudHlwZSksIHRoaXMucGFnaW5hdGlvbi5idWxsZXRzICYmIHRoaXMucGFnaW5hdGlvbi5idWxsZXRzLnJlbW92ZUNsYXNzKGUuYnVsbGV0QWN0aXZlQ2xhc3MpLCBlLmNsaWNrYWJsZSAmJiB0Lm9mZihcImNsaWNrXCIsIFwiLlwiICsgZS5idWxsZXRDbGFzcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgSiA9IHtcbiAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJhbXMuc2Nyb2xsYmFyLmVsICYmIHRoaXMuc2Nyb2xsYmFyLmVsKSB7XG4gICAgICAgICAgdmFyIGUgPSB0aGlzLnNjcm9sbGJhcixcbiAgICAgICAgICAgIHQgPSB0aGlzLnJ0bFRyYW5zbGF0ZSxcbiAgICAgICAgICAgIGkgPSB0aGlzLnByb2dyZXNzLFxuICAgICAgICAgICAgcyA9IGUuZHJhZ1NpemUsXG4gICAgICAgICAgICBhID0gZS50cmFja1NpemUsXG4gICAgICAgICAgICByID0gZS4kZHJhZ0VsLFxuICAgICAgICAgICAgbiA9IGUuJGVsLFxuICAgICAgICAgICAgbCA9IHRoaXMucGFyYW1zLnNjcm9sbGJhcixcbiAgICAgICAgICAgIG8gPSBzLFxuICAgICAgICAgICAgZCA9IChhIC0gcykgKiBpO1xuICAgICAgICAgIHQgPyAoZCA9IC1kKSA+IDAgPyAobyA9IHMgLSBkLCBkID0gMCkgOiAtZCArIHMgPiBhICYmIChvID0gYSArIGQpIDogZCA8IDAgPyAobyA9IHMgKyBkLCBkID0gMCkgOiBkICsgcyA+IGEgJiYgKG8gPSBhIC0gZCksIHRoaXMuaXNIb3Jpem9udGFsKCkgPyAoci50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIiArIGQgKyBcInB4LCAwLCAwKVwiKSwgclswXS5zdHlsZS53aWR0aCA9IG8gKyBcInB4XCIpIDogKHIudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMHB4LCBcIiArIGQgKyBcInB4LCAwKVwiKSwgclswXS5zdHlsZS5oZWlnaHQgPSBvICsgXCJweFwiKSwgbC5oaWRlICYmIChjbGVhclRpbWVvdXQodGhpcy5zY3JvbGxiYXIudGltZW91dCksIG5bMF0uc3R5bGUub3BhY2l0eSA9IDEsIHRoaXMuc2Nyb2xsYmFyLnRpbWVvdXQgPSBzZXRUaW1lb3V0KChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBuWzBdLnN0eWxlLm9wYWNpdHkgPSAwLCBuLnRyYW5zaXRpb24oNDAwKVxuICAgICAgICAgIH0pLCAxZTMpKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuc2Nyb2xsYmFyLmVsICYmIHRoaXMuc2Nyb2xsYmFyLmVsICYmIHRoaXMuc2Nyb2xsYmFyLiRkcmFnRWwudHJhbnNpdGlvbihlKVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZVNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLnNjcm9sbGJhci5lbCAmJiB0aGlzLnNjcm9sbGJhci5lbCkge1xuICAgICAgICAgIHZhciBlID0gdGhpcy5zY3JvbGxiYXIsXG4gICAgICAgICAgICB0ID0gZS4kZHJhZ0VsLFxuICAgICAgICAgICAgaSA9IGUuJGVsO1xuICAgICAgICAgIHRbMF0uc3R5bGUud2lkdGggPSBcIlwiLCB0WzBdLnN0eWxlLmhlaWdodCA9IFwiXCI7XG4gICAgICAgICAgdmFyIHMsIGEgPSB0aGlzLmlzSG9yaXpvbnRhbCgpID8gaVswXS5vZmZzZXRXaWR0aCA6IGlbMF0ub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgciA9IHRoaXMuc2l6ZSAvIHRoaXMudmlydHVhbFNpemUsXG4gICAgICAgICAgICBuID0gciAqIChhIC8gdGhpcy5zaXplKTtcbiAgICAgICAgICBzID0gXCJhdXRvXCIgPT09IHRoaXMucGFyYW1zLnNjcm9sbGJhci5kcmFnU2l6ZSA/IGEgKiByIDogcGFyc2VJbnQodGhpcy5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdTaXplLCAxMCksIHRoaXMuaXNIb3Jpem9udGFsKCkgPyB0WzBdLnN0eWxlLndpZHRoID0gcyArIFwicHhcIiA6IHRbMF0uc3R5bGUuaGVpZ2h0ID0gcyArIFwicHhcIiwgaVswXS5zdHlsZS5kaXNwbGF5ID0gciA+PSAxID8gXCJub25lXCIgOiBcIlwiLCB0aGlzLnBhcmFtcy5zY3JvbGxiYXIuaGlkZSAmJiAoaVswXS5zdHlsZS5vcGFjaXR5ID0gMCksIFMoZSwge1xuICAgICAgICAgICAgdHJhY2tTaXplOiBhLFxuICAgICAgICAgICAgZGl2aWRlcjogcixcbiAgICAgICAgICAgIG1vdmVEaXZpZGVyOiBuLFxuICAgICAgICAgICAgZHJhZ1NpemU6IHNcbiAgICAgICAgICB9KSwgZS4kZWxbdGhpcy5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiB0aGlzLmlzTG9ja2VkID8gXCJhZGRDbGFzc1wiIDogXCJyZW1vdmVDbGFzc1wiXSh0aGlzLnBhcmFtcy5zY3JvbGxiYXIubG9ja0NsYXNzKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0UG9pbnRlclBvc2l0aW9uOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0hvcml6b250YWwoKSA/IFwidG91Y2hzdGFydFwiID09PSBlLnR5cGUgfHwgXCJ0b3VjaG1vdmVcIiA9PT0gZS50eXBlID8gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFggOiBcInRvdWNoc3RhcnRcIiA9PT0gZS50eXBlIHx8IFwidG91Y2htb3ZlXCIgPT09IGUudHlwZSA/IGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZIDogZS5jbGllbnRZXG4gICAgICB9LFxuICAgICAgc2V0RHJhZ1Bvc2l0aW9uOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCwgaSA9IHRoaXMuc2Nyb2xsYmFyLFxuICAgICAgICAgIHMgPSB0aGlzLnJ0bFRyYW5zbGF0ZSxcbiAgICAgICAgICBhID0gaS4kZWwsXG4gICAgICAgICAgciA9IGkuZHJhZ1NpemUsXG4gICAgICAgICAgbiA9IGkudHJhY2tTaXplLFxuICAgICAgICAgIGwgPSBpLmRyYWdTdGFydFBvcztcbiAgICAgICAgdCA9IChpLmdldFBvaW50ZXJQb3NpdGlvbihlKSAtIGEub2Zmc2V0KClbdGhpcy5pc0hvcml6b250YWwoKSA/IFwibGVmdFwiIDogXCJ0b3BcIl0gLSAobnVsbCAhPT0gbCA/IGwgOiByIC8gMikpIC8gKG4gLSByKSwgdCA9IE1hdGgubWF4KE1hdGgubWluKHQsIDEpLCAwKSwgcyAmJiAodCA9IDEgLSB0KTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLm1pblRyYW5zbGF0ZSgpICsgKHRoaXMubWF4VHJhbnNsYXRlKCkgLSB0aGlzLm1pblRyYW5zbGF0ZSgpKSAqIHQ7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MobyksIHRoaXMuc2V0VHJhbnNsYXRlKG8pLCB0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KCksIHRoaXMudXBkYXRlU2xpZGVzQ2xhc3NlcygpXG4gICAgICB9LFxuICAgICAgb25EcmFnU3RhcnQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5wYXJhbXMuc2Nyb2xsYmFyLFxuICAgICAgICAgIGkgPSB0aGlzLnNjcm9sbGJhcixcbiAgICAgICAgICBzID0gdGhpcy4kd3JhcHBlckVsLFxuICAgICAgICAgIGEgPSBpLiRlbCxcbiAgICAgICAgICByID0gaS4kZHJhZ0VsO1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5pc1RvdWNoZWQgPSAhMCwgdGhpcy5zY3JvbGxiYXIuZHJhZ1N0YXJ0UG9zID0gZS50YXJnZXQgPT09IHJbMF0gfHwgZS50YXJnZXQgPT09IHIgPyBpLmdldFBvaW50ZXJQb3NpdGlvbihlKSAtIGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW3RoaXMuaXNIb3Jpem9udGFsKCkgPyBcImxlZnRcIiA6IFwidG9wXCJdIDogbnVsbCwgZS5wcmV2ZW50RGVmYXVsdCgpLCBlLnN0b3BQcm9wYWdhdGlvbigpLCBzLnRyYW5zaXRpb24oMTAwKSwgci50cmFuc2l0aW9uKDEwMCksIGkuc2V0RHJhZ1Bvc2l0aW9uKGUpLCBjbGVhclRpbWVvdXQodGhpcy5zY3JvbGxiYXIuZHJhZ1RpbWVvdXQpLCBhLnRyYW5zaXRpb24oMCksIHQuaGlkZSAmJiBhLmNzcyhcIm9wYWNpdHlcIiwgMSksIHRoaXMucGFyYW1zLmNzc01vZGUgJiYgdGhpcy4kd3JhcHBlckVsLmNzcyhcInNjcm9sbC1zbmFwLXR5cGVcIiwgXCJub25lXCIpLCB0aGlzLmVtaXQoXCJzY3JvbGxiYXJEcmFnU3RhcnRcIiwgZSlcbiAgICAgIH0sXG4gICAgICBvbkRyYWdNb3ZlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuc2Nyb2xsYmFyLFxuICAgICAgICAgIGkgPSB0aGlzLiR3cmFwcGVyRWwsXG4gICAgICAgICAgcyA9IHQuJGVsLFxuICAgICAgICAgIGEgPSB0LiRkcmFnRWw7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLmlzVG91Y2hlZCAmJiAoZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSAhMSwgdC5zZXREcmFnUG9zaXRpb24oZSksIGkudHJhbnNpdGlvbigwKSwgcy50cmFuc2l0aW9uKDApLCBhLnRyYW5zaXRpb24oMCksIHRoaXMuZW1pdChcInNjcm9sbGJhckRyYWdNb3ZlXCIsIGUpKVxuICAgICAgfSxcbiAgICAgIG9uRHJhZ0VuZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLnBhcmFtcy5zY3JvbGxiYXIsXG4gICAgICAgICAgaSA9IHRoaXMuc2Nyb2xsYmFyLFxuICAgICAgICAgIHMgPSB0aGlzLiR3cmFwcGVyRWwsXG4gICAgICAgICAgYSA9IGkuJGVsO1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5pc1RvdWNoZWQgJiYgKHRoaXMuc2Nyb2xsYmFyLmlzVG91Y2hlZCA9ICExLCB0aGlzLnBhcmFtcy5jc3NNb2RlICYmICh0aGlzLiR3cmFwcGVyRWwuY3NzKFwic2Nyb2xsLXNuYXAtdHlwZVwiLCBcIlwiKSwgcy50cmFuc2l0aW9uKFwiXCIpKSwgdC5oaWRlICYmIChjbGVhclRpbWVvdXQodGhpcy5zY3JvbGxiYXIuZHJhZ1RpbWVvdXQpLCB0aGlzLnNjcm9sbGJhci5kcmFnVGltZW91dCA9IEUoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhLmNzcyhcIm9wYWNpdHlcIiwgMCksIGEudHJhbnNpdGlvbig0MDApXG4gICAgICAgIH0pLCAxZTMpKSwgdGhpcy5lbWl0KFwic2Nyb2xsYmFyRHJhZ0VuZFwiLCBlKSwgdC5zbmFwT25SZWxlYXNlICYmIHRoaXMuc2xpZGVUb0Nsb3Nlc3QoKSlcbiAgICAgIH0sXG4gICAgICBlbmFibGVEcmFnZ2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLnNjcm9sbGJhci5lbCkge1xuICAgICAgICAgIHZhciBlID0gcigpLFxuICAgICAgICAgICAgdCA9IHRoaXMuc2Nyb2xsYmFyLFxuICAgICAgICAgICAgaSA9IHRoaXMudG91Y2hFdmVudHNUb3VjaCxcbiAgICAgICAgICAgIHMgPSB0aGlzLnRvdWNoRXZlbnRzRGVza3RvcCxcbiAgICAgICAgICAgIGEgPSB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIG4gPSB0aGlzLnN1cHBvcnQsXG4gICAgICAgICAgICBsID0gdC4kZWxbMF0sXG4gICAgICAgICAgICBvID0gISghbi5wYXNzaXZlTGlzdGVuZXIgfHwgIWEucGFzc2l2ZUxpc3RlbmVycykgJiYge1xuICAgICAgICAgICAgICBwYXNzaXZlOiAhMSxcbiAgICAgICAgICAgICAgY2FwdHVyZTogITFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkID0gISghbi5wYXNzaXZlTGlzdGVuZXIgfHwgIWEucGFzc2l2ZUxpc3RlbmVycykgJiYge1xuICAgICAgICAgICAgICBwYXNzaXZlOiAhMCxcbiAgICAgICAgICAgICAgY2FwdHVyZTogITFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgbi50b3VjaCA/IChsLmFkZEV2ZW50TGlzdGVuZXIoaS5zdGFydCwgdGhpcy5zY3JvbGxiYXIub25EcmFnU3RhcnQsIG8pLCBsLmFkZEV2ZW50TGlzdGVuZXIoaS5tb3ZlLCB0aGlzLnNjcm9sbGJhci5vbkRyYWdNb3ZlLCBvKSwgbC5hZGRFdmVudExpc3RlbmVyKGkuZW5kLCB0aGlzLnNjcm9sbGJhci5vbkRyYWdFbmQsIGQpKSA6IChsLmFkZEV2ZW50TGlzdGVuZXIocy5zdGFydCwgdGhpcy5zY3JvbGxiYXIub25EcmFnU3RhcnQsIG8pLCBlLmFkZEV2ZW50TGlzdGVuZXIocy5tb3ZlLCB0aGlzLnNjcm9sbGJhci5vbkRyYWdNb3ZlLCBvKSwgZS5hZGRFdmVudExpc3RlbmVyKHMuZW5kLCB0aGlzLnNjcm9sbGJhci5vbkRyYWdFbmQsIGQpKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzYWJsZURyYWdnYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJhbXMuc2Nyb2xsYmFyLmVsKSB7XG4gICAgICAgICAgdmFyIGUgPSByKCksXG4gICAgICAgICAgICB0ID0gdGhpcy5zY3JvbGxiYXIsXG4gICAgICAgICAgICBpID0gdGhpcy50b3VjaEV2ZW50c1RvdWNoLFxuICAgICAgICAgICAgcyA9IHRoaXMudG91Y2hFdmVudHNEZXNrdG9wLFxuICAgICAgICAgICAgYSA9IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgbiA9IHRoaXMuc3VwcG9ydCxcbiAgICAgICAgICAgIGwgPSB0LiRlbFswXSxcbiAgICAgICAgICAgIG8gPSAhKCFuLnBhc3NpdmVMaXN0ZW5lciB8fCAhYS5wYXNzaXZlTGlzdGVuZXJzKSAmJiB7XG4gICAgICAgICAgICAgIHBhc3NpdmU6ICExLFxuICAgICAgICAgICAgICBjYXB0dXJlOiAhMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGQgPSAhKCFuLnBhc3NpdmVMaXN0ZW5lciB8fCAhYS5wYXNzaXZlTGlzdGVuZXJzKSAmJiB7XG4gICAgICAgICAgICAgIHBhc3NpdmU6ICEwLFxuICAgICAgICAgICAgICBjYXB0dXJlOiAhMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICBuLnRvdWNoID8gKGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihpLnN0YXJ0LCB0aGlzLnNjcm9sbGJhci5vbkRyYWdTdGFydCwgbyksIGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihpLm1vdmUsIHRoaXMuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsIG8pLCBsLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5lbmQsIHRoaXMuc2Nyb2xsYmFyLm9uRHJhZ0VuZCwgZCkpIDogKGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihzLnN0YXJ0LCB0aGlzLnNjcm9sbGJhci5vbkRyYWdTdGFydCwgbyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihzLm1vdmUsIHRoaXMuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsIG8pLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIocy5lbmQsIHRoaXMuc2Nyb2xsYmFyLm9uRHJhZ0VuZCwgZCkpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5zY3JvbGxiYXIuZWwpIHtcbiAgICAgICAgICB2YXIgZSA9IHRoaXMuc2Nyb2xsYmFyLFxuICAgICAgICAgICAgdCA9IHRoaXMuJGVsLFxuICAgICAgICAgICAgaSA9IHRoaXMucGFyYW1zLnNjcm9sbGJhcixcbiAgICAgICAgICAgIHMgPSBtKGkuZWwpO1xuICAgICAgICAgIHRoaXMucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIGkuZWwgJiYgcy5sZW5ndGggPiAxICYmIDEgPT09IHQuZmluZChpLmVsKS5sZW5ndGggJiYgKHMgPSB0LmZpbmQoaS5lbCkpO1xuICAgICAgICAgIHZhciBhID0gcy5maW5kKFwiLlwiICsgdGhpcy5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdDbGFzcyk7XG4gICAgICAgICAgMCA9PT0gYS5sZW5ndGggJiYgKGEgPSBtKCc8ZGl2IGNsYXNzPVwiJyArIHRoaXMucGFyYW1zLnNjcm9sbGJhci5kcmFnQ2xhc3MgKyAnXCI+PC9kaXY+JyksIHMuYXBwZW5kKGEpKSwgUyhlLCB7XG4gICAgICAgICAgICAkZWw6IHMsXG4gICAgICAgICAgICBlbDogc1swXSxcbiAgICAgICAgICAgICRkcmFnRWw6IGEsXG4gICAgICAgICAgICBkcmFnRWw6IGFbMF1cbiAgICAgICAgICB9KSwgaS5kcmFnZ2FibGUgJiYgZS5lbmFibGVEcmFnZ2FibGUoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5kaXNhYmxlRHJhZ2dhYmxlKClcbiAgICAgIH1cbiAgICB9LFxuICAgIFEgPSB7XG4gICAgICBzZXRUcmFuc2Zvcm06IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5ydGwsXG4gICAgICAgICAgcyA9IG0oZSksXG4gICAgICAgICAgYSA9IGkgPyAtMSA6IDEsXG4gICAgICAgICAgciA9IHMuYXR0cihcImRhdGEtc3dpcGVyLXBhcmFsbGF4XCIpIHx8IFwiMFwiLFxuICAgICAgICAgIG4gPSBzLmF0dHIoXCJkYXRhLXN3aXBlci1wYXJhbGxheC14XCIpLFxuICAgICAgICAgIGwgPSBzLmF0dHIoXCJkYXRhLXN3aXBlci1wYXJhbGxheC15XCIpLFxuICAgICAgICAgIG8gPSBzLmF0dHIoXCJkYXRhLXN3aXBlci1wYXJhbGxheC1zY2FsZVwiKSxcbiAgICAgICAgICBkID0gcy5hdHRyKFwiZGF0YS1zd2lwZXItcGFyYWxsYXgtb3BhY2l0eVwiKTtcbiAgICAgICAgaWYgKG4gfHwgbCA/IChuID0gbiB8fCBcIjBcIiwgbCA9IGwgfHwgXCIwXCIpIDogdGhpcy5pc0hvcml6b250YWwoKSA/IChuID0gciwgbCA9IFwiMFwiKSA6IChsID0gciwgbiA9IFwiMFwiKSwgbiA9IG4uaW5kZXhPZihcIiVcIikgPj0gMCA/IHBhcnNlSW50KG4sIDEwKSAqIHQgKiBhICsgXCIlXCIgOiBuICogdCAqIGEgKyBcInB4XCIsIGwgPSBsLmluZGV4T2YoXCIlXCIpID49IDAgPyBwYXJzZUludChsLCAxMCkgKiB0ICsgXCIlXCIgOiBsICogdCArIFwicHhcIiwgbnVsbCAhPSBkKSB7XG4gICAgICAgICAgdmFyIGggPSBkIC0gKGQgLSAxKSAqICgxIC0gTWF0aC5hYnModCkpO1xuICAgICAgICAgIHNbMF0uc3R5bGUub3BhY2l0eSA9IGhcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVsbCA9PSBvKSBzLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiICsgbiArIFwiLCBcIiArIGwgKyBcIiwgMHB4KVwiKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIHAgPSBvIC0gKG8gLSAxKSAqICgxIC0gTWF0aC5hYnModCkpO1xuICAgICAgICAgIHMudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyBuICsgXCIsIFwiICsgbCArIFwiLCAwcHgpIHNjYWxlKFwiICsgcCArIFwiKVwiKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcyxcbiAgICAgICAgICB0ID0gZS4kZWwsXG4gICAgICAgICAgaSA9IGUuc2xpZGVzLFxuICAgICAgICAgIHMgPSBlLnByb2dyZXNzLFxuICAgICAgICAgIGEgPSBlLnNuYXBHcmlkO1xuICAgICAgICB0LmNoaWxkcmVuKFwiW2RhdGEtc3dpcGVyLXBhcmFsbGF4XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1vcGFjaXR5XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXNjYWxlXVwiKS5lYWNoKChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGUucGFyYWxsYXguc2V0VHJhbnNmb3JtKHQsIHMpXG4gICAgICAgIH0pKSwgaS5lYWNoKChmdW5jdGlvbiAodCwgaSkge1xuICAgICAgICAgIHZhciByID0gdC5wcm9ncmVzcztcbiAgICAgICAgICBlLnBhcmFtcy5zbGlkZXNQZXJHcm91cCA+IDEgJiYgXCJhdXRvXCIgIT09IGUucGFyYW1zLnNsaWRlc1BlclZpZXcgJiYgKHIgKz0gTWF0aC5jZWlsKGkgLyAyKSAtIHMgKiAoYS5sZW5ndGggLSAxKSksIHIgPSBNYXRoLm1pbihNYXRoLm1heChyLCAtMSksIDEpLCBtKHQpLmZpbmQoXCJbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVdXCIpLmVhY2goKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBlLnBhcmFsbGF4LnNldFRyYW5zZm9ybSh0LCByKVxuICAgICAgICAgIH0pKVxuICAgICAgICB9KSlcbiAgICAgIH0sXG4gICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2b2lkIDAgPT09IGUgJiYgKGUgPSB0aGlzLnBhcmFtcy5zcGVlZCk7XG4gICAgICAgIHRoaXMuJGVsLmZpbmQoXCJbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVdXCIpLmVhY2goKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgdmFyIGkgPSBtKHQpLFxuICAgICAgICAgICAgcyA9IHBhcnNlSW50KGkuYXR0cihcImRhdGEtc3dpcGVyLXBhcmFsbGF4LWR1cmF0aW9uXCIpLCAxMCkgfHwgZTtcbiAgICAgICAgICAwID09PSBlICYmIChzID0gMCksIGkudHJhbnNpdGlvbihzKVxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGVlID0ge1xuICAgICAgZ2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKSByZXR1cm4gMTtcbiAgICAgICAgdmFyIHQgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVgsXG4gICAgICAgICAgaSA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSxcbiAgICAgICAgICBzID0gZS50YXJnZXRUb3VjaGVzWzFdLnBhZ2VYLFxuICAgICAgICAgIGEgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocyAtIHQsIDIpICsgTWF0aC5wb3coYSAtIGksIDIpKVxuICAgICAgfSxcbiAgICAgIG9uR2VzdHVyZVN0YXJ0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuc3VwcG9ydCxcbiAgICAgICAgICBpID0gdGhpcy5wYXJhbXMuem9vbSxcbiAgICAgICAgICBzID0gdGhpcy56b29tLFxuICAgICAgICAgIGEgPSBzLmdlc3R1cmU7XG4gICAgICAgIGlmIChzLmZha2VHZXN0dXJlVG91Y2hlZCA9ICExLCBzLmZha2VHZXN0dXJlTW92ZWQgPSAhMSwgIXQuZ2VzdHVyZXMpIHtcbiAgICAgICAgICBpZiAoXCJ0b3VjaHN0YXJ0XCIgIT09IGUudHlwZSB8fCBcInRvdWNoc3RhcnRcIiA9PT0gZS50eXBlICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKSByZXR1cm47XG4gICAgICAgICAgcy5mYWtlR2VzdHVyZVRvdWNoZWQgPSAhMCwgYS5zY2FsZVN0YXJ0ID0gZWUuZ2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlcyhlKVxuICAgICAgICB9XG4gICAgICAgIGEuJHNsaWRlRWwgJiYgYS4kc2xpZGVFbC5sZW5ndGggfHwgKGEuJHNsaWRlRWwgPSBtKGUudGFyZ2V0KS5jbG9zZXN0KFwiLlwiICsgdGhpcy5wYXJhbXMuc2xpZGVDbGFzcyksIDAgPT09IGEuJHNsaWRlRWwubGVuZ3RoICYmIChhLiRzbGlkZUVsID0gdGhpcy5zbGlkZXMuZXEodGhpcy5hY3RpdmVJbmRleCkpLCBhLiRpbWFnZUVsID0gYS4kc2xpZGVFbC5maW5kKFwiaW1nLCBzdmcsIGNhbnZhcywgcGljdHVyZSwgLnN3aXBlci16b29tLXRhcmdldFwiKSwgYS4kaW1hZ2VXcmFwRWwgPSBhLiRpbWFnZUVsLnBhcmVudChcIi5cIiArIGkuY29udGFpbmVyQ2xhc3MpLCBhLm1heFJhdGlvID0gYS4kaW1hZ2VXcmFwRWwuYXR0cihcImRhdGEtc3dpcGVyLXpvb21cIikgfHwgaS5tYXhSYXRpbywgMCAhPT0gYS4kaW1hZ2VXcmFwRWwubGVuZ3RoKSA/IChhLiRpbWFnZUVsICYmIGEuJGltYWdlRWwudHJhbnNpdGlvbigwKSwgdGhpcy56b29tLmlzU2NhbGluZyA9ICEwKSA6IGEuJGltYWdlRWwgPSB2b2lkIDBcbiAgICAgIH0sXG4gICAgICBvbkdlc3R1cmVDaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5zdXBwb3J0LFxuICAgICAgICAgIGkgPSB0aGlzLnBhcmFtcy56b29tLFxuICAgICAgICAgIHMgPSB0aGlzLnpvb20sXG4gICAgICAgICAgYSA9IHMuZ2VzdHVyZTtcbiAgICAgICAgaWYgKCF0Lmdlc3R1cmVzKSB7XG4gICAgICAgICAgaWYgKFwidG91Y2htb3ZlXCIgIT09IGUudHlwZSB8fCBcInRvdWNobW92ZVwiID09PSBlLnR5cGUgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpIHJldHVybjtcbiAgICAgICAgICBzLmZha2VHZXN0dXJlTW92ZWQgPSAhMCwgYS5zY2FsZU1vdmUgPSBlZS5nZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzKGUpXG4gICAgICAgIH1cbiAgICAgICAgYS4kaW1hZ2VFbCAmJiAwICE9PSBhLiRpbWFnZUVsLmxlbmd0aCA/ICh0Lmdlc3R1cmVzID8gcy5zY2FsZSA9IGUuc2NhbGUgKiBzLmN1cnJlbnRTY2FsZSA6IHMuc2NhbGUgPSBhLnNjYWxlTW92ZSAvIGEuc2NhbGVTdGFydCAqIHMuY3VycmVudFNjYWxlLCBzLnNjYWxlID4gYS5tYXhSYXRpbyAmJiAocy5zY2FsZSA9IGEubWF4UmF0aW8gLSAxICsgTWF0aC5wb3cocy5zY2FsZSAtIGEubWF4UmF0aW8gKyAxLCAuNSkpLCBzLnNjYWxlIDwgaS5taW5SYXRpbyAmJiAocy5zY2FsZSA9IGkubWluUmF0aW8gKyAxIC0gTWF0aC5wb3coaS5taW5SYXRpbyAtIHMuc2NhbGUgKyAxLCAuNSkpLCBhLiRpbWFnZUVsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZShcIiArIHMuc2NhbGUgKyBcIilcIikpIDogXCJnZXN0dXJlY2hhbmdlXCIgPT09IGUudHlwZSAmJiBzLm9uR2VzdHVyZVN0YXJ0KGUpXG4gICAgICB9LFxuICAgICAgb25HZXN0dXJlRW5kOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuZGV2aWNlLFxuICAgICAgICAgIGkgPSB0aGlzLnN1cHBvcnQsXG4gICAgICAgICAgcyA9IHRoaXMucGFyYW1zLnpvb20sXG4gICAgICAgICAgYSA9IHRoaXMuem9vbSxcbiAgICAgICAgICByID0gYS5nZXN0dXJlO1xuICAgICAgICBpZiAoIWkuZ2VzdHVyZXMpIHtcbiAgICAgICAgICBpZiAoIWEuZmFrZUdlc3R1cmVUb3VjaGVkIHx8ICFhLmZha2VHZXN0dXJlTW92ZWQpIHJldHVybjtcbiAgICAgICAgICBpZiAoXCJ0b3VjaGVuZFwiICE9PSBlLnR5cGUgfHwgXCJ0b3VjaGVuZFwiID09PSBlLnR5cGUgJiYgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPCAyICYmICF0LmFuZHJvaWQpIHJldHVybjtcbiAgICAgICAgICBhLmZha2VHZXN0dXJlVG91Y2hlZCA9ICExLCBhLmZha2VHZXN0dXJlTW92ZWQgPSAhMVxuICAgICAgICB9XG4gICAgICAgIHIuJGltYWdlRWwgJiYgMCAhPT0gci4kaW1hZ2VFbC5sZW5ndGggJiYgKGEuc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbihhLnNjYWxlLCByLm1heFJhdGlvKSwgcy5taW5SYXRpbyksIHIuJGltYWdlRWwudHJhbnNpdGlvbih0aGlzLnBhcmFtcy5zcGVlZCkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKFwiICsgYS5zY2FsZSArIFwiKVwiKSwgYS5jdXJyZW50U2NhbGUgPSBhLnNjYWxlLCBhLmlzU2NhbGluZyA9ICExLCAxID09PSBhLnNjYWxlICYmIChyLiRzbGlkZUVsID0gdm9pZCAwKSlcbiAgICAgIH0sXG4gICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5kZXZpY2UsXG4gICAgICAgICAgaSA9IHRoaXMuem9vbSxcbiAgICAgICAgICBzID0gaS5nZXN0dXJlLFxuICAgICAgICAgIGEgPSBpLmltYWdlO1xuICAgICAgICBzLiRpbWFnZUVsICYmIDAgIT09IHMuJGltYWdlRWwubGVuZ3RoICYmIChhLmlzVG91Y2hlZCB8fCAodC5hbmRyb2lkICYmIGUuY2FuY2VsYWJsZSAmJiBlLnByZXZlbnREZWZhdWx0KCksIGEuaXNUb3VjaGVkID0gITAsIGEudG91Y2hlc1N0YXJ0LnggPSBcInRvdWNoc3RhcnRcIiA9PT0gZS50eXBlID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWCwgYS50b3VjaGVzU3RhcnQueSA9IFwidG91Y2hzdGFydFwiID09PSBlLnR5cGUgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZKSlcbiAgICAgIH0sXG4gICAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLnpvb20sXG4gICAgICAgICAgaSA9IHQuZ2VzdHVyZSxcbiAgICAgICAgICBzID0gdC5pbWFnZSxcbiAgICAgICAgICBhID0gdC52ZWxvY2l0eTtcbiAgICAgICAgaWYgKGkuJGltYWdlRWwgJiYgMCAhPT0gaS4kaW1hZ2VFbC5sZW5ndGggJiYgKHRoaXMuYWxsb3dDbGljayA9ICExLCBzLmlzVG91Y2hlZCAmJiBpLiRzbGlkZUVsKSkge1xuICAgICAgICAgIHMuaXNNb3ZlZCB8fCAocy53aWR0aCA9IGkuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGgsIHMuaGVpZ2h0ID0gaS4kaW1hZ2VFbFswXS5vZmZzZXRIZWlnaHQsIHMuc3RhcnRYID0gVChpLiRpbWFnZVdyYXBFbFswXSwgXCJ4XCIpIHx8IDAsIHMuc3RhcnRZID0gVChpLiRpbWFnZVdyYXBFbFswXSwgXCJ5XCIpIHx8IDAsIGkuc2xpZGVXaWR0aCA9IGkuJHNsaWRlRWxbMF0ub2Zmc2V0V2lkdGgsIGkuc2xpZGVIZWlnaHQgPSBpLiRzbGlkZUVsWzBdLm9mZnNldEhlaWdodCwgaS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigwKSwgdGhpcy5ydGwgJiYgKHMuc3RhcnRYID0gLXMuc3RhcnRYLCBzLnN0YXJ0WSA9IC1zLnN0YXJ0WSkpO1xuICAgICAgICAgIHZhciByID0gcy53aWR0aCAqIHQuc2NhbGUsXG4gICAgICAgICAgICBuID0gcy5oZWlnaHQgKiB0LnNjYWxlO1xuICAgICAgICAgIGlmICghKHIgPCBpLnNsaWRlV2lkdGggJiYgbiA8IGkuc2xpZGVIZWlnaHQpKSB7XG4gICAgICAgICAgICBpZiAocy5taW5YID0gTWF0aC5taW4oaS5zbGlkZVdpZHRoIC8gMiAtIHIgLyAyLCAwKSwgcy5tYXhYID0gLXMubWluWCwgcy5taW5ZID0gTWF0aC5taW4oaS5zbGlkZUhlaWdodCAvIDIgLSBuIC8gMiwgMCksIHMubWF4WSA9IC1zLm1pblksIHMudG91Y2hlc0N1cnJlbnQueCA9IFwidG91Y2htb3ZlXCIgPT09IGUudHlwZSA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVgsIHMudG91Y2hlc0N1cnJlbnQueSA9IFwidG91Y2htb3ZlXCIgPT09IGUudHlwZSA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVksICFzLmlzTW92ZWQgJiYgIXQuaXNTY2FsaW5nKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmlzSG9yaXpvbnRhbCgpICYmIChNYXRoLmZsb29yKHMubWluWCkgPT09IE1hdGguZmxvb3Iocy5zdGFydFgpICYmIHMudG91Y2hlc0N1cnJlbnQueCA8IHMudG91Y2hlc1N0YXJ0LnggfHwgTWF0aC5mbG9vcihzLm1heFgpID09PSBNYXRoLmZsb29yKHMuc3RhcnRYKSAmJiBzLnRvdWNoZXNDdXJyZW50LnggPiBzLnRvdWNoZXNTdGFydC54KSkgcmV0dXJuIHZvaWQocy5pc1RvdWNoZWQgPSAhMSk7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5pc0hvcml6b250YWwoKSAmJiAoTWF0aC5mbG9vcihzLm1pblkpID09PSBNYXRoLmZsb29yKHMuc3RhcnRZKSAmJiBzLnRvdWNoZXNDdXJyZW50LnkgPCBzLnRvdWNoZXNTdGFydC55IHx8IE1hdGguZmxvb3Iocy5tYXhZKSA9PT0gTWF0aC5mbG9vcihzLnN0YXJ0WSkgJiYgcy50b3VjaGVzQ3VycmVudC55ID4gcy50b3VjaGVzU3RhcnQueSkpIHJldHVybiB2b2lkKHMuaXNUb3VjaGVkID0gITEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLmNhbmNlbGFibGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpLCBlLnN0b3BQcm9wYWdhdGlvbigpLCBzLmlzTW92ZWQgPSAhMCwgcy5jdXJyZW50WCA9IHMudG91Y2hlc0N1cnJlbnQueCAtIHMudG91Y2hlc1N0YXJ0LnggKyBzLnN0YXJ0WCwgcy5jdXJyZW50WSA9IHMudG91Y2hlc0N1cnJlbnQueSAtIHMudG91Y2hlc1N0YXJ0LnkgKyBzLnN0YXJ0WSwgcy5jdXJyZW50WCA8IHMubWluWCAmJiAocy5jdXJyZW50WCA9IHMubWluWCArIDEgLSBNYXRoLnBvdyhzLm1pblggLSBzLmN1cnJlbnRYICsgMSwgLjgpKSwgcy5jdXJyZW50WCA+IHMubWF4WCAmJiAocy5jdXJyZW50WCA9IHMubWF4WCAtIDEgKyBNYXRoLnBvdyhzLmN1cnJlbnRYIC0gcy5tYXhYICsgMSwgLjgpKSwgcy5jdXJyZW50WSA8IHMubWluWSAmJiAocy5jdXJyZW50WSA9IHMubWluWSArIDEgLSBNYXRoLnBvdyhzLm1pblkgLSBzLmN1cnJlbnRZICsgMSwgLjgpKSwgcy5jdXJyZW50WSA+IHMubWF4WSAmJiAocy5jdXJyZW50WSA9IHMubWF4WSAtIDEgKyBNYXRoLnBvdyhzLmN1cnJlbnRZIC0gcy5tYXhZICsgMSwgLjgpKSwgYS5wcmV2UG9zaXRpb25YIHx8IChhLnByZXZQb3NpdGlvblggPSBzLnRvdWNoZXNDdXJyZW50LngpLCBhLnByZXZQb3NpdGlvblkgfHwgKGEucHJldlBvc2l0aW9uWSA9IHMudG91Y2hlc0N1cnJlbnQueSksIGEucHJldlRpbWUgfHwgKGEucHJldlRpbWUgPSBEYXRlLm5vdygpKSwgYS54ID0gKHMudG91Y2hlc0N1cnJlbnQueCAtIGEucHJldlBvc2l0aW9uWCkgLyAoRGF0ZS5ub3coKSAtIGEucHJldlRpbWUpIC8gMiwgYS55ID0gKHMudG91Y2hlc0N1cnJlbnQueSAtIGEucHJldlBvc2l0aW9uWSkgLyAoRGF0ZS5ub3coKSAtIGEucHJldlRpbWUpIC8gMiwgTWF0aC5hYnMocy50b3VjaGVzQ3VycmVudC54IC0gYS5wcmV2UG9zaXRpb25YKSA8IDIgJiYgKGEueCA9IDApLCBNYXRoLmFicyhzLnRvdWNoZXNDdXJyZW50LnkgLSBhLnByZXZQb3NpdGlvblkpIDwgMiAmJiAoYS55ID0gMCksIGEucHJldlBvc2l0aW9uWCA9IHMudG91Y2hlc0N1cnJlbnQueCwgYS5wcmV2UG9zaXRpb25ZID0gcy50b3VjaGVzQ3VycmVudC55LCBhLnByZXZUaW1lID0gRGF0ZS5ub3coKSwgaS4kaW1hZ2VXcmFwRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyBzLmN1cnJlbnRYICsgXCJweCwgXCIgKyBzLmN1cnJlbnRZICsgXCJweCwwKVwiKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uVG91Y2hFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLnpvb20sXG4gICAgICAgICAgdCA9IGUuZ2VzdHVyZSxcbiAgICAgICAgICBpID0gZS5pbWFnZSxcbiAgICAgICAgICBzID0gZS52ZWxvY2l0eTtcbiAgICAgICAgaWYgKHQuJGltYWdlRWwgJiYgMCAhPT0gdC4kaW1hZ2VFbC5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoIWkuaXNUb3VjaGVkIHx8ICFpLmlzTW92ZWQpIHJldHVybiBpLmlzVG91Y2hlZCA9ICExLCB2b2lkKGkuaXNNb3ZlZCA9ICExKTtcbiAgICAgICAgICBpLmlzVG91Y2hlZCA9ICExLCBpLmlzTW92ZWQgPSAhMTtcbiAgICAgICAgICB2YXIgYSA9IDMwMCxcbiAgICAgICAgICAgIHIgPSAzMDAsXG4gICAgICAgICAgICBuID0gcy54ICogYSxcbiAgICAgICAgICAgIGwgPSBpLmN1cnJlbnRYICsgbixcbiAgICAgICAgICAgIG8gPSBzLnkgKiByLFxuICAgICAgICAgICAgZCA9IGkuY3VycmVudFkgKyBvO1xuICAgICAgICAgIDAgIT09IHMueCAmJiAoYSA9IE1hdGguYWJzKChsIC0gaS5jdXJyZW50WCkgLyBzLngpKSwgMCAhPT0gcy55ICYmIChyID0gTWF0aC5hYnMoKGQgLSBpLmN1cnJlbnRZKSAvIHMueSkpO1xuICAgICAgICAgIHZhciBoID0gTWF0aC5tYXgoYSwgcik7XG4gICAgICAgICAgaS5jdXJyZW50WCA9IGwsIGkuY3VycmVudFkgPSBkO1xuICAgICAgICAgIHZhciBwID0gaS53aWR0aCAqIGUuc2NhbGUsXG4gICAgICAgICAgICB1ID0gaS5oZWlnaHQgKiBlLnNjYWxlO1xuICAgICAgICAgIGkubWluWCA9IE1hdGgubWluKHQuc2xpZGVXaWR0aCAvIDIgLSBwIC8gMiwgMCksIGkubWF4WCA9IC1pLm1pblgsIGkubWluWSA9IE1hdGgubWluKHQuc2xpZGVIZWlnaHQgLyAyIC0gdSAvIDIsIDApLCBpLm1heFkgPSAtaS5taW5ZLCBpLmN1cnJlbnRYID0gTWF0aC5tYXgoTWF0aC5taW4oaS5jdXJyZW50WCwgaS5tYXhYKSwgaS5taW5YKSwgaS5jdXJyZW50WSA9IE1hdGgubWF4KE1hdGgubWluKGkuY3VycmVudFksIGkubWF4WSksIGkubWluWSksIHQuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24oaCkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyBpLmN1cnJlbnRYICsgXCJweCwgXCIgKyBpLmN1cnJlbnRZICsgXCJweCwwKVwiKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25UcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcy56b29tLFxuICAgICAgICAgIHQgPSBlLmdlc3R1cmU7XG4gICAgICAgIHQuJHNsaWRlRWwgJiYgdGhpcy5wcmV2aW91c0luZGV4ICE9PSB0aGlzLmFjdGl2ZUluZGV4ICYmICh0LiRpbWFnZUVsICYmIHQuJGltYWdlRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKDEpXCIpLCB0LiRpbWFnZVdyYXBFbCAmJiB0LiRpbWFnZVdyYXBFbC50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwLDAsMClcIiksIGUuc2NhbGUgPSAxLCBlLmN1cnJlbnRTY2FsZSA9IDEsIHQuJHNsaWRlRWwgPSB2b2lkIDAsIHQuJGltYWdlRWwgPSB2b2lkIDAsIHQuJGltYWdlV3JhcEVsID0gdm9pZCAwKVxuICAgICAgfSxcbiAgICAgIHRvZ2dsZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLnpvb207XG4gICAgICAgIHQuc2NhbGUgJiYgMSAhPT0gdC5zY2FsZSA/IHQub3V0KCkgOiB0LmluKGUpXG4gICAgICB9LFxuICAgICAgaW46IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0LCBpLCBzLCBhLCByLCBuLCBsLCBvLCBkLCBoLCBwLCB1LCBjLCB2LCBmLCBtLCBnID0gdGhpcy56b29tLFxuICAgICAgICAgIHcgPSB0aGlzLnBhcmFtcy56b29tLFxuICAgICAgICAgIGIgPSBnLmdlc3R1cmUsXG4gICAgICAgICAgeSA9IGcuaW1hZ2U7XG4gICAgICAgIChiLiRzbGlkZUVsIHx8ICh0aGlzLnBhcmFtcy52aXJ0dWFsICYmIHRoaXMucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCAmJiB0aGlzLnZpcnR1YWwgPyBiLiRzbGlkZUVsID0gdGhpcy4kd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgdGhpcy5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcykgOiBiLiRzbGlkZUVsID0gdGhpcy5zbGlkZXMuZXEodGhpcy5hY3RpdmVJbmRleCksIGIuJGltYWdlRWwgPSBiLiRzbGlkZUVsLmZpbmQoXCJpbWcsIHN2ZywgY2FudmFzLCBwaWN0dXJlLCAuc3dpcGVyLXpvb20tdGFyZ2V0XCIpLCBiLiRpbWFnZVdyYXBFbCA9IGIuJGltYWdlRWwucGFyZW50KFwiLlwiICsgdy5jb250YWluZXJDbGFzcykpLCBiLiRpbWFnZUVsICYmIDAgIT09IGIuJGltYWdlRWwubGVuZ3RoKSAmJiAoYi4kc2xpZGVFbC5hZGRDbGFzcyhcIlwiICsgdy56b29tZWRTbGlkZUNsYXNzKSwgdm9pZCAwID09PSB5LnRvdWNoZXNTdGFydC54ICYmIGUgPyAodCA9IFwidG91Y2hlbmRcIiA9PT0gZS50eXBlID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVgsIGkgPSBcInRvdWNoZW5kXCIgPT09IGUudHlwZSA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZKSA6ICh0ID0geS50b3VjaGVzU3RhcnQueCwgaSA9IHkudG91Y2hlc1N0YXJ0LnkpLCBnLnNjYWxlID0gYi4kaW1hZ2VXcmFwRWwuYXR0cihcImRhdGEtc3dpcGVyLXpvb21cIikgfHwgdy5tYXhSYXRpbywgZy5jdXJyZW50U2NhbGUgPSBiLiRpbWFnZVdyYXBFbC5hdHRyKFwiZGF0YS1zd2lwZXItem9vbVwiKSB8fCB3Lm1heFJhdGlvLCBlID8gKGYgPSBiLiRzbGlkZUVsWzBdLm9mZnNldFdpZHRoLCBtID0gYi4kc2xpZGVFbFswXS5vZmZzZXRIZWlnaHQsIHMgPSBiLiRzbGlkZUVsLm9mZnNldCgpLmxlZnQgKyBmIC8gMiAtIHQsIGEgPSBiLiRzbGlkZUVsLm9mZnNldCgpLnRvcCArIG0gLyAyIC0gaSwgbCA9IGIuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGgsIG8gPSBiLiRpbWFnZUVsWzBdLm9mZnNldEhlaWdodCwgZCA9IGwgKiBnLnNjYWxlLCBoID0gbyAqIGcuc2NhbGUsIGMgPSAtKHAgPSBNYXRoLm1pbihmIC8gMiAtIGQgLyAyLCAwKSksIHYgPSAtKHUgPSBNYXRoLm1pbihtIC8gMiAtIGggLyAyLCAwKSksIChyID0gcyAqIGcuc2NhbGUpIDwgcCAmJiAociA9IHApLCByID4gYyAmJiAociA9IGMpLCAobiA9IGEgKiBnLnNjYWxlKSA8IHUgJiYgKG4gPSB1KSwgbiA+IHYgJiYgKG4gPSB2KSkgOiAociA9IDAsIG4gPSAwKSwgYi4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiICsgciArIFwicHgsIFwiICsgbiArIFwicHgsMClcIiksIGIuJGltYWdlRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZShcIiArIGcuc2NhbGUgKyBcIilcIikpXG4gICAgICB9LFxuICAgICAgb3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcy56b29tLFxuICAgICAgICAgIHQgPSB0aGlzLnBhcmFtcy56b29tLFxuICAgICAgICAgIGkgPSBlLmdlc3R1cmU7XG4gICAgICAgIGkuJHNsaWRlRWwgfHwgKHRoaXMucGFyYW1zLnZpcnR1YWwgJiYgdGhpcy5wYXJhbXMudmlydHVhbC5lbmFibGVkICYmIHRoaXMudmlydHVhbCA/IGkuJHNsaWRlRWwgPSB0aGlzLiR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyB0aGlzLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKSA6IGkuJHNsaWRlRWwgPSB0aGlzLnNsaWRlcy5lcSh0aGlzLmFjdGl2ZUluZGV4KSwgaS4kaW1hZ2VFbCA9IGkuJHNsaWRlRWwuZmluZChcImltZywgc3ZnLCBjYW52YXMsIHBpY3R1cmUsIC5zd2lwZXItem9vbS10YXJnZXRcIiksIGkuJGltYWdlV3JhcEVsID0gaS4kaW1hZ2VFbC5wYXJlbnQoXCIuXCIgKyB0LmNvbnRhaW5lckNsYXNzKSksIGkuJGltYWdlRWwgJiYgMCAhPT0gaS4kaW1hZ2VFbC5sZW5ndGggJiYgKGUuc2NhbGUgPSAxLCBlLmN1cnJlbnRTY2FsZSA9IDEsIGkuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwLDAsMClcIiksIGkuJGltYWdlRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKVwiKSwgaS4kc2xpZGVFbC5yZW1vdmVDbGFzcyhcIlwiICsgdC56b29tZWRTbGlkZUNsYXNzKSwgaS4kc2xpZGVFbCA9IHZvaWQgMClcbiAgICAgIH0sXG4gICAgICB0b2dnbGVHZXN0dXJlczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLnpvb20sXG4gICAgICAgICAgaSA9IHQuc2xpZGVTZWxlY3RvcixcbiAgICAgICAgICBzID0gdC5wYXNzaXZlTGlzdGVuZXI7XG4gICAgICAgIHRoaXMuJHdyYXBwZXJFbFtlXShcImdlc3R1cmVzdGFydFwiLCBpLCB0Lm9uR2VzdHVyZVN0YXJ0LCBzKSwgdGhpcy4kd3JhcHBlckVsW2VdKFwiZ2VzdHVyZWNoYW5nZVwiLCBpLCB0Lm9uR2VzdHVyZUNoYW5nZSwgcyksIHRoaXMuJHdyYXBwZXJFbFtlXShcImdlc3R1cmVlbmRcIiwgaSwgdC5vbkdlc3R1cmVFbmQsIHMpXG4gICAgICB9LFxuICAgICAgZW5hYmxlR2VzdHVyZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy56b29tLmdlc3R1cmVzRW5hYmxlZCB8fCAodGhpcy56b29tLmdlc3R1cmVzRW5hYmxlZCA9ICEwLCB0aGlzLnpvb20udG9nZ2xlR2VzdHVyZXMoXCJvblwiKSlcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlR2VzdHVyZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy56b29tLmdlc3R1cmVzRW5hYmxlZCAmJiAodGhpcy56b29tLmdlc3R1cmVzRW5hYmxlZCA9ICExLCB0aGlzLnpvb20udG9nZ2xlR2VzdHVyZXMoXCJvZmZcIikpXG4gICAgICB9LFxuICAgICAgZW5hYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcy5zdXBwb3J0LFxuICAgICAgICAgIHQgPSB0aGlzLnpvb207XG4gICAgICAgIGlmICghdC5lbmFibGVkKSB7XG4gICAgICAgICAgdC5lbmFibGVkID0gITA7XG4gICAgICAgICAgdmFyIGkgPSAhKFwidG91Y2hzdGFydFwiICE9PSB0aGlzLnRvdWNoRXZlbnRzLnN0YXJ0IHx8ICFlLnBhc3NpdmVMaXN0ZW5lciB8fCAhdGhpcy5wYXJhbXMucGFzc2l2ZUxpc3RlbmVycykgJiYge1xuICAgICAgICAgICAgICBwYXNzaXZlOiAhMCxcbiAgICAgICAgICAgICAgY2FwdHVyZTogITFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzID0gIWUucGFzc2l2ZUxpc3RlbmVyIHx8IHtcbiAgICAgICAgICAgICAgcGFzc2l2ZTogITEsXG4gICAgICAgICAgICAgIGNhcHR1cmU6ICEwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYSA9IFwiLlwiICsgdGhpcy5wYXJhbXMuc2xpZGVDbGFzcztcbiAgICAgICAgICB0aGlzLnpvb20ucGFzc2l2ZUxpc3RlbmVyID0gaSwgdGhpcy56b29tLnNsaWRlU2VsZWN0b3IgPSBhLCBlLmdlc3R1cmVzID8gKHRoaXMuJHdyYXBwZXJFbC5vbih0aGlzLnRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLnpvb20uZW5hYmxlR2VzdHVyZXMsIGkpLCB0aGlzLiR3cmFwcGVyRWwub24odGhpcy50b3VjaEV2ZW50cy5lbmQsIHRoaXMuem9vbS5kaXNhYmxlR2VzdHVyZXMsIGkpKSA6IFwidG91Y2hzdGFydFwiID09PSB0aGlzLnRvdWNoRXZlbnRzLnN0YXJ0ICYmICh0aGlzLiR3cmFwcGVyRWwub24odGhpcy50b3VjaEV2ZW50cy5zdGFydCwgYSwgdC5vbkdlc3R1cmVTdGFydCwgaSksIHRoaXMuJHdyYXBwZXJFbC5vbih0aGlzLnRvdWNoRXZlbnRzLm1vdmUsIGEsIHQub25HZXN0dXJlQ2hhbmdlLCBzKSwgdGhpcy4kd3JhcHBlckVsLm9uKHRoaXMudG91Y2hFdmVudHMuZW5kLCBhLCB0Lm9uR2VzdHVyZUVuZCwgaSksIHRoaXMudG91Y2hFdmVudHMuY2FuY2VsICYmIHRoaXMuJHdyYXBwZXJFbC5vbih0aGlzLnRvdWNoRXZlbnRzLmNhbmNlbCwgYSwgdC5vbkdlc3R1cmVFbmQsIGkpKSwgdGhpcy4kd3JhcHBlckVsLm9uKHRoaXMudG91Y2hFdmVudHMubW92ZSwgXCIuXCIgKyB0aGlzLnBhcmFtcy56b29tLmNvbnRhaW5lckNsYXNzLCB0Lm9uVG91Y2hNb3ZlLCBzKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMuem9vbTtcbiAgICAgICAgaWYgKGUuZW5hYmxlZCkge1xuICAgICAgICAgIHZhciB0ID0gdGhpcy5zdXBwb3J0O1xuICAgICAgICAgIHRoaXMuem9vbS5lbmFibGVkID0gITE7XG4gICAgICAgICAgdmFyIGkgPSAhKFwidG91Y2hzdGFydFwiICE9PSB0aGlzLnRvdWNoRXZlbnRzLnN0YXJ0IHx8ICF0LnBhc3NpdmVMaXN0ZW5lciB8fCAhdGhpcy5wYXJhbXMucGFzc2l2ZUxpc3RlbmVycykgJiYge1xuICAgICAgICAgICAgICBwYXNzaXZlOiAhMCxcbiAgICAgICAgICAgICAgY2FwdHVyZTogITFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzID0gIXQucGFzc2l2ZUxpc3RlbmVyIHx8IHtcbiAgICAgICAgICAgICAgcGFzc2l2ZTogITEsXG4gICAgICAgICAgICAgIGNhcHR1cmU6ICEwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYSA9IFwiLlwiICsgdGhpcy5wYXJhbXMuc2xpZGVDbGFzcztcbiAgICAgICAgICB0Lmdlc3R1cmVzID8gKHRoaXMuJHdyYXBwZXJFbC5vZmYodGhpcy50b3VjaEV2ZW50cy5zdGFydCwgdGhpcy56b29tLmVuYWJsZUdlc3R1cmVzLCBpKSwgdGhpcy4kd3JhcHBlckVsLm9mZih0aGlzLnRvdWNoRXZlbnRzLmVuZCwgdGhpcy56b29tLmRpc2FibGVHZXN0dXJlcywgaSkpIDogXCJ0b3VjaHN0YXJ0XCIgPT09IHRoaXMudG91Y2hFdmVudHMuc3RhcnQgJiYgKHRoaXMuJHdyYXBwZXJFbC5vZmYodGhpcy50b3VjaEV2ZW50cy5zdGFydCwgYSwgZS5vbkdlc3R1cmVTdGFydCwgaSksIHRoaXMuJHdyYXBwZXJFbC5vZmYodGhpcy50b3VjaEV2ZW50cy5tb3ZlLCBhLCBlLm9uR2VzdHVyZUNoYW5nZSwgcyksIHRoaXMuJHdyYXBwZXJFbC5vZmYodGhpcy50b3VjaEV2ZW50cy5lbmQsIGEsIGUub25HZXN0dXJlRW5kLCBpKSwgdGhpcy50b3VjaEV2ZW50cy5jYW5jZWwgJiYgdGhpcy4kd3JhcHBlckVsLm9mZih0aGlzLnRvdWNoRXZlbnRzLmNhbmNlbCwgYSwgZS5vbkdlc3R1cmVFbmQsIGkpKSwgdGhpcy4kd3JhcHBlckVsLm9mZih0aGlzLnRvdWNoRXZlbnRzLm1vdmUsIFwiLlwiICsgdGhpcy5wYXJhbXMuem9vbS5jb250YWluZXJDbGFzcywgZS5vblRvdWNoTW92ZSwgcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGUgPSB7XG4gICAgICBsb2FkSW5TbGlkZTogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgdm9pZCAwID09PSB0ICYmICh0ID0gITApO1xuICAgICAgICB2YXIgaSA9IHRoaXMsXG4gICAgICAgICAgcyA9IGkucGFyYW1zLmxhenk7XG4gICAgICAgIGlmICh2b2lkIDAgIT09IGUgJiYgMCAhPT0gaS5zbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGEgPSBpLnZpcnR1YWwgJiYgaS5wYXJhbXMudmlydHVhbC5lbmFibGVkID8gaS4kd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgaS5wYXJhbXMuc2xpZGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgZSArICdcIl0nKSA6IGkuc2xpZGVzLmVxKGUpLFxuICAgICAgICAgICAgciA9IGEuZmluZChcIi5cIiArIHMuZWxlbWVudENsYXNzICsgXCI6bm90KC5cIiArIHMubG9hZGVkQ2xhc3MgKyBcIik6bm90KC5cIiArIHMubG9hZGluZ0NsYXNzICsgXCIpXCIpO1xuICAgICAgICAgICFhLmhhc0NsYXNzKHMuZWxlbWVudENsYXNzKSB8fCBhLmhhc0NsYXNzKHMubG9hZGVkQ2xhc3MpIHx8IGEuaGFzQ2xhc3Mocy5sb2FkaW5nQ2xhc3MpIHx8IHIucHVzaChhWzBdKSwgMCAhPT0gci5sZW5ndGggJiYgci5lYWNoKChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHIgPSBtKGUpO1xuICAgICAgICAgICAgci5hZGRDbGFzcyhzLmxvYWRpbmdDbGFzcyk7XG4gICAgICAgICAgICB2YXIgbiA9IHIuYXR0cihcImRhdGEtYmFja2dyb3VuZFwiKSxcbiAgICAgICAgICAgICAgbCA9IHIuYXR0cihcImRhdGEtc3JjXCIpLFxuICAgICAgICAgICAgICBvID0gci5hdHRyKFwiZGF0YS1zcmNzZXRcIiksXG4gICAgICAgICAgICAgIGQgPSByLmF0dHIoXCJkYXRhLXNpemVzXCIpLFxuICAgICAgICAgICAgICBoID0gci5wYXJlbnQoXCJwaWN0dXJlXCIpO1xuICAgICAgICAgICAgaS5sb2FkSW1hZ2UoclswXSwgbCB8fCBuLCBvLCBkLCAhMSwgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKG51bGwgIT0gaSAmJiBpICYmICghaSB8fCBpLnBhcmFtcykgJiYgIWkuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG4gPyAoci5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsICd1cmwoXCInICsgbiArICdcIiknKSwgci5yZW1vdmVBdHRyKFwiZGF0YS1iYWNrZ3JvdW5kXCIpKSA6IChvICYmIChyLmF0dHIoXCJzcmNzZXRcIiwgbyksIHIucmVtb3ZlQXR0cihcImRhdGEtc3Jjc2V0XCIpKSwgZCAmJiAoci5hdHRyKFwic2l6ZXNcIiwgZCksIHIucmVtb3ZlQXR0cihcImRhdGEtc2l6ZXNcIikpLCBoLmxlbmd0aCAmJiBoLmNoaWxkcmVuKFwic291cmNlXCIpLmVhY2goKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gbShlKTtcbiAgICAgICAgICAgICAgICAgICAgdC5hdHRyKFwiZGF0YS1zcmNzZXRcIikgJiYgKHQuYXR0cihcInNyY3NldFwiLCB0LmF0dHIoXCJkYXRhLXNyY3NldFwiKSksIHQucmVtb3ZlQXR0cihcImRhdGEtc3Jjc2V0XCIpKVxuICAgICAgICAgICAgICAgICAgfSkpLCBsICYmIChyLmF0dHIoXCJzcmNcIiwgbCksIHIucmVtb3ZlQXR0cihcImRhdGEtc3JjXCIpKSksIHIuYWRkQ2xhc3Mocy5sb2FkZWRDbGFzcykucmVtb3ZlQ2xhc3Mocy5sb2FkaW5nQ2xhc3MpLCBhLmZpbmQoXCIuXCIgKyBzLnByZWxvYWRlckNsYXNzKS5yZW1vdmUoKSwgaS5wYXJhbXMubG9vcCAmJiB0KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZSA9IGEuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpO1xuICAgICAgICAgICAgICAgICAgaWYgKGEuaGFzQ2xhc3MoaS5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBpLiR3cmFwcGVyRWwuY2hpbGRyZW4oJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBlICsgJ1wiXTpub3QoLicgKyBpLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICBpLmxhenkubG9hZEluU2xpZGUocC5pbmRleCgpLCAhMSlcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1ID0gaS4kd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgaS5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgZSArICdcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgaS5sYXp5LmxvYWRJblNsaWRlKHUuaW5kZXgoKSwgITEpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkuZW1pdChcImxhenlJbWFnZVJlYWR5XCIsIGFbMF0sIHJbMF0pLCBpLnBhcmFtcy5hdXRvSGVpZ2h0ICYmIGkudXBkYXRlQXV0b0hlaWdodCgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKSwgaS5lbWl0KFwibGF6eUltYWdlTG9hZFwiLCBhWzBdLCByWzBdKVxuICAgICAgICAgIH0pKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMsXG4gICAgICAgICAgdCA9IGUuJHdyYXBwZXJFbCxcbiAgICAgICAgICBpID0gZS5wYXJhbXMsXG4gICAgICAgICAgcyA9IGUuc2xpZGVzLFxuICAgICAgICAgIGEgPSBlLmFjdGl2ZUluZGV4LFxuICAgICAgICAgIHIgPSBlLnZpcnR1YWwgJiYgaS52aXJ0dWFsLmVuYWJsZWQsXG4gICAgICAgICAgbiA9IGkubGF6eSxcbiAgICAgICAgICBsID0gaS5zbGlkZXNQZXJWaWV3O1xuXG4gICAgICAgIGZ1bmN0aW9uIG8oZSkge1xuICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICBpZiAodC5jaGlsZHJlbihcIi5cIiArIGkuc2xpZGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgZSArICdcIl0nKS5sZW5ndGgpIHJldHVybiAhMFxuICAgICAgICAgIH0gZWxzZSBpZiAoc1tlXSkgcmV0dXJuICEwO1xuICAgICAgICAgIHJldHVybiAhMVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZChlKSB7XG4gICAgICAgICAgcmV0dXJuIHIgPyBtKGUpLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSA6IG0oZSkuaW5kZXgoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChcImF1dG9cIiA9PT0gbCAmJiAobCA9IDApLCBlLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkIHx8IChlLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkID0gITApLCBlLnBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHQuY2hpbGRyZW4oXCIuXCIgKyBpLnNsaWRlVmlzaWJsZUNsYXNzKS5lYWNoKChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHZhciBpID0gciA/IG0odCkuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpIDogbSh0KS5pbmRleCgpO1xuICAgICAgICAgIGUubGF6eS5sb2FkSW5TbGlkZShpKVxuICAgICAgICB9KSk7XG4gICAgICAgIGVsc2UgaWYgKGwgPiAxKVxuICAgICAgICAgIGZvciAodmFyIGggPSBhOyBoIDwgYSArIGw7IGggKz0gMSkgbyhoKSAmJiBlLmxhenkubG9hZEluU2xpZGUoaCk7XG4gICAgICAgIGVsc2UgZS5sYXp5LmxvYWRJblNsaWRlKGEpO1xuICAgICAgICBpZiAobi5sb2FkUHJldk5leHQpXG4gICAgICAgICAgaWYgKGwgPiAxIHx8IG4ubG9hZFByZXZOZXh0QW1vdW50ICYmIG4ubG9hZFByZXZOZXh0QW1vdW50ID4gMSkge1xuICAgICAgICAgICAgZm9yICh2YXIgcCA9IG4ubG9hZFByZXZOZXh0QW1vdW50LCB1ID0gbCwgYyA9IE1hdGgubWluKGEgKyB1ICsgTWF0aC5tYXgocCwgdSksIHMubGVuZ3RoKSwgdiA9IE1hdGgubWF4KGEgLSBNYXRoLm1heCh1LCBwKSwgMCksIGYgPSBhICsgbDsgZiA8IGM7IGYgKz0gMSkgbyhmKSAmJiBlLmxhenkubG9hZEluU2xpZGUoZik7XG4gICAgICAgICAgICBmb3IgKHZhciBnID0gdjsgZyA8IGE7IGcgKz0gMSkgbyhnKSAmJiBlLmxhenkubG9hZEluU2xpZGUoZylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHcgPSB0LmNoaWxkcmVuKFwiLlwiICsgaS5zbGlkZU5leHRDbGFzcyk7XG4gICAgICAgICAgICB3Lmxlbmd0aCA+IDAgJiYgZS5sYXp5LmxvYWRJblNsaWRlKGQodykpO1xuICAgICAgICAgICAgdmFyIGIgPSB0LmNoaWxkcmVuKFwiLlwiICsgaS5zbGlkZVByZXZDbGFzcyk7XG4gICAgICAgICAgICBiLmxlbmd0aCA+IDAgJiYgZS5sYXp5LmxvYWRJblNsaWRlKGQoYikpXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaWUgPSB7XG4gICAgICBMaW5lYXJTcGxpbmU6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHZhciBpLCBzLCBhLCByLCBuLCBsID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHMgPSAtMSwgaSA9IGUubGVuZ3RoOyBpIC0gcyA+IDE7KSBlW2EgPSBpICsgcyA+PiAxXSA8PSB0ID8gcyA9IGEgOiBpID0gYTtcbiAgICAgICAgICByZXR1cm4gaVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy54ID0gZSwgdGhpcy55ID0gdCwgdGhpcy5sYXN0SW5kZXggPSBlLmxlbmd0aCAtIDEsIHRoaXMuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlID8gKG4gPSBsKHRoaXMueCwgZSksIHIgPSBuIC0gMSwgKGUgLSB0aGlzLnhbcl0pICogKHRoaXMueVtuXSAtIHRoaXMueVtyXSkgLyAodGhpcy54W25dIC0gdGhpcy54W3JdKSArIHRoaXMueVtyXSkgOiAwXG4gICAgICAgIH0sIHRoaXNcbiAgICAgIH0sXG4gICAgICBnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc3BsaW5lIHx8ICh0aGlzLmNvbnRyb2xsZXIuc3BsaW5lID0gdGhpcy5wYXJhbXMubG9vcCA/IG5ldyBpZS5MaW5lYXJTcGxpbmUodGhpcy5zbGlkZXNHcmlkLCBlLnNsaWRlc0dyaWQpIDogbmV3IGllLkxpbmVhclNwbGluZSh0aGlzLnNuYXBHcmlkLCBlLnNuYXBHcmlkKSlcbiAgICAgIH0sXG4gICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHZhciBpLCBzLCBhID0gdGhpcyxcbiAgICAgICAgICByID0gYS5jb250cm9sbGVyLmNvbnRyb2wsXG4gICAgICAgICAgbiA9IGEuY29uc3RydWN0b3I7XG5cbiAgICAgICAgZnVuY3Rpb24gbChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBhLnJ0bFRyYW5zbGF0ZSA/IC1hLnRyYW5zbGF0ZSA6IGEudHJhbnNsYXRlO1xuICAgICAgICAgIFwic2xpZGVcIiA9PT0gYS5wYXJhbXMuY29udHJvbGxlci5ieSAmJiAoYS5jb250cm9sbGVyLmdldEludGVycG9sYXRlRnVuY3Rpb24oZSksIHMgPSAtYS5jb250cm9sbGVyLnNwbGluZS5pbnRlcnBvbGF0ZSgtdCkpLCBzICYmIFwiY29udGFpbmVyXCIgIT09IGEucGFyYW1zLmNvbnRyb2xsZXIuYnkgfHwgKGkgPSAoZS5tYXhUcmFuc2xhdGUoKSAtIGUubWluVHJhbnNsYXRlKCkpIC8gKGEubWF4VHJhbnNsYXRlKCkgLSBhLm1pblRyYW5zbGF0ZSgpKSwgcyA9ICh0IC0gYS5taW5UcmFuc2xhdGUoKSkgKiBpICsgZS5taW5UcmFuc2xhdGUoKSksIGEucGFyYW1zLmNvbnRyb2xsZXIuaW52ZXJzZSAmJiAocyA9IGUubWF4VHJhbnNsYXRlKCkgLSBzKSwgZS51cGRhdGVQcm9ncmVzcyhzKSwgZS5zZXRUcmFuc2xhdGUocywgYSksIGUudXBkYXRlQWN0aXZlSW5kZXgoKSwgZS51cGRhdGVTbGlkZXNDbGFzc2VzKClcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyKSlcbiAgICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IHIubGVuZ3RoOyBvICs9IDEpIHJbb10gIT09IHQgJiYgcltvXSBpbnN0YW5jZW9mIG4gJiYgbChyW29dKTtcbiAgICAgICAgZWxzZSByIGluc3RhbmNlb2YgbiAmJiB0ICE9PSByICYmIGwocilcbiAgICAgIH0sXG4gICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICB2YXIgaSwgcyA9IHRoaXMsXG4gICAgICAgICAgYSA9IHMuY29uc3RydWN0b3IsXG4gICAgICAgICAgciA9IHMuY29udHJvbGxlci5jb250cm9sO1xuXG4gICAgICAgIGZ1bmN0aW9uIG4odCkge1xuICAgICAgICAgIHQuc2V0VHJhbnNpdGlvbihlLCBzKSwgMCAhPT0gZSAmJiAodC50cmFuc2l0aW9uU3RhcnQoKSwgdC5wYXJhbXMuYXV0b0hlaWdodCAmJiBFKChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnVwZGF0ZUF1dG9IZWlnaHQoKVxuICAgICAgICAgIH0pKSwgdC4kd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHIgJiYgKHQucGFyYW1zLmxvb3AgJiYgXCJzbGlkZVwiID09PSBzLnBhcmFtcy5jb250cm9sbGVyLmJ5ICYmIHQubG9vcEZpeCgpLCB0LnRyYW5zaXRpb25FbmQoKSlcbiAgICAgICAgICB9KSkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocikpXG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IHIubGVuZ3RoOyBpICs9IDEpIHJbaV0gIT09IHQgJiYgcltpXSBpbnN0YW5jZW9mIGEgJiYgbihyW2ldKTtcbiAgICAgICAgZWxzZSByIGluc3RhbmNlb2YgYSAmJiB0ICE9PSByICYmIG4ocilcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlID0ge1xuICAgICAgbWFrZUVsRm9jdXNhYmxlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5hdHRyKFwidGFiSW5kZXhcIiwgXCIwXCIpLCBlXG4gICAgICB9LFxuICAgICAgbWFrZUVsTm90Rm9jdXNhYmxlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5hdHRyKFwidGFiSW5kZXhcIiwgXCItMVwiKSwgZVxuICAgICAgfSxcbiAgICAgIGFkZEVsUm9sZTogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIGUuYXR0cihcInJvbGVcIiwgdCksIGVcbiAgICAgIH0sXG4gICAgICBhZGRFbExhYmVsOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gZS5hdHRyKFwiYXJpYS1sYWJlbFwiLCB0KSwgZVxuICAgICAgfSxcbiAgICAgIGRpc2FibGVFbDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuYXR0cihcImFyaWEtZGlzYWJsZWRcIiwgITApLCBlXG4gICAgICB9LFxuICAgICAgZW5hYmxlRWw6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsICExKSwgZVxuICAgICAgfSxcbiAgICAgIG9uRW50ZXJLZXk6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5wYXJhbXMuYTExeTtcbiAgICAgICAgaWYgKDEzID09PSBlLmtleUNvZGUpIHtcbiAgICAgICAgICB2YXIgaSA9IG0oZS50YXJnZXQpO1xuICAgICAgICAgIHRoaXMubmF2aWdhdGlvbiAmJiB0aGlzLm5hdmlnYXRpb24uJG5leHRFbCAmJiBpLmlzKHRoaXMubmF2aWdhdGlvbi4kbmV4dEVsKSAmJiAodGhpcy5pc0VuZCAmJiAhdGhpcy5wYXJhbXMubG9vcCB8fCB0aGlzLnNsaWRlTmV4dCgpLCB0aGlzLmlzRW5kID8gdGhpcy5hMTF5Lm5vdGlmeSh0Lmxhc3RTbGlkZU1lc3NhZ2UpIDogdGhpcy5hMTF5Lm5vdGlmeSh0Lm5leHRTbGlkZU1lc3NhZ2UpKSwgdGhpcy5uYXZpZ2F0aW9uICYmIHRoaXMubmF2aWdhdGlvbi4kcHJldkVsICYmIGkuaXModGhpcy5uYXZpZ2F0aW9uLiRwcmV2RWwpICYmICh0aGlzLmlzQmVnaW5uaW5nICYmICF0aGlzLnBhcmFtcy5sb29wIHx8IHRoaXMuc2xpZGVQcmV2KCksIHRoaXMuaXNCZWdpbm5pbmcgPyB0aGlzLmExMXkubm90aWZ5KHQuZmlyc3RTbGlkZU1lc3NhZ2UpIDogdGhpcy5hMTF5Lm5vdGlmeSh0LnByZXZTbGlkZU1lc3NhZ2UpKSwgdGhpcy5wYWdpbmF0aW9uICYmIGkuaXMoXCIuXCIgKyB0aGlzLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSAmJiBpWzBdLmNsaWNrKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG5vdGlmeTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmExMXkubGl2ZVJlZ2lvbjtcbiAgICAgICAgMCAhPT0gdC5sZW5ndGggJiYgKHQuaHRtbChcIlwiKSwgdC5odG1sKGUpKVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZU5hdmlnYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcmFtcy5sb29wICYmIHRoaXMubmF2aWdhdGlvbikge1xuICAgICAgICAgIHZhciBlID0gdGhpcy5uYXZpZ2F0aW9uLFxuICAgICAgICAgICAgdCA9IGUuJG5leHRFbCxcbiAgICAgICAgICAgIGkgPSBlLiRwcmV2RWw7XG4gICAgICAgICAgaSAmJiBpLmxlbmd0aCA+IDAgJiYgKHRoaXMuaXNCZWdpbm5pbmcgPyAodGhpcy5hMTF5LmRpc2FibGVFbChpKSwgdGhpcy5hMTF5Lm1ha2VFbE5vdEZvY3VzYWJsZShpKSkgOiAodGhpcy5hMTF5LmVuYWJsZUVsKGkpLCB0aGlzLmExMXkubWFrZUVsRm9jdXNhYmxlKGkpKSksIHQgJiYgdC5sZW5ndGggPiAwICYmICh0aGlzLmlzRW5kID8gKHRoaXMuYTExeS5kaXNhYmxlRWwodCksIHRoaXMuYTExeS5tYWtlRWxOb3RGb2N1c2FibGUodCkpIDogKHRoaXMuYTExeS5lbmFibGVFbCh0KSwgdGhpcy5hMTF5Lm1ha2VFbEZvY3VzYWJsZSh0KSkpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cGRhdGVQYWdpbmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcyxcbiAgICAgICAgICB0ID0gZS5wYXJhbXMuYTExeTtcbiAgICAgICAgZS5wYWdpbmF0aW9uICYmIGUucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlICYmIGUucGFnaW5hdGlvbi5idWxsZXRzICYmIGUucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCAmJiBlLnBhZ2luYXRpb24uYnVsbGV0cy5lYWNoKChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIHZhciBzID0gbShpKTtcbiAgICAgICAgICBlLmExMXkubWFrZUVsRm9jdXNhYmxlKHMpLCBlLmExMXkuYWRkRWxSb2xlKHMsIFwiYnV0dG9uXCIpLCBlLmExMXkuYWRkRWxMYWJlbChzLCB0LnBhZ2luYXRpb25CdWxsZXRNZXNzYWdlLnJlcGxhY2UoL1xce1xce2luZGV4XFx9XFx9Lywgcy5pbmRleCgpICsgMSkpXG4gICAgICAgIH0pKVxuICAgICAgfSxcbiAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwuYXBwZW5kKHRoaXMuYTExeS5saXZlUmVnaW9uKTtcbiAgICAgICAgdmFyIGUsIHQsIGkgPSB0aGlzLnBhcmFtcy5hMTF5O1xuICAgICAgICB0aGlzLm5hdmlnYXRpb24gJiYgdGhpcy5uYXZpZ2F0aW9uLiRuZXh0RWwgJiYgKGUgPSB0aGlzLm5hdmlnYXRpb24uJG5leHRFbCksIHRoaXMubmF2aWdhdGlvbiAmJiB0aGlzLm5hdmlnYXRpb24uJHByZXZFbCAmJiAodCA9IHRoaXMubmF2aWdhdGlvbi4kcHJldkVsKSwgZSAmJiAodGhpcy5hMTF5Lm1ha2VFbEZvY3VzYWJsZShlKSwgdGhpcy5hMTF5LmFkZEVsUm9sZShlLCBcImJ1dHRvblwiKSwgdGhpcy5hMTF5LmFkZEVsTGFiZWwoZSwgaS5uZXh0U2xpZGVNZXNzYWdlKSwgZS5vbihcImtleWRvd25cIiwgdGhpcy5hMTF5Lm9uRW50ZXJLZXkpKSwgdCAmJiAodGhpcy5hMTF5Lm1ha2VFbEZvY3VzYWJsZSh0KSwgdGhpcy5hMTF5LmFkZEVsUm9sZSh0LCBcImJ1dHRvblwiKSwgdGhpcy5hMTF5LmFkZEVsTGFiZWwodCwgaS5wcmV2U2xpZGVNZXNzYWdlKSwgdC5vbihcImtleWRvd25cIiwgdGhpcy5hMTF5Lm9uRW50ZXJLZXkpKSwgdGhpcy5wYWdpbmF0aW9uICYmIHRoaXMucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlICYmIHRoaXMucGFnaW5hdGlvbi5idWxsZXRzICYmIHRoaXMucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCAmJiB0aGlzLnBhZ2luYXRpb24uJGVsLm9uKFwia2V5ZG93blwiLCBcIi5cIiArIHRoaXMucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MsIHRoaXMuYTExeS5vbkVudGVyS2V5KVxuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUsIHQ7XG4gICAgICAgIHRoaXMuYTExeS5saXZlUmVnaW9uICYmIHRoaXMuYTExeS5saXZlUmVnaW9uLmxlbmd0aCA+IDAgJiYgdGhpcy5hMTF5LmxpdmVSZWdpb24ucmVtb3ZlKCksIHRoaXMubmF2aWdhdGlvbiAmJiB0aGlzLm5hdmlnYXRpb24uJG5leHRFbCAmJiAoZSA9IHRoaXMubmF2aWdhdGlvbi4kbmV4dEVsKSwgdGhpcy5uYXZpZ2F0aW9uICYmIHRoaXMubmF2aWdhdGlvbi4kcHJldkVsICYmICh0ID0gdGhpcy5uYXZpZ2F0aW9uLiRwcmV2RWwpLCBlICYmIGUub2ZmKFwia2V5ZG93blwiLCB0aGlzLmExMXkub25FbnRlcktleSksIHQgJiYgdC5vZmYoXCJrZXlkb3duXCIsIHRoaXMuYTExeS5vbkVudGVyS2V5KSwgdGhpcy5wYWdpbmF0aW9uICYmIHRoaXMucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlICYmIHRoaXMucGFnaW5hdGlvbi5idWxsZXRzICYmIHRoaXMucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCAmJiB0aGlzLnBhZ2luYXRpb24uJGVsLm9mZihcImtleWRvd25cIiwgXCIuXCIgKyB0aGlzLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzLCB0aGlzLmExMXkub25FbnRlcktleSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGFlID0ge1xuICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IGwoKTtcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLmhpc3RvcnkpIHtcbiAgICAgICAgICBpZiAoIWUuaGlzdG9yeSB8fCAhZS5oaXN0b3J5LnB1c2hTdGF0ZSkgcmV0dXJuIHRoaXMucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCA9ICExLCB2b2lkKHRoaXMucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQgPSAhMCk7XG4gICAgICAgICAgdmFyIHQgPSB0aGlzLmhpc3Rvcnk7XG4gICAgICAgICAgdC5pbml0aWFsaXplZCA9ICEwLCB0LnBhdGhzID0gYWUuZ2V0UGF0aFZhbHVlcyh0aGlzLnBhcmFtcy51cmwpLCAodC5wYXRocy5rZXkgfHwgdC5wYXRocy52YWx1ZSkgJiYgKHQuc2Nyb2xsVG9TbGlkZSgwLCB0LnBhdGhzLnZhbHVlLCB0aGlzLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpLCB0aGlzLnBhcmFtcy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSB8fCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCB0aGlzLmhpc3Rvcnkuc2V0SGlzdG9yeVBvcFN0YXRlKSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSBsKCk7XG4gICAgICAgIHRoaXMucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlIHx8IGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIHRoaXMuaGlzdG9yeS5zZXRIaXN0b3J5UG9wU3RhdGUpXG4gICAgICB9LFxuICAgICAgc2V0SGlzdG9yeVBvcFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeS5wYXRocyA9IGFlLmdldFBhdGhWYWx1ZXModGhpcy5wYXJhbXMudXJsKSwgdGhpcy5oaXN0b3J5LnNjcm9sbFRvU2xpZGUodGhpcy5wYXJhbXMuc3BlZWQsIHRoaXMuaGlzdG9yeS5wYXRocy52YWx1ZSwgITEpXG4gICAgICB9LFxuICAgICAgZ2V0UGF0aFZhbHVlczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSBsKCksXG4gICAgICAgICAgaSA9IChlID8gbmV3IFVSTChlKSA6IHQubG9jYXRpb24pLnBhdGhuYW1lLnNsaWNlKDEpLnNwbGl0KFwiL1wiKS5maWx0ZXIoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIiAhPT0gZVxuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBzID0gaS5sZW5ndGg7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5OiBpW3MgLSAyXSxcbiAgICAgICAgICB2YWx1ZTogaVtzIC0gMV1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldEhpc3Rvcnk6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHZhciBpID0gbCgpO1xuICAgICAgICBpZiAodGhpcy5oaXN0b3J5LmluaXRpYWxpemVkICYmIHRoaXMucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkge1xuICAgICAgICAgIHZhciBzO1xuICAgICAgICAgIHMgPSB0aGlzLnBhcmFtcy51cmwgPyBuZXcgVVJMKHRoaXMucGFyYW1zLnVybCkgOiBpLmxvY2F0aW9uO1xuICAgICAgICAgIHZhciBhID0gdGhpcy5zbGlkZXMuZXEodCksXG4gICAgICAgICAgICByID0gYWUuc2x1Z2lmeShhLmF0dHIoXCJkYXRhLWhpc3RvcnlcIikpO1xuICAgICAgICAgIHMucGF0aG5hbWUuaW5jbHVkZXMoZSkgfHwgKHIgPSBlICsgXCIvXCIgKyByKTtcbiAgICAgICAgICB2YXIgbiA9IGkuaGlzdG9yeS5zdGF0ZTtcbiAgICAgICAgICBuICYmIG4udmFsdWUgPT09IHIgfHwgKHRoaXMucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlID8gaS5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogclxuICAgICAgICAgIH0sIG51bGwsIHIpIDogaS5oaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogclxuICAgICAgICAgIH0sIG51bGwsIHIpKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2x1Z2lmeTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKS5yZXBsYWNlKC9bXlxcdy1dKy9nLCBcIlwiKS5yZXBsYWNlKC8tLSsvZywgXCItXCIpLnJlcGxhY2UoL14tKy8sIFwiXCIpLnJlcGxhY2UoLy0rJC8sIFwiXCIpXG4gICAgICB9LFxuICAgICAgc2Nyb2xsVG9TbGlkZTogZnVuY3Rpb24gKGUsIHQsIGkpIHtcbiAgICAgICAgaWYgKHQpXG4gICAgICAgICAgZm9yICh2YXIgcyA9IDAsIGEgPSB0aGlzLnNsaWRlcy5sZW5ndGg7IHMgPCBhOyBzICs9IDEpIHtcbiAgICAgICAgICAgIHZhciByID0gdGhpcy5zbGlkZXMuZXEocyk7XG4gICAgICAgICAgICBpZiAoYWUuc2x1Z2lmeShyLmF0dHIoXCJkYXRhLWhpc3RvcnlcIikpID09PSB0ICYmICFyLmhhc0NsYXNzKHRoaXMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICAgICAgIHZhciBuID0gci5pbmRleCgpO1xuICAgICAgICAgICAgICB0aGlzLnNsaWRlVG8obiwgZSwgaSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgdGhpcy5zbGlkZVRvKDAsIGUsIGkpXG4gICAgICB9XG4gICAgfSxcbiAgICByZSA9IHtcbiAgICAgIG9uSGFzaENhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gcigpO1xuICAgICAgICB0aGlzLmVtaXQoXCJoYXNoQ2hhbmdlXCIpO1xuICAgICAgICB2YXIgdCA9IGUubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgICAgICAgaWYgKHQgIT09IHRoaXMuc2xpZGVzLmVxKHRoaXMuYWN0aXZlSW5kZXgpLmF0dHIoXCJkYXRhLWhhc2hcIikpIHtcbiAgICAgICAgICB2YXIgaSA9IHRoaXMuJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHRoaXMucGFyYW1zLnNsaWRlQ2xhc3MgKyAnW2RhdGEtaGFzaD1cIicgKyB0ICsgJ1wiXScpLmluZGV4KCk7XG4gICAgICAgICAgaWYgKHZvaWQgMCA9PT0gaSkgcmV0dXJuO1xuICAgICAgICAgIHRoaXMuc2xpZGVUbyhpKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2V0SGFzaDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IGwoKSxcbiAgICAgICAgICB0ID0gcigpO1xuICAgICAgICBpZiAodGhpcy5oYXNoTmF2aWdhdGlvbi5pbml0aWFsaXplZCAmJiB0aGlzLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkKVxuICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5yZXBsYWNlU3RhdGUgJiYgZS5oaXN0b3J5ICYmIGUuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIGUuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCwgXCIjXCIgKyB0aGlzLnNsaWRlcy5lcSh0aGlzLmFjdGl2ZUluZGV4KS5hdHRyKFwiZGF0YS1oYXNoXCIpIHx8IFwiXCIpLCB0aGlzLmVtaXQoXCJoYXNoU2V0XCIpO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGkgPSB0aGlzLnNsaWRlcy5lcSh0aGlzLmFjdGl2ZUluZGV4KSxcbiAgICAgICAgICAgICAgcyA9IGkuYXR0cihcImRhdGEtaGFzaFwiKSB8fCBpLmF0dHIoXCJkYXRhLWhpc3RvcnlcIik7XG4gICAgICAgICAgICB0LmxvY2F0aW9uLmhhc2ggPSBzIHx8IFwiXCIsIHRoaXMuZW1pdChcImhhc2hTZXRcIilcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHIoKSxcbiAgICAgICAgICB0ID0gbCgpO1xuICAgICAgICBpZiAoISghdGhpcy5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCB8fCB0aGlzLnBhcmFtcy5oaXN0b3J5ICYmIHRoaXMucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkpIHtcbiAgICAgICAgICB0aGlzLmhhc2hOYXZpZ2F0aW9uLmluaXRpYWxpemVkID0gITA7XG4gICAgICAgICAgdmFyIGkgPSBlLmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gICAgICAgICAgaWYgKGkpXG4gICAgICAgICAgICBmb3IgKHZhciBzID0gMCwgYSA9IHRoaXMuc2xpZGVzLmxlbmd0aDsgcyA8IGE7IHMgKz0gMSkge1xuICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMuc2xpZGVzLmVxKHMpO1xuICAgICAgICAgICAgICBpZiAoKG4uYXR0cihcImRhdGEtaGFzaFwiKSB8fCBuLmF0dHIoXCJkYXRhLWhpc3RvcnlcIikpID09PSBpICYmICFuLmhhc0NsYXNzKHRoaXMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBuLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZVRvKG8sIDAsIHRoaXMucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCwgITApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi53YXRjaFN0YXRlICYmIG0odCkub24oXCJoYXNoY2hhbmdlXCIsIHRoaXMuaGFzaE5hdmlnYXRpb24ub25IYXNoQ2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gbCgpO1xuICAgICAgICB0aGlzLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi53YXRjaFN0YXRlICYmIG0oZSkub2ZmKFwiaGFzaGNoYW5nZVwiLCB0aGlzLmhhc2hOYXZpZ2F0aW9uLm9uSGFzaENhbmdlKVxuICAgICAgfVxuICAgIH0sXG4gICAgbmUgPSB7XG4gICAgICBydW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLFxuICAgICAgICAgIHQgPSBlLnNsaWRlcy5lcShlLmFjdGl2ZUluZGV4KSxcbiAgICAgICAgICBpID0gZS5wYXJhbXMuYXV0b3BsYXkuZGVsYXk7XG4gICAgICAgIHQuYXR0cihcImRhdGEtc3dpcGVyLWF1dG9wbGF5XCIpICYmIChpID0gdC5hdHRyKFwiZGF0YS1zd2lwZXItYXV0b3BsYXlcIikgfHwgZS5wYXJhbXMuYXV0b3BsYXkuZGVsYXkpLCBjbGVhclRpbWVvdXQoZS5hdXRvcGxheS50aW1lb3V0KSwgZS5hdXRvcGxheS50aW1lb3V0ID0gRSgoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGUucGFyYW1zLmF1dG9wbGF5LnJldmVyc2VEaXJlY3Rpb24gPyBlLnBhcmFtcy5sb29wID8gKGUubG9vcEZpeCgpLCBlLnNsaWRlUHJldihlLnBhcmFtcy5zcGVlZCwgITAsICEwKSwgZS5lbWl0KFwiYXV0b3BsYXlcIikpIDogZS5pc0JlZ2lubmluZyA/IGUucGFyYW1zLmF1dG9wbGF5LnN0b3BPbkxhc3RTbGlkZSA/IGUuYXV0b3BsYXkuc3RvcCgpIDogKGUuc2xpZGVUbyhlLnNsaWRlcy5sZW5ndGggLSAxLCBlLnBhcmFtcy5zcGVlZCwgITAsICEwKSwgZS5lbWl0KFwiYXV0b3BsYXlcIikpIDogKGUuc2xpZGVQcmV2KGUucGFyYW1zLnNwZWVkLCAhMCwgITApLCBlLmVtaXQoXCJhdXRvcGxheVwiKSkgOiBlLnBhcmFtcy5sb29wID8gKGUubG9vcEZpeCgpLCBlLnNsaWRlTmV4dChlLnBhcmFtcy5zcGVlZCwgITAsICEwKSwgZS5lbWl0KFwiYXV0b3BsYXlcIikpIDogZS5pc0VuZCA/IGUucGFyYW1zLmF1dG9wbGF5LnN0b3BPbkxhc3RTbGlkZSA/IGUuYXV0b3BsYXkuc3RvcCgpIDogKGUuc2xpZGVUbygwLCBlLnBhcmFtcy5zcGVlZCwgITAsICEwKSwgZS5lbWl0KFwiYXV0b3BsYXlcIikpIDogKGUuc2xpZGVOZXh0KGUucGFyYW1zLnNwZWVkLCAhMCwgITApLCBlLmVtaXQoXCJhdXRvcGxheVwiKSksIGUucGFyYW1zLmNzc01vZGUgJiYgZS5hdXRvcGxheS5ydW5uaW5nICYmIGUuYXV0b3BsYXkucnVuKClcbiAgICAgICAgfSksIGkpXG4gICAgICB9LFxuICAgICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gdGhpcy5hdXRvcGxheS50aW1lb3V0ICYmICghdGhpcy5hdXRvcGxheS5ydW5uaW5nICYmICh0aGlzLmF1dG9wbGF5LnJ1bm5pbmcgPSAhMCwgdGhpcy5lbWl0KFwiYXV0b3BsYXlTdGFydFwiKSwgdGhpcy5hdXRvcGxheS5ydW4oKSwgITApKVxuICAgICAgfSxcbiAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5hdXRvcGxheS5ydW5uaW5nICYmICh2b2lkIDAgIT09IHRoaXMuYXV0b3BsYXkudGltZW91dCAmJiAodGhpcy5hdXRvcGxheS50aW1lb3V0ICYmIChjbGVhclRpbWVvdXQodGhpcy5hdXRvcGxheS50aW1lb3V0KSwgdGhpcy5hdXRvcGxheS50aW1lb3V0ID0gdm9pZCAwKSwgdGhpcy5hdXRvcGxheS5ydW5uaW5nID0gITEsIHRoaXMuZW1pdChcImF1dG9wbGF5U3RvcFwiKSwgITApKVxuICAgICAgfSxcbiAgICAgIHBhdXNlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLmF1dG9wbGF5LnJ1bm5pbmcgJiYgKHRoaXMuYXV0b3BsYXkucGF1c2VkIHx8ICh0aGlzLmF1dG9wbGF5LnRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRoaXMuYXV0b3BsYXkudGltZW91dCksIHRoaXMuYXV0b3BsYXkucGF1c2VkID0gITAsIDAgIT09IGUgJiYgdGhpcy5wYXJhbXMuYXV0b3BsYXkud2FpdEZvclRyYW5zaXRpb24gPyAodGhpcy4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHRoaXMuYXV0b3BsYXkub25UcmFuc2l0aW9uRW5kKSwgdGhpcy4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsIHRoaXMuYXV0b3BsYXkub25UcmFuc2l0aW9uRW5kKSkgOiAodGhpcy5hdXRvcGxheS5wYXVzZWQgPSAhMSwgdGhpcy5hdXRvcGxheS5ydW4oKSkpKVxuICAgICAgfSxcbiAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHIoKTtcbiAgICAgICAgXCJoaWRkZW5cIiA9PT0gZS52aXNpYmlsaXR5U3RhdGUgJiYgdGhpcy5hdXRvcGxheS5ydW5uaW5nICYmIHRoaXMuYXV0b3BsYXkucGF1c2UoKSwgXCJ2aXNpYmxlXCIgPT09IGUudmlzaWJpbGl0eVN0YXRlICYmIHRoaXMuYXV0b3BsYXkucGF1c2VkICYmICh0aGlzLmF1dG9wbGF5LnJ1bigpLCB0aGlzLmF1dG9wbGF5LnBhdXNlZCA9ICExKVxuICAgICAgfSxcbiAgICAgIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcyAmJiAhdGhpcy5kZXN0cm95ZWQgJiYgdGhpcy4kd3JhcHBlckVsICYmIGUudGFyZ2V0ID09PSB0aGlzLiR3cmFwcGVyRWxbMF0gJiYgKHRoaXMuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB0aGlzLmF1dG9wbGF5Lm9uVHJhbnNpdGlvbkVuZCksIHRoaXMuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLCB0aGlzLmF1dG9wbGF5Lm9uVHJhbnNpdGlvbkVuZCksIHRoaXMuYXV0b3BsYXkucGF1c2VkID0gITEsIHRoaXMuYXV0b3BsYXkucnVubmluZyA/IHRoaXMuYXV0b3BsYXkucnVuKCkgOiB0aGlzLmF1dG9wbGF5LnN0b3AoKSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGxlID0ge1xuICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGUgPSB0aGlzLnNsaWRlcywgdCA9IDA7IHQgPCBlLmxlbmd0aDsgdCArPSAxKSB7XG4gICAgICAgICAgdmFyIGkgPSB0aGlzLnNsaWRlcy5lcSh0KSxcbiAgICAgICAgICAgIHMgPSAtaVswXS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICAgICAgICB0aGlzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlIHx8IChzIC09IHRoaXMudHJhbnNsYXRlKTtcbiAgICAgICAgICB2YXIgYSA9IDA7XG4gICAgICAgICAgdGhpcy5pc0hvcml6b250YWwoKSB8fCAoYSA9IHMsIHMgPSAwKTtcbiAgICAgICAgICB2YXIgciA9IHRoaXMucGFyYW1zLmZhZGVFZmZlY3QuY3Jvc3NGYWRlID8gTWF0aC5tYXgoMSAtIE1hdGguYWJzKGlbMF0ucHJvZ3Jlc3MpLCAwKSA6IDEgKyBNYXRoLm1pbihNYXRoLm1heChpWzBdLnByb2dyZXNzLCAtMSksIDApO1xuICAgICAgICAgIGkuY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IHJcbiAgICAgICAgICB9KS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIiArIHMgKyBcInB4LCBcIiArIGEgKyBcInB4LCAwcHgpXCIpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IHRoaXMsXG4gICAgICAgICAgaSA9IHQuc2xpZGVzLFxuICAgICAgICAgIHMgPSB0LiR3cmFwcGVyRWw7XG4gICAgICAgIGlmIChpLnRyYW5zaXRpb24oZSksIHQucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUgJiYgMCAhPT0gZSkge1xuICAgICAgICAgIHZhciBhID0gITE7XG4gICAgICAgICAgaS50cmFuc2l0aW9uRW5kKChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWEgJiYgdCAmJiAhdC5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgYSA9ICEwLCB0LmFuaW1hdGluZyA9ICExO1xuICAgICAgICAgICAgICBmb3IgKHZhciBlID0gW1wid2Via2l0VHJhbnNpdGlvbkVuZFwiLCBcInRyYW5zaXRpb25lbmRcIl0sIGkgPSAwOyBpIDwgZS5sZW5ndGg7IGkgKz0gMSkgcy50cmlnZ2VyKGVbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9lID0ge1xuICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlLCB0ID0gdGhpcy4kZWwsXG4gICAgICAgICAgaSA9IHRoaXMuJHdyYXBwZXJFbCxcbiAgICAgICAgICBzID0gdGhpcy5zbGlkZXMsXG4gICAgICAgICAgYSA9IHRoaXMud2lkdGgsXG4gICAgICAgICAgciA9IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgIG4gPSB0aGlzLnJ0bFRyYW5zbGF0ZSxcbiAgICAgICAgICBsID0gdGhpcy5zaXplLFxuICAgICAgICAgIG8gPSB0aGlzLmJyb3dzZXIsXG4gICAgICAgICAgZCA9IHRoaXMucGFyYW1zLmN1YmVFZmZlY3QsXG4gICAgICAgICAgaCA9IHRoaXMuaXNIb3Jpem9udGFsKCksXG4gICAgICAgICAgcCA9IHRoaXMudmlydHVhbCAmJiB0aGlzLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQsXG4gICAgICAgICAgdSA9IDA7XG4gICAgICAgIGQuc2hhZG93ICYmIChoID8gKDAgPT09IChlID0gaS5maW5kKFwiLnN3aXBlci1jdWJlLXNoYWRvd1wiKSkubGVuZ3RoICYmIChlID0gbSgnPGRpdiBjbGFzcz1cInN3aXBlci1jdWJlLXNoYWRvd1wiPjwvZGl2PicpLCBpLmFwcGVuZChlKSksIGUuY3NzKHtcbiAgICAgICAgICBoZWlnaHQ6IGEgKyBcInB4XCJcbiAgICAgICAgfSkpIDogMCA9PT0gKGUgPSB0LmZpbmQoXCIuc3dpcGVyLWN1YmUtc2hhZG93XCIpKS5sZW5ndGggJiYgKGUgPSBtKCc8ZGl2IGNsYXNzPVwic3dpcGVyLWN1YmUtc2hhZG93XCI+PC9kaXY+JyksIHQuYXBwZW5kKGUpKSk7XG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgcy5sZW5ndGg7IGMgKz0gMSkge1xuICAgICAgICAgIHZhciB2ID0gcy5lcShjKSxcbiAgICAgICAgICAgIGYgPSBjO1xuICAgICAgICAgIHAgJiYgKGYgPSBwYXJzZUludCh2LmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSwgMTApKTtcbiAgICAgICAgICB2YXIgZyA9IDkwICogZixcbiAgICAgICAgICAgIHcgPSBNYXRoLmZsb29yKGcgLyAzNjApO1xuICAgICAgICAgIG4gJiYgKGcgPSAtZywgdyA9IE1hdGguZmxvb3IoLWcgLyAzNjApKTtcbiAgICAgICAgICB2YXIgYiA9IE1hdGgubWF4KE1hdGgubWluKHZbMF0ucHJvZ3Jlc3MsIDEpLCAtMSksXG4gICAgICAgICAgICB5ID0gMCxcbiAgICAgICAgICAgIEUgPSAwLFxuICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgICAgZiAlIDQgPT0gMCA/ICh5ID0gNCAqIC13ICogbCwgeCA9IDApIDogKGYgLSAxKSAlIDQgPT0gMCA/ICh5ID0gMCwgeCA9IDQgKiAtdyAqIGwpIDogKGYgLSAyKSAlIDQgPT0gMCA/ICh5ID0gbCArIDQgKiB3ICogbCwgeCA9IGwpIDogKGYgLSAzKSAlIDQgPT0gMCAmJiAoeSA9IC1sLCB4ID0gMyAqIGwgKyA0ICogbCAqIHcpLCBuICYmICh5ID0gLXkpLCBoIHx8IChFID0geSwgeSA9IDApO1xuICAgICAgICAgIHZhciBUID0gXCJyb3RhdGVYKFwiICsgKGggPyAwIDogLWcpICsgXCJkZWcpIHJvdGF0ZVkoXCIgKyAoaCA/IGcgOiAwKSArIFwiZGVnKSB0cmFuc2xhdGUzZChcIiArIHkgKyBcInB4LCBcIiArIEUgKyBcInB4LCBcIiArIHggKyBcInB4KVwiO1xuICAgICAgICAgIGlmIChiIDw9IDEgJiYgYiA+IC0xICYmICh1ID0gOTAgKiBmICsgOTAgKiBiLCBuICYmICh1ID0gOTAgKiAtZiAtIDkwICogYikpLCB2LnRyYW5zZm9ybShUKSwgZC5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgICAgIHZhciBDID0gaCA/IHYuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnRcIikgOiB2LmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3BcIiksXG4gICAgICAgICAgICAgIFMgPSBoID8gdi5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHRcIikgOiB2LmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b21cIik7XG4gICAgICAgICAgICAwID09PSBDLmxlbmd0aCAmJiAoQyA9IG0oJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScgKyAoaCA/IFwibGVmdFwiIDogXCJ0b3BcIikgKyAnXCI+PC9kaXY+JyksIHYuYXBwZW5kKEMpKSwgMCA9PT0gUy5sZW5ndGggJiYgKFMgPSBtKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nICsgKGggPyBcInJpZ2h0XCIgOiBcImJvdHRvbVwiKSArICdcIj48L2Rpdj4nKSwgdi5hcHBlbmQoUykpLCBDLmxlbmd0aCAmJiAoQ1swXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgoLWIsIDApKSwgUy5sZW5ndGggJiYgKFNbMF0uc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KGIsIDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaS5jc3Moe1xuICAgICAgICAgICAgXCItd2Via2l0LXRyYW5zZm9ybS1vcmlnaW5cIjogXCI1MCUgNTAlIC1cIiArIGwgLyAyICsgXCJweFwiLFxuICAgICAgICAgICAgXCItbW96LXRyYW5zZm9ybS1vcmlnaW5cIjogXCI1MCUgNTAlIC1cIiArIGwgLyAyICsgXCJweFwiLFxuICAgICAgICAgICAgXCItbXMtdHJhbnNmb3JtLW9yaWdpblwiOiBcIjUwJSA1MCUgLVwiICsgbCAvIDIgKyBcInB4XCIsXG4gICAgICAgICAgICBcInRyYW5zZm9ybS1vcmlnaW5cIjogXCI1MCUgNTAlIC1cIiArIGwgLyAyICsgXCJweFwiXG4gICAgICAgICAgfSksIGQuc2hhZG93KVxuICAgICAgICAgIGlmIChoKSBlLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDBweCwgXCIgKyAoYSAvIDIgKyBkLnNoYWRvd09mZnNldCkgKyBcInB4LCBcIiArIC1hIC8gMiArIFwicHgpIHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooMGRlZykgc2NhbGUoXCIgKyBkLnNoYWRvd1NjYWxlICsgXCIpXCIpO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIE0gPSBNYXRoLmFicyh1KSAtIDkwICogTWF0aC5mbG9vcihNYXRoLmFicyh1KSAvIDkwKSxcbiAgICAgICAgICAgICAgeiA9IDEuNSAtIChNYXRoLnNpbigyICogTSAqIE1hdGguUEkgLyAzNjApIC8gMiArIE1hdGguY29zKDIgKiBNICogTWF0aC5QSSAvIDM2MCkgLyAyKSxcbiAgICAgICAgICAgICAgUCA9IGQuc2hhZG93U2NhbGUsXG4gICAgICAgICAgICAgIGsgPSBkLnNoYWRvd1NjYWxlIC8geixcbiAgICAgICAgICAgICAgJCA9IGQuc2hhZG93T2Zmc2V0O1xuICAgICAgICAgICAgZS50cmFuc2Zvcm0oXCJzY2FsZTNkKFwiICsgUCArIFwiLCAxLCBcIiArIGsgKyBcIikgdHJhbnNsYXRlM2QoMHB4LCBcIiArIChyIC8gMiArICQpICsgXCJweCwgXCIgKyAtciAvIDIgLyBrICsgXCJweCkgcm90YXRlWCgtOTBkZWcpXCIpXG4gICAgICAgICAgfSB2YXIgTCA9IG8uaXNTYWZhcmkgfHwgby5pc1dlYlZpZXcgPyAtbCAvIDIgOiAwO1xuICAgICAgICBpLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDBweCwwLFwiICsgTCArIFwicHgpIHJvdGF0ZVgoXCIgKyAodGhpcy5pc0hvcml6b250YWwoKSA/IDAgOiB1KSArIFwiZGVnKSByb3RhdGVZKFwiICsgKHRoaXMuaXNIb3Jpem9udGFsKCkgPyAtdSA6IDApICsgXCJkZWcpXCIpXG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLiRlbDtcbiAgICAgICAgdGhpcy5zbGlkZXMudHJhbnNpdGlvbihlKS5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0XCIpLnRyYW5zaXRpb24oZSksIHRoaXMucGFyYW1zLmN1YmVFZmZlY3Quc2hhZG93ICYmICF0aGlzLmlzSG9yaXpvbnRhbCgpICYmIHQuZmluZChcIi5zd2lwZXItY3ViZS1zaGFkb3dcIikudHJhbnNpdGlvbihlKVxuICAgICAgfVxuICAgIH0sXG4gICAgZGUgPSB7XG4gICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMuc2xpZGVzLCB0ID0gdGhpcy5ydGxUcmFuc2xhdGUsIGkgPSAwOyBpIDwgZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHZhciBzID0gZS5lcShpKSxcbiAgICAgICAgICAgIGEgPSBzWzBdLnByb2dyZXNzO1xuICAgICAgICAgIHRoaXMucGFyYW1zLmZsaXBFZmZlY3QubGltaXRSb3RhdGlvbiAmJiAoYSA9IE1hdGgubWF4KE1hdGgubWluKHNbMF0ucHJvZ3Jlc3MsIDEpLCAtMSkpO1xuICAgICAgICAgIHZhciByID0gLTE4MCAqIGEsXG4gICAgICAgICAgICBuID0gMCxcbiAgICAgICAgICAgIGwgPSAtc1swXS5zd2lwZXJTbGlkZU9mZnNldCxcbiAgICAgICAgICAgIG8gPSAwO1xuICAgICAgICAgIGlmICh0aGlzLmlzSG9yaXpvbnRhbCgpID8gdCAmJiAociA9IC1yKSA6IChvID0gbCwgbCA9IDAsIG4gPSAtciwgciA9IDApLCBzWzBdLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKGEpKSArIGUubGVuZ3RoLCB0aGlzLnBhcmFtcy5mbGlwRWZmZWN0LnNsaWRlU2hhZG93cykge1xuICAgICAgICAgICAgdmFyIGQgPSB0aGlzLmlzSG9yaXpvbnRhbCgpID8gcy5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdFwiKSA6IHMuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LXRvcFwiKSxcbiAgICAgICAgICAgICAgaCA9IHRoaXMuaXNIb3Jpem9udGFsKCkgPyBzLmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodFwiKSA6IHMuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbVwiKTtcbiAgICAgICAgICAgIDAgPT09IGQubGVuZ3RoICYmIChkID0gbSgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJyArICh0aGlzLmlzSG9yaXpvbnRhbCgpID8gXCJsZWZ0XCIgOiBcInRvcFwiKSArICdcIj48L2Rpdj4nKSwgcy5hcHBlbmQoZCkpLCAwID09PSBoLmxlbmd0aCAmJiAoaCA9IG0oJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScgKyAodGhpcy5pc0hvcml6b250YWwoKSA/IFwicmlnaHRcIiA6IFwiYm90dG9tXCIpICsgJ1wiPjwvZGl2PicpLCBzLmFwcGVuZChoKSksIGQubGVuZ3RoICYmIChkWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heCgtYSwgMCkpLCBoLmxlbmd0aCAmJiAoaFswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgoYSwgMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHMudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyBsICsgXCJweCwgXCIgKyBvICsgXCJweCwgMHB4KSByb3RhdGVYKFwiICsgbiArIFwiZGVnKSByb3RhdGVZKFwiICsgciArIFwiZGVnKVwiKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLFxuICAgICAgICAgIGkgPSB0LnNsaWRlcyxcbiAgICAgICAgICBzID0gdC5hY3RpdmVJbmRleCxcbiAgICAgICAgICBhID0gdC4kd3JhcHBlckVsO1xuICAgICAgICBpZiAoaS50cmFuc2l0aW9uKGUpLmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnRcIikudHJhbnNpdGlvbihlKSwgdC5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSAmJiAwICE9PSBlKSB7XG4gICAgICAgICAgdmFyIHIgPSAhMTtcbiAgICAgICAgICBpLmVxKHMpLnRyYW5zaXRpb25FbmQoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghciAmJiB0ICYmICF0LmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgICByID0gITAsIHQuYW5pbWF0aW5nID0gITE7XG4gICAgICAgICAgICAgIGZvciAodmFyIGUgPSBbXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsIFwidHJhbnNpdGlvbmVuZFwiXSwgaSA9IDA7IGkgPCBlLmxlbmd0aDsgaSArPSAxKSBhLnRyaWdnZXIoZVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaGUgPSB7XG4gICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMud2lkdGgsIHQgPSB0aGlzLmhlaWdodCwgaSA9IHRoaXMuc2xpZGVzLCBzID0gdGhpcy5zbGlkZXNTaXplc0dyaWQsIGEgPSB0aGlzLnBhcmFtcy5jb3ZlcmZsb3dFZmZlY3QsIHIgPSB0aGlzLmlzSG9yaXpvbnRhbCgpLCBuID0gdGhpcy50cmFuc2xhdGUsIGwgPSByID8gZSAvIDIgLSBuIDogdCAvIDIgLSBuLCBvID0gciA/IGEucm90YXRlIDogLWEucm90YXRlLCBkID0gYS5kZXB0aCwgaCA9IDAsIHAgPSBpLmxlbmd0aDsgaCA8IHA7IGggKz0gMSkge1xuICAgICAgICAgIHZhciB1ID0gaS5lcShoKSxcbiAgICAgICAgICAgIGMgPSBzW2hdLFxuICAgICAgICAgICAgdiA9IChsIC0gdVswXS5zd2lwZXJTbGlkZU9mZnNldCAtIGMgLyAyKSAvIGMgKiBhLm1vZGlmaWVyLFxuICAgICAgICAgICAgZiA9IHIgPyBvICogdiA6IDAsXG4gICAgICAgICAgICBnID0gciA/IDAgOiBvICogdixcbiAgICAgICAgICAgIHcgPSAtZCAqIE1hdGguYWJzKHYpLFxuICAgICAgICAgICAgYiA9IGEuc3RyZXRjaDtcbiAgICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiBiICYmIC0xICE9PSBiLmluZGV4T2YoXCIlXCIpICYmIChiID0gcGFyc2VGbG9hdChhLnN0cmV0Y2gpIC8gMTAwICogYyk7XG4gICAgICAgICAgdmFyIHkgPSByID8gMCA6IGIgKiB2LFxuICAgICAgICAgICAgRSA9IHIgPyBiICogdiA6IDAsXG4gICAgICAgICAgICB4ID0gMSAtICgxIC0gYS5zY2FsZSkgKiBNYXRoLmFicyh2KTtcbiAgICAgICAgICBNYXRoLmFicyhFKSA8IC4wMDEgJiYgKEUgPSAwKSwgTWF0aC5hYnMoeSkgPCAuMDAxICYmICh5ID0gMCksIE1hdGguYWJzKHcpIDwgLjAwMSAmJiAodyA9IDApLCBNYXRoLmFicyhmKSA8IC4wMDEgJiYgKGYgPSAwKSwgTWF0aC5hYnMoZykgPCAuMDAxICYmIChnID0gMCksIE1hdGguYWJzKHgpIDwgLjAwMSAmJiAoeCA9IDApO1xuICAgICAgICAgIHZhciBUID0gXCJ0cmFuc2xhdGUzZChcIiArIEUgKyBcInB4LFwiICsgeSArIFwicHgsXCIgKyB3ICsgXCJweCkgIHJvdGF0ZVgoXCIgKyBnICsgXCJkZWcpIHJvdGF0ZVkoXCIgKyBmICsgXCJkZWcpIHNjYWxlKFwiICsgeCArIFwiKVwiO1xuICAgICAgICAgIGlmICh1LnRyYW5zZm9ybShUKSwgdVswXS5zdHlsZS56SW5kZXggPSAxIC0gTWF0aC5hYnMoTWF0aC5yb3VuZCh2KSksIGEuc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgICAgICB2YXIgQyA9IHIgPyB1LmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0XCIpIDogdS5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wXCIpLFxuICAgICAgICAgICAgICBTID0gciA/IHUuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0XCIpIDogdS5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tXCIpO1xuICAgICAgICAgICAgMCA9PT0gQy5sZW5ndGggJiYgKEMgPSBtKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nICsgKHIgPyBcImxlZnRcIiA6IFwidG9wXCIpICsgJ1wiPjwvZGl2PicpLCB1LmFwcGVuZChDKSksIDAgPT09IFMubGVuZ3RoICYmIChTID0gbSgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJyArIChyID8gXCJyaWdodFwiIDogXCJib3R0b21cIikgKyAnXCI+PC9kaXY+JyksIHUuYXBwZW5kKFMpKSwgQy5sZW5ndGggJiYgKENbMF0uc3R5bGUub3BhY2l0eSA9IHYgPiAwID8gdiA6IDApLCBTLmxlbmd0aCAmJiAoU1swXS5zdHlsZS5vcGFjaXR5ID0gLXYgPiAwID8gLXYgOiAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuc2xpZGVzLnRyYW5zaXRpb24oZSkuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdFwiKS50cmFuc2l0aW9uKGUpXG4gICAgICB9XG4gICAgfSxcbiAgICBwZSA9IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLnBhcmFtcy50aHVtYnM7XG4gICAgICAgIGlmICh0aGlzLnRodW1icy5pbml0aWFsaXplZCkgcmV0dXJuICExO1xuICAgICAgICB0aGlzLnRodW1icy5pbml0aWFsaXplZCA9ICEwO1xuICAgICAgICB2YXIgdCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiBlLnN3aXBlciBpbnN0YW5jZW9mIHQgPyAodGhpcy50aHVtYnMuc3dpcGVyID0gZS5zd2lwZXIsIFModGhpcy50aHVtYnMuc3dpcGVyLm9yaWdpbmFsUGFyYW1zLCB7XG4gICAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogITAsXG4gICAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogITFcbiAgICAgICAgfSksIFModGhpcy50aHVtYnMuc3dpcGVyLnBhcmFtcywge1xuICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6ICEwLFxuICAgICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6ICExXG4gICAgICAgIH0pKSA6IEMoZS5zd2lwZXIpICYmICh0aGlzLnRodW1icy5zd2lwZXIgPSBuZXcgdChTKHt9LCBlLnN3aXBlciwge1xuICAgICAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogITAsXG4gICAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogITAsXG4gICAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogITFcbiAgICAgICAgfSkpLCB0aGlzLnRodW1icy5zd2lwZXJDcmVhdGVkID0gITApLCB0aGlzLnRodW1icy5zd2lwZXIuJGVsLmFkZENsYXNzKHRoaXMucGFyYW1zLnRodW1icy50aHVtYnNDb250YWluZXJDbGFzcyksIHRoaXMudGh1bWJzLnN3aXBlci5vbihcInRhcFwiLCB0aGlzLnRodW1icy5vblRodW1iQ2xpY2spLCAhMFxuICAgICAgfSxcbiAgICAgIG9uVGh1bWJDbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMudGh1bWJzLnN3aXBlcjtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IGUuY2xpY2tlZEluZGV4LFxuICAgICAgICAgICAgaSA9IGUuY2xpY2tlZFNsaWRlO1xuICAgICAgICAgIGlmICghKGkgJiYgbShpKS5oYXNDbGFzcyh0aGlzLnBhcmFtcy50aHVtYnMuc2xpZGVUaHVtYkFjdGl2ZUNsYXNzKSB8fCBudWxsID09IHQpKSB7XG4gICAgICAgICAgICB2YXIgcztcbiAgICAgICAgICAgIGlmIChzID0gZS5wYXJhbXMubG9vcCA/IHBhcnNlSW50KG0oZS5jbGlja2VkU2xpZGUpLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSwgMTApIDogdCwgdGhpcy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMuYWN0aXZlSW5kZXg7XG4gICAgICAgICAgICAgIHRoaXMuc2xpZGVzLmVxKGEpLmhhc0NsYXNzKHRoaXMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpICYmICh0aGlzLmxvb3BGaXgoKSwgdGhpcy5fY2xpZW50TGVmdCA9IHRoaXMuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0LCBhID0gdGhpcy5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICAgIHZhciByID0gdGhpcy5zbGlkZXMuZXEoYSkucHJldkFsbCgnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIHMgKyAnXCJdJykuZXEoMCkuaW5kZXgoKSxcbiAgICAgICAgICAgICAgICBuID0gdGhpcy5zbGlkZXMuZXEoYSkubmV4dEFsbCgnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIHMgKyAnXCJdJykuZXEoMCkuaW5kZXgoKTtcbiAgICAgICAgICAgICAgcyA9IHZvaWQgMCA9PT0gciA/IG4gOiB2b2lkIDAgPT09IG4gPyByIDogbiAtIGEgPCBhIC0gciA/IG4gOiByXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNsaWRlVG8ocylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy50aHVtYnMuc3dpcGVyO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgIHZhciBpID0gXCJhdXRvXCIgPT09IHQucGFyYW1zLnNsaWRlc1BlclZpZXcgPyB0LnNsaWRlc1BlclZpZXdEeW5hbWljKCkgOiB0LnBhcmFtcy5zbGlkZXNQZXJWaWV3LFxuICAgICAgICAgICAgcyA9IHRoaXMucGFyYW1zLnRodW1icy5hdXRvU2Nyb2xsT2Zmc2V0LFxuICAgICAgICAgICAgYSA9IHMgJiYgIXQucGFyYW1zLmxvb3A7XG4gICAgICAgICAgaWYgKHRoaXMucmVhbEluZGV4ICE9PSB0LnJlYWxJbmRleCB8fCBhKSB7XG4gICAgICAgICAgICB2YXIgciwgbiwgbCA9IHQuYWN0aXZlSW5kZXg7XG4gICAgICAgICAgICBpZiAodC5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICB0LnNsaWRlcy5lcShsKS5oYXNDbGFzcyh0LnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSAmJiAodC5sb29wRml4KCksIHQuX2NsaWVudExlZnQgPSB0LiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdCwgbCA9IHQuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgICB2YXIgbyA9IHQuc2xpZGVzLmVxKGwpLnByZXZBbGwoJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyB0aGlzLnJlYWxJbmRleCArICdcIl0nKS5lcSgwKS5pbmRleCgpLFxuICAgICAgICAgICAgICAgIGQgPSB0LnNsaWRlcy5lcShsKS5uZXh0QWxsKCdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgdGhpcy5yZWFsSW5kZXggKyAnXCJdJykuZXEoMCkuaW5kZXgoKTtcbiAgICAgICAgICAgICAgciA9IHZvaWQgMCA9PT0gbyA/IGQgOiB2b2lkIDAgPT09IGQgPyBvIDogZCAtIGwgPT0gbCAtIG8gPyBsIDogZCAtIGwgPCBsIC0gbyA/IGQgOiBvLCBuID0gdGhpcy5hY3RpdmVJbmRleCA+IHRoaXMucHJldmlvdXNJbmRleCA/IFwibmV4dFwiIDogXCJwcmV2XCJcbiAgICAgICAgICAgIH0gZWxzZSBuID0gKHIgPSB0aGlzLnJlYWxJbmRleCkgPiB0aGlzLnByZXZpb3VzSW5kZXggPyBcIm5leHRcIiA6IFwicHJldlwiO1xuICAgICAgICAgICAgYSAmJiAociArPSBcIm5leHRcIiA9PT0gbiA/IHMgOiAtMSAqIHMpLCB0LnZpc2libGVTbGlkZXNJbmRleGVzICYmIHQudmlzaWJsZVNsaWRlc0luZGV4ZXMuaW5kZXhPZihyKSA8IDAgJiYgKHQucGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gciA9IHIgPiBsID8gciAtIE1hdGguZmxvb3IoaSAvIDIpICsgMSA6IHIgKyBNYXRoLmZsb29yKGkgLyAyKSAtIDEgOiByID4gbCAmJiAociA9IHIgLSBpICsgMSksIHQuc2xpZGVUbyhyLCBlID8gMCA6IHZvaWQgMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBoID0gMSxcbiAgICAgICAgICAgIHAgPSB0aGlzLnBhcmFtcy50aHVtYnMuc2xpZGVUaHVtYkFjdGl2ZUNsYXNzO1xuICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSAmJiAhdGhpcy5wYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgKGggPSB0aGlzLnBhcmFtcy5zbGlkZXNQZXJWaWV3KSwgdGhpcy5wYXJhbXMudGh1bWJzLm11bHRpcGxlQWN0aXZlVGh1bWJzIHx8IChoID0gMSksIGggPSBNYXRoLmZsb29yKGgpLCB0LnNsaWRlcy5yZW1vdmVDbGFzcyhwKSwgdC5wYXJhbXMubG9vcCB8fCB0LnBhcmFtcy52aXJ0dWFsICYmIHQucGFyYW1zLnZpcnR1YWwuZW5hYmxlZClcbiAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgaDsgdSArPSAxKSB0LiR3cmFwcGVyRWwuY2hpbGRyZW4oJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyAodGhpcy5yZWFsSW5kZXggKyB1KSArICdcIl0nKS5hZGRDbGFzcyhwKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGg7IGMgKz0gMSkgdC5zbGlkZXMuZXEodGhpcy5yZWFsSW5kZXggKyBjKS5hZGRDbGFzcyhwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB1ZSA9IFtxLCBfLCB7XG4gICAgICBuYW1lOiBcIm1vdXNld2hlZWxcIixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBtb3VzZXdoZWVsOiB7XG4gICAgICAgICAgZW5hYmxlZDogITEsXG4gICAgICAgICAgcmVsZWFzZU9uRWRnZXM6ICExLFxuICAgICAgICAgIGludmVydDogITEsXG4gICAgICAgICAgZm9yY2VUb0F4aXM6ICExLFxuICAgICAgICAgIHNlbnNpdGl2aXR5OiAxLFxuICAgICAgICAgIGV2ZW50c1RhcmdldDogXCJjb250YWluZXJcIixcbiAgICAgICAgICB0aHJlc2hvbGREZWx0YTogbnVsbCxcbiAgICAgICAgICB0aHJlc2hvbGRUaW1lOiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTSh0aGlzLCB7XG4gICAgICAgICAgbW91c2V3aGVlbDoge1xuICAgICAgICAgICAgZW5hYmxlZDogITEsXG4gICAgICAgICAgICBsYXN0U2Nyb2xsVGltZTogeCgpLFxuICAgICAgICAgICAgbGFzdEV2ZW50QmVmb3JlU25hcDogdm9pZCAwLFxuICAgICAgICAgICAgcmVjZW50V2hlZWxFdmVudHM6IFtdLFxuICAgICAgICAgICAgZW5hYmxlOiBVLmVuYWJsZSxcbiAgICAgICAgICAgIGRpc2FibGU6IFUuZGlzYWJsZSxcbiAgICAgICAgICAgIGhhbmRsZTogVS5oYW5kbGUsXG4gICAgICAgICAgICBoYW5kbGVNb3VzZUVudGVyOiBVLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgICAgICBoYW5kbGVNb3VzZUxlYXZlOiBVLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgICAgICBhbmltYXRlU2xpZGVyOiBVLmFuaW1hdGVTbGlkZXIsXG4gICAgICAgICAgICByZWxlYXNlU2Nyb2xsOiBVLnJlbGVhc2VTY3JvbGxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAhZS5wYXJhbXMubW91c2V3aGVlbC5lbmFibGVkICYmIGUucGFyYW1zLmNzc01vZGUgJiYgZS5tb3VzZXdoZWVsLmRpc2FibGUoKSwgZS5wYXJhbXMubW91c2V3aGVlbC5lbmFibGVkICYmIGUubW91c2V3aGVlbC5lbmFibGUoKVxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucGFyYW1zLmNzc01vZGUgJiYgZS5tb3VzZXdoZWVsLmVuYWJsZSgpLCBlLm1vdXNld2hlZWwuZW5hYmxlZCAmJiBlLm1vdXNld2hlZWwuZGlzYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm5hdmlnYXRpb25cIixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgbmV4dEVsOiBudWxsLFxuICAgICAgICAgIHByZXZFbDogbnVsbCxcbiAgICAgICAgICBoaWRlT25DbGljazogITEsXG4gICAgICAgICAgZGlzYWJsZWRDbGFzczogXCJzd2lwZXItYnV0dG9uLWRpc2FibGVkXCIsXG4gICAgICAgICAgaGlkZGVuQ2xhc3M6IFwic3dpcGVyLWJ1dHRvbi1oaWRkZW5cIixcbiAgICAgICAgICBsb2NrQ2xhc3M6IFwic3dpcGVyLWJ1dHRvbi1sb2NrXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBNKHRoaXMsIHtcbiAgICAgICAgICBuYXZpZ2F0aW9uOiB0KHt9LCBLKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5uYXZpZ2F0aW9uLmluaXQoKSwgZS5uYXZpZ2F0aW9uLnVwZGF0ZSgpXG4gICAgICAgIH0sXG4gICAgICAgIHRvRWRnZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLm5hdmlnYXRpb24udXBkYXRlKClcbiAgICAgICAgfSxcbiAgICAgICAgZnJvbUVkZ2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5uYXZpZ2F0aW9uLnVwZGF0ZSgpXG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5uYXZpZ2F0aW9uLmRlc3Ryb3koKVxuICAgICAgICB9LFxuICAgICAgICBjbGljazogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICB2YXIgaSwgcyA9IGUubmF2aWdhdGlvbixcbiAgICAgICAgICAgIGEgPSBzLiRuZXh0RWwsXG4gICAgICAgICAgICByID0gcy4kcHJldkVsO1xuICAgICAgICAgICFlLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGVPbkNsaWNrIHx8IG0odC50YXJnZXQpLmlzKHIpIHx8IG0odC50YXJnZXQpLmlzKGEpIHx8IChhID8gaSA9IGEuaGFzQ2xhc3MoZS5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcykgOiByICYmIChpID0gci5oYXNDbGFzcyhlLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKSksICEwID09PSBpID8gZS5lbWl0KFwibmF2aWdhdGlvblNob3dcIikgOiBlLmVtaXQoXCJuYXZpZ2F0aW9uSGlkZVwiKSwgYSAmJiBhLnRvZ2dsZUNsYXNzKGUucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpLCByICYmIHIudG9nZ2xlQ2xhc3MoZS5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcykpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInBhZ2luYXRpb25cIixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgZWw6IG51bGwsXG4gICAgICAgICAgYnVsbGV0RWxlbWVudDogXCJzcGFuXCIsXG4gICAgICAgICAgY2xpY2thYmxlOiAhMSxcbiAgICAgICAgICBoaWRlT25DbGljazogITEsXG4gICAgICAgICAgcmVuZGVyQnVsbGV0OiBudWxsLFxuICAgICAgICAgIHJlbmRlclByb2dyZXNzYmFyOiBudWxsLFxuICAgICAgICAgIHJlbmRlckZyYWN0aW9uOiBudWxsLFxuICAgICAgICAgIHJlbmRlckN1c3RvbTogbnVsbCxcbiAgICAgICAgICBwcm9ncmVzc2Jhck9wcG9zaXRlOiAhMSxcbiAgICAgICAgICB0eXBlOiBcImJ1bGxldHNcIixcbiAgICAgICAgICBkeW5hbWljQnVsbGV0czogITEsXG4gICAgICAgICAgZHluYW1pY01haW5CdWxsZXRzOiAxLFxuICAgICAgICAgIGZvcm1hdEZyYWN0aW9uQ3VycmVudDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtYXRGcmFjdGlvblRvdGFsOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJ1bGxldENsYXNzOiBcInN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldFwiLFxuICAgICAgICAgIGJ1bGxldEFjdGl2ZUNsYXNzOiBcInN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmVcIixcbiAgICAgICAgICBtb2RpZmllckNsYXNzOiBcInN3aXBlci1wYWdpbmF0aW9uLVwiLFxuICAgICAgICAgIGN1cnJlbnRDbGFzczogXCJzd2lwZXItcGFnaW5hdGlvbi1jdXJyZW50XCIsXG4gICAgICAgICAgdG90YWxDbGFzczogXCJzd2lwZXItcGFnaW5hdGlvbi10b3RhbFwiLFxuICAgICAgICAgIGhpZGRlbkNsYXNzOiBcInN3aXBlci1wYWdpbmF0aW9uLWhpZGRlblwiLFxuICAgICAgICAgIHByb2dyZXNzYmFyRmlsbENsYXNzOiBcInN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGxcIixcbiAgICAgICAgICBwcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3M6IFwic3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGVcIixcbiAgICAgICAgICBjbGlja2FibGVDbGFzczogXCJzd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGVcIixcbiAgICAgICAgICBsb2NrQ2xhc3M6IFwic3dpcGVyLXBhZ2luYXRpb24tbG9ja1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTSh0aGlzLCB7XG4gICAgICAgICAgcGFnaW5hdGlvbjogdCh7XG4gICAgICAgICAgICBkeW5hbWljQnVsbGV0SW5kZXg6IDBcbiAgICAgICAgICB9LCBaKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wYWdpbmF0aW9uLmluaXQoKSwgZS5wYWdpbmF0aW9uLnJlbmRlcigpLCBlLnBhZ2luYXRpb24udXBkYXRlKClcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlSW5kZXhDaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgKGUucGFyYW1zLmxvb3AgfHwgdm9pZCAwID09PSBlLnNuYXBJbmRleCkgJiYgZS5wYWdpbmF0aW9uLnVwZGF0ZSgpXG4gICAgICAgIH0sXG4gICAgICAgIHNuYXBJbmRleENoYW5nZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnBhcmFtcy5sb29wIHx8IGUucGFnaW5hdGlvbi51cGRhdGUoKVxuICAgICAgICB9LFxuICAgICAgICBzbGlkZXNMZW5ndGhDaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wYXJhbXMubG9vcCAmJiAoZS5wYWdpbmF0aW9uLnJlbmRlcigpLCBlLnBhZ2luYXRpb24udXBkYXRlKCkpXG4gICAgICAgIH0sXG4gICAgICAgIHNuYXBHcmlkTGVuZ3RoQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucGFyYW1zLmxvb3AgfHwgKGUucGFnaW5hdGlvbi5yZW5kZXIoKSwgZS5wYWdpbmF0aW9uLnVwZGF0ZSgpKVxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucGFnaW5hdGlvbi5kZXN0cm95KClcbiAgICAgICAgfSxcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgZS5wYXJhbXMucGFnaW5hdGlvbi5lbCAmJiBlLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGVPbkNsaWNrICYmIGUucGFnaW5hdGlvbi4kZWwubGVuZ3RoID4gMCAmJiAhbSh0LnRhcmdldCkuaGFzQ2xhc3MoZS5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcykgJiYgKCEwID09PSBlLnBhZ2luYXRpb24uJGVsLmhhc0NsYXNzKGUucGFyYW1zLnBhZ2luYXRpb24uaGlkZGVuQ2xhc3MpID8gZS5lbWl0KFwicGFnaW5hdGlvblNob3dcIikgOiBlLmVtaXQoXCJwYWdpbmF0aW9uSGlkZVwiKSwgZS5wYWdpbmF0aW9uLiRlbC50b2dnbGVDbGFzcyhlLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGRlbkNsYXNzKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwic2Nyb2xsYmFyXCIsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgZWw6IG51bGwsXG4gICAgICAgICAgZHJhZ1NpemU6IFwiYXV0b1wiLFxuICAgICAgICAgIGhpZGU6ICExLFxuICAgICAgICAgIGRyYWdnYWJsZTogITEsXG4gICAgICAgICAgc25hcE9uUmVsZWFzZTogITAsXG4gICAgICAgICAgbG9ja0NsYXNzOiBcInN3aXBlci1zY3JvbGxiYXItbG9ja1wiLFxuICAgICAgICAgIGRyYWdDbGFzczogXCJzd2lwZXItc2Nyb2xsYmFyLWRyYWdcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIE0odGhpcywge1xuICAgICAgICAgIHNjcm9sbGJhcjogdCh7XG4gICAgICAgICAgICBpc1RvdWNoZWQ6ICExLFxuICAgICAgICAgICAgdGltZW91dDogbnVsbCxcbiAgICAgICAgICAgIGRyYWdUaW1lb3V0OiBudWxsXG4gICAgICAgICAgfSwgSilcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUuc2Nyb2xsYmFyLmluaXQoKSwgZS5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpLCBlLnNjcm9sbGJhci5zZXRUcmFuc2xhdGUoKVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpXG4gICAgICAgIH0sXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnNjcm9sbGJhci51cGRhdGVTaXplKClcbiAgICAgICAgfSxcbiAgICAgICAgb2JzZXJ2ZXJVcGRhdGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpXG4gICAgICAgIH0sXG4gICAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnNjcm9sbGJhci5zZXRUcmFuc2xhdGUoKVxuICAgICAgICB9LFxuICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIGUuc2Nyb2xsYmFyLnNldFRyYW5zaXRpb24odClcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnNjcm9sbGJhci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwicGFyYWxsYXhcIixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBwYXJhbGxheDoge1xuICAgICAgICAgIGVuYWJsZWQ6ICExXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTSh0aGlzLCB7XG4gICAgICAgICAgcGFyYWxsYXg6IHQoe30sIFEpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgYmVmb3JlSW5pdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnBhcmFtcy5wYXJhbGxheC5lbmFibGVkICYmIChlLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gITAsIGUub3JpZ2luYWxQYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyA9ICEwKVxuICAgICAgICB9LFxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQgJiYgZS5wYXJhbGxheC5zZXRUcmFuc2xhdGUoKVxuICAgICAgICB9LFxuICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wYXJhbXMucGFyYWxsYXguZW5hYmxlZCAmJiBlLnBhcmFsbGF4LnNldFRyYW5zbGF0ZSgpXG4gICAgICAgIH0sXG4gICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgZS5wYXJhbXMucGFyYWxsYXguZW5hYmxlZCAmJiBlLnBhcmFsbGF4LnNldFRyYW5zaXRpb24odClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwiem9vbVwiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHpvb206IHtcbiAgICAgICAgICBlbmFibGVkOiAhMSxcbiAgICAgICAgICBtYXhSYXRpbzogMyxcbiAgICAgICAgICBtaW5SYXRpbzogMSxcbiAgICAgICAgICB0b2dnbGU6ICEwLFxuICAgICAgICAgIGNvbnRhaW5lckNsYXNzOiBcInN3aXBlci16b29tLWNvbnRhaW5lclwiLFxuICAgICAgICAgIHpvb21lZFNsaWRlQ2xhc3M6IFwic3dpcGVyLXNsaWRlLXpvb21lZFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBNKGUsIHtcbiAgICAgICAgICB6b29tOiB0KHtcbiAgICAgICAgICAgIGVuYWJsZWQ6ICExLFxuICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICBjdXJyZW50U2NhbGU6IDEsXG4gICAgICAgICAgICBpc1NjYWxpbmc6ICExLFxuICAgICAgICAgICAgZ2VzdHVyZToge1xuICAgICAgICAgICAgICAkc2xpZGVFbDogdm9pZCAwLFxuICAgICAgICAgICAgICBzbGlkZVdpZHRoOiB2b2lkIDAsXG4gICAgICAgICAgICAgIHNsaWRlSGVpZ2h0OiB2b2lkIDAsXG4gICAgICAgICAgICAgICRpbWFnZUVsOiB2b2lkIDAsXG4gICAgICAgICAgICAgICRpbWFnZVdyYXBFbDogdm9pZCAwLFxuICAgICAgICAgICAgICBtYXhSYXRpbzogM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgIGlzVG91Y2hlZDogdm9pZCAwLFxuICAgICAgICAgICAgICBpc01vdmVkOiB2b2lkIDAsXG4gICAgICAgICAgICAgIGN1cnJlbnRYOiB2b2lkIDAsXG4gICAgICAgICAgICAgIGN1cnJlbnRZOiB2b2lkIDAsXG4gICAgICAgICAgICAgIG1pblg6IHZvaWQgMCxcbiAgICAgICAgICAgICAgbWluWTogdm9pZCAwLFxuICAgICAgICAgICAgICBtYXhYOiB2b2lkIDAsXG4gICAgICAgICAgICAgIG1heFk6IHZvaWQgMCxcbiAgICAgICAgICAgICAgd2lkdGg6IHZvaWQgMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiB2b2lkIDAsXG4gICAgICAgICAgICAgIHN0YXJ0WDogdm9pZCAwLFxuICAgICAgICAgICAgICBzdGFydFk6IHZvaWQgMCxcbiAgICAgICAgICAgICAgdG91Y2hlc1N0YXJ0OiB7fSxcbiAgICAgICAgICAgICAgdG91Y2hlc0N1cnJlbnQ6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmVsb2NpdHk6IHtcbiAgICAgICAgICAgICAgeDogdm9pZCAwLFxuICAgICAgICAgICAgICB5OiB2b2lkIDAsXG4gICAgICAgICAgICAgIHByZXZQb3NpdGlvblg6IHZvaWQgMCxcbiAgICAgICAgICAgICAgcHJldlBvc2l0aW9uWTogdm9pZCAwLFxuICAgICAgICAgICAgICBwcmV2VGltZTogdm9pZCAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZWUpXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgaSA9IDE7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnpvb20sIFwic2NhbGVcIiwge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGlmIChpICE9PSB0KSB7XG4gICAgICAgICAgICAgIHZhciBzID0gZS56b29tLmdlc3R1cmUuJGltYWdlRWwgPyBlLnpvb20uZ2VzdHVyZS4kaW1hZ2VFbFswXSA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBhID0gZS56b29tLmdlc3R1cmUuJHNsaWRlRWwgPyBlLnpvb20uZ2VzdHVyZS4kc2xpZGVFbFswXSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgZS5lbWl0KFwiem9vbUNoYW5nZVwiLCB0LCBzLCBhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA9IHRcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnBhcmFtcy56b29tLmVuYWJsZWQgJiYgZS56b29tLmVuYWJsZSgpXG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS56b29tLmRpc2FibGUoKVxuICAgICAgICB9LFxuICAgICAgICB0b3VjaFN0YXJ0OiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIGUuem9vbS5lbmFibGVkICYmIGUuem9vbS5vblRvdWNoU3RhcnQodClcbiAgICAgICAgfSxcbiAgICAgICAgdG91Y2hFbmQ6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgZS56b29tLmVuYWJsZWQgJiYgZS56b29tLm9uVG91Y2hFbmQodClcbiAgICAgICAgfSxcbiAgICAgICAgZG91YmxlVGFwOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIGUucGFyYW1zLnpvb20uZW5hYmxlZCAmJiBlLnpvb20uZW5hYmxlZCAmJiBlLnBhcmFtcy56b29tLnRvZ2dsZSAmJiBlLnpvb20udG9nZ2xlKHQpXG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS56b29tLmVuYWJsZWQgJiYgZS5wYXJhbXMuem9vbS5lbmFibGVkICYmIGUuem9vbS5vblRyYW5zaXRpb25FbmQoKVxuICAgICAgICB9LFxuICAgICAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnpvb20uZW5hYmxlZCAmJiBlLnBhcmFtcy56b29tLmVuYWJsZWQgJiYgZS5wYXJhbXMuY3NzTW9kZSAmJiBlLnpvb20ub25UcmFuc2l0aW9uRW5kKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibGF6eVwiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGxhenk6IHtcbiAgICAgICAgICBlbmFibGVkOiAhMSxcbiAgICAgICAgICBsb2FkUHJldk5leHQ6ICExLFxuICAgICAgICAgIGxvYWRQcmV2TmV4dEFtb3VudDogMSxcbiAgICAgICAgICBsb2FkT25UcmFuc2l0aW9uU3RhcnQ6ICExLFxuICAgICAgICAgIGVsZW1lbnRDbGFzczogXCJzd2lwZXItbGF6eVwiLFxuICAgICAgICAgIGxvYWRpbmdDbGFzczogXCJzd2lwZXItbGF6eS1sb2FkaW5nXCIsXG4gICAgICAgICAgbG9hZGVkQ2xhc3M6IFwic3dpcGVyLWxhenktbG9hZGVkXCIsXG4gICAgICAgICAgcHJlbG9hZGVyQ2xhc3M6IFwic3dpcGVyLWxhenktcHJlbG9hZGVyXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBNKHRoaXMsIHtcbiAgICAgICAgICBsYXp5OiB0KHtcbiAgICAgICAgICAgIGluaXRpYWxJbWFnZUxvYWRlZDogITFcbiAgICAgICAgICB9LCB0ZSlcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucGFyYW1zLmxhenkuZW5hYmxlZCAmJiBlLnBhcmFtcy5wcmVsb2FkSW1hZ2VzICYmIChlLnBhcmFtcy5wcmVsb2FkSW1hZ2VzID0gITEpXG4gICAgICAgIH0sXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wYXJhbXMubGF6eS5lbmFibGVkICYmICFlLnBhcmFtcy5sb29wICYmIDAgPT09IGUucGFyYW1zLmluaXRpYWxTbGlkZSAmJiBlLmxhenkubG9hZCgpXG4gICAgICAgIH0sXG4gICAgICAgIHNjcm9sbDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnBhcmFtcy5mcmVlTW9kZSAmJiAhZS5wYXJhbXMuZnJlZU1vZGVTdGlja3kgJiYgZS5sYXp5LmxvYWQoKVxuICAgICAgICB9LFxuICAgICAgICByZXNpemU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wYXJhbXMubGF6eS5lbmFibGVkICYmIGUubGF6eS5sb2FkKClcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsYmFyRHJhZ01vdmU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wYXJhbXMubGF6eS5lbmFibGVkICYmIGUubGF6eS5sb2FkKClcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNpdGlvblN0YXJ0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucGFyYW1zLmxhenkuZW5hYmxlZCAmJiAoZS5wYXJhbXMubGF6eS5sb2FkT25UcmFuc2l0aW9uU3RhcnQgfHwgIWUucGFyYW1zLmxhenkubG9hZE9uVHJhbnNpdGlvblN0YXJ0ICYmICFlLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkKSAmJiBlLmxhenkubG9hZCgpXG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wYXJhbXMubGF6eS5lbmFibGVkICYmICFlLnBhcmFtcy5sYXp5LmxvYWRPblRyYW5zaXRpb25TdGFydCAmJiBlLmxhenkubG9hZCgpXG4gICAgICAgIH0sXG4gICAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucGFyYW1zLmxhenkuZW5hYmxlZCAmJiBlLnBhcmFtcy5jc3NNb2RlICYmIGUubGF6eS5sb2FkKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwiY29udHJvbGxlclwiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGNvbnRyb2xsZXI6IHtcbiAgICAgICAgICBjb250cm9sOiB2b2lkIDAsXG4gICAgICAgICAgaW52ZXJzZTogITEsXG4gICAgICAgICAgYnk6IFwic2xpZGVcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIE0odGhpcywge1xuICAgICAgICAgIGNvbnRyb2xsZXI6IHQoe1xuICAgICAgICAgICAgY29udHJvbDogdGhpcy5wYXJhbXMuY29udHJvbGxlci5jb250cm9sXG4gICAgICAgICAgfSwgaWUpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUuY29udHJvbGxlci5jb250cm9sICYmIGUuY29udHJvbGxlci5zcGxpbmUgJiYgKGUuY29udHJvbGxlci5zcGxpbmUgPSB2b2lkIDAsIGRlbGV0ZSBlLmNvbnRyb2xsZXIuc3BsaW5lKVxuICAgICAgICB9LFxuICAgICAgICByZXNpemU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5jb250cm9sbGVyLmNvbnRyb2wgJiYgZS5jb250cm9sbGVyLnNwbGluZSAmJiAoZS5jb250cm9sbGVyLnNwbGluZSA9IHZvaWQgMCwgZGVsZXRlIGUuY29udHJvbGxlci5zcGxpbmUpXG4gICAgICAgIH0sXG4gICAgICAgIG9ic2VydmVyVXBkYXRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUuY29udHJvbGxlci5jb250cm9sICYmIGUuY29udHJvbGxlci5zcGxpbmUgJiYgKGUuY29udHJvbGxlci5zcGxpbmUgPSB2b2lkIDAsIGRlbGV0ZSBlLmNvbnRyb2xsZXIuc3BsaW5lKVxuICAgICAgICB9LFxuICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIChlLCB0LCBpKSB7XG4gICAgICAgICAgZS5jb250cm9sbGVyLmNvbnRyb2wgJiYgZS5jb250cm9sbGVyLnNldFRyYW5zbGF0ZSh0LCBpKVxuICAgICAgICB9LFxuICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZSwgdCwgaSkge1xuICAgICAgICAgIGUuY29udHJvbGxlci5jb250cm9sICYmIGUuY29udHJvbGxlci5zZXRUcmFuc2l0aW9uKHQsIGkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcImExMXlcIixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBhMTF5OiB7XG4gICAgICAgICAgZW5hYmxlZDogITAsXG4gICAgICAgICAgbm90aWZpY2F0aW9uQ2xhc3M6IFwic3dpcGVyLW5vdGlmaWNhdGlvblwiLFxuICAgICAgICAgIHByZXZTbGlkZU1lc3NhZ2U6IFwiUHJldmlvdXMgc2xpZGVcIixcbiAgICAgICAgICBuZXh0U2xpZGVNZXNzYWdlOiBcIk5leHQgc2xpZGVcIixcbiAgICAgICAgICBmaXJzdFNsaWRlTWVzc2FnZTogXCJUaGlzIGlzIHRoZSBmaXJzdCBzbGlkZVwiLFxuICAgICAgICAgIGxhc3RTbGlkZU1lc3NhZ2U6IFwiVGhpcyBpcyB0aGUgbGFzdCBzbGlkZVwiLFxuICAgICAgICAgIHBhZ2luYXRpb25CdWxsZXRNZXNzYWdlOiBcIkdvIHRvIHNsaWRlIHt7aW5kZXh9fVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTSh0aGlzLCB7XG4gICAgICAgICAgYTExeTogdCh0KHt9LCBzZSksIHt9LCB7XG4gICAgICAgICAgICBsaXZlUmVnaW9uOiBtKCc8c3BhbiBjbGFzcz1cIicgKyB0aGlzLnBhcmFtcy5hMTF5Lm5vdGlmaWNhdGlvbkNsYXNzICsgJ1wiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiPjwvc3Bhbj4nKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnBhcmFtcy5hMTF5LmVuYWJsZWQgJiYgKGUuYTExeS5pbml0KCksIGUuYTExeS51cGRhdGVOYXZpZ2F0aW9uKCkpXG4gICAgICAgIH0sXG4gICAgICAgIHRvRWRnZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnBhcmFtcy5hMTF5LmVuYWJsZWQgJiYgZS5hMTF5LnVwZGF0ZU5hdmlnYXRpb24oKVxuICAgICAgICB9LFxuICAgICAgICBmcm9tRWRnZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnBhcmFtcy5hMTF5LmVuYWJsZWQgJiYgZS5hMTF5LnVwZGF0ZU5hdmlnYXRpb24oKVxuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uVXBkYXRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucGFyYW1zLmExMXkuZW5hYmxlZCAmJiBlLmExMXkudXBkYXRlUGFnaW5hdGlvbigpXG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wYXJhbXMuYTExeS5lbmFibGVkICYmIGUuYTExeS5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwiaGlzdG9yeVwiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgICBlbmFibGVkOiAhMSxcbiAgICAgICAgICByZXBsYWNlU3RhdGU6ICExLFxuICAgICAgICAgIGtleTogXCJzbGlkZXNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIE0odGhpcywge1xuICAgICAgICAgIGhpc3Rvcnk6IHQoe30sIGFlKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wYXJhbXMuaGlzdG9yeS5lbmFibGVkICYmIGUuaGlzdG9yeS5pbml0KClcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQgJiYgZS5oaXN0b3J5LmRlc3Ryb3koKVxuICAgICAgICB9LFxuICAgICAgICB0cmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUuaGlzdG9yeS5pbml0aWFsaXplZCAmJiBlLmhpc3Rvcnkuc2V0SGlzdG9yeShlLnBhcmFtcy5oaXN0b3J5LmtleSwgZS5hY3RpdmVJbmRleClcbiAgICAgICAgfSxcbiAgICAgICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5oaXN0b3J5LmluaXRpYWxpemVkICYmIGUucGFyYW1zLmNzc01vZGUgJiYgZS5oaXN0b3J5LnNldEhpc3RvcnkoZS5wYXJhbXMuaGlzdG9yeS5rZXksIGUuYWN0aXZlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcImhhc2gtbmF2aWdhdGlvblwiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGhhc2hOYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgZW5hYmxlZDogITEsXG4gICAgICAgICAgcmVwbGFjZVN0YXRlOiAhMSxcbiAgICAgICAgICB3YXRjaFN0YXRlOiAhMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIE0odGhpcywge1xuICAgICAgICAgIGhhc2hOYXZpZ2F0aW9uOiB0KHtcbiAgICAgICAgICAgIGluaXRpYWxpemVkOiAhMVxuICAgICAgICAgIH0sIHJlKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCAmJiBlLmhhc2hOYXZpZ2F0aW9uLmluaXQoKVxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQgJiYgZS5oYXNoTmF2aWdhdGlvbi5kZXN0cm95KClcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLmhhc2hOYXZpZ2F0aW9uLmluaXRpYWxpemVkICYmIGUuaGFzaE5hdmlnYXRpb24uc2V0SGFzaCgpXG4gICAgICAgIH0sXG4gICAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUuaGFzaE5hdmlnYXRpb24uaW5pdGlhbGl6ZWQgJiYgZS5wYXJhbXMuY3NzTW9kZSAmJiBlLmhhc2hOYXZpZ2F0aW9uLnNldEhhc2goKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJhdXRvcGxheVwiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgZW5hYmxlZDogITEsXG4gICAgICAgICAgZGVsYXk6IDNlMyxcbiAgICAgICAgICB3YWl0Rm9yVHJhbnNpdGlvbjogITAsXG4gICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246ICEwLFxuICAgICAgICAgIHN0b3BPbkxhc3RTbGlkZTogITEsXG4gICAgICAgICAgcmV2ZXJzZURpcmVjdGlvbjogITFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBNKHRoaXMsIHtcbiAgICAgICAgICBhdXRvcGxheTogdCh0KHt9LCBuZSksIHt9LCB7XG4gICAgICAgICAgICBydW5uaW5nOiAhMSxcbiAgICAgICAgICAgIHBhdXNlZDogITFcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wYXJhbXMuYXV0b3BsYXkuZW5hYmxlZCAmJiAoZS5hdXRvcGxheS5zdGFydCgpLCByKCkuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgZS5hdXRvcGxheS5vblZpc2liaWxpdHlDaGFuZ2UpKVxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVUcmFuc2l0aW9uU3RhcnQ6IGZ1bmN0aW9uIChlLCB0LCBpKSB7XG4gICAgICAgICAgZS5hdXRvcGxheS5ydW5uaW5nICYmIChpIHx8ICFlLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbiA/IGUuYXV0b3BsYXkucGF1c2UodCkgOiBlLmF1dG9wbGF5LnN0b3AoKSlcbiAgICAgICAgfSxcbiAgICAgICAgc2xpZGVyRmlyc3RNb3ZlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUuYXV0b3BsYXkucnVubmluZyAmJiAoZS5wYXJhbXMuYXV0b3BsYXkuZGlzYWJsZU9uSW50ZXJhY3Rpb24gPyBlLmF1dG9wbGF5LnN0b3AoKSA6IGUuYXV0b3BsYXkucGF1c2UoKSlcbiAgICAgICAgfSxcbiAgICAgICAgdG91Y2hFbmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wYXJhbXMuY3NzTW9kZSAmJiBlLmF1dG9wbGF5LnBhdXNlZCAmJiAhZS5wYXJhbXMuYXV0b3BsYXkuZGlzYWJsZU9uSW50ZXJhY3Rpb24gJiYgZS5hdXRvcGxheS5ydW4oKVxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUuYXV0b3BsYXkucnVubmluZyAmJiBlLmF1dG9wbGF5LnN0b3AoKSwgcigpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGUuYXV0b3BsYXkub25WaXNpYmlsaXR5Q2hhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJlZmZlY3QtZmFkZVwiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGZhZGVFZmZlY3Q6IHtcbiAgICAgICAgICBjcm9zc0ZhZGU6ICExXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTSh0aGlzLCB7XG4gICAgICAgICAgZmFkZUVmZmVjdDogdCh7fSwgbGUpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgYmVmb3JlSW5pdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoXCJmYWRlXCIgPT09IGUucGFyYW1zLmVmZmVjdCkge1xuICAgICAgICAgICAgZS5jbGFzc05hbWVzLnB1c2goZS5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwiZmFkZVwiKTtcbiAgICAgICAgICAgIHZhciB0ID0ge1xuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgICAgICBzbGlkZXNQZXJDb2x1bW46IDEsXG4gICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiAhMCxcbiAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgICAgICAgICB2aXJ0dWFsVHJhbnNsYXRlOiAhMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFMoZS5wYXJhbXMsIHQpLCBTKGUub3JpZ2luYWxQYXJhbXMsIHQpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgXCJmYWRlXCIgPT09IGUucGFyYW1zLmVmZmVjdCAmJiBlLmZhZGVFZmZlY3Quc2V0VHJhbnNsYXRlKClcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBcImZhZGVcIiA9PT0gZS5wYXJhbXMuZWZmZWN0ICYmIGUuZmFkZUVmZmVjdC5zZXRUcmFuc2l0aW9uKHQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcImVmZmVjdC1jdWJlXCIsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgY3ViZUVmZmVjdDoge1xuICAgICAgICAgIHNsaWRlU2hhZG93czogITAsXG4gICAgICAgICAgc2hhZG93OiAhMCxcbiAgICAgICAgICBzaGFkb3dPZmZzZXQ6IDIwLFxuICAgICAgICAgIHNoYWRvd1NjYWxlOiAuOTRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBNKHRoaXMsIHtcbiAgICAgICAgICBjdWJlRWZmZWN0OiB0KHt9LCBvZSlcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmIChcImN1YmVcIiA9PT0gZS5wYXJhbXMuZWZmZWN0KSB7XG4gICAgICAgICAgICBlLmNsYXNzTmFtZXMucHVzaChlLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCJjdWJlXCIpLCBlLmNsYXNzTmFtZXMucHVzaChlLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCIzZFwiKTtcbiAgICAgICAgICAgIHZhciB0ID0ge1xuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgICAgICBzbGlkZXNQZXJDb2x1bW46IDEsXG4gICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiAhMCxcbiAgICAgICAgICAgICAgcmVzaXN0YW5jZVJhdGlvOiAwLFxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiAhMSxcbiAgICAgICAgICAgICAgdmlydHVhbFRyYW5zbGF0ZTogITBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBTKGUucGFyYW1zLCB0KSwgUyhlLm9yaWdpbmFsUGFyYW1zLCB0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIFwiY3ViZVwiID09PSBlLnBhcmFtcy5lZmZlY3QgJiYgZS5jdWJlRWZmZWN0LnNldFRyYW5zbGF0ZSgpXG4gICAgICAgIH0sXG4gICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgXCJjdWJlXCIgPT09IGUucGFyYW1zLmVmZmVjdCAmJiBlLmN1YmVFZmZlY3Quc2V0VHJhbnNpdGlvbih0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJlZmZlY3QtZmxpcFwiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGZsaXBFZmZlY3Q6IHtcbiAgICAgICAgICBzbGlkZVNoYWRvd3M6ICEwLFxuICAgICAgICAgIGxpbWl0Um90YXRpb246ICEwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTSh0aGlzLCB7XG4gICAgICAgICAgZmxpcEVmZmVjdDogdCh7fSwgZGUpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgYmVmb3JlSW5pdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoXCJmbGlwXCIgPT09IGUucGFyYW1zLmVmZmVjdCkge1xuICAgICAgICAgICAgZS5jbGFzc05hbWVzLnB1c2goZS5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwiZmxpcFwiKSwgZS5jbGFzc05hbWVzLnB1c2goZS5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwiM2RcIik7XG4gICAgICAgICAgICB2YXIgdCA9IHtcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgICAgICAgc2xpZGVzUGVyQ29sdW1uOiAxLFxuICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogITAsXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgICAgICAgICAgdmlydHVhbFRyYW5zbGF0ZTogITBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBTKGUucGFyYW1zLCB0KSwgUyhlLm9yaWdpbmFsUGFyYW1zLCB0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIFwiZmxpcFwiID09PSBlLnBhcmFtcy5lZmZlY3QgJiYgZS5mbGlwRWZmZWN0LnNldFRyYW5zbGF0ZSgpXG4gICAgICAgIH0sXG4gICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgXCJmbGlwXCIgPT09IGUucGFyYW1zLmVmZmVjdCAmJiBlLmZsaXBFZmZlY3Quc2V0VHJhbnNpdGlvbih0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJlZmZlY3QtY292ZXJmbG93XCIsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgY292ZXJmbG93RWZmZWN0OiB7XG4gICAgICAgICAgcm90YXRlOiA1MCxcbiAgICAgICAgICBzdHJldGNoOiAwLFxuICAgICAgICAgIGRlcHRoOiAxMDAsXG4gICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgbW9kaWZpZXI6IDEsXG4gICAgICAgICAgc2xpZGVTaGFkb3dzOiAhMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIE0odGhpcywge1xuICAgICAgICAgIGNvdmVyZmxvd0VmZmVjdDogdCh7fSwgaGUpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgYmVmb3JlSW5pdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBcImNvdmVyZmxvd1wiID09PSBlLnBhcmFtcy5lZmZlY3QgJiYgKGUuY2xhc3NOYW1lcy5wdXNoKGUucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcImNvdmVyZmxvd1wiKSwgZS5jbGFzc05hbWVzLnB1c2goZS5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwiM2RcIiksIGUucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgPSAhMCwgZS5vcmlnaW5hbFBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gITApXG4gICAgICAgIH0sXG4gICAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBcImNvdmVyZmxvd1wiID09PSBlLnBhcmFtcy5lZmZlY3QgJiYgZS5jb3ZlcmZsb3dFZmZlY3Quc2V0VHJhbnNsYXRlKClcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBcImNvdmVyZmxvd1wiID09PSBlLnBhcmFtcy5lZmZlY3QgJiYgZS5jb3ZlcmZsb3dFZmZlY3Quc2V0VHJhbnNpdGlvbih0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ0aHVtYnNcIixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB0aHVtYnM6IHtcbiAgICAgICAgICBzd2lwZXI6IG51bGwsXG4gICAgICAgICAgbXVsdGlwbGVBY3RpdmVUaHVtYnM6ICEwLFxuICAgICAgICAgIGF1dG9TY3JvbGxPZmZzZXQ6IDAsXG4gICAgICAgICAgc2xpZGVUaHVtYkFjdGl2ZUNsYXNzOiBcInN3aXBlci1zbGlkZS10aHVtYi1hY3RpdmVcIixcbiAgICAgICAgICB0aHVtYnNDb250YWluZXJDbGFzczogXCJzd2lwZXItY29udGFpbmVyLXRodW1ic1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTSh0aGlzLCB7XG4gICAgICAgICAgdGh1bWJzOiB0KHtcbiAgICAgICAgICAgIHN3aXBlcjogbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxpemVkOiAhMVxuICAgICAgICAgIH0sIHBlKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBlLnBhcmFtcy50aHVtYnM7XG4gICAgICAgICAgdCAmJiB0LnN3aXBlciAmJiAoZS50aHVtYnMuaW5pdCgpLCBlLnRodW1icy51cGRhdGUoITApKVxuICAgICAgICB9LFxuICAgICAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnRodW1icy5zd2lwZXIgJiYgZS50aHVtYnMudXBkYXRlKClcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUudGh1bWJzLnN3aXBlciAmJiBlLnRodW1icy51cGRhdGUoKVxuICAgICAgICB9LFxuICAgICAgICByZXNpemU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS50aHVtYnMuc3dpcGVyICYmIGUudGh1bWJzLnVwZGF0ZSgpXG4gICAgICAgIH0sXG4gICAgICAgIG9ic2VydmVyVXBkYXRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUudGh1bWJzLnN3aXBlciAmJiBlLnRodW1icy51cGRhdGUoKVxuICAgICAgICB9LFxuICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHZhciBpID0gZS50aHVtYnMuc3dpcGVyO1xuICAgICAgICAgIGkgJiYgaS5zZXRUcmFuc2l0aW9uKHQpXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBlLnRodW1icy5zd2lwZXI7XG4gICAgICAgICAgdCAmJiBlLnRodW1icy5zd2lwZXJDcmVhdGVkICYmIHQgJiYgdC5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dO1xuICByZXR1cm4gVy51c2UodWUpLCBXXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2lwZXItYnVuZGxlLm1pbi5qcy5tYXBcbiJdfQ==
