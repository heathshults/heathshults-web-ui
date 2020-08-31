import { Component, Element, Prop, Event, EventEmitter, Listen, h } from '@stencil/core';

@Component({
  tag: 'hs-card-img-header',
  styleUrl: '../../scss/components/components.cards.scss',
  shadow: true
})
export class HSCardImgHeader {
  @Element() el: HTMLDivElement;


  @Prop() cardHeader: HTMLElement;
  @Prop() overlay: HTMLLinkElement;
  @Prop() imgElem: any;
  @Prop({reflect: true}) cardSize: string;
  @Prop({reflect: true}) imgPath: string;
  @Prop({reflect: true}) imgSize: string;
  @Prop({reflect: true}) imgWidth?: any = '265';
  @Prop({reflect: true}) imgHeight?: any = '177';
  @Prop() imgW: string;
  @Prop() imgH: string;
  @Prop() clickTarget?: string;
  @Prop() setSizeClass: any;


  modalLancher: EventEmitter;
  @Event() launchModal: EventEmitter;
  launchModalEvent(event: UIEvent) {
    this.launchModal.emit(event);
  }

  @Listen('launchModal')
  launchModalHandler(target: string) {
    // showModal(`#${this.clickTarget}`)
    //@ts-ignore: does not exist on type
    this.clickTarget ? document.querySelector(target).show() : alert('no target parameter')

  }

  // componentDidLoad() {

  //   this.setSizeClass = (() => {
  //     return this.getImgSizeClass();
  //   })
  // }
  // @Method()
  //   async getImgSizeClass() {
  //     let headerImg = this.el.querySelector('img')
  //     console.log(headerImg)
  //     if (this.cardSize === '--sm') {
  //       headerImg.style.width = '265px'
  //       headerImg.style.height = '177px'
  //       return '--sm'
  //     }
  //     if (this.cardSize === '--lg') {
  //       headerImg.style.width = '400px'
  //       headerImg.style.height = '287px'
  //       return '--lg'
  //     }
  //     if (this.cardSize === '--fluid') {
  //       headerImg.style.width = '100%'
  //       headerImg.style.height = '100%'
  //       return '--fluid'
  //     }
  //     if (typeof this.cardSize === 'undefined') {
  //       headerImg.style.width = '100%'
  //       headerImg.style.height = '100%'
  //       return '--default'
  //     }
  //     return
  //   }

  render() {
    this.imgW = this.imgWidth.replace(/px/gi, '')
    this.imgH = this.imgHeight.replace(/px/gi, '')
    this.imgWidth <= '250' || typeof this.imgWidth === 'undefined' ? this.cardSize = '265' : ''
  return (
    <header id="imgHeader" class={`hs-card_header hs-card_img-header${this.cardSize}`}>
        <a id="imgHeaderOverlay" class={`hs-card_img-header_overlay${this.cardSize}`} href="javascript:void(0);" onClick={() => this.launchModalHandler('#modBowlopolis')}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#ffffff" d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg> */}
          <img id="hsHeaderImg" src={this.imgPath} class={`hs-card_img-header_img${this.cardSize}`} alt="header image" width={this.imgWidth} height={this.imgHeight} />
        </a>
      </header>
    );
  }

}
