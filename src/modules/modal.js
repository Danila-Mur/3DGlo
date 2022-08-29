const modal = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.popup-btn'),
      modal = document.querySelector('.popup'),
      closeBtn = modal.querySelector('.popup-close');

    if (document.documentElement.clientWidth >= 768) {
      modal.style.transform = 'scaleY(0)';
      modal.style.transformOrigin = 'top';
      modal.style.display = 'block';
    } else {
      modal.style.display = 'none';
    }

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (document.documentElement.clientWidth >= 768) {
          modal.style.transition = 'all 1s';
          modal.style.transform = 'scaleY(1)';
        } else {
          modal.style.display = 'block';
        }
      });
    });

    closeBtn.addEventListener('click', () => {
      if (document.documentElement.clientWidth >= 768) {
        modal.style.transform = 'scaleY(0)';
      } else {
        modal.style.display = 'none';
      }
    });
  });
};

export default modal;
