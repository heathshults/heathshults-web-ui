import { Component, Element, Prop, Event, EventEmitter, Listen, h } from '@stencil/core';

@Component({
  tag: 'hs-card',
  styleUrl: '../../scss/components/components.cards.scss',
  shadow: true,

})

export class HSCard {
  @Element() el: HTMLElement;
  @Prop({reflect: true}) cardWidth: string;
  @Prop({reflect: true}) cardHeight: string;
  @Prop({reflect: true}) colorTone: string;
  @Prop({reflect: true}) colorToneClass: string;
  @Prop({reflect: true}) cardId: string;
  @Prop({reflect: true}) cardSize: string;
  
  @Prop() cardHeader: HTMLElement;
  @Prop() overlay: HTMLLinkElement;
  @Prop() imgElem: any;
  @Prop({reflect: true}) modalId: string;
  @Prop({reflect: true}) headerImgPath: string;
  @Prop({reflect: true}) imgWidth?: any = '265px';
  @Prop({reflect: true}) imgHeight?: any = '177px';
  @Prop() imgW: string;
  @Prop() imgH: string;
  @Prop() clickTarget?: string;
  
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

  componentWillLoad() {
    typeof this.colorTone === 'undefined' || typeof this.colorTone === null || this.colorTone === 'light' ? this.colorToneClass = 'light' :
      this.colorTone === 'dark' ? this.colorToneClass = 'dark' : this.colorToneClass = 'light';
  }
  
  private headerImg() {
    return (() => {
      if (typeof this.headerImgPath !== 'undefined') {
        <a id="imgHeaderOverlay" class={`hs-card_img-header_overlay${this.cardSize}`} href="javascript:void(0);" onClick={() => this.launchModalHandler(`${this.modalId}`)}>
          <img id="hsHeaderImg" src={`${this.headerImgPath}`} class={`hs-card_img-header_img${this.cardSize}`} alt="header image" width={`${this.imgWidth}`} height={`${this.imgHeight}`} />
        </a>;
      } else {
        ''
      }
    });
  }

  render() {
    // this.imgW = this.imgWidth.replace(/px/gi, '')
    // this.imgH = this.imgHeight.replace(/px/gi, '')
    // this.imgWidth <= '250' || typeof this.imgWidth === 'undefined' ? this.cardSize = '265' : ''

    return (
      <div id={this.cardId} class={`hs-card hs-card-size${this.cardSize} ${this.colorTone}`}>
      <header class="hs-card_header">
      <a id="imgHeaderOverlay" class={`hs-card_img-header_overlay${this.cardSize}`} href="javascript:void(0);" onClick={() => this.launchModalHandler(`${this.modalId}`)}>
        <slot name="card-header" />
      </a>
      </header>
      
        <slot name="card-body" />
      
      <footer class={`hs-card_footer ${this.colorToneClass}`}>
        <slot name="card-footer" />
      </footer>
      </div>
    );
  }  
}
