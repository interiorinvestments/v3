import '@google/model-viewer';

import Proptypes from 'prop-types';

const Model = ({ model }) => (
  <model-viewer
    src={model.glb}
    ios-src={model.usdz}
    alt={model.name}
    ar
    auto-rotate
    auto-rotate-delay
    camera-controls
    style={{
      height: '80%', minHeight: '300px', width: '100%',
    }}
  />
);
Model.propTypes = {
  model: Proptypes.object,
};

export default Model;
