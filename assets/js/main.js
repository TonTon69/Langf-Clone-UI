$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".header .navbar").addClass("sticky");
        } else {
            $(".header .navbar").removeClass("sticky");
        }
    });
});
