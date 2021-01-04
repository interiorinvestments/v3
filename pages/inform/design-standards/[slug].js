import { makeStyles } from '@material-ui/core';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import { getData } from 'data/designStandards';
import DashboardLayout from 'layouts/DashboardLayout';
import PropTypes from 'prop-types';
import toCamelCased from 'utils/toCamelCased';
import toTitleCase from 'utils/toTitleCase';
import StandardsView from 'views/inform/designStandards/StandardsView/index';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingBottom: theme.spacing(3),
  },
}));

const DesignStandardsPage = ({ slug, products }) => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Page className={classes.root} title={`Design Standards ${toTitleCase(slug)}`}>
        <AuthGuard>
          <StandardsView standards={products} />
        </AuthGuard>
      </Page>
    </DashboardLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'workstations' } },
      { params: { slug: 'private-offices' } },
      { params: { slug: 'meeting-rooms' } },
      { params: { slug: 'cafe-area' } },
      { params: { slug: 'collaboration-lounge' } },
      { params: { slug: 'accessories' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const products = getData(toCamelCased(slug));
  return {
    props: {
      slug,
      products,
    },
  };
}

DesignStandardsPage.propTypes = {
  slug: PropTypes.string.isRequired,
  products: PropTypes.object.isRequired,
};

export default DesignStandardsPage;
