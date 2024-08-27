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
      pagination: {
        el: '[data-pagination="hero"]',
        type: 'bullets',
        clickable: true
      },
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

  createToursOptions(prevSlideClassName, nextSlideClassName) {
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
          spaceBetween: 18,
        },
        1440: {
          allowTouchMove: false,
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    };
  }

  createTrainingOptions(prevSlideClassName, nextSlideClassName) {
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
          initialSlide: 2,
        },
        768: {
          allowTouchMove: true,
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          allowTouchMove: false,
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    };
  }

  createReviewsOptions(prevSlideClassName, nextSlideClassName) {
    return {
      navigation: {
        nextEl: `.${nextSlideClassName}`,
        prevEl: `.${prevSlideClassName}`,
      },
      loop: false,
      breakpoints: {
        320: {
          allowTouchMove: true,
          slidesPerView: 'auto',
          lazyPreloadPrevNext: 1,
        },
        768: {
          allowTouchMove: true,
          slidesPerView: 'auto',
        },
        1440: {
          allowTouchMove: false,
          slidesPerView: 3,
        },
      },
    };
  }

  createAdvOptions(prevSlideClassName, nextSlideClassName) {
    return {
      navigation: {
        nextEl: `.${nextSlideClassName}`,
        prevEl: `.${prevSlideClassName}`,
      },
      loop: true,
      slidesPerGroup: 2,
      breakpoints: {
        320: {
          allowTouchMove: true,
          slidesPerView: 'auto',
          allowSlideNext: false,
          allowSlidePrev: false,
        },
        768: {
          allowTouchMove: true,
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 4,
          allowTouchMove: false,
          initialSlide: 2,
          centeredSlides: true,
        },
      },
    };
  }

  createGalleryOptions(prevSlideClassName, nextSlideClassName) {
    return {
      navigation: {
        nextEl: `.${nextSlideClassName}`,
        prevEl: `.${prevSlideClassName}`,
      },
      loop: false,
      breakpoints: {
        320: {
          allowTouchMove: true,
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          allowTouchMove: true,
          slidesPerView: 3,
        },
        1440: {
          allowTouchMove: false,
          slidesPerView: 5,
        },
      },
    };
  }
}
