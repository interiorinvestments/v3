import accessories from './accessories';
import conference from './conference';
import privateOffices from './privateOffices';
import reception from './reception';
import seating from './seating';
import storage from './storage';
import workstations from './workstations';

const DATA = {
  workstations,
  privateOffices,
  seating,
  conference,
  reception,
  storage,
  accessories,
};

const getData = (data) => DATA[data];

export { getData };
