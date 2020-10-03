import { Observable } from 'rxjs';
/*!
 * HeathShults.com - Heath Shults v1.0 (http://heathshults.com)
 * Copyright 2020-2020 Heath-Shults
 * Licensed under MIT (https://github.com/heathshults/heathshults.com/LICENSE)
 */

(function ($) {
  'use strict'; // Start of use strict

  // ====== RANKING BARS
  var theBars = document.querySelectorAll('.hs-ranking-bar')
  theBars.forEach(aBar => {
    // eslint-disable-next-line no-undef
    var barWidth = $(aBar).attr('aria-valuenow')
    $(aBar).attr('style', `width: ${barWidth}%`);
  });

  
  // scrolling nav
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
        location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top - 72,
                },
                1000,
                "easeInOutExpo"
            );
            return false;
        }
    }
});

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });


  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '#mainNav',
    offset: 74
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 90) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // ** ====== MODE WIDHET ====== ** //
  var dm_btn = $('#mode_widget')
  var lsGetMode = localStorage.getItem('dark_mode')

  // set button text
$(document).ready(() => {
    if (lsGetMode === 'fasle') {
      setModeText(true)
      //dm_btn.html('<span class="which-mode">Dark Mode<span id="mode_icon" class="fa fa-moon-o mode-icon"></span></span>')
    } else {
      setModeText(false)
      // dm_btn.html('<span class="which-mode">Light Mode<span id="mode_icon" class="fa fa-sun-o mode-icon"></span></span>')
    }
  })

  function setModeText(mode) {
    if (mode === 'true') {
      dm_btn.html('<span class="which-mode"> Dark Mode<i id="mode_icon" class="fa fa-moon mode-icon"></i></span>')
    } else {
      dm_btn.html('<span class="which-mode"> Light Mode<i id="mode_icon" class="fa fa-sun mode-icon"></i></span>')
    }
  }

  function setMode(mode) {
    localStorage.setItem('dark_mode', `${mode}`)
    document.querySelector('#darkmode').disabled = mode;

    if (mode === 'true') {
      document.querySelector('#darkmode').disabled = false;
      dm_btn.html('<span class="which-mode"> Dark Mode<i id="mode_icon" class="fa fa-moon mode-icon"></i></span>')

      // document.querySelector('link[href="css/theme-dark-mode.css"]').disabled = false;
    } else {
      dm_btn.html('<span class="which-mode"> Light Mode<i id="mode_icon" class="fa fa-sun mode-icon"></i></span>')
    }
    return setModeText(mode)
  }

  // Theme switcher
  dm_btn.click((event) => {
    event.preventDefault()
    if (localStorage.getItem('dark_mode') === 'true') {
      setMode('false'), console.log('set to false')
    } else {
      setMode('true'), console.log('set to true')
    }
    return
  })
  
  // *====== TIMELINE ======* //
  // var timelineItemHeaders = [].prototype.slice.call(document.querySelectorAll('.timeline-panel_header'))
  const timelineItemHeaders = document.querySelectorAll('.timeline-panel_header')
  timelineItemHeaders.forEach(header => {
    
      let panel, panelItems, panelLeftRight, icon;
      header.addEventListener('click', (event) => {
        
          if (event.target.parentElement.hasAttribute('class')) {
            try {
              icon = event.target.querySelector('.timeline-panel-header-icon')
              console.log(icon)
              if (icon.style.transform === 'rotate(180deg)') {
                icon.style.transform = 'rotate(0deg)'
              } else {
                icon.style.transform = 'rotate(180deg)'
              }
            }
            catch(error) {
              console.error(error)
            }
            try {
              panel = event.target.parentElement.closest('.timeline-panel')
              panelLeftRight = event.target.parentElement.closest('.timeline-panel--left', '.timeline-panel--right')
              panel.classList.toggle('visible')
              if (panel.style.height === '134px') {
                panel.style.height  = ''
              } else {  
                panel.style.height = '134px'
              }
              panelLeftRight.classList.toggle('visible')
            }
            catch(error) {
              console.error(error)
            }
          }
        
      })
  })
  
  // *======* CONTACT FORM *======* //
  
  window.onload = () => {
    const contactForm = document.querySelector('#contactForm')
    const contactFormFields = contactForm.querySelectorAll('.form-control')
    console.log(contactForm), console.log(contactFormFields)
    
    contactFormFields.forEach((field) => {
      field.addEventListener(('onfocus','click'), (event) => {
        if (event.target.value && event.target.parentElement.classList.contains('antiblur')) {
          return
        } else {
          event.target.parentElement.classList.add('antiblur')
          // autofill makes me have to do this inline hack
          // event.target.style = 'background: rgba(0, 0, 0, .65); border: 2px solid #fed136; color: #ffffff !important; color: -internal-light-dark(white) !important;'
          // event.target.setAttribute(':focus', )
        }
        if (!event.target.value && !event.target.parentElement.classList.contains('antiblur')) {
          event.target.parentElement.classList.add('antiblur')
        }
          
      }) // end blur event
    }) //end foreach
    
    // auto fill battle
    const AUTOFILLED = 'is-autofilled'
    const onAutoFillStart = (el) => el.classList.add(AUTOFILLED)
    const onAutoFillCancel = (el) => el.classList.remove(AUTOFILLED)
    const onAnimationStart = ({ target, animationName }) => {
      switch (animationName) {
        case 'onAutoFillStart':
          return onAutoFillStart(target)
        case 'onAutoFillCancel':
          return onAutoFillCancel(target)
      }
    }
document.querySelector('input').addEventListener('animationstart', onAnimationStart, false)
    
  }
  
  // *====== WATCH CLASSLIST FOR CHANGES ======* //
  /**
   * Observer call back function
   */
  function mutantCallback(mutationList, observer) {
    mutationList.forEach( (mutation) => {
      switch(mutation.type) {
        case 'childList':
          /* One or more children have been added to and/or removed
             from the tree.
             (See mutation.addedNodes and mutation.removedNodes.) */
          break;
        case 'attributes':
          /* An attribute value changed on the element in
             mutation.target. 
             The attribute name is in mutation.attributeName, and 
             its previous value is in mutation.oldValue. */
             console.log(`${mutation.attributeName}: ${mutation.oldValue}`)
          break;
      }
    });
  }
  
  /**
   * Create and start observer
   */
  const targetNode = document.querySelector("#contactForm");
  const observerOptions = {
    childList: true,
    attributes: true,
    
    // Omit (or set to false) to observe only changes to the parent node
    subtree: true 
  }
  
  const observer = new MutationObserver(mutantCallback);
  observer.observe(targetNode, observerOptions);
  
 
  // event.target.classList.toggle('focusout')
   // ====== SHOWMORE ==== //
  // eslint-disable-next-line no-unused-vars
  // let ShowMoreSettings = {
  //   boxHeight: '100vh',
  //   fbStartColor: 'rgba(0,0,0,.75)',
  //   fbEndColor: 'rgba(0,0,0,.75)',
  //   fbBottomBorder: '1px solid #2e2e2e',
  //   fbInitButtonText: 'Show More',
  //   fbOpenButtonText: 'Show Less',
  //   fbButtonPosition: 'center',
  //   fbButtonBackground: '#151515',
  //   fbButtonBackgroundHover: '#333333;',
  //   fbButtonTextColor: '#ffffff',
  //   fbButtonTextColorHover: '#ffffff',
  //   fbButtonTextColorFocus: '#FFF',
  //   fbButtonBorderColor: '#000000',
  //   fbButtonBorderColorFocus: '#333333',
  // }

})(jQuery); // End of use strict
