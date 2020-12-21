const imgPath = '/img/designStandards/floorplan/';

const floorplan = {
  title: 'Floorplan',
  image: `${imgPath}floorplancolored.png`,
  areas: [
    {
      name: 'Workstations',
      image: `${imgPath}workstations.jpg`,
      color: '#F87171',
      href: '/inform/design-standards/workstations',
    },
    {
      name: 'Private Offices',
      image: `${imgPath}privateoffice.jpg`,
      color: '#FBBF24',
      href: '/inform/design-standards/private-offices',
    },
    {
      name: 'Meeting Rooms',
      image: `${imgPath}meetingroom.jpg`,
      color: '#34D399',
      href: '/inform/design-standards/meeting-rooms',
    },
    {
      name: 'Café Area',
      image: `${imgPath}cafe.jpg`,
      color: '#60A5FA',
      href: '/inform/design-standards/cafe-area',
    },
    {
      name: 'Collaboration/Lounge Area',
      image: `${imgPath}collaboration.jpg`,
      color: '#A78BFA',
      href: '/inform/design-standards/collaboration-lounge',
    },
    {
      name: 'Accessories',
      image: `${imgPath}accessories.jpg`,
      href: '/inform/design-standards/accessories',
    },
  ],
};

export { floorplan };
