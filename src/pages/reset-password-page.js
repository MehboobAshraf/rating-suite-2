import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useParams } from 'react-router';

import SignInPageContainerComponent from '../components/home-page-components/sign-in-page-container.component';
import ResetPasswordFormComponent from '../components/home-page-components/reset-password-form.component';

import SignInService from '../services/sign-in.service';

const ResetPasswordPage = withRouter(({ history }) => {
  const { email } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [passwordResetEmail] = useState(email);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onResetPassword = async (data) => {
    setLoading(true);
    try {
      const response = await SignInService.resetPassword(data);
      setShowSuccessMessage(true);
      console.log('Password Reset Successfully', response);
    } catch (e) {
      setErrorMessage(e.message);
    }
    setLoading(false);
  };

  return (
    <SignInPageContainerComponent>
      <ResetPasswordFormComponent
        onResetPassword={onResetPassword}
        passwordResetEmail={passwordResetEmail}
        isLoading={isLoading}
        errorMessage={errorMessage}
        showSuccessMessage={showSuccessMessage}
      ></ResetPasswordFormComponent>
    </SignInPageContainerComponent>
  );
});

export default ResetPasswordPage;
