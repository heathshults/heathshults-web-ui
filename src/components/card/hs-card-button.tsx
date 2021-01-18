/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Prop, Element, Method, h } from '@stencil/core';
// import { validurl } from '../../js/modules/validate-url';


@Component({
  tag: 'hs-card-button',
  styleUrl: './hs-card-button.scss',
  shadow: true
})

export class HSCardButton {
  @Element() el: HTMLButtonElement;
  @Prop() buttonId?: string;
  @Prop() cssClass?: string;
  @Prop() text?: string;
  @Prop() url?: any;
  // eslint-disable-next-line no-undef
  @Prop() urlParams?: any;
  @Prop() modalId?: any;
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
  
  @Method() async handleClick(event, url, urlParams, modalId) {
    // console.log(event.currentTarget);
    event.preventDefault();
    console.log(modalId);
    console.log(url);
    console.log(urlParams);
    
    // if (typeof this.modalId === 'undefined' || this.modalId.length <= 0 || this.modalId === '') {
    //   handleLink(url, urlParams);
    // } else {
    //   return;
    // }
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
    // const theButton = this.el.shadowRoot.querySelector('button');
    if (this.modalId !== 'undefined') {
      console.log(this.modalId);
    }

    
  }
  render(): any {
    return ( 
      <button id={this.buttonId}
        class={this.cssClass}
        data-bs-toggle="modal" 
        data-bs-target={this.modalId}
        onClick={ (event: Event) => this.handleClick(event, this.url, this.urlParams, this.modalId)}>
        {this.text}<slot/>
      </button>
    );
    
  }
}
