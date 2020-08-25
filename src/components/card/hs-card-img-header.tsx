import { Component, Element, Prop, Event, EventEmitter, Listen, h } from '@stencil/core';

@Component({
  tag: 'hs-card-img-header',
  styleUrl: '../../scss/components/components.cards.scss',
  shadow: true
})
export class HSCardImgHeader {
  @Element() imgHeaderEl: HTMLDivElement;


  @Prop() cardHeader: any;
  @Prop() cardSize: any;
  @Prop() overlay: HTMLLinkElement;
  @Prop() imgElem: any;
  @Prop() imgPath: string;
  @Prop() imgWidth: string;
  @Prop() imgHeight: string;
  @Prop() imgW: string;
  @Prop() imgH: string;
  @Prop() sizeClass?: string;
  @Prop() imgSize: string;
  @Prop() clickTarget?: string;
  @Prop() modalId: string;

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

  componentWillLoad() {
    // this.cardHeaPassword1aderEl.querySelector('#imgHeader');
    this.imgHeaderEl.style.width = this.imgWidth;
    this.imgHeaderEl.style.height = this.imgHeight;
    this.cardHeader = this.imgHeaderEl.shadowRoot.querySelector('#imgHeader');
    this.imgElem = this.cardHeader.querySelector('#hsHeaderImg');
    console.log(this.imgElem)
    this.imgElem.src = this.imgPath;
    this.imgElem.style.width = this.imgWidth;
    this.imgElem.style.height = this.imgHeight;
    this.overlay = this.cardHeader.querySelector('#imgHeaderOverlay');
    this.imgW = this.imgWidth.replace(/px|%/g, '')
    this.imgH = this.imgWidth.replace(/px|%/g, '')
    console.log(this.imgH + ' ' + this.imgW)
  }

  render() {
    return (
      <header id="imgHeader" class="hs-card_img-header">
        <a id="imgHeaderOverlay" class="hs-img-header_overlay hs-responsive-box--16by9" href="javascript:void(0);" onClick={() => this.launchModalHandler(this.modalId)}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#ffffff" d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg> */}
          <img id="hsHeaderImg" src={this.imgPath} class="hs-img-header_img hs-responsive-box--16by9" width={this.imgW} height={this.imgH} alt="header image" />
        </a>
      </header>
    );
  }
}
