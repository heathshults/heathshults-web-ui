import { r as registerInstance, h } from './index-3ae94ae7.js';

const hsButtonCss = ":host{}";

const HsButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("p", null, "Hello HsButton!")));
  }
};
HsButton.style = hsButtonCss;

export { HsButton as hs_button };
