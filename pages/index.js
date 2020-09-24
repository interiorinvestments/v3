import { makeStyles } from '@material-ui/core/styles';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import DashboardLayout from 'layouts/DashboardLayout';
import HomeView from 'views/HomeView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: 'calc(100vh - 64px)',
    paddingBottom: theme.spacing(3),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <DashboardLayout>
      <Page className={classes.root} title="Home">
        <AuthGuard>
          <HomeView />
        </AuthGuard>
      </Page>
    </DashboardLayout>
  );
};

export default HomePage;
