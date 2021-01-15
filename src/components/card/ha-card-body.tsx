import { Component, h } from '@stencil/core';

@Component({
  tag: 'hs-card-body',
  styleUrl: '../../scss/components/components.cards.scss',
  shadow: true
})
export class HSCardBody {
  
  render(): any {
    return (
      <div class={`hs-card_body hs-card_body`}>
        <slot />
      </div>
    );
  }
}
