import {getStringByAlias} from './strings';
import {timeoutResult, failResult, successResult} from './data/game-data';

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
    throw new Error(getStringByAlias(`nullableError`));
  }

  if (!Array.isArray(previousGames)) {
    throw new Error(getStringByAlias(`arrayError`));
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

  const position = gamesRating.indexOf(newGame) + 1;
  const positionPercent = (gamesRating.length - position) / gamesRating.length * 100;
  const minutes = Math.trunc(newGame.remainingTime / 60);
  const seconds = Math.trunc(newGame.remainingTime - (60 * minutes));

  const comparisonString = getStringByAlias(`successComparison`, [position, gamesRating.length, Math.round(positionPercent)]);
  const resultString = getStringByAlias(`successResult`, [minutes, seconds, newGame.score, newGame.quickAnswers, 3 - newGame.remainingNotes]);

  return successResult(resultString, comparisonString);
};

export default getResult;
