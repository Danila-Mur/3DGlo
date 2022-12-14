import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import smoothScroll from './modules/smoothScroll';
import validation from './modules/validation';
import slider from './modules/slider';
import tabs from './modules/tabs';
import calc from './modules/calc';

timer('5 september 2022');
menu();
modal();
smoothScroll();
validation();
slider('.portfolio-content', '.portfolio-item');
tabs();
calc(100);
