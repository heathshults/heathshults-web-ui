import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'hs-card',
  styleUrl: '../../scss/components/components.cards.scss',
  shadow: false,

})

export class HSCard {
  @Element() el: HTMLElement
  @Prop() cardWidth: string = '100%';
  @Prop() cardHeight: string = '100%'
  @Prop() colorTone: string;
  @Prop() cardId: string;
  @Prop() cardSize: string;
  @Prop() imgHeader: HTMLElement;
  @Prop() imgHeaderImg: HTMLImageElement;

  componentWillLoad() {
    this.imgHeader = this.el.shadowRoot.querySelector('#imgHeader')
    console.log(`imgHeader: ${this.imgHeader}`)
    if(this.imgHeader) {
      this.imgHeaderImg = this.imgHeader.querySelector('#hsHeaderImg')
      console.log(`imgHeaderImg: ${this.imgHeaderImg}`)
      this.imgHeaderImg.classList.add(`hs-img-header_img${this.cardSize}`)
      console.log(`headImg: ${this.imgHeaderImg}`)
    }
  }

  render() {
    return (
      <div id={this.cardId} class={`hs-card hs-card-size${this.cardSize} ${this.colorTone}`}>
        <slot />
      </div>
    );
  }
}
