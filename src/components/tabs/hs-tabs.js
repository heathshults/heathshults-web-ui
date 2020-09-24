var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Element, Event, Method, State, h } from '@stencil/core';
let Tabs = class Tabs {
    componentWillLoad() {
        this.tabs = Array.from(this.elem.querySelectorAll('hs-tab'));
    }
    async currentTab() {
        return this.tabs.findIndex((tab) => tab.open);
    }
    async openTab(tabIndex) {
        if (!this.tabs[tabIndex].disabled) {
            this.tabs = this.tabs.map((tab) => {
                tab.open = false;
                return tab;
            });
            this.tabs[tabIndex].open = true;
            this.onUpdated.emit({ idx: tabIndex });
        }
    }
    render() {
        return (h("div", { class: "hs-tabs" },
            h("div", { role: "tablist", class: "hs-tabs" },
                h("div", { class: "hs-tabs__nav" },
                    h("div", { class: "hs-tabs__headings" }, this.tabs.map((tab, i) => {
                        const openClass = tab.open ? 'hs-tab-heading--active' : '';
                        const typeClass = tab.type ? `hs-tab-heading--${tab.type}` : '';
                        return (h("button", { role: "tab", disabled: tab.disabled, class: `hs-tab-heading ${typeClass} ${openClass}`, onClick: () => this.openTab(i) }, tab.header));
                    }))),
                h("slot", null))));
    }
};
__decorate([
    Element()
], Tabs.prototype, "elem", void 0);
__decorate([
    State()
], Tabs.prototype, "tabs", void 0);
__decorate([
    Event({ eventName: 'updated' })
], Tabs.prototype, "onUpdated", void 0);
__decorate([
    Method()
], Tabs.prototype, "currentTab", null);
__decorate([
    Method()
], Tabs.prototype, "openTab", null);
Tabs = __decorate([
    Component({
        tag: 'hs-tabs',
        styleUrl: '../../scss/components/components.cards.scss',
        shadow: true
    })
], Tabs);
export { Tabs };
