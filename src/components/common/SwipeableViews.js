import {
  Button, MobileStepper,
} from '@material-ui/core';
import {
  makeStyles, useTheme,
} from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Image from 'next/image';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    flexGrow: 1,
  },
  img: {
    height: 400,
    display: 'block',
    maxWidth: 600,
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper({ images, activeStep, setActiveStep }) {
  const classes = useStyles();
  const theme = useTheme();

  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.imgPath}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Image className={classes.img} src={step.imgPath} alt={step.label} loading="eager" height={400} width={600} />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={(
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        )}
        backButton={(
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        )}
      />
    </div>
  );
}

SwipeableTextMobileStepper.propTypes = {
  images: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func.isRequired,
};

export default SwipeableTextMobileStepper;
