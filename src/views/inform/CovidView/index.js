import {
  Box, Button, Container, Typography,
} from '@material-ui/core';
import Link from 'components/common/Link';
import Image from 'next/image';

const CovidView = () => (
  <>
    <Box mb={4}>
      <Container maxWidth="md">
        <Typography
          align="left"
          variant="h1"
          color="textPrimary"
        >
          Solutions For Returning To The Physical Workplace
        </Typography>
        <Box mt={3}>
          <Typography
            align="left"
            variant="subtitle1"
            color="textSecondary"
          >
            These are incredibly difficult and uncertain times for everyone. We understand the challenges you are facing because we are experiencing them too. We are continuously researching, learning and implementing new ways and ideas to help our customers feel safe and when they return to work.
          </Typography>
        </Box>
        <Box my={2}>
          <Button variant="contained" color="primary" as={Link} href="https://scout.atlasdigitalsuite.com/ProjectViewer/41aaf5cb-0ac3-dab5-2918-8cf8aef7d96a/b753a3ce-2942-4dd7-bcb0-4b350d31d350" target="_blank">View</Button>
        </Box>
        <Image src="/img/inform/covid/returntowork.jpg" alt="return to work" height={1000} width={2000} />
      </Container>
    </Box>
    <Box mt={4}>
      <Container maxWidth="md">
        <Typography
          align="left"
          variant="h1"
          color="textPrimary"
        >
          Work from Home
        </Typography>
        <Box mt={3}>
          <Typography
            align="left"
            variant="subtitle1"
            color="textSecondary"
          >
            We have confidence that we will get past this and will come out more unified, stronger, smarter, compassionate and grateful. We continue to focus on what we have always done well; build strong relationships by being a valuable and trusted resource. We put people first. It is people that give us purpose in everything we do, people are our most valuable asset.
          </Typography>
        </Box>
        <Box my={2}>
          <Button variant="contained" color="primary" as={Link} href="https://scout.atlasdigitalsuite.com/ProjectViewer/b3023292-6dfb-2a10-9b18-b1f1dff7e5e4/b753a3ce-2942-4dd7-bcb0-4b350d31d350" target="_blank">View</Button>
        </Box>
        <Image src="/img/inform/covid/workfromhome.jpg" alt="return to work" height={1000} width={2000} />
      </Container>
    </Box>
  </>
);

export default CovidView;
