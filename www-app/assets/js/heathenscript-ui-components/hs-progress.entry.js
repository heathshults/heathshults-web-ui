import { r as registerInstance, e as createEvent, h, g as getElement } from './index-5dda3f02.js';

const componentsProgressCss = ".hs-progress{display:block;overflow:hidden;color:#fff;text-align:center;background-color:#f2f2f4;border:0;border-radius:4px}.hs-progress.hs-progress--rounded{border-radius:30em}.hs-progress .hs-progress_bar[role=progressbar]{color:#fff;background-color:#74748c;display:block;float:left;height:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;border-radius:0}.hs-progress .hs-progress_bar[role=progressbar]::after{color:transparent !important;content:\"-\"}.hs-progress .hs-progress_bar[role=progressbar].hs-progress_bar--brand{color:#fff;background-color:#2c3e50}.hs-progress .hs-progress_bar[role=progressbar].hs-progress_bar--info{color:#fff;background-color:#4267ff}.hs-progress .hs-progress_bar[role=progressbar].hs-progress_bar--warning{color:#000;background-color:#ffa500}.hs-progress .hs-progress_bar[role=progressbar].hs-progress_bar--success{color:#fff;background-color:#088a05}.hs-progress .hs-progress_bar[role=progressbar].hs-progress_bar--error{color:#fff;background-color:#ee0202}";

const HSProgress = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onNotSame = createEvent(this, "notSame", 7);
        this.size = '';
    }
    onChangeBar(ev) {
        const progress = this.element.children[0];
        const value = ev.detail;
        const bar = ev.target;
        const idx = [].indexOf.call(progress.children, bar);
        this.onNotSame.emit(Object.assign({ idx }, value));
    }
    render() {
        const sizeClass = this.size ? `u-${this.size}` : '';
        const roundedClass = this.rounded ? `hs-progress--rounded` : '';
        return (h("div", { class: `hs-progress ${roundedClass} ${sizeClass}` }, h("slot", null)));
    }
    get element() { return getElement(this); }
};
HSProgress.style = componentsProgressCss;

export { HSProgress as hs_progress };
