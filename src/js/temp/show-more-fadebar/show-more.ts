"use strict";

exports.__esModule = true;
/* eslint-disable no-unused-vars */

const log = console.log;

const ShowMore =
/** @class */
function () {
  // return new Promise((resolve, reject) => {
  //   try {
  function ShowMore() {
    const _this = this;

    const VERSION = '0.0.1';
    const NAME = 'ShowMore_FadeBar';
    log("Now using " + NAME + " version " + VERSION); // prepare the style tage for some css luvin

    this.styleEl = document.createElement('style');
    this.headEl = document.head || document.getElementsByTagName('head')[0];
    this.options = settings();
    this.cssText = FadeBarCSS(this.options); // log(this.options);

    this.styleEl.setAttribute('id', 'fbCSS');
    this.styleEl.textContent = this.cssText; // this.headEl.append(this.styleEl);

    try {
      const theFaders = Array.prototype.slice.call(document.querySelectorAll('.j-showmore'));
      theFaders.forEach(function (node) {
        const theContainer = node;
        const theFadeBar = document.createElement('div');
        const theShowMoreButton = document.createElement('button'); // const zindex = 'auto';

        theFadeBar.classList.add('j-fader');
        theShowMoreButton.classList.add('j-fader_button');
        theShowMoreButton.innerText = _this.options.fbInitButtonText;
        theFadeBar.appendChild(theShowMoreButton);
        theContainer.before(theFadeBar);
        _this.openHeight = theContainer.offsetHeight;
        log(_this.openHeight);
        theShowMoreButton.addEventListener('click', function (ev) {
          ev.preventDefault();
          const evButon = ev.target;
          evButon.classList.toggle('is-visible');
          const thisFadeBar = evButon.parentElement;
          thisFadeBar.classList.toggle('is-visible');
          thisFadeBar.nextElementSibling.classList.toggle('is-visible');
          evButon.classList.contains('is-visible') ? evButon.innerText = _this.options.fbOpenButtonText : evButon.innerText = _this.options.fbInitButtonText;
        }, false);
        theShowMoreButton.addEventListener('mouseout', function (ev) {
          const evButton = ev.target;
          evButton.blur();
        });
      });
    } catch (err) {
      console.error(err);
    }

    function appendCSS(styles) {
      // return;  comment out below for no js css
      this.styleEl = document.createElement('style');
      this.headEl = document.head || document.getElementsByTagName('head')[0]; // const cssStyles = css

      this.styleEl.textContent = styles;
      this.headEl.appendChild(this.styleEl);
      this.styleEl.type = 'text/css';

      if (this.styleEl.styleSheet) {
        // This is required for IE8 and below.
        this.styleEl.styleSheet["this"].cssText = styles;
      } else {
        this.styleEl.appendChild(document.createTextNode(styles));
      }

      return;
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
      let ShowMoreSettings;
      let fbCon;

      if (typeof ShowMoreSettings === 'undefined') {
        fbCon = defaults();
      } else {
        fbCon = ShowMoreSettings;
      }

      const styles = {
        classBase: 'button-show-more',
        classActive: 'is-fully-opened',
        classFocused: 'is-focused',
        fadebarClassList: 'animate text-center',
        fadebarbButtonClassList: 'btn mx-auto'
      };
      const fbActionBtn = {
        // showMore: 'Show More',
        // showLess: 'Show Less',
        positionX: 'center',
        positionY: 'bottom'
      };

      try {
        const mergedOptions = Object.assign(defaults(), styles, fbActionBtn, fbCon);
        log('mergedOptions');
        log(mergedOptions); // cssBuilder(this.options);

        return mergedOptions;
      } catch (e) {
        log('object assign error: ' + e);
      }
    } // document.addEventListener('DOMContentLoaded', FadeBarCSS = () => {


    function FadeBarCSS(options) {
      const cssValues = options;
      const fbCSS = "\n          .j-showmore {\n            position: absolute;\n            left: -9999px;\n            min-height: " + cssValues.fbBoxHeight + ";\n            max-height: 400px;\n            overflow: hidden;\n            padding-bottom: " + cssValues.fbBoxPaddingBottom + ";\n            -webkit-transition: max-height .25s ease-in-out;\n               -moz-transition: max-height .25s ease-in-out;\n                 -o-transition: max-height .25s ease-in-out;\n                    transition: max-height .25s ease-in-out;\n\n            /* -webkit-transition-timing-function: ease-in-out;\n              -moz-transition-timing-function: ease-in-out;\n                -o-transition-timing-function: ease-in-out;\n                    transition-timing-function: ease-in-out; */\n          }\n          .j-showmore.is-visible {\n            left: 0px;\n            max-height: 400px;\n            -webkit-transition: max-height .25s ease-in-out;\n               -moz-transition: max-height .25s ease-in-out;\n                 -o-transition: max-height .25s ease-in-out;\n                    transition: max-height .25s ease-in-out;\n\n        /* -webkit-transition-timing-function: ease-in-out;\n              -moz-transition-timing-function: ease-in-out;\n                -o-transition-timing-function: ease-in-out;\n                    transition-timing-function: ease-in-out; */\n          }\n          .j-fader {\n            position: absolute;\n            z-index: 100;\n            width: " + cssValues.fbWidth + ";\n            height: " + cssValues.fbHeight + ";\n            text-align: center;\n            vertical-align: bottom;\n            cursor: pointer;\n            border-bottom: " + cssValues.fbBottomBorder + ";\n            background: -moz-linear-gradient(top, " + cssValues.fbStartColor + ", " + cssValues.fbEndColor + " 60%);\n            background: -webkit-linear-gradient(top, " + cssValues.fbStartColor + ", " + cssValues.fbEndColor + " 60%);\n            background: linear-gradient(to bottom, " + cssValues.fbStartColor + ", " + cssValues.fbEndColor + " 60%);\n            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='" + cssValues.fbStartColor + "', endColorstr='" + cssValues.fbEndColor + "',GradientType=0 );\n            /* box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.45); */\n          }\n          .hs-code .j-fader {\n            border-bottom: 5px solid #f2f2f2;\n            background: -moz-linear-gradient(top, rgba(255, 255, 255, 0.6), #ffffff 60%);\n            background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.6), #ffffff 60%);\n            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), #ffffff 60%);\n            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );\n          }\n          .j-fader > .j-fader_button {\n            position: absolute;\n            bottom: -6px;\n            left: 50%;\n            display: inline-block;\n            width:  " + cssValues.fbButtonWidth + ";\n            height: " + cssValues.fbButtonHeight + ";\n            padding: 4px 6px;\n            margin: 0 auto;\n            font-size: 0.8rem;\n            line-height: " + cssValues.fbButtonLineHeight + ";\n            color: " + cssValues.fbButtonTextColor + ";\n            white-space: nowrap;\n            cursor: pointer;\n            background-color: " + cssValues.fbButtonBackground + ";\n            border: 1px solid " + cssValues.fbButtonBorderColor + ";\n            border-bottom: 0 solid " + cssValues.fbButtonBorderColor + ";\n            border-radius: " + cssValues.fbButtonBorderRadius + ";\n            box-shadow: 0 -2px 4px 0 $hs-black--a45;\n            transform: translateX(-50%);\n          }\n          .j-fader > .j-fader_button::before {\n            display: block;\n            position: absolute;\n            left: 50%;\n            top: 5%;\n            z-index: 100;\n            transform: translate(-50%);\n            width: 100%;\n            content: '" + cssValues.fbInitButtonText + "';\n            font-size: 0.75rem;\n          }\n          .j-fader > .j-fader_button.is-visible::before {\n            content: '" + cssValues.fbOpenButtonText + "';\n          }\n          .j-fader > .j-fader_button:hover {\n            background-color: " + cssValues.fbButtonBackgroundHover + ";\n            color: " + cssValues.fbButtonTextColorHover + ";\n          }\n          .j-fader > .j-fader_button:focus {\n            outline-color: " + cssValues.fbButtonBorderColorFocus + ";\n            background-color: " + cssValues.fbButtonBorderColorFocus + ";\n            color: " + cssValues.fbButtonTextColorFocus + ";\n            border: 1px solid " + cssValues.fbButtonBorderColorFocus + ";\n            border-bottom: 5px solid " + cssValues.fbButtonBorderColorFocus + ";\n            box-shadow: unset;\n          }\n          .j-fader > .j-fader_button.is-visible {\n            background-color: " + cssValues.fbButtonBorderColorFocus + ";\n            color: " + cssValues.fbButtonTextColorFocus + ";\n            border: 1px solid " + cssValues.fbButtonBorderColorFocus + ";\n            border-bottom: 5px solid " + cssValues.fbButtonBorderColorFocus + ";\n          }\n          .j-fader > .j-fader.is-visible {\n            border-bottom: 5px solid " + cssValues.fbButtonBorderColorFocus + ";\n          }\n          @keyframes slideOpen {\n            from { height: 300px; }\n            to { height: 100%; }\n          }\n          @keyframes slideClosed {\n            from { height: 100%; }\n            to { height: 300px; }\n          }\n        ";
      return appendCSS(fbCSS); // return fbCSS;
    } // resolve(true);
    //   }
    //   catch(evt) {
    //     log(`ERROR: ${evt}`);
    //     reject(false);
    //   }
    // });

  }

  return ShowMore;
}();

exports["default"] = ShowMore; // export default ShowMore;

new ShowMore();
