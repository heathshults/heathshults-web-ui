var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Element, Event, Listen, Prop, h } from '@stencil/core';
let HSProgress = class HSProgress {
    constructor() {
        this.size = '';
    }
    onChangeBar(ev) {
        const progress = this.element.children[0];
        const value = ev.detail;
        const bar = ev.target;
        const idx = [].indexOf.call(progress.children, bar);
        this.onNotSame.emit(Object.assign({ idx }, value));
    }
    render() {
        const sizeClass = this.size ? `u-${this.size}` : '';
        const roundedClass = this.rounded ? `hs-progress--rounded` : '';
        return (h("div", { class: `hs-progress ${roundedClass} ${sizeClass}` },
            h("slot", null)));
    }
};
__decorate([
    Element()
], HSProgress.prototype, "element", void 0);
__decorate([
    Prop()
], HSProgress.prototype, "rounded", void 0);
__decorate([
    Prop()
], HSProgress.prototype, "size", void 0);
__decorate([
    Event({ eventName: 'notSame' })
], HSProgress.prototype, "onNotSame", void 0);
__decorate([
    Listen('changebar')
], HSProgress.prototype, "onChangeBar", null);
HSProgress = __decorate([
    Component({
        tag: 'hs-progress',
        styleUrl: '../../scss/components/components.progress.scss',
        shadow: true
    })
], HSProgress);
export { HSProgress };
