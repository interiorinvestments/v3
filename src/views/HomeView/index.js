import { makeStyles } from '@material-ui/core/styles';

import Hero from './Hero';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));

const HomeView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
    </div>
  );
};

export default HomeView;
