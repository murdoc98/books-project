
import authAxios from '../authAxios';
export default class PrivateAPI {
  constructor() {
    this.axios = authAxios();
  }

  async getCurrentUser() {
    const response = await this.axios.get('/currentUser');
    return response.data;
  }
  async postBTR(book) {
    console.log(book);
    const response = await this.axios.post('/bookToRead', book);
    return response.data;
  }
}