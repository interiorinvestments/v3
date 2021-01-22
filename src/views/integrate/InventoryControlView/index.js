import {
  Container, Grid, makeStyles, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

import InventoryCart from './InventoryCart';
import InventoryItems from './InventoryItems';
import InventoryTable from './InventoryTable';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  heading: {
    paddingBottom: theme.spacing(2),
  },
}));

const InventoryControlView = ({ items, cart }) => {
  const classes = useStyles();
  const areas = [];
  items.forEach((item) => { item.area.forEach((area) => areas.push(area)); });
  const headers = [...new Set(areas)];
  const [cartItem, setCartItem] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <Container className={classes.root} maxWidth="lg">
      <Typography variant="h1" className={classes.heading}>Inventory</Typography>
      {cart.length > 0 && (
      <InventoryTable data={cart} />
      )}
      <Grid container spacing={3}>
        {headers.map((head) => {
          const products = items.filter((filtered) => filtered.area.includes(head));
          return (
            <Grid item key={head}>
              <InventoryItems products={products} title={head} setOpen={setOpen} setCartItem={setCartItem} />
            </Grid>
          );
        })}
      </Grid>
      {cartItem && (
        <InventoryCart open={open} cartItem={cartItem} setOpen={setOpen} />
      )}
    </Container>
  );
};

InventoryControlView.propTypes = {
  items: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
};

export default InventoryControlView;
