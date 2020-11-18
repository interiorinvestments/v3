import {
  Box, Container, Grid, makeStyles,
} from '@material-ui/core';
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
      <Grid container justify="center">
        <Image src="/img/floorplans/level17spec.jpg" height={500} width={700} />
      </Grid>
      <Box mt={3}>
        <SpacesList />
      </Box>
    </Container>
  );
};
export default FloorPlanView;
