import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-flipcode-back',
  styleUrl: 'hs-flip-to-code.scss',

  shadow: true,
})
export class HsFlipToCodeBack {

  render() {
    return (
      <Host>
        <div slot="back">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
