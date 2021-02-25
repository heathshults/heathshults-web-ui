"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable no-unused-vars */

/* eslint-disable no-console */
var ShowMore = function ShowMore() {
  var openHeight;
  document.addEventListener('DOMContentLoaded', function FadeBar() {
    var VERSION = '0.0.1';
    var NAME = 'ShowMore_FadeBar';
    console.log("Now using ".concat(NAME, " version ").concat(VERSION)); // prepare the style tage for some css luvin

    var styleEl = document.createElement('style');
    var headEl = document.head || document.getElementsByTagName('head')[0];
    var options = settings();
    var cssText = FadeBarCSS(options); // console.log(options);

    styleEl.setAttribute('id', 'fbCSS');
    styleEl.textContent = cssText; // headEl.append(styleEl);

    try {
      var theFaders = Array.prototype.slice.call(document.querySelectorAll('.j-showmore'));
      theFaders.forEach(function (node, index) {
        var theContainer = node;
        var theFadeBar = document.createElement('div');
        var theShowMoreButton = document.createElement('button');
        var zindex = 'auto';
        theFadeBar.classList.add('j-fader');
        theFadeBar.style = "position: absolute; z-index: auto;";
        theShowMoreButton.classList.add('j-fader_button');
        theShowMoreButton.innerText = options.fbInitButtonText;
        theFadeBar.appendChild(theShowMoreButton);
        theContainer.before(theFadeBar);
        openHeight = theContainer.offsetHeight;
        console.log(openHeight);
        theShowMoreButton.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.target.classList.toggle('is-visible');
          var thisFadeBar = ev.target.parentElement;
          thisFadeBar.classList.toggle('is-visible');
          thisFadeBar.nextElementSibling.classList.toggle('is-visible');
          ev.target.classList.contains('is-visible') ? ev.target.innerText = options.fbOpenButtonText : ev.target.innerText = options.fbInitButtonText;
        }, false);
        theShowMoreButton.addEventListener('mouseout', function (ev) {
          ev.target.blur();
        });
      });
    } catch (err) {
      console.error(err);
    }
  }); // module.exports = FadeBar;

  function appendCSS(styles) {
    return; // return () => {
    //   const styleEl = document.createElement('style');
    //   const headEl = document.head || document.getElementsByTagName('head')[0];
    //   // const cssStyles = css
    //   styleEl.textContent = styles;
    //   headEl.appendChild(styleEl);
    //   styleEl.type = 'text/css';
    //   if (styleEl.styleSheet) {
    //     // This is required for IE8 and below.
    //     styleEl.styleSheet.cssText = styles;
    //   } else {
    //     styleEl.appendChild(document.createTextNode(styles));
    //   }
    // };
  }

  function defaults() {
    return {
      fbWidth: '100%',
      fbHeight: '50px',
      fbBoxHeight: '300px',
      fbBoxPaddingBottom: '60px',
      fbStartColor: 'rgba(0,0,0,0)',
      fbEndColor: 'rgba(0,0,0,0)',
      fbBottomBorder: '0px solid #f2f2f2',
      fbInitButtonText: 'Show More',
      fbOpenButtonText: 'Show Less',
      fbButtonPosition: 'center',
      fbButtonBackground: '#fff',
      fbButtonBackgroundHover: '#fff;',
      fbButtonBackgroundFocus: '#fff;',
      fbButtonTextColor: '#333',
      fbButtonTextColorHover: '#333',
      fbButtonLineHeight: '1',
      fbButtonTextColorFocus: '#333',
      fbButtonBorderColor: '#fff',
      fbButtonBorderColorFocus: '#dedede',
      fbButtonBorderRadius: '4px',
      fbButtonWidth: '100px',
      fbButtonHeight: '20px',
      fbClassList: 'u-text-center',
      fbBtnClassList: 'btn btn-primary mx-auto'
    };
  }

  function settings() {
    // let ShowMoreSettings = typeof null;
    var fbCon = [];

    if (typeof ShowMoreSettings === 'undefined') {
      fbCon = defaults();
    } else {
      fbCon = ShowMoreSettings;
    }

    var styles = {
      classBase: 'button-show-more',
      classActive: 'is-fully-opened',
      classFocused: 'is-focused',
      fadebarClassList: 'animate text-center',
      fadebarbButtonClassList: 'btn mx-auto'
    };
    var fbActionBtn = {
      // showMore: 'Show More',
      // showLess: 'Show Less',
      positionX: 'center',
      positionY: 'bottom'
    };

    try {
      var options = Object.assign(defaults(), styles, fbActionBtn, fbCon);
      console.log('options');
      console.log(options); // cssBuilder(options);

      return options;
    } catch (e) {
      console.log('object assign error: ' + e);
    }
  } // document.addEventListener('DOMContentLoaded', FadeBarCSS = () => {


  function FadeBarCSS(options) {
    var cssValues = options;
    var fbCSS = "\n      .j-showmore {\n        position: absolute;\n        left: -9999px;\n        min-height: ".concat(cssValues.fbBoxHeight, ";\n        max-height: 400px;\n        overflow: hidden;\n        padding-bottom: ").concat(cssValues.fbBoxPaddingBottom, ";\n        -webkit-transition: max-height .25s ease-in-out;\n           -moz-transition: max-height .25s ease-in-out;\n             -o-transition: max-height .25s ease-in-out;\n                transition: max-height .25s ease-in-out;\n\n        /* -webkit-transition-timing-function: ease-in-out;\n          -moz-transition-timing-function: ease-in-out;\n            -o-transition-timing-function: ease-in-out;\n                transition-timing-function: ease-in-out; */\n      }\n      .j-showmore.is-visible {\n        left: 0px;\n        max-height: 400px;\n        -webkit-transition: max-height .25s ease-in-out;\n           -moz-transition: max-height .25s ease-in-out;\n             -o-transition: max-height .25s ease-in-out;\n                transition: max-height .25s ease-in-out;\n\n    /* -webkit-transition-timing-function: ease-in-out;\n          -moz-transition-timing-function: ease-in-out;\n            -o-transition-timing-function: ease-in-out;\n                transition-timing-function: ease-in-out; */\n      }\n      .j-fader {\n        position: absolute;\n        z-index: 100;\n        width: ").concat(cssValues.fbWidth, ";\n        height: ").concat(cssValues.fbHeight, ";\n        text-align: center;\n        vertical-align: bottom;\n        cursor: pointer;\n        border-bottom: ").concat(cssValues.fbBottomBorder, ";\n        background: -moz-linear-gradient(top, ").concat(cssValues.fbStartColor, ", ").concat(cssValues.fbEndColor, " 60%);\n        background: -webkit-linear-gradient(top, ").concat(cssValues.fbStartColor, ", ").concat(cssValues.fbEndColor, " 60%);\n        background: linear-gradient(to bottom, ").concat(cssValues.fbStartColor, ", ").concat(cssValues.fbEndColor, " 60%);\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='").concat(cssValues.fbStartColor, "', endColorstr='").concat(cssValues.fbEndColor, "',GradientType=0 );\n        /* box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.45); */\n      }\n      .hs-code .j-fader {\n        border-bottom: 5px solid #f2f2f2;\n        background: -moz-linear-gradient(top, rgba(255, 255, 255, 0.6), #ffffff 60%);\n        background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.6), #ffffff 60%);\n        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), #ffffff 60%);\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );\n      }\n      .j-fader > .j-fader_button {\n        position: absolute;\n        bottom: -6px;\n        left: 50%;\n        display: inline-block;\n        width:  ").concat(cssValues.fbButtonWidth, ";\n        height: ").concat(cssValues.fbButtonHeight, ";\n        padding: 4px 6px;\n        margin: 0 auto;\n        font-size: 0.8rem;\n        line-height: ").concat(cssValues.fbButtonLineHeight, ";\n        color: ").concat(cssValues.fbButtonTextColor, ";\n        white-space: nowrap;\n        cursor: pointer;\n        background-color: ").concat(cssValues.fbButtonBackground, ";\n        border: 1px solid ").concat(cssValues.fbButtonBorderColor, ";\n        border-bottom: 0 solid ").concat(cssValues.fbButtonBorderColor, ";\n        border-radius: ").concat(cssValues.fbButtonBorderRadius, ";\n        box-shadow: 0 -2px 4px 0 $hs-black--a45;\n        transform: translateX(-50%);\n      }\n      .j-fader > .j-fader_button::before {\n        display: block;\n        position: absolute;\n        left: 50%;\n        top: 5%;\n        z-index: 100;\n        transform: translate(-50%);\n        width: 100%;\n        content: '").concat(cssValues.fbInitButtonText, "';\n        font-size: 0.75rem;\n      }\n      .j-fader > .j-fader_button.is-visible::before {\n        content: '").concat(cssValues.fbOpenButtonText, "';\n      }\n      .j-fader > .j-fader_button:hover {\n        background-color: ").concat(cssValues.fbButtonBackgroundHover, ";\n        color: ").concat(cssValues.fbButtonTextColorHover, ";\n      }\n      .j-fader > .j-fader_button:focus {\n        outline-color: ").concat(cssValues.fbButtonBorderColorFocus, ";\n        background-color: ").concat(cssValues.fbButtonBorderColorFocus, ";\n        color: ").concat(cssValues.fbButtonTextColorFocus, ";\n        border: 1px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n        border-bottom: 5px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n        box-shadow: unset;\n      }\n      .j-fader > .j-fader_button.is-visible {\n        background-color: ").concat(cssValues.fbButtonBorderColorFocus, ";\n        color: ").concat(cssValues.fbButtonTextColorFocus, ";\n        border: 1px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n        border-bottom: 5px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n      }\n      .j-fader > .j-fader.is-visible {\n        border-bottom: 5px solid ").concat(cssValues.fbButtonBorderColorFocus, ";\n      }\n      @keyframes slideOpen {\n        from { height: 300px; }\n        to { height: 100%; }\n      }\n      @keyframes slideClosed {\n        from { height: 100%; }\n        to { height: 300px; }\n      }\n    "); // appendCSS(fbCSS)

    return fbCSS;
  }
};

var _default = ShowMore;
exports.default = _default;
ShowMore();