/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import {
  Button, Grid, TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import validate from 'validate.js';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const schema = {
  username: {
    presence: { allowEmpty: false, message: 'is required' },
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
  },
};

const LoginForm = () => {
  const router = useRouter();
  const classes = useStyles();

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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.isValid) {
      router.push('/');
    }

    setFormState((formState) => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = (field) => (!!(formState.touched[field] && formState.errors[field]));

  return (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              size="medium"
              name="username"
              fullWidth
              helperText={hasError('username') ? formState.errors.username[0] : null}
              error={hasError('username')}
              onChange={handleChange}
              type="text"
              value={formState.values.username || ''}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              size="medium"
              name="password"
              fullWidth
              helperText={
                hasError('password') ? formState.errors.password[0] : null
              }
              error={hasError('password')}
              onChange={handleChange}
              type="password"
              value={formState.values.password || ''}
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

export default LoginForm;
