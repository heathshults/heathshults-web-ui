/* eslint-disable no-undef, no-unused-vars */
(() => {
  
  
  // *======* CONTACT FORM *======* //
  window.onload = () => {
    const qs = document.querySelector;
    const qsa = document.querySelectorAll;
    const contactForm =qs ('#contactForm');
    const contactFormFields = contactForm.qsa('.form-control');
    const contactFormFieldsValues = [];
    // console.log(contactForm),console.log(contactFormFields);

    // for(let i=0; i<contactFormFields.length;i++) {
    Array.prototype.slice.call(contactFormFields).forEach((field, index) => {  
      const name = field.name;
      const value = field.value;
      contactFormFieldsValues[index] = {name: value};
      field.addEventListener(('onfocus','click'),(event) => {
        if (event.target.value&&event.target.parentElement.classList.contains('antiblur')) {
          return;
        } else {
          event.target.parentElement.classList.add('antiblur');
          // autofill makes me include this inline hack
          // event.target.style = 'background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;'
          // event.target.setAttribute(':focus', )
        }
        if (!event.target.value&&!event.target.parentElement.classList.contains('antiblur')) {
          event.target.parentElement.classList.add('antiblur');
        }

      });
      field.addEventListener('change', function(event) {
        alert("change!");
      });
      // end blur event
    }); //end foreach


    // auto fill battle
    const AUTOFILLED='is-autofilled';
    const onAutoFillStart=(el) => el.classList.add(AUTOFILLED);
    const onAutoFillCancel=(el) => el.classList.remove(AUTOFILLED);
    const onAnimationStart=({target,animationName}) => {
      switch (animationName) {
        case 'onAutoFillStart':
          el.target.style='background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;';
          return onAutoFillStart(target);
        case 'onAutoFillCancel':
          return onAutoFillCancel(target);
      }
    };
  
  
    qs('#contactForm input,#contactForm textarea').addEventListener('change', function(event) {
      console.log('Got a CHANGE');
      event.forEach(formField => {
        // console.log(`new value qs{formField.name}: qs{formField.value}`);
      });
      // console.log(`new value qs{event.target.name}: qs{event.target.value}`);
    });
  };
  
  const $form = qs('#contactForm');
  qs('#contactForm input,#contactForm textarea').jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
        // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      const name = qs('input#name').val();
      const email = qs('input#email').val();
      const phone = qs('input#phone').val();
      const message = qs('textarea#message').val();
      let firstName = name; // For Success/Failure Message
      
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
        success: function() {
          // Success message
          qs('#success').innerHTML = '<div class="alert alert-success">';
          qs("#success > .alert-success").innerHTML += '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><p><strong>Your message has been sent. </strong></p></div>';
          //clear all fields
          qs('#contactForm').trigger('reset');
        },
        error: function() {
          // Fail message
          qs('#success').innerHTML = '<div class="alert alert-danger">';
          qs('#success > .alert-danger').innerHTML = `<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><p><strong>Sorry ${firstName}, it seems that my mail server is not responding. Please try again later!</p></div>`;

          //clear all fields
          qs('#contactForm').reset();
        }
      });
    },
        filter: function() {
          return this.is(':visible');
        }
  });
        qs('a[data-toggle="tab"]').addEventListener('click', (e) => {
            e.preventDefault();
            this.tab('show');
        });



        const clearMsgBox='#name';
      /*When clicking on Full hide fail/success boxes */
        qs(clearMsgBox).addEventListener('focus', () => {
            qs('#success').innerHTML = '';
        });
  
    

})(); // End of use strict
