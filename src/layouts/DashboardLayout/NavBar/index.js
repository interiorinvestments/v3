import {
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
import { useEffect } from 'react';
import {
  Book as BookIcon,
  Clipboard as ClipBoardIcon,
  Database as DatabaseIcon,
  DollarSign as DollarSignIcon,
  Edit as EditIcon,
  Facebook as FacebookIcon,
  Heart as HeartIcon,
  HelpCircle as HelpCircleIcon,
  Instagram as InstagramIcon,
  Key as KeyIcon,
  Linkedin as LinkedInIcon,
  Mail as MailIcon,
  Map as MapIcon,
  MapPin as MapPinIcon,
  Package as PackageIcon,
  Twitter as TwitterIcon,
  Youtube as YouTubeIcon,
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

import NavItem from './NavItem';

const navConfig = [
  {
    subheader: 'Inform',
    items: [
      {
        title: 'Key Contacts',
        icon: KeyIcon,
        href: '/inform/key-contacts',
      },
      {
        title: 'Design Standards',
        icon: MapIcon,
        href: '/inform/design-standards',
        items: [
          {
            title: 'Floor Plan',
            href: '/inform/design-standards/floorplan',
          },
          {
            title: 'Workstations',
            href: '/inform/design-standards/workstations',
          },
          {
            title: 'Private Offices',
            href: '/inform/design-standards/private-offices',
          },
          {
            title: 'Meeting Rooms',
            href: '/inform/design-standards/meeting-rooms',
          },
          {
            title: 'Café Area',
            href: '/inform/design-standards/cafe-area',
          },
          {
            title: 'Collaboration/Lounge',
            href: '/inform/design-standards/collaboration-lounge',
          },
          {
            title: 'Accessories',
            href: '/inform/design-standards/accessories',
          },
        ],
      },
      {
        title: 'Care & Maintenance',
        icon: BookIcon,
        href: '/inform/care-maintenance',
      },
      {
        title: 'Covid Response',
        icon: HeartIcon,
        href: '/inform/covid',
      },
      {
        title: 'FAQs',
        icon: HelpCircleIcon,
        href: '/inform/faqs',
      },
      {
        title: 'Contact Us',
        icon: MailIcon,
        href: '/inform/contact-us',
      },
    ],
  },
  {
    subheader: 'Inspire',
    items: [
      {
        title: 'Customization',
        icon: PackageIcon,
        href: '/inspire/customization',
        items: [
          {
            title: 'Management',
            href: '/inspire/customization/management',
          },
          {
            title: 'Benching',
            href: '/inspire/customization/customize/benching',
          },
          {
            title: 'Workstation',
            href: '/inspire/customization/customize/workstation',
          },
          {
            title: 'Private Office',
            href: '/inspire/customization/customize/private-office',
          },
          {
            title: 'Executive Office',
            href: '/inspire/customization/customize/executive-office',
          },
        ],
      },
    ],
  },
  {
    subheader: 'Integrate',
    items: [
      {
        title: 'Budgeting',
        icon: DollarSignIcon,
        href: '/integrate/budgeting',
      },
      {
        title: 'Locations',
        icon: MapPinIcon,
        href: '/integrate/locations',
        items: [
          {
            title: 'Dallas, TX',
            href: '/integrate/locations/dallas',
          },
          {
            title: 'Vernon Hills, IL',
            href: '/integrate/locations/vernonhills',
          },
          {
            title: 'Chicago, IL 1',
            href: '/integrate/locations/chicago1',
          },
          {
            title: 'Chicago, IL 2',
            href: '/integrate/locations/chicago2',
          },
        ],
      },
      {
        title: 'Inventory Control',
        icon: DatabaseIcon,
        href: '/integrate/inventory-control',
      },
    ],
  },
  {
    subheader: 'Implement',
    items: [
      {
        title: 'Online Management',
        icon: ClipBoardIcon,
        href: '/implement/management',
        items: [
          {
            title: 'Proposals',
            href: '/implement/management/proposals',
          },
          {
            title: 'Project Details',
            href: '/implement/management/project-details',
          },
          {
            title: 'Work Orders',
            href: '/implement/management/work-orders',
          },
        ],
      },
      {
        title: 'Service Request',
        href: '/implement/management/service',
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.element,
      href: PropTypes.string.isRequired,
      items: PropTypes.array,
    }),
  ),
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
        target={item.target}
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
        target={item.target}
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
        <Box p={2}>
          {navConfig.map((config) => (
            <List
              key={config.subheader}
              subheader={(
                <ListSubheader disableGutters disableSticky color="primary">
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
      <Hidden mdUp>
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
      {/* <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden> */}
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
