import { makeStyles } from '@material-ui/core';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import { getData } from 'data/locations';
import DashboardLayout from 'layouts/DashboardLayout';
import PropTypes from 'prop-types';
import LocationsView from 'views/integrate/LocationsView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingBottom: theme.spacing(3),
  },
}));

const LocationsPage = ({ location }) => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Page className={classes.root} title={location.name}>
        <AuthGuard>
          <LocationsView location={location} />
        </AuthGuard>
      </Page>
    </DashboardLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'hana' } },
      // { params: { slug: 'scotsman' } },
      // { params: { slug: 'esd' } },
      // { params: { slug: 'intersport' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const location = getData(slug);
  return {
    props: {
      location,
    },
  };
}

LocationsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default LocationsPage;
