const closedTextReadMore = 'main-advantage__about-us-description--closed';
const openedTextReadMore = 'main-advantage__about-us-description--opened';
const buttonReadMore = document.querySelector('[data-about-more-button]');
const textReadMore = document.querySelector('[data-about-more-text]');

const readMore = ()=> {
  textReadMore.classList.remove(openedTextReadMore);
  textReadMore.classList.add(closedTextReadMore);
  buttonReadMore.addEventListener('click', ()=>{
    if (textReadMore.classList.contains(closedTextReadMore)) {
      textReadMore.classList.add(openedTextReadMore);
      textReadMore.classList.remove(closedTextReadMore);
    } else {
      textReadMore.classList.add(closedTextReadMore);
      textReadMore.classList.remove(openedTextReadMore);
    }
  });
};
export default readMore;
