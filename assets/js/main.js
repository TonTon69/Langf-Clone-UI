$(document).ready(function () {
    // scroll navbar
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".header .navbar").addClass("sticky");
        } else {
            $(".header .navbar").removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $(".back-to-top").addClass("show");
        } else {
            $(".back-to-top").removeClass("show");
        }
    });
    $(".back-to-top").click(function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    //slider
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 5,
        spaceBetween: 0,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: ".right-button",
            prevEl: ".left-button",
        },
    });
    //active link
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("area_id");
    if (myParam === null) {
        document.getElementById("all").classList.add("active");
    } else {
        document.getElementById(myParam).classList.add("active");
    }
});
