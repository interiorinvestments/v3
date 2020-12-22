const tablePath = '/img/designStandards/tables/';
const chairPath = '/img/designStandards/seating/';
const optionsPath = '/img/designStandards/options/';

const items = {
  title: 'Meeting Rooms',
  products: [
    {
      code: 'TB.02',
      name: 'Typical Height Adjustable',
      manufacturer: 'Herman Miller',
      collection: 'Motia',
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
    {
      code: 'TB.03',
      name: 'Multi-purpose Table',
      manufacturer: 'OFS',
      collection: 'Applause',
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
      code: 'TB.04 & TB.04A',
      name: 'Meeting Table',
      manufacturer: 'Enwork',
      collection: 'Custom HAT',
      image: `${tablePath}tb04.jpg`,
      floor: `${tablePath}tb04f.jpg`,
      description: 'Height adjustable meeting table with 48"Dia round top (TB.04) and 54"Dia (TB.04A) with square edge detail and height adjustable legs. Table specified with power unit. Interior Investments will include all required power manager to conceal and manage power cords/cables.',
      power: 'Custom power unit: (4) power outlets, (1) opening for data by others and (2) USB "A" charging ports, (2) USB "C" 18W charging ports. Power unit comes with 6\' hardwire conduits. Table must be hardwired.',
      finishes: 'Natural recon 7996 table top and silver painted height adjustable legs. Power lid in clear aluminum with black interior.',
      location: 'Huddle Rooms 4411 (TB.04A), 4424, 4442, and 4448',
      quantity: '(3) TB.04 and (1) TB.04A',
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
    {
      code: 'TB.05 & TB.05A',
      name: 'Meeting Table',
      manufacturer: 'Enwork',
      collection: 'Custom HAT',
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
    {
      code: 'TB.14',
      name: 'Pull Up Laptop Table',
      manufacturer: 'Naughtone',
      collection: 'Riley',
      image: `${tablePath}tb14.jpg`,
      floor: `${tablePath}tb14f.jpg`,
      description: 'Pull up table, crafted from solid hardwood and veneer faced molded plywood, sealed with a light matt lacquer. Overall dims: 17.5"W x 21.5"D x 25.5"H',
      finishes: 'Oak',
      location: 'Multi-purpose',
      quantity: '(8)',
    },
    {
      code: 'CH.03',
      name: 'Typical Huddle Room Chair',
      manufacturer: 'OFS',
      collection: 'Pret',
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
      code: 'CH.08',
      name: 'Multi-purpose Chair',
      manufacturer: 'Herman Miller',
      collection: 'Verus Side',
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
      collection: 'Swift Modular',
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
      code: 'CH.12',
      name: 'Counter Stool',
      manufacturer: 'National',
      collection: 'Grin Counter Stool',
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
  ],
};

export default items;
