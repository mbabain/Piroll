let index = 0;
let position = 0;
const container = document.querySelector('.section-testimonials-slider');
const track = document.querySelector('.section-testimonials-slider__track');
const items = document.querySelectorAll('.section-testimonials-slider__slide');
const dotsContainer = document.querySelector('.section-testimonials-slider__dots');
const dots = document.querySelectorAll('.section-testimonials-slider__dot');
const itemWidth = container.clientWidth;

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

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeSlide(index);
        activeDot(index);
    });
});