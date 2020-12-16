import { makeStyles } from '@material-ui/core';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import { floorplan } from 'data/designStandards/floorplan';
import DashboardLayout from 'layouts/DashboardLayout';
import FloorPlanView from 'views/inform/designStandards/FloorPlanView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingBottom: theme.spacing(3),
  },
}));

const FloorPlanPage = () => {
  const classes = useStyles();

  return (
    <DashboardLayout>
      <Page className={classes.root} title="Floor Plan">
        <AuthGuard>
          <FloorPlanView floorplan={floorplan} />
        </AuthGuard>
      </Page>
    </DashboardLayout>
  );
};

export default FloorPlanPage;
