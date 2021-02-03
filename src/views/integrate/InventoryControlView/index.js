import {
  Container, Grid, makeStyles, Typography,
} from '@material-ui/core';
import { useEffect, useState } from 'react';

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

const InventoryControlView = () => {
  const classes = useStyles();
  const areas = [];
  const [cartItem, setCartItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(null);
  const [data, setData] = useState([]);
  items?.forEach((item) => { item.area.forEach((area) => areas.push(area)); });
  const headers = [...new Set(areas)];

  const fetchItems = async () => {
    try {
      const inventory = await fetch('/api/inventory');
      const fetchedItems = await inventory.json();
      setItems(fetchedItems);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCart = async () => {
    try {
      const cart = await fetch('/api/inventory/cart');
      const fetchedCart = await cart.json();
      setData(fetchedCart);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItems();
    fetchCart();
  }, [open]);

  return (
    <Container className={classes.root} maxWidth="lg">
      <Typography variant="h1" className={classes.heading}>Inventory</Typography>
      <InventoryTable fetchCart={fetchCart} data={data} fetchItems={fetchItems} />
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

export default InventoryControlView;
