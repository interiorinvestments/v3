const num = () => Math.floor(Math.random() * 11);

const items = {
  title: 'Workstations',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: `https://source.unsplash.com/random/${num()}`,
  model: {
    glb: '/img/designStandards/privateOffices/POBest.glb',
    usdz: '/img/designStandards/privateOffices/POBest.usdz',
  },
  finishes: [
    {
      name: 'Herman Miller 91 Laminate',
      description: 'Laminate Work Surface',
      image: `https://source.unsplash.com/random/${num()}`,
    },
    {
      name: 'Herman Miller 91 Laminate',
      description: 'Laminate Work Surface',
      image: `https://source.unsplash.com/random/${num()}`,
    },
    {
      name: 'Herman Miller 91 Laminate',
      description: 'Laminate Work Surface',
      image: `https://source.unsplash.com/random/${num()}`,
    },
    {
      name: 'Herman Miller 91 Laminate',
      description: 'Laminate Work Surface',
      image: `https://source.unsplash.com/random/${num()}`,
    },
    {
      name: 'Herman Miller 91 Laminate',
      description: 'Laminate Work Surface',
      image: `https://source.unsplash.com/random/${num()}`,
    },
    {
      name: 'Herman Miller 91 Laminate',
      description: 'Laminate Work Surface',
      image: `https://source.unsplash.com/random/${num()}`,
    },
    {
      name: 'Herman Miller 91 Laminate',
      description: 'Laminate Work Surface',
      image: `https://source.unsplash.com/random/${num()}`,
    },
    {
      name: 'Herman Miller 91 Laminate',
      description: 'Laminate Work Surface',
      image: `https://source.unsplash.com/random/${num()}`,
    },
  ],
};

export default items;
