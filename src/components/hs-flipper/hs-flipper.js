var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, Element, State, h } from '@stencil/core';
/**
 * two ways of defining flipper behaviour:
 * - through native browser events for flipper and flipper-back (e.g. click, mouseenter, …)
 * - through isflipperped true|false
 *
 * only one of these can be used. `isflipperped` is prioritized if both were to be used.
 */
let HsFlipper = class HsFlipper {
    constructor() {
        this.events = { flipperEvents: [], flipperBackEvents: [] };
    }
    // private options = { duration: 400, timingFunction: 'ease-in' };
    componentWillLoad() {
        this.init();
    }
    /**
     * add options to the element (duration, timingfunction).
     */
    componentDidLoad() {
        const duration = this.flipperDuration || 400;
        const timingFunction = this.flipperTimingFunction || 'ease-in';
        ['front', 'back']
            .forEach(key => {
            const el = this.element.querySelector(`.hs-flipperpy__${key}`);
            el['style'].transition = `all ${duration / 1000}s ${timingFunction}`;
        });
    }
    /**
     * handling the `is-flipperped` attribute.
     * usually this is used together with modern frameworks.
     */
    componentWillUpdate() {
        if (this.isflipperped !== undefined) {
            this.flipperState = this.isflipperped;
        }
    }
    init() {
        if (this.isflipperped !== undefined) {
            this.flipperState = this.isflipperped;
        }
        else if (this.flipperEvents !== undefined) {
            ['flipperEvents', 'flipperBackEvents'].forEach(key => {
                this.events[key] = (this[key]) ?
                    this[key].split(',') :
                    [];
            });
            // adding event listeners
            const allEvents = [...this.events.flipperEvents, ...this.events.flipperBackEvents];
            allEvents
                .filter((eventType, index) => allEvents.indexOf(eventType) === index)
                .forEach(eventType => this.element.addEventListener(eventType, (evt) => this.processflipper(evt)));
            this.flipperState = false;
        }
    }
    processflipper(evt) {
        const eventType = evt.type;
        if (this.flipperState && this.events.flipperBackEvents.indexOf(eventType) !== -1) {
            this.flipperState = !this.flipperState;
        }
        else if (!this.flipperState && this.events.flipperEvents.indexOf(eventType) !== -1) {
            this.flipperState = !this.flipperState;
        }
    }
    render() {
        return (h("div", { class: `hs-flipperpy ${(this.flipperState ? 'hs-flipperpy--flipperped' : '')}` },
            h("div", { class: "hs-flipperpy__front" },
                h("slot", { name: "front" })),
            h("div", { class: "hs-flipperpy__back" },
                h("slot", { name: "back" }))));
    }
};
__decorate([
    Element()
], HsFlipper.prototype, "element", void 0);
__decorate([
    Prop()
], HsFlipper.prototype, "flipperEvents", void 0);
__decorate([
    Prop()
], HsFlipper.prototype, "flipperBackEvents", void 0);
__decorate([
    Prop()
], HsFlipper.prototype, "flipperDuration", void 0);
__decorate([
    Prop()
], HsFlipper.prototype, "flipperTimingFunction", void 0);
__decorate([
    Prop()
], HsFlipper.prototype, "isflipperped", void 0);
__decorate([
    State()
], HsFlipper.prototype, "flipperState", void 0);
HsFlipper = __decorate([
    Component({
        tag: 'hs-flipper',
        styleUrl: '../../scss/components/components.hs-flipper.scss'
    })
], HsFlipper);
export { HsFlipper };
