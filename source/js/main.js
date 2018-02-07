$(document).ready(function () {

    console.log("ready...");

    $('body').on('click', function (e) {
        //console.log(e.target);
    })

    $('body').on('mouseover', function (e) {
        //console.log( "pageX: " + e.pageX + ", pageY: " + e.pageY );
    })

    setTimeout(function () {
        console.log("After 5 seconds...");
	}, 5000);
	
    $('#fullpage').fullpage({});

});

$(window).on('load', function() {
    console.log("Loaded");
})