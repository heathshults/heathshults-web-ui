/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Prop, Element, Method, h } from '@stencil/core';
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
  @Prop() dataTarget?: string | null;
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

  @Method() async handleClick(event, url, urlParams, dataTarget) {
    // console.log(event.currentTarget);
    event.preventDefault();
    console.log(dataTarget);
    console.log(url);
    console.log(urlParams);

    // if (typeof this.dataTarget === 'undefined' || this.dataTarget.length <= 0 || this.dataTarget === '') {
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
    if (this.dataTarget !== 'undefined') {
      console.log(this.dataTarget);
    }
    if (this.url) {
      this.onclicker = `(event: Event) => this.handleClick(event, ${this.url}, ${this.urlParams}, ${this.dataTarget})`;
    }
    if (typeof this.dataToggle === 'undefined'  || this.dataToggle === null) {
      this.dataToggle = '';
    }
    if (typeof this.dataTarget === 'undefined'  || this.dataTarget === null) {
      this.dataTarget = '';
    }
    setTimeout(()=>{
      // const button = this.el.shadowRoot.querySelector('button');
      // console.log(`buttton: ${button}`);      
    }, 2000);
  }

  render(): any {
    if (this.url) {
      this.onclicker = `(event: Event) => this.handleClick(event, ${this.url}, ${this.urlParams}, ${this.dataTarget})`;
    }
    if (typeof this.dataToggle === 'undefined'  || this.dataToggle === null) {
      this.dataToggle = '';
    }
    if (typeof this.dataTarget === 'undefined'  || this.dataTarget === null) {
      this.dataTarget = '';
    }
    return (
      <button id={this.buttonId}
        class={this.cssClass}
        data-bs-toggle={this.dataToggle}
        data-bs-target={this.dataTarget}
        onClick={this.onclicker}>
        {this.buttonText}<slot/>
      </button>
    );

  }
}
// if (typeof this.dataToggle === 'undefined'  || this.dataToggle === null) {
//   this.dataToggle = '';
// }
// if (typeof this.dataTarget === 'undefined'  || this.dataTarget === null) {
//   this.dataTarget = '';
// }
// if (this.dataToggle) {
//   if (this.dataTarget) {
//   this.onclicker = `(event: Event) => showModal(event, ${this.dataTarget})`;
//   } 
// }

// else if (this.url) {
//   this.onclicker = `(event: Event) => this.handleClick(event, ${this.url}, ${this.urlParams}, ${this.dataTarget})`;
// } else { 
//   this.onclicker = '';
// }
