import {
  Chip,
  Container, Grid, makeStyles, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

const LocationsView = ({ location }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="textSecondary">Dallas, TX</Typography>
          <Typography variant="h1" color="textPrimary">Hana</Typography>
          <Chip color="secondary" variant="outlined" size="small" label="65,000 sqft" />
          <Typography variant="body1" color="textPrimary">The scope of the project is 2 floors, workstations, ancillary, walls. </Typography>
        </Grid>

      </Grid>
    </Container>
  );
};

LocationsView.propTypes = {
  location: PropTypes.object.isRequired,
};

export default LocationsView;
