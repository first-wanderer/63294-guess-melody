import {INITIAL_GAME, previousGames} from './data/game-data';
import {generateQuestions} from './generate-questions';
import getScore from './get-score';
import getResult from './get-result';

export default class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return this._state;
  }

  get currentQuestion() {
    return this._questions[this._state.questionNumber];
  }

  get result() {
    const remainingNotes = 3 - this._state.mistakes;
    const quickAnswers = this._answers.filter((item) => item.rightAnswer && item.spentTime < 30);

    const currentGame = {
      score: getScore(this._answers, remainingNotes),
      remainingTime: this._state.time,
      remainingNotes,
      quickAnswers: quickAnswers.length
    };

    return getResult(previousGames, currentGame);
  }

  restart() {
    this._state = Object.assign({}, INITIAL_GAME);
    this._answers = [];
    this._questions = generateQuestions();
  }

  putNewAnswer(rightAnswer, answerDuration) {
    this._answers.push({
      rightAnswer,
      spentTime: answerDuration
    });

    if (!rightAnswer) {
      this._state.mistakes++;
    }

    this._state.questionNumber++;
  }

  tick() {
    this._state.time--;
  }

  canContinue() {
    return this._state.questionNumber < this._questions.length && this._state.mistakes < 3 && this._state.time > 0;
  }
}
