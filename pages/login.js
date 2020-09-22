import Page from 'components/common/Page';
import MinimalLayout from 'layouts/MinimalLayout';
import { useUser } from 'lib/hooks';
import LoginView from 'views/LoginView';

const LoginPage = () => {
  useUser({ redirectTo: '/', redirectIfFound: true });

  return (
    <MinimalLayout>
      <Page title="Log In">
        <LoginView />
      </Page>
    </MinimalLayout>
  );
};

export default LoginPage;
