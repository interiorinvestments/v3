import { makeStyles } from '@material-ui/core';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import DashboardLayout from 'layouts/DashboardLayout';
import KeyContactsView from 'views/inform/KeyContactsView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const KeyContactsPage = () => {
  const classes = useStyles();

  return (
    <DashboardLayout>
      <Page className={classes.root} title="Home">
        <AuthGuard>
          <KeyContactsView />
        </AuthGuard>
      </Page>
    </DashboardLayout>
  );
};

export default KeyContactsPage;
