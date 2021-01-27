import { Container, Grid } from '@material-ui/core';
import DocumentList from 'components/common/DocumentList';

import Header from './Header';

const documentPath = '/docs/warranty/';

const careAndMaintenance = [
  {
    name: 'Textiles Care and Maintenance',
    url: `${documentPath}textilesCM.pdf`,
  },
  {
    name: 'Veneer Care and Maintenance',
    url: `${documentPath}veneerCM.pdf`,
  },
];

const seatingAdjustments = [
  {
    name: 'Aeron Chair',
    url: `${documentPath}aeronchair.pdf`,
  },
  {
    name: 'Meda Chair',
    url: `${documentPath}medachair.pdf`,
  },
  {
    name: 'Setu Chair',
    url: `${documentPath}setuchair.pdf`,
  },
];

const warrantyInformation = [
  {
    name: 'Aceray',
    url: `${documentPath}aceray.pdf`,
  },
  {
    name: 'Aurora',
    url: `${documentPath}aurora.pdf`,
  },
  {
    name: 'Andreu World America',
    url: `${documentPath}awa.pdf`,
  },
  {
    name: 'Bernhardt',
    url: `${documentPath}bernhardt.pdf`,
  },
  {
    name: 'Blu Dot',
    url: `${documentPath}bludot.pdf`,
  },
  {
    name: 'Camerich',
    url: `${documentPath}camerich.pdf`,
  },
  {
    name: 'COR',
    url: `${documentPath}cor.pdf`,
  },
  {
    name: 'Davis',
    url: `${documentPath}davis.pdf`,
  },
  {
    name: 'Geiger',
    url: `${documentPath}geiger.pdf`,
  },
  {
    name: 'Hickory Business Furniture',
    url: `${documentPath}hbf.pdf`,
  },
  {
    name: 'Herman Miller',
    url: `${documentPath}hermanmiller.pdf`,
  },
  {
    name: 'Interstuhl',
    url: `${documentPath}interstuhl.pdf`,
  },
  {
    name: 'Mayline',
    url: `${documentPath}mayline.pdf`,
  },
  {
    name: 'National',
    url: `${documentPath}national.pdf`,
  },
  {
    name: 'Symphony',
    url: `${documentPath}symphony.pdf`,
  },
  {
    name: 'Chai Ming',
    url: `${documentPath}chaiming.pdf`,
  },
  {
    name: 'Tuohy',
    url: `${documentPath}tuohy.pdf`,
  },
  {
    name: 'Wilkahn',
    url: `${documentPath}wilkahn.pdf`,
  },
  {
    name: 'Summary',
    url: `${documentPath}summary.pdf`,
  },
];
const CareAndMaintenanceView = () => (
  <Container>
    <Header />
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={3}>
        <DocumentList documents={careAndMaintenance} title="Care and Maintenance" />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <DocumentList documents={seatingAdjustments} title="Seating Adjustments" />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <DocumentList documents={warrantyInformation} title="Warranty Information" />
      </Grid>
    </Grid>

  </Container>
);

export default CareAndMaintenanceView;
