import hana from './hana';

const DATA = {
  hana,
};

const getData = (data) => DATA[data];

export { getData };
