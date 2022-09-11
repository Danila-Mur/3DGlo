import validateForm from './validateForm';
import maskPhone from './maskPhone';

const validation = () => {
  const calcItem = document.querySelectorAll('.calc-item'),
    textInputs = [
      ...document.querySelectorAll('*[name="user_name"]'),
      document.querySelector('*[name="user_message"]'),
    ],
    emailInputs = document.querySelectorAll('*[name="user_email"]'),
    telInputs = document.querySelectorAll('*[name="user_phone"]');

  const validationCyrillic = (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-я\-\s]/, '');
  };

  const validationEmail = (e) => {
    e.target.value = e.target.value.replace(
      /^[\w\.!#$%&'*+/=?^`{|}~-]+@(([\w][^\_])+\.)+(\w[^\_0-9]){0,3}$/,
      ''
    );
  };

  calcItem.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9\.]/, '');
    });
  });

  textInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      validateForm([input]);
      if (input.classList.contains('error')) {
        validationCyrillic(e);
      }
      console.log('validateForm([input]): ', validateForm([input]));
    });
    input.addEventListener('foucs', (e) => {
      validateForm([input]);
      if (input.classList.contains('error')) {
        validationCyrillic(e);
      }
      console.log('validateForm([input]): ', validateForm([input]));
    });
  });

  emailInputs.forEach((email) => {
    email.addEventListener('input', (e) => {
      validateForm([email]);
      if (email.classList.contains('error')) {
        validationEmail(e);
      }
      console.log('validateForm([email]): ', validateForm([email]));
    });
    email.addEventListener('focus', (e) => {
      validateForm([email]);
      if (email.classList.contains('error')) {
        validationEmail(e);
      }
      console.log('validateForm([email]): ', validateForm([email]));
    });
  });

  telInputs.forEach((tel) => {
    tel.addEventListener('input', () => {
      validateForm([tel]);
      console.log('maskPhone()', maskPhone('*[name="user_phone"]', '+7 (___)-___-__-__'));
      if (tel.classList.contains('error')) {
        maskPhone('*[name="user_phone"]', '+7 (___)-___-__-__');
      }
      console.log('validateForm([tel]): ', validateForm([tel]));
    });
    tel.addEventListener('focus', () => {
      validateForm([tel]);
      console.log('maskPhone()', maskPhone('*[name="user_phone"]', '+7 (___)-___-__-__'));
      if (tel.classList.contains('error')) {
        maskPhone('*[name="user_phone"]', '+7 (___)-___-__-__');
      }
      console.log('validateForm([tel]): ', validateForm([tel]));
    });
  });
};

export default validation;
