import { makeStyles } from '@material-ui/core';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import DashboardLayout from 'layouts/DashboardLayout';
import { getCart } from 'lib/cart';
import { getItems } from 'lib/item';
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
  try {
    const data = await getItems();
    const cartData = await getCart();
    const cart = cartData.map((cartItem) => {
      const _id = cartItem._id.toString();
      return { ...cartItem.toObject(), _id };
    });
    const items = data.map((item) => {
      const _id = item._id.toString();
      return { ...item.toObject(), _id };
    });

    return { props: { items, cart } };
  } catch (err) {
    console.error(err);
    return { props: {} };
  }
};

export default InventoryControlPage;
