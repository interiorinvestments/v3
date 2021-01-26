import {
  Button,
  Container,
  Grid,
  SvgIcon,
  Typography,
} from '@material-ui/core';
import useScroll from 'hooks/useScroll';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ArrowLeft as ArrowLeftIcon } from 'react-feather';

import Options from './Options';

const Standard = ({ standard, setStandard }) => {
  useScroll(0);
  const [detail, setDetail] = useState(standard.floor);
  return (
    <Container>
      <Grid container justify="space-between" spacing={3}>
        <Grid item>
          <Typography variant="h1" color="textPrimary">
            {standard.code}
            {' '}
            |
            {' '}
            {standard.name}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setStandard(null)}
            startIcon={(
              <SvgIcon fontSize="small">
                <ArrowLeftIcon />
              </SvgIcon>
          )}
          >
            Back
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Image src={standard.image} height={600} width={900} />
        </Grid>
        {standard.floor && (
        <Grid item xs={12} md={6}>
          <Image src={detail} height={600} width={900} />
        </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="body1" color="textPrimary" display="inline">
                Plan Code:
                {' '}
              </Typography>
              <Typography variant="body2" color="textSecondary" display="inline">
                {standard.code}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="textPrimary" display="inline">
                Manufacturer:
                {' '}
              </Typography>
              <Typography variant="body2" color="textSecondary" display="inline">
                {standard.manufacturer}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="textPrimary" display="inline">
                Collection/Name:
                {' '}
              </Typography>
              <Typography variant="body2" color="textSecondary" display="inline">
                {standard.series}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="textPrimary" display="inline">
                Description:
                {' '}
              </Typography>
              <Typography variant="body2" color="textSecondary" display="inline">
                {standard.description}
              </Typography>
            </Grid>
            {standard.power && (
            <Grid item>
              <Typography variant="body1" color="textPrimary" display="inline">
                Power/Data:
                {' '}
              </Typography>
              <Typography variant="body2" color="textSecondary" display="inline">
                {standard.power}
              </Typography>
            </Grid>
            )}
            <Grid item>
              <Typography variant="body1" color="textPrimary" display="inline">
                Finishes:
                {' '}
              </Typography>
              <Typography variant="body2" color="textSecondary" display="inline">
                {standard.finishes}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="textPrimary" display="inline">
                Location:
                {' '}
              </Typography>
              <Typography variant="body2" color="textSecondary" display="inline">
                {standard.location}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="textPrimary" display="inline">
                Quantity:
                {' '}
              </Typography>
              <Typography variant="body2" color="textSecondary" display="inline">
                {standard.quantity}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {standard.options && (
        <Grid item xs={12} md={6}>
          <Options options={standard.options} setDetail={setDetail} floorplan={standard.floor} />
        </Grid>
        ) }

      </Grid>
    </Container>
  );
};

Standard.propTypes = {
  standard: PropTypes.object,
  setStandard: PropTypes.func.isRequired,
};

export default Standard;
