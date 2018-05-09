import AbstractView from './abstract-view';

export default class PreloadingView extends AbstractView {
  get template() {
    return `<section class="main main--preloader">
      <h1 class="text">Загрузка...</h1>
      <div class="preloader"></div>
    </section>`;
  }
}
