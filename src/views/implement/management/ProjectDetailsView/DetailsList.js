import {
  Divider, List, ListSubheader, makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import Detail from './Detail';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const DetailsList = ({ details }) => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={(
        <ListSubheader component="div" id="nested-list-subheader">
          Project Logs
        </ListSubheader>
      )}
      className={classes.root}
    >
      <Divider />
      {details.map((detail, index) => (
        <Detail detail={detail} key={index} />
      ))}
    </List>
  );
};

DetailsList.propTypes = {
  details: PropTypes.array.isRequired,
};

export default DetailsList;
