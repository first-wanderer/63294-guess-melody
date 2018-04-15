import getElementFromTemplate from './../get-element-from-template';
import togglePage from './../toggle-page';
import game from './../game';

export default (result) => {
  const getStatistic = (resultData) => {
    if (resultData.type === `success`) {
      return `<div class="main-stat">${resultData.stat}</div>
      <span class="main-comparison">${resultData.comparison}</span>`;
    }

    return `<div class="main-stat">${resultData.stat}</div>`;
  };

  const pageTemplate = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">${result.title}</h2>
    ${getStatistic(result)}
    <span role="button" tabindex="0" class="main-replay">${result.buttonTitle}</span>
  </section>`;

  const pageElement = getElementFromTemplate(pageTemplate);
  const replayButton = pageElement.querySelector(`.main-replay`);

  replayButton.addEventListener(`click`, () => {
    togglePage(game);
  });

  return pageElement;
};
