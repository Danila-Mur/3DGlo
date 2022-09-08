const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

const validate = (list) => {
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
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
        ''
      )
    ) {
      return true;
    }
  };

  list.forEach((input) => {
    // if (!input.classList.contains('success')) {
    //   success = false;
    // }
    if (input.getAttribute('name') === 'user_name') {
      if (!validationName(input)) {
        success = false;
      }
    } else if (input.getAttribute('name') === 'user_phone') {
      if (!validationPhone(input)) {
        success = false;
      }
    } else if (input.getAttribute('name') === 'user_email') {
      if (!validationEmail(input)) {
        success = false;
      }
    }
  });

  return success;
};

export { animate, validate };
