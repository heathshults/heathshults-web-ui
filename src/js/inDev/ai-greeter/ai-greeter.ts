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
export class setGreetingText {
  public siteStorage: Storage;     
  public siteSession: any;     
  public visited: any;         
  public greetingSpan: HTMLElement;
  public   sessionStart: Date;    
  public   sessionEnd: Date;
  elapsed;
  greetingHTML;
  
  constructor() {
    this.siteStorage = window.localStorage;
    this.siteSession = window.sessionStorage;
    this.visited = siteStorage.getItem('visited');
    this.greetingSpan = document.querySelector('#greetingLine');
    this.sessionStart = new Date().getTime();
    this.sessionEnd = new Date().getTime();
    this.greeting();
  }
  
  sessionbegin: any =  siteSession.getItem('sessionStart');
  
  elapsedTime():any {
    return elapsed = sessionEnd - siteSession.getItem('sessionStart');
  }
  greeting(): any {
    this.siteSession.setItem('sessionStart', sessionStart);
    if (!visited || visited === '' || typeof visited === 'undefined' ) {
      siteStorage.setItem('visited', 1);
      
    } else if (visited === '1') {
      if (Math.floor(this.elapsedTime() > 30) ) {
        greetingSpan.innerHTML = `<p class="hs-intro-heading">Welcome Back!</p>`;
      } else {
        greetingSpan.innerHTML = `
        <p class="hs-intro-lead-in">
        Hello, I'm Heath.
        </p>
        <p class="hs-intro-subheading">
        First time here?</p>
        <p>It's Nice To Meet You</p>
        <p class="hs-intro-heading">Welcome!</p>`;
      }
    }
  }
  return;
}
