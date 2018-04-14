import getElementFromTemplate from './../get-element-from-template';

export default (question, answerCallback) => {
  const answerTemplate = (answer, index) => `<div class="genre-answer">
    <div class="player-wrapper">
      <div class="player">
        <audio src="${answer.src}"></audio>
        <button class="player-control player-control--pause"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>
    <input type="checkbox" name="answer" value="answer-${index}" id="a-${index}">
    <label class="genre-answer-check" for="a-${index}"></label>
  </div>`;

  const questionTemplate = `<section class="main main--level main--level-genre">
    <div class="main-wrap">
      <h2 class="title">Выберите ${question.genre} треки</h2>
      <form class="genre">
        ${question.answers.map(answerTemplate).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;

  const pageElement = getElementFromTemplate(questionTemplate);
  const sendButton = pageElement.querySelector(`.genre-answer-send`);
  const answerInputs = Array.from(pageElement.querySelectorAll(`.genre-answer input`));

  const disableSendButton = () => {
    sendButton.disabled = answerInputs.every((input) => !input.checked);
  };

  sendButton.addEventListener(`click`, () => {
    answerCallback();
  });

  answerInputs.forEach((input) => {
    input.addEventListener(`change`, () => {
      disableSendButton();
    });
  });

  disableSendButton();

  return pageElement;
};
