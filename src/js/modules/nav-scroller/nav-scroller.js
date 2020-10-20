/* eslint-disable no-unexpected-multiline */
const NavScrollerOptions = {
   navId: '#mainNav'
};
(($) => {
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,"")==
      this.pathname.replace(/^\//,"")&&
      location.hostname==this.hostname) {
      var target=$(this.hash);
      target=target.length
        ? target
        :$("[name="+this.hash.slice(1)+"]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top-72,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });
  
  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });
  
  
  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '#mainNav',
    offset: 74
  });
  
  // Collapse Navbar
  
  function navbarCollapse() {
    if ($("#mainNav").offset().top>90) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }
  
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).on('scroll', navbarCollapse);
  
  // const NavScrollerOptions = {
  //   navId: navId
  // };
 
})(jQuery);
