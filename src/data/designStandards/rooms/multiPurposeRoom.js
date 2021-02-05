const tablePath = '/img/designStandards/tables/';
const chairPath = '/img/designStandards/seating/';
const optionsPath = '/img/designStandards/options/';
const imgPath = '/img/designStandards/accessories/';
const items = {
  title: 'Multi Purpose Room',
  products: [
    {
      code: 'CH.08',
      name: 'Multi-purpose Chair',
      manufacturer: 'Herman Miller',
      series: 'Verus Side',
      image: `${chairPath}ch08.jpg`,
      floor: `${chairPath}ch08f.jpg`,
      description: 'Side chairs with upholstered seat, Interweave 2 suspension back, fixed loop arms on 4-legged base with casters. this chair can be stacked 4 high on the floor. chair specified with casters for carpet only. Chair is tested and warranted for use by persons 300 lbs. and under.',
      finishes: 'InterWeave 2 Iceberg 36501 back, Mineral VPR frame and arms on Satin Aluminum SNA base on Black casters. Tailored color Cadet 23509',
      location: 'Multi-purpose 4401',
      quantity: '(22) for Multi-purpose room (2) for Studio and (2) for Storage',
      options: [
        {
          name: 'Seat Upholstery',
          description: 'Tailored - Cadet',
          image: `${optionsPath}tailoredcadet.jpg`,
        },
        {
          name: 'Suspension Back',
          description: 'Iceberg 36501',
          image: `${optionsPath}iceberg36501.jpg`,
        },
        {
          name: 'Frame/Arms',
          description: 'Mineral VPR',
          image: `${optionsPath}mineralvpr.jpg`,
        },
        {
          name: 'Base',
          description: 'Satin Aluminum SNA',
          image: `${optionsPath}satinaluminumsa.jpg`,
        },
      ],
    },
    {
      code: 'CH.09',
      name: 'Modular Sofa',
      manufacturer: 'National',
      series: 'Swift Modular',
      image: `${chairPath}ch09.jpg`,
      floor: `${chairPath}ch09f.jpg`,
      description: 'Modular lounge chair to be equipped w/ multiple one-seat lounge chairs, armless. Seat can be ganged together. Fully upholstered seat and back. Lounge chair modified to have a special "Plinth" base. Overall seat height: 17" high for plinth base.',
      finishes: 'Black Plinth base. Seat and back to be upholstered in Ultrafabrics Brisa Ash color 553 5802',
      location: 'Multi-purpose 4401',
      quantity: '(11) one-seat units',
      options: [
        {
          name: 'Back/sat upholstery',
          description: 'Brisa - Ash 533 5802',
          image: `${optionsPath}brisa.jpg`,
        },
        {
          name: 'Plinth Base',
          description: 'Black',
          image: `${optionsPath}black.jpg`,
        },
      ],
    },
    {
      code: 'TB.03',
      name: 'Multi-purpose Table',
      manufacturer: 'OFS',
      series: 'Applause',
      image: `${tablePath}tb03.jpg`,
      floor: `${tablePath}tb03f.jpg`,
      description: '60"W x 30"D flip and nest training table with t-legs base on casters. Table specified without power or modesty panel. Tables ca be ganged together as required.',
      finishes: 'Frosty White laminate top with Luster Grey base on Black casters',
      Location: 'Multi-purpose 4401',
      quantity: '(9) as shown on plan',
      options: [
        {
          name: 'Table Top',
          description: 'Frosty White',
          image: `${optionsPath}frostywhite.jpg`,
        }, {
          name: 'Base',
          description: 'Luster Grey',
          image: `${optionsPath}lustergrey.jpg`,
        },
        {
          name: 'Casters',
          description: 'Black',
          image: `${optionsPath}black.jpg`,
        },
      ],
    },
    {
      code: 'TB.14',
      name: 'Pull Up Laptop Table',
      manufacturer: 'Naughtone',
      series: 'Riley',
      image: `${tablePath}tb14.jpg`,
      floor: `${tablePath}tb14f.jpg`,
      description: 'Pull up table, crafted from solid hardwood and veneer faced molded plywood, sealed with a light matt lacquer. Overall dims: 17.5"W x 21.5"D x 25.5"H',
      finishes: 'Oak',
      location: 'Multi-purpose',
      quantity: '(8)',
    },
    {
      code: 'AC.01',
      name: 'Mobile Tackboard/Markerboard',
      manufacturer: 'OFS',
      series: 'Heya',
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
  ],
};

export default items;
