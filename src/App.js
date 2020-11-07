import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home-page.js';
import SignUpPage from './pages/sign-up-page';
import SignInPage from './pages/sign-in-page';
import PrivacyPolicyPage from './pages/privacy-policy-page.js';
import TermsAndConditionsPage from './pages/terms-and-conditions-page';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicyPage />
          </Route>
          <Route path="/terms-and-conditions">
            <TermsAndConditionsPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
