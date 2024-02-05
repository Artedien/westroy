import Swiper from 'swiper/bundle';

const certificateSwiper = () => {
    var swiper = Swiper;
    var init = false;

    function swiperMode() {
        let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1000px)');
        let desktop = window.matchMedia('(min-width: 1000px)');

        if (desktop.matches) {
            if (!init) {
                init = true;
                swiper = new Swiper('.certificate__swiper', {
                    slidesPerView: 3,
                    spaceBetween:  0,
                    loop: true,
                    breakpoints: {
                        400: {
                            spaceBetween: 190,
                        }},
                    // Navigation arrows
                    navigation: {
                        nextEl: '.certificate__swiper-btn-next',
                        prevEl: '.certificate__swiper-btn-prev',
                    },
                });
            }

            // Disable (for desktop)
            else if (mobile.matches) {
                swiper.destroy();
                init = false;
            }
        }
    }

    swiperMode();

    // window.addEventListener('resize', function () {
    //     swiperMode();
    // });
};

export default certificateSwiper;
