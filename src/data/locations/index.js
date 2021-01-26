import chicago1 from './chicago1';
import dallas from './dallas';
import newyork from './newyork';
import vernonhills from './vernonhills';

const DATA = {
  dallas,
  vernonhills,
  chicago1,
  newyork,
};

const getData = (data) => DATA[data];

export { getData };
