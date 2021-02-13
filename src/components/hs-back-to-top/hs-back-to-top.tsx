/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Event, EventEmitter, Listen, State, Prop, h } from '@stencil/core';

@Component({
  tag: 'hs-back-to-top',
})
export class BackToTop {
  @Event({ eventName: 'backtotop' })
  onBackToTop: EventEmitter;

  @State()
  _isOpen: boolean;

  @Prop()
  position: string;

  @Listen('scroll', { target: 'document' })
  enable() {
    this._isOpen = window.scrollY > window.innerHeight;
  }
h
  goUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.onBackToTop.emit();
  }

  render() {
    const visibleCss = !this._isOpen ? 'hs-display-none' : '';
    const positionCss = this.position ? `hs-back-to-top--${this.position}` : '';

    return (
      <div class={`hs-back-to-top ${positionCss} ${visibleCss}`}>
        <button
          class="hs-button hs-button--nude"
          onClick={() => {
            this.goUp();
          }}>
          <slot />
        </button>
      </div>
    );
  }
}
