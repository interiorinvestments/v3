import { Container, Grid, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

import InventoryCart from './InventoryCart';
import InventoryItems from './InventoryItems';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const InventoryControlView = ({ items }) => {
  const classes = useStyles();
  const areas = [];
  items.forEach((item) => { item.area.forEach((area) => areas.push(area)); });
  const headers = [...new Set(areas)];
  const [cartItem, setCartItem] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <Container className={classes.root} maxWidth="xl">
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
  items: PropTypes.array,
};

export default InventoryControlView;
