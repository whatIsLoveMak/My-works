
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
  


// переключение языков 

let rus = document.querySelectorAll('.rus');
let eng = document.querySelectorAll('.eng');
let rusHTML = document.querySelector('.rus-version');
let engHTML = document.querySelector('.eng-version');

for (let i=0;i<rus.length; i++){
    rus[i].addEventListener('click', function(event){
        event.preventDefault();
        if(eng[i].classList.contains('active-language')){
            eng[1].classList.remove('active-language');
            rus[0].classList.add('active-language');
            
        }
        engHTML.style.display = 'none';
            rusHTML.style.display = 'block';
        
    });
    
    
    eng[i].addEventListener('click', function(event){
        event.preventDefault();
        if(rus[i].classList.contains('active-language')){
            rus[0].classList.remove('active-language');
            eng[1].classList.add('active-language');
            rus[1].classList.remove('active-language');
    
        }
        rusHTML.style.display = 'none';
            engHTML.style.display = 'block';
    });
}



/* кнопки слайдера*/
let borders = document.querySelector('.underslider-borders');
let nextButton = document.querySelector('.slide-next');
let prevButton = document.querySelector('.slide-prev');
let count = 0;
let width;
let arrows = document.querySelectorAll('.slider-arrow');
let ul = document.createElement('ul');
ul.classList.add ('item-list');
/*клонирование элемента слайдера*/

let sliderItem = document.querySelector('.slider-photos__item');
let sliderLine = document.querySelector('.slider-photos');
let clone;

//-------------------------------------//

let selectGallaryItems = document.querySelectorAll('.gallary-item');


/* ссылки изображений и видео для слайдера */

let details = ['img/picture','img/roof2','img/roof','img/bathroom','img/bathroom2','img/bathroom3','img/toilet','img/toilet2'];
let rooms = ['img/luxe1','img/luxe2','img/luxe3','img/luxe4','img/luxe5','img/luxe6','img/luxe7','img/luxe8'];
let video = ['https://www.youtube.com/embed/BDhsTxLGCLA','https://www.youtube.com/embed/UZM_uP3SnHI','https://www.youtube.com/embed/ij2mWvzc3Xg','https://www.youtube.com/embed/s_5K4kkNfoE','https://www.youtube.com/embed/QzFP0snQn-s'];
let restaurant = ['img/luxe1','img/luxe2','img/luxe3','img/luxe4','img/luxe5','img/luxe6','img/luxe7','img/luxe8'];
let photo = ['img/gallary1','img/gallary2','img/gallary3','img/gallary4'];
let posInit;
let posFinal;


/* добавление класса на активную ссылку и замена изображений в слайдере */


for(let i = 0;i<selectGallaryItems.length;i++){
    selectGallaryItems[i].addEventListener('click', function(event){
        event.preventDefault();
        removeGallaryClass();
        this.classList.add('gallary-item__active');
        
        checkGallaryClass(this);
    })
}


/* работа кнопок + пересчет ширины окна браузера */

window.addEventListener('resize',init);
init();

nextButton.addEventListener('click', function(){
    let allSliderItems = document.querySelectorAll('.slider-photos__item');
    
    count++;
    if(count > allSliderItems.length-1){
        count = 0;
    }
    activeLi(count);
    rollSlider();
    
    console.log(count);
})

prevButton.addEventListener('click', function(){
    let allSliderItems = document.querySelectorAll('.slider-photos__item');
    
    count--;
    if(count<0){
        count = allSliderItems.length-1;
    }
    activeLi(count);
    rollSlider();
    
})

/*точка конечной координаты, расчет и листание слайда*/

sliderLine.addEventListener('touchend', function(event){
    event.preventDefault();
    event.stopPropagation();
    let allSliderItems = document.querySelectorAll('.slider-photos__item');
    posFinal = event.changedTouches[0];
    let result = posInit.pageX - posFinal.pageX;
    /* 30 это ограничение по минимальному значению px для свайпа */
    if (result > 30){
        count++;
        if(count > allSliderItems.length-1){
            count = 0;
        }
        activeLi(count);
        rollSlider();
    } else  if (result <-30){
        count--;
        if(count<0){
            count = allSliderItems.length-1;
        }
        activeLi(count);
        rollSlider();
    }
    
},false)

/* точка начальной координаты*/

sliderLine.addEventListener('touchstart', function(event){
    event.preventDefault();
    event.stopPropagation();
    posInit = event.changedTouches[0];
    
},false);

/*поиск вкладки с активным классом и замена изображений с подсчетом слайдов*/

function checkGallaryClass(elem){
    
    if(elem.classList.contains('gallary-photo')){
        countSlider(photo);
    } else if(elem.classList.contains('gallary-video')){
        
        changeSliderVideo(video);
    } else if(elem.classList.contains('gallary-rooms')){
        countSlider(rooms);
    } else if(elem.classList.contains('gallary-details')){
        
        countSlider(details);
    } else if(elem.classList.contains('gallary-restaurant')){
        
        countSlider(restaurant);
    }
}

/* удаление активного класса*/

function removeGallaryClass(){
    for(let i = 0;i<selectGallaryItems.length;i++){
        selectGallaryItems[i].classList.remove('gallary-item__active');
    }
} 
/* функция замены изображений в слайдере */

function changePhoto(arrPhoto){
    let rowPhotos = document.querySelectorAll('.gallary__row-photo');
    for (let i=0;i<arrPhoto.length;i++){
        rowPhotos[i].innerHTML = '<picture><source srcset="'+arrPhoto[i]+'.webp" type="image/webp"><img src="'+arrPhoto[i]+'.jpg" alt=""></picture>';

    }
}
/* фунцкия заменяющая html для видео*/

function changeSliderVideo (arrVideo){
    sliderLine.innerHTML = '';
    borders.innerHTML = '';
    ul.innerHTML = '';
    arrows.forEach(item => {
        item.style.display = 'block';
    });
    
    for(let i=0;i<arrVideo.length;i++){
        createLi(i);
        clone = sliderItem.cloneNode(true);
        sliderLine.appendChild(clone);
        clone.innerHTML = '<iframe src="'+arrVideo[i]+'" title="YouTube video player" frameborder="0" allow="accelerometer"; stopVideo; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        
    }
    let firstLi = document.querySelector('li');
    firstLi.classList.add('active-underslider-border')
    init();
    rollToFirstSlide();
}

/*функция выстраивающая кол-во слайдов и вставляющая фото в слайдер*/

function countSlider(arrPhoto){
    let result = arrPhoto.length/4;
    borders.innerHTML = '';
    ul.innerHTML = '';
    console.log(borders.innerHTML)
    if (result%1==0){
        sliderLine.innerHTML = '';
        for (let i=0;i<result;i++){
            createLi(i);
            clone = sliderItem.cloneNode(true);
            sliderLine.appendChild(clone);
        }
        
    }
    let firstLi = document.querySelector('li');
    firstLi.classList.add('active-underslider-border')
    init();
    changePhoto(arrPhoto);
    rollToFirstSlide();
    disableArrows();
}

/* пересчет ширины окна */

function init(){
    console.log('resize');
    width = document.querySelector('.gallary-photos').offsetWidth;
    let allSliderItems = document.querySelectorAll('.slider-photos__item');
    sliderLine.style.width = width*allSliderItems.length + 'px';
    allSliderItems.forEach(item => {
        item.style.width = width + 'px';
        item.style.maxHeight = '600px';
    })
    rollSlider();
}

/* листание слайдера */

function rollSlider (){
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}
/* возвращение на первый слайд */
function rollToFirstSlide(){
    sliderLine.style.transform = 'translate(0px)';
    count = 0;
}

function disableArrows (){
    let windowWidth = window.innerWidth;
    if (windowWidth<1023){
        arrows.forEach(item => {
            item.style.display = 'none';
        })
    } else {
        arrows.forEach(item => {
            item.style.display = 'block';
        })
    }
}

function createLi(num){
    
    let li = document.createElement('li');
    li.setAttribute('value', num);
    ul.appendChild(li);
    borders.appendChild(ul);
}

function removeLi(){
    let ul = document.querySelector('item-list');
    ul.innerHTML = '';

}

function activeLi(num){
    let activeLi = document.querySelectorAll('li');

    for(let i=0;i<activeLi.length;i++){
        activeLi[i].classList.remove('active-underslider-border');
        activeLi[num].classList.add('active-underslider-border');
    }
}
