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
  tag: 'hs-flip2code-dev',
  styleUrl: 'hs-flip-to-code.scss',

  shadow: true,
})
export class HSFlip12Code {
  @Element() el: HTMLDivElement;
  @Prop() comp_template: HTMLElement;
  @Prop() comp_layout: NodeList;
  @Prop({mutable: true}) flip2codeContainer: HTMLDivElement;
  @Prop({mutable: true}) flip2codeInnerContainer: HTMLDivElement;
  @Prop({mutable: true}) flip2codeToolbar: HTMLDivElement;
  @Prop({mutable: true}) flip2codeHeight: any;
  @Prop({mutable: true}) flip2codeFront: HTMLDivElement;
  @Prop({mutable: true}) flip2codeBack: HTMLDivElement;
  @Prop({mutable: true}) flip2codeSnipp: HTMLDivElement;
  @Prop({mutable: true}) flip2codeSlot: HTMLElement | any;
  @Prop({mutable: true}) flip2codeSlotDiv: HTMLElement;
  @Prop({mutable: true}) flip2codePre: HTMLElement;
  @Prop({mutable: true}) flip2codeBlock: HTMLElement;
  @Prop({mutable: true}) flip2code: any;
  @Prop({mutable: true, reflect: true}) flip2codeLanguage? = 'html';
  @Prop({mutable: true}) setHeight: any;
  @Prop({mutable: true, reflect: true }) flip2codeButtonLabel? = 'Flip Code';
  l = console.log;
  @Method() async builder():Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.comp_template = document.createElement('template');
        this.comp_layout = `
          <div id="flip2codeContainer" class="hs-flip2code-card__scene">
            <div id="flip2codeToolbar" class="hs-flip2code-toolbar">
              <a href="javascript:void(0);" id="flip2codeButton" class="hs-flip2code-button" onClick="${() => this.flipHandler()}">${this.flip2codeButtonLabel}</a>
              <a href="javascript:void(0);" id="flipClipButton" class="hs-flip2code-button" data-clipboard-target="#flip2codeBlock">${this.copyButtonLabel}</a>
            </div>
            <div id="flip2codeInnerContainer" class='hs-flip2code-card'>
              <div id="flip2codeFront" class="hs-flip2code-card__face hs-flip2code-card__face--front">
                <slot name="front"></slot>
              </div> 
              <div id="flip2codeSnipp" class="flip2codeSnipp">
                <div id="flip2codeBack" class="hs-flip2code-card__face hs-flip2code-card__face--back">
                    <slot name="back"></slot>
                </div>
              </div>
            </div>
          </div>`;
        
          this.flip2codeContainer = this.comp_layout.querySelector('#flip2codeContainer');
          l(this.flip2codeContainer);
          this.flip2codeFront = this.comp_layout.querySelector('#flip2codeFront');
        
        this.comp_template.innerHTML = this.comp_layout;
        this.el.shadowRoot.querySelector('Host').appendChild(this.comp_template);

        resolve(true);
      } catch (err) {
        reject(err);
        throw new Error(err.message);
      }
    }).catch(err => console.log(err.message));
    
  }
 
  render():any {
    return (
      <Host>
        
      </Host>
    );
  }
}
