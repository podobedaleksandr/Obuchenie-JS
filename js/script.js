
// фиксация хедера
$(document).scroll(function(){
    if($(document).width() < 1024)
    return false;

    if($(document).scrollTop()>$('.full-page').height()/2)
    $("header").addClass("fixed");
    else
    $("header").removeClass("fixed");

});

// кнопка возврата вверх
$(".up-btn").on("click", function() {
    $("html, body").animate({
        scrollTop: 0
    },'slow');
});

// спрятанное меню

$("#show-menu").on("click", function(){
    $("#hidden-menu").animate({
        "right": 0
    }, 500);
})

$("#hidden-menu .close").on("click", function(){
    $("#hidden-menu").animate({
        "right": "-300px"
    }, 200);
})