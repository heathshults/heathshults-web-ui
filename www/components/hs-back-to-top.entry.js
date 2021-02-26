import { r as registerInstance, e as createEvent, h } from './index-9897d625.js';

const BackToTop = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onBackToTop = createEvent(this, "backtotop", 7);
  }
  enable() {
    this._isOpen = window.scrollY > window.innerHeight;
  }
  goUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.onBackToTop.emit();
  }
  render() {
    const visibleCss = !this._isOpen ? 'hs-display-none' : '';
    const positionCss = this.position ? `hs-back-to-top--${this.position}` : '';
    return (h("div", { class: `hs-back-to-top ${positionCss} ${visibleCss}` }, h("button", { class: "hs-button hs-button--nude", onClick: () => {
        this.goUp();
      } }, h("slot", null))));
  }
};

export { BackToTop as hs_back_to_top };
