var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h } from '@stencil/core';
let HSMediaItem = class HSMediaItem {
    render() {
        return (h("div", { class: "hs-card_item hs-media" },
            h("slot", null)));
    }
};
HSMediaItem = __decorate([
    Component({
        tag: 'hs-media-item',
        styleUrl: '../../scss/components/components.cards.scss',
        shadow: true
    })
], HSMediaItem);
export { HSMediaItem };
