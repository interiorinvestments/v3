import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import SectionHeader from 'components/molecules/SectionHeader';
import DescriptionListIcon from 'components/organisms/DescriptionListIcon';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Advantages = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={(
          <Typography variant="h2">
            We are reimagining office spaces to help you
            {' '}
            <Typography variant=" h2" color="primary">achieve your dreams</Typography>
          </Typography>
        )}
        subtitle="We excel at helping clients make smart, long-term investments in the places they work, learn, live, and heal."
        fadeUp
      />
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid key={index} item xs={12} md={3} data-aos="fade-up">
            <DescriptionListIcon
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              iconSize={30}
              iconColor="#0078C1"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Advantages.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Advantages;
