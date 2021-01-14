import {
  Card, CardHeader, Divider, List, ListItem, ListItemText, makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import {
  ExternalLink as ExternalLinkIcon,
  Folder as FolderIcon,
} from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingBottom: theme.spacing(3),
  },
  icon: {
    color: theme.palette.text.secondary,
  },
}));
const DocumentList = ({ documents, title }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader avatar={<FolderIcon />} title={title} />
      <Divider />
      <List>
        {documents.map((document) => (
          <ListItem
            key={document.name}
            button
            component="a"
          >
            <ListItemText primary={document.name} />
            <ExternalLinkIcon className={classes.icon} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

DocumentList.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
};

export default DocumentList;
