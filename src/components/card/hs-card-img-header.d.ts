import { EventEmitter } from '@stencil/core';
export declare class HSCardImgHeader {
    el: HTMLElement;
    colorTone: string;
    colorToneClass: string;
    cardHeader: any;
    cardHeaderImg: HTMLElement;
    imgHeaderImgPlaceholder: string;
    overlay: any;
    imgElem: any;
    dataTarget: string;
    dataToggle: string;
    imgHeaderImg: string;
    imgPath: string;
    showHide: string;
    clickTarget: string;
    modalLancher: EventEmitter;
    launchModalEventHandler(event: Event): void;
    launchModalHandler(event: Event): void;
    fnStatusCallBack: (status: boolean, fnName: string, errorMessage?: any) => any;
    validURL: (str: any) => any;
    componentWillLoad(): void;
    componenentWillRender(): void;
    render(): any;
}
