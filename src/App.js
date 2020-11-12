import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.css';

import { AuthContext } from './context/AuthContext';

import HomePage from './pages/home-page.js';
import SignUpPage from './pages/sign-up-page';
import SignInPage from './pages/sign-in-page';
import ForgotPasswordPage from './pages/forgot-password-page';
import ResetPasswordPage from './pages/reset-password-page';
import ForceChangePasswordPage from './pages/force-change-password-page';
import PrivacyPolicyPage from './pages/privacy-policy-page.js';
import TermsAndConditionsPage from './pages/terms-and-conditions-page';
import DashboardPage from './pages/dashboard-page';
import PrivateRoute from './pages/private-route';

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              isAuthenticated ? <Redirect to="/dashboard" /> : <HomePage />
            }
          />
          <Route path="/privacy-policy">
            <PrivacyPolicyPage />
          </Route>
          <Route path="/terms-and-conditions">
            <TermsAndConditionsPage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/forgot-password">
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password/:email">
            <ResetPasswordPage />
          </Route>
          <Route path="/change-password">
            <ForceChangePasswordPage />
          </Route>
          <PrivateRoute path="/dashboard" component={DashboardPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
