// refs:
const refs = {
  timer: document.querySelector('#timer-1'),
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  seconds: document.querySelector('[data-value="secs"]'),
};

// creating timer class:
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  //
  updateTimer() {
    const currDate = Date.now();
    const time = this.targetDate - currDate;
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.seconds.textContent = `${seconds}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  clearTimer(time) {
    if (this.targetDate - Date.now() < 0) {
      clearInterval(this.setInt);
    }
  }

  setInt = setInterval(() => {
    this.updateTimer();
    this.clearTimer();
  }, 1000);
}

// create and load countdown timer:
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 17, 2021'),
});
timer.updateTimer();
