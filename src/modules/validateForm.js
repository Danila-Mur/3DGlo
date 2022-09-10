const validateForm = (list) => {
  let success = true;

  const validationName = (input) => {
    if (input.value.length >= 2 && input.value.trim()) {
      return true;
    }
  };

  const validationPhone = (input) => {
    if (
      input.value.replace(
        /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
        ''
      )
    ) {
      return true;
    }
  };

  const validationEmail = (input) => {
    if (input.value.replace(/^[\w\.!#$%&'*+/=?^`{|}~-]+@(([\w][^\_])+\.)+(\w[^\_0-9]){0,3}$/, '')) {
      return true;
    }
  };

  list.forEach((input) => {
    // if (!input.classList.contains('success')) {
    //   success = false;
    // }
    if (input.getAttribute('name') === 'user_name') {
      console.log('(!validationName(input)): ', !validationName(input));
      if (!validationName(input)) {
        success = false;
        input.classList.add('error');
      }
    }
    if (input.getAttribute('name') === 'user_phone') {
      console.log('(!validationPhone(input)): ', !validationPhone(input));
      if (!validationPhone(input)) {
        success = false;
        input.classList.add('error');
      }
    }
    if (input.getAttribute('name') === 'user_email') {
      console.log('(!validationEmail(input)): ', !validationEmail(input));
      if (!validationEmail(input)) {
        success = false;
        input.classList.add('error');
      }
    }
  });

  return success;
};

export default validateForm;