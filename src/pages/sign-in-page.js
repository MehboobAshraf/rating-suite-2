import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';

import SignInPageContainerComponent from '../components/home-page-components/sign-in-page-container.component';
import SignInFormComponent from '../components/home-page-components/sign-in-form.component';

import SignInService from '../services/sign-in.service';

import { AuthContext } from '../context/AuthContext';

const SignInPage = withRouter(({ history }) => {
  const { setLoggedInUser, setIsAuthenticated } = useContext(AuthContext);

  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (user) => {
    setLoading(true);
    try {
      const response = await SignInService.signin(user);
      setLoggedInUser(response);
      setIsAuthenticated(true);
      setLoading(false);
      if (
        response &&
        response.challengeName &&
        response.challengeName === 'NEW_PASSWORD_REQUIRED'
      ) {
        history.push('/change-password');
      } else {
        history.push('/dashboard');
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  };

  return (
    <SignInPageContainerComponent>
      <SignInFormComponent
        onSubmit={onSubmit}
        isLoading={isLoading}
        errorMessage={errorMessage}
      ></SignInFormComponent>
    </SignInPageContainerComponent>
  );
});

export default SignInPage;
