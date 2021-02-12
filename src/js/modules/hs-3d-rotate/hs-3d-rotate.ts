export class HS3DRotate {
  public rotatorContainer: HTMLDivElement;
  public HSThreeDRotator: HTMLDivElement;
  
  public cells: Array<any>;
  public cellCount; // cellCount set from cells-range input value
  public selectedIndex: any;
  public cellWidth: number | string;
  public cellHeight: number | string;
  public isHorizontal: any;
  public rotateFn: any;
  public radius;
  public theta;
  public prevButton: HTMLButtonElement | HTMLAnchorElement;
  public nextButton: HTMLButtonElement | HTMLAnchorElement;
  public cellsRange: any;
  public orientationRadios: Array<any>;
  public checkedRadio: HTMLInputElement;
  // public resolved: EventEmitter;
  // public fetcherror: EventEmitter;
  public headers: Headers | any;
  public method: string;
  public url: string;
 
  public available: boolean;
  public request: any;
  
  constructor(rotatorId: string, window: Window) {
    this.rotatorContainer = document.querySelector(`#${rotatorId}.hs-3drotate__container`);
    this.rotatorContainer.classList.add('hs-vanish');
    this.HSThreeDRotator = document.querySelector('.hs-3drotate');console.log(this.HSThreeDRotator);
    this.cells = Array.prototype.slice.call(this.HSThreeDRotator.querySelectorAll('.hs-3drotate__cell'));
    this.selectedIndex = 0;
    this.cellWidth = this.HSThreeDRotator.offsetWidth;
    this.cellHeight = this.HSThreeDRotator.offsetHeight;
    this.isHorizontal = true;
    this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
    this.orientationRadios = Array.prototype.slice.call(document.querySelectorAll('input[name="orientation"]'));
    this.checkedRadio = document.querySelector('input[name="orientation"]:checked');
    
    
    
    // previous button
    ((): void => { 
      this.prevButton = document.querySelector('.hs-3drotate__prev-button');
      this.prevButton.addEventListener('click', function() {
        this.selectedIndex--;
        this.rotate();
      });
    });
    
    // next button
    ((): void => {
      this.nextButton = document.querySelector('.hs-3drotate__next-button');
      this.nextButton.addEventListener('click', function() {
        this.selectedIndex++;
        this.rotate();
      });
    });
      
    // get hs-3d-rotate data
    ((): void => {
      if (window.fetch) {
        console.log('inside fetch vars');
        this.headers = this.rotatorContainer.getAttribute('data-headers');
        this.method = this.rotatorContainer.getAttribute('data-method');
        this.url = this.rotatorContainer.getAttribute('data-dataurl');
        
        this.available = true;
        const options = {
          method: this.method,
          headers: new Headers(this.headers),
        };
        this.request = new Request(this.url, options);
      
      
        fetch(this.request)
        .then(response => response.json())
        .then(data => {
          // this.resolved.emit(data);
          this.userOptions(data); console.log(data);
          
          for (const item of data) {
            const cellContentContainer: HTMLDivElement = document.createElement('div');
            cellContentContainer.classList.add('hs-threeDRotator__cell');
            const img: HTMLImageElement = document.createElement('img');
            
            img.classList.add('hs-threeDRotator-img');
            img.src = item.path;
            img.alt = item.alt;
            
            this.HSThreeDRotator.appendChild(cellContentContainer);
            cellContentContainer.appendChild(img);
          }
          return data;
        })
        .catch(console.error);
      }    
    });
    
    
    // range input
    ((): void => {
      this.cellsRange = document.querySelector('.hs-3drotate__cells-range');
      this.cellsRange.addEventListener('change', this.update3DRotator);
      this.cellsRange.addEventListener('input', this.update3DRotator);
    });
    
    // change orientation
    ((): void => {
      for (let i = 0; i < this.orientationRadios.length; i++) {
        const radio = this.orientationRadios[i];
        radio.addEventListener('change', this.onOrientationChange);
      }
    });
    
    
    
    window.onresize = () => {
      this.rotatorContainer.classList.add('hs-vanish');
      setTimeout(() => {
        this.update3DRotator;
      }, 500);
      this.rotatorContainer.classList.remove('hs-vanish');
    };
    
    
    document.addEventListener('shown.bs.modal', () => {
      this.rotatorContainer.classList.remove('hs-vanish');
      this.update3DRotator();
    });
    
    // set initials 
    this.onOrientationChange();
  }  
  
  // delete this
  userOptions(ops: JSON):void {
    console.log(`DATA: ${JSON.stringify(ops)}`);
    return;
  }

  
  
  

  rotate(): void {
    const angle = this.theta * this.selectedIndex * -1;
    this.HSThreeDRotator.style.transform = 'translateZ(' + -this.radius + 'px) ' + this.rotateFn + '(' + angle + 'deg)';
  }
  

  public onOrientationChange(): Promise<boolean|string> {
    return new Promise((resolve, reject) => {
      try {
        this.isHorizontal = this.checkedRadio.value == 'horizontal';
        this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
        this.update3DRotator();
        return resolve(true);
      }
      catch(e) {
        return reject(e);
      }
    });
  }
  
  update3DRotator(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.cellWidth = this.HSThreeDRotator.offsetWidth;
        this.cellHeight = this.HSThreeDRotator.offsetHeight;
        console.log(this.cellHeight);
        
        this.cellCount = this.cellsRange.value;
        this.theta = 360 / this.cellCount;
        const cellSize = this.isHorizontal ? this.cellWidth : this.cellHeight;
        this.radius = Math.round((cellSize / 2) / Math.tan(Math.PI / this.cellCount));
        
        for (let i = 0; i < this.cells.length; i++) {
          const cell = this.cells[i] as HTMLElement;
          if (i < this.cellCount) {
            // visible cell
            if (cell.classList.contains('hs-vanish')) {
              cell.classList.remove('hs-vanish');
            }
            const cellAngle = this.theta * i;
            cell.style.transform = this.rotateFn + '(' + cellAngle + 'deg) translateZ(' + this.radius + 'px)';
          } else {
            
            // hidden cell
            if (!cell.classList.contains('hs-vanish')) {
              cell.classList.add('hs-vanish');
            }
            cell.style.transform = 'none';
          }
        }
       
        return resolve(this.rotate());
      }
      catch(e) {
        
        return reject(e);
      }
    });
  }
}
