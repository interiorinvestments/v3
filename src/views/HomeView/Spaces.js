import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import OverlapedImages from 'components/molecules/OverlapedImages';
import SectionHeader from 'components/molecules/SectionHeader';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Spaces = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <SectionHeader
            label="SCALABLE"
            title={(
              <Typography variant="h2">
                <Typography variant=" h2" color="primary">Flexible office space </Typography>
                means growing your team is easy.
              </Typography>
            )}
            subtitle="Your furniture is an asset. A chair isn’t simply a place to sit, and a desk isn’t just a work surface. The right selection today can create a sense of place, enhance productivity, and improve employee satisfaction, engagement, and retention far into the future"
            align="left"
            fadeUp
            disableGutter
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <OverlapedImages
            image1={{
              src: '/img/hq/hq1.jpg',
              srcSet: '/img/hq/hq1.jpg',
              alt: 'Interior Investments',
            }}
            image2={{
              src: '/img/hq/hq2.jpg',
              srcSet: '/img/hq/hq2.jpg',
              alt: 'Interior Investments',
            }}
            image3={{
              src: '/img/hq/hq3.jpg',
              srcSet: '/img/hq/hq3.jpg',
              alt: 'Interior Investments',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Spaces.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Spaces;
