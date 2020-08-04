import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'hs-card',
  styleUrl: '../../scss/components/components.cards.scss',
  shadow: true
})

export class HSCard {
  @Element() el: HTMLElement;
  @Prop() cardWidth: string = ''
  @Prop() cardHeight: string = ''
  @Prop() colorTone: string;

  componentWillLoad() {
    console.log('Component is about to be rendered');
    let theCard: HTMLElement = this.el.shadowRoot.querySelector('.hs-card')
    theCard.setAttribute('style', `width: ${this.cardWidth}; height: ${this.cardHeight}; max-width: 100%; max-height: 100%'`)
  }


  render() {
    return (
      <div class={`hs-card ${this.colorTone}`}>
        <slot />
      </div>
    );
  }
}
