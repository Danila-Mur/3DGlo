const menu = () => {
  const menuBtn = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeBtn = menu.querySelector('.close-btn'),
    menuItems = menu.querySelectorAll('ul>li>a');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.menu')) {
      menu.classList.add('active-menu');
    } else if (
      !e.target.closest('menu') ||
      e.target.classList.contains('close-btn') ||
      e.target.closest('a')
    ) {
      menu.classList.remove('active-menu');
    }
  });
};

export default menu;
