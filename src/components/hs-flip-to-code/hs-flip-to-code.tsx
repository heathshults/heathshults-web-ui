import { Component, Prop, Element, Host, h } from '@stencil/core';
import * as hljs from 'highlight.js';


@Component({
  tag: 'hs-flip-code',
  styleUrl: 'hs-flip-to-code.scss',
  shadow: true,
})
export class HsFlipToCode {
  @Element() el: HTMLDivElement;
  @Prop({mutable: true}) flipButton: HTMLButtonElement;
  @Prop({mutable: true}) flipContainer: HTMLDivElement;
  @Prop({mutable: true}) flipCard: HTMLDivElement;
  @Prop({mutable: true}) flipCardHeight: any;
  @Prop({mutable: true}) flipCardFront: HTMLDivElement;
  @Prop({mutable: true}) flipCodeBlock: any;
  @Prop({mutable: true}) flipCode: any;
  @Prop({mutable: true}) processedFlipCode: any;
  @Prop({mutable: true}) flipLanguage: string;
  @Prop({mutable: true}) language: any;
  @Prop({mutable: true}) setHeight: any;

  
  componentDidLoad() {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(()=> {
          const l = console.log;
          this.flipContainer = this.el.shadowRoot.querySelector('#flip2CodeContainer');
          this.flipButton = this.el.shadowRoot.querySelector('#flipbutton');
          this.flipCard = this.el.shadowRoot.querySelector('#flip2Code');
          this.flipCardFront = this.el.shadowRoot.querySelector('#flip2CodeFront');
          this.flipCodeBlock = this.el.shadowRoot.querySelector('slot[name="back"]');
          this.flipCode = this.flipCodeBlock.innerText;
          
          const highlightedCode = hljs.highlightAuto(this.flipCode).value;
          this.flipCodeBlock.innerText = highlightedCode;
          
          this.setHeight = (element):number => element.style.height = this.flipCardFront.scrollHeight;
          
          this.flipContainer.style.height = this.setHeight(this.flipCardFront);
          this.flipCard.style.height = this.setHeight(this.flipCardFront);
          this.flipCardFront.style.height = this.setHeight(this.flipCardFront);
          this.flipCodeBlock.style.height = this.setHeight(this.flipCardFront);

          l(this.flipContainer);
          l(this.flipCard);
          l(this.flipButton);
          l(this.flipCodeBlock);
          l(highlightedCode);
          l(this.flipCardFront.scrollHeight);
          // eslint-disable-next-line no-inner-declarations
          
          
          return resolve(true);
      }, 500);
      }
      catch(err) {
        console.log(err.message);
        return reject(false);
      }
    });
    
    
  }
  
  

  
  // loadScript() {
  //   const script = document.createElement('script');
  //   const scriptInit = document.createElement('script');
    
  //   scriptInit.innerText = hljs.highlightAll();

  //   script.onload = async () => {
  //     script.setAttribute('data-highlightjs-loaded', this.language);
  //   };

  //   script.src = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.6.0/highlight.min.js';
  //   script.setAttribute('data-highlightjs', this.language);
  //   script.defer = true;

  //   document.head.appendChild(script);
  //   document.head.appendChild(scriptInit);
  // }
  
  flipHandler(): void {
    this.flipCard.classList.toggle('is-flipped');
  }
  
  render() {
    
    return (
      <host>
        <button id="flipbutton" class="btn btn-dark" onClick={() => this.flipHandler()}>See the code!</button>
        <div id="flip2CodeContainer" class="hs-flip2Code-card__scene hs-flip2Code-card__scene--card">
          <div id="flip2Code" class="hs-flip2Code-card">
            <div id="flip2CodeFront" class="hs-flip2Code-card__face hs-flip2Code-card__face--front">
              <slot name="front"></slot>
            </div>
            <div class="hs-flip2Code-card__face hs-flip2Code-card__face--back">
              <slot name="back"></slot>
            </div>
          </div>
        </div>
      </host>
    );
  }

}
