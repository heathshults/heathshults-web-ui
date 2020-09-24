var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h } from '@stencil/core';
let Tab = class Tab {
    render() {
        const typeClass = this.type ? `hs-tabs__tab--${this.type}` : '';
        return (h("div", { role: "tabpanel", hidden: !this.open, class: `hs-tabs__tab ${typeClass}` },
            h("slot", null)));
    }
};
__decorate([
    Prop()
], Tab.prototype, "header", void 0);
__decorate([
    Prop()
], Tab.prototype, "disabled", void 0);
__decorate([
    Prop()
], Tab.prototype, "open", void 0);
__decorate([
    Prop()
], Tab.prototype, "type", void 0);
Tab = __decorate([
    Component({
        tag: 'hs-tab',
        styleUrl: '../../scss/components/components.tabs.scss',
        shadow: true
    })
], Tab);
export { Tab };
