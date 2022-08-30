import animate from './animate';

const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn'),
    modal = document.querySelector('.popup'),
    closeBtn = modal.querySelector('.popup-close');

  modal.style.display = 'none';

  const hideBlock = () => {
    modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (document.documentElement.clientWidth >= 768) {
        animate({
          timing(timeFraction) {
            return timeFraction;
          },
          duration: 500,
          draw(progress) {
            modal.style.display = 'block';
            modal.style.opacity = `${progress}`;
          },
        });
      } else {
        hideBlock();
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    if (document.documentElement.clientWidth >= 768) {
      animate({
        timing(timeFraction) {
          return 1 - timeFraction;
        },
        duration: 500,
        draw(progress) {
          modal.style.opacity = `${progress}`;

          setTimeout(() => {
            modal.style.display = 'none';
          }, 500);
        },
      });
    } else {
      hideBlock();
    }
  });
};

export default modal;
