const iconMenu = document.getElementById('icon-menu');
const menu = document.getElementById('menu');

iconMenu.addEventListener('click', (bodyClick) => {
    menu.classList.remove('none')
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
    iconMenu.addEventListener('click', (e) => {
        menu.classList.toggle('none')
    })
})





