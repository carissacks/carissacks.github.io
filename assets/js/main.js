(function ($) {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Mobile Menu 

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else {
            $(".navigation").addClass("sticky");
        }
    });


    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;
            // console.log($(this.hash));

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });



    // Parallaxmouse js

    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        };
    };
    parallaxMouse();


    //===== Progress Bar

    if ($('.progress-line').length) {
        $('.progress-line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }


    //===== Counter Up

    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });


    //===== Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
}(jQuery));

const educationTimeline= (order)=>{
    $(".tl-round").css("background-color", "rgb(85, 69, 69)");
    for(var i=1; i<=order; i++){
        $(".round"+i).css("background-color", "#754ef9");
    }
    $(".parcours-active").removeClass("parcours-active");
    $(".parc"+order).addClass("parcours-active");
    $(".timeline-indicator").css("width", (order-1) * 240);
}

const clicked = (card) => {
    console.log("ok");
    if ($("." + card).hasClass("d-none"))
        $("." + card).removeClass("d-none");
    else
        $("." + card).addClass("d-none");
}

$(document).ready(function () {
    education();
    educationTimeline(4);
});

$(window).on('resize', function () {
    education();
    educationTimeline(4);
});

const education = () => {
    size();

    $(".parcours-box").removeClass("parcours-active");

    $(".round1").on("click", function () {
        educationTimeline(1);
    })

    $(".round2").on("click", function () {
        educationTimeline(2);
    })

    $(".round3").on("click", function () {
        educationTimeline(3);
    })

    $(".round4").on("click", function () {
        educationTimeline(4);
    })
};


const size = () => {
    var x = window.matchMedia("(min-width: 768px)");
    if (x.matches) {
        content = `
            <div class="timeline-parcours">
                <div class="container-info">
                    <div class="timeline-section-tl">
                        <div class="parcours-box parc1">
                            <div class="infobox date1">
                                <h3>Kemurnian Elementary School</h3>
                                <p class="infobox-text">2005-2011</p>
                            </div>
                            <div class="fleche-bloc"></div>
                        </div>
                    </div>
                    <div class="timeline-section-tl">
                        <div class="parcours-box parc2">
                            <div class="infobox date1">
                                <h3>Ricci Junior High School</h3>
                                <p class="infobox-text">2011-2014</p>
                            </div>
                            <div class="fleche-bloc"></div>
                        </div>
                    </div>
                    <div class="timeline-section-tl">
                        <div class="parcours-box parc3">
                            <div class="infobox date1">
                                <h3>Ricci Senior High School</h3>
                                <p class="subt-infobox">2014-2017</p>
                                <p class="infobox-text">Majoring in Science</p>
                            </div>
                            <div class="fleche-bloc"></div>
                        </div>
                    </div>
                    <div class="timeline-section-tl">
                        <div class="parcours-box parc4">
                            <div class="infobox date1">
                                <h3>Multimedia Nusantara University</h3>
                                <p class="subt-infobox">2017-2021</p>
                                <p class="infobox-text">Majoring in Informatics</p>
                            </div>
                            <div class="fleche-bloc"></div>
                        </div>
                    </div>
                </div>

                <div class="container-time-line">
                    <div class="time-line-parcours">
                        <div class="timeline-indicator">
                            <p class="indicator-val"></p>
                        </div>
                    </div>
                </div>
                <div class="container-bulle">
                    <div class="timeline-section-tl">
                        <div class="tl-round round1"></div>
                    </div>
                    <div class="timeline-section-tl">
                        <div class="tl-round round2"></div>
                    </div>
                    <div class="timeline-section-tl">
                        <div class="tl-round round3"></div>
                    </div>
                    <div class="timeline-section-tl">
                        <div class="tl-round round4"></div>
                    </div>
                </div>
            </div>`;
    } else {
        content = `
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-11 align-center">
                        <h5 class="purple">Multimedia Nusantara University</h5>
                        <p class="pb-2">2017-2021 -Majoring in Informatics</p>

                        <h5 class="purple">Ricci Senior High School</h5>
                        <p class="pb-2">2014-2017 -Majoring in Science</p>

                        <h5 class="purple">Ricci Junior High School</h5>
                        <p class="pb-2">2011-2014</p>

                        <h5 class="purple">Kemurnian Elementary School</h5>
                        <p class="pb-2">2005-2011</p>
                        
                    </div>
                </div>    
            </div>`;
    }
    $('.education-content').html(content);
}
AOS.init();