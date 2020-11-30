import {
  Box,
  Card, CardMedia,
  Chip,
  Container, Grid, makeStyles, Tab,
  Tabs, Typography,
} from '@material-ui/core';
import SwipeableViews from 'components/common/SwipeableViews';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';

const PdfViewer = dynamic(() => import('components/common/PdfViewer'), {
  ssr: false,
});

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
          <Grid item xs={12} sm={5}>
            <Typography variant="h6" color="textSecondary">{location.location}</Typography>
            <Typography variant="h1" color="textPrimary">{location.name}</Typography>
            <Box mb={2}>
              <Chip color="secondary" variant="outlined" size="small" label={`${location.sqft} sqft`} />
            </Box>
            <Typography variant="body1" color="textPrimary">{location.subTitle}</Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <SwipeableViews images={location.images} />
          </Grid>
        </Grid>
        <Grid item>
          <Box mb={3}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="FloorPlan" />
              <Tab label="Look Book" />
              <Tab label="Typicals" />
            </Tabs>
          </Box>
        </Grid>
        <Grid item>
          {
            value === 0 && (
              location.floorplans?.map((floorplan) => (
                <Image src={floorplan.src} width={600} height={500} alt="floorplan" key={floorplan.src} />
              ))
            )
          }
          {
            value === 1 && (
              location.lookbooks?.map((lookbook) => (
                <PdfViewer pdf={lookbook.src} key={lookbook.src} />
              ))
            )
          }
          {
            value === 2 && (
              <Grid container spacing={3}>
                {location.typicals?.map((typical) => (
                  <Grid key={typical.src} item xs={12} sm={6} md={4}>
                    <Card>
                      <CardMedia>
                        <Image src={typical.src} height={200} width={400} alt="typicals" />
                      </CardMedia>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )
          }
        </Grid>
      </Container>
    </>
  );
};

LocationsView.propTypes = {
  location: PropTypes.object.isRequired,
};

export default LocationsView;