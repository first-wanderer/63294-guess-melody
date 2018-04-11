import getElementFromTemplate from './../get-element-from-template.js';
import togglePage from './../toggle-page.js';
import genrePage from './genre-page.js';

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
</div>`;

const answer = `<div class="main-answer-wrapper">
  <input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-2"/>
  <label class="main-answer" for="answer-2">
    <img class="main-answer-preview" src="http://placehold.it/134x134"
        alt="Краснознаменная дивизия имени моей бабушки" width="134" height="134">
    Краснознаменная дивизия имени моей бабушки
  </label>
</div>`;

const pageTemplate = `<section class="main main--level main--level-artist">
  ${header}
  <div class="main-wrap">
    <h2 class="title main-title">Кто исполняет эту песню?</h2>
    <div class="player-wrapper">
      <div class="player">
        <audio></audio>
        <button class="player-control player-control--pause"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>
    <form class="main-list">
      ${answer}
      ${answer}
      ${answer}
    </form>
  </div>
</section>`;

const pageElement = getElementFromTemplate(pageTemplate);
const answerButtons = Array.from(pageElement.querySelectorAll(`.main-answer`));

answerButtons.forEach((button) => {
  button.addEventListener(`click`, () => {
    togglePage(genrePage);
  });
});

export default pageElement;
