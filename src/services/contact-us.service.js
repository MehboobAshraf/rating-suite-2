import axios from 'axios';
import { baseUrl } from '../configs/config';

class ContactUsService {
  axiosInstance = axios.create({ baseURL: baseUrl });

  async create(body) {
    const response = await this.axiosInstance.post('/contact', body, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response;
  }
}

export default new ContactUsService();
