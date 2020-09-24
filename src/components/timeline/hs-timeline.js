var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, h } from '@stencil/core';
let Timeline = class Timeline {
    render() {
        const alternateClass = this.alternate ? 'o-timeline--alternate' : '';
        const loadingClass = this.loading ? 'o-timeline--loading' : '';
        return (h("ol", { class: `o-timeline ${alternateClass} ${loadingClass}` },
            h("slot", null)));
    }
};
__decorate([
    Prop()
], Timeline.prototype, "alternate", void 0);
__decorate([
    Prop()
], Timeline.prototype, "loading", void 0);
Timeline = __decorate([
    Component({
        tag: 'hs-timeline',
        styleUrl: '../../scss/components/components.timelines.scss',
        shadow: true
    })
], Timeline);
export { Timeline };
