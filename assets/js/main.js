$(document).ready(function () {
    // scroll navbar
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".header .navbar").addClass("sticky");
        } else {
            $(".header .navbar").removeClass("sticky");
        }
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
