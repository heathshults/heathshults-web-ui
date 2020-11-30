// *======* CONTACT FORM *======* //
/* eslint-disable no-undef, no-unused-vars */
(($) => {
  // *======* CONTACT FORM *======* //
  window.onload = () => {
    const contactForm=document.querySelector('#contactForm');
    const contactFormFields=contactForm.querySelectorAll('.form-control');
    let contactFormFieldsValues= [];
    console.log(contactForm),console.log(contactFormFields);

    // for(let i=0; i<contactFormFields.length;i++) {
    Array.prototype.slice.call(contactFormFields).forEach((field, index) => {  
      let name = field.name;
      let value = field.value;
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
  
  
    document.querySelector('#contactForm input,#contactForm textarea').addEventListener('change', function(event) {
      console.log('Got a CHANGE');
      event.forEach(formField => {
        console.log(`new value ${formField.name}: ${formField.value}`);
      });
      console.log(`new value ${event.target.name}: ${event.target.value}`);
    });
  };
  $('#contactForm input,#contactForm textarea').jqBootstrapValidation({
      preventSubmit: true,
      submitError: function($form, event, errors) {
          // additional error messages or events
      },
      submitSuccess: function($form, event) {
          event.preventDefault(); // prevent default submit behaviour
          // get values from FORM
          var name = $('input#name').val();
          var email = $('input#email').val();
          var phone = $('input#phone').val();
          var message = $('textarea#message').val();
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
              success: function() {
                  // Success message
                  $('#success').html('<div class="alert alert-success">');
                  $("#success > .alert-success").html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;')
                      .append('</button>');
                  $('#success > .alert-success')
                      .append('<strong>Your message has been sent. </strong>');
                  $('#success > .alert-success')
                      .append('</div>');

                  //clear all fields
                  $('#contactForm').trigger('reset');
              },
              error: function() {
                  // Fail message
                  $('#success').html('<div class="alert alert-danger">');
                  $('#success > .alert-danger').html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;')
                      .append('</button>');
                  $('#success > .alert-danger').append('<strong>Sorry ' + firstName + ', it seems that my mail server is not responding. Please try again later!');
                  $('#success > .alert-danger').append('</div>');
                  //clear all fields
                  $('#contactForm').trigger('reset');
              }
          });
      },
      filter: function() {
          return $(this).is(':visible');
      }
  });

  $('a[data-toggle="tab"]').on('click', (e) => {
      e.preventDefault();
      $(this).tab('show');
  });



  const clearMsgBox='#name';
/*When clicking on Full hide fail/success boxes */
  $(clearMsgBox).on('focus', () => {
      $('#success').html('');
  });
  
})(jQuery);
