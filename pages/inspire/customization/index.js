import { makeStyles } from '@material-ui/core';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import DashboardLayout from 'layouts/DashboardLayout';
import ManagementView from 'views/inspire/customization/ManagementView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const ManagementPage = () => {
  const classes = useStyles();
  return (

    <DashboardLayout>
      <Page className={classes.root} title="Customization">
        <AuthGuard>
          <ManagementView />
        </AuthGuard>
      </Page>
    </DashboardLayout>
  );
};

export default ManagementPage;
