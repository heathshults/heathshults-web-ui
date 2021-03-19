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
  @Prop({mutable: true, reflect: true}) height: any = '350px';
  @Prop({mutable: true, reflect: true}) width: any = '100%';
  @Prop({mutable: true}) front: HTMLDivElement;
  @Prop({mutable: true}) back: HTMLDivElement;
  @Prop({mutable: true}) snipp: HTMLDivElement;
  @Prop({mutable: true}) slotBack: HTMLElement | any;
  @Prop({mutable: true}) slotFront: HTMLElement;
  @Prop({mutable: true}) contentBack: any;
  @Prop({mutable: true}) codeElement: any;
  @Prop({mutable: true, reflect: true}) language? = 'html';
  @Prop({mutable: true}) setHeight: any;
  @Prop({mutable: true}) earlySet: any;
  @Prop({mutable: true, reflect: true }) flipButtonText? = 'Flip Code';
  @Prop({mutable: true, reflect: true }) copyButtonText? = 'Copy';


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
  // setHeight():number {
  //   if  (this.flipcodeHeight === 'auto' || this.flipcodeHeight === '') {
  //     return this.el.shadowRoot.querySelector('#flip2CodeFront').scrollHeight;
  //   } else {
  //     return this.flipcodeHeight;
  //   }
  // }

  connectedCallback():Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(()=> {
          const l = console.log;

          this.outerContainer = this.el.shadowRoot.querySelector('#flip2CodeContainer');
          this.toolbar = this.el.shadowRoot.querySelector('#flip2CodeToolbar');
          this.button = this.el.shadowRoot.querySelector('#button');
          
          this.innerContainer = this.el.shadowRoot.querySelector('#flip2CodeInnerContainer');
          this.snipp = this.el.shadowRoot.querySelector('#flip2CodeSnipp.flip2CodeSnipp');
          
          this.front = this.el.shadowRoot.querySelector('#flip2CodeFront.hs-flip2Code-card__face');
          this.back = this.el.shadowRoot.querySelector('#flip2CodeBack.hs-flip2Code-card__face');
          
          this.slotFront = this.el.shadowRoot.querySelector('slot[name="front"]');
          this.slotBack = this.el.shadowRoot.querySelector('slot[name="back"]');
         
          this.contentBack = this.slotBack.assignedElements()[0].firstElementChild
          // this.contentBack.style.width = this.front.scrollWidth;
          // this.contentBack.style.height = this.front.scrollHeight;
          this.codeElement = this.slotBack.assignedElements()[0].firstElementChild.firstElementChild;
          l(this.codeElement); 
          // this.Block.innerHTML = this.;
          // this.slotBackChildEls[0].firstElementChild.firstElementChild.style.visibility = hidden;
          // this.slotBackChildEls[0].firstElementChild.closest('pre').style.minHeight = this.setHeight();

          // set width/height variables
          // this.flipcodeHeight = this.Front.offsetHeight;
          // this.flipcodeWidth = this.Front.offsetWidth;

          /**
         * Watch the width and height changes
         * @remark   Keeps it all together better
         * @example  this.slotFront.style.height = `${this.flipcodeHeight}px`;
                     this.slotFront.style.width = `${this.flipcodeWidth}px`;
          * @default "window.onresize"
          */
          window.onresize = () => {
            this.height = this.front.scrollHeight;
            this.width = this.front.scrollWidth;
          };
          l(this.slotBack);
          l(this.height),  l(this.width);

          this.outerContainer.style.height = `${this.height}`;
          this.innerContainer.style.height = `${this.height}`;
          this.back.style.height = `${this.height}`;

          this.slotFront.style.height = `${this.height}`;
          this.slotBack.style.height = `${this.height}`;
          this.snipp.style.height = `${this.height}`;
          this.front.style.height = `${this.height}`;

          l(this.outerContainer);
          l(this.back);
          l(this.front);
          l(`Content:${this.contentBack}`);
          // this.el.style = `height: ${this.height}; width: ${this.Width}`;
          
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
      <div id="flip2CodeContainer" class="ratio ratio-21x9 hs-flip2Code-card__scene">
          <div id="flip2Codetoolbar" class="hs-flip2Code-toolbar">
            <a href="javascript:void(0);" id="flipButton" class="hs-flip2Code-button" onClick={() => this.flipHandler()}>{this.flipButtonText}</a>
            <a href="javascript:void(0);" id="flipClipbutton" class="hs-flip2Code-button" data-clipboard-target="#block">{this.copyButtonText}</a>
          </div>
          <div id="flip2CodeInnerContainer" class='ratio ratio-21x9 hs-flip2Code-card'>
            <div id="flip2CodeFront" class="hs-flip2Code-card__face hs-flip2Code-card__face--front">
              <slot name="front"></slot>
            </div> 
            <div id="flip2CodeSnipp" class="flip2CodeSnipp">
              <div id="flip2CodeBack" class="hs-flip2Code-card__face hs-flip2Code-card__face--back">
                <slot name="back"></slot>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
    
  }

}
