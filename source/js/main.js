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

var animate = document.getElementById("animate");

animate.addEventListener("animationstart", (event) => {
    console.log("animationstart")
});

var order = 1;
animate.addEventListener("animationiteration", function() {	
    if(order < 5) {
        order = order + 1;
    } else {
        order = 1;
    }
    var img = "images/icon" + order + ".png";
    $(event.target).attr('src', img)
});


animate.addEventListener("animationend", (event) => {
    console.log("animationend")
});
