import validateForm from './validateForm';

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
    e.target.value = e.target.value.replace(/^[\w\.!#$%&'*+/=?^`{|}~-]+@(([\w][^\_])+\.)+(\w[^\_0-9]){0,3}$/, '');
  };

  const validationTel = (e) => {
    e.target.value = e.target.value.replace(/[a-zА-я!@#$%&*_=]+$/, '');
  };

  calcItem.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9\.]/, '');
    });
  });

  textInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      validationCyrillic(e);
      console.log('validateForm([input]): ', validateForm([input]));
      validateForm([input]);
    });
  });

  emailInputs.forEach((email) => {
    email.addEventListener('input', (e) => {
      validationEmail(e);
      console.log('validateForm([email]): ', validateForm([email]));
      validateForm([email]);
    });
  });

  telInputs.forEach((tel) => {
    tel.addEventListener('input', (e) => {
      validationTel(e);
      console.log('validateForm([tel]): ', validateForm([tel]));
      validateForm([tel]);
    });
  });
};

export default validation;
