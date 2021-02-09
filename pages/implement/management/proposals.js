import { makeStyles } from '@material-ui/core';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import DashboardLayout from 'layouts/DashboardLayout';
import PropTypes from 'prop-types';
import ProposalsView from 'views/implement/management/ProposalsView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const ProposalsPage = ({ proposals }) => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Page className={classes.root} title="Proposals">
        <AuthGuard>
          <ProposalsView proposals={proposals} />
        </AuthGuard>
      </Page>
    </DashboardLayout>
  );
};

ProposalsPage.propTypes = {
  proposals: PropTypes.array.isRequired,
};

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/proposals`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       odbcString: 'DSN=illi',
//       customerNumber: '11762',
//     }),
//   });
//   if (res.status !== 200) {
//     return {
//       props: {
//         proposals: null,
//       },
//     };
//   }
//   const proposals = await res.json();

//   return {
//     props: { proposals },
//   };
// }

export default ProposalsPage;
