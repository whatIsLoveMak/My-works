$(document).ready(function(){
    $('.rooms-slider').slick({
        arrows: true,
        responsive: [
            {
                breakpoint:1025,
                settings: {
                    arrows: false,
                }
            }
        ]
    })
});