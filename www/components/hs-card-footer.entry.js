import { r as registerInstance, h } from './index-b5bbd2bc.js';

const hsCardFooterCss = ".hs-card_footer{display:flex;flex-basis:100%;width:100%;padding:0;overflow:hidden;font-size:0.84rem;line-height:1.2;background-color:#fff;border-top:1px solid rgba(0, 0, 0, 0.125)}.hs-card_footer .hs-card_content{width:95%;padding:0.5em;margin:auto;font-size:0.84rem;line-height:1.2;text-align:left}.hs-card_footer:last-child{border-radius:0 0 0.125rem 0.125rem}.hs-card_footer.dark{background-color:#1e2e3e}.hs-card_footer .hs-logo-row--footer ul.flex-container.space-between{display:flex;align-items:center;max-width:90%;padding:0;margin:0;list-style:none}.hs-card_footer .hs-logo-row--footer ul.flex-container.space-between li.flex-item{display:inline-block;flex:1 1 auto;width:auto}.hs-card_footer:not(:last-child){border-bottom-right-radius:0}.hs-card_footer:not(:first-child){border-bottom-left-radius:0}.footer-logos{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;padding:10px;margin:0px 10px;margin-block-start:0px;margin-block-end:0px;padding-inline-start:0px;padding-inline-end:0px;list-style:none}.footer-logos .flex-item{flex:none}";

const HSCardFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    // return typeof this.colorTone === 'undefined' || typeof this.colorTone === null || this.colorTone === 'light' ? this.colorToneClass = 'light' :
    //   this.colorTone === 'dark' ? this.colorToneClass = 'dark' : this.colorToneClass = 'light';
  }
  render() {
    return (h("footer", { class: "hs-card_footer w-100" }, h("div", { class: "hs-card_content" }, h("slot", null))));
  }
};
HSCardFooter.style = hsCardFooterCss;

export { HSCardFooter as hs_card_footer };
