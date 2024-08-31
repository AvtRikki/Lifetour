export class FormValidator {
  #INVALID_INPUT_CLASS_NAME = 'form__input--invalid';

  constructor(formClassName) {
    this.formClassName = formClassName;
  }

  initialize() {
    const form = document.querySelector(`.${this.formClassName}`);
    if (form) {
      const phoneField = document.querySelector('input[name="phone"]');
      const emailField = document.querySelector('input[name="email"]');

      if (phoneField) {
        phoneField.addEventListener('keydown', () => {
          phoneField.classList.remove(this.#INVALID_INPUT_CLASS_NAME);
        });
      }

      if (emailField) {
        emailField.addEventListener('keydown', () => {
          emailField.classList.remove(this.#INVALID_INPUT_CLASS_NAME);
        });
      }

      let isInvalid = false;
      form.addEventListener('submit', (e) => {
        if (phoneField) {
          phoneField.classList.remove(this.#INVALID_INPUT_CLASS_NAME);
          const phoneRegex = /^[0-9+()\- ]+$/;
          if (!phoneRegex.test(phoneField.value)) {
            phoneField.classList.add(this.#INVALID_INPUT_CLASS_NAME);
            isInvalid = true;
          }
        }

        if (emailField) {
          emailField.classList.remove(this.#INVALID_INPUT_CLASS_NAME);
          const emailRegex = /^[a-zA-Za-яA-Я0-9._%+-]+@[a-zA-Za-яA-Я0-9.-]+\.[a-zA-Zрф]{2,}$/;
          if (!emailRegex.test(emailField.value)) {
            emailField.classList.add(this.#INVALID_INPUT_CLASS_NAME);
            isInvalid = true;
          }
        }

        if (isInvalid) {
          e.preventDefault();
        }
      });
    }
  }
}
