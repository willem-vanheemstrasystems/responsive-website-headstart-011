/* Custom Code */
$(document).ready(function () {

    // DEMO CODE
    // $('h1').click(function() {
    //     $(this).css('background-color', '#ff0000');
    // });

    /* Show sticky navigation when reaching features section */
    /* http://imakewebthings.com/waypoints/ */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px;' // act 60 pixels before the section is reached
        });

    /* Scroll on hero button clicked */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });
    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });

    /* Scroll on navigation menu button clicked */
    /* https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Animations on scroll */
    /* http://imakewebthings.com/waypoints/ */
    /* https://daneden.github.io/animate.css */
    $('.js--waypoint-1').waypoint(function(direction) {
      $('.js--waypoint-1').addClass('animated fadeIn');
    }, {
        offset: '50%' // show at 50% of the part of the page in view
    });

    $('.js--waypoint-2').waypoint(function(direction) {
      $('.js--waypoint-2').addClass('animated fadeInUp');
    }, {
        offset: '50%' // show at 50% of the part of the page in view
    });

    $('.js--waypoint-3').waypoint(function(direction) {
      $('.js--waypoint-3').addClass('animated fadeIn');
    }, {
        offset: '50%' // show at 50% of the part of the page in view
    });

    $('.js--waypoint-4').waypoint(function(direction) {
      $('.js--waypoint-4').addClass('animated pulse');
    }, {
        offset: '50%' // show at 50% of the part of the page in view
    });

    /* Mobile Navigation Button */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200); // opens and closes the main nav in 200 milliseconds
        // Switch icon
        if (icon.hasClass('ion-navicon-round')) {
          icon.addClass('ion-close-round');
          icon.removeClass('ion-navicon-round');
        } else {
          icon.addClass('ion-navicon-round');
          icon.removeClass('ion-close-round');
        }
    });

});