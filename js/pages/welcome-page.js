import WelcomeView from './../views/welcome-view';
import togglePage from './../toggle-page';
import game from './../game';

export default () => {
  const welcomePage = new WelcomeView();

  welcomePage.onPlayClick = () => {
    togglePage(game);
  };

  return welcomePage.element;
};
