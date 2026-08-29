$(function () {

    // Header Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    });


    // Featured Owl Carousel
    $('.featured-projects-slider .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })


    // Count with Intersection Observer
    var countSection = document.querySelector('.stats-facts');
    if (countSection && typeof IntersectionObserver !== 'undefined') {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    $('.count').each(function () {
                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 1000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(countSection);
    } else {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }


    // ScrollToTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function scrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    const btn = document.getElementById("scrollToTopBtn");
    const icon = document.getElementById("scrollIcon");
    const progressRing = document.getElementById("scrollProgress");
    const wrapper = document.querySelector(".scroll-btn-wrapper");
    const circumference = 2 * Math.PI * 26;

    btn.addEventListener("click", function () {
        if (document.documentElement.scrollTop > 500 || document.body.scrollTop > 500) {
            scrollToTop();
        } else {
            scrollToBottom();
        }
    });

    window.onscroll = function () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

        if (scrollTop > 100) {
            wrapper.style.display = "flex";
        } else {
            wrapper.style.display = "none";
        }
        if (scrollTop > 500) {
            icon.setAttribute("icon", "lucide:arrow-up");
        } else {
            icon.setAttribute("icon", "lucide:arrow-down");
        }

        progressRing.style.strokeDashoffset = circumference - (scrollPercent * circumference);
    };


    // Aos
	AOS.init({
		once: true,
	});

});

