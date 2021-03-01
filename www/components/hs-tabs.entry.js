import { r as registerInstance, e as createEvent, h, g as getElement } from './index-3ae94ae7.js';

const componentsCardsCss = ".hs-card{position:relative;align-items:center;min-width:0;height:100%;max-height:100%;margin:0 auto;overflow:hidden;word-wrap:break-word;background-clip:content-box;border:1px}.hs-card .hs-display-block{display:block}.hs-card .hs-display-none{display:none}.hs-card.dark{background:#1e2e3e}.hs-card .list-group{border-top:inherit;border-bottom:inherit}.hs-card .list-group:first-child{border-top-width:0;border-top-left-radius:0.125rem;border-top-right-radius:0.125rem}.hs-card .list-group:last-child{border-bottom-width:0;border-bottom-right-radius:0.125rem;border-bottom-left-radius:0.125rem}.hs-card>hr{margin-right:0;margin-left:0}.hs-card .hs-card-deck .hs-card{margin-bottom:15px}@media (min-width: 576px){.hs-card .hs-card-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.hs-card .hs-card-deck .hs-card{flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}@media (min-width: 768px){.hs-card .hs-card{margin:inherit}.hs-card .hs-card--sm{display:inline-block;min-width:265px;max-width:100%;height:auto;margin:5px auto}.hs-card .hs-card--lg{display:inline-block;width:400px;height:auto;margin:5px auto}.hs-card .hs-card--fluid{display:inline-block;width:100%;height:auto;margin:5px auto}}@media (min-width: 1024px){.hs-card .hs-card{margin:5px auto}.hs-card .hs-card--sm{display:inline-block;width:265px;height:auto;margin:5px auto}.hs-card .hs-card--sm .hs-card_title{font-size:1rem}.hs-card .hs-card--md{display:inline-block;width:400px;max-width:100%;height:auto;margin:5px auto}.hs-card .hs-card--lg{display:inline-block;width:600px;height:auto;margin:5px auto}.hs-card .hs-card--fluid{display:inline-block;width:100%;height:auto;margin:5px auto}}@media (min-width: 1280px){.hs-card .hs-card{margin:inherit}.hs-card .hs-card--sm{display:inline-block;width:265px;margin:5px auto}.hs-card .hs-card--md{display:inline-block;width:500px;height:auto;margin:5px auto}.hs-card .hs-card--lg{display:inline-block;width:80%;height:auto;margin:5px auto}.hs-card .hs-card--fluid{display:inline-block;width:100%;height:auto;margin:5px auto}}.hs-card .hs-card-deck .hs-card{margin-bottom:15px}@media (min-width: 1024px){.hs-card .hs-card>.hs-card_header{display:flex;align-items:center;width:100%;max-height:calc(100% - 8px)}}@media (min-width: 768px){.hs-card .hs-card>.hs-card_header{position:relative;display:flex;align-items:center;width:100%;height:auto;max-height:100%}.hs-card .hs-card-deck{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.hs-card .hs-card-deck .hs-card{-ms-flex:1 0 0%;flex:1 0 0%;margin-right:15px;margin-bottom:15px;margin-left:15px}.hs-card .hs-card-group{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap}.hs-card .hs-card-group>.hs-card{-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:15px}.hs-card .hs-card-group>.hs-card+.hs-card{margin-left:0;border-left:0}.hs-card .hs-card-group>.hs-card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.hs-card .hs-card-group>.hs-card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.hs-card .hs-card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.hs-card .hs-card-columns .hs-card{display:inline-block;width:100%}.hs-card .hs-skills-logo{max-width:100%;max-height:65px;vertical-align:middle}}.hs-card .hs-dev-logo{vertical-align:middle;filter:grayscale(60%);opacity:0.5}.hs-card .hs-logo-row--footer{display:flex;flex-direction:row;align-items:center;justify-content:center;max-height:96px;padding:0.5rem}.hs-card .hs-logo-row--footer .hs-dev-logo{width:24px;vertical-align:middle}.hs-card .hs-skills-logo{max-width:100%;vertical-align:middle}.hs-card .hs-divider{display:flex;height:30px}.hs-card .hs-card_text:last-child{margin-bottom:0}.hs-card .hs-card_link+.hs-card_link{margin-left:1.25rem}.hs-card .hs-card-deck .hs-card{margin-bottom:15px}.hs-card .hs-card-group>.hs-card{margin-bottom:15px}.hs-card .hs-card_columns .hs-card{margin-bottom:0.75rem}.hs-card .accordion>.hs-card{overflow:hidden}.hs-card .accordion>.hs-card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.hs-card .accordion>.hs-card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.hs-card .accordion>.hs-card>.hs-card_header{border-radius:0;margin-bottom:-1px}";

const Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onUpdated = createEvent(this, "updated", 7);
  }
  componentWillLoad() {
    this.tabs = Array.from(this.elem.querySelectorAll('hs-tab'));
  }
  async currentTab() {
    return this.tabs.findIndex((tab) => tab.open);
  }
  async openTab(tabIndex) {
    if (!this.tabs[tabIndex].disabled) {
      this.tabs = this.tabs.map((tab) => {
        tab.open = false;
        return tab;
      });
      this.tabs[tabIndex].open = true;
      this.onUpdated.emit({ idx: tabIndex });
    }
  }
  render() {
    return (h("div", { class: "hs-tabs" }, h("div", { role: "tablist", class: "hs-tabs" }, h("div", { class: "hs-tabs__nav" }, h("div", { class: "hs-tabs__headings" }, this.tabs.map((tab, i) => {
      const openClass = tab.open ? 'hs-tab-heading--active' : '';
      const typeClass = tab.type ? `hs-tab-heading--${tab.type}` : '';
      return (h("button", { role: "tab", disabled: tab.disabled, class: `hs-tab-heading ${typeClass} ${openClass}`, onClick: () => this.openTab(i) }, tab.header));
    }))), h("slot", null))));
  }
  get elem() { return getElement(this); }
};
Tabs.style = componentsCardsCss;

export { Tabs as hs_tabs };
