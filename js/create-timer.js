class Timer {
  constructor(time, onTimerEndCallback) {
    this._remainingTime = time;
    this._finishTimer = onTimerEndCallback;
  }

  tick() {
    if (this._remainingTime === 0) {
      return false;
    }

    this._remainingTime -= 1;
    if (this._remainingTime === 0) {
      this._finishTimer();
    }

    return true;
  }
}

const createTimer = (time, onTimerEndCallback) => {
  if (!Number.isInteger(time) || time <= 0) {
    throw new Error(`Passed time should be a number bigger than 0.`);
  }

  if (typeof onTimerEndCallback !== `function`) {
    throw new Error(`Callback should be a Function.`);
  }

  return new Timer(time, onTimerEndCallback);
};

export default createTimer;
