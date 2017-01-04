app.controller('CommonCtrl', function($scope, $sce, $window) {

  // render code as html
  $scope.trustHtml = function(html) {
    return $sce.trustAsHtml(html);
  };


  // on everything ready
  $scope.pageReady = function() {
    var lastScrollTop = $(window).scrollTop();
    var navbar = $("#navbar");

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
            navbar.animate({ top: "-60px" }, "fast");
          }
        } else {
          if (parseInt(navbar.css("top")) < 0) {
            navbar.animate({ top: "0px" }, "fast");
          }
        }
      }

      lastScrollTop = currentScrollTop;
    });

    goTopBtn.click(function() {
      $("body,html").animate({ scrollTop: 0 }, "fast");
      return false;
    });

  }

});