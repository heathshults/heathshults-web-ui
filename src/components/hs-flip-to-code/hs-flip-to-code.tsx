/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Component, Host,Prop, Element, Event, EventEmitter, h } from '@stencil/core';
// import highlight from 'custom-syntax-highlighter';
import ClipboardJS from 'clipboard';
import { escape, unescape } from 'html-escaper';
// import { cssPatterns } from './languages/css.js';
// import { scssPatterns } from './languages/scss.js';
// import { javascriptPatterns } from './languages/javascript.js';
// import { htmlPatterns } from './languages/html.js';
import Prism from '../../../node_modules/prismjs/prism.js';
// import { loadLanguages } from 'prismjs/components/';
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
  @Prop({mutable: true}) flipCodeInnerContainer: HTMLDivElement;
  @Prop({mutable: true, reflect: true}) flipcodeHeight: any = 350;
  @Prop({mutable: true}) flipCodeFront: HTMLDivElement;
  @Prop({mutable: true}) flipCodeBack: HTMLDivElement;
  @Prop({mutable: true}) flipCardSnipp: HTMLDivElement;
  @Prop({mutable: true}) flipCodeSlot: HTMLElement | any;
  @Prop({mutable: true}) flipCodeSlotDiv: HTMLElement;
  @Prop({mutable: true}) flipCodePre: HTMLElement;
  @Prop({mutable: true}) flipCodeBlock: HTMLElement;
  @Prop({mutable: true}) flipCode: any;
  @Prop({mutable: true}) rawFlipCode: any;
  @Prop({mutable: true, reflect: true}) flipcodeLanguage? = 'html';
  @Prop({mutable: true}) setHeight: any;
  @Prop({ mutable: true, reflect: true }) flipcodeButtontext? = 'Flip Code';

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
    if  (this.flipcodeHeight === 'auto' || this.flipcodeHeight === '') {
      return this.el.shadowRoot.querySelector('#flip2CodeFront').scrollHeight;
    } else {
      return this.flipcodeHeight;
    }
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

  connectedCallback():Promise<any> {
    
    return new Promise((resolve, reject) => {
      try {
        setTimeout(()=> {
          const l = console.log;
          this.flipContainer = this.el.shadowRoot.querySelector('#flip2CodeContainer');
          this.flipCodeToolbar = this.el.shadowRoot.querySelector('#flip2CodeToolbar');
          this.flipCodeButton = this.el.shadowRoot.querySelector('#flipCodeButton');
          
          this.flipCodeInnerContainer = this.el.shadowRoot.querySelector('#flip2CodeInnerContainer');
          this.flipCodeSnipp = this.el.shadowRoot.querySelector('#flip2CodeSnipp');
          
          this.flipCodeFront = this.el.shadowRoot.querySelector('#flip2CodeFront');
          this.flipCodeBack = this.el.shadowRoot.querySelector('#flip2CodeBack');
          
          
          
          this.flipCodeSlot = this.el.shadowRoot.querySelector('slot[name="back"]');
          this.flipCodeSlotChildEls = this.flipCodeSlot.assignedElements();
          
          this.flipCodePre = document.createElement('pre');
          this.flipCodePre.classList.add('hs-pre', 'language-javascript');
          
          this.flipCodeBlock = document.createElement('code');
          this.flipCodeBlock.classList.add('hs-code', 'language-javascript');
          
          // this.flipCode = this.flipCodeSlot.assignedElements()[0];
          this.flipCode = this.flipCodeSlotChildEls[0].firstElementChild.firstElementChild.textContent;
          this.flipCodeBlock.textContent = this.flipCode;
          
          this.flipCodePre.appendChild(this.flipCodeBlock);
          this.flipCodeSnipp.appendChild(this.flipCodePre); 
          Prism.highlightElement(this.flipCodeBlock, true,);
          
          this.flipPostPre = this.flipCodeSlotChildEls[0].firstElementChild;
          l(this.flipCodeSlotChildEls[0].firstElementChild.firstElementChild);
          l(escape(this.flipCode));


          l(this.flipContainer);
          l( this.flipCodeButton);
          l(this.flipCodeInnerContainer);
          l(this.flipCodeFront);
          l(this.flipCodeBack);
          l(this.flipCodeSnipp);
          l(this.flipCodeSlot);
          l(this.flipCodeSlotChildEls);
          l(`flipcode: ${this.flipCode}`);
          l(this.flipCodeBlock);
          l(this.flipCodePre);
          

          
          this.flipcodeHeight = this.flipCodeFront.scrollHeight;
          this.flipCodeBack.style.height = `${this.flipcodeHeight}px`;
          this.flipCodeFront.style.height = `${this.flipcodeHeight}px`;
          this.el.style = `height: ${this.flipcodeHeight}px; overflow:hidden;`;

          // this.flipContainer.style.height = this.setHeight();
          // this.flipCodeInnerContainer.style.height = this.setHeight();
          this.flipCodeSnipp.style.height = `${this.flipcodeHeight}px`;
          this.flipCodePre.style.height =`${this.flipcodeHeight}px`;
          this.flipCodeBlock.style.height = `${this.flipcodeHeight}px`;
          this.flipCodeSlot.style.height = `${this.flipcodeHeight}px`; // doesnt need height fix this
          // this.flipCodeSlotChildEls[0].firstElementChild.closest('pre').style.minHeight = this.setHeight();
          // this.flipPostPre.style.height = this.setHeight();
          // this.flipCodeSlot.style.display = 'none';
          
          
          highlight({

            patterns: block => {
          
              if (/javascript/.test(block.className)) {
                return javaScriptPatterns;
          
              } else if (/html/.test(block.className)) {
                return htmlPatterns;

              } else if (/scss/.test(block.className)) {
                return scssPatterns;

              }else if (/css/.test(block.className)) {
                return cssPatterns;

              }
              // Otherwise, return nothing.
            }
          
          });

          resolve(true);
        }, 500);
      }
      catch(err) {
        console.l(err.message);
        reject(false);
        throw new Error(err);
      }
    }).catch(error => {
      console.l(error);
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
   *		<hs-flip2code id="example-highlight" theme="dark" language="typescript" content="console.l('example')" />
   *		  <script>
   *			  const syntaxHighlighterElement = document.querySelector('#example-highlight');
   *			  syntaxHighlighterElement.addEventListener('clipboardJsError', event => {
   *				  console.l('handling');
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
     this.flipCodeInnerContainer.classList.toggle('is-flipped');
   }
   
  
  render():any {
    return (
      <Host>
      <div id="flip2CodeContainer" class="hs-flip2Code-card__scene">
          <div id="flip2CodeToolbar" class="hs-flip2Code-toolbar">
            <a href="javascript:void(0);" id="flipCodeButton" class="hs-flip2Code-button" onClick={() => this.flipHandler()}>{this.flipcodeButtontext}</a>
            <a href="javascript:void(0);" id="flipClipButton" class="hs-flip2Code-button" data-clipboard-target="#flipCodeBlock">{this.copyButtonLabel}</a>
          </div>
          <div id="flip2CodeInnerContainer" class='hs-flip2Code-card'>
            <div id="flip2CodeFront" class="hs-flip2Code-card__face hs-flip2Code-card__face--front">
              <slot name="front"></slot>
            </div> 
            <div id="flip2CodeSnipp" class="flip2CodeSnipp">
              <div id="flip2CodeBack" class="hs-flip2Code-card__face hs-flip2Code-card__face--back">
                  <pre class="hs-pre">
                    <code class="hs-code">
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
