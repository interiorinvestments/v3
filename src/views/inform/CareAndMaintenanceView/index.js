import { Container, Grid } from '@material-ui/core';
import DocumentList from 'components/common/DocumentList';

import Header from './Header';

const documents = [
  {

    name: 'chair',
    url: '/tiesto',
  },
  {
    name: 'table',
    url: '/world',
  },
  {
    name: 'desk',
    url: '/asdfasdf',
  },
];
const documents2 = [
  {

    name: 'chair',
    url: '/tiesto',
  },
  {
    name: 'table',
    url: '/world',
  },
  {
    name: 'desk',
    url: '/asdfasdf',
  },
  {

    name: 'chair',
    url: '/tiesto',
  },
  {
    name: 'table',
    url: '/world',
  },
  {
    name: 'desk',
    url: '/asdfasdf',
  },
  {

    name: 'chair',
    url: '/tiesto',
  },
  {
    name: 'table',
    url: '/world',
  },
  {
    name: 'desk',
    url: '/asdfasdf',
  },
];

const CareAndMaintenanceView = () => (
  <Container>
    <Header />
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <DocumentList documents={documents} title="Warranty" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DocumentList documents={documents2} title="Maintenance" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DocumentList documents={documents} title="Care" />
      </Grid>
    </Grid>

  </Container>
);

export default CareAndMaintenanceView;
