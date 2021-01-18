import {
  Avatar, Card, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, makeStyles,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  cardAction: {
    paddingTop: theme.spacing(1),
  },
}));

const InventoryItems = ({
  products, title, setOpen, setCartItem,
}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title={title} action={<Typography className={classes.cardAction} color="textSecondary" variant="body2">Quantity</Typography>} />
      <Divider />
      <List dense>
        {products.map((product) => (
          <ListItem key={product.code} button onClick={() => { setOpen(true), setCartItem(product); }}>
            <ListItemAvatar>
              <Avatar src={product.image} variant="rounded" />
            </ListItemAvatar>
            <ListItemText primary={`${product.code} | ${product.name}`} secondary={`${product.manufacturer} - ${product.collection}`} />
            <ListItemSecondaryAction>
              {product.remaining}
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

InventoryItems.propTypes = {
  products: PropTypes.array,
  title: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
  setCartItem: PropTypes.func.isRequired,
};
export default InventoryItems;
