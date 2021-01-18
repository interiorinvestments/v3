import { makeStyles } from '@material-ui/core';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import DashboardLayout from 'layouts/DashboardLayout';
import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import PropTypes from 'prop-types';
import InventoryControlView from 'views/integrate/InventoryControlView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingBottom: theme.spacing(3),
  },
}));

const InventoryControlPage = ({ items }) => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Page className={classes.root} title="Inventory Control">
        <AuthGuard>
          <InventoryControlView items={items} />
        </AuthGuard>
      </Page>
    </DashboardLayout>
  );
};

InventoryControlPage.propTypes = {
  items: PropTypes.array,
};
// /home/tesh/Documents/Work/Websites/v3/src/data/inventory/db.json
export const getServerSideProps = async () => {
  try {
    let adapter;
    if (process.env === 'production') {
      adapter = new FileAsync(`${__dirname}src/data/inventory/db.json`);
    } else {
      adapter = new FileAsync('src/data/inventory/db.json');
    }

    const db = await low(adapter);
    const items = await db.get('items')
      .value();
    return { props: { items } };
  } catch (err) {
    console.error(err);
    return { props: {} };
  }
};

export default InventoryControlPage;
