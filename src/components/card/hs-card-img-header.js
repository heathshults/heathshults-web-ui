var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Element, Prop, Event, Listen, h } from '@stencil/core';
let HSCardImgHeader = class HSCardImgHeader {
    constructor() {
        this.imgWidth = '265';
        this.imgHeight = '177';
    }
    launchModalEvent(event) {
        this.launchModal.emit(event);
    }
    launchModalHandler(target) {
        // showModal(`#${this.clickTarget}`)
        //@ts-ignore: does not exist on type
        this.clickTarget ? document.querySelector(target).show() : alert('no target parameter');
    }
    // componentDidLoad() {
    //   this.setSizeClass = (() => {
    //     return this.getImgSizeClass();
    //   })
    // }
    // @Method()
    //   async getImgSizeClass() {
    //     let headerImg = this.el.querySelector('img')
    //     console.log(headerImg)
    //     if (this.cardSize === '--sm') {
    //       headerImg.style.width = '265px'
    //       headerImg.style.height = '177px'
    //       return '--sm'
    //     }
    //     if (this.cardSize === '--lg') {
    //       headerImg.style.width = '400px'
    //       headerImg.style.height = '287px'
    //       return '--lg'
    //     }
    //     if (this.cardSize === '--fluid') {
    //       headerImg.style.width = '100%'
    //       headerImg.style.height = '100%'
    //       return '--fluid'
    //     }
    //     if (typeof this.cardSize === 'undefined') {
    //       headerImg.style.width = '100%'
    //       headerImg.style.height = '100%'
    //       return '--default'
    //     }
    //     return
    //   }
    render() {
        this.imgW = this.imgWidth.replace(/px/gi, '');
        this.imgH = this.imgHeight.replace(/px/gi, '');
        this.imgWidth <= '250' || typeof this.imgWidth === 'undefined' ? this.cardSize = '265' : '';
        return (h("header", { id: "imgHeader", class: `hs-card_header hs-card_img-header${this.cardSize}` },
            h("a", { id: "imgHeaderOverlay", class: `hs-card_img-header_overlay${this.cardSize}`, href: "javascript:void(0);", onClick: () => this.launchModalHandler('#modBowlopolis') },
                h("img", { id: "hsHeaderImg", src: this.imgPath, class: `hs-card_img-header_img${this.cardSize}`, alt: "header image", width: this.imgWidth, height: this.imgHeight }))));
    }
};
__decorate([
    Element()
], HSCardImgHeader.prototype, "el", void 0);
__decorate([
    Prop()
], HSCardImgHeader.prototype, "cardHeader", void 0);
__decorate([
    Prop()
], HSCardImgHeader.prototype, "overlay", void 0);
__decorate([
    Prop()
], HSCardImgHeader.prototype, "imgElem", void 0);
__decorate([
    Prop({ reflect: true })
], HSCardImgHeader.prototype, "cardSize", void 0);
__decorate([
    Prop({ reflect: true })
], HSCardImgHeader.prototype, "imgPath", void 0);
__decorate([
    Prop({ reflect: true })
], HSCardImgHeader.prototype, "imgSize", void 0);
__decorate([
    Prop({ reflect: true })
], HSCardImgHeader.prototype, "imgWidth", void 0);
__decorate([
    Prop({ reflect: true })
], HSCardImgHeader.prototype, "imgHeight", void 0);
__decorate([
    Prop()
], HSCardImgHeader.prototype, "imgW", void 0);
__decorate([
    Prop()
], HSCardImgHeader.prototype, "imgH", void 0);
__decorate([
    Prop()
], HSCardImgHeader.prototype, "clickTarget", void 0);
__decorate([
    Prop()
], HSCardImgHeader.prototype, "setSizeClass", void 0);
__decorate([
    Event()
], HSCardImgHeader.prototype, "launchModal", void 0);
__decorate([
    Listen('launchModal')
], HSCardImgHeader.prototype, "launchModalHandler", null);
HSCardImgHeader = __decorate([
    Component({
        tag: 'hs-card-img-header',
        styleUrl: '../../scss/components/components.cards.scss',
        shadow: true
    })
], HSCardImgHeader);
export { HSCardImgHeader };
