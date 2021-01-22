import { makeStyles } from '@material-ui/core';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import DashboardLayout from 'layouts/DashboardLayout';
import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import path from 'path';
import PropTypes from 'prop-types';
import InventoryControlView from 'views/integrate/InventoryControlView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingBottom: theme.spacing(3),
  },
}));

const InventoryControlPage = ({ items, cart }) => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Page className={classes.root} title="Inventory Control">
        <AuthGuard>
          <InventoryControlView items={items} cart={cart} />
        </AuthGuard>
      </Page>
    </DashboardLayout>
  );
};

InventoryControlPage.propTypes = {
  items: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
};

export const getServerSideProps = async () => {
  const file = path.resolve('db.json');
  const adapter = new FileAsync(file);
  const db = await low(adapter);
  try {
    const items = await db.get('items').value();
    const cart = await db.get('cart').value();
    return { props: { items, cart } };
  } catch (err) {
    console.error(err);
    return { props: {} };
  }
};

export default InventoryControlPage;
