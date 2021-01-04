import { makeStyles } from '@material-ui/core';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import { getData } from 'data/customize';
import DashboardLayout from 'layouts/DashboardLayout';
import PropTypes from 'prop-types';
import toCamelCased from 'utils/toCamelCased';
import toTitleCase from 'utils/toTitleCase';
import CustomizeView from 'views/inspire/customization/CustomizeView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingBottom: theme.spacing(3),
  },
}));

const CustomizePage = ({ slug, area }) => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Page className={classes.root} title={`Customize ${toTitleCase(slug)}`}>
        <AuthGuard>
          <CustomizeView area={area} />
        </AuthGuard>
      </Page>
    </DashboardLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { slug: 'benching' },
      },
      {
        params: { slug: 'workstation' },
      },
      {
        params: { slug: 'private-office' },
      },
      {
        params: { slug: 'executive-office' },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const area = getData(toCamelCased(slug));
  return {
    props: {
      slug,
      area,
    },
  };
}

CustomizePage.propTypes = {
  slug: PropTypes.string.isRequired,
  area: PropTypes.object.isRequired,
};

export default CustomizePage;
