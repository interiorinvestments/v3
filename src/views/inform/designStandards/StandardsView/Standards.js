import {
  Card, CardContent,
  CardMedia, Grid,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Standards = ({ standards }) => (
  <>
    <Typography variant="h4" color="textPrimary">standards</Typography>
    <Grid container spacing={2}>

      {standards.map((standard, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card style={{ backgroundColor: standard.color }}>
            <CardMedia>
              {standard.image ? (
                <Image src={standard.image} height={200} width={400} alt={standard.description} />
              ) : (
                <div style={{
                  backgroundColor: standard.color, color: standard.color, width: '100%', height: 'auto',
                }}
                />
              )}
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {standard.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">{standard.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </>
);

Standards.propTypes = {
  standards: PropTypes.array.isRequired,
};

export default Standards;
