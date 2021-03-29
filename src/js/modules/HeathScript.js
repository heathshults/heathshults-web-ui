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
  
  let animatedCheckMark = `<svg class="svg-checkmark" x="0px" y="0px" viewBox="0 0 135 110" width="40px" height="50px"><path class="check" d="M126.8,14L55.7,85.1L29.2,63.4"/></svg>`;
  let slideButton = document.querySelector('#drag1');
  let dz = document.querySelector('.hs-dropzone');
  let arrows = document.querySelector('#arrows');

  // target elements with the "draggable" class
  interact('.draggable')
    .draggable({
      // enable inertial throwing
      inertia: true,
      // keep the element within the area of it's parent
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      // enable autoScroll
      autoScroll: true,

      listeners: {
        // call this function on every dragmove event
        move: dragMoveListener,

        // call this function on every dragend event
        end (event) {
          var textEl = event.target.querySelector('p');

          textEl && (textEl.textContent =
            'moved a distance of ' +
            (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                      Math.pow(event.pageY - event.y0, 2) | 0))
              .toFixed(2) + 'px');
        }
      }
    });

    function dragMoveListener (event) {
    var target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    }

    // this function is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener;
    /* The dragging code for '.draggable' from the demo above
    * applies to this demo as well so it doesn't have to be repeated. */

    // enable draggables to be dropped into this
    interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '#dragon1',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:

    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget;
      var dropzoneElement = event.target;

      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target');
      draggableElement.classList.add('can-drop');
      draggableElement.textContent = 'Dragged in';
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target');
      event.relatedTarget.classList.remove('can-drop');
      event.relatedTarget.textContent = 'Dragged out';
    },
    ondrop: function (event) {
      event.relatedTarget.textContent = 'Dropped';
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active');
      event.target.classList.remove('drop-target');
    }
    });

    interact('.drag-drop')
    .draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      autoScroll: true,
      // dragMoveListener from the dragging demo above
      listeners: { move: dragMoveListener }
    });









    // let animatedCheckMark = 
    //   `<svg class="svg-checkmark" x="0px" y="0px" viewBox="0 0 135 110" width="40px" height="50px">
    //       <path class="check" d="M126.8,14L55.7,85.1L29.2,63.4"/>
    //     </svg>`;
    // let slideButton;
    // let dz = document.querySelector('.hs-dropzone');
    // let arrows = document.querySelector('#arrows');

    // function makeDraggable(evt) {
    //   var svg = evt.target;
    //   svg.addEventListener('mousedown', startDrag);
    //   svg.addEventListener('mousemove', drag);
    //   svg.addEventListener('mouseup', endDrag);
    //   svg.addEventListener('mouseleave', endDrag);
    
   
    //   function onDragStart(ev) {
    //     ev.target.classList.id === 'drag1' ? slideButton = ev.target : '';
    //     ev.dataTransfer.setData("image/svg+xml", ev.target.id);
    //     ev.currentTarget.style.cursor = 'move';
    //     //  ev.currentTarget.style.background = 'yellow';
    //   }

    //   function onDragEnter(ev) {
    //     dz.classList.toggle('hs-dropzone-hover');
    //   }
    
    //   function onAllowDrop(ev) {
    //     ev.preventDefault();
    //     // dz.style.cursor = 'move';
    //     if (!dz.classList.contains('hs-dropzone-hover')) {
    //       dz.classList.toggle('hs-dropzone-hover');
    //     }
    //     if (!arrows.classList.contains('hs-fadeout')){
    //       arrows.classList.add('hs-fadeout');
    //     }
    //   }

    //   function onDrop(ev) {
    //     ev.preventDefault();
    //     var data = ev.dataTransfer.getData("image/svg+xml");
    //     ev.target.appendChild(document.getElementById(data));
    //     document.getElementById(data).classList.add('hs-fadeout');
    //     dz.classList.add('hs-dropzone-has-file');
    //   //  dz.innerHTML = animatedCheckMark;
    //   let checky = document.createElement('span');
    //   checky.classList.add('hs-animated-checkbox-container');
    //   checky.innerHTML = animatedCheckMark;
    //   dz.appendChild(checky);
    //   }

    //   function onDragLeave(ev) {
    //     arrows.classList.toggle('hs-fadeout');
    //   }
    // }
  };
