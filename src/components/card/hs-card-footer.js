var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, Prop } from '@stencil/core';
let HSCardFooter = class HSCardFooter {
    componentWillLoad() {
        typeof this.colorTone === 'undefined' || typeof this.colorTone === null || this.colorTone === 'light' ? this.colorToneClass = 'light' :
            this.colorTone === 'dark' ? this.colorToneClass = 'dark' : this.colorToneClass = 'light';
    }
    render() {
        return (h("footer", { class: `hs-card_footer ${this.colorToneClass}` },
            h("slot", null)));
    }
};
__decorate([
    Prop()
], HSCardFooter.prototype, "colorTone", void 0);
__decorate([
    Prop()
], HSCardFooter.prototype, "colorToneClass", void 0);
HSCardFooter = __decorate([
    Component({
        tag: 'hs-card-footer',
        styleUrl: '../../scss/components/components.cards.scss',
        shadow: true
    })
], HSCardFooter);
export { HSCardFooter };
