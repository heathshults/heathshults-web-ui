import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'hs-card',
  styleUrl: 'components.cards.css',
  shadow: true
})

export class HSCard {
  @Element() el: HTMLElement
  @Prop() cardWidth: string = ''
  @Prop() cardHeight: string = ''
  @Prop() colorTone: string;
  @Prop() cardId: string;
  @Prop() cardSize: string;

  componentWillLoad() {
  }

  render() {
    return (
      <div id={this.cardId} class={`hs-card hs-card-size${this.cardSize} ${this.colorTone}`}>
        <slot />
      </div>
    );
  }
}
