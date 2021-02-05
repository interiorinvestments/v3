const imgPath = '/img/customization/privateOffice/';
const finishPath = '/img/customization/finishes/';

const items = {
  title: 'Private Office',
  description: "Private Office | 9' x 10'",
  options: [
    {
      name: 'Original Layout',
      floor: `${imgPath}privateofficefloor0.jpg`,
      image: `${imgPath}privateoffice0.jpg`,
      details: [
        'L-shaped fixed height desk w/ woodgrain laminate worksurface, closed supports and modesty panel',
        'Laminate FF pedestal and one mobile BF pedestal per set',
        'SOI Wit mid back task chair',
        'Herman Miller Keyn armless guest chair with upholstered seat pad - QTY: (1)',
      ],
    },
    {
      name: 'Better',
      floor: `${imgPath}privateofficefloor1.jpg`,
      image: `${imgPath}privateoffice1.jpg`,
      details: [
        'L-shaped fixed height desk w/ woodgrain laminate worksurface, closed supports and modesty panel',
        'Laminate FF pedestal and one mobile BF pedestal per set',
        'ADD: wall-mounted tackboard and overhead storage above return worksurface',
        'UPGRADE: task seating to Mirra 2',
        'UPGRADE: guest seating to Hay About A chair, fully upholstered with fixed loop arms - QTY: (1)',
        'ADD: a single monitor arm',
      ],
    },
    {
      name: 'Best',
      floor: `${imgPath}privateofficefloor2.jpg`,
      image: `${imgPath}privateoffice2.jpg`,
      details: [
        'UPGRADE: main worksurface to height adjustable',
        'Laminate FF pedestal and one mobile BF pedestal per set',
        'Overhead storage above return worksurface',
        'UPGRADE: wall-mounted tackboard to magnetic glass board',
        'ADD: one woodgrain laminate tower',
        'ADD: undershelf task light',
        'UPGRADE: task seating to New Aeron',
        'UPGRADE: guest seating to upholstered armchair on wooden base - QTY: (2)',
        'CONVERT: a single monitor arm to dual',
      ],
    },
  ],
  finishes: [
    {
      name: 'Clear on Ash, LBA',
      image: `${finishPath}clearonash.jpg`,
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
      name: 'Lagoon, 22Q13',
      image: `${finishPath}lagoon.jpg`,
    },
    {
      name: 'Steelcut 685 for Hay seating only',
      image: `${finishPath}steelcut.jpg`,
    },
  ],
};

export default items;
