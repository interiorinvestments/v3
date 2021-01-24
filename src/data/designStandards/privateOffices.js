const imgPath = '/img/designStandards/privateOffices/';
const optionsPath = '/img/designStandards/options/';

const items = {
  title: 'Private Offices',
  products: [
    {
      code: 'PO.01',
      name: 'Private Office',
      manufacturer: 'Herman Miller',
      series: 'Canvas',
      image: `${imgPath}privateoffice.jpg`,
      floor: `${imgPath}of01f.jpg`,
      description: 'Herman Miller Canvas private office, constructed w/ (1) 66W x 30D Motia adjustable height desk with shroud, modesty panel, 48W fixed height return worksurface, wall-mounted tackboards, wall-mounted overhead storage with hinged doors above return worksurface. Floor storage includes (1) BBF pedestal and (1) wardrobe tower with a coat rack. Accessories: (1) undershelf talk light, (1) clamp-on power unit and (2) single monitor arms.',
      finishes: 'Wood components in Matte/Satin Sonoma (SM) wood veneer, meeting table metal base in polished finish. Standard storage pulls in Platinum Metallic',
      location: 'Private Offices',
      quantity: '(17)',
      options: [
        {
          name: 'HAT Top & Base',
          description: 'Sonoma (SM) Matte/Satin finish',
          image: `${optionsPath}sonoma.jpg`,
        },
        {
          name: 'Base',
          description: 'Polished Paint',
          image: `${optionsPath}polishedpaint.jpg`,
        },
        {
          name: 'Storage Pull',
          description: 'Platinum Metallic',
          image: `${optionsPath}platinummetallic.jpg`,
        },
        {
          name: 'Switch',
          description: 'Electric Height adjustable',
          image: `${optionsPath}electricheightadjustable.jpg`,
        },
      ],
    },
    {
      code: 'CH.01',
      name: 'Typical Task Chair',
      manufacturer: 'Herman Miller',
      series: 'New Aeron',
      image: '/img/designStandards/seating/ch01.jpg',
      floor: '/img/designStandards/seating/ch01f.jpg',
      description: 'Size "B" task chair, standard seat height range adjustment (15-7/8" to 20-7/8:"), tilt limiter control mechanism, height adjustable arms, non-upholstered armpads, adjustable posturefit SL back support, base specified with casters for carpet only. Size B: seat depth: 17". Maximum user weight: 350 lbs. Warranty: 12-year, 3-shift',
      finishes: 'Mineral Pellicle suspension seat and back, Mineral VPR frame color, Dark Mineral DVP base and armpads, Satin Aluminum Chassis on standard Black casters',
      location: 'Workstations, Confo Rooms, and Focus Rooms',
      quantity: '(195)',
      options: [
        {
          name: 'Seat/Back Suspension',
          description: 'Mineral Pellicle 23101',
          image: `${optionsPath}mineralpellicle.jpg`,
        },
        {
          name: 'Frame',
          description: 'Mineral VPR',
          image: `${optionsPath}mineralvpr.jpg`,
        },
        {
          name: 'Base/Armpads',
          description: 'DarkMineraldvp',
          image: `${optionsPath}darkmineraldvp.jpg`,
        },
        {
          name: 'Chassis',
          description: 'Stain Aluminum',
          image: `${optionsPath}stainaluminum.jpg`,
        },
        {
          name: 'Casters',
          description: 'Black',
          image: `${optionsPath}black.jpg`,
        },
      ],
    },
    {
      code: 'CH.02',
      name: 'Typical Guest Chair',
      manufacturer: 'National',
      series: 'Delgado',
      image: '/img/designStandards/seating/ch02.jpg',
      floor: '/img/designStandards/seating/ch02f.jpg',
      description: 'Guest chair with fully upholstered seat, back and curved arms on high-profile polished aluminum base.',
      finishes: 'Graded-in fabric: Shenanigans color 20364 Stunt. Polished Aluminum base only (standard)',
      location: 'Confo. rooms',
      quantity: '(17)',
      options: [
        {
          name: 'Seat/Back Upholstery',
          description: 'Stunt 20364',
          image: `${optionsPath}stunt20364.jpg`,
        },
        {
          name: 'Base',
          description: 'Polished Aluminum',
          image: `${optionsPath}polishedaluminum.jpg`,
        },
      ],
    },
  ],
};

export default items;
