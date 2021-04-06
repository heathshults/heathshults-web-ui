/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { EZForm } from '../ez-form';
const l = console.log;
export default class SlideButton {
  public validateIssue: boolean;
  public slidebutton?: HTMLElement;
  public dropzone?: HTMLElement;
  public gridLeftInner?: HTMLDivElement;
  public gridRightInner?: HTMLDivElement;
  public createButton?: any;
  public arrows?: any;
  public active = false;
  public currentX: number | any;
  public currentY: number | any;
  public initialX: number | any;
  public initialY: number | any;
  public xOffset: number | any = 0;
  public yOffset: number | any = 0;
  public checky: any;
  public eventtarget: any;
  public dragParent: HTMLElement;
  public cloner: HTMLElement;
  public cloneId: string | any;
  public redoButton: HTMLAnchorElement;
  // public ezform = new EZForm('#ezform');
  // public animatedCheckMark: SVGElement;

  constructor(
    location: string, 
    buttonContainer?: HTMLElement,
  ) {
    const makeStles = EZForm.styles();
    const l = console.log;
    this.validateIssue = false;
    buttonContainer = document.querySelector(location);
        // listener
    document.addEventListener('readySubmit', function (e) {
      const ez = new EZForm('#ezform');
      // EZForm.prototype.validate();
    }, false);
   
    const skeleton = `
      <div class="slide-button-grid">
        <div class="slide-button-grid__left">
          <div class="grid-left__inner"></div>
          </div>
          <div class="slide-button-grid__center">
            <span class="hs-slide-button__label">SEND</span>
            <div id="arrowsContainer" class="hs-animated-arrow-container">
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
      </div>
      <div class="mx-auto"><a id="redoButton" href="javascript:void(0);">Reset Button</a></div>`;
    buttonContainer.innerHTML = skeleton;

    this.arrows = document.querySelector('.hs-animated-arrow-container');
    console.log(this.arrows);

    // Create button and add it to the component
    this.slidebutton = document.createElement('div');
    setTimeout(()=>{
      Object.assign(this.slidebutton, {
        className: 'slide-button',
        id: 'slidebutton',
        draggable: true, // pixels
        ondragstart: (e)=> this.dragonStart(e),
        ondrag: (e)=> this.drag(e),
        ondragend: (e)=> this.dragonEnd(e)
      });
    }, 0);

    // this.slidebutton.addEventListener('mouseup', this.dropHandler);

    this.gridLeftInner = document.querySelector('#slideButton > div.slide-button-grid > div.slide-button-grid__left > div.grid-left__inner');
    l(this.gridLeftInner);
    this.gridLeftInner.appendChild(this.slidebutton);

    // Store the original coordinates as attributes
    // this.initialX = this.slidebutton.getBoundingClientRect().left;
    // this.initialY = this.slidebutton.getBoundingClientRect().top;
    // this.slidebutton.setAttribute('data-origx', `${this.initialX}`);
    // this.slidebutton.setAttribute('data-origy', `${this.initialY}`);

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
    this.gridRightInner = document.querySelector('.slide-button-grid__right');
    this.gridRightInner.appendChild(this.dropzone);

    this.redoButton = document.querySelector('#redoButton');
    this.redoButton.addEventListener('click', this.resetSlideButton(ev));
  }

  // Custom event and emitter to for next steps
  readyToSend = new Event('readySubmit');
  // setTranslate(xPos, yPos, el) {
  //   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  // }

  // public mouseupHandler(ev: DragEvent) {
  //   const slidebuttonParent = document.querySelector('.slidebutton').parentElement;
    
  //   if (slidebuttonParent.classList.contains('dropzone')) { 
  //     this.dropHandler(ev);
  //   } else {
  //     this.goHome();
  //   }
  // } 
  
  public dragonStart(ev: DragEvent) {
    this.eventtarget = ev.target as HTMLElement;
    this.eventtarget.classList.add('fadeout');
    this.eventtarget.addEventListener('mouseup', this.dropHandler(ev));
    this.dragParent = this.eventtarget.parentElement;
    
    // this.initialX = ev.clientX - this.xOffset;
    // this.initialY = ev.clientY - this.yOffset;
    // const dragImg = new Image();
    // dragImg.src = '/assets/img/icons/drag.svg';
    // ev.dataTransfer.setDragImage(dragImg, 0, 0);
    ev.dataTransfer.setData('text/plain',this.eventtarget.id);
    ev.dataTransfer.effectAllowed = "move";

    if (ev.target === this.slidebutton) {
      this.active = true;
    }


      

    return;
  }

  public drag(ev: DragEvent) {
    this.eventtarget = ev.target as HTMLElement;
    ev.dataTransfer.setData("text", this.eventtarget.id);
    if (this.active) {
     
      this.currentX = ev.clientX;
      this.currentY = ev.clientY;

      
      this.slidebutton.style.transform = `translate3d(${this.currentX}px, ${this.currentY}px, 0)`;

      // this.eventtarget.style.cursor = 'move';
      this.slidebutton.classList.add('drag');
      this.dropzone.classList.add('stripes-background');
      this.arrows.style.display = 'none';
    }

    return;
  }

  public dragonEnd(ev: DragEvent) {
    ev.preventDefault();
    this.eventtarget = ev.target as HTMLElement;
    this.dragParent.appendChild(this.eventtarget);
    // this.slidebutton.style.transform = `translate3d('0px', '0px', 0)`;
    this.active = false;

    return;
  }

  public dragonEnter(ev: DragEvent) {
    ev.preventDefault();
    this.eventtarget = ev.target as HTMLElement;
    this.dropzone.classList.add('drop-ready');
   
    return this.arrows.style.opacity = '0';
    
  }

  public dragonLeave(ev: DragEvent) {
    this.dropzone.classList.remove('drop-ready');
    return this.arrows.style.opacity = '1';
  }

  public dragonOver(ev: DragEvent) {
    ev.preventDefault();
    this.eventtarget = ev.target as HTMLElement;
    // ev.dataTransfer.dropEffect = "move";
    
    return;
  }

  public dropHandler(ev): any {
    ev.stopPropagation();
    this.eventtarget = ev.target as HTMLElement;
    this.slidebutton.classList.add('fadeout');
    this.slidebutton.setAttribute('style', '');
    this.slidebutton.classList.remove('shadow', 'drag');

     // remove the 'mouseup' listener
    window.removeEventListener('mouseup', this.dropHandler);
    this.slidebutton.classList.replace('fadeout', 'fadein');
    this.gridLeftInner.appendChild(this.slidebutton);
    

    // ev.stopPropagation();
  }

  public drop(ev: DragEvent) {
    ev.preventDefault();
    this.eventtarget = ev.target as HTMLElement;
    const data = ev.dataTransfer.getData("text/plain");
    this.cloner = document.getElementById(data).cloneNode(true) as HTMLElement;
    this.cloneId = this.generateID();
    this.cloner.id = this.cloneId;
    
    l('dropped in dropzone');
    this.eventtarget.appendChild(this.cloner as Node);
    this.cloner.classList.add('shrinkaway');

  
    this.eventtarget.classList.remove('drop-ready', 'stripes-background');
    this.animatedCheckmark();
    
    document.dispatchEvent(this.readyToSend);
    
    return;
  }

  animatedCheckmark() {
    const animatedCheckMark = document.createElement('svg');
    Object.assign(animatedCheckMark, {
      className: 'svg-checkmark',
      id: 'aniCheck',
      x: '0px',
      y: '0px',
      viewBox: '0 0 135 110',
      width: '35px',
      height: '43px'
    });
    animatedCheckMark.innerHTML = `
    <svg class="svg-checkmark" x="0px" y="0px" viewBox="0 0 135 110" width="35px" height="43px">
      <path class="check" d="M126.8,14L55.7,85.1L29.2,63.4"/>
    </svg>`;

    this.checky = document.createElement('span');
    this.checky.classList.add('hs-animated-checkbox-container');
    this.checky.innerHTML = animatedCheckMark;
    
    return this.dropzone.appendChild(animatedCheckMark);
  }


  resetSlideButton(ev): any {
    this.dropzone.classList.remove('dropped', 'drop-ready', 'border-white');
    this.dropzone.querySelector('.svg-checkmark').remove();
    this.cloner.remove();
    // this.gridLeftInner.insertAdjacentElement('beforeend', this.slidebutton);

    this.arrows.style.display = 'unset';
  }

  static init(loc): any {
    return new this(loc);
  }


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
  generateID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
}

document.addEventListener('load', SlideButton.init('#slideButton'));
