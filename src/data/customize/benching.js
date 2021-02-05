const imgPath = '/img/customization/benching/';
const finishPath = '/img/customization/finishes/';

const items = {
  title: 'Benching',
  description: "Benching Stations | 6-Pack 6' x 2.5'",
  options: [
    {
      name: 'Value',
      floor: `${imgPath}benchingvaluefloor.jpg`,
      image: `${imgPath}benchingvalue.jpg`,
      details: [
        'Fixed height Layout Studio with performance rail',
        'Flat Edge divider screen, overall system height: 42"H',
        'Mobile BF pedestal with cushion top',
        'Lino task seating',
      ],
    },
    {
      name: 'Better',
      floor: `${imgPath}benchingfloor1.jpg`,
      image: `${imgPath}benching1.jpg`,
      details: [
        'UPGRADE: to Nevi Link height adjustable benching stations w/ exposed base',
        'Flat Edge divider screen, overall system height: 46"H',
        'ADD: a clamp-on power unit w/2 duplex outlets & dual USB port per seat',
        'UPGRADE: storage to low credenza w/ drawer and open bookcase and cushion top',
        'UPGRADE: task seating to Mirra 2',
      ],
    },
    {
      name: 'Best',
      floor: `${imgPath}benchingfloor2.jpg`,
      image: `${imgPath}benching2.jpg`,
      details: [
        'UPGRADE: to Nevi Link height adjustable benching station w/ gallery end panels',
        'Flat Edge divider screen, overall system height: 46"H',
        'A clamp-on power unit w/2 duplex outlets & dual USB port per seat',
        'A low credenza w/ drawer and open bookcase and cushion top',
        'ADD: a single monitor arm & freestanding task light per seat',
        'UPGRADE: task seating to New Aeron',
      ],
    },
  ],
  finishes: [
    {
      name: 'Phantom Ecru, LBR',
      image: `${finishPath}phantomecru.jpg`,
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
      name: 'Blueberry, 8R22',
      image: `${finishPath}blueberry.jpg`,
    },
  ],
};

export default items;
