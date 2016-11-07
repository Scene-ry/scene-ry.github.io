$(document).ready(function() {

    var lastScrollTop = $(window).scrollTop();
    var navbar = $("#navbar");

    $(window).scroll(function() {
        var currentScrollTop = $(this).scrollTop();

        if (!navbar.is(":animated")) {
            if (currentScrollTop > lastScrollTop) {
                if (parseInt(navbar.css("top")) >= 0) {
                    $("#navbar").animate({ top: "-60px" }, "fast");
                }
            } else {
                if (parseInt(navbar.css("top")) < 0) {
                    $("#navbar").animate({ top: "0px" }, "fast");
                }
            }
        }

        lastScrollTop = currentScrollTop;
    });

    $("#go-top-lg").click(function() {
        $("body,html").animate({ scrollTop: 0 }, 800);
        return false;
    });
});
