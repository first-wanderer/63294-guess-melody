import ANSWERS_DATA from './answers-data.js';

export default [
  {
    type: `artist`,
    src: ANSWERS_DATA[1].src,
    rightAnswer: 0,
    answers: [
      ANSWERS_DATA[1],
      ANSWERS_DATA[2],
      ANSWERS_DATA[3],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[2].src,
    rightAnswer: 2,
    answers: [
      ANSWERS_DATA[0],
      ANSWERS_DATA[3],
      ANSWERS_DATA[2],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[3].src,
    rightAnswer: 1,
    answers: [
      ANSWERS_DATA[1],
      ANSWERS_DATA[3],
      ANSWERS_DATA[5],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[4].src,
    rightAnswer: 1,
    answers: [
      ANSWERS_DATA[0],
      ANSWERS_DATA[4],
      ANSWERS_DATA[3],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[5].src,
    rightAnswer: 2,
    answers: [
      ANSWERS_DATA[1],
      ANSWERS_DATA[2],
      ANSWERS_DATA[5],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[0].src,
    rightAnswer: 0,
    answers: [
      ANSWERS_DATA[0],
      ANSWERS_DATA[3],
      ANSWERS_DATA[4],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[1].src,
    rightAnswer: 0,
    answers: [
      ANSWERS_DATA[1],
      ANSWERS_DATA[5],
      ANSWERS_DATA[2],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[2].src,
    rightAnswer: 2,
    answers: [
      ANSWERS_DATA[4],
      ANSWERS_DATA[3],
      ANSWERS_DATA[2],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[3].src,
    rightAnswer: 0,
    answers: [
      ANSWERS_DATA[3],
      ANSWERS_DATA[0],
      ANSWERS_DATA[1],
    ]
  },
  {
    type: `genre`,
    genre: `Rock`,
    answers: [
      ANSWERS_DATA[1],
      ANSWERS_DATA[4],
      ANSWERS_DATA[5],
      ANSWERS_DATA[3],
    ]
  }
];
