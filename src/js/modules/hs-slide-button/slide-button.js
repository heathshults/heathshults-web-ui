"use strict";
exports.__esModule = true;
exports.SlideButton = void 0;
var l = console.log;
var SlideButton = /** @class */ (function () {
    function SlideButton(slideButton, dropzone, arrows) {
        if (slideButton === void 0) { slideButton = document.querySelector('#slideButton'); }
        if (dropzone === void 0) { dropzone = document.querySelector('#dropzone'); }
        if (arrows === void 0) { arrows = document.querySelector('.hs-animated-arrow-container'); }
        this.slideButton = slideButton;
        this.dropzone = dropzone;
        this.arrows = arrows;
        this.slideButton = slideButton;
        this.dropzone = dropzone;
        this.arrows = arrows;
        l(this.slideButton);
        l(this.dropzone);
    }
    /**
     * When the slide-button begins to be dragged
     * @param  {DragEvent} e
     * @return {void}@memberof SlideButton
     */
    SlideButton.prototype.dragstart = function (ev) {
        var eventtarget = ev.target;
        ev.dataTransfer.setData("text", eventtarget.id);
        eventtarget.classList.add('drag-start');
        this.dropzone.classList.add('dropzone-indicator');
        setTimeout(function () {
            eventtarget.classList.add('invisible');
        }, 0);
    };
    /**
     * When the slide-button stops getting dragged
     * @param  {DragEvent} e
     * @return {void}@memberof SlideButton
     */
    SlideButton.prototype.dragend = function (ev) {
        ev.preventDefault();
        var evtarget = ev.target;
        evtarget.classList.remove('dropped');
        evtarget.classList.remove('drag_start');
        this.dropzone.classList.remove('dropzone-indicator');
    };
    /**
     * When the slide-button is first touching the dropzone
     * @param  {DragEvent} e
     * @return {void}@memberof SlideButton
     */
    SlideButton.prototype.dragenter = function (ev) {
        ev.preventDefault();
        this.arrows.style.opacity = '0';
    };
    /**
     * When the slide-button is dragged back out of the dropzone
     * @param  {DragEvent} e
     * @return {void}@memberof SlideButton
     */
    SlideButton.prototype.dragleave = function (ev) {
        ev.preventDefault();
        this.arrows.style.opacity = '1';
    };
    /**
     * When the slide-button is directly over the dropzone and ready to be dropped
     * @param  {DragEvent} e
     * @return {void}@memberof SlideButton
     */
    SlideButton.prototype.dragover = function (ev) {
        ev.preventDefault();
        var evtarget = ev.target;
        evtarget.classList.add('drop-ready');
    };
    /**
     * When the slide-button is dropped into the dropzone
     * @return {void}@memberof SlideButton
     */
    SlideButton.prototype.drop = function (ev) {
        ev.preventDefault();
        var animatedCheckMark = "<svg class=\"svg-checkmark\" x=\"0px\" y=\"0px\" viewBox=\"0 0 135 110\" width=\"35px\" height=\"43px\">\n      <path class=\"check\" d=\"M126.8,14L55.7,85.1L29.2,63.4\"/>\n    </svg>";
        var data = ev.dataTransfer.getData("text");
        var evtarget = ev.target;
        evtarget.appendChild(document.getElementById(data));
        this.slideButton.classList.remove('drop-ready');
        this.slideButton.classList.add('dropped');
        var checky = document.createElement('span');
        checky.classList.add('hs-animated-checkbox-container');
        checky.innerHTML = animatedCheckMark;
        evtarget.appendChild(checky);
        evtarget.classList.add('border-white');
    };
    SlideButton.init = function () {
        return new this();
    };
    return SlideButton;
}());
exports.SlideButton = SlideButton;
document
    .addEventListener('load', SlideButton.init());
