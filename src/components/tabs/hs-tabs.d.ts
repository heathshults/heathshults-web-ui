import { EventEmitter } from '@stencil/core';
export declare class Tabs {
    elem: HTMLElement;
    tabs: any[];
    onUpdated: EventEmitter;
    componentWillLoad(): void;
    currentTab(): Promise<number>;
    openTab(tabIndex: number): Promise<void>;
    render(): any;
}
