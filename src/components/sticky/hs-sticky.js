var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Listen, Element, State, Prop, h } from '@stencil/core';
let Sticky = class Sticky {
    constructor() {
        this.top = 0;
    }
    componentWillUpdate() {
        this.positionElement();
    }
    positionElement() {
        this.dimensions = this.elem.children[0].getBoundingClientRect();
        this.offsetTop = this.dimensions.top + window.scrollY;
        if (this.offsetTop - window.scrollY - this.top <= 0) {
            this.staticStyles = {
                width: `${this.dimensions.width}px`,
                height: `${this.dimensions.height}px`,
            };
            this.stickyStyles = {
                position: 'fixed',
                top: `${this.top}px`,
                left: `${this.dimensions.left}px`,
                width: `${this.dimensions.width}px`,
            };
        }
        else {
            this.staticStyles = {};
            this.stickyStyles = {};
        }
    }
    render() {
        return (h("div", { style: this.staticStyles },
            h("div", { style: this.stickyStyles },
                h("slot", null))));
    }
};
__decorate([
    Element()
], Sticky.prototype, "elem", void 0);
__decorate([
    Prop()
], Sticky.prototype, "top", void 0);
__decorate([
    State()
], Sticky.prototype, "staticStyles", void 0);
__decorate([
    State()
], Sticky.prototype, "stickyStyles", void 0);
__decorate([
    Listen('resize', { target: 'window' }),
    Listen('scroll', { target: 'document' })
], Sticky.prototype, "positionElement", null);
Sticky = __decorate([
    Component({
        tag: 'hs-sticky'
    })
], Sticky);
export { Sticky };
