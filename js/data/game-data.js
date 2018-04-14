export const INITIAL_GAME = Object.freeze({
  question: 0,
  minutes: `05`,
  seconds: `00`,
  mistakes: 2
});

export const timeoutResult = {
  type: `timeout`,
  title: `Увы и ах!`,
  stat: `Время вышло!<br>Вы не успели отгадать все мелодии`,
  buttonTitle: `Попробовать ещё раз`
};

export const failResult = {
  type: `timeout`,
  title: `Какая жалость!`,
  stat: `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!`,
  buttonTitle: `Попробовать ещё раз`
};

export const successResult = {
  type: `success`,
  title: `Вы настоящий меломан!`,
  stat: `За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
  <br>вы&nbsp;набрали 12 баллов (8 быстрых)
  <br>совершив 3 ошибки`,
  comparison: `Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков`,
  buttonTitle: `Сыграть ещё раз`
};
