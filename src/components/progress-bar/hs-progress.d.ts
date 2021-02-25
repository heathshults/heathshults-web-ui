import { EventEmitter } from '@stencil/core';
export declare class HSProgress {
    private element;
    rounded: boolean;
    size: string;
    onNotSame: EventEmitter;
    onChangeBar(ev: any): void;
    render(): any;
}
