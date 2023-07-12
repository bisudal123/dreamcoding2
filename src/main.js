'use strict';

const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;



document.addEventListener('scroll',  () => {



if(window.scrollY > headerHeight) {
    header.classList.add('header--dark');
}
else {
    header.classList.remove('header--dark')
}

});


// Home 섹션을 아래로 스크롤시 투명하게

const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {


home.style.opacity = 1 - window.scrollY / homeHeight;
});

// body 섹션을 절반이상 스크롤시, 화살표 나타나게

const body = document.querySelector('.body');
const bodyHeight = body.offsetHeight;
const arrow = document.querySelector('.arrow')

document.addEventListener('scroll', ()=> {


if(window.scrollY < bodyHeight/2) {
    arrow.classList.add('opacity')
}
else{
    arrow.classList.remove('opacity')
}
});

// navbar 토글버튼 클릭

const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');
});

// navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌

navbarMenu.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');
});