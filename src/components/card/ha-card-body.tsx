import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-card-body',
  styleUrl: '../../scss/components/components.cards.scss',
  shadow: true
})
export class HSCardBody {
  @Prop({reflect: true}) cardSize: string;
  render() {
    return (
      <div class={`hs-card_body hs-card_body${this.cardSize}`}>
        <slot />
      </div>
    );
  }
}
