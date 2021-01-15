/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hs-card-button',
  styleUrl: './components.card-buttons.scss',
  shadow: true
})

export class HSCardButton {
  @Prop({mutable: true}) buttonId?: string;
  @Prop({reflect: true, mutable: true}) cssClass = 'btn hs-details-button';
  @Prop({reflect: true, mutable: true}) buttonText = 'button text';
  @Prop({mutable: true}) action: string;
  @Prop({mutable: true}) actionParameters: string;

  handleClick(event: Event, action: string, actionParams: string) {
    // console.log(event.currentTarget);
    event.preventDefault();
    if(!action) {
      window[action](this.actionParameters);
    } else {
      window[action](actionParams);
    }
  }

  render() {
    return ( 
      <button id={this.buttonId} class={this.cssClass} onClick={ (event: Event) => this.handleClick(event, this.action, this.actionParameters)}>{this.buttonText}<slot/></button>
    );
    
  }
}
