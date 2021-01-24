const tablePath = '/img/designStandards/tables/';
const chairPath = '/img/designStandards/seating/';
const optionsPath = '/img/designStandards/options/';

const items = {
  title: 'Focus Room',
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
      code: 'CH.12',
      name: 'Counter Stool',
      manufacturer: 'National',
      series: 'Grin Counter Stool',
      image: `${chairPath}ch12.jpg`,
      floor: `${chairPath}ch12f.jpg`,
      description: 'Armless, low back counter height stool, fully upholstery seat and back on sled metal base with footrest. Interior seat and back will have 2.5" stitching details.',
      finishes: 'Special base powder-coated in Satin Nickel Metallic. Graded-in (grade E) Designtex Everywhere Texture Maroon 4147-306',
      location: 'Phone rooms *to be used with counter height millwork*',
      quantity: '(8)',
      options: [
        {
          name: 'Fabric Upholstery',
          description: 'Everywhere Texture Maroon 4147-306',
          image: `${optionsPath}maroon4147.jpg`,
        },
        {
          name: 'Base',
          description: 'Satin Nickel Metallic',
          image: `${optionsPath}satinnickelmetallic.jpg`,
        },
        {
          name: 'Stitching Detail',
          description: '2.5" Horizontal Stitch',
          image: `${optionsPath}horizontalstitch.jpg`,
        },
      ],
    },
    {
      code: 'TB.02',
      name: 'Typical Height Adjustable',
      manufacturer: 'Herman Miller',
      series: 'Motia',
      image: `${tablePath}tb02.jpg`,
      floor: `${tablePath}tb02f.jpg`,
      description: '72"W x 24"D (actual 70"W x 23"D) height adjustable desk with rectangular laminate top and T-leg base on glides. Floor to top-of-surface height adjustment ranges are 27" - 46" for the electric standard. Maximum load of 250lbs. including top. Table specified with "paddle switch" Table comes with 6\' power corded. Includes hinged cable manager trough underneath table top.',
      finishes: 'Table top in Studio White 98 laminate and Metallic Champagne CN powder-coated base. Finish to match workstations',
      location: 'Focus Rooms',
      quantity: '(10)',
      options: [
        {
          name: 'Table Top',
          description: 'Studio White 98',
          image: `${optionsPath}studiowhite98.jpg`,
        }, {
          name: 'Base',
          description: 'Metallic Champagne CN',
          image: `${optionsPath}metallicchampagnecn.jpg`,
        }, {
          name: 'Switch Detail',
          description: 'Paddle Switch',
          image: `${optionsPath}paddleswitch.jpg`,
        },
      ],
    },
  ],
};

export default items;
