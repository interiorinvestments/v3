import {
  Card, CardActionArea, CardContent,
  CardMedia, Container, Grid, makeStyles, Typography,
} from '@material-ui/core';
import Image from 'next/image';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const StandardsView = ({ standards }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h1">{standards.title}</Typography>
      <Grid container spacing={4}>
        {standards.products.map((product) => (
          <Grid item key={product} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia>
                  <Image src={product.image} height={300} width={550} />
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="subtitle1" component="h2" color="textPrimary">
                    {product.code}
                  </Typography>
                  <Typography color="primary" display="inline" variant="body1">
                    {product.manufacturer}
                  </Typography>
                  <Typography color="textSecondary" display="inline" variant="body1">
                    {' '}
                    -
                    {' '}
                    {product.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

StandardsView.propTypes = {
  standards: PropTypes.object.isRequired,
};

export default StandardsView;
