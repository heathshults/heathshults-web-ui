/* eslint-disable no-undef, no-unused-vars */
// const interact = require('interactjs');
"use strict";
/**
 * @author HeathShults.com - Heath Shults v1.0 (http://heathshults.com)
 * @version 1.0.0
 * @copyright 2020-2020 Heath-Shults
 * @license MIT (https://github.com/heathshults/heathshults.com/LICENSE)
 */
// ====== RANKING BARS

window.onload = function () {
  var theBars = document.querySelectorAll('.hs-ranking-bar');
  theBars.forEach(function (aBar) {
    aBar.style = "width: ".concat(aBar.getAttribute('aria-valuenow'), "%");
  });
}(); // ======* MODAL FUNCTION *====== //


function showModal(modal) {
  document.querySelector(modal).show();
}

function closeModal(modal) {
  document.querySelector(modal).close();
} // ======* SCROLLSPY INIT & MENU FUNCTIONS *====== //
// SCROLLSPY


var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#mainNav'
}); // NAVBAR EFFECTS

window.onscroll = function scrollFunction() {
  var navbarElement = document.querySelector('#mainNav');

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbarElement.classList.add('hs-navbar-semitransparent');
  } else {
    navbarElement.classList.remove('hs-navbar-semitransparent');
  }
}; // SHOW MORE SETTINGS


var ShowMoreSettings = {
  fbInitButtonText: 'Show More',
  fbOpenButtonText: 'Show Less',
  fbButtonWidth: '80px',
  fbBoxHeight: '100%',
  fbHeight: '35px',
  fbBoxPaddingBottom: '0',
  fbStartColor: 'rgba(255,255,255,1)',
  fbEndColor: 'rgba(255,255,255,1)'
};