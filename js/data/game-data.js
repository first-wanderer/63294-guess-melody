import Fixture from './../fixture';

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

const gameFixture = new Fixture(`score`, `remainingNotes`, `remainingTime`);

export const previousGames = [
  gameFixture.getTestObject(10, 3, 10),
  gameFixture.getTestObject(7, 2, 20),
  gameFixture.getTestObject(8, 1, 50),
  gameFixture.getTestObject(20, 3, 50)
];
