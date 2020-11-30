import hana from './hana';
import scotsman from './scotsman';

const DATA = {
  hana,
  scotsman,
};

const getData = (data) => DATA[data];

export { getData };
