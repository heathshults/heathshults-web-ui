var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Element, Prop, Event, Listen, h } from '@stencil/core';
let HSCard = class HSCard {
    constructor() {
        this.callback = (() => { if (typeof this.cb === 'function')
            return this.cb(); });
    }
    launchModalEvent(event) {
        this.launchModal.emit(event);
    }
    launchModalHandler(target) {
        // showModal(`#${this.clickTarget}`)
        //@ts-ignore: does not exist on type
        this.clickTarget ? document.querySelector(target).show() : alert('no target parameter');
    }
    cb() {
        return;
    }
    getElements() {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    this.theElements();
                    this.cardHeaderImg = this.el.shadowRoot.querySelector('#hsHeaderImg');
                    this.cardContent.classList.add(`hs-card-size${this.cardSize}`);
                    this.cardImgHeaderImg.classList.contains('hs-card_img-header_img--sm') ? (this.cardHeaderImg.style.width = '265px') && (this.overlay.style.width = '265px')
                        : this.cardImgHeaderImg.classList.contains('hs-card_img-header_img--lg') ? (this.cardHeaderImg.style.width = '400px') && (this.overlay.style.width = '400px')
                            : this.cardImgHeaderImg.classList.contains('hs-card_img-header_img--fluid') ? (this.cardHeaderImg.style.width = '100%') && (this.overlay.style.width = '100%')
                                : (this.cardImgHeaderImg.style.width = '100%') && (this.overlay.style.width = '100%');
                    resolve(this.callback);
                }, 3000);
            }
            catch (error) {
                let fullErrorMsg = `Error in getElements(): ${error}`;
                reject(console.log('getElements error: ' + fullErrorMsg));
            }
        });
    }
    theElements() {
        return new Promise((resolve, reject) => {
            try {
                this.cardContent = document.querySelector('.hs-card_content');
                this.overlay = this.el.shadowRoot.querySelector('#imgHeaderOverlay');
                this.cardImgHeaderImg = this.el.shadowRoot.querySelector('#hsHeaderImg');
                resolve(this.callback);
            }
            catch (error) {
                reject('Reject because: ' + error);
            }
        });
    }
    componentWillLoad() {
        typeof this.colorTone === 'undefined' || typeof this.colorTone === null || this.colorTone === 'light' ? this.colorToneClass = 'light' :
            this.colorTone === 'dark' ? this.colorToneClass = 'dark' : this.colorToneClass = 'light';
    }
    render() {
        this.getElements().then(this.callback);
        return (h("div", { id: this.cardId, class: `hs-card hs-card-size${this.cardSize} ${this.colorTone}` },
            h("header", { class: `hs-card_header hs-card_header${this.cardSize}` },
                h("a", { id: "imgHeaderOverlay", class: `hs-overlay hs-card_img-header_overlay${this.cardSize}`, href: "#", onClick: () => this.launchModalHandler(`${this.modalId}`) },
                    h("img", { id: "hsHeaderImg", src: `${this.imgPath}`, class: `hs-card_img-header_img${this.cardSize}`, alt: "header image" })),
                h("slot", { name: "card-header" })),
            h("div", { class: `hs-card_body hs-card-size${this.cardSize}` },
                h("slot", { name: "card-body" })),
            h("div", { class: `hs-card_footer row m-0 d-flex w-100 ${this.colorToneClass} p-0` },
                h("div", { class: "col-md-12 hs-logo-row--footer" },
                    h("ul", { class: "flex-container space-between" },
                        h("li", { class: "flex-item" },
                            h("img", { src: "/assets/img/logos/dmHTML5_Logo_512.png", class: "hs-dev-logo", width: "24", alt: "HTML5 logo" })),
                        h("li", { class: "flex-item" },
                            h("img", { src: "/assets/img/logos/Sass-150.png", class: "hs-dev-logo", width: "24", alt: "sass logo" })),
                        h("li", { class: "flex-item" },
                            h("img", { src: "/assets/img/logos/dm-css3-150.png", class: "hs-dev-logo", width: "24", alt: "css logo" })),
                        h("li", { class: "flex-item" },
                            h("img", { src: "/assets/img/logos/js-logo.jpg", class: "hs-dev-logo", width: "24", alt: "javascript logo" })),
                        h("li", { class: "flex-item" },
                            h("img", { src: "/assets/img/logos/dm-Node.png", class: "hs-dev-logo", width: "24", alt: "node js logo" })),
                        h("li", { class: "flex-item" },
                            h("img", { src: "/assets/img/logos/gulp-150.png", class: "hs-dev-logo", width: "24", alt: "gulp logo" })),
                        h("li", { class: "flex-item" },
                            h("img", { src: "/assets/img/logos/dm-Git-logo.png", class: "hs-dev-logo", width: "24", alt: "git logo" })))))));
    }
};
__decorate([
    Element()
], HSCard.prototype, "el", void 0);
__decorate([
    Prop()
], HSCard.prototype, "cardImgHeaderImg", void 0);
__decorate([
    Prop()
], HSCard.prototype, "cardContent", void 0);
__decorate([
    Prop({ reflect: true })
], HSCard.prototype, "cardWidth", void 0);
__decorate([
    Prop({ reflect: true })
], HSCard.prototype, "cardHeight", void 0);
__decorate([
    Prop({ reflect: true })
], HSCard.prototype, "colorTone", void 0);
__decorate([
    Prop({ reflect: true })
], HSCard.prototype, "colorToneClass", void 0);
__decorate([
    Prop({ reflect: true })
], HSCard.prototype, "cardId", void 0);
__decorate([
    Prop({ reflect: true })
], HSCard.prototype, "cardSize", void 0);
__decorate([
    Prop()
], HSCard.prototype, "cardHeader", void 0);
__decorate([
    Prop()
], HSCard.prototype, "cardHeaderImg", void 0);
__decorate([
    Prop()
], HSCard.prototype, "overlay", void 0);
__decorate([
    Prop()
], HSCard.prototype, "imgElem", void 0);
__decorate([
    Prop({ reflect: true })
], HSCard.prototype, "modalId", void 0);
__decorate([
    Prop({ reflect: true })
], HSCard.prototype, "imgPath", void 0);
__decorate([
    Prop()
], HSCard.prototype, "clickTarget", void 0);
__decorate([
    Event()
], HSCard.prototype, "launchModal", void 0);
__decorate([
    Listen('launchModal')
], HSCard.prototype, "launchModalHandler", null);
HSCard = __decorate([
    Component({
        tag: 'hs-card',
        styleUrl: '../../scss/components/components.cards.scss',
        shadow: true,
    })
], HSCard);
export { HSCard };
