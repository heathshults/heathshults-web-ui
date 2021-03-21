/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FramekitHighlightCodeAnchor } from "./declarations/fk-highlight-code-anchor";
export namespace Components {
    interface HsBackToTop {
        "position": string;
    }
    interface HsButton {
    }
    interface HsCard {
        "autoFooter": boolean;
        "basicFooter": any;
        "builderOne": any;
        "builderThree": any;
        "builderTwo": any;
        "cardContent": any;
        "cardHeader": any;
        "cardHeaderImg": HTMLElement;
        "cardId": string;
        "cardSize": string;
        "clickTarget": string;
        "cloneBaby": any;
        "clonedContent": any;
        "dataTarget"?: string;
        "dataToggle"?: string;
        "fnStatusCallBack": (status: boolean, fnName: string, errorMessage?: any) => any;
        "footerDiv": HTMLDivElement;
        "imgElem": any;
        "imgHeaderImg": string;
        "imgHeaderImgContainer": HTMLImageElement;
        "imgHeaderImgPlaceholder": string;
        "imgPath": string;
        "overlay": any;
        "showHide": string;
        "validURL": (str: any) => any;
    }
    interface HsCardBody {
        "bodyClassList"?: string;
        "contentClassList"?: string;
    }
    interface HsCardButton {
        "buttonId"?: string;
        "buttonText"?: string;
        "cssClass"?: string;
        "dataTarget"?: string | null;
        "dataToggle"?: string | null;
        "handleClick": (event: any, url: any, urlParams: any, dataTarget: any) => Promise<void>;
        "onclicker": any;
        "url"?: any;
        "urlParams"?: any;
    }
    interface HsCardFooter {
        "modalId"?: string;
    }
    interface HsCardHeader {
        "cardHeader": any;
        "cardHeaderImg": HTMLElement;
        "clickTarget": string;
        "colorTone": string;
        "fnStatusCallBack": (status: boolean, fnName: string, errorMessage?: unknown) => any;
        "imgElem": any;
        "imgHeaderImg": string;
        "imgHeaderImgPlaceholder": string;
        "imgPath": string;
        "modalId": string;
        "overlay": any;
        "showHide": string;
    }
    interface HsCardImgHeader {
        "cardHeader": any;
        "cardHeaderImg": HTMLElement;
        "clickTarget": string;
        "colorTone": string;
        "colorToneClass": string;
        "dataTarget": string;
        "dataToggle": string;
        "fnStatusCallBack": (status: boolean, fnName: string, errorMessage?: any) => any;
        "imgElem": any;
        "imgHeaderImg": string;
        "imgHeaderImgPlaceholder": string;
        "imgPath": string;
        "overlay": any;
        "showHide": string;
        "validURL": (str: any) => any;
    }
    interface HsCodeHighlighter {
        /**
          * The content to show in the syntax highlighter element
         */
        "content": string;
        /**
          * The text inside the "copy to clipboard" button
          * @remark This is primarily for if you want to provide i18n with your syntax highlighted component
          * @example "Kopieer naar klembord"
          * @default "Copy to clipboard"
         */
        "copyButtonLabel": string;
        /**
          * The language to highlight for
          * @default html
         */
        "language": string;
        /**
          * The theme to use, one of light or dark
          * @default dark
         */
        "theme": 'dark' | 'light';
    }
    interface HsFetcher {
        "buttonLabel": string;
        "headers": Headers;
        "makeRequest": () => Promise<void>;
        "method": string;
        "url": string;
    }
    interface HsFlip2code {
        /**
          * The text inside the "copy to clipboard" button
          * @remark This is primarily for if you want to provide i18n with your syntax highlighted component
          * @example "Kopieer naar klembord"
          * @default "Copy to clipboard"
         */
        "copyButtonLabel": string;
        "flipCardSnipp": HTMLDivElement;
        "flipCode": any;
        "flipCodeBack": HTMLDivElement;
        "flipCodeBlock": HTMLElement;
        "flipCodeButton": HTMLButtonElement;
        "flipCodeFront": HTMLDivElement;
        "flipCodeInnerContainer": HTMLDivElement;
        "flipCodePre": HTMLElement;
        "flipCodeSlot": HTMLElement | any;
        "flipCodeSlotDiv": HTMLElement;
        "flipContainer": HTMLDivElement;
        "flipcodeButtontext"?: string;
        "flipcodeHeight": any;
        "flipcodeLanguage"?: string;
        "rawFlipCode": any;
        "setHeight": any;
    }
    interface HsFlip2codeDev {
        "back": HTMLDivElement;
        "button": HTMLButtonElement;
        "codeElement": any;
        "contentBack": any;
        "flipHeight": any;
        "flipWidth": any;
        "flipcodeButtontext"?: string;
        "flipcopyButtonText"?: string;
        "front": HTMLDivElement;
        "frontFlip": HTMLDivElement;
        "innerContainer": HTMLDivElement;
        "language"?: string;
        "outerContainer": HTMLDivElement;
        "slotBack": HTMLElement | any;
        "slotFront": HTMLElement;
        "snipp": HTMLDivElement;
        "toolbar": HTMLElement;
    }
    interface HsFlipper {
        "flipperBackEvents": string;
        "flipperDuration": number;
        "flipperEvents": string;
        "flipperTimingFunction": string;
        "isflipperped": boolean;
    }
    interface HsHighlightCode {
        "anchor": string;
        "anchorZoom": string;
        "findNextAnchor": (enter: boolean) => Promise<FramekitHighlightCodeAnchor>;
        "hideAnchor": boolean;
        "highlightLines": string;
        "language": string;
        "load": () => Promise<void>;
        "src": string;
        "zoomCode": (zoom: boolean) => Promise<void>;
    }
    interface HsMediaImage {
        "alt": string;
        "src": string;
    }
    interface HsMediaItem {
    }
    interface HsModal {
        "dismissible": boolean;
        "full": boolean;
        "ghost": boolean;
        "modalTitle": string;
        "open": boolean;
        "overlay": any;
        "winHeight": any;
    }
    interface HsProgress {
        "rounded": boolean;
        "size": string;
    }
    interface HsProgressBar {
        "max": number;
        "min": number;
        "type": string;
        "value": number;
    }
    interface HsRotator3d {
        "currImage": any;
        "dataBfc": any;
        "dataGap": any;
        "figure": HTMLElement;
        "images": any;
        "mode": any;
        "nav": any;
        "navigate": any;
        "rotateRotator3D": any;
        "rotator3DElement": any;
        "theta": any;
    }
    interface HsSlider {
        "max": number;
        "min": number;
        "value": number;
    }
    interface HsSticky {
        "top": number;
    }
    interface HsTab {
        "disabled": boolean;
        "header": string;
        "open": boolean;
        "type": string;
    }
    interface HsTabs {
        "currentTab": () => Promise<number>;
        "openTab": (tabIndex: number) => Promise<void>;
    }
    interface HsTimeline {
        "alternate": boolean;
        "loading": boolean;
    }
    interface HsTimelineItem {
        "last": boolean;
        "left": boolean;
        "loading": boolean;
        "type": string;
    }
}
declare global {
    interface HTMLHsBackToTopElement extends Components.HsBackToTop, HTMLStencilElement {
    }
    var HTMLHsBackToTopElement: {
        prototype: HTMLHsBackToTopElement;
        new (): HTMLHsBackToTopElement;
    };
    interface HTMLHsButtonElement extends Components.HsButton, HTMLStencilElement {
    }
    var HTMLHsButtonElement: {
        prototype: HTMLHsButtonElement;
        new (): HTMLHsButtonElement;
    };
    interface HTMLHsCardElement extends Components.HsCard, HTMLStencilElement {
    }
    var HTMLHsCardElement: {
        prototype: HTMLHsCardElement;
        new (): HTMLHsCardElement;
    };
    interface HTMLHsCardBodyElement extends Components.HsCardBody, HTMLStencilElement {
    }
    var HTMLHsCardBodyElement: {
        prototype: HTMLHsCardBodyElement;
        new (): HTMLHsCardBodyElement;
    };
    interface HTMLHsCardButtonElement extends Components.HsCardButton, HTMLStencilElement {
    }
    var HTMLHsCardButtonElement: {
        prototype: HTMLHsCardButtonElement;
        new (): HTMLHsCardButtonElement;
    };
    interface HTMLHsCardFooterElement extends Components.HsCardFooter, HTMLStencilElement {
    }
    var HTMLHsCardFooterElement: {
        prototype: HTMLHsCardFooterElement;
        new (): HTMLHsCardFooterElement;
    };
    interface HTMLHsCardHeaderElement extends Components.HsCardHeader, HTMLStencilElement {
    }
    var HTMLHsCardHeaderElement: {
        prototype: HTMLHsCardHeaderElement;
        new (): HTMLHsCardHeaderElement;
    };
    interface HTMLHsCardImgHeaderElement extends Components.HsCardImgHeader, HTMLStencilElement {
    }
    var HTMLHsCardImgHeaderElement: {
        prototype: HTMLHsCardImgHeaderElement;
        new (): HTMLHsCardImgHeaderElement;
    };
    interface HTMLHsCodeHighlighterElement extends Components.HsCodeHighlighter, HTMLStencilElement {
    }
    var HTMLHsCodeHighlighterElement: {
        prototype: HTMLHsCodeHighlighterElement;
        new (): HTMLHsCodeHighlighterElement;
    };
    interface HTMLHsFetcherElement extends Components.HsFetcher, HTMLStencilElement {
    }
    var HTMLHsFetcherElement: {
        prototype: HTMLHsFetcherElement;
        new (): HTMLHsFetcherElement;
    };
    interface HTMLHsFlip2codeElement extends Components.HsFlip2code, HTMLStencilElement {
    }
    var HTMLHsFlip2codeElement: {
        prototype: HTMLHsFlip2codeElement;
        new (): HTMLHsFlip2codeElement;
    };
    interface HTMLHsFlip2codeDevElement extends Components.HsFlip2codeDev, HTMLStencilElement {
    }
    var HTMLHsFlip2codeDevElement: {
        prototype: HTMLHsFlip2codeDevElement;
        new (): HTMLHsFlip2codeDevElement;
    };
    interface HTMLHsFlipperElement extends Components.HsFlipper, HTMLStencilElement {
    }
    var HTMLHsFlipperElement: {
        prototype: HTMLHsFlipperElement;
        new (): HTMLHsFlipperElement;
    };
    interface HTMLHsHighlightCodeElement extends Components.HsHighlightCode, HTMLStencilElement {
    }
    var HTMLHsHighlightCodeElement: {
        prototype: HTMLHsHighlightCodeElement;
        new (): HTMLHsHighlightCodeElement;
    };
    interface HTMLHsMediaImageElement extends Components.HsMediaImage, HTMLStencilElement {
    }
    var HTMLHsMediaImageElement: {
        prototype: HTMLHsMediaImageElement;
        new (): HTMLHsMediaImageElement;
    };
    interface HTMLHsMediaItemElement extends Components.HsMediaItem, HTMLStencilElement {
    }
    var HTMLHsMediaItemElement: {
        prototype: HTMLHsMediaItemElement;
        new (): HTMLHsMediaItemElement;
    };
    interface HTMLHsModalElement extends Components.HsModal, HTMLStencilElement {
    }
    var HTMLHsModalElement: {
        prototype: HTMLHsModalElement;
        new (): HTMLHsModalElement;
    };
    interface HTMLHsProgressElement extends Components.HsProgress, HTMLStencilElement {
    }
    var HTMLHsProgressElement: {
        prototype: HTMLHsProgressElement;
        new (): HTMLHsProgressElement;
    };
    interface HTMLHsProgressBarElement extends Components.HsProgressBar, HTMLStencilElement {
    }
    var HTMLHsProgressBarElement: {
        prototype: HTMLHsProgressBarElement;
        new (): HTMLHsProgressBarElement;
    };
    interface HTMLHsRotator3dElement extends Components.HsRotator3d, HTMLStencilElement {
    }
    var HTMLHsRotator3dElement: {
        prototype: HTMLHsRotator3dElement;
        new (): HTMLHsRotator3dElement;
    };
    interface HTMLHsSliderElement extends Components.HsSlider, HTMLStencilElement {
    }
    var HTMLHsSliderElement: {
        prototype: HTMLHsSliderElement;
        new (): HTMLHsSliderElement;
    };
    interface HTMLHsStickyElement extends Components.HsSticky, HTMLStencilElement {
    }
    var HTMLHsStickyElement: {
        prototype: HTMLHsStickyElement;
        new (): HTMLHsStickyElement;
    };
    interface HTMLHsTabElement extends Components.HsTab, HTMLStencilElement {
    }
    var HTMLHsTabElement: {
        prototype: HTMLHsTabElement;
        new (): HTMLHsTabElement;
    };
    interface HTMLHsTabsElement extends Components.HsTabs, HTMLStencilElement {
    }
    var HTMLHsTabsElement: {
        prototype: HTMLHsTabsElement;
        new (): HTMLHsTabsElement;
    };
    interface HTMLHsTimelineElement extends Components.HsTimeline, HTMLStencilElement {
    }
    var HTMLHsTimelineElement: {
        prototype: HTMLHsTimelineElement;
        new (): HTMLHsTimelineElement;
    };
    interface HTMLHsTimelineItemElement extends Components.HsTimelineItem, HTMLStencilElement {
    }
    var HTMLHsTimelineItemElement: {
        prototype: HTMLHsTimelineItemElement;
        new (): HTMLHsTimelineItemElement;
    };
    interface HTMLElementTagNameMap {
        "hs-back-to-top": HTMLHsBackToTopElement;
        "hs-button": HTMLHsButtonElement;
        "hs-card": HTMLHsCardElement;
        "hs-card-body": HTMLHsCardBodyElement;
        "hs-card-button": HTMLHsCardButtonElement;
        "hs-card-footer": HTMLHsCardFooterElement;
        "hs-card-header": HTMLHsCardHeaderElement;
        "hs-card-img-header": HTMLHsCardImgHeaderElement;
        "hs-code-highlighter": HTMLHsCodeHighlighterElement;
        "hs-fetcher": HTMLHsFetcherElement;
        "hs-flip2code": HTMLHsFlip2codeElement;
        "hs-flip2code-dev": HTMLHsFlip2codeDevElement;
        "hs-flipper": HTMLHsFlipperElement;
        "hs-highlight-code": HTMLHsHighlightCodeElement;
        "hs-media-image": HTMLHsMediaImageElement;
        "hs-media-item": HTMLHsMediaItemElement;
        "hs-modal": HTMLHsModalElement;
        "hs-progress": HTMLHsProgressElement;
        "hs-progress-bar": HTMLHsProgressBarElement;
        "hs-rotator3d": HTMLHsRotator3dElement;
        "hs-slider": HTMLHsSliderElement;
        "hs-sticky": HTMLHsStickyElement;
        "hs-tab": HTMLHsTabElement;
        "hs-tabs": HTMLHsTabsElement;
        "hs-timeline": HTMLHsTimelineElement;
        "hs-timeline-item": HTMLHsTimelineItemElement;
    }
}
declare namespace LocalJSX {
    interface HsBackToTop {
        "onBacktotop"?: (event: CustomEvent<any>) => void;
        "position"?: string;
    }
    interface HsButton {
    }
    interface HsCard {
        "autoFooter"?: boolean;
        "basicFooter"?: any;
        "builderOne"?: any;
        "builderThree"?: any;
        "builderTwo"?: any;
        "cardContent"?: any;
        "cardHeader"?: any;
        "cardHeaderImg"?: HTMLElement;
        "cardId"?: string;
        "cardSize"?: string;
        "clickTarget"?: string;
        "cloneBaby"?: any;
        "clonedContent"?: any;
        "dataTarget"?: string;
        "dataToggle"?: string;
        "fnStatusCallBack"?: (status: boolean, fnName: string, errorMessage?: any) => any;
        "footerDiv"?: HTMLDivElement;
        "imgElem"?: any;
        "imgHeaderImg"?: string;
        "imgHeaderImgContainer"?: HTMLImageElement;
        "imgHeaderImgPlaceholder"?: string;
        "imgPath"?: string;
        "overlay"?: any;
        "showHide"?: string;
        "validURL"?: (str: any) => any;
    }
    interface HsCardBody {
        "bodyClassList"?: string;
        "contentClassList"?: string;
    }
    interface HsCardButton {
        "buttonId"?: string;
        "buttonText"?: string;
        "cssClass"?: string;
        "dataTarget"?: string | null;
        "dataToggle"?: string | null;
        "onModalLancher"?: (event: CustomEvent<any>) => void;
        "onclicker"?: any;
        "url"?: any;
        "urlParams"?: any;
    }
    interface HsCardFooter {
        "modalId"?: string;
    }
    interface HsCardHeader {
        "cardHeader"?: any;
        "cardHeaderImg"?: HTMLElement;
        "clickTarget"?: string;
        "colorTone"?: string;
        "fnStatusCallBack"?: (status: boolean, fnName: string, errorMessage?: unknown) => any;
        "imgElem"?: any;
        "imgHeaderImg"?: string;
        "imgHeaderImgPlaceholder"?: string;
        "imgPath"?: string;
        "modalId"?: string;
        "onModalLancher"?: (event: CustomEvent<any>) => void;
        "overlay"?: any;
        "showHide"?: string;
    }
    interface HsCardImgHeader {
        "cardHeader"?: any;
        "cardHeaderImg"?: HTMLElement;
        "clickTarget"?: string;
        "colorTone"?: string;
        "colorToneClass"?: string;
        "dataTarget"?: string;
        "dataToggle"?: string;
        "fnStatusCallBack"?: (status: boolean, fnName: string, errorMessage?: any) => any;
        "imgElem"?: any;
        "imgHeaderImg"?: string;
        "imgHeaderImgPlaceholder"?: string;
        "imgPath"?: string;
        "onModalLancher"?: (event: CustomEvent<any>) => void;
        "overlay"?: any;
        "showHide"?: string;
        "validURL"?: (str: any) => any;
    }
    interface HsCodeHighlighter {
        /**
          * The content to show in the syntax highlighter element
         */
        "content"?: string;
        /**
          * The text inside the "copy to clipboard" button
          * @remark This is primarily for if you want to provide i18n with your syntax highlighted component
          * @example "Kopieer naar klembord"
          * @default "Copy to clipboard"
         */
        "copyButtonLabel"?: string;
        /**
          * The language to highlight for
          * @default html
         */
        "language"?: string;
        /**
          * The callback that will be fired when ClipboardJS fails to copy the text
          * @remark You can use this to, for example, show notifications to users
          * @remark This event will bubble up through the DOM
          * @default undefined
          * @example ```html <body> 	<syntax-highlighter id="example-highlight" theme="dark" language="typescript" content="console.log('example')" /> 	<script> 		const syntaxHighlighterElement = document.querySelector('#example-highlight'); 		syntaxHighlighterElement.addEventListener('clipboardJsError', event => { 			console.log('handling'); 		}); 	</script> </body> ```
         */
        "onClipboardJsError"?: (event: CustomEvent<ClipboardJS.Event>) => void;
        /**
          * The theme to use, one of light or dark
          * @default dark
         */
        "theme"?: 'dark' | 'light';
    }
    interface HsFetcher {
        "buttonLabel"?: string;
        "headers"?: Headers;
        "method"?: string;
        "onFetcherror"?: (event: CustomEvent<any>) => void;
        "onResolved"?: (event: CustomEvent<any>) => void;
        "url"?: string;
    }
    interface HsFlip2code {
        /**
          * The text inside the "copy to clipboard" button
          * @remark This is primarily for if you want to provide i18n with your syntax highlighted component
          * @example "Kopieer naar klembord"
          * @default "Copy to clipboard"
         */
        "copyButtonLabel"?: string;
        "flipCardSnipp"?: HTMLDivElement;
        "flipCode"?: any;
        "flipCodeBack"?: HTMLDivElement;
        "flipCodeBlock"?: HTMLElement;
        "flipCodeButton"?: HTMLButtonElement;
        "flipCodeFront"?: HTMLDivElement;
        "flipCodeInnerContainer"?: HTMLDivElement;
        "flipCodePre"?: HTMLElement;
        "flipCodeSlot"?: HTMLElement | any;
        "flipCodeSlotDiv"?: HTMLElement;
        "flipContainer"?: HTMLDivElement;
        "flipcodeButtontext"?: string;
        "flipcodeHeight"?: any;
        "flipcodeLanguage"?: string;
        /**
          * The callback that will be fired when ClipboardJS fails to copy the text
          * @remark You can use this to, for example, show notifications to users
          * @remark This event will bubble up through the DOM
          * @default undefined
          * @example ```html <body> 	<hs-flip2code id="example-highlight" theme="dark" language="typescript" content="console.l('example')" /> 	  <script> 		  const syntaxHighlighterElement = document.querySelector('#example-highlight'); 		  syntaxHighlighterElement.addEventListener('clipboardJsError', event => { 			  console.l('handling'); 		  }); 	  </script>   </hs-flip2code> </body> ```
         */
        "onClipboardJsError"?: (event: CustomEvent<ClipboardJS.Event>) => void;
        "rawFlipCode"?: any;
        "setHeight"?: any;
    }
    interface HsFlip2codeDev {
        "back"?: HTMLDivElement;
        "button"?: HTMLButtonElement;
        "codeElement"?: any;
        "contentBack"?: any;
        "flipHeight"?: any;
        "flipWidth"?: any;
        "flipcodeButtontext"?: string;
        "flipcopyButtonText"?: string;
        "front"?: HTMLDivElement;
        "frontFlip"?: HTMLDivElement;
        "innerContainer"?: HTMLDivElement;
        "language"?: string;
        "outerContainer"?: HTMLDivElement;
        "slotBack"?: HTMLElement | any;
        "slotFront"?: HTMLElement;
        "snipp"?: HTMLDivElement;
        "toolbar"?: HTMLElement;
    }
    interface HsFlipper {
        "flipperBackEvents"?: string;
        "flipperDuration"?: number;
        "flipperEvents"?: string;
        "flipperTimingFunction"?: string;
        "isflipperped"?: boolean;
    }
    interface HsHighlightCode {
        "anchor"?: string;
        "anchorZoom"?: string;
        "hideAnchor"?: boolean;
        "highlightLines"?: string;
        "language"?: string;
        "onPrismLanguageLoaded"?: (event: CustomEvent<string>) => void;
        "src"?: string;
    }
    interface HsMediaImage {
        "alt"?: string;
        "src"?: string;
    }
    interface HsMediaItem {
    }
    interface HsModal {
        "dismissible"?: boolean;
        "full"?: boolean;
        "ghost"?: boolean;
        "modalTitle"?: string;
        "onClose"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
        "overlay"?: any;
        "winHeight"?: any;
    }
    interface HsProgress {
        "onNotSame"?: (event: CustomEvent<any>) => void;
        "rounded"?: boolean;
        "size"?: string;
    }
    interface HsProgressBar {
        "max"?: number;
        "min"?: number;
        "onChangebar"?: (event: CustomEvent<any>) => void;
        "type"?: string;
        "value"?: number;
    }
    interface HsRotator3d {
        "currImage"?: any;
        "dataBfc"?: any;
        "dataGap"?: any;
        "figure"?: HTMLElement;
        "images"?: any;
        "mode"?: any;
        "nav"?: any;
        "navigate"?: any;
        "rotateRotator3D"?: any;
        "rotator3DElement"?: any;
        "theta"?: any;
    }
    interface HsSlider {
        "max"?: number;
        "min"?: number;
        "onValueChanged"?: (event: CustomEvent<any>) => void;
        "value"?: number;
    }
    interface HsSticky {
        "top"?: number;
    }
    interface HsTab {
        "disabled"?: boolean;
        "header"?: string;
        "open"?: boolean;
        "type"?: string;
    }
    interface HsTabs {
        "onUpdated"?: (event: CustomEvent<any>) => void;
    }
    interface HsTimeline {
        "alternate"?: boolean;
        "loading"?: boolean;
    }
    interface HsTimelineItem {
        "last"?: boolean;
        "left"?: boolean;
        "loading"?: boolean;
        "type"?: string;
    }
    interface IntrinsicElements {
        "hs-back-to-top": HsBackToTop;
        "hs-button": HsButton;
        "hs-card": HsCard;
        "hs-card-body": HsCardBody;
        "hs-card-button": HsCardButton;
        "hs-card-footer": HsCardFooter;
        "hs-card-header": HsCardHeader;
        "hs-card-img-header": HsCardImgHeader;
        "hs-code-highlighter": HsCodeHighlighter;
        "hs-fetcher": HsFetcher;
        "hs-flip2code": HsFlip2code;
        "hs-flip2code-dev": HsFlip2codeDev;
        "hs-flipper": HsFlipper;
        "hs-highlight-code": HsHighlightCode;
        "hs-media-image": HsMediaImage;
        "hs-media-item": HsMediaItem;
        "hs-modal": HsModal;
        "hs-progress": HsProgress;
        "hs-progress-bar": HsProgressBar;
        "hs-rotator3d": HsRotator3d;
        "hs-slider": HsSlider;
        "hs-sticky": HsSticky;
        "hs-tab": HsTab;
        "hs-tabs": HsTabs;
        "hs-timeline": HsTimeline;
        "hs-timeline-item": HsTimelineItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hs-back-to-top": LocalJSX.HsBackToTop & JSXBase.HTMLAttributes<HTMLHsBackToTopElement>;
            "hs-button": LocalJSX.HsButton & JSXBase.HTMLAttributes<HTMLHsButtonElement>;
            "hs-card": LocalJSX.HsCard & JSXBase.HTMLAttributes<HTMLHsCardElement>;
            "hs-card-body": LocalJSX.HsCardBody & JSXBase.HTMLAttributes<HTMLHsCardBodyElement>;
            "hs-card-button": LocalJSX.HsCardButton & JSXBase.HTMLAttributes<HTMLHsCardButtonElement>;
            "hs-card-footer": LocalJSX.HsCardFooter & JSXBase.HTMLAttributes<HTMLHsCardFooterElement>;
            "hs-card-header": LocalJSX.HsCardHeader & JSXBase.HTMLAttributes<HTMLHsCardHeaderElement>;
            "hs-card-img-header": LocalJSX.HsCardImgHeader & JSXBase.HTMLAttributes<HTMLHsCardImgHeaderElement>;
            "hs-code-highlighter": LocalJSX.HsCodeHighlighter & JSXBase.HTMLAttributes<HTMLHsCodeHighlighterElement>;
            "hs-fetcher": LocalJSX.HsFetcher & JSXBase.HTMLAttributes<HTMLHsFetcherElement>;
            "hs-flip2code": LocalJSX.HsFlip2code & JSXBase.HTMLAttributes<HTMLHsFlip2codeElement>;
            "hs-flip2code-dev": LocalJSX.HsFlip2codeDev & JSXBase.HTMLAttributes<HTMLHsFlip2codeDevElement>;
            "hs-flipper": LocalJSX.HsFlipper & JSXBase.HTMLAttributes<HTMLHsFlipperElement>;
            "hs-highlight-code": LocalJSX.HsHighlightCode & JSXBase.HTMLAttributes<HTMLHsHighlightCodeElement>;
            "hs-media-image": LocalJSX.HsMediaImage & JSXBase.HTMLAttributes<HTMLHsMediaImageElement>;
            "hs-media-item": LocalJSX.HsMediaItem & JSXBase.HTMLAttributes<HTMLHsMediaItemElement>;
            "hs-modal": LocalJSX.HsModal & JSXBase.HTMLAttributes<HTMLHsModalElement>;
            "hs-progress": LocalJSX.HsProgress & JSXBase.HTMLAttributes<HTMLHsProgressElement>;
            "hs-progress-bar": LocalJSX.HsProgressBar & JSXBase.HTMLAttributes<HTMLHsProgressBarElement>;
            "hs-rotator3d": LocalJSX.HsRotator3d & JSXBase.HTMLAttributes<HTMLHsRotator3dElement>;
            "hs-slider": LocalJSX.HsSlider & JSXBase.HTMLAttributes<HTMLHsSliderElement>;
            "hs-sticky": LocalJSX.HsSticky & JSXBase.HTMLAttributes<HTMLHsStickyElement>;
            "hs-tab": LocalJSX.HsTab & JSXBase.HTMLAttributes<HTMLHsTabElement>;
            "hs-tabs": LocalJSX.HsTabs & JSXBase.HTMLAttributes<HTMLHsTabsElement>;
            "hs-timeline": LocalJSX.HsTimeline & JSXBase.HTMLAttributes<HTMLHsTimelineElement>;
            "hs-timeline-item": LocalJSX.HsTimelineItem & JSXBase.HTMLAttributes<HTMLHsTimelineItemElement>;
        }
    }
}
