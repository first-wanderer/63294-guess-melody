const RESOURCE_STRINGS = {
  numberError: `Passed value should be a number bigger than 0.`,
  arrayError: `Passed parameter should be an Array.`,
  nullableError: `Passed parameter should exist.`,
  loadingDataError: `Data wasn't loaded. Check internet connection and try again.`,
  unknownQuestionError: `Passed unknown question type.`,
  abstractClassError: `Instance of abstract class can't be created.`,
  abstractMethodError: `Abstract method is called. Ovverride it in child class.`,
  failResult: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
  timeoutResult: `Время вышло! Вы не успели отгадать все мелодии.`,
  successComparison: `Вы заняли $s место из $s игроков. Это лучше, чем у $s% игроков.`,
  successResult: `За&nbsp;$s&nbsp;минуты и $s&nbsp;секунд
  <br>вы&nbsp;набрали $s баллов ($s быстрых)
  <br>совершив $s ошибки`
};

export default class ResourceModel {
  static getStringByAlias(alias, replacedValues) {
    let originalString = RESOURCE_STRINGS[alias];

    if (!originalString) {
      throw new Error(`String wasn't found.`);
    }

    if (replacedValues && replacedValues.length > 0) {
      replacedValues.forEach((element) => {
        originalString = originalString.replace(`$s`, element);
      });
    }

    return originalString;
  }
}
