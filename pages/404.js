import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import Link from 'components/common/Link';
import Page from 'components/common/Page';
import DashboardLayout from 'layouts/DashboardLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    paddingTop: 80,
    paddingBottom: 80,
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto',
  },
}));

const Custom404 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <DashboardLayout>
      <Page className={classes.root} title="404: Not found">
        <Container maxWidth="lg">
          <Typography
            align="center"
            variant={mobileDevice ? 'h4' : 'h1'}
            color="textPrimary"
          >
            404: The page you are looking for isn’t here
          </Typography>
          <Typography align="center" variant="subtitle2" color="textSecondary">
            You may have mistyped the address or the page may have moved.
          </Typography>
          <Box mt={6} display="flex" justifyContent="center">
            <img
              alt="Under development"
              className={classes.image}
              src="/img/shapes/undraw_page_not_found_su7k.svg"
            />
          </Box>
          <Box mt={6} display="flex" justifyContent="center">
            <Button
              color="secondary"
              component={Link}
              href="/"
              variant="outlined"
              naked
            >
              Back to home
            </Button>
          </Box>
        </Container>
      </Page>
    </DashboardLayout>
  );
};

export default Custom404;
