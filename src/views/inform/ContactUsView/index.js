import { Container } from '@material-ui/core';
import CardBase from 'components/organisms/CardBase';

import ContactUsForm from './ContactUsForm';

const ContactUsView = () => (
  <Container>
    <CardBase withShadow align="left">
      <ContactUsForm />
    </CardBase>
  </Container>
);

export default ContactUsView;
