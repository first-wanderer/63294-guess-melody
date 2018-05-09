import WelcomePage from './pages/welcome-page';
import GamePage from './pages/game-page';
import ResultPage from './pages/result-page';
import PreloadingView from './views/preloading-view';
import ErrorView from './views/error-view';
import GameModel from './models/game-model';
import Loader from './loader';
import getResult from './get-result';
import DataAdapter from './data/data-adapter';
import {FAIL_SCORE} from './constants';

const mainContainer = document.querySelector(`.app .main`);
let questions;

export default class Application {
  static start() {
    Application.showPreloader();
    Loader.loadQuestions().
        then((adaptedQuestions) => {
          questions = adaptedQuestions;
          const audioUrls = DataAdapter.getAllAudioUrls(adaptedQuestions);
          const audioPromises = audioUrls.map(Loader.loadAudio);
          return Promise.all(audioPromises);
        }).
        then((loadedAudio) => {
          window._preloadedAudio = loadedAudio;
          Application.showWelcome();
        }).
        catch(Application.showError);
  }

  static showPreloader() {
    const preloadingView = new PreloadingView();
    Application._toggleScreen(preloadingView.element);
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    Application._toggleScreen(errorView.element);
  }

  static showWelcome() {
    const welcomePage = new WelcomePage(Application.showGame);
    Application._toggleScreen(welcomePage.element);
  }

  static showGame() {
    const model = new GameModel(questions);
    const gamePage = new GamePage(model, Application.finish);
    Application._toggleScreen(gamePage.element);
    gamePage.startGame();
  }

  static finish(currentGame) {
    if (currentGame.score === FAIL_SCORE) {
      Application.showResult([], currentGame);
    } else {
      Loader.loadPreviousResults().
          then((previousGames) => {
            Loader.saveResult(currentGame);
            Application.showResult(previousGames, currentGame);
          });
    }
  }

  static showResult(previousGames, currentGame) {
    const currentResult = getResult(previousGames, currentGame);
    const resultPage = new ResultPage(currentResult, Application.showGame);
    Application._toggleScreen(resultPage.element);
  }

  static _toggleScreen(nextPage) {
    if (nextPage) {
      mainContainer.innerHTML = ``;
      mainContainer.appendChild(nextPage);
    }
  }
}
