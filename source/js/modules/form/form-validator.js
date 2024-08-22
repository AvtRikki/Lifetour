export class FormValidator {
  constructor(formClassName) {
    this.formClassName = formClassName;
  }

  initialize() {
    const form = document.querySelector(`.${this.formClassName}`);
    if (form) {
      form.addEventListener('submit', (e) => {
        const phoneField = document.querySelector('input[name="phone"]');
        if (phoneField) {
          const phoneRegex = /^[0-9+()\- ]+$/;
          if (!phoneRegex.test(phoneField.value)) {
            e.preventDefault();
            return false;
          }
        }

        const emailField = document.querySelector('input[name="email"]');
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Zрф]{2,}$/;
        if (!emailRegex.test(emailField.value)) {
          e.preventDefault();
          return false;
        }
      });
    }
  }
}
