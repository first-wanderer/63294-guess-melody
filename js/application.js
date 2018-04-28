import WelcomePage from './pages/welcome-page';
import GamePage from './pages/game-page';
import ResultPage from './pages/result-page';
import GameModel from './game-model';

const mainContainer = document.querySelector(`.app .main`);

export default class Application {
  static showWelcome() {
    const welcomePage = new WelcomePage(Application.showGame);
    Application._toggleScreen(welcomePage.element);
  }

  static showGame() {
    const model = new GameModel();
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
