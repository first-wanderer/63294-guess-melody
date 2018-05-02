import ResourceModel from './models/resource-model';
import {INITIAL_GAME, timeoutResult, failResult, successResult} from './data/game-data';
import {SECONDS_BASE, MAX_NOTES} from './constants';

const PERCENTS_BASE = 100;
const POSITION_SHIFT = 1;

const compareGames = (game, nextGame) => {
  if (game.score === nextGame.score) {
    const gameTime = game.remainingTime;
    const nextGameTime = nextGame.remainingTime;

    return gameTime === nextGameTime ? nextGame.remainingNotes - game.remainingNotes : nextGameTime - gameTime;
  }

  return nextGame.score - game.score;
};

const getResult = (previousGames, newGame) => {
  if (!newGame) {
    throw new Error(ResourceModel.getStringByAlias(`nullableError`));
  }

  if (!Array.isArray(previousGames)) {
    throw new Error(ResourceModel.getStringByAlias(`arrayError`));
  }

  if (newGame.remainingTime <= 0) {
    return timeoutResult;
  }

  if (newGame.remainingNotes <= 0) {
    return failResult;
  }

  const gamesRating = [...previousGames];
  gamesRating.push(newGame);
  gamesRating.sort(compareGames);

  const position = gamesRating.indexOf(newGame) + POSITION_SHIFT;
  const positionPercent = (gamesRating.length - position) / gamesRating.length * PERCENTS_BASE;
  const gameTime = INITIAL_GAME.time - newGame.remainingTime;
  const minutes = Math.trunc(gameTime / SECONDS_BASE);
  const seconds = Math.trunc(gameTime - (SECONDS_BASE * minutes));

  const resultString = ResourceModel.getSuccessString(minutes, seconds, newGame.score, newGame.quickAnswers, MAX_NOTES - newGame.remainingNotes);
  const comparisonString = ResourceModel.getStringByAlias(`successComparison`, [position, gamesRating.length, Math.round(positionPercent)]);

  return successResult(resultString, comparisonString);
};

export default getResult;
