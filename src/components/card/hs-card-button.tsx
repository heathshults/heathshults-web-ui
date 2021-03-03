/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Prop, Element, Method, Listen, Event, EventEmitter, h } from '@stencil/core';
import { validurl } from '../../js/modules/validate-url';


@Component({
  tag: 'hs-card-button',
  styleUrl: './hs-card_button.scss',
  shadow: true
})

export class HSCardButton {
  @Element() el: HTMLButtonElement;
  @Prop() buttonId?: string;
  @Prop() cssClass?: string;
  @Prop() buttonText?: string;
  @Prop() url?: any;
  // eslint-disable-next-line no-undef
  @Prop() urlParams?: any;
  @Prop({mutable: true}) dataTarget?: string | null;
  @Prop() dataToggle?: string | null;
  @Prop() onclicker: any;
  // @Method() handleClick: function;
  
  // @Prop() validURL = (str): any => {
  //   const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  //     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  //     '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  //     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  //     '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  //     '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  //   return !!pattern.test(str);
  // }
  
  // modalLancher: EventEmitter;
  @Event() modalLancher: EventEmitter;
  launchModalEventHandler(event: Event) {
    this.modalLancher.emit(event);
  }
  
  @Listen('launchModal')
  launchModalHandler() {
    // showModal(`#${this.clickTarget}`)
    const btn: HTMLElement = this.el.shadowRoot.querySelector(`#${this.buttonId}`);
    btn.click();
    const modal: HTMLElement = document.querySelector(this.dataTarget)
    modal.style.display = 'block';
  }

  @Method() async handleClick(event, url, urlParams, dataTarget) {
    event.preventDefault();
    if (typeof dataTarget === 'undefined') {
      this.handleLink(url, urlParams);
    } else {
      return;
    }
  }

  handleLink(url, urlParams) {
    if (typeof url !== 'undefined') {
      const validateUrl: boolean = validurl(url);
      if (validateUrl === true) {
        window.open(url, urlParams);
      } 
    }
  }

  componentWillLoad(): void {
    // if (this.dataTarget !== 'undefined') {
    // }
    if (this.url) {
      this.onclicker = `(event: Event) => this.handleClick(event, ${this.url}, ${this.urlParams}, ${this.dataTarget})`;
    }
    // if (typeof this.dataToggle === 'undefined'  || this.dataToggle === null) {
    //   this.dataToggle = '';
    // }
    if (typeof this.dataTarget === 'undefined'  || this.dataTarget === null) {
      this.dataTarget = '';
    }
    setTimeout(()=>{
    }, 2000);
  }

  render(): any {
    if (this.url) {
      this.onclicker = `(event: Event) => this.handleClick(event, ${this.url}, ${this.urlParams}, ${this.dataTarget})`;
    }
    // if (typeof this.dataToggle === 'undefined'  || this.dataToggle === null) {
    //   this.dataToggle = '';
    // }
    if (typeof this.dataTarget === 'undefined'  || this.dataTarget === null) {
      this.dataTarget = '';
    }
    return (
      <button id={this.buttonId}
        class={this.cssClass}
        // data-bs-toggle={this.dataToggle}
        data-bs-target={this.dataTarget}
        onClick={this.onclicker}>
        {this.buttonText}<slot/>
      </button>
    );

  }
}
