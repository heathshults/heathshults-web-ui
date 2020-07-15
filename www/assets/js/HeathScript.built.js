/*!
* Heathen's Profile - HeathenScript v2.0.0 (https://heathshults.com/)
* Copyright 2020-2020 Heath Shults
* Licensed under MIT (https://github.com/heathshults.com/heath-shults-web/blob/master/LICENSE)
*/
[object Object][object Object][object Object](function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require('./js/scripts.js');

require('./js/modules/show-more-fadebar');

require('./js/jqBootstrapValidation');

require('./js/contact_me');

},{"./js/contact_me":2,"./js/jqBootstrapValidation":3,"./js/modules/show-more-fadebar":4,"./js/scripts.js":6}],2:[function(require,module,exports){
"use strict";

// Contact Form Scripts
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

},{}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

},{}],4:[function(require,module,exports){
"use strict";

module.exports = require('./show-more.js');

},{"./show-more.js":5}],5:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

},{}],6:[function(require,module,exports){
"use strict";

/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
(function ($) {
  "use strict"; // Start of use strict
  // ====== RANKING BARS

  var theBars = document.querySelectorAll('.progress-bar');
  theBars.forEach(function (aBar) {
    // eslint-disable-next-line no-undef
    var barWidth = $(aBar).attr('aria-valuenow');
    $(aBar).attr('style', "width: ".concat(barWidth, "%"));
  }); // Smooth scrolling using jQuery easing

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
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

  $(".js-scroll-trigger").on('click', function () {
    $(".navbar-collapse").collapse("hide");
  }); // Activate scrollspy to add active class to navbar items on scroll

  $("body").scrollspy({
    target: "#mainNav",
    offset: 74
  }); // Collapse Navbar

  var navbarCollapse = function navbarCollapse() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }; // Collapse now if page is not at top


  navbarCollapse(); // Collapse the navbar when page is scrolled
  // $(window).scroll(navbarCollapse); //deprecated
  // $(window).on('scroll', navbarCollapse);

  window.addEventListener('scroll', navbarCollapse, false); // ** ====== MODE WIDHET ====== ** //

  var $dm_btn = $('#mode_widget');
  var lsGetMode = localStorage.getItem('dark_mode'); // set button text

  $(document).ready(function () {
    if (lsGetMode === 'fasle') {
      setModeText(true); //$dm_btn.html('<span class="which-mode">Dark Mode<span id="mode_icon" class="fa fa-moon-o mode-icon"></span></span>')
    } else {
      setModeText(false); // $dm_btn.html('<span class="which-mode">Light Mode<span id="mode_icon" class="fa fa-sun-o mode-icon"></span></span>')
    }
  });

  function setModeText(mode) {
    if (mode === 'true') {
      $dm_btn.html('<span class="which-mode"> Dark Mode<span id="mode_icon" class="fa fa-moon-o mode-icon"></span></span>');
    } else {
      $dm_btn.html('<span class="which-mode"> Light Mode<span id="mode_icon" class="fa fa-sun-o mode-icon"></span></span>');
    }
  }

  function setMode(mode) {
    localStorage.setItem('dark_mode', "".concat(mode));
    document.querySelector('#darkmode').disabled = mode;

    if (mode === 'true') {
      document.querySelector('#darkmode').disabled = false;
      $dm_btn.html('<span class="which-mode"> Dark Mode<span id="mode_icon" class="fa fa-moon-o mode-icon"></span></span>'); // document.querySelector('link[href="css/theme-dark-mode.css"]').disabled = false;
    } else {
      $dm_btn.html('<span class="which-mode"> Light Mode<span id="mode_icon" class="fa fa-sun-o mode-icon"></span></span>');
    }

    return setModeText(mode);
  } // Theme switcher


  $dm_btn.bind('click', function (event) {
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvanMvY29udGFjdF9tZS5qcyIsInNyYy9qcy9qcUJvb3RzdHJhcFZhbGlkYXRpb24uanMiLCJzcmMvanMvbW9kdWxlcy9zaG93LW1vcmUtZmFkZWJhci9pbmRleC5qcyIsInNyYy9qcy9tb2R1bGVzL3Nob3ctbW9yZS1mYWRlYmFyL3Nob3ctbW9yZS5qcyIsInNyYy9qcy9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxPQUFPLENBQUMsaUJBQUQsQ0FBUDs7QUFDQSxPQUFPLENBQUMsZ0NBQUQsQ0FBUDs7QUFDQSxPQUFPLENBQUMsNEJBQUQsQ0FBUDs7QUFDQSxPQUFPLENBQUMsaUJBQUQsQ0FBUDs7Ozs7QUNIQTtBQUVBLENBQUMsQ0FBQyxZQUFXO0FBRVQsRUFBQSxDQUFDLENBQUMsMENBQUQsQ0FBRCxDQUE4QyxxQkFBOUMsQ0FBb0U7QUFDaEUsSUFBQSxhQUFhLEVBQUUsSUFEaUQ7QUFFaEUsSUFBQSxXQUFXLEVBQUUscUJBQVMsS0FBVCxFQUFnQixLQUFoQixFQUF1QixNQUF2QixFQUErQixDQUN4QztBQUNILEtBSitEO0FBS2hFLElBQUEsYUFBYSxFQUFFLHVCQUFTLEtBQVQsRUFBZ0IsS0FBaEIsRUFBdUI7QUFDbEMsTUFBQSxLQUFLLENBQUMsY0FBTixHQURrQyxDQUNWO0FBQ3hCOztBQUNBLFVBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsR0FBaEIsRUFBWDtBQUNBLFVBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsR0FBakIsRUFBWjtBQUNBLFVBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsR0FBakIsRUFBWjtBQUNBLFVBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCLEdBQXRCLEVBQWQ7QUFDQSxV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a0IsRUFBRSxTQVJDO0FBU3JCLElBQUEsdUJBQXVCLEVBQUUsVUFUSjtBQVVyQixJQUFBLGlCQUFpQixFQUFFLFNBVkU7QUFXckIsSUFBQSxzQkFBc0IsRUFBRSxTQVhIO0FBWXJCLElBQUEsc0JBQXNCLEVBQUUsTUFaSDtBQWFyQixJQUFBLG1CQUFtQixFQUFFLFNBYkE7QUFjckIsSUFBQSx3QkFBd0IsRUFBRTtBQWRMLEdBQXZCO0FBaUJILENBaklFLEVBaUlBLE1BaklBLEUsQ0FpSVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJyZXF1aXJlKCcuL2pzL3NjcmlwdHMuanMnKVxucmVxdWlyZSgnLi9qcy9tb2R1bGVzL3Nob3ctbW9yZS1mYWRlYmFyJylcbnJlcXVpcmUoJy4vanMvanFCb290c3RyYXBWYWxpZGF0aW9uJylcbnJlcXVpcmUoJy4vanMvY29udGFjdF9tZScpXG4iLCIvLyBDb250YWN0IEZvcm0gU2NyaXB0c1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAkKFwiI2NvbnRhY3RGb3JtIGlucHV0LCNjb250YWN0Rm9ybSB0ZXh0YXJlYVwiKS5qcUJvb3RzdHJhcFZhbGlkYXRpb24oe1xyXG4gICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXHJcbiAgICAgICAgc3VibWl0RXJyb3I6IGZ1bmN0aW9uKCRmb3JtLCBldmVudCwgZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZGl0aW9uYWwgZXJyb3IgbWVzc2FnZXMgb3IgZXZlbnRzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJtaXRTdWNjZXNzOiBmdW5jdGlvbigkZm9ybSwgZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBkZWZhdWx0IHN1Ym1pdCBiZWhhdmlvdXJcclxuICAgICAgICAgICAgLy8gZ2V0IHZhbHVlcyBmcm9tIEZPUk1cclxuICAgICAgICAgICAgdmFyIG5hbWUgPSAkKFwiaW5wdXQjbmFtZVwiKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIGVtYWlsID0gJChcImlucHV0I2VtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgcGhvbmUgPSAkKFwiaW5wdXQjcGhvbmVcIikudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gJChcInRleHRhcmVhI21lc3NhZ2VcIikudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBmaXJzdE5hbWUgPSBuYW1lOyAvLyBGb3IgU3VjY2Vzcy9GYWlsdXJlIE1lc3NhZ2VcclxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHdoaXRlIHNwYWNlIGluIG5hbWUgZm9yIFN1Y2Nlc3MvRmFpbCBtZXNzYWdlXHJcbiAgICAgICAgICAgIGlmIChmaXJzdE5hbWUuaW5kZXhPZignICcpID49IDApIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSA9IG5hbWUuc3BsaXQoJyAnKS5zbGljZSgwLCAtMSkuam9pbignICcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi8uL21haWwvY29udGFjdF9tZS5waHBcIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VjY2VzcyBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3MnKS5odG1sKFwiPGRpdiBjbGFzcz0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNzdWNjZXNzID4gLmFsZXJ0LXN1Y2Nlc3MnKS5odG1sKFwiPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdhbGVydCcgYXJpYS1oaWRkZW49J3RydWUnPiZ0aW1lcztcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcIjwvYnV0dG9uPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjc3VjY2VzcyA+IC5hbGVydC1zdWNjZXNzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcIjxzdHJvbmc+WW91ciBtZXNzYWdlIGhhcyBiZWVuIHNlbnQuIDwvc3Ryb25nPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjc3VjY2VzcyA+IC5hbGVydC1zdWNjZXNzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgnPC9kaXY+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY2xlYXIgYWxsIGZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjb250YWN0Rm9ybScpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRmFpbCBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3MnKS5odG1sKFwiPGRpdiBjbGFzcz0nYWxlcnQgYWxlcnQtZGFuZ2VyJz5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3MgPiAuYWxlcnQtZGFuZ2VyJykuaHRtbChcIjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nYWxlcnQnIGFyaWEtaGlkZGVuPSd0cnVlJz4mdGltZXM7XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCI8L2J1dHRvbj5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3MgPiAuYWxlcnQtZGFuZ2VyJykuYXBwZW5kKFwiPHN0cm9uZz5Tb3JyeSBcIiArIGZpcnN0TmFtZSArIFwiLCBpdCBzZWVtcyB0aGF0IG15IG1haWwgc2VydmVyIGlzIG5vdCByZXNwb25kaW5nLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjc3VjY2VzcyA+IC5hbGVydC1kYW5nZXInKS5hcHBlbmQoJzwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2xlYXIgYWxsIGZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjb250YWN0Rm9ybScpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuICQodGhpcykuaXMoXCI6dmlzaWJsZVwiKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcImFbZGF0YS10b2dnbGU9XFxcInRhYlxcXCJdXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS50YWIoXCJzaG93XCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8qV2hlbiBjbGlja2luZyBvbiBGdWxsIGhpZGUgZmFpbC9zdWNjZXNzIGJveGVzICovXHJcbiQoJyNuYW1lJykuZm9jdXMoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcjc3VjY2VzcycpLmh0bWwoJycpO1xyXG59KTtcclxuIiwiLyoganFCb290c3RyYXBWYWxpZGF0aW9uXHJcbiAqIEEgcGx1Z2luIGZvciBhdXRvbWF0aW5nIHZhbGlkYXRpb24gb24gVHdpdHRlciBCb290c3RyYXAgZm9ybWF0dGVkIGZvcm1zLlxyXG4gKlxyXG4gKiB2MS4zLjZcclxuICpcclxuICogTGljZW5zZTogTUlUIDxodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwPiAtIHNlZSBMSUNFTlNFIGZpbGVcclxuICpcclxuICogaHR0cDovL1JlYWN0aXZlUmF2ZW4uZ2l0aHViLmNvbS9qcUJvb3RzdHJhcFZhbGlkYXRpb24vXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uKCAkICl7XHJcblxyXG5cdHZhciBjcmVhdGVkRWxlbWVudHMgPSBbXTtcclxuXHJcblx0dmFyIGRlZmF1bHRzID0ge1xyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHRwcmVwZW5kRXhpc3RpbmdIZWxwQmxvY2s6IGZhbHNlLFxyXG5cdFx0XHRzbmlmZkh0bWw6IHRydWUsIC8vIHNuaWZmIGZvciAncmVxdWlyZWQnLCAnbWF4bGVuZ3RoJywgZXRjXHJcblx0XHRcdHByZXZlbnRTdWJtaXQ6IHRydWUsIC8vIHN0b3AgdGhlIGZvcm0gc3VibWl0IGV2ZW50IGZyb20gZmlyaW5nIGlmIHZhbGlkYXRpb24gZmFpbHNcclxuXHRcdFx0c3VibWl0RXJyb3I6IGZhbHNlLCAvLyBmdW5jdGlvbiBjYWxsZWQgaWYgdGhlcmUgaXMgYW4gZXJyb3Igd2hlbiB0cnlpbmcgdG8gc3VibWl0XHJcblx0XHRcdHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLCAvLyBmdW5jdGlvbiBjYWxsZWQganVzdCBiZWZvcmUgYSBzdWNjZXNzZnVsIHN1Ym1pdCBldmVudCBpcyBzZW50IHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgICAgc2VtYW50aWNhbGx5U3RyaWN0OiBmYWxzZSwgLy8gc2V0IHRvIHRydWUgdG8gdGlkeSB1cCBnZW5lcmF0ZWQgSFRNTCBvdXRwdXRcclxuXHRcdFx0YXV0b0FkZDoge1xyXG5cdFx0XHRcdGhlbHBCbG9ja3M6IHRydWVcclxuXHRcdFx0fSxcclxuICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gJCh0aGlzKS5pcyhcIjp2aXNpYmxlXCIpOyAvLyBvbmx5IHZhbGlkYXRlIGVsZW1lbnRzIHlvdSBjYW4gc2VlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gdmFsaWRhdGUgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBpbml0IDogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkZWZhdWx0cyk7XHJcblxyXG4gICAgICAgIHNldHRpbmdzLm9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCBzZXR0aW5ncy5vcHRpb25zLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyICRzaWJsaW5nRWxlbWVudHMgPSB0aGlzO1xyXG5cclxuICAgICAgICB2YXIgdW5pcXVlRm9ybXMgPSAkLnVuaXF1ZShcclxuICAgICAgICAgICRzaWJsaW5nRWxlbWVudHMubWFwKCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLnBhcmVudHMoXCJmb3JtXCIpWzBdO1xyXG4gICAgICAgICAgfSkudG9BcnJheSgpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgJCh1bmlxdWVGb3JtcykuYmluZChcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdmFyICRmb3JtID0gJCh0aGlzKTtcclxuICAgICAgICAgIHZhciB3YXJuaW5nc0ZvdW5kID0gMDtcclxuICAgICAgICAgIHZhciAkaW5wdXRzID0gJGZvcm0uZmluZChcImlucHV0LHRleHRhcmVhLHNlbGVjdFwiKS5ub3QoXCJbdHlwZT1zdWJtaXRdLFt0eXBlPWltYWdlXVwiKS5maWx0ZXIoc2V0dGluZ3Mub3B0aW9ucy5maWx0ZXIpO1xyXG4gICAgICAgICAgJGlucHV0cy50cmlnZ2VyKFwic3VibWl0LnZhbGlkYXRpb25cIikudHJpZ2dlcihcInZhbGlkYXRpb25Mb3N0Rm9jdXMudmFsaWRhdGlvblwiKTtcclxuXHJcbiAgICAgICAgICAkaW5wdXRzLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQoZWwpLFxyXG4gICAgICAgICAgICAgICRjb250cm9sR3JvdXAgPSAkdGhpcy5wYXJlbnRzKFwiLmZvcm0tZ3JvdXBcIikuZmlyc3QoKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICRjb250cm9sR3JvdXAuaGFzQ2xhc3MoXCJ3YXJuaW5nXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICRjb250cm9sR3JvdXAucmVtb3ZlQ2xhc3MoXCJ3YXJuaW5nXCIpLmFkZENsYXNzKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgd2FybmluZ3NGb3VuZCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkaW5wdXRzLnRyaWdnZXIoXCJ2YWxpZGF0aW9uTG9zdEZvY3VzLnZhbGlkYXRpb25cIik7XHJcblxyXG4gICAgICAgICAgaWYgKHdhcm5pbmdzRm91bmQpIHtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLm9wdGlvbnMucHJldmVudFN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhcImVycm9yXCIpO1xyXG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLm9wdGlvbnMuc3VibWl0RXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgc2V0dGluZ3Mub3B0aW9ucy5zdWJtaXRFcnJvcigkZm9ybSwgZSwgJGlucHV0cy5qcUJvb3RzdHJhcFZhbGlkYXRpb24oXCJjb2xsZWN0RXJyb3JzXCIsIHRydWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5ncy5vcHRpb25zLnN1Ym1pdFN1Y2Nlc3MpKSB7XHJcbiAgICAgICAgICAgICAgc2V0dGluZ3Mub3B0aW9ucy5zdWJtaXRTdWNjZXNzKCRmb3JtLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgLy8gR2V0IHJlZmVyZW5jZXMgdG8gZXZlcnl0aGluZyB3ZSdyZSBpbnRlcmVzdGVkIGluXHJcbiAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAkY29udHJvbEdyb3VwID0gJHRoaXMucGFyZW50cyhcIi5mb3JtLWdyb3VwXCIpLmZpcnN0KCksXHJcbiAgICAgICAgICAgICRoZWxwQmxvY2sgPSAkY29udHJvbEdyb3VwLmZpbmQoXCIuaGVscC1ibG9ja1wiKS5maXJzdCgpLFxyXG4gICAgICAgICAgICAkZm9ybSA9ICR0aGlzLnBhcmVudHMoXCJmb3JtXCIpLmZpcnN0KCksXHJcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWVzID0gW107XHJcblxyXG4gICAgICAgICAgLy8gY3JlYXRlIG1lc3NhZ2UgY29udGFpbmVyIGlmIG5vdCBleGlzdHNcclxuICAgICAgICAgIGlmICghJGhlbHBCbG9jay5sZW5ndGggJiYgc2V0dGluZ3Mub3B0aW9ucy5hdXRvQWRkICYmIHNldHRpbmdzLm9wdGlvbnMuYXV0b0FkZC5oZWxwQmxvY2tzKSB7XHJcbiAgICAgICAgICAgICAgJGhlbHBCbG9jayA9ICQoJzxkaXYgY2xhc3M9XCJoZWxwLWJsb2NrXCIgLz4nKTtcclxuICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLmZpbmQoJy5jb250cm9scycpLmFwcGVuZCgkaGVscEJsb2NrKTtcclxuXHRcdFx0XHRcdFx0XHRjcmVhdGVkRWxlbWVudHMucHVzaCgkaGVscEJsb2NrWzBdKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTTklGRiBIVE1MIEZPUiBWQUxJREFUT1JTXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgLy8gKnNub3J0IHNuaWZmIHNudWZmbGUqXHJcblxyXG4gICAgICAgICAgaWYgKHNldHRpbmdzLm9wdGlvbnMuc25pZmZIdG1sKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJcIjtcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFUVEVSTlxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgaWYgKCR0aGlzLmF0dHIoXCJwYXR0ZXJuXCIpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJOb3QgaW4gdGhlIGV4cGVjdGVkIGZvcm1hdDwhLS0gZGF0YS12YWxpZGF0aW9uLXBhdHRlcm4tbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcclxuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25QYXR0ZXJuTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uUGF0dGVybk1lc3NhZ2VcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uUGF0dGVybk1lc3NhZ2VcIiwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25QYXR0ZXJuUmVnZXhcIiwgJHRoaXMuYXR0cihcInBhdHRlcm5cIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNQVhcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwibWF4XCIpICE9PSB1bmRlZmluZWQgfHwgJHRoaXMuYXR0cihcImFyaWEtdmFsdWVtYXhcIikgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIHZhciBtYXggPSAoJHRoaXMuYXR0cihcIm1heFwiKSAhPT0gdW5kZWZpbmVkID8gJHRoaXMuYXR0cihcIm1heFwiKSA6ICR0aGlzLmF0dHIoXCJhcmlhLXZhbHVlbWF4XCIpKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJUb28gaGlnaDogTWF4aW11bSBvZiAnXCIgKyBtYXggKyBcIic8IS0tIGRhdGEtdmFsaWRhdGlvbi1tYXgtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcclxuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhNZXNzYWdlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhNZXNzYWdlXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heE1lc3NhZ2VcIiwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhNYXhcIiwgbWF4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTUlOXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcIm1pblwiKSAhPT0gdW5kZWZpbmVkIHx8ICR0aGlzLmF0dHIoXCJhcmlhLXZhbHVlbWluXCIpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICB2YXIgbWluID0gKCR0aGlzLmF0dHIoXCJtaW5cIikgIT09IHVuZGVmaW5lZCA/ICR0aGlzLmF0dHIoXCJtaW5cIikgOiAkdGhpcy5hdHRyKFwiYXJpYS12YWx1ZW1pblwiKSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVG9vIGxvdzogTWluaW11bSBvZiAnXCIgKyBtaW4gKyBcIic8IS0tIGRhdGEtdmFsaWRhdGlvbi1taW4tbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcclxuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5NZXNzYWdlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5NZXNzYWdlXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbk1lc3NhZ2VcIiwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5NaW5cIiwgbWluKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTUFYTEVOR1RIXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcIm1heGxlbmd0aFwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVG9vIGxvbmc6IE1heGltdW0gb2YgJ1wiICsgJHRoaXMuYXR0cihcIm1heGxlbmd0aFwiKSArIFwiJyBjaGFyYWN0ZXJzPCEtLSBkYXRhLXZhbGlkYXRpb24tbWF4bGVuZ3RoLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCI7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4bGVuZ3RoTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4bGVuZ3RoTWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhsZW5ndGhNZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4bGVuZ3RoTWF4bGVuZ3RoXCIsICR0aGlzLmF0dHIoXCJtYXhsZW5ndGhcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNSU5MRU5HVEhcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwibWlubGVuZ3RoXCIpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJUb28gc2hvcnQ6IE1pbmltdW0gb2YgJ1wiICsgJHRoaXMuYXR0cihcIm1pbmxlbmd0aFwiKSArIFwiJyBjaGFyYWN0ZXJzPCEtLSBkYXRhLXZhbGlkYXRpb24tbWlubGVuZ3RoLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCI7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWlubGVuZ3RoTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWlubGVuZ3RoTWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5sZW5ndGhNZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWlubGVuZ3RoTWlubGVuZ3RoXCIsICR0aGlzLmF0dHIoXCJtaW5sZW5ndGhcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVRVUlSRURcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwicmVxdWlyZWRcIikgIT09IHVuZGVmaW5lZCB8fCAkdGhpcy5hdHRyKFwiYXJpYS1yZXF1aXJlZFwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IHNldHRpbmdzLmJ1aWx0SW5WYWxpZGF0b3JzLnJlcXVpcmVkLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uUmVxdWlyZWRNZXNzYWdlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25SZXF1aXJlZE1lc3NhZ2VcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uUmVxdWlyZWRNZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOVU1CRVJcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwidHlwZVwiKSAhPT0gdW5kZWZpbmVkICYmICR0aGlzLmF0dHIoXCJ0eXBlXCIpLnRvTG93ZXJDYXNlKCkgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlID0gc2V0dGluZ3MuYnVpbHRJblZhbGlkYXRvcnMubnVtYmVyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTnVtYmVyTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTnVtYmVyTWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25OdW1iZXJNZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1BSUxcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwidHlwZVwiKSAhPT0gdW5kZWZpbmVkICYmICR0aGlzLmF0dHIoXCJ0eXBlXCIpLnRvTG93ZXJDYXNlKCkgPT09IFwiZW1haWxcIikge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIk5vdCBhIHZhbGlkIGVtYWlsIGFkZHJlc3M8IS0tIGRhdGEtdmFsaWRhdG9yLXZhbGlkZW1haWwtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcclxuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25WYWxpZGVtYWlsTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uVmFsaWRlbWFpbE1lc3NhZ2VcIik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgkdGhpcy5kYXRhKFwidmFsaWRhdGlvbkVtYWlsTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uRW1haWxNZXNzYWdlXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblZhbGlkZW1haWxNZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1JTkNIRUNLRURcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwibWluY2hlY2tlZFwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiTm90IGVub3VnaCBvcHRpb25zIGNoZWNrZWQ7IE1pbmltdW0gb2YgJ1wiICsgJHRoaXMuYXR0cihcIm1pbmNoZWNrZWRcIikgKyBcIicgcmVxdWlyZWQ8IS0tIGRhdGEtdmFsaWRhdGlvbi1taW5jaGVja2VkLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCI7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWluY2hlY2tlZE1lc3NhZ2VcIikpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmNoZWNrZWRNZXNzYWdlXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmNoZWNrZWRNZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWluY2hlY2tlZE1pbmNoZWNrZWRcIiwgJHRoaXMuYXR0cihcIm1pbmNoZWNrZWRcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1BWENIRUNLRURcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwibWF4Y2hlY2tlZFwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVG9vIG1hbnkgb3B0aW9ucyBjaGVja2VkOyBNYXhpbXVtIG9mICdcIiArICR0aGlzLmF0dHIoXCJtYXhjaGVja2VkXCIpICsgXCInIHJlcXVpcmVkPCEtLSBkYXRhLXZhbGlkYXRpb24tbWF4Y2hlY2tlZC1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiO1xyXG4gICAgICAgICAgICAgIGlmICgkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGNoZWNrZWRNZXNzYWdlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhjaGVja2VkTWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhjaGVja2VkTWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGNoZWNrZWRNYXhjaGVja2VkXCIsICR0aGlzLmF0dHIoXCJtYXhjaGVja2VkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ09MTEVDVCBWQUxJREFUT1IgTkFNRVNcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgICAvLyBHZXQgbmFtZWQgdmFsaWRhdG9yc1xyXG4gICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yTmFtZXMgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiKS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gR2V0IGV4dHJhIG9uZXMgZGVmaW5lZCBvbiB0aGUgZWxlbWVudCdzIGRhdGEgYXR0cmlidXRlc1xyXG4gICAgICAgICAgJC5lYWNoKCR0aGlzLmRhdGEoKSwgZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGkucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiwkMVwiKS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIGlmIChwYXJ0c1swXSA9PT0gXCJ2YWxpZGF0aW9uXCIgJiYgcGFydHNbMV0pIHtcclxuICAgICAgICAgICAgICB2YWxpZGF0b3JOYW1lcy5wdXNoKHBhcnRzWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9STUFMSVNFIFZBTElEQVRPUiBOQU1FU1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgIHZhciB2YWxpZGF0b3JOYW1lc1RvSW5zcGVjdCA9IHZhbGlkYXRvck5hbWVzO1xyXG4gICAgICAgICAgdmFyIG5ld1ZhbGlkYXRvck5hbWVzVG9JbnNwZWN0ID0gW107XHJcblxyXG4gICAgICAgICAgZG8gLy8gcmVwZWF0ZWRseSBleHBhbmQgJ3Nob3J0Y3V0JyB2YWxpZGF0b3JzIGludG8gdGhlaXIgcmVhbCB2YWxpZGF0b3JzXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFVwcGVyY2FzZSBvbmx5IHRoZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCBuYW1lXHJcbiAgICAgICAgICAgICQuZWFjaCh2YWxpZGF0b3JOYW1lcywgZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9yTmFtZXNbaV0gPSBmb3JtYXRWYWxpZGF0b3JOYW1lKGVsKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlIHZhbGlkYXRvciBuYW1lc1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JOYW1lcyA9ICQudW5pcXVlKHZhbGlkYXRvck5hbWVzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFB1bGwgb3V0IHRoZSBuZXcgdmFsaWRhdG9yIG5hbWVzIGZyb20gZWFjaCBzaG9ydGN1dFxyXG4gICAgICAgICAgICBuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdCA9IFtdO1xyXG4gICAgICAgICAgICAkLmVhY2godmFsaWRhdG9yTmFtZXNUb0luc3BlY3QsIGZ1bmN0aW9uKGksIGVsKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBlbCArIFwiU2hvcnRjdXRcIikgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQXJlIHRoZXNlIGN1c3RvbSB2YWxpZGF0b3JzP1xyXG4gICAgICAgICAgICAgICAgLy8gUHVsbCB0aGVtIG91dCFcclxuICAgICAgICAgICAgICAgICQuZWFjaCgkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgZWwgKyBcIlNob3J0Y3V0XCIpLnNwbGl0KFwiLFwiKSwgZnVuY3Rpb24oaTIsIGVsMikge1xyXG4gICAgICAgICAgICAgICAgICBuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdC5wdXNoKGVsMik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNldHRpbmdzLmJ1aWx0SW5WYWxpZGF0b3JzW2VsLnRvTG93ZXJDYXNlKCldKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGlzIGEgcmVjb2duaXNlZCBidWlsdC1pbj9cclxuICAgICAgICAgICAgICAgIC8vIFB1bGwgaXQgb3V0IVxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRvciA9IHNldHRpbmdzLmJ1aWx0SW5WYWxpZGF0b3JzW2VsLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvci50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwic2hvcnRjdXRcIikge1xyXG4gICAgICAgICAgICAgICAgICAkLmVhY2godmFsaWRhdG9yLnNob3J0Y3V0LnNwbGl0KFwiLFwiKSwgZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwgPSBmb3JtYXRWYWxpZGF0b3JOYW1lKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdC5wdXNoKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JOYW1lcy5wdXNoKGVsKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWVzVG9JbnNwZWN0ID0gbmV3VmFsaWRhdG9yTmFtZXNUb0luc3BlY3Q7XHJcblxyXG4gICAgICAgICAgfSB3aGlsZSAodmFsaWRhdG9yTmFtZXNUb0luc3BlY3QubGVuZ3RoID4gMClcclxuXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNFVCBVUCBWQUxJREFUT1IgQVJSQVlTXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgdmFyIHZhbGlkYXRvcnMgPSB7fTtcclxuXHJcbiAgICAgICAgICAkLmVhY2godmFsaWRhdG9yTmFtZXMsIGZ1bmN0aW9uIChpLCBlbCkge1xyXG4gICAgICAgICAgICAvLyBTZXQgdXAgdGhlICdvdmVycmlkZScgbWVzc2FnZVxyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBlbCArIFwiTWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgdmFyIGhhc092ZXJyaWRlTWVzc2FnZSA9IChtZXNzYWdlICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB2YXIgZm91bmRWYWxpZGF0b3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgbWVzc2FnZSA9XHJcbiAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICA/IG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgOiBcIidcIiArIGVsICsgXCInIHZhbGlkYXRpb24gZmFpbGVkIDwhLS0gQWRkIGF0dHJpYnV0ZSAnZGF0YS12YWxpZGF0aW9uLVwiICsgZWwudG9Mb3dlckNhc2UoKSArIFwiLW1lc3NhZ2UnIHRvIGlucHV0IHRvIGNoYW5nZSB0aGlzIG1lc3NhZ2UgLS0+XCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgICAgICQuZWFjaChcclxuICAgICAgICAgICAgICBzZXR0aW5ncy52YWxpZGF0b3JUeXBlcyxcclxuICAgICAgICAgICAgICBmdW5jdGlvbiAodmFsaWRhdG9yVHlwZSwgdmFsaWRhdG9yVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3JzW3ZhbGlkYXRvclR5cGVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yc1t2YWxpZGF0b3JUeXBlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZFZhbGlkYXRvciAmJiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgZWwgKyBmb3JtYXRWYWxpZGF0b3JOYW1lKHZhbGlkYXRvclRlbXBsYXRlLm5hbWUpKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnNbdmFsaWRhdG9yVHlwZV0ucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAkLmV4dGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZvcm1hdFZhbGlkYXRvck5hbWUodmFsaWRhdG9yVGVtcGxhdGUubmFtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JUZW1wbGF0ZS5pbml0KCR0aGlzLCBlbClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGZvdW5kVmFsaWRhdG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZvdW5kVmFsaWRhdG9yICYmIHNldHRpbmdzLmJ1aWx0SW5WYWxpZGF0b3JzW2VsLnRvTG93ZXJDYXNlKCldKSB7XHJcblxyXG4gICAgICAgICAgICAgIHZhciB2YWxpZGF0b3IgPSAkLmV4dGVuZCh0cnVlLCB7fSwgc2V0dGluZ3MuYnVpbHRJblZhbGlkYXRvcnNbZWwudG9Mb3dlckNhc2UoKV0pO1xyXG4gICAgICAgICAgICAgIGlmIChoYXNPdmVycmlkZU1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdmFyIHZhbGlkYXRvclR5cGUgPSB2YWxpZGF0b3IudHlwZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAodmFsaWRhdG9yVHlwZSA9PT0gXCJzaG9ydGN1dFwiKSB7XHJcbiAgICAgICAgICAgICAgICBmb3VuZFZhbGlkYXRvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQuZWFjaChcclxuICAgICAgICAgICAgICAgICAgc2V0dGluZ3MudmFsaWRhdG9yVHlwZXMsXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh2YWxpZGF0b3JUZW1wbGF0ZVR5cGUsIHZhbGlkYXRvclRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvcnNbdmFsaWRhdG9yVGVtcGxhdGVUeXBlXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzW3ZhbGlkYXRvclRlbXBsYXRlVHlwZV0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3VuZFZhbGlkYXRvciAmJiB2YWxpZGF0b3JUeXBlID09PSB2YWxpZGF0b3JUZW1wbGF0ZVR5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIGVsICsgZm9ybWF0VmFsaWRhdG9yTmFtZSh2YWxpZGF0b3JUZW1wbGF0ZS5uYW1lKSwgdmFsaWRhdG9yW3ZhbGlkYXRvclRlbXBsYXRlLm5hbWUudG9Mb3dlckNhc2UoKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yc1t2YWxpZGF0b3JUeXBlXS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmV4dGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yVGVtcGxhdGUuaW5pdCgkdGhpcywgZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb3VuZFZhbGlkYXRvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCEgZm91bmRWYWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgICAkLmVycm9yKFwiQ2Fubm90IGZpbmQgdmFsaWRhdGlvbiBpbmZvIGZvciAnXCIgKyBlbCArIFwiJ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JFIEZBTExCQUNLIFZBTFVFU1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgICRoZWxwQmxvY2suZGF0YShcclxuICAgICAgICAgICAgXCJvcmlnaW5hbC1jb250ZW50c1wiLFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtY29udGVudHNcIilcclxuICAgICAgICAgICAgICAgID8gJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtY29udGVudHNcIilcclxuICAgICAgICAgICAgICAgIDogJGhlbHBCbG9jay5odG1sKClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAkaGVscEJsb2NrLmRhdGEoXHJcbiAgICAgICAgICAgIFwib3JpZ2luYWwtcm9sZVwiLFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtcm9sZVwiKVxyXG4gICAgICAgICAgICAgICAgPyAkaGVscEJsb2NrLmRhdGEoXCJvcmlnaW5hbC1yb2xlXCIpXHJcbiAgICAgICAgICAgICAgICA6ICRoZWxwQmxvY2suYXR0cihcInJvbGVcIilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAkY29udHJvbEdyb3VwLmRhdGEoXHJcbiAgICAgICAgICAgIFwib3JpZ2luYWwtY2xhc3Nlc1wiLFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5kYXRhKFwib3JpZ2luYWwtY2xhc2VzXCIpXHJcbiAgICAgICAgICAgICAgICA/ICRjb250cm9sR3JvdXAuZGF0YShcIm9yaWdpbmFsLWNsYXNzZXNcIilcclxuICAgICAgICAgICAgICAgIDogJGNvbnRyb2xHcm91cC5hdHRyKFwiY2xhc3NcIilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAkdGhpcy5kYXRhKFxyXG4gICAgICAgICAgICBcIm9yaWdpbmFsLWFyaWEtaW52YWxpZFwiLFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcIm9yaWdpbmFsLWFyaWEtaW52YWxpZFwiKVxyXG4gICAgICAgICAgICAgICAgPyAkdGhpcy5kYXRhKFwib3JpZ2luYWwtYXJpYS1pbnZhbGlkXCIpXHJcbiAgICAgICAgICAgICAgICA6ICR0aGlzLmF0dHIoXCJhcmlhLWludmFsaWRcIilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQUxJREFUSU9OXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgJHRoaXMuYmluZChcclxuICAgICAgICAgICAgXCJ2YWxpZGF0aW9uLnZhbGlkYXRpb25cIixcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGV2ZW50LCBwYXJhbXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZ2V0VmFsdWUoJHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAvLyBHZXQgYSBsaXN0IG9mIHRoZSBlcnJvcnMgdG8gYXBwbHlcclxuICAgICAgICAgICAgICB2YXIgZXJyb3JzRm91bmQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgJC5lYWNoKHZhbGlkYXRvcnMsIGZ1bmN0aW9uICh2YWxpZGF0b3JUeXBlLCB2YWxpZGF0b3JUeXBlQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggfHwgKHBhcmFtcyAmJiBwYXJhbXMuaW5jbHVkZUVtcHR5KSB8fCAoISFzZXR0aW5ncy52YWxpZGF0b3JUeXBlc1t2YWxpZGF0b3JUeXBlXS5ibG9ja1N1Ym1pdCAmJiBwYXJhbXMgJiYgISFwYXJhbXMuc3VibWl0dGluZykpIHtcclxuICAgICAgICAgICAgICAgICAgJC5lYWNoKHZhbGlkYXRvclR5cGVBcnJheSwgZnVuY3Rpb24gKGksIHZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy52YWxpZGF0b3JUeXBlc1t2YWxpZGF0b3JUeXBlXS52YWxpZGF0ZSgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yc0ZvdW5kLnB1c2godmFsaWRhdG9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiBlcnJvcnNGb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAkdGhpcy5iaW5kKFxyXG4gICAgICAgICAgICBcImdldFZhbGlkYXRvcnMudmFsaWRhdGlvblwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXQVRDSCBGT1IgQ0hBTkdFU1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgJHRoaXMuYmluZChcclxuICAgICAgICAgICAgXCJzdWJtaXQudmFsaWRhdGlvblwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICR0aGlzLnRyaWdnZXJIYW5kbGVyKFwiY2hhbmdlLnZhbGlkYXRpb25cIiwge3N1Ym1pdHRpbmc6IHRydWV9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgICR0aGlzLmJpbmQoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICBcImtleXVwXCIsXHJcbiAgICAgICAgICAgICAgXCJmb2N1c1wiLFxyXG4gICAgICAgICAgICAgIFwiYmx1clwiLFxyXG4gICAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgICBcImtleWRvd25cIixcclxuICAgICAgICAgICAgICBcImtleXByZXNzXCIsXHJcbiAgICAgICAgICAgICAgXCJjaGFuZ2VcIlxyXG4gICAgICAgICAgICBdLmpvaW4oXCIudmFsaWRhdGlvbiBcIikgKyBcIi52YWxpZGF0aW9uXCIsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlLCBwYXJhbXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZ2V0VmFsdWUoJHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICB2YXIgZXJyb3JzRm91bmQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5maW5kKFwiaW5wdXQsdGV4dGFyZWEsc2VsZWN0XCIpLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2xkQ291bnQgPSBlcnJvcnNGb3VuZC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2goJChlbCkudHJpZ2dlckhhbmRsZXIoXCJ2YWxpZGF0aW9uLnZhbGlkYXRpb25cIiwgcGFyYW1zKSwgZnVuY3Rpb24gKGosIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgZXJyb3JzRm91bmQucHVzaChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yc0ZvdW5kLmxlbmd0aCA+IG9sZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICQoZWwpLmF0dHIoXCJhcmlhLWludmFsaWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsID0gJHRoaXMuZGF0YShcIm9yaWdpbmFsLWFyaWEtaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgICAgICAgJChlbCkuYXR0cihcImFyaWEtaW52YWxpZFwiLCAob3JpZ2luYWwgIT09IHVuZGVmaW5lZCA/IG9yaWdpbmFsIDogZmFsc2UpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgJGZvcm0uZmluZChcImlucHV0LHNlbGVjdCx0ZXh0YXJlYVwiKS5ub3QoJHRoaXMpLm5vdChcIltuYW1lPVxcXCJcIiArICR0aGlzLmF0dHIoXCJuYW1lXCIpICsgXCJcXFwiXVwiKS50cmlnZ2VyKFwidmFsaWRhdGlvbkxvc3RGb2N1cy52YWxpZGF0aW9uXCIpO1xyXG5cclxuICAgICAgICAgICAgICBlcnJvcnNGb3VuZCA9ICQudW5pcXVlKGVycm9yc0ZvdW5kLnNvcnQoKSk7XHJcblxyXG4gICAgICAgICAgICAgIC8vIFdlcmUgdGhlcmUgYW55IGVycm9ycz9cclxuICAgICAgICAgICAgICBpZiAoZXJyb3JzRm91bmQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBCZXR0ZXIgZmxhZyBpdCB1cCBhcyBhIHdhcm5pbmcuXHJcbiAgICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLnJlbW92ZUNsYXNzKFwic3VjY2VzcyBlcnJvclwiKS5hZGRDbGFzcyhcIndhcm5pbmdcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSG93IG1hbnkgZXJyb3JzIGRpZCB3ZSBmaW5kP1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLm9wdGlvbnMuc2VtYW50aWNhbGx5U3RyaWN0ICYmIGVycm9yc0ZvdW5kLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAvLyBPbmx5IG9uZT8gQmVpbmcgc3RyaWN0PyBKdXN0IG91dHB1dCBpdC5cclxuICAgICAgICAgICAgICAgICAgJGhlbHBCbG9jay5odG1sKGVycm9yc0ZvdW5kWzBdICsgXHJcbiAgICAgICAgICAgICAgICAgICAgKCBzZXR0aW5ncy5vcHRpb25zLnByZXBlbmRFeGlzdGluZ0hlbHBCbG9jayA/ICRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpIDogXCJcIiApKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIE11bHRpcGxlPyBCZWluZyBzbG9wcHk/IEdsdWUgdGhlbSB0b2dldGhlciBpbnRvIGFuIFVMLlxyXG4gICAgICAgICAgICAgICAgICAkaGVscEJsb2NrLmh0bWwoXCI8dWwgcm9sZT1cXFwiYWxlcnRcXFwiPjxsaT5cIiArIGVycm9yc0ZvdW5kLmpvaW4oXCI8L2xpPjxsaT5cIikgKyBcIjwvbGk+PC91bD5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKCBzZXR0aW5ncy5vcHRpb25zLnByZXBlbmRFeGlzdGluZ0hlbHBCbG9jayA/ICRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpIDogXCJcIiApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5yZW1vdmVDbGFzcyhcIndhcm5pbmcgZXJyb3Igc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICRjb250cm9sR3JvdXAuYWRkQ2xhc3MoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJGhlbHBCbG9jay5odG1sKCRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwiYmx1clwiKSB7XHJcbiAgICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLnJlbW92ZUNsYXNzKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAkdGhpcy5iaW5kKFwidmFsaWRhdGlvbkxvc3RGb2N1cy52YWxpZGF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5yZW1vdmVDbGFzcyhcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgZGVzdHJveSA6IGZ1bmN0aW9uKCApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChcclxuICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyXHJcbiAgICAgICAgICAgICAgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICRjb250cm9sR3JvdXAgPSAkdGhpcy5wYXJlbnRzKFwiLmZvcm0tZ3JvdXBcIikuZmlyc3QoKSxcclxuICAgICAgICAgICAgICAkaGVscEJsb2NrID0gJGNvbnRyb2xHcm91cC5maW5kKFwiLmhlbHAtYmxvY2tcIikuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvdXIgZXZlbnRzXHJcbiAgICAgICAgICAgICR0aGlzLnVuYmluZCgnLnZhbGlkYXRpb24nKTsgLy8gZXZlbnRzIGFyZSBuYW1lc3BhY2VkLlxyXG4gICAgICAgICAgICAvLyByZXNldCBoZWxwIHRleHRcclxuICAgICAgICAgICAgJGhlbHBCbG9jay5odG1sKCRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgY2xhc3Nlc1xyXG4gICAgICAgICAgICAkY29udHJvbEdyb3VwLmF0dHIoXCJjbGFzc1wiLCAkY29udHJvbEdyb3VwLmRhdGEoXCJvcmlnaW5hbC1jbGFzc2VzXCIpKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgYXJpYVxyXG4gICAgICAgICAgICAkdGhpcy5hdHRyKFwiYXJpYS1pbnZhbGlkXCIsICR0aGlzLmRhdGEoXCJvcmlnaW5hbC1hcmlhLWludmFsaWRcIikpO1xyXG4gICAgICAgICAgICAvLyByZXNldCByb2xlXHJcbiAgICAgICAgICAgICRoZWxwQmxvY2suYXR0cihcInJvbGVcIiwgJHRoaXMuZGF0YShcIm9yaWdpbmFsLXJvbGVcIikpO1xyXG5cdFx0XHRcdFx0XHQvLyByZW1vdmUgYWxsIGVsZW1lbnRzIHdlIGNyZWF0ZWRcclxuXHRcdFx0XHRcdFx0aWYgKGNyZWF0ZWRFbGVtZW50cy5pbmRleE9mKCRoZWxwQmxvY2tbMF0pID4gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHQkaGVscEJsb2NrLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICB9LFxyXG4gICAgICBjb2xsZWN0RXJyb3JzIDogZnVuY3Rpb24oaW5jbHVkZUVtcHR5KSB7XHJcblxyXG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2VzID0ge307XHJcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xyXG4gICAgICAgICAgdmFyICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgdmFyIG5hbWUgPSAkZWwuYXR0cihcIm5hbWVcIik7XHJcbiAgICAgICAgICB2YXIgZXJyb3JzID0gJGVsLnRyaWdnZXJIYW5kbGVyKFwidmFsaWRhdGlvbi52YWxpZGF0aW9uXCIsIHtpbmNsdWRlRW1wdHk6IHRydWV9KTtcclxuICAgICAgICAgIGVycm9yTWVzc2FnZXNbbmFtZV0gPSAkLmV4dGVuZCh0cnVlLCBlcnJvcnMsIGVycm9yTWVzc2FnZXNbbmFtZV0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkLmVhY2goZXJyb3JNZXNzYWdlcywgZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICBpZiAoZWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBlcnJvck1lc3NhZ2VzW2ldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlcztcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGhhc0Vycm9yczogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2VzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcclxuICAgICAgICAgIGVycm9yTWVzc2FnZXMgPSBlcnJvck1lc3NhZ2VzLmNvbmNhdChcclxuICAgICAgICAgICAgJChlbCkudHJpZ2dlckhhbmRsZXIoXCJnZXRWYWxpZGF0b3JzLnZhbGlkYXRpb25cIikgPyAkKGVsKS50cmlnZ2VySGFuZGxlcihcInZhbGlkYXRpb24udmFsaWRhdGlvblwiLCB7c3VibWl0dGluZzogdHJ1ZX0pIDogW11cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoZXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKTtcclxuICAgICAgfSxcclxuICAgICAgb3ZlcnJpZGUgOiBmdW5jdGlvbiAobmV3RGVmYXVsdHMpIHtcclxuICAgICAgICBkZWZhdWx0cyA9ICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBuZXdEZWZhdWx0cyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblx0XHR2YWxpZGF0b3JUeXBlczoge1xyXG4gICAgICBjYWxsYmFjazoge1xyXG4gICAgICAgIG5hbWU6IFwiY2FsbGJhY2tcIixcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgbmFtZSArIFwiQ2FsbGJhY2tcIiksXHJcbiAgICAgICAgICAgIGxhc3RWYWx1ZTogJHRoaXMudmFsKCksXHJcbiAgICAgICAgICAgIGxhc3RWYWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgbGFzdEZpbmlzaGVkOiB0cnVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xyXG4gICAgICAgICAgaWYgKHZhbGlkYXRvci5sYXN0VmFsdWUgPT09IHZhbHVlICYmIHZhbGlkYXRvci5sYXN0RmluaXNoZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF2YWxpZGF0b3IubGFzdFZhbGlkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh2YWxpZGF0b3IubGFzdEZpbmlzaGVkID09PSB0cnVlKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0VmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdEZpbmlzaGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB2YXIgcnJqcWJ2VmFsaWRhdG9yID0gdmFsaWRhdG9yO1xyXG4gICAgICAgICAgICB2YXIgcnJqcWJ2VGhpcyA9ICR0aGlzO1xyXG4gICAgICAgICAgICBleGVjdXRlRnVuY3Rpb25CeU5hbWUoXHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGxiYWNrLFxyXG4gICAgICAgICAgICAgIHdpbmRvdyxcclxuICAgICAgICAgICAgICAkdGhpcyxcclxuICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJyanFidlZhbGlkYXRvci5sYXN0VmFsdWUgPT09IGRhdGEudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgcnJqcWJ2VmFsaWRhdG9yLmxhc3RWYWxpZCA9IGRhdGEudmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBycmpxYnZWYWxpZGF0b3IubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBycmpxYnZWYWxpZGF0b3IubGFzdEZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgcnJqcWJ2VGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgcnJqcWJ2VmFsaWRhdG9yLnZhbGlkYXRvck5hbWUgKyBcIk1lc3NhZ2VcIiwgcnJqcWJ2VmFsaWRhdG9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBUaW1lb3V0IGlzIHNldCB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBldmVudHMgYmVpbmcgY29uc2lkZXJlZCAnYWxyZWFkeSBmaXJlZCdcclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnJqcWJ2VGhpcy50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDEpOyAvLyBkb2Vzbid0IG5lZWQgYSBsb25nIHRpbWVvdXQsIGp1c3QgbG9uZyBlbm91Z2ggZm9yIHRoZSBldmVudCBidWJibGUgdG8gYnVyc3RcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFqYXg6IHtcclxuICAgICAgICBuYW1lOiBcImFqYXhcIixcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHVybDogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIkFqYXhcIiksXHJcbiAgICAgICAgICAgIGxhc3RWYWx1ZTogJHRoaXMudmFsKCksXHJcbiAgICAgICAgICAgIGxhc3RWYWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgbGFzdEZpbmlzaGVkOiB0cnVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xyXG4gICAgICAgICAgaWYgKFwiXCIrdmFsaWRhdG9yLmxhc3RWYWx1ZSA9PT0gXCJcIit2YWx1ZSAmJiB2YWxpZGF0b3IubGFzdEZpbmlzaGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IubGFzdFZhbGlkID09PSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodmFsaWRhdG9yLmxhc3RGaW5pc2hlZCA9PT0gdHJ1ZSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmxhc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmxhc3RGaW5pc2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHVybDogdmFsaWRhdG9yLnVybCxcclxuICAgICAgICAgICAgICBkYXRhOiBcInZhbHVlPVwiICsgdmFsdWUgKyBcIiZmaWVsZD1cIiArICR0aGlzLmF0dHIoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFwiXCIrdmFsaWRhdG9yLmxhc3RWYWx1ZSA9PT0gXCJcIitkYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0VmFsaWQgPSAhIShkYXRhLnZhbGlkKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvci5tZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0RmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgdmFsaWRhdG9yLnZhbGlkYXRvck5hbWUgKyBcIk1lc3NhZ2VcIiwgdmFsaWRhdG9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBUaW1lb3V0IGlzIHNldCB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBldmVudHMgYmVpbmcgY29uc2lkZXJlZCAnYWxyZWFkeSBmaXJlZCdcclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9LCAxKTsgLy8gZG9lc24ndCBuZWVkIGEgbG9uZyB0aW1lb3V0LCBqdXN0IGxvbmcgZW5vdWdoIGZvciB0aGUgZXZlbnQgYnViYmxlIHRvIGJ1cnN0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmYWlsdXJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5tZXNzYWdlID0gXCJhamF4IGNhbGwgZmFpbGVkXCI7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IubGFzdEZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyB2YWxpZGF0b3IudmFsaWRhdG9yTmFtZSArIFwiTWVzc2FnZVwiLCB2YWxpZGF0b3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBUaW1lb3V0IGlzIHNldCB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBldmVudHMgYmVpbmcgY29uc2lkZXJlZCAnYWxyZWFkeSBmaXJlZCdcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAkdGhpcy50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICB9LCAxKTsgLy8gZG9lc24ndCBuZWVkIGEgbG9uZyB0aW1lb3V0LCBqdXN0IGxvbmcgZW5vdWdoIGZvciB0aGUgZXZlbnQgYnViYmxlIHRvIGJ1cnN0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHRcdFx0cmVnZXg6IHtcclxuXHRcdFx0XHRuYW1lOiBcInJlZ2V4XCIsXHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge3JlZ2V4OiByZWdleEZyb21TdHJpbmcoJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIlJlZ2V4XCIpKX07XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKCF2YWxpZGF0b3IucmVnZXgudGVzdCh2YWx1ZSkgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXHJcblx0XHRcdFx0XHRcdHx8ICh2YWxpZGF0b3IucmVnZXgudGVzdCh2YWx1ZSkgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlcXVpcmVkOiB7XHJcblx0XHRcdFx0bmFtZTogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xyXG5cdFx0XHRcdFx0cmV0dXJuICEhKHZhbHVlLmxlbmd0aCA9PT0gMCAgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXHJcblx0XHRcdFx0XHRcdHx8ICEhKHZhbHVlLmxlbmd0aCA+IDAgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcclxuXHRcdFx0XHR9LFxyXG4gICAgICAgIGJsb2NrU3VibWl0OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdG1hdGNoOiB7XHJcblx0XHRcdFx0bmFtZTogXCJtYXRjaFwiLFxyXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xyXG5cdFx0XHRcdFx0dmFyIGVsZW1lbnQgPSAkdGhpcy5wYXJlbnRzKFwiZm9ybVwiKS5maXJzdCgpLmZpbmQoXCJbbmFtZT1cXFwiXCIgKyAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgbmFtZSArIFwiTWF0Y2hcIikgKyBcIlxcXCJdXCIpLmZpcnN0KCk7XHJcblx0XHRcdFx0XHRlbGVtZW50LmJpbmQoXCJ2YWxpZGF0aW9uLnZhbGlkYXRpb25cIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHQkdGhpcy50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIiwge3N1Ym1pdHRpbmc6IHRydWV9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHtcImVsZW1lbnRcIjogZWxlbWVudH07XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKHZhbHVlICE9PSB2YWxpZGF0b3IuZWxlbWVudC52YWwoKSAmJiAhIHZhbGlkYXRvci5uZWdhdGl2ZSlcclxuXHRcdFx0XHRcdFx0fHwgKHZhbHVlID09PSB2YWxpZGF0b3IuZWxlbWVudC52YWwoKSAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xyXG5cdFx0XHRcdH0sXHJcbiAgICAgICAgYmxvY2tTdWJtaXQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0bWF4OiB7XHJcblx0XHRcdFx0bmFtZTogXCJtYXhcIixcclxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcclxuXHRcdFx0XHRcdHJldHVybiB7bWF4OiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgbmFtZSArIFwiTWF4XCIpfTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcclxuXHRcdFx0XHRcdHJldHVybiAocGFyc2VGbG9hdCh2YWx1ZSwgMTApID4gcGFyc2VGbG9hdCh2YWxpZGF0b3IubWF4LCAxMCkgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXHJcblx0XHRcdFx0XHRcdHx8IChwYXJzZUZsb2F0KHZhbHVlLCAxMCkgPD0gcGFyc2VGbG9hdCh2YWxpZGF0b3IubWF4LCAxMCkgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG1pbjoge1xyXG5cdFx0XHRcdG5hbWU6IFwibWluXCIsXHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge21pbjogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1pblwiKX07XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKHBhcnNlRmxvYXQodmFsdWUpIDwgcGFyc2VGbG9hdCh2YWxpZGF0b3IubWluKSAmJiAhIHZhbGlkYXRvci5uZWdhdGl2ZSlcclxuXHRcdFx0XHRcdFx0fHwgKHBhcnNlRmxvYXQodmFsdWUpID49IHBhcnNlRmxvYXQodmFsaWRhdG9yLm1pbikgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG1heGxlbmd0aDoge1xyXG5cdFx0XHRcdG5hbWU6IFwibWF4bGVuZ3RoXCIsXHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge21heGxlbmd0aDogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1heGxlbmd0aFwiKX07XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKCh2YWx1ZS5sZW5ndGggPiB2YWxpZGF0b3IubWF4bGVuZ3RoKSAmJiAhIHZhbGlkYXRvci5uZWdhdGl2ZSlcclxuXHRcdFx0XHRcdFx0fHwgKCh2YWx1ZS5sZW5ndGggPD0gdmFsaWRhdG9yLm1heGxlbmd0aCkgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG1pbmxlbmd0aDoge1xyXG5cdFx0XHRcdG5hbWU6IFwibWlubGVuZ3RoXCIsXHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge21pbmxlbmd0aDogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1pbmxlbmd0aFwiKX07XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKCh2YWx1ZS5sZW5ndGggPCB2YWxpZGF0b3IubWlubGVuZ3RoKSAmJiAhIHZhbGlkYXRvci5uZWdhdGl2ZSlcclxuXHRcdFx0XHRcdFx0fHwgKCh2YWx1ZS5sZW5ndGggPj0gdmFsaWRhdG9yLm1pbmxlbmd0aCkgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG1heGNoZWNrZWQ6IHtcclxuXHRcdFx0XHRuYW1lOiBcIm1heGNoZWNrZWRcIixcclxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcclxuXHRcdFx0XHRcdHZhciBlbGVtZW50cyA9ICR0aGlzLnBhcmVudHMoXCJmb3JtXCIpLmZpcnN0KCkuZmluZChcIltuYW1lPVxcXCJcIiArICR0aGlzLmF0dHIoXCJuYW1lXCIpICsgXCJcXFwiXVwiKTtcclxuXHRcdFx0XHRcdGVsZW1lbnRzLmJpbmQoXCJjbGljay52YWxpZGF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0JHRoaXMudHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIsIHtpbmNsdWRlRW1wdHk6IHRydWV9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHttYXhjaGVja2VkOiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgbmFtZSArIFwiTWF4Y2hlY2tlZFwiKSwgZWxlbWVudHM6IGVsZW1lbnRzfTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcclxuXHRcdFx0XHRcdHJldHVybiAodmFsaWRhdG9yLmVsZW1lbnRzLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+IHZhbGlkYXRvci5tYXhjaGVja2VkICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxyXG5cdFx0XHRcdFx0XHR8fCAodmFsaWRhdG9yLmVsZW1lbnRzLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA8PSB2YWxpZGF0b3IubWF4Y2hlY2tlZCAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xyXG5cdFx0XHRcdH0sXHJcbiAgICAgICAgYmxvY2tTdWJtaXQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0bWluY2hlY2tlZDoge1xyXG5cdFx0XHRcdG5hbWU6IFwibWluY2hlY2tlZFwiLFxyXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xyXG5cdFx0XHRcdFx0dmFyIGVsZW1lbnRzID0gJHRoaXMucGFyZW50cyhcImZvcm1cIikuZmlyc3QoKS5maW5kKFwiW25hbWU9XFxcIlwiICsgJHRoaXMuYXR0cihcIm5hbWVcIikgKyBcIlxcXCJdXCIpO1xyXG5cdFx0XHRcdFx0ZWxlbWVudHMuYmluZChcImNsaWNrLnZhbGlkYXRpb25cIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHQkdGhpcy50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIiwge2luY2x1ZGVFbXB0eTogdHJ1ZX0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm4ge21pbmNoZWNrZWQ6ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJNaW5jaGVja2VkXCIpLCBlbGVtZW50czogZWxlbWVudHN9O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xyXG5cdFx0XHRcdFx0cmV0dXJuICh2YWxpZGF0b3IuZWxlbWVudHMuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoIDwgdmFsaWRhdG9yLm1pbmNoZWNrZWQgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXHJcblx0XHRcdFx0XHRcdHx8ICh2YWxpZGF0b3IuZWxlbWVudHMuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IHZhbGlkYXRvci5taW5jaGVja2VkICYmIHZhbGlkYXRvci5uZWdhdGl2ZSk7XHJcblx0XHRcdFx0fSxcclxuICAgICAgICBibG9ja1N1Ym1pdDogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YnVpbHRJblZhbGlkYXRvcnM6IHtcclxuXHRcdFx0ZW1haWw6IHtcclxuXHRcdFx0XHRuYW1lOiBcIkVtYWlsXCIsXHJcblx0XHRcdFx0dHlwZTogXCJzaG9ydGN1dFwiLFxyXG5cdFx0XHRcdHNob3J0Y3V0OiBcInZhbGlkZW1haWxcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR2YWxpZGVtYWlsOiB7XHJcblx0XHRcdFx0bmFtZTogXCJWYWxpZGVtYWlsXCIsXHJcblx0XHRcdFx0dHlwZTogXCJyZWdleFwiLFxyXG5cdFx0XHRcdHJlZ2V4OiBcIltBLVphLXowLTkuXyUrLV0rQFtBLVphLXowLTkuLV0rXFxcXFxcLltBLVphLXpdezIsNH1cIixcclxuXHRcdFx0XHRtZXNzYWdlOiBcIk5vdCBhIHZhbGlkIGVtYWlsIGFkZHJlc3M8IS0tIGRhdGEtdmFsaWRhdG9yLXZhbGlkZW1haWwtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYXNzd29yZGFnYWluOiB7XHJcblx0XHRcdFx0bmFtZTogXCJQYXNzd29yZGFnYWluXCIsXHJcblx0XHRcdFx0dHlwZTogXCJtYXRjaFwiLFxyXG5cdFx0XHRcdG1hdGNoOiBcInBhc3N3b3JkXCIsXHJcblx0XHRcdFx0bWVzc2FnZTogXCJEb2VzIG5vdCBtYXRjaCB0aGUgZ2l2ZW4gcGFzc3dvcmQ8IS0tIGRhdGEtdmFsaWRhdG9yLXBhc3dvcmRhZ2Fpbi1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHBvc2l0aXZlOiB7XHJcblx0XHRcdFx0bmFtZTogXCJQb3NpdGl2ZVwiLFxyXG5cdFx0XHRcdHR5cGU6IFwic2hvcnRjdXRcIixcclxuXHRcdFx0XHRzaG9ydGN1dDogXCJudW1iZXIscG9zaXRpdmVudW1iZXJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRuZWdhdGl2ZToge1xyXG5cdFx0XHRcdG5hbWU6IFwiTmVnYXRpdmVcIixcclxuXHRcdFx0XHR0eXBlOiBcInNob3J0Y3V0XCIsXHJcblx0XHRcdFx0c2hvcnRjdXQ6IFwibnVtYmVyLG5lZ2F0aXZlbnVtYmVyXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0bnVtYmVyOiB7XHJcblx0XHRcdFx0bmFtZTogXCJOdW1iZXJcIixcclxuXHRcdFx0XHR0eXBlOiBcInJlZ2V4XCIsXHJcblx0XHRcdFx0cmVnZXg6IFwiKFsrLV0/XFxcXFxcZCsoXFxcXFxcLlxcXFxcXGQqKT8oW2VFXVsrLV0/WzAtOV0rKT8pP1wiLFxyXG5cdFx0XHRcdG1lc3NhZ2U6IFwiTXVzdCBiZSBhIG51bWJlcjwhLS0gZGF0YS12YWxpZGF0b3ItbnVtYmVyLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0aW50ZWdlcjoge1xyXG5cdFx0XHRcdG5hbWU6IFwiSW50ZWdlclwiLFxyXG5cdFx0XHRcdHR5cGU6IFwicmVnZXhcIixcclxuXHRcdFx0XHRyZWdleDogXCJbKy1dP1xcXFxcXGQrXCIsXHJcblx0XHRcdFx0bWVzc2FnZTogXCJObyBkZWNpbWFsIHBsYWNlcyBhbGxvd2VkPCEtLSBkYXRhLXZhbGlkYXRvci1pbnRlZ2VyLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0cG9zaXRpdmVudW1iZXI6IHtcclxuXHRcdFx0XHRuYW1lOiBcIlBvc2l0aXZlbnVtYmVyXCIsXHJcblx0XHRcdFx0dHlwZTogXCJtaW5cIixcclxuXHRcdFx0XHRtaW46IDAsXHJcblx0XHRcdFx0bWVzc2FnZTogXCJNdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyPCEtLSBkYXRhLXZhbGlkYXRvci1wb3NpdGl2ZW51bWJlci1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdG5lZ2F0aXZlbnVtYmVyOiB7XHJcblx0XHRcdFx0bmFtZTogXCJOZWdhdGl2ZW51bWJlclwiLFxyXG5cdFx0XHRcdHR5cGU6IFwibWF4XCIsXHJcblx0XHRcdFx0bWF4OiAwLFxyXG5cdFx0XHRcdG1lc3NhZ2U6IFwiTXVzdCBiZSBhIG5lZ2F0aXZlIG51bWJlcjwhLS0gZGF0YS12YWxpZGF0b3ItbmVnYXRpdmVudW1iZXItbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZXF1aXJlZDoge1xyXG5cdFx0XHRcdG5hbWU6IFwiUmVxdWlyZWRcIixcclxuXHRcdFx0XHR0eXBlOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0bWVzc2FnZTogXCJUaGlzIGlzIHJlcXVpcmVkPCEtLSBkYXRhLXZhbGlkYXRvci1yZXF1aXJlZC1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdGNoZWNrb25lOiB7XHJcblx0XHRcdFx0bmFtZTogXCJDaGVja29uZVwiLFxyXG5cdFx0XHRcdHR5cGU6IFwibWluY2hlY2tlZFwiLFxyXG5cdFx0XHRcdG1pbmNoZWNrZWQ6IDEsXHJcblx0XHRcdFx0bWVzc2FnZTogXCJDaGVjayBhdCBsZWFzdCBvbmUgb3B0aW9uPCEtLSBkYXRhLXZhbGlkYXRpb24tY2hlY2tvbmUtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dmFyIGZvcm1hdFZhbGlkYXRvck5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xyXG5cdFx0cmV0dXJuIG5hbWVcclxuXHRcdFx0LnRvTG93ZXJDYXNlKClcclxuXHRcdFx0LnJlcGxhY2UoXHJcblx0XHRcdFx0LyhefFxccykoW2Etel0pL2cgLFxyXG5cdFx0XHRcdGZ1bmN0aW9uKG0scDEscDIpIHtcclxuXHRcdFx0XHRcdHJldHVybiBwMStwMi50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0O1xyXG5cdH07XHJcblxyXG5cdHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uICgkdGhpcykge1xyXG5cdFx0Ly8gRXh0cmFjdCB0aGUgdmFsdWUgd2UncmUgdGFsa2luZyBhYm91dFxyXG5cdFx0dmFyIHZhbHVlID0gJHRoaXMudmFsKCk7XHJcblx0XHR2YXIgdHlwZSA9ICR0aGlzLmF0dHIoXCJ0eXBlXCIpO1xyXG5cdFx0aWYgKHR5cGUgPT09IFwiY2hlY2tib3hcIikge1xyXG5cdFx0XHR2YWx1ZSA9ICgkdGhpcy5pcyhcIjpjaGVja2VkXCIpID8gdmFsdWUgOiBcIlwiKTtcclxuXHRcdH1cclxuXHRcdGlmICh0eXBlID09PSBcInJhZGlvXCIpIHtcclxuXHRcdFx0dmFsdWUgPSAoJCgnaW5wdXRbbmFtZT1cIicgKyAkdGhpcy5hdHRyKFwibmFtZVwiKSArICdcIl06Y2hlY2tlZCcpLmxlbmd0aCA+IDAgPyB2YWx1ZSA6IFwiXCIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH07XHJcblxyXG4gIGZ1bmN0aW9uIHJlZ2V4RnJvbVN0cmluZyhpbnB1dHN0cmluZykge1xyXG5cdFx0cmV0dXJuIG5ldyBSZWdFeHAoXCJeXCIgKyBpbnB1dHN0cmluZyArIFwiJFwiKTtcclxuXHR9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoYW5rcyB0byBKYXNvbiBCdW50aW5nIHZpYSBTdGFja092ZXJmbG93LmNvbVxyXG4gICAqXHJcbiAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNTk3ODgvaG93LXRvLWV4ZWN1dGUtYS1qYXZhc2NyaXB0LWZ1bmN0aW9uLXdoZW4taS1oYXZlLWl0cy1uYW1lLWFzLWEtc3RyaW5nI2Fuc3dlci0zNTk5MTBcclxuICAgKiBTaG9ydCBsaW5rOiBodHRwOi8vdGlueXVybC5jb20vZXhlY3V0ZUZ1bmN0aW9uQnlOYW1lXHJcbiAgKiovXHJcbiAgZnVuY3Rpb24gZXhlY3V0ZUZ1bmN0aW9uQnlOYW1lKGZ1bmN0aW9uTmFtZSwgY29udGV4dCAvKiwgYXJncyovKSB7XHJcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuc3BsaWNlKDIpO1xyXG4gICAgdmFyIG5hbWVzcGFjZXMgPSBmdW5jdGlvbk5hbWUuc3BsaXQoXCIuXCIpO1xyXG4gICAgdmFyIGZ1bmMgPSBuYW1lc3BhY2VzLnBvcCgpO1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG5hbWVzcGFjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29udGV4dCA9IGNvbnRleHRbbmFtZXNwYWNlc1tpXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29udGV4dFtmdW5jXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICB9XHJcblxyXG5cdCQuZm4uanFCb290c3RyYXBWYWxpZGF0aW9uID0gZnVuY3Rpb24oIG1ldGhvZCApIHtcclxuXHJcblx0XHRpZiAoIGRlZmF1bHRzLm1ldGhvZHNbbWV0aG9kXSApIHtcclxuXHRcdFx0cmV0dXJuIGRlZmF1bHRzLm1ldGhvZHNbbWV0aG9kXS5hcHBseSggdGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApKTtcclxuXHRcdH0gZWxzZSBpZiAoIHR5cGVvZiBtZXRob2QgPT09ICdvYmplY3QnIHx8ICEgbWV0aG9kICkge1xyXG5cdFx0XHRyZXR1cm4gZGVmYXVsdHMubWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHQkLmVycm9yKCAnTWV0aG9kICcgKyAgbWV0aG9kICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuanFCb290c3RyYXBWYWxpZGF0aW9uJyApO1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcbiAgJC5qcUJvb3RzdHJhcFZhbGlkYXRpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgJChcIjppbnB1dFwiKS5ub3QoXCJbdHlwZT1pbWFnZV0sW3R5cGU9c3VibWl0XVwiKS5qcUJvb3RzdHJhcFZhbGlkYXRpb24uYXBwbHkodGhpcyxhcmd1bWVudHMpO1xyXG4gIH07XHJcblxyXG59KSggalF1ZXJ5ICk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zaG93LW1vcmUuanMnKTtcbiIsIlxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmxldCBoZWlnaHQ7XG5sZXQgRmFkZUJhciA9ICgpID0+IHt9O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEZhZGVCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFZFUlNJT04gPSAnMC4wLjEnO1xuICBjb25zdCBOQU1FID0gJ1Nob3dNb3JlX0ZhZGVCYXInO1xuICBjb25zb2xlLmxvZyhgTm93IHVzaW5nICR7TkFNRX0gdmVyc2lvbiAke1ZFUlNJT059YCk7XG4gIC8vIHByZXBhcmUgdGhlIHN0eWxlIHRhZ2UgZm9yIHNvbWUgY3NzIGx1dmluXG4gIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBjb25zdCBoZWFkRWwgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHNldHRpbmdzKCk7XG4gIGNvbnN0IGNzc1RleHQgPSBGYWRlQmFyQ1NTKG9wdGlvbnMpO1xuICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcblxuICBzdHlsZUVsLnNldEF0dHJpYnV0ZSgnaWQnLCAnZmJDU1MnKTtcbiAgc3R5bGVFbC50ZXh0Q29udGVudCA9IGNzc1RleHQ7XG4gIGhlYWRFbC5hcHBlbmQoc3R5bGVFbCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB0aGVGYWRlcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuai1zaG93bW9yZScpKTtcblxuICAgIHRoZUZhZGVycy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBoZWlnaHQgPSBub2RlLm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnNvbGUubG9nKGhlaWdodClcbiAgICAgIGNvbnN0IHRoZUNvbnRhaW5lciA9IG5vZGU7XG4gICAgICBjb25zdCB0aGVGYWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCB0aGVTaG93TW9yZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cbiAgICAgIHRoZUZhZGVCYXIuY2xhc3NMaXN0LmFkZCgnai1mYWRlcicpO1xuICAgICAgdGhlU2hvd01vcmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnai1mYWRlcl9fYnV0dG9uJyk7XG5cbiAgICAgIHRoZVNob3dNb3JlQnV0dG9uLmlubmVyVGV4dCA9IG9wdGlvbnMuZmJJbml0QnV0dG9uVGV4dDtcblxuICAgICAgdGhlRmFkZUJhci5hcHBlbmRDaGlsZCh0aGVTaG93TW9yZUJ1dHRvbik7XG4gICAgICB0aGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhlRmFkZUJhcik7XG5cbiAgICAgIHRoZVNob3dNb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZXYudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXZpc2libGUnKTtcbiAgICAgICAgZXYudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdmlzaWJsZScpO1xuICAgICAgICBldi50YXJnZXQuY2xvc2VzdCgnLmotc2hvd21vcmUnKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy12aXNpYmxlJyk7XG4gICAgICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy12aXNpYmxlJykpe1xuICAgICAgICAgIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB9XG4gICAgICAgIGlmKGV2LnRhcmdldC5pbm5lclRleHQgPT09IG9wdGlvbnMuZmJJbml0QnV0dG9uVGV4dCkge1xuICAgICAgICAgIGV2LnRhcmdldC5pbm5lclRleHQgPSBvcHRpb25zLmZiT3BlbkJ1dHRvblRleHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBldi50YXJnZXQuaW5uZXJUZXh0ID0gb3B0aW9ucy5mYkluaXRCdXR0b25UZXh0XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgdGhlU2hvd01vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZXYpID0+IHtcbiAgICAgICAgZXYudGFyZ2V0LmJsdXIoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn0pO1xuLy8gbW9kdWxlLmV4cG9ydHMgPSBGYWRlQmFyO1xuXG5mdW5jdGlvbiBhcHBlbmRDU1Moc3R5bGVzKSB7XG4gIHJldHVyblxuICAvLyByZXR1cm4gKCkgPT4ge1xuICAvLyAgIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAvLyAgIGNvbnN0IGhlYWRFbCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgLy8gICAvLyBjb25zdCBjc3NTdHlsZXMgPSBjc3NcblxuICAvLyAgIHN0eWxlRWwudGV4dENvbnRlbnQgPSBzdHlsZXM7XG4gIC8vICAgaGVhZEVsLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuXG4gIC8vICAgc3R5bGVFbC50eXBlID0gJ3RleHQvY3NzJztcbiAgLy8gICBpZiAoc3R5bGVFbC5zdHlsZVNoZWV0KSB7XG4gIC8vICAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIGZvciBJRTggYW5kIGJlbG93LlxuICAvLyAgICAgc3R5bGVFbC5zdHlsZVNoZWV0LmNzc1RleHQgPSBzdHlsZXM7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHN0eWxlRWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVzKSk7XG4gIC8vICAgfVxuICAvLyB9O1xufVxuXG5mdW5jdGlvbiBjcygpIHtcbiAgY29uc3QgYWxsU2NyaXB0VGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdCNzaG93TW9yZUNTJyk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRzKCkge1xuICByZXR1cm4ge1xuICAgIGJveEhlaWdodDogJzMwMHB4JyxcbiAgICBmYlN0YXJ0Q29sb3I6ICdyZ2JhKDAsMCwwLC43NSknLFxuICAgIGZiRW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC43NSknLFxuICAgIGZiQm90dG9tQm9yZGVyOiAnNXB4IHNvbGlkICMyZTJlMmUnLFxuICAgIGZiSW5pdEJ1dHRvblRleHQ6ICdTaG93IE1vcmUnLFxuICAgIGZiT3BlbkJ1dHRvblRleHQ6ICdTaG93IExlc3MnLFxuICAgIGZiQnV0dG9uUG9zaXRpb246ICdjZW50ZXInLFxuICAgIGZiQnV0dG9uQmFja2dyb3VuZDogJyMwMDAnLFxuICAgIGZiQnV0dG9uQmFja2dyb3VuZEhvdmVyOiAnIzU4MDUwNTsnLFxuICAgIGZiQnV0dG9uQmFja2dyb3VuZEZvY3VzOiAnIzU4MDUwNTsnLFxuICAgIGZiQnV0dG9uVGV4dENvbG9yOiAnI2ZmZicsXG4gICAgZmJCdXR0b25UZXh0Q29sb3JIb3ZlcjogJyNmZmYnLFxuICAgIGZiQnV0dG9uVGV4dENvbG9yRm9jdXM6ICcjRkZGJyxcbiAgICBmYkJ1dHRvbkJvcmRlckNvbG9yOiAnIzJlMmUyZScsXG4gICAgZmJCdXR0b25Cb3JkZXJDb2xvckZvY3VzOiAnIzU4MDUwNScsXG4gICAgZmJDbGFzc0xpc3Q6ICd1LXRleHQtY2VudGVyJyxcbiAgICBmYkJ0bkNsYXNzTGlzdDogJ2J0biBidG4tcHJpbWFyeSBteC1hdXRvJyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2V0dGluZ3Mob3B0cykge1xuICBsZXQgU2hvd01vcmVTZXR0aW5ncyA9IHR5cGVvZiBudWxsO1xuICBsZXQgZmJDb24gPSBbXTtcbiAgaWYgKCFTaG93TW9yZVNldHRpbmdzKSB7XG4gICAgZmJDb24gPSBkZWZhdWx0cygpO1xuICB9IGVsc2Uge1xuICAgIGZiQ29uID0gU2hvd01vcmVTZXR0aW5ncztcbiAgfVxuXG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICBjbGFzc0Jhc2U6ICdidXR0b24tc2hvdy1tb3JlJyxcbiAgICBjbGFzc0FjdGl2ZTogJ2lzLWZ1bGx5LW9wZW5lZCcsXG4gICAgY2xhc3NGb2N1c2VkOiAnaXMtZm9jdXNlZCcsXG4gICAgZmFkZWJhckNsYXNzTGlzdDogJ2FuaW1hdGUgdGV4dC1jZW50ZXInLFxuICAgIGZhZGViYXJiQnV0dG9uQ2xhc3NMaXN0OiAnYnRuIG14LWF1dG8nLFxuICB9O1xuXG4gIGNvbnN0IGZiQWN0aW9uQnRuID0ge1xuICAgIHNob3dNb3JlOiAnU2hvdyBNb3JlJyxcbiAgICBzaG93TGVzczogJ1Nob3cgTGVzcycsXG4gICAgcG9zaXRpb25YOiAnY2VudGVyJyxcbiAgICBwb3NpdGlvblk6ICdib3R0b20nLFxuXG4gICAgZmJCdXR0b25Qb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgZmJCdXR0b25CYWNrZ3JvdW5kOiAnI2YyZjJmMicsXG4gIH07XG5cbiAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMoKSwgc3R5bGVzLCBmYkFjdGlvbkJ0biwgZmJDb24pO1xuICAvLyBjc3NCdWlsZGVyKG9wdGlvbnMpO1xuICByZXR1cm4gb3B0aW9ucztcbn1cbmxldCBGYWRlQmFyQ1NTID0gKCkgPT4ge307XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgRmFkZUJhckNTUyA9ICgpID0+IHtcbkZhZGVCYXJDU1MgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCBjc3NWYWx1ZXMgPSBvcHRpb25zO1xuXG4gIGNvbnN0IGZiQ1NTID0gJyc7XG5cbiAgLy8gYXBwZW5kQ1NTKGZiQ1NTKVxuICByZXR1cm4gZmJDU1M7XG59O1xuLy8gRmFkZUJhcigpIiwiLyohXG4gICAgKiBTdGFydCBCb290c3RyYXAgLSBBZ2VuY3kgdjYuMC4yIChodHRwczovL3N0YXJ0Ym9vdHN0cmFwLmNvbS90ZW1wbGF0ZS1vdmVydmlld3MvYWdlbmN5KVxuICAgICogQ29weXJpZ2h0IDIwMTMtMjAyMCBTdGFydCBCb290c3RyYXBcbiAgICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL1N0YXJ0Qm9vdHN0cmFwL3N0YXJ0Ym9vdHN0cmFwLWFnZW5jeS9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICAgICovXG4gICAoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjsgLy8gU3RhcnQgb2YgdXNlIHN0cmljdFxuXG4gICAgICAvLyA9PT09PT0gUkFOS0lORyBCQVJTXG4gICAgICB2YXIgdGhlQmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9ncmVzcy1iYXInKVxuICAgICAgdGhlQmFycy5mb3JFYWNoKGFCYXIgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgdmFyIGJhcldpZHRoID0gJChhQmFyKS5hdHRyKCdhcmlhLXZhbHVlbm93JylcbiAgICAgICAgJChhQmFyKS5hdHRyKCdzdHlsZScsIGB3aWR0aDogJHtiYXJXaWR0aH0lYCk7XG4gICAgICB9KTtcblxuICAgIC8vIFNtb290aCBzY3JvbGxpbmcgdXNpbmcgalF1ZXJ5IGVhc2luZ1xuICAgICQoJ2EuanMtc2Nyb2xsLXRyaWdnZXJbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgXCJcIikgPT1cbiAgICAgICAgICAgICAgICB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCBcIlwiKSAmJlxuICAgICAgICAgICAgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyB0YXJnZXRcbiAgICAgICAgICAgICAgICA6ICQoXCJbbmFtZT1cIiArIHRoaXMuaGFzaC5zbGljZSgxKSArIFwiXVwiKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wIC0gNzIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIFwiZWFzZUluT3V0RXhwb1wiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENsb3NlcyByZXNwb25zaXZlIG1lbnUgd2hlbiBhIHNjcm9sbCB0cmlnZ2VyIGxpbmsgaXMgY2xpY2tlZFxuICAgICQoXCIuanMtc2Nyb2xsLXRyaWdnZXJcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLm5hdmJhci1jb2xsYXBzZVwiKS5jb2xsYXBzZShcImhpZGVcIik7XG4gICAgfSk7XG5cbiAgICAvLyBBY3RpdmF0ZSBzY3JvbGxzcHkgdG8gYWRkIGFjdGl2ZSBjbGFzcyB0byBuYXZiYXIgaXRlbXMgb24gc2Nyb2xsXG4gICAgJChcImJvZHlcIikuc2Nyb2xsc3B5KHtcbiAgICAgICAgdGFyZ2V0OiBcIiNtYWluTmF2XCIsXG4gICAgICAgIG9mZnNldDogNzQsXG4gICAgfSk7XG5cbiAgICAvLyBDb2xsYXBzZSBOYXZiYXJcbiAgICB2YXIgbmF2YmFyQ29sbGFwc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKFwiI21haW5OYXZcIikub2Zmc2V0KCkudG9wID4gMTAwKSB7XG4gICAgICAgICAgICAkKFwiI21haW5OYXZcIikuYWRkQ2xhc3MoXCJuYXZiYXItc2hyaW5rXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNtYWluTmF2XCIpLnJlbW92ZUNsYXNzKFwibmF2YmFyLXNocmlua1wiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gQ29sbGFwc2Ugbm93IGlmIHBhZ2UgaXMgbm90IGF0IHRvcFxuICAgIG5hdmJhckNvbGxhcHNlKCk7XG4gICAgLy8gQ29sbGFwc2UgdGhlIG5hdmJhciB3aGVuIHBhZ2UgaXMgc2Nyb2xsZWRcbiAgICAvLyAkKHdpbmRvdykuc2Nyb2xsKG5hdmJhckNvbGxhcHNlKTsgLy9kZXByZWNhdGVkXG4gICAgLy8gJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBuYXZiYXJDb2xsYXBzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG5hdmJhckNvbGxhcHNlLCBmYWxzZSlcblxuICAgIC8vICoqID09PT09PSBNT0RFIFdJREhFVCA9PT09PT0gKiogLy9cbiAgICB2YXIgJGRtX2J0biA9ICQoJyNtb2RlX3dpZGdldCcpXG4gICAgdmFyIGxzR2V0TW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrX21vZGUnKVxuXG4gICAgLy8gc2V0IGJ1dHRvbiB0ZXh0XG4gICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgICAgaWYgKGxzR2V0TW9kZSA9PT0gJ2Zhc2xlJykge1xuICAgICAgICBzZXRNb2RlVGV4dCh0cnVlKVxuICAgICAgICAvLyRkbV9idG4uaHRtbCgnPHNwYW4gY2xhc3M9XCJ3aGljaC1tb2RlXCI+RGFyayBNb2RlPHNwYW4gaWQ9XCJtb2RlX2ljb25cIiBjbGFzcz1cImZhIGZhLW1vb24tbyBtb2RlLWljb25cIj48L3NwYW4+PC9zcGFuPicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRNb2RlVGV4dChmYWxzZSlcbiAgICAgICAgLy8gJGRtX2J0bi5odG1sKCc8c3BhbiBjbGFzcz1cIndoaWNoLW1vZGVcIj5MaWdodCBNb2RlPHNwYW4gaWQ9XCJtb2RlX2ljb25cIiBjbGFzcz1cImZhIGZhLXN1bi1vIG1vZGUtaWNvblwiPjwvc3Bhbj48L3NwYW4+JylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gc2V0TW9kZVRleHQobW9kZSkge1xuICAgICAgaWYgKG1vZGUgPT09ICd0cnVlJykge1xuICAgICAgICAkZG1fYnRuLmh0bWwoJzxzcGFuIGNsYXNzPVwid2hpY2gtbW9kZVwiPiBEYXJrIE1vZGU8c3BhbiBpZD1cIm1vZGVfaWNvblwiIGNsYXNzPVwiZmEgZmEtbW9vbi1vIG1vZGUtaWNvblwiPjwvc3Bhbj48L3NwYW4+JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRkbV9idG4uaHRtbCgnPHNwYW4gY2xhc3M9XCJ3aGljaC1tb2RlXCI+IExpZ2h0IE1vZGU8c3BhbiBpZD1cIm1vZGVfaWNvblwiIGNsYXNzPVwiZmEgZmEtc3VuLW8gbW9kZS1pY29uXCI+PC9zcGFuPjwvc3Bhbj4nKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE1vZGUobW9kZSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtfbW9kZScsIGAke21vZGV9YClcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXJrbW9kZScpLmRpc2FibGVkID0gbW9kZTtcblxuICAgICAgaWYgKG1vZGUgPT09ICd0cnVlJykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFya21vZGUnKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAkZG1fYnRuLmh0bWwoJzxzcGFuIGNsYXNzPVwid2hpY2gtbW9kZVwiPiBEYXJrIE1vZGU8c3BhbiBpZD1cIm1vZGVfaWNvblwiIGNsYXNzPVwiZmEgZmEtbW9vbi1vIG1vZGUtaWNvblwiPjwvc3Bhbj48L3NwYW4+JylcblxuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW2hyZWY9XCJjc3MvdGhlbWUtZGFyay1tb2RlLmNzc1wiXScpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZG1fYnRuLmh0bWwoJzxzcGFuIGNsYXNzPVwid2hpY2gtbW9kZVwiPiBMaWdodCBNb2RlPHNwYW4gaWQ9XCJtb2RlX2ljb25cIiBjbGFzcz1cImZhIGZhLXN1bi1vIG1vZGUtaWNvblwiPjwvc3Bhbj48L3NwYW4+JylcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXRNb2RlVGV4dChtb2RlKVxuICAgIH1cblxuICAgIC8vIFRoZW1lIHN3aXRjaGVyXG4gICAgJGRtX2J0bi5iaW5kKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrX21vZGUnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHNldE1vZGUoJ2ZhbHNlJyksIGNvbnNvbGUubG9nKCdzZXQgdG8gZmFsc2UnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TW9kZSgndHJ1ZScpLCBjb25zb2xlLmxvZygnc2V0IHRvIHRydWUnKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfSlcblxuICAgIC8vID09PT09PSBTSE9XTU9SRSA9PT09IC8vXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgbGV0IFNob3dNb3JlU2V0dGluZ3MgPSB7XG4gICAgICBib3hIZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBmYlN0YXJ0Q29sb3I6ICdyZ2JhKDAsMCwwLC43NSknLFxuICAgICAgZmJFbmRDb2xvcjogJ3JnYmEoMCwwLDAsLjc1KScsXG4gICAgICBmYkJvdHRvbUJvcmRlcjogJzFweCBzb2xpZCAjMmUyZTJlJyxcbiAgICAgIGZiSW5pdEJ1dHRvblRleHQ6ICdTaG93IE1vcmUnLFxuICAgICAgZmJPcGVuQnV0dG9uVGV4dDogJ1Nob3cgTGVzcycsXG4gICAgICBmYkJ1dHRvblBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgIGZiQnV0dG9uQmFja2dyb3VuZDogJyMxNTE1MTUnLFxuICAgICAgZmJCdXR0b25CYWNrZ3JvdW5kSG92ZXI6ICcjMzMzMzMzOycsXG4gICAgICBmYkJ1dHRvblRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgZmJCdXR0b25UZXh0Q29sb3JIb3ZlcjogJyNmZmZmZmYnLFxuICAgICAgZmJCdXR0b25UZXh0Q29sb3JGb2N1czogJyNGRkYnLFxuICAgICAgZmJCdXR0b25Cb3JkZXJDb2xvcjogJyMwMDAwMDAnLFxuICAgICAgZmJCdXR0b25Cb3JkZXJDb2xvckZvY3VzOiAnIzMzMzMzMycsXG4gICAgfVxuXG59KShqUXVlcnkpOyAvLyBFbmQgb2YgdXNlIHN0cmljdFxuIl19
