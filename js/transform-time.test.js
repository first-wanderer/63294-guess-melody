import {assert} from 'chai';

import transformTime from './transform-time';
import Fixture from './fixture';
import ResourceModel from './models/resource-model';

const timeFixture = new Fixture(`minutes`, `seconds`, `timeDasharray`, `timeDashoffset`);

const fakeStartTime = timeFixture.getTestObject(`05`, `00`, 63, 0);
const fakeMiddleTime = timeFixture.getTestObject(`02`, `30`, 63, 32);
const fakeEndTime = timeFixture.getTestObject(`00`, `00`, 63, 63);

describe(`Transform time`, () => {
  it(`should return correct time info in game start`, () => {
    assert.deepEqual(transformTime(300, 10), fakeStartTime);
  });

  it(`should return correct time info in game middle`, () => {
    assert.deepEqual(transformTime(150, 10), fakeMiddleTime);
  });

  it(`should return correct time info in game end`, () => {
    assert.deepEqual(transformTime(0, 10), fakeEndTime);
  });

  it(`should fail when it got invalid data`, () => {
    assert.throws(() => transformTime(-1, 10), ResourceModel.getStringByAlias(`numberError`));
    assert.throws(() => transformTime(300, -10), ResourceModel.getStringByAlias(`numberError`));
    assert.throws(() => transformTime(500, 10), ResourceModel.getStringByAlias(`tooBigTimeError`));
  });
});
