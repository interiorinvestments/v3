import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle, Slide, TextField,
} from '@material-ui/core';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { forwardRef, useEffect, useState } from 'react';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const BudgetingCart = ({ open, setOpen, cartItem }) => {
  const [budgetQuantity, setBudgetQuantity] = useState(0);

  useEffect(() => {
    setBudgetQuantity(cartItem.budgetQuantity);
  }, [cartItem.quantity]);

  const handleAdd = async () => {
    try {
      const res = await fetch(`/api/budget/${cartItem._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ budgetQuantity, price: cartItem.price }),
      });
      const item = await res.json();
      await fetch(`/api/budget/budgetCart/${cartItem._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
    } catch (err) {
      console.error(err);
    }
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
        aria-labelledby="responsive-dialog-title"
        onExit={() => setBudgetQuantity(cartItem.budgetQuantity)}
      >
        <DialogTitle id="responsive-dialog-title">
          {cartItem.code}
          {' '}
          |
          {' '}
          {cartItem.name}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            {cartItem.manufacturer}
            {' '}
            -
            {' '}
            {cartItem.series}
          </DialogContentText>
          <Image src={cartItem.image} height={200} width={300} />
        </DialogContent>
        <DialogActions>
          <TextField label="Quantity" type="number" variant="filled" value={budgetQuantity} onChange={(e) => setBudgetQuantity(+e.target.value)} inputProps={{ min: 1 }} fullWidth />
          <Button onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary" variant="contained" disabled={budgetQuantity < 1}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

BudgetingCart.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  cartItem: PropTypes.object.isRequired,
};

export default BudgetingCart;
