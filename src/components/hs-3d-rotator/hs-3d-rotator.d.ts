import { EventEmitter } from '@stencil/core';
export declare class HS3dRotator {
    el: HTMLElement;
    HSThreeDRotator: any;
    cellCount: any;
    cellWidth: number | string;
    cellHeight: number | string;
    minCells: 3;
    startCellCount: 6;
    maxCells: 15;
    private _update3DRotator;
    get update3DRotator(): any;
    set update3DRotator(value: any);
    headers: Headers;
    method: string;
    url: string;
    jdata: Array<any>;
    resolved: EventEmitter;
    fetcherror: EventEmitter;
    available: boolean;
    request: any;
    componentWillLoad(): void;
    resizeHandler(event: Window): void;
    render(): any;
}
