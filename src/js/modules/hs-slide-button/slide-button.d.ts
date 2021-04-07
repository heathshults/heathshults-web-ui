export default class SlideButton {
    validateIssue: boolean;
    slidebutton?: HTMLElement;
    dropzone?: HTMLElement;
    gridLeftInner?: HTMLDivElement;
    gridRightInner?: HTMLDivElement;
    createButton?: any;
    arrows?: any;
    active: boolean;
    currentX: number | any;
    currentY: number | any;
    initialX: number | any;
    initialY: number | any;
    xOffset: number | any;
    yOffset: number | any;
    checky: any;
    eventtarget: any;
    dragParent: HTMLElement;
    cloner: HTMLElement;
    cloneId: string | any;
    constructor(location: string, buttonContainer?: HTMLElement);
    dragonStart(ev: DragEvent): void;
    drag(ev: DragEvent): void;
    dragonEnd(ev: DragEvent): void;
    dragonEnter(ev: DragEvent): string;
    dragonLeave(ev: DragEvent): string;
    dragonOver(ev: DragEvent): void;
    dropHandler(ev: DragEvent): any;
    drop(ev: DragEvent): void;
    animatedCheckmark(): HTMLElement;
    resetSlideButton(ev: Event): any;
    static init(loc: string): any;
    /**
     * Math.random should be unique because of its seeding algorithm.
     * Convert it to base 36 (numbers + letters), and grab the first 9 characters
     * after the decimal.
     * @tutorial
     * var privateName = ID();
     * var o = { 'public': 'foo' };
     * o[privateName] = 'bar';
     * @memberof SlideButton
     */
    generateID: () => string;
}
