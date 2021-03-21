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
  @Prop({mutable: true}) frontFlip: HTMLDivElement;
  @Prop({mutable: true, reflect: true}) flipHeight: any = '470px';
  @Prop({mutable: true, reflect: true}) flipWidth: any = '936px';
  @Prop({mutable: true}) front: HTMLDivElement;
  @Prop({mutable: true}) back: HTMLDivElement;
  @Prop({mutable: true}) snipp: HTMLDivElement;
  @Prop({mutable: true}) slotBack: HTMLElement | any;
  @Prop({mutable: true}) slotFront: HTMLElement;
  @Prop({mutable: true}) contentBack: any;
  @Prop({mutable: true}) codeElement: any;
  @Prop({mutable: true, reflect: true}) language? = 'html';
  @Prop({mutable: true, reflect: true }) flipcodeButtontext? = 'Flip Code';
  @Prop({mutable: true, reflect: true }) flipcopyButtonText? = 'Copy';


//#region 
// *========== FORMATTING ===========* //

  /**
   * @description: Fixes the pre tag indentation issue.
   * @param {string} str  
   */
   cleanIndentation(str: any):any {
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
    const newHeight = this.el.shadowRoot.querySelector('#flip2CodeFront').scrollHeight
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
          this.outerContainer.style.height = `${this.setHeight}`;
          this.toolbar = this.el.shadowRoot.querySelector('#flip2CodeToolbar');
          this.button = this.el.shadowRoot.querySelector('#button');
          
          this.innerContainer = this.el.shadowRoot.querySelector('#flip2CodeInnerContainer');
          this.innerContainer.style.height = `${this.setHeight}`;
          this.frontFlip = this.el.shadowRoot.querySelector('#flip2CodeFront');
          this.snipp = this.el.shadowRoot.querySelector('#flip2CodeSnipp.flip2CodeSnipp');
          
          this.front = this.el.shadowRoot.querySelector('#flip2CodeFront.hs-flip2Code-card__face');
          this.back = this.el.shadowRoot.querySelector('#flip2CodeBack.hs-flip2Code-card__face');
          this.back.style.height = `${this.setHeight}`;
          
          this.slotFront = this.el.shadowRoot.querySelector('slot[name="front"]');
          this.slotBack = this.el.shadowRoot.querySelector('slot[name="back"]');
         
          this.contentBack = this.slotBack.assignedElements()[0]
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
            this.flipHeight = this.front.scrollHeight;
            this.flipWidth = this.front.scrollWidth;
          };

          // window.onresize = function resizeProportionate() {
          //   return this.outerContainer.style.flipHeight = Number(this.flipHeight) * .09 + 'px', 
          //   this.outerContainer = `${this.outerContainer}px`;
          // }
          // l(this.slotBack);
          // l(this.flipHeight),  l(this.flipWidth);

          this.outerContainer.style.height = `${this.flipHeight}`;
          this.frontFlip.style.height = `${this.flipHeight}`;
          this.innerContainer.style.height = `${this.flipHeight}`;
          this.back.style.height = `${this.flipHeight}`;

          this.slotFront.style.height = `${this.flipHeight}`;
          this.slotBack.style.height = `${this.flipHeight}`;
          this.slotBack.style.overflow = 'hidden';
          this.slotBack.style.overflowY = 'auto';
          this.contentBack.style.height = this.front.scrollHeight - 40 + 'px';
          this.contentBack.style.marginTop = '40px';
          this.snipp.style.height = `${this.flipHeight}`;
          this.front.style.height = `${this.flipHeight}`;

          // l(this.outerContainer);
          // l(this.back);
          // l(this.front);
          // l(`Content:${this.contentBack}`);
          // this.el.style = `height: ${this.height}; width: ${this.Width}`;
          // this.outerContainer.addEventListener('mouseover', (event) => {
          //   event.preventDefault();
          //   this.outerContainer.focus();
          // });

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
      <Host>
      <div id="flip2CodeContainer" class="ratio ratio-16x9 hs-flip2Code-card__scene">
        <div id="flip2Codetoolbar" class="hs-flip2Code-toolbar">
            <a href="javascript:void(0);" id="flipCodeButton" class="hs-flip2Code-button" onClick={() => this.flipHandler()}>{this.flipcodeButtontext}</a>
            <a href="javascript:void(0);" id="flipClipButton" class="hs-flip2Code-button" data-clipboard-target="#flipCodeBlock">{this.flipcopyButtonText}</a>
          </div>
          <div id="flip2CodeInnerContainer" class='ratio ratio-16x9 hs-flip2Code-card'>
            <div id="flip2CodeFront" class="ratio ratio-16x9 hs-flip2Code-card__face ">
            <div id="flip2CodeFront" class="ratio ratio-16x9 hs-flip2Code-card__face--front">
              <slot name="front"></slot>
            </div> 
            </div> 
            <div id="flip2CodeSnipp" class="flip2CodeSnipp">
              <div id="flip2CodeBack" class="ratio ratio-16x9 hs-flip2Code-card__face hs-flip2Code-card__face--back">
                <slot name="back"></slot>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
    
  }

}
