/* Функционал открытия многоуровнего меню в хедере */
const header__catalog__menu = document.getElementById("header__catalog__menu");
const header__catalog__menu__button = document.getElementById(
  "header__catalog__menu__button"
);

header__catalog__menu__button.addEventListener("click", (e) => {
  if (e.target != header__catalog__menu) {
    header__catalog__menu.classList.toggle("header__catalog__menu__disactive");

    if (header__catalog__menu__item__active) {
      header__catalog__menu__item__active
        .querySelector(".header__catalog__menu__item__submenu")
        .classList.remove("header__catalog__menu__item__submenu__active");

      header__catalog__menu__item__active.classList.remove(
        "header__catalog__menu__item__active"
      );
      header__catalog__menu__item__active = null;
    }
  }
});

/* /Функционал открытия многоуровнего меню в хедере/ */

/* Функционал открытия подменю в многоуровневом меню хедера */
const header__catalog__menu__items__withSubMenu = document.querySelectorAll(
  ".header__catalog__menu__item__withSubMenu"
);
let header__catalog__menu__item__active = null;

for (let header__catalog__menu__item__withSubMenu of header__catalog__menu__items__withSubMenu) {
  const submenu = header__catalog__menu__item__withSubMenu.querySelector(
    ".header__catalog__menu__item__submenu"
  );

  header__catalog__menu__item__withSubMenu.addEventListener(
    "mouseenter",
    (e) => {
      if (header__catalog__menu__item__active != e.target) {
        if (header__catalog__menu__item__active) {
          header__catalog__menu__item__active
            .querySelector(".header__catalog__menu__item__submenu")
            .classList.remove("header__catalog__menu__item__submenu__active");

          header__catalog__menu__item__active.classList.remove(
            "header__catalog__menu__item__active"
          );
        }
        header__catalog__menu__item__active = e.target;

        submenu.classList.add("header__catalog__menu__item__submenu__active");

        header__catalog__menu__item__withSubMenu.classList.add(
          "header__catalog__menu__item__active"
        );
      }
    }
  );
}

/* /Функционал открытия подменю в многоуровневом меню хедера/ */
