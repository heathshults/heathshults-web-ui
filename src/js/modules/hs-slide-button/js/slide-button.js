export default class SlideButton {
    static dragondrop() {
        const l = console.log;
        const validateIssue = false;
        const slideButton = document.querySelector('#slideButton');
        l(slidedeButton);
        const dropzone = document.querySelector('#dropzone');
        l(dropzone);
        const arrows = document.querySelector('.hs-animated-arrow-container');
        const animatedCheckMark = `<svg class="svg-checkmark" x="0px" y="0px" viewBox="0 0 135 110" width="35px" height="43px"><path class="check" d="M126.8,14L55.7,85.1L29.2,63.4"/></svg>`;
        let eventtarget;
        let checky;
        let x;
        let y;
        slideButton.setAttribute('ondragstart', dragonstart(event));
        slideButton.addEvensetAttributetListener('ondrag', drag(event));
        slideButton.setAttribute('ondragend', dragonend(event));
        dropzone.addEventListener('dragenter', dragonenter(event));
        dropzone.addEventListener('dragleave', dragonleave(event));
        dropzone.addEventListener('dragover', dragonover(event));
        dropzone.addEventListener('drop', drop(event));
        function dragonstart(ev) {
            eventtarget = ev.target;
            x = ev.offsetX;
            y = ev.offsetY;
            eventtarget.dataTransfer.setData('text', eventtarget.id);
            return;
        }
        function drag(ev) {
            eventtarget = ev.target;
            eventtarget.style.cursor = 'url(/assets/img/star.svg)';
            return;
        }
        function dragend(ev) {
            eventtarget = ev.target;
            return;
        }
        function dragonenter(ev) {
            ev.preventDefault();
            arrows.style.opacity = '0';
            return;
        }
        function dragonleave(ev) {
            arrows.style.opacity = '1';
            return;
        }
        function dragonover(ev) {
            ev.preventDefault();
            eventtarget = ev.target;
            eventtarget.classList.add('drop-ready');
            return;
        }
        function drop(ev) {
            ev.stopPropagation();
            eventtarget = ev.target;
            const data = ev.dataTransfer.getData('text');
            eventtarget.appendChild(document.getElementById(data));
            eventtarget.classList.remove('drop-ready');
            eventtarget.classList.add('dropped');
            checky = document.createElement('span');
            checky.classList.add('hs-animated-checkbox-container');
            checky.innerHTML = animatedCheckMark;
            eventtarget.appendChild(checky);
            eventtarget.classList.add('border-white');
            return false;
        }
        function resetSlideButton() {
            dropzone.classList.remove('dropped');
            dropzone.classList.remove('drop-ready');
            checky.remove();
            document.querySelector('.grid-left__inner').appendChild(slideButton);
            dropzone.classList.remove('border-white');
            arrows.style.opacity = '1';
        }
        return;
    }
}
document.addEventListener('load', SlideButton.dragondrop());
