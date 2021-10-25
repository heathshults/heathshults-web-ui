import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hs-timeline',
  styleUrl: '../../scss/components/components.timelines.scss',
  shadow: true
})
export class Timeline {
  @Prop()
  alternate: boolean;
  @Prop()
  loading: boolean;

  render() {
    const alternateClass = this.alternate ? 'hs-timeline--alternate' : '';
    const loadingClass = this.loading ? 'hs-timeline--loading' : '';

    return (
      <ol class={`hs-timeline ${alternateClass} ${loadingClass}`}>
        <slot />
      </ol>
    );
  }
}
