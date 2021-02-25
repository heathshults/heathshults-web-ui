/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Element, Prop, Event, EventEmitter, Listen, h } from '@stencil/core';

@Component({
  tag: 'hs-card-img-header',
  styleUrl: './hs-card_img-header.scss',
  shadow: true,
})
export class HSCardImgHeader {
   
  //#region  
  // modalLancher: EventEmitter;
  // @Prop() modalLancher: EventEmitter<any>;
  // @Event() launchModal: EventEmitter<any>;
  // @Method() async launchModalEvent(event: UIEvent) {
  //   this.launchModal.emit(event);
  // }

  // @Listen('launchModal')
  // public launchModalHandler(target: string): any {
  //   // showModal(`#${this.clickTarget}`)
    
  //   return this.clickTarget ? this.show(document.querySelector(target)) : alert('no target parameter');
    
  // }
  // public show:any = (target) => {
  //   return document.querySelector(target).style.display = 'block';
  // };
  // #endregion
  @Element() el: HTMLElement;
  
  @Prop({reflect: true}) colorTone: string;
  @Prop({reflect: true}) colorToneClass: string;
  
  @Prop() cardHeader: any;
  @Prop() cardHeaderImg: HTMLElement;
  @Prop() imgHeaderImgPlaceholder = '/assets/img/svg/image-placeholder.svg';
  @Prop() overlay: any;
  @Prop() imgElem: any;
  @Prop() modalId: string;
  @Prop() imgHeaderImg: string;
  @Prop() imgPath:string;
  @Prop() showHide:string;
  
  
  @Prop() clickTarget: string;
  
  // modalLancher: EventEmitter;
  @Event() modalLancher: EventEmitter;
  launchModalEventHandler(event: Event) {
    this.modalLancher.emit(event);
  }
  
  @Listen('launchModal')
  launchModalHandler(event: Event) {
    // showModal(`#${this.clickTarget}`)
    event.preventDefault();
    this.modalId ? document.querySelector(this.modalId).classList.add('hs-display-block') : 
    this.validURL(this.clickTarget) === true ? window.location.href = this.clickTarget : '';
  }
  
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
    // this.getElements().then(this.callback)

    return (
      <header class={`hs-card_header ${this.colorTone}`}>
       { this.imgPath ? <a id="imgHeaderOverlay" class={`hs-overlay ${this.showHide} p-0 m-0`} href="#" onClick={() => this.launchModalHandler(event)} ><img id="hsHeaderImg" src={`${this.imgPath}`} class={`hs-card_img-header_img ${this.showHide} p-0 m-0`} alt="header image" /></a> 
          : ''}
        <slot name="card-header" />
      </header>
    );
  }

}
