import getElementFromTemplate from './../get-element-from-template.js';
import togglePage from './../toggle-page.js';
import welcomePage from './welcome-page.js';

const timeoutState = {
  type: `timeout`,
  title: `Увы и ах!`,
  stat: `Время вышло!<br>Вы не успели отгадать все мелодии`,
  buttonTitle: `Попробовать ещё раз`
};

const failState = {
  type: `timeout`,
  title: `Какая жалость!`,
  stat: `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!`,
  buttonTitle: `Попробовать ещё раз`
};

const successState = {
  type: `success`,
  title: `Вы настоящий меломан!`,
  stat: `За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
  <br>вы&nbsp;набрали 12 баллов (8 быстрых)
  <br>совершив 3 ошибки`,
  comparison: `Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков`,
  buttonTitle: `Сыграть ещё раз`
};

const getStatistic = (state) => {
  if (state.type === `success`) {
    return `<div class="main-stat">${state.stat}</div>
    <span class="main-comparison">${state.comparison}</span>`;
  }

  return `<div class="main-stat">${state.stat}</div>`;
};

const pageTemplate = (state) => `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">${state.title}</h2>
  ${getStatistic(state)}
  <span role="button" tabindex="0" class="main-replay">${state.buttonTitle}</span>
</section>`;

const resultStates = [successState, failState, timeoutState];

const getRandomState = () => {
  const randomNumber = Math.trunc(Math.random() * 3);
  return resultStates[randomNumber];
};

const pageElement = getElementFromTemplate(pageTemplate(getRandomState()));
const replayButton = pageElement.querySelector(`.main-replay`);

replayButton.addEventListener(`click`, () => {
  togglePage(welcomePage);
});

export default pageElement;
