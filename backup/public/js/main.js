$(document).ready(function () {

    console.log("ready...");

    $('body').on('click', function (e) {
        //console.log(e.target);
    })

    $('body').on('mouseover', function (e) {
        //console.log( "pageX: " + e.pageX + ", pageY: " + e.pageY );
    })

});

$(window).on('load', function() {
    console.log("Loaded");
})