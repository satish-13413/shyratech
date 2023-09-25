/*
Template: NAHLA - Multipurpose Bootstrap 5 Template
Author: RRDevs
*/




(function($) {
    "use strict";
    $(document).ready(function () {

        /* =============================================
            # Mobile Menu init
        ===============================================*/
        $('#hamburger').on('click', function() {            
            $('.mobile-menu-wrapper').addClass('show');
            $('.body-overlay').addClass('opened');
        });

        $('#mobile-menu-close-btn').on('click', function() {            
            $('.mobile-menu-wrapper').removeClass('show'); 
            $('.body-overlay').removeClass('opened');
        });

        //metisMenu
        $("#mobile-menu").metisMenu();

        //offset menu
        $('#offcanvas-btn, #offcanvas-btn-2').on('click', function() {
            $('.offset-menu-wrapper').addClass('show');
            $('.body-overlay').addClass('opened');
        });

        $('#offset-menu-close-btn').on('click', function () {
            $('.offset-menu-wrapper').removeClass('show');
            $('.body-overlay').removeClass('opened');
        });

        //Search bar
        $('.search-btn').on('click', function () {
            $('.search-box').addClass('show');
        });
        $('.close-icon').on('click', function () {
            $('.search-box').removeClass('show');
        });

        $('.marquee-slider').marquee({
            duration: 20000,
            gap: 50,
            delayBeforeStart: 1,
            direction: 'left',
            duplicated: true,
        });
        /* =============================================
            # owl-carousel slider init
         ===============================================*/
        var heroSlider2 = $(".hero-slider-wrapper");
                
        heroSlider2.owlCarousel({        
            items: 1,
            animateIn: 'fadeIn',
            loop: true,
            autoplayTimeout: 5000,
            autoplay:true,
            center: true,
            dots:true,
            onInitialized: function(event){ 
                var $firstAnimatingElements = $('.owl-item', heroSlider2).eq(event.item.index).find('[data-animation]');
                doAnimations($firstAnimatingElements);
            }
        });
               
        
        /*** Animation */
        heroSlider2.on('changed.owl.carousel', function(event) {
            var $firstAnimatingElements = $('.owl-item', heroSlider2).eq(event.item.index).find('[data-animation]');
            doAnimations($firstAnimatingElements); 
        });
        
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        };



        $(".slider_logo").owlCarousel({
            items: 7,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            margin:50,
            autoplayTimeout: 4000,
            autoplay:true,
            dots: false,
            slideTransition: 'linear',
            autoplaySpeed: 6000,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 2,
                    margin:0,
                },
                // breakpoint from 480 up
                480 : {
                    items: 3,
                    margin:20,
                },
                // breakpoint from 768 up
                768 : {
                    items: 4,
                    margin:30,
                },
                // breakpoint from 992 up
                992 : {
                    items: 5,
                    margin:50,
                },
                // breakpoint from 1080 up
                1080 : {
                    items: 6,
                }
            }
        });
        $(".portfolio-slider-3").owlCarousel({
            items: 5,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            margin:50,
            autoplayTimeout: 5000,
            autoplay:true,
            dots: false,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                    margin:0,
                },
                // breakpoint from 480 up
                480 : {
                    items: 2,
                    margin:20,
                },
                // breakpoint from 768 up
                768 : {
                    items: 2,
                    margin:30,
                },
                // breakpoint from 992 up
                992 : {
                    items: 4,
                    margin:50,
                },
                // breakpoint from 1080 up
                1080 : {
                    items: 4,
                },
                // breakpoint from 1080 up
                1400 : {
                    items: 4,
                }
            }
        });
        $(".slider-text").owlCarousel({
            items: 5,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            margin:20,
            center: true,
            dots: false,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 1000,
            autoplaySpeed: 6000,
            autoplayHoverPause: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                    margin:0,
                },
                // breakpoint from 480 up
                480 : {
                    items: 2,
                },
                768 : {
                    items: 2,
                },
                1080 : {
                    items: 3,
                },
            }
        });

        $(".slider-texts").owlCarousel({
            items: 7,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            margin:50,
            autoplayTimeout:800,
            autoplay:true,
            center: true,
            dots: false,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                    margin:0,
                },
                // breakpoint from 480 up
                480 : {
                    items: 2,
                    margin:20,
                },
                // breakpoint from 768 up
                768 : {
                    items: 3,
                    margin:30,
                },
                // breakpoint from 992 up
                992 : {
                    items: 4,
                    margin:50,
                },
                // breakpoint from 1080 up
                1080 : {
                    items: 5,
                }
            }
        });
        $(".testimonial-slider").owlCarousel({
            items: 7,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            margin:20,
            autoplayTimeout: 5000,
            autoplay:true,
            center: true,
            dots: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                    margin:0,
                },
                // breakpoint from 480 up
                480 : {
                    items: 1,
                    margin:20,
                },
                // breakpoint from 768 up
                768 : {
                    items: 2,
                    margin:20,
                },
                // breakpoint from 992 up
                992 : {
                    items: 2,
                    margin:20,
                },
                // breakpoint from 1080 up
                1080 : {
                    items: 3,
                }
            }
        });
        $(".portfolio-slider").owlCarousel({
            items: 4,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            margin:20,
            autoplayTimeout: 5000,
            autoplay:true,
            dots: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                    margin:0,
                },
                // breakpoint from 480 up
                480 : {
                    items: 1,
                    margin:20,
                },
                // breakpoint from 768 up
                768 : {
                    items: 2,
                    margin:20,
                },
                // breakpoint from 992 up
                992 : {
                    items: 2,
                    margin:20,
                },
                // breakpoint from 1080 up
                1080 : {
                    items: 3,
                },
                // breakpoint from 1400 up
                1400 : {
                    items: 3.5,
                }
            }
        });
         $(".testimonial-slider-widget").owlCarousel({
            items: 1,
            loop: true,
            autoplayTimeout: 5000,
            autoplay:true,
            center: true,
            dots: true,
        });

        $(".popup-video").magnificPopup({
            type: "iframe",
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                          '<div class="mfp-close"></div>'+
                          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
              
                patterns: {
                  youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
              
                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }
              
                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                  },
                  vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                  },
                  gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                  }
              
                  // you may add here more sources
              
                },
              
                srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
              }
        });
        $(".popup-link").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        $('.img-popup').magnificPopup({
            type: 'image',
          });

        /*==========================
          filtering Init
        ============================*/

        $('.container').imagesLoaded(function() {
            $('.portfolio-cat-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item'
                }
            });
        });
        /*==========================
           Scroll To Up Init
        ============================*/
        $.scrollUp({
            scrollName: 'scrollUp',
            topDistance: '300',
            topSpeed: 300,
            animation: 'fade',
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: '<i class="fal fa-angle-up"></i>', 
            activeOverlay: false,
          });
        // Sticky Menu
        $(window).scroll(function() {
            var Width = $(document).width();

            if ($("body").scrollTop() > 100 || $("html").scrollTop() > 150) {
                if (Width > 767) {
                    $("header").addClass("sticky");
                }
            } else {
                $("header").removeClass("sticky");
            }
        });

        $(window).on('load', function() {
            // Animate loader off screen
            const preloader = $(".preloader");
            preloader.addClass('loaded');
            preloader.delay(800).fadeOut();

            // wow js
            if ($(".wow").length) {
                var wow = new WOW({
                  boxClass: "wow",
                  animateClass: "animated",
                  mobile: true,
                  live: true
                });
                wow.init();
            }
        });

    }); // end document ready function

    // function loader() {
    //     $(window).on('load', function() {
    //         // Animate loader off screen
    //         $(".preloader").addClass('loaded');
    //         $(".preloader").delay(600).fadeOut();
    //     });
    // }
    // loader();

})(jQuery); // End jQuery