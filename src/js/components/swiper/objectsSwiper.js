import Swiper from 'swiper/bundle';
const objectsSwiper = () => {
    const swiper = new Swiper('.objects__swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.objects__swiper-btn-next',
            prevEl: '.objects__swiper-btn-prev',
        },
    });
};

export default objectsSwiper;
