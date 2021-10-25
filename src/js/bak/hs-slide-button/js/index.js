var validateIssue = false;
            var slideButton = document.querySelector('#slideButton');
            var dropzone = document.querySelector('#dropzone')
            var arrows = document.querySelector('.hs-animated-arrow-container')
            var checky;
            var animatedCheckMark =
              `<svg class="svg-checkmark" x="0px" y="0px" viewBox="0 0 135 110" width="35px" height="43px">
    <path class="check" d="M126.8,14L55.7,85.1L29.2,63.4"/>
  </svg>`
            let x;
            let y;
            function dragstart(ev) {
              x = ev.offsetX;
              y = ev.offsetY;
              ev.dataTransfer.setData("text", ev.target.id);
            }

            function drag(ev) {
              e.target.style.cursor = 'url(/assets/img/star.svg)'
            }

            function dragend(ev) {
              
              
            }

            function dragenter(ev) {
              ev.preventDefault();
              arrows.style.opacity = '0';
            }

            function dragleave(ev) {
              
              arrows.style.opacity = '1';
            }

            function dragover(ev) {
              ev.preventDefault();
              dropzone.classList.add('drop-ready');
            }

            function drop(ev) {
              
              var data = ev.dataTransfer.getData("text");
              ev.target.appendChild(document.getElementById(data));
              slideButton.classList.remove('drop-ready');
              slideButton.classList.add('dropped');

              checky = document.createElement('span');
              checky.classList.add('hs-animated-checkbox-container');
              checky.innerHTML = animatedCheckMark;
              dropzone.appendChild(checky);
              dropzone.classList.add('border-white');
            }

            function resetSlideButton() {
              dropzone.classList.remove('dropped');
              dropzone.classList.remove('drop-ready');
              checky.remove();
              l(document.querySelector('.grid-left__inner'))
              document.querySelector('.grid-left__inner').appendChild(slideButton)
              dropzone.classList.remove('border-white');
              arrows.style.opacity = '1';
            }
