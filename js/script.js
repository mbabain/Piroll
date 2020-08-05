let index = 0;
const items = document.querySelectorAll('.section-testimonials-slider__slide');
const dots = document.querySelectorAll('.section-testimonials-slider__dot');

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