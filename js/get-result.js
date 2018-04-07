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
    throw new Error(`New game data should be passed.`);
  }

  if (!Array.isArray(previousGames)) {
    throw new Error(`Previous games data should be an Array.`);
  }

  if (newGame.remainingTime <= 0) {
    return `Время вышло! Вы не успели отгадать все мелодии.`;
  }

  if (newGame.remainingNotes <= 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  const gamesRating = [...previousGames];
  gamesRating.push(newGame);
  gamesRating.sort(compareGames);

  const position = gamesRating.indexOf(newGame) + 1;
  const positionPercent = (gamesRating.length - position) / gamesRating.length * 100;

  return `Вы заняли ${position} место из ${gamesRating.length} игроков. Это лучше, чем у ${Math.round(positionPercent)}% игроков.`;
};

export default getResult;
