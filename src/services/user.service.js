import { Auth, API } from 'aws-amplify';

class UserService {
  apiName = 'UserApi';
  path = '/user';

  async create() {
    const myInit = {
      headers: {
        auth: `${await (await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
      body: {},
    };
    return API.post(this.apiName, this.path, myInit);
  }

  async get() {
    const auth = await (await Auth.currentSession()).getIdToken().getJwtToken();
    const myInit = {
      headers: {
        auth,
      },
    };
    return API.get(this.apiName, this.path, myInit);
  }

  async update(body) {
    const myInit = {
      headers: {
        auth: `${await (await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
      body,
    };
    return API.put(this.apiName, this.path, myInit);
  }

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
