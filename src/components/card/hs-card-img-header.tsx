import { Component, Element, Prop, Event, EventEmitter, Listen, h } from '@stencil/core';

@Component({
  tag: 'hs-card-img-header',
  styleUrl: './hs-card_img-header.scss',
  shadow: true,
})
export class HSCardImgHeader {
  @Element() el: HTMLElement;
  @Prop() cardImgHeaderImg: HTMLImageElement;


  @Prop({reflect: true}) cardSize: string;
  
  @Prop() cardHeader: any;
  @Prop() cardHeaderImg: any;
  @Prop() overlay: any;
  @Prop() imgElem: any;
  @Prop({reflect: true}) modalId: string;
  @Prop({reflect: true}) imgPath: string;
  @Prop() clickTarget?: string;


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

  
  // private cb() {
  //   return
  // }
  
  // private callback = (()=> { if (typeof this.cb === 'function') return this.cb() })


  // private getElements() {
  //   return new Promise((resolve, reject) => {
  //     try {
  //       setTimeout(() => {
  //         this.theElements();
  //         this.cardHeaderImg = this.el.shadowRoot.querySelector('#hsHeaderImg')
         
  //         resolve(this.callback)
  //       }, 3000)
  //     } 
  //     catch(error) {
  //       let fullErrorMsg = `Error in getElements(): ${error}`;
        
  //       reject(console.log('getElements error: ' + fullErrorMsg))
  //     }
  //   })
  // }
  
  
  // private theElements() {
  //   return new Promise((resolve, reject) => {
  //     try {
  //       this.overlay = this.el.shadowRoot.querySelector('#imgHeaderOverlay');
  //       this.cardImgHeaderImg = this.el.shadowRoot.querySelector('#hsHeaderImg');
        
  //       resolve(this.callback)
  //     }
  //     catch(error) {
  //       reject('Reject because: ' + error)
  //     }
  //   })
  // }

  render() {
    // this.getElements().then(this.callback)

  return (
    <header class={`hs-card_header hs-card_header${this.cardSize}`}>
    <a id="imgHeaderOverlay" 
      class={`hs-card_img-header_overlay hs-card_img-header_overlay${this.cardSize}`} 
      href="#" 
      onClick={() => this.launchModalHandler(`${this.modalId}`)}>
      <img id="hsHeaderImg" src={`${this.imgPath}`} class={`hs-card_img-header_img hs-card_img-header_img${this.cardSize}`} alt="header image" />
    </a>
    </header>
  )}

}
