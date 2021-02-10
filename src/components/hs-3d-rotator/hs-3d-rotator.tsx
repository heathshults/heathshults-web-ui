import { Component, Host, Prop, Element, Event, EventEmitter, State, Listen, h } from '@stencil/core';

@Component({
  tag: 'hs-3d-rotator',
  styleUrl: 'hs-3d-rotator.scss',
  shadow: true,
})
export class HS3dRotator {
  @Element() el: HTMLElement;
  @Prop() HSThreeDRotator: any;
  @Prop() cellCount: any; // CellCount set from cells-range input value
  @Prop() cellWidth: number | string;
  @Prop() cellHeight: number | string;
  @Prop({reflect: true}) minCells: 3;
  @Prop({reflect: true}) startCellCount: 6;
  @Prop({reflect: true}) maxCells: 15;
  // eslint-disable-next-line @typescript-eslint/ban-types
  private _update3DRotator: any;
  public get update3DRotator(): any {
    return this._update3DRotator;
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public set update3DRotator(value) {
    this._update3DRotator = value;
  }
  
  // Fetch the data
  @Prop() headers: Headers = new Headers();
  @Prop() method = 'GET';
  @Prop() url = '';
  @Prop() jdata: Array<any>;

  @Event() resolved: EventEmitter;
  @Event() fetcherror: EventEmitter;

  @State() available = false;
  @State() request: any;


  componentWillLoad() {
    // this.makeRequest();
    setTimeout(() => {
      this.HSThreeDRotator = this.el.shadowRoot.querySelector('.hs-threeDRotator');
      
      const cells: any = this.el.shadowRoot.querySelectorAll('.hs-threeDRotator__cell');
      const orientationRadios: any = this.el.shadowRoot.querySelectorAll('input[name="orientation"]');
      const checkedRadio: HTMLInputElement = this.el.shadowRoot.querySelector('input[name="orientation"]:checked');
      const cellsRange: HTMLInputElement = this.el.shadowRoot.querySelector('.cells-range');
      // console.log(this.HSThreeDRotator);

      if (self.fetch) {
        this.available = true;
        const options = {
          method: this.method,
          headers: new Headers(this.headers),
        };
        this.request = new Request(this.url, options);
      }
      fetch(this.request)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          console.log(this.HSThreeDRotator);
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
        })
        .catch(console.error);

      this.HSThreeDRotator = this.el.shadowRoot.querySelector('.hs-threeDRotator');

      const rotatorWrap: any = this.HSThreeDRotator;
      let selectedIndex = 0;
      let cellSize: any;
      this.cellWidth = rotatorWrap.offsetWidth;
      this.cellHeight = rotatorWrap.offsetHeight;
      
    
      let isHorizontal: boolean | string = true;
      let rotateFn: any = isHorizontal? 'rotateY':'rotateX';
      let radius: number;
      let theta: number;
      console.log(this.cellWidth, this.cellHeight );

      function rotateCarousel(): any {
        const angle = theta * selectedIndex * -1;
        rotatorWrap.style.transform = 'translateZ('+-radius+'px) '+
          rotateFn+'('+angle+'deg)';
      }

      const prevButton: HTMLButtonElement = this.el.shadowRoot.querySelector('.previous-button');
      prevButton.addEventListener('click',function() {
        selectedIndex--;
        rotateCarousel();
      });
      
      const nextButton: HTMLButtonElement = this.el.shadowRoot.querySelector('.next-button');
      nextButton.addEventListener('click',function() {
        selectedIndex++;
        rotateCarousel();
      });

       this.update3DRotator = ()=> {
        this.cellWidth = rotatorWrap.offsetWidth;
        this.cellHeight = rotatorWrap.offsetHeight;
        console.log(this.cellHeight);
        this.cellCount = cellsRange.value;
        theta = 360/this.cellCount;
        cellSize = isHorizontal ? this.cellWidth : this.cellHeight;
        radius = Math.round((cellSize / 2) / Math.tan(Math.PI / this.cellCount));
        
        cells.forEach((cell: HTMLElement, i) => {
          if(i < this.cellCount) {
            // visible cell
            cell.classList.add('opacity-max');
            const cellAngle = theta*i;
            cell.style.transform = `${rotateFn}(${cellAngle}deg) translateZ(${radius}px)`;
          } else {
            // hidden cell
            cell.classList.remove('opacity-max');
            cell.classList.add('opacity-none');
            cell.style.transform = 'none';
          }
        });

        return rotateCarousel();
      };
      function accessUpdater() {
        this.HSThreeDRotator = this.el.shadowRoot.querySelector('.hs-threeDRotator');
        this.cellWidth = this.HSThreeDRotator.offsetWidth;
        this.cellHeight = this.HSThreeDRotator.offsetHeight;
        console.log(this.cellHeight);
        this.cellCount = cellsRange.value;
        theta = 360/this.cellCount;
        cellSize = isHorizontal ? this.cellWidth : this.cellHeight;
        radius = Math.round((cellSize / 2) / Math.tan(Math.PI / this.cellCount));
        
        cells.forEach((cell: HTMLElement, i) => {
          if(i < this.cellCount) {
            // visible cell
            cell.classList.add('opacity-max');
            const cellAngle = theta*i;
            cell.style.transform = `${rotateFn}(${cellAngle}deg) translateZ(${radius}px)`;
          } else {
            // hidden cell
            cell.classList.remove('opacity-max');
            cell.classList.add('opacity-none');
            cell.style.transform = 'none';
          }
        });

        return rotateCarousel();
      }
      cellsRange.addEventListener('change', this.update3DRotator);
      cellsRange.addEventListener('input', this.update3DRotator);

      (function() {
        for(let i = 0;i<orientationRadios.length;i++) {
          const radio = orientationRadios[i];
          radio.addEventListener('change', onOrientationChange);
        }
      })();

      function onOrientationChange() {
        isHorizontal = checkedRadio.value == 'horizontal';
        rotateFn = isHorizontal? 'rotateY':'rotateX';
        accessUpdater();
      }

      // set initials
      onOrientationChange();
      
      
    }, 2000);
  }
  @Listen('resize', {target: 'window'})
   resizeHandler(event: Window): void {
     console.log(event);
     this.update3DRotator;
   }
  
 

  render() {
    return (
      <Host>
        <div class="container hs-3drotate-conainer">
          
          <div class="scene">
            <div class="col hs-rotate3d-nav text-center">
              <button class="hs-rotate3d-prev previous-button"></button> 
              <input 
                class="cells-range" 
                type="range" 
                min={this.minCells}
                max={this.maxCells} 
                value={this.startCellCount} /> 
                <button class="hs-rotate3d-next next-button"></button>
            </div>
            <div class="hs-threeDRotator">
            
             
              
            </div>
          </div>
        
          <div class="hs-threeDRotator-options">
              Orientation:
              <label>
                <input type="radio" name="orientation" value="horizontal" checked />
                horizontal
              </label>
              <label>
                <input type="radio" name="orientation" value="vertical" />
                vertical
              </label>
          </div>
        </div>
      </Host>
    );
  }
}
