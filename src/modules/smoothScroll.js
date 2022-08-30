import { scrollIntoView } from 'seamless-scroll-polyfill';

const smoothScroll = () => {
  const serviceLink = document.querySelector('main>a'),
    menu = document.querySelector('menu'),
    menuItems = menu.querySelectorAll('li>a');

  const scroolTo = (item) => {
    const section = document.querySelector(item.getAttribute('href'));

    if (section) {
      scrollIntoView(section, {
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    }
  };

  serviceLink.addEventListener('click', (e) => {
    e.preventDefault();

    scroolTo(serviceLink);
  });

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (e) => {
      e.preventDefault();

      scroolTo(menuItem);
    });
  });
};

export default smoothScroll;
