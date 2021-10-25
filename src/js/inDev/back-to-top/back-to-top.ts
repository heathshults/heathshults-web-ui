/*!
 * back-to-top.js v1.0.0 - Adds smooth scrolling to scrolling events.
 * previous name scroll-smooth.js
 * https://bitbucket:8443/scm/flk/cxd-blueprint-ui.git
 * Copyright (c) 2018 Heath Shults
 * @license MIT
 */

 
/**
 * @description Provides convenientback to top of page functionality
 * 
 * @export
 * @class BackToTop
 */
export default class BackToTop {
  public buttonCssClass: string;
  public backToTopButton: HTMLElement;
  
  constructor(backToTopTagName?: string, buttonCssClass?: string) {
    if (!backToTopTagName) 
      backToTopTagName = 'body';
    if (!buttonCssClass || typeof buttonCssClass === 'undefined')
      buttonCssClass = 'hs-backtotop';
    else
      this.buttonCssClass = buttonCssClass;
      this.backToTopButton = document.createElement(backToTopTagName);
      this.backToTopButton.classList.add(this.buttonCssClass);
      this.backToTopButton.addEventListener('click', this.scrollToTop);
      
    const bodyTag = document.querySelector('body');
    bodyTag.appendChild(this.backToTopButton);
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { this.showHideButton() }; 
  }
  
  /**
   * @description Detects when page has been scrolled at least 20px down
   * and fires css to show or hide the back to top button.
   * 
   */
  showHideButton(): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.backToTopButton.style.display = "inline-block";
    }
    else {
      this.backToTopButton.style.display = "none";
    }
    
    return;
  }
  
  /**
   * @description When the user clicks on the button, scroll to the top of the document.
   * @param e {UIEvent}
   */
  scrollToTop(e: UIEvent): void {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
    
    return;
  }
}

new BackToTop();
