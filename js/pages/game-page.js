import ArtistView from './../views/artist-view';
import GenreView from './../views/genre-view';
import InfoView from './../views/info-view';
import {getStringByAlias} from '../strings';
import {QuestionType} from './../generate-questions';

export default class GamePage {
  constructor(model, nextPage) {
    this._model = model;
    this._nextPage = nextPage;

    this._info = new InfoView(this._model.state);
    this._question = this.getQuestionView(this._model.currentQuestion);

    this._rootContainer = document.createElement(`div`);
    this._rootContainer.appendChild(this._info.element);
    this._rootContainer.appendChild(this._question.element);
  }

  get element() {
    return this._rootContainer;
  }

  startGame() {
    this.changeQuestion();
  }

  finishGame() {
    this._nextPage(this._model.result);
  }

  changeQuestion() {
    this.updateInfo();
    this.updateQuestion();
  }

  getQuestionView(question) {
    let questionView;

    switch (question.type) {
      case QuestionType.ARTIST:
        questionView = new ArtistView(question);
        break;
      case QuestionType.GENRE:
        questionView = new GenreView(question);
        break;
      default:
        throw new Error(getStringByAlias(`unknownQuestionError`));
    }

    return questionView;
  }

  updateInfo() {
    const info = new InfoView(this._model.state);
    this._rootContainer.replaceChild(info.element, this._info.element);
    this._info = info;
  }

  updateQuestion() {
    const question = this.getQuestionView(this._model.currentQuestion);
    question.onAnswer = this.answerHandler.bind(this);
    this._rootContainer.replaceChild(question.element, this._question.element);
    this._question = question;
  }

  answerHandler(rightAnswer) {
    this._model.putNewAnswer(rightAnswer);

    if (this._model.canContinue()) {
      this.changeQuestion();
      return;
    }

    this.finishGame();
  }
}
