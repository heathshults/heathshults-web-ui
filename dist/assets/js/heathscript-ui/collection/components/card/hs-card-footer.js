import { Component, h, Prop } from '@stencil/core';
export class HSCardFooter {
    componentWillLoad() {
        typeof this.colorTone === 'undefined' || typeof this.colorTone === null || this.colorTone === 'light' ? this.colorToneClass = 'light' :
            this.colorTone === 'dark' ? this.colorToneClass = 'dark' : this.colorToneClass = 'light';
    }
    render() {
        return (h("footer", { class: `hs-card__footer ${this.colorToneClass}` },
            h("slot", null)));
    }
    static get is() { return "hs-card-footer"; }
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
        },
        "colorToneClass": {
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
            "attribute": "color-tone-class",
            "reflect": false
        }
    }; }
}
