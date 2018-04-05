import {assert} from 'chai';

import getResult from './get-result.js';

const fakePreviousGames = [
  {
    score: 10,
    remainingNotes: 3,
    remainingTime: 10,
  },
  {
    score: 7,
    remainingNotes: 2,
    remainingTime: 20,
  },
  {
    score: 8,
    remainingNotes: 1,
    remainingTime: 50,
  },
  {
    score: 20,
    remainingNotes: 3,
    remainingTime: 50,
  }
];

const fakeNewGameSuccess = {
  score: 9,
  remainingNotes: 2,
  remainingTime: 25,
};

const fakeNewGameFirstSuccess = {
  score: 20,
  remainingNotes: 3,
  remainingTime: 60,
};

const fakeNewGameLastSuccess = {
  score: 7,
  remainingNotes: 1,
  remainingTime: 20,
};

const fakeNewGameFail = {
  score: 7,
  remainingNotes: 0,
  remainingTime: 20,
};

const fakeNewGameTimeout = {
  score: 7,
  remainingNotes: 2,
  remainingTime: 0,
};

describe(`Result getter`, () => {
  it(`should return fail message`, () => {
    assert.equal(getResult(fakePreviousGames, fakeNewGameFail), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
    assert.equal(getResult(fakePreviousGames, fakeNewGameTimeout), `Время вышло! Вы не успели отгадать все мелодии.`);
  });

  it(`should return correct success message`, () => {
    assert.equal(getResult(fakePreviousGames, fakeNewGameSuccess), `Вы заняли 3 место из 5 игроков. Это лучше, чем у 40% игроков.`);
    assert.equal(getResult(fakePreviousGames, fakeNewGameFirstSuccess), `Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков.`);
    assert.equal(getResult(fakePreviousGames, fakeNewGameLastSuccess), `Вы заняли 5 место из 5 игроков. Это лучше, чем у 0% игроков.`);
    assert.equal(getResult([], fakeNewGameLastSuccess), `Вы заняли 1 место из 1 игроков. Это лучше, чем у 0% игроков.`);
  });

  it(`should fail when it got invalid data`, () => {
    assert.throws(() => getResult(null, fakeNewGameSuccess), /Previous games data should be an Array./);
    assert.throws(() => getResult(fakePreviousGames, null), /New game data should be passed./);
  });
});
