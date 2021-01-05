import {
  Box, Card, CardActionArea, CardContent,
  CardMedia, Container, Grid, Hidden, makeStyles, Typography,
} from '@material-ui/core';
import Link from 'components/common/Link';
import Image from 'next/image';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  model: {
    width: '100%',
    height: '100%',
  },
}));

const FloorplanView = ({ floorplan }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item>
          <Typography variant="h3" color="textPrimary">{floorplan.title}</Typography>
          <Image src={floorplan.image} height={550} width={1100} alt="floorplan" />
          <Typography variant="body1" color="textPrimary">{floorplan.description}</Typography>
          <Hidden smUp>
            <Box my={4} />
          </Hidden>
        </Grid>
        <Grid item>
          <>
            <Typography variant="h4" color="textPrimary">Spaces</Typography>
            <Grid container spacing={2}>
              {floorplan.areas.map((standard) => (
                <Grid item xs={12} sm={6} md={2} key={standard.name}>
                  <Card style={{ backgroundColor: standard.color }}>
                    <CardActionArea component={Link} href={standard.href} naked>
                      <CardMedia>
                        <Image src={standard.image} height={300} width={500} alt={standard.name} />
                      </CardMedia>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                          {standard.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{standard.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        </Grid>
      </Grid>
    </Container>
  );
};

FloorplanView.propTypes = {
  floorplan: PropTypes.object.isRequired,
};

export default FloorplanView;
