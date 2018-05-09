import AbstractView from './abstract-view';

export default class ErrorView extends AbstractView {
  constructor(error) {
    super();
    this._error = error;
  }

  get template() {
    return `<section class="main main--error">
      <h1 class="title">Что-то пошло не так.</h1>
      <div class="text">${this._error.message ? this._error.message : `Произошла непредвиденная ошибка. Попробуйте снова.`}</div>
    </section>`;
  }
}
