import { Auth } from 'aws-amplify';

class SignUpService {
  signup({ name, organization, email, password }) {
    return Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email: email,
        'custom:name': name,
        'custom:Organization': organization,
      },
    });
  }
}

export default new SignUpService();
