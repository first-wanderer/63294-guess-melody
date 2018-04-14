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

const onAnswerHandler = (rightAnswer) => {
  if (++game.questionNumber < QUESTIONS.length) {
    updateGame(game);
    return rightAnswer;
  }

  const resultContent = resultPage(successResult);
  resetGame();
  togglePage(resultContent);
  updateGame(game);
  return rightAnswer;
};

const updateGame = (gameState) => {
  const question = QUESTIONS[gameState.questionNumber];
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
updateGame(game);

export default gameContainerElement;
