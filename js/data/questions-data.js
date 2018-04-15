import ANSWERS_DATA from './answers-data';

export default [
  {
    type: `artist`,
    src: ANSWERS_DATA[1].src,
    rightAnswer: ANSWERS_DATA[1].artist,
    answers: [
      ANSWERS_DATA[1],
      ANSWERS_DATA[2],
      ANSWERS_DATA[3],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[2].src,
    rightAnswer: ANSWERS_DATA[2].artist,
    answers: [
      ANSWERS_DATA[0],
      ANSWERS_DATA[3],
      ANSWERS_DATA[2],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[3].src,
    rightAnswer: ANSWERS_DATA[3].artist,
    answers: [
      ANSWERS_DATA[1],
      ANSWERS_DATA[3],
      ANSWERS_DATA[5],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[4].src,
    rightAnswer: ANSWERS_DATA[4].artist,
    answers: [
      ANSWERS_DATA[0],
      ANSWERS_DATA[4],
      ANSWERS_DATA[3],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[5].src,
    rightAnswer: ANSWERS_DATA[5].artist,
    answers: [
      ANSWERS_DATA[1],
      ANSWERS_DATA[2],
      ANSWERS_DATA[5],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[0].src,
    rightAnswer: ANSWERS_DATA[0].artist,
    answers: [
      ANSWERS_DATA[0],
      ANSWERS_DATA[3],
      ANSWERS_DATA[4],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[1].src,
    rightAnswer: ANSWERS_DATA[1].artist,
    answers: [
      ANSWERS_DATA[1],
      ANSWERS_DATA[5],
      ANSWERS_DATA[2],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[2].src,
    rightAnswer: ANSWERS_DATA[2].artist,
    answers: [
      ANSWERS_DATA[4],
      ANSWERS_DATA[3],
      ANSWERS_DATA[2],
    ]
  },
  {
    type: `artist`,
    src: ANSWERS_DATA[3].src,
    rightAnswer: ANSWERS_DATA[3].artist,
    answers: [
      ANSWERS_DATA[3],
      ANSWERS_DATA[0],
      ANSWERS_DATA[1],
    ]
  },
  {
    type: `genre`,
    genre: ANSWERS_DATA[1].genre,
    answers: [
      ANSWERS_DATA[1],
      ANSWERS_DATA[4],
      ANSWERS_DATA[5],
      ANSWERS_DATA[3],
    ]
  }
];
