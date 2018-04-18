import InfoView from './../views/info-view';

export default (info) => {
  const gameInfo = new InfoView(info);

  return gameInfo.element;
};
