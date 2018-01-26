$('.dropdown-item > a').on('click', function(e) {
    $(this).parent().children(".dropdown-content").slideToggle();
    var arrow = $(this).children(".arrow");
    if(arrow[0].style.transform == "") {
        arrow[0].style.transform = "rotate(180deg)";
    } else {
        arrow[0].style.transform = "";
    }
})
