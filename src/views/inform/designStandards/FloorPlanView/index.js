import { Container, makeStyles } from '@material-ui/core';
import Image from 'next/image';

import Header from './Header';
import SpacesList from './SpacesList';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const FloorPlanView = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Header />
      <Image src="/img/floorplans/level17spec.jpg" height={847} width={1072} />
      <SpacesList />
    </Container>
  );
};
export default FloorPlanView;
