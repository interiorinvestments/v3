import {
  Avatar, Card, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const InventoryItems = ({ products, title }) => {
  console.log({ products });
  return (
    <Card>
      <CardHeader title={title} />
      <Divider />
      <List dense>
        {products.map((product) => (
          <ListItem key={product.code + product.id} button>
            <ListItemAvatar>
              <Avatar src={product.image} variant="rounded" />
            </ListItemAvatar>
            <ListItemText primary={`${product.code} | ${product.name}`} secondary={`${product.manufacturer} - ${product.collection}`} />
            <ListItemSecondaryAction>
              {product.quantity}
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
};
export default InventoryItems;
