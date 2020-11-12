import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import SignInPageContainerComponent from '../components/home-page-components/sign-in-page-container.component';
import SignInFormComponent from '../components/home-page-components/sign-in-form.component';

import SignInService from '../services/sign-in.service';
import UserService from '../services/user.service';
import HelperService from '../services/helper.service';

import { AuthContext } from '../context/AuthContext';

const SignInPage = withRouter(({ history }) => {
  // // Is the page coming from sign up page after successful sign up
  const signedUpSuccess = HelperService.useQuery().get('signedUpSuccess');
  const { setLoggedInUser, setIsAuthenticated } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [signedUpSuccessMessage, setSignedUpSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (signedUpSuccess) {
      setSignedUpSuccessMessage(
        `You have registered a new account successfully. Please verify your account by clicking the link we have sent you on your email address and then sign in.`
      );
    }
  }, [signedUpSuccess]);

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
        createUser();
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  };

  const createUser = async () => {
    try {
      await UserService.create();
      history.push('/dashboard');
    } catch (e) {
      console.log(e);
      history.push('/dashboard');
    }
  };

  return (
    <SignInPageContainerComponent>
      <SignInFormComponent
        onSubmit={onSubmit}
        isLoading={isLoading}
        signedUpSuccessMessage={signedUpSuccessMessage}
        errorMessage={errorMessage}
      ></SignInFormComponent>
    </SignInPageContainerComponent>
  );
});

export default SignInPage;
