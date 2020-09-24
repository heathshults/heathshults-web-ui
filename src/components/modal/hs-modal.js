var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Event, Prop, Method, State, Element, h } from '@stencil/core';
let HSModal = class HSModal {
    constructor() {
        this.ghost = false;
        this.full = false;
        this.open = false;
        this.dismissible = false;
        this.winHeight = window.innerHeight;
        this._isOpen = false;
    }
    async close() {
        this._isOpen = false;
        this.onClose.emit();
        this.handleOverlay();
    }
    componentWillLoad() {
        this._isOpen = this.open;
    }
    async handleOverlay() {
        this.overlay = this.elem.shadowRoot.querySelector('#overlay');
        this.overlay.classList.toggle('hs-modal-backdrop--visible');
        () => {
            let sec = this.elem.closest('section');
            sec !== null ? sec.style.cssText = 'background-attachment: fixed;' : sec.style.cssText = 'background-attachment: unset';
        };
        let overlayHeight = this.overlay.style.height;
        typeof overlayHeight === 'undefined' || overlayHeight < 1 ? overlayHeight = `${document.body.clientHeight}` : overlayHeight = 0;
    }
    // componentDidLoad() {
    //   this.overlay = this.elem.shadowRoot.querySelector('#overlay') as HTMLElement;
    //   console.log(this.overlay)
    // }
    async show() {
        this._isOpen = true;
        this.handleOverlay();
        //this.overlay = this.elem.shadowRoot.querySelector('#overlay') as HTMLElement;
        //this.overlay.style.height = this.winHeight;
    }
    async isOpen() {
        return this._isOpen;
    }
    dismiss() {
        if (this.dismissible)
            this.close();
    }
    render() {
        const ghostClass = this.ghost ? `hs-modal--ghost` : '';
        const fullClass = this.full ? `hs-modal--full` : '';
        const modalIsOpenClass = this._isOpen ? 'hs-modal--visible' : '';
        const overlayIsOpenClass = this._isOpen ? 'hs-modal-backdrop--visible' : '';
        return [
            h("div", { id: "overlay", "aria-hidden": true, onClick: () => this.dismiss(), class: `hs-modal-backdrop ${overlayIsOpenClass}` }),
            h("div", { role: "dialog", class: `hs-modal ${ghostClass} ${fullClass} ${modalIsOpenClass}` },
                this.dismissible && (h("button", { type: "button", class: "hs-button hs-button--close", onClick: () => this.close() }, "\u00D7")),
                h("slot", null))
        ];
    }
};
__decorate([
    Element()
], HSModal.prototype, "elem", void 0);
__decorate([
    Prop()
], HSModal.prototype, "ghost", void 0);
__decorate([
    Prop()
], HSModal.prototype, "full", void 0);
__decorate([
    Prop()
], HSModal.prototype, "open", void 0);
__decorate([
    Prop()
], HSModal.prototype, "dismissible", void 0);
__decorate([
    Prop()
], HSModal.prototype, "winHeight", void 0);
__decorate([
    Prop()
], HSModal.prototype, "overlay", void 0);
__decorate([
    State()
], HSModal.prototype, "_isOpen", void 0);
__decorate([
    Event({ eventName: 'close' })
], HSModal.prototype, "onClose", void 0);
__decorate([
    Method()
], HSModal.prototype, "close", null);
__decorate([
    Method()
], HSModal.prototype, "handleOverlay", null);
__decorate([
    Method()
], HSModal.prototype, "show", null);
__decorate([
    Method()
], HSModal.prototype, "isOpen", null);
HSModal = __decorate([
    Component({
        tag: 'hs-modal',
        styleUrl: '../../scss/components/objects.modals.scss',
        shadow: true
    })
], HSModal);
export { HSModal };
