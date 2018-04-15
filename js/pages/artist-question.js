import getElementFromTemplate from './../get-element-from-template';

export default (question, answerCallback) => {
  const answerTemplate = (answer, index) => `<div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${index}"/>
    <label class="main-answer" for="answer-${index}">
      <img class="main-answer-preview" src="${answer.image}"
          alt="${answer.artist}" width="134" height="134">
        ${answer.artist}
    </label>
  </div>`;

  const questionTemplate = `<section class="main main--level main--level-artist">
    <div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${question.src}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
        ${question.answers.map(answerTemplate).join(``)}
      </form>
    </div>
  </section>`;

  const pageElement = getElementFromTemplate(questionTemplate);
  const answerButtons = Array.from(pageElement.querySelectorAll(`.main-answer`));

  answerButtons.forEach((button) => {
    button.addEventListener(`click`, (event) => {
      answerCallback(event.currentTarget.innerText === question.rightAnswer);
    });
  });

  return pageElement;
};
