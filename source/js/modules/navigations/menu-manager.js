export class NavigationManager {
  #MENU_OPENED_PART = 'opened';
  #MENU_CLOSED_PART = 'closed';
  #LOCK_SELECTOR = 'page__lock';
  #MENU_ITEM_NAVIGATION_SELECTOR = '[data-scroll-to]';

  constructor(buttonClassName, menuClassName) {
    this.buttonClassName = buttonClassName;
    this.menuClassName = menuClassName;
  }

  #getBEMModificator(className, modificator) {
    return `${className}--${modificator}`;
  }

  #showNavigationMenu(button, isOpenClassName, isClosedClassName) {
    button.classList.add(isOpenClassName);
    button.classList.remove(isClosedClassName);
    document.body.classList.add(this.#LOCK_SELECTOR);
  }

  #closeNavigationMenu(button, isOpenClassName, isClosedClassName) {
    button.classList.remove(isOpenClassName);
    button.classList.add(isClosedClassName);
    document.body.classList.remove(this.#LOCK_SELECTOR);
  }

  initialize() {
    const button = document.querySelector(`.${this.buttonClassName}`);
    if (button) {
      const menu = document.querySelector(`.${this.menuClassName}`);
      const isOpenClassName = this.#getBEMModificator(this.buttonClassName, this.#MENU_OPENED_PART);
      const isClosedClassName = this.#getBEMModificator(this.buttonClassName, this.#MENU_CLOSED_PART);
      button.addEventListener('click', () => {
        if (button.classList.contains(isOpenClassName)) {
          this.#closeNavigationMenu(button, isOpenClassName, isClosedClassName);
        } else {
          this.#showNavigationMenu(button, isOpenClassName, isClosedClassName);
        }
      });

      window.addEventListener('resize', () => {
        this.#closeNavigationMenu(button, isOpenClassName, isClosedClassName);
      });

      document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== button && button.classList.contains(isOpenClassName)) {
          this.#closeNavigationMenu(button, isOpenClassName, isClosedClassName);
        }
      });

      const menuItems = document.querySelectorAll(this.#MENU_ITEM_NAVIGATION_SELECTOR);
      menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', () => {
          const targetSection = document.querySelector(menuItem.getAttribute('data-scroll-to'));
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            this.#closeNavigationMenu(button, isOpenClassName, isClosedClassName);
          }
        });
      });
    }
  }
}
