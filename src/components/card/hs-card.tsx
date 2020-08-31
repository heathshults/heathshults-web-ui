import { Component, h, Element, Prop } from '@stencil/core';

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
  @Prop({reflect: true}) cardId: string;
  @Prop({reflect: true}) cardSize: string;
  @Prop() imgHeader: HTMLElement;
  @Prop() imgHeaderImg: HTMLImageElement;

  componentWillLoad() {
    this.imgHeader = this.el.querySelector('hs-card-img-header')
    this.imgHeader.setAttribute('card-size', this.cardSize)
    console.log(this.imgHeader.getAttribute('card-size'))
  }

  // test() {

  //   this.imgHeader = this.el.shadowRoot.querySelector('#imgHeader')
  //   console.log(`imgHeader: ${this.imgHeader}`)
  //   // if(this.imgHeader) {
  //     this.imgHeaderImg = this.el.querySelector('#hsHeaderImg')
  //     console.log(`imgHeaderImg: ${this.imgHeaderImg}`)

  //     this.imgHeaderImg.classList.add(`hs-img-header_img${this.cardSize}`)
  //     console.log(`headImg: ${this.imgHeaderImg}`)
  //   // }
  //   return
  // }

  render() {

    return (
      <div id={this.cardId} class={`hs-card hs-card-size${this.cardSize} ${this.colorTone}`}>
        <slot/>
      </div>
    );
  }
}
