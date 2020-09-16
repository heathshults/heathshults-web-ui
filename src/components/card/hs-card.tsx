import { Component, Element, Prop, Event, EventEmitter, Listen, h } from '@stencil/core';

@Component({
  tag: 'hs-card',
  styleUrl: '../../scss/components/components.cards.scss',
  shadow: true,

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
  @Prop({reflect: true}) modalId: string;
  @Prop({reflect: true}) imgPath: string;
  // @Prop({reflect: true}) imgWidth?: any = '265px';
  // @Prop({reflect: true}) imgHeight?: any = '177px';
  // @Prop() imgW: string;
  // @Prop() imgH: string;
  @Prop() clickTarget?: string;
  // @Prop() callback?: any;
  
  modalLancher: EventEmitter;
  @Event() launchModal: EventEmitter;
  launchModalEvent(event: UIEvent) {
    this.launchModal.emit(event);
  }

  @Listen('launchModal')
  launchModalHandler(target: string) {
    // showModal(`#${this.clickTarget}`)
    //@ts-ignore: does not exist on type
    this.clickTarget ? document.querySelector(target).show() : alert('no target parameter')

  }
  
  private cb() {
    return
  }
  
  private callback = (()=> { if (typeof this.cb === 'function') return this.cb() })
  
  private getElements() {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          this.theElements();
        
          this.cardContent.classList.add(`hs-card-size${this.cardSize}`)
         
          this.cardImgHeaderImg.classList.contains('hs-card_img-header_img--sm') ? (this.cardHeaderImg.style.width = '265px') && (this.overlay.style.width = '265px') 
           : this.cardImgHeaderImg.classList.contains('hs-card_img-header_img--lg') ? (this.cardHeaderImg.style.width = '400px') && (this.overlay.style.width = '400px')
           : this.cardImgHeaderImg.classList.contains('hs-card_img-header_img--fluid') ? (this.cardHeaderImg.style.width = '100%') && (this.overlay.style.width = '100%')
           : (this.cardImgHeaderImg.style.width = '100%') && (this.overlay.style.width = '100%') 
         
          resolve(this.callback)
        }, 3000)
      } 
      catch(error) {
        let fullErrorMsg = `Error in getElements(): ${error}`;
        
        reject(console.log('getElements error: ' + fullErrorMsg))
      }
    })
  }
  
  
  private theElements() {
    return new Promise((resolve, reject) => {
      try {
        this.cardContent = document.querySelector('.hs-card_content');
        this.overlay = this.el.shadowRoot.querySelector('#imgHeaderOverlay');
        this.cardImgHeaderImg = this.el.shadowRoot.querySelector('#hsHeaderImg');
        resolve(this.callback)
      }
      catch(error) {
        reject('Reject because: ' + error)
      }
    })
  }

  componentWillLoad() {
    typeof this.colorTone === 'undefined' || typeof this.colorTone === null || this.colorTone === 'light' ? this.colorToneClass = 'light' :
      this.colorTone === 'dark' ? this.colorToneClass = 'dark' : this.colorToneClass = 'light';
    
  }  

  render() {
    this.getElements().then(this.callback)
    return (
      <div id={this.cardId} class={`hs-card hs-card-size${this.cardSize} ${this.colorTone}`}>
       <header class={`hs-card_header hs-card_header${this.cardSize}`}>
        <a id="imgHeaderOverlay" 
          class={`hs-overlay hs-card_img-header_overlay${this.cardSize}`} 
          href="#" 
          onClick={() => this.launchModalHandler(`${this.modalId}`)}>
          <img id="hsHeaderImg" src={`${this.imgPath}`} class={`hs-card_img-header_img${this.cardSize}`} alt="header image" />
        </a>
        <slot name="card-header" />
        </header>
        <div class={`hs-card_body hs-card-size${this.cardSize}`} >
          <slot name="card-body" />
        </div>
        <div class={`hs-card_footer row m-0 d-flex w-100 ${this.colorToneClass} p-0`}>
        
          <div class="col-md-12 hs-logo-row--footer">
            <ul class="flex-container space-between">
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
          </div>
        </div>
      </div>
    );
  }  
}
