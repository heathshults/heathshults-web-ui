import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hs-carousel-item',
  styleUrl: '../../scss/components/components.hs-carousel.scss',
  shadow: true
})
export class HSCarouselItem {
  @Prop()
  header: string;

  @Prop()
  disabled: boolean;

  @Prop()
  active: boolean;

  @Prop()
  type: string;

  render() {
    const typeClass = this.type ? `${this.type}` : '';

    return (
      <div role="carousel-item" data-disabled={`${this.disabled}`} hidden={!`${this.active}`} class={`hs-carousel-item ${typeClass}`}>
        <slot />
      </div>
    );
  }
}
