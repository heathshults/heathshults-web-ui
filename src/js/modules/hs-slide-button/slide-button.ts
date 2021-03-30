
const l = console.log;
export class SlideButton {

  constructor(
    public slideButton: HTMLElement = document.querySelector('#slideButton'),
    public dropzone: HTMLElement = document.querySelector('#dropzone'),
    public arrows: HTMLDivElement = document.querySelector('.hs-animated-arrow-container')
  ) {
    this.slideButton = slideButton;
    this.dropzone = dropzone;
    this.arrows = arrows;
    
    l(this.slideButton);
    l(this.dropzone);
  }
 
  /**
   * When the slide-button begins to be dragged
   * @param  {DragEvent} e 
   * @return {void}@memberof SlideButton
   */
  dragstart(ev: DragEvent):void {
    const eventtarget = ev.target as HTMLElement;
    ev.dataTransfer.setData("text", eventtarget.id);
    
    eventtarget.classList.add('drag-start');
    this.dropzone.classList.add('dropzone-indicator');
    
    setTimeout(() => {
      eventtarget.classList.add('invisible');
    }, 0);
  }

  /**
   * When the slide-button stops getting dragged
   * @param  {DragEvent} e 
   * @return {void}@memberof SlideButton
   */
  dragend(ev: DragEvent):void {
    ev.preventDefault();
    const evtarget = ev.target as HTMLElement;

    evtarget.classList.remove('dropped');
    evtarget.classList.remove('drag_start');
    this.dropzone.classList.remove('dropzone-indicator');
  }

  /**
   * When the slide-button is first touching the dropzone
   * @param  {DragEvent} e 
   * @return {void}@memberof SlideButton
   */
  dragenter(ev: DragEvent):void {
    ev.preventDefault();
    this.arrows.style.opacity = '0';
  }

  /**
   * When the slide-button is dragged back out of the dropzone
   * @param  {DragEvent} e 
   * @return {void}@memberof SlideButton
   */
  dragleave(ev: DragEvent):void {
    ev.preventDefault();
    this.arrows.style.opacity = '1';
  }

  /**
   * When the slide-button is directly over the dropzone and ready to be dropped
   * @param  {DragEvent} e 
   * @return {void}@memberof SlideButton
   */
  dragover(ev: DragEvent):void {
    ev.preventDefault();
    const evtarget = ev.target as HTMLElement;
    evtarget.classList.add('drop-ready');
  }

  /**
   * When the slide-button is dropped into the dropzone
   * @return {void}@memberof SlideButton
   */
  drop(ev: DragEvent):void {
    ev.preventDefault();
    const animatedCheckMark = 
    `<svg class="svg-checkmark" x="0px" y="0px" viewBox="0 0 135 110" width="35px" height="43px">
      <path class="check" d="M126.8,14L55.7,85.1L29.2,63.4"/>
    </svg>`;
    const data = ev.dataTransfer.getData("text");
    const evtarget = ev.target as HTMLElement;

    evtarget.appendChild(document.getElementById(data));
    this.slideButton.classList.remove('drop-ready');
    this.slideButton.classList.add('dropped');

    const checky = document.createElement('span');
    checky.classList.add('hs-animated-checkbox-container');
    checky.innerHTML = animatedCheckMark;
    evtarget.appendChild(checky);
    evtarget.classList.add('border-white');
  }

  static init(): any {
    return new this();
  }
}


document
   .addEventListener('load', SlideButton.init());
