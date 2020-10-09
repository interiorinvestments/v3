import {
  Button, FormControl,
  FormControlLabel, FormLabel,
  Grid, makeStyles, Radio,
  RadioGroup,
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

const Primary = ({ onBack, onNext }) => {
  const classes = useStyles();
  const [name, setName] = useLocalStorageState('name');
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
              1.1 Select a Desk Configuration that Best Supports Your Work Process
              ( Click below to view each configuration ):
            </FormLabel>
            <RadioGroup name="1.1" value={options['1.1']} onChange={(e) => setOptions({ ...options, 1.1: e.target.value, 1.2: null })}>
              <FormControlLabel value="A" control={<Radio />} label="A. Table Desk (Meeting Based)" />
              <FormControlLabel value="B" control={<Radio />} label="B. Desk with Bridge (Paper Based)" />
              <FormControlLabel value="C" control={<Radio />} label="C. Table Desk (Meeting Based)" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              1.2 Select a Primary Desk Configuration ( Not all desks fit all configurations ):
            </FormLabel>
            <RadioGroup name="1.2" value={options['1.2']} onChange={(e) => setOptions({ ...options, 1.2: e.target.value })}>
              <FormControlLabel value="A" control={<Radio />} label={'A. Rectangle 8\'-0" x 3\'-6'} disabled={options['1.1'] !== 'A'} />
              <FormControlLabel value="B" control={<Radio />} label={'B. Rectangle 6\'-6" x 3\'-6'} disabled={options['1.1'] !== 'A'} />
              <FormControlLabel value="C" control={<Radio />} label={'C. Square 4\'-9" x 4\'-9'} disabled={options['1.1'] !== 'A'} />
              <FormControlLabel value="D" control={<Radio />} label={'D. Elipse 6\'-6" x 4\'-0'} disabled={options['1.1'] !== 'A'} />
              <FormControlLabel value="E" control={<Radio />} label={'E. Rectangle 8\'-0" x 3\'-6 with Bridge'} disabled={options['1.1'] !== 'B'} />
              <FormControlLabel value="F" control={<Radio />} label={'F. Rectangle 6\'-6" x 3\'-6 with Bridge'} disabled={options['1.1'] !== 'B'} />
              <FormControlLabel value="G" control={<Radio />} label={'G. Peninsula Rectangle 6\'-6" x 3\'-6 & 48" dia. Meeting Table'} disabled={options['1.1'] !== 'C'} />
              <FormControlLabel value="H" control={<Radio />} label={'H. Peninsula Elipse 6\'-6" x 4\'-0 & 48" dia. Meeting Table'} disabled={options['1.1'] !== 'C'} />
              <FormControlLabel value="I" control={<Radio />} label={'I. Rectangle 6\'-6" x 3\'-6 & 42" dia. Meeting Table'} disabled={options['1.1'] !== 'C'} />
              <FormControlLabel value="J" control={<Radio />} label={'J. Elipse 6\'-6" x 4\'-0 & 42" dia. Meeting Table'} disabled={options['1.1'] !== 'C'} />
              <FormControlLabel value="K" control={<Radio />} label={'K. Square 4\'-9" x 4\'-9 & 42" dia. Meeting Table'} disabled={options['1.1'] !== 'C'} />
              <FormControlLabel value="L" control={<Radio />} label={'L. Rectangle 6\'-6" x 3\'-6 with Bridge & 42" dia. Meeting Table'} disabled={options['1.1'] !== 'B'} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              1.3  Select Storage Configuration at Workwall Above Worksurface
              ( Discuss possible additional configurations with design team ):
            </FormLabel>
            <RadioGroup name="1.3" value={options['1.3']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio />} label="A. No Additional (Art may be located on workwall)" />
              <FormControlLabel value="B" control={<Radio />} label="B. Open Wood Shelves" />
              <FormControlLabel value="C" control={<Radio />} label="C. Open and Closed Storage with Optional Dividers (See 1.3.1)" />
              <FormControlLabel value="D" control={<Radio />} label="D. (1) Storage Unit with Glass Doors and Open Shelves" />
              <FormControlLabel value="E" control={<Radio />} label="E. (1) Storage Unit with Wood Doors and Open Shelves" />
              <FormControlLabel value="F" control={<Radio />} label="F. (3) Storage Units with Glass Doors" />
              <FormControlLabel value="G" control={<Radio />} label="G. (3) Storage Units with Wood Doors" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              1.3.1  Select Optional Dividers Configuration:
            </FormLabel>
            <RadioGroup name="1.3.1" value={options['1.3.1']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio />} label="A. All Horizontal Dividers" disabled={options['1.3'] !== 'C'} />
              <FormControlLabel value="B" control={<Radio />} label="B. All Vertical Dividers" disabled={options['1.3'] !== 'C'} />
              <FormControlLabel value="C" control={<Radio />} label="C. Vertical, Horizontal, Vertical Dividers" disabled={options['1.3'] !== 'C'} />
              <FormControlLabel value="D" control={<Radio />} label="D. Horizontal, Vertical, Horizontal Dividers" disabled={options['1.3'] !== 'C'} />
              <FormControlLabel value="E" control={<Radio />} label="E. No Dividers" disabled={options['1.3'] !== 'C'} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              1.4 Select Storage Configuration at Workwall Below Worksurface
              (Discuss mix of storage units with design team):
            </FormLabel>
            <RadioGroup name="1.4" value={options['1.4']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio />} label="A. No Additional Storage, Maintain Knee Space" />
              <FormControlLabel
                value="B"
                control={<Radio />}
                label="B. Maximum Storage without Knee Space (Adds 4 file drawers & wider storage/refrigerator cabinet)"
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              1.5.1 Select PC Configuration (Configuration will be displayed when you select from
              options in both 1.5.2 and 1.6 below):
            </FormLabel>
            <RadioGroup name="1.5.1" value={options['1.5.1']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio />} label="A. Laptop, No Port Replicator and No Monitor" />
              <FormControlLabel value="B" control={<Radio />} label="B. Laptop, with Port Replicator" />
              <FormControlLabel value="C" control={<Radio />} label="C. Desktop Monitor" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              1.5.2	Select Monitor Configuration, if Applicable (Configuration will be displayed when you select location in 1.6 below):
            </FormLabel>
            <RadioGroup name="1.5.2" value={options['1.5.2']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio />} label="A. Monitor with Base" disabled={options['1.5.1'] === 'A'} />
              <FormControlLabel value="B" control={<Radio />} label="B. Monitor on Articulating Arm" disabled={options['1.5.1'] === 'A'} />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              1.5.3 Select Keyboard and Mouse Configuration:
            </FormLabel>
            <RadioGroup name="1.5.3" value={options['1.5.3']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio />} label="A. Wireless Keyboard and Mouse" />
              <FormControlLabel value="B" control={<Radio />} label="B. Wired Keyboard and Mouse" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel>
              1.6 Select Where You Would Like Your Computer Located:
            </FormLabel>
            <RadioGroup name="1.6" value={options['1.6']} onChange={(e) => handleChoice(e)}>
              <FormControlLabel value="A" control={<Radio />} label="A. Desk (Position 1)" disabled={!options['1.5.2']} />
              <FormControlLabel value="B" control={<Radio />} label="B. Workwall" disabled={!options['1.5.2']} />
              <FormControlLabel value="C" control={<Radio />} label="C. Bridge" disabled={!options['1.5.2'] || options['1.1'] !== 'B'} />
              <FormControlLabel value="D" control={<Radio />} label="D. Desk (Position 2)" disabled={!options['1.5.2']} />
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

Primary.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Primary;
