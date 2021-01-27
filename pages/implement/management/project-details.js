import { makeStyles } from '@material-ui/core';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import DashboardLayout from 'layouts/DashboardLayout';
import ProjectDetailsView from 'views/implement/management/ProjectDetailsView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const ProjectDetailsPage = () => {
  const classes = useStyles();

  return (
    <DashboardLayout>
      <Page className={classes.root} title="Care & Maintenance">
        <AuthGuard>
          <ProjectDetailsView />
        </AuthGuard>
      </Page>
    </DashboardLayout>
  );
};

export default ProjectDetailsPage;
