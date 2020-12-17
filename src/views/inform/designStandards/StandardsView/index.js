import {
  Container, makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Standard from './Standard';
import StandardsList from './StandardsList';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const StandardsView = ({ standards }) => {
  const classes = useStyles();
  const [standard, setStandard] = useState(null);
  return (
    <Container className={classes.root} maxWidth="xl">
      {standard ? (
        <Standard standard={standard} setStandard={setStandard} />
      ) : (
        <StandardsList standards={standards} setStandard={setStandard} />
      )}
    </Container>
  );
};

StandardsView.propTypes = {
  standards: PropTypes.object.isRequired,
};

export default StandardsView;
