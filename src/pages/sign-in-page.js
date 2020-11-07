import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import SignInPageContainerComponent from '../components/home-page-components/sign-in-page-container.component';
import SignInFormComponent from '../components/home-page-components/sign-in-form.component';
import ForgotPasswordFormComponent from '../components/home-page-components/forgot-password-form.component';
import ResetPasswordFormComponent from '../components/home-page-components/reset-password-form.component';

import SignInService from '../services/sign-in.service';

const SignInPage = withRouter(({ history }) => {
  const [isLoading, setLoading] = useState(false);
  //types of forms: signin, forgotpassword, resetpassword
  const [formType, setFormType] = useState('signin');
  const [passwordResetEmail, setPasswordResetEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (user) => {
    setLoading(true);
    try {
      await SignInService.signin(user);
      history.push('/dashboard');
    } catch (e) {
      setErrorMessage(e.message);
    }
    setLoading(false);
  };

  const onForgotPassword = async (user) => {
    setLoading(true);
    try {
      await SignInService.forgotPassword(user);
      setPasswordResetEmail(user.email);
      setFormType('resetpassword');
    } catch (e) {
      setErrorMessage(e.message);
    }
    setLoading(false);
  };

  const onResetPassword = async (data) => {
    setLoading(true);
    try {
      await SignInService.resetPassword(data);
      setPasswordResetEmail('');
      setFormType('signin');
    } catch (e) {
      setErrorMessage(e.message);
    }
    setLoading(false);
  };

  const onOpenForgotPasswordForm = () => {
    setFormType('forgotpassword');
  };

  const onOpenSignInForm = () => {
    setFormType('signin');
  };

  return (
    <SignInPageContainerComponent>
      {formType === 'signin' ? (
        <SignInFormComponent
          onSubmit={onSubmit}
          isLoading={isLoading}
          errorMessage={errorMessage}
          onOpenForgotPasswordForm={onOpenForgotPasswordForm}
        ></SignInFormComponent>
      ) : (
        ''
      )}
      {formType === 'forgotpassword' ? (
        <ForgotPasswordFormComponent
          onForgotPassword={onForgotPassword}
          isLoading={isLoading}
          errorMessage={errorMessage}
          onOpenSignInForm={onOpenSignInForm}
        ></ForgotPasswordFormComponent>
      ) : (
        ''
      )}
      {formType === 'resetpassword' ? (
        <ResetPasswordFormComponent
          onResetPassword={onResetPassword}
          passwordResetEmail={passwordResetEmail}
          isLoading={isLoading}
          errorMessage={errorMessage}
        ></ResetPasswordFormComponent>
      ) : (
        ''
      )}
    </SignInPageContainerComponent>
  );
});

export default SignInPage;
