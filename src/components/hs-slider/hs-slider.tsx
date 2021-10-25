import {Component, Prop, Event, EventEmitter , h } from '@stencil/core';


@Component({
    tag: 'hs-slider',
    styleUrl: 'hs-slider.scss',
    shadow: true
})
export class HsSlider {

  @Prop() min: number;
  @Prop() max: number;
  @Prop() value: number;

  @Event() valueChanged: EventEmitter;

  valueChangedHandler(event: any): void {
    this.valueChanged.emit(event.target.value);
  }

  render(): any {
    return (
      <div class="slider-container">
        <input type="range" min={this.min} max={this.max} value={this.value} class="slider" onChange={(event) => this.valueChangedHandler(event)}></input>
      </div>
    );
  }
}
