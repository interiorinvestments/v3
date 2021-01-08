const imgPath = '/img/locations/esd/';
const docPath = '/docs/locations/esd/';

const location = {
  location: 'Chicago, IL',
  sqft: '47,000',
  subTitle: 'This project was 47,000 square feet over 2 floors in the Willis Tower. Products include Herman Miller Group including Eames shell chairs, Mirra 2, Eames Walnut Stools, Nemschoff Aspen and Canvas workstations.',
  images: [
    {
      imgPath: `${imgPath}esd1.png`,
    },
    {
      imgPath: `${imgPath}esd2.png`,
    },
    {
      imgPath: `${imgPath}esd3.png`,
    },
    {
      imgPath: `${imgPath}esd4.png`,
    },
  ],
  floorplans: [
    {
      src: `${imgPath}esdFloorplan1.jpg`,
    },
    {
      src: `${imgPath}esdFloorplan2.jpg`,
    },
    {
      src: `${imgPath}esdExpansion.jpg`,
    },
    {
      imgPath: `${imgPath}esd4.png`,
    },
  ],
  lookbooks: [
    {
      src: `${docPath}esdFurnitureMenu.pdf`,
    },
  ],
  typicals: [
    {
      src: `${imgPath}esdPOTypical.jpg`,
    },
    {
      src: `${imgPath}esdWorkstationTypical.jpg`,
    },
  ],
};

export default location;
