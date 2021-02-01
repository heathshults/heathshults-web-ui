/* eslint-disable no-console, no-undef, no-unused-vars, @typescript-eslint/no-unused-vars */
/*!
 * HeathShults.com - Heath Shults v1.0 (http://heathshults.com)
 * Copyright 2020-2020 Heath-Shults
 * Licensed under MIT (https://github.com/heathshults/heathshults.com/LICENSE)
 */

 export default class NavScroller {
   public mainNav: any;
   public navLinks: Array<any>;
   public navCollapse: HTMLDivElement;
   
  constructor(navSelector: string, navLinkSelector: string) {
    this.mainNav = document.querySelector(navSelector);
    this.navLinks = Array.prototype.slice.call(document.querySelectorAll(navLinkSelector));
    this.navCollapse = document.querySelector('.navbar-collapse');
    console.log('mainNav');
    console.log(this.mainNav);
    
    // Closes responsive menu when a scroll trigger link is clicked
    this.navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault;
        this.navCollapse.classList.add('hide');
      });
    });
    // Collapse Navbar
    function navbarCollapse(): any {
      console.log('collapse: ' + this.mainNav);
      if (this.mainNav.offsetTtop > 100) {
        this.mainNav.classList.add("navbar-shrink");
      } else {
       this.mainNav.classList.remove("navbar-shrink");
      }
      return;
    }

    // Collapse now if page is not at top
    navbarCollapse();
    
    // Collapse the navbar when page is scrolled
    window.onscroll = function(e): any {
      e.preventDefault;
      return navbarCollapse();
    };
  }
}

