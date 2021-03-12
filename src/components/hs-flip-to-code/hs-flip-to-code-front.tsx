// import { Component, Host,Prop, Element, Event, EventEmitter, h } from '@stencil/core';
// import ClipboardJS from 'clipboard';

// @Component({
//   tag: 'hs-flipTocode',
//   styleUrl: 'hs-flip-to-code.scss',

//   shadow: true,
// })
// export class HsFlipToCode {
//   @Element() el: HTMLDivElement;
//   @Prop({mutable: true}) flipCodeButton: HTMLButtonElement;
//   @Prop({mutable: true}) flipContainer: HTMLDivElement;
//   @Prop({mutable: true}) flipCard: HTMLDivElement;
//   @Prop({mutable: true}) flipCardHeight: any;
//   @Prop({mutable: true}) flipCardFront: HTMLDivElement;
//   @Prop({mutable: true}) flipCardBack: HTMLDivElement;
//   @Prop({mutable: true}) flipCardSnipp: HTMLDivElement;
//   @Prop({mutable: true}) flipCodeSlot: HTMLElement | any;
//   @Prop({mutable: true}) flipCodeSlotDiv: HTMLElement;
//   @Prop({mutable: true}) flipCodePre: HTMLElement;
//   @Prop({mutable: true}) flipCodeBlock: HTMLElement;
//   @Prop({mutable: true}) flipCode: any;
//   @Prop({mutable: true}) rawFlipCode: any;
//   @Prop({mutable: true, reflect: true}) flipLanguage? = 'html';
//   @Prop({mutable: true}) language: any;
//   @Prop({mutable: true}) setHeight: any;
//   @Prop({ mutable: true, reflect: true }) flipCodeButtonLabel? = 'Flip Code';

//   componentDidLoad() {
//     return new Promise((resolve, reject) => {
//       try {
//         setTimeout(()=> {
//           const l = console.log;
//           this.flipContainer = this.el.shadowRoot.querySelector('#flip2CodeContainer');
//           this.flipCodeButton = this.el.shadowRoot.querySelector('#flipCodeButton');
//           this.flipCard = this.el.shadowRoot.querySelector('#flip2Code');
//           this.flipCardFront = this.el.shadowRoot.querySelector('#flip2CodeFront');
//           this.flipCardBack = this.el.shadowRoot.querySelector('#flip2CodeBack');
          
//           this.flipCardSnipp = this.el.shadowRoot.querySelector('#flip2CodeSnipp');
//           this.flipCodeSlot = this.el.shadowRoot.querySelector('slot[name="back"]');
//           this.rawFlipCode = this.flipCodeSlot.assignedNodes()[0].innerHTML;
//           this.flipCodePre = this.rawFlipCode.querySelector('pre#hs-pre');
//           this.flipCodeBlock = this.rawFlipCode.querySelector('#flipCodeBlock'); //<code id="flipCodeBlock" class="hs-code">
//           l(`rawFlipCode: ${this.rawFlipCode}`);
//           l(`flipCodeBlock: ${this.flipCodeBlock}`);
          
//           this.setHeight = ():number => {
//             return this.flipCardFront.scrollHeight;
//           };
          
//           this.flipContainer.style.height = `${this.setHeight()}px`;
//           this.flipCard.style.height = `${this.setHeight()}px`;
//           this.flipCardFront.style.height = `${this.setHeight()}px`;
//           this.flipCardBack.style.height = `${this.setHeight()}px`;
//           this.flipCardSnipp.style.height = `${this.setHeight()}px`;
//           this.flipCodeSlot.style.height = `${this.setHeight()}px`;
//           this.flipCodePre.style.height = `${this.setHeight()}px`;
//           this.flipCodeBlock.style.minHeight = `${this.setHeight()}px`;
          
//           return resolve(true);
//         }, 500);
//       }
//       catch(err) {
//         console.log(err.message);
//         return reject(false);
//       }
      
//     });
//   }

//   /**
//    *  @description: Fixes the pre tag indentation issue.
//      *  @param {string} str  
//    */
//    cleanIndentation(str) {
//     const pattern = str.match(/\s*\n[\t\s]*/);
//     return str.replace(new RegExp(pattern, 'g'), '\n');
//   }
  
//   //* ==================== CLIPBOARD ====================== *//
//   /**
//    * The text inside the "copy to clipboard" button
//   * @remark This is primarily for if you want to provide i18n with your syntax highlighted component
//   * @example "Kopieer naar klembord"
//   * @default "Copy to clipboard"
//     */
//   @Prop({ mutable: true, reflect: true })
//   public copyButtonLabel = 'Copy';
  
//   /**
//   * The callback that will be fired when ClipboardJS fails to copy the text
//   * @remark You can use this to, for example, show notifications to users
//   * @remark This event will bubble up through the DOM
//   * @default undefined
//   * @example
//   * ```html
//   *	<body>
//   *		<hs-flip2code id="example-highlight" theme="dark" language="typescript" content="console.log('example')" />
//   *		  <script>
//   *			  const syntaxHighlighterElement = document.querySelector('#example-highlight');
//   *			  syntaxHighlighterElement.addEventListener('clipboardJsError', event => {
//   *				  console.log('handling');
//   *			  });
//   *		  </script>
//       </hs-flip2code>
//   *	</body>
//   * ```
//   */
  
//   @Event({ bubbles: true })
//   public clipboardJsError: EventEmitter<ClipboardJS.Event>;
  
//   private clipboardJsInstance: ClipboardJS;

//   public componentWillLoad() {
//     this.clipboardJsInstance = new ClipboardJS('#flipClipButton');
//     this.clipboardJsInstance //
//     .on('success', (event) => event.clearSelection()) //
//     .on('error', (event) => this.clipboardJsError.emit(event));

//   }
    
//   flipHandler(): void {
//     this.flipCard.classList.toggle('is-flipped');
//   }
  
//   render() {
//     return (
//       <Host>

//         <div id="flip2CodeContainer" class="hs-flip2Code-card__scene">
//           <div class="hs-flip2Code-toolbar">
//             <a href="javascript:void(0);" id="flipCodeButton" class="hs-flip2Code-button" onClick={() => this.flipHandler()}>{this.flipCodeButtonLabel}</a>
//             <a href="javascript:void(0);" id="flipClipButton" class="hs-flip2Code-button" data-clipboard-target="#flipCodeBlock">{this.copyButtonLabel}</a>
//           </div>
//           <div id="flip2Code" class="hs-flip2Code-card">
            
//             <div id="flip2CodeFront" class="hs-flip2Code-card__face hs-flip2Code-card__face--front">
            
//               <slot name="front"></slot>
              
//             </div> 
            
//             <div id="flip2CodeBack" class="hs-flip2Code-card__face hs-flip2Code-card__face--back">
//               <div id="flip2CodeSnipp">
//                 <slot name="back"></slot>
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </Host>
//     );
//   }

// }
