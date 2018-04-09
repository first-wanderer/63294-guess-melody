import {assert} from 'chai';

import Timer from './timer.js';

describe(`Timer`, () => {
  it(`should return correct timer`, () => {
    const time = 3;
    const timer = new Timer(time);

    assert.isObject(timer);
    for (let i = 0; i < time; i++) {
      assert.isTrue(timer.tick());
    }

    assert.isFalse(timer.tick());
  });

  it(`should fail when it got invalid data`, () => {
    assert.throws(() => new Timer(null), /Passed time should be a number bigger than 0./);
    assert.throws(() => new Timer(-5), /Passed time should be a number bigger than 0./);
  });
});
