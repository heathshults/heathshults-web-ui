/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
let openHeight;
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
  // headEl.append(styleEl);
  

  try {
    const theFaders = Array.prototype.slice.call(document.querySelectorAll('.j-showmore'));

    theFaders.forEach((node, index) => {
      const theContainer = node;
      const theFadeBar = document.createElement('div');
      const theShowMoreButton = document.createElement('button');
      const zindex = 'auto';
      
      
      theFadeBar.classList.add('j-fader');
      theFadeBar.style = `position: absolute; z-index: auto;`;
      theShowMoreButton.classList.add('j-fader_button');
      
      theShowMoreButton.innerText = options.fbInitButtonText;
      
      theFadeBar.appendChild(theShowMoreButton);
      theContainer.before(theFadeBar);
      openHeight = theContainer.offsetHeight;
      console.log(openHeight)

      theShowMoreButton.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.target.classList.toggle('is-visible');
        let thisFadeBar = ev.target.parentElement;
        thisFadeBar.classList.toggle('is-visible');
        thisFadeBar.nextElementSibling.classList.toggle('is-visible');
        
        ev.target.classList.contains('is-visible') ?  ev.target.innerText = options.fbOpenButtonText :
         ev.target.innerText = options.fbInitButtonText;
        
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
  return;
  // return () => {
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
    // showMore: 'Show More',
    // showLess: 'Show Less',
    positionX: 'center',
    positionY: 'bottom',
  };
  
  try {
    const options = Object.assign(defaults(), styles, fbActionBtn, fbCon);
    console.log('options')
    console.log(options)
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
      position: absolute;
      left: -9999px;
      min-height: ${cssValues.fbBoxHeight};
      max-height: 400px;
      overflow: hidden;
      padding-bottom: ${cssValues.fbBoxPaddingBottom};
      -webkit-transition: max-height .25s ease-in-out;
         -moz-transition: max-height .25s ease-in-out;
           -o-transition: max-height .25s ease-in-out;
              transition: max-height .25s ease-in-out;

      /* -webkit-transition-timing-function: ease-in-out;
        -moz-transition-timing-function: ease-in-out;
          -o-transition-timing-function: ease-in-out;
              transition-timing-function: ease-in-out; */
    }
    .j-showmore.is-visible {
      left: 0px;
      max-height: 400px;
      -webkit-transition: max-height .25s ease-in-out;
         -moz-transition: max-height .25s ease-in-out;
           -o-transition: max-height .25s ease-in-out;
              transition: max-height .25s ease-in-out;

  /* -webkit-transition-timing-function: ease-in-out;
        -moz-transition-timing-function: ease-in-out;
          -o-transition-timing-function: ease-in-out;
              transition-timing-function: ease-in-out; */
    }
    .j-fader {
      position: absolute;
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
      /* box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.45); */
    }
    .hs-code .j-fader {
      border-bottom: 5px solid #f2f2f2;
      background: -moz-linear-gradient(top, rgba(255, 255, 255, 0.6), #ffffff 60%);
      background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.6), #ffffff 60%);
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), #ffffff 60%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
    }
    .j-fader > .j-fader_button {
      position: absolute;
      bottom: -6px;
      left: 50%;
      display: inline-block;
      width:  ${cssValues.fbButtonWidth};
      height: ${cssValues.fbButtonHeight};
      padding: 4px 6px;
      margin: 0 auto;
      font-size: 0.8rem;
      line-height: ${cssValues.fbButtonLineHeight};
      color: ${cssValues.fbButtonTextColor};
      white-space: nowrap;
      cursor: pointer;
      background-color: ${cssValues.fbButtonBackground};
      border: 1px solid ${cssValues.fbButtonBorderColor};
      border-bottom: 0 solid ${cssValues.fbButtonBorderColor};
      border-radius: ${cssValues.fbButtonBorderRadius};
      box-shadow: 0 -2px 4px 0 $hs-black_45;
      transform: translateX(-50%);
    }
    .j-fader > .j-fader_button::before {
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
    .j-fader > .j-fader_button.is-visible::before {
      content: '${cssValues.fbOpenButtonText}';
    }
    .j-fader > .j-fader_button:hover {
      background-color: ${cssValues.fbButtonBackgroundHover};
      color: ${cssValues.fbButtonTextColorHover};
    }
    .j-fader > .j-fader_button:focus {
      outline-color: ${cssValues.fbButtonBorderColorFocus};
      background-color: ${cssValues.fbButtonBorderColorFocus};
      color: ${cssValues.fbButtonTextColorFocus};
      border: 1px solid ${cssValues.fbButtonBorderColorFocus};
      border-bottom: 5px solid ${cssValues.fbButtonBorderColorFocus};
      box-shadow: unset;
    }
    .j-fader > .j-fader_button.is-visible {
      background-color: ${cssValues.fbButtonBorderColorFocus};
      color: ${cssValues.fbButtonTextColorFocus};
      border: 1px solid ${cssValues.fbButtonBorderColorFocus};
      border-bottom: 5px solid ${cssValues.fbButtonBorderColorFocus};
    }
    .j-fader > .j-fader.is-visible {
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
