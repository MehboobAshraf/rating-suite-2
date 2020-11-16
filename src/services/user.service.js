import { Auth, API } from 'aws-amplify';

class UserService {
  apiName = 'UserApi';
  path = '/user';

  async create() {
    const myInit = {
      headers: {
        Authorization: `${await (await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
    };
    return API.post(this.apiName, this.path, myInit);
  }

  async get() {
    const myInit = {
      headers: {
        Authorization: `${await (await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
    };
    return API.get(this.apiName, this.path, myInit);
  }

  async update(body) {
    const myInit = {
      headers: {
        Authorization: `${await (await Auth.currentSession())
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
        Authorization: `${await (await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
    };
    return API.del(this.apiName, this.path, myInit);
  }
}

export default new UserService();
