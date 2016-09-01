$(document).ready(function() {
    $(".tabs__link").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("tabs__current");
        $(this).parent().siblings().removeClass("tabs__current");
        var tab = $(this).attr("href");
        $(".tabs__content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});