import {
  Box, Button, Container, Grid, Hidden, makeStyles, Typography,
} from '@material-ui/core';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Codepen as CodepenIcon, Image as ImageIcon } from 'react-feather';

import Finishes from './FinishesOLD';

const Model = dynamic(() => import('components/common/Model'), {
  ssr: false,
});

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
  const [showModel, setShowModel] = useState(false);
  return (
    <Container maxWidth={false} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="textPrimary">{standards.title}</Typography>
          {!showModel ? (
            <Image src={standards.image} height={750} width={1300} alt="unsplash" />
          ) : (
            <Model model={standards.model} />

          )}
          <Typography variant="body1" color="textPrimary">{standards.description}</Typography>
          {!showModel ? (
            <Button variant="contained" color="primary" onClick={() => setShowModel(true)} disabled={!standards.model}>
              {' '}
              <CodepenIcon />
 &nbsp; 3D View
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={() => setShowModel(false)}>
              <ImageIcon />
              {' '}
              &nbsp;
              View
            </Button>
          )}
          <Hidden smUp>
            <Box my={4} />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={6}>
          <Hidden smUp>
            <Box my={4} />
          </Hidden>
          <Finishes finishes={standards.finishes} />
        </Grid>
      </Grid>
    </Container>
  );
};

StandardsView.propTypes = {
  standards: PropTypes.object.isRequired,
};

export default StandardsView;
