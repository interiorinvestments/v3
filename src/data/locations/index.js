import esd from './esd';
import hana from './hana';
import scotsman from './scotsman';

const DATA = {
  hana,
  scotsman,
  esd,
};

const getData = (data) => DATA[data];

export { getData };
