const closedFooterMore = 'footer-container__footer-list--closed';
const openedFooterMore = 'footer-container__footer-list--opened';
const closedButtonFooterMore = 'footer-container__title-button--closed';
const openedButtonFooterMore = 'footer-container__title-button--opened';
const buttonReadMore = document.querySelector('[data-address-button]');
const footerAddressMore = document.querySelector('[data-address-content]');

const openFooterAddressMore = ()=> {
  footerAddressMore.classList.remove(openedFooterMore);
  footerAddressMore.classList.add(closedFooterMore);
  buttonReadMore.addEventListener('click', ()=>{
    if (footerAddressMore.classList.contains(closedFooterMore)) {
      footerAddressMore.classList.remove(closedFooterMore);
      footerAddressMore.classList.add(openedFooterMore);
      buttonReadMore.classList.remove(closedButtonFooterMore);
      buttonReadMore.classList.add(openedButtonFooterMore);

    } else {
      footerAddressMore.classList.add(closedFooterMore);
      footerAddressMore.classList.remove(openedFooterMore);
      buttonReadMore.classList.add(closedButtonFooterMore);
      buttonReadMore.classList.remove(openedButtonFooterMore);
    }
  });
};
export default openFooterAddressMore;
