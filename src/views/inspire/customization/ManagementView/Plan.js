import {
  Button, makeStyles, Typography,
} from '@material-ui/core';
import useLocalStorageState from 'hooks/useLocalStorageState';
import PropTypes from 'prop-types';

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
    width: '100%',
    height: 'auto',
  },
}));
const Plan = ({ onBack, onNext, localStorageKey }) => {
  const classes = useStyles();
  const [name, setName] = useLocalStorageState(localStorageKey);
  return (
    <>
      <Typography variant="body1">
        Welcome
        {' '}
        {name.firstName}
        {' '}
        {name.lastName}
        {' '}
        your office is number 36NE34 in NE Exterior Corner
      </Typography>
      <img className={classes.img} src="/img/customization/management/OfficeA-NE-TransactionTemplate.jpg" alt="floor plan" />
      <div className={classes.buttons}>
        <Button onClick={onBack}>Back</Button>
        <Button color="primary" variant="contained" onClick={onNext}>Next</Button>
      </div>
    </>
  );
};

Plan.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  localStorageKey: PropTypes.string.isRequired,
};

export default Plan;
