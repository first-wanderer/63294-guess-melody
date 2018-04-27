import {getStringByAlias} from './strings';

class Timer {
  constructor(time, onTimerEndCallback) {
    if (!Number.isInteger(time) || time <= 0) {
      throw new Error(getStringByAlias(`numberError`));
    }

    this._remainingTime = time;
    this._lastAnswerTime = time;
    this._finishTimer = onTimerEndCallback;
  }

  get answerDuration() {
    const duration = this._lastAnswerTime - this._remainingTime;
    this._lastAnswerTime = this._remainingTime;

    return duration;
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
