import {
  Card, CardActionArea, CardContent,
  CardMedia, Container, Grid, Typography,
} from '@material-ui/core';
import Image from 'next/image';
import PropTypes from 'prop-types';

const StandardsList = ({ standards, setStandard }) => (
  <Container>
    <Typography variant="h1">{standards.title}</Typography>
    <Grid container spacing={4}>
      {standards.products.map((product) => (
        <Grid item key={product.image + product.name} xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea onClick={() => setStandard(product)}>
              <CardMedia>
                <Image src={product.image} height={300} width={550} alt={product.name} />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="h2" color="textPrimary">
                  {product.code}
                  {' '}
                  |
                  {' '}
                  {product.name}
                </Typography>
                <Typography color="primary" display="inline" variant="body1">
                  {product.manufacturer}
                </Typography>
                <Typography color="textSecondary" display="inline" variant="body1">
                  {' '}
                  -
                  {' '}
                  {product.collection}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

StandardsList.propTypes = {
  standards: PropTypes.object.isRequired,
  setStandard: PropTypes.func.isRequired,
};

export default StandardsList;
