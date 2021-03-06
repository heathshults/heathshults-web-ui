import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hs-card-body',
  styleUrl: './hs-card_body.scss',
  shadow: true
})
export class HSCardBody {
  @Prop({ mutable: true }) bodyClassList?: string;
  @Prop({ mutable: true }) contentClassList?: string;
  
 componentWillLoad(): void {
  // console.log(this.contentClasses);
  // this.bodyClassList = typeof this.bodyClasses === 'undefined' ? this.bodyClasses = '' :  this.bodyClasses;
  // this.contentClassList = typeof this.contentClasses === 'undefined' ? this.contentClasses = '' : this.contentClasses;

 }
  
  render(): any {
    return (
      // <div class={`hs-card_body ${this.bodyClassList}`}>
      <div class="hs-card_body">
        <div class={`hs-card_content ${this.contentClassList}`}>
          <slot />
        </div>
      </div>
    );
  }
}
