import {NULLABLE_ERROR_STRING, ARRAY_ERROR_STRING, FAIL_RESULT_STRING, TIMEOUT_RESULT_STRING, getSuccessResultString} from './strings.js';

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
    throw new Error(NULLABLE_ERROR_STRING);
  }

  if (!Array.isArray(previousGames)) {
    throw new Error(ARRAY_ERROR_STRING);
  }

  if (newGame.remainingTime <= 0) {
    return TIMEOUT_RESULT_STRING;
  }

  if (newGame.remainingNotes <= 0) {
    return FAIL_RESULT_STRING;
  }

  const gamesRating = [...previousGames];
  gamesRating.push(newGame);
  gamesRating.sort(compareGames);

  const position = gamesRating.indexOf(newGame) + 1;
  const positionPercent = (gamesRating.length - position) / gamesRating.length * 100;

  return getSuccessResultString(position, gamesRating.length, Math.round(positionPercent));
};

export default getResult;
