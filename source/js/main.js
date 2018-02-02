$(document).ready(function () {

    console.log("ready...");

    $('body').on('click', function(e) {
        //console.log(e.target);
    })

    $('body').on('mouseover', function(e) {
        //console.log( "pageX: " + e.pageX + ", pageY: " + e.pageY );
    })

    setTimeout(function(){
        $('#loader-wrapper').css("display", "none");
        $('#main').css("display", "block");
        console.log("After 3 seconds...");
    }, 3000);


    $('.item1').on('click', function(e) {
        var position = $('.title-1').offset().top - 50;
        $("html, boody").stop().animate( { scrollTop: position }, 500, 'swing'); 
    })

    $('.item2').on('click', function(e) {
        var position = $('.title-2').offset().top - 50;
        $("html, boody").stop().animate( { scrollTop: position }, 500, 'swing');
    })

    $('.item3').on('click', function(e) {
        var position = $('.title-3').offset().top - 50;
        $("html, boody").stop().animate( { scrollTop: position }, 500, 'swing');
    })

    $('.item4').on('click', function(e) {
        var position = $('.title-4').offset().top - 50;
        $("html, boody").stop().animate( { scrollTop: position }, 500, 'swing');
    })

    $('.item5').on('click', function(e) {
        var position = $('.title-5').offset().top - 50;
        $("html, boody").stop().animate( { scrollTop: position }, 500, 'swing');
    })

    $('#show').on('click', function(e) {
        if($('#show')[0].innerText == "Show all") {
            $('.hidden-wrapper').animate({height: $('.hidden-wrapper > .content').height()+100 }, 500, 'swing');
            $('#show').text("Hide all");
        } else {
            $('.hidden-wrapper').animate({height: "300px"}, 500, 'swing');
            $('#show').text("Show all");
        }       
    })
        
});