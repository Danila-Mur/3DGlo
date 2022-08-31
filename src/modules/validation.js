const validation = () => {
  const calcItem = document.querySelectorAll('.calc-item'),
    textInputs = [
      ...document.querySelectorAll('*[name="user_name"]'),
      document.querySelector('*[name="user_message"]'),
    ],
    emailInputs = document.querySelectorAll('*[name="email_name"]'),
    telInputs = document.querySelectorAll('*[name="user_phone"]');

  const validationCyrillic = (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-я\-\s]/, '');
  };

  const validationEmail = (e) => {
    e.target.value = e.target.value.replace(/\S+[\w\.-]+@\S+\.\S+/, '');
  };

  const validationTel = (e) => {
    e.target.value = e.target.value.replace(/[a-zА-я!@#$%&*_+=]+$/, '');
  };

  calcItem.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9\.]/, '');
    });
  });

  textInputs.forEach((input) => {
    input.addEventListener('input', validationCyrillic);
  });

  emailInputs.forEach((email) => {
    email.addEventListener('input', validationEmail);
  });

  telInputs.forEach((tel) => {
    tel.addEventListener('input', validationTel);
  });
};

export default validation;
