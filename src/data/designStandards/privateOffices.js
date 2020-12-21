const imgPath = '/img/designStandards/privateOffices/';
const optionsPath = '/img/designStandards/options/';

const items = {
  title: 'Private Offices',
  products: [
    {
      code: 'OF.01 & TB.01',
      name: 'Typical Confo Room Table',
      manufacturer: 'National',
      collection: 'Tessera + Waveworks Table',
      image: `${imgPath}of01.jpg`,
      floor: `${imgPath}of01f.jpg`,
      description: '66"W x 30"D Wood veneer height adjustable desk (range: 29.1875" to 44"H), with fully enclosed base and a recessed breakfront modesty panel to conceal height adjustable base kit, inner shroud only seen in "up" position. Includes wire manager. control pad can be moved left or right. Table specified without storage. Maximum weight: 85 lbs. Desk Each Confo room to have (1) 30"Dia, waveworks round meeting table - wood veneer top and powered- coated metal base. Includes (1) Box/File static pedestal, locking.',
      finishes: 'Wood components in Matte/Satin Sonoma (SM) wood veneer, meeting table metal base in polished finish. Standard storage pulls in Platinum Metallic',
      location: 'Confo Rooms',
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
      collection: 'New Aeron',
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
      collection: 'Delgado',
      image: '/img/designStandards/seating/ch02.jpg',
      floor: '/img/designStandards/seating/ch02f.jpg',
      description: 'Guest chair with fully upholstered seat, back and curved arms on high-profile polished aluminum base.',
      finishes: 'Graded-in fabric: Shenanigans color 20364 Stunt. Polished Aluminium base only (standard)',
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
