import maskPhone from './maskPhone';

const validateForm = (list) => {
  let success = true;

  const validationName = (input) => {
    if (input.value.length >= 2 && input.value.trim()) {
      return true;
    }
  };

  const validationEmail = (input) => {
    if (
      input.value.replace(
        /^[\w\.!#$%&'*+/=?^`{|}~-]+@(([\w][^\_])+\.)+(\w[^\_0-9]){0,3}$/,
        ''
      )
    ) {
      return true;
    }
  };

  list.forEach((input) => {
    if (input.getAttribute('name') === 'user_name') {
      console.log('(!validationName(input)): ', !validationName(input));
      if (!validationName(input)) {
        success = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    }
    if (input.getAttribute('name') === 'user_phone') {
      console.log(
        '(!validationPhone(input)): ',
        !maskPhone('*[name="user_phone"]')
      );
      maskPhone('*[name="user_phone"]');
      let masked = '+7 (___)-___-__-__';
      // let masked;
      if (masked < 18) {
        success = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    }
    if (input.getAttribute('name') === 'user_email') {
      console.log('(!validationEmail(input)): ', !validationEmail(input));
      if (!validationEmail(input)) {
        success = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    }
  });

  return success;
};

export default validateForm;
