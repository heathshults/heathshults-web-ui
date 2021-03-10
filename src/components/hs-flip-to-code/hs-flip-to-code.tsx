import { Component, Prop, Element, Method, Host, h } from '@stencil/core';
import hljs from '../../../node_modules/highlight.js/lib/core.js';
// import './highlight.css';
console.log(`hljs: ${hljs}`);

@Component({
  tag: 'hs-flipcode',
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
  @Prop({mutable: true}) flipCardBack: HTMLDivElement;
  @Prop({mutable: true}) flipCardSnipp: HTMLDivElement;
  @Prop({mutable: true}) flipCodeSlot: HTMLElement | any;
  @Prop({mutable: true}) flipCodeSlotDiv: HTMLElement;
  @Prop({mutable: true}) flipCodePre: HTMLElement;
  @Prop({mutable: true}) flipCodeBlock: HTMLElement;
  @Prop({mutable: true}) flipCode: any;
  @Prop({mutable: true}) unprocessedFlipCode: any;
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
          this.flipCardBack = this.el.shadowRoot.querySelector('#flip2CodeBack');
          this.flipCardSnipp = this.el.shadowRoot.querySelector('#flip2CodeSnipp');
          this.flipCodeSlot = this.el.shadowRoot.querySelector('slot[name="back"]');
          this.flipCodePre = this.el.shadowRoot.querySelector('pre#hs-pre');
          this.flipCodeBlock = this.el.shadowRoot.querySelector('#flipCodeBlock'); //<code id="flipCodeBlock" class="hs-code">
          this.unprocessedFlipCode = this.flipCodeSlot.assignedNodes()[0].innerHTML;
          
          l(this.flipCodeSlot.assignedNodes()[0]);
          l(`unhighlited: ${this.flipCodeSlot.assignedNodes()[0]}`);
          
          const highlightedCode = hljs.highlightAuto(`${this.unprocessedFlipCode}`).value;
          this.flipCodeBlock.innerHTML = highlightedCode;
          l(`highlited: ${highlightedCode}`);
          
          this.setHeight = ():number => {
            return this.flipCardFront.scrollHeight;
          };
          
          this.flipContainer.style.height = `${this.setHeight()}px`;
          this.flipCard.style.height = `${this.setHeight()}px`;
          this.flipCardFront.style.height = `${this.setHeight()}px`;
          this.flipCardBack.style.height = `${this.setHeight()}px`;
          this.flipCardSnipp.style.height = `${this.setHeight()}px`;
          this.flipCodeSlot.style.height = `${this.setHeight()}px`;
          this.flipCodePre.style.height = `${this.setHeight()}px`;
          this.flipCodeBlock.style.minHeight = `${this.setHeight()}px`;

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
        <div id="flip2CodeContainer" class="hs-flip2Code-card__scene">
          <a href="javascript:void(0);" id="flipbutton" class="hs-flip2Code-button" onClick={() => this.flipHandler()}>See the code!</a>
          
          <div id="flip2Code" class="hs-flip2Code-card">
            
            <div id="flip2CodeFront" class="hs-flip2Code-card__face hs-flip2Code-card__face--front">
            
              <slot name="front"></slot>
              
            </div> 
            
            <div id="flip2CodeBack" class="hs-flip2Code-card__face hs-flip2Code-card__face--back">
              <div id="flip2CodeSnipp">
                <pre id="hs-pre" class="hs-pre">
                  <code id="flipCodeBlock" class="hs-code hljs">
                  
                    <slot name="back"></slot>
                    
                  </code>
                </pre>
              </div>
            </div>
            
          </div>
        </div>
      </host>
    );
  }

}
