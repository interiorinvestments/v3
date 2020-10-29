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

const Finishes = ({ onBack, onNext }) => {
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
              {managementData['3.1'].label}
            </FormLabel>

            <RadioGroup name="3.1" value={options['3.1']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.1'].A}</Typography>} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.1'].B}</Typography>} />
              <FormControlLabel value="c" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.1'].C}</Typography>} />
              <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.1'].D}</Typography>} />
              <FormControlLabel value="E" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.1'].E}</Typography>} />
              <FormControlLabel value="F" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.1'].F}</Typography>} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              {managementData['3.2'].label}
            </FormLabel>

            <RadioGroup name="3.2" value={options['3.2']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.2'].A}</Typography>} disabled={options['1.1'] !== 'C'} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.2'].B}</Typography>} disabled={options['1.1'] !== 'C'} />
              <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.2'].C}</Typography>} disabled={options['1.1'] !== 'C'} />
              <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.2'].D}</Typography>} disabled={options['1.1'] !== 'C'} />
              <FormControlLabel value="E" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.2'].E}</Typography>} disabled={options['1.1'] !== 'C'} />
              <FormControlLabel value="F" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.2'].F}</Typography>} disabled={options['1.1'] !== 'C'} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>{managementData['3.3'].label}</FormLabel>
            <RadioGroup name="3.3" value={options['3.3']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.3'].A}</Typography>} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.3'].B}</Typography>} />
              <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.3'].C}</Typography>} />
              <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.3'].D}</Typography>} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              {managementData['3.4'].label}
            </FormLabel>
            <RadioGroup name="3.4" value={options['3.4']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.4'].A}</Typography>} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.4'].B}</Typography>} />
              <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.4'].C}</Typography>} />
              <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.4'].D}</Typography>} />
              <FormControlLabel value="E" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.4'].E}</Typography>} />
              <FormControlLabel value="F" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.4'].F}</Typography>} />
              <FormControlLabel value="G" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.4'].G}</Typography>} />
              <FormControlLabel value="H" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.4'].H}</Typography>} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>{managementData['3.5'].label}</FormLabel>
            <RadioGroup name="3.5" value={options['3.5']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.5'].A}</Typography>} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.5'].B}</Typography>} />
              <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.5'].C}</Typography>} />
              <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.5'].D}</Typography>} />
              <FormControlLabel value="E" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.5'].E}</Typography>} />
              <FormControlLabel value="F" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.5'].F}</Typography>} />
              <FormControlLabel value="G" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.5'].G}</Typography>} />
              <FormControlLabel value="H" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.5'].H}</Typography>} />
              <FormControlLabel value="I" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.5'].I}</Typography>} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>{managementData['3.6'].label}</FormLabel>
            <RadioGroup name="3.6" value={options['3.6']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.6'].A}</Typography>} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.6'].B}</Typography>} />
              <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['3.6'].C}</Typography>} />
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

Finishes.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Finishes;
