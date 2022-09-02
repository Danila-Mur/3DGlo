const slider = (slider, slideElements) => {
  const sliderBlock = document.querySelector(slider),
    slides = document.querySelectorAll(slideElements),
    dotBlock = document.querySelector('.portfolio-dots');

  const timeInterval = 2000;

  let currentSlide = 0;
  let interval;

  if (!sliderBlock || !slides) {
    return;
  }

  const slidesArr = [...slides];
  let newDots = slidesArr.map((current, index) => {
    const newDot = document.createElement('li');
    if (index === 0) {
      newDot.classList.add('dot-active');
    }
    newDot.classList.add('dot');
    dotBlock.append(newDot);
    return newDot;
  });

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(newDots, currentSlide, 'dot-active');
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(newDots, currentSlide, 'dot-active');
  };

  const startSlide = (timer = 500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot, .portfolio-btn')) {
      return;
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(newDots, currentSlide, 'dot-active');

    if (e.target.matches('#arrow-right')) {
      currentSlide++;
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--;
    } else if (e.target.classList.contains('dot')) {
      newDots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(newDots, currentSlide, 'dot-active');
  });

  sliderBlock.addEventListener(
    'mouseenter',
    (e) => {
      if (e.target.matches('.dot, .portfolio-btn')) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    'mouseleave',
    (e) => {
      if (e.target.matches('.dot, .portfolio-btn')) {
        startSlide(timeInterval);
      }
    },
    true
  );

  startSlide(timeInterval);
};

export default slider;
