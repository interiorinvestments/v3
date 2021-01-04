const imgPath = '/img/customization/workstation/';
const finishPath = '/img/customization/finishes/';

const items = {
  title: 'Workstation',
  description: "Example of Workstation Stations | 4-Pack: 6' x 8.5'",
  options: [
    {
      name: 'Original Layout',
      floor: `${imgPath}workstationfloor0.jpg`,
      image: `${imgPath}workstation0.jpg`,
      details: [
        '46H Canvas wall-based workstations w/ fabric interior and exterior tiles',
        'Fixed height worksurfaces',
        'Mobile BF pedestal with cushion top per seat',
        'New Verus task chair',
        'A single monitor arm per seat',
      ],
    },
    {
      name: 'Reconfiguration 1',
      floor: `${imgPath}workstationfloor1.jpg`,
      image: `${imgPath}workstation1.jpg`,
      details: [
        'UPGRADE: to 46H Canvas wall-based workstations w/ fabric interior and laminate (or wood veneer) exterior tiles',
        'ADD: laminate (or wood veneer) gallery panels to provide additional privacy',
        'UPGRADE: main worksurface to Motia adjustable height table',
        'ADD: a clamp-on power unit w/ 2 duplex outlets & dual USB port per seat',
        'ADD: an additional single monitor arm to accommodate (2) monitors',
        'ADD: a low credenza w/ drawer and open bookcase per seat',
        'UPGRADE: task seating to Mirra 2',
      ],
    },
    {
      name: 'Reconfiguration 2',
      floor: `${imgPath}workstationfloor2.jpg`,
      image: `${imgPath}workstation2.jpg`,
      details: [
        'UPGRADE: to 46H Canvas wall-based workstations w/ fabric interior and laminate (or wood veneer) exterior tiles and 11"H frameless glass screen top caps',
        'Laminate (or wood veneer) gallery panel to provide additional privacy',
        'Main worksurface to Motia adjustable height table',
        'UPGRADE: a clamp-on power unit to 4 duplex outlets & dual USB port per seat',
        'ADD: a personal organizer per seat',
        '(2) single monitor arms to accommodate (2) monitors',
        'ADD: a cushion top to low credenza',
        'UPGRADE: task seating to New Aeron',
      ],
    },
  ],
  finishes: [
    {
      name: 'Medium Matte Walnut, LBU',
      image: `${finishPath}mediummattewalnut.jpg`,
    },
    {
      name: 'Silver Pine, 3DE02',
      image: `${finishPath}silverpine.jpg`,
    },
    {
      name: 'White, 91',
      image: `${finishPath}white91.jpg`,
    },
    {
      name: 'Metallic Silver, MS',
      image: `${finishPath}metallicsilver.jpg`,
    },
    {
      name: 'Grey Black, 3AR15',
      image: `${finishPath}greyblack.jpg`,
    },
    {
      name: 'Loden, 1LM09',
      image: `${finishPath}loden.jpg`,
    },
  ],
};

export default items;
