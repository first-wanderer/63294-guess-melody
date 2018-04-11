import getElementFromTemplate from './../get-element-from-template.js';
import togglePage from './../toggle-page.js';
import welcomePage from './welcome-page.js';

const timeoutState = {
  type: `timeout`,
  title: `Увы и ах!`,
  stat: `Время вышло!<br>Вы не успели отгадать все мелодии`
};

const pageTemplate = (state) => `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">${state.title}</h2>
  <div class="main-stat">${state.stat}</div>
  <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
</section>`;

const pageElement = getElementFromTemplate(pageTemplate(timeoutState));
const replayButton = pageElement.querySelector(`.main-replay`);

replayButton.addEventListener(`click`, () => {
  togglePage(welcomePage);
});

export default pageElement;
