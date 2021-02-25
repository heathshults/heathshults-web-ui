import { r as registerInstance, h } from './index-efdc126d.js';

const HSMediaImage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "hs-media_image" }, h("img", { class: "hs-image", alt: this.alt, src: this.src })));
    }
};

export { HSMediaImage as hs_media_image };
