/* eslint-disable no-nested-ternary */
import { Avatar, makeStyles, Typography } from '@material-ui/core';
import {
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  Delete,
  Edit,
  FirstPage,
  LastPage,
  SaveAlt,
  Search,
} from '@material-ui/icons';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const tableIcons = {
  Check: forwardRef((props, ref) => (<Check {...props} ref={ref} />)),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <Delete {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => (<Edit {...props} ref={ref} />)),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (<ChevronLeft {...props} ref={ref} />)),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const InventoryTable = ({ data, fetchCart, fetchItems }) => {
  const classes = useStyles();

  const deleteItem = async (item) => {
    try {
      const removeItem = await fetch(`/api/inventory/cart/${item._id}`, {
        method: 'DELETE',
      });
      const updateItem = await fetch(`/api/inventory/${item._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: 0 }),
      });
      if (updateItem.status < 300 && removeItem.status < 300) {
        fetchCart();
        fetchItems();
      }
    } catch (err) {
      console.error(err);
    }
  };
  const editItem = async (item) => {
    try {
      const res = await fetch(`/api/inventory/${item._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: item.quantity }),
      });
      const updateCart = await fetch(`/api/inventory/cart/${item._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      if (res.status < 300 && updateCart.status < 300) {
        fetchCart();
        fetchItems();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {data.length > 0 && (

      <div style={{ maxWidth: '100%' }} className={classes.root}>
        <MaterialTable
          icons={tableIcons}
          columns={[
            { title: '', render: (rowData) => <Avatar src={rowData.image} variant="rounded" /> },
            { title: 'Name', render: (rowData) => <Typography>{`${rowData.code} | ${rowData.name}`}</Typography> },
            { title: 'Manufacturer', render: (rowData) => <Typography>{`${rowData.manufacturer} - ${rowData.series}`}</Typography> },
            {
              title: 'Quantity', field: 'quantity', type: 'numeric', validate: (rowData) => (rowData.quantity < 1 ? { isValid: false, helperText: 'Value must be greater than 0' } : rowData.quantity > rowData.remaining ? { isValid: false, helperText: 'Not enough remaining' } : true),
            },
          ]}
          data={data}
          title="Inventory"
          editable={{
            onRowDelete: (oldData) => new Promise((resolve) => {
              deleteItem(oldData);
              fetchCart();
              fetchItems();
              resolve();
            }),
            onRowUpdate: (newData, oldData) => new Promise((resolve) => {
              editItem(newData, oldData);
              fetchCart();
              fetchItems();
              resolve();
            }),
          }}
          isLoading={data.length === 0}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </div>
      )}
    </>
  );
};

InventoryTable.propTypes = {
  data: PropTypes.array,
  fetchCart: PropTypes.func.isRequired,
  fetchItems: PropTypes.func.isRequired,
};

export default InventoryTable;
