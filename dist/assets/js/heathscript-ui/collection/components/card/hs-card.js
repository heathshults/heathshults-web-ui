import { Component, h, Prop } from '@stencil/core';
export class HSCard {
    render() {
        return (h("div", { class: `hs-card ${this.colorTone}` },
            h("slot", null)));
    }
    static get is() { return "hs-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["../../scss/components/components.cards.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["../../scss/components/components.cards.css"]
    }; }
    static get properties() { return {
        "colorTone": {
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
            "attribute": "color-tone",
            "reflect": false
        }
    }; }
}
