import {
  Button, FormControl, FormControlLabel, FormLabel, Grid,
  makeStyles, Radio, RadioGroup, TextField, Typography,
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

const Details = ({ onBack, onNext }) => {
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
              {managementData['4.1'].label}
            </FormLabel>
            <RadioGroup name="4.1" value={options['4.1']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['4.1'].A}</Typography>} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['4.1'].B}</Typography>} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              {managementData['4.2'].label}
            </FormLabel>
            <RadioGroup name="4.2" value={options['4.2']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['4.2'].A}</Typography>} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['4.2'].B}</Typography>} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              {managementData['4.3'].label}
            </FormLabel>
            <RadioGroup name="4.3" value={options['4.3']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['4.3'].A}</Typography>} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['4.3'].B}</Typography>} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              {managementData['4.4'].label}
            </FormLabel>
            <RadioGroup name="4.4" value={options['4.4']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['4.4'].A}</Typography>} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['4.4'].B}</Typography>} />
              <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['4.4'].C}</Typography>} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              {managementData['4.5'].label}
            </FormLabel>
            <RadioGroup name="4.5" value={options['4.5']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['4.5'].A}</Typography>} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['4.5'].B}</Typography>} />
              <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['4.5'].C}</Typography>} />
              <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['4.5'].D}</Typography>} />
            </RadioGroup>
          </FormControl>
          <TextField
            variant="outlined"
            name="4.6"
            fullWidth
            type="text"
            multiline
            rows={4}
            required
            label="4.6 Provide Any Additional Questions in the Space Below"
            value={options['4.6']}
            onChange={(e) => handleChoice(e)}
          />
        </Grid>
        <Grid item xs={12} sm={8} lg={7}>
          <Canvas options={options} />
        </Grid>
      </Grid>
      <div className={classes.buttons}>
        <Button onClick={onBack}>Back</Button>
        <Button color="primary" variant="contained" onClick={onNext}>Submit</Button>
      </div>
    </>
  );
};

Details.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Details;
