const toggleBtn = document.querySelector('.nav_toogleBtn');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_icons');

toggleBtn.addEventListener('click' , function(){
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});