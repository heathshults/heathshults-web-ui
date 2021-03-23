import { Component, Host, Prop, Element, Event, EventEmitter, Watch, Method, Listen, h } from '@stencil/core';
import { escape, unescape } from 'html-escaper';

@Component({
  tag: 'hs-flip2code-dev',
  styleUrl: 'hs-flip-to-code.scss',

  shadow: true,
})
export class HSFlip2Code {
  @Element() el: HTMLElement;
  @Prop({mutable: true}) toolbar: HTMLElement;
  @Prop({mutable: true}) button: HTMLButtonElement;
  @Prop({mutable: true}) outerContainer: HTMLDivElement;
  @Prop({mutable: true}) innerContainer: HTMLDivElement;
  @Prop({mutable: true}) frontFlipA: HTMLDivElement;
  @Prop({mutable: true}) frontFlipB: HTMLDivElement;
  @Prop({mutable: true, reflect: true}) flipHeight: any = 'auto';
  @Prop({mutable: true, reflect: true}) flipWidth: any = '936px';
  @Prop({mutable: true}) front: HTMLDivElement;
  @Prop({mutable: true}) back: HTMLDivElement;
  @Prop({mutable: true}) snipp: HTMLDivElement;
  @Prop({mutable: true}) slotBack: HTMLElement | any;
  @Prop({mutable: true}) slotFront: HTMLElement;
  @Prop({mutable: true}) contentBack: any;
  @Prop({mutable: true}) codeElement: any;
  @Prop({mutable: true, reflect: true}) aspectRatio? = 'hs-ratio hs-ratio-16x9';
  @Prop({mutable: true, reflect: true}) language? = 'html';
  @Prop({mutable: true, reflect: true }) flipcodeButtontext? = 'Flip Code';
  @Prop({mutable: true, reflect: true }) flipcopyButtonText? = 'Copy';


//#region 
// *========== FORMATTING ===========* //

  /**
   * @description: Fixes the pre tag indentation issue.
   * @param {string} str  
   */
   // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
   cleanIndentation(str):any {
    const pattern = str.match(/\s*\n[\t\s]*/);
    return str.replace(new RegExp(pattern, 'g'), '\n');
  }

/**
 * Sets height on containers for consistency and uniformity
 * @return 
 * @memberof HSFlip2Code
 * @returns { number } representing the containers height
 */
  public setHeight():any {
    if  (!this.flipHeight) {
      const newHeight = this.el.shadowRoot.querySelector('#flip2CodeFrontA').scrollHeight;
        return `${newHeight}px`;
    } else {
      return this.flipHeight;
    }
  }

  connectedCallback():Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(()=> {
          const l = console.log;
          
          this.outerContainer = this.el.shadowRoot.querySelector('#flip2CodeContainer');
          // this.outerContainer.style.height = auto; //`${this.setHeight}`;
          this.toolbar = this.el.shadowRoot.querySelector('#flip2CodeToolbar');
          this.button = this.el.shadowRoot.querySelector('#button');
          
          this.innerContainer = this.el.shadowRoot.querySelector('#flip2CodeInnerContainer');
          //this.innerContainer.style.height = `${this.setHeight}`;
          this.frontFlipA = this.el.shadowRoot.querySelector('#flip2CodeFrontA');
          this.frontFlipB = this.el.shadowRoot.querySelector('#flip2CodeFrontB');
          this.snipp = this.el.shadowRoot.querySelector('#flip2CodeSnipp.flip2CodeSnipp');
          
          this.front = this.el.shadowRoot.querySelector('#flip2CodeFrontA.hs-flip2Code-card__face');
          this.back = this.el.shadowRoot.querySelector('#flip2CodeBack.hs-flip2Code-card__face');
          //this.back.style.height = `${this.setHeight}`;
          
          this.slotFront = this.el.shadowRoot.querySelector('slot[name="front');
          this.slotBack = this.el.shadowRoot.querySelector('slot[name="back"]');
         
          this.contentBack = this.slotBack.assignedElements()[0].firstElementChild;
          // l('backside');
          // l(this.contentBack);
          // this.contentBack.style.width = this.front.scrollWidth;
          // this.contentBack.style.flipHeight = this.front.scrollHeight;
          // this.codeElement = this.slotBack.assignedElements()[0].firstElementChild.firstElementChild;
          // l(this.codeElement); 
          // this.Block.innerHTML = this.;
          // this.slotBackChildEls[0].firstElementChild.firstElementChild.style.visibility = 'hidden';
          // this.slotBackChildEls[0].firstElementChild.closest('pre').style.minHeight = this.setHeight();

          // set width/flipHeight variables
          // this.flipcodeHeight = this.Front.offsetHeight;
          // this.flipcodeWidth = this.Front.offsetWidth;

          /**
         * Watch the width and flipHeight changes
         * @remark   Keeps it all together better
         * @example  this.slotFront.style.flipHeight = `${this.flipcodeHeight}px`;
                     this.slotFront.style.width = `${this.flipcodeWidth}px`;
          * @default "window.onresize"
          */
          window.onresize = () => {
            this.flipHeight = this.slotFront.scrollHeight;
            this.flipWidth = this.front.scrollWidth;
            // this.el.style.height = this.flipHeight;
            this.el.style.width = this.flipWidth;
          };

          this.outerContainer.style.height = `${this.flipHeight} + 40px`;
          // this.frontFlipA.style.height = `${this.flipHeight}`;
          // this.innerContainer.style.height = `${this.flipHeight}`;
          // this.back.style.height = `${this.flipHeight}`;

          // this.slotFront.style.height = `${this.flipHeight}`;
          // this.slotBack.style.height = `${this.flipHeight}`;
          this.slotFront.style.width = `${this.flipWidth}`;
          this.slotBack.style.width = `${this.flipWidth}`;
          // this.slotBack.style.overflow = 'hidden';
          // this.slotBack.style.overflowY = 'auto';
          this.contentBack.style.height = this.front.scrollHeight - 40 + 'px';
          this.contentBack.style.marginTop = '40px';
          this.snipp.style.width = `${this.flipWidth}`;
          this.front.style.width = `${this.flipWidth}`;

          // l(this.outerContainer);
          // l(this.back);
          // l(this.front);
          // l(`Content:${this.contentBack}`);

          resolve(true);
        }, 1000);
      }
      catch(err) {
        console.log(err.message);
        reject(false);
        throw new Error(err);
      }
    }).catch(error => {
      console.log(error);
    });
  }

  // componentDidLoad():any {
  //   setTimeout(() => Prism.highlightElement(), 0);
  // }

  // componentDidUpdate():any {
  //   setTimeout(() => Prism.highlightElement(), 0);
  // }
  
 
  flipHandler(): void {
    this.innerContainer.classList.toggle('is-flipped');
    // this.slotBack.classList.togglel('remove');
  }
//#endregion
  
  wrapper!: any;

  render():any {
    return (
      <Host
        flip-height={this.flipHeight}
        flip-width={this.flipWidth}
      >
      <div id="flip2CodeContainer" class={`hs-flip2Code-card__scene ${this.aspectRatio}`}>
        <div class={`hs-flip2Code-grid ${this.aspectRatio}`}>
          <div class="hs-flip2Code-grid__toolbar">
        <div id="flip2Codetoolbar" class={`hs-flip2Code-toolbar`}>
          <a href="javascript:void(0);" id="flipCodeButton" class="hs-flip2Code-button" onClick={() => this.flipHandler()}>{this.flipcodeButtontext}</a>
          <a href="javascript:void(0);" id="flipClipButton" class="hs-flip2Code-button" data-clipboard-target="#flipCodeBlock">{this.flipcopyButtonText}</a>
        </div>
        </div>
        <div class={`hs-flip2Code-grid__content ${this.aspectRatio}`}>
          <div id="flip2CodeInnerContainer" class={`hs-flip2Code-card ${this.aspectRatio}`}>
            <div id="flip2CodeFrontA" class={`hs-flip2Code-card__face ${this.aspectRatio}`}>
            <div id="flip2CodeFrontB" class={`hs-flip2Code-card__face--front  ${this.aspectRatio}`}>
              <slot name="front"></slot>
            </div> 
            </div> 
            <div id="flip2CodeSnipp" class="flip2CodeSnipp">
              <div id="flip2CodeBack" class={`hs-flip2Code-card__face hs-flip2Code-card__face--back ${this.aspectRatio}`}>
                <slot name="back"></slot>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </Host>
    );
    
  }

}
