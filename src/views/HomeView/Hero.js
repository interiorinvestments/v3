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
  thrive: {
    color: theme.palette.primary.main,
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
              <div>
                We make your place
                {' '}
                <span className={classes.thrive}>thrive!</span>
              </div>
            )}
            subtitle="Hello! this on-line tool is for your use when developing, budgeting and or implementing anywhere in the United States. This web-based tool was designed to quickly show you the design standards, develop projected pricing with installation and review all project documents, proposal and drawings anytime and from anywhere."
            align="left"
            titleVariant="h1"
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
