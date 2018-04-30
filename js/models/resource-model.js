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
  successResult: `За $s и $s
  <br>вы&nbsp;набрали $s ($s быстрых)
  <br>совершив $s`
};

const NumberType = {
  MINUTE: `минут`,
  SECOND: `секунд`,
  POINT: `балл`,
  ERROR: `ошиб`
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

  static getSuccessString(minutes, seconds, score, quickAnswers, errors) {
    const numeralValues = [
      ResourceModel._getStringByNumber(NumberType.MINUTE, minutes),
      ResourceModel._getStringByNumber(NumberType.SECOND, seconds),
      ResourceModel._getStringByNumber(NumberType.POINT, score),
      quickAnswers,
      ResourceModel._getStringByNumber(NumberType.ERROR, errors),
    ];

    return ResourceModel.getStringByAlias(`successResult`, numeralValues);
  }

  static _getStringByNumber(type, number) {
    if (type === NumberType.MINUTE || type === NumberType.SECOND) {
      const comparingNumber = number > 20 ? number % 10 : number;

      switch (true) {
        case comparingNumber === 1:
          return `${number} ${type}у`;
        case comparingNumber > 1 && number < 5:
          return `${number} ${type}ы`;
        default:
          return `${number} ${type}`;
      }
    }

    if (type === NumberType.POINT) {
      switch (true) {
        case number === 1:
          return `${number} ${type}`;
        case number > 1 && number < 5:
          return `${number} ${type}а`;
        default:
          return `${number} ${type}ов`;
      }
    }

    if (type === NumberType.ERROR) {
      switch (true) {
        case number === 1:
          return `${number} ${type}ку`;
        case number > 1 && number < 5:
          return `${number} ${type}ки`;
        default:
          return `${number} ${type}ок`;
      }
    }

    throw new Error(`Unknown type of number.`);
  }
}
