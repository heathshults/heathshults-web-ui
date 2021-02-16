import { EventEmitter } from '@stencil/core';
export declare class HSCardButton {
    el: HTMLButtonElement;
    buttonId?: string;
    cssClass?: string;
    buttonText?: string;
    url?: any;
    urlParams?: any;
    dataTarget?: string | null;
    dataToggle?: string | null;
    onclicker: any;
    modalLancher: EventEmitter;
    launchModalEventHandler(event: Event): void;
    launchModalHandler(): void;
    handleClick(event: any, url: any, urlParams: any, dataTarget: any): Promise<void>;
    handleLink(url: any, urlParams: any): void;
    componentWillLoad(): void;
    render(): any;
}
