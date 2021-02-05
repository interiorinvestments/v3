import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FileText as FileTextIcon } from 'react-feather';

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

const Detail = ({ detail }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={detail.location} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {detail.documents.map((item) => (
            <ListItem button className={classes.nested} key={item.name}>
              <ListItemIcon>
                <FileTextIcon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}

        </List>
      </Collapse>
    </>
  );
};

Detail.propTypes = {
  detail: PropTypes.object.isRequired,
};

export default Detail;
