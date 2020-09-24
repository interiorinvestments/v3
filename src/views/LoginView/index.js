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
