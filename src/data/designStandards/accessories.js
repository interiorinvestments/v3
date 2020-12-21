const imgPath = '/img/designStandards/accessories/';
const optionsPath = '/img/designStandards/options/';

const items = {
  title: 'Accessories',
  products: [
    {
      code: 'AC.01',
      name: 'Mobile Tackboard/Markerboard',
      manufacturer: 'OFS',
      collection: 'Heya',
      image: `${imgPath}ac01.jpg`,
      floor: `${imgPath}ac01f.jpg`,
      description: '48"W x 69.5"H x 28.5"D Mobile media screen, double-sided; one side is dry erase marker board and the other side is fabric tackable board. Includes leather pull and Marker holder.',
      finishes: 'Fabric tackable board in Camira Synergy color Alike LDS62, standard dry eraser White board, Luster Grey base on casters, Black leather pull and cup holder finished per image.',
      location: 'Open Office - Collaboration Areas and Mult-purpose rooms',
      quantity: '(4)',
      options: [
        {
          name: 'Fabric',
          description: 'Synergy Alike LDS62',
          image: `${optionsPath}synergyalike.jpg`,
        },
        {
          name: 'Maker board',
          description: 'Standard White',
          image: `${optionsPath}standardwhite.jpg`,
        },
        {
          name: 'Base',
          description: 'Luster Grey',
          image: `${optionsPath}lustergrey.jpg`,
        },
        {
          name: 'Leather Pull',
          description: 'Black',
          image: `${optionsPath}black.jpg`,
        },
        {
          name: 'Marker Holder',
          description: 'Onyx (Black)',
          image: `${optionsPath}black.jpg`,
        },
        {
          name: 'Leather Pull',
          image: `${optionsPath}leatherpull.jpg`,
        },
        {
          name: 'Marker Holder',
          image: `${optionsPath}markerholder.jpg`,
        },
      ],
    },
    {
      code: 'AC.02A',
      name: 'Portable Power Module/Tower',
      manufacturer: 'Byrne',
      collection: 'Tully or "Tuck-in" unit',
      image: `${imgPath}ac02a.jpg`,
      floor: `${imgPath}ac02af.jpg`,
      description: 'Tuck-in power unit with USB-C, 18 Watt for charging new smart phones and tablets, Fast charging, 4 AMP USB, with 2" tail with special 96" wide circuit breaker cord for use in Chicago',
      finishes: 'Black soft touch Plastic with gunmetal power cord',
      location: 'Multi-purpose rooms',
      quantity: '(5)',
    },
    {
      code: 'AC.02B',
      name: 'Portable Power Module/Tower',
      manufacturer: 'Byrne',
      collection: 'Vesta Wireless',
      image: `${imgPath}ac02b.jpg`,
      description: 'The wireless unit will ONLY have (3) Type A USB ports and (1) Type C USB port. The unit comes with charging base. the unit must be properly charged to be used at full function',
      finishes: 'White body with White Insert and White cord',
      location: 'Open office - Collaboration areas',
      quantity: '(3)',
    },
    {
      code: 'AC.02C',
      name: 'Portable Power Module/Tower',
      manufacturer: 'Byrne',
      collection: 'Vesta Corded',
      image: `${imgPath}ac02c.jpg`,
      description: 'The unit has (3) power outlets, (1) Dual type A USB port and (1) type C USB port with power corded. The unit must be plugged into power outlet.',
      finishes: 'White body with White Insert and White cord',
      location: 'Multi-purpose room and Café',
      quantity: '(4)',
    },
    {
      code: 'AC.03',
      name: 'Personal Task Light',
      manufacturer: 'Herman Miller',
      collection: 'Lolly',
      image: `${imgPath}ac03.jpg`,
      floor: `${imgPath}ac03f.jpg`,
      Description: 'Freestanding personal task light provides light and USB charging for personal devices. It has one standard type A USB port adn one type C USB port charges at 3 amps and provides USB power delivery charging technology. LED provided lumens and has a 4-stage touch sensitive dimming feature. The light has an automatic shutoff after 4 hours.',
      finishes: 'White',
      location: 'Typical Workstations',
      quantity: '(168) - One per station',
      options: [
        {
          name: 'Finish',
          description: 'White per image',
          image: `${optionsPath}standardwhite.jpg`,
        },
        {
          image: `${optionsPath}lolly2.jpg`,
        },
      ],
    },
  ],
};

export default items;
