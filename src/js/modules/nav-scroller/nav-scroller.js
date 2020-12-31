/* eslint-disable no-console */
/*!
 * HeathShults.com - Heath Shults v1.0 (http://heathshults.com)
 * Copyright 2020-2020 Heath-Shults
 * Licensed under MIT (https://github.com/heathshults/heathshults.com/LICENSE)
 */
/* eslint-disable no-undef, no-unused-vars */

// (function($) {
//   'use strict';

(! function(t) {
  //   "use strict";
  //   t("a.js-scroll-trigger").on("click",function(a){
  //     var o=t(this);
  //     t("html, body").stop().animate({
  //       scrollTop:t(o.attr("href")).offset().top-50},1250,
  //       "easeInOutExpo"),
  //     a.preventDefault();
  //   }),
  //   t("body").scrollspy({
  //     target:".navbar.fixed-top",offset:51
  //   }),
  //   t(".navbar-collapse ul li a").on(function(){
  //     t(".navbar-toggle:visible").on();
  //   }),
  //    t("#mainNav").affix({offset:{top:100}});

  // }(jQuery);
  let mainNav = document.querySelector("#mainNav");
  let triggers = document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])');
  // scrolling nav
  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault;
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $("[name="+this.hash.slice(1)+"]");
      if (target.length) {
        window.scrollTo({top: 0, behavior: 'smooth'});
        return false;
      }
    }
    });
  });
   
    


  
  // Closes responsive menu when a scroll trigger link is clicked
  document.addEventListener('click', (e) => {
    e.preventDefault;
    if (e.eventTarget.classList.contains('navbar-collapse')) {
      e.eventTarget.classList.add('hide');
    }
  });


  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '#mainNav',
    offset: 74
  });

  // Collapse Navbar
  function navbarCollapse() {
    if (mainNav.offsetTtop > 90) {
      mainNav.classList.add("navbar-shrink");
    } else {
      mainNav.classList.remove("navbar-shrink");
    }

  }

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  // document.addEventListener('scroll', function(e) {
  window.onscroll = function(e) {
    e.preventDefault;
    console.info(document.querySelector("#mainNav").offsetTtop);
    navbarCollapse();
  };
})(jQuery);

module.exports = {
  navbarCollapse: navbarCollapse
};
