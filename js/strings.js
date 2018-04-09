// Error strings.
const NUMBER_ERROR_STRING = `Passed value should be a number bigger than 0.`;
const ARRAY_ERROR_STRING = `Passed parameter should be an Array.`;
const NULLABLE_ERROR_STRING = `Passed parameter should exist.`;

// Result strings
const FAIL_RESULT_STRING = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
const TIMEOUT_RESULT_STRING = `Время вышло! Вы не успели отгадать все мелодии.`;

const getSuccessResultString = (position, rating, positionPercent) => {
  return `Вы заняли ${position} место из ${rating} игроков. Это лучше, чем у ${positionPercent}% игроков.`;
};

export {NUMBER_ERROR_STRING,
  ARRAY_ERROR_STRING,
  NULLABLE_ERROR_STRING,
  FAIL_RESULT_STRING,
  TIMEOUT_RESULT_STRING,
  getSuccessResultString};
