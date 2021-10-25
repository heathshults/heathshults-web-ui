/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types, no-console, no-unused-vars, no-undefined */
// @ts-ignore
import { Component, Element, Prop, Listen, Event, h } from '@stencil/core';
import * as bootstrap from './bootstrap';

@Component({
  tag: 'hs-card',
  styleUrl: './hs-card.scss',
  shadow: true
})

export class HSCard {
  @Element() el: HTMLElement;
  @Prop() imgHeaderImgContainer: HTMLImageElement;
  @Prop() cardContent: any;
  // @Prop() colorTone: string;
  // @Prop() colorToneClass: string;
  @Prop() cardId: string;
  @Prop() cardSize: string;
  
  @Prop() cardHeader: any;
  @Prop() cardHeaderImg: HTMLElement;
  @Prop() imgHeaderImgPlaceholder = '/assets/img/svg/image-placeholder.svg';
  @Prop() overlay: any;
  @Prop() imgElem: any;
  @Prop() imgHeaderImg: string;
  @Prop() imgPath:string;
  @Prop() showHide:string;

  @Prop() dataTarget: string;
  @Prop() dataToggle: any = 'modal' || 'link';
  
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

  @Listen('click')
  clickHandler(event: Event): any {
      try {
        event.preventDefault();
        const clicker = event.target as HTMLAnchorElement; //this.el.shadowRoot.querySelector('.hs-card_button');
        const theModal: HTMLElement = document.querySelector(`#${this.dataTarget}`);
          if (this.dataToggle === 'modal' && this.dataTarget) {
            return theModal.style.display = 'block',
            theModal.classList.add('show');
          } else {
            if (this.validURL(this.dataTarget)) {
              const go = window.location.href = this.dataTarget;
              return go;
            }
          } 
      } catch(err) {
        throw new Error(err);
      }

      return;
  }
    

      
    
  


  
  @Prop() fnStatusCallBack = (status: boolean, fnName: string, errorMessage?: any): any => {
    status === true ? console.log(`${fnName} finished`) : console.log(`${fnName} failed because: /n ${errorMessage}`) ;
    return;
  }
  
  public validURL = (str): any => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  };

  connectedCallback() {
    

   
     
  } 
  
  componenentWillRender() {
    return new Promise((resolve, reject): any => {
      setTimeout((): any => {
        try {
          this.footerDiv = this.el.shadowRoot.querySelector('#foot');

          if (this.autoFooter) {
            this.footerDiv.innerHTML = this.basicFooter;
          }
          !this.imgPath ? this.showHide = 'hs-display-none' : this.showHide = 'hs-display-block';
          // this.fnStatusCallBack(true, 'buildCardElements');
          
          resolve(true);
        }
        catch(error) {
          // this.fnStatusCallBack(false, 'buildCard', error);
          reject(error);
        }
      }, 700); 

    }).catch(error => {
      throw new Error(error.message);
    });

    // (() => {
    //   // return new Promise((resolve, reject): any => {
    //     setTimeout((): any => {
    //       try {
    //         this.cloneBaby = this.el.shadowRoot.querySelector('#cloneBaby.hs-card_body');
    //         console.log(this.cloneBaby);

    //         this.cardContent = this.el.shadowRoot.querySelector('.hs-card_content');
    //         console.log(this.cardContent);
            
    //         this.clonedContent = this.cardContent.cloneNode(true);            
    //         this.footerDiv = this.el.shadowRoot.querySelector('#foot');

    //         if (this.autoFooter) {
    //           this.footerDiv.innerHTML = this.basicFooter;
    //         }
    //         this.cardContent.classList.add('hs-card_content');
    //         this.cloneBaby.appendChild(this.clonedContent);
    //         this.fnStatusCallBack(true, 'buildCardElements');
            
    //         return true;
    //       }
    //       catch(error) {
    //         this.fnStatusCallBack(false, 'buildCard', error);
    //         return false;
    //       }
    //     }, 700); 

    // })();

    // return;
  }
 
  

  render(): any  {
    return (
      <div id={`${this.cardId}`} class="hs-card">
        <header class={`hs-card_header`}>
          <a id="imgHeaderOverlay" class={`hs-overlay ${this.showHide} p-0 m-0`}  data-mode={this.dataToggle} data-target={this.dataTarget}  href="#" ><img id="hsHeaderImg" src={`${this.imgPath}`} class={`hs-card_img-header_img ${this.showHide} p-0 m-0`} alt="header image" /></a> 
        <slot name="card-header" />
        </header>
        <div id="cloneBaby" class="hs-card_body">
          <slot name="card-body"/>
        </div>
        <div id="foot" class="hs-card_footer row m-0 d-flex w-100 p-0">
          <slot name="card-footer" />
        </div>
      </div>
    );
  }

}
