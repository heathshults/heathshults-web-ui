import { Component, Prop, State, Method, Element, Event, EventEmitter, Listen, h } from '@stencil/core';
import cls from 'classnames';
import Hammer from 'hammerjs';

@Component({
  tag: 'hs-carousel',
  styleUrl: '../../scss/components/components.hs-carousel.scss'
})
export class HSCarousel {
  @Prop() timing: number = 400; //  Integer: represents the animation value between slides
  @Prop() childsClassName: string = '.hs-slide'; // String : slider child slides elements
  @Prop() directory:string = 'ltr'; // String: Slider direction
  @Prop() threshold:number = 10; // Integer: refer to hammerjs docs
  @Prop() showButtons:boolean= false; //  Boolean: show or hide Next / Prev buttons
  @Prop() infinite:boolean = false; //  Boolean: startover when the slider reaches the end.
  @Prop() showPointers:boolean = true; //  Boolean: show or hide pager pointers.
  @Prop() showThumbnails:boolean = false; //  Boolean: show or hide Thumbnails.
  @Prop({ mutable: true }) autoPlay:boolean = false; //  Boolean: Slides will automatically transition.
  @Prop() autoPlayTimer:number = 3000; //  Integer: autoplay interval timeout.
  @Prop() itemsPerSlide:number = 1;

  @Event() afterCarouselInit: EventEmitter;
  @Event() afterCarouselItem: EventEmitter;


  goToNext = (e?: any) => {
    e && e.preventDefault();
    this.slideTo(this.current - this.operator );
  }


  goToPrevious = (e?: any) => {
    e && e.preventDefault();
    this.slideTo(this.current + this.operator );
  }

  @Method()
  async setPan(enabled: boolean) {
    this.panEnabled = enabled;
    this.initGesture();
  }

  @Method()
  async slideTo(n: number) {
    let last = this.infinite ? 0 : this.slideCount - 1;
    this.current = n < 0 ? 0 : (n > this.slideCount - 1 ? last : n )
    this.pos = this.operator * this.current * this.slideWidth;
    let prevSlide = this.parent.querySelector(`${this.childsClassName}.active`);

    // @TODO: Need to get this moved to JSX
    this.slider.classList.add('is-animating');
    prevSlide && prevSlide.classList.remove('active');
    this.slides[this.current].classList.add('active');

    if(this.timeout){
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout( _ => {
      this.slider.classList.remove( 'is-animating');
      this.afterCarouselItem.emit({current:this.current});
    }, this.timing )

    this.translate(this.pos);
  }

  @State() slideCount: number = 0;
  @State() current: number = 0;

  @Element() parent: HTMLElement;

  // normal properties
  pos: number = 0;
  panEnabled: boolean = true;
  operator: number;
  slider: HTMLElement;
  slides: NodeListOf<HTMLElement>;
  slideWidth: number;
  itemWidth: number;
  timeout: any;
  autoplayerInterval: any;
  sliderManager: any;

  init() {
    this.operator = (this.directory === 'rtl' ? 1 : -1);
    this.slider = this.parent.querySelector('.hs-slides');
    this.slides = this.parent.querySelectorAll(this.childsClassName);
    this.slideCount = Math.ceil(this.slides.length / this.itemsPerSlide);
    this.slideWidth = this.parent.offsetWidth;
    this.itemWidth = this.parent.offsetWidth / this.itemsPerSlide;
    this.parent.style.direction = this.directory;
    this.slides[0].classList.add('active');

    Array.from(this.slides).forEach((el, k) => {
      el.dataset.item = k.toString();
      el.style.minWidth = `${this.itemWidth}px`;
    });

    this.afterCarouselInit.emit({ current: this.current });
    if (this.autoPlay) {
      this.initAutoPlay();
    }
  }

  initGesture() {
    if(this.sliderManager){
      this.sliderManager.destroy();
      this.sliderManager = null;
    }

    let touchAction = this.panEnabled ? {touchAction: 'pan-y'} : {touchAction: 'none'} ;
    this.sliderManager = new Hammer.Manager(this.slider, {
      ...touchAction,
      recognizers: [
          [Hammer.Pan,{ direction: Hammer.DIRECTION_ALL }],
      ]
    });

    this.sliderManager.on('panstart panmove panend pancancel panleft panright panup pandown', this.handleSwipe);
  }

  initAutoPlay() {
    this.autoplayerInterval = setInterval(_=> {
      this.goToNext();
    }, this.autoPlayTimer);
  }

  removeAutoPlay() {
    if (this.autoPlay) {
      this.autoPlay = false;
      clearInterval(this.autoplayerInterval);
    }
  }

  translate(to: number) {
    requestAnimationFrame(_ => {
      this.slider.style.transform = `translateX(${to}px)`;
      this.slider.style.webkitTransform = `translateX(${to}px)`;
    })
  }

  handleSwipe = (e) => {
    let shiftY = (e.deltaY / this.slideWidth) * 100 > - 20  ;
    this.removeAutoPlay();

    if(this.panEnabled && shiftY) {
      this.translate(this.pos + e.deltaX)

      if(e.isFinal){
        if(e.type === 'panleft') {
          this.goToNext()
        } else if( e.type === 'panright'){
          this.goToPrevious();
        } else {
          this.slideTo(this.current);
        }
      } else if( e.type === 'panend' || e.type === 'pancancel'){
        this.slideTo(this.current);
      }
    } else {
      this.slideTo(this.current);
    }
  }

  getCarouselPointers(count: number) {
    let pointers = [];
    for(let k = 0; k<count; k++){
      pointers.push(<div class={cls(`hs-carousel-pagination-pointer pointer_${k}`, {active: this.current === k})}/>);
    }
    return pointers;
  }

  getThumbs(count: number) {
    let thumbs = [];
    for(let i = 0; i<count; i++){
      thumbs.push(
        <div class={cls(`hs-thumb thumb_${i}`, {active: this.current === i})}>
          <a class="hs-thumb-link" href="#" data-slideto={i} onClick={e => {
            e.preventDefault();
            this.slideTo(i);
          }}>
            <img class="hs-thumb-image" src={this.slides[i].dataset.thumb} />
          </a>
        </div>
      );
    }
    return thumbs;
  }

  @Listen('afterCarouselInit')
  @Listen('afterCarouselItem')
  updateCurrentPosition(event) {
    this.current = event.detail.current;
  }

  @Listen('resize', { target: 'window' })
  updateView(){
    this.init();
    this.slideTo(0);
  }

  componentDidLoad(){
    this.init();
    this.initGesture();
  }

  render() {
    let html = [
      <div class="hs-carousel-wrapper">
        <div class={cls('hs-slides', { autoplay: this.autoPlay })}>
          <slot />
        </div>
      </div>,
      this.showPointers && <div class={cls('hs-carousel-pagination', {'carousel-pagination__above': this.showThumbnails,})}>
        {this.getCarouselPointers(this.slideCount)}
      </div>,
      this.showThumbnails && <div class="hs-thumbs">
        {this.getThumbs(this.slideCount)}
      </div>,
      this.showButtons && <div class="hs-carousel-buttons">
        <a href="" class="hs-next hs-carousel-arrow" onClick={this.goToNext}></a>
        <a href="" class="hs-prev hs-carousel-arrow" onClick={this.goToPrevious}></a>
      </div>
    ];
    return html;
  }
}
