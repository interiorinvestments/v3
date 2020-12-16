import {
  Card, CardContent, CardMedia, Grid, Typography,
} from '@material-ui/core';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Finishes = ({ finishes }) => (
  <>
    <Typography variant="h4" color="textPrimary">Finishes</Typography>
    <Grid container spacing={2}>

      {finishes.map((finish, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia>
              <Image src={finish.image} height={200} width={400} alt={finish.description} />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {finish.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">{finish.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </>
);

Finishes.propTypes = {
  finishes: PropTypes.array.isRequired,
};

export default Finishes;
