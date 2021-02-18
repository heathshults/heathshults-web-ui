export default class HS3DRotate {
    rotatorContainer: HTMLDivElement;
    hs3dRotate: HTMLDivElement;
    prevButton: HTMLButtonElement;
    nextButton: HTMLButtonElement;
    cellsRange: HTMLInputElement;
    orientationRadios: any;
    checkedRadio: HTMLInputElement;
    dataMethod: string;
    dataURL: string;
    dataHeaders: any;
    options: any;
    cells: any;
    cellSize: any;
    cellCount: any;
    selectedIndex: any;
    cellWidth: any;
    cellHeight: any;
    isHorizontal: any;
    rotateFn: any;
    radius: any;
    theta: any;
    orientationFlag: boolean;
    rotateEventsFlag: boolean;
    hs3dRotatorEvents: any;
    constructor(dataMethod1?: string, dataURL1?: string, dataHeaders1?: string);
    Get3dRotatorData(): void;
    init3dRotator: any;
    rotate3dRotator(): any;
    update3DRotator(): any;
    HS3dRotateEvents(): any;
}
