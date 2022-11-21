const closedFooterMore = 'footer-container__footer-list--closed';
const openedFooterMore = 'footer-container__footer-list--opened';
const closedButtonFooterMore = 'footer-container__title-button--closed';
const openedButtonFooterMore = 'footer-container__title-button--opened';
const buttonReadMore = document.querySelector('[data-nav-button]');
const footerNavMore = document.querySelector('[data-nav-content]');

const openFooterNavMore = ()=> {
  footerNavMore.classList.remove(openedFooterMore);
  footerNavMore.classList.add(closedFooterMore);
  buttonReadMore.addEventListener('click', ()=>{
    if (footerNavMore.classList.contains(closedFooterMore)) {
      footerNavMore.classList.add(openedFooterMore);
      footerNavMore.classList.remove(closedFooterMore);
      buttonReadMore.classList.remove(closedButtonFooterMore);
      buttonReadMore.classList.add(openedButtonFooterMore);
    } else {
      footerNavMore.classList.add(closedFooterMore);
      footerNavMore.classList.remove(openedFooterMore);
      buttonReadMore.classList.add(closedButtonFooterMore);
      buttonReadMore.classList.remove(openedButtonFooterMore);
    }
  });
};
export default openFooterNavMore;
