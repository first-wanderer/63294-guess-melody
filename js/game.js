import {INITIAL_GAME, previousGames} from './data/game-data';
import QUESTIONS from './data/questions-data';
import togglePage from './toggle-page';
import {getStringByAlias} from './strings';
import genreQuestion from './pages/genre-question';
import artistQuestion from './pages/artist-question';
import renderInfo from './pages/game-info';
import resultPage from './pages/result-page';
import {getNewAnswer, getGameTotal} from './get-answer';
import getResult from './get-result';

let game;
let answers;

const resetGame = () => {
  game = Object.assign({}, INITIAL_GAME);
  answers = [];
};

const gameContainerElement = document.createElement(`div`);
const infoElement = document.createElement(`div`);
const questionElement = document.createElement(`div`);

gameContainerElement.appendChild(infoElement);
gameContainerElement.appendChild(questionElement);

const onAnswerHandler = (rightAnswer) => {
  answers.push(getNewAnswer(rightAnswer, 40));

  if (!rightAnswer) {
    game.mistakes++;
  }

  if (++game.questionNumber < QUESTIONS.length && game.mistakes < 3 && game.time > 0) {
    updateGame(game);
    return;
  }

  const gameResult = getResult(previousGames, getGameTotal(game, answers));
  const resultContent = resultPage(gameResult);

  togglePage(resultContent);
  resetGame();
  updateGame(game);
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
      throw new Error(getStringByAlias(`unknownQuestionError`));
  }

  infoElement.innerHTML = renderInfo(game);
  questionElement.innerHTML = ``;
  questionElement.appendChild(questioContent);
};

resetGame();
updateGame(game);

export default gameContainerElement;
