import { makeStyles } from '@material-ui/core';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import DashboardLayout from 'layouts/DashboardLayout';
import BudgetingView from 'views/integrate/BudgetingView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingBottom: theme.spacing(3),
  },
}));

const BudgetingPage = () => {
  const classes = useStyles();

  return (
    <DashboardLayout>
      <Page className={classes.root} title="Budgeting">
        <AuthGuard>
          <BudgetingView />
        </AuthGuard>
      </Page>
    </DashboardLayout>
  );
};

export default BudgetingPage;
