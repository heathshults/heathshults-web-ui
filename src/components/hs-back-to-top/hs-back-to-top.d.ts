import { EventEmitter } from '@stencil/core';
export declare class BackToTop {
    onBackToTop: EventEmitter;
    _isOpen: boolean;
    position: string;
    enable(): void;
    h: any;
    goUp(): void;
    render(): any;
}
