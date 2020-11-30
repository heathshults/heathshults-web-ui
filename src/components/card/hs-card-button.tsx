/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Prop, Event, EventEmitter, Listen, h } from '@stencil/core';

@Component({
  tag: 'hs-card-button',
  styleUrl: '../../scss/components/components.cards.scss',
  shadow: true
})

export class HSCardButton {
  @Prop() buttonType: string;
  @Prop() modalId: string;
  @Prop() buttonText: string;
  @Prop() url = 'javascript:void();';
  @Prop() clickTarget?: string;
  
  modalLancher: EventEmitter;
  @Event() launchModal: EventEmitter;
  launchModalEvent(event: UIEvent) {
    this.launchModal.emit(event);
  }

  @Listen('launchModal')
  launchModalHandler(target: string) {
    // showModal(`#${this.clickTarget}`)
    //@ts-ignore: does not exist on type
    this.clickTarget ? document.querySelector(target).show() : alert('no target parameter');

  }
  
  render() {
    return (
      <a href={this.url} class="hs-card_button--detail" onClick={() => this.launchModalHandler(`${this.modalId}`)}>
        {this.buttonText}
      </a>
    );
  }
}
