import axios from 'axios';
class PaymentService {
  BaseUrl = 'https://my-test-stripe-server.herokuapp.com';

  async getPaymentHistory() {
    return await axios.get(`${this.BaseUrl}/stripe`);
  }

  async createPayment(amount, id) {
    return await axios.post(`${this.BaseUrl}/stripe/charge`, {
      amount,
      id
    });
  }
}

export default new PaymentService();
