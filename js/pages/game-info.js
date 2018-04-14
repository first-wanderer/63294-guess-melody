export default (info) => {
  let minutes = Math.trunc(info.time / 60);
  let seconds = Math.trunc(info.time - (60 * minutes));

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
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
  ${new Array(info.mistakes)
      .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`)
      .join(``)}
</div>`;
};
