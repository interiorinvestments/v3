import { useState } from 'react';
import {
  Card, Container, Grid, Tab, Tabs,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Page from 'components/common/Page';
import PropTypes from 'prop-types';

import Header from './Header';
import ProposalInfo from './ProposalInfo';
import ProposalTable from './ProposalTable';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const ProposalsView = ({ proposals }) => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState('All');
  const [proposal, setProposal] = useState(false);
  const tabs = ['All', 'Open', 'Acknowledged', 'Invoiced', 'Closed'];
  // eslint-disable-next-line no-shadow
  const filteredProposals = proposals?.filter((proposal) => {
    if (currentTab === 'All') {
      return proposal;
    }
    return proposal.status === currentTab;
  });

  return (
    <Page className={classes.root} title="Proposals">
      <Container maxWidth={false}>
        <Header />
        {proposal ? (
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <ProposalInfo proposal={proposal} setProposal={setProposal} />
          </Grid>
        ) : (
          <Card>
            <Tabs
              onChange={(e, value) => setCurrentTab(value)}
              scrollButtons="auto"
              textColor="secondary"
              value={currentTab}
              variant="scrollable"
            >
              {tabs.map((tab) => (
                <Tab key={tab} value={tab} label={tab} />
              ))}
            </Tabs>
            <ProposalTable data={filteredProposals} setProposal={setProposal} />
          </Card>
        )}
      </Container>
    </Page>
  );
};

ProposalsView.propTypes = {
  proposals: PropTypes.array.isRequired,
};

export default ProposalsView;
