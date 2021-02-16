const btn = document.querySelector('.btn');
const search = document.querySelector('.search');
const input = document.querySelector('.input');
const body = document.querySelector('body');
const html = document.querySelector('html');
let active = false;

btn.addEventListener('click', () => {
    active = !active;
    search.classList.toggle('active', active);
    input.focus();
});

html.addEventListener('click', (e) => {
    if (e.target !== btn) {
        search.classList.remove('active');
        active = false;
    }
});
