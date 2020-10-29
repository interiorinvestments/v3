import { useState } from 'react';
import {
  Check as CheckIcon,
  Clipboard as ClipboardIcon,
  Layers as LayersIcon,
  List as ListIcon,
  Map as MapIcon,
  Package as PackageIcon,
  User as UserIcon,
} from 'react-feather';
import {
  Avatar,
  Box, Container, Grid, makeStyles,
  Paper, Step, StepConnector,
  StepLabel,
  Stepper, Typography, withStyles,
} from '@material-ui/core';
import clsx from 'clsx';
import NameForm from 'components/common/NameForm';

import Details from './Details';
import Finishes from './Finishes';
import Overview from './Overview';
import Plan from './Plan';
import Primary from './Primary';
import Receipt from './Receipt';
import Secondary from './Secondary';

const steps = [
  {
    label: 'Name',
    icon: UserIcon,
  },
  {
    label: 'Plan Orientation',
    icon: MapIcon,
  },
  {
    label: 'Decision Overview & Framework',
    icon: ListIcon,
  },
  {
    label: 'Primary Work Area Choices',
    icon: PackageIcon,
  },
  {
    label: 'Secondary Work Area Choices',
    icon: PackageIcon,
  },
  {
    label: 'Finishes',
    icon: LayersIcon,
  },
  {
    label: 'Details & Conclusions',
    icon: ClipboardIcon,
  },
  {
    label: 'Receipt',
    icon: CheckIcon,
  },
];

const CustomStepConnector = withStyles((theme) => ({
  vertical: {
    marginLeft: 19,
    padding: 0,
  },
  line: {
    borderColor: theme.palette.divider,
  },
}))(StepConnector);

const useCustomStepIconStyles = makeStyles((theme) => ({
  root: {},
  active: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[10],
    color: theme.palette.secondary.contrastText,
  },
  completed: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

const CustomStepIcon = ({ active, completed, icon }) => {
  const classes = useCustomStepIconStyles();

  const Icon = steps[icon - 1].icon;

  return (
    <Avatar
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      <Icon size="20" />
    </Avatar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  stepper: {
    backgroundColor: 'transparent',
  },
}));

const ManagementView = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    window.scrollTo(0, 0);
  };
  return (
    <Container maxWidth={null}>
      <Box mb={3}>
        <Typography
          variant="h3"
          color="textPrimary"
        >
          Management Customization
        </Typography>
      </Box>
      <Paper>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Stepper
              activeStep={activeStep}
              className={classes.stepper}
              connector={<CustomStepConnector />}
              orientation="vertical"
            >
              {steps.map((step) => (
                <Step key={step.label}>
                  <StepLabel StepIconComponent={CustomStepIcon}>
                    {step.label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
          >
            <Box p={3}>
              {activeStep === 0 && (
                <Grid item sm={6} md={3}>
                  <NameForm onNext={handleNext} localStorageKey="management" />
                </Grid>
              )}
              {activeStep === 1 && (
                <Plan onBack={handleBack} onNext={handleNext} localStorageKey="management" />
              )}
              {activeStep === 2 && (
                <Overview onBack={handleBack} onNext={handleNext} />
              )}
              {activeStep === 3 && (
                <Primary onBack={handleBack} onNext={handleNext} />
              )}
              {activeStep === 4 && (
                <Secondary onBack={handleBack} onNext={handleNext} />
              )}
              {activeStep === 5 && (
                <Finishes onBack={handleBack} onNext={handleNext} />
              )}
              {activeStep === 6 && (
                <Details onBack={handleBack} onNext={handleNext} />
              )}
              {activeStep === 7 && (
                <Receipt onBack={handleBack} onNext={handleNext} />
              )}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ManagementView;
