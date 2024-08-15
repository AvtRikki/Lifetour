import { SwiperInitializer } from './modules/sliders/swiper-initializer.js';

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
