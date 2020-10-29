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
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['1.1'][options['1.1']]}</Typography>
          </>
          )}
          {options['1.2'] && (
          <>
            <Typography variant="body1">1.2 Desk Shape / Size Selection</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['1.2'][options['1.2']]}</Typography>
          </>
          )}
          {options['1.3'] && (
          <>
            <Typography variant="body1">1.3 Workwall Above Worksurface Configuration</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['1.3'][options['1.3']]}</Typography>
          </>
          )}
          {options['1.3.1'] && (
          <>
            <Typography variant="body1">1.3.1 Optional Dividers</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['1.3.1'][options['1.3.1']]}</Typography>
          </>
          )}
          {options['1.4'] && (
          <>
            <Typography variant="body1">1.4 Workwall Below Worksurface Configuration</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['1.4'][options['1.4']]}</Typography>
          </>
          )}
          {options['1.5.1'] && (
          <>
            <Typography variant="body1">1.5.1 PC Configuration</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['1.5.1'][options['1.5.1']]}</Typography>
          </>
          )}
          {options['1.5.2'] && (
          <>
            <Typography variant="body1">1.5.2 Monitor Configuration</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['1.5.2'][options['1.5.2']]}</Typography>
          </>
          )}
          {options['1.5.3'] && (
          <>
            <Typography variant="body1">1.5.3 Keyboard & Mouse Configuration</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['1.5.3'][options['1.5.3']]}</Typography>
          </>
          )}
          {options['1.6'] && (
          <>
            <Typography variant="body1">1.6 Technology Location</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['1.6'][options['1.6']]}</Typography>
          </>
          )}
          {options['1.7'] && (
          <>
            <Typography variant="body1">1.7 Desk Chair</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['1.7'][options['1.7']]}</Typography>
          </>
          )}
          {(options['accessories.a'] || options['accessories.b'] || options['accessories.c'] || options['accessories.d']) && (
          <>
            <Typography variant="body1">1.8 Accessories - Work Tools</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {[options['accessories.a']]}
              {' '}
              {managementData['1.8'].A}
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {[options['accessories.b']]}
              {' '}
              {managementData['1.8'].B}
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {[options['accessories.c']]}
              {' '}
              {managementData['1.8'].C}
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {[options['accessories.d']]}
              {' '}
              {managementData['1.8'].D}
            </Typography>
          </>
          )}
          {options['2.1'] && (
          <>
            <Typography variant="body1">2.1 Lounge Seating or Storage</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['2.1'][options['2.1']]}</Typography>
          </>
          )}
          {options['2.2'] && (
          <>
            <Typography variant="body1">2.2 Additional Storage Components</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['2.2'][options['2.2']]}</Typography>
          </>
          )}
          {options['2.3'] && (
          <>
            <Typography variant="body1">2.3 Wall Components</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['2.3'][options['2.3']]}</Typography>
          </>
          )}
          {options['2.4'] && (
          <>
            <Typography variant="body1">2.4 Guest Chair</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['2.4'][options['2.4']]}</Typography>
          </>
          )}
          {options['3.1'] && (
          <>
            <Typography variant="body1">3.1 Desk Finish</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['3.1'][options['3.1']]}</Typography>
          </>
          )}
          {options['3.2'] && (
          <>
            <Typography variant="body1">3.2 Separate Meeting Table Finish</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['3.2'][options['3.2']]}</Typography>
          </>
          )}
          {options['3.3'] && (
          <>
            <Typography variant="body1">3.3 Desk Chair Finish</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['3.3'][options['3.3']]}</Typography>
          </>
          )}
          {options['3.4'] && (
          <>
            <Typography variant="body1">3.4 Guest Chair Finish</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['3.4'][options['3.4']]}</Typography>
          </>
          )}
          {options['3.5'] && (
          <>
            <Typography variant="body1">3.5 Lounge Seating Finish</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['3.5'][options['3.5']]}</Typography>
          </>
          )}
          {options['4.1'] && (
          <>
            <Typography variant="body1">4.1 Refrigerator</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['4.1'][options['4.1']]}</Typography>
          </>
          )}
          {options['4.2'] && (
          <>
            <Typography variant="body1">4.2 Desk Lamp</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['4.2'][options['4.2']]}</Typography>
          </>
          )}
          {options['4.3'] && (
          <>
            <Typography variant="body1">4.3 Area Rug</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['4.3'][options['4.3']]}</Typography>
          </>
          )}
          {options['4.4'] && (
          <>
            <Typography variant="body1">4.4 Primary Telephone Location</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['4.4'][options['4.4']]}</Typography>
          </>
          )}
          {options['4.5'] && (
          <>
            <Typography variant="body1">4.5 Secondary Wireless Telephone Location</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{managementData['4.5'][options['4.5']]}</Typography>
          </>
          )}
          {options['4.6'] && (
          <>
            <Typography variant="body1">4.6 Additional Questions</Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">{[options['4.6']]}</Typography>
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
