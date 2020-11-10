/* eslint-disable react/forbid-prop-types */
import { useState } from 'react';
import {
  Box, Container, Grid,
  makeStyles, Tab, Tabs, Typography,
} from '@material-ui/core';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

import Header from './Header';

const Dynamic = dynamic(() => import('components/common/Model'), { ssr: false });

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  // tabPanel: {

  //   backgroundColor: theme.palette.background.paper,
  // },
  // tabs: {
  //   backgroundColor: theme.palette.background.paper,
  // },
}));

const StandardsView = ({ standards }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className={classes.container}>
      <Header title={standards.title} />
      <Grid sm={8} md={6}>
        <div className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabs}
            variant="scrollable"
          >
            {standards.products.map((product) => (
              <Tab label={product.name} key={product.name} className={classes.tab} />
            ))}
          </Tabs>
          {standards.products.map((product, index) => (
            <TabPanel value={value} index={index} className={classes.tabPanel}>
              <Dynamic product={product} />
            </TabPanel>

          ))}
        </div>
      </Grid>
    </Container>
  );
};

StandardsView.propTypes = {
  standards: PropTypes.object,
};

export default StandardsView;
