export const QuestionType = {
  ARTIST: `artist`,
  GENRE: `genre`
};

export const INITIAL_GAME = Object.freeze({
  questionNumber: 0,
  time: 300,
  mistakes: 0
});

export const timeoutResult = {
  type: `timeout`,
  title: `Увы и ах!`,
  stat: `Время вышло!<br>Вы не успели отгадать все мелодии`,
  buttonTitle: `Попробовать ещё раз`
};

export const failResult = {
  type: `fail`,
  title: `Какая жалость!`,
  stat: `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!`,
  buttonTitle: `Попробовать ещё раз`
};

export const successResult = (stat, comparison) => ({
  type: `success`,
  title: `Вы настоящий меломан!`,
  stat,
  comparison,
  buttonTitle: `Сыграть ещё раз`
});
