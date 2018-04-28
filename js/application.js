import WelcomePage from './pages/welcome-page';
import GamePage from './pages/game-page';
import ResultPage from './pages/result-page';
import GameModel from './models/game-model';
import ResourceModel from './models/resource-model';
import DataAdapter from './data/data-adapter';

const mainContainer = document.querySelector(`.app .main`);
let questions;

export default class Application {
  static start() {
    window.fetch(`https://es.dump.academy/guess-melody/questions`).
        then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error(ResourceModel.getStringByAlias(`loadingDataError`));
        }).
        then((data) => DataAdapter.adaptServerData(data)).
        then(Application.showWelcome);
  }


  static showWelcome(data) {
    questions = data;
    const welcomePage = new WelcomePage(Application.showGame);
    Application._toggleScreen(welcomePage.element);
  }

  static showGame() {
    const model = new GameModel(questions);
    const gamePage = new GamePage(model, Application.showResult);
    Application._toggleScreen(gamePage.element);
    gamePage.startGame();
  }

  static showResult(userResult) {
    const resultPage = new ResultPage(userResult, Application.showGame);
    Application._toggleScreen(resultPage.element);
  }

  static _toggleScreen(nextPage) {
    if (nextPage) {
      mainContainer.innerHTML = ``;
      mainContainer.appendChild(nextPage);
    }
  }
}
