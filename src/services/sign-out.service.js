import { Auth } from 'aws-amplify';

class SignoutService {
  signout() {
    return Auth.signOut();
  }
}

export default new SignoutService();
