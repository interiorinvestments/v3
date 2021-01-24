const tablePath = '/img/designStandards/tables/';
const chairPath = '/img/designStandards/seating/';
const optionsPath = '/img/designStandards/options/';

const items = {
  title: 'Meeting Room A',
  products: [
    {
      code: 'CH.03',
      name: 'Typical Huddle Room Chair',
      manufacturer: 'OFS',
      series: 'Pret',
      image: `${chairPath}ch03.jpg`,
      floor: `${chairPath}ch03f.jpg`,
      description: 'Meeting chair with one piece mesh back and seat with fixed ribbon arms, body balance control mechanism, seat height adjustment and 5-star base on casters. Weight capacity: 250 lbs.',
      finishes: 'Frame and arms finished in Chalk White (FCH), seat and back in Dove (MDV) mesh and Polished Aluminum base on Black casters.',
      location: 'Huddle rooms',
      quantity: '(29)',
      options: [
        {
          name: 'Frame/Arms',
          description: 'Chalk FCH',
          image: `${optionsPath}chalkfch.jpg`,
        },
        {
          name: 'Mesh Seat/Back',
          description: 'Dove MDV',
          image: `${optionsPath}dovemdv.jpg`,
        },
        {
          name: 'Base',
          description: 'Polished Aluminum B27',
          image: `${optionsPath}polishedaluminum.jpg`,
        },
      ],
    },
    {
      code: 'TB.05 & TB.05A',
      name: 'Meeting Table',
      manufacturer: 'Enwork',
      series: 'Custom HAT',
      image: `${tablePath}tb05.jpg`,
      floor: `${tablePath}tb05f.jpg`,
      description: 'Height adjustable meeting table with 72"W X 42"D (TB.05) rectangular top or 84"W X 42"D (TB.05A) with square edge detail and height adjustable legs. Table specified with power unit. Interior Investments will include all required power manager to conceal and manage power cords/cables.',
      power: 'Custom power unit: (4) power outlet, (1) opening for data by others and (2) USB "A" charging ports, (2) USB "C" charging ports. Power unit comes with (2) 6\' hardwire conduits. Table must be hardwired',
      finishes: 'Natural recon 7996 table top and silver painted height adjustable legs. Power lid in clear aluminum with black interior.',
      location: 'Huddle Rooms 4414, 4436, and 4452 (TB.05A)',
      quantity: '(2) TB.05 and (1) TB.05A',
      options: [
        {
          name: 'Table Top',
          description: 'Natural Recon 7996',
          image: `${optionsPath}naturalrecon7996.jpg`,
        }, {
          name: 'Base and Power lid',
          description: 'Silver',
          image: `${optionsPath}silver.jpg`,
        },
        {
          name: 'Power module',
          description: 'Double sided',
          image: `${optionsPath}powerdoublesided.jpg`,
        },
      ],
    },
  ],
};

export default items;
