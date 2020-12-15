import { Auth, API } from 'aws-amplify';

class ProductService {
    apiName = 'UserApi';
    path = '/subscription';
    async create(body) {
        const myInit = {
            headers: {
            Authorization: `${await (await Auth.currentSession())
                .getIdToken()
                .getJwtToken()}`,
            },
            productAlias: body
        };
        console.log('body', body)
        return API.post(this.apiName, this.path, myInit);
    }
    
    async get() {
        const myInit = {
            headers: {
            Authorization: `${await (await Auth.currentSession())
                .getIdToken()
                .getJwtToken()}`,
            }
        };
        return API.get(this.apiName, this.path , myInit);
    }

    async createSandbox() {
        const body = { plan : 'Sandbox' };
        const myInit = {
            headers: {
            Authorization: `${await (await Auth.currentSession())
                .getIdToken()
                .getJwtToken()}`,
            },
            body
        };
        return API.post(this.apiName, this.path,  myInit)
    }

    async deleteSandbox() {
        const body = { plan : 'Sandbox' };
        const myInit = {
            headers: {
            Authorization: `${await (await Auth.currentSession())
                .getIdToken()
                .getJwtToken()}`,
            },
            body
        };
        return API.del(this.apiName, this.path,  myInit)
    }

    async getChannels() {
        const myInit = {
            headers: {
            Authorization: `${await (await Auth.currentSession())
                .getIdToken()
                .getJwtToken()}`,
            }
        };
        return API.get(this.apiName, '/channel',  myInit)

    }
}

export default new ProductService();