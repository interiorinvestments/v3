import { Container } from '@material-ui/core';
import Image from 'next/image';

import Header from './Header';
import SpacesList from './SpacesList';

const FloorPlanView = () => (
  <Container>
    <Header />
    <Image src="/img/floorplans/level17spec.jpg" height={847} width={1072} />
    <SpacesList />
  </Container>
);

export default FloorPlanView;
