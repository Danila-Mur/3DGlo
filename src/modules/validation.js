import validateForm from './validateForm';

const validation = () => {
  const calcItem = document.querySelectorAll('.calc-item'),
    textInputs = [
      ...document.querySelectorAll('*[name="user_name"]'),
      document.querySelector('*[name="user_message"]'),
    ],
    emailInputs = document.querySelectorAll('*[name="user_email"]'),
    telInputs = document.querySelectorAll('*[name="user_phone"]');

  const validationCalc = ({ target }) =>
    (target.value = target.value.replace(/[^0-9\.]/, ''));

  const validation = ({ target }) =>
    target.classList.contains('error') &&
    validateForm([target]) &&
    target.classList.remove('error');

  const validationCyrillic = ({ target }) => {
    (target.value = target.value.replace(/[^а-яА-я\-\s]/, ''));
    validation({ target });
  }

  const validationEmail = ({ target }) => {
    target.value = target.value.replace(/[^\w\.!#$%&'*+/=?^`@{|}~-]/, '');
    validation({ target });
  };

  calcItem.forEach((item) => item.addEventListener('input', validationCalc));
  textInputs.forEach((input) => input.addEventListener('input', validationCyrillic));
  emailInputs.forEach((email) => email.addEventListener('input', validationEmail));
  telInputs.forEach((tel) => tel.addEventListener('input', validation));

};

export default validation;
