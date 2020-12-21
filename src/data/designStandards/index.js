import accessories from './accessories';
import cafeArea from './cafeArea';
import collaborationLounge from './collaborationLounge';
import meetingRooms from './meetingRooms';
import privateOffices from './privateOffices';
import workstations from './workstations';

const DATA = {
  accessories,
  cafeArea,
  collaborationLounge,
  meetingRooms,
  privateOffices,
  workstations,
};

const getData = (data) => DATA[data];

export { getData };
