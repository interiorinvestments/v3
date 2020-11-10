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
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  tab: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    marginTop: theme.spacing(3),
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const StandardsView = ({ standards }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className={classes.root}>
      <Header title={standards.title} />
      <Grid sm={12} md={6}>
        <div className={classes.tab}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            {standards.products.map((product) => (
              <Tab label={product.name} key={product.name} />
            ))}
          </Tabs>
          {standards.products.map((product, index) => (
            <TabPanel value={value} index={index} key={product.name}>
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
