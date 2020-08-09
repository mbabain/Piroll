let index = 0;
const items = document.querySelectorAll('.section-testimonials-slider__slide');
const dots = document.querySelectorAll('.section-testimonials-slider__dot');
const hamburgerMenu = document.querySelector('.section-nav-burger');
const navigation = document.querySelector('.section-nav-links');
const hamburgerBackground = document.querySelector('.section-nav-menu-background');
const hamburgerLine1 = document.getElementById('bar1');
const hamburgerLine2 = document.getElementById('bar2');
const hamburgerLine3 = document.getElementById('bar3');

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const activeSlide = n => {
    for (item of items) {
        item.classList.remove('active');
    } 
    items[n].classList.add('active');
};

const activeOn = function () {
    navigation.style.cssText = "transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1); visibility: visible; opacity: 1;";
    hamburgerBackground.style.width = "250px";
    hamburgerLine1.style.transform = "matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 4)";
    hamburgerLine2.style.width = "0px";
    hamburgerLine3.style.transform = "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, -4)";
}

const activeOff = function () {
    hamburgerBackground.style.width = "0px";
    hamburgerLine1.style.transform = "matrix(1.00,0.00,0.00,1.00,0,0)";
    hamburgerLine2.style.width = "100%";
    hamburgerLine3.style.transform = "matrix(1.00,0.00,0.00,1.00,0,0)";
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeSlide(index);
        activeDot(index);
    });
});

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    if (hamburgerMenu.classList.contains('active') == true && window.matchMedia('(max-width: 767px)').matches) {
        activeOn();
    } else if (hamburgerMenu.classList.contains('active') == false && window.matchMedia('(max-width: 767px)').matches){
        activeOff();
        navigation.style.cssText = "transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1); visibility: hidden; opacity: 0;";
    } else {
        navigation.style.cssText = "visibility: visible; opacity: 1;";
        hamburgerBackground.style.width = "0px";
    }
});

window.addEventListener('scroll', () => {
    if (pageYOffset > 40 && window.matchMedia('(max-width: 767px)').matches) {
    hamburgerMenu.classList.remove('active');
    navigation.style.cssText = "visibility: hidden; opacity: 0;";
    activeOff();
    }
});

window.addEventListener(`resize`, event => {
    if (window.matchMedia('(min-width: 768px)').matches) {
        activeOff();
        hamburgerMenu.classList.remove('active');
        navigation.style.cssText = "visibility: visible; opacity: 1;";
        hamburgerBackground.style.width = "0px";
    } else {
        hamburgerMenu.classList.remove('active');
        navigation.style.cssText = "visibility: hidden; opacity: 0;";
        hamburgerBackground.style.width = "0px";
    }
});
