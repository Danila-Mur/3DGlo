const validateForm = (list) => {
  let success = true;

  const validationName = (input) =>
    input.value.trim().length >= 2 ? true : false;

  const validationPhone = (input) =>
    input.value.trim().length >= 18 ? true : false;

  const validationEmail = (input) =>
    /^[\w.!#$%&'*+/=?^`{|}~-]+@([a-zA-Z])+\.([a-zA-Z]){2,3}$/.test(
      input.value.trim()
    )
      ? true
      : false;

  list.forEach((input) => {
    if (
      (input.getAttribute('name') === 'user_name' && !validationName(input)) ||
      (input.getAttribute('name') === 'user_phone' &&
        !validationPhone(input)) ||
      (input.getAttribute('name') === 'user_email' && !validationEmail(input))
    ) {
      success = false;
      input.classList.add('error');
    }
  });

  return success;
};

export default validateForm;
