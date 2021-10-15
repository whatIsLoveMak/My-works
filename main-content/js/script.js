let textMargin = document.querySelectorAll('.advantage-item--text');
let feedbackItem = document.querySelector('.slick-center .feedback__item');
console.log(feedbackItem)
window.addEventListener('DOMContentLoaded', function(){
    if (window.screen.width<= 500){
        for(let i = 0; i<textMargin.length;i++){
            if(i%2){
                textMargin[i].style.marginRight = '0px';
                textMargin[i].style.marginBottom = '5px';
            };
        };
    }
})


$(document).ready(function(){
    $('.slider-slave').slick({
        slidesToShow:3,
        asNavFor: '.slider-main',
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
    })
    $('.slider-main').slick({
        arrows: false,
        asNavFor: '.slider-slave',
    })
    
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    initialSlide: 0,
    spaceBetween:30,
    speed: 800,
    loop: true,
    breakpoints: {
        900: {
            slidesPerView: 3,
            centeredSlides: true,
            initialSlide: 1,
            spaceBetween: 2,
            spaceBetween:30,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });