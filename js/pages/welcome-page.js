import getElementFromTemplate from './../get-element-from-template.js';
import togglePage from './../toggle-page.js';
import artistQuestion from './artist-question.js';

// Welcome screen.
const pageTemplate = `<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
    Ошибиться можно 3 раза.<br>
    Удачи!
  </p>
</section>`;

const pageElement = getElementFromTemplate(pageTemplate);
const playButton = pageElement.querySelector(`.main-play`);

playButton.addEventListener(`click`, () => {
  togglePage(artistQuestion);
});

export default pageElement;
