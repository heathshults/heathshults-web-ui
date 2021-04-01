/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default class SlideButton {
  l = console.log;
  public validateIssue: boolean;
  public slidebutton?: HTMLElement;
  public dropzone?: HTMLElement;

  constructor(
    location: string, 
    buttonContainer?: HTMLElement,
  ) {
    this.validateIssue = false;
    buttonContainer = document.querySelector(location);
    const skeleton = `
    <div class="slide-button-grid">
      <div class="slide-button-grid__left">
        <div class="grid-left__inner"></div>
        </div>
        <div class="slide-button-grid__center">
          <span class="hs-slide-submit_label">SEND</span>
          <div class="hs-animated-arrow-container">
            <svg id="arrows" class="hs-animated-arrow" width="18px" height="17px" viewBox="-1 0 18 17" version="1.1"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g>
                <polygon class="hs-arrow a-3"
                  points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596">
                </polygon>
                <polygon class="hs-arrow a-2"
                  points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596">
                </polygon>
                <polygon class="hs-arrow a-1"
                  points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596">
                </polygon>
                <polygon class="hs-arrow-fixed"
                  points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596">
                </polygon>
              </g>
            </svg>
          </div>
        </div>
        <div class="slide-button-grid__right">
      </div>
    </div>`;
    buttonContainer.innerHTML = skeleton;

    // Create button and add it to the component
    this.slidebutton = document.createElement('div');
    setTimeout(()=>{
      Object.assign(this.slidebutton, {
        className: 'slide-button',
        id: 'slideButton',
        draggable: true, // pixels
        ondragstart: (e)=> this.dragonStart(e),
        ondrag: (e)=> this.drag(e),
        ondragend: (e)=> this.dragonEnd(e)
      });
    }, 0);
    buttonContainer.firstElementChild.appendChild(this.slidebutton);

    // Create the this.dropzone and add it to the component
    this.dropzone = document.createElement('div');
    setTimeout(()=>{
      Object.assign(this.dropzone, {
        className: 'dropzone',
        id: 'dropzone', // pixels
        ondragenter: (e)=> this.dragonEnter(e),
        ondragleave: (e)=> this.dragonLeave(e),
        ondragover: (e)=>  this.dragonOver(e),
        ondrop: (e)=> this.drop(e)
      });
    }, 0);
    document.querySelector('slide-button-grid__right').appendChild(this.dropzone);
  }
  // static dragonDrop():any {
    // arrows = document.querySelector('.hs-animated-arrow-container');
  checky: any;
  eventtarget: any;
  arrows: any;
  animatedCheckMark: `
  <svg class="svg-checkmark" x="0px" y="0px" viewBox="0 0 135 110" width="35px" height="43px">
    <path class="check" d="M126.8,14L55.7,85.1L29.2,63.4"/>
  </svg>`;

  getArrows() {    
    return document.querySelector('.hs-animated-arrow-container');
  }

  public dragonStart(ev: DragEvent) {
    this.eventtarget = ev.target as HTMLElement;
    ev.dataTransfer.setData('text',this.eventtarget.id);

    return;
  }

  public drag(ev: DragEvent) {
    this.eventtarget = ev.target as HTMLElement;
    this.eventtarget.style.cursor = 'url(/assets/img/star.svg)';

    return;
  }

  public dragonEnd(ev: DragEvent) {
    this.eventtarget = ev.target as HTMLElement;

    return;
  }

  public dragonEnter(ev: DragEvent) {
    ev.preventDefault();
    return this.arrows.style.opacity = '0';

    
  }

  public dragonLeave(ev: DragEvent) {
    return this.arrows.style.opacity = '1';

    
  }

  public dragonOver(ev: DragEvent) {
    ev.preventDefault();
    const eventtarget = ev.target as HTMLElement;
    eventtarget.classList.add('drop-ready');

    return;
  }

  public drop(ev: DragEvent) {
    ev.stopPropagation();
    this.eventtarget = ev.target as HTMLElement;
    const data = ev.dataTransfer.getData('text');
    this.eventtarget.appendChild(document.getElementById(data));
    this.eventtarget.classList.remove('drop-ready');
    this.eventtarget.classList.add('dropped');

    this.checky = document.createElement('span');
    this.checky.classList.add('hs-animated-checkbox-container');
    this.checky.innerHTML = this.animatedCheckMark;
    this.eventtarget.appendChild(this.checky);
    this.eventtarget.classList.add('border-white');

    return false;
  }

  resetSlideButton() {
    this.dropzone.classList.remove('dropped');
    this.dropzone.classList.remove('drop-ready');
    this.checky.remove();
    document.querySelector('.grid-left__inner').appendChild(this.slidebutton);
    this.dropzone.classList.remove('border-white');
    this.arrows.style.opacity = '1';
  }

  static init(loc): any {
    return new this(loc);
  }

    return;
}

document.addEventListener('load', SlideButton.init('#slideButton'));

