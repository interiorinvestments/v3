import '@google/model-viewer';

import { makeStyles } from '@material-ui/core';
import Proptypes from 'prop-types';

const useStyles = makeStyles({
  model: {
    height: 'auto',
    width: '100%',
  },
});

const Model = ({ product }) => {
  const classes = useStyles();
  return (
    <model-viewer
      src={product.glb}
      ios-src={product.usdz}
      alt={product.name}
      ar
      auto-rotate
      auto-rotate-delay
      camera-controls
      className={classes.model}
    />
  );
};
Model.propTypes = {
  product: Proptypes.object,
};

export default Model;
