import AbstractView from './abstract-view';

export default class GenreView extends AbstractView {
  constructor(question) {
    super();
    this._question = question;
  }

  get template() {
    const answerTemplate = (answer, index) => `<div class="genre-answer">
      <div class="player-wrapper">
        <div class="player">
          <audio src="${answer.src}" ${index === 0 ? `autoplay` : ``}></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <input type="checkbox" name="answer" value="answer-${index}" id="a-${index}">
      <label class="genre-answer-check" for="a-${index}"></label>
    </div>`;

    return `<section class="main main--level main--level-genre">
      <div class="main-wrap">
        <h2 class="title">Выберите ${this._question.genre} треки</h2>
        <form class="genre">
          ${this._question.answers.map(answerTemplate).join(``)}
          <button class="genre-answer-send" type="submit">Ответить</button>
        </form>
      </div>
    </section>`;
  }

  bind(element) {
    const genreForm = element.querySelector(`.genre`);

    genreForm.addEventListener(`submit`, (event) => {
      event.preventDefault();

      const rightAnswers = this._question.answers.map((item) => item.genre === this._question.genre);
      const userAnswers = Array.from(event.currentTarget.elements.answer).map((item) => item.checked);

      this.onAnswer(rightAnswers.every((item, index) => item === userAnswers[index]));
    });

    const sendButton = element.querySelector(`.genre-answer-send`);
    const answerInputs = Array.from(element.querySelectorAll(`.genre-answer input`));

    const disableSendButton = () => {
      sendButton.disabled = answerInputs.every((input) => !input.checked);
    };

    answerInputs.forEach((input) => {
      input.addEventListener(`change`, () => {
        disableSendButton();
      });
    });

    disableSendButton();
  }

  onAnswer() {}
}
