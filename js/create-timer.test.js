import {assert} from 'chai';

import createTimer from './create-timer.js';

const fakeCallback = () => {};

describe(`Timer creater`, () => {
  it(`should return correct timer`, () => {
    const time = 3;
    const timer = createTimer(time, fakeCallback);

    assert.isObject(timer);
    for (let i = 0; i < time; i++) {
      assert.isTrue(timer.tick());
    }

    assert.isFalse(timer.tick());
  });

  it(`should fail when it got invalid data`, () => {
    assert.throws(() => createTimer(null, fakeCallback), /Passed time should be a number bigger than 0./);
    assert.throws(() => createTimer(-5, fakeCallback), /Passed time should be a number bigger than 0./);
    assert.throws(() => createTimer(5, null), /Callback should be a Function./);
  });
});
