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
	
    

});

$(window).on('load', function() {
    console.log("Loaded");
})

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
})

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
})

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
})

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
})