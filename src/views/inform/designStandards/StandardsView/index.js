import {
  Box, Container, Grid, Hidden, makeStyles, Typography,
} from '@material-ui/core';
import Image from 'next/image';
import PropTypes from 'prop-types';

import Standards from './Standards';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  model: {
    width: '100%',
    height: '100%',
  },
}));

const StandardsView = ({ standards }) => {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="textPrimary">{standards.title}</Typography>
          <Image src={standards.image} height={750} width={1300} alt="unsplash" />
          <Typography variant="body1" color="textPrimary">{standards.description}</Typography>
          <Hidden smUp>
            <Box my={4} />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={6}>
          <Hidden smUp>
            <Box my={4} />
          </Hidden>
          <Standards standards={standards.standards} />
        </Grid>
      </Grid>
    </Container>
  );
};

StandardsView.propTypes = {
  standards: PropTypes.object.isRequired,
};

export default StandardsView;
