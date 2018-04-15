import ResultView from './../views/result-view';
import togglePage from './../toggle-page';
import game from './../game';

export default (result) => {
  const resultPage = new ResultView(result);

  resultPage.onReplayClick = () => {
    togglePage(game);
  };

  return resultPage.element;
};
