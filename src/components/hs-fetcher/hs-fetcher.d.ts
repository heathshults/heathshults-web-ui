import { EventEmitter } from '@stencil/core';
export declare class HsFetcher {
    headers: Headers;
    method: string;
    url: string;
    buttonLabel: string;
    resolved: EventEmitter;
    fetcherror: EventEmitter;
    available: boolean;
    request: any;
    componentDidLoad(): void;
    makeRequest(): Promise<void>;
    render(): void;
}
