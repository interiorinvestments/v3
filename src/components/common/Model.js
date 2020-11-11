import '@google/model-viewer';

import Proptypes from 'prop-types';

const Model = ({ product }) => (
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
Model.propTypes = {
  product: Proptypes.object,
};

export default Model;
