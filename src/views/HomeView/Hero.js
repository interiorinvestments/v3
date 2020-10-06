import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroShaped
        leftSide={(
          <SectionHeader
            title={(
              <Typography variant="h1">
                We make your place
                {' '}
                <Typography variant=" h1" color="primary">thrive!</Typography>
              </Typography>
            )}
            subtitle="Interior Investments is in the business of making people who live, work, heal and learn more satisfied and productive, and their environments more supportive, attractive and responsive. With an impressive product portfolio, a skilled team of more than two hundred enthusiastic professionals, and a technology platform that fosters constant innovation in process management, Interior Investments is a catalyst for creating incredible workplaces on time and on budget."
            align="left"
            titleVariant="h2"
            subtitleVariant="h4"
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
