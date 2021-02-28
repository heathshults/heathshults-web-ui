(() => {
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
})();
