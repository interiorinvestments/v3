import React from 'react';
import {
  Avatar,
  colors,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import SectionHeader from 'components/molecules/SectionHeader';
import CardBase from 'components/organisms/CardBase';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {},
  cardBase: {
    boxShadow: 'none',
    background: colors.grey[100],
    borderRadius: theme.spacing(1),
    '& .card-base__content': {
      padding: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
      },
    },
  },
  avatar: {
    width: 110,
    height: 110,
    border: '4px solid white',
    borderRadius: '100%',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.1)',
  },
  listItem: {
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  listItemAvatar: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 0,
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
  },
}));

const Team = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Herman Miller Team"
        titleVariant="h3"
        align={isMd ? 'center' : 'left'}
      />
      <Grid container spacing={isMd ? 2 : 1}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} key={index} data-aos="fade-up">
            <CardBase className={classes.cardBase} liftUp>
              <ListItem disableGutters className={classes.listItem}>
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar {...item.photo} className={classes.avatar} />
                </ListItemAvatar>
                <ListItemText
                  className={classes.listItemText}
                  primary={item.name}
                  secondary={(
                    <>
                      <Typography>{item.title}</Typography>
                      <Typography>{item.phone}</Typography>
                      <Typography>{item.email}</Typography>
                    </>
   )}
                  primaryTypographyProps={{
                    className: classes.title,
                    variant: 'h6',
                    align: isMd ? 'left' : 'center',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                    align: isMd ? 'left' : 'center',
                  }}
                />
              </ListItem>
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Team.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Team;