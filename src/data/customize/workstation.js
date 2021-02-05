const imgPath = '/img/customization/workstation/';
const finishPath = '/img/customization/finishes/';

const items = {
  title: 'Workstation',
  description: 'Example of Workstations',
  options: [
    {
      name: "6' x 6' | Value Option",
      floor: `${imgPath}workstationvaluefloor.jpg`,
      image: `${imgPath}workstationvalue.jpg`,
      details: [
        '46H Canvas wall',
        '72”W x 30”D frame-attached fixed height worksurface',
        '(1) Mobile BF pedestal',
        '42"W x 24"D Fixed height frame-attached worksurface',
        '(1) Supporting BBF pedestal',
        '(1) Flo single monitor arm',
      ],
    },
    {
      name: "6' x 6' | Better Option",
      floor: `${imgPath}workstationbetterfloor.jpg`,
      image: `${imgPath}workstationbetter.jpg`,
      details: [
        '46H Canvas wall',
        '72"W x 30"D Nevi adjustable height table with c-leg base; leg to be attached to canvas frame using special bracket for stability',
        '(1) Mobile BF pedestal with cushion top',
        '42"W x 24"D Fixed height frame-attached worksurface',
        '(1) Supporting BBF pedestal',
        '(1) Flo single monitor arm',
        '(1) Clamp-on power unit, (2) power & (1) dual usb above worksurface, 108" long power cord',
      ],
    },
    {
      name: "6' x 6' | Best Option",
      floor: `${imgPath}workstationbestfloor.jpg`,
      image: `${imgPath}workstationbest.jpg`,
      details: [
        '46H Canvas wall w/ 11" frosted frameless glass topper',
        '60"W x 30"D Nevi adjustable height table with c-leg base',
        '42"W x 24"D Fixed height frame-attached worksurface',
        '(1) supporting BBF pedestal',
        '46"H x 12"W x 30"D Wardrobe tower; to be attached to frame for stability',
        '(2) Flo single monitor arms',
        '(1) Clamp-on power unit, (2) power & (1) dual usb above worksurface with (6) power outlets under worksurface, 108" long power cord',
      ],
    },
  ],
  finishes: [
    {
      name: 'Emit Bluefin 8Ex18',
      image: `${finishPath}emitblufin.jpg`,
    },
    {
      name: 'White, 91',
      image: `${finishPath}white91.jpg`,
    },
    {
      name: 'Phantom Cocoa, LBS',
      image: `${finishPath}phantomcocoa.jpg`,
    },
    {
      name: 'Opal Etch Glass, 5A',
      image: `${finishPath}opaletchglass.jpg`,
    },
    {
      name: 'Maharam Willow 466542-002 Dalmation',
      image: `${finishPath}maharamwillow.jpg`,
    },
  ],
};

export default items;
