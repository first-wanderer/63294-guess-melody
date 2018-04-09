import {assert} from 'chai';

import getResult from './get-result.js';
import {getStringByAlias} from './strings.js';

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
    assert.equal(getResult(fakePreviousGames, fakeNewGameFail), getStringByAlias(`failResult`));
    assert.equal(getResult(fakePreviousGames, fakeNewGameTimeout), getStringByAlias(`timeoutResult`));
  });

  it(`should return correct success message`, () => {
    assert.equal(getResult(fakePreviousGames, fakeNewGameSuccess), getStringByAlias(`successResult`, [3, 5, 40]));
    assert.equal(getResult(fakePreviousGames, fakeNewGameFirstSuccess), getStringByAlias(`successResult`, [1, 5, 80]));
    assert.equal(getResult(fakePreviousGames, fakeNewGameLastSuccess), getStringByAlias(`successResult`, [5, 5, 0]));
    assert.equal(getResult([], fakeNewGameLastSuccess), getStringByAlias(`successResult`, [1, 1, 0]));
  });

  it(`should fail when it got invalid data`, () => {
    assert.throws(() => getResult(null, fakeNewGameSuccess), getStringByAlias(`arrayError`));
    assert.throws(() => getResult(fakePreviousGames, null), getStringByAlias(`nullableError`));
  });
});
