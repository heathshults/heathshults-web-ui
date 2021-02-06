import { Component, Host, Element, Prop, Method, h } from '@stencil/core';
import Carousel from  '../../scss/bootstrap/js/src/carousel';

@Component({
  tag: 'hs-carousel',
  styleUrl: 'hs-carousel.scss',
  shadow: true,
})

export class HsCarousel {
  @Element() el: HTMLElement;
  @Prop() carousel?: any;
  @Prop() carouselContainer?: any;
  @Prop() items?: any;
  @Prop() cssClassList?: string;
  @Prop() indicatorList?: HTMLLIElement; 
  @Prop() indicator?: HTMLLIElement;
  @Prop() dataIndicatorTarget?: string;
  @Prop() dataSlideTo?: string;
  
  @Method() async setAttributes(element: HTMLElement, attrs: Record<string, any>): Promise<void> {
    for(const key in attrs) {
      element.setAttribute(key, attrs[key]);
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  componentWillLoad() {
    this.carouselContainer = document.querySelector(this.carouselContainer);
    this.carousel = new Carousel(this.carouselContainer);
    function carouselItems(): Promise<any> {
      return new Promise((resolve, reject): any => {
        setTimeout((): any => {
          try {
            this.items = this.el.shadowRoot.querySelectorAll('.carousel-item');
            this.indicatorList = this.el.shadowRoot.querySelector('#carouselIndicators');
            this.items.forEach((_item, i): any => {
              this.indicator = document.createElement('li');
              this.indicator.classList.add(this.cssClassList);
              
              if (!this.dataIndicatorTarget) {
                this.setAttributes(this.indicator, {
                  'data-bs-target': '#carouselCaption',
                  'data-bs-slide-to': i
                });  
              } else {
                this.setAttributes(this.indicator, {
                  'data-bs-target': this.dataIndicatorTarget,
                  'data-bs-slide-to': i
                });
              }
              this.indicatorList.appendChild(this.indicator);
            });
            resolve(true);
          }
          catch(error) { reject(false) }
        }, 700);
      });
    }
    carouselItems()
    .then(res => console.log(res));
  }
  
  render() {
    return (
      <Host>
        <div id="carouselCaptions" class="carousel slide" data-bs-ride="carousel">
          <ol id="carouselIndicators" class="carousel-indicators">
            // <li data-bs-target="#carouselCaption" data-bs-slide-to="0" class="active"></li>
            // <li data-bs-target="#carouselCaption" data-bs-slide-to="1"></li>
            // <li data-bs-target="#carouselCaption" data-bs-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <slot></slot>
          </div>
          <a class="carousel-control-prev" href="#carouselCaptions" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselCaptions" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </Host>
    );
  }

}
