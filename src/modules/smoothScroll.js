import { scrollIntoView } from 'seamless-scroll-polyfill';

const smoothScroll = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const serviceLink = document.querySelector('main>a'),
      menu = document.querySelector('menu'),
      menuItems = menu.querySelectorAll('ul>li>a');

    serviceLink.addEventListener('click', (e) => {
      e.preventDefault();

      const section = document.querySelector(serviceLink.getAttribute('href'));

      if (section) {
        scrollIntoView(section, {
          behavior: 'smooth',
          block: 'start',
          inline: 'center',
        });
      }
    });

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', (e) => {
        e.preventDefault();

        const section = document.querySelector(menuItem.getAttribute('href'));

        if (section) {
          scrollIntoView(section, {
            behavior: 'smooth',
            block: 'start',
            inline: 'center',
          });
        }
      });
    });
  });
};

export default smoothScroll;
