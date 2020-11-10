import { makeStyles } from '@material-ui/core';
import Page from 'components/common/Page';
import DashboardLayout from 'layouts/DashboardLayout';
import PropTypes from 'prop-types';

import { getData } from '../../../src/data/designStandards';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingBottom: theme.spacing(3),
  },
}));

const titleCase = (slug) => {
  const words = slug.split('-');
  return words.map((word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
};

const DesignStandardsPage = ({ slug, products }) => {
  const classes = useStyles();

  return (
    <DashboardLayout>
      <Page className={classes.root} title={titleCase(slug)}>
        <h1>{products.title}</h1>
      </Page>
    </DashboardLayout>
  );
};

const camelCased = (myString) => myString.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'workstations' } },
      { params: { slug: 'private-offices' } },
      { params: { slug: 'seating' } },
      { params: { slug: 'conference' } },
      { params: { slug: 'reception' } },
      { params: { slug: 'storage' } },
      { params: { slug: 'accessories' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const products = getData(camelCased(slug));
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
