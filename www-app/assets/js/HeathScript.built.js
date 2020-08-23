(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require('./js/scripts.js');

require('./js/modules/show-more-fadebar');

require('./js/jqBootstrapValidation');

require('./js/contact_me');

},{"./js/contact_me":2,"./js/jqBootstrapValidation":3,"./js/modules/show-more-fadebar":4,"./js/scripts.js":6}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

module.exports = require('./show-more.js');

},{"./show-more.js":5}],5:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvanMvY29udGFjdF9tZS5qcyIsInNyYy9qcy9qcUJvb3RzdHJhcFZhbGlkYXRpb24uanMiLCJzcmMvanMvbW9kdWxlcy9zaG93LW1vcmUtZmFkZWJhci9pbmRleC5qcyIsInNyYy9qcy9tb2R1bGVzL3Nob3ctbW9yZS1mYWRlYmFyL3Nob3ctbW9yZS5qcyIsInNyYy9qcy9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxPQUFPLENBQVAsaUJBQU8sQ0FBUDs7QUFDQSxPQUFPLENBQVAsZ0NBQU8sQ0FBUDs7QUFDQSxPQUFPLENBQVAsNEJBQU8sQ0FBUDs7QUFDQSxPQUFPLENBQVAsaUJBQU8sQ0FBUDs7O2NDSEE7O0FBRUEsQ0FBQyxDQUFDLFlBQVc7QUFFVCxFQUFBLENBQUMsQ0FBRCwwQ0FBQyxDQUFELENBQUEscUJBQUEsQ0FBb0U7QUFDaEUsSUFBQSxhQUFhLEVBRG1ELElBQUE7QUFFaEUsSUFBQSxXQUFXLEVBQUUsU0FBQSxXQUFBLENBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQStCLENBQ3hDO0FBSDRELEtBQUE7QUFLaEUsSUFBQSxhQUFhLEVBQUUsU0FBQSxhQUFBLENBQUEsS0FBQSxFQUFBLEtBQUEsRUFBdUI7QUFDbEMsTUFBQSxLQUFLLENBRDZCLGNBQ2xDLEdBRGtDLENBQ1Y7QUFDeEI7O0FBQ0EsVUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFELFlBQUMsQ0FBRCxDQUFYLEdBQVcsRUFBWDtBQUNBLFVBQUksS0FBSyxHQUFHLENBQUMsQ0FBRCxhQUFDLENBQUQsQ0FBWixHQUFZLEVBQVo7QUFDQSxVQUFJLEtBQUssR0FBRyxDQUFDLENBQUQsYUFBQyxDQUFELENBQVosR0FBWSxFQUFaO0FBQ0EsVUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFELGtCQUFDLENBQUQsQ0FBZCxHQUFjLEVBQWQ7QUFD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LEdBQXZCO0FBaEhELENBQUEsRUFBQSxNQUFBLEUsQ0FpSVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJyZXF1aXJlKCcuL2pzL3NjcmlwdHMuanMnKVxucmVxdWlyZSgnLi9qcy9tb2R1bGVzL3Nob3ctbW9yZS1mYWRlYmFyJylcbnJlcXVpcmUoJy4vanMvanFCb290c3RyYXBWYWxpZGF0aW9uJylcbnJlcXVpcmUoJy4vanMvY29udGFjdF9tZScpXG4iLCIvLyBDb250YWN0IEZvcm0gU2NyaXB0c1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAkKFwiI2NvbnRhY3RGb3JtIGlucHV0LCNjb250YWN0Rm9ybSB0ZXh0YXJlYVwiKS5qcUJvb3RzdHJhcFZhbGlkYXRpb24oe1xyXG4gICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXHJcbiAgICAgICAgc3VibWl0RXJyb3I6IGZ1bmN0aW9uKCRmb3JtLCBldmVudCwgZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZGl0aW9uYWwgZXJyb3IgbWVzc2FnZXMgb3IgZXZlbnRzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJtaXRTdWNjZXNzOiBmdW5jdGlvbigkZm9ybSwgZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBkZWZhdWx0IHN1Ym1pdCBiZWhhdmlvdXJcclxuICAgICAgICAgICAgLy8gZ2V0IHZhbHVlcyBmcm9tIEZPUk1cclxuICAgICAgICAgICAgdmFyIG5hbWUgPSAkKFwiaW5wdXQjbmFtZVwiKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIGVtYWlsID0gJChcImlucHV0I2VtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgcGhvbmUgPSAkKFwiaW5wdXQjcGhvbmVcIikudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gJChcInRleHRhcmVhI21lc3NhZ2VcIikudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBmaXJzdE5hbWUgPSBuYW1lOyAvLyBGb3IgU3VjY2Vzcy9GYWlsdXJlIE1lc3NhZ2VcclxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHdoaXRlIHNwYWNlIGluIG5hbWUgZm9yIFN1Y2Nlc3MvRmFpbCBtZXNzYWdlXHJcbiAgICAgICAgICAgIGlmIChmaXJzdE5hbWUuaW5kZXhPZignICcpID49IDApIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSA9IG5hbWUuc3BsaXQoJyAnKS5zbGljZSgwLCAtMSkuam9pbignICcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi8uL21haWwvY29udGFjdF9tZS5waHBcIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VjY2VzcyBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3MnKS5odG1sKFwiPGRpdiBjbGFzcz0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNzdWNjZXNzID4gLmFsZXJ0LXN1Y2Nlc3MnKS5odG1sKFwiPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdhbGVydCcgYXJpYS1oaWRkZW49J3RydWUnPiZ0aW1lcztcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcIjwvYnV0dG9uPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjc3VjY2VzcyA+IC5hbGVydC1zdWNjZXNzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcIjxzdHJvbmc+WW91ciBtZXNzYWdlIGhhcyBiZWVuIHNlbnQuIDwvc3Ryb25nPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjc3VjY2VzcyA+IC5hbGVydC1zdWNjZXNzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgnPC9kaXY+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY2xlYXIgYWxsIGZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjb250YWN0Rm9ybScpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRmFpbCBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3MnKS5odG1sKFwiPGRpdiBjbGFzcz0nYWxlcnQgYWxlcnQtZGFuZ2VyJz5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3MgPiAuYWxlcnQtZGFuZ2VyJykuaHRtbChcIjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nYWxlcnQnIGFyaWEtaGlkZGVuPSd0cnVlJz4mdGltZXM7XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCI8L2J1dHRvbj5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3MgPiAuYWxlcnQtZGFuZ2VyJykuYXBwZW5kKFwiPHN0cm9uZz5Tb3JyeSBcIiArIGZpcnN0TmFtZSArIFwiLCBpdCBzZWVtcyB0aGF0IG15IG1haWwgc2VydmVyIGlzIG5vdCByZXNwb25kaW5nLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjc3VjY2VzcyA+IC5hbGVydC1kYW5nZXInKS5hcHBlbmQoJzwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2xlYXIgYWxsIGZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjb250YWN0Rm9ybScpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuICQodGhpcykuaXMoXCI6dmlzaWJsZVwiKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcImFbZGF0YS10b2dnbGU9XFxcInRhYlxcXCJdXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS50YWIoXCJzaG93XCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8qV2hlbiBjbGlja2luZyBvbiBGdWxsIGhpZGUgZmFpbC9zdWNjZXNzIGJveGVzICovXHJcbiQoJyNuYW1lJykuZm9jdXMoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcjc3VjY2VzcycpLmh0bWwoJycpO1xyXG59KTtcclxuIiwiLyoganFCb290c3RyYXBWYWxpZGF0aW9uXHJcbiAqIEEgcGx1Z2luIGZvciBhdXRvbWF0aW5nIHZhbGlkYXRpb24gb24gVHdpdHRlciBCb290c3RyYXAgZm9ybWF0dGVkIGZvcm1zLlxyXG4gKlxyXG4gKiB2MS4zLjZcclxuICpcclxuICogTGljZW5zZTogTUlUIDxodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwPiAtIHNlZSBMSUNFTlNFIGZpbGVcclxuICpcclxuICogaHR0cDovL1JlYWN0aXZlUmF2ZW4uZ2l0aHViLmNvbS9qcUJvb3RzdHJhcFZhbGlkYXRpb24vXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uKCAkICl7XHJcblxyXG5cdHZhciBjcmVhdGVkRWxlbWVudHMgPSBbXTtcclxuXHJcblx0dmFyIGRlZmF1bHRzID0ge1xyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHRwcmVwZW5kRXhpc3RpbmdIZWxwQmxvY2s6IGZhbHNlLFxyXG5cdFx0XHRzbmlmZkh0bWw6IHRydWUsIC8vIHNuaWZmIGZvciAncmVxdWlyZWQnLCAnbWF4bGVuZ3RoJywgZXRjXHJcblx0XHRcdHByZXZlbnRTdWJtaXQ6IHRydWUsIC8vIHN0b3AgdGhlIGZvcm0gc3VibWl0IGV2ZW50IGZyb20gZmlyaW5nIGlmIHZhbGlkYXRpb24gZmFpbHNcclxuXHRcdFx0c3VibWl0RXJyb3I6IGZhbHNlLCAvLyBmdW5jdGlvbiBjYWxsZWQgaWYgdGhlcmUgaXMgYW4gZXJyb3Igd2hlbiB0cnlpbmcgdG8gc3VibWl0XHJcblx0XHRcdHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLCAvLyBmdW5jdGlvbiBjYWxsZWQganVzdCBiZWZvcmUgYSBzdWNjZXNzZnVsIHN1Ym1pdCBldmVudCBpcyBzZW50IHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgICAgc2VtYW50aWNhbGx5U3RyaWN0OiBmYWxzZSwgLy8gc2V0IHRvIHRydWUgdG8gdGlkeSB1cCBnZW5lcmF0ZWQgSFRNTCBvdXRwdXRcclxuXHRcdFx0YXV0b0FkZDoge1xyXG5cdFx0XHRcdGhlbHBCbG9ja3M6IHRydWVcclxuXHRcdFx0fSxcclxuICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gJCh0aGlzKS5pcyhcIjp2aXNpYmxlXCIpOyAvLyBvbmx5IHZhbGlkYXRlIGVsZW1lbnRzIHlvdSBjYW4gc2VlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gdmFsaWRhdGUgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBpbml0IDogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkZWZhdWx0cyk7XHJcblxyXG4gICAgICAgIHNldHRpbmdzLm9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCBzZXR0aW5ncy5vcHRpb25zLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyICRzaWJsaW5nRWxlbWVudHMgPSB0aGlzO1xyXG5cclxuICAgICAgICB2YXIgdW5pcXVlRm9ybXMgPSAkLnVuaXF1ZShcclxuICAgICAgICAgICRzaWJsaW5nRWxlbWVudHMubWFwKCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLnBhcmVudHMoXCJmb3JtXCIpWzBdO1xyXG4gICAgICAgICAgfSkudG9BcnJheSgpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgJCh1bmlxdWVGb3JtcykuYmluZChcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdmFyICRmb3JtID0gJCh0aGlzKTtcclxuICAgICAgICAgIHZhciB3YXJuaW5nc0ZvdW5kID0gMDtcclxuICAgICAgICAgIHZhciAkaW5wdXRzID0gJGZvcm0uZmluZChcImlucHV0LHRleHRhcmVhLHNlbGVjdFwiKS5ub3QoXCJbdHlwZT1zdWJtaXRdLFt0eXBlPWltYWdlXVwiKS5maWx0ZXIoc2V0dGluZ3Mub3B0aW9ucy5maWx0ZXIpO1xyXG4gICAgICAgICAgJGlucHV0cy50cmlnZ2VyKFwic3VibWl0LnZhbGlkYXRpb25cIikudHJpZ2dlcihcInZhbGlkYXRpb25Mb3N0Rm9jdXMudmFsaWRhdGlvblwiKTtcclxuXHJcbiAgICAgICAgICAkaW5wdXRzLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQoZWwpLFxyXG4gICAgICAgICAgICAgICRjb250cm9sR3JvdXAgPSAkdGhpcy5wYXJlbnRzKFwiLmZvcm0tZ3JvdXBcIikuZmlyc3QoKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICRjb250cm9sR3JvdXAuaGFzQ2xhc3MoXCJ3YXJuaW5nXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICRjb250cm9sR3JvdXAucmVtb3ZlQ2xhc3MoXCJ3YXJuaW5nXCIpLmFkZENsYXNzKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgd2FybmluZ3NGb3VuZCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkaW5wdXRzLnRyaWdnZXIoXCJ2YWxpZGF0aW9uTG9zdEZvY3VzLnZhbGlkYXRpb25cIik7XHJcblxyXG4gICAgICAgICAgaWYgKHdhcm5pbmdzRm91bmQpIHtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLm9wdGlvbnMucHJldmVudFN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkZm9ybS5hZGRDbGFzcyhcImVycm9yXCIpO1xyXG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmdzLm9wdGlvbnMuc3VibWl0RXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgc2V0dGluZ3Mub3B0aW9ucy5zdWJtaXRFcnJvcigkZm9ybSwgZSwgJGlucHV0cy5qcUJvb3RzdHJhcFZhbGlkYXRpb24oXCJjb2xsZWN0RXJyb3JzXCIsIHRydWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGZvcm0ucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5ncy5vcHRpb25zLnN1Ym1pdFN1Y2Nlc3MpKSB7XHJcbiAgICAgICAgICAgICAgc2V0dGluZ3Mub3B0aW9ucy5zdWJtaXRTdWNjZXNzKCRmb3JtLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgLy8gR2V0IHJlZmVyZW5jZXMgdG8gZXZlcnl0aGluZyB3ZSdyZSBpbnRlcmVzdGVkIGluXHJcbiAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAkY29udHJvbEdyb3VwID0gJHRoaXMucGFyZW50cyhcIi5mb3JtLWdyb3VwXCIpLmZpcnN0KCksXHJcbiAgICAgICAgICAgICRoZWxwQmxvY2sgPSAkY29udHJvbEdyb3VwLmZpbmQoXCIuaGVscC1ibG9ja1wiKS5maXJzdCgpLFxyXG4gICAgICAgICAgICAkZm9ybSA9ICR0aGlzLnBhcmVudHMoXCJmb3JtXCIpLmZpcnN0KCksXHJcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWVzID0gW107XHJcblxyXG4gICAgICAgICAgLy8gY3JlYXRlIG1lc3NhZ2UgY29udGFpbmVyIGlmIG5vdCBleGlzdHNcclxuICAgICAgICAgIGlmICghJGhlbHBCbG9jay5sZW5ndGggJiYgc2V0dGluZ3Mub3B0aW9ucy5hdXRvQWRkICYmIHNldHRpbmdzLm9wdGlvbnMuYXV0b0FkZC5oZWxwQmxvY2tzKSB7XHJcbiAgICAgICAgICAgICAgJGhlbHBCbG9jayA9ICQoJzxkaXYgY2xhc3M9XCJoZWxwLWJsb2NrXCIgLz4nKTtcclxuICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLmZpbmQoJy5jb250cm9scycpLmFwcGVuZCgkaGVscEJsb2NrKTtcclxuXHRcdFx0XHRcdFx0XHRjcmVhdGVkRWxlbWVudHMucHVzaCgkaGVscEJsb2NrWzBdKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTTklGRiBIVE1MIEZPUiBWQUxJREFUT1JTXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgLy8gKnNub3J0IHNuaWZmIHNudWZmbGUqXHJcblxyXG4gICAgICAgICAgaWYgKHNldHRpbmdzLm9wdGlvbnMuc25pZmZIdG1sKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJcIjtcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFUVEVSTlxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgaWYgKCR0aGlzLmF0dHIoXCJwYXR0ZXJuXCIpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJOb3QgaW4gdGhlIGV4cGVjdGVkIGZvcm1hdDwhLS0gZGF0YS12YWxpZGF0aW9uLXBhdHRlcm4tbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcclxuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25QYXR0ZXJuTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uUGF0dGVybk1lc3NhZ2VcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uUGF0dGVybk1lc3NhZ2VcIiwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25QYXR0ZXJuUmVnZXhcIiwgJHRoaXMuYXR0cihcInBhdHRlcm5cIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNQVhcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwibWF4XCIpICE9PSB1bmRlZmluZWQgfHwgJHRoaXMuYXR0cihcImFyaWEtdmFsdWVtYXhcIikgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIHZhciBtYXggPSAoJHRoaXMuYXR0cihcIm1heFwiKSAhPT0gdW5kZWZpbmVkID8gJHRoaXMuYXR0cihcIm1heFwiKSA6ICR0aGlzLmF0dHIoXCJhcmlhLXZhbHVlbWF4XCIpKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJUb28gaGlnaDogTWF4aW11bSBvZiAnXCIgKyBtYXggKyBcIic8IS0tIGRhdGEtdmFsaWRhdGlvbi1tYXgtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcclxuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhNZXNzYWdlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhNZXNzYWdlXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heE1lc3NhZ2VcIiwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhNYXhcIiwgbWF4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTUlOXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcIm1pblwiKSAhPT0gdW5kZWZpbmVkIHx8ICR0aGlzLmF0dHIoXCJhcmlhLXZhbHVlbWluXCIpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICB2YXIgbWluID0gKCR0aGlzLmF0dHIoXCJtaW5cIikgIT09IHVuZGVmaW5lZCA/ICR0aGlzLmF0dHIoXCJtaW5cIikgOiAkdGhpcy5hdHRyKFwiYXJpYS12YWx1ZW1pblwiKSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVG9vIGxvdzogTWluaW11bSBvZiAnXCIgKyBtaW4gKyBcIic8IS0tIGRhdGEtdmFsaWRhdGlvbi1taW4tbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcclxuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5NZXNzYWdlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5NZXNzYWdlXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbk1lc3NhZ2VcIiwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5NaW5cIiwgbWluKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTUFYTEVOR1RIXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBpZiAoJHRoaXMuYXR0cihcIm1heGxlbmd0aFwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVG9vIGxvbmc6IE1heGltdW0gb2YgJ1wiICsgJHRoaXMuYXR0cihcIm1heGxlbmd0aFwiKSArIFwiJyBjaGFyYWN0ZXJzPCEtLSBkYXRhLXZhbGlkYXRpb24tbWF4bGVuZ3RoLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCI7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4bGVuZ3RoTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4bGVuZ3RoTWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhsZW5ndGhNZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWF4bGVuZ3RoTWF4bGVuZ3RoXCIsICR0aGlzLmF0dHIoXCJtYXhsZW5ndGhcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNSU5MRU5HVEhcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwibWlubGVuZ3RoXCIpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJUb28gc2hvcnQ6IE1pbmltdW0gb2YgJ1wiICsgJHRoaXMuYXR0cihcIm1pbmxlbmd0aFwiKSArIFwiJyBjaGFyYWN0ZXJzPCEtLSBkYXRhLXZhbGlkYXRpb24tbWlubGVuZ3RoLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCI7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWlubGVuZ3RoTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWlubGVuZ3RoTWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NaW5sZW5ndGhNZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWlubGVuZ3RoTWlubGVuZ3RoXCIsICR0aGlzLmF0dHIoXCJtaW5sZW5ndGhcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVRVUlSRURcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwicmVxdWlyZWRcIikgIT09IHVuZGVmaW5lZCB8fCAkdGhpcy5hdHRyKFwiYXJpYS1yZXF1aXJlZFwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IHNldHRpbmdzLmJ1aWx0SW5WYWxpZGF0b3JzLnJlcXVpcmVkLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uUmVxdWlyZWRNZXNzYWdlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25SZXF1aXJlZE1lc3NhZ2VcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uUmVxdWlyZWRNZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOVU1CRVJcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwidHlwZVwiKSAhPT0gdW5kZWZpbmVkICYmICR0aGlzLmF0dHIoXCJ0eXBlXCIpLnRvTG93ZXJDYXNlKCkgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlID0gc2V0dGluZ3MuYnVpbHRJblZhbGlkYXRvcnMubnVtYmVyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTnVtYmVyTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTnVtYmVyTWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25OdW1iZXJNZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1BSUxcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwidHlwZVwiKSAhPT0gdW5kZWZpbmVkICYmICR0aGlzLmF0dHIoXCJ0eXBlXCIpLnRvTG93ZXJDYXNlKCkgPT09IFwiZW1haWxcIikge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIk5vdCBhIHZhbGlkIGVtYWlsIGFkZHJlc3M8IS0tIGRhdGEtdmFsaWRhdG9yLXZhbGlkZW1haWwtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIjtcclxuICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YShcInZhbGlkYXRpb25WYWxpZGVtYWlsTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uVmFsaWRlbWFpbE1lc3NhZ2VcIik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgkdGhpcy5kYXRhKFwidmFsaWRhdGlvbkVtYWlsTWVzc2FnZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uRW1haWxNZXNzYWdlXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblZhbGlkZW1haWxNZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1JTkNIRUNLRURcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwibWluY2hlY2tlZFwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiTm90IGVub3VnaCBvcHRpb25zIGNoZWNrZWQ7IE1pbmltdW0gb2YgJ1wiICsgJHRoaXMuYXR0cihcIm1pbmNoZWNrZWRcIikgKyBcIicgcmVxdWlyZWQ8IS0tIGRhdGEtdmFsaWRhdGlvbi1taW5jaGVja2VkLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCI7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWluY2hlY2tlZE1lc3NhZ2VcIikpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmNoZWNrZWRNZXNzYWdlXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1pbmNoZWNrZWRNZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uTWluY2hlY2tlZE1pbmNoZWNrZWRcIiwgJHRoaXMuYXR0cihcIm1pbmNoZWNrZWRcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1BWENIRUNLRURcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5hdHRyKFwibWF4Y2hlY2tlZFwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVG9vIG1hbnkgb3B0aW9ucyBjaGVja2VkOyBNYXhpbXVtIG9mICdcIiArICR0aGlzLmF0dHIoXCJtYXhjaGVja2VkXCIpICsgXCInIHJlcXVpcmVkPCEtLSBkYXRhLXZhbGlkYXRpb24tbWF4Y2hlY2tlZC1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiO1xyXG4gICAgICAgICAgICAgIGlmICgkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGNoZWNrZWRNZXNzYWdlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhjaGVja2VkTWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25NYXhjaGVja2VkTWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvbk1heGNoZWNrZWRNYXhjaGVja2VkXCIsICR0aGlzLmF0dHIoXCJtYXhjaGVja2VkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ09MTEVDVCBWQUxJREFUT1IgTkFNRVNcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgICAvLyBHZXQgbmFtZWQgdmFsaWRhdG9yc1xyXG4gICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yTmFtZXMgPSAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiKS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gR2V0IGV4dHJhIG9uZXMgZGVmaW5lZCBvbiB0aGUgZWxlbWVudCdzIGRhdGEgYXR0cmlidXRlc1xyXG4gICAgICAgICAgJC5lYWNoKCR0aGlzLmRhdGEoKSwgZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGkucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiwkMVwiKS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIGlmIChwYXJ0c1swXSA9PT0gXCJ2YWxpZGF0aW9uXCIgJiYgcGFydHNbMV0pIHtcclxuICAgICAgICAgICAgICB2YWxpZGF0b3JOYW1lcy5wdXNoKHBhcnRzWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9STUFMSVNFIFZBTElEQVRPUiBOQU1FU1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgIHZhciB2YWxpZGF0b3JOYW1lc1RvSW5zcGVjdCA9IHZhbGlkYXRvck5hbWVzO1xyXG4gICAgICAgICAgdmFyIG5ld1ZhbGlkYXRvck5hbWVzVG9JbnNwZWN0ID0gW107XHJcblxyXG4gICAgICAgICAgZG8gLy8gcmVwZWF0ZWRseSBleHBhbmQgJ3Nob3J0Y3V0JyB2YWxpZGF0b3JzIGludG8gdGhlaXIgcmVhbCB2YWxpZGF0b3JzXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFVwcGVyY2FzZSBvbmx5IHRoZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCBuYW1lXHJcbiAgICAgICAgICAgICQuZWFjaCh2YWxpZGF0b3JOYW1lcywgZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9yTmFtZXNbaV0gPSBmb3JtYXRWYWxpZGF0b3JOYW1lKGVsKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlIHZhbGlkYXRvciBuYW1lc1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JOYW1lcyA9ICQudW5pcXVlKHZhbGlkYXRvck5hbWVzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFB1bGwgb3V0IHRoZSBuZXcgdmFsaWRhdG9yIG5hbWVzIGZyb20gZWFjaCBzaG9ydGN1dFxyXG4gICAgICAgICAgICBuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdCA9IFtdO1xyXG4gICAgICAgICAgICAkLmVhY2godmFsaWRhdG9yTmFtZXNUb0luc3BlY3QsIGZ1bmN0aW9uKGksIGVsKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBlbCArIFwiU2hvcnRjdXRcIikgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQXJlIHRoZXNlIGN1c3RvbSB2YWxpZGF0b3JzP1xyXG4gICAgICAgICAgICAgICAgLy8gUHVsbCB0aGVtIG91dCFcclxuICAgICAgICAgICAgICAgICQuZWFjaCgkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgZWwgKyBcIlNob3J0Y3V0XCIpLnNwbGl0KFwiLFwiKSwgZnVuY3Rpb24oaTIsIGVsMikge1xyXG4gICAgICAgICAgICAgICAgICBuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdC5wdXNoKGVsMik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNldHRpbmdzLmJ1aWx0SW5WYWxpZGF0b3JzW2VsLnRvTG93ZXJDYXNlKCldKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGlzIGEgcmVjb2duaXNlZCBidWlsdC1pbj9cclxuICAgICAgICAgICAgICAgIC8vIFB1bGwgaXQgb3V0IVxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRvciA9IHNldHRpbmdzLmJ1aWx0SW5WYWxpZGF0b3JzW2VsLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvci50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwic2hvcnRjdXRcIikge1xyXG4gICAgICAgICAgICAgICAgICAkLmVhY2godmFsaWRhdG9yLnNob3J0Y3V0LnNwbGl0KFwiLFwiKSwgZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwgPSBmb3JtYXRWYWxpZGF0b3JOYW1lKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWxpZGF0b3JOYW1lc1RvSW5zcGVjdC5wdXNoKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JOYW1lcy5wdXNoKGVsKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWVzVG9JbnNwZWN0ID0gbmV3VmFsaWRhdG9yTmFtZXNUb0luc3BlY3Q7XHJcblxyXG4gICAgICAgICAgfSB3aGlsZSAodmFsaWRhdG9yTmFtZXNUb0luc3BlY3QubGVuZ3RoID4gMClcclxuXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNFVCBVUCBWQUxJREFUT1IgQVJSQVlTXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgdmFyIHZhbGlkYXRvcnMgPSB7fTtcclxuXHJcbiAgICAgICAgICAkLmVhY2godmFsaWRhdG9yTmFtZXMsIGZ1bmN0aW9uIChpLCBlbCkge1xyXG4gICAgICAgICAgICAvLyBTZXQgdXAgdGhlICdvdmVycmlkZScgbWVzc2FnZVxyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBlbCArIFwiTWVzc2FnZVwiKTtcclxuICAgICAgICAgICAgdmFyIGhhc092ZXJyaWRlTWVzc2FnZSA9IChtZXNzYWdlICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB2YXIgZm91bmRWYWxpZGF0b3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgbWVzc2FnZSA9XHJcbiAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICA/IG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgOiBcIidcIiArIGVsICsgXCInIHZhbGlkYXRpb24gZmFpbGVkIDwhLS0gQWRkIGF0dHJpYnV0ZSAnZGF0YS12YWxpZGF0aW9uLVwiICsgZWwudG9Mb3dlckNhc2UoKSArIFwiLW1lc3NhZ2UnIHRvIGlucHV0IHRvIGNoYW5nZSB0aGlzIG1lc3NhZ2UgLS0+XCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgICAgICQuZWFjaChcclxuICAgICAgICAgICAgICBzZXR0aW5ncy52YWxpZGF0b3JUeXBlcyxcclxuICAgICAgICAgICAgICBmdW5jdGlvbiAodmFsaWRhdG9yVHlwZSwgdmFsaWRhdG9yVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3JzW3ZhbGlkYXRvclR5cGVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yc1t2YWxpZGF0b3JUeXBlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZFZhbGlkYXRvciAmJiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgZWwgKyBmb3JtYXRWYWxpZGF0b3JOYW1lKHZhbGlkYXRvclRlbXBsYXRlLm5hbWUpKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnNbdmFsaWRhdG9yVHlwZV0ucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAkLmV4dGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZvcm1hdFZhbGlkYXRvck5hbWUodmFsaWRhdG9yVGVtcGxhdGUubmFtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JUZW1wbGF0ZS5pbml0KCR0aGlzLCBlbClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGZvdW5kVmFsaWRhdG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZvdW5kVmFsaWRhdG9yICYmIHNldHRpbmdzLmJ1aWx0SW5WYWxpZGF0b3JzW2VsLnRvTG93ZXJDYXNlKCldKSB7XHJcblxyXG4gICAgICAgICAgICAgIHZhciB2YWxpZGF0b3IgPSAkLmV4dGVuZCh0cnVlLCB7fSwgc2V0dGluZ3MuYnVpbHRJblZhbGlkYXRvcnNbZWwudG9Mb3dlckNhc2UoKV0pO1xyXG4gICAgICAgICAgICAgIGlmIChoYXNPdmVycmlkZU1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdmFyIHZhbGlkYXRvclR5cGUgPSB2YWxpZGF0b3IudHlwZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAodmFsaWRhdG9yVHlwZSA9PT0gXCJzaG9ydGN1dFwiKSB7XHJcbiAgICAgICAgICAgICAgICBmb3VuZFZhbGlkYXRvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQuZWFjaChcclxuICAgICAgICAgICAgICAgICAgc2V0dGluZ3MudmFsaWRhdG9yVHlwZXMsXHJcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh2YWxpZGF0b3JUZW1wbGF0ZVR5cGUsIHZhbGlkYXRvclRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvcnNbdmFsaWRhdG9yVGVtcGxhdGVUeXBlXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzW3ZhbGlkYXRvclRlbXBsYXRlVHlwZV0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3VuZFZhbGlkYXRvciAmJiB2YWxpZGF0b3JUeXBlID09PSB2YWxpZGF0b3JUZW1wbGF0ZVR5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIGVsICsgZm9ybWF0VmFsaWRhdG9yTmFtZSh2YWxpZGF0b3JUZW1wbGF0ZS5uYW1lKSwgdmFsaWRhdG9yW3ZhbGlkYXRvclRlbXBsYXRlLm5hbWUudG9Mb3dlckNhc2UoKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yc1t2YWxpZGF0b3JUeXBlXS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmV4dGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yVGVtcGxhdGUuaW5pdCgkdGhpcywgZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb3VuZFZhbGlkYXRvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCEgZm91bmRWYWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgICAkLmVycm9yKFwiQ2Fubm90IGZpbmQgdmFsaWRhdGlvbiBpbmZvIGZvciAnXCIgKyBlbCArIFwiJ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JFIEZBTExCQUNLIFZBTFVFU1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgICRoZWxwQmxvY2suZGF0YShcclxuICAgICAgICAgICAgXCJvcmlnaW5hbC1jb250ZW50c1wiLFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtY29udGVudHNcIilcclxuICAgICAgICAgICAgICAgID8gJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtY29udGVudHNcIilcclxuICAgICAgICAgICAgICAgIDogJGhlbHBCbG9jay5odG1sKClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAkaGVscEJsb2NrLmRhdGEoXHJcbiAgICAgICAgICAgIFwib3JpZ2luYWwtcm9sZVwiLFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgJGhlbHBCbG9jay5kYXRhKFwib3JpZ2luYWwtcm9sZVwiKVxyXG4gICAgICAgICAgICAgICAgPyAkaGVscEJsb2NrLmRhdGEoXCJvcmlnaW5hbC1yb2xlXCIpXHJcbiAgICAgICAgICAgICAgICA6ICRoZWxwQmxvY2suYXR0cihcInJvbGVcIilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAkY29udHJvbEdyb3VwLmRhdGEoXHJcbiAgICAgICAgICAgIFwib3JpZ2luYWwtY2xhc3Nlc1wiLFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5kYXRhKFwib3JpZ2luYWwtY2xhc2VzXCIpXHJcbiAgICAgICAgICAgICAgICA/ICRjb250cm9sR3JvdXAuZGF0YShcIm9yaWdpbmFsLWNsYXNzZXNcIilcclxuICAgICAgICAgICAgICAgIDogJGNvbnRyb2xHcm91cC5hdHRyKFwiY2xhc3NcIilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAkdGhpcy5kYXRhKFxyXG4gICAgICAgICAgICBcIm9yaWdpbmFsLWFyaWEtaW52YWxpZFwiLFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgJHRoaXMuZGF0YShcIm9yaWdpbmFsLWFyaWEtaW52YWxpZFwiKVxyXG4gICAgICAgICAgICAgICAgPyAkdGhpcy5kYXRhKFwib3JpZ2luYWwtYXJpYS1pbnZhbGlkXCIpXHJcbiAgICAgICAgICAgICAgICA6ICR0aGlzLmF0dHIoXCJhcmlhLWludmFsaWRcIilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQUxJREFUSU9OXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgJHRoaXMuYmluZChcclxuICAgICAgICAgICAgXCJ2YWxpZGF0aW9uLnZhbGlkYXRpb25cIixcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGV2ZW50LCBwYXJhbXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZ2V0VmFsdWUoJHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAvLyBHZXQgYSBsaXN0IG9mIHRoZSBlcnJvcnMgdG8gYXBwbHlcclxuICAgICAgICAgICAgICB2YXIgZXJyb3JzRm91bmQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgJC5lYWNoKHZhbGlkYXRvcnMsIGZ1bmN0aW9uICh2YWxpZGF0b3JUeXBlLCB2YWxpZGF0b3JUeXBlQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggfHwgKHBhcmFtcyAmJiBwYXJhbXMuaW5jbHVkZUVtcHR5KSB8fCAoISFzZXR0aW5ncy52YWxpZGF0b3JUeXBlc1t2YWxpZGF0b3JUeXBlXS5ibG9ja1N1Ym1pdCAmJiBwYXJhbXMgJiYgISFwYXJhbXMuc3VibWl0dGluZykpIHtcclxuICAgICAgICAgICAgICAgICAgJC5lYWNoKHZhbGlkYXRvclR5cGVBcnJheSwgZnVuY3Rpb24gKGksIHZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy52YWxpZGF0b3JUeXBlc1t2YWxpZGF0b3JUeXBlXS52YWxpZGF0ZSgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yc0ZvdW5kLnB1c2godmFsaWRhdG9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiBlcnJvcnNGb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAkdGhpcy5iaW5kKFxyXG4gICAgICAgICAgICBcImdldFZhbGlkYXRvcnMudmFsaWRhdGlvblwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXQVRDSCBGT1IgQ0hBTkdFU1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgJHRoaXMuYmluZChcclxuICAgICAgICAgICAgXCJzdWJtaXQudmFsaWRhdGlvblwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICR0aGlzLnRyaWdnZXJIYW5kbGVyKFwiY2hhbmdlLnZhbGlkYXRpb25cIiwge3N1Ym1pdHRpbmc6IHRydWV9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgICR0aGlzLmJpbmQoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICBcImtleXVwXCIsXHJcbiAgICAgICAgICAgICAgXCJmb2N1c1wiLFxyXG4gICAgICAgICAgICAgIFwiYmx1clwiLFxyXG4gICAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgICBcImtleWRvd25cIixcclxuICAgICAgICAgICAgICBcImtleXByZXNzXCIsXHJcbiAgICAgICAgICAgICAgXCJjaGFuZ2VcIlxyXG4gICAgICAgICAgICBdLmpvaW4oXCIudmFsaWRhdGlvbiBcIikgKyBcIi52YWxpZGF0aW9uXCIsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlLCBwYXJhbXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZ2V0VmFsdWUoJHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICB2YXIgZXJyb3JzRm91bmQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5maW5kKFwiaW5wdXQsdGV4dGFyZWEsc2VsZWN0XCIpLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2xkQ291bnQgPSBlcnJvcnNGb3VuZC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2goJChlbCkudHJpZ2dlckhhbmRsZXIoXCJ2YWxpZGF0aW9uLnZhbGlkYXRpb25cIiwgcGFyYW1zKSwgZnVuY3Rpb24gKGosIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgZXJyb3JzRm91bmQucHVzaChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yc0ZvdW5kLmxlbmd0aCA+IG9sZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICQoZWwpLmF0dHIoXCJhcmlhLWludmFsaWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsID0gJHRoaXMuZGF0YShcIm9yaWdpbmFsLWFyaWEtaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgICAgICAgJChlbCkuYXR0cihcImFyaWEtaW52YWxpZFwiLCAob3JpZ2luYWwgIT09IHVuZGVmaW5lZCA/IG9yaWdpbmFsIDogZmFsc2UpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgJGZvcm0uZmluZChcImlucHV0LHNlbGVjdCx0ZXh0YXJlYVwiKS5ub3QoJHRoaXMpLm5vdChcIltuYW1lPVxcXCJcIiArICR0aGlzLmF0dHIoXCJuYW1lXCIpICsgXCJcXFwiXVwiKS50cmlnZ2VyKFwidmFsaWRhdGlvbkxvc3RGb2N1cy52YWxpZGF0aW9uXCIpO1xyXG5cclxuICAgICAgICAgICAgICBlcnJvcnNGb3VuZCA9ICQudW5pcXVlKGVycm9yc0ZvdW5kLnNvcnQoKSk7XHJcblxyXG4gICAgICAgICAgICAgIC8vIFdlcmUgdGhlcmUgYW55IGVycm9ycz9cclxuICAgICAgICAgICAgICBpZiAoZXJyb3JzRm91bmQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBCZXR0ZXIgZmxhZyBpdCB1cCBhcyBhIHdhcm5pbmcuXHJcbiAgICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLnJlbW92ZUNsYXNzKFwic3VjY2VzcyBlcnJvclwiKS5hZGRDbGFzcyhcIndhcm5pbmdcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSG93IG1hbnkgZXJyb3JzIGRpZCB3ZSBmaW5kP1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLm9wdGlvbnMuc2VtYW50aWNhbGx5U3RyaWN0ICYmIGVycm9yc0ZvdW5kLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAvLyBPbmx5IG9uZT8gQmVpbmcgc3RyaWN0PyBKdXN0IG91dHB1dCBpdC5cclxuICAgICAgICAgICAgICAgICAgJGhlbHBCbG9jay5odG1sKGVycm9yc0ZvdW5kWzBdICsgXHJcbiAgICAgICAgICAgICAgICAgICAgKCBzZXR0aW5ncy5vcHRpb25zLnByZXBlbmRFeGlzdGluZ0hlbHBCbG9jayA/ICRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpIDogXCJcIiApKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIE11bHRpcGxlPyBCZWluZyBzbG9wcHk/IEdsdWUgdGhlbSB0b2dldGhlciBpbnRvIGFuIFVMLlxyXG4gICAgICAgICAgICAgICAgICAkaGVscEJsb2NrLmh0bWwoXCI8dWwgcm9sZT1cXFwiYWxlcnRcXFwiPjxsaT5cIiArIGVycm9yc0ZvdW5kLmpvaW4oXCI8L2xpPjxsaT5cIikgKyBcIjwvbGk+PC91bD5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKCBzZXR0aW5ncy5vcHRpb25zLnByZXBlbmRFeGlzdGluZ0hlbHBCbG9jayA/ICRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpIDogXCJcIiApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5yZW1vdmVDbGFzcyhcIndhcm5pbmcgZXJyb3Igc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICRjb250cm9sR3JvdXAuYWRkQ2xhc3MoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJGhlbHBCbG9jay5odG1sKCRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwiYmx1clwiKSB7XHJcbiAgICAgICAgICAgICAgICAkY29udHJvbEdyb3VwLnJlbW92ZUNsYXNzKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAkdGhpcy5iaW5kKFwidmFsaWRhdGlvbkxvc3RGb2N1cy52YWxpZGF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJGNvbnRyb2xHcm91cC5yZW1vdmVDbGFzcyhcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgZGVzdHJveSA6IGZ1bmN0aW9uKCApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChcclxuICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyXHJcbiAgICAgICAgICAgICAgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICRjb250cm9sR3JvdXAgPSAkdGhpcy5wYXJlbnRzKFwiLmZvcm0tZ3JvdXBcIikuZmlyc3QoKSxcclxuICAgICAgICAgICAgICAkaGVscEJsb2NrID0gJGNvbnRyb2xHcm91cC5maW5kKFwiLmhlbHAtYmxvY2tcIikuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvdXIgZXZlbnRzXHJcbiAgICAgICAgICAgICR0aGlzLnVuYmluZCgnLnZhbGlkYXRpb24nKTsgLy8gZXZlbnRzIGFyZSBuYW1lc3BhY2VkLlxyXG4gICAgICAgICAgICAvLyByZXNldCBoZWxwIHRleHRcclxuICAgICAgICAgICAgJGhlbHBCbG9jay5odG1sKCRoZWxwQmxvY2suZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgY2xhc3Nlc1xyXG4gICAgICAgICAgICAkY29udHJvbEdyb3VwLmF0dHIoXCJjbGFzc1wiLCAkY29udHJvbEdyb3VwLmRhdGEoXCJvcmlnaW5hbC1jbGFzc2VzXCIpKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgYXJpYVxyXG4gICAgICAgICAgICAkdGhpcy5hdHRyKFwiYXJpYS1pbnZhbGlkXCIsICR0aGlzLmRhdGEoXCJvcmlnaW5hbC1hcmlhLWludmFsaWRcIikpO1xyXG4gICAgICAgICAgICAvLyByZXNldCByb2xlXHJcbiAgICAgICAgICAgICRoZWxwQmxvY2suYXR0cihcInJvbGVcIiwgJHRoaXMuZGF0YShcIm9yaWdpbmFsLXJvbGVcIikpO1xyXG5cdFx0XHRcdFx0XHQvLyByZW1vdmUgYWxsIGVsZW1lbnRzIHdlIGNyZWF0ZWRcclxuXHRcdFx0XHRcdFx0aWYgKGNyZWF0ZWRFbGVtZW50cy5pbmRleE9mKCRoZWxwQmxvY2tbMF0pID4gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHQkaGVscEJsb2NrLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICB9LFxyXG4gICAgICBjb2xsZWN0RXJyb3JzIDogZnVuY3Rpb24oaW5jbHVkZUVtcHR5KSB7XHJcblxyXG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2VzID0ge307XHJcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xyXG4gICAgICAgICAgdmFyICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgdmFyIG5hbWUgPSAkZWwuYXR0cihcIm5hbWVcIik7XHJcbiAgICAgICAgICB2YXIgZXJyb3JzID0gJGVsLnRyaWdnZXJIYW5kbGVyKFwidmFsaWRhdGlvbi52YWxpZGF0aW9uXCIsIHtpbmNsdWRlRW1wdHk6IHRydWV9KTtcclxuICAgICAgICAgIGVycm9yTWVzc2FnZXNbbmFtZV0gPSAkLmV4dGVuZCh0cnVlLCBlcnJvcnMsIGVycm9yTWVzc2FnZXNbbmFtZV0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkLmVhY2goZXJyb3JNZXNzYWdlcywgZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICBpZiAoZWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBlcnJvck1lc3NhZ2VzW2ldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlcztcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGhhc0Vycm9yczogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2VzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcclxuICAgICAgICAgIGVycm9yTWVzc2FnZXMgPSBlcnJvck1lc3NhZ2VzLmNvbmNhdChcclxuICAgICAgICAgICAgJChlbCkudHJpZ2dlckhhbmRsZXIoXCJnZXRWYWxpZGF0b3JzLnZhbGlkYXRpb25cIikgPyAkKGVsKS50cmlnZ2VySGFuZGxlcihcInZhbGlkYXRpb24udmFsaWRhdGlvblwiLCB7c3VibWl0dGluZzogdHJ1ZX0pIDogW11cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoZXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKTtcclxuICAgICAgfSxcclxuICAgICAgb3ZlcnJpZGUgOiBmdW5jdGlvbiAobmV3RGVmYXVsdHMpIHtcclxuICAgICAgICBkZWZhdWx0cyA9ICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBuZXdEZWZhdWx0cyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblx0XHR2YWxpZGF0b3JUeXBlczoge1xyXG4gICAgICBjYWxsYmFjazoge1xyXG4gICAgICAgIG5hbWU6IFwiY2FsbGJhY2tcIixcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgbmFtZSArIFwiQ2FsbGJhY2tcIiksXHJcbiAgICAgICAgICAgIGxhc3RWYWx1ZTogJHRoaXMudmFsKCksXHJcbiAgICAgICAgICAgIGxhc3RWYWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgbGFzdEZpbmlzaGVkOiB0cnVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xyXG4gICAgICAgICAgaWYgKHZhbGlkYXRvci5sYXN0VmFsdWUgPT09IHZhbHVlICYmIHZhbGlkYXRvci5sYXN0RmluaXNoZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF2YWxpZGF0b3IubGFzdFZhbGlkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh2YWxpZGF0b3IubGFzdEZpbmlzaGVkID09PSB0cnVlKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0VmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdEZpbmlzaGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB2YXIgcnJqcWJ2VmFsaWRhdG9yID0gdmFsaWRhdG9yO1xyXG4gICAgICAgICAgICB2YXIgcnJqcWJ2VGhpcyA9ICR0aGlzO1xyXG4gICAgICAgICAgICBleGVjdXRlRnVuY3Rpb25CeU5hbWUoXHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGxiYWNrLFxyXG4gICAgICAgICAgICAgIHdpbmRvdyxcclxuICAgICAgICAgICAgICAkdGhpcyxcclxuICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJyanFidlZhbGlkYXRvci5sYXN0VmFsdWUgPT09IGRhdGEudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgcnJqcWJ2VmFsaWRhdG9yLmxhc3RWYWxpZCA9IGRhdGEudmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBycmpxYnZWYWxpZGF0b3IubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBycmpxYnZWYWxpZGF0b3IubGFzdEZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgcnJqcWJ2VGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgcnJqcWJ2VmFsaWRhdG9yLnZhbGlkYXRvck5hbWUgKyBcIk1lc3NhZ2VcIiwgcnJqcWJ2VmFsaWRhdG9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBUaW1lb3V0IGlzIHNldCB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBldmVudHMgYmVpbmcgY29uc2lkZXJlZCAnYWxyZWFkeSBmaXJlZCdcclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnJqcWJ2VGhpcy50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDEpOyAvLyBkb2Vzbid0IG5lZWQgYSBsb25nIHRpbWVvdXQsIGp1c3QgbG9uZyBlbm91Z2ggZm9yIHRoZSBldmVudCBidWJibGUgdG8gYnVyc3RcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFqYXg6IHtcclxuICAgICAgICBuYW1lOiBcImFqYXhcIixcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvck5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHVybDogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIkFqYXhcIiksXHJcbiAgICAgICAgICAgIGxhc3RWYWx1ZTogJHRoaXMudmFsKCksXHJcbiAgICAgICAgICAgIGxhc3RWYWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgbGFzdEZpbmlzaGVkOiB0cnVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xyXG4gICAgICAgICAgaWYgKFwiXCIrdmFsaWRhdG9yLmxhc3RWYWx1ZSA9PT0gXCJcIit2YWx1ZSAmJiB2YWxpZGF0b3IubGFzdEZpbmlzaGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IubGFzdFZhbGlkID09PSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodmFsaWRhdG9yLmxhc3RGaW5pc2hlZCA9PT0gdHJ1ZSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmxhc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmxhc3RGaW5pc2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHVybDogdmFsaWRhdG9yLnVybCxcclxuICAgICAgICAgICAgICBkYXRhOiBcInZhbHVlPVwiICsgdmFsdWUgKyBcIiZmaWVsZD1cIiArICR0aGlzLmF0dHIoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFwiXCIrdmFsaWRhdG9yLmxhc3RWYWx1ZSA9PT0gXCJcIitkYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0VmFsaWQgPSAhIShkYXRhLnZhbGlkKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvci5tZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvci5sYXN0RmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgdmFsaWRhdG9yLnZhbGlkYXRvck5hbWUgKyBcIk1lc3NhZ2VcIiwgdmFsaWRhdG9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBUaW1lb3V0IGlzIHNldCB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBldmVudHMgYmVpbmcgY29uc2lkZXJlZCAnYWxyZWFkeSBmaXJlZCdcclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9LCAxKTsgLy8gZG9lc24ndCBuZWVkIGEgbG9uZyB0aW1lb3V0LCBqdXN0IGxvbmcgZW5vdWdoIGZvciB0aGUgZXZlbnQgYnViYmxlIHRvIGJ1cnN0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmYWlsdXJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IubGFzdFZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5tZXNzYWdlID0gXCJhamF4IGNhbGwgZmFpbGVkXCI7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IubGFzdEZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyB2YWxpZGF0b3IudmFsaWRhdG9yTmFtZSArIFwiTWVzc2FnZVwiLCB2YWxpZGF0b3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBUaW1lb3V0IGlzIHNldCB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBldmVudHMgYmVpbmcgY29uc2lkZXJlZCAnYWxyZWFkeSBmaXJlZCdcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAkdGhpcy50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICB9LCAxKTsgLy8gZG9lc24ndCBuZWVkIGEgbG9uZyB0aW1lb3V0LCBqdXN0IGxvbmcgZW5vdWdoIGZvciB0aGUgZXZlbnQgYnViYmxlIHRvIGJ1cnN0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHRcdFx0cmVnZXg6IHtcclxuXHRcdFx0XHRuYW1lOiBcInJlZ2V4XCIsXHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge3JlZ2V4OiByZWdleEZyb21TdHJpbmcoJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIlJlZ2V4XCIpKX07XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKCF2YWxpZGF0b3IucmVnZXgudGVzdCh2YWx1ZSkgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXHJcblx0XHRcdFx0XHRcdHx8ICh2YWxpZGF0b3IucmVnZXgudGVzdCh2YWx1ZSkgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlcXVpcmVkOiB7XHJcblx0XHRcdFx0bmFtZTogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xyXG5cdFx0XHRcdFx0cmV0dXJuICEhKHZhbHVlLmxlbmd0aCA9PT0gMCAgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXHJcblx0XHRcdFx0XHRcdHx8ICEhKHZhbHVlLmxlbmd0aCA+IDAgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcclxuXHRcdFx0XHR9LFxyXG4gICAgICAgIGJsb2NrU3VibWl0OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdG1hdGNoOiB7XHJcblx0XHRcdFx0bmFtZTogXCJtYXRjaFwiLFxyXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xyXG5cdFx0XHRcdFx0dmFyIGVsZW1lbnQgPSAkdGhpcy5wYXJlbnRzKFwiZm9ybVwiKS5maXJzdCgpLmZpbmQoXCJbbmFtZT1cXFwiXCIgKyAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgbmFtZSArIFwiTWF0Y2hcIikgKyBcIlxcXCJdXCIpLmZpcnN0KCk7XHJcblx0XHRcdFx0XHRlbGVtZW50LmJpbmQoXCJ2YWxpZGF0aW9uLnZhbGlkYXRpb25cIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHQkdGhpcy50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIiwge3N1Ym1pdHRpbmc6IHRydWV9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHtcImVsZW1lbnRcIjogZWxlbWVudH07XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKHZhbHVlICE9PSB2YWxpZGF0b3IuZWxlbWVudC52YWwoKSAmJiAhIHZhbGlkYXRvci5uZWdhdGl2ZSlcclxuXHRcdFx0XHRcdFx0fHwgKHZhbHVlID09PSB2YWxpZGF0b3IuZWxlbWVudC52YWwoKSAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xyXG5cdFx0XHRcdH0sXHJcbiAgICAgICAgYmxvY2tTdWJtaXQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0bWF4OiB7XHJcblx0XHRcdFx0bmFtZTogXCJtYXhcIixcclxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcclxuXHRcdFx0XHRcdHJldHVybiB7bWF4OiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgbmFtZSArIFwiTWF4XCIpfTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcclxuXHRcdFx0XHRcdHJldHVybiAocGFyc2VGbG9hdCh2YWx1ZSwgMTApID4gcGFyc2VGbG9hdCh2YWxpZGF0b3IubWF4LCAxMCkgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXHJcblx0XHRcdFx0XHRcdHx8IChwYXJzZUZsb2F0KHZhbHVlLCAxMCkgPD0gcGFyc2VGbG9hdCh2YWxpZGF0b3IubWF4LCAxMCkgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG1pbjoge1xyXG5cdFx0XHRcdG5hbWU6IFwibWluXCIsXHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge21pbjogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1pblwiKX07XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKHBhcnNlRmxvYXQodmFsdWUpIDwgcGFyc2VGbG9hdCh2YWxpZGF0b3IubWluKSAmJiAhIHZhbGlkYXRvci5uZWdhdGl2ZSlcclxuXHRcdFx0XHRcdFx0fHwgKHBhcnNlRmxvYXQodmFsdWUpID49IHBhcnNlRmxvYXQodmFsaWRhdG9yLm1pbikgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG1heGxlbmd0aDoge1xyXG5cdFx0XHRcdG5hbWU6IFwibWF4bGVuZ3RoXCIsXHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge21heGxlbmd0aDogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1heGxlbmd0aFwiKX07XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKCh2YWx1ZS5sZW5ndGggPiB2YWxpZGF0b3IubWF4bGVuZ3RoKSAmJiAhIHZhbGlkYXRvci5uZWdhdGl2ZSlcclxuXHRcdFx0XHRcdFx0fHwgKCh2YWx1ZS5sZW5ndGggPD0gdmFsaWRhdG9yLm1heGxlbmd0aCkgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG1pbmxlbmd0aDoge1xyXG5cdFx0XHRcdG5hbWU6IFwibWlubGVuZ3RoXCIsXHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24gKCR0aGlzLCBuYW1lKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge21pbmxlbmd0aDogJHRoaXMuZGF0YShcInZhbGlkYXRpb25cIiArIG5hbWUgKyBcIk1pbmxlbmd0aFwiKX07XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCR0aGlzLCB2YWx1ZSwgdmFsaWRhdG9yKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKCh2YWx1ZS5sZW5ndGggPCB2YWxpZGF0b3IubWlubGVuZ3RoKSAmJiAhIHZhbGlkYXRvci5uZWdhdGl2ZSlcclxuXHRcdFx0XHRcdFx0fHwgKCh2YWx1ZS5sZW5ndGggPj0gdmFsaWRhdG9yLm1pbmxlbmd0aCkgJiYgdmFsaWRhdG9yLm5lZ2F0aXZlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG1heGNoZWNrZWQ6IHtcclxuXHRcdFx0XHRuYW1lOiBcIm1heGNoZWNrZWRcIixcclxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbiAoJHRoaXMsIG5hbWUpIHtcclxuXHRcdFx0XHRcdHZhciBlbGVtZW50cyA9ICR0aGlzLnBhcmVudHMoXCJmb3JtXCIpLmZpcnN0KCkuZmluZChcIltuYW1lPVxcXCJcIiArICR0aGlzLmF0dHIoXCJuYW1lXCIpICsgXCJcXFwiXVwiKTtcclxuXHRcdFx0XHRcdGVsZW1lbnRzLmJpbmQoXCJjbGljay52YWxpZGF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0JHRoaXMudHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIsIHtpbmNsdWRlRW1wdHk6IHRydWV9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHttYXhjaGVja2VkOiAkdGhpcy5kYXRhKFwidmFsaWRhdGlvblwiICsgbmFtZSArIFwiTWF4Y2hlY2tlZFwiKSwgZWxlbWVudHM6IGVsZW1lbnRzfTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHZhbGlkYXRlOiBmdW5jdGlvbiAoJHRoaXMsIHZhbHVlLCB2YWxpZGF0b3IpIHtcclxuXHRcdFx0XHRcdHJldHVybiAodmFsaWRhdG9yLmVsZW1lbnRzLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+IHZhbGlkYXRvci5tYXhjaGVja2VkICYmICEgdmFsaWRhdG9yLm5lZ2F0aXZlKVxyXG5cdFx0XHRcdFx0XHR8fCAodmFsaWRhdG9yLmVsZW1lbnRzLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA8PSB2YWxpZGF0b3IubWF4Y2hlY2tlZCAmJiB2YWxpZGF0b3IubmVnYXRpdmUpO1xyXG5cdFx0XHRcdH0sXHJcbiAgICAgICAgYmxvY2tTdWJtaXQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0bWluY2hlY2tlZDoge1xyXG5cdFx0XHRcdG5hbWU6IFwibWluY2hlY2tlZFwiLFxyXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uICgkdGhpcywgbmFtZSkge1xyXG5cdFx0XHRcdFx0dmFyIGVsZW1lbnRzID0gJHRoaXMucGFyZW50cyhcImZvcm1cIikuZmlyc3QoKS5maW5kKFwiW25hbWU9XFxcIlwiICsgJHRoaXMuYXR0cihcIm5hbWVcIikgKyBcIlxcXCJdXCIpO1xyXG5cdFx0XHRcdFx0ZWxlbWVudHMuYmluZChcImNsaWNrLnZhbGlkYXRpb25cIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHQkdGhpcy50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIiwge2luY2x1ZGVFbXB0eTogdHJ1ZX0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm4ge21pbmNoZWNrZWQ6ICR0aGlzLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuYW1lICsgXCJNaW5jaGVja2VkXCIpLCBlbGVtZW50czogZWxlbWVudHN9O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dmFsaWRhdGU6IGZ1bmN0aW9uICgkdGhpcywgdmFsdWUsIHZhbGlkYXRvcikge1xyXG5cdFx0XHRcdFx0cmV0dXJuICh2YWxpZGF0b3IuZWxlbWVudHMuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoIDwgdmFsaWRhdG9yLm1pbmNoZWNrZWQgJiYgISB2YWxpZGF0b3IubmVnYXRpdmUpXHJcblx0XHRcdFx0XHRcdHx8ICh2YWxpZGF0b3IuZWxlbWVudHMuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IHZhbGlkYXRvci5taW5jaGVja2VkICYmIHZhbGlkYXRvci5uZWdhdGl2ZSk7XHJcblx0XHRcdFx0fSxcclxuICAgICAgICBibG9ja1N1Ym1pdDogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YnVpbHRJblZhbGlkYXRvcnM6IHtcclxuXHRcdFx0ZW1haWw6IHtcclxuXHRcdFx0XHRuYW1lOiBcIkVtYWlsXCIsXHJcblx0XHRcdFx0dHlwZTogXCJzaG9ydGN1dFwiLFxyXG5cdFx0XHRcdHNob3J0Y3V0OiBcInZhbGlkZW1haWxcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR2YWxpZGVtYWlsOiB7XHJcblx0XHRcdFx0bmFtZTogXCJWYWxpZGVtYWlsXCIsXHJcblx0XHRcdFx0dHlwZTogXCJyZWdleFwiLFxyXG5cdFx0XHRcdHJlZ2V4OiBcIltBLVphLXowLTkuXyUrLV0rQFtBLVphLXowLTkuLV0rXFxcXFxcLltBLVphLXpdezIsNH1cIixcclxuXHRcdFx0XHRtZXNzYWdlOiBcIk5vdCBhIHZhbGlkIGVtYWlsIGFkZHJlc3M8IS0tIGRhdGEtdmFsaWRhdG9yLXZhbGlkZW1haWwtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYXNzd29yZGFnYWluOiB7XHJcblx0XHRcdFx0bmFtZTogXCJQYXNzd29yZGFnYWluXCIsXHJcblx0XHRcdFx0dHlwZTogXCJtYXRjaFwiLFxyXG5cdFx0XHRcdG1hdGNoOiBcInBhc3N3b3JkXCIsXHJcblx0XHRcdFx0bWVzc2FnZTogXCJEb2VzIG5vdCBtYXRjaCB0aGUgZ2l2ZW4gcGFzc3dvcmQ8IS0tIGRhdGEtdmFsaWRhdG9yLXBhc3dvcmRhZ2Fpbi1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHBvc2l0aXZlOiB7XHJcblx0XHRcdFx0bmFtZTogXCJQb3NpdGl2ZVwiLFxyXG5cdFx0XHRcdHR5cGU6IFwic2hvcnRjdXRcIixcclxuXHRcdFx0XHRzaG9ydGN1dDogXCJudW1iZXIscG9zaXRpdmVudW1iZXJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRuZWdhdGl2ZToge1xyXG5cdFx0XHRcdG5hbWU6IFwiTmVnYXRpdmVcIixcclxuXHRcdFx0XHR0eXBlOiBcInNob3J0Y3V0XCIsXHJcblx0XHRcdFx0c2hvcnRjdXQ6IFwibnVtYmVyLG5lZ2F0aXZlbnVtYmVyXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0bnVtYmVyOiB7XHJcblx0XHRcdFx0bmFtZTogXCJOdW1iZXJcIixcclxuXHRcdFx0XHR0eXBlOiBcInJlZ2V4XCIsXHJcblx0XHRcdFx0cmVnZXg6IFwiKFsrLV0/XFxcXFxcZCsoXFxcXFxcLlxcXFxcXGQqKT8oW2VFXVsrLV0/WzAtOV0rKT8pP1wiLFxyXG5cdFx0XHRcdG1lc3NhZ2U6IFwiTXVzdCBiZSBhIG51bWJlcjwhLS0gZGF0YS12YWxpZGF0b3ItbnVtYmVyLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0aW50ZWdlcjoge1xyXG5cdFx0XHRcdG5hbWU6IFwiSW50ZWdlclwiLFxyXG5cdFx0XHRcdHR5cGU6IFwicmVnZXhcIixcclxuXHRcdFx0XHRyZWdleDogXCJbKy1dP1xcXFxcXGQrXCIsXHJcblx0XHRcdFx0bWVzc2FnZTogXCJObyBkZWNpbWFsIHBsYWNlcyBhbGxvd2VkPCEtLSBkYXRhLXZhbGlkYXRvci1pbnRlZ2VyLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0cG9zaXRpdmVudW1iZXI6IHtcclxuXHRcdFx0XHRuYW1lOiBcIlBvc2l0aXZlbnVtYmVyXCIsXHJcblx0XHRcdFx0dHlwZTogXCJtaW5cIixcclxuXHRcdFx0XHRtaW46IDAsXHJcblx0XHRcdFx0bWVzc2FnZTogXCJNdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyPCEtLSBkYXRhLXZhbGlkYXRvci1wb3NpdGl2ZW51bWJlci1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdG5lZ2F0aXZlbnVtYmVyOiB7XHJcblx0XHRcdFx0bmFtZTogXCJOZWdhdGl2ZW51bWJlclwiLFxyXG5cdFx0XHRcdHR5cGU6IFwibWF4XCIsXHJcblx0XHRcdFx0bWF4OiAwLFxyXG5cdFx0XHRcdG1lc3NhZ2U6IFwiTXVzdCBiZSBhIG5lZ2F0aXZlIG51bWJlcjwhLS0gZGF0YS12YWxpZGF0b3ItbmVnYXRpdmVudW1iZXItbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZXF1aXJlZDoge1xyXG5cdFx0XHRcdG5hbWU6IFwiUmVxdWlyZWRcIixcclxuXHRcdFx0XHR0eXBlOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0bWVzc2FnZTogXCJUaGlzIGlzIHJlcXVpcmVkPCEtLSBkYXRhLXZhbGlkYXRvci1yZXF1aXJlZC1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdGNoZWNrb25lOiB7XHJcblx0XHRcdFx0bmFtZTogXCJDaGVja29uZVwiLFxyXG5cdFx0XHRcdHR5cGU6IFwibWluY2hlY2tlZFwiLFxyXG5cdFx0XHRcdG1pbmNoZWNrZWQ6IDEsXHJcblx0XHRcdFx0bWVzc2FnZTogXCJDaGVjayBhdCBsZWFzdCBvbmUgb3B0aW9uPCEtLSBkYXRhLXZhbGlkYXRpb24tY2hlY2tvbmUtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dmFyIGZvcm1hdFZhbGlkYXRvck5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xyXG5cdFx0cmV0dXJuIG5hbWVcclxuXHRcdFx0LnRvTG93ZXJDYXNlKClcclxuXHRcdFx0LnJlcGxhY2UoXHJcblx0XHRcdFx0LyhefFxccykoW2Etel0pL2cgLFxyXG5cdFx0XHRcdGZ1bmN0aW9uKG0scDEscDIpIHtcclxuXHRcdFx0XHRcdHJldHVybiBwMStwMi50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0O1xyXG5cdH07XHJcblxyXG5cdHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uICgkdGhpcykge1xyXG5cdFx0Ly8gRXh0cmFjdCB0aGUgdmFsdWUgd2UncmUgdGFsa2luZyBhYm91dFxyXG5cdFx0dmFyIHZhbHVlID0gJHRoaXMudmFsKCk7XHJcblx0XHR2YXIgdHlwZSA9ICR0aGlzLmF0dHIoXCJ0eXBlXCIpO1xyXG5cdFx0aWYgKHR5cGUgPT09IFwiY2hlY2tib3hcIikge1xyXG5cdFx0XHR2YWx1ZSA9ICgkdGhpcy5pcyhcIjpjaGVja2VkXCIpID8gdmFsdWUgOiBcIlwiKTtcclxuXHRcdH1cclxuXHRcdGlmICh0eXBlID09PSBcInJhZGlvXCIpIHtcclxuXHRcdFx0dmFsdWUgPSAoJCgnaW5wdXRbbmFtZT1cIicgKyAkdGhpcy5hdHRyKFwibmFtZVwiKSArICdcIl06Y2hlY2tlZCcpLmxlbmd0aCA+IDAgPyB2YWx1ZSA6IFwiXCIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH07XHJcblxyXG4gIGZ1bmN0aW9uIHJlZ2V4RnJvbVN0cmluZyhpbnB1dHN0cmluZykge1xyXG5cdFx0cmV0dXJuIG5ldyBSZWdFeHAoXCJeXCIgKyBpbnB1dHN0cmluZyArIFwiJFwiKTtcclxuXHR9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoYW5rcyB0byBKYXNvbiBCdW50aW5nIHZpYSBTdGFja092ZXJmbG93LmNvbVxyXG4gICAqXHJcbiAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNTk3ODgvaG93LXRvLWV4ZWN1dGUtYS1qYXZhc2NyaXB0LWZ1bmN0aW9uLXdoZW4taS1oYXZlLWl0cy1uYW1lLWFzLWEtc3RyaW5nI2Fuc3dlci0zNTk5MTBcclxuICAgKiBTaG9ydCBsaW5rOiBodHRwOi8vdGlueXVybC5jb20vZXhlY3V0ZUZ1bmN0aW9uQnlOYW1lXHJcbiAgKiovXHJcbiAgZnVuY3Rpb24gZXhlY3V0ZUZ1bmN0aW9uQnlOYW1lKGZ1bmN0aW9uTmFtZSwgY29udGV4dCAvKiwgYXJncyovKSB7XHJcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuc3BsaWNlKDIpO1xyXG4gICAgdmFyIG5hbWVzcGFjZXMgPSBmdW5jdGlvbk5hbWUuc3BsaXQoXCIuXCIpO1xyXG4gICAgdmFyIGZ1bmMgPSBuYW1lc3BhY2VzLnBvcCgpO1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG5hbWVzcGFjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29udGV4dCA9IGNvbnRleHRbbmFtZXNwYWNlc1tpXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29udGV4dFtmdW5jXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICB9XHJcblxyXG5cdCQuZm4uanFCb290c3RyYXBWYWxpZGF0aW9uID0gZnVuY3Rpb24oIG1ldGhvZCApIHtcclxuXHJcblx0XHRpZiAoIGRlZmF1bHRzLm1ldGhvZHNbbWV0aG9kXSApIHtcclxuXHRcdFx0cmV0dXJuIGRlZmF1bHRzLm1ldGhvZHNbbWV0aG9kXS5hcHBseSggdGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApKTtcclxuXHRcdH0gZWxzZSBpZiAoIHR5cGVvZiBtZXRob2QgPT09ICdvYmplY3QnIHx8ICEgbWV0aG9kICkge1xyXG5cdFx0XHRyZXR1cm4gZGVmYXVsdHMubWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHQkLmVycm9yKCAnTWV0aG9kICcgKyAgbWV0aG9kICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuanFCb290c3RyYXBWYWxpZGF0aW9uJyApO1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcbiAgJC5qcUJvb3RzdHJhcFZhbGlkYXRpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgJChcIjppbnB1dFwiKS5ub3QoXCJbdHlwZT1pbWFnZV0sW3R5cGU9c3VibWl0XVwiKS5qcUJvb3RzdHJhcFZhbGlkYXRpb24uYXBwbHkodGhpcyxhcmd1bWVudHMpO1xyXG4gIH07XHJcblxyXG59KSggalF1ZXJ5ICk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zaG93LW1vcmUuanMnKTtcbiIsIlxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmxldCBoZWlnaHQ7XG5sZXQgRmFkZUJhciA9ICgpID0+IHt9O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEZhZGVCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFZFUlNJT04gPSAnMC4wLjEnO1xuICBjb25zdCBOQU1FID0gJ1Nob3dNb3JlX0ZhZGVCYXInO1xuICBjb25zb2xlLmxvZyhgTm93IHVzaW5nICR7TkFNRX0gdmVyc2lvbiAke1ZFUlNJT059YCk7XG4gIC8vIHByZXBhcmUgdGhlIHN0eWxlIHRhZ2UgZm9yIHNvbWUgY3NzIGx1dmluXG4gIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBjb25zdCBoZWFkRWwgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHNldHRpbmdzKCk7XG4gIGNvbnN0IGNzc1RleHQgPSBGYWRlQmFyQ1NTKG9wdGlvbnMpO1xuICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcblxuICBzdHlsZUVsLnNldEF0dHJpYnV0ZSgnaWQnLCAnZmJDU1MnKTtcbiAgc3R5bGVFbC50ZXh0Q29udGVudCA9IGNzc1RleHQ7XG4gIGhlYWRFbC5hcHBlbmQoc3R5bGVFbCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB0aGVGYWRlcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuai1zaG93bW9yZScpKTtcblxuICAgIHRoZUZhZGVycy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBoZWlnaHQgPSBub2RlLm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnNvbGUubG9nKGhlaWdodClcbiAgICAgIGNvbnN0IHRoZUNvbnRhaW5lciA9IG5vZGU7XG4gICAgICBjb25zdCB0aGVGYWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCB0aGVTaG93TW9yZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cbiAgICAgIHRoZUZhZGVCYXIuY2xhc3NMaXN0LmFkZCgnai1mYWRlcicpO1xuICAgICAgdGhlU2hvd01vcmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnai1mYWRlcl9fYnV0dG9uJyk7XG5cbiAgICAgIHRoZVNob3dNb3JlQnV0dG9uLmlubmVyVGV4dCA9IG9wdGlvbnMuZmJJbml0QnV0dG9uVGV4dDtcblxuICAgICAgdGhlRmFkZUJhci5hcHBlbmRDaGlsZCh0aGVTaG93TW9yZUJ1dHRvbik7XG4gICAgICB0aGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhlRmFkZUJhcik7XG5cbiAgICAgIHRoZVNob3dNb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZXYudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXZpc2libGUnKTtcbiAgICAgICAgZXYudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdmlzaWJsZScpO1xuICAgICAgICBldi50YXJnZXQuY2xvc2VzdCgnLmotc2hvd21vcmUnKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy12aXNpYmxlJyk7XG4gICAgICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy12aXNpYmxlJykpe1xuICAgICAgICAgIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB9XG4gICAgICAgIGlmKGV2LnRhcmdldC5pbm5lclRleHQgPT09IG9wdGlvbnMuZmJJbml0QnV0dG9uVGV4dCkge1xuICAgICAgICAgIGV2LnRhcmdldC5pbm5lclRleHQgPSBvcHRpb25zLmZiT3BlbkJ1dHRvblRleHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBldi50YXJnZXQuaW5uZXJUZXh0ID0gb3B0aW9ucy5mYkluaXRCdXR0b25UZXh0XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgdGhlU2hvd01vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZXYpID0+IHtcbiAgICAgICAgZXYudGFyZ2V0LmJsdXIoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn0pO1xuLy8gbW9kdWxlLmV4cG9ydHMgPSBGYWRlQmFyO1xuXG5mdW5jdGlvbiBhcHBlbmRDU1Moc3R5bGVzKSB7XG4gIHJldHVyblxuICAvLyByZXR1cm4gKCkgPT4ge1xuICAvLyAgIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAvLyAgIGNvbnN0IGhlYWRFbCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgLy8gICAvLyBjb25zdCBjc3NTdHlsZXMgPSBjc3NcblxuICAvLyAgIHN0eWxlRWwudGV4dENvbnRlbnQgPSBzdHlsZXM7XG4gIC8vICAgaGVhZEVsLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuXG4gIC8vICAgc3R5bGVFbC50eXBlID0gJ3RleHQvY3NzJztcbiAgLy8gICBpZiAoc3R5bGVFbC5zdHlsZVNoZWV0KSB7XG4gIC8vICAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIGZvciBJRTggYW5kIGJlbG93LlxuICAvLyAgICAgc3R5bGVFbC5zdHlsZVNoZWV0LmNzc1RleHQgPSBzdHlsZXM7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHN0eWxlRWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVzKSk7XG4gIC8vICAgfVxuICAvLyB9O1xufVxuXG5mdW5jdGlvbiBjcygpIHtcbiAgY29uc3QgYWxsU2NyaXB0VGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdCNzaG93TW9yZUNTJyk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRzKCkge1xuICByZXR1cm4ge1xuICAgIGJveEhlaWdodDogJzMwMHB4JyxcbiAgICBmYlN0YXJ0Q29sb3I6ICdyZ2JhKDAsMCwwLC43NSknLFxuICAgIGZiRW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC43NSknLFxuICAgIGZiQm90dG9tQm9yZGVyOiAnNXB4IHNvbGlkICMyZTJlMmUnLFxuICAgIGZiSW5pdEJ1dHRvblRleHQ6ICdTaG93IE1vcmUnLFxuICAgIGZiT3BlbkJ1dHRvblRleHQ6ICdTaG93IExlc3MnLFxuICAgIGZiQnV0dG9uUG9zaXRpb246ICdjZW50ZXInLFxuICAgIGZiQnV0dG9uQmFja2dyb3VuZDogJyMwMDAnLFxuICAgIGZiQnV0dG9uQmFja2dyb3VuZEhvdmVyOiAnIzU4MDUwNTsnLFxuICAgIGZiQnV0dG9uQmFja2dyb3VuZEZvY3VzOiAnIzU4MDUwNTsnLFxuICAgIGZiQnV0dG9uVGV4dENvbG9yOiAnI2ZmZicsXG4gICAgZmJCdXR0b25UZXh0Q29sb3JIb3ZlcjogJyNmZmYnLFxuICAgIGZiQnV0dG9uVGV4dENvbG9yRm9jdXM6ICcjRkZGJyxcbiAgICBmYkJ1dHRvbkJvcmRlckNvbG9yOiAnIzJlMmUyZScsXG4gICAgZmJCdXR0b25Cb3JkZXJDb2xvckZvY3VzOiAnIzU4MDUwNScsXG4gICAgZmJDbGFzc0xpc3Q6ICd1LXRleHQtY2VudGVyJyxcbiAgICBmYkJ0bkNsYXNzTGlzdDogJ2J0biBidG4tcHJpbWFyeSBteC1hdXRvJyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2V0dGluZ3Mob3B0cykge1xuICBsZXQgU2hvd01vcmVTZXR0aW5ncyA9IHR5cGVvZiBudWxsO1xuICBsZXQgZmJDb24gPSBbXTtcbiAgaWYgKCFTaG93TW9yZVNldHRpbmdzKSB7XG4gICAgZmJDb24gPSBkZWZhdWx0cygpO1xuICB9IGVsc2Uge1xuICAgIGZiQ29uID0gU2hvd01vcmVTZXR0aW5ncztcbiAgfVxuXG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICBjbGFzc0Jhc2U6ICdidXR0b24tc2hvdy1tb3JlJyxcbiAgICBjbGFzc0FjdGl2ZTogJ2lzLWZ1bGx5LW9wZW5lZCcsXG4gICAgY2xhc3NGb2N1c2VkOiAnaXMtZm9jdXNlZCcsXG4gICAgZmFkZWJhckNsYXNzTGlzdDogJ2FuaW1hdGUgdGV4dC1jZW50ZXInLFxuICAgIGZhZGViYXJiQnV0dG9uQ2xhc3NMaXN0OiAnYnRuIG14LWF1dG8nLFxuICB9O1xuXG4gIGNvbnN0IGZiQWN0aW9uQnRuID0ge1xuICAgIHNob3dNb3JlOiAnU2hvdyBNb3JlJyxcbiAgICBzaG93TGVzczogJ1Nob3cgTGVzcycsXG4gICAgcG9zaXRpb25YOiAnY2VudGVyJyxcbiAgICBwb3NpdGlvblk6ICdib3R0b20nLFxuXG4gICAgZmJCdXR0b25Qb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgZmJCdXR0b25CYWNrZ3JvdW5kOiAnI2YyZjJmMicsXG4gIH07XG5cbiAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMoKSwgc3R5bGVzLCBmYkFjdGlvbkJ0biwgZmJDb24pO1xuICAvLyBjc3NCdWlsZGVyKG9wdGlvbnMpO1xuICByZXR1cm4gb3B0aW9ucztcbn1cbmxldCBGYWRlQmFyQ1NTID0gKCkgPT4ge307XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgRmFkZUJhckNTUyA9ICgpID0+IHtcbkZhZGVCYXJDU1MgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCBjc3NWYWx1ZXMgPSBvcHRpb25zO1xuXG4gIGNvbnN0IGZiQ1NTID0gJyc7XG5cbiAgLy8gYXBwZW5kQ1NTKGZiQ1NTKVxuICByZXR1cm4gZmJDU1M7XG59O1xuLy8gRmFkZUJhcigpIiwiLyohXG4gICAgKiBTdGFydCBCb290c3RyYXAgLSBBZ2VuY3kgdjYuMC4yIChodHRwczovL3N0YXJ0Ym9vdHN0cmFwLmNvbS90ZW1wbGF0ZS1vdmVydmlld3MvYWdlbmN5KVxuICAgICogQ29weXJpZ2h0IDIwMTMtMjAyMCBTdGFydCBCb290c3RyYXBcbiAgICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL1N0YXJ0Qm9vdHN0cmFwL3N0YXJ0Ym9vdHN0cmFwLWFnZW5jeS9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICAgICovXG4gICAoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjsgLy8gU3RhcnQgb2YgdXNlIHN0cmljdFxuXG4gICAgICAvLyA9PT09PT0gUkFOS0lORyBCQVJTXG4gICAgICB2YXIgdGhlQmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9ncmVzcy1iYXInKVxuICAgICAgdGhlQmFycy5mb3JFYWNoKGFCYXIgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgdmFyIGJhcldpZHRoID0gJChhQmFyKS5hdHRyKCdhcmlhLXZhbHVlbm93JylcbiAgICAgICAgJChhQmFyKS5hdHRyKCdzdHlsZScsIGB3aWR0aDogJHtiYXJXaWR0aH0lYCk7XG4gICAgICB9KTtcblxuICAgIC8vIFNtb290aCBzY3JvbGxpbmcgdXNpbmcgalF1ZXJ5IGVhc2luZ1xuICAgICQoJ2EuanMtc2Nyb2xsLXRyaWdnZXJbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgXCJcIikgPT1cbiAgICAgICAgICAgICAgICB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCBcIlwiKSAmJlxuICAgICAgICAgICAgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyB0YXJnZXRcbiAgICAgICAgICAgICAgICA6ICQoXCJbbmFtZT1cIiArIHRoaXMuaGFzaC5zbGljZSgxKSArIFwiXVwiKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wIC0gNzIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIFwiZWFzZUluT3V0RXhwb1wiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENsb3NlcyByZXNwb25zaXZlIG1lbnUgd2hlbiBhIHNjcm9sbCB0cmlnZ2VyIGxpbmsgaXMgY2xpY2tlZFxuICAgICQoXCIuanMtc2Nyb2xsLXRyaWdnZXJcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLm5hdmJhci1jb2xsYXBzZVwiKS5jb2xsYXBzZShcImhpZGVcIik7XG4gICAgfSk7XG5cbiAgICAvLyBBY3RpdmF0ZSBzY3JvbGxzcHkgdG8gYWRkIGFjdGl2ZSBjbGFzcyB0byBuYXZiYXIgaXRlbXMgb24gc2Nyb2xsXG4gICAgJChcImJvZHlcIikuc2Nyb2xsc3B5KHtcbiAgICAgICAgdGFyZ2V0OiBcIiNtYWluTmF2XCIsXG4gICAgICAgIG9mZnNldDogNzQsXG4gICAgfSk7XG5cbiAgICAvLyBDb2xsYXBzZSBOYXZiYXJcbiAgICB2YXIgbmF2YmFyQ29sbGFwc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKFwiI21haW5OYXZcIikub2Zmc2V0KCkudG9wID4gMTAwKSB7XG4gICAgICAgICAgICAkKFwiI21haW5OYXZcIikuYWRkQ2xhc3MoXCJuYXZiYXItc2hyaW5rXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNtYWluTmF2XCIpLnJlbW92ZUNsYXNzKFwibmF2YmFyLXNocmlua1wiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gQ29sbGFwc2Ugbm93IGlmIHBhZ2UgaXMgbm90IGF0IHRvcFxuICAgIG5hdmJhckNvbGxhcHNlKCk7XG4gICAgLy8gQ29sbGFwc2UgdGhlIG5hdmJhciB3aGVuIHBhZ2UgaXMgc2Nyb2xsZWRcbiAgICAvLyAkKHdpbmRvdykuc2Nyb2xsKG5hdmJhckNvbGxhcHNlKTsgLy9kZXByZWNhdGVkXG4gICAgLy8gJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBuYXZiYXJDb2xsYXBzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG5hdmJhckNvbGxhcHNlLCBmYWxzZSlcblxuICAgIC8vICoqID09PT09PSBNT0RFIFdJREhFVCA9PT09PT0gKiogLy9cbiAgICB2YXIgJGRtX2J0biA9ICQoJyNtb2RlX3dpZGdldCcpXG4gICAgdmFyIGxzR2V0TW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrX21vZGUnKVxuXG4gICAgLy8gc2V0IGJ1dHRvbiB0ZXh0XG4gICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgICAgaWYgKGxzR2V0TW9kZSA9PT0gJ2Zhc2xlJykge1xuICAgICAgICBzZXRNb2RlVGV4dCh0cnVlKVxuICAgICAgICAvLyRkbV9idG4uaHRtbCgnPHNwYW4gY2xhc3M9XCJ3aGljaC1tb2RlXCI+RGFyayBNb2RlPHNwYW4gaWQ9XCJtb2RlX2ljb25cIiBjbGFzcz1cImZhIGZhLW1vb24tbyBtb2RlLWljb25cIj48L3NwYW4+PC9zcGFuPicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRNb2RlVGV4dChmYWxzZSlcbiAgICAgICAgLy8gJGRtX2J0bi5odG1sKCc8c3BhbiBjbGFzcz1cIndoaWNoLW1vZGVcIj5MaWdodCBNb2RlPHNwYW4gaWQ9XCJtb2RlX2ljb25cIiBjbGFzcz1cImZhIGZhLXN1bi1vIG1vZGUtaWNvblwiPjwvc3Bhbj48L3NwYW4+JylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gc2V0TW9kZVRleHQobW9kZSkge1xuICAgICAgaWYgKG1vZGUgPT09ICd0cnVlJykge1xuICAgICAgICAkZG1fYnRuLmh0bWwoJzxzcGFuIGNsYXNzPVwid2hpY2gtbW9kZVwiPiBEYXJrIE1vZGU8c3BhbiBpZD1cIm1vZGVfaWNvblwiIGNsYXNzPVwiZmEgZmEtbW9vbi1vIG1vZGUtaWNvblwiPjwvc3Bhbj48L3NwYW4+JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRkbV9idG4uaHRtbCgnPHNwYW4gY2xhc3M9XCJ3aGljaC1tb2RlXCI+IExpZ2h0IE1vZGU8c3BhbiBpZD1cIm1vZGVfaWNvblwiIGNsYXNzPVwiZmEgZmEtc3VuLW8gbW9kZS1pY29uXCI+PC9zcGFuPjwvc3Bhbj4nKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE1vZGUobW9kZSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtfbW9kZScsIGAke21vZGV9YClcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXJrbW9kZScpLmRpc2FibGVkID0gbW9kZTtcblxuICAgICAgaWYgKG1vZGUgPT09ICd0cnVlJykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFya21vZGUnKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAkZG1fYnRuLmh0bWwoJzxzcGFuIGNsYXNzPVwid2hpY2gtbW9kZVwiPiBEYXJrIE1vZGU8c3BhbiBpZD1cIm1vZGVfaWNvblwiIGNsYXNzPVwiZmEgZmEtbW9vbi1vIG1vZGUtaWNvblwiPjwvc3Bhbj48L3NwYW4+JylcblxuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW2hyZWY9XCJjc3MvdGhlbWUtZGFyay1tb2RlLmNzc1wiXScpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZG1fYnRuLmh0bWwoJzxzcGFuIGNsYXNzPVwid2hpY2gtbW9kZVwiPiBMaWdodCBNb2RlPHNwYW4gaWQ9XCJtb2RlX2ljb25cIiBjbGFzcz1cImZhIGZhLXN1bi1vIG1vZGUtaWNvblwiPjwvc3Bhbj48L3NwYW4+JylcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXRNb2RlVGV4dChtb2RlKVxuICAgIH1cblxuICAgIC8vIFRoZW1lIHN3aXRjaGVyXG4gICAgJGRtX2J0bi5iaW5kKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrX21vZGUnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHNldE1vZGUoJ2ZhbHNlJyksIGNvbnNvbGUubG9nKCdzZXQgdG8gZmFsc2UnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TW9kZSgndHJ1ZScpLCBjb25zb2xlLmxvZygnc2V0IHRvIHRydWUnKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfSlcblxuICAgIC8vID09PT09PSBTSE9XTU9SRSA9PT09IC8vXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgbGV0IFNob3dNb3JlU2V0dGluZ3MgPSB7XG4gICAgICBib3hIZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBmYlN0YXJ0Q29sb3I6ICdyZ2JhKDAsMCwwLC43NSknLFxuICAgICAgZmJFbmRDb2xvcjogJ3JnYmEoMCwwLDAsLjc1KScsXG4gICAgICBmYkJvdHRvbUJvcmRlcjogJzFweCBzb2xpZCAjMmUyZTJlJyxcbiAgICAgIGZiSW5pdEJ1dHRvblRleHQ6ICdTaG93IE1vcmUnLFxuICAgICAgZmJPcGVuQnV0dG9uVGV4dDogJ1Nob3cgTGVzcycsXG4gICAgICBmYkJ1dHRvblBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgIGZiQnV0dG9uQmFja2dyb3VuZDogJyMxNTE1MTUnLFxuICAgICAgZmJCdXR0b25CYWNrZ3JvdW5kSG92ZXI6ICcjMzMzMzMzOycsXG4gICAgICBmYkJ1dHRvblRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgZmJCdXR0b25UZXh0Q29sb3JIb3ZlcjogJyNmZmZmZmYnLFxuICAgICAgZmJCdXR0b25UZXh0Q29sb3JGb2N1czogJyNGRkYnLFxuICAgICAgZmJCdXR0b25Cb3JkZXJDb2xvcjogJyMwMDAwMDAnLFxuICAgICAgZmJCdXR0b25Cb3JkZXJDb2xvckZvY3VzOiAnIzMzMzMzMycsXG4gICAgfVxuXG59KShqUXVlcnkpOyAvLyBFbmQgb2YgdXNlIHN0cmljdFxuIl19
