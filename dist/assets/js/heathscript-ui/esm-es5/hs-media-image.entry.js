import { r as registerInstance, h } from './index-639a60d0.js';
var HSMediaImage = /** @class */ (function () {
    function HSMediaImage(hostRef) {
        registerInstance(this, hostRef);
    }
    HSMediaImage.prototype.render = function () {
        return (h("div", { class: "hs-media__image" }, h("img", { class: "hs-image", alt: this.alt, src: this.src })));
    };
    return HSMediaImage;
}());
export { HSMediaImage as hs_media_image };
