import ResourceModel from './models/resource-model';
import {SECONDS_BASE, DECIMAL_BASE} from './constants';
import {INITIAL_GAME} from './data/game-data';

const transformTime = (time, radious) => {
  if (!Number.isInteger(time) || time < 0) {
    throw new Error(ResourceModel.getStringByAlias(`numberError`));
  }

  if (!Number.isInteger(radious) || radious < 0) {
    throw new Error(ResourceModel.getStringByAlias(`numberError`));
  }

  if (time > INITIAL_GAME.time) {
    throw new Error(ResourceModel.getStringByAlias(`tooBigTimeError`));
  }

  const numberMinutes = Math.trunc(time / SECONDS_BASE);
  const numberSeconds = Math.trunc(time - (SECONDS_BASE * numberMinutes));

  const minutes = numberMinutes < DECIMAL_BASE ? `0${numberMinutes}` : numberMinutes.toString();
  const seconds = numberSeconds < DECIMAL_BASE ? `0${numberSeconds}` : numberSeconds.toString();

  const timeDasharray = Math.ceil(2 * Math.PI * radious);
  const timeDashoffset = Math.round((timeDasharray / INITIAL_GAME.time) * (INITIAL_GAME.time - time));

  return {minutes, seconds, timeDasharray, timeDashoffset};
};

export default transformTime;
