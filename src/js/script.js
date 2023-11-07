let burgerMenu = document.querySelector(".block-menu__burger");
let popUpMenus = document.querySelector(".menu-burger-list__pop-up-menus");

let activeBurgerMenu = (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (e.target.classList.contains("burger")) {
    burgerMenu.classList.remove("burger");
    popUpMenus.classList.remove("menus");
  } else {
    burgerMenu.classList.add("burger");
    popUpMenus.classList.add("menus");
  }
};

function testWebP(e) {
  let r = new Image();
  r.onload = r.onerror = function () {
    e(2 == r.height);
  };
  r.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

burgerMenu.addEventListener("click", activeBurgerMenu);

testWebP(function (e) {
  if (1 == e) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
