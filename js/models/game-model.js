import {INITIAL_GAME} from '../data/game-data';
import getScore from '../get-score';
import {QUICK_ANSWER_TIME, MAX_NOTES} from '../constants';

export default class GameModel {
  constructor(questions) {
    this._questions = questions;
    this.restart();
  }

  get state() {
    return this._state;
  }

  get currentQuestion() {
    return this._questions[this._state.questionNumber];
  }

  get total() {
    const remainingNotes = MAX_NOTES - this._state.mistakes;
    const quickAnswers = this._answers.filter((item) => item.rightAnswer && item.spentTime < QUICK_ANSWER_TIME);

    return {
      score: getScore(this._answers, remainingNotes),
      remainingTime: this._state.time,
      remainingNotes,
      quickAnswers: quickAnswers.length
    };
  }

  restart() {
    this._state = Object.assign({}, INITIAL_GAME);
    this._answers = [];
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
    return this._state.questionNumber < this._questions.length && this._state.mistakes < MAX_NOTES && this._state.time > 0;
  }
}
