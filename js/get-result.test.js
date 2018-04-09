import {assert} from 'chai';

import getResult from './get-result.js';
import Fixture from './fixture.js';
import {getStringByAlias} from './strings.js';

const gameFixture = new Fixture(`score`, `remainingNotes`, `remainingTime`);

const fakePreviousGames = [
  gameFixture.getTestObject(10, 3, 10),
  gameFixture.getTestObject(7, 2, 20),
  gameFixture.getTestObject(8, 1, 50),
  gameFixture.getTestObject(20, 3, 50)
];

const fakeNewGameSuccess = gameFixture.getTestObject(9, 2, 25);
const fakeNewGameFirstSuccess = gameFixture.getTestObject(20, 3, 60);
const fakeNewGameLastSuccess = gameFixture.getTestObject(7, 1, 20);
const fakeNewGameFail = gameFixture.getTestObject(7, 0, 20);
const fakeNewGameTimeout = gameFixture.getTestObject(7, 2, 0);

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
