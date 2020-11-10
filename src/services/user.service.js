import { Auth, API } from 'aws-amplify';

class UserService {
  apiName = 'UserApi';
  path = '/user';

  async delete() {
    const myInit = {
      headers: {
        auth: `${await (await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
    };
    return API.del(this.apiName, this.path, myInit);
  }
}

export default new UserService();
