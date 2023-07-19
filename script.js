const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if(bar){
    bar.addEventListener('click', () => {
        nav.style.display = "block"
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

