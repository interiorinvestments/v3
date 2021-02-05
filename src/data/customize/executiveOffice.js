const imgPath = '/img/customization/executiveOffice/';
const finishPath = '/img/customization/finishes/';

const items = {
  title: 'Executive Office',
  description: 'Executive Office',
  options: [
    {
      name: 'Original Layout',
      floor: `${imgPath}executiveofficefloor0.jpg`,
      image: `${imgPath}executiveoffice0.jpg`,
      details: [
        'Freestanding fixed height desk',
        'Work wall, constructed w/ (2) lateral files, wall-mounted tackboard and overhead storage with undershelf task light',
        'HMI New Verus task chair',
        'Everywhere meeting table',
        'Guest armchair with wood back, upholstered seat on metal base',
      ],
    },
    {
      name: 'Better',
      floor: `${imgPath}executiveofficefloor1.jpg`,
      image: `${imgPath}executiveoffice1.jpg`,
      details: [
        'UPGRADE: main desk to freestanding Motia adjustable height table',
        'Work wall, constructed w/ (2) lateral files, wall-mounted tackboard and overhead storage with undershelf task light',
        'ADD: (2) wardrobe towers',
        'ADD: one clamp-on power unit w/ 2 duplex outlets & dual USB port above worksurface for personal devices',
        'UPGRADE: task seating to Mirra 2',
        'Everywhere meeting table',
        'UPGRADE: guest seating to Hay fully upholstered chair on polished metal base',
      ],
    },
    {
      name: 'Best',
      floor: `${imgPath}executiveofficefloor2.jpg`,
      image: `${imgPath}executiveoffice2.jpg`,
      details: [
        'ADD shroud base to Motia adjustable height table',
        'Work wall, constructed w/ (2) lateral files, wall-mounted tackboard and overhead storage with undershelf task light',
        'UPGRADE: wall-mounted tackboard board to magnetic glassboard',
        '(2) wardrobe towers',
        'One clamp-on power unit w/ 2 duplex outlets & dual USB port above worksurface for personal devices',
        'UPGRADE: task seating to Eams soft pad aluminum group w/ leather upholstery',
        'ADD: a single monitor arm',
        'Everywhere meeting table',
        'UPGRADE: guest seating to Eames armless swivel chair w/ leather upholstery',
        'UPGRADE: the entire office to wood veneer to match woodgrain laminate finish',
      ],
    },
  ],
  finishes: [
    {
      name: 'Dark Brown Walnut, LBD',
      image: `${finishPath}darkbrownwalnut.jpg`,
    },
    {
      name: 'Silver Pine, 3DE02',
      image: `${finishPath}silverpine.jpg`,
    },
    {
      name: 'Metallic Silver, MS',
      image: `${finishPath}metallicsilver.jpg`,
    },
    {
      name: 'Blueberry, 8R22',
      image: `${finishPath}blueberry.jpg`,
    },
    {
      name: 'White, 91',
      image: `${finishPath}white91.jpg`,
    },
    {
      name: 'Divina 384',
      image: `${finishPath}divina.jpg`,
    },
    {
      name: 'Black, 1R10 Leather for Eames',
      image: `${finishPath}black1r10.jpg`,
    },
  ],
};

export default items;
