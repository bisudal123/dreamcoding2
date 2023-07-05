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
    console.log( 1 - window.scrollY / homeHeight);

home.style.opacity = 1 - window.scrollY / homeHeight;
});