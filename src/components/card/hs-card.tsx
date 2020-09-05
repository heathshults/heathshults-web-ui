import { Component, Element, Prop, Event, EventEmitter, Listen, h } from '@stencil/core';

@Component({
  tag: 'hs-card',
  styleUrl: '../../scss/components/components.cards.scss',
  shadow: true,

})

export class HSCard {
  @Element() el: HTMLElement;
  @Prop() cardImgHeaderImg: HTMLImageElement;
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
  
  private cb(fn: any) {
    console.log(`${fn}completed`)
    return
  }
  
  callback = ((c)=> { if (typeof this.cb === 'function') return this.cb(c) })
  
  private getElements() {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
         this.overlay = this.el.shadowRoot.querySelector('#imgHeaderOverlay')
         this.cardImgHeaderImg = this.el.shadowRoot.querySelector('#hsHeaderImg')
         console.log(this.overlay)
         console.log(this.cardImgHeaderImg)
         
         this.cardImgHeaderImg.classList.contains('hs-card_img-header_img--sm') ? (this.cardHeaderImg.style.width = '265px') && (this.overlay.style.width = '265px') 
          : this.cardImgHeaderImg.classList.contains('hs-card_img-header_img--lg') ? (this.cardHeaderImg.style.width = '400px') && (this.overlay.style.width = '400px')
          : this.cardImgHeaderImg.classList.contains('hs-card_img-header_img--fluid') ? (this.cardHeaderImg.style.width = '100%') && (this.overlay.style.width = '100%')
          : (this.cardImgHeaderImg.style.width = '100%') && (this.overlay.style.width = '100%') 
         
         
          resolve(this.callback(`${arguments.callee.name}`))
        }, 2000)
      } 
      catch(error) {
        let fullErrorMsg = `Error in getElements(): ${error}`;
        console.log(fullErrorMsg)
        reject(`Rejected getElements(): ${fullErrorMsg}`)
      }
    })
  }
  
  
  componentWillLoad() {
    typeof this.colorTone === 'undefined' || typeof this.colorTone === null || this.colorTone === 'light' ? this.colorToneClass = 'light' :
      this.colorTone === 'dark' ? this.colorToneClass = 'dark' : this.colorToneClass = 'light';
      
 
      
    
   
  

    this.getElements()
  }
  
  

  render() {
    console.info('Hello' +this.imgPath)

    return (
      <div id={this.cardId} class={`hs-card hs-card-size${this.cardSize} ${this.colorTone}`}>
      <header class={`hs-card_header hs-card_header${this.cardSize}`}>
      <a id="imgHeaderOverlay" 
        class={`hs-card_img-header_overlay${this.cardSize}`} 
        href="javascript:void(0);" 
        onClick={() => this.launchModalHandler(`${this.modalId}`)}>
        <img id="hsHeaderImg" src={`${this.imgPath}`} class={`hs-card_img-header_img${this.cardSize}`} alt="header image" />
      </a>
      <slot name="card-header" />
      </header>
      
        <slot name="card-body" />
      
      <div class={`hs-card_footer ${this.colorToneClass} p-0`}>
      
      <div class="row m-0 d-flex w-100">
      <div class="col-md-12 p-3 hs-logo-row--footer">
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
      </div>
    );
  }  
}
