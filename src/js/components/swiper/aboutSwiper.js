import Swiper from 'swiper/bundle';
import { rem } from '../../utils/constants';


const aboutSwiper = () => {
    const swiper = new Swiper('.about__swiper', {
        slidesPerView: 2,
        spaceBetween: rem(3.4),
        loop: true,

        breakpoints: {
            401: {
                spaceBetween: rem(4),
                slidesPerView: 3,
            },
            1001: {
                spaceBetween: rem(15),
                slidesPerView: 3,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.about__swiper-btn-next',
            prevEl: '.about__swiper-btn-prev',
        },
    });
};

export default aboutSwiper;
