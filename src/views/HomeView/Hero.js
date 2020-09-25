import { Button, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import SectionHeader from 'components/molecules/SectionHeader';
import SwiperAutoPlay from 'components/molecules/SwiperAutoPlay';
import HeroShaped from 'components/organisms/HeroShaped';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroShaped
        leftSide={(
          <SectionHeader
            title={(
              <Typography variant="h1">
                Office spaces made
                {' '}
                <Typography variant=" h1" color="primary">easy</Typography>
              </Typography>
            )}
            subtitle="For entrepreneurs, startups and freelancers. Discover coworking spaces designed to inspire and to connect you to a community of motivated people."
            ctaGroup={[
              <Button
                variant="contained"
                color="primary"
                size={isMd ? 'large' : 'medium'}
              >
                Customize
              </Button>,
              <Button
                variant="outlined"
                color="primary"
                size={isMd ? 'large' : 'medium'}
              >
                Standards
              </Button>,
            ]}
            align="left"
            titleVariant="h3"
          />
        )}
        rightSide={(
          <SwiperAutoPlay
            items={[
              {
                src: '/img/hq/hq1.jpg',
                srcSet: '/img/hq/hq1.jpg',
                alt: 'Interior Investments',
              },
              {
                src: '/img/hq/hq2.jpg',
                srcSet: '/img/hq/hq2.jpg',
                alt: 'Interior Investments',
              },
              {
                src: '/img/hq/hq3.jpg',
                srcSet: '/img/hq/hq3.jpg',
                alt: 'Interior Investments',
              },
              {
                src: '/img/hq/hq4.jpg',
                srcSet: '/img/hq/hq4.jpg',
                alt: 'Interior Investments',
              },
              {
                src: '/img/hq/hq5.jpg',
                srcSet: '/img/hq/hq5.jpg',
                alt: 'Interior Investments',
              },
            ]}
          />
        )}
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
