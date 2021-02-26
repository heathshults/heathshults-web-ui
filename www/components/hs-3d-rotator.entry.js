import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-9897d625.js';

const hs3dRotatorCss = ".hs-vanish{opacity:0;transition:all 1s}.hs-3drotate__container{position:relative;width:100%}.hs-3drotate__scene{position:relative;min-width:170px;max-width:770px;min-height:100px;max-height:513px;margin:0 auto;border:1px solid transparent;perspective:1000px}.hs-3drotate{position:absolute;width:100%;height:100%;transition:transform 1s;transform:translateZ(-288px);transform-style:preserve-3d}.hs-3drotate__cell{position:absolute;top:10px;left:10px;min-width:190px;max-width:750px;min-height:120px;max-height:500px;font-size:80px;font-weight:bold;line-height:116px;color:white;text-align:center;border:2px solid black;transition:transform 1s, opacity 1s}.hs-3drotate__img{max-width:100%;height:auto}.hs-3drotate__cell:nth-child(9n+1){background:rgba(255, 0, 0, 0.8)}.hs-3drotate__cell:nth-child(9n+2){background:rgba(255, 170, 0, 0.8)}.hs-3drotate__cell:nth-child(9n+3){background:rgba(170, 255, 0, 0.8)}.hs-3drotate__cell:nth-child(9n+4){background:rgba(0, 255, 0, 0.8)}.hs-3drotate__cell:nth-child(9n+5){background:rgba(0, 255, 170, 0.8)}.hs-3drotate__cell:nth-child(9n+6){background:rgba(0, 170, 255, 0.8)}.hs-3drotate__cell:nth-child(9n+7){background:rgba(0, 0, 255, 0.8)}.hs-3drotate__cell:nth-child(9n+8){background:rgba(170, 0, 255, 0.8)}.hs-3drotate__cell:nth-child(9n+0){background:rgba(255, 0, 170, 0.8)}.hs-3drotate__cell:nth-child(1){transform:rotateY(0deg) translateZ(288px)}.hs-3drotate__cell:nth-child(2){transform:rotateY(40deg) translateZ(288px)}.hs-3drotate__cell:nth-child(3){transform:rotateY(80deg) translateZ(288px)}.hs-3drotate__cell:nth-child(4){transform:rotateY(120deg) translateZ(288px)}.hs-3drotate__cell:nth-child(5){transform:rotateY(160deg) translateZ(288px)}.hs-3drotate__cell:nth-child(6){transform:rotateY(200deg) translateZ(288px)}.hs-3drotate__cell:nth-child(7){transform:rotateY(240deg) translateZ(288px)}.hs-3drotate__cell:nth-child(8){transform:rotateY(280deg) translateZ(288px)}.hs-3drotate__nav .hs-3drotate__prev-button,.hs-3drotate__nav .hs-3drotate__next-button{position:absolute;top:50%;z-index:101;width:24px;height:24px;background-color:transparent;background-repeat:no-repeat;background-position:center center;background-size:70%;border:0;transform:translateY(-50%)}.hs-3drotate__nav .hs-3drotate__prev-button:hover,.hs-3drotate__nav .hs-3drotate__next-button:hover{background-color:hsla(var(--hs-color-5-h), var(--hs-color-5-s), var(--hs-color-5-l), 50%)}.hs-3drotate__nav .hs-3drotate__prev-button:focus,.hs-3drotate__nav .hs-3drotate__next-button:focus,.hs-3drotate__nav .hs-3drotate__prev-button:focus-within,.hs-3drotate__nav .hs-3drotate__next-button:focus-within{background-color:var(--hs-black_25);outline:1px solid hsla(var(--hs-color-5-h), var(--hs-color-5-s), var(--hs-color-5-l), 60%)}.hs-3drotate__nav{position:absolute;bottom:-12px;left:50%;z-index:100;display:inline-flex;flex:1 0 0%;justify-content:space-between;width:80%;padding:var(--space-md);background-color:var(--hs-black_75);transform:translateX(-50%);align-content:stretch}.hs-3drotate__nav .hs-3drotate__next-button{right:30px;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23f8f8f8'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")}.hs-3drotate__nav .hs-3drotate__next-button:hover,.hs-3drotate__nav .hs-3drotate__next-button:focus{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23f8f8f875'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")}.hs-3drotate__nav .hs-3drotate__cells-range{flex:0 1 60%;width:60%;margin:auto}.hs-3drotate__nav .hs-3drotate__prev-button{left:30px;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23f8f8f8'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\")}.hs-3drotate__nav .hs-3drotate__prev-button:hover,.hs-3drotate__nav .hs-3drotate__prev-button:focus{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23f8f8f875'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\")}@media (min-width: 0){.hs-3drotate__scene{position:relative;width:0.08px;max-width:100%;height:0.08px;margin:0 auto;transition:all 1s}.hs-3drotate__cell{width:0;max-width:100%;height:auto;max-height:0;transition:all 1s}.hs-3drotate__nav{width:0}}@media (min-width: 512px){.hs-3drotate__scene{position:relative;width:190.08px;max-width:100%;height:126.08px;margin:5 auto;transition:all 1s}.hs-3drotate__cell{width:190px;max-width:100%;height:auto;max-height:126px;transition:all 1s}.hs-3drotate__nav{width:95px}}@media (min-width: 768px){.hs-3drotate__scene{position:relative;width:400.08px;max-width:100%;height:266.08px;margin:10px auto;transition:all 1s}.hs-3drotate__cell{width:400px;max-width:100%;height:auto;max-height:266px;transition:all 1s}.hs-3drotate__nav{width:200px}}@media (min-width: 1024px){.hs-3drotate__scene{position:relative;width:600.08px;max-width:100%;height:399.08px;margin:20px auto;transition:all 1s}.hs-3drotate__cell{width:600px;max-width:100%;height:auto;max-height:399px;transition:all 1s}.hs-3drotate__nav{width:300px}}@media (min-width: 1280px){.hs-3drotate__scene{position:relative;width:800.08px;max-width:100%;height:533.08px;margin:30px auto;transition:all 1s}.hs-3drotate__cell{width:800px;max-width:100%;height:auto;max-height:533px;transition:all 1s}.hs-3drotate__nav{width:400px}}@media (min-width: 1440px){.hs-3drotate__scene{position:relative;width:1100.08px;max-width:100%;height:732.08px;margin:40px auto;transition:all 1s}.hs-3drotate__cell{width:1100px;max-width:100%;height:auto;max-height:732px;transition:all 1s}.hs-3drotate__nav{width:550px}}";

const HS3dRotator = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.resolved = createEvent(this, "resolved", 7);
    this.fetcherror = createEvent(this, "fetcherror", 7);
    // Fetch the data
    this.headers = new Headers();
    this.method = 'GET';
    this.url = '';
    this.available = false;
  }
  get update3DRotator() {
    return this._update3DRotator;
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  set update3DRotator(value) {
    this._update3DRotator = value;
  }
  componentWillLoad() {
    // this.makeRequest();
    setTimeout(() => {
      this.HSThreeDRotator = this.el.shadowRoot.querySelector('.hs-threeDRotator');
      const cells = this.el.shadowRoot.querySelectorAll('.hs-threeDRotator__cell');
      const orientationRadios = this.el.shadowRoot.querySelectorAll('input[name="orientation"]');
      const checkedRadio = this.el.shadowRoot.querySelector('input[name="orientation"]:checked');
      const cellsRange = this.el.shadowRoot.querySelector('.cells-range');
      // console.log(this.HSThreeDRotator);
      if (self.fetch) {
        this.available = true;
        const options = {
          method: this.method,
          headers: new Headers(this.headers),
        };
        this.request = new Request(this.url, options);
      }
      fetch(this.request)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        console.log(this.HSThreeDRotator);
        for (const item of data) {
          const cellContentContainer = document.createElement('div');
          cellContentContainer.classList.add('hs-threeDRotator__cell');
          const img = document.createElement('img');
          img.classList.add('hs-threeDRotator-img');
          img.src = item.path;
          img.alt = item.alt;
          this.HSThreeDRotator.appendChild(cellContentContainer);
          cellContentContainer.appendChild(img);
        }
      })
        .catch(console.error);
      this.HSThreeDRotator = this.el.shadowRoot.querySelector('.hs-threeDRotator');
      const rotatorWrap = this.HSThreeDRotator;
      let selectedIndex = 0;
      let cellSize;
      this.cellWidth = rotatorWrap.offsetWidth;
      this.cellHeight = rotatorWrap.offsetHeight;
      let isHorizontal = true;
      let rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
      let radius;
      let theta;
      console.log(this.cellWidth, this.cellHeight);
      function rotateCarousel() {
        const angle = theta * selectedIndex * -1;
        rotatorWrap.style.transform = 'translateZ(' + -radius + 'px) ' +
          rotateFn + '(' + angle + 'deg)';
      }
      const prevButton = this.el.shadowRoot.querySelector('.previous-button');
      prevButton.addEventListener('click', function () {
        selectedIndex--;
        rotateCarousel();
      });
      const nextButton = this.el.shadowRoot.querySelector('.next-button');
      nextButton.addEventListener('click', function () {
        selectedIndex++;
        rotateCarousel();
      });
      this.update3DRotator = () => {
        this.cellWidth = rotatorWrap.offsetWidth;
        this.cellHeight = rotatorWrap.offsetHeight;
        console.log(this.cellHeight);
        this.cellCount = cellsRange.value;
        theta = 360 / this.cellCount;
        cellSize = isHorizontal ? this.cellWidth : this.cellHeight;
        radius = Math.round((cellSize / 2) / Math.tan(Math.PI / this.cellCount));
        cells.forEach((cell, i) => {
          if (i < this.cellCount) {
            // visible cell
            cell.classList.add('opacity-max');
            const cellAngle = theta * i;
            cell.style.transform = `${rotateFn}(${cellAngle}deg) translateZ(${radius}px)`;
          }
          else {
            // hidden cell
            cell.classList.remove('opacity-max');
            cell.classList.add('opacity-none');
            cell.style.transform = 'none';
          }
        });
        return rotateCarousel();
      };
      function accessUpdater() {
        this.HSThreeDRotator = this.el.shadowRoot.querySelector('.hs-threeDRotator');
        this.cellWidth = this.HSThreeDRotator.offsetWidth;
        this.cellHeight = this.HSThreeDRotator.offsetHeight;
        console.log(this.cellHeight);
        this.cellCount = cellsRange.value;
        theta = 360 / this.cellCount;
        cellSize = isHorizontal ? this.cellWidth : this.cellHeight;
        radius = Math.round((cellSize / 2) / Math.tan(Math.PI / this.cellCount));
        cells.forEach((cell, i) => {
          if (i < this.cellCount) {
            // visible cell
            cell.classList.add('opacity-max');
            const cellAngle = theta * i;
            cell.style.transform = `${rotateFn}(${cellAngle}deg) translateZ(${radius}px)`;
          }
          else {
            // hidden cell
            cell.classList.remove('opacity-max');
            cell.classList.add('opacity-none');
            cell.style.transform = 'none';
          }
        });
        return rotateCarousel();
      }
      cellsRange.addEventListener('change', this.update3DRotator);
      cellsRange.addEventListener('input', this.update3DRotator);
      (function () {
        for (let i = 0; i < orientationRadios.length; i++) {
          const radio = orientationRadios[i];
          radio.addEventListener('change', onOrientationChange);
        }
      })();
      function onOrientationChange() {
        isHorizontal = checkedRadio.value == 'horizontal';
        rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        accessUpdater();
      }
      // set initials
      onOrientationChange();
    }, 2000);
  }
  resizeHandler(event) {
    console.log(event);
    this.update3DRotator;
  }
  render() {
    return (h(Host, null, h("div", { class: "container hs-3drotate-conainer" }, h("div", { class: "scene" }, h("div", { class: "col hs-rotate3d-nav text-center" }, h("button", { class: "hs-rotate3d-prev previous-button" }), h("input", { class: "cells-range", type: "range", min: this.minCells, max: this.maxCells, value: this.startCellCount }), h("button", { class: "hs-rotate3d-next next-button" })), h("div", { class: "hs-threeDRotator" })), h("div", { class: "hs-threeDRotator-options" }, "Orientation:", h("label", null, h("input", { type: "radio", name: "orientation", value: "horizontal", checked: true }), "horizontal"), h("label", null, h("input", { type: "radio", name: "orientation", value: "vertical" }), "vertical")))));
  }
  get el() { return getElement(this); }
};
HS3dRotator.style = hs3dRotatorCss;

export { HS3dRotator as hs_3d_rotator };
