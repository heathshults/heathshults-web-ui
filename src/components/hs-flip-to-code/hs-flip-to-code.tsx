import { Component, Prop, Element, h } from '@stencil/core';
import hljs from 'highlight.js/lib/core';

@Component({
  tag: 'hs-flip-code',
  styleUrl: 'hs-flip-to-code.scss',
  shadow: true,
})
export class HsFlipToCode {
  @Element() el: HTMLDivElement;
  @Prop() flipButton: HTMLButtonElement;
  @Prop() flipContainer: HTMLDivElement;
  @Prop() flipCard: HTMLDivElement;
  @Prop() flipCodeBlock: any;
  @Prop() flipCode: any;
  @Prop() processedFlipCode: any;
  @Prop() fliLanguage: string;
  @Prop() language: any;
  
  
  
  
  componentDidLoad() {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(()=> {
          const l = console.log;
          this.flipContainer = this.el.shadowRoot.querySelector('#flipcardContainer');
          this.flipCard = this.el.shadowRoot.querySelector('#flipcard');
          this.flipButton = this.el.shadowRoot.querySelector('#flipbutton');
          this.flipCodeBlock = this.el.shadowRoot.querySelector('slot[name="back"]');
          this.flipCode = this.flipCodeBlock.innerHTML;
          const highlightedCode = hljs.highlightAuto(this.flipCode).value;
          this.processedFlipCode = highlightedCode;
          this.flipCodeBlock.innerHTML = this.processedFlipCode;
          l(this.flipContainer);
          l(this.flipCard);
          l(this.flipButton);
          l(this.flipCodeBlock);
          l(highlightedCode);
          // eslint-disable-next-line no-inner-declarations
          
          
          return resolve(true);
      }, 2000);
      }
      catch(err) {
        console.log(err.message);
        return reject(false);
      }
    });
    
    
  }
  flipHandler(): void {
    this.flipCard.classList.toggle('is-flipped');
  }
  
  render() {
    return (
      <div>
        <button id="flipbutton" class="btn btn-dark" onClick={() => this.flipHandler()}>See the code!</button>
        <div id="flipcardContainer" class="hs-flip-card__scene hs-flip-card__scene--card">
          <div id="flipcard" class="hs-flip-card">
            <div class="hs-flip-card__face hs-flip-card__face--front">
              <slot name="front"></slot>
            </div>
            <div class="hs-flip-card__face hs-flip-card__face--back">
            <pre>
            <code id="flipCodeBlock" class={`${this.language} hljs`}>
            <slot name="back"></slot>
                </code>
                </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
