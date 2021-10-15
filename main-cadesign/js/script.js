$(document).ready(function(){
    $('.menu__burger').click(function(event){
        $('.menu, .menu__burger, .menu-items__row, .menu-logo').toggleClass('active');
        $('body').toggleClass('lock');
        $('.mask').toggleClass('mask-on');
    })
    $('.menu-items__row').click(function(event) {
        $('.menu, .menu__burger, .menu-items__row, .menu-logo').removeClass('active');
        $('body').removeClass('lock');
        $('.mask').removeClass('mask-on');
    });
    

    $('.advantages-slider2').slick({
        slidesToShow: 2,
        dots: true,
        arrows:false,
        infinite:false,
        mobileFirst: true,
        slidesToScroll: 2,
        
    })
    $('.employees-slider').slick({
        arrows: true,
        infinite: false,
        responsive:[
            {
                breakpoint: 600,
                settings: {
                    arrows:false,
                    dots: true,
                }
            }
        ]
    })
    $('.history-slider').slick({
        arrows: true,
        infinite: false,
        asNavFor: '.popup-slider',
        responsive:[
            
            {
                breakpoint: 1025,
                settings: {
                    arrows:false,
                    dots: true,
                }
            }
        ]
    })
    $('.values-slider').slick({
        
        arrows:false,
        infinite:false,
        variableWidth:true,
        
        responsive:[
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    variableWidth:false,
                    dots: true,
                }
            }
        ]
    })
    $('.popup-slider').slick({
        arrows: true,
        infinite: false,
        asNavFor: '.history-slider',
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    arrows:false,
                    
                }
            }
        ]
    })
});

let ball = document.querySelector('.ball');
let vacancyItemRow = document.querySelector('.vacancy-item__row');
let vacancyItems = document.querySelectorAll('.vacancy-item__row a');
let vacancyButton = document.querySelector('.more-vacansys');
let mainCenter = document.querySelector('.main-center');
let allJobs = document.querySelector ('.all-jobs');


ball.addEventListener('click', openVacansy);

vacancyButton.addEventListener ('click', openVacansy);

function openVacansy(event){
    event.preventDefault();
    let width = window.innerWidth;
    if(width >1177){
        if (!ball.classList.contains('active')){
            ball.style.left = '34px';
            vacancyItemRow.style.maxHeight = 'max-content';
            allJobs.style.color = 'black';
            mainCenter.style.color = '#828282';
            ball.classList.toggle('active')
        } else {
            ball.classList.toggle('active')
            ball.style.left = '3px';
            vacancyItemRow.style.maxHeight = '518px';
            allJobs.style.color = '#828282';
            mainCenter.style.color = 'black';
        }
    } else if(width > 768 && width<=1177){
        
                if (!ball.classList.contains('active')){
                    ball.style.left = '34px';
                    vacancyItemRow.style.maxHeight = 'max-content';
                    allJobs.style.color = 'black';
                    mainCenter.style.color = '#828282';
                    ball.classList.toggle('active')
                } else {
                    ball.classList.toggle('active')
                    ball.style.left = '3px';
                    vacancyItemRow.style.maxHeight = '724px';
                    allJobs.style.color = '#828282';
                    mainCenter.style.color = 'black';
                }
    } else if(width>609 &&  width<768){
        if (!ball.classList.contains('active')){
            ball.style.left = '34px';
            vacancyItemRow.style.maxHeight = 'max-content';
            allJobs.style.color = 'black';
            mainCenter.style.color = '#828282';
            vacancyItems[vacancyItems.length-1].style.marginBottom = '0px'
            ball.classList.toggle('active')
        } else {
            ball.classList.toggle('active')
            ball.style.left = '3px';
            vacancyItemRow.style.maxHeight = '352px';
            allJobs.style.color = '#828282';
            mainCenter.style.color = 'black';
        }
    } else {
        if (!ball.classList.contains('active')){
            ball.style.left = '34px';
            vacancyItemRow.style.maxHeight = 'max-content';
            allJobs.style.color = 'black';
            mainCenter.style.color = '#828282';
            vacancyItems[vacancyItems.length-1].style.marginBottom = '0px'
            ball.classList.toggle('active')
        } else {
            ball.classList.toggle('active')
            ball.style.left = '3px';
            vacancyItemRow.style.maxHeight = '428px';
            allJobs.style.color = '#828282';
            mainCenter.style.color = 'black';
        }
    }
    
};


