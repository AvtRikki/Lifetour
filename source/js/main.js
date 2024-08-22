import { SwiperInitializer } from './modules/sliders/swiper-initializer.js';
import { NavigationManager } from './modules/navigations/menu-manager.js';
import {FormValidator} from "./modules/form/form-validator.js";

const heroSlider = new SwiperInitializer('hero__slider');
const heroOptions = heroSlider.createHeroOptions();
heroSlider.initialize(heroOptions);

const toursSlider = new SwiperInitializer('tours__slider');
const toursOptions = toursSlider.createToursOptions('tours__pagination-button-prev', 'tours__pagination-button-next');
toursSlider.initialize(toursOptions);

const trainingSlider = new SwiperInitializer('training__slider');
const trainingOptions = trainingSlider.createTrainingOptions('training__pagination-button-prev', 'training__pagination-button-next');
trainingSlider.initialize(trainingOptions);

const reviewSlider = new SwiperInitializer('reviews__slider');
const reviewsOptions = reviewSlider.createReviewsOptions('reviews__pagination-button-prev', 'reviews__pagination-button-next');
reviewSlider.initialize(reviewsOptions);

const advSlider = new SwiperInitializer('adv__slider');
const advOptions = advSlider.createAdvOptions('adv__pagination-button-prev', 'adv__pagination-button-next');
advSlider.initialize(advOptions);

const gallerySlider = new SwiperInitializer('gallery__slider');
const galleryOptions = gallerySlider.createGalleryOptions('gallery__pagination-button-prev', 'gallery__pagination-button-next');
gallerySlider.initialize(galleryOptions);

const menuManager = new NavigationManager('header__menu-button', 'nav');
menuManager.initialize();

const formValidator = new FormValidator('form__info');
formValidator.initialize();
