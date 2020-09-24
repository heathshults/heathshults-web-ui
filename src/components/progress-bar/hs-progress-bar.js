var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Event, Prop, Watch, h } from '@stencil/core';
let HSProgressBar = class HSProgressBar {
    constructor() {
        this.min = 0;
        this.max = 100;
    }
    watchValue(value, oldValue) {
        this.onChange.emit({ value, oldValue });
    }
    render() {
        const typeClass = this.type ? `hs-progress__bar--${this.type}` : '';
        const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;
        return (h("div", { role: "progressbar", "aria-valuenow": this.value, "aria-valuemin": this.min, "aria-valuemax": this.max, style: { width: `${percentage}%` }, class: `hs-progress__bar ${typeClass}` },
            h("slot", null)));
    }
};
__decorate([
    Prop()
], HSProgressBar.prototype, "type", void 0);
__decorate([
    Prop()
], HSProgressBar.prototype, "value", void 0);
__decorate([
    Prop()
], HSProgressBar.prototype, "min", void 0);
__decorate([
    Prop()
], HSProgressBar.prototype, "max", void 0);
__decorate([
    Event({ eventName: 'changebar' })
], HSProgressBar.prototype, "onChange", void 0);
__decorate([
    Watch('value')
], HSProgressBar.prototype, "watchValue", null);
HSProgressBar = __decorate([
    Component({
        tag: 'hs-progress-bar',
        styleUrl: '../../scss/components/components.progress.scss',
        shadow: true
    })
], HSProgressBar);
export { HSProgressBar };
