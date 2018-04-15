import AbstractView from './abstract-view';

export default class ArtistView extends AbstractView {
  constructor(question) {
    super();
    this._question = question;
  }

  get template() {
    const answerTemplate = (answer, index) => `<div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${index}"/>
      <label class="main-answer" for="answer-${index}">
        <img class="main-answer-preview" src="${answer.image}"
            alt="${answer.artist}" width="134" height="134">
          ${answer.artist}
      </label>
    </div>`;

    return `<section class="main main--level main--level-artist">
      <div class="main-wrap">
        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio src="${this._question.src}"></audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
          ${this._question.answers.map(answerTemplate).join(``)}
        </form>
      </div>
    </section>`;
  }

  bind(element) {
    const answerButtons = Array.from(element.querySelectorAll(`.main-answer`));

    answerButtons.forEach((button) => {
      button.addEventListener(`click`, (event) => {
        this.onAnswerClick(event.currentTarget.innerText === this._question.rightAnswer);
      });
    });
  }

  onAnswerClick() {}
}
