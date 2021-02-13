export declare class HS3DRotate {
    rotatorContainer: HTMLDivElement;
    HSThreeDRotator: HTMLDivElement;
    cells: Array<any>;
    cellCount: number | any;
    selectedIndex: any;
    cellWidth: number | string;
    cellHeight: number | string;
    isHorizontal: any;
    rotateFn: any;
    radius: number | any;
    theta: number | any;
    prevButton: HTMLButtonElement | HTMLAnchorElement;
    nextButton: HTMLButtonElement | HTMLAnchorElement;
    cellsRange: any;
    orientationRadios: Array<any>;
    checkedRadio: HTMLInputElement;
    fetchHeaders: string;
    headers: any;
    method: string;
    url: string;
    available: boolean;
    request: any;
    constructor(rotatorId: string, window: Window);
    userOptions(ops: JSON): void;
    rotate(): void;
    onOrientationChange(): Promise<boolean | string>;
    update3DRotator(): Promise<any>;
}
