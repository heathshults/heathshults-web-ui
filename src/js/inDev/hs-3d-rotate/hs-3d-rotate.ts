/* eslint-disable prefer-const */
import  * as chalk from 'chalk';
const l = console.log;

export default class HS3DRotate {
  public rotatorContainer: HTMLDivElement;
  public hs3dRotate: HTMLDivElement;
  public prevButton: HTMLButtonElement;
  public nextButton: HTMLButtonElement;
  public cellsRange: HTMLInputElement;
  public orientationRadios:any;
  public checkedRadio: HTMLInputElement;
  public dataMethod: string;
  public dataURL: string;
  public dataHeaders: any;
  public options: any;
  public cells: any;
  public cellSize: any;
  public cellCount: any; // cellCount set from cells-range input value
  public selectedIndex: any;
  public cellWidth: any;
  public cellHeight: any;
  public isHorizontal: any;
  public rotateFn: any;
  public radius;
  public theta;
  public orientationFlag: boolean;
  public rotateEventsFlag:boolean;
  public hs3dRotatorEvents: any;
    
  constructor(dataMethod1?: string, dataURL1?: string, dataHeaders1?: string) {
    this.rotatorContainer = document.querySelector('.hs-3drotate__container');
    this.rotatorContainer.classList.add('hs-vanish');
    this.hs3dRotate = document.querySelector('.hs-3drotate');
    this.cells = this.hs3dRotate.querySelectorAll('.hs-3drotate__cell');
    this.prevButton = document.querySelector('.hs-3drotate__prev-button');
    this.nextButton = document.querySelector('.hs-3drotate__next-button');
    this.cellsRange = document.querySelector('.hs-3drotate__cells-range');
    this.orientationRadios = document.querySelectorAll('input[name="orientation"]');
    this.checkedRadio = document.querySelector('input[name="orientation"]:checked');
    this.selectedIndex = 0;
    this.dataURL = this.rotatorContainer.getAttribute('data-dataurl');
    this.orientationFlag = false;
    
    if (!dataMethod1) {
      this.dataMethod= this.rotatorContainer.getAttribute('data-datamethod');
    } else {
      this.dataMethod = dataMethod1;
    }
    if (!dataHeaders1) {
      this.dataHeaders = this.rotatorContainer.getAttribute('data-dataheaders');
    } else {
      this.dataHeaders = dataHeaders1;
    }
    if (!dataURL1) {
      dataURL1 = this.dataURL;
    } else {
      this.dataURL = dataURL1;
    }
    
    this.cells = this.hs3dRotate.querySelectorAll('.hs-3drotate__cell');
    this.cellWidth = this.hs3dRotate.offsetWidth;
    this.cellHeight = this.hs3dRotate.offsetHeight;
    this.isHorizontal = true;
    this.rotateFn = this.isHorizontal? 'rotateY':'rotateX';
    this.orientationFlag = false;
    this.rotateEventsFlag = false;
    // l( cellWidth, cellHeight );
    l(chalk.yellow(`
    rotatorContainer: ${this.rotatorContainer}
    dataMethod: ${this.dataMethod}
    headers: ${this.dataHeaders}
    url: ${this.dataURL}
    cells: ${this.cells}
    prevButton: ${this.prevButton}
    nextButton: ${this.nextButton}
    cellsRange: ${this.cellsRange}
    orientationRadios: ${this.orientationRadios}
    cellCount: ${this.cellCount}
    selectedIndex: ${this.selectedIndex}
    cellWidth: ${this.cellWidth}
    cellHeight: ${this.cellHeight}
    isHorizontal: ${this.isHorizontal}
    rotateFn: ${this.rotateFn}
    `));
    
    this.prevButton.addEventListener('click',() => {
      this.selectedIndex--;
      this.rotate3dRotator();
    });

    this.nextButton.addEventListener('click',() => {
      this.selectedIndex++;
      this.rotate3dRotator();
    });

    this.cellsRange.addEventListener('change',this.update3DRotator);
    this.cellsRange.addEventListener('input',this.update3DRotator);
    this.hs3dRotatorEvents();
    this.Get3dRotatorData();
  }
    
  Get3dRotatorData(): void {
    if (window.fetch) {
      l('inside fetch vars');
      if (typeof this.dataMethod === 'undefined' || this.dataMethod === ''){
        this.dataMethod = 'GET';
      }
      if (typeof this.dataHeaders === 'undefined' || this.dataHeaders === '') {
        this.dataHeaders = {'credentials': 'same-origin'};
      } else if (this.dataHeaders) {
        this.dataHeaders = `{${this.dataHeaders}}`;
      }
      if (typeof this.dataURL === 'undefined' || this.dataURL === '') {
        return;
      }
      
      this.options = {
        method: this.dataMethod,
        headers: new Headers({'Content-Type': 'text/json'}),
      };
      
      if (this.dataHeaders) {
        this.options.append(`${this.dataHeaders}`);
      }
      
      const request = new Request(this.dataURL, this.options);
      l(`request: ${request}`);
      
      // get hs-3d-rotate data - request data
      fetch(request)
      .then(response => response.json())
      .then(data => {
        
        // resolved.emit(data);
        for (const item of data) {
          const cellContentContainer: HTMLDivElement = document.createElement('div');
          cellContentContainer.classList.add('hs-3drotate__cell');
          const img: HTMLImageElement = document.createElement('img');
          
          img.classList.add('hs-3drotate__img');
          img.src = item.path; l(`IMG: ${img.src}`);
          img.alt = item.alt;
          
          this.hs3dRotate.appendChild(cellContentContainer);
          cellContentContainer.appendChild(img);
        }
        
        // return data;
      })
      .catch(console.error);
    }    
    return;
    }

    rotate3dRotator(): any {
      const angle = this.theta * this.selectedIndex * -1;
      this.hs3dRotate.style.transform=`translateZ(${-this.radius}px) ${this.rotateFn}(${angle}deg)`;
    }

    update3DRotator(): any {
      this.cellWidth = this.hs3dRotate.offsetWidth;
      this.cellHeight = this.hs3dRotate.offsetHeight;
      l(this.cellHeight);
      this.cellCount = this.cellsRange.value;
      this.theta = 360 / this.cellCount;
      this.cellSize = this.isHorizontal? this.cellWidth:this.cellHeight;
      this.radius = Math.round((this.cellSize / 2) / Math.tan(Math.PI / this.cellCount));
      for(let i = 0; i < this.cells.length; i++) {
        const cell = this.cells[i];
        if(i < this.cellCount) {
          // visible cell
          cell.style.opacity = 1;
          const cellAngle = this.theta * i;
          cell.style.transform = `${this.rotateFn}(${cellAngle}deg) translateZ(${this.radius}px)`;
        } else {
          // hidden cell
          cell.style.opacity = 0;
          cell.style.transform = 'none';
        }
      }

      return this.rotate3dRotator();
    }
    
  HS3dRotateEvents(): any {
    function makeOrientationEvent() {
      for(let i = 0; i < this.orientationRadios.length; i++) {
        const radio = this.orientationRadios[i];
        radio.addEventListener('change', this.onOrientationChange);
      }
      this.orientationFlag = true;
    }
    
    if (!this.orientationFlag) {
      makeOrientationEvent();
    }
    
    function onOrientationChange(): any {
      this.isHorizontal = this.checkedRadio.value == 'horizontal';
      this.rotateFn = this.isHorizontal? 'rotateY':'rotateX';
      
      return this.update3DRotator();
    }

    // set initials 
    onOrientationChange();

    window.onresize = () => {
      setTimeout(() => {this.update3DRotator}, 500);
      
      document.addEventListener('shown.bs.modal', () =>{  
        this.rotatorContainer.classList.remove('hs-vanish');
        this.update3DRotator();
      });
    };
    
    if (this.orientationFlag && !this.rotateEventsFlag) {
      this.rotateEventsFlag = true;
      this.HS3dRotateEvents();
    }
  }
}
