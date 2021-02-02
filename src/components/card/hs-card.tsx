/* eslint-disable @typescript-eslint/explicit-module-boundary-types, no-console, no-unused-vars, no-undefined */
import { Component, Element, Prop, Event, EventEmitter, Listen, h } from '@stencil/core';

@Component({
  tag: 'hs-card',
  styleUrl: './hs-card.scss',
  shadow: true
})

export class HSCard {
  @Element() el: HTMLElement;
  @Prop() imgHeaderImgContainer: HTMLImageElement;
  @Prop() cardContent: any;
  @Prop({reflect: true}) colorTone: string;
  @Prop({reflect: true}) colorToneClass: string;
  @Prop({reflect: true}) cardId: string;
  @Prop({reflect: true}) cardSize: string;
  
  @Prop() cardHeader: any;
  @Prop() cardHeaderImg: HTMLElement;
  @Prop() imgHeaderImgPlaceholder = '/assets/img/svg/image-placeholder.svg';
  @Prop() overlay: any;
  @Prop() imgElem: any;
  @Prop() dataTarget?: string;
  @Prop() dataToggle? = 'modal';
  @Prop() imgHeaderImg: string;
  @Prop() imgPath:string;
  @Prop() showHide:string;
  @Prop() autoFooter: boolean;
  @Prop() footerDiv: HTMLDivElement;
  @Prop() basicFooter: any = `
  <div class="col-md-12 hs-logo-row--footer">
    <ul class="footer-logos">
      <li class="flex-item">
        <img src="/assets/img/logos/dmHTML5_Logo_512.png" class="hs-dev-logo" width="24" alt="HTML5 logo" />
      </li>
      <li class="flex-item">
        <img src="/assets/img/logos/Sass-150.png" class="hs-dev-logo" width="24" alt="sass logo" />
      </li>
      <li class="flex-item">
        <img src="/assets/img/logos/dm-css3-150.png" class="hs-dev-logo" width="24" alt="css logo" />
      </li>
      <li class="flex-item">
        <img src="/assets/img/logos/js-logo.jpg" class="hs-dev-logo" width="24" alt="javascript logo" />
      </li>
      <li class="flex-item">
        <img src="/assets/img/logos/dm-Node.png" class="hs-dev-logo" width="24" alt="node js logo" />
      </li>
      <li class="flex-item">
        <img src="/assets/img/logos/gulp-150.png" class="hs-dev-logo" width="24" alt="gulp logo" />
      </li>
      <li class="flex-item">
        <img src="/assets/img/logos/dm-Git-logo.png" class="hs-dev-logo" width="24" alt="git logo" />
      </li>
    </ul>
  </div>`;
  @Prop() clickTarget: string;
  @Prop() cloneBaby: any;
  @Prop() clonedContent: any;
  
  @Prop() builderOne;
  @Prop() builderTwo;
  @Prop() builderThree;
  
  // // modalLancher: EventEmitter;
  // @Event() modalLancher: EventEmitter;
  // launchModalEventHandler(event: Event) {
  //   this.modalLancher.emit(event);
  // }
  
  // @Listen('launchModal')
  // launchModalHandler(event: Event) {
  //   // showModal(`#${this.clickTarget}`)
  //   event.preventDefault();
  //   const clicker: HTMLElement = this.el.shadowRoot.querySelector('.hs-card_button');
  //   this.dataTarget ? clicker.click() : 
  //   // this.dataTarget ? document.querySelector(this.dataTarget).classList.add('hs-display-block') : 
  //   this.validURL(this.clickTarget) === true ? window.location.href = this.clickTarget : '';
  // }
  
  @Prop() fnStatusCallBack = (status: boolean, fnName: string, errorMessage?: any): any => {
    status === true ? console.log(`${fnName} finished`) : console.log(`${fnName} failed because: /n ${errorMessage}`) ;
    return;
  }
  
  @Prop() validURL = (str): any => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }
    
  componentWillLoad() {
    this.validURL(this.imgPath) ? '' : '';
    typeof this.colorTone === 'undefined' || typeof this.colorTone === null || !this.colorTone.length ? this.colorTone = '' :
    this.colorTone === 'dark' ? this.colorToneClass = 'dark' : this.colorToneClass = 'light';
    
    
  }
  
  componenentWillRender() {
    function buildCard(): Promise<any> {
      return new Promise((resolve, reject): any => {
        setTimeout((): any => {
          try {
            this.cloneBaby = this.el.shadowRoot.querySelector('#cloneBaby.hs-card_body');
            console.log(this.cloneBaby);

            this.cardContent = document.querySelector('.hs-card_content');
            console.log(this.cardContent);
            
            this.clonedContent = this.cardContent.cloneNode(true);            
            this.footerDiv = this.el.shadowRoot.querySelector('#foot');

            if (this.autoFooter) {
              this.footerDiv.innerHTML = this.basicFooter;
            }
            this.cardContent.classList.add('hs-card_content');
            this.cloneBaby.appendChild(this.clonedContent);
            this.fnStatusCallBack(true, 'buildCard');
            
            resolve(true);
          }
          catch(error) {
            this.fnStatusCallBack(false, 'buildCard', error);
            reject(false);
          }
        }, 700); 
      });

    }

    buildCard();
    return ;
  }

  render() {
    
    return (
      <div id={`${this.cardId}`} class={`hs-card  ${this.colorTone}`}>
        <header class={`hs-card_header ${this.colorTone}`}>
          { this.imgPath ? <a id="imgHeaderOverlay" class={`hs-overlay ${this.showHide} p-0 m-0`} data-bs-toggle={this.dataToggle} data-bs-target={this.dataTarget} href="javascript:void(0);" ><img id="hsHeaderImg" src={`${this.imgPath}`} class={`hs-card_img-header_img ${this.showHide} p-0 m-0`} alt="header image" /></a> 
            : ''}
        <slot name="card-header" />
        </header>
        <div id="cloneBaby" class={`hs-card_body ${this.colorTone}`} >
          <slot name="card-body" />
        </div>
        <div id="foot" class={`hs-card_footer row m-0 d-flex w-100 ${this.colorToneClass} p-0`}>
          <slot name="card-footer" />
        </div>
      </div>
    );
  }  
}
