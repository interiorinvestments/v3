import {
  Container, Grid, makeStyles, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

import BudgetingCart from './BudgetingCart';
import BudgetingItems from './BudgetingItems';
import BudgetingTable from './BudgetingTable';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const BudgetingView = ({ items, cart }) => {
  const classes = useStyles();
  const areas = [];
  items.forEach((item) => { item.area.forEach((area) => areas.push(area)); });
  const headers = [...new Set(areas)];
  const [cartItem, setCartItem] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <Container className={classes.root} maxWidth="lg">
      <Typography variant="h1" className={classes.heading}>Budgeting</Typography>
      {cart.length > 0 && (
      <BudgetingTable data={cart} />
      )}
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

BudgetingView.propTypes = {
  items: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
};

export default BudgetingView;
