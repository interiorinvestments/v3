import {
  Button, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, Typography,
} from '@material-ui/core';
import useLocalStorageState from 'hooks/useLocalStorageState';

import Canvas from './Canvas';
import managementData from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: theme.spacing(2),
  },
  img: {
    marginTop: theme.spacing(2),
    width: '415px',
    height: '287px',
  },
}));

const Receipt = () => {
  const classes = useStyles();
  const [name] = useLocalStorageState('management');
  const [options] = useLocalStorageState(name, {});
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4} lg={5}>
          <Typography variant="h4" gutterBottom>
            Furniture Selection Receipt - As of
            {' '}
            {new Date().toUTCString()}
          </Typography>
          <Typography variant="body1" gutterBottom>
            The following layout has been saved for
            {' '}
            {name}
            {' '}
            submitted on
            {' '}
            {new Date().toUTCString()}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Selections For Your Exterior Corner Office:
          </Typography>
          {options['1.1'] && (
          <>
            <Typography variant="body1">1.1 Desk Configuration</Typography>
            <Typography variant="body2">{managementData['1.1'][options['1.1']]}</Typography>
          </>
          )}
        </Grid>
        <Grid item xs={12} sm={8} lg={7}>
          <Canvas options={options} />
        </Grid>
      </Grid>
    </>
  );
};

export default Receipt;
