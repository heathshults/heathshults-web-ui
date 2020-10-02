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

  // ====== NAV JS ====== //
  // jQuery for page scrolling feature - requires jQuery Easing plugin
  // $('a.js-page-scroll').bind('click', function (event) {
  //   var $anchor = $(this);
  //   $('html, body').stop().animate({
  //     scrollTop: ($($anchor.attr('href')).offset().top - 0) //I left the - 0 there to remind me about using it if need be
  //   }, 1250, 'easeInOutExpo');
  //   event.preventDefault();
  // });

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
        }
        if (!event.target.value && !event.target.parentElement.classList.contains('antiblur')) {
          event.target.parentElement.classList.add('antiblur')
        }
          
      }) // end blur event
    }) //end foreach
  }
  
  // *====== WATCH CLASSLIST FOR CHANGES ======* //
  const elemToObserve = document.querySelector('.form-group');
  console.log(elemToObserve)
  let prevClassState = elemToObserve.classList.contains('error');
  const observer = new MutationObserver(mutations => {
    mutations.forEach(({attributeName, target}) => {
      if (attributeName == "class") {
        const currentClassState = target.classList.contains('your_class');
        if (prevClassState !== currentClassState) {
          prevClassState = currentClassState;
          if (currentClassState)
            console.log("class added! add sustained class here");
          else
            console.log("class removed! probably do nothing here");
        }
      }
    });
  });
  observer.observe(elemToObserve, {
    attributes: true
  });
  
 
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
