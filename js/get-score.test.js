import {assert} from 'chai';

import getScore from './get-score';
import Fixture from './fixture';
import ResourceModel from './models/resource-model';

const answerFixture = new Fixture(`rightAnswer`, `spentTime`);

const fakeAnswersFail = [
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(false, 20),
  answerFixture.getTestObject(true, 45),
  answerFixture.getTestObject(false, 10),
  answerFixture.getTestObject(false, 25)
];

const fakeAnswersFullSlowSuccess = [
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 45),
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 40)
];

const fakeAnswersFullFastSuccess = [
  answerFixture.getTestObject(true, 10),
  answerFixture.getTestObject(true, 20),
  answerFixture.getTestObject(true, 29),
  answerFixture.getTestObject(true, 15),
  answerFixture.getTestObject(true, 10),
  answerFixture.getTestObject(true, 20),
  answerFixture.getTestObject(true, 29),
  answerFixture.getTestObject(true, 5),
  answerFixture.getTestObject(true, 10),
  answerFixture.getTestObject(true, 23)
];

const fakeAnswersPartSlowSuccess = [
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(false, 45),
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 40),
  answerFixture.getTestObject(true, 40)
];

const fakeAnswersPartFastSuccess = [
  answerFixture.getTestObject(true, 10),
  answerFixture.getTestObject(true, 20),
  answerFixture.getTestObject(true, 29),
  answerFixture.getTestObject(false, 15),
  answerFixture.getTestObject(true, 10),
  answerFixture.getTestObject(true, 20),
  answerFixture.getTestObject(true, 29),
  answerFixture.getTestObject(false, 5),
  answerFixture.getTestObject(true, 10),
  answerFixture.getTestObject(true, 23)
];

describe(`Score getter`, () => {
  it(`should return -1 when player lost`, () => {
    assert.equal(getScore(fakeAnswersFail, 0), -1);
    assert.equal(getScore(fakeAnswersFullSlowSuccess, 0), -1);
    assert.equal(getScore(fakeAnswersFail, 3), -1);
  });

  it(`should return correct score when player won`, () => {
    assert.equal(getScore(fakeAnswersFullSlowSuccess, 3), 10);
    assert.equal(getScore(fakeAnswersFullFastSuccess, 3), 20);
    assert.equal(getScore(fakeAnswersPartSlowSuccess, 2), 7);
    assert.equal(getScore(fakeAnswersPartFastSuccess, 1), 12);
  });

  it(`should fail when it got invalid data`, () => {
    assert.throws(() => getScore(fakeAnswersFullSlowSuccess, null), ResourceModel.getStringByAlias(`numberError`));
    assert.throws(() => getScore(fakeAnswersFullSlowSuccess, -10), ResourceModel.getStringByAlias(`numberError`));
    assert.throws(() => getScore(0, 2), ResourceModel.getStringByAlias(`arrayError`));
  });
});
