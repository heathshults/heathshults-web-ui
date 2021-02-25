import { EventEmitter } from '@stencil/core';
export declare class HSModal {
    elem: HTMLElement;
    ghost: boolean;
    full: boolean;
    open: boolean;
    dismissible: boolean;
    winHeight: any;
    overlay: any;
    modalTitle: string;
    _isOpen: boolean;
    onClose: EventEmitter;
    render(): any;
}
