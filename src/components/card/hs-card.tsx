import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'hs-card',
  styleUrl: '../../scss/components/components.cards.scss',
  shadow: true
})

export class HSCard {
  @Element() el: HTMLElement
  @Prop() cardWidth: string = ''
  @Prop() cardHeight: string = ''
  @Prop() colorTone: string;
  @Prop() cardId: string;
  @Prop() cardSize: string;
  @Prop() imgHeaderImg: HTMLElement;

  componentWillLoad() {
    this.imgHeaderImg = this.el.shadowRoot.querySelector('#hsHeaderImg');
    if (this.imgHeaderImg) {
      this.imgHeaderImg.style.width = '265px'
      this.imgHeaderImg.style.height = '177px'
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
