/** 
 * This function sets the greeting message. It uses localStorage  
 * to remember if this is a first time visit or a repeat visit.
 * @function anonymous
 * @event    window.onload           Load the greeting before it is visible.
 * @const    siteStorage             Using local storage to track visits.
 * @const    visited                 Has the visitor been here before.
 * @var      sessionStart            DateTime of visit.
 * @var      sessionEnd              DateTime now or exit.
 * @const    greetingSpan            Where we will place the customized greeting.
 * @var      greetingHTML            The text to be set in greetingSpan.
 * @function setGGreetingText        Sets the text in greetingSpan.
 * 
 */
window.onload = function setGreetingText(ts) {
  const siteStorage =     window.localStorage;
  const siteSession =     window.sessionStorage;
  const visited =         siteStorage.getItem('visited');
  const greetingSpan =    document.querySelector('#greetingLine');
  const   sessionStart =    new Date().getTime();
  const   sessionEnd =      new Date().getTime();
  let   elapsed;
  let   greetingHTML;
  
  function elapsedTime() {
    return elapsed = sessionEnd - siteSession.getItem('sessionStart');
  }
  
  siteSession.setItem('sessionStart', sessionStart);
  if (!visited || visited === '' || typeof visited === 'undefined' ) {
    siteStorage.setItem('visited', 1);
    
  } else if (visited === '1') {
    if (Math.floor(elapsedTime() > 30) ) {
      greetingSpan.innerHTML = `<p class="hs-intro-heading">Welcome Back!</p>`;
    } else {
      greetingSpan.innerHTML = `
      <p class="hs-intro-lead-in">
      Hello, I'm Heath.
      </p>
      <p class="hs-intro-subheading">
      Must be your first time here?
      <!-- It's Nice To Meet You -->
      </p>
      <p class="hs-intro-heading">Welcome!</p>`;
    }
  }
  return;
};

