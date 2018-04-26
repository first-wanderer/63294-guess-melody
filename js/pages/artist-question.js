import ArtistView from './../views/artist-view';

export default (question, answerCallback) => {
  const artistQuestion = new ArtistView(question);

  artistQuestion.onAnswer = (rightAnswer) => {
    answerCallback(rightAnswer);
  };

  return artistQuestion.element;
};
