import accessories from './accessories';
import casegoods from './casegoods';
import misc from './misc';
import seating from './seating';
import settings from './settings';
import tables from './tables';
import workstations from './workstations';

const DATA = {
  workstations,
  casegoods,
  misc,
  settings,
  tables,
  seating,
  accessories,
};

const getData = (data) => DATA[data];

export { getData };
