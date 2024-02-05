import './index.scss';
import 'swiper/swiper-bundle.css';
import certificateSwiper from './js/components/swiper/certificateSwiper';
import objectsSwiper from './js/components/swiper/objectsSwiper';
import aboutSwiper from './js/components/swiper/aboutSwiper';
import burger from './js/components/burger';
import tabs from './js/components/tabs';

import popup from './js/components/popup';
import form from './js/components/form';
import phoneMask from './js/components/phoneMask';
import scroll from './js/components/scroll';
import dropDown from './js/components/dropDown';

window.addEventListener('DOMContentLoaded', () => {
    try {
        certificateSwiper();
    } catch {}
    try {
        objectsSwiper();
    } catch {}
    try {
        aboutSwiper();
    } catch {}
    try {
        burger();
    } catch {}
    try {
        tabs();
    } catch {}
    try {
        popup();
    } catch {}
    try {
        form();
    } catch {}
    try {
        phoneMask();
    } catch {}
    try {
        scroll();
    } catch {}
    try {
        dropDown();
    } catch {}
});
