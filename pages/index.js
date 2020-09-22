import { makeStyles } from '@material-ui/core/styles';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import DashboardLayout from 'layouts/DashboardLayout';

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

  return (
    <DashboardLayout>
      <Page className={classes.root} title="Home">
        <AuthGuard>
          <h1>Hello world</h1>
        </AuthGuard>
      </Page>
    </DashboardLayout>
  );
};

export default HomePage;
