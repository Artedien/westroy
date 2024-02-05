import 'inputmask';
window.$ = window.jQuery = require('jquery');

const phoneMask = () => {
    const mask = new Inputmask('+7 (999) 999 99 99');
    mask.mask($('.phone-mask'));
}

export default phoneMask