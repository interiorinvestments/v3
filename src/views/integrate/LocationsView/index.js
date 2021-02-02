/* eslint-disable max-len */
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
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

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
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setValue(0);
    setActiveStep(0);
  }, [router]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h1" color="textPrimary">{location.location}</Typography>
      <Box mb={2}>
        <Chip color="secondary" variant="outlined" size="small" label={`${location.sqft} sqft`} />
      </Box>
      <Typography variant="body1" color="textPrimary">{location.subTitle}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7} lg={8}>
          <Grid item>
            <Box mb={3}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="FloorPlan" disabled={!location.floorplans} />
                <Tab label="Design Standards" disabled={!location.lookbooks} />
                <Tab label="Typicals" disabled={!location.typicals} />
              </Tabs>
            </Box>
          </Grid>
          <Grid item>
            {
            value === 0 && (
              location.floorplans[activeStep] && (
                <Image src={location.floorplans[activeStep].src} width={600} height={500} alt="floorplan" key={location.floorplans[activeStep].src} />
              )
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
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <SwipeableViews images={location.images} activeStep={activeStep} setActiveStep={setActiveStep} />
        </Grid>
      </Grid>
    </Container>
  );
};

LocationsView.propTypes = {
  location: PropTypes.object.isRequired,
};

export default LocationsView;
