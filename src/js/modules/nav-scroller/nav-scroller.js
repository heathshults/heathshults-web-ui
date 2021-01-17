/* eslint-disable no-console, no-undef, no-unused-vars, @typescript-eslint/no-unused-vars */
/*!
 * HeathShults.com - Heath Shults v1.0 (http://heathshults.com)
 * Copyright 2020-2020 Heath-Shults
 * Licensed under MIT (https://github.com/heathshults/heathshults.com/LICENSE)
 */

 
  let mainNav = document.querySelector("#mainNav");
  
  // Closes responsive menu when a scroll trigger link is clicked
  document.addEventListener('click', (e) => {
    let eventTarget = e.eventTarget;
    e.preventDefault;
    if (eventTarget.classList.contains('navbar-collapse')) {
      eventTarget.classList.add('hide');
    }
  });

  // Collapse Navbar
  function navbarCollapse() {
    if (mainNav.offsetTtop > 100) {
      mainNav.classList.add("navbar-shrink");
    } else {
      mainNav.classList.remove("navbar-shrink");
    }
  }

  // Collapse now if page is not at top
  navbarCollapse();
  
  // Collapse the navbar when page is scrolled
  window.onscroll = function(e) {
    e.preventDefault;
    document.querySelector("#mainNav").offsetTtop;
    navbarCollapse();
  };
  exports.navbarCollapse = navbarCollapse;
