/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-card-footer',
  styleUrl: './hs-card_footer.scss',
  shadow: true
})
export class HSCardFooter {
  // @Prop() colorTone? = 'light';
  // @Prop() colorToneClass? = 'light';
  @Prop() modalId?: string;

  componentWillLoad() {
    // return typeof this.colorTone === 'undefined' || typeof this.colorTone === null || this.colorTone === 'light' ? this.colorToneClass = 'light' :
    //   this.colorTone === 'dark' ? this.colorToneClass = 'dark' : this.colorToneClass = 'light';
  }
  render() {
    return (
      <footer class="hs-card_footer w-100">
        <div class="hs-card_content">
          <slot />
        </div>
      </footer>
    );
  }
}
