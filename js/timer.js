import {getStringByAlias} from './strings.js';

class Timer {
  constructor(time, onTimerEndCallback) {
    if (!Number.isInteger(time) || time <= 0) {
      throw new Error(getStringByAlias(`numberError`));
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
