const strings = {
  numberError: `Passed value should be a number bigger than 0.`,
  arrayError: `Passed parameter should be an Array.`,
  nullableError: `Passed parameter should exist.`,
  failResult: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
  timeoutResult: `Время вышло! Вы не успели отгадать все мелодии.`,
  successResult: `Вы заняли $s место из $s игроков. Это лучше, чем у $s% игроков.`
};

const getStringByAlias = (alias, replacedValues) => {
  let originalString = strings[alias];

  if (!originalString) {
    throw new Error(`String wasn't found.`);
  }

  if (replacedValues && replacedValues.length > 0) {
    replacedValues.forEach((element) => {
      originalString = originalString.replace(`$s`, element);
    });
  }

  return originalString;
};

export {getStringByAlias};
