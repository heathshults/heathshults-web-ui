import { Component, Event, Prop, Method, State, Element, h } from '@stencil/core';
export class HSModal {
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
    handleOverlay() {
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
    static get is() { return "hs-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["../../scss/components/objects.modals.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["../../scss/components/objects.modals.css"]
    }; }
    static get properties() { return {
        "ghost": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "ghost",
            "reflect": false,
            "defaultValue": "false"
        },
        "full": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "full",
            "reflect": false,
            "defaultValue": "false"
        },
        "open": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "open",
            "reflect": false,
            "defaultValue": "false"
        },
        "dismissible": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "dismissible",
            "reflect": false,
            "defaultValue": "false"
        },
        "winHeight": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "win-height",
            "reflect": false,
            "defaultValue": "window.innerHeight"
        },
        "overlay": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "overlay",
            "reflect": false
        }
    }; }
    static get states() { return {
        "_isOpen": {}
    }; }
    static get events() { return [{
            "method": "onClose",
            "name": "close",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "close": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "handleOverlay": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "HTMLElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "show": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "isOpen": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "elem"; }
}
