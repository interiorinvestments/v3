import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 64,
  },
  logo: {
    height: 50,
  },
  iiLogo: {
    height: 50,
    borderRadius: 3,
  },
}));

const TopBar = ({ ...rest }) => {
  const classes = useStyles();
  return (
    <AppBar className={clsx(classes.root)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Hidden mdDown>
          <IconButton href="/" size="small">
            <img
              src="/img/logos/IIBars.png"
              alt="II"
              className={classes.logo}
            />
          </IconButton>
        </Hidden>
        <Box ml={2} flexGrow={1} />
        <Box ml={2}>
          <img
            src="/img/logos/IILogo.png"
            alt="Interior Investments Logo"
            className={classes.iiLogo}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
