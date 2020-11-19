import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Page = (({
  children,
  title = '',
  ...rest
}) => (
  <div
    {...rest}
  >
    <Helmet>
      <title>{title ? `${title} | Interior Investments` : 'Interior Investments'}</title>
    </Helmet>
    {children}
  </div>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
