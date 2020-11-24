import { Box, Container } from '@material-ui/core';
import dynamic from 'next/dynamic';

import { partners, team } from './data';
import Header from './Header';
import Partners from './Partners';
import Team from './Team';

const OrgChart = dynamic(() => import('./OrgChart'), {
  ssr: false,
});

const KeyContactsView = () => (
  <Container maxWidth={false}>
    <Header />
    <OrgChart />
    <Box py={4}>
      <Team data={team} />
    </Box>
    <Partners data={partners} />
  </Container>
);

export default KeyContactsView;
