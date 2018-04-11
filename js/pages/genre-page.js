import getElementFromTemplate from './../get-element-from-template.js';
import togglePage from './../toggle-page.js';
import resultPage from './success-result-page.js';

const header = `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
  <circle
    cx="390" cy="390" r="370"
    class="timer-line"
    style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

  <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
    <span class="timer-value-mins">05</span><!--
    --><span class="timer-value-dots">:</span><!--
    --><span class="timer-value-secs">00</span>
  </div>
</svg>
<div class="main-mistakes">
  <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
  <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
  <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
</div>`;

const answer = `<div class="genre-answer">
  <div class="player-wrapper">
    <div class="player">
      <audio></audio>
      <button class="player-control player-control--pause"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
  <input type="checkbox" name="answer" value="answer-1" id="a-1">
  <label class="genre-answer-check" for="a-1"></label>
</div>`;

const pageTemplate = `<section class="main main--level main--level-genre">
  ${header}
  <div class="main-wrap">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      ${answer}
      ${answer}
      ${answer}
      ${answer}
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </div>
</section>`;

const pageElement = getElementFromTemplate(pageTemplate);
const sendButton = pageElement.querySelector(`.genre-answer-send`);
const answerInputs = Array.from(pageElement.querySelectorAll(`.genre-answer input`));

const disableSendButton = () => {
  sendButton.disabled = answerInputs.every((input) => !input.checked);
};

sendButton.addEventListener(`click`, () => {
  togglePage(resultPage);
});

answerInputs.forEach((input) => {
  input.addEventListener(`change`, () => {
    disableSendButton();
  });
});

disableSendButton();

export default pageElement;
