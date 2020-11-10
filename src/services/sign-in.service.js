import { Auth } from 'aws-amplify';

class SignInService {
  signin({ email, password }) {
    return Auth.signIn(email, password);
  }

  forgotPassword({ email }) {
    return Auth.forgotPassword(email);
  }

  resetPassword({
    email: forgotEmail,
    password: newPassword,
    code: forgotPasswordCode,
  }) {
    return Auth.forgotPasswordSubmit(
      forgotEmail,
      forgotPasswordCode,
      newPassword
    );
  }

  async forcePasswordChange({ loggedInUser, newPassword }) {
    return Auth.completeNewPassword(loggedInUser, newPassword);
  }
}

export default new SignInService();
