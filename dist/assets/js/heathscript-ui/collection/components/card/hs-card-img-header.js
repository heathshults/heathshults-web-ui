import { Component, Element, Prop, Event, Listen, h } from '@stencil/core';
export class HSCardImgHeader {
    constructor() {
        this.imgWidth = '100%';
        this.imgHeight = '260px';
    }
    launchModalEvent(event) {
        this.launchModal.emit(event);
    }
    launchModalHandler(target) {
        // showModal(`#${this.clickTarget}`)
        //@ts-ignore: does not exist on type
        this.clickTarget ? document.querySelector(target).show() : alert('no target parameter');
    }
    componentWillLoad() {
    }
    render() {
        () => {
            this.cardHeader = this.imgHeaderEl.shadowRoot.querySelector('#imgHeader');
            this.imgElem = this.cardHeader.querySelector('#hsHeaderImg');
            this.imgElem.src = this.imgPath;
            this.overlay = this.cardHeader.querySelector('#imgHeaderOverlay');
        };
        return (h("header", { id: "imgHeader", class: "hs-card__img-header" },
            h("a", { id: "imgHeaderOverlay", class: "hs-img-header__overlay", href: "javascript:void(0);", onClick: () => this.launchModalHandler('#modBowlopolis') },
                h("img", { id: "hsHeaderImg", src: this.imgPath, class: "hs-img-header-img", alt: "header image", width: this.imgWidth, height: this.imgHeight }))));
    }
    static get is() { return "hs-card-img-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["../../scss/components/components.cards.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["../../scss/components/components.cards.css"]
    }; }
    static get properties() { return {
        "cardHeader": {
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
            "attribute": "card-header",
            "reflect": false
        },
        "overlay": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "HTMLLinkElement",
                "resolved": "HTMLLinkElement",
                "references": {
                    "HTMLLinkElement": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "imgElem": {
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
            "attribute": "img-elem",
            "reflect": false
        },
        "imgPath": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "img-path",
            "reflect": false
        },
        "imgWidth": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "img-width",
            "reflect": false,
            "defaultValue": "'100%'"
        },
        "imgHeight": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "img-height",
            "reflect": false,
            "defaultValue": "'260px'"
        },
        "clickTarget": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "click-target",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "launchModal",
            "name": "launchModal",
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
    static get elementRef() { return "imgHeaderEl"; }
    static get listeners() { return [{
            "name": "launchModal",
            "method": "launchModalHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
