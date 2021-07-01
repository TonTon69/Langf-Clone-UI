$(document).ready(function () {
    var IndexOfBanner = 0;
    var StartIndex = $("img.slider:first").attr("IndexOfBanner");
    var EndIndex = $("img.slider:last").attr("IndexOfBanner");
    $("img.slider").each(function () {
        if ($(this).is(":visible"))
            IndexOfBanner = $(this).attr("IndexOfBanner");
    });
    $("#next").click(function () {
        if (IndexOfBanner == EndIndex) {
            IndexOfBanner = -1;
        }
        next = ++IndexOfBanner;
        $("img.slider").hide();
        $("img.slider").eq(next).show();
    });
    $("#prev").click(function () {
        if (IndexOfBanner == 0) {
            IndexOfBanner = EndIndex;
            prev = IndexOfBanner++;
        }
        prev = --IndexOfBanner;
        $("img.slider").hide();
        $("img.slider").eq(prev).show();
    });
    setInterval(function () {
        $("#next").click();
    }, 2000);
});
