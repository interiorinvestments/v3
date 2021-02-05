import {
  Box, Card, CardContent, CardMedia, Container, FormControl,
  FormControlLabel, FormLabel, Grid, makeStyles, Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const CustomizeView = ({ area }) => {
  const classes = useStyles();
  const [option, setOption] = useState(area.options[0]);
  const [value, setValue] = useState(0);
  const [detail, setDetail] = useState(option.floor);
  const router = useRouter();

  const handleRadioChange = (e) => {
    setValue(+e.target.value);
    setOption(area.options[+e.target.value]);
    setDetail(area.options[+e.target.value].floor);
  };

  useEffect(() => {
    setValue(0);
    setOption(area.options[0]);
    setDetail(area.options[0].floor);
  }, [router]);

  return (
    <Container className={classes.root} maxWidth="xl">
      <Box mb={3}>
        <Typography variant="h1" color="textPrimary">{area.description}</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Select your option</FormLabel>
            <RadioGroup aria-label="Customize" name="Customize" value={value} onChange={handleRadioChange}>
              <FormControlLabel value={0} control={<Radio />} label="Value" />
              <FormControlLabel value={1} control={<Radio />} label="Better" />
              <FormControlLabel value={2} control={<Radio />} label="Best" />
            </RadioGroup>
          </FormControl>

        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container direction="row" spacing={1}>
            <Grid item xs={12} sm={10}>

              <Image src={option.image} width={700} height={400} />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Image src={detail} width={300} height={150} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" color="textSecondary">{option.name}</Typography>
          <ul>
            {option.details?.map((spec) => <li key={spec}><Typography variant="body1">{spec}</Typography></li>)}
          </ul>
        </Grid>
        <Grid container spacing={2}>
          {area.finishes?.map((finish, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Card>
                <CardMedia>
                  <Image src={finish.image} height={150} width={300} alt={finish.description} />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {finish.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">{finish.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>

  );
};

CustomizeView.propTypes = {
  area: PropTypes.object.isRequired,
};

export default CustomizeView;
