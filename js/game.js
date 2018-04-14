import {INITIAL_GAME, previousGames} from './data/game-data';
import QUESTIONS from './data/questions-data';
import togglePage from './toggle-page';
import genreQuestion from './pages/genre-question';
import artistQuestion from './pages/artist-question';
import renderInfo from './pages/game-info';
import resultPage from './pages/result-page';
import getScore from './get-score';
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
  answers.push({
    rightAnswer,
    spentTime: 40
  });

  if (!rightAnswer) {
    game.mistakes++;
  }

  if (++game.questionNumber < QUESTIONS.length && game.mistakes < 3 && game.time > 0) {
    updateGame(game);
    return;
  }

  const gameResult = getResult(previousGames, getGameTotal());
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
      break;
  }

  infoElement.innerHTML = renderInfo(game);
  questionElement.innerHTML = ``;
  questionElement.appendChild(questioContent);
};

const getGameTotal = () => {
  const remainingNotes = 3 - game.mistakes;
  const quickAnswers = answers.filter((item) => item.rightAnswer && item.spentTime < 30);

  return {
    score: getScore(answers, remainingNotes),
    remainingTime: game.time,
    remainingNotes,
    quickAnswers: quickAnswers.length
  };
};

resetGame();
updateGame(game);

export default gameContainerElement;
