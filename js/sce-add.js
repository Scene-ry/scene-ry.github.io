$(document).ready(function() {

    var lastScrollTop = $(window).scrollTop();
    var navbar = $("#navbar");
    navbar.load("/templates/navbar.html");

    $("#sce-footer").load("/templates/footer.html");

    $("#sce-fixed-btn").load("/templates/fixed-buttons.html", function() {
        var goTopBtn = $("#go-top-lg");

        goTopBtn.hide();

        $(window).scroll(function() {
            var currentScrollTop = $(this).scrollTop();

            if (!goTopBtn.is(":animated")) {
                if (currentScrollTop > 50) {
                    goTopBtn.fadeIn("fast");
                } else {
                    goTopBtn.fadeOut("fast");
                }
            }

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

        goTopBtn.click(function() {
            $("body,html").animate({ scrollTop: 0 }, 800);
            return false;
        });
    });
    
});
