import benching from './benching';
import executiveOffice from './executiveOffice';
import privateOffice from './privateOffice';
import workstation from './workstation';

const DATA = {
  benching,
  executiveOffice,
  privateOffice,
  workstation,
};

const getData = (data) => DATA[data];

export { getData };
