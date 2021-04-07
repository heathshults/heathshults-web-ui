/* eslint-disable no-undef, no-unused-vars */
(() => {
  
  
  // *======* CONTACT FORM *======* //
  window.onload = function SendForm() {
    const contactForm = document.querySelector('#contactForm');
    const contactFormFields = contactForm.querySelectorAll('.form-control');
    const contactFormFieldsValues = [];
    // console.log(contactForm),console.log(contactFormFields);

    // for(let i=0; i<contactFormFields.length;i++) {
    Array.prototype.slice.call(contactFormFields).forEach((field, index) => {  
      const name = field.name;
      const value = field.value;
      contactFormFieldsValues[index] = {name: value};
      field.addEventListener(('focus','click'),(event) => {
        if (event.target.value && event.target.parentElement.classList.contains('antiblur')) {
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
    const onAnimationStart=(el, {target,animationName}) => {
      switch (animationName) {
        case 'onAutoFillStart':
          el.target.style='background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;';
          return onAutoFillStart(target);
        case 'onAutoFillCancel':
          return onAutoFillCancel(target);
      }
    };
  
  
    document.querySelectorAll('#contactForm input,#contactForm textarea').addEventListener('change', function(ev): any {
      console.log('Got a CHANGE');
      ev.forEach(formField => {
        console.log(`new value document.querySelector{formField.name}: document.querySelector{formField.value}`);
      });
      console.log(`new value document.querySelector{event.target.name}: document.querySelector{event.target.value}`);
    });
  };
  
  function contactForm(): any {
  const $form = document.querySelector('#contactForm');
    
    function submitError($form, event, errors) {
        // additional error messages or events
    }
    function sendForm($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      const name: HTMLInputElement = document.querySelector('input#name') as HTMLInputElement;
      const email: HTMLInputElement = document.querySelector('input#email') as HTMLInputElement;
      const phone: HTMLInputElement = document.querySelector('input#phone') as HTMLInputElement;
      const message: HTMLInputElement = document.querySelector('textarea#message') as HTMLInputElement;
      let firstName: string = name.value; // For Success/Failure Message
      
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
          firstName = firstName.split(' ').slice(0, -1).join(' ');
      }
      // TODO: Implement this instead of jq
      // (async () => {
      //   const rawResponse = await fetch('https://httpbin.org/post', {
      //     method: 'POST',
      //     headers: {
      //       'Accept': 'application/json',
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({a: 1, b: 'Textual content'})
      //   });
      //   const content = await rawResponse.json();
      
      //   console.log(content);
      // })();

      // fetch(api_url, {
      //     method: 'post',
      //     body: JSON.stringify(opts)
      //   }).then(function(response) {
      //     return response.json();
      //   }).then(function(data) {
      //     ChromeSamples.log('Created Gist:', data.html_url);
      //   });
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
          document.querySelector('#success').innerHTML = '<div class="alert alert-success">';
          document.querySelector("#success > .alert-success").innerHTML += '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><p><strong>Your message has been sent. </strong></p></div>';
          //clear all fields
          document.querySelector('#contactForm').trigger('reset');
        },
        error: function() {
          // Fail message
          document.querySelector('#success').innerHTML = '<div class="alert alert-danger">';
          document.querySelector('#success > .alert-danger').innerHTML = `<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><p><strong>Sorry ${firstName}, it seems that my mail server is not responding. Please try again later!</p></div>`;

          //clear all fields
          document.querySelector('#contactForm').reset();
        }
      });
    },
        filter: function() {
          return this.is(':visible');
        }
  });
        document.querySelector('a[data-toggle="tab"]').addEventListener('click', (e) => {
            e.preventDefault();
            this.tab('show');
        });



        const clearMsgBox='#name';
      /*When clicking on Full hide fail/success boxes */
        document.querySelector(clearMsgBox).addEventListener('focus', () => {
            document.querySelector('#success').innerHTML = '';
        });
  
    
}
})(); // End of use strict
