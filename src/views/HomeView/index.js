import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/organisms/Section';
import SectionAlternate from 'components/organisms/SectionAlternate';

import Advantages from './Advantages';
import {
  advantages,
} from './data';
import Hero from './Hero';
import Spaces from './Spaces';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));

const HomeView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      {/* <SectionAlternate>
        <Advantages data={advantages} />
      </SectionAlternate>
      <Divider />
      <Section>
        <Spaces />
      </Section> */}
    </div>
  );
};

export default HomeView;
