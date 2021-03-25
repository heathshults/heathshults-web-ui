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


 // *====== DRAG and Drop Submit *======//


  window.onload = function anibutton() {
  //animated checkbox
    let animatedCheckMark = 
      `<svg class="svg-checkmark" x="0px" y="0px" viewBox="0 0 135 110" width="40px" height="50px">
          <path class="check" d="M126.8,14L55.7,85.1L29.2,63.4"/>
        </svg>`;
      
    
    let dz = document.querySelector('.hs-dropzone');
    let arrows = document.querySelector('#arrows');
    function onAllowDrop(ev) {
      ev.preventDefault();
      // dz.style.cursor = 'move';
      if (!dz.classList.contains('hs-dropzone-hover')) {
        dz.classList.toggle('hs-dropzone-hover');
      }
      if (!arrows.classList.contains('hs-fadeout')){
        arrows.classList.add('hs-fadeout');
      }
    }
    function onDragLeave(ev) {
      if (arrows.classList.contains('hs-fadeout')){
        arrows.classList.remove('hs-fadeout');
      }
    }

   
    function onDrag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
      ev.currentTarget.style.cursor = 'move';
      //  ev.currentTarget.style.background = 'yellow';
    }
   
    function onDrop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
      document.getElementById(data).classList.add('hs-fadeout');
      dz.classList.add('hs-dropzone-has-file');
    //  dz.innerHTML = animatedCheckMark;
    let checky = document.createElement('span');
    checky.classList.add('hs-animated-checkbox-container');
    checky.innerHTML = animatedCheckMark;
    dz.appendChild(checky);
    }
  };
