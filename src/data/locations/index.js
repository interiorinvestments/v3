import chicago1 from './chicago1';
import chicago2 from './chicago2';
import dallas from './dallas';
import vernonhills from './vernonhills';

const DATA = {
  dallas,
  vernonhills,
  chicago1,
  chicago2,
};

const getData = (data) => DATA[data];

export { getData };
