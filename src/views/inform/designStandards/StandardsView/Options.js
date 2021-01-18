import {
  Card, CardContent, CardMedia, Grid, Typography,
} from '@material-ui/core';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Options = ({ options }) => (
  <>
    <Grid container spacing={2}>
      {options.map((option, index) => (
        <Grid item xs={12} sm={6} md={4} key={option.description + index}>
          <Card>
            <CardMedia>
              <Image src={option.image} height={100} width={300} alt={option.description} />
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
