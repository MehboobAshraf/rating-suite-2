import { Auth } from 'aws-amplify';

class SignInService {
  signin({ email, password }) {
    return Auth.signIn(email, password);
  }

  forgotPassword({ email }) {
    return Auth.forgotPassword(email);
  }

  resetPassword({ email, password, code }) {
    const { forgotEmail, newPassword, forgotPasswordCode } = {
      email,
      password,
      code,
    };
    return Auth.forgotPasswordSubmit(
      forgotEmail,
      newPassword,
      forgotPasswordCode
    );
  }
}

export default new SignInService();
