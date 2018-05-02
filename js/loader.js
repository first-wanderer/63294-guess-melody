import ResourceModel from './models/resource-model';
import DataAdapter from './data/data-adapter';

const SERVER_URL = `https://es.dump.academy/guess-melody`;
const APP_ID = 632948;
const NOT_FOUND_STATUS = 404;

export default class Loader {
  static loadQuestions() {
    return window.fetch(`${SERVER_URL}/questions`).
        then(Loader._checkStatus).
        then(Loader._parseResponse).
        then(DataAdapter.adaptServerData);
  }

  static loadPreviousResults() {
    return window.fetch(`${SERVER_URL}/stats/${APP_ID}`).
        then((response) => Loader._checkStatus(response, true)).
        then(Loader._parseResponse);
  }

  static saveResult(currentScore) {
    const request = {
      method: `POST`,
      body: JSON.stringify(currentScore),
      headers: {
        'Content-Type': `application/json`
      }
    };

    return window.fetch(`${SERVER_URL}/stats/${APP_ID}`, request).
        then(Loader._checkStatus);
  }

  static _checkStatus(response, isNotFoundAvailable) {
    if (response.ok) {
      return response;
    } else if (isNotFoundAvailable && response.status === NOT_FOUND_STATUS) {
      return null;
    }

    throw new Error(ResourceModel.getStringByAlias(`loadingDataError`));
  }

  static _parseResponse(response) {
    if (response) {
      return response.json();
    }

    return [];
  }
}
