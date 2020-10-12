import {
  Button, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup,
} from '@material-ui/core';
import useLocalStorageState from 'hooks/useLocalStorageState';
import PropTypes from 'prop-types';

import Canvas from './Canvas';

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
  const [name] = useLocalStorageState('name');
  const [options, setOptions] = useLocalStorageState(name, {});

  const handleChoice = (e) => {
    setOptions({ ...options, [e.target.name]: e.target.value });
  };
  console.log(options);
  return (
    <>
      <Grid container>
        <Grid xs={12} sm={4} lg={5}>
          <FormControl component="fieldset">
            <FormLabel>
              2.1 Select the Lounge Seating / Meeting or storage Option that Supports How you Work:
            </FormLabel>
            <RadioGroup name="2.1" value={options['2.1']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio />} label="A. No Additional Pieces, Maintain Free Wall & Floor Space" disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2'])} />
              <FormControlLabel value="B" control={<Radio />} label="B. Additional Storage Choices, see 2.2 Below" disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2'])} />
              <FormControlLabel value="C" control={<Radio />} label="C. Lounge Chairs and Occasional Table" disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2'])} />
              <FormControlLabel value="D" control={<Radio />} label="D. Sette and Occasional Table" disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2'])} />
              <FormControlLabel value="E" control={<Radio />} label="E. Sofa and Occasional Table" disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2'])} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              2.2 Select Additional Storage (If you selected option B in 2.1; items may conflict with B,C,D in 2.3)
            </FormLabel>
            <RadioGroup name="2.2" value={options['2.2']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio />} label='A. Credenza with Open Adjustable Shelves - 108"L x 12"D x 29"H' disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2']) || options['2.1'] !== 'B'} />
              <FormControlLabel value="B" control={<Radio />} label='B. Credenza with Doors and Adjustable Shelves - 108"L x 18"D x 29"H' disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2']) || options['2.1'] !== 'B'} />
              <FormControlLabel value="C" control={<Radio />} label='C. Credenza with Lateral File Drawers - 108"L x 18"D x 29"H' disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2']) || options['2.1'] !== 'B'} />
              <FormControlLabel value="D" control={<Radio />} label='D. Bookcase - 108"L x 12"D x 82.5"H' disabled={['G', 'H', 'I', 'J', 'K', 'L'].includes(options['1.2']) || options['2.1'] !== 'B'} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              2.3 Select Wall-based componenets: (if you selected option A in 2.1 or option C in 1.1)
            </FormLabel>
            <RadioGroup name="2.3" value={options['2.3']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio />} label='A. Markerboard Cabinet with Doors, Tack Panels on Door Interior (48"L x 42"H)' disabled={['D', 'E'].includes(options['2.1']) || ['B', 'C', 'D'].includes(options['2.2'])} />
              <FormControlLabel value="B" control={<Radio />} label='B. Large Markerboard Surface 72"L x 48"H' disabled={['D', 'E'].includes(options['2.1']) || ['B', 'C', 'D'].includes(options['2.2'])} />
              <FormControlLabel value="C" control={<Radio />} label="C. Location for your Flat Screen TV (Not Provided)" disabled={options['2.2'] === 'D'} />
              <FormControlLabel value="D" control={<Radio />} label="D. None, Space for Personal Artwork or Other" disabled={options['2.2'] === 'D'} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              2.4 Select Guest Chair Option (Note - finish selections vary, see Section 3, and please view and test guest chairs in Room 75C):
            </FormLabel>
            <RadioGroup name="2.4" value={options['2.4']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio />} label="A. Vitra - Meda Conference" />
              <FormControlLabel value="B" control={<Radio />} label="B. Andreu World - New Anna" />
              <FormControlLabel value="C" control={<Radio />} label="C. Knoll - Brno Tubular" />
              <FormControlLabel value="D" control={<Radio />} label="D. Knoll - Brno Flat Bar (Existing Inventory)" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={8} lg={7}>
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
