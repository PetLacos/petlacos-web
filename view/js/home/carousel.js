let leftArrow = document.getElementById('leftArrow');
let rightArrow = document.getElementById('rightArrow');

class Carousel {

    constructor() {
        this.init();
        this.addListeners();
    }

    init() {
        this.slides = document.querySelectorAll('.slidesContainer .slide');
        this.dots = document.querySelectorAll('.slideDots .dot');
        this.slideClasses = ['.firstSlide', '.secondSlide', '.thirdSlide'];
        this.currentSlide = 0;
        console.log(this.slides);
    }

    addListeners() {
        leftArrow.addEventListener('click', () => {
            this.previousSlide();
        });

        rightArrow.addEventListener('click', () => {
            this.nextSlide();
        });
    }

    previousSlide() {
        this.currentSlide = this.currentSlide - 1 < 0
            ? this.slides.length - 1
            : this.currentSlide - 1;
        console.log(this.currentSlide);
        this.changeSlides();

    }


    nextSlide() {
        this.currentSlide = this.currentSlide + 1 >= this.slides.length
            ? 0
            : this.currentSlide + 1;
        console.log(this.currentSlide);
        this.changeSlides();
    }

    changeSlides() {
        this.dots.forEach((dot, index, _) => {
            dot.className = 'dot';
            if (index == this.currentSlide) {
                dot.className = 'dot active';
            }
        });
        switch (this.currentSlide) {
            case 0:
                this.slides[0].className = 'slide firstSlide';
                this.slides[1].className = 'slide secondSlide';
                this.slides[2].className = 'slide thirdSlide';
                break;
            case 1:
                this.slides[1].className = 'slide firstSlide';
                this.slides[2].className = 'slide secondSlide';
                this.slides[0].className = 'slide thirdSlide';
                break;
            case 2:
                this.slides[2].className = 'slide firstSlide';
                this.slides[0].className = 'slide secondSlide';
                this.slides[1].className = 'slide thirdSlide';
                break;
            default:
                break;
        }
    }
}

new Carousel();