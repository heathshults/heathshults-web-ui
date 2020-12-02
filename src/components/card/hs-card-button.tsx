/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hs-card-button',
  styleUrl: './components.buttons.scss',
  shadow: true
})

export class HSCardButton {
  @Prop({reflect: true, mutable: true}) buttonId?: string;
  @Prop({reflect: true, mutable: true}) cssClass = 'btn hs-details-button';
  @Prop({reflect: true, mutable: true}) buttonText = 'button text';
  @Prop({reflect: true, mutable: true}) action: string;
  @Prop({reflect: true, mutable: true}) actionParameters: string;

  handleClick(event: UIEvent, action: string, actionParams: string) {
    console.log(event.currentTarget);
    if(!action) {
      window[this.action](this.actionParameters);
    } else {
      window[action](actionParams);
    }
  }

  render() {
    return ( 
      <button id={this.buttonId} class={this.cssClass} onClick={ (event: UIEvent) => this.handleClick(event, this.action, this.actionParameters)}>{this.buttonText}<slot/></button>
    );
    
  }
}
