import { Auth } from 'aws-amplify';

class SignUpService {
  signup({ username, company, email, password }) {
    return Auth.signUp({
      name: username,
      username: email,
      password: password,
      organisation: company,
      attributes: {
        email: email,
      },
    });
  }
}

export default new SignUpService();
