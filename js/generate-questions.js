import ANSWERS_DATA from './data/answers-data';

const MAX_QUSETION_NUMBER = 10;
const ARTIST_ANSWERS_NUMBER = 3;
const GENRE_ANSWERS_NUMBER = 4;

export const QuestionType = {
  ARTIST: 0,
  GENRE: 1
};

const QuestionTypeArray = Object.values(QuestionType);

const getRandomType = () => {
  const randomNumber = Math.trunc(Math.random() * QuestionTypeArray.length);
  return QuestionTypeArray[randomNumber];
};

const getRandomAnswer = () => {
  const randomNumber = Math.trunc(Math.random() * ANSWERS_DATA.length);
  return ANSWERS_DATA[randomNumber];
};

const createArtistQuestion = () => {
  const mainAnswer = getRandomAnswer();
  const questionAnswers = new Set([mainAnswer]);
  const artists = new Set([mainAnswer.artist]);

  while (questionAnswers.size < ARTIST_ANSWERS_NUMBER) {
    const newAnswer = getRandomAnswer();

    if (!artists.has(newAnswer.artist)) {
      questionAnswers.add(newAnswer);
      artists.add(newAnswer.artist);
    }
  }

  return {
    type: QuestionType.ARTIST,
    src: mainAnswer.src,
    rightAnswer: mainAnswer.artist,
    answers: [...questionAnswers]
  };
};

const createGenreQuestion = () => {
  const mainAnswer = getRandomAnswer();
  const questionAnswers = new Set([mainAnswer]);

  while (questionAnswers.size < GENRE_ANSWERS_NUMBER) {
    questionAnswers.add(getRandomAnswer());
  }

  return {
    type: QuestionType.GENRE,
    genre: mainAnswer.genre,
    answers: [...questionAnswers]
  };
};

export const generateQuestions = () => {
  let questions = [];

  for (let i = 0; i < MAX_QUSETION_NUMBER; i++) {
    let question;

    const questionType = getRandomType();
    switch (questionType) {
      case QuestionType.ARTIST:
        question = createArtistQuestion();
        break;
      case QuestionType.GENRE:
        question = createGenreQuestion();
        break;
    }

    questions.push(question);
  }

  return questions;
};
