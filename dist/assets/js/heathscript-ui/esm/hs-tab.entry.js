import { r as registerInstance, h } from './index-639a60d0.js';

const componentsTabsCss = ".hs-tabs[role=tablist]{display:block}.hs-tabs__headings{display:-ms-flexbox;display:flex;text-align:center}.hs-tabs__nav{overflow:hidden}.hs-tabs__nav .hs-tabs__headings{margin-bottom:-1em;padding-bottom:1em;overflow-x:auto;overflow-y:hidden}.hs-tab-heading[role=tab]{width:auto;margin:0;padding:0;overflow:visible;color:inherit;font:inherit;line-height:normal;text-align:inherit;text-decoration:inherit;vertical-align:inherit;background:inherit;border:0;border-radius:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;-ms-flex:1;flex:1;margin:0;padding:1em;white-space:nowrap;border-bottom:0.25em solid transparent}.hs-tab-heading[role=tab]:disabled,.hs-tab-heading[role=tab][disabled]{cursor:not-allowed;opacity:0.5}.hs-tab-heading[role=tab]:not(:disabled):not([disabled]):active{background-color:transparent}.hs-tab-heading[role=tab]:not(:disabled):not([disabled]):not(:active):focus{border-color:#4267ff;-webkit-box-shadow:inset 0 0 0 2px #5173ff;box-shadow:inset 0 0 0 2px #5173ff}.hs-tab-heading[role=tab]:not(:disabled):not([disabled]):not(:active):hover{background-color:transparent}.hs-tab-heading[role=tab]:not(:disabled):not(.hs-tab-heading--active):hover{border-bottom-color:#7c7c93}.hs-tab-heading[role=tab].hs-tab-heading--active{border-bottom-color:#74748c}.hs-tab-heading[role=tab].hs-tab-heading--brand{width:auto;margin:0;padding:0;overflow:visible;color:inherit;font:inherit;line-height:normal;text-align:inherit;text-decoration:inherit;vertical-align:inherit;background:inherit;border:0;border-radius:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;-ms-flex:1;flex:1;margin:0;padding:1em;white-space:nowrap;border-bottom:0.25em solid transparent}.hs-tab-heading[role=tab].hs-tab-heading--brand:disabled,.hs-tab-heading[role=tab].hs-tab-heading--brand[disabled]{cursor:not-allowed;opacity:0.5}.hs-tab-heading[role=tab].hs-tab-heading--brand:not(:disabled):not([disabled]):active{background-color:transparent}.hs-tab-heading[role=tab].hs-tab-heading--brand:not(:disabled):not([disabled]):not(:active):focus{border-color:#4267ff;-webkit-box-shadow:inset 0 0 0 2px #5173ff;box-shadow:inset 0 0 0 2px #5173ff}.hs-tab-heading[role=tab].hs-tab-heading--brand:not(:disabled):not([disabled]):not(:active):hover{background-color:transparent}.hs-tab-heading[role=tab].hs-tab-heading--brand:not(:disabled):not(.hs-tab-heading--active):hover{border-bottom-color:#31465a}.hs-tab-heading[role=tab].hs-tab-heading--brand.hs-tab-heading--active{border-bottom-color:#2c3e50}.hs-tab-heading[role=tab].hs-tab-heading--info{width:auto;margin:0;padding:0;overflow:visible;color:inherit;font:inherit;line-height:normal;text-align:inherit;text-decoration:inherit;vertical-align:inherit;background:inherit;border:0;border-radius:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;-ms-flex:1;flex:1;margin:0;padding:1em;white-space:nowrap;border-bottom:0.25em solid transparent}.hs-tab-heading[role=tab].hs-tab-heading--info:disabled,.hs-tab-heading[role=tab].hs-tab-heading--info[disabled]{cursor:not-allowed;opacity:0.5}.hs-tab-heading[role=tab].hs-tab-heading--info:not(:disabled):not([disabled]):active{background-color:transparent}.hs-tab-heading[role=tab].hs-tab-heading--info:not(:disabled):not([disabled]):not(:active):focus{border-color:#4267ff;-webkit-box-shadow:inset 0 0 0 2px #5173ff;box-shadow:inset 0 0 0 2px #5173ff}.hs-tab-heading[role=tab].hs-tab-heading--info:not(:disabled):not([disabled]):not(:active):hover{background-color:transparent}.hs-tab-heading[role=tab].hs-tab-heading--info:not(:disabled):not(.hs-tab-heading--active):hover{border-bottom-color:#5173ff}.hs-tab-heading[role=tab].hs-tab-heading--info.hs-tab-heading--active{border-bottom-color:#4267ff}.hs-tab-heading[role=tab].hs-tab-heading--warning{width:auto;margin:0;padding:0;overflow:visible;color:inherit;font:inherit;line-height:normal;text-align:inherit;text-decoration:inherit;vertical-align:inherit;background:inherit;border:0;border-radius:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;-ms-flex:1;flex:1;margin:0;padding:1em;white-space:nowrap;border-bottom:0.25em solid transparent}.hs-tab-heading[role=tab].hs-tab-heading--warning:disabled,.hs-tab-heading[role=tab].hs-tab-heading--warning[disabled]{cursor:not-allowed;opacity:0.5}.hs-tab-heading[role=tab].hs-tab-heading--warning:not(:disabled):not([disabled]):active{background-color:transparent}.hs-tab-heading[role=tab].hs-tab-heading--warning:not(:disabled):not([disabled]):not(:active):focus{border-color:#4267ff;-webkit-box-shadow:inset 0 0 0 2px #5173ff;box-shadow:inset 0 0 0 2px #5173ff}.hs-tab-heading[role=tab].hs-tab-heading--warning:not(:disabled):not([disabled]):not(:active):hover{background-color:transparent}.hs-tab-heading[role=tab].hs-tab-heading--warning:not(:disabled):not(.hs-tab-heading--active):hover{border-bottom-color:#ffaa0f}.hs-tab-heading[role=tab].hs-tab-heading--warning.hs-tab-heading--active{border-bottom-color:#ffa500}.hs-tab-heading[role=tab].hs-tab-heading--success{width:auto;margin:0;padding:0;overflow:visible;color:inherit;font:inherit;line-height:normal;text-align:inherit;text-decoration:inherit;vertical-align:inherit;background:inherit;border:0;border-radius:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;-ms-flex:1;flex:1;margin:0;padding:1em;white-space:nowrap;border-bottom:0.25em solid transparent}.hs-tab-heading[role=tab].hs-tab-heading--success:disabled,.hs-tab-heading[role=tab].hs-tab-heading--success[disabled]{cursor:not-allowed;opacity:0.5}.hs-tab-heading[role=tab].hs-tab-heading--success:not(:disabled):not([disabled]):active{background-color:transparent}.hs-tab-heading[role=tab].hs-tab-heading--success:not(:disabled):not([disabled]):not(:active):focus{border-color:#4267ff;-webkit-box-shadow:inset 0 0 0 2px #5173ff;box-shadow:inset 0 0 0 2px #5173ff}.hs-tab-heading[role=tab].hs-tab-heading--success:not(:disabled):not([disabled]):not(:active):hover{background-color:transparent}.hs-tab-heading[role=tab].hs-tab-heading--success:not(:disabled):not(.hs-tab-heading--active):hover{border-bottom-color:#099906}.hs-tab-heading[role=tab].hs-tab-heading--success.hs-tab-heading--active{border-bottom-color:#088a05}.hs-tab-heading[role=tab].hs-tab-heading--error{width:auto;margin:0;padding:0;overflow:visible;color:inherit;font:inherit;line-height:normal;text-align:inherit;text-decoration:inherit;vertical-align:inherit;background:inherit;border:0;border-radius:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;-ms-flex:1;flex:1;margin:0;padding:1em;white-space:nowrap;border-bottom:0.25em solid transparent}.hs-tab-heading[role=tab].hs-tab-heading--error:disabled,.hs-tab-heading[role=tab].hs-tab-heading--error[disabled]{cursor:not-allowed;opacity:0.5}.hs-tab-heading[role=tab].hs-tab-heading--error:not(:disabled):not([disabled]):active{background-color:transparent}.hs-tab-heading[role=tab].hs-tab-heading--error:not(:disabled):not([disabled]):not(:active):focus{border-color:#4267ff;-webkit-box-shadow:inset 0 0 0 2px #5173ff;box-shadow:inset 0 0 0 2px #5173ff}.hs-tab-heading[role=tab].hs-tab-heading--error:not(:disabled):not([disabled]):not(:active):hover{background-color:transparent}.hs-tab-heading[role=tab].hs-tab-heading--error:not(:disabled):not(.hs-tab-heading--active):hover{border-bottom-color:#fd0202}.hs-tab-heading[role=tab].hs-tab-heading--error.hs-tab-heading--active{border-bottom-color:#ee0202}.hs-tabs__tab[role=tabpanel]{padding:1em}";

const Tab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const typeClass = this.type ? `hs-tabs__tab--${this.type}` : '';
        return (h("div", { role: "tabpanel", hidden: !this.open, class: `hs-tabs__tab ${typeClass}` }, h("slot", null)));
    }
};
Tab.style = componentsTabsCss;

export { Tab as hs_tab };
