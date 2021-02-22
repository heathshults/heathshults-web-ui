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

(() => {
  
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
    const siteStorage =     window.localStorage;
    const siteSession =     window.sessionStorage;
    const visited =         siteStorage.getItem('visited');
    const greetingSpan =    document.querySelector('#greetingLine');
    let   sessionStart =    new Date().getTime();
    let   sessionEnd =      new Date().getTime();
    let   elapsed;
    let   greetingHTML;
    
    function elapsedTime() {
      return elapsed = sessionEnd - siteSession.getItem('sessionStart');
    }
    
    siteSession.setItem('sessionStart', sessionStart);
    if (!visited || visited === '' || typeof visited === 'undefined' ) {
      siteStorage.setItem('visited', 1);
      
    } else if (visited === '1') {
      if (Math.floor(elapsedTime() > 30) ) {
        greetingSpan.innerHTML = `<p class="hs-intro-heading">Welcome Back!</p>`;
      } else {
        greetingSpan.innerHTML = `
        <p class="hs-intro-lead-in">
        Hello, I'm Heath.
        </p>
        <p class="hs-intro-subheading">
        Must be your first time here?
        <!-- It's Nice To Meet You -->
        </p>
        <p class="hs-intro-heading">Welcome!</p>`;
      }
    }
    return;
  };
    
  // ====== RANKING BARS
  var theBars=document.querySelectorAll('.hs-ranking-bar');
  theBars.forEach(aBar => {
    
    // eslint-disable-next-line no-undef
    var barWidth = document.querySelector(aBar).getAttribute('aria-valuenow');
    document.querySelector(aBar).setAttribute('style',`width: ${barWidth}%`);
    // var barWidth=$(aBar).attr('aria-valuenow');
    // $(aBar).attr('style',`width: ${barWidth}%`);
  });
  
})(); // End of use strict

/* eslint-disable no-undef, no-unused-vars */
(() => {
  
  
  // *======* CONTACT FORM *======* //
  window.onload = () => {
    const qs = document.querySelector;
    const qsa = document.querySelectorAll;
    const contactForm =qs ('#contactForm');
    const contactFormFields = contactForm.qsa('.form-control');
    let contactFormFieldsValues = [];
    // console.log(contactForm),console.log(contactFormFields);

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
  window.onload = () => {
    const contactForm=document.querySelector('#contactForm');
    const contactFormFields=contactForm.querySelectorAll('.form-control');
    console.log(contactForm),console.log(contactFormFields);

    contactFormFields.forEach((field) => {
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

      }); // end blur event
    }); //end foreach


    // auto fill battle
    const AUTOFILLED = 'is-autofilled';
    const onAutoFillStart = (el) => el.classList.add(AUTOFILLED);
    const onAutoFillCancel = (el) => el.classList.remove(AUTOFILLED);
    const onAnimationStart = ({target,animationName}) => {
      switch (animationName) {
        case 'onAutoFillStart':
          el.target.style = 'background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;';
          return onAutoFillStart(target);
        case 'onAutoFillCancel':
          return onAutoFillCancel(target);
      }
    };
  };
