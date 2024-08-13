import {Swiper} from '../../vendor/swiper/swiper-bundle.mjs';

export class SwiperInitializer {
  #SWIPER_DATA_SLIDE = 'swiper-slide';
  constructor(slideClassName) {
    this.slideClassName = slideClassName;
    this.swiper = null;
  }

  #disableLoopState() {
    if (this.swiper.params.loop) {
      this.swiper.params.loop = false;
      this.swiper.update();
    }
  }

  #enableLoopState() {
    if (!this.swiper.params.loop) {
      this.swiper.params.loop = true;
      this.swiper.update();
    }
  }

  initialize(options) {
    const slider = document.querySelector(`.${this.slideClassName}`);
    if (slider) {
      this.swiper = new Swiper(slider, options);
      const slides = document.querySelectorAll(`.${this.#SWIPER_DATA_SLIDE}`);
      slides.forEach((slide) => {
        slide.setAttribute('tabindex', '0');
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
          this.#disableLoopState();
        }
      });

      document.addEventListener('keyup', (event) => {
        if (event.key === 'Tab') {
          this.#enableLoopState();
        }
      });

      if (options.navigation) {
        document.querySelector(options.navigation.nextEl).addEventListener('click', this.#enableLoopState);
        document.querySelector(options.navigation.prevEl).addEventListener('click', this.#enableLoopState);
      }

      return this.swiper;
    }
  }

  createHeroOptions() {
    return {
      slidesPerView: 1,
      loop: true,
      breakpoints: {
        320: {
          allowTouchMove: true,
        },
        768: {
          allowTouchMove: true,
        },
        1440: {
          allowTouchMove: false,
        },
      },
    };
  }

  createToursOptions(nextSlideClassName, prevSlideClassName) {
    return {
      navigation: {
        nextEl: `.${nextSlideClassName}`,
        prevEl: `.${prevSlideClassName}`,
      },
      loop: false,
      breakpoints: {
        320: {
          allowTouchMove: true,
          slidesPerView: 1,
        },
        768: {
          allowTouchMove: true,
          slidesPerView: 2,
        },
        1440: {
          allowTouchMove: false,
          slidesPerView: 3,
        },
      },
    };
  }
}
