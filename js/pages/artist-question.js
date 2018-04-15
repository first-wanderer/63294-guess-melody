import ArtistView from './../views/artist-view';

export default (question, answerCallback) => {
  const artistQuestion = new ArtistView(question);

  artistQuestion.onAnswerClick = (rightAnswer) => {
    answerCallback(rightAnswer);
  };

  return artistQuestion.element;
};
