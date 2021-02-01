import { Box, Container, Grid } from '@material-ui/core';
import dynamic from 'next/dynamic';

import { team, team2 } from './data';
import Header from './Header';
import Team from './Team';
import Team2 from './Team2';

const OrgChart = dynamic(() => import('./OrgChart'), {
  ssr: false,
});

const KeyContactsView = () => (
  <Container maxWidth="lg">
    <Header />
    <OrgChart />
    <Grid container direction="row" spacing={1}>

      <Grid item xs={12} sm={12} md={4}>
        <Box py={4}>
          <Team2 data={team2} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <Box py={4}>
          <Team data={team} />
        </Box>
      </Grid>
    </Grid>

  </Container>
);

export default KeyContactsView;
