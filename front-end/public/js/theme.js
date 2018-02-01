$(function () {
    "use strict";

    $(document).ready(function () {
        init_scroll();
        int_introHeight();
        stickHeader();
        int_nav_menu_height();
        int_SliderPluguns();
        init_wow_animation();
        int_isotopPortfolio();
        int_lightbox();
        int_Elements();
    });

    $(window).load(function () {
        int_isotopPortfolio();

        // Site Preloader
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });

    });

    $(window).resize(function () {
        int_introHeight();
        stickHeader();
        int_nav_menu_height();
        int_SliderPluguns();
    });

    $(window).scroll(function () {
        stickHeader();
    });

    // ---------------------------------------------------------------------------------------------------------------------------->
    // SCROLL FUNCTIONS   ||-----------
    // ---------------------------------------------------------------------------------------------------------------------------->

    function init_scroll() {

        $('.scroll-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 2000);
            return false;
        });

        // Click To Down And Up Elements
        $('.scroll-down[href^="#"], .scroll-to-target[href^="#"]').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });

    };


    // ----------------------------------------------------------------
    // Backgrounds Image (Slider, Section, etc..)
    // ----------------------------------------------------------------
    var pageSection = $('.slide-bg-image, .bg-image');
    pageSection.each(function (indx) {

        if ($(this).attr("data-background-img")) {
            $(this).css("background-image", "url(" + $(this).data("background-img") + ")");
        }
    });

    // ----------------------------------------------------------------
    // Intro Height
    // ----------------------------------------------------------------
    function int_introHeight() {
        var windiwHeight = $(window).height();
        // Intro Height
        $('.js-fullscreen-height').css('height', windiwHeight);
    };


    // ----------------------------------------------------------------
    // Sticky Header
    // ----------------------------------------------------------------

    function stickHeader() {
        var scrolled = $(window).scrollTop();
        var windHeight = $(window).height();
        if (scrolled > 150) {
            $('.header').addClass('header-prepare');
        } else {
            $('.header').removeClass('header-prepare');
        }

        if (scrolled > 1) {
            $('.header').addClass('header-fixed');
        } else {
            $('.header').removeClass('header-fixed');
        }
    };


    // ----------------------------------------------------------------
    // Navigation Menu panel
    // ----------------------------------------------------------------
    var mobile_menu_icon = $(".nav-mobile");
    var mobile_menu = $(".nav-menu");

    // Mobile menu max height
    function int_nav_menu_height() {
        mobile_menu.css("max-height", $(window).height() - $(".header").height() - 20 + "px"), $(window).width() <= 1024 ? $(".header").addClass("mobile-device") : $(window).width() > 1024 && ($(".header").removeClass("mobile-device"))
    };

    // Mobile menu toggle icon
    mobile_menu_icon.click(function () {
        if (!($(this).hasClass('active'))) {
            mobile_menu_icon.addClass('active');
            mobile_menu.addClass('active');
        }
        else if ($(this).hasClass('active')) {
            mobile_menu_icon.removeClass('active');
            mobile_menu.removeClass('active');
        }
    });


    // Dropdown Sub menu
    var menu_Sub = $(".menu-has-sub");
    var menu_Sub_Li;

    $(".mobile-device .menu-has-sub").find(".fa:first").removeClass("fa-angle-right").addClass("fa-angle-down");

    menu_Sub.click(function () {
        if ($(".header").hasClass("mobile-device")) {
            menu_Sub_Li = $(this).parent("li:first");
            if (menu_Sub_Li.hasClass("menu-opened")) {
                menu_Sub_Li.find(".sub-dropdown:first").slideUp(function () {
                    menu_Sub_Li.removeClass("menu-opened");
                    menu_Sub_Li.find(".menu-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down");
                });
            }
            else {
                $(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
                menu_Sub_Li.addClass("menu-opened");
                menu_Sub_Li.find(".sub-dropdown:first").slideDown();
            }
            return false;
        }
        else {
            return false;
        }
    });

    menu_Sub_Li = menu_Sub.parent("li");
    menu_Sub_Li.hover(function () {
        if (!($(".header").hasClass("mobile-device"))) {
            $(this).find(".sub-dropdown:first").stop(true, true).fadeIn("fast");
        }

    }, function () {
        if (!($(".header").hasClass("mobile-device"))) {
            $(this).find(".sub-dropdown:first").stop(true, true).delay(100).fadeOut("fast");
        }

    });


    // ----------------------------------------------------------------
    // Overlay Menu panel
    // ----------------------------------------------------------------
    var overlay_menu_btn = $(".overlay-menu-btn");
    var overlay_menu = $(".overlay-menu");
    var overlay_menu_close = $(".overlay-menu-close");

    // Overlay menu Toggle icon
    overlay_menu_btn.click(function () {
        if (!($(this).hasClass('active'))) {
            overlay_menu_btn.addClass('active');
            overlay_menu.addClass('active');
            $('body').addClass('overlay-menu-active');
        }
        else if ($(this).hasClass('active')) {
            overlay_menu_btn.removeClass('active');
            overlay_menu.removeClass('active');
            $('body').removeClass('overlay-menu-active');
        }
    });

    // Overlay menu close icon
    overlay_menu_close.click(function () {
        if (overlay_menu_btn.hasClass('active') && (overlay_menu.hasClass('active'))) {
            overlay_menu_btn.removeClass('active');
            overlay_menu.removeClass('active');
            $('body').removeClass('overlay-menu-active');
        }
    });



    // ----------------------------------------------------------------
    // Slider & OWL carousel Plugins
    // ----------------------------------------------------------------
    function int_SliderPluguns() {

        // Fullscreen Slider
        $('.fullscreen-slider').owlCarousel({
            slideSpeed: 350,
            singleItem: true,
            autoHeight: false,
            navigation: true,  // Show next and prev buttons
            pagination: true,  // Show pagination buttons
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: true

        });

        // hero Text Slider
        $('.intro-text-slider').owlCarousel({
            slideSpeed: 400,
            singleItem: true,
            autoHeight: false,
            navigation: true,  // Show next and prev buttons
            pagination: true,  // Show pagination buttons
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: true

        });

        // Team Carousel
        $('.team-carousel').owlCarousel({
            autoPlay: false,
            stopOnHover: true,
            items: 3,
            itemsDesktop: [1170, 3],
            itemsDesktopSmall: [1000, 2],
            itemsTabletSmall: [768, 1],
            itemsMobile: [480, 1],
            pagination: false,  // Hide pagination buttons
            navigation: false,  // Hide next and prev buttons
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });

        // Testimonial Carousel
        $('.testimonial-carousel').owlCarousel({
            autoPlay: true,
            autoHeight: true,
            stopOnHover: true,
            singleItem: true,
            slideSpeed: 350,
            pagination: true,  // Show pagination buttons
            navigation: false,  // Hide next and prev buttons
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            //  responsive: true
        });

        // Client Carousel
        $('.client-carousel').owlCarousel({
            autoPlay: 2500,
            stopOnHover: true,
            items: 6,
            itemsDesktop: [1170, 5],
            itemsDesktopSmall: [1024, 4],
            itemsTabletSmall: [768, 3],
            itemsMobile: [480, 2],
            pagination: false,  // hide pagination buttons
            navigation: false,  // hide next and prev buttons
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });

        // Image Carousel
        $('.image-carousel').owlCarousel({
            navigation: true,  // Show next and prev buttons
            pagination: true,  // Show pagination buttons
            slideSpeed: 350,
            paginationSpeed: 400,
            singleItem: true,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoPlay: false,
            autoHeight: true,
            responsive: true
        });

        // Post Carousel
        $('.post-carousel').owlCarousel({
            autoPlay: false,
            autoHeight: true,
            stopOnHover: true,
            singleItem: true,
            slideSpeed: 350,
            pagination: true,  // Hide pagination buttons
            navigation: false,  // Show next and prev buttons
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: true
        });

    };


    // ----------------------------------------------------------------
    // WOW animation Element
    // ----------------------------------------------------------------
    function init_wow_animation() {
        $(function () {

            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 90,
                mobile: false,
                live: true
            });

            if ($("body").hasClass("wow-animate")) {
                wow.init();
            }

        });
    }

    // ----------------------------------------------------------------
    // Responsive Media Elements (video, iframe)
    // ----------------------------------------------------------------
    $(".video-fit, .audio-fit, .post-media").fitVids();


    // ----------------------------------------------------------------
    // Isotope Portfolio Grid
    // ----------------------------------------------------------------
    function int_isotopPortfolio() {

        // Portfolio Grid
        var $container = $('.portfolio-grid');

        var layout_mode;
        if ($container.hasClass("masonry")) {
            layout_mode = "masonry";
        } else {
            layout_mode = "fitRows"
        }


        $container.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: layout_mode,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        })


        // bind filter button click
        $('.portfolio-filter').on('click', '.categories', function () {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
        });

        // change active class on categories
        $('.categories-filter').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', '.categories', function () {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });

        });
    };





    // ----------------------------------------------------------------
    // Parallax Function element
    // ----------------------------------------------------------------

    var parallaxPositionProperty;
    if ($(window).width() >= 1024) {
        parallaxPositionProperty = "position";
    } else {
        parallaxPositionProperty = "transform"
    }

    // Parallax Stellar Plugin element
    $(window).stellar({
        responsive: true,
        positionProperty: parallaxPositionProperty,
        horizontalScrolling: false

    });

    //Parallax Function element
    $('.parallax').each(function () {
        var $el = $(this);
        $(window).scroll(function () {
            parallax($el);
        });
        parallax($el);
    });
    function parallax($el) {
        var diff_s = $(window).scrollTop();
        var parallax_height = $('.parallax').height();
        var yPos_p = (diff_s * 0.5);
        var yPos_m = -(diff_s * 0.5);
        var diff_h = diff_s / parallax_height;

        if ($('.parallax').hasClass('parallax-section')) {
            $el.css('top', yPos_p);
        }
        if ($('.parallax').hasClass('parallax-section2')) {
            $el.css('top', yPos_m);
        }
        if ($('.parallax').hasClass('parallax-static')) {
            $el.css('top', (diff_s * 1));
        }
        if ($('.parallax').hasClass('parallax-opacity')) {
            $el.css('opacity', (1 - diff_h * 1));
        }

        if ($('.parallax').hasClass('parallax-background1')) {
            $el.css("background-position", 'left' + " " + yPos_p + "px");
        }
        if ($('.parallax').hasClass('parallax-background2')) {
            $el.css("background-position", 'left' + " " + -yPos_p + "px");

        }
    };



    // ----------------------------------------------------------------
    // lightbox Plugins (image lightbox, iframe lightbox, video lightbox)
    // ----------------------------------------------------------------
    function int_lightbox() {

        // Portfolio Gallery Popup
        $('.gallery-popup').magnificPopup({
            delegate: '.gallery-popup-link',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title');
                }
            }
        });

        // Video popup (youtube, vimeo), map popup, iframe popup,
        $('.popup-youtube, .popup-vimeo, .popup-gmaps, .video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    };




    // ----------------------------------------------------------------
    // Elements And Shortcode
    // ----------------------------------------------------------------
    function int_Elements() {

        // Skills Progressbar Function
        $(".skillbar").appear(function () {
            $('.skillbar').each(function () {
                $(this).find('.skillbar-bar-child').animate({
                    width: $(this).attr('data-percent')
                }, 2000);
            });
        });


        //Counter Number Function
        $(".counter-num").appear(function () {
            var counter = $(this);
            counter.countTo({
                from: 0,
                to: counter.html(),
                speed: 1300,
                refreshInterval: 60,
            });

        });


        // Tabs
        $('.tab-content > .tab-pane').hide();
        $('.tab-content > .tab-pane:first-of-type').show();

        $('.tabs a').click(function (e) {
            e.preventDefault();
            var $this = $(this),
                tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('href');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('.tab-pane').hide();
            $(target).fadeIn().show;

            // Tabs height
            var tab_height = $(".tab-content > .tab-pane").filter($(this).attr("href")).height();
            $(".tab-content").animate({
                height: tab_height
            }, function () {
                $(".tab-content").css("height", "auto");
            });
        })


        // Toggle Function
        var togglesAllContent = $(".toggle > .toggle-content").hide();
        $(".toggle > .toggle-title > a").click(function () {

            if ($(this).hasClass("active")) {

                $(this).parent().next().slideUp("easeOutExpo");
                $(this).removeClass("active");

            }
            else {
                var current = $(this).parent().next(".toggle-content");
                $(this).addClass("active");
                $(this).parent().next().slideDown("easeOutExpo");
            }

            return false;
        });


        // Accordion Function
        var accordionAllContent = $(".accordion > .accordion-content").hide();
        accordionAllContent.first().slideDown("easeOutExpo");
        $(".accordion > .accordion-title > a").first().addClass("active");
        $(".accordion > .accordion-title > a").click(function () {
            var current = $(this).parent().next(".accordion-content");
            $(".accordion > .accordion-title > a").removeClass("active");
            $(this).addClass("active");
            accordionAllContent.not(current).slideUp("easeInExpo");
            $(this).parent().next().slideDown("easeOutExpo");

            return false;
        });


    };




    // ----------------------------------------------------------------
    // Onepage Nav Elements
    // ----------------------------------------------------------------
    $('.singlepage-nav').singlePageNav({
        offset: 0,
        currentClass: 'current',
        filter: ':not(.external)',
        easing: 'easeInOutExpo',
        speed: 1500,
        updateHash: true,
        beforeStart: function () {
            // Navigation Menu Close
            if (mobile_menu_icon.hasClass('active')) {
                mobile_menu_icon.removeClass('active');
                mobile_menu.removeClass('active');
            };

            // Overlay Menu Close
            if (overlay_menu_btn.hasClass('active')) {
                overlay_menu_btn.removeClass('active');
                overlay_menu.removeClass('active');
                $('body').removeClass('overlay-menu-active');
            };
        }
    });






});