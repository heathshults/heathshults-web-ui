/**
 * @author HeathShults.com - Heath Shults v1.0 (http://heathshults.com)
 * @version 1.0.0
 * @copyright 2020-2020 Heath-Shults
 * @license MIT (https://github.com/heathshults/heathshults.com/LICENSE)
 */
( window.onload = () => {
  // ====== RANKING BARS
  const theBars = document.querySelectorAll('.hs-ranking-bar');
  theBars.forEach(aBar => {
    // eslint-disable-next-line no-undef
    const barWidth = document.querySelector(aBar).getAttribute('aria-valuenow');
    document.querySelector(aBar).setAttribute('style', "width: ".concat(barWidth, "%")); // var barWidth=$(aBar).attr('aria-valuenow');
    // $(aBar).attr('style',`width: ${barWidth}%`);
  });
})();

/* eslint-disable no-undef, no-unused-vars */


(() => {
  // *======* CONTACT FORM *======* //
  window.onload = autofillKill();
  
  function autofillKill() {
    const qs = document.querySelector;
    const qsa = document.querySelectorAll;
    const contactForm = document.querySelector('#contactForm');
    const contactFormFields = contactForm.document.querySelectorAll('.form-control');
    const contactFormFieldsValues = []; // console.log(contactForm),console.log(contactFormFields);
    // for(let i=0; i<contactFormFields.length;i++) {

    Array.prototype.slice.call(contactFormFields).forEach((field, index) => {
      const name = field.name;
      const value = field.value;
      contactFormFieldsValues[index] = {
        name: value
      };
      field.addEventListener(('onfocus', 'click'), ({target}) => {
        if (target.value && target.parentElement.classList.contains('antiblur')) {
          return;
        } else {
          target.parentElement.classList.add('antiblur'); // autofill makes me include this inline hack
          // event.target.style = 'background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;'
          // event.target.setAttribute(':focus', )
        }

        if (!target.value && !target.parentElement.classList.contains('antiblur')) {
          target.parentElement.classList.add('antiblur');
        }
      });
      field.addEventListener('change', event => {
        alert("change!");
      }); // end blur event
    }); //end foreach
    // auto fill battle

    const AUTOFILLED = 'is-autofilled';

    const onAutoFillStart = function onAutoFillStart(el) {
      return el.classList.add(AUTOFILLED);
    };

    const onAutoFillCancel = function onAutoFillCancel(el) {
      return el.classList.remove(AUTOFILLED);
    };

    const onAnimationStart = function onAnimationStart(_ref) {
      const target = _ref.target;
      const animationName = _ref.animationName;

      switch (animationName) {
        case 'onAutoFillStart':
          el.target.style = 'background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;';
          return onAutoFillStart(target);

        case 'onAutoFillCancel':
          return onAutoFillCancel(target);
      }
    };

    document.querySelector('#contactForm input,#contactForm textarea').addEventListener('change', event => {
      console.log('Got a CHANGE');
      event.forEach(formField => {// console.log(`new value document.querySelector{formField.name}: document.querySelector{formField.value}`);
      }); // console.log(`new value document.querySelector{event.target.name}: document.querySelector{event.target.value}`);
    });
  }

  const $form = document.querySelector('#contactForm');
  document.querySelector('#contactForm input,#contactForm textarea').jqBootstrapValidation({
    preventSubmit: true,
    submitError: function submitError($form, event, errors) {// additional error messages or events
    },
    submitSuccess: function submitSuccess($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM

      const name = document.querySelector('input#name').val();
      const email = document.querySelector('input#email').val();
      const phone = document.querySelector('input#phone').val();
      const message = document.querySelector('textarea#message').val();
      let firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message

      if (firstName.includes(' ')) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }

      $.ajax({
        url: '/mail/contact_me.php',
        type: 'POST',
        data: {
          name,
          phone,
          email,
          message
        },
        cache: false,
        success: function success() {
          // Success message
          document.querySelector('#success').innerHTML = '<div class="alert alert-success">';
          document.querySelector("#success > .alert-success").innerHTML += '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><p><strong>Your message has been sent. </strong></p></div>'; //clear all fields

          document.querySelector('#contactForm').trigger('reset');
        },
        error: function error() {
          // Fail message
          document.querySelector('#success').innerHTML = '<div class="alert alert-danger">';
          document.querySelector('#success > .alert-danger').innerHTML = "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button><p><strong>Sorry ".concat(firstName, ", it seems that my mail server is not responding. Please try again later!</p></div>"); //clear all fields

          document.querySelector('#contactForm').reset();
        }
      });
    },
    filter: function filter() {
      return this.is(':visible');
    }
  });
  document.querySelector('a[data-toggle="tab"]').addEventListener('click', e => {
    e.preventDefault();

    _this.tab('show');
  });
  const clearMsgBox = '#name';
  /*When clicking on Full hide fail/success boxes */

  document.querySelector(clearMsgBox).addEventListener('focus', () => {
    document.querySelector('#success').innerHTML = '';
  });
})(); // End of use strict

// *======* CONTACT FORM *======* //


window.onload = () => {
  const contactForm = document.querySelector('#contactForm');
  const contactFormFields = contactForm.querySelectorAll('.form-control');
  console.log(contactForm), console.log(contactFormFields);
  contactFormFields.forEach(field => {
    field.addEventListener(('onfocus', 'click'), ({target}) => {
      if (target.value && target.parentElement.classList.contains('antiblur')) {
        return;
      } else {
        target.parentElement.classList.add('antiblur'); 
        // autofill makes me include this inline hack
        // event.target.style = 'background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;'
        // event.target.setAttribute(':focus', )
      }

      if (!target.value && !target.parentElement.classList.contains('antiblur')) {
        target.parentElement.classList.add('antiblur');
      }
    }); // end blur event
  }); //end foreach
  // auto fill battle

  const AUTOFILLED = 'is-autofilled';

  const onAutoFillStart = function onAutoFillStart(el) {
    return el.classList.add(AUTOFILLED);
  };

  const onAutoFillCancel = function onAutoFillCancel(el) {
    return el.classList.remove(AUTOFILLED);
  };

  const onAnimationStart = function onAnimationStart(_ref2) {
    const target = _ref2.target;
    const animationName = _ref2.animationName;

    switch (animationName) {
      case 'onAutoFillStart':
        el.target.style = 'background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;';
        return onAutoFillStart(target);

      case 'onAutoFillCancel':
        return onAutoFillCancel(target);
    }
  };
};







