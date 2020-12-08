/* eslint-disable @typescript-eslint/explicit-module-boundary-types, no-console */
import { Component, Element, Prop, Event, EventEmitter, Listen, Method, h } from '@stencil/core';

@Component({
  tag: 'hs-card',
  styleUrl: '../../scss/components/components.cards.scss',
  shadow: true
})

export class HSCard {
  @Element() el: HTMLElement;
  @Prop() cardImgHeaderImg: HTMLImageElement;
  @Prop() cardContent: any;
  @Prop({reflect: true}) cardWidth: string;
  @Prop({reflect: true}) cardHeight: string;
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
  
  private cb() {
    return;
  }
  
  private callback = (()=> { if (typeof this.cb === 'function') return this.cb(); })
  
  private getElements(): Promise<unknown> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          // this.theElements();
          this.cardContent =          document.querySelector('.hs-card_content');
          this.overlay =              this.el.shadowRoot.querySelector('#imgHeaderOverlay');
          this.footerDiv =            this.el.shadowRoot.querySelector('#foot');
          if (this.autoFooter) {
          this.footerDiv.innerHTML =  this.basicFooter;
          this.cardImgHeaderImg =     this.el.shadowRoot.querySelector('#hsHeaderImg');}
          resolve(this.callback);
          this.cardHeaderImg = this.el.shadowRoot.querySelector('#hsHeaderImg');
        
          this.cardContent.classList.add(`hs-card-size${this.cardSize}`);
         
          // this.cardImgHeaderImg.classList.contains('hs-card_img-header_img--sm') ? (this.cardHeaderImg.style.width = '265px') && (this.overlay.style.width = '265px') 
          //  : this.cardImgHeaderImg.classList.contains('hs-card_img-header_img--lg') ? (this.cardHeaderImg.style.width = '400px') && (this.overlay.style.width = '400px')
          //  : this.cardImgHeaderImg.classList.contains('hs-card_img-header_img--fluid') ? (this.cardHeaderImg.style.width = '100%') && (this.overlay.style.width = '100%')
          //  : (this.cardImgHeaderImg.style.width = '100%') && (this.overlay.style.width = '100%') 
         
          resolve(this.callback);
        }, 3000);
      } 
      catch(error) {
        const fullErrorMsg = `Error in getElements(): ${error}`;
        
        reject(console.log('getElements error: ' + fullErrorMsg));
      }
    });
  }
  
  @Prop() cardContainer:any;
  @Prop() cardContents:any;
  @Prop() clonedContent:any;
  @Prop() cloneBaby:any;
  public function() {
    this.numberOne();
  }
  
  @Method() async numberOne(): Promise<unknown> {
    return new Promise((resolve, reject): void => {
      console.log('first promise');
      try {
        setTimeout((): void => {
          this.cardContents = document.querySelector('.hs-card-content');
          this.clonedContent = this.cardContents.cloneNode(true);

          console.log('cloned em');
          this.cardContents.remove();
          console.log(this.clonedContent);
          resolve(this.callback, this.numberTwo());
        }, 6000);
      } 
      catch(error) {
        const fullErrorMsg = `Error in getElements(): ${error}`;
        console.log('getElements error: ' + fullErrorMsg);
        reject(false);
      }
    });
  }


  
  @Method() async numberTwo(): Promise<unknown> {
    return new Promise((resolve, reject): void => {
      try {
        setTimeout((): void => {
          this.cloneBaby = this.el.shadowRoot.querySelector('#cloneBaby');
          this.cloneBaby.appendChild(this.clonedContent);
          console.log('cloned em');
          resolve(this.callback);
        }, 6000);
        } 
        catch(error) {
          const fullErrorMsg = `Error in getElements(): ${error}`;
          console.log('getElements error: ' + fullErrorMsg);
          reject(false);
        }
    });
  }
  @Prop() cardContainerSize;
  @Prop() cardHeaderSize;
  
  componentWillLoad() {
    
     typeof this.cardSize === 'undefined' ? this.cardSize = '--fluid' : '';
    typeof this.colorTone === 'undefined' || typeof this.colorTone === null || this.colorTone === 'light' ? this.colorToneClass = 'light' :
    this.colorTone === 'dark' ? this.colorToneClass = 'dark' : this.colorToneClass = 'light';
    this.getElements().then(this.callback);
    typeof this.imgPath === 'undefined' ? this.showHide = 'hs-display-none' : this.showHide = 'hs-display-block';
    this.cardContainerSize = `hs-card-size${this.cardSize}`;
    this.cardHeaderSize = `hs-card_header${this.cardSize}`;
    
  }
  
  render() {
    
    
    return (
      <div id={this.cardId} class={`hs-card ${this.cardContainerSize} ${this.colorTone}`}>
       <header class={`hs-card_header ${this.cardHeaderSize} responsive-object hs-ratio-3-2 `}>
        <a id="imgHeaderOverlay" class={`hs-overlay hs-card_img-header_overlay${this.cardSize} ${this.showHide} hs-scale-potionatel`} href="#" onClick={() => this.launchModalHandler(`${this.modalId}`)}>
          <img id="hsHeaderImg" src={`${this.imgPath}`} class={`hs-card_img-header_img${this.cardSize} hs-scale-proportionate`} alt="header image" />
        </a>
        <slot name="card-header" />
        </header>
        <div id="cloneBaby" class={`hs-card_body cardContainerSize`} >
          <slot name="card-body" />
        </div>
        
        <div id="foot" class={`hs-card_footer row m-0 d-flex w-100 ${this.colorToneClass} p-0`}>
          
          <slot name="card-footer" />
        </div>
      </div>
    );
  }  
}
