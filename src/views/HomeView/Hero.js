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
                src: '/img/home/1164_010.jpg',
                srcSet: '/img/home/1164_010.jpg',
                alt: 'Interior Investments',
              },
              {
                src: '/img/home/1164_012.jpg',
                srcSet: '/img/home/1164_012.jpg',
                alt: 'Interior Investments',
              },
              {
                src: '/img/home/BartlitBeckBBWeb1.png',
                srcSet: '/img/home/BartlitBeckBBWeb1.png',
                alt: 'Interior Investments',
              },
              {
                src: '/img/home/BBConferenceV1People.jpg',
                srcSet: '/img/home/BBConferenceV1People.jpg',
                alt: 'Interior Investments',
              },
              {
                src: '/img/home/BBWorkstationsV1.jpg',
                srcSet: '/img/home/BBWorkstationsV1.jpg',
                alt: 'Interior Investments',
              },
              {
                src: '/img/home/IntersportWorkstations.jpg',
                srcSet: '/img/home/IntersportWorkstations.jpg',
                alt: 'Interior Investments',
              },
              {
                src: '/img/home/PowerReviewBooths.png',
                srcSet: '/img/home/PowerReviewBooths.png',
                alt: 'Interior Investments',
              },
              {
                src: '/img/home/PowerReviewsWorkstations.png',
                srcSet: '/img/home/PowerReviewsWorkstations.png',
                alt: 'Interior Investments',
              },
              {
                src: '/img/home/ReceptionV1Web.jpg',
                srcSet: '/img/home/ReceptionV1Web.jpg',
                alt: 'Interior Investments',
              },
              {
                src: '/img/home/ShumanWebRes.jpg',
                srcSet: '/img/home/ShumanWebRes.jpg',
                alt: 'Interior Investments',
              },
              {
                src: '/img/home/WebViewConferenceRoom.jpg',
                srcSet: '/img/home/WebViewConferenceRoom.jpg',
                alt: 'Interior Investments',
              },
              {
                src: '/img/home/WHVyaireWoodlandsCafe1stEdit8.jpg',
                srcSet: '/img/home/WHVyaireWoodlandsCafe1stEdit8.jpg',
                alt: 'Interior Investments',
              },
              {
                src: '/img/home/WHVyaireWoodlandsCafe1stEdit13.jpg',
                srcSet: '/img/home/WHVyaireWoodlandsCafe1stEdit13.jpg',
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
