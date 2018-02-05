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

    var demoImgArray = ['http://www.hdwallpapers.in/walls/halloween_2013-wide.jpg', 'http://www.hdwallpapers.in/walls/2013_print_tech_lamborghini_aventador-wide.jpg', 'http://www.hdwallpapers.in/walls/ama_dablam_himalaya_mountains-wide.jpg', 'http://www.hdwallpapers.in/walls/arrow_tv_series-wide.jpg', 'http://www.hdwallpapers.in/walls/anna_in_frozen-wide.jpg', 'http://www.hdwallpapers.in/walls/frozen_elsa-wide.jpg', 'http://www.hdwallpapers.in/walls/shraddha_kapoor-wide.jpg', 'http://www.hdwallpapers.in/walls/sahara_force_india_f1_team-HD.jpg', 'http://www.hdwallpapers.in/walls/lake_sunset-wide.jpg', 'http://www.hdwallpapers.in/walls/2013_movie_cloudy_with_a_chance_of_meatballs_2-wide.jpg', 'http://www.hdwallpapers.in/walls/bates_motel_2013_tv_series-wide.jpg', 'http://www.hdwallpapers.in/walls/krrish_3_movie-wide.jpg', 'http://www.hdwallpapers.in/walls/universe_door-wide.jpg', 'http://www.hdwallpapers.in/walls/night_rider-HD.jpg', 'http://www.hdwallpapers.in/walls/tide_and_waves-wide.jpg', 'http://www.hdwallpapers.in/walls/2014_lamborghini_veneno_roadster-wide.jpg', 'http://www.hdwallpapers.in/walls/peeta_katniss_the_hunger_games_catching_fire-wide.jpg', 'http://www.hdwallpapers.in/walls/captain_america_the_winter_soldier-wide.jpg', 'http://www.hdwallpapers.in/walls/puppeteer_ps3_game-wide.jpg', 'http://www.hdwallpapers.in/walls/lunar_space_galaxy-HD.jpg', 'http://www.hdwallpapers.in/walls/2013_wheelsandmore_lamborghini_aventador-wide.jpg', 'http://www.hdwallpapers.in/walls/destiny_2014_game-wide.jpg', 'http://www.hdwallpapers.in/colors_of_nature-wallpapers.html', 'http://www.hdwallpapers.in/walls/sunset_at_laguna_beach-wide.jpg'];
    demoImgArray.push("http://blogs.adobe.com/webplatform/files/sample.jpg");
    demoImgArray.push("https://www.nasa.gov/sites/default/files/thumbnails/image/hs-2015-02-a-hires_jpg.jpg");

    preload(demoImgArray);

});

$(window).on('load', function () {
    $('.percentage').text('100%')
    console.log("Loaded");
    $('#loader-wrapper').css("display", "none");
    $('#img').css("display", "block");
})

function preload(imgArray) {
    var increment = 0;
    var percentage;
    $(imgArray).each(function() {
        $('<img>').attr("src", this).on('load',function() {
            increment++;
            percentage = Math.floor((increment/imgArray.length)*100);
            $('.percentage').text(percentage.toString() + '%'); 
        });
    });
}