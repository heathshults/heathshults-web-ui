import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hs-card-body',
  styleUrl: './hs-card_body.scss',
  shadow: true
})
export class HSCardBody {
  @Prop() cssClassList:string;
  
  render(): any {
    return (
      <div class={`hs-card_body ${this.cssClassList}`}>
        <div class="hs-card_content">
          <slot />
        </div>
      </div>
    );
  }
}
