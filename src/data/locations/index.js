import esd from './esd';
import hana from './hana';
import intersport from './intersport';
import scotsman from './scotsman';

const DATA = {
  hana,
  scotsman,
  esd,
  intersport,
};

const getData = (data) => DATA[data];

export { getData };
