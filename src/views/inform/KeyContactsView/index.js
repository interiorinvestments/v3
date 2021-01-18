import { Box, Container } from '@material-ui/core';
import dynamic from 'next/dynamic';

import { team } from './data';
import Header from './Header';
import Team from './Team';

const OrgChart = dynamic(() => import('./OrgChart'), {
  ssr: false,
});

const KeyContactsView = () => (
  <Container maxWidth="lg">
    <Header />
    <OrgChart />
    <Box py={4}>
      <Team data={team} />
    </Box>
  </Container>
);

export default KeyContactsView;
