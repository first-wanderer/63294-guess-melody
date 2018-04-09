import {assert} from 'chai';

import getScore from './get-score.js';
import {getStringByAlias} from './strings.js';

const fakeAnswersFail = [
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: false,
    spentTime: 20,
  },
  {
    rightAnswer: true,
    spentTime: 45,
  },
  {
    rightAnswer: false,
    spentTime: 10,
  },
  {
    rightAnswer: false,
    spentTime: 25,
  }
];

const fakeAnswersFullSlowSuccess = [
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 45,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  }
];

const fakeAnswersFullFastSuccess = [
  {
    rightAnswer: true,
    spentTime: 10,
  },
  {
    rightAnswer: true,
    spentTime: 20,
  },
  {
    rightAnswer: true,
    spentTime: 29,
  },
  {
    rightAnswer: true,
    spentTime: 15,
  },
  {
    rightAnswer: true,
    spentTime: 10,
  },
  {
    rightAnswer: true,
    spentTime: 20,
  },
  {
    rightAnswer: true,
    spentTime: 29,
  },
  {
    rightAnswer: true,
    spentTime: 5,
  },
  {
    rightAnswer: true,
    spentTime: 10,
  },
  {
    rightAnswer: true,
    spentTime: 23,
  }
];

const fakeAnswersPartSlowSuccess = [
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: false,
    spentTime: 45,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  },
  {
    rightAnswer: true,
    spentTime: 40,
  }
];

const fakeAnswersPartFastSuccess = [
  {
    rightAnswer: true,
    spentTime: 10,
  },
  {
    rightAnswer: true,
    spentTime: 20,
  },
  {
    rightAnswer: true,
    spentTime: 29,
  },
  {
    rightAnswer: false,
    spentTime: 15,
  },
  {
    rightAnswer: true,
    spentTime: 10,
  },
  {
    rightAnswer: true,
    spentTime: 20,
  },
  {
    rightAnswer: true,
    spentTime: 29,
  },
  {
    rightAnswer: false,
    spentTime: 5,
  },
  {
    rightAnswer: true,
    spentTime: 10,
  },
  {
    rightAnswer: true,
    spentTime: 23,
  }
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
    assert.throws(() => getScore(fakeAnswersFullSlowSuccess, null), getStringByAlias(`numberError`));
    assert.throws(() => getScore(fakeAnswersFullSlowSuccess, -10), getStringByAlias(`numberError`));
    assert.throws(() => getScore(0, 2), getStringByAlias(`arrayError`));
  });
});
