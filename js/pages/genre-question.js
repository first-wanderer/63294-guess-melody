import GenreView from './../views/genre-view';

export default (question, answerCallback) => {
  const genreQuestion = new GenreView(question);

  genreQuestion.onAnswer = (rightAnswer) => {
    answerCallback(rightAnswer);
  };

  return genreQuestion.element;
};
