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
  @Prop() navigate: any;
  @Prop() images: any;
  @Prop() currImage: any;
  @Prop() theta: any;
  @Prop() dataGap: any;
  @Prop() dataBfc: any;
  @Prop() rotateRotator3D: any;
  
  

  componentWillLoad() {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(()=> {
          const root = this.el.shadowRoot.querySelectorAll('.rotator3D');
          l(root);
          const gap = this.dataGap;
          const bfc = this.dataBfc;
         
          this.figure = this.el.shadowRoot.querySelector('figure');
          const figure = this.figure; // redefine so can be visible throughout scope
          this.nav =  this.el.shadowRoot.querySelector('nav');
          const nav = this.nav;
          this.images =  this.el.shadowRoot.querySelectorAll('img');
          const images = this.images;
          
          l(this.figure);
          l(this.nav);
          l(this.images);
          
          const n = this.images.length;
          const theta = this.theta =  2 * Math.PI / n;
          let currImage = 0;
          const parseFloatVar = parseFloat(getComputedStyle(images[0]).width);
          const figureWidth = getComputedStyle(figure).width;
          this.nav.style.width = figureWidth;
          setuprotator3D(
            n, 
            parseFloatVar, 
            figure, 
            images, 
            theta, 
            currImage);
          window.addEventListener('resize', () => { 
            setuprotator3D(n, 
              parseFloat(getComputedStyle(images[0]).width), 
              figure, 
              images, 
              theta, 
              currImage);
            this.nav.style.width = getComputedStyle(figure).width;
            l(parseFloatVar);
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
            
            rotateRotator3D(currImage);
            // const imageIndex = currImage;
            
            // figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
          }
              

          function rotateRotator3D(imageIndex: any): void {
            figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
          }
          
          this.navigate = function navigate(e) {
            e.stopPropagation();
            
            const t = e.target;
            if (t.tagName.toUpperCase() != 'BUTTON')
              return;
            
            if (t.classList.contains('next')) {
              currImage++;
            }
            else {
              currImage--;
            }
            const imageIndex = currImage;
            rotateRotator3D(currImage);
            // figure.style.transform = `rotateY(${imageIndex * -this.theta}rad)`;
          };
          
              
        }, 5);
          resolve(true);
      }
      catch(err) {
        reject(err.message);
      }
    });
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
            <button class="rotator3D__button prev" onClick={this.navigate}>
            
            </button>
            <button class="rotator3D__button next" onClick={this.navigate}>
              
            </button>
          </nav>
        </div>
      </Host>
    );
  }
}
