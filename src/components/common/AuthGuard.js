import LoadingScreen from 'components/common/LoadingScreen';
import { useUser } from 'lib/hooks';
import PropTypes from 'prop-types';

const AuthGuard = ({ children }) => {
  const user = useUser({ redirectTo: '/login' });

  return (
    <>
      {user ? children : (<LoadingScreen />)}
    </>
  );
};

AuthGuard.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AuthGuard;
