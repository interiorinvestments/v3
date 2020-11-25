import { makeStyles } from '@material-ui/core';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import DashboardLayout from 'layouts/DashboardLayout';
import PropTypes from 'prop-types';
import LocationsView from 'views/integrate/LocationsView';

const getData = (input) => ({
  location: 'Hana',
  name: 'tiesto',
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingBottom: theme.spacing(3),
  },
}));

const LocationsPage = ({ slug, location }) => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Page className={classes.root} title="Location">
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
      { params: { slug: 'scotsman' } },
      { params: { slug: 'esd' } },
      { params: { slug: 'intersport' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const location = getData(slug);
  return {
    props: {
      slug,
      location,
    },
  };
}

LocationsPage.propTypes = {
  slug: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default LocationsPage;
