import { Box, Container } from '@material-ui/core';

import { partners, team, team2 } from './data';
import Header from './Header';
import Partners from './Partners';
import Team from './Team';
import Team2 from './Team2';

const KeyContactsView = () => (
  <Container maxWidth={false}>
    <Header />
    <Box py={4}>
      <Team data={team} />
    </Box>
    <Team2 data={team2} />
    <Partners data={partners} />
  </Container>
);

export default KeyContactsView;
