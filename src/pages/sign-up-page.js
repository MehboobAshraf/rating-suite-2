import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import SignUpPageContainerComponent from '../components/home-page-components/sign-up-page-container.component';
import SignUpFormComponent from '../components/home-page-components/sign-up-form.component';

import SignUpService from '../services/sign-up.service';

const SignUpPage = withRouter(({ history }) => {
  const [isLoading, setLoading] = useState(false);
  const [signedUpSuccessMessage, setSignedUpSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (user) => {
    setLoading(true);
    try {
      await SignUpService.signup(user);
      setSignedUpSuccessMessage(
        `You have registered a new account successfully. Please verify your account by clicking the link we have sent you on your email address.`
      );
      history.push('/signin');
    } catch (e) {
      setErrorMessage(e.message);
    }
    setLoading(false);
  };

  return (
    <SignUpPageContainerComponent>
      <SignUpFormComponent
        onSubmit={onSubmit}
        isLoading={isLoading}
        signedUpSuccessMessage={signedUpSuccessMessage}
        errorMessage={errorMessage}
      ></SignUpFormComponent>
    </SignUpPageContainerComponent>
  );
});

export default SignUpPage;
