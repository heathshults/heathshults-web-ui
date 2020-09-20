/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
let height;
let FadeBar = () => {};
document.addEventListener('DOMContentLoaded', FadeBar = () => {
  const VERSION = '0.0.1';
  const NAME = 'ShowMore_FadeBar';
  console.log(`Now using ${NAME} version ${VERSION}`);
  // prepare the style tage for some css luvin
  const styleEl = document.createElement('style');
  const headEl = document.head || document.getElementsByTagName('head')[0];

  const options = settings();
  const cssText = FadeBarCSS(options);
  // console.log(options);

  styleEl.setAttribute('id', 'fbCSS');
  styleEl.textContent = cssText;
  headEl.append(styleEl);

  try {
    const theFaders = Array.prototype.slice.call(document.querySelectorAll('.j-showmore'));

    theFaders.forEach((node) => {
      height = node.offsetHeight;
      console.log(height)
      const theContainer = node;
      const theFadeBar = document.createElement('div');
      const theShowMoreButton = document.createElement('button');


      theFadeBar.classList.add('j-fader');
      theShowMoreButton.classList.add('j-fader_button');

      theShowMoreButton.innerText = options.fbInitButtonText;

      theFadeBar.appendChild(theShowMoreButton);
      theContainer.appendChild(theFadeBar);

      theShowMoreButton.addEventListener('click', (ev) => {
        ev.preventDefault()
        ev.target.classList.toggle('is-visible');
        ev.target.parentNode.classList.toggle('is-visible');
        ev.target.closest('.j-showmore').classList.toggle('is-visible');
        if (ev.target.classList.contains('is-visible')){
          ev.target.parentElement.style.height = height
        }
        if(ev.target.innerText === options.fbInitButtonText) {
          ev.target.innerText = options.fbOpenButtonText
        } else {
          ev.target.innerText = options.fbInitButtonText
        }
      }, false);

      theShowMoreButton.addEventListener('mouseout', (ev) => {
        ev.target.blur();
      });
    });
  } catch (err) {
    console.error(err);
  }
});
// module.exports = FadeBar;

function appendCSS(styles) {
  return () => {
    const styleEl = document.createElement('style');
    const headEl = document.head || document.getElementsByTagName('head')[0];
    // const cssStyles = css

    styleEl.textContent = styles;
    headEl.appendChild(styleEl);

    styleEl.type = 'text/css';
    if (styleEl.styleSheet) {
      // This is required for IE8 and below.
      styleEl.styleSheet.cssText = styles;
    } else {
      styleEl.appendChild(document.createTextNode(styles));
    }
  };
}

function defaults() {
  return {
    fbWidth: '100%',
    fbHeight: '50px',
    fbBoxHeight: '300px',
    fbStartColor: 'rgba(0,0,0,0)',
    fbEndColor: 'rgba(0,0,0,0)',
    fbBottomBorder: '5px solid #f2f2f2',
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
    fbButtonWidth: '120px',
    fbButtonHeight: '20px',
    fbClassList: 'u-text-center',
    fbBtnClassList: 'btn btn-primary mx-auto',
  };
}
function settings(opts) {
  // let ShowMoreSettings = typeof null;
  let fbCon = [];
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
    fadebarbButtonClassList: 'btn mx-auto',
  };

  const fbActionBtn = {
    showMore: 'Show More',
    showLess: 'Show Less',
    positionX: 'center',
    positionY: 'bottom',
  };
  console.log('styles:')
  console.log(styles)
  console.log('fbActionBtn:')
  console.log(fbActionBtn)
  console.log('fbCon:')
  console.log(fbCon)
  
  try {
    const options = Object.assign(defaults(), styles, fbActionBtn, fbCon);
  // cssBuilder(options);
    return options;
  }
  catch(e) {
    console.log('object assign error: ' + e)
  }
}
let FadeBarCSS = () => {};
// document.addEventListener('DOMContentLoaded', FadeBarCSS = () => {
FadeBarCSS = (options) => {
  const cssValues = options;

  const fbCSS = `
    .j-showmore {
      position: relative;
      height: ${cssValues.fbBoxHeight};
      overflow: hidden;
      padding-bottom: 60px;
      -webkit-transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);
         -moz-transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);
           -o-transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);
              transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);

      -webkit-transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
        -moz-transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
          -o-transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
              transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
    }
    .j-showmore.is-visible {
      height: 100%;
      -webkit-transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);
         -moz-transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);
           -o-transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);
              transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);

      -webkit-transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
        -moz-transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
          -o-transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
              transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
    }
    .j-showmore .j-fader {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 100;
      width: ${cssValues.fbWidth};
      height: ${cssValues.fbHeight};
      text-align: center;
      vertical-align: bottom;
      cursor: pointer;
      border-bottom: ${cssValues.fbBottomBorder};
      background: -moz-linear-gradient(top, ${cssValues.fbStartColor}, ${cssValues.fbEndColor} 60%);
      background: -webkit-linear-gradient(top, ${cssValues.fbStartColor}, ${cssValues.fbEndColor} 60%);
      background: linear-gradient(to bottom, ${cssValues.fbStartColor}, ${cssValues.fbEndColor} 60%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${cssValues.fbStartColor}', endColorstr='${cssValues.fbEndColor}',GradientType=0 );
      box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.45);
    }
    .hs-code .j-fader {
      border-bottom: 5px solid #f2f2f2;
      background: -moz-linear-gradient(top, rgba(255, 255, 255, 0.6), #ffffff 60%);
      background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.6), #ffffff 60%);
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), #ffffff 60%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
    }
    .j-showmore .j-fader_button {
      display: inline-block;
      cursor: pointer;
      position: absolute;
      bottom: -6px;
      left: 50%;
      margin: 0 auto;
      padding: 2px 6px 4px 6px;
      background-color: ${cssValues.fbButtonBackground};
      border: 1px solid ${cssValues.fbButtonBorderColor};
      border-bottom: 5px solid ${cssValues.fbButtonBorderColor};
      font-size: 0.8rem;
      color: ${cssValues.fbButtonTextColor};
      line-height: ${cssValues.fbButtonLineHeight};
      width: ${cssValues.fbButtonWidth};
      height: ${cssValues.fbButtonHeight};
      white-space: nowrap;
      transform: translateX(-50%);
      box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.45);
    }
    .j-showmore .j-fader_button::before {
      display: block;
      position: absolute;
      left: 50%;
      top: 5%;
      z-index: 100;
      transform: translate(-50%);
      width: 100%;
      content: '${cssValues.fbInitButtonText}';
      font-size: 0.75rem;
    }
    .j-showmore .j-fader_button.is-visible::before {
      content: '${cssValues.fbOpenButtonText}';
    }
    .j-showmore .j-fader_button:hover {
      background-color: ${cssValues.fbButtonBackgroundHover};
      color: ${cssValues.fbButtonTextColorHover};
    }
    .j-showmore .j-fader_button:focus {
      outline-color: ${cssValues.fbButtonBorderColorFocus};
      background-color: ${cssValues.fbButtonBorderColorFocus};
      color: ${cssValues.fbButtonTextColorFocus};
      border: 1px solid ${cssValues.fbButtonBorderColorFocus};
      border-bottom: 5px solid ${cssValues.fbButtonBorderColorFocus};
      box-shadow: unset;
    }
    .j-showmore .j-fader_button.is-visible {
      background-color: ${cssValues.fbButtonBorderColorFocus};
      color: ${cssValues.fbButtonTextColorFocus};
      border: 1px solid ${cssValues.fbButtonBorderColorFocus};
      border-bottom: 5px solid ${cssValues.fbButtonBorderColorFocus};
    }
    .j-showmore .j-fader.is-visible {
      border-bottom: 5px solid ${cssValues.fbButtonBorderColorFocus};
    }
    @keyframes slideOpen {
      from { height: 300px; }
      to { height: 100%; }
    }
    @keyframes slideClosed {
      from { height: 100%; }
      to { height: 300px; }
    }
  `;

  // appendCSS(fbCSS)
  return fbCSS;
};
