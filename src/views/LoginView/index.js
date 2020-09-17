import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'components/atoms/Image';
import SectionHeader from 'components/molecules/SectionHeader';
import HeroShaped from 'components/organisms/HeroShaped';

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
    height: 75,
    [theme.breakpoints.down('sm')]: {
      height: 50,
    },
    marginBottom: theme.spacing(2),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeroShaped
        leftSide={(
          <div className={classes.formContainer}>
            <IconButton href="/" size="small">
              <img
                src="/img/logos/IIBars.png"
                alt="Cook County Logo"
                className={classes.logo}
              />
            </IconButton>
            <SectionHeader
              title="Sign in"
              titleProps={{
                variant: 'h1',
              }}
            />
            <LoginForm />
          </div>
        )}
        rightSide={(
          <Image
            src="/img/hq/hq1.jpg"
            className={classes.image}
            lazy={false}
          />
        )}
      />
    </div>
  );
};

export default Login;
