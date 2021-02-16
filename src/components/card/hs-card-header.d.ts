import { EventEmitter } from '@stencil/core';
export declare class HSCardHeader {
    cardHeader: any;
    cardHeaderImg: HTMLElement;
    imgHeaderImgPlaceholder: string;
    overlay: any;
    imgElem: any;
    modalId: string;
    imgHeaderImg: string;
    imgPath: string;
    showHide: string;
    clickTarget: string;
    colorTone: string;
    modalLancher: EventEmitter;
    launchModalEventHandler(event: Event): void;
    launchModalHandler(event: Event): void;
    fnStatusCallBack: (status: boolean, fnName: string, errorMessage?: unknown) => any;
    render(): any;
}
