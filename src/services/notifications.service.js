import { Auth, API } from 'aws-amplify';

class NotificationsService {
  apiName = 'UserApi';
  path = '/notification';

  async get() {
    const myInit = {
      headers: {
        Authorization: `${await (await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
      body: {
        notificationTypeID: 1,
      },
    };
    return API.post(this.apiName, this.path, myInit);
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
}

export default new NotificationsService();
