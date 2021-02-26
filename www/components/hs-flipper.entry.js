import { r as registerInstance, h, g as getElement } from './index-9897d625.js';

const componentsHsFlipperCss = ".hs-flipper{float:left;perspective:1000px}.hs-flipper_front,.hs-flipper_back{position:absolute;width:inherit;height:inherit;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden}.hs-flipper_front{z-index:900;transform:rotate3d(0, 0, 0, 0deg)}.hs-flipper--flipped .hs-flipper_front{z-index:900;-ms-transform:rotateY(180deg);transform:rotate3d(0, 1, 0, 180deg)}.hs-flipper_back{z-index:800;transform:rotate3d(0, 1, 0, -180deg)}.hs-flipper--flipped .hs-flipper_back{z-index:1000;transform:rotate3d(0, 0, 0, 0deg)}";

const HsFlipper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.events = { flipperEvents: [], flipperBackEvents: [] };
  }
  // private options = { duration: 400, timingFunction: 'ease-in' };
  componentWillLoad() {
    this.init();
  }
  /**
   * add options to the element (duration, timingfunction).
   */
  componentDidLoad() {
    const duration = this.flipperDuration || 400;
    const timingFunction = this.flipperTimingFunction || 'ease-in';
    ['front', 'back']
      .forEach(key => {
      const el = this.element.querySelector(`.hs-flipperpy__${key}`);
      el['style'].transition = `all ${duration / 1000}s ${timingFunction}`;
    });
  }
  /**
   * handling the `is-flipperped` attribute.
   * usually this is used together with modern frameworks.
   */
  componentWillUpdate() {
    if (this.isflipperped !== undefined) {
      this.flipperState = this.isflipperped;
    }
  }
  init() {
    if (this.isflipperped !== undefined) {
      this.flipperState = this.isflipperped;
    }
    else if (this.flipperEvents !== undefined) {
      ['flipperEvents', 'flipperBackEvents'].forEach(key => {
        this.events[key] = (this[key]) ?
          this[key].split(',') :
          [];
      });
      // adding event listeners
      const allEvents = [...this.events.flipperEvents, ...this.events.flipperBackEvents];
      allEvents
        .filter((eventType, index) => allEvents.indexOf(eventType) === index)
        .forEach(eventType => this.element.addEventListener(eventType, (evt) => this.processflipper(evt)));
      this.flipperState = false;
    }
  }
  processflipper(evt) {
    const eventType = evt.type;
    if (this.flipperState && this.events.flipperBackEvents.indexOf(eventType) !== -1) {
      this.flipperState = !this.flipperState;
    }
    else if (!this.flipperState && this.events.flipperEvents.indexOf(eventType) !== -1) {
      this.flipperState = !this.flipperState;
    }
  }
  render() {
    return (h("div", { class: `hs-flipperpy ${(this.flipperState ? 'hs-flipperpy--flipperped' : '')}` }, h("div", { class: "hs-flipperpy__front" }, h("slot", { name: "front" })), h("div", { class: "hs-flipperpy__back" }, h("slot", { name: "back" }))));
  }
  get element() { return getElement(this); }
};
HsFlipper.style = componentsHsFlipperCss;

export { HsFlipper as hs_flipper };
