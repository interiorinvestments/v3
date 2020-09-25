/* eslint-disable react/jsx-props-no-spreading */
import { LogOut as LogOutIcon, Menu as MenuIcon } from 'react-feather';
import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  makeStyles,
  SvgIcon,
  Toolbar,
} from '@material-ui/core';
import clsx from 'clsx';
import Link from 'components/common/Link';
import { useUser } from 'lib/hooks';
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
  logout: {
    color: theme.palette.text.secondary,
  },
}));

const TopBar = ({ onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const user = useUser();

  return (
    <AppBar className={clsx(classes.root)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton color="primary" onClick={onMobileNavOpen}>
            <SvgIcon fontSize="small">
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <IconButton href="/" size="small" component={Link}>
            <img
              src="/img/logos/IIBars.png"
              alt="Cook County Logo"
              className={classes.logo}
            />
          </IconButton>
        </Hidden>
        <Box ml={2} flexGrow={1} />
        {user && (
          <>
            <Hidden smDown>
              <Button
                startIcon={<LogOutIcon />}
                component="a"
                href="/api/auth/logout"
                className={classes.logout}
              >
                Log out
              </Button>
            </Hidden>
            <Hidden mdUp>
              <Button
                component="a"
                href="/api/auth/logout"
                className={classes.logout}
              >
                Log out
              </Button>
            </Hidden>
          </>
        )}
        <Box ml={2}>
          <Button href="/" component={Link}>
            <img
              src="/img/logos/IILogo.png"
              alt="Interior Investments Logo"
              className={classes.iiLogo}
            />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
