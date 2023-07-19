const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
registerLink.addEventListener('click', ()=> { wrapper.classList.add('active');
});
const btnPopup = document.querySelector('.btnLogin-popup');
const iconclose = document.querySelector('.iconClose');

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});
