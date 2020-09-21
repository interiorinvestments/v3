import Page from 'components/common/Page';
import MinimalLayout from 'layouts/MinimalLayout';
import LoginView from 'views/LoginView';

const LoginPage = () => (
  <MinimalLayout>
    <Page title="Log In">
      <LoginView />
    </Page>
  </MinimalLayout>
);

export default LoginPage;
