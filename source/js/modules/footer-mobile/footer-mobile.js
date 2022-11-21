import openFooterAddressMore from './footer-address';
import openFooterNavMore from './footer-nav';

const buttonReadMore = document.querySelectorAll('[data-more-button]');
const buttonReadNavMore = document.querySelector('[data-nav-button]');
const buttonReadAddressMore = document.querySelector('[data-address-button]');
const footerAddressMore = document.querySelector('[data-address-content]');
const footerNavMore = document.querySelector('[data-nav-content]');

const footerMobile = ()=>{
  openFooterNavMore();
  openFooterAddressMore();
  buttonReadMore.forEach((el)=>{
    el.addEventListener('click', ()=>{
      if (buttonReadNavMore === el) {
        footerAddressMore.classList.remove('footer-container__footer-list--opened');
        footerAddressMore.classList.add('footer-container__footer-list--closed');

        buttonReadAddressMore.classList.remove('footer-container__title-button--opened');
        buttonReadAddressMore.classList.add('footer-container__title-button--closed');
      }
      if (buttonReadAddressMore === el) {
        footerNavMore.classList.remove('footer-container__footer-list--opened');
        footerNavMore.classList.add('footer-container__footer-list--closed');

        buttonReadNavMore.classList.remove('footer-container__title-button--opened');
        buttonReadNavMore.classList.add('footer-container__title-button--closed');
      }
    });
  });
};

export default footerMobile;
