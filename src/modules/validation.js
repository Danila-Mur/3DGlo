const validation = () => {
  const calcItem = document.querySelectorAll('.calc-item'),
    topForm = document.querySelector('#form1'),
    nameTopInput = topForm.querySelector('input[type=text]'),
    emailTopInput = topForm.querySelector('input[type=email]'),
    telTopInput = topForm.querySelector('input[type=tel]'),
    bottomForm = document.querySelector('#form2'),
    nameBottomInput = bottomForm.querySelector('input[type=text]'),
    messageBottom = bottomForm.querySelector('.mess'),
    emailBottomInput = bottomForm.querySelector('input[type=email]'),
    telBottomInput = bottomForm.querySelector('input[type=tel]'),
    popupForm = document.querySelector('#form3'),
    namePopupInput = popupForm.querySelector('input[type=text]'),
    emailPopupInput = popupForm.querySelector('input[type=email]'),
    telPopupInput = popupForm.querySelector('input[type=tel]');

  const validationCyrillic = (input) => {
    return !/[^а-яА-я\-\s]/.test(input.value) && input.value.trim() !== '';
  };

  const validationEmail = (email) => {
    return /\S+[\w\.-]+@\S+\.\S+/.test(email.value) && email.value.trim() != '';
  };

  const validationTel = (tel) => {
    return /^[0-9()\-]+$/.test(tel.value) && tel.value.trim() != '';
  };

  calcItem.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9\.]/, '');
    });
  });

  topForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isError = false;

    if (validationCyrillic(nameTopInput)) {
      alert('Кирилица topForm');
    } else {
      isError = true;
    }

    if (validationEmail(emailTopInput)) {
      alert('email');
    } else {
      isError = true;
    }

    if (validationTel(telTopInput)) {
      alert('tel');
    } else {
      isError = true;
    }

    if (!isError) {
      alert('Done');
    }
  });

  bottomForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isError = false;

    if (validationCyrillic(nameBottomInput)) {
      alert('Кирилица bottomForm input');
    } else {
      isError = true;
    }

    if (validationCyrillic(messageBottom)) {
      alert('Кирилица bottomForm textarea');
    } else {
      isError = true;
    }

    if (validationEmail(emailBottomInput)) {
      alert('email');
    } else {
      isError = true;
    }

    if (validationTel(telBottomInput)) {
      alert('tel');
    } else {
      isError = true;
    }

    if (!isError) {
      alert('Done');
    }
  });

  popupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isError = false;

    if (validationCyrillic(namePopupInput)) {
      alert('Кирилица bottomForm input');
    } else {
      isError = true;
    }

    if (validationEmail(emailPopupInput)) {
      alert('email popup');
    } else {
      isError = true;
    }

    if (validationTel(telPopupInput)) {
      alert('tel');
    } else {
      isError = true;
    }

    if (!isError) {
      alert('Done');
    }
  });
};

export default validation;
