import { Component, h } from '@stencil/core';

@Component({
  tag: 'hs-card-header',
  styleUrl: './hs-card_img-header.scss',
  shadow: true
})
export class HSCardHeader {
  render(): any {
    return (
      <header class="hs-card_header">
        <slot />
      </header>
    );
  }
}
