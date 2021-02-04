/* eslint-disable no-console, no-undef, no-unused-vars, @typescript-eslint/no-unused-vars */
/*!
 * HeathShults.com - Heath Shults v1.0 (http://heathshults.com)
 * Copyright 2020-2020 Heath-Shults
 * Licensed under MIT (https://github.com/heathshults/heathshults.com/LICENSE)
 */

export default class HSNavbar {
  public navbar: HTMLElement;
  public navLink: any;
  public navLinks: Array<any>;
  public options: Record<string, any>;
  public defaults = {
    navSelector: 'hs-navbar',
    navLinkSelector: 'hs-navbar_item',
    autoCollapse: false,
    fixedTop: false
  }

  constructor(
    public navSelector: string, 
    public navLinkSelector: string,
    public userOptions: Record<string, any>) 
    {
      this.options = {...this.defaults, ...this.userOptions};
      this.navbar = document.querySelector(navSelector);
      this.navLinks = Array.prototype.slice.call(document.querySelectorAll(this.navLinkSelector));
      
      this.navbar.addEventListener('click', () => {
        this.scrollHandler();
      }, true);
      
      window.addEventListener('scroll', () => {
        this.scrollHandler();
      }, true);
      
      this.scrollHandler();
    }
    scrollHandler(): void {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {        
        this.navbar.classList.add('hs-navbar-semitransparent');
      } else {
        this.navbar.classList.remove(('hs-navbar-semitransparent'));
      }
      return;
    }
      return;
    
      
    // collapseResponsiveNavbar = (): any => {
    //   // event.preventDefault;
    //   // this.navLink = event.target as HTMLAnchorElement;
    //   this.collapse();
      
    //   return;
    // }
    
}

new HSNavbar('#mainNav', '.hs-navbar_link', {autoCollapse: true, fixedTop: true});
 
