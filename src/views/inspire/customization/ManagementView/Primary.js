import {
  Box, Button, FormControl,
  FormControlLabel, FormLabel,
  Grid, makeStyles, Radio,
  RadioGroup, TextField, Typography,
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

const Primary = ({ onBack, onNext }) => {
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
              {managementData['1.1'].label}
            </FormLabel>
            <RadioGroup name="1.1" value={options['1.1']} onChange={(e) => setOptions({ ...options, 1.1: e.target.value, 1.2: null })}>
              <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.1'].A}</Typography>} />
              <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.1'].B}</Typography>} />
              <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.1'].C}</Typography>} />
            </RadioGroup>
          </FormControl>
          <Box my={2}>
            <FormControl component="fieldset">
              <FormLabel>
                {managementData['1.2'].label}
              </FormLabel>
              <RadioGroup name="1.2" value={options['1.2']} onChange={(e) => setOptions({ ...options, 1.2: e.target.value })}>
                <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.2'].A}</Typography>} disabled={options['1.1'] !== 'A'} />
                <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.2'].B}</Typography>} disabled={options['1.1'] !== 'A'} />
                <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.2'].C}</Typography>} disabled={options['1.1'] !== 'A'} />
                <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.2'].D}</Typography>} disabled={options['1.1'] !== 'A'} />
                <FormControlLabel value="E" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.2'].E}</Typography>} disabled={options['1.1'] !== 'B'} />
                <FormControlLabel value="F" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.2'].F}</Typography>} disabled={options['1.1'] !== 'B'} />
                <FormControlLabel value="G" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.2'].G}</Typography>} disabled={options['1.1'] !== 'C'} />
                <FormControlLabel value="H" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.2'].H}</Typography>} disabled={options['1.1'] !== 'C'} />
                <FormControlLabel value="I" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.2'].I}</Typography>} disabled={options['1.1'] !== 'C'} />
                <FormControlLabel value="J" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.2'].J}</Typography>} disabled={options['1.1'] !== 'C'} />
                <FormControlLabel value="K" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.2'].K}</Typography>} disabled={options['1.1'] !== 'C'} />
                <FormControlLabel value="L" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.2'].L}</Typography>} disabled={options['1.1'] !== 'B'} />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box my={2}>
            <FormControl component="fieldset">
              <FormLabel>
                {managementData['1.3'].label}
              </FormLabel>
              <RadioGroup name="1.3" value={options['1.3']} onChange={(e) => handleChoice(e)}>
                <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.3'].A}</Typography>} />
                <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.3'].B}</Typography>} />
                <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.3'].C}</Typography>} />
                <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.3'].D}</Typography>} />
                <FormControlLabel value="E" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.3'].E}</Typography>} />
                <FormControlLabel value="F" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.3'].F}</Typography>} />
                <FormControlLabel value="G" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.3'].G}</Typography>} />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box my={2}>
            <FormControl component="fieldset">
              <FormLabel>
                {managementData['1.3.1'].label}
              </FormLabel>
              <RadioGroup name="1.3.1" value={options['1.3.1']} onChange={(e) => handleChoice(e)}>
                <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.3.1'].A}</Typography>} disabled={options['1.3'] !== 'C'} />
                <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.3.1'].B}</Typography>} disabled={options['1.3'] !== 'C'} />
                <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.3.1'].C}</Typography>} disabled={options['1.3'] !== 'C'} />
                <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.3.1'].D}</Typography>} disabled={options['1.3'] !== 'C'} />
                <FormControlLabel value="E" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.3.1'].E}</Typography>} disabled={options['1.3'] !== 'C'} />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box my={2}>
            <FormControl component="fieldset">
              <FormLabel>
                {managementData['1.4'].label}
              </FormLabel>
              <RadioGroup name="1.4" value={options['1.4']} onChange={(e) => handleChoice(e)}>
                <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.4'].A}</Typography>} />
                <FormControlLabel
                  value="B"
                  control={<Radio size="small" />}
                  label={<Typography variant="body2">{managementData['1.4'].B}</Typography>}
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box my={2}>
            <FormControl component="fieldset">
              <FormLabel>
                {managementData['1.5.1'].label}
              </FormLabel>
              <RadioGroup name="1.5.1" value={options['1.5.1']} onChange={(e) => handleChoice(e)}>
                <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.5.1'].A}</Typography>} />
                <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.5.1'].B}</Typography>} />
                <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.5.1'].C}</Typography>} />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box my={2}>
            <FormControl component="fieldset">
              <FormLabel>
                {managementData['1.5.2'].label}
              </FormLabel>
              <RadioGroup name="1.5.2" value={options['1.5.2']} onChange={(e) => handleChoice(e)}>
                <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.5.2'].A}</Typography>} disabled={options['1.5.1'] === 'A'} />
                <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.5.2'].B}</Typography>} disabled={options['1.5.1'] === 'A'} />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box my={2}>
            <FormControl component="fieldset">
              <FormLabel>
                {managementData['1.5.3'].label}
              </FormLabel>
              <RadioGroup name="1.5.3" value={options['1.5.3']} onChange={(e) => handleChoice(e)}>
                <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.5.3'].A}</Typography>} />
                <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.5.3'].B}</Typography>} />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box my={2}>
            <FormControl component="fieldset">
              <FormLabel>
                {managementData['1.6'].label}
              </FormLabel>
              <RadioGroup name="1.6" value={options['1.6']} onChange={(e) => handleChoice(e)}>
                <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.6'].A}</Typography>} disabled={!options['1.5.2']} />
                <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.6'].B}</Typography>} disabled={!options['1.5.2']} />
                <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.6'].C}</Typography>} disabled={!options['1.5.2'] || options['1.1'] !== 'B'} />
                <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.6'].D}</Typography>} disabled={!options['1.5.2']} />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box my={2}>
            <FormControl component="fieldset">
              <FormLabel>
                {managementData['1.7'].label}
              </FormLabel>
              <RadioGroup name="taskChair" value={options.taskChair} onChange={(e) => handleChoice(e)}>
                <FormControlLabel value="A" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.7'].A}</Typography>} />
                <FormControlLabel value="B" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.7'].B}</Typography>} />
                <FormControlLabel value="C" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.7'].C}</Typography>} />
                <FormControlLabel value="D" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.7'].D}</Typography>} />
                <FormControlLabel value="E" control={<Radio size="small" />} label={<Typography variant="body2">{managementData['1.7'].E}</Typography>} />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box my={2}>
            <FormControl>
              <FormLabel>
                {managementData['1.8'].label}
              </FormLabel>
              <TextField value={options['accessories.a']} name="accessories.a" onChange={(e) => handleChoice(e)} type="number" size="small" variant="outlined" label={managementData['1.8'].A} margin="dense" />
              <TextField value={options['accessories.b']} name="accessories.b" onChange={(e) => handleChoice(e)} type="number" size="small" variant="outlined" label={managementData['1.8'].B} margin="dense" />
              <TextField value={options['accessories.c']} name="accessories.c" onChange={(e) => handleChoice(e)} type="number" size="small" variant="outlined" label={managementData['1.8'].C} margin="dense" />
              <TextField value={options['accessories.d']} name="accessories.d" onChange={(e) => handleChoice(e)} type="number" size="small" variant="outlined" label={managementData['1.8'].D} margin="dense" />
            </FormControl>
          </Box>
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

Primary.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Primary;
