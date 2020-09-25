import { Box, Container } from '@material-ui/core';

import { team, team2 } from './data';
import Header from './Header';
import Team from './Team';
import Team2 from './Team2';

const KeyContactsView = () => (
  <Container maxWidth={false}>
    <Header />
    <Box py={4}>
      <Team data={team} />
    </Box>
    <Team2 data={team2} />
  </Container>
);

export default KeyContactsView;
