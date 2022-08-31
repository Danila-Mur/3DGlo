const validation = () => {
  const calcItem = document.querySelectorAll('.calc-item'),
    textInputs = [
      document.querySelector('#form1 input[type=text]'),
      document.querySelector('#form2 input[type=text]'),
      document.querySelector('#form2 .mess'),
      document.querySelector('#form3 input[type=text]'),
    ],
    emailInputs = [
      document.querySelector('#form1 input[type=email]'),
      document.querySelector('#form2 input[type=email]'),
      document.querySelector('#form3 input[type=email]'),
    ],
    telInputs = [
      document.querySelector('#form1 input[type=tel]'),
      document.querySelector('#form2 input[type=tel]'),
      document.querySelector('#form3 input[type=tel]'),
    ];

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
