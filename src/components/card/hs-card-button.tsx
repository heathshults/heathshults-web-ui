/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Prop, h } from '@stencil/core';
import { validurl } from '../../js/modules/validate-url';


@Component({
  tag: 'hs-card-button',
  styleUrl: './hs-card-button.scss',
  shadow: true
})

export class HSCardButton {
  @Prop() buttonId?: string;
  @Prop() cssClass?: string;
  @Prop() text?: string;
  @Prop() url?: any;
  // eslint-disable-next-line no-undef
  @Prop() urlParams?: any;
  @Prop() modalId?: string;
  @Prop() handleClick: any;
  
  // @Prop() validURL = (str): any => {
  //   const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  //     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  //     '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  //     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  //     '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  //     '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  //   return !!pattern.test(str);
  // }
   componentWillLoad() {
    function handleLink(url, urlParams) {
      if (typeof url !== 'undefined') {
        const validateUrl: boolean = validurl(url);
        if (validateUrl === true) {
          window.open(url, urlParams);
        } 
      }
    }
    this.handleClick = (event: Event, url, urlParams): void => {
      // console.log(event.currentTarget);
      event.preventDefault();
      if (typeof this.modalId === 'undefined' || this.modalId.length <= 0 || this.modalId === '') {
        handleLink(url, urlParams);
      } else {
        return;
      }
    };
  }
  render(): any {
    return ( 
      <button id={this.buttonId} 
        class={this.cssClass} 
        onClick={ (event: Event) => this.handleClick(event, this.url, this.urlParams)}>
        {this.text}<slot/>
        ({(typeof this.modalId !== 'undefined') ? `data-bs-toggle="modal" data-bs-target=${this.modalId}` : ''})
        </button>
    );
    
  }
}
