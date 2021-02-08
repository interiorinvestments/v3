/* eslint-disable max-len */
import {
  Avatar, Box,
  Card, CardHeader, Collapse, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, makeStyles,
  Typography,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { useState } from 'react';
import formatCurrency from 'utils/formatCurrency';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    backgroundColor: theme.palette.background.paper,
  },
  cardAction: {
    paddingTop: theme.spacing(1),
  },
  details: {
    padding: theme.spacing(1),
  },
  text: {
    textAlign: 'justify',
  },
}));

const BudgetingItems = ({
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
              <ListItemText primary={`${product.code} | ${product.name}`} secondary={product.manufacturer ? `${product.manufacturer} - ${product.series}` : ''} />
              <ListItemSecondaryAction>
                {formatCurrency(product.price)}
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        {title === 'Private Offices' && (
          <div className={classes.details}>
            <Typography variant="body2" className={classes.text} color="textSecondary">The provided cost per office includes (2) single monitor arms, (1) clamp-on power unit, (1) set of cable managers, (1) set of undershelf task light and (1) round meeting table. Cost excludes seating.</Typography>
            <Box mt={1}>
              <Typography variant="body2" className={classes.text} color="textSecondary">Here is a cost breakdown:</Typography>
              <Typography variant="body2" className={classes.text} color="textSecondary">Desk and storage with cable manager: $3,114.00</Typography>
              <Typography variant="body2" className={classes.text} color="textSecondary">Undershelf task light: $115.00</Typography>
              <Typography variant="body2" className={classes.text} color="textSecondary">Logic clamp on unit with 4 power and 2 usb: $201.00</Typography>
              <Typography variant="body2" className={classes.text} color="textSecondary">Round table: $642.00</Typography>
              <Typography variant="body2" className={classes.text} color="textSecondary">(2) Flo single arms: $132.00 x 2 = $264.00</Typography>
            </Box>
          </div>
        )}
        {title === 'Workstations' && (
          <div className={classes.details}>
            <Typography variant="body2" className={classes.text} color="textSecondary">The privided cost per station is based on Chicago code electrical system (no electrical components included). Cost includes empty Chicago boxes, storage, under-worksurface power strip, HD cable trough and external cable sleeve. Excludes seating and monitor arms</Typography>
          </div>
        )}
      </Collapse>
    </Card>
  );
};

BudgetingItems.propTypes = {
  products: PropTypes.array,
  title: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
  setCartItem: PropTypes.func.isRequired,
};

export default BudgetingItems;
