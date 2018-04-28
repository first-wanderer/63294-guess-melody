import AbstractView from './abstract-view';

export default class ResultView extends AbstractView {
  constructor(result) {
    super();
    this._result = result;
  }

  get template() {
    return `<section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">${this._result.title}</h2>
      <div class="main-stat">${this._result.stat}</div>
      ${this._result.type === `success` ? `<span class="main-comparison">${this._result.comparison}</span>` : ``}
      <span role="button" tabindex="0" class="main-replay">${this._result.buttonTitle}</span>
    </section>`;
  }

  bind(element) {
    const replayButton = element.querySelector(`.main-replay`);

    replayButton.addEventListener(`click`, (event) => {
      event.preventDefault();
      this.onReplayClick();
    });
  }

  onReplayClick() {}
}
