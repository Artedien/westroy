import './formModal';
import { formFieldsInit, formSubmit } from './formModal';

const form = () => {
    // form fields
    formFieldsInit({ viewPass: true });

    // submit form
    formSubmit();

    const name = document.querySelectorAll('.input--name');
    name.forEach((item) => {
        item.addEventListener('input', () => {
            const inputValue = item.value.trim();
            const span = item.parentElement.nextElementSibling;
            const parent = item.parentElement.parentElement;
            console.log(span)
            if (!/^[a-zA-Zа-яА-Я\s\-]+$/.test(inputValue) && inputValue != '') {
                span.classList.add('active');
                parent.classList.add('_form-error');
            } else {
                span.classList.remove('active');
                parent.classList.remove('_form-error');
            }
        });
    });

    const num = document.querySelectorAll('.input--num');

    num.forEach((item) => {
        item.addEventListener('input', () => {
            const inputValue = item.value.trim();
            const span = item.parentElement.nextElementSibling;
            const parent = item.parentElement.parentElement;

            if (!/^[0-9]+$/.test(inputValue) && inputValue != '') {
                span.classList.add('active');
                parent.classList.add('_form-error');
            } else {
                span.classList.remove('active');
                parent.classList.remove('_form-error');
            }
        });
    });
};

export default form;
