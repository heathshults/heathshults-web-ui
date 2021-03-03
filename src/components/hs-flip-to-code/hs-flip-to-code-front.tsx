import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-flipcode-front',
  styleUrl: 'hs-flip-to-code.scss',

  shadow: true,
})
export class HsFlipToCodeFront {

  render() {
    return (
      <Host>
        <div slot="front">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
