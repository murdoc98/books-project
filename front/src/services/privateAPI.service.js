
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
  async deleteBTR(book) {
    const response = await this.axios.delete(`/bookToRead/${book._id}`);
    return response.data;
  }
  async postBR(book) {
    console.log(book);
    throw Error('Not implemented yet');
  }
}