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
          <button class="player-control ${index === 0 ? `player-control--pause` : `player-control--play`}"></button>
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

    const controlButtons = element.querySelectorAll(`.player-control`);

    controlButtons.forEach((button) => {
      button.addEventListener(`click`, (event) => {
        event.preventDefault();

        const currentControl = event.currentTarget;
        if (currentControl.previousElementSibling.paused) {
          controlButtons.forEach((audioControl) => {
            if (audioControl === currentControl) {
              audioControl.classList.remove(`player-control--play`);
              audioControl.classList.add(`player-control--pause`);

              audioControl.previousElementSibling.play();
            } else {
              audioControl.classList.remove(`player-control--pause`);
              audioControl.classList.add(`player-control--play`);

              audioControl.previousElementSibling.pause();
            }
          });
        } else {
          currentControl.classList.remove(`player-control--pause`);
          currentControl.classList.add(`player-control--play`);

          currentControl.previousElementSibling.pause();
        }
      });
    });
  }

  onAnswer() {}
}
