import {
  Button, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, Typography,
} from '@material-ui/core';
import useLocalStorageState from 'hooks/useLocalStorageState';
import PropTypes from 'prop-types';

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

const Secondary = ({ onBack, onNext }) => {
  const classes = useStyles();
  const [name] = useLocalStorageState('management');
  const [options, setOptions] = useLocalStorageState(name, {});

  const handleChoice = (e) => {
    setOptions({ ...options, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4} lg={5}>
          <FormControl component="fieldset">
            <FormLabel>
              {managementData['2.1'].label}
            </FormLabel>
            <RadioGroup name="2.1" value={options['2.1']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.1'].A}</Typography>} disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2'])} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.1'].B}</Typography>} disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2'])} />
              <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.1'].C}</Typography>} disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2'])} />
              <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.1'].D}</Typography>} disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2'])} />
              <FormControlLabel value="E" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.1'].E}</Typography>} disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2'])} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              {managementData['2.2'].label}
            </FormLabel>
            <RadioGroup name="2.2" value={options['2.2']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.2'].A}</Typography>} disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2']) || options['2.1'] !== 'B'} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.2'].B}</Typography>} disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2']) || options['2.1'] !== 'B'} />
              <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.2'].C}</Typography>} disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2']) || options['2.1'] !== 'B'} />
              <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.2'].D}</Typography>} disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2']) || options['2.1'] !== 'B'} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              {managementData['2.3'].label}
            </FormLabel>
            <RadioGroup name="2.3" value={options['2.3']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.3'].A}</Typography>} disabled={['D', 'E'].includes(options['2.1']) || ['B', 'C', 'D'].includes(options['2.2'])} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.3'].B}</Typography>} disabled={['D', 'E'].includes(options['2.1']) || ['B', 'C', 'D'].includes(options['2.2'])} />
              <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.3'].C}</Typography>} disabled={options['2.2'] === 'D'} />
              <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.3'].D}</Typography>} disabled={options['2.2'] === 'D'} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              {managementData['2.4'].label}
            </FormLabel>
            <RadioGroup name="2.4" value={options['2.4']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.4'].A}</Typography>} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.4'].B}</Typography>} />
              <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.4'].C}</Typography>} />
              <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['2.4'].D}</Typography>} />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} lg={7}>
          <Canvas options={options} />
        </Grid>
      </Grid>
      <div className={classes.buttons}>
        <Button onClick={onBack}>Back</Button>
        <Button color="primary" variant="contained" onClick={onNext}>Next</Button>
      </div>
    </>
  );
};

Secondary.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Secondary;
