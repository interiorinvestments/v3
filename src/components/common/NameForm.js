/* eslint-disable no-shadow */
import {
  Button, Grid, makeStyles, TextField,
} from '@material-ui/core';
import useLocalStorageState from 'hooks/useLocalStorageState';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import validate from 'validate.js';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
  },
};

const NameForm = ({ onNext, localStorageKey }) => {
  const classes = useStyles();
  const [, setName] = useLocalStorageState(localStorageKey, '');
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setName(`${formState.values.firstName} ${formState.values.lastName}`);
    onNext();
  };

  const hasError = (field) => (!!(formState.touched[field] && formState.errors[field]));

  return (
    <div className={classes.root}>
      <form name="name-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="First Name"
              variant="outlined"
              size="medium"
              name="firstName"
              fullWidth
              helperText={hasError('firstName') ? formState.errors.firstName[0] : null}
              error={hasError('firstName')}
              onChange={handleChange}
              type="text"
              value={formState.values.firstName || ''}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              variant="outlined"
              size="medium"
              name="lastName"
              fullWidth
              helperText={hasError('lastName') ? formState.errors.lastName[0] : null}
              error={hasError('lastName')}
              onChange={handleChange}
              type="text"
              value={formState.values.lastName || ''}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

NameForm.propTypes = {
  onNext: PropTypes.func.isRequired,
  localStorageKey: PropTypes.string.isRequired,
};

export default NameForm;
