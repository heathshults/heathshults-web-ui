/* eslint-disable @typescript-eslint/explicit-module-boundary-types, no-console */
import { Component, Element, Prop, Event, EventEmitter, Listen, h, Method } from '@stencil/core';

@Component({
  tag: 'hs-card',
  styleUrl: './hs-card.scss',
  shadow: true
})

export class HSCard {
  @Element() el: HTMLElement;
  @Prop() cardImgHeaderImg: HTMLImageElement;
  @Prop() cardContent: any;
  @Prop({reflect: true}) colorTone: string;
  @Prop({reflect: true}) colorToneClass: string;
  @Prop({reflect: true}) cardId: string;
  @Prop({reflect: true}) cardSize: string;
  
  @Prop() cardHeader: any;
  @Prop() cardHeaderImg: any;
  @Prop() overlay: any;
  @Prop() imgElem: any;
  @Prop() modalId: string;
  @Prop({reflect: true}) imgPath: string;
  @Prop({reflect: true}) showHide: string;
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
  @Prop() clickTarget?: string;
  @Prop() cloneBaby: any;
  @Prop() clonedContent: any;
  
  @Prop() builderOne;
  @Prop() builderTwo;
  @Prop() builderThree;
  
  

  
  modalLancher: EventEmitter;
  @Event() launchModal: EventEmitter;
  launchModalEvent(event: UIEvent) {
    this.launchModal.emit(event);
  }

  @Listen('launchModal')
  launchModalHandler(target: string) {
    // showModal(`#${this.clickTarget}`)
    this.clickTarget ? document.querySelector(target).classList.add('hs-display-block') : alert('no target parameter');
  }
  
  // private cb() {
  //   return;
  // }
  
  @Method() async callback(fName) { 
    console.log(`${fName} has finished.`);
  }
  
  
  componentWillLoad() {
    () => 
    setTimeout(() => {
    typeof this.colorTone === 'undefined' || typeof this.colorTone === null || this.colorTone === 'light' ? this.colorToneClass = 'light' :
    this.colorTone === 'dark' ? this.colorToneClass = 'dark' : this.colorToneClass = 'light';

    typeof this.imgPath === 'undefined' ? this.showHide = 'hs-display-none' : this.showHide = 'hs-display-block';
    
    this.cardContent = document.querySelector('.hs-card_content');
    console.log(this.cardContent);
    this.cloneBaby = this.el.shadowRoot.querySelector('#cloneBaby.hs-card_body');
    console.log('cloneBaby below');
    console.log(this.cloneBaby);
    this.overlay = this.el.shadowRoot.querySelector('#imgHeaderOverlay');
    this.footerDiv = this.el.shadowRoot.querySelector('#foot');

    this.clonedContent = this.cardContent.cloneNode(true);
    console.log('clone below');
    console.log(this.clonedContent);

      if (this.autoFooter) {
        this.footerDiv.innerHTML = this.basicFooter;
        this.cardImgHeaderImg = this.el.shadowRoot.querySelector('#hsHeaderImg');
      }
      
      this.cardHeaderImg = this.el.shadowRoot.querySelector('#hsHeaderImg');
    
      this.cardContent.classList.add('hs-card_content');

      // this.cardContent.remove();
      
      this.cloneBaby.appendChild(this.clonedContent);
    }, 2000);
  }
  
  render() {
    
    return (
      <div id={`${this.cardId}`} class={`hs-card  ${this.colorTone}`}>
       <header class={`hs-card_header ${this.colorTone}`}>
        <a id="imgHeaderOverlay" class={`hs-overlay ${this.showHide}`} href="#" onClick={() => this.launchModalHandler(`${this.modalId}`)}>
          <img id="hsHeaderImg" src={`${this.imgPath}`} class="hs-card_img-header_img" alt="header image" />
        </a>
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
