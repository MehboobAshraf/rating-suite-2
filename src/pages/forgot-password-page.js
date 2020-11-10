import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import SignInPageContainerComponent from '../components/home-page-components/sign-in-page-container.component';
import ForgotPasswordFormComponent from '../components/home-page-components/forgot-password-form.component';

import SignInService from '../services/sign-in.service';

const ForgotPasswordPage = withRouter(({ history }) => {
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onForgotPassword = async (user) => {
    setLoading(true);
    try {
      await SignInService.forgotPassword(user);
      history.push(`/reset-password/${user.email}`);
    } catch (e) {
      setErrorMessage(e.message);
    }
    setLoading(false);
  };

  return (
    <SignInPageContainerComponent>
      <ForgotPasswordFormComponent
        onForgotPassword={onForgotPassword}
        isLoading={isLoading}
        errorMessage={errorMessage}
      ></ForgotPasswordFormComponent>
    </SignInPageContainerComponent>
  );
});

export default ForgotPasswordPage;
