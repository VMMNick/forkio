let burgerMenu = document.querySelector('.block-menu__burger');
let popUpMenus = document.querySelector('.menu-burger-list__pop-up-menus');

let activeBurgerMenu = (event) =>{
    event.preventDefault();
    event.stopPropagation();
    if(event.target.classList.contains('burger')){
        burgerMenu.classList.remove('burger');
        popUpMenus.classList.remove('menus');
    }else{
        burgerMenu.classList.add('burger');
        popUpMenus.classList.add('menus');
    }
}

burgerMenu.addEventListener('click', activeBurgerMenu);
