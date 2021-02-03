import {
  Container, Grid, makeStyles, Typography,
} from '@material-ui/core';
import { useEffect, useState } from 'react';

import BudgetingCart from './BudgetingCart';
import BudgetingItems from './BudgetingItems';
import BudgetingTable from './BudgetingTable';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const BudgetingView = () => {
  const classes = useStyles();
  const areas = [];
  const [cartItem, setCartItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(null);

  items?.forEach((item) => { item.area.forEach((area) => areas.push(area)); });
  const headers = [...new Set(areas)];

  const fetchItems = async () => {
    try {
      const data = await fetch('/api/budget');
      const fetchedItems = await data.json();
      setItems(fetchedItems);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Container className={classes.root} maxWidth="lg">
      <Typography variant="h1" className={classes.heading}>Budgeting</Typography>
      <BudgetingTable flag={open} />
      <Grid container spacing={3}>
        {headers.map((head) => {
          const products = items.filter((filtered) => filtered.area.includes(head));
          return (
            <Grid item key={head}>
              <BudgetingItems products={products} title={head} setOpen={setOpen} setCartItem={setCartItem} />
            </Grid>
          );
        })}
      </Grid>
      {cartItem && (
        <BudgetingCart open={open} cartItem={cartItem} setOpen={setOpen} />
      )}
    </Container>
  );
};

export default BudgetingView;
