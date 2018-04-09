import {assert} from 'chai';

import Timer from './timer.js';
import {NUMBER_ERROR_STRING} from './strings.js';

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
    assert.throws(() => new Timer(null), NUMBER_ERROR_STRING);
    assert.throws(() => new Timer(-5), NUMBER_ERROR_STRING);
  });
});
