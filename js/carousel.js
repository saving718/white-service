$(function () {
    $(".owl-carousel").owlCarousel({
        nav: true,
        loop: true,
        lazyLoad: true,
        margin: 44,
        responsive: {
            375: {
                items: 1,
                margin: 0,
                center: true,


            },
            768: {
                items: 3,
                margin: 30,

            },
            1521: {
                items: 4,
                margin: 44,
            }
        },
    });
    $(".js-burger").on("click", () => {
        $(".b-sidebar").addClass("b-sidebar--on")
        $("body").css("overflow-y", "hidden")
    })
    $(".js-sidebar .sidebar__close").on("click", () => {
        $(".b-sidebar").removeClass("b-sidebar--on")
        $("body").css("overflow-y", "auto")

    })
});