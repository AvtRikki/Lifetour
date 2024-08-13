import { SwiperInitializer } from './modules/sliders/swiper-initializer.js';

const heroSlider = new SwiperInitializer('hero__slider');
const heroOptions = heroSlider.createHeroOptions();
heroSlider.initialize(heroOptions);

const toursSlider = new SwiperInitializer('tours__slider');
const toursOptions = toursSlider.createToursOptions('tours__pagination-button-prev', 'tours__pagination-button-next');
toursSlider.initialize(toursOptions);
