class Timer {
  constructor(time, onTimerEndCallback) {
    if (!Number.isInteger(time) || time <= 0) {
      throw new Error(`Passed time should be a number bigger than 0.`);
    }

    this._remainingTime = time;
    this._finishTimer = onTimerEndCallback;
  }

  tick() {
    if (this._remainingTime-- === 0) {
      return false;
    }

    if (this._remainingTime === 0 && this._finishTimer) {
      this._finishTimer();
    }

    return true;
  }
}

export default Timer;
