import { EventEmitter } from '@stencil/core';
export declare class HsSlider {
    min: number;
    max: number;
    value: number;
    valueChanged: EventEmitter;
    valueChangedHandler(event: any): void;
    render(): any;
}
