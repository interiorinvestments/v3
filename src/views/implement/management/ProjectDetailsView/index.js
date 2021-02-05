import { Container, Grid } from '@material-ui/core';
import DocumentList from 'components/common/DocumentList';

import DetailsList from './DetailsList';
import Header from './Header';

const documentPath = '/docs/warranty/';

const installDocuments = [
  {

    name: 'Installs 36th Floor',
    url: `${documentPath}install36.pdf`,
  },
  {
    name: 'Installs 37th Floor',
    url: `${documentPath}install37.pdf`,
  },
  {
    name: 'Installs 38th Floor',
    url: `${documentPath}install38.pdf`,
  },
  {

    name: 'Installs 39th Floor',
    url: `${documentPath}install39.pdf`,
  },
  {
    name: 'Installs 40th Floor',
    url: `${documentPath}install40.pdf`,
  },
  {
    name: 'Installs 41st Floor',
    url: `${documentPath}install41.pdf`,
  },
  {

    name: 'Installs 42nd Floor',
    url: `${documentPath}install42.pdf`,
  },
  {

    name: 'Installs 43rd Floor',
    url: `${documentPath}install43.pdf`,
  },
  {

    name: 'Secretary',
    url: `${documentPath}secretary.pdf`,
  },
  {

    name: 'Aeron Chair List',
    url: `${documentPath}aeronchairlist.pdf`,
  },
];

const PROJECT_DETAILS = [
  {
    location: 'Chicago',
    documents: [
      {
        name: 'Installs 41st Floor',
        url: `${documentPath}install41.pdf`,
      },
      {

        name: 'Installs 42nd Floor',
        url: `${documentPath}install42.pdf`,
      },
      {

        name: 'Installs 43rd Floor',
        url: `${documentPath}install43.pdf`,
      },
      {

        name: 'Secretary',
        url: `${documentPath}secretary.pdf`,
      },
      {

        name: 'Aeron Chair List',
        url: `${documentPath}aeronchairlist.pdf`,
      },
    ],
  },
  {
    location: 'Dallas',
    documents: [
      {
        name: 'Installs 41st Floor',
        url: `${documentPath}install41.pdf`,
      },
      {

        name: 'Installs 42nd Floor',
        url: `${documentPath}install42.pdf`,
      },
      {

        name: 'Installs 43rd Floor',
        url: `${documentPath}install43.pdf`,
      },
      {

        name: 'Secretary',
        url: `${documentPath}secretary.pdf`,
      },
      {

        name: 'Aeron Chair List',
        url: `${documentPath}aeronchairlist.pdf`,
      },
    ],
  },
  {
    location: 'Vernon HIlls',
    documents: [
      {
        name: 'Installs 41st Floor',
        url: `${documentPath}install41.pdf`,
      },
      {

        name: 'Installs 42nd Floor',
        url: `${documentPath}install42.pdf`,
      },
      {

        name: 'Installs 43rd Floor',
        url: `${documentPath}install43.pdf`,
      },
      {

        name: 'Secretary',
        url: `${documentPath}secretary.pdf`,
      },
      {

        name: 'Aeron Chair List',
        url: `${documentPath}aeronchairlist.pdf`,
      },
    ],
  },
];

const CareAndMaintenanceView = () => (
  <Container>
    <Header />
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={3}>
        <DetailsList details={PROJECT_DETAILS} />
      </Grid>
    </Grid>

  </Container>
);

export default CareAndMaintenanceView;
