FramekitHighlightCode.loadBundle("x6lpmryz",["exports"],function(e){var t=window.FramekitHighlightCode.h,n=function(){function e(){}return e.prototype.render=function(){return t("div",{role:"tabpanel",hidden:!this.open,class:"c-tabs__tab "+(this.type?"c-tabs__tab--"+this.type:"")},t("slot",null))},Object.defineProperty(e,"is",{get:function(){return"fk-tab"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{disabled:{type:Boolean,attr:"disabled"},header:{type:String,attr:"header"},open:{type:Boolean,attr:"open"},type:{type:String,attr:"type"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"\@font-face{font-family:Source Code Pro;font-style:normal;font-weight:400;src:local(\"Source Code Pro\"),local(\"SourceCodePro-Regular\"),url(Source-Code-Pro.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\@font-face{font-family:Source Code Pro;font-style:normal;font-weight:700;src:local(\"Source Code Pro Bold\"),local(\"SourceCodePro-Bold\"),url(Source-Code-Pro-bold.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.sc-fk-tab:root{--bp-color-core-blue-60:#0c77ba;--bp-color-core-blue-70:#0a649d;--bp-color-core-blue-90:#064063;--bp-color-core-neutral-13:#f2f2f2;--bp-color-core-neutral-17:#ededed;--bp-color-core-neutral-20:#dedede;--bp-color-core-neutral-60:#7a7a7a;--bp-color-core-neutral-90:#2e2e2e;--bp-color-core-muted-yellow-90:#fdbc2c;--bp-color-background-light-layer0-base:#f8f8f8;--bp-color-border-lightest:#dedede;--bp-color-brand-orange-base:#c55422;--bp-color-brand-yellow-darker:#e0ac00;--bp-color-brand-green-base:#2c6937;--bp-color-brand-green-darker:#074512;--bp-color-core-red-50:#bd2b2b;--bp-color-core-red-40:#cc3535;--fk-color-background-code:#282c34;--fk-highlight-code-font-family:\"Source Code Pro\",sans-serif,monospace;--fk-highlight-code-font-size:1.01rem;--fk-highlight-code-line-height:1.75rem;--fk-c-button--showMore-padding:2px 10px 4px 10px}.hydratedWidth.sc-fk-tab{width:100%}.c-tabs-container.sc-fk-tab{position:absolute;display:-ms-flexbox;display:flex;width:100%}.c-tabs.sc-fk-tab{position:relative;top:0;right:0;left:0;-ms-flex:auto;flex:auto;width:100%}.c-tabs[role=tablist].sc-fk-tab{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;overflow:hidden;line-height:normal;background:var(--bp-color-core-neutral-20,#dedede)}.c-tabs[role=tablist].sc-fk-tab:before{display:block;content:\"\"}.c-tabs__headings.sc-fk-tab{display:-ms-inline-flexbox;display:inline-flex;font-family:sans-serif;text-align:center}.c-tabs__nav.sc-fk-tab{display:-ms-flexbox;display:flex;width:100%;padding:0 20px;overflow:hidden;background:var(--bp-color-background-light-layer0-base,#f8f8f8)}.c-tabs__nav.sc-fk-tab   .c-tabs__headings.sc-fk-tab{color:#2e2e2e;overflow-y:hidden}.c-tabs__nav.sc-fk-tab   .c-tabs__headings.sc-fk-tab:first-child{margin-left:10px}.c-tab-heading[role=tab].sc-fk-tab{display:block;-ms-flex:1;flex:1;width:auto;margin:0;overflow:visible;font:.9rem;line-height:normal;color:#2e2e2e;text-align:inherit;text-decoration:inherit;white-space:nowrap;vertical-align:inherit;background:var(--bp-color-background-light-layer0-base,#f8f8f8);border:0;border-bottom:.25em solid transparent;border-radius:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.c-tab-heading[role=tab].sc-fk-tab:disabled{cursor:not-allowed;opacity:.5}.c-tab-heading[role=tab].sc-fk-tab:not(:disabled):not([disabled]):active{background-color:transparent}.c-tab-heading[role=tab].sc-fk-tab:not(:disabled):not([disabled]):not(:active):focus{background:var(--bp-color-core-neutral-17,#ededed);border-top-color:var(--bp-color-core-neutral-17,#ededed);border-right-color:var(--bp-color-core-neutral-17,#ededed);border-bottom-color:var(--bp-color-core-blue-60,#7a7a7a);border-left-color:var(--bp-color-core-neutral-17,#ededed);-webkit-box-shadow:inset 0 0 0 2px var(--bp-color-core-blue-70,#0a649d);box-shadow:inset 0 0 0 2px var(--bp-color-core-blue-70,#0a649d)}.c-tab-heading[role=tab].sc-fk-tab:not(:disabled):not([disabled]):not(:active):hover{color:#2e2e2e;cursor:pointer;background-color:var(--bp-color-core-neutral-20,#dedede)}.c-tab-heading[role=tab].sc-fk-tab:not(:disabled):not(.c-tab-heading--active):hover{background-color:var(--bp-color-core-neutral-20,#dedede);border-bottom-color:var(--bp-color-core-neutral-60,#7a7a7a)}.c-tab-heading[role=tab][disabled].sc-fk-tab{cursor:not-allowed;opacity:.5}.c-tab-heading[role=tab].c-tab-heading--active.sc-fk-tab{border-bottom-color:var(--bp-color-core-neutral-60,#7a7a7a)}.c-tab-heading[role=tab].c-tab-heading--brand.sc-fk-tab{display:block;-ms-flex:1;flex:1;width:auto;padding:1em 1em .5em 1em;margin:0;overflow:visible;font:inherit;line-height:normal;color:inherit;text-align:inherit;text-decoration:inherit;white-space:nowrap;vertical-align:inherit;background:inherit;border:0;border-bottom:.25em solid #c7c7c7;border-radius:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.c-tab-heading[role=tab].c-tab-heading--brand.sc-fk-tab:disabled{cursor:not-allowed;opacity:.5}.c-tab-heading[role=tab].c-tab-heading--brand.sc-fk-tab:not(:disabled):not([disabled]):active{background-color:transparent}.c-tab-heading[role=tab].c-tab-heading--brand.sc-fk-tab:not(:disabled):not([disabled]):not(:active):focus{border-top-color:var(--bp-color-core-neutral-17,#ededed);border-right-color:var(--bp-color-core-neutral-17,#ededed);border-bottom-color:var(--bp-color-core-blue-60,#7a7a7a);border-left-color:var(--bp-color-core-neutral-17,#ededed);-webkit-box-shadow:inset 0 0 0 2px var(--bp-color-core-neutral-17,#ededed);box-shadow:inset 0 0 0 2px var(--bp-color-core-neutral-17,#ededed)}.c-tab-heading[role=tab].c-tab-heading--brand.sc-fk-tab:not(:disabled):not([disabled]):not(:active):hover{background-color:transparent}.c-tab-heading[role=tab].c-tab-heading--brand.sc-fk-tab:not(:disabled):not(.c-tab-heading--active):hover{border-bottom-color:#0c77ba}.c-tab-heading[role=tab].c-tab-heading--brand[disabled].sc-fk-tab{cursor:not-allowed;opacity:.5}.c-tab-heading[role=tab].c-tab-heading--brand.c-tab-heading--active.sc-fk-tab{border-bottom-color:var(--bp-color-core-blue-60,#2c3e50)}.c-tab-heading[role=tab].c-tab-heading--info.sc-fk-tab{display:block;-ms-flex:1;flex:1;width:auto;padding:1em;margin:0;overflow:visible;font:inherit;line-height:normal;color:inherit;text-align:inherit;text-decoration:inherit;white-space:nowrap;vertical-align:inherit;background:inherit;border:0;border-bottom:.25em solid transparent;border-radius:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.c-tab-heading[role=tab].c-tab-heading--info.sc-fk-tab:disabled{cursor:not-allowed;opacity:.5}.c-tab-heading[role=tab].c-tab-heading--info.sc-fk-tab:not(:disabled):not([disabled]):active{background-color:transparent}.c-tab-heading[role=tab].c-tab-heading--info.sc-fk-tab:not(:disabled):not([disabled]):not(:active):focus{border-top-color:var(--bp-color-core-neutral-17,#ededed);border-right-color:var(--bp-color-core-neutral-17,#ededed);border-bottom-color:var(--bp-color-core-blue-60,#7a7a7a);border-left-color:var(--bp-color-core-neutral-17,#ededed);-webkit-box-shadow:inset 0 0 0 2px var(--bp-color-core-blue-70,#0a649d);box-shadow:inset 0 0 0 2px var(--bp-color-core-blue-70,#0a649d)}.c-tab-heading[role=tab].c-tab-heading--info.sc-fk-tab:not(:disabled):not([disabled]):not(:active):hover{background-color:transparent}.c-tab-heading[role=tab].c-tab-heading--info.sc-fk-tab:not(:disabled):not(.c-tab-heading--active):hover{border-bottom-color:var(--bp-color-core-blue-70,#0a649d)}.c-tab-heading[role=tab].c-tab-heading--info[disabled].sc-fk-tab{cursor:not-allowed;opacity:.5}.c-tab-heading[role=tab].c-tab-heading--info.c-tab-heading--active.sc-fk-tab{border-bottom-color:var(--bp-color-core-blue-60,#7a7a7a)}.c-tab-heading[role=tab].c-tab-heading--warning.sc-fk-tab{display:block;-ms-flex:1;flex:1;width:auto;padding:1em;margin:0;overflow:visible;font:inherit;line-height:normal;color:inherit;text-align:inherit;text-decoration:inherit;white-space:nowrap;vertical-align:inherit;background:inherit;border:0;border-bottom:.25em solid transparent;border-radius:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.c-tab-heading[role=tab].c-tab-heading--warning.sc-fk-tab:disabled{cursor:not-allowed;opacity:.5}.c-tab-heading[role=tab].c-tab-heading--warning.sc-fk-tab:not(:disabled):not([disabled]):active{background-color:transparent}.c-tab-heading[role=tab].c-tab-heading--warning.sc-fk-tab:not(:disabled):not([disabled]):not(:active):focus{background:var(--bp-color-core-neutral-20,#dedede);border-top-color:var(--bp-color-core-neutral-17,#ededed);border-right-color:var(--bp-color-core-neutral-17,#ededed);border-bottom-color:var(--bp-color-core-blue-60,#7a7a7a);border-left-color:var(--bp-color-core-neutral-17,#ededed);-webkit-box-shadow:inset 0 0 0 2px var(--bp-color-core-blue-70,#0a649d);box-shadow:inset 0 0 0 2px var(--bp-color-core-blue-70,#0a649d)}.c-tab-heading[role=tab].c-tab-heading--warning.sc-fk-tab:not(:disabled):not([disabled]):not(:active):hover{background-color:transparent}.c-tab-heading[role=tab].c-tab-heading--warning.sc-fk-tab:not(:disabled):not(.c-tab-heading--active):hover{background:var(--bp-color-core-neutral-20,#dedede);border-bottom-color:var(--bp-color-brand-yellow-darker,#e0ac00)}.c-tab-heading[role=tab].c-tab-heading--warning[disabled].sc-fk-tab{cursor:not-allowed;opacity:.5}.c-tab-heading[role=tab].c-tab-heading--warning.c-tab-heading--active.sc-fk-tab{border-bottom-color:var(--bp-color-brand-yellow-darker,#e0ac00)}.c-tab-heading[role=tab].c-tab-heading--success.sc-fk-tab{display:block;-ms-flex:1;flex:1;width:auto;padding:1em;margin:0;overflow:visible;font:inherit;line-height:normal;color:inherit;text-align:inherit;text-decoration:inherit;white-space:nowrap;vertical-align:inherit;background:inherit;border:0;border-bottom:.25em solid transparent;border-radius:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.c-tab-heading[role=tab].c-tab-heading--success.sc-fk-tab:disabled{cursor:not-allowed;opacity:.5}.c-tab-heading[role=tab].c-tab-heading--success.sc-fk-tab:not(:disabled):not([disabled]):active{background-color:transparent}.c-tab-heading[role=tab].c-tab-heading--success.sc-fk-tab:not(:disabled):not([disabled]):not(:active):focus{border-top-color:var(--bp-color-core-neutral-17,#ededed);border-right-color:var(--bp-color-core-neutral-17,#ededed);border-bottom-color:var(--bp-color-core-blue-60,#7a7a7a);border-left-color:var(--bp-color-core-neutral-17,#ededed);-webkit-box-shadow:inset 0 0 0 2px var(--bp-color-core-blue-70,#0a649d);box-shadow:inset 0 0 0 2px var(--bp-color-core-blue-70,#0a649d)}.c-tab-heading[role=tab].c-tab-heading--success.sc-fk-tab:not(:disabled):not([disabled]):not(:active):hover{background-color:transparent}.c-tab-heading[role=tab].c-tab-heading--success.sc-fk-tab:not(:disabled):not(.c-tab-heading--active):hover{border-bottom-color:var(--bp-color-brand-green-base,#2c6937)}.c-tab-heading[role=tab].c-tab-heading--success[disabled].sc-fk-tab{cursor:not-allowed;opacity:.5}.c-tab-heading[role=tab].c-tab-heading--success.c-tab-heading--active.sc-fk-tab{border-bottom-color:var(--bp-color-brand-green-darker,#074512)}.c-tab-heading[role=tab].c-tab-heading--error.sc-fk-tab{display:block;-ms-flex:1;flex:1;width:auto;padding:1em;margin:0;overflow:visible;font:inherit;line-height:normal;color:inherit;text-align:inherit;text-decoration:inherit;white-space:nowrap;vertical-align:inherit;background:inherit;border:0;border-bottom:.25em solid transparent;border-radius:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.c-tab-heading[role=tab].c-tab-heading--error.sc-fk-tab:disabled{cursor:not-allowed;opacity:.5}.c-tab-heading[role=tab].c-tab-heading--error.sc-fk-tab:not(:disabled):not([disabled]):active{background-color:transparent}.c-tab-heading[role=tab].c-tab-heading--error.sc-fk-tab:not(:disabled):not([disabled]):not(:active):focus{border-top-color:var(--bp-color-core-neutral-17,#ededed);border-right-color:var(--bp-color-core-neutral-17,#ededed);border-bottom-color:var(--bp-color-core-blue-60,#7a7a7a);border-left-color:var(--bp-color-core-neutral-17,#ededed);-webkit-box-shadow:inset 0 0 0 2px var(--bp-color-core-blue-70,#0a649d);box-shadow:inset 0 0 0 2px var(--bp-color-core-blue-70,#0a649d)}.c-tab-heading[role=tab].c-tab-heading--error.sc-fk-tab:not(:disabled):not([disabled]):not(:active):hover{background-color:transparent}.c-tab-heading[role=tab].c-tab-heading--error.sc-fk-tab:not(:disabled):not(.c-tab-heading--active):hover{border-bottom-color:var(--bp-color-core-red-50,#bd2b2b)}.c-tab-heading[role=tab].c-tab-heading--error[disabled].sc-fk-tab{cursor:not-allowed;opacity:.5}.c-tab-heading[role=tab].c-tab-heading--error.c-tab-heading--active.sc-fk-tab{border-bottom-color:var(--bp-color-core-red-40,#cc3535)}.c-tabs__tab[role=tabpanel].sc-fk-tab{position:relative;width:100%;height:300px;overflow-x:auto;background:var(--fk-color-background-code,#282c34);border-top:solid 3px var(--bp-color-core-neutral-20,#dedede)}.c-tabs__tab[role=tabpanel].sc-fk-tab::-webkit-scrollbar{display:none}.c-tabs__tab[role=tabpanel].c-tabs__expander.sc-fk-tab{height:100%}.c-button-container.sc-fk-tab{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;height:25px;text-align:center;background:#dedede}.c-button--showMore.sc-fk-tab{z-index:501;display:inline-block;height:100%;padding:var(--fk-c-button--showMore-padding,2px 10px 4px 10px);margin:auto;font-size:10px!important;color:var(--bp-color-core-neutral-20,#dedede);background:var(--fk-color-background-code,#282c34);border:2px solid var(--fk-color-background-code,#282c34)}.c-button--showMore.sc-fk-tab, .c-button--showMore.sc-fk-tab:after{position:absolute;left:50%;-webkit-box-shadow:none;box-shadow:none;-webkit-transform:translate(-50%);transform:translate(-50%)}.c-button--showMore.sc-fk-tab:after{bottom:-8px;z-index:500;width:0;height:0;content:\"\";border-color:#282c34 transparent;border-style:solid;border-width:8px 8px 0 8px}.c-button--showMore.sc-fk-tab:hover{cursor:pointer;background:var(--bp-color-core-blue-90,#064063);border:2px solid var(--bp-color-core-blue-90,#064063);-webkit-box-shadow:none;box-shadow:none}.c-button--showMore.sc-fk-tab:hover:after{cursor:pointer;border-color:var(--bp-color-core-blue-90,#064063) transparent transparent transparent;-webkit-box-shadow:none;box-shadow:none}.c-button--showMore.sc-fk-tab:focus{outline-color:var(--bp-color-core-blue-60,#7a7a7a);-webkit-box-shadow:none;box-shadow:none}.sc-fk-tab-s > [slot=code]{display:none}.fk-highlight-code-container.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab{width:100%;padding:10px 20px 0 20px;overflow-:visible;font-family:var(--fk-highlight-code-font-family,\"Source Code Pro\",sans-serif,monospace);font-size:var(--fk-highlight-code-font-size,1.01rem);color:var(--fk-highlight-code-color,#eaeae9);text-align:var(--fk-highlight-code-text-align,start);-moz-tab-size:2;-o-tab-size:2;tab-size:2;background:var(--fk-color-background-code,#282c34);border-bottom:5px solid var(--fk-color-background-code,#282c34);border-radius:var(--fk-highlight-code-border-radius,0);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;-webkit-transform:scale(var(--fk-highlight-code-zoom,1));transform:scale(var(--fk-highlight-code-zoom,1));-webkit-transform-origin:bottom left;transform-origin:bottom left;direction:var(--fk-highlight-code-direction,ltr)}.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab{width:100%;font-family:var(--fk-highlight-code-font-family);font-size:var(--fk-highlight-code-font-size);line-height:var(--fk-highlight-code-line-height,1.75rem);color:var(--bp-color-core-neutral-17,#ededed);-moz-tab-size:2;-o-tab-size:2;tab-size:2}.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   div.sc-fk-tab:empty, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   div.sc-fk-tab:empty{min-height:1rem}.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   span.fk-highlight-code-anchor-hidden.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   span.fk-highlight-code-anchor-hidden.sc-fk-tab{visibility:hidden}.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   span.fk-highlight-code-line.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   span.fk-highlight-code-line.sc-fk-tab{padding:var(--fk-highlight-code-line-padding,10px);background:var(--fk-highlight-code-line-background);border-top:var(--fk-highlight-code-line-border-top);border-bottom:var(--fk-highlight-code-line-border-bottom)}.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .language-css.sc-fk-tab   .token.string.sc-fk-tab:not(.fk-highlight-code-line), .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .style.sc-fk-tab   .token.string.sc-fk-tab:not(.fk-highlight-code-line), .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.entity.sc-fk-tab:not(.fk-highlight-code-line), .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.operator.sc-fk-tab:not(.fk-highlight-code-line), .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.url.sc-fk-tab:not(.fk-highlight-code-line), pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .language-css.sc-fk-tab   .token.string.sc-fk-tab:not(.fk-highlight-code-line), pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .style.sc-fk-tab   .token.string.sc-fk-tab:not(.fk-highlight-code-line), pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.entity.sc-fk-tab:not(.fk-highlight-code-line), pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.operator.sc-fk-tab:not(.fk-highlight-code-line), pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.url.sc-fk-tab:not(.fk-highlight-code-line){background:inherit}.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.cdata.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.comment.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.doctype.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.prolog.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.cdata.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.comment.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.doctype.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.prolog.sc-fk-tab{color:var(--fk-highlight-code-token-comment,#6f705e)}.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.punctuation.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.punctuation.sc-fk-tab{color:var(--fk-highlight-code-token-punctuation,#edede7)}.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.boolean.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.constant.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.deleted.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.number.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.property.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.symbol.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.tag.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.boolean.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.constant.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.deleted.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.number.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.property.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.symbol.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.tag.sc-fk-tab{color:var(--fk-highlight-code-token-property,#e25e88)}.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.attr-name.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.builtin.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.char.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.inserted.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.selector.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.string.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.attr-name.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.builtin.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.char.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.inserted.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.selector.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.string.sc-fk-tab{color:var(--fk-highlight-code-token-selector,#f3ac9f)}.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .language-css.sc-fk-tab   .token.string.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .style.sc-fk-tab   .token.string.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.entity.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.operator.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.url.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .language-css.sc-fk-tab   .token.string.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .style.sc-fk-tab   .token.string.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.entity.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.operator.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.url.sc-fk-tab{color:var(--fk-highlight-code-token-operator,#a2a2ff)}.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.keyword.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.keyword.sc-fk-tab{color:vaf(--fk-highlight-code-token-keyword,#7a7afe)}.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.atrule.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.attr-value.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.atrule.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.attr-value.sc-fk-tab{color:var(--fk-highlight-code-token-atrule,#f0e9ab)}.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.class-name.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.function.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.class-name.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.function.sc-fk-tab{color:var(--fk-highlight-code-token-function,#eb3c42)}.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.important.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.regex.sc-fk-tab, .fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.variable.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.important.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.regex.sc-fk-tab, pre.fk-highlight-code-container.sc-fk-tab   code.theCodeTag.sc-fk-tab   .token.variable.sc-fk-tab{color:var(--fk-highlight-code-token-regex,#e90)}.ps.sc-fk-tab{overflow:hidden!important;-ms-touch-action:auto;touch-action:auto;overflow-anchor:none}.ps__rail-x.sc-fk-tab{bottom:0;height:15px}.ps__rail-x.sc-fk-tab, .ps__rail-y.sc-fk-tab{position:absolute;display:none;opacity:0;-webkit-transition:background-color .2s linear,opacity .2s linear;transition:background-color .2s linear,opacity .2s linear}.ps__rail-y.sc-fk-tab{right:0;width:15px}.ps--active-x.sc-fk-tab > .ps__rail-x.sc-fk-tab, .ps--active-y.sc-fk-tab > .ps__rail-y.sc-fk-tab{display:block;background-color:transparent}.ps--focus.sc-fk-tab > .ps__rail-x.sc-fk-tab, .ps--focus.sc-fk-tab > .ps__rail-y.sc-fk-tab, .ps--scrolling-x.sc-fk-tab > .ps__rail-x.sc-fk-tab, .ps--scrolling-y.sc-fk-tab > .ps__rail-y.sc-fk-tab, .ps.sc-fk-tab:hover > .ps__rail-x.sc-fk-tab, .ps.sc-fk-tab:hover > .ps__rail-y.sc-fk-tab{opacity:.6}.ps.sc-fk-tab   .ps__rail-x.ps--clicking.sc-fk-tab, .ps.sc-fk-tab   .ps__rail-x.sc-fk-tab:focus, .ps.sc-fk-tab   .ps__rail-x.sc-fk-tab:hover, .ps.sc-fk-tab   .ps__rail-y.ps--clicking.sc-fk-tab, .ps.sc-fk-tab   .ps__rail-y.sc-fk-tab:focus, .ps.sc-fk-tab   .ps__rail-y.sc-fk-tab:hover{background-color:#eee;opacity:.9}.ps__thumb-x.sc-fk-tab{bottom:2px;height:6px;-webkit-transition:background-color .2s linear,height .2s ease-in-out;transition:background-color .2s linear,height .2s ease-in-out}.ps__thumb-x.sc-fk-tab, .ps__thumb-y.sc-fk-tab{position:absolute;background-color:#aaa;border-radius:6px}.ps__thumb-y.sc-fk-tab{right:2px;width:6px;-webkit-transition:background-color .2s linear,width .2s ease-in-out;transition:background-color .2s linear,width .2s ease-in-out}.ps__rail-x.ps--clicking.sc-fk-tab   .ps__thumb-x.sc-fk-tab, .ps__rail-x.sc-fk-tab:focus > .ps__thumb-x.sc-fk-tab, .ps__rail-x.sc-fk-tab:hover > .ps__thumb-x.sc-fk-tab{height:11px;background-color:#999}.ps__rail-y.ps--clicking.sc-fk-tab   .ps__thumb-y.sc-fk-tab, .ps__rail-y.sc-fk-tab:focus > .ps__thumb-y.sc-fk-tab, .ps__rail-y.sc-fk-tab:hover > .ps__thumb-y.sc-fk-tab{width:11px;background-color:#999}\@supports (-ms-overflow-style:none){.ps.sc-fk-tab{overflow:auto!important}}\@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps.sc-fk-tab{overflow:auto!important}}.c-tab-video.sc-fk-tab{width:100%;height:110%}"},enumerable:!0,configurable:!0}),e}();e.FkTab=n,Object.defineProperty(e,"__esModule",{value:!0})});