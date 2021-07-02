const iconMenu = document.getElementById('icon-menu');
const menu = document.getElementById('menu');
/* const displayNone = document.getElementById('menu').style.display = 'none'; */

iconMenu.addEventListener('click', (bodyClick) => {
    menu.classList.remove('none')
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
})





