import { makeStyles } from '@material-ui/core/styles';
import Page from 'components/common/Page';
import LoadingScreen from 'components/LoadingScreen';
import DashboardLayout from 'layouts/DashboardLayout';
import { useUser } from 'lib/hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const user = useUser({ redirectTo: '/login' });

  return (

    <DashboardLayout>
      <Page className={classes.root} title="Home">
        {user ? <h1>hello</h1> : <LoadingScreen />}
      </Page>
    </DashboardLayout>
  );
};

export default HomePage;
