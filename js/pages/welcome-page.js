import WelcomeView from './../views/welcome-view';

export default class WelcomePage {
  constructor(nextPage) {
    this._welcomePage = new WelcomeView();

    this._welcomePage.onPlayClick = () => {
      nextPage();
    };
  }

  get element() {
    return this._welcomePage.element;
  }
}
