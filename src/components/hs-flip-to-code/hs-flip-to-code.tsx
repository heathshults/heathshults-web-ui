/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Component, Host,Prop, Element, Event, EventEmitter, h } from '@stencil/core';
import ClipboardJS from 'clipboard';
import { escape, unescape } from 'html-escaper';
import Prism from 'prismjs';
import { loadLanguages } from 'prismjs/components/';
// loadLanguages([
//   'html',
//   'javascript',
//   'typescript',
//   'css',
//   'scss',
//   'php',
//   'handlebars',
//   'mysql',
//   'sql',
//   'ejs',
//   'json',
//   'jsx',
//   'tsx',
//   'markdown',
//   'markup',
//   'mongodb',
//   'bash',
//   'shell',
//   'regex',
//   'xml-doc'
// ]);

@Component({
  tag: 'hs-flip2code',
  styleUrl: 'hs-flip-to-code.scss',

  shadow: true,
})
export class HSFlip2Code {
  @Element() el: HTMLDivElement;
  @Prop({mutable: true}) flipCodeButton: HTMLButtonElement;
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
  @Prop({mutable: true}) rawFlipCode: any;
  @Prop({mutable: true, reflect: true}) flipLanguage? = 'html';
  @Prop({mutable: true}) language: any;
  @Prop({mutable: true}) setHeight: any;
  @Prop({ mutable: true, reflect: true }) flipCodeButtonLabel? = 'Flip Code';

// *========== FORMATTING ===========* //

  /**
   * @description: Fixes the pre tag indentation issue.
   * @param {string} str  
   */
   cleanIndentation(str: unknown):any {
    const pattern = str.match(/\s*\n[\t\s]*/);
    return str.replace(new RegExp(pattern, 'g'), '\n');
  }

/**
 * Sets height on containers for consistency and uniformity
 * @return 
 * @memberof HSFlip2Code
 * @returns { number } representing the containers height
 */
  setHeight():number {
    return this.el.shadowRoot.querySelector('#flip2CodeFront').scrollHeight;
  }

/**
 * Refreshes the highlighted code when called
 * @return * 
 * @memberof HSFlip2Code
 */
  highlight():any {
    if (this.el && this.el.current) {
      Prism.highlightElement(this.ref.current);
    }
    return;
  }

componentDidRender():Promise<Element, string> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(()=> {
          const log = console.log;
          this.flipContainer = this.el.shadowRoot.querySelector('#flip2CodeContainer');
          log(this.flipContainer);
          this.flipCodeButton = this.el.shadowRoot.querySelector('#flipCodeButton');
          log( this.flipCodeButton);
          this.flipCard = this.el.shadowRoot.querySelector('#flip2Code');
          log(this.flipCard);
          this.flipCardFront = this.el.shadowRoot.querySelector('#flip2CodeFront');
          log(this.flipCardFront);
          this.flipCardBack = this.el.shadowRoot.querySelector('#flip2CodeBack');
          log(this.flipCardBack);
          
          this.flipCardSnipp = this.el.shadowRoot.querySelector('#flip2CodeSnipp');
          log(this.flipCardSnipp);

          this.flipCodeSlot = this.el.shadowRoot.querySelector('slot[name="back"]');
          log(this.flipCodeSlot);

          this.flipCodeSlotChildEls = this.flipCodeSlot.assignedElements();
          log(this.flipCodeSlotChildEls);

          this.flipCodePre = this.el.shadowRoot.querySelector('#flipCodePre');
          log(this.flipCodePre);

          this.flipCodeBlock = this.el.shadowRoot.querySelector('#flipCodeBlock');
          log(this.flipCodeBlock);

          
          this.flipCode = this.flipCodeSlotChildEls[0].firstElementChild.firstElementChild.innerHTML;
          log(`flipcode: ${this.flipCode}`);
          
          this.flipPostPre = this.flipCodeSlotChildEls[0].firstElementChild;
          
          log(this.flipCodeSlotChildEls[0].firstElementChild.firstElementChild);
          log(escape(this.flipCode));

          
          this.setHeight = ():number => {
            return this.flipCardFront.scrollHeight;
          };
          
          this.flipContainer.style.height = `${this.setHeight()}px`;
          this.flipCard.style.height = `${this.setHeight()}px`;
          this.flipCardFront.style.height = `${this.setHeight()}px`;
          this.flipCardBack.style.height = `${this.setHeight()}px`;
          this.flipCardSnipp.style.height = `${this.setHeight()}px`;
          this.flipCodePre.style.height = `${this.setHeight()}px`;
          this.flipCodeBlock.style.height = `${this.setHeight()}px`;
          this.flipCodeBlock.innerHTML = this.flipCode;
          this.flipCodeSlot.style.height = `${this.setHeight()}px`; // doesnt need height fix this
          this.flipCodeSlotChildEls[0].firstElementChild.closest('pre').style.minHeight = `${this.setHeight()}px`;
          this.flipPostPre.style.height = `${this.setHeight()}px`;
          // this.flipCodeSlot.style.display = 'none';
          
          resolve(true);
        }, 500);
      }
      catch(err) {
        console.log(err.message);
        reject(false);
      }
    });
  }

  // componentDidLoad():any {
  //   setTimeout(() => Prism.highlightElement(), 0);
  // }

  // componentDidUpdate():any {
  //   setTimeout(() => Prism.highlightElement(), 0);
  // }
  
  //* ==================== CLIPBOARD ====================== *//

  /**
   * The text inside the "copy to clipboard" button
   * @remark This is primarily for if you want to provide i18n with your syntax highlighted component
   * @example "Kopieer naar klembord"
   * @default "Copy to clipboard"
   */
   @Prop({ mutable: true, reflect: true })
   public copyButtonLabel = 'Copy';
   
   /**
   * The callback that will be fired when ClipboardJS fails to copy the text
   * @remark You can use this to, for example, show notifications to users
   * @remark This event will bubble up through the DOM
   * @default undefined
   * @example
   * ```html
   *	<body>
   *		<hs-flip2code id="example-highlight" theme="dark" language="typescript" content="console.log('example')" />
   *		  <script>
   *			  const syntaxHighlighterElement = document.querySelector('#example-highlight');
   *			  syntaxHighlighterElement.addEventListener('clipboardJsError', event => {
   *				  console.log('handling');
   *			  });
   *		  </script>
       </hs-flip2code>
   *	</body>
   * ```
   */
   
   @Event({ bubbles: true })
   public clipboardJsError: EventEmitter<ClipboardJS.Event>;
   private clipboardJsInstance: ClipboardJS;
   public componentWillLoad():Promise<any> {
     this.clipboardJsInstance = new ClipboardJS('#flipClipButton');
     this.clipboardJsInstance //
     .on('success', (event) => event.clearSelection()) 
     .on('error', (event) => this.clipboardJsError.emit(event));
   }
     
   flipHandler(): void {
     this.flipCard.classList.toggle('is-flipped');
   }
   
  
  render():any {
    return (
      <Host>
      <div id="flip2CodeContainer" class="hs-flip2Code-card__scene">
          <div class="hs-flip2Code-toolbar">
            <a href="javascript:void(0);" id="flipCodeButton" class="hs-flip2Code-button" onClick={() => this.flipHandler()}>{this.flipCodeButtonLabel}</a>
            <a href="javascript:void(0);" id="flipClipButton" class="hs-flip2Code-button" data-clipboard-target="#flipCodeBlock">{this.copyButtonLabel}</a>
          </div>
          <div id="flip2Code" class="hs-flip2Code-card">
            <div id="flip2CodeFront" class="hs-flip2Code-card__face hs-flip2Code-card__face--front">
              <slot name="front"></slot>
            </div> 
            <div id="flip2CodeBack" class="hs-flip2Code-card__face hs-flip2Code-card__face--back">
              <div id="flip2CodeSnipp">
                <pre id="flipCodePre" class="hs-pre language-javascript">
                  <code id="flipCodeBlock" class="hs-code language-javascript">
                    <slot name="back"></slot>
                    
                  </code>
                </pre>
              </div>
            </div>
            
          </div>
        </div>
      </Host>
    );
    
  }

}
