import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Page = (({
  children,
  title = '',
  ...rest
}) => (
  <div
    {...rest}
  >
    <Helmet>
      <title>{`${title} | Interior Investments`}</title>
    </Helmet>
    {children}
  </div>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
