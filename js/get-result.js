import {getStringByAlias} from './strings';

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
    return getStringByAlias(`timeoutResult`);
  }

  if (newGame.remainingNotes <= 0) {
    return getStringByAlias(`failResult`);
  }

  const gamesRating = [...previousGames];
  gamesRating.push(newGame);
  gamesRating.sort(compareGames);

  const position = gamesRating.indexOf(newGame) + 1;
  const positionPercent = (gamesRating.length - position) / gamesRating.length * 100;

  return getStringByAlias(`successResult`, [position, gamesRating.length, Math.round(positionPercent)]);
};

export default getResult;
