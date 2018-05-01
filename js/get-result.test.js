import {assert} from 'chai';

import getResult from './get-result';
import Fixture from './fixture';
import ResourceModel from './models/resource-model';
import {timeoutResult, failResult, successResult} from './data/game-data';

const gameFixture = new Fixture(`score`, `remainingNotes`, `remainingTime`, `quickAnswers`);

const fakePreviousGames = [
  gameFixture.getTestObject(10, 3, 10, 0),
  gameFixture.getTestObject(7, 2, 20, 1),
  gameFixture.getTestObject(8, 1, 50, 3),
  gameFixture.getTestObject(20, 3, 50, 10)
];

const fakeNewGameSuccess = gameFixture.getTestObject(9, 2, 25, 2);
const fakeNewGameFirstSuccess = gameFixture.getTestObject(20, 3, 60, 10);
const fakeNewGameLastSuccess = gameFixture.getTestObject(7, 1, 20, 1);
const fakeNewGameFail = gameFixture.getTestObject(7, 0, 20);
const fakeNewGameTimeout = gameFixture.getTestObject(7, 2, 0);

describe(`Result getter`, () => {
  it(`should return fail message`, () => {
    assert.deepEqual(getResult(fakePreviousGames, fakeNewGameFail), failResult);
    assert.deepEqual(getResult(fakePreviousGames, fakeNewGameTimeout), timeoutResult);
  });

  it(`should return correct success message`, () => {
    let expected = successResult(ResourceModel.getSuccessString(4, 35, 9, 2, 1), ResourceModel.getStringByAlias(`successComparison`, [3, 5, 40]));
    assert.deepEqual(getResult(fakePreviousGames, fakeNewGameSuccess), expected);

    expected = successResult(ResourceModel.getSuccessString(4, 0, 20, 10, 0), ResourceModel.getStringByAlias(`successComparison`, [1, 5, 80]));
    assert.deepEqual(getResult(fakePreviousGames, fakeNewGameFirstSuccess), expected);

    expected = successResult(ResourceModel.getSuccessString(4, 40, 7, 1, 2), ResourceModel.getStringByAlias(`successComparison`, [5, 5, 0]));
    assert.deepEqual(getResult(fakePreviousGames, fakeNewGameLastSuccess), expected);

    expected = successResult(ResourceModel.getSuccessString(4, 40, 7, 1, 2), ResourceModel.getStringByAlias(`successComparison`, [1, 1, 0]));
    assert.deepEqual(getResult([], fakeNewGameLastSuccess), expected);
  });

  it(`should fail when it got invalid data`, () => {
    assert.throws(() => getResult(null, fakeNewGameSuccess), ResourceModel.getStringByAlias(`arrayError`));
    assert.throws(() => getResult(fakePreviousGames, null), ResourceModel.getStringByAlias(`nullableError`));
  });
});
