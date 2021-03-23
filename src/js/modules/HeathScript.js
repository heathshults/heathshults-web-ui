/* eslint-disable no-undef, no-unused-vars */
"use strict";

/**
 * @author HeathShults.com - Heath Shults v1.0 (http://heathshults.com)
 * @version 1.0.0
 * @copyright 2020-2020 Heath-Shults
 * @license MIT (https://github.com/heathshults/heathshults.com/LICENSE)
 */

// ====== RANKING BARS
window.onload = (function() {
  var theBars = document.querySelectorAll('.hs-ranking-bar');
  theBars.forEach(aBar => {
    aBar.style = `width: ${aBar.getAttribute('aria-valuenow')}%`;
  });
})();

// ======* MODAL FUNCTION *====== //
function showModal(modal) {
  document.querySelector(modal).show();
}

function closeModal(modal) {
  document.querySelector(modal).close();
}

// ======* SCROLLSPY INIT & MENU FUNCTIONS *====== //

// SCROLLSPY
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#mainNav'
});

// NAVBAR EFFECTS


window.onscroll = function scrollFunction() {
  const navbarElement = document.querySelector('#mainNav');
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbarElement.classList.add('hs-navbar-semitransparent');
  } else {
    navbarElement.classList.remove('hs-navbar-semitransparent');
  }
};
