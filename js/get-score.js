import ResourceModel from './models/resource-model';
import {FAIL_SCORE, QUICK_ANSWER_TIME} from './constants';

const TOTAL_ANSWERS = 10;
const INITIAL_SCORE = 0;
const TWO_POINTS = 2;
const ONE_POINT = 1;

const getScore = (answers, noteCount) => {
  if (!Number.isInteger(noteCount) || noteCount < 0) {
    throw new Error(ResourceModel.getStringByAlias(`numberError`));
  }

  if (!Array.isArray(answers)) {
    throw new Error(ResourceModel.getStringByAlias(`arrayError`));
  }

  if (noteCount === 0 || answers.length < TOTAL_ANSWERS) {
    return FAIL_SCORE;
  }

  const mainScore = answers.reduce((score, currentAnswer) => {
    if (!currentAnswer.rightAnswer) {
      return score - TWO_POINTS;
    }

    return currentAnswer.spentTime < QUICK_ANSWER_TIME ? score + TWO_POINTS : score + ONE_POINT;
  }, INITIAL_SCORE);

  return mainScore;
};

export default getScore;
