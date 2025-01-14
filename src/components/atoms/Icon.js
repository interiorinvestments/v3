import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {},
  extraSmall: {
    fontSize: 10,
  },
  small: {
    fontSize: 20,
  },
  medium: {
    fontSize: 30,
  },
  large: {
    fontSize: 40,
  },
}));

/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const Icon = (props) => {
  const {
    fontIconClass, size, fontIconColor, className, ...rest
  } = props;

  const classes = useStyles();

  return (
    <i
      className={clsx(
        'icon',
        classes.root,
        fontIconClass,
        classes[size],
        className,
      )}
      style={{ color: fontIconColor }}
      {...rest}
    />
  );
};

Icon.defaultProps = {
  size: 'small',
};

Icon.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * The classes of the font icon
   */
  fontIconClass: PropTypes.string.isRequired,
  /**
   * Source set for the responsive images
   */
  size: PropTypes.oneOf(['extraSmall', 'small', 'medium', 'large']),
  /**
   * Color of the icon
   */
  fontIconColor: PropTypes.string,
};

export default Icon;
