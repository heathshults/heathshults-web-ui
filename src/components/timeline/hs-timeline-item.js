var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h } from '@stencil/core';
let TimelineItem = class TimelineItem {
    render() {
        const typeClass = this.type ? `hs-timeline-item--${this.type}` : '';
        const lastClass = this.last ? `hs-timeline-item--last` : '';
        const leftClass = this.left ? `hs-timeline-item--left` : '';
        const loadingClass = this.loading && !this.last ? `hs-timeline-item--loading` : '';
        return (h("li", { class: `hs-timeline-item ${typeClass} ${leftClass} ${lastClass} ${loadingClass}` },
            h("div", { class: "hs-timeline-item__body" },
                h("slot", null))));
    }
};
__decorate([
    Prop()
], TimelineItem.prototype, "type", void 0);
__decorate([
    Prop()
], TimelineItem.prototype, "last", void 0);
__decorate([
    Prop()
], TimelineItem.prototype, "left", void 0);
__decorate([
    Prop()
], TimelineItem.prototype, "loading", void 0);
TimelineItem = __decorate([
    Component({
        tag: 'hs-timeline-item',
        styleUrl: '../../scss/components/components.timelines.scss',
        shadow: true
    })
], TimelineItem);
export { TimelineItem };
