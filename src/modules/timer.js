const timer = (deadline) => {
  const timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');
  let interval;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;

    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    const formatHours = hours < 10 ? '0' + hours : hours;
    const formatMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formatSeconds = seconds < 10 ? '0' + seconds : seconds;

    return {
      timeRemaining,
      formatHours,
      formatMinutes,
      formatSeconds,
    };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerHours.textContent = getTime.formatHours;
    timerMinutes.textContent = getTime.formatMinutes;
    timerSeconds.textContent = getTime.formatSeconds;

    if (getTime.timeRemaining < 0) {
      clearInterval(interval);
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  };

  updateClock();
  interval = setInterval(updateClock, 1000);
};

export default timer;
