import focusRoom from './focusRoom';
import meetingRoomA from './meetingRoomA';
import meetingRoomB from './meetingRoomB';
import multiPurposeRoom from './multiPurposeRoom';

const DATA = {
  focusRoom,
  meetingRoomA,
  meetingRoomB,
  multiPurposeRoom,
};

const getData = (data) => DATA[data];

export { getData };
