import {INITIAL_GAME, successResult} from './data/game-data';
import QUESTIONS from './data/questions-data';
import togglePage from './toggle-page';
import genreQuestion from './pages/genre-question';
import artistQuestion from './pages/artist-question';
import renderInfo from './pages/game-info';
import resultPage from './pages/result-page';

let game;

const resetGame = () => {
  game = Object.assign({}, INITIAL_GAME);
};

const gameContainerElement = document.createElement(`div`);
const infoElement = document.createElement(`div`);
const questionElement = document.createElement(`div`);

gameContainerElement.appendChild(infoElement);
gameContainerElement.appendChild(questionElement);

const onAnswerHandler = () => {
  if (++game.questionNumber < QUESTIONS.length) {
    updateGame(QUESTIONS[game.questionNumber]);
    return;
  }

  const resultContent = resultPage(successResult);
  togglePage(resultContent);
};

const updateGame = (question) => {
  let questioContent;
  switch (question.type) {
    case `artist`:
      questioContent = artistQuestion(question, onAnswerHandler);
      break;
    case `genre`:
      questioContent = genreQuestion(question, onAnswerHandler);
      break;
    default:
      break;
  }

  infoElement.innerHTML = renderInfo(game);
  questionElement.innerHTML = ``;
  questionElement.appendChild(questioContent);
};

resetGame();
updateGame(QUESTIONS[0]);

export default gameContainerElement;
