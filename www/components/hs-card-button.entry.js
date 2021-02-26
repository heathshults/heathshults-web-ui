import { r as registerInstance, e as createEvent, h, g as getElement } from './index-9897d625.js';
import { V as ValidURL } from './index-012f6e02.js';

const hsCardButtonCss = ":host .hs-card_button,:host .hs-card_button:visited{display:inline-block;padding:0.25rem 0.5rem;font-family:Roboto, Arial;font-size:1em;font-weight:400;color:#fff;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;user-select:none;background-color:#e12036;border:1px solid #cc1b30;border-radius:2px;box-shadow:0px 2px 3px 1px rgba(255, 255, 255, 0.45);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}:host .hs-card_button:hover,:host .hs-card_button:visited:hover{color:#fff;background:#e4364a;border:1px solid #fcf8e3;box-shadow:0px 1px 5px 1px rgba(204, 27, 48, 0.45)}:host .hs-card_button:active,:host .hs-card_button.active,:host .hs-card_button:visited:active,:host .hs-card_button:visited.active{color:#fff;background:#93ff7e;border:1px solid #68ff4b;box-shadow:0px 1px 5px 1px rgba(31, 75, 12, 0.45)}:host .hs-card_button:focus,:host .hs-card_button:visited:focus{color:#fff;background:#e4364a;border:1px solid #fcf8e3;outline:1px #fff dashed;box-shadow:0px 1px 5px 1px rgba(204, 27, 48, 0.45)}:host .hs-card_button--white{display:inline-block;padding:0.25rem 0.5rem;font-family:Roboto, Arial;font-size:1em;font-weight:400;color:#343a40;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;user-select:none;background-color:#f8f9fa;border:0px solid #ced4da;border-radius:0;box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.25);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}:host .hs-card_button--white:hover{color:#fff;background:#e12036;box-shadow:0px 3px 3px 0px rgba(0, 0, 0, 0.25), 0px 3px 3px 0px rgba(225, 32, 54, 0.25)}:host .hs-card_button--white:active,:host .hs-card_button--white.active{color:#fff;background:#93ff7e;border:1px solid #68ff4b;box-shadow:0px 1px 5px 1px rgba(31, 75, 12, 0.45)}:host .hs-card_button--white:focus{color:#495057;background:white;border:1px solid #b6182a;box-shadow:0px 1px 5px 1px rgba(204, 27, 48, 0.45)}";

const HSCardButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.modalLancher = createEvent(this, "modalLancher", 7);
  }
  launchModalEventHandler(event) {
    this.modalLancher.emit(event);
  }
  launchModalHandler() {
    // showModal(`#${this.clickTarget}`)
    const btn = this.el.shadowRoot.querySelector(`#${this.buttonId}`);
    btn.click();
    const modal = document.querySelector(this.dataTarget);
    modal.style.display = 'block';
  }
  async handleClick(event, url, urlParams, dataTarget) {
    event.preventDefault();
    if (typeof dataTarget === 'undefined') {
      this.handleLink(url, urlParams);
    }
    else {
      return;
    }
  }
  handleLink(url, urlParams) {
    if (typeof url !== 'undefined') {
      const validateUrl = ValidURL(url);
      if (validateUrl === true) {
        window.open(url, urlParams);
      }
    }
  }
  componentWillLoad() {
    if (this.dataTarget !== 'undefined') {
    }
    if (this.url) {
      this.onclicker = `(event: Event) => this.handleClick(event, ${this.url}, ${this.urlParams}, ${this.dataTarget})`;
    }
    if (typeof this.dataToggle === 'undefined' || this.dataToggle === null) {
      this.dataToggle = '';
    }
    if (typeof this.dataTarget === 'undefined' || this.dataTarget === null) {
      this.dataTarget = '';
    }
    setTimeout(() => {
    }, 2000);
  }
  render() {
    if (this.url) {
      this.onclicker = `(event: Event) => this.handleClick(event, ${this.url}, ${this.urlParams}, ${this.dataTarget})`;
    }
    if (typeof this.dataToggle === 'undefined' || this.dataToggle === null) {
      this.dataToggle = '';
    }
    if (typeof this.dataTarget === 'undefined' || this.dataTarget === null) {
      this.dataTarget = '';
    }
    return (h("button", { id: this.buttonId, class: this.cssClass, "data-bs-toggle": this.dataToggle, "data-bs-target": this.dataTarget, onClick: this.onclicker }, this.buttonText, h("slot", null)));
  }
  get el() { return getElement(this); }
};
HSCardButton.style = hsCardButtonCss;

export { HSCardButton as hs_card_button };
