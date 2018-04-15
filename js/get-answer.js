import getScore from './get-score';

export const getGameTotal = (game, answers) => {
  const remainingNotes = 3 - game.mistakes;
  const quickAnswers = answers.filter((item) => item.rightAnswer && item.spentTime < 30);

  return {
    score: getScore(answers, remainingNotes),
    remainingTime: game.time,
    remainingNotes,
    quickAnswers: quickAnswers.length
  };
};

export const getNewAnswer = (rightAnswer, spentTime) => {
  return {
    rightAnswer,
    spentTime
  };
};
