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
    if (
      input.value.replace(
        /^[\w.!#$%&'*+/=?^`{|}~-]+@([a-zA-Z])+\.([a-zA-Z]){2,3}$/,
        ''
      )
    ) {
      return true;
    }
  };

  list.forEach((input) => {
    if (input.getAttribute('name') === 'user_name') {
      if (!validationName(input)) {
        success = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    }
    if (input.getAttribute('name') === 'user_phone') {
      if (!validationPhone(input)) {
        success = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    }
    if (input.getAttribute('name') === 'user_email') {
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
