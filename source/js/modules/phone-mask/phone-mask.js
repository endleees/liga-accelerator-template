import iMask from 'imask';
const phoneInput = document.querySelectorAll('[data-phone-mask]');
const setphoneMask = ()=> {
  phoneInput.forEach((el)=>{
    el.addEventListener('click', () => {
      const maskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false,
      };
      iMask(el, maskOptions);
    });
  });
};

export default setphoneMask;
