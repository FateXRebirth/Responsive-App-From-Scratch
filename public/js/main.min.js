$(document).ready(function () {

    $('body').on('click', function(e) {
        console.log(e.target);
    })

    $('.menu').on('click', function() {
        //$('.aside').css('display', 'block');
        $('.aside')[0].style.display = "block";
    })
    
    $('.close').on('click', function() {
        $('.aside').css('display', 'none');
    })

    $('.dropdown-item > a').on('click', function(e) {
        $(this).parent().children(".dropdown-content").slideToggle();
        var arrow = $(this).children(".arrow");
        if(arrow[0].style.transform == "") {
            arrow[0].style.transform = "rotate(180deg)";
        } else {
            arrow[0].style.transform = "";
        }
    })

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        adaptiveHeight: true,
    });

    $('.arrow-left').on('click', function() {
        $('.slider').slick('slickPrev');
    });

    $('.arrow-right').on('click', function() {
        $('.slider').slick('slickNext');
    })

    $(window).scroll(function(e) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollBtn").style.display = "block";
        } else {
            document.getElementById("scrollBtn").style.display = "none";
        }
    })

    $('#scrollBtn').on('click', function(e) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })
    
});
