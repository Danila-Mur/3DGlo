import animate from './animate';

const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = calcBlock.querySelector('.calc-type'),
    calcSquare = calcBlock.querySelector('.calc-square'),
    calcCount = calcBlock.querySelector('.calc-count'),
    calcDay = calcBlock.querySelector('.calc-day'),
    total = calcBlock.querySelector('#total');

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }
    animate({
      timing(timeFraction) {
        return timeFraction;
      },
      duration: 200,
      draw(progress) {
        total.textContent = Math.round(progress * totalValue);
      },
    });
  };

  calcBlock.addEventListener('input', (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });
};

export default calc;
