import {NUMBER_ERROR_STRING, ARRAY_ERROR_STRING} from './strings.js';

const getScore = (answers, noteCount) => {
  if (!Number.isInteger(noteCount) || noteCount < 0) {
    throw new Error(NUMBER_ERROR_STRING);
  }

  if (!Array.isArray(answers)) {
    throw new Error(ARRAY_ERROR_STRING);
  }

  if (noteCount === 0 || answers.length < 10) {
    return -1;
  }

  const mainScore = answers.reduce((score, currentAnswer) => {
    if (!currentAnswer.rightAnswer) {
      return score - 2;
    }

    return currentAnswer.spentTime < 30 ? score + 2 : score + 1;
  }, 0);

  return mainScore;
};

export default getScore;
