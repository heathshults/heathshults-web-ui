import { Component, Prop, Event, EventEmitter, Listen, h } from '@stencil/core';
import { validurl } from '../../js/modules/validate-url';
@Component({
  tag: 'hs-card-header',
  styleUrl: './hs-card_img-header.scss',
  shadow: true
})
export class HSCardHeader {
  @Prop() cardHeader: any;
  @Prop() cardHeaderImg: HTMLElement;
  @Prop() imgHeaderImgPlaceholder = '/assets/img/svg/image-placeholder.svg';
  @Prop() overlay: any;
  @Prop() imgElem: any;
  @Prop() modalId: string;
  @Prop() imgHeaderImg: string;
  @Prop() imgPath:string;
  @Prop() showHide:string;
  @Prop() clickTarget: string;
  @Prop() colorTone: string;

    // modalLancher: EventEmitter;
    @Event() modalLancher: EventEmitter;
    launchModalEventHandler(event: Event): void {
      this.modalLancher.emit(event);
    }
    
    @Listen('launchModal')
    launchModalHandler(event: Event): void {
      // showModal(`#${this.clickTarget}`)
      event.preventDefault();
      this.modalId ? document.querySelector(this.modalId).classList.add('hs-display-block') : 
      validurl(this.clickTarget) === true ? window.location.href = this.clickTarget : '';
    }
    
    @Prop() fnStatusCallBack = (status: boolean, fnName: string, errorMessage?: unknown): any => {
      // eslint-disable-next-line no-console
      status === true ? console.log(`${fnName} finished`) : console.log(`${fnName} failed because: /n ${errorMessage}`) ;
      return;
    }
  

  render(): any {
    return (
      <header class={`hs-card_header ${this.colorTone}`}>
          { this.imgPath ? <a id="imgHeaderOverlay" class={`hs-overlay ${this.showHide} p-0 m-0`} href="#" onClick={() => this.launchModalHandler(event)} ><img id="hsHeaderImg" src={`${this.imgPath}`} class={`hs-card_img-header_img ${this.showHide} p-0 m-0`} alt="header image" /></a> 
            : ''}
        <slot name="card-header" />
        </header>
    );
  }
}
