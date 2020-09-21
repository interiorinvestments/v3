import { useEffect } from 'react';
import {
  Archive as ArchiveIcon,
  Edit as EditIcon,
  Facebook as FacebookIcon,
  Heart as HeartIcon,
  Home as HomeIcon,
  Instagram as InstagramIcon,
  Key as KeyIcon,
  Linkedin as LinkedInIcon,
  Lock as LockIcon,
  Map as MapIcon,
  Twitter as TwitterIcon,
  Users as UsersIcon,
  Youtube as YouTubeIcon,
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListSubheader,
  makeStyles,
  Typography,
} from '@material-ui/core';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import NavItem from './NavItem';

const navConfig = [
  {
    subheader: 'Overview',
    items: [
      {
        title: 'Program Overview',
        icon: MapIcon,
        href: '/overview/program-overview',
      },
      {
        title: 'Key Partnerships',
        icon: KeyIcon,
        href: '/overview/partnerships/',
        items: [
          {
            title: 'Interior Investments',
            href: '/overview/partnerships/interior-investments',
          },
          {
            title: 'Herman Miller',
            href: '/overview/partnerships/herman-miller',
          },
          {
            title: 'MBE / WBE',
            href: '/overview/partnerships/mbe-wbe',
          },
          {
            title: 'National',
            href: '/overview/partnerships/national',
          },
          {
            title: 'SitOnIt',
            href: '/overview/partnerships/sitonit',
          },
          {
            title: 'Veia',
            href: '/overview/partnerships/Veia',
          },
        ],
      },
      {
        title: 'Departments',
        icon: HomeIcon,
        href: '/overview/departments/',
        items: [
          {
            title: 'Adult Probation',
            href: '/overview/departments/adult-probation',
          },
          {
            title: 'Bureau of Admin',
            href: '/overview/departments/bureau-of-admin',
          },
          {
            title: 'Central Bond Court',
            href: '/overview/departments/central-bond-court',
          },
          {
            title: 'Conference Center',
            href: '/overview/departments/conference-center',
          },
          {
            title: 'Department of Revenue',
            href: '/overview/departments/department-of-revenue',
          },
          {
            title: 'Maywood',
            href: '/overview/departments/maywood',
          },
          {
            title: 'Medical Examiners Office',
            href: '/overview/departments/medical-examiners-office',
          },
          {
            title: 'Secretary to the Board',
            href: '/overview/departments/secretary-to-the-board',
          },
        ],
      },
    ],
  },
  {
    subheader: 'Inform',
    items: [
      {
        title: 'Key Contacts',
        icon: UsersIcon,
        href: '/inform/key-contacts',
      },
      {
        title: 'Informational Items',
        icon: ArchiveIcon,
        href: '/inform/documents',
      },
      {
        title: 'COVID-19',
        icon: HeartIcon,
        href: '/inform/covid-19',
      },
    ],
  },
  {
    subheader: 'Management',
    items: [
      {
        title: 'Online Management',
        icon: LockIcon,
        href: '/management/',
        items: [
          {
            title: 'Proposals',
            href: '/management/proposals',
          },
          {
            title: 'Budgeting',
            href: '/management/budgeting',
          },
          {
            title: 'CAD Files',
            href: '/management/cad',
          },
          {
            title: 'Install Drawings',
            href: '/management/drawings',
          },
        ],
      },
      {
        title: 'Service Request',
        href: '/management/service',
        icon: EditIcon,
      },
    ],
  },
];

const renderNavItems = ({ items, ...rest }) => (
  <List disablePadding>
    {items.reduce(
      // eslint-disable-next-line no-use-before-define
      (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
      [],
    )}
  </List>
);

renderNavItems.propTypes = {
  items: PropTypes.array,
};

const reduceChildRoutes = ({
  acc, pathname, item, depth = 0,
}) => {
  const key = item.title + depth;
  if (item.items) {
    const open = pathname.includes(item.href);
    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>,
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        title={item.title}
      />,
    );
  }

  return acc;
};

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
}));

const NavBar = ({ openMobile, onMobileClose }) => {
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line
  }, [router.asPath]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display="flex" justifyContent="center">
            <IconButton href="/app">
              <Avatar
                className={classes.avatar}
                src="/img/logos/IIBars.png"
              />
            </IconButton>
          </Box>
        </Hidden>
        <Box p={2}>
          {navConfig.map((config) => (
            <List
              key={config.subheader}
              subheader={(
                <ListSubheader disableGutters disableSticky>
                  {config.subheader}
                </ListSubheader>
              )}
            >
              {renderNavItems({
                items: config.items,
                pathname: router.asPath,
              })}
            </List>
          ))}
        </Box>
        <Divider />
        <Box p={2}>
          <Box p={2} borderRadius="borderRadius" bgcolor="background.dark">
            <Typography variant="h6" color="textPrimary">
              Follow Us
            </Typography>
            <IconButton
              color="primary"
              href="https://facebook.com/InteriorInvestments/"
              size="small"
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://instagram.com/interior_investments/"
              size="small"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://linkedin.com/company/interior-investments/"
              size="small"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://pinterest.com/interiorinvestments/"
              size="small"
              target="_blank"
            >
              <PinterestIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://twitter.com/interior_invest"
              size="small"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://youtube.com/user/InteriorInvestments"
              size="small"
              target="_blank"
            >
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
