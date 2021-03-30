export declare class SlideButton {
    slideButton: HTMLElement;
    dropzone: HTMLElement;
    arrows: HTMLDivElement;
    constructor(slideButton?: HTMLElement, dropzone?: HTMLElement, arrows?: HTMLDivElement);
    /**
     * When the slide-button begins to be dragged
     * @param  {DragEvent} e
     * @return {void}@memberof SlideButton
     */
    dragstart(ev: DragEvent): void;
    /**
     * When the slide-button stops getting dragged
     * @param  {DragEvent} e
     * @return {void}@memberof SlideButton
     */
    dragend(ev: DragEvent): void;
    /**
     * When the slide-button is first touching the dropzone
     * @param  {DragEvent} e
     * @return {void}@memberof SlideButton
     */
    dragenter(ev: DragEvent): void;
    /**
     * When the slide-button is dragged back out of the dropzone
     * @param  {DragEvent} e
     * @return {void}@memberof SlideButton
     */
    dragleave(ev: DragEvent): void;
    /**
     * When the slide-button is directly over the dropzone and ready to be dropped
     * @param  {DragEvent} e
     * @return {void}@memberof SlideButton
     */
    dragover(ev: DragEvent): void;
    /**
     * When the slide-button is dropped into the dropzone
     * @return {void}@memberof SlideButton
     */
    drop(ev: DragEvent): void;
    static init(): any;
}
