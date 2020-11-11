/* eslint-disable react/jsx-props-no-spreading */
import {
  Breadcrumbs, Button, makeStyles, Typography,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import clsx from 'clsx';
import Link from 'components/common/Link';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
  },
}));

function Header({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Typography variant="body1" color="textPrimary">
          Proposals
        </Typography>
      </Breadcrumbs>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
