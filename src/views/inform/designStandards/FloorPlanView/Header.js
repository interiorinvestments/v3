import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Header = ({ className, ...rest }) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Typography
        variant="h3"
        color="textPrimary"
      >
        Sample Floor Plan
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
