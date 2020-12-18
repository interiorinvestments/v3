/* eslint-disable max-len */
import {
  Card, CardActionArea, CardContent,
  CardMedia, Container, Grid, Typography,
} from '@material-ui/core';
import useScroll from 'hooks/useScroll';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const StandardsList = ({
  standards, setStandard, setOffsetTop, offsetTop,
}) => {
  const itemsRef = useRef([]);
  useScroll(offsetTop);
  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, standards.products.length);
  }, [standards.products]);
  return (
    <Container>
      <Typography variant="h1">{standards.title}</Typography>
      <Grid container spacing={4}>
        {standards.products.map((product, index) => (
          <Grid item key={product.image + product.name} xs={12} sm={6} md={4} ref={(el) => itemsRef.current[index] = el}>
            <Card>
              <CardActionArea onClick={() => { setStandard(product); setOffsetTop(itemsRef.current[index].offsetTop - 80); }}>
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
};

StandardsList.propTypes = {
  standards: PropTypes.object.isRequired,
  setStandard: PropTypes.func.isRequired,
  offsetTop: PropTypes.number,
  setOffsetTop: PropTypes.func.isRequired,
};

export default StandardsList;
