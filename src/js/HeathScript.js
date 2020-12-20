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

(($) => {

  /** 
   * This function sets the greeting message. It uses localStorage  
   * to remember if this is a first time visit or a repeat visit.
   * @function anonymous
   * @event window.onload           Load the greeting before it is visible.
   * @const siteStorage             Using local storage to track visits.
   * @const visited                 Has the visitor been here before.
   * @const greetingSpan            Where we will place the customized greeting.
   * @var greetingHTML              The text to be set in greetingSpan.
   * @function setGGreetingText     Sets the text in greetingSpan.
   * 
  */
  window.onload = function setGreetingText(ts) {
    const siteStorage =     window.localStorage;
    const siteSession =     window.sessionStorage;
    const visited =         siteStorage.getItem('visited');
    const greetingSpan =    document.querySelector('#greetingLine');
    let greetingHTML;
 
    
    siteSession.setItem('sessionStarted', 'dateTimeNow');
    if (!visited || visited === '' || typeof visited === 'undefined' ) {
      siteStorage.setItem('visited', 1);
      
    } else if (visited === '1') {
      if (timeDifferene > 30 ) {
        greetingSpan.innerHTML = 'Welcome back!';
      } else {
        greetingSpan.innerHTML = `<span class="hs-intro-subheading">This must be your first time here.</span><br> Welcome!`;
      }
    }
   return;
  };
    
 // ====== RANKING BARS
  var theBars=document.querySelectorAll('.hs-ranking-bar');
  theBars.forEach(aBar => {
    // eslint-disable-next-line no-undef
    var barWidth=$(aBar).attr('aria-valuenow');
    $(aBar).attr('style',`width: ${barWidth}%`);
  });
  
})(jQuery); // End of use strict
  /* 
  // scrolling nav
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,"")==
      this.pathname.replace(/^\//,"")&&
      location.hostname==this.hostname) {
      var target=$(this.hash);
      target=target.length
        ? target
        :$("[name="+this.hash.slice(1)+"]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top-72,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").on('click', () => {
    $(".navbar-collapse").collapse("hide");
  });


  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '#mainNav',
    offset: 74
  });

  // Collapse Navbar
  function navbarCollapse() {
    if ($("#mainNav").offset().top>90) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }

  // Collapse now if page is not at top
  navbarCollapse();
  
  // Collapse the navbar when page is scrolled
  $(window).on('scroll', navbarCollapse);


  // ** ====== MODE WIDHET ====== ** //
  
  (function themeSwitcher() {
    var dm_btn=$('#mode_widget');
    var lsGetMode=localStorage.getItem('dark_mode');
    
    // set button text
    if (lsGetMode==='fasle') {
      setModeText(true);
      //dm_btn.html('<span class="which-mode">Dark Mode<span id="mode_icon" class="fa fa-moon-o mode-icon"></span></span>')
    } else {
      setModeText(false);
      // dm_btn.html('<span class="which-mode">Light Mode<span id="mode_icon" class="fa fa-sun-o mode-icon"></span></span>')
    }


  function setModeText(mode) {
    if (mode==='true') {
      dm_btn.html('<span class="which-mode"> Dark Mode<i id="mode_icon" class="fa fa-moon mode-icon"></i></span>');
    } else {
      dm_btn.html('<span class="which-mode"> Light Mode<i id="mode_icon" class="fa fa-sun mode-icon"></i></span>');
    }
  }

  function setMode(mode) {
    localStorage.setItem('dark_mode',`${mode}`);
    document.querySelector('#darkmode').disabled=mode;

    if (mode==='true') {
      document.querySelector('#darkmode').disabled=false;
      dm_btn.html('<span class="which-mode"> Dark Mode<i id="mode_icon" class="fa fa-moon mode-icon"></i></span>');

      // document.querySelector('link[href="css/theme-dark-mode.css"]').disabled = false;
    } else {
      dm_btn.html('<span class="which-mode"> Light Mode<i id="mode_icon" class="fa fa-sun mode-icon"></i></span>');
    }
    return setModeText(mode);
  }

    // Theme switcher
    dm_btn.click((event) => {
      event.preventDefault();
      if (localStorage.getItem('dark_mode')==='true') {
        setMode('false'),console.log('set to false');
      } else {
        setMode('true'),console.log('set to true');
      }
      return;
    });
  });
  themeSwitcher();
  */
  // *====== TIMELINE ======* //
  // var timelineItemHeaders = [].prototype.slice.call(document.querySelectorAll('.timeline-panel_header'))
  // const timelineItemHeaders=document.querySelectorAll('.timeline-panel_header');
  // timelineItemHeaders.forEach(header => {

  //   let panel,panelItems,panelLeftRight,icon;
  //   header.addEventListener('click',(event) => {

  //     if (event.target.parentElement.hasAttribute('class')) {
  //       try {
  //         panel=event.target.parentElement.closest('.timeline-panel');
  //         panelLeftRight=event.target.parentElement.closest('.timeline-panel--left','.timeline-panel--right');
  //         panel.classList.toggle('visible');
  //         if (panel.style.height==='134px') {
  //           panel.style.height='';
  //         } else {
  //           panel.style.height='134px';
  //         }
  //         panelLeftRight.classList.toggle('visible');
  //       }
  //       catch (error) {
  //         console.error(error);
  //       }
  //     }

  //   });
  // });

  // *======* CONTACT FORM *======* //
  // window.onload = () => {
  // const contactForm=document.querySelector('#contactForm');
  // const contactFormFields=contactForm.querySelectorAll('.form-control');
  // console.log(contactForm),console.log(contactFormFields);

  // contactFormFields.forEach((field) => {
  //   field.addEventListener(('onfocus','click'),(event) => {
  //     if (event.target.value&&event.target.parentElement.classList.contains('antiblur')) {
  //       return;
  //     } else {
  //       event.target.parentElement.classList.add('antiblur');
  //       // autofill makes me include this inline hack
  //       // event.target.style = 'background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;'
  //       // event.target.setAttribute(':focus', )
  //     }
  //     if (!event.target.value&&!event.target.parentElement.classList.contains('antiblur')) {
  //       event.target.parentElement.classList.add('antiblur');
  //     }

  //   }); // end blur event
  // }); //end foreach


  // // auto fill battle
  // const AUTOFILLED='is-autofilled';
  // const onAutoFillStart=(el) => el.classList.add(AUTOFILLED);
  // const onAutoFillCancel=(el) => el.classList.remove(AUTOFILLED);
  // const onAnimationStart=({target,animationName}) => {
  //   switch (animationName) {
  //     case 'onAutoFillStart':
  //       el.target.style='background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;';
  //       return onAutoFillStart(target);
  //     case 'onAutoFillCancel':
  //       return onAutoFillCancel(target);
  //   }
  // };




 