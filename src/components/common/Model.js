import '@google/model-viewer';

import { makeStyles } from '@material-ui/core';
import Proptypes from 'prop-types';

const useStyles = makeStyles({
  model: {
    height: 200,
    width: 400,
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
      style={{ width: '400px', height: '300px' }}
    />
  );
};
Model.propTypes = {
  product: Proptypes.object,
};

export default Model;
