import {
  Card, CardContent, CardMedia, Grid, Typography,
} from '@material-ui/core';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Options = ({ options }) => (
  <>
    {/* <Typography variant="h4" color="textPrimary">options</Typography> */}
    <Grid container spacing={2}>
      {options.map((option, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia>
              <Image src={option.image} height={200} width={400} alt={option.description} />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {option.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">{option.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </>
);

Options.propTypes = {
  options: PropTypes.array.isRequired,
};

export default Options;
