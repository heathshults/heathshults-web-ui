/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function ThemeSwitcher() {
  
  // ** ====== MODE WIDHET ====== ** //
  // (() => {
    const $dm_btn      = document.querySelector('#mode_widget');
    const lsGetMode    = localStorage.getItem('dark_mode');

    // set button text
      if (lsGetMode === 'fasle') {
        setModeText(true);
        //$dm_btn.html('<span class="which-mode">Dark Mode<span id="mode_icon" class="fa fa-moon-o mode-icon"></span></span>')
      } else {
        setModeText(false);
        // $dm_btn.html('<span class="which-mode">Light Mode<span id="mode_icon" class="fa fa-sun-o mode-icon"></span></span>')
      }

    function setModeText(mode) {
      const darkHTML = '<span class="which-mode"> Dark Mode<i id="mode_icon" class="fa fa-moon mode-icon"></i></span>';
      const lightHTML = '<span class="which-mode"> Light Mode<i id="mode_icon" class="fa fa-sun mode-icon"></i></span>';
      let modeHTML;
      mode === 'true' ? modeHTML = darkHTML : modeHTML = lightHTML;
      $dm_btn.innerHTML = modeHTML;
    }

    function setMode(mode) {
      const darkmodeLinkTag: HTMLLinkElement = document.querySelector('#darkmode');
      localStorage.setItem('dark_mode',`${mode}`);
      darkmodeLinkTag.disabled=mode;

      if (mode==='true') {
        darkmodeLinkTag.disabled=false;
        $dm_btn.innerHTML = '<span class="which-mode"> Dark Mode<i id="mode_icon" class="fa fa-moon mode-icon"></i></span>'; // document.querySelector('link[href="css/theme-dark-mode.css"]').disabled = false;

        // document.querySelector('link[href="css/theme-dark-mode.css"]').disabled = false;
      } else {
        $dm_btn.innerHTML = '<span class="which-mode"> Light Mode<i id="mode_icon" class="fa fa-sun mode-icon"></i></span>';
      }
      return setModeText(mode);
    }

    // Theme switcher
    $dm_btn.addEventListener('click', (event) => {
      event.preventDefault();
      if (localStorage.getItem('dark_mode')==='true') {
        setMode('false'), console.log('set to false');
      } else {
        setMode('true'), console.log('set to true');
      }
      return;
    });
    
  // });
// eslint-disable-next-line no-undef
} 

ThemeSwitcher();
