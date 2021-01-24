/* eslint-disable max-len */
import {
  Avatar, Card, CardHeader, Collapse,
  Divider, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText,
  makeStyles,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    backgroundColor: theme.palette.background.paper,
  },
  cardAction: {
    paddingTop: theme.spacing(1),
  },
}));

const InventoryItems = ({
  products, title, setOpen, setCartItem,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardHeader title={title} onClick={handleClick} action={<IconButton>{expanded ? <ExpandLess /> : <ExpandMore />}</IconButton>} />
      <Divider />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List dense>
          {products.map((product) => (
            <ListItem key={product.code} button onClick={() => (setOpen(true), setCartItem(product))}>
              <ListItemAvatar>
                <Avatar src={product.image} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary={`${product.code} | ${product.name}`} secondary={`${product.manufacturer} - ${product.series}`} />
              <ListItemSecondaryAction>
                {product.remaining}
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Collapse>
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
