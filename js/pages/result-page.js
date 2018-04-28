import ResultView from './../views/result-view';

export default class ResultPage {
  constructor(userResult, nextPage) {
    this._resultPage = new ResultView(userResult);

    this._resultPage.onReplayClick = () => {
      nextPage();
    };
  }

  get element() {
    return this._resultPage.element;
  }
}
