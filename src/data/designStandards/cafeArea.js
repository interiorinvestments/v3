const tablePath = '/img/designStandards/tables/';
const chairPath = '/img/designStandards/seating/';
const optionsPath = '/img/designStandards/options/';

const items = {
  title: 'Café Area',
  products: [
    {
      code: 'TB.06',
      name: 'Bar Height Café Table',
      manufacturer: 'OFS',
      collection: 'Heya',
      image: `${tablePath}tb06.jpg`,
      floor: `${tablePath}tb06f.jpg`,
      description: '72"W X 42"D soft rectangular bar height café tale, surface to have a knife edge detail, (4) wooden legs and metal footrail. Each table accommodates 4 - 6 people.',
      finishes: 'Table top in Frosty White, wooden base in Dessert DST and Footrail finished in Latte powder-coat finish.',
      location: 'Café/Work Zone',
      quantity: '(4)',
      options: [
        {
          name: 'Table Top',
          description: 'Frosty White',
          image: `${optionsPath}frostywhite.jpg`,
        },
        {
          name: 'Wood Legs',
          description: 'Dessert DST',
          image: `${optionsPath}dessertdst.jpg`,
        },
        {
          name: 'Base',
          description: 'Latte (LATT)',
          image: `${optionsPath}latte.jpg`,
        },
      ],
    },
    {
      code: 'TB.07',
      name: 'Café Table',
      manufacturer: 'OFS',
      collection: 'Nineteen20',
      image: `${tablePath}tb07.jpg`,
      floor: `${tablePath}tb07f.jpg`,
      description: 'Café table constructed with rectangular table top with square edge detail and two sets of stainless steel square plate base. Dimensions: 60"W x 36"D x 29.5"H',
      finishes: 'Frosty White laminate top with Latte powder-coated base.',
      location: 'Café/Work Zone',
      quantity: '(3)',
      options: [
        {
          name: 'Table Top',
          description: 'Frosty White',
          image: `${optionsPath}frostywhite.jpg`,
        },
        {
          name: 'Base',
          description: 'Latte (LATT)',
          image: `${optionsPath}latte.jpg`,
        },
      ],
    },
    {
      code: 'TB.08',
      name: 'Café Table',
      manufacturer: 'OFS',
      collection: 'Nineteen20',
      image: `${tablePath}tb08.jpg`,
      floor: `${tablePath}tb08f.jpg`,
      description: 'Café table constructed with round table top with square edge detail and stainless steel disc plate base. Dimensions: 30"D x 29.5"H',
      finishes: 'Frosty White laminate top with Latte powder-coated base.',
      location: 'Café/Work Zone',
      quantity: '(4)',
      options: [
        {
          name: 'Table Top',
          description: 'Frosty White',
          image: `${optionsPath}frostywhite.jpg`,
        },
        {
          name: 'Base',
          description: 'Latte (LATT)',
          image: `${optionsPath}latte.jpg`,
        },
      ],
    },
    {
      code: 'TB.09',
      name: 'Café Table',
      manufacturer: 'OFS',
      collection: 'Nineteen20',
      image: `${tablePath}tb09.jpg`,
      floor: `${tablePath}tb09f.jpg`,
      description: 'Café table constructed with rectangular table top with square edge detail and two sets of stainless steel square plate base. Dimensions: 52"W x 36"D x 29.5"H',
      finishes: 'Frosty White laminate top with Latte powder-coated base.',
      location: 'Café/Work Zone',
      quantity: '(4)',
      options: [
        {
          name: 'Table Top',
          description: 'Dessert Laminate',
          image: `${optionsPath}dessertdst.jpg`,
        },
        {
          name: 'Base',
          description: 'Latte (LATT)',
          image: `${optionsPath}latte.jpg`,
        },
      ],
    },
    {
      code: 'BQT.01/BQT.02',
      name: 'Café Banquette',
      manufacturer: 'National',
      collection: 'Fringe booth',
      image: `${chairPath}bqt01.jpg`,
      floor: `${chairPath}bqt01f.jpg`,
      description: 'Fully upholstered two-seater booth, mid back, armless with plinth base. Overall dimensions: 53.5"W x 27"D x 40.25"H; seta height: 18.5"H. Unit ships fully assembled. Taller height is available. BQT.01: Shared double booth. BQT.02: Single booth',
      finishes: 'Plinth base finished in Black. Back upholstered in Designtex Dapple - Mineral 3737-401 and seat cushion upholstered in Maharam Article vinyl 458600-014 Storm',
      location: 'Café/Work Zone',
      quantity: '(3) BQT.01 Shared double booths & (2) BQT.02 Single booths',
      options: [
        {
          name: 'Back fabric upholstery',
          description: 'Dapple - Mineral 3737-401',
          image: `${optionsPath}dapplemineral.jpg`,
        },
        {
          name: 'Seat fabric upholstery',
          description: 'Article Storm',
          image: `${optionsPath}latte.jpg`,
        },
        {
          name: 'Plinth Base',
          description: 'Black',
          image: `${optionsPath}black.jpg`,
        },
      ],
    },
    {
      code: 'CH.05',
      name: 'Café Chair',
      manufacturer: 'OFS',
      collection: 'Harpin',
      image: `${chairPath}ch05.jpg`,
      floor: `${chairPath}ch05f.jpg`,
      description: 'Café Chair with one piece plastic shell, armless and upholstered seat pad on sled metal base.',
      finishes: 'Plastic seat shell finished in OFS White (WHT) and Latte powder-coated base. DesignTex Arne 4141-303 color Cranberry',
      location: 'Café/Work Zone',
      quantity: '(20)',
      options: [
        {
          name: 'Plastic Shell',
          description: 'White (WHT)',
          image: `${optionsPath}white.jpg`,
        },
        {
          name: 'Seat Pad Upholstery',
          description: 'Arne 4141-303 Cranberry',
          image: `${optionsPath}cranberry.jpg`,
        },
        {
          name: 'Base',
          description: 'Latte (LATT)',
          image: `${optionsPath}latte.jpg`,
        },
      ],
    },
    {
      code: 'CH.06',
      name: 'Café Barstool',
      manufacturer: 'OFS',
      collection: 'Bistro #104058',
      image: `${chairPath}ch06.jpg`,
      floor: `${chairPath}ch06f.jpg`,
      description: 'Bar height stool with #D molded finished veneer back, upholstered seat and back with non-marring glides on 4-legged base with footrest. Seat height: 29.25"H',
      finishes: 'Standard OFS Dessert DST wood veneer back with Latee powder-coated frame and base. Arc Com Sonic AC-63467 color Fog#8',
      location: 'Café/Work Zone at bar height table and bar height millwork',
      quantity: '(22)',
      options: [
        {
          name: 'Seat/Back Upholstery',
          description: 'Sonic AC-63467 Fog#8',
          image: `${optionsPath}fog8.jpg`,
        },
        {
          name: 'Molded Wood Back',
          description: 'Dessert DST',
          image: `${optionsPath}dessertdst.jpg`,
        },
        {
          name: 'Base',
          description: 'Latte (LATT)',
          image: `${optionsPath}latte.jpg`,
        },
      ],
    },
  ],
};

export default items;
