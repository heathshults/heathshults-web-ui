var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, Prop } from '@stencil/core';
let HSCardBody = class HSCardBody {
    render() {
        return (h("div", { class: `hs-card_body hs-card_body${this.cardSize}` },
            h("slot", null)));
    }
};
__decorate([
    Prop({ reflect: true })
], HSCardBody.prototype, "cardSize", void 0);
HSCardBody = __decorate([
    Component({
        tag: 'hs-card-body',
        styleUrl: '../../scss/components/components.cards.scss',
        shadow: true
    })
], HSCardBody);
export { HSCardBody };
