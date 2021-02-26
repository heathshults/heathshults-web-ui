import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-9897d625.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-fb6a473e.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["hs-3d-rotator",[[1,"hs-3d-rotator",{"HSThreeDRotator":[8,"h-s-three-d-rotator"],"cellCount":[8,"cell-count"],"cellWidth":[8,"cell-width"],"cellHeight":[8,"cell-height"],"minCells":[514,"min-cells"],"startCellCount":[514,"start-cell-count"],"maxCells":[514,"max-cells"],"headers":[16],"method":[1],"url":[1],"jdata":[16],"available":[32],"request":[32]},[[9,"resize","resizeHandler"]]]]],["hs-back-to-top",[[4,"hs-back-to-top",{"position":[1],"_isOpen":[32]},[[5,"scroll","enable"]]]]],["hs-button",[[1,"hs-button"]]],["hs-card",[[1,"hs-card",{"imgHeaderImgContainer":[16],"cardContent":[8,"card-content"],"colorTone":[513,"color-tone"],"colorToneClass":[513,"color-tone-class"],"cardId":[513,"card-id"],"cardSize":[513,"card-size"],"cardHeader":[8,"card-header"],"cardHeaderImg":[16],"imgHeaderImgPlaceholder":[1,"img-header-img-placeholder"],"overlay":[8],"imgElem":[8,"img-elem"],"dataTarget":[1,"data-target"],"dataToggle":[1,"data-toggle"],"imgHeaderImg":[1,"img-header-img"],"imgPath":[1,"img-path"],"showHide":[1,"show-hide"],"autoFooter":[4,"auto-footer"],"footerDiv":[16],"basicFooter":[8,"basic-footer"],"clickTarget":[1,"click-target"],"cloneBaby":[8,"clone-baby"],"clonedContent":[8,"cloned-content"],"builderOne":[8,"builder-one"],"builderTwo":[8,"builder-two"],"builderThree":[8,"builder-three"],"fnStatusCallBack":[16],"validURL":[16]}]]],["hs-card-body",[[1,"hs-card-body",{"bodyClasses":[1,"body-classes"],"bodyClassList":[1,"body-class-list"],"contentClasses":[1,"content-classes"],"contentClassList":[1,"content-class-list"]}]]],["hs-card-button",[[1,"hs-card-button",{"buttonId":[1,"button-id"],"cssClass":[1,"css-class"],"buttonText":[1,"button-text"],"url":[8],"urlParams":[8,"url-params"],"dataTarget":[1,"data-target"],"dataToggle":[1,"data-toggle"],"onclicker":[8],"handleClick":[64]},[[0,"launchModal","launchModalHandler"]]]]],["hs-card-footer",[[1,"hs-card-footer",{"colorTone":[513,"color-tone"],"colorToneClass":[513,"color-tone-class"],"modalId":[1,"modal-id"]}]]],["hs-card-header",[[1,"hs-card-header",{"cardHeader":[8,"card-header"],"cardHeaderImg":[16],"imgHeaderImgPlaceholder":[1,"img-header-img-placeholder"],"overlay":[8],"imgElem":[8,"img-elem"],"modalId":[1,"modal-id"],"imgHeaderImg":[1,"img-header-img"],"imgPath":[1,"img-path"],"showHide":[1,"show-hide"],"clickTarget":[1,"click-target"],"colorTone":[1,"color-tone"],"fnStatusCallBack":[16]},[[0,"launchModal","launchModalHandler"]]]]],["hs-card-img-header",[[1,"hs-card-img-header",{"colorTone":[513,"color-tone"],"colorToneClass":[513,"color-tone-class"],"cardHeader":[8,"card-header"],"cardHeaderImg":[16],"imgHeaderImgPlaceholder":[1,"img-header-img-placeholder"],"overlay":[8],"imgElem":[8,"img-elem"],"dataTarget":[1,"data-target"],"dataToggle":[1,"data-toggle"],"imgHeaderImg":[1,"img-header-img"],"imgPath":[1,"img-path"],"showHide":[1,"show-hide"],"clickTarget":[1,"click-target"],"fnStatusCallBack":[16],"validURL":[16]},[[0,"launchModal","launchModalHandler"]]]]],["hs-fetcher",[[1,"hs-fetcher",{"headers":[16],"method":[1],"url":[1],"buttonLabel":[1,"button-label"],"available":[32],"request":[32],"makeRequest":[64]}]]],["hs-flipper",[[4,"hs-flipper",{"flipperEvents":[1,"flipper-events"],"flipperBackEvents":[1,"flipper-back-events"],"flipperDuration":[2,"flipper-duration"],"flipperTimingFunction":[1,"flipper-timing-function"],"isflipperped":[4],"flipperState":[32]}]]],["hs-media-image",[[0,"hs-media-image",{"src":[1],"alt":[1]}]]],["hs-media-item",[[1,"hs-media-item"]]],["hs-modal",[[1,"hs-modal",{"ghost":[4],"full":[4],"open":[4],"dismissible":[4],"winHeight":[8,"win-height"],"overlay":[8],"modalTitle":[1,"modal-title"],"_isOpen":[32]}]]],["hs-progress",[[1,"hs-progress",{"rounded":[4],"size":[1]},[[0,"changebar","onChangeBar"]]]]],["hs-progress-bar",[[1,"hs-progress-bar",{"type":[1],"value":[2],"min":[2],"max":[2]}]]],["hs-slider",[[1,"hs-slider",{"min":[2],"max":[2],"value":[2]}]]],["hs-sticky",[[4,"hs-sticky",{"top":[2],"staticStyles":[32],"stickyStyles":[32]},[[9,"resize","positionElement"],[5,"scroll","positionElement"]]]]],["hs-tab",[[1,"hs-tab",{"header":[1],"disabled":[4],"open":[4],"type":[1]}]]],["hs-tabs",[[1,"hs-tabs",{"tabs":[32],"currentTab":[64],"openTab":[64]}]]],["hs-timeline",[[1,"hs-timeline",{"alternate":[4],"loading":[4]}]]],["hs-timeline-item",[[1,"hs-timeline-item",{"type":[1],"last":[4],"left":[4],"loading":[4]}]]]], options);
});
