import AbstractView from './abstract-view';
import {SECONDS_BASE, DECIMAL_BASE} from '../constants';

export default class InfoView extends AbstractView {
  constructor(info) {
    super();
    this._info = info;
  }

  get template() {
    let minutes = Math.trunc(this._info.time / SECONDS_BASE);
    let seconds = Math.trunc(this._info.time - (SECONDS_BASE * minutes));

    if (minutes < DECIMAL_BASE) {
      minutes = `0${minutes}`;
    }

    if (seconds < DECIMAL_BASE) {
      seconds = `0${seconds}`;
    }

    return `<div>
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">${minutes}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${seconds}</span>
      </div>
    </svg>
    <div class="main-mistakes">
      ${new Array(this._info.mistakes)
      .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`)
      .join(``)}
    </div>
    </div>`;
  }
}
