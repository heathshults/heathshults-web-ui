"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeSwitcher = void 0;

/* eslint-disable no-console */
function ThemeSwitcher() {
  // ** ====== MODE WIDHET ====== ** //
  // (() => {
  var $dm_btn = $('#mode_widget');
  var lsGetMode = localStorage.getItem('dark_mode'); // set button text

  if (lsGetMode === 'fasle') {
    setModeText(true); //$dm_btn.html('<span class="which-mode">Dark Mode<span id="mode_icon" class="fa fa-moon-o mode-icon"></span></span>')
  } else {
    setModeText(false); // $dm_btn.html('<span class="which-mode">Light Mode<span id="mode_icon" class="fa fa-sun-o mode-icon"></span></span>')
  }

  function setModeText(mode) {
    var darkHTML = '<span class="which-mode"> Dark Mode<i id="mode_icon" class="fa fa-moon mode-icon"></i></span>';
    var lightHTML = '<span class="which-mode"> Light Mode<i id="mode_icon" class="fa fa-sun mode-icon"></i></span>';
    var modeHTML;
    mode === 'true' ? modeHTML = darkHTML : modeHTML = lightHTML;
    $dm_btn.html(modeHTML);
  }

  function setMode(mode) {
    localStorage.setItem('dark_mode', "".concat(mode));
    document.querySelector('#darkmode').disabled = mode;

    if (mode === 'true') {
      document.querySelector('#darkmode').disabled = false;
      $dm_btn.html('<span class="which-mode"> Dark Mode<i id="mode_icon" class="fa fa-moon mode-icon"></i></span>'); // document.querySelector('link[href="css/theme-dark-mode.css"]').disabled = false;
    } else {
      $dm_btn.html('<span class="which-mode"> Light Mode<i id="mode_icon" class="fa fa-sun mode-icon"></i></span>');
    }

    return setModeText(mode);
  } // Theme switcher


  $dm_btn.on('click', function (event) {
    event.preventDefault();

    if (localStorage.getItem('dark_mode') === 'true') {
      setMode('false'), console.log('set to false');
    } else {
      setMode('true'), console.log('set to true');
    }

    return;
  }); // });
  // eslint-disable-next-line no-undef
}

var _ThemeSwitcher = ThemeSwitcher;
exports.ThemeSwitcher = _ThemeSwitcher;
ThemeSwitcher();