import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Image from 'components/atoms/Image';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.alternate,
    width: '100%',
  },
  noBg: {
    background: 'transparent',
  },
  copy: {
    textAlign: 'center',
    maxWidth: 700,
    margin: '0 auto',
    padding: theme.spacing(2, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4, 2),
    },
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  logoImg: {
    maxWidth: 175,
    padding: theme.spacing(1),
  },
  fontWeight700: {
    fontWeight: 700,
  },
}));

const Partners = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <div className={classes.copy}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              color="textPrimary"
              align="center"
              className={classes.fontWeight700}
            >
              Manufacturing Partners
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="space-between">
              {data.map((partner, index) => (
                <Grid item xs={6} sm={2} key={index}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className={classes.logoImg}
                    lazy={false}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default Partners;
