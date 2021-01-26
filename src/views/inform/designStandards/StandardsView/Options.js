import {
  Card, CardContent, CardMedia, Grid, Typography,
} from '@material-ui/core';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Options = ({ options, setDetail, floorplan }) => (
  <>
    <Grid container spacing={2}>
      {options.map((option, index) => (
        <Grid item xs={6} sm={4} md={3} key={option.description + index}>
          <Card onMouseEnter={() => setDetail(option.image)} onMouseLeave={() => setDetail(floorplan)}>
            <CardMedia>
              <Image src={option.image} height={300} width={500} alt={option.description} />
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
  setDetail: PropTypes.func.isRequired,
  floorplan: PropTypes.string,
};

export default Options;
