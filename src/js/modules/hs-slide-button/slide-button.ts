/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const l = console.log;
export default class SlideButton {
  public validateIssue: boolean;
  public slidebutton?: HTMLElement;
  public dropzone?: HTMLElement;
  public gridLeftInner?: HTMLDivElement;
  public gridRightInner?: HTMLDivElement;
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
  // public animatedCheckMark: SVGElement;

  constructor(
    location: string, 
    buttonContainer?: HTMLElement,
  ) {
    const l = console.log;
    this.validateIssue = false;
    buttonContainer = document.querySelector(location);

    
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
      </div>`;
    buttonContainer.innerHTML = skeleton;

    this.arrows = document.querySelector('.hs-animated-arrow-container');
    console.log(this.arrows);
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
    // this.slidebutton.addEventListener('mouseup', this.dropHandler);

    this.gridLeftInner = document.querySelector('#slideButton > div.slide-button-grid > div.slide-button-grid__left > div.grid-left__inner');
    l(this.gridLeftInner);
    this.gridLeftInner.appendChild(this.slidebutton);

    // Store the original coordinates as attributes
    const orgLocationX = this.slidebutton.getBoundingClientRect().left;
    const orgLocationY = this.slidebutton.getBoundingClientRect().top;
    this.slidebutton.setAttribute('data-origx', `${orgLocationX}`);
    this.slidebutton.setAttribute('data-origy', `${orgLocationY}`);

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
  }


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
    this.eventtarget.classList.add('shadow');
    this.dragParent = this.eventtarget.parentElement;
    window.addEventListener('drop', this.dropHandler(ev));
    
    this.initialX = ev.clientX - this.xOffset;
    this.initialY = ev.clientY - this.yOffset;
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
    if (this.active) {
      ev.preventDefault();
      
      this.currentX = ev.clientX - this.initialX;
      this.currentY = ev.clientY - this.initialY;

      this.xOffset = this.currentX;
      this.yOffset = this.currentY;
      
      this.slidebutton.style.transform = `translate3d(${this.currentX}px, ${this.currentY}px, 0)`;

      this.eventtarget = ev.target as HTMLElement;
      // this.eventtarget.style.cursor = 'move';
      this.slidebutton.classList.add('drag');

      this.dropzone.classList.add('stripes-background');

      this.arrows.style.display = 'none';
    }

    return;
  }

  public dragonEnd(ev: DragEvent) {
    this.eventtarget = ev.target as HTMLElement;

    this.initialX = this.currentX;
    this.initialY = this.currentY;

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
     // remove the 'drop' listener
    window.removeEventListener('drop', this.dropHandler);
    for (let el = this.slidebutton; el.tagName !== 'HTML'; el = el.parentElement) {
      if (el !== this.dragParent) { l('#p1 was dropped outside dragParent');
        setTimeout(() => {
          this.slidebutton.style.transform = `translate3d('0px', '0px', 0)`;
        }, 500);
        return;
      } else {
        l('#p1 was dropped inside dragParent');
        this.dropzone.appendChild(this.slidebutton);
        this.slidebutton.classList.remove('shadow');
        
        // the parent of the dragged element
        this.eventtarget.classList.remove('drop-ready');
        this.eventtarget.classList.remove('stripes-background');
        // this.slidebutton.classList.add('dropped');
        
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
        this.dropzone.appendChild(animatedCheckMark);
        // this.eventtarget.classList.add('border-white');
      }
    }

    

    setTimeout(this.resetSlideButton, 3000);
  }

  public drop(ev: DragEvent) {
    ev.stopPropagation();
    this.eventtarget = ev.target as HTMLElement;
    for (let el = this.slidebutton; el.tagName !== 'HTML'; el = el.parentElement) {
      if (el !== this.dragParent) { l('#p1 was dropped outside dragParent');
        setTimeout(() => {
          this.slidebutton.style.transform = `translate3d('0px', '0px', 0)`;
        }, 500);
        return;
      } else {
        l('#p1 was dropped inside dragParent');
        this.dropzone.appendChild(this.slidebutton);
        this.slidebutton.classList.remove('shadow');
        
        // the parent of the dragged element
        this.eventtarget.classList.remove('drop-ready');
        this.eventtarget.classList.remove('stripes-background');
        // this.slidebutton.classList.add('dropped');
        
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
        this.dropzone.appendChild(animatedCheckMark);
        // this.eventtarget.classList.add('border-white');
      }
    }

    

    setTimeout(this.resetSlideButton, 3000);
    // this.dropzone.appendChild(this.slidebutton);
    // this.dropHandler(ev);
    return;
  }

  goHome() {
    if (this.slidebutton.parentElement === document.querySelector('.grid-left__inner')) {
      this.slidebutton.style.transform = `translate3d('0px', '0px', 0)`;
    } else {
      document.querySelector('.grid-left__inner').appendChild(this.slidebutton);
    }
    // const x = this.slidebutton.dataset.origx;
    // const y = this.slidebutton.dataset.origy;
    // this.slidebutton.style.top = `${x}`;
    // this.slidebutton.style.left = `${y}`;
  }


  resetSlideButton() {
    this.dropzone.classList.remove('dropped');
    this.dropzone.classList.remove('drop-ready');
    this.dropzone.querySelector('.svg-checkmark').remove();
    
    document.querySelector('.grid-left__inner').appendChild(this.slidebutton);
    this.dropzone.classList.remove('border-white');
    this.arrows.style.display = 'unset';
  }

  static init(loc): any {
    return new this(loc);
  }

    return;
}

document.addEventListener('load', SlideButton.init('#slideButton'));
