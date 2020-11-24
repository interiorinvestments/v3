import { makeStyles } from '@material-ui/core/styles';
import SectionHeader from 'components/molecules/SectionHeader';
import SwiperAutoPlay from 'components/molecules/SwiperAutoPlay';
import HeroShaped from 'components/organisms/HeroShaped';
import shuffleArray from 'lib/shuffleArray';

import LoginForm from './LoginForm';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .hero-shaped': {
      borderBottom: 0,
    },
    '& .hero-shaped__wrapper': {
      [theme.breakpoints.up('md')]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
      },
    },
  },
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
      margin: '0 auto',
    },
  },
  image: {
    objectFit: 'cover',
  },
  logo: {
    width: 150,
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: 112,
      height: 'auto,',
    },
  },
}));

const items = [
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
];

const shuffledItems = shuffleArray(items);

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeroShaped
        leftSide={(
          <div className={classes.formContainer}>
            <img
              src="/img/logos/IIXLogo.png"
              alt="Interior Investments Experience"
              className={classes.logo}
            />
            <SectionHeader
              title="Log in"
              titleProps={{
                variant: 'h3',
              }}
            />
            <LoginForm />
          </div>
        )}
        rightSide={(
          <SwiperAutoPlay items={shuffledItems} />
        )}
      />
    </div>
  );
};

export default Login;
