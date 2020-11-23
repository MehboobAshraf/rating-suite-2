import { useContext } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import '../App.css';

import { AuthContext } from '../context/AuthContext';

import HomePage from '../pages/home-page.js';
import SignUpPage from '../pages/sign-up-page';
import SignInPage from '../pages/sign-in-page';
import ForgotPasswordPage from '../pages/forgot-password-page';
import ResetPasswordPage from '../pages/reset-password-page';
import ForceChangePasswordPage from '../pages/force-change-password-page';
import PrivacyPolicyPage from '../pages/privacy-policy-page.js';
import TermsAndConditionsPage from '../pages/terms-and-conditions-page';
import DashboardPage from '../pages/dashboard-page';
import PrivateRoute from '../pages/private-route';

const Routes = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              isAuthenticated ? <Redirect to="/dashboard" /> : <HomePage />
            }
          />
          <Route path="/privacy">
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
    );
}

export default Routes;