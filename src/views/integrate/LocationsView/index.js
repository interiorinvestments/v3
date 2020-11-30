import {
  Box,
  Chip,
  Container, Grid, makeStyles, Tab,
  Tabs, Typography,
} from '@material-ui/core';
import ImageGallery from 'components/common/ImageGallery';
import PropTypes from 'prop-types';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  imageGallery: {
    height: '200px',
  },
}));

const LocationsView = ({ location }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textSecondary">{location.location}</Typography>
            <Typography variant="h1" color="textPrimary">{location.name}</Typography>
            <Box mb={2}>
              <Chip color="secondary" variant="outlined" size="small" label={`${location.sqft} sqft`} />
            </Box>
            <Typography variant="body1" color="textPrimary">{location.subTitle}</Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <ImageGallery images={location.images} />
          </Grid>
        </Grid>
        <Grid item>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="FloorPlan" />
            <Tab label="Look Book" />

          </Tabs>
        </Grid>
        <Grid item>
          <Typography>{value}</Typography>
        </Grid>
      </Container>
    </>
  );
};

LocationsView.propTypes = {
  location: PropTypes.object.isRequired,
};

export default LocationsView;
