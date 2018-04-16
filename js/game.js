import {INITIAL_GAME, previousGames} from './data/game-data';
import {generateQuestions, QuestionType} from './generate-questions';
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
let questions;

const resetGame = () => {
  game = Object.assign({}, INITIAL_GAME);
  answers = [];
  questions = generateQuestions();
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

  if (++game.questionNumber < questions.length && game.mistakes < 3 && game.time > 0) {
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
  const question = questions[gameState.questionNumber];
  let questioContent;

  switch (question.type) {
    case QuestionType.ARTIST:
      questioContent = artistQuestion(question, onAnswerHandler);
      break;
    case QuestionType.GENRE:
      questioContent = genreQuestion(question, onAnswerHandler);
      break;
    default:
      throw new Error(getStringByAlias(`unknownQuestionError`));
  }

  infoElement.innerHTML = ``;
  questionElement.innerHTML = ``;
  infoElement.appendChild(renderInfo(game));
  questionElement.appendChild(questioContent);
};

resetGame();
updateGame(game);

export default gameContainerElement;
