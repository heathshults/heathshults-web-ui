/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Host, Prop, Method, Element, Event, EventEmitter, State, Listen, h } from '@stencil/core';
const l = console.log;
@Component({
  tag: 'hs-rotator3d',
  styleUrl: './rotator3D.scss',
  shadow: true,
})

export class HS3dRotator {
  @Element() el: HTMLElement;
  @Prop() rotator3DElement: any;
  @Prop() figure: HTMLElement;
  @Prop() nav: any;
  @Prop() images: any;
  @Prop() currImage: any;
  @Prop() theta: any;
  @Prop() dataGap: any;
  @Prop() dataBfc: any;
  

  componentWillLoad() {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(()=> {
          const root = this.el.shadowRoot.querySelectorAll('.rotator3D');
          l(root);
          const gap = this.dataGap;
          const bfc = this.dataBfc;
         
          this.figure = this.el.shadowRoot.querySelector('figure');
          l(this.figure);
          this.nav =  this.el.shadowRoot.querySelector('nav');
          l(this.nav);
          this.images =  this.el.shadowRoot.querySelectorAll('img');
          l(this.images);
          const n = this.images.length;


          this.theta =  2 * Math.PI / n;
          this.currImage = 0;
          const parseFloatVar = parseFloat(getComputedStyle(this.images[0]).width);
          
          setuprotator3D(n, parseFloatVar, this.figure, this.images, this.theta, this.currImage);
          window.addEventListener('resize', () => { 
            setuprotator3D(n, parseFloatVar, this.figure, this.images, this.theta, this.currImage);
          });
        
          function setuprotator3D(n, s, figure, images, theta, currImage) {
            const apothem = s / (2 * Math.tan(Math.PI / n));
            
            figure.style.transformOrigin = `50% 50% ${- apothem}px`;
        
            for (let i = 0; i < n; i++)
              images[i].style.padding = `${gap}px`;
            for (let i = 1; i < n; i++) {
              images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
              images[i].style.transform = `rotateY(${i * theta}rad)`;
            }
            if (bfc)
              for (let i = 0; i < n; i++)
                 images[i].style.backfaceVisibility = 'hidden';
            
            this.rotateRotator3D(currImage);
          }
              
              
          
              
        }, 5);
          resolve(true);
      }
      catch(err) {
        reject(err.message);
      }
    });
    
  }
  
  navigate(e) {
    e.stopPropagation();
    
    const t = e.target;
    if (t.tagName.toUpperCase() != 'BUTTON')
      return;
    
    if (t.classList.contains('next')) {
      this.currImage++;
    }
    else {
      this.currImage--;
    }
    
    this.rotateRotator3D(this.currImage);
  }

  rotateRotator3D(imageIndex: any): void {
    this.figure.style.transform = `rotateY(${imageIndex * -this.theta}rad)`;
  }
  
  render() {
    return (
      <Host>
        <div id="rotator3D" class="rotator3D" data-gap="20">
          <figure class="rotator3D__figure">
            <img class="rotator3D__img" src="/assets/img/portfolio/bowlopolis/episodes-page-800x533.jpg" alt="episodes-page"/>
            <img class="rotator3D__img" src="/assets/img/portfolio/bowlopolis/kids-club-page-800x533.jpg" alt="kids-club-page"/>
            <img class="rotator3D__img" src="/assets/img/portfolio/bowlopolis/games-page-800x533.jpg" alt="games-page"/>
            <img class="rotator3D__img" src="/assets/img/portfolio/bowlopolis/episodes-page-800x533.jpg" alt="episodes-page"/>
            <img class="rotator3D__img" src="/assets/img/portfolio/bowlopolis/kids-club-page-800x533.jpg" alt="kids-club-page"/>
            <img class="rotator3D__img" src="/assets/img/portfolio/bowlopolis/games-page-800x533.jpg" alt="games-page"/>          
          </figure>
          <nav class="rotator3D__nav">
            <button class="rotator3D__button prev" onClick={this.navigate}>Prev</button>
            <button class="rotator3D__button next" onClick={this.navigate}>Next</button>
          </nav>
        </div>
      </Host>
    );
  }
}
